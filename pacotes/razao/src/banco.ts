// Conexão com o PostgreSQL (postgres.js). Valores bigint chegam como texto e são convertidos
// para BigInt no código: ouro e Coins nunca passam por número de ponto flutuante.
import postgres from 'postgres';

export type Sql = postgres.Sql;
export type Tx = postgres.TransactionSql;

export const URL_PADRAO = 'postgres://jogo:jogo_local@localhost:5433/jogo';

export function conectar(url: string = process.env.DATABASE_URL ?? URL_PADRAO, opcoes: { max?: number } = {}): Sql {
  return postgres(url, { max: opcoes.max ?? 10, onnotice: () => {} });
}
