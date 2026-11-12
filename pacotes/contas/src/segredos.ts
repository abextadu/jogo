// Senhas com Argon2id (nativo do Node 26), tokens de sessão e chave de recuperação.
// O banco nunca guarda senha, token ou chave em claro: só o hash.
import { argon2, createHash, randomBytes, timingSafeEqual } from 'node:crypto';

// Parâmetros mínimos recomendados pela OWASP para Argon2id: 19 MiB de memória, 2 passadas, paralelismo 1.
const PARAMS = { memory: 19_456, passes: 2, parallelism: 1, tagLength: 32 };

function argon2id(senha: string, sal: Buffer): Promise<Buffer> {
  return new Promise((ok, falha) =>
    argon2('argon2id', { message: senha, nonce: sal, ...PARAMS }, (erro, hash) => (erro ? falha(erro) : ok(hash))),
  );
}

/** Formato guardado: argon2id$m$t$p$sal$hash (base64url). */
export async function hashSenha(senha: string): Promise<string> {
  const sal = randomBytes(16);
  const hash = await argon2id(senha, sal);
  return ['argon2id', PARAMS.memory, PARAMS.passes, PARAMS.parallelism, sal.toString('base64url'), hash.toString('base64url')].join('$');
}

export async function conferirSenha(senha: string, guardado: string): Promise<boolean> {
  const partes = guardado.split('$');
  if (partes.length !== 6 || partes[0] !== 'argon2id') return false;
  const [, m, t, p, sal, esperado] = partes as [string, string, string, string, string, string];
  const hash = await new Promise<Buffer>((ok, falha) =>
    argon2(
      'argon2id',
      { message: senha, nonce: Buffer.from(sal, 'base64url'), memory: Number(m), passes: Number(t), parallelism: Number(p), tagLength: 32 },
      (erro, h) => (erro ? falha(erro) : ok(h)),
    ),
  );
  const alvo = Buffer.from(esperado, 'base64url');
  return alvo.length === hash.length && timingSafeEqual(alvo, hash);
}

/** Hash usado quando o e-mail não existe, para o login levar o mesmo tempo (não entrega quem tem conta). */
export const HASH_FALSO = 'argon2id$19456$2$1$AAAAAAAAAAAAAAAAAAAAAA$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

export function sha256(texto: string): string {
  return createHash('sha256').update(texto).digest('hex');
}

export function novoTokenSessao(): string {
  return randomBytes(32).toString('base64url');
}

// Chave de recuperação: 20 caracteres em 5 grupos (100 bits), sem letras que se confundem (I, L, O, U).
const ALFABETO = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

export function novaChaveRecuperacao(): string {
  const bytes = randomBytes(20);
  const letras = [...bytes].map((b) => ALFABETO[b & 31]!);
  return [0, 4, 8, 12, 16].map((i) => letras.slice(i, i + 4).join('')).join('-');
}

/** Normaliza o que o jogador digita: maiúsculas, sem espaços nem hífens, O→0 e I/L→1. */
export function normalizarChave(chave: string): string {
  return chave.toUpperCase().replace(/[\s-]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');
}
