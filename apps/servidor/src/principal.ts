// npm run servidor (ou npm run dev, que reinicia ao salvar)
import { conectar } from '../../../pacotes/razao/src/banco.ts';
import { migrar } from '../../../pacotes/razao/src/migrar.ts';
import { carregarConfig } from '../../../pacotes/config/src/index.ts';
import { construirApp } from './app.ts';

const config = carregarConfig();
const sql = conectar();
const aplicadas = await migrar(sql);
if (aplicadas.length) console.log(`Migrações aplicadas: ${aplicadas.join(', ')}`);

const dev = (process.env.JOGO_DEV ?? '1') === '1';
const porta = Number(process.env.PORTA ?? 3000);
const app = construirApp({ sql, config, dev, log: true });
await app.listen({ port: porta, host: '127.0.0.1' });
console.log(`Servidor em http://127.0.0.1:${porta} (config ${config.versao}${dev ? ', rotas de desenvolvimento ligadas' : ''})`);

for (const sinal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(sinal, async () => {
    await app.close();
    await sql.end();
    process.exit(0);
  });
}
