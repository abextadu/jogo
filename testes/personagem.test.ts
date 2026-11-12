// Personagem, mochila e armazém (M1): um personagem ativo por conta; mover item é atômico e respeita as casas.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { randomUUID } from 'node:crypto';
import { montarAmbiente, desmontar, cadastrarJogador, comoJogador, reconciliacao, type Ambiente } from './ajuda.ts';

let amb: Ambiente;
beforeAll(async () => { amb = await montarAmbiente(); });
afterAll(async () => { await desmontar(amb); });

async function jogadorComPersonagem(email: string, nome: string, vocacao = 'cavaleiro') {
  const j = await cadastrarJogador(amb.app, email);
  const r = await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome, vocacao });
  if (r.statusCode !== 201) throw new Error(r.body);
  return j;
}

const mover = (cookie: string, item: string, quantidade: number | string, de: 'mochila' | 'armazem', chave = randomUUID()) =>
  comoJogador(amb.app, cookie, 'POST', '/v1/comandos/mover-item', { item, quantidade: String(quantidade), de }, chave);

const inventario = async (cookie: string) => (await comoJogador(amb.app, cookie, 'GET', '/v1/personagem/inventario')).json();
const qtd = (lista: { id: string; quantidade: string }[], id: string) => BigInt(lista.find((i) => i.id === id)?.quantidade ?? '0');

describe('personagem', () => {
  it('cria Cavaleiro ou Mago; as outras vocações ainda não abriram no MVP', async () => {
    const j = await cadastrarJogador(amb.app, 'p1@exemplo.com');
    expect((await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'Druida Alto', vocacao: 'druida' })).json().erro).toBe('vocacao_indisponivel');
    const r = await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'Edda Martelo', vocacao: 'cavaleiro' });
    expect(r.statusCode).toBe(201);
    expect((await comoJogador(amb.app, j.cookie, 'GET', '/v1/eu')).json().personagem).toMatchObject({ nome: 'Edda Martelo', vocacao: 'cavaleiro' });
  });

  it('um personagem ativo por conta, mesmo com dois pedidos ao mesmo tempo', async () => {
    const j = await cadastrarJogador(amb.app, 'p2@exemplo.com');
    const rs = await Promise.all([
      comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'Primeiro Nome', vocacao: 'mago' }),
      comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'Segundo Nome', vocacao: 'mago' }),
    ]);
    expect(rs.map((r) => r.statusCode).sort()).toEqual([201, 409]);
    const [linha] = await amb.sql<{ n: number }[]>`select count(*)::int as n from personagem where conta_id = ${j.id}`;
    expect(linha!.n).toBe(1);
  });

  it('o nome é único na Cidade (sem diferenciar maiúsculas) e só aceita letras', async () => {
    await jogadorComPersonagem('p3@exemplo.com', 'Rurik');
    const j = await cadastrarJogador(amb.app, 'p4@exemplo.com');
    expect((await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'rurik', vocacao: 'mago' })).json().erro).toBe('nome_em_uso');
    expect((await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: 'X1', vocacao: 'mago' })).json().erro).toBe('nome_invalido');
    expect((await comoJogador(amb.app, j.cookie, 'POST', '/v1/personagem', { nome: '<script>', vocacao: 'mago' })).json().erro).toBe('nome_invalido');
  });
});

