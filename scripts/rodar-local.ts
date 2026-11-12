// npm run jogo — sobe o servidor (porta 3000, reinicia ao salvar) e a tela (Vite, porta 5173) juntos.
// Abra http://localhost:5173 no navegador. Ctrl+C encerra os dois.
import { spawn, type ChildProcess } from 'node:child_process';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const filhos: ChildProcess[] = [];

function rodar(nome: string, script: string) {
  const p = spawn(npm, ['run', script], { stdio: ['ignore', 'pipe', 'pipe'], shell: process.platform === 'win32' });
  const prefixo = (dado: Buffer) => dado.toString().split(/\r?\n/).filter(Boolean).forEach((l) => console.log(`[${nome}] ${l}`));
  p.stdout?.on('data', prefixo);
  p.stderr?.on('data', prefixo);
  p.on('exit', (codigo) => console.log(`[${nome}] terminou (${codigo ?? 'sinal'})`));
  filhos.push(p);
}

rodar('servidor', 'dev');
rodar('tela', 'cliente');
console.log('Abrindo… quando a tela disser "ready", abra http://localhost:5173');

process.on('SIGINT', () => {
  for (const f of filhos) f.kill();
  process.exit(0);
});
