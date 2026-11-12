// Servidor HTTP do jogo (Fastify).
// M0: transferência de ouro com idempotência e extrato. M1: cadastro, login por sessão (cookie HttpOnly),
// recuperação, personagem, mochila e armazém. Com JOGO_DEV=1, as rotas de desenvolvimento (/v1/dev/...).
import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import cookie from '@fastify/cookie';
import type { Sql } from '../../../pacotes/razao/src/banco.ts';
import { comIdempotencia } from '../../../pacotes/razao/src/idempotencia.ts';
import { reconciliar, ErroNegocio } from '../../../pacotes/razao/src/razao.ts';
import type { Config } from '../../../pacotes/config/src/index.ts';
import {
  criarContaTeste, creditarDev, transferirOuro, extrato, quantidadeValida, contaExiste, ouroDestruidoNaTroca,
} from '../../../pacotes/economia/src/ouro.ts';
import { cadastrar, entrar, recuperar, contaDaSessao, sair, type Sessao } from '../../../pacotes/contas/src/contas.ts';
import {
  personagemAtivo, criarPersonagem, inventario, moverItem, darItensDeTeste, type Local,
} from '../../../pacotes/personagem/src/personagem.ts';

export interface OpcoesApp {
  sql: Sql;
  config: Config;
  dev: boolean;
  log?: boolean;
  /** Cookie com o atributo Secure (ligar quando houver HTTPS). */
  cookieSeguro?: boolean;
}

export const COOKIE_SESSAO = 'sessao';

function chaveDe(req: FastifyRequest): string {
  const chave = req.headers['idempotency-key'];
  if (typeof chave !== 'string') {
    throw new ErroNegocio(400, 'sem_chave', 'Todo comando que move valor precisa do cabeçalho Idempotency-Key.');
  }
  return chave;
}

/**
 * Limite simples de tentativas (em memória, por processo). Por IP é folgado, porque lan houses e operadoras
 * de celular põem muita gente atrás do mesmo IP (CGNAT); por e-mail é apertado, contra adivinhar senha.
 */
function limitador(maximo: number, janelaMs: number) {
  const tentativas = new Map<string, number[]>();
  return (chave: string) => {
    const agora = Date.now();
    const recentes = (tentativas.get(chave) ?? []).filter((t) => agora - t < janelaMs);
    recentes.push(agora);
    tentativas.set(chave, recentes);
    if (recentes.length > maximo) throw new ErroNegocio(429, 'muitas_tentativas', 'Muitas tentativas. Espere alguns minutos.');
  };
}

