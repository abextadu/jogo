// Servidor HTTP do jogo (Fastify). No M0: transferência de ouro com idempotência, extrato e,
// com JOGO_DEV=1, as rotas de desenvolvimento (contas de teste, crédito e reconciliação).
// O cadastro de verdade entra no M1; até lá, a conta de quem pede vem do cabeçalho X-Conta-Teste.
import Fastify, { type FastifyInstance, type FastifyRequest } from 'fastify';
import type { Sql } from '../../../pacotes/razao/src/banco.ts';
import { comIdempotencia } from '../../../pacotes/razao/src/idempotencia.ts';
import { reconciliar, ErroNegocio } from '../../../pacotes/razao/src/razao.ts';
import type { Config } from '../../../pacotes/config/src/index.ts';
import {
  criarContaTeste, creditarDev, transferirOuro, extrato, quantidadeValida, contaExiste, ouroDestruidoNaTroca,
} from '../../../pacotes/economia/src/ouro.ts';

export interface OpcoesApp {
  sql: Sql;
  config: Config;
  dev: boolean;
  log?: boolean;
}

function idDaConta(texto: unknown): bigint {
  if (typeof texto !== 'string' || !/^[1-9][0-9]{0,17}$/.test(texto)) {
    throw new ErroNegocio(401, 'sem_conta', 'Informe a conta no cabeçalho X-Conta-Teste (o login entra no M1).');
  }
  return BigInt(texto);
}

function chaveDe(req: FastifyRequest): string {
  const chave = req.headers['idempotency-key'];
  if (typeof chave !== 'string') {
    throw new ErroNegocio(400, 'sem_chave', 'Todo comando que move valor precisa do cabeçalho Idempotency-Key.');
  }
  return chave;
}

export function construirApp(op: OpcoesApp): FastifyInstance {
  const { sql, config } = op;
  const app = Fastify({ logger: op.log ?? false });

  app.setErrorHandler((erro, _req, resp) => {
    if (erro instanceof ErroNegocio) return resp.status(erro.status).send({ erro: erro.codigo, mensagem: erro.message });
    app.log.error(erro);
    return resp.status(500).send({ erro: 'interno', mensagem: 'Erro interno.' });
  });

  app.get('/v1/saude', async () => ({ ok: true, versaoConfig: config.versao }));

  // Presente de ouro: imediato, sem freio (checkpoint 3); quem recebe paga a taxa da Troca.
  app.post('/v1/comandos/transferir-ouro', async (req, resp) => {
    const de = idDaConta(req.headers['x-conta-teste']);
    const chave = chaveDe(req);
    const corpo = (req.body ?? {}) as { para?: unknown; quantidade?: unknown };
    const parametros = { para: String(corpo.para ?? ''), quantidade: String(corpo.quantidade ?? '') };
    const r = await comIdempotencia(sql, { contaId: de, chave, rota: 'transferir-ouro', parametros }, async (tx) => {
      if (!(await contaExiste(tx, de))) throw new ErroNegocio(401, 'conta_inexistente', 'A conta de origem não existe.');
      if (!/^[1-9][0-9]{0,17}$/.test(parametros.para)) {
        throw new ErroNegocio(400, 'destino_invalido', 'Informe a conta de destino em "para".');
      }
      const para = BigInt(parametros.para);
      const quantidade = quantidadeValida(parametros.quantidade);
      return { status: 201, corpo: await transferirOuro(tx, config, de, para, quantidade) };
    });
    return resp.status(r.status).send(r.corpo);
  });

  app.get('/v1/contas/:id/extrato', async (req) => {
    const id = idDaConta((req.params as { id: string }).id);
    if (!(await contaExiste(sql, id))) throw new ErroNegocio(404, 'conta_inexistente', 'Conta não encontrada.');
    return extrato(sql, id);
  });

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
        const conta = idDaConta(parametros.conta);
        return { status: 201, corpo: await creditarDev(tx, config, conta, quantidadeValida(parametros.quantidade)) };
      });
      return resp.status(r.status).send(r.corpo);
    });

    app.get('/v1/dev/reconciliar', async () => ({
      ...(await reconciliar(sql)),
      ouroDestruidoNaTroca: (await ouroDestruidoNaTroca(sql)).toString(),
    }));
  }

  return app;
}
