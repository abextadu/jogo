// Aplica as migrações SQL de pacotes/razao/migracoes em ordem, uma vez cada.
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Sql } from './banco.ts';

const PASTA = join(dirname(fileURLToPath(import.meta.url)), '..', 'migracoes');

export async function migrar(sql: Sql): Promise<string[]> {
  await sql`create table if not exists migracao (nome text primary key, aplicada_em timestamptz not null default now())`;
  const feitas = new Set((await sql<{ nome: string }[]>`select nome from migracao`).map((m) => m.nome));
  const arquivos = readdirSync(PASTA).filter((f) => f.endsWith('.sql')).sort();
  const aplicadas: string[] = [];
  for (const arquivo of arquivos) {
    if (feitas.has(arquivo)) continue;
    const texto = readFileSync(join(PASTA, arquivo), 'utf8');
    await sql.begin(async (tx) => {
      await tx.unsafe(texto);
      await tx`insert into migracao (nome) values (${arquivo})`;
    });
    aplicadas.push(arquivo);
  }
  return aplicadas;
}

/** Só para testes: apaga tudo e recria o esquema do zero. */
export async function recriarEsquema(sql: Sql): Promise<void> {
  await sql.unsafe('drop schema public cascade; create schema public;');
  await migrar(sql);
}
