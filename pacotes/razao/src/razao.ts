// O livro-razão: contas, lançamentos que somam zero, saldo cacheado e reconciliação.
// Regras da arquitetura, seção 4.2 e seção 8.1: uma transação por operação de valor, travas em ordem
// crescente de id, lançamentos com soma zero por unidade e restrições do banco como última defesa.
import type { Sql, Tx } from './banco.ts';

export type TipoConta = 'jogador' | 'transito' | 'fonte' | 'dreno';

export interface ChaveConta {
  tipo: TipoConta;
  contaId: bigint | null;
  nome: string;
  unidade: string;
}

export interface Lancamento {
  contaRazaoId: bigint;
  unidade: string;
  quantidade: bigint;
}

/** Erro de regra de negócio: vira resposta HTTP com código e motivo, e fica guardado na idempotência. */
export class ErroNegocio extends Error {
  readonly status: number;
  readonly codigo: string;
  constructor(status: number, codigo: string, mensagem: string) {
    super(mensagem);
    this.status = status;
    this.codigo = codigo;
  }
}

const TEM_SALDO: ReadonlySet<TipoConta> = new Set(['jogador', 'transito']);

/** Acha (ou cria) a conta do razão. Contas de jogador e de trânsito nascem com saldo zero cacheado. */
export async function contaRazao(tx: Tx | Sql, c: ChaveConta): Promise<bigint> {
  const donoId = c.contaId === null ? null : c.contaId.toString();
  const achada = await tx<{ id: string }[]>`
    select id from conta_razao
    where tipo = ${c.tipo} and coalesce(conta_id, 0) = coalesce(${donoId}::bigint, 0)
      and nome = ${c.nome} and unidade = ${c.unidade}`;
  if (achada[0]) return BigInt(achada[0].id);
  const criada = await tx<{ id: string }[]>`
    insert into conta_razao (tipo, conta_id, nome, unidade)
    values (${c.tipo}, ${donoId}, ${c.nome}, ${c.unidade})
    on conflict do nothing
    returning id`;
  const id = criada[0]
    ? BigInt(criada[0].id)
    : BigInt(
        (await tx<{ id: string }[]>`
          select id from conta_razao
          where tipo = ${c.tipo} and coalesce(conta_id, 0) = coalesce(${donoId}::bigint, 0)
            and nome = ${c.nome} and unidade = ${c.unidade}`)[0]!.id,
      );
  if (TEM_SALDO.has(c.tipo)) {
    await tx`insert into saldo (conta_razao_id) values (${id.toString()}) on conflict do nothing`;
  }
  return id;
}

/** Trava os saldos em ordem crescente de id (evita impasse) e devolve o valor de cada um. */
export async function travarSaldos(tx: Tx, ids: bigint[]): Promise<Map<bigint, bigint>> {
  const unicos = [...new Set(ids)].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  const linhas = await tx<{ conta_razao_id: string; quantidade: string }[]>`
    select conta_razao_id, quantidade from saldo
    where conta_razao_id in ${tx(unicos.map(String))}
    order by conta_razao_id
    for update`;
  return new Map(linhas.map((l) => [BigInt(l.conta_razao_id), BigInt(l.quantidade)]));
}

/**
 * Grava uma transação: os lançamentos (soma zero por unidade) e a atualização dos saldos cacheados.
 * Quem chama já travou os saldos das contas de jogador e de trânsito envolvidas.
 */
export async function lancar(
  tx: Tx,
  t: { tipo: string; contaId: bigint | null; versaoConfig: string; lancamentos: Lancamento[] },
): Promise<string> {
  const somas = new Map<string, bigint>();
  for (const l of t.lancamentos) {
    if (l.quantidade === 0n) throw new Error('lançamento com quantidade zero');
    somas.set(l.unidade, (somas.get(l.unidade) ?? 0n) + l.quantidade);
  }
  for (const [unidade, soma] of somas) {
    if (soma !== 0n) throw new Error(`transação desbalanceada na unidade ${unidade} (soma ${soma})`);
  }
  const [trans] = await tx<{ id: string }[]>`
    insert into transacao (tipo, conta_id, versao_config)
    values (${t.tipo}, ${t.contaId === null ? null : t.contaId.toString()}, ${t.versaoConfig})
    returning id`;
  const transacaoId = trans!.id;
  await tx`
    insert into lancamento ${tx(
      t.lancamentos.map((l) => ({
        transacao_id: transacaoId,
        conta_razao_id: l.contaRazaoId.toString(),
        unidade: l.unidade,
        quantidade: l.quantidade.toString(),
      })),
    )}`;
  // Saldo cacheado: só existe para jogador e trânsito; o update simplesmente não acha as fontes e os drenos.
  for (const l of t.lancamentos) {
    await tx`
      update saldo set quantidade = quantidade + ${l.quantidade.toString()}::bigint, atualizado_em = now()
      where conta_razao_id = ${l.contaRazaoId.toString()}`;
  }
  return transacaoId;
}

export interface Diferenca {
  contaRazaoId: string;
  saldo: string;
  somaLancamentos: string;
}

/**
 * Reconciliação (arquitetura, seção 4.2, invariante 4): o saldo cacheado bate com a soma dos lançamentos,
 * e cada unidade soma zero no razão inteiro.
 */
export async function reconciliar(sql: Sql | Tx): Promise<{ ok: boolean; diferencas: Diferenca[]; unidadesDesbalanceadas: { unidade: string; soma: string }[] }> {
  const diferencas = await sql<{ conta_razao_id: string; saldo: string; soma: string }[]>`
    select s.conta_razao_id, s.quantidade as saldo, coalesce(sum(l.quantidade), 0) as soma
    from saldo s
    left join lancamento l on l.conta_razao_id = s.conta_razao_id
    group by s.conta_razao_id, s.quantidade
    having s.quantidade <> coalesce(sum(l.quantidade), 0)
    order by s.conta_razao_id`;
  const unidades = await sql<{ unidade: string; soma: string }[]>`
    select unidade, sum(quantidade) as soma from lancamento group by unidade having sum(quantidade) <> 0`;
  return {
    ok: diferencas.length === 0 && unidades.length === 0,
    diferencas: diferencas.map((d) => ({ contaRazaoId: d.conta_razao_id, saldo: d.saldo, somaLancamentos: d.soma })),
    unidadesDesbalanceadas: unidades.map((u) => ({ unidade: u.unidade, soma: u.soma })),
  };
}

/** Saldo de uma conta do razão a partir dos lançamentos (vale também para fontes e drenos). */
export async function somaDaConta(sql: Sql | Tx, contaRazaoId: bigint): Promise<bigint> {
  const [r] = await sql<{ soma: string }[]>`
    select coalesce(sum(quantidade), 0) as soma from lancamento where conta_razao_id = ${contaRazaoId.toString()}`;
  return BigInt(r!.soma);
}
