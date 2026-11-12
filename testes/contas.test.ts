// Cadastro, login, sessão e recuperação (M1). Sem verificação de idade: e-mail, senha e aceite dos termos.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { montarAmbiente, desmontar, cadastrarJogador, comoJogador, type Ambiente } from './ajuda.ts';
import { normalizarChave } from '../pacotes/contas/src/segredos.ts';

let amb: Ambiente;
beforeAll(async () => { amb = await montarAmbiente(); });
afterAll(async () => { await desmontar(amb); });

const cadastro = (payload: object) => amb.app.inject({ method: 'POST', url: '/v1/conta/cadastro', payload });
const entrarCom = (email: string, senha: string) => amb.app.inject({ method: 'POST', url: '/v1/conta/entrar', payload: { email, senha } });

describe('cadastro', () => {
  it('cria a conta, abre a sessão e mostra a chave de recuperação uma vez', async () => {
    const j = await cadastrarJogador(amb.app, 'ana@exemplo.com');
    expect(j.chave).toMatch(/^[0-9A-Z]{4}(-[0-9A-Z]{4}){4}$/);
    const eu = await comoJogador(amb.app, j.cookie, 'GET', '/v1/eu');
    expect(eu.json()).toMatchObject({ conta: { id: j.id, email: 'ana@exemplo.com' }, personagem: null });
    // O banco guarda só hashes: nem a senha nem a chave aparecem em claro.
    const [c] = await amb.sql<{ senha_hash: string; chave_recuperacao_hash: string }[]>`select senha_hash, chave_recuperacao_hash from conta where id = ${j.id}`;
    expect(c!.senha_hash).toMatch(/^argon2id\$/);
    expect(c!.senha_hash).not.toContain(j.senha);
    expect(c!.chave_recuperacao_hash).not.toContain(normalizarChave(j.chave));
  });

  it('não pede documento nem data de nascimento, mas exige o aceite dos termos (18+)', async () => {
    const r = await cadastro({ email: 'bia@exemplo.com', senha: 'senha-longa-123' });
    expect(r.statusCode).toBe(400);
    expect(r.json().erro).toBe('termos');
  });

  it('recusa e-mail repetido (sem diferenciar maiúsculas), e-mail inválido e senha curta', async () => {
    await cadastrarJogador(amb.app, 'caio@exemplo.com');
    expect((await cadastro({ email: 'CAIO@exemplo.com', senha: 'senha-longa-123', aceitoTermos: true })).json().erro).toBe('email_em_uso');
    expect((await cadastro({ email: 'sem-arroba', senha: 'senha-longa-123', aceitoTermos: true })).json().erro).toBe('email_invalido');
    expect((await cadastro({ email: 'davi@exemplo.com', senha: 'curta', aceitoTermos: true })).json().erro).toBe('senha_curta');
  });
});

describe('login e sessão', () => {
  it('entra com a senha certa e recusa a errada com a mesma mensagem de e-mail inexistente', async () => {
    const j = await cadastrarJogador(amb.app, 'eva@exemplo.com');
    const ok = await entrarCom('Eva@Exemplo.com', j.senha);
    expect(ok.statusCode).toBe(200);
    expect(ok.cookies.find((c) => c.name === 'sessao')?.httpOnly).toBe(true);
    const errada = await entrarCom('eva@exemplo.com', 'senha-errada-000');
    const inexistente = await entrarCom('ninguem@exemplo.com', 'qualquer-coisa-1');
    expect(errada.statusCode).toBe(401);
    expect(errada.json()).toEqual(inexistente.json());
  });

  it('sem sessão, as rotas do jogador respondem 401; depois de sair, a sessão não vale mais', async () => {
    expect((await amb.app.inject({ method: 'GET', url: '/v1/eu' })).statusCode).toBe(401);
    const j = await cadastrarJogador(amb.app, 'fabio@exemplo.com');
    await comoJogador(amb.app, j.cookie, 'POST', '/v1/conta/sair');
    expect((await comoJogador(amb.app, j.cookie, 'GET', '/v1/eu')).statusCode).toBe(401);
  });
});

describe('recuperação', () => {
  it('com a chave: troca a senha, derruba as sessões antigas e gera uma chave nova', async () => {
    const j = await cadastrarJogador(amb.app, 'gil@exemplo.com');
    const digitada = j.chave.toLowerCase().replace(/-/g, ' '); // o jogador digita como quiser
    const r = await amb.app.inject({ method: 'POST', url: '/v1/conta/recuperar', payload: { email: 'gil@exemplo.com', chave: digitada, novaSenha: 'senha-nova-456' } });
    expect(r.statusCode).toBe(200);
    expect(r.json().chaveRecuperacao).not.toBe(j.chave);
    expect((await comoJogador(amb.app, j.cookie, 'GET', '/v1/eu')).statusCode).toBe(401);
    expect((await entrarCom('gil@exemplo.com', j.senha)).statusCode).toBe(401);
    expect((await entrarCom('gil@exemplo.com', 'senha-nova-456')).statusCode).toBe(200);
    // A chave velha não serve mais.
    const denovo = await amb.app.inject({ method: 'POST', url: '/v1/conta/recuperar', payload: { email: 'gil@exemplo.com', chave: j.chave, novaSenha: 'outra-senha-789' } });
    expect(denovo.statusCode).toBe(401);
  });
});

describe('limite de tentativas', () => {
  it('depois de 10 tentativas de login no mesmo e-mail em 10 minutos, responde 429', async () => {
    await cadastrarJogador(amb.app, 'alvo@exemplo.com');
    const rs = [];
    for (let i = 0; i < 11; i++) rs.push(await entrarCom('alvo@exemplo.com', `chute-${i}-000000`));
    expect(rs.slice(0, 10).every((r) => r.statusCode === 401)).toBe(true);
    expect(rs[10]!.statusCode).toBe(429);
  });
});
