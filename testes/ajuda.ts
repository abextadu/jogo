// Ajudantes dos testes: banco de teste recriado do zero e o servidor montado em memória (sem rede).
import { randomUUID } from 'node:crypto';
import type { FastifyInstance } from 'fastify';
import { conectar, type Sql } from '../pacotes/razao/src/banco.ts';
import { recriarEsquema } from '../pacotes/razao/src/migrar.ts';
import { carregarConfig, type Config } from '../pacotes/config/src/index.ts';
import { construirApp } from '../apps/servidor/src/app.ts';

export const URL_TESTE = process.env.DATABASE_URL_TESTE ?? 'postgres://jogo:jogo_local@localhost:5433/jogo_teste';

export interface Ambiente {
  sql: Sql;
  app: FastifyInstance;
  config: Config;
}

export async function montarAmbiente(): Promise<Ambiente> {
  const sql = conectar(URL_TESTE, { max: 12 });
  await recriarEsquema(sql);
  const config = carregarConfig();
  const app = construirApp({ sql, config, dev: true });
  await app.ready();
  return { sql, app, config };
}

export async function desmontar(amb: Ambiente): Promise<void> {
  await amb.app.close();
  await amb.sql.end();
}

export async function novaConta(app: FastifyInstance, nome: string): Promise<string> {
  const r = await app.inject({ method: 'POST', url: '/v1/dev/contas', payload: { nome } });
  if (r.statusCode !== 201) throw new Error(`criar conta: ${r.statusCode} ${r.body}`);
  return r.json().id as string;
}

export async function creditar(app: FastifyInstance, conta: string, quantidade: string | number, chave = randomUUID()) {
  return app.inject({
    method: 'POST', url: '/v1/dev/creditar', headers: { 'idempotency-key': chave }, payload: { conta, quantidade: String(quantidade) },
  });
}

export async function transferir(app: FastifyInstance, de: string, para: string, quantidade: string | number, chave = randomUUID()) {
  return app.inject({
    method: 'POST', url: '/v1/comandos/transferir-ouro',
    headers: { 'idempotency-key': chave, 'x-conta-teste': de },
    payload: { para, quantidade: String(quantidade) },
  });
}

export async function saldoDe(app: FastifyInstance, conta: string): Promise<bigint> {
  const r = await app.inject({ method: 'GET', url: `/v1/contas/${conta}/extrato` });
  return BigInt(r.json().saldo as string);
}

export async function reconciliacao(app: FastifyInstance) {
  return (await app.inject({ method: 'GET', url: '/v1/dev/reconciliar' })).json() as {
    ok: boolean; diferencas: unknown[]; unidadesDesbalanceadas: unknown[]; ouroDestruidoNaTroca: string;
  };
}
