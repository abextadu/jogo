// npm run demo:m0 — demonstração do marco M0 (fundação e livro-razão), contra o servidor em memória
// e o banco local de desenvolvimento. Cria contas de teste novas a cada execução.
import { randomUUID } from 'node:crypto';
import { conectar } from '../pacotes/razao/src/banco.ts';
import { migrar } from '../pacotes/razao/src/migrar.ts';
import { carregarConfig } from '../pacotes/config/src/index.ts';
import { contaRazao } from '../pacotes/razao/src/razao.ts';
import { carteiraDe } from '../pacotes/economia/src/ouro.ts';
import { construirApp } from '../apps/servidor/src/app.ts';

const sql = conectar();
await migrar(sql);
const config = carregarConfig();
const app = construirApp({ sql, config, dev: true });
await app.ready();

const pedir = async (method: 'GET' | 'POST', url: string, payload?: object, headers: Record<string, string> = {}) => {
  const r = await app.inject({ method, url, payload, headers });
  return { status: r.statusCode, corpo: r.json() };
};
const passo = (t: string) => console.log(`\n— ${t}`);

console.log(`Demonstração do M0 · config ${config.versao}`);

passo('1. Duas contas de teste');
const ana = (await pedir('POST', '/v1/dev/contas', { nome: 'Ana (demo)' })).corpo.id as string;
const bruno = (await pedir('POST', '/v1/dev/contas', { nome: 'Bruno (demo)' })).corpo.id as string;
console.log(`   Ana = conta ${ana}, Bruno = conta ${bruno}`);

passo('2. 1.000 de ouro nascem na fonte "dev" e vão para a Ana');
console.log('  ', (await pedir('POST', '/v1/dev/creditar', { conta: ana, quantidade: '1000' }, { 'idempotency-key': randomUUID() })).corpo);

passo('3. Ana dá 300 de ouro ao Bruno: chega na hora; Bruno paga 3% de taxa da Troca, destruída');
const chave = randomUUID();
const envio = await pedir('POST', '/v1/comandos/transferir-ouro', { para: bruno, quantidade: '300' }, { 'idempotency-key': chave, 'x-conta-teste': ana });
console.log(`   ${envio.status}`, envio.corpo);

passo('4. O celular perdeu a rede e reenviou o mesmo pedido, com a mesma chave: nada acontece de novo');
const repeticao = await pedir('POST', '/v1/comandos/transferir-ouro', { para: bruno, quantidade: '300' }, { 'idempotency-key': chave, 'x-conta-teste': ana });
console.log(`   ${repeticao.status}, mesma transação: ${repeticao.corpo.transacao === envio.corpo.transacao ? 'sim' : 'NÃO'}`);

passo('5. Extratos');
for (const [nome, id] of [['Ana', ana], ['Bruno', bruno]] as const) {
  const e = (await pedir('GET', `/v1/contas/${id}/extrato`)).corpo;
  console.log(`   ${nome}: saldo ${e.saldo}; lançamentos: ${e.lancamentos.map((l: { tipo: string; quantidade: string }) => `${l.tipo} ${l.quantidade}`).join(', ')}`);
}

passo('6. Reconciliação: saldos batem com os lançamentos, e o ouro soma zero no razão inteiro');
const rec = (await pedir('GET', '/v1/dev/reconciliar')).corpo;
console.log(`   ok: ${rec.ok} · ouro destruído na Troca até agora: ${rec.ouroDestruidoNaTroca}`);

passo('7. Alguém adultera o saldo do Bruno direto no banco (+5.000): a reconciliação acusa');
const carteiraBruno = await contaRazao(sql, carteiraDe(BigInt(bruno)));
await sql`update saldo set quantidade = quantidade + 5000 where conta_razao_id = ${carteiraBruno.toString()}`;
console.log('  ', (await pedir('GET', '/v1/dev/reconciliar')).corpo.diferencas);
await sql`update saldo set quantidade = quantidade - 5000 where conta_razao_id = ${carteiraBruno.toString()}`;
console.log(`   desfeito; ok de novo: ${(await pedir('GET', '/v1/dev/reconciliar')).corpo.ok}`);

passo('8. E se alguém tentar criar ouro do nada, com lançamentos que não fecham? O banco recusa');
try {
  await sql.begin(async (tx) => {
    const [t] = await tx<{ id: string }[]>`insert into transacao (tipo, versao_config) values ('ouro_do_nada', 'demo') returning id`;
    await tx`insert into lancamento (transacao_id, conta_razao_id, unidade, quantidade) values (${t!.id}, ${carteiraBruno.toString()}, 'ouro', 1000000)`;
  });
  console.log('   NÃO recusou (isso seria um bug)');
} catch (e) {
  console.log(`   recusado: ${(e as Error).message}`);
}

await app.close();
await sql.end();
console.log('\nFim da demonstração.');