describe('mochila e armazém', () => {
  it('a mochila começa vazia, com 20 casas; os itens de teste chegam no armazém', async () => {
    const j = await jogadorComPersonagem('m1@exemplo.com', 'Brann');
    const vazio = await inventario(j.cookie);
    expect(vazio.mochila).toMatchObject({ casas: 20, casasUsadas: 0, pilhaMaxima: 100, itens: [] });
    const r = await comoJogador(amb.app, j.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    expect(r.statusCode).toBe(200);
    expect(qtd(r.json().armazem.itens, 'minerio_cobre')).toBe(250n);
  });

  it('move do armazém para a mochila e de volta; o item nunca fica nos dois lugares', async () => {
    const j = await jogadorComPersonagem('m2@exemplo.com', 'Yara');
    await comoJogador(amb.app, j.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    const ida = (await mover(j.cookie, 'minerio_cobre', 150, 'armazem')).json();
    expect(qtd(ida.mochila.itens, 'minerio_cobre')).toBe(150n);
    expect(qtd(ida.armazem.itens, 'minerio_cobre')).toBe(100n);
    expect(ida.mochila.casasUsadas).toBe(2); // 150 unidades = 2 pilhas de até 100
    const volta = (await mover(j.cookie, 'minerio_cobre', 150, 'mochila')).json();
    expect(qtd(volta.mochila.itens, 'minerio_cobre')).toBe(0n);
    expect(qtd(volta.armazem.itens, 'minerio_cobre')).toBe(250n);
    expect((await reconciliacao(amb.app)).ok).toBe(true);
  });

  it('a mochila não passa de 20 casas', async () => {
    const j = await jogadorComPersonagem('m3@exemplo.com', 'Tormund');
    // 20 pilhas de minério: 2.000 unidades
    await amb.app.inject({
      method: 'POST', url: '/v1/dev/itens-de-teste', headers: { cookie: j.cookie, 'idempotency-key': randomUUID() },
    });
    for (let i = 0; i < 7; i++) await comoJogador(amb.app, j.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    // 8 × 250 = 2.000 minérios e 8 × 120 = 960 toras no armazém
    expect((await mover(j.cookie, 'minerio_cobre', 1900, 'armazem')).statusCode).toBe(200); // 19 casas
    expect((await mover(j.cookie, 'tora_pinho', 100, 'armazem')).statusCode).toBe(200); // 20 casas
    const cheia = await mover(j.cookie, 'tora_pinho', 1, 'armazem');
    expect(cheia.json().erro).toBe('mochila_cheia');
    expect((await mover(j.cookie, 'minerio_cobre', 100, 'armazem')).json().erro).toBe('mochila_cheia');
    expect((await inventario(j.cookie)).mochila.casasUsadas).toBe(20);
  });

  it('pedidos simultâneos não estouram as casas nem duplicam o item', async () => {
    const j = await jogadorComPersonagem('m4@exemplo.com', 'Sigrun');
    for (let i = 0; i < 12; i++) await comoJogador(amb.app, j.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    // 3.000 minérios no armazém; 30 pedidos de 100 ao mesmo tempo: só 20 cabem
    const rs = await Promise.all(Array.from({ length: 30 }, () => mover(j.cookie, 'minerio_cobre', 100, 'armazem')));
    expect(rs.filter((r) => r.statusCode === 200).length).toBe(20);
    expect(rs.filter((r) => r.json().erro === 'mochila_cheia').length).toBe(10);
    const inv = await inventario(j.cookie);
    expect(qtd(inv.mochila.itens, 'minerio_cobre') + qtd(inv.armazem.itens, 'minerio_cobre')).toBe(3000n);
    expect(inv.mochila.casasUsadas).toBe(20);
    expect((await reconciliacao(amb.app)).ok).toBe(true);
  });

  it('recusa mover mais do que tem, item desconhecido e lugar inválido', async () => {
    const j = await jogadorComPersonagem('m5@exemplo.com', 'Halvard');
    await comoJogador(amb.app, j.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    expect((await mover(j.cookie, 'perca', 41, 'armazem')).json().erro).toBe('quantidade_indisponivel');
    expect((await mover(j.cookie, 'espada_lendaria', 1, 'armazem')).json().erro).toBe('item_desconhecido');
    expect((await comoJogador(amb.app, j.cookie, 'POST', '/v1/comandos/mover-item', { item: 'perca', quantidade: '1', de: 'chao' }, randomUUID())).json().erro).toBe('local_invalido');
  });

  it('a mochila é de quem está logado: outra conta não mexe nela', async () => {
    const a = await jogadorComPersonagem('m6@exemplo.com', 'Astrid');
    const b = await jogadorComPersonagem('m7@exemplo.com', 'Bjorn');
    await comoJogador(amb.app, a.cookie, 'POST', '/v1/dev/itens-de-teste', undefined, randomUUID());
    // B tenta mover itens: mexe só no próprio armazém, que está vazio
    expect((await mover(b.cookie, 'minerio_cobre', 10, 'armazem')).json().erro).toBe('quantidade_indisponivel');
    expect(qtd((await inventario(a.cookie)).armazem.itens, 'minerio_cobre')).toBe(250n);
  });
});
