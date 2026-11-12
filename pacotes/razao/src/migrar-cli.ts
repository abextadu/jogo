// npm run db:migrar
import { conectar } from './banco.ts';
import { migrar } from './migrar.ts';

const sql = conectar();
try {
  const aplicadas = await migrar(sql);
  console.log(aplicadas.length ? `Migrações aplicadas: ${aplicadas.join(', ')}` : 'Banco já está em dia.');
} finally {
  await sql.end();
}
