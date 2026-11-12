// Conversa com o servidor. O cookie de sessão vai sozinho (mesma origem).
// Todo comando que move valor leva uma Idempotency-Key nova: se a rede cair e o pedido for repetido,
// o servidor devolve a mesma resposta sem fazer de novo.

export interface ErroApi {
  status: number;
  erro: string;
  mensagem: string;
}

export interface Item {
  id: string;
  nome: string;
  tipo: string;
  tier: number;
  quantidade: string;
  casas: number;
}

export interface Inventario {
  mochila: { casas: number; casasUsadas: number; pilhaMaxima: number; itens: Item[] };
  armazem: { itens: Item[] };
}

export interface Eu {
  conta: { id: string; email: string | null };
  personagem: { id: string; nome: string; vocacao: string } | null;
  vocacoesDisponiveis: string[];
  dev: boolean;
}

async function pedir<T>(metodo: 'GET' | 'POST', url: string, corpo?: unknown, comando = false): Promise<T> {
  const headers: Record<string, string> = {};
  if (corpo !== undefined) headers['content-type'] = 'application/json';
  if (comando) headers['idempotency-key'] = crypto.randomUUID();
  const r = await fetch(url, { method: metodo, headers, body: corpo === undefined ? undefined : JSON.stringify(corpo) });
  const dados = (await r.json().catch(() => ({}))) as Record<string, string>;
  if (!r.ok) {
    const e: ErroApi = { status: r.status, erro: dados.erro ?? 'erro', mensagem: dados.mensagem ?? 'Algo deu errado.' };
    throw e;
  }
  return dados as T;
}

export const api = {
  eu: () => pedir<Eu>('GET', '/v1/eu'),
  cadastrar: (email: string, senha: string, aceitoTermos: boolean) =>
    pedir<{ conta: { id: string }; chaveRecuperacao: string }>('POST', '/v1/conta/cadastro', { email, senha, aceitoTermos }),
  entrar: (email: string, senha: string) => pedir<{ conta: { id: string } }>('POST', '/v1/conta/entrar', { email, senha }),
  recuperar: (email: string, chave: string, novaSenha: string) =>
    pedir<{ chaveRecuperacao: string }>('POST', '/v1/conta/recuperar', { email, chave, novaSenha }),
  sair: () => pedir<{ ok: boolean }>('POST', '/v1/conta/sair', {}),
  criarPersonagem: (nome: string, vocacao: string) => pedir('POST', '/v1/personagem', { nome, vocacao }),
  inventario: () => pedir<Inventario>('GET', '/v1/personagem/inventario'),
  moverItem: (item: string, quantidade: string, de: 'mochila' | 'armazem') =>
    pedir<Inventario>('POST', '/v1/comandos/mover-item', { item, quantidade, de }, true),
  itensDeTeste: () => pedir<Inventario>('POST', '/v1/dev/itens-de-teste', {}, true),
};

export function mensagemDe(e: unknown): string {
  return (e as ErroApi)?.mensagem ?? 'Sem conexão com o servidor.';
}
