// Idempotência e pedidos simultâneos (arquitetura, seção 8.4): o saldo final é sempre o de uma execução por chave.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { randomUUID } from 'node:crypto';
import { montarAmbiente, desmontar, novaConta, creditar, transferir, saldoDe, reconciliacao, type Ambiente } from './ajuda.ts';

let amb: Ambiente;
beforeAll(async () => { amb = await montarAmbiente(); });
afterAll(async () => { await desmontar(amb); });

describe('idempotência', () => {
  it('repetir o mesmo pedido com a mesma chave devolve a mesma resposta, sem efeito novo', async () => {
    const a = await novaConta(amb.app, 'Ana');
    const b = await novaConta(amb.app, 'Bia');
    await creditar(amb.app, a, 1000);
    const chave = randomUUID();
    const r1 = await transferir(amb.app, a, b, 100, chave);
    const r2 = await transferir(amb.app, a, b, 100, chave);
    expect(r1.statusCode).toBe(201);
    expect(r2.statusCode).toBe(201);
    expect(r2.json()).toEqual(r1.json());
    expect(await saldoDe(amb.app, a)).toBe(900n);
  });

  it('a mesma chave com outros parâmetros é recusada', async () => {
    const a = await novaConta(amb.app, 'Caio');
    const b = await novaConta(amb.app, 'Davi');
    await creditar(amb.app, a, 1000);
    const chave = randomUUID();
    await transferir(amb.app, a, b, 100, chave);
    const r = await transferir(amb.app, a, b, 200, chave);
    expect(r.statusCode).toBe(422);
    expect(r.json().erro).toBe('chave_reutilizada');
    expect(await saldoDe(amb.app, a)).toBe(900n);
  });

  it('o erro de negócio também fica guardado: repetir devolve o mesmo erro', async () => {
    const a = await novaConta(amb.app, 'Eva');
    const b = await novaConta(amb.app, 'Fábio');
    const chave = randomUUID();
    const r1 = await transferir(amb.app, a, b, 100, chave); // sem saldo
    await creditar(amb.app, a, 1000);
    const r2 = await transferir(amb.app, a, b, 100, chave); // mesma chave: o resultado não muda
    expect(r1.json().erro).toBe('saldo_insuficiente');
    expect(r2.json()).toEqual(r1.json());
    expect(await saldoDe(amb.app, a)).toBe(1000n);
  });

  it('20 pedidos simultâneos com a mesma chave fazem uma transferência só', async () => {
    const a = await novaConta(amb.app, 'Gil');
    const b = await novaConta(amb.app, 'Hana');
    await creditar(amb.app, a, 1000);
    const chave = randomUUID();
    const rs = await Promise.all(Array.from({ length: 20 }, () => transferir(amb.app, a, b, 100, chave)));
    expect(rs.every((r) => r.statusCode === 201)).toBe(true);
    expect(new Set(rs.map((r) => r.json().transacao)).size).toBe(1);
    expect(await saldoDe(amb.app, a)).toBe(900n);
    expect(await saldoDe(amb.app, b)).toBe(97n);
  });
});

describe('pedidos simultâneos', () => {
  it('30 transferências ao mesmo tempo de uma carteira que só cobre 10: exatamente 10 passam', async () => {
    const a = await novaConta(amb.app, 'Ivo');
    const destinos = await Promise.all(Array.from({ length: 5 }, (_, i) => novaConta(amb.app, `Destino ${i}`)));
    await creditar(amb.app, a, 1000);
    const rs = await Promise.all(Array.from({ length: 30 }, (_, i) => transferir(amb.app, a, destinos[i % 5]!, 100)));
    const passaram = rs.filter((r) => r.statusCode === 201).length;
    const recusadas = rs.filter((r) => r.statusCode === 409 && r.json().erro === 'saldo_insuficiente').length;
    expect(passaram).toBe(10);
    expect(recusadas).toBe(20);
    expect(await saldoDe(amb.app, a)).toBe(0n);
    expect((await reconciliacao(amb.app)).ok).toBe(true);
  });

  it('transferências cruzadas (A→B e B→A) ao mesmo tempo não travam nem perdem ouro', async () => {
    const a = await novaConta(amb.app, 'Júlia');
    const b = await novaConta(amb.app, 'Léo');
    await creditar(amb.app, a, 100_000);
    await creditar(amb.app, b, 100_000);
    const rs = await Promise.all(
      Array.from({ length: 40 }, (_, i) => (i % 2 === 0 ? transferir(amb.app, a, b, 1000) : transferir(amb.app, b, a, 1000))),
    );
    expect(rs.every((r) => r.statusCode === 201)).toBe(true);
    // 40 transferências de 1.000 com 30 de taxa cada: 1.200 de ouro destruído no total
    expect((await saldoDe(amb.app, a)) + (await saldoDe(amb.app, b))).toBe(200_000n - 40n * 30n);
    expect((await reconciliacao(amb.app)).ok).toBe(true);
  });
});
