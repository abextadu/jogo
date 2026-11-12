// Cadastro, login, sessões e recuperação (M1). Sem verificação de idade (checkpoint 3): o cadastro pede
// e-mail, senha e o aceite dos termos (que dizem que o jogo é 18+). A chave de recuperação é mostrada uma vez.
import type { Sql, Tx } from '../../razao/src/banco.ts';
import { ErroNegocio, contaRazao } from '../../razao/src/razao.ts';
import type { Config } from '../../config/src/index.ts';
import { carteiraDe } from '../../economia/src/ouro.ts';
import {
  hashSenha, conferirSenha, HASH_FALSO, sha256, novoTokenSessao, novaChaveRecuperacao, normalizarChave,
} from './segredos.ts';

export interface Sessao {
  token: string;
  expiraEm: Date;
}

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function emailValido(v: unknown): string {
  const email = typeof v === 'string' ? v.trim().toLowerCase() : '';
  if (!EMAIL.test(email) || email.length > 254) throw new ErroNegocio(400, 'email_invalido', 'Informe um e-mail válido.');
  return email;
}

function senhaValida(cfg: Config, v: unknown): string {
  const senha = typeof v === 'string' ? v : '';
  const minimo = cfg.personagem.cadastro.senha_minima;
  if (senha.length < minimo || senha.length > 200) {
    throw new ErroNegocio(400, 'senha_curta', `A senha precisa ter pelo menos ${minimo} caracteres.`);
  }
  return senha;
}

async function abrirSessao(tx: Tx | Sql, cfg: Config, contaId: bigint): Promise<Sessao> {
  const token = novoTokenSessao();
  const expiraEm = new Date(Date.now() + cfg.personagem.cadastro.sessao_dias * 86_400_000);
  await tx`insert into sessao (token_hash, conta_id, expira_em) values (${sha256(token)}, ${contaId.toString()}, ${expiraEm})`;
  return { token, expiraEm };
}

export async function cadastrar(sql: Sql, cfg: Config, dados: { email?: unknown; senha?: unknown; aceitoTermos?: unknown }) {
  const email = emailValido(dados.email);
  const senha = senhaValida(cfg, dados.senha);
  if (dados.aceitoTermos !== true) {
    throw new ErroNegocio(400, 'termos', 'Para criar a conta, aceite os termos de uso (o jogo é para maiores de 18).');
  }
  const senhaHash = await hashSenha(senha);
  const chave = novaChaveRecuperacao();
  try {
    return await sql.begin(async (tx) => {
      const [c] = await tx<{ id: string }[]>`
        insert into conta (nome, email, senha_hash, chave_recuperacao_hash, termos_versao, termos_aceitos_em)
        values (${email.split('@')[0]!.slice(0, 60)}, ${email}, ${senhaHash}, ${sha256(normalizarChave(chave))},
                ${cfg.personagem.cadastro.termos_versao}, now())
        returning id`;
      const contaId = BigInt(c!.id);
      await contaRazao(tx, carteiraDe(contaId));
      const sessao = await abrirSessao(tx, cfg, contaId);
      return { conta: { id: c!.id, email }, chaveRecuperacao: chave, sessao };
    });
  } catch (e) {
    if ((e as { code?: string }).code === '23505') throw new ErroNegocio(409, 'email_em_uso', 'Já existe uma conta com este e-mail.');
    throw e;
  }
}

export async function entrar(sql: Sql, cfg: Config, dados: { email?: unknown; senha?: unknown }) {
  const email = typeof dados.email === 'string' ? dados.email.trim().toLowerCase() : '';
  const senha = typeof dados.senha === 'string' ? dados.senha : '';
  const [c] = await sql<{ id: string; senha_hash: string }[]>`
    select id, senha_hash from conta where lower(email) = ${email} and senha_hash is not null`;
  const certa = await conferirSenha(senha, c?.senha_hash ?? HASH_FALSO);
  if (!c || !certa) throw new ErroNegocio(401, 'credenciais', 'E-mail ou senha incorretos.');
  const sessao = await abrirSessao(sql, cfg, BigInt(c.id));
  return { conta: { id: c.id, email }, sessao };
}

/** Com a chave de recuperação: troca a senha, encerra todas as sessões e gera uma chave nova. */
export async function recuperar(sql: Sql, cfg: Config, dados: { email?: unknown; chave?: unknown; novaSenha?: unknown }) {
  const email = typeof dados.email === 'string' ? dados.email.trim().toLowerCase() : '';
  const chave = typeof dados.chave === 'string' ? normalizarChave(dados.chave) : '';
  const senha = senhaValida(cfg, dados.novaSenha);
  const senhaHash = await hashSenha(senha);
  const novaChave = novaChaveRecuperacao();
  return sql.begin(async (tx) => {
    const [c] = await tx<{ id: string }[]>`
      select id from conta where lower(email) = ${email} and chave_recuperacao_hash = ${sha256(chave)} for update`;
    if (!c) throw new ErroNegocio(401, 'recuperacao', 'E-mail ou chave de recuperação incorretos.');
    await tx`update conta set senha_hash = ${senhaHash}, chave_recuperacao_hash = ${sha256(normalizarChave(novaChave))} where id = ${c.id}`;
    await tx`delete from sessao where conta_id = ${c.id}`;
    const sessao = await abrirSessao(tx, cfg, BigInt(c.id));
    return { conta: { id: c.id, email }, chaveRecuperacao: novaChave, sessao };
  });
}

/** Conta dona de um token de sessão válido, ou null. */
export async function contaDaSessao(sql: Sql, token: string | undefined): Promise<bigint | null> {
  if (!token) return null;
  const [s] = await sql<{ conta_id: string }[]>`
    update sessao set ultimo_uso = now()
    where token_hash = ${sha256(token)} and expira_em > now()
    returning conta_id`;
  return s ? BigInt(s.conta_id) : null;
}

export async function sair(sql: Sql, token: string | undefined): Promise<void> {
  if (token) await sql`delete from sessao where token_hash = ${sha256(token)}`;
}
