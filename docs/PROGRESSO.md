# Progresso do projeto

> Atualizado em: 2026-11-11 · Dono do produto: Gabriel · Estúdio: Claude
> Este arquivo é a fonte da verdade sobre onde paramos. Qualquer sessão nova começa por aqui.

## Fase atual

**Fase 4 — Arquitetura técnica: em andamento.** O checkpoint da Fase 3 foi decidido pelo Gabriel em 2026-11-11 (tabela abaixo): sem verificação de idade alguma, transferência imediata sem freios, GDD aprovado com segunda rodada de simulação no início da Fase 4, e equipe mínima (Gabriel + Claude). O GDD foi ajustado a essas decisões. Entregável: [`04-arquitetura.md`](04-arquitetura.md).

O checkpoint da Fase 2 foi aprovado pelo Gabriel em 2026-11-11 (as 5 recomendações).

### Decisões do checkpoint da Fase 3 (2026-11-11)

Opções e justificativas em [`03-gdd/resumo-e-checkpoint.md`](03-gdd/resumo-e-checkpoint.md).

| # | Decisão | Recomendação do estúdio | **Decisão do Gabriel** |
|---|---|---|---|
| 1 | Prólogo de 5 min sem conta antes da verificação de idade | (A) Sim | **Sem verificação alguma** |
| 2 | Freios temporários na transferência de Coins e ouro | (A) Carência dos Coins doados + limite de saída de conta nova | **(C) Nenhum freio: transferência imediata** |
| 3 | Custo da verificação de idade | (A) Verificar todos, prólogo como filtro, negociar preço | **Nenhuma verificação** |
| 4 | Economia saudável só em parte | (A) Aprovar o GDD e fazer a 2ª rodada de simulação no início da Fase 4 | **(A)** |
| 5 | Quem constrói e opera | (A) Gabriel + Claude; arte e moderação terceirizadas; plano enxuto | **(A)** |

**O que muda no GDD:**
- **Não existe verificação de idade** em nenhum momento: nem na entrada, nem para doar, abrir o Baú, usar o Bazar de Personagens ou recuperar a conta. A decisão 3 do checkpoint 1 (jogo só para maiores de 18) não foi alterada: o 18+ fica nos termos de uso, sem conferência.
- **"Uma pessoa, uma conta ativa"** continua como regra dos termos, mas passa a ser cobrada por detecção (aparelho, meio de pagamento, rede e comportamento), não por identidade verificada.
- **Transferência de Coins e ouro imediata:** saem a carência por meio de pagamento, o limite de saída de conta nova, a retenção de saída em aparelho novo e os limites do risco de troca. Ficam as taxas (Troca, Coins na Troca a 12%), a detecção e a reversão pelo livro-razão depois do fato (fraude provada, roubo provado, duplicação).
- **O prólogo** continua como abertura do jogo, sem conta (módulo 12); a conta é criada ao chegar à Cidade, sem verificação.
- **Negócio:** sai o custo da verificação; o cenário base passa a pagar ~7 pessoas em vez de 3 a 4 (módulo 11, seção 8).
- **Segunda rodada da simulação (Fase 4):** carência zero, custo de conta falsa perto de zero para fazendas de bots e ataque de cartões sem carência, além de D15, D16 e o bônus da refeição.

