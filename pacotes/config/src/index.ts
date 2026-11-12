// Carga e validação da pasta config/ (arquitetura, seção 12): os números do jogo ficam em arquivos,
// validados por esquema; o servidor, o cliente e a simulação leem os mesmos arquivos.
// A versão é um resumo dos arquivos e vai gravada em cada transação do livro-razão.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

export const PASTA_CONFIG = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'config');

const esquemaEconomia = z.strictObject({
  taxas: z.strictObject({
    /** Taxa da Troca por lado, em pontos-base (300 = 3%). */
    troca_lado_bps: z.int().min(0).max(10_000),
    /** Taxa mínima da Troca, em ouro. */
    troca_minimo_ouro: z.int().min(0),
  }),
});

const ESQUEMAS = {
  economia: esquemaEconomia,
} as const;

export type ConfigEconomia = z.infer<typeof esquemaEconomia>;

export interface Config {
  versao: string;
  economia: ConfigEconomia;
}

/** Remove as chaves de comentário (as que começam com "_"), em qualquer nível. */
function semComentarios(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(semComentarios);
  if (v && typeof v === 'object') {
    return Object.fromEntries(
      Object.entries(v as Record<string, unknown>)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, x]) => [k, semComentarios(x)]),
    );
  }
  return v;
}

export class ErroConfig extends Error {}

/** Lê os arquivos já carregados (nome → texto) e valida. Útil para testes. */
export function validarConfig(arquivos: Record<string, string>): Config {
  const nomes = Object.keys(arquivos).sort();
  const hash = createHash('sha256');
  const saida: Record<string, unknown> = {};
  for (const nome of nomes) {
    const chave = nome.replace(/\.json$/, '');
    const esquema = ESQUEMAS[chave as keyof typeof ESQUEMAS];
    if (!esquema) throw new ErroConfig(`config/${nome}: arquivo sem esquema conhecido`);
    let dados: unknown;
    try {
      dados = JSON.parse(arquivos[nome]!);
    } catch (e) {
      throw new ErroConfig(`config/${nome}: JSON inválido (${(e as Error).message})`);
    }
    const r = esquema.safeParse(semComentarios(dados));
    if (!r.success) {
      const problemas = r.error.issues.map((i) => `${i.path.join('.') || '(raiz)'}: ${i.message}`).join('; ');
      throw new ErroConfig(`config/${nome}: ${problemas}`);
    }
    saida[chave] = r.data;
    hash.update(nome).update('\0').update(arquivos[nome]!).update('\0');
  }
  for (const chave of Object.keys(ESQUEMAS)) {
    if (!(chave in saida)) throw new ErroConfig(`config/${chave}.json está faltando`);
  }
  return { versao: hash.digest('hex').slice(0, 12), ...(saida as Omit<Config, 'versao'>) };
}

export function carregarConfig(pasta: string = PASTA_CONFIG): Config {
  const arquivos: Record<string, string> = {};
  for (const nome of readdirSync(pasta).filter((f) => f.endsWith('.json'))) {
    arquivos[nome] = readFileSync(join(pasta, nome), 'utf8');
  }
  return validarConfig(arquivos);
}
