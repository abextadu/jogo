// Idempotência (arquitetura, seção 5; estudo técnico, seção 2.4): todo comando que move valor leva uma chave.
// A primeira execução guarda a resposta, inclusive a de erro de negócio; as repetições recebem a mesma
// resposta sem efeito novo. Mesma chave com parâmetros diferentes é recusada.
import { createHash } from 'node:crypto';
import type { Sql, Tx } from './banco.ts';
import { ErroNegocio } from './razao.ts';

export interface Resposta {
  status: number;
  corpo: unknown;
}

const REPETIVEIS = new Set(['40001', '40P01']); // erro de serialização e impasse

function hashDe(parametros: unknown): string {
  const ordenar = (v: unknown): unknown =>
    v && typeof v === 'object' && !Array.isArray(v)
      ? Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, ordenar((v as Record<string, unknown>)[k])]))
      : v;
  return createHash('sha256').update(JSON.stringify(ordenar(parametros))).digest('hex');
}

function esperar(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Executa `fn` uma vez por (conta, chave), numa transação do banco.
 * Pedidos simultâneos com a mesma chave esperam a trava da linha de idempotência e recebem a resposta guardada.
 * Em erro de serialização ou impasse, repete tudo com espera crescente e aleatória.
 */
export async function comIdempotencia(
  sql: Sql,
  p: { contaId: bigint; chave: string; rota: string; parametros: unknown },
  fn: (tx: Tx) => Promise<Resposta>,
): Promise<Resposta> {
  if (p.chave.length < 8 || p.chave.length > 255) {
    return { status: 400, corpo: { erro: 'chave_invalida', mensagem: 'Idempotency-Key precisa ter de 8 a 255 caracteres.' } };
  }
  const hash = hashDe({ rota: p.rota, parametros: p.parametros });
  for (let tentativa = 0; ; tentativa++) {
    try {
      return await sql.begin(async (tx) => {
        await tx`
          insert into idempotencia (conta_id, chave, rota, hash_parametros)
          values (${p.contaId.toString()}, ${p.chave}, ${p.rota}, ${hash})
          on conflict do nothing`;
        const [linha] = await tx<{ hash_parametros: string; status_http: number | null; resposta: unknown }[]>`
          select hash_parametros, status_http, resposta from idempotencia
          where conta_id = ${p.contaId.toString()} and chave = ${p.chave}
          for update`;
        if (linha!.hash_parametros !== hash) {
          return { status: 422, corpo: { erro: 'chave_reutilizada', mensagem: 'Esta Idempotency-Key já foi usada com outros parâmetros.' } };
        }
        if (linha!.status_http !== null) return { status: linha!.status_http, corpo: linha!.resposta };
        let resposta: Resposta;
        try {
          resposta = await tx.savepoint(async (sp) => fn(sp));
        } catch (e) {
          if (!(e instanceof ErroNegocio)) throw e;
          resposta = { status: e.status, corpo: { erro: e.codigo, mensagem: e.message } };
        }
        await tx`
          update idempotencia set status_http = ${resposta.status}, resposta = ${tx.json(resposta.corpo as never)}
          where conta_id = ${p.contaId.toString()} and chave = ${p.chave}`;
        return resposta;
      });
    } catch (e) {
      const codigo = (e as { code?: string }).code;
      if (codigo && REPETIVEIS.has(codigo) && tentativa < 6) {
        await esperar(Math.random() * 20 * 2 ** tentativa);
        continue;
      }
      throw e;
    }
  }
}