**Alerta registrado uma vez (risco assumido pelo Gabriel):**
- **ECA Digital.** Baú pago sem verificação de idade é o caso que a lei proíbe: caixas de recompensa são vedadas em jogos de acesso provável por menores ([Lei 15.211/2025, art. 20](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm)); quem as oferece deve verificar a idade sem autodeclaração ou bloquear a função por padrão ([Decreto 12.880/2026, arts. 18 e 23](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/D12880.htm)); o MJSP já disse que a classificação 18 não substitui a verificação ([NT 55/2026](https://www.gov.br/mj/pt-br/assuntos/noticias/mjsp-pede-a-anpd-que-monitore-jogos-eletronicos-com-caixas-de-recompensa-que-nao-implementaram-verificacao-de-idade)). A fiscalização da ANPD começa em janeiro de 2027, com multa de até 10% do faturamento ou R$ 50 milhões por infração e possível suspensão (art. 35). Salvaguardas opcionais, **não aplicadas**: verificar a idade só de quem compra ou abre o Baú, ou deixar o Baú desligado por padrão no Brasil. **Validar com advogado.**
- **Fraude de pagamento.** Sem carência, cartão roubado vira Coins transferidos e vendidos por Pix na mesma hora; o estorno cai sobre o estúdio, e suspender a conta contestante não recupera os Coins. Acima do limite de contestação das bandeiras, o estúdio pode perder o cartão. Ficam a autenticação do emissor (3DS), o disjuntor de pagamentos e o Pix como meio principal.
- **Bots e multicontas.** Sem identidade verificada, uma conta falsa custa quase nada; a defesa passa a ser o teto de emissão, a rampa de conta nova e a detecção. A 2ª rodada mede o lucro de fazendas grandes.
- **Roubo de conta.** Sem retenção de saída, quem rouba a senha esvazia a conta na hora; ficam o segundo fator, os alertas e a reversão do roubo provado pelo livro-razão.

### Decisões do checkpoint da Fase 2 (2026-11-11, aprovadas como recomendado)

| # | Decisão |
|---|---|
| 1 | Conceito: **Cidade dos Ofícios** como núcleo, **Fronteira** como camada de temporada a partir da 2ª temporada, **Casas da Maré** como expansão futura. |
| 2 | Identidade do mundo: fantasia original com **raízes brasileiras** (rios, mata, sertão, litoral, folclore reinterpretado, sem caricatura). |
| 3 | O token compra **conforto e cosmético** (assinatura de conveniência, visuais, passe da temporada); nunca renda, XP ou poder. |
| 4 | **Um personagem por conta**, com companheiros NPC contratados e não negociáveis. |
| 5 | **Sem PvP direto no lançamento;** competição assíncrona (cercos, rankings de guilda, corrida da Fronteira). |

### Decisão de 2026-11-11 (Gabriel): doação, coins e sem reembolso

- **O pagamento funciona como "doação":** cada valor doado credita um número de coins (Alvarás). Os coins são gastos na loja: premium (conveniência por tempo), cosméticos, Baú do Mascate e outros itens da loja (respeitando a decisão 3 do checkpoint 2: conforto e cosmético, nunca poder).
- **Sem reembolso** por parte do estúdio.
- **O Alvará passa de "item de 30 dias" a moeda divisível (coins),** transferível livremente (decisão 1 do checkpoint 1).
- **Alerta registrado uma vez:** chamar de doação não muda a natureza de compra perante o CDC, pode atrair ITCMD e conflitar com as regras dos provedores de pagamento; a contestação forçada pelo banco (chargeback, MED do Pix) continua possível. Risco assumido pelo Gabriel.
- **Tema (decisão do Gabriel, 2026-11-11):** fantasia medieval clássica, pixel art e nomes de fantasia clássica, no lugar da identidade com raízes brasileiras (substitui a decisão 2 do checkpoint 2). Bíblia reescrita com tabela de renomeação (seção 9). Módulos já entregues (07, 09, 10, 11, 12, 13, 14) ainda usam nomes antigos e serão corrigidos na revisão de consistência; o 14 precisa de nova direção de arte em pixel art e o 10, de festas medievais.
- **A reconciliar:** o 11 fixou 1 Coin = R$ 1,00; o 07 usa 1 Coin ≈ R$ 0,10. Decidir na revisão de consistência.
- **Chat (aprovado pelo Gabriel em 2026-11-11):** é proibido anunciar RMT nos canais públicos, e quem aplica golpe com prova no chat do jogo é banido. É moderação de spam e golpe; o RMT informal continua não intermediado e não proibido.
- **Contestação forçada pelo banco (chargeback no cartão, MED do Pix):** a conta fica **suspensa até regularizar**, ou seja, até o jogador pagar de novo o valor contestado (decisão do Gabriel, prática comum em servidores de Tibia). Substitui a "dívida em ouro" proposta no módulo 13.

### Plano da Fase 3

- **Bíblia do GDD:** [`03-gdd/00-biblia.md`](03-gdd/00-biblia.md) ✅ — visão, mundo provisório (Pindorama, Arraial, Bruma), glossário oficial, números-âncora e mapa dos módulos.
- **Módulos em paralelo (rodando):** 01 loops + 02 progressão; 03 personagem + 04 combate; 05 itens + 06 ofícios; 07 economia; 09 social + 10 live ops; 11 monetização + 12 onboarding; 13 anti-abuso; 14 arte e UI com wireframes HTML.
- **Prontos (2026-11-11):** 01, 02, 05, 06, 07, 09, 10, 11, 12, 13 (todos já no tema medieval).
- **Rodando:** 03 personagem + 04 combate (bestiário medieval); 14 arte em pixel art; **08 simulação da economia** em Node.js (12 meses; casual, regular, hardcore, pagante e bot; decide por cenário a ferramenta que acelera a fila, a paridade do Coin, o teto em unidades ou valor e a taxa da Troca de Coins).
- **Depois:** revisão de consistência entre módulos (conflitos em [`03-gdd/_notas-de-integracao.md`](03-gdd/_notas-de-integracao.md)), índice e checkpoint da Fase 3.

A Fase 1 foi concluída e o checkpoint dela foi decidido pelo Gabriel em 2026-11-11, com ajustes (tabela abaixo).

| Fase | Entregável | Status |
|---|---|---|
| 1. Pesquisa profunda | `docs/01-pesquisa/` + `00-sintese.md` | ✅ Concluída · checkpoint decidido |
| 2. Conceito (3 conceitos) | `docs/02-conceito.md` | ✅ Concluída · checkpoint aprovado |
| 3. GDD + simulação da economia | `docs/03-gdd/` | ✅ Concluída · checkpoint decidido |
| 4. Arquitetura técnica | `docs/04-arquitetura.md` | 🔵 Em andamento |
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
| 2026-11-11 | Sem verificação de idade alguma; transferência de Coins e ouro imediata, sem freios. | Gabriel |
| 2026-11-11 | GDD aprovado; 2ª rodada de simulação no início da Fase 4; equipe mínima (Gabriel + Claude, arte e moderação terceirizadas). | Gabriel |

## Lições de processo (para as próximas fases)

- Muitos subagentes em paralelo no Opus esgotam o limite de uso de 5 horas rapidamente. Funcionou melhor: lotes de 6 a 10, gravação de cada arquivo assim que fica pronto e Sonnet para tarefas secundárias.
- Reddit, várias wikis e o JSON de reviews do Steam bloqueiam a leitura automática; os atalhos que funcionaram estão na seção 3 da `METODOLOGIA.md`.

## Registro

- **2026-11-06** — Estrutura criada (`docs/`, `PROGRESSO.md`, `CLAUDE.md`, `METODOLOGIA.md`). Git inicializado. Pesquisa iniciada.
- **2026-11-07 a 2026-11-11** — Pesquisa em lotes, com várias pausas por limite de uso. 49 fichas e 11 estudos concluídos e versionados.
- **2026-11-11** — Matriz, padrões, leis e síntese com 30 insights concluídos. Checkpoint da Fase 1 apresentado e decidido pelo Gabriel, com ajustes.
- **2026-11-11** — Fase 2: três conceitos (Casas da Maré, Fronteira, Cidade dos Ofícios), comparação, recomendação e checkpoint em `02-conceito.md`.
- **2026-11-11** — Fase 3: bíblia, 14 módulos, simulação da economia em Node.js, wireframes, revisão de consistência e checkpoint. Checkpoint decidido pelo Gabriel: sem verificação de idade, transferência imediata, GDD aprovado, equipe mínima. GDD ajustado; Fase 4 iniciada.
