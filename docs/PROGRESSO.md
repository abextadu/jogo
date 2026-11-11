# Progresso do projeto

> Atualizado em: 2026-11-11 · Dono do produto: Gabriel · Estúdio: Claude
> Este arquivo é a fonte da verdade sobre onde paramos. Qualquer sessão nova começa por aqui.

## Fase atual

**Fase 2 — Conceito: em andamento.** A Fase 1 foi concluída e o checkpoint foi decidido pelo Gabriel em 2026-11-11, com ajustes (tabela abaixo).

| Fase | Entregável | Status |
|---|---|---|
| 1. Pesquisa profunda | `docs/01-pesquisa/` + `00-sintese.md` | ✅ Concluída · checkpoint decidido |
| 2. Conceito (3 conceitos) | `docs/02-conceito.md` | 🟡 Em andamento |
| 3. GDD + simulação da economia | `docs/03-gdd/` | ⚪ Não iniciada |
| 4. Arquitetura técnica | `docs/04-arquitetura.md` | ⚪ Não iniciada |
| 5. Roadmap e construção | `docs/05-roadmap.md` | ⚪ Não iniciada |

## Decisões do checkpoint da Fase 1 (2026-11-11)

Opções e justificativas em [`01-pesquisa/00-sintese.md`](01-pesquisa/00-sintese.md), seção "Checkpoint da Fase 1". Consequências e salvaguardas na seção "Decisões do Gabriel" do mesmo arquivo.

| # | Decisão | Recomendação do estúdio | **Decisão do Gabriel** |
|---|---|---|---|
| 1 | Até onde vai o dinheiro real | (A) Dinheiro só entra; token revendável por ouro uma vez | **(B) ajustada:** token oficial + **bazar oficial de contas desde o lançamento**; **tokens e ouro transferíveis livremente entre jogadores; RMT informal deixado em aberto** (o estúdio não intermedia nem proíbe) |
| 2 | Aleatoriedade paga | (A) Nenhuma | **(C) ajustada:** caixas compráveis **com token** e **com ouro no mercado**; o conteúdo é sempre **item**. Referência citada: RubinOT. Salvaguarda S1 (conteúdo preso à conta) não adotada; risco jurídico assumido pelo Gabriel |
| 3 | Para quem é o jogo | (A) Todos, com modo protegido | **(B):** jogo inteiro só para maiores de 18 |
| 4 | Onde e como lançamos | (A) Brasil primeiro, bilíngue, PWA, Pix | **(A)** |
| 5 | Quando trazer advogado | (A) Agora, em paralelo à Fase 2 | **(C):** seguir sem parecer jurídico e ajustar depois |

**Confirmações (2026-11-11):** "sem limite de tempo de conta" = bazar de contas desde o lançamento. Caixas compráveis com token e com ouro no mercado, conteúdo em itens, sem a salvaguarda S1. As salvaguardas S2–S5 (carência do token por meio de pagamento, taxa em ouro nas transferências, termos de uso sobre o RMT informal, probabilidades publicadas e teto de gasto) entram como padrão de desenho na Fase 2, sujeitas ao checkpoint.

## Entregáveis da Fase 1

Índice completo das fichas: [`01-pesquisa/01-mapa-do-genero.md`](01-pesquisa/01-mapa-do-genero.md).

- [x] **49 fichas** (47 planejadas + 2 extras) em `01-pesquisa/fichas/`, grupos A a G
- [x] `00-sintese.md` — resumo executivo, 30 insights ranqueados e checkpoint
- [x] `01-mapa-do-genero.md` — índice das fichas
- [x] `02-padroes-matriz-leis.md` — padrões, matriz de 56 jogos e 22 leis
- [x] `02a-teoria-design-idle.md` — teoria do design idle
- [x] `03-alem-do-idle.md` — 18 mecânicas de outros gêneros
- [x] `04a-economia-fontes-drenos-inflacao.md` — fontes, drenos, inflação, concentração
- [x] `04b-economia-mercados-protecoes-bots.md` — mercados, proteções, bots
- [x] `05a-rmt-modelos-mercado-paralelo.md` — modelos de RMT e mercado paralelo
- [x] `05b-rmt-legal-brasil.md` — jurídico Brasil
- [x] `05c-rmt-legal-global-pagamentos.md` — jurídico global, pagamentos e lojas
- [x] `05d-rmt-recomendacao.md` — recomendação de RMT
- [x] `06-monetizacao-retencao.md` — monetização e retenção
- [x] `07-tecnica-idles-online.md` — técnica de idles online
- [x] `08-mercado-posicionamento.md` — mercado e posicionamento
- [x] `_notas-de-sintese.md` — achados de cada relatório, com links (arquivo de trabalho)
- [x] 🛑 Checkpoint da Fase 1: decisões tomadas em 2026-11-11 (duas confirmações pendentes)

## Decisões tomadas

| Data | Decisão | Quem |
|---|---|---|
| 2026-11-06 | Acesso à web confirmado: a pesquisa usa fontes reais, com link. | Claude |
| 2026-11-06 | Repositório: https://github.com/abextadu/jogo (branch `main`). Commits com o e-mail privado (noreply) do GitHub. | Gabriel |
| 2026-11-06 | Pesquisa com subagentes em paralelo, seguindo `METODOLOGIA.md`. | Claude |
| 2026-11-06 | Ampliação da lista de jogos além do mínimo pedido (Egg Inc., Shop Titans, GW2, Black Desert, Throne and Liberty/Lost Ark, Entropia, Axie/Web3, New World, Banana/Bongo Cat, radar 2023–2026). | Claude |
| 2026-11-07 | Fichas secundárias pesquisadas com o Sonnet; o resto no Opus. | Gabriel |
| 2026-11-11 | RMT: token oficial + bazar oficial de contas; tokens e ouro transferíveis livremente; RMT informal em aberto. | Gabriel |
| 2026-11-11 | Caixas compráveis com token e com ouro no mercado, conteúdo sempre em itens (referência: RubinOT). Bazar de contas desde o lançamento. | Gabriel |
| 2026-11-11 | Jogo inteiro para maiores de 18. | Gabriel |
| 2026-11-11 | Lançamento: Brasil primeiro, bilíngue (PT-BR e inglês), servidor no Brasil, Pix, PWA; Steam e lojas depois. | Gabriel |
| 2026-11-11 | Seguir sem parecer jurídico por enquanto; ajustar depois. | Gabriel |

## Lições de processo (para as próximas fases)

- Muitos subagentes em paralelo no Opus esgotam o limite de uso de 5 horas rapidamente. Funcionou melhor: lotes de 6 a 10, gravação de cada arquivo assim que fica pronto e Sonnet para tarefas secundárias.
- Reddit, várias wikis e o JSON de reviews do Steam bloqueiam a leitura automática; os atalhos que funcionaram estão na seção 3 da `METODOLOGIA.md`.

## Registro

- **2026-11-06** — Estrutura criada (`docs/`, `PROGRESSO.md`, `CLAUDE.md`, `METODOLOGIA.md`). Git inicializado. Pesquisa iniciada.
- **2026-11-07 a 2026-11-11** — Pesquisa em lotes, com várias pausas por limite de uso. 49 fichas e 11 estudos concluídos e versionados.
- **2026-11-11** — Matriz, padrões, leis e síntese com 30 insights concluídos. Checkpoint da Fase 1 apresentado ao Gabriel.