export function construirApp(op: OpcoesApp): FastifyInstance {
  const { sql, config } = op;
  const app = Fastify({ logger: op.log ?? false });
  app.register(cookie);
  const limitarPorIp = limitador(100, 10 * 60_000);
  const limitarPorEmail = limitador(10, 10 * 60_000);
  const emailDo = (req: FastifyRequest) => String(((req.body ?? {}) as { email?: unknown }).email ?? '').trim().toLowerCase();

  app.setErrorHandler((erro, _req, resp) => {
    if (erro instanceof ErroNegocio) return resp.status(erro.status).send({ erro: erro.codigo, mensagem: erro.message });
    const e = erro as { statusCode?: number; message: string };
    if (e.statusCode && e.statusCode < 500) return resp.status(e.statusCode).send({ erro: 'pedido_invalido', mensagem: e.message });
    app.log.error(erro);
    return resp.status(500).send({ erro: 'interno', mensagem: 'Erro interno.' });
  });

  const gravarSessao = (resp: FastifyReply, s: Sessao) =>
    resp.setCookie(COOKIE_SESSAO, s.token, {
      httpOnly: true, sameSite: 'lax', secure: op.cookieSeguro ?? false, path: '/', expires: s.expiraEm,
    });

  /** A conta de quem pede: a da sessão; nas rotas de desenvolvimento, também o cabeçalho X-Conta-Teste. */
  async function contaDe(req: FastifyRequest): Promise<bigint> {
    const daSessao = await contaDaSessao(sql, req.cookies[COOKIE_SESSAO]);
    if (daSessao !== null) return daSessao;
    const teste = req.headers['x-conta-teste'];
    if (op.dev && typeof teste === 'string' && /^[1-9][0-9]{0,17}$/.test(teste)) return BigInt(teste);
    throw new ErroNegocio(401, 'sem_sessao', 'Entre na sua conta.');
  }

  app.get('/v1/saude', async () => ({ ok: true, versaoConfig: config.versao, dev: op.dev }));

  // ——— Conta ———
  app.post('/v1/conta/cadastro', async (req, resp) => {
    limitarPorIp(req.ip);
    const r = await cadastrar(sql, config, (req.body ?? {}) as Record<string, unknown>);
    gravarSessao(resp, r.sessao);
    return resp.status(201).send({ conta: r.conta, chaveRecuperacao: r.chaveRecuperacao });
  });

  app.post('/v1/conta/entrar', async (req, resp) => {
    limitarPorIp(req.ip);
    limitarPorEmail(emailDo(req));
    const r = await entrar(sql, config, (req.body ?? {}) as Record<string, unknown>);
    gravarSessao(resp, r.sessao);
    return { conta: r.conta };
  });

  app.post('/v1/conta/recuperar', async (req, resp) => {
    limitarPorIp(req.ip);
    limitarPorEmail(emailDo(req));
    const r = await recuperar(sql, config, (req.body ?? {}) as Record<string, unknown>);
    gravarSessao(resp, r.sessao);
    return { conta: r.conta, chaveRecuperacao: r.chaveRecuperacao };
  });

  app.post('/v1/conta/sair', async (req, resp) => {
    await sair(sql, req.cookies[COOKIE_SESSAO]);
    resp.clearCookie(COOKIE_SESSAO, { path: '/' });
    return { ok: true };
  });

  app.get('/v1/eu', async (req) => {
    const contaId = await contaDe(req);
    const [c] = await sql<{ email: string | null }[]>`select email from conta where id = ${contaId.toString()}`;
    return {
      conta: { id: contaId.toString(), email: c?.email ?? null },
      personagem: await personagemAtivo(sql, contaId),
      vocacoesDisponiveis: config.personagem.vocacoes_disponiveis,
      dev: op.dev,
    };
  });

  // ——— Personagem, mochila e armazém ———
  app.post('/v1/personagem', async (req, resp) => {
    const contaId = await contaDe(req);
    return resp.status(201).send(await criarPersonagem(sql, config, contaId, (req.body ?? {}) as Record<string, unknown>));
  });

  app.get('/v1/personagem/inventario', async (req) => {
    const contaId = await contaDe(req);
    const p = await personagemAtivo(sql, contaId);
    if (!p) throw new ErroNegocio(409, 'sem_personagem', 'Crie um personagem primeiro.');
    return inventario(sql, config, contaId, BigInt(p.id));
  });

  app.post('/v1/comandos/mover-item', async (req, resp) => {
    const contaId = await contaDe(req);
    const chave = chaveDe(req);
    const corpo = (req.body ?? {}) as { item?: unknown; quantidade?: unknown; de?: unknown };
    const parametros = { item: String(corpo.item ?? ''), quantidade: String(corpo.quantidade ?? ''), de: String(corpo.de ?? '') };
    const r = await comIdempotencia(sql, { contaId, chave, rota: 'mover-item', parametros }, async (tx) => {
      if (parametros.de !== 'mochila' && parametros.de !== 'armazem') {
        throw new ErroNegocio(400, 'local_invalido', 'Diga de onde sai o item: "mochila" ou "armazem".');
      }
      const quantidade = quantidadeValida(parametros.quantidade);
      return { status: 200, corpo: await moverItem(tx, config, contaId, { item: parametros.item, quantidade, de: parametros.de as Local }) };
    });
    return resp.status(r.status).send(r.corpo);
  });

  // ——— Ouro ———
  // Presente de ouro: imediato, sem freio (checkpoint 3); quem recebe paga a taxa da Troca.
  app.post('/v1/comandos/transferir-ouro', async (req, resp) => {
    const de = await contaDe(req);
    const chave = chaveDe(req);
    const corpo = (req.body ?? {}) as { para?: unknown; quantidade?: unknown };
    const parametros = { para: String(corpo.para ?? ''), quantidade: String(corpo.quantidade ?? '') };
    const r = await comIdempotencia(sql, { contaId: de, chave, rota: 'transferir-ouro', parametros }, async (tx) => {
      if (!(await contaExiste(tx, de))) throw new ErroNegocio(401, 'conta_inexistente', 'A conta de origem não existe.');
      if (!/^[1-9][0-9]{0,17}$/.test(parametros.para)) {
        throw new ErroNegocio(400, 'destino_invalido', 'Informe a conta de destino em "para".');
      }
      const quantidade = quantidadeValida(parametros.quantidade);
      return { status: 201, corpo: await transferirOuro(tx, config, de, BigInt(parametros.para), quantidade) };
    });
    return resp.status(r.status).send(r.corpo);
  });

  app.get('/v1/contas/:id/extrato', async (req) => {
    const texto = (req.params as { id: string }).id;
    if (!/^[1-9][0-9]{0,17}$/.test(texto)) throw new ErroNegocio(400, 'conta_invalida', 'Conta inválida.');
    const id = BigInt(texto);
    if (!op.dev && (await contaDe(req)) !== id) throw new ErroNegocio(403, 'proibido', 'Só o dono vê o extrato.');
    if (!(await contaExiste(sql, id))) throw new ErroNegocio(404, 'conta_inexistente', 'Conta não encontrada.');
    return extrato(sql, id);
  });

  // ——— Desenvolvimento ———
  if (op.dev) {
    app.post('/v1/dev/contas', async (req, resp) => {
      const nome = String(((req.body ?? {}) as { nome?: unknown }).nome ?? '').trim();
      if (!nome || nome.length > 60) throw new ErroNegocio(400, 'nome_invalido', 'Dê um nome de 1 a 60 caracteres.');
      return resp.status(201).send(await criarContaTeste(sql, nome));
    });

    app.post('/v1/dev/creditar', async (req, resp) => {
      const chave = chaveDe(req);
      const corpo = (req.body ?? {}) as { conta?: unknown; quantidade?: unknown };
      const parametros = { conta: String(corpo.conta ?? ''), quantidade: String(corpo.quantidade ?? '') };
      // A idempotência do crédito usa a conta 0 (a "conta do desenvolvedor").
      const r = await comIdempotencia(sql, { contaId: 0n, chave, rota: 'dev-creditar', parametros }, async (tx) => {
        if (!/^[1-9][0-9]{0,17}$/.test(parametros.conta)) throw new ErroNegocio(400, 'conta_invalida', 'Conta inválida.');
        return { status: 201, corpo: await creditarDev(tx, config, BigInt(parametros.conta), quantidadeValida(parametros.quantidade)) };
      });
      return resp.status(r.status).send(r.corpo);
    });

    app.post('/v1/dev/itens-de-teste', async (req, resp) => {
      const contaId = await contaDe(req);
      const r = await comIdempotencia(sql, { contaId, chave: chaveDe(req), rota: 'dev-itens', parametros: {} }, async (tx) => ({
        status: 200, corpo: await darItensDeTeste(tx, config, contaId),
      }));
      return resp.status(r.status).send(r.corpo);
    });

    app.get('/v1/dev/reconciliar', async () => ({
      ...(await reconciliar(sql)),
      ouroDestruidoNaTroca: (await ouroDestruidoNaTroca(sql)).toString(),
    }));
  }

  return app;
}
