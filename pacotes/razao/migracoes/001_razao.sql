-- 001: o livro-razão de partidas dobradas (arquitetura, seção 4.2).
-- Todo valor do jogo nasce numa conta de fonte, morre numa conta de dreno e circula entre contas de jogador.
-- Cada transação grava lançamentos que somam zero em cada unidade; o banco recusa o que não fecha.

-- Conta do jogador (o cadastro de verdade entra no M1; no M0 existem só contas de teste).
create table conta (
  id bigint generated always as identity primary key,
  nome text not null check (length(nome) between 1 and 60),
  teste boolean not null default false,
  criada_em timestamptz not null default now()
);

-- Cada "lugar" onde um valor pode estar.
--   jogador:  carteira de ouro (e, depois, de Coins e de cada bem fungível) de uma conta
--   transito: valor reservado (ordem aberta, lance, proposta de Troca); deve zerar quando nada está pendente
--   fonte:    de onde o valor nasce (encomenda, cerco, venda a NPC, doação); fica negativa
--   dreno:    para onde o valor morre (taxas, reparo, Oficina); fica positiva
create table conta_razao (
  id bigint generated always as identity primary key,
  tipo text not null check (tipo in ('jogador', 'transito', 'fonte', 'dreno')),
  conta_id bigint references conta (id),
  nome text not null,
  unidade text not null check (unidade ~ '^[a-z0-9_:]+$'),
  criada_em timestamptz not null default now(),
  check ((tipo in ('jogador', 'transito')) = (conta_id is not null)),
  unique (id, unidade)
);
create unique index conta_razao_unica on conta_razao (tipo, coalesce(conta_id, 0), nome, unidade);

-- Saldo cacheado, atualizado na mesma transação dos lançamentos, só para contas de jogador e de trânsito.
-- Fontes e drenos não têm saldo cacheado: todo comando tocaria a mesma linha (linha quente).
-- O saldo deles sai da soma dos lançamentos (painel e reconciliação).
create table saldo (
  conta_razao_id bigint primary key references conta_razao (id),
  quantidade bigint not null default 0,
  atualizado_em timestamptz not null default now(),
  constraint saldo_nao_negativo check (quantidade >= 0)
);

-- Uma operação de valor.
create table transacao (
  id uuid primary key default uuidv7(),
  tipo text not null,
  conta_id bigint references conta (id),
  versao_config text not null,
  criada_em timestamptz not null default now()
);

-- Débitos e créditos de uma transação. Quantidades inteiras de 64 bits, na menor unidade.
-- Particionada por tempo desde o primeiro dia (arquitetura, seção 4.2); o job de partições mensais
-- entra num marco seguinte, e até lá tudo cai na partição padrão.
create table lancamento (
  id uuid not null default uuidv7(),
  transacao_id uuid not null references transacao (id),
  conta_razao_id bigint not null,
  unidade text not null,
  quantidade bigint not null check (quantidade <> 0),
  criado_em timestamptz not null default now(),
  primary key (criado_em, id),
  foreign key (conta_razao_id, unidade) references conta_razao (id, unidade)
) partition by range (criado_em);
create table lancamento_padrao partition of lancamento default;
create index lancamento_por_transacao on lancamento (transacao_id);
create index lancamento_por_conta on lancamento (conta_razao_id, criado_em);

-- Soma zero por unidade em cada transação, conferida no fim da transação do banco.
create function verificar_soma_zero() returns trigger
language plpgsql as $$
declare
  r record;
begin
  for r in
    select unidade, sum(quantidade) as soma
    from lancamento
    where transacao_id = new.transacao_id
    group by unidade
  loop
    if r.soma <> 0 then
      raise exception 'transação % desbalanceada na unidade % (soma %)', new.transacao_id, r.unidade, r.soma
        using errcode = '23514';
    end if;
  end loop;
  return null;
end;
$$;

-- Criado na tabela particionada: o PostgreSQL copia o gatilho para cada partição, inclusive as futuras.
create constraint trigger lancamento_soma_zero
  after insert on lancamento
  deferrable initially deferred
  for each row execute function verificar_soma_zero();

-- Chaves de idempotência (arquitetura, seção 5): a primeira resposta fica guardada e volta igual nas repetições.
create table idempotencia (
  conta_id bigint not null,
  chave text not null check (length(chave) between 8 and 255),
  rota text not null,
  hash_parametros text not null,
  status_http integer,
  resposta jsonb,
  criada_em timestamptz not null default now(),
  primary key (conta_id, chave)
);
