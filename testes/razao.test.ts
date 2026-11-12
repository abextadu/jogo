// O livro-razão: soma zero, saldo nunca negativo, reconciliação e as invariantes sob operações aleatórias.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import fc from 'fast-check';
import { montarAmbiente, desmontar, novaConta, creditar, transferir, saldoDe, reconciliacao, type Ambiente } from './ajuda.ts';
import { contaRazao } from '../pacotes/razao/src/razao.ts';
import { carteiraDe, FONTE_DEV, taxaTroca } from '../pacotes/economia/src/ouro.ts';

let amb: Ambiente;
beforeAll(async () => { amb = await montarAmbiente(); });
afterAll(async () => { await desmontar(amb); });

describe('regras do banco (última linha de defesa)', () => {
  it('recusa uma transação cujos lançamentos não somam zero', async () => {
    const a = await novaConta(amb.app, 'Ana');
    const carteira = await contaRazao(amb.sql, carteiraDe(BigInt(a)));
    const fonte = await contaRazao(amb.sql, FONTE_DEV);
    await expect(
      amb.sql.begin(async (tx) => {
        const [t] = await tx<{ id: string }[]>`insert into transacao (tipo, versao_config) values ('fraude', 'x') returning id`;
        await tx`insert into lancamento (transacao_id, conta_razao_id, unidade, quantidade) values
          (${t!.id}, ${fonte.toString()}, 'ouro', -100), (${t!.id}, ${carteira.toString()}, 'ouro', 150)`;
      }),
    ).rejects.toThrow(/desbalanceada/);
  });

  it('recusa saldo negativo numa carteira', async () => {
    const a = await novaConta(amb.app, 'Bia');
    const carteira = await contaRazao(amb.sql, carteiraDe(BigInt(a)));
    await expect(amb.sql`update saldo set quantidade = -1 where conta_razao_id = ${carteira.toString()}`).rejects.toThrow(/saldo_nao_negativo/);
  });

  it('a reconciliação acusa um saldo adulterado à mão', async () => {
    const a = await novaConta(amb.app, 'Caio');
    await creditar(amb.app, a, 500);
    expect((await reconciliacao(amb.app)).ok).toBe(true);
    const carteira = await contaRazao(amb.sql, carteiraDe(BigInt(a)));
    await amb.sql`update saldo set quantidade = quantidade + 1000 where conta_razao_id = ${carteira.toString()}`;
    const r = await reconciliacao(amb.app);
    expect(r.ok).toBe(false);
    expect(r.diferencas).toEqual([{ contaRazaoId: carteira.toString(), saldo: '1500', somaLancamentos: '500' }]);
    await amb.sql`update saldo set quantidade = quantidade - 1000 where conta_razao_id = ${carteira.toString()}`;
    expect((await reconciliacao(amb.app)).ok).toBe(true);
  });
});

describe('transferência de ouro', () => {
  it('é imediata, cobra 3% de quem recebe e destrói a taxa', async () => {
    const a = await novaConta(amb.app, 'Davi');
    const b = await novaConta(amb.app, 'Eva');
    await creditar(amb.app, a, 1000);
    const antes = BigInt((await reconciliacao(amb.app)).ouroDestruidoNaTroca);
    const r = await transferir(amb.app, a, b, 300);
    expect(r.statusCode).toBe(201);
    expect(r.json()).toMatchObject({ enviado: '300', taxa: '9', recebido: '291', saldoOrigem: '700' });
    expect(await saldoDe(amb.app, a)).toBe(700n);
    expect(await saldoDe(amb.app, b)).toBe(291n); // disponível na hora: sem carência nem retenção
    expect(BigInt((await reconciliacao(amb.app)).ouroDestruidoNaTroca) - antes).toBe(9n);
  });

  it('a taxa tem mínimo de 1 ouro e arredonda para cima', () => {
    expect(taxaTroca(amb.config, 1n)).toBe(1n);
    expect(taxaTroca(amb.config, 34n)).toBe(2n); // 1,02 → 2
    expect(taxaTroca(amb.config, 100n)).toBe(3n);
  });

  it('recusa saldo insuficiente, destino inexistente, a própria conta e quantidade inválida', async () => {
    const a = await novaConta(amb.app, 'Fábio');
    const b = await novaConta(amb.app, 'Gil');
    await creditar(amb.app, a, 50);
    expect((await transferir(amb.app, a, b, 51)).json().erro).toBe('saldo_insuficiente');
    expect((await transferir(amb.app, a, '999999', 10)).json().erro).toBe('conta_inexistente');
    expect((await transferir(amb.app, a, a, 10)).json().erro).toBe('mesma_conta');
    expect((await transferir(amb.app, a, b, '-5')).json().erro).toBe('quantidade_invalida');
    expect((await transferir(amb.app, a, b, '1.5')).json().erro).toBe('quantidade_invalida');
    expect((await transferir(amb.app, a, b, 1)).json().erro).toBe('quantidade_pequena');
    expect(await saldoDe(amb.app, a)).toBe(50n);
  });
});

describe('invariantes sob operações aleatórias (teste por propriedade)', () => {
  it('qualquer sequência de créditos e transferências mantém o razão fechado', async () => {
    const contas: string[] = [];
    for (let i = 0; i < 4; i++) contas.push(await novaConta(amb.app, `Aleatória ${i}`));
    const operacao = fc.oneof(
      fc.record({ tipo: fc.constant('credito' as const), conta: fc.nat(3), q: fc.integer({ min: 1, max: 5000 }) }),
      fc.record({ tipo: fc.constant('transferencia' as const), de: fc.nat(3), para: fc.nat(3), q: fc.integer({ min: 1, max: 3000 }) }),
    );
    await fc.assert(
      fc.asyncProperty(fc.array(operacao, { minLength: 1, maxLength: 12 }), async (ops) => {
        const antes = await Promise.all(contas.map((c) => saldoDe(amb.app, c)));
        const esperado = [...antes];
        for (const op of ops) {
          if (op.tipo === 'credito') {
            const r = await creditar(amb.app, contas[op.conta]!, op.q);
            expect(r.statusCode).toBe(201);
            esperado[op.conta]! += BigInt(op.q);
          } else {
            const r = await transferir(amb.app, contas[op.de]!, contas[op.para]!, op.q);
            const q = BigInt(op.q);
            const taxa = taxaTroca(amb.config, q);
            const podia = op.de !== op.para && esperado[op.de]! >= q && q > taxa;
            expect(r.statusCode === 201).toBe(podia);
            if (podia) {
              esperado[op.de]! -= q;
              esperado[op.para]! += q - taxa;
            }
          }
        }
        const depois = await Promise.all(contas.map((c) => saldoDe(amb.app, c)));
        expect(depois).toEqual(esperado);
        for (const s of depois) expect(s >= 0n).toBe(true);
        const rec = await reconciliacao(amb.app);
        expect(rec.ok).toBe(true);
      }),
      { numRuns: 25 },
    );
  });
});
