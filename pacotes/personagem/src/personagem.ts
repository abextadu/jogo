// Personagem, mochila e armazém (M1; GDD 03 §4.2).
// Mochila e armazém são contas do livro-razão, uma por item: mover é uma transação com soma zero,
// então o item nunca está em dois lugares nem some no caminho. A mochila tem casas (20) com pilhas de até 100;
// a casa é só uma forma de contar o espaço, a verdade é o saldo de cada item.
// O armazém é da conta (fica com o vendedor no Bazar de Personagens, 07 §7.3); a mochila é do personagem.
import type { Sql, Tx } from '../../razao/src/banco.ts';
import { ErroNegocio, contaRazao, lancar, travarSaldos } from '../../razao/src/razao.ts';
import type { Config, Vocacao } from '../../config/src/index.ts';

export type Local = 'mochila' | 'armazem';

export const unidadeDoItem = (itemId: string) => `bem:${itemId}`;
const nomeDoLocal = (local: Local, personagemId: bigint) => (local === 'mochila' ? `mochila:${personagemId}` : 'armazem');

export interface Personagem {
  id: string;
  nome: string;
  vocacao: Vocacao;
}

const NOME = /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ' -]*[A-Za-zÀ-ÖØ-öø-ÿ]$/;

export async function personagemAtivo(sql: Sql | Tx, contaId: bigint): Promise<Personagem | null> {
  const [p] = await sql<{ id: string; nome: string; vocacao: Vocacao }[]>`
    select id, nome, vocacao from personagem where conta_id = ${contaId.toString()} and estado = 'ativo'`;
  return p ?? null;
}

export async function criarPersonagem(sql: Sql, cfg: Config, contaId: bigint, dados: { nome?: unknown; vocacao?: unknown }) {
  const nome = typeof dados.nome === 'string' ? dados.nome.trim().replace(/\s+/g, ' ') : '';
  const { minimo, maximo } = cfg.personagem.nome;
  if (nome.length < minimo || nome.length > maximo || !NOME.test(nome)) {
    throw new ErroNegocio(400, 'nome_invalido', `O nome precisa ter de ${minimo} a ${maximo} letras (espaço, hífen e apóstrofo valem no meio).`);
  }
  const vocacao = dados.vocacao as Vocacao;
  if (!cfg.personagem.vocacoes_disponiveis.includes(vocacao)) {
    throw new ErroNegocio(400, 'vocacao_indisponivel', `Escolha uma destas vocações: ${cfg.personagem.vocacoes_disponiveis.join(', ')}.`);
  }
  try {
    const [p] = await sql<{ id: string }[]>`
      insert into personagem (conta_id, nome, vocacao) values (${contaId.toString()}, ${nome}, ${vocacao}) returning id`;
    return { id: p!.id, nome, vocacao };
  } catch (e) {
    const erro = e as { code?: string; constraint_name?: string };
    if (erro.code === '23505' && erro.constraint_name === 'personagem_nome_unico') {
      throw new ErroNegocio(409, 'nome_em_uso', 'Já existe um personagem com este nome na Cidade.');
    }
    if (erro.code === '23505') throw new ErroNegocio(409, 'ja_tem_personagem', 'Esta conta já tem um personagem ativo.');
    throw e;
  }
}

interface LinhaItem {
  nome: string;
  unidade: string;
  quantidade: string;
}

function itemDoCatalogo(cfg: Config, itemId: string) {
  const item = cfg.itens.itens.find((i) => i.id === itemId);
  if (!item) throw new ErroNegocio(404, 'item_desconhecido', 'Item desconhecido.');
  return item;
}

const casasDe = (quantidade: bigint, pilha: number) => Number((quantidade + BigInt(pilha) - 1n) / BigInt(pilha));

/** Mochila e armazém do personagem ativo, com as casas ocupadas. */
export async function inventario(sql: Sql | Tx, cfg: Config, contaId: bigint, personagemId: bigint) {
  const linhas = await sql<LinhaItem[]>`
    select cr.nome, cr.unidade, s.quantidade
    from conta_razao cr join saldo s on s.conta_razao_id = cr.id
    where cr.tipo = 'jogador' and cr.conta_id = ${contaId.toString()}
      and cr.nome in (${nomeDoLocal('mochila', personagemId)}, 'armazem')
      and cr.unidade like 'bem:%' and s.quantidade > 0
    order by cr.unidade`;
  const pilha = cfg.personagem.mochila.pilha_maxima;
  const montar = (local: string) =>
    linhas
      .filter((l) => l.nome === local)
      .map((l) => {
        const item = itemDoCatalogo(cfg, l.unidade.slice(4));
        return { id: item.id, nome: item.nome, tipo: item.tipo, tier: item.tier, quantidade: l.quantidade, casas: casasDe(BigInt(l.quantidade), pilha) };
      });
  const mochila = montar(nomeDoLocal('mochila', personagemId));
  return {
    mochila: {
      casas: cfg.personagem.mochila.casas,
      casasUsadas: mochila.reduce((s, i) => s + i.casas, 0),
      pilhaMaxima: pilha,
      itens: mochila,
    },
    armazem: { itens: montar('armazem') },
  };
}

