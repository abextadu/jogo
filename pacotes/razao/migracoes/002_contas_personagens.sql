-- 002: cadastro, sessões e personagens (M1).
-- Sem verificação de idade (checkpoint 3): a conta guarda e-mail, hash da senha, hash da chave de recuperação
-- e a versão dos termos aceitos (o jogo é 18+ pelos termos). Nenhum documento, data de nascimento ou foto.

alter table conta
  add column email text,
  add column senha_hash text,
  add column chave_recuperacao_hash text,
  add column termos_versao text,
  add column termos_aceitos_em timestamptz,
  add constraint conta_email_formato check (email is null or email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  add constraint conta_cadastro_completo check (
    teste or (email is not null and senha_hash is not null and chave_recuperacao_hash is not null and termos_versao is not null)
  );
create unique index conta_email_unico on conta (lower(email)) where email is not null;

-- Sessões: o navegador guarda um token aleatório num cookie HttpOnly; o banco guarda só o hash dele.
create table sessao (
  token_hash text primary key,
  conta_id bigint not null references conta (id) on delete cascade,
  criada_em timestamptz not null default now(),
  ultimo_uso timestamptz not null default now(),
  expira_em timestamptz not null
);
create index sessao_por_conta on sessao (conta_id);

-- Personagem: o foco do jogo. Um ativo por conta; os aposentados ficam guardados (Bazar de Personagens, D19).
create table personagem (
  id bigint generated always as identity primary key,
  conta_id bigint not null references conta (id),
  nome text not null,
  vocacao text not null check (vocacao in ('cavaleiro', 'cacador', 'mago', 'druida', 'ladino')),
  estado text not null default 'ativo' check (estado in ('ativo', 'aposentado')),
  criado_em timestamptz not null default now()
);
create unique index personagem_nome_unico on personagem (lower(nome));
create unique index personagem_um_ativo_por_conta on personagem (conta_id) where estado = 'ativo';
