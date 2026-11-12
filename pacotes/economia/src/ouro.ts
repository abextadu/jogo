// Operações de ouro do M0: conta de teste, crédito de desenvolvimento e transferência (presente).
// A transferência é imediata (decisão do Gabriel no checkpoint 3): nenhuma espera, retenção ou limite de saída.
// Quem recebe paga a taxa da Troca (3%, mínimo de 1 ouro), destruída numa conta de dreno.
import type { Sql, Tx } from '../../razao/src/banco.ts';
import { contaRazao, lancar, travarSaldos, ErroNegocio, somaDaConta } from '../../razao/src/razao.ts';
import type { Config } from '../../config/src/index.ts';

export const OURO = 'ouro';

export const carteiraDe = (contaId: bigint) => ({ tipo: 'jogador' as const, contaId, nome: 'carteira', unidade: OURO });
export const FONTE_DEV = { tipo: 'fonte' as const, contaId: null, nome: 'dev', unidade: OURO };
export const DRENO_TAXA_TROCA = { tipo: 'dreno' as const, contaId: null, nome: 'taxa_troca', unidade: OURO };

/** Aceita inteiro positivo como texto ou número inteiro; devolve BigInt. */
export function quantidadeValida(v: unknown): bigint {
  const texto = typeof v === 'number' && Number.isSafeInteger(v) ? String(v) : typeof v === 'string' ? v : '';
  if (!/^[1-9][0-9]{0,17}$/.test(texto)) {
    throw new ErroNegocio(400, 'quantidade_invalida', 'A quantidade precisa ser um inteiro positivo (até 18 dígitos).');
  }
  return BigInt(texto);
}

/** Taxa da Troca sobre o que se recebe: arredonda para cima, com mínimo. */
export function taxaTroca(cfg: Config, recebido: bigint): bigint {
  const { troca_lado_bps: bps, troca_minimo_ouro: minimo } = cfg.economia.taxas;
  const taxa = (recebido * BigInt(bps) + 9_999n) / 10_000n;
  return taxa < BigInt(minimo) ? BigInt(minimo) : taxa;
}

export async function criarContaTeste(sql: Sql, nome: string): Promise<{ id: string; nome: string }> {
  return sql.begin(async (tx) => {
    const [c] = await tx<{ id: string }[]>`insert into conta (nome, teste) values (${nome}, true) returning id`;
    await contaRazao(tx, carteiraDe(BigInt(c!.id)));
    return { id: c!.id, nome };
  });
}

export async function contaExiste(tx: Tx | Sql, contaId: bigint): Promise<boolean> {
  const r = await tx`select 1 from conta where id = ${contaId.toString()}`;
  return r.length > 0;
}

/** Crédito de desenvolvimento: ouro que nasce na fonte "dev". Só existe com JOGO_DEV=1. */
export async function creditarDev(tx: Tx, cfg: Config, contaId: bigint, quantidade: bigint) {
  if (!(await contaExiste(tx, contaId))) throw new ErroNegocio(404, 'conta_inexistente', 'Conta não encontrada.');
  const carteira = await contaRazao(tx, carteiraDe(contaId));
  const fonte = await contaRazao(tx, FONTE_DEV);
  await travarSaldos(tx, [carteira]);
  const transacao = await lancar(tx, {
    tipo: 'credito_dev',
    contaId,
    versaoConfig: cfg.versao,
    lancamentos: [
      { contaRazaoId: fonte, unidade: OURO, quantidade: -quantidade },
      { contaRazaoId: carteira, unidade: OURO, quantidade },
    ],
  });
  const saldos = await travarSaldos(tx, [carteira]);
  return { transacao, creditado: quantidade.toString(), saldo: saldos.get(carteira)!.toString() };
}

/** Presente de ouro de uma conta para outra, imediato. Quem recebe paga a taxa da Troca. */
export async function transferirOuro(tx: Tx, cfg: Config, de: bigint, para: bigint, quantidade: bigint) {
  if (de === para) throw new ErroNegocio(422, 'mesma_conta', 'Não dá para transferir para a própria conta.');
  if (!(await contaExiste(tx, para))) throw new ErroNegocio(404, 'conta_inexistente', 'A conta de destino não existe.');
  const origem = await contaRazao(tx, carteiraDe(de));
  const destino = await contaRazao(tx, carteiraDe(para));
  const dreno = await contaRazao(tx, DRENO_TAXA_TROCA);
  const saldos = await travarSaldos(tx, [origem, destino]);
  const disponivel = saldos.get(origem) ?? 0n;
  if (disponivel < quantidade) {
    throw new ErroNegocio(409, 'saldo_insuficiente', `Saldo insuficiente: há ${disponivel} de ouro.`);
  }
  const taxa = taxaTroca(cfg, quantidade);
  const recebido = quantidade - taxa;
  if (recebido <= 0n) throw new ErroNegocio(422, 'quantidade_pequena', 'A quantidade não cobre a taxa da Troca.');
  const transacao = await lancar(tx, {
    tipo: 'presente_ouro',
    contaId: de,
    versaoConfig: cfg.versao,
    lancamentos: [
      { contaRazaoId: origem, unidade: OURO, quantidade: -quantidade },
      { contaRazaoId: destino, unidade: OURO, quantidade: recebido },
      { contaRazaoId: dreno, unidade: OURO, quantidade: taxa },
    ],
  });
  return {
    transacao,
    enviado: quantidade.toString(),
    taxa: taxa.toString(),
    recebido: recebido.toString(),
    saldoOrigem: (disponivel - quantidade).toString(),
  };
}

export async function extrato(sql: Sql, contaId: bigint, limite = 20) {
  const carteira = await contaRazao(sql, carteiraDe(contaId));
  const [s] = await sql<{ quantidade: string }[]>`select quantidade from saldo where conta_razao_id = ${carteira.toString()}`;
  const linhas = await sql<{ quando: Date; tipo: string; quantidade: string; transacao_id: string }[]>`
    select l.criado_em as quando, t.tipo, l.quantidade, l.transacao_id
    from lancamento l join transacao t on t.id = l.transacao_id
    where l.conta_razao_id = ${carteira.toString()}
    order by l.criado_em desc, l.id desc
    limit ${limite}`;
  return {
    conta: contaId.toString(),
    saldo: s!.quantidade,
    lancamentos: linhas.map((l) => ({ quando: l.quando.toISOString(), tipo: l.tipo, quantidade: l.quantidade, transacao: l.transacao_id })),
  };
}

/** Ouro destruído pela taxa da Troca até agora (saldo do dreno, somado dos lançamentos). */
export async function ouroDestruidoNaTroca(sql: Sql): Promise<bigint> {
  return somaDaConta(sql, await contaRazao(sql, DRENO_TAXA_TROCA));
}