/**
 * Move um item entre a mochila e o armazém, numa transação do livro-razão.
 * Trava o personagem para que dois pedidos ao mesmo tempo não passem juntos do limite de casas.
 */
export async function moverItem(
  tx: Tx, cfg: Config, contaId: bigint,
  pedido: { item: string; quantidade: bigint; de: Local },
) {
  const [p] = await tx<{ id: string }[]>`
    select id from personagem where conta_id = ${contaId.toString()} and estado = 'ativo' for update`;
  if (!p) throw new ErroNegocio(409, 'sem_personagem', 'Crie um personagem primeiro.');
  const personagemId = BigInt(p.id);
  itemDoCatalogo(cfg, pedido.item);
  const unidade = unidadeDoItem(pedido.item);
  const para: Local = pedido.de === 'mochila' ? 'armazem' : 'mochila';
  const origem = await contaRazao(tx, { tipo: 'jogador', contaId, nome: nomeDoLocal(pedido.de, personagemId), unidade });
  const destino = await contaRazao(tx, { tipo: 'jogador', contaId, nome: nomeDoLocal(para, personagemId), unidade });
  const saldos = await travarSaldos(tx, [origem, destino]);
  const tem = saldos.get(origem) ?? 0n;
  if (tem < pedido.quantidade) {
    throw new ErroNegocio(409, 'quantidade_indisponivel', `Só há ${tem} deste item ${pedido.de === 'mochila' ? 'na mochila' : 'no armazém'}.`);
  }
  if (para === 'mochila') {
    const atual = await inventario(tx, cfg, contaId, personagemId);
    const pilha = cfg.personagem.mochila.pilha_maxima;
    const doItem = BigInt(atual.mochila.itens.find((i) => i.id === pedido.item)?.quantidade ?? '0');
    const depois = atual.mochila.casasUsadas - casasDe(doItem, pilha) + casasDe(doItem + pedido.quantidade, pilha);
    if (depois > atual.mochila.casas) {
      throw new ErroNegocio(409, 'mochila_cheia', `A mochila não tem espaço: precisaria de ${depois} casas e tem ${atual.mochila.casas}.`);
    }
  }
  await lancar(tx, {
    tipo: 'mover_item',
    contaId,
    versaoConfig: cfg.versao,
    lancamentos: [
      { contaRazaoId: origem, unidade, quantidade: -pedido.quantidade },
      { contaRazaoId: destino, unidade, quantidade: pedido.quantidade },
    ],
  });
  return inventario(tx, cfg, contaId, personagemId);
}

/** Só com JOGO_DEV=1: põe os itens de teste da config no armazém, vindos da fonte "dev". */
export async function darItensDeTeste(tx: Tx, cfg: Config, contaId: bigint) {
  const p = await personagemAtivo(tx, contaId);
  if (!p) throw new ErroNegocio(409, 'sem_personagem', 'Crie um personagem primeiro.');
  const lancamentos = [];
  const travar: bigint[] = [];
  for (const [itemId, qtd] of Object.entries(cfg.itens.itens_de_teste)) {
    const unidade = unidadeDoItem(itemId);
    const fonte = await contaRazao(tx, { tipo: 'fonte', contaId: null, nome: 'dev', unidade });
    const armazem = await contaRazao(tx, { tipo: 'jogador', contaId, nome: 'armazem', unidade });
    travar.push(armazem);
    lancamentos.push({ contaRazaoId: fonte, unidade, quantidade: -BigInt(qtd) }, { contaRazaoId: armazem, unidade, quantidade: BigInt(qtd) });
  }
  await travarSaldos(tx, travar);
  await lancar(tx, { tipo: 'itens_de_teste', contaId, versaoConfig: cfg.versao, lancamentos });
  return inventario(tx, cfg, contaId, BigInt(p.id));
}
