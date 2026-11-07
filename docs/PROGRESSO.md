# Progresso do projeto

> Atualizado em: 2026-11-06 · Dono do produto: Gabriel · Estúdio: Claude
> Este arquivo é a fonte da verdade sobre onde paramos. Qualquer sessão nova começa por aqui.

## Fase atual

**Fase 1 — Pesquisa profunda: em andamento.** Próximo marco: 🛑 checkpoint da Fase 1.

| Fase | Entregável | Status |
|---|---|---|
| 1. Pesquisa profunda | `docs/01-pesquisa/` + `00-sintese.md` | 🟡 Em andamento |
| 2. Conceito (3 conceitos) | `docs/02-conceito.md` | ⚪ Não iniciada |
| 3. GDD + simulação da economia | `docs/03-gdd/` | ⚪ Não iniciada |
| 4. Arquitetura técnica | `docs/04-arquitetura.md` | ⚪ Não iniciada |
| 5. Roadmap e construção | `docs/05-roadmap.md` | ⚪ Não iniciada |

## Plano da Fase 1

Protocolo de pesquisa, etiquetas de evidência e mapa de arquivos: [`01-pesquisa/METODOLOGIA.md`](01-pesquisa/METODOLOGIA.md).

- **Onda 1 (em paralelo):** 17 pesquisadores escrevem 47 fichas de jogos (grupos A a G) e 7 pesquisadores escrevem os estudos que não dependem das fichas: teoria do design idle, além do idle, jurídico Brasil, jurídico global e pagamentos, monetização e retenção, técnica, mercado e posicionamento.
- **Onda 2 (depois das fichas de MMOs, idles multiplayer e casos de alerta):** economia (fontes e drenos, inflação; mercados, proteções e bots) e RMT (modelos, mercado paralelo e recomendação). Esses estudos leem as fichas para não refazer pesquisa.
- **Fechamento:** mapa do gênero, padrões + matriz + leis do design idle, síntese com os 30 insights e checkpoint.

**Execução:** lotes de 6 pesquisadores. Quando um termina, entra o próximo da fila.

- **Prontas:** 22 de 47 fichas — Melvor Idle (B01), Legends of IdleOn (B02); os 6 idle MMOs do grupo C (Milky Way Idle, Idle Clans, Idlescape, IdleMMO, SimpleMMO, Shop Titans); todo o grupo F (EVE, Albion, RuneScape/OSRS, Tibia, Path of Exile, WoW, Guild Wars 2, Black Desert, Throne and Liberty/Lost Ark); Diablo III e a casa de leilão (G01), Entropia Universe (G02), New World (G04), Banana e Bongo Cat (G05), economias que colapsaram (G07). Estudos: teoria do design idle (02a), jurídico Brasil (05b).
- **Notas de síntese:** achados de cada relatório em [`01-pesquisa/_notas-de-sintese.md`](01-pesquisa/_notas-de-sintese.md).
- **Rodando:** Axie Infinity e Web3 (G03), idles que morreram (G06), além do idle (03), jurídico global e pagamentos (05c), Torn, Shakes & Fidget e KoL (D01–D03), técnica (07), monetização e retenção (06).
- **Fila, em ordem:** **onda 2** assim que G03, G06 e 05c terminarem — economia (04a, 04b) e RMT (05a, 05d); mercado e posicionamento (08); OGame e Travian (D04–D05); idle clássicos I (A01–A03, A09); incrementais de nicho (A04–A08); idle RPGs II (B03–B06); mobile AFK (E01–E04); radar 2023–2026 (A10).
- A onda 2 passou à frente das fichas secundárias porque está no caminho crítico da síntese.

## Checklist de entregáveis da Fase 1

**Fichas (47)**
- [ ] A — Idle/incremental: Cookie Clicker, Clicker Heroes, AdVenture Capitalist, Realm Grinder, NGU Idle, Antimatter Dimensions, Kittens Game, Trimps, Egg Inc., nova onda 2023–2026
- [ ] B — Idle RPG single-player: Melvor Idle, Legends of IdleOn, Idle Champions, Soda Dungeon, Idle Slayer, Tap Titans 2
- [ ] C — Idle multiplayer com economia: Milky Way Idle, Idle Clans, Idlescape, IdleMMO, SimpleMMO, Shop Titans
- [ ] D — Navegador duradouros: Torn, Shakes & Fidget, Kingdom of Loathing, OGame, Travian
- [ ] E — Mobile AFK: AFK Arena/AFK Journey, Idle Heroes, Legend of Mushroom, +1
- [ ] F — MMOs: EVE Online, Albion Online, RuneScape/OSRS, Tibia, Path of Exile, World of Warcraft, Guild Wars 2, Black Desert, Throne and Liberty/Lost Ark
- [ ] G — Casos de alerta: Diablo III (casa de leilão), Entropia Universe, Axie Infinity/Web3, New World, Banana/Bongo Cat, idles que morreram, economias que colapsaram

**Estudos**
- [ ] 02a — Teoria do design idle
- [ ] 03 — Além do idle (1.3)
- [ ] 04a — Economia: fontes, drenos, inflação, concentração (1.4)
- [ ] 04b — Economia: modelos de mercado, proteções, bots (1.4)
- [ ] 05a — RMT: modelos e mercado paralelo (1.5)
- [ ] 05b — RMT: jurídico Brasil (1.5)
- [ ] 05c — RMT: jurídico global, meios de pagamento e lojas (1.5)
- [ ] 05d — RMT: recomendação (1.5)
- [ ] 06 — Monetização e retenção (1.6)
- [ ] 07 — Técnica de idles online (1.7)
- [ ] 08 — Mercado e posicionamento (1.8)

**Fechamento**
- [ ] 01 — Mapa do gênero (índice das fichas)
- [ ] 02 — Padrões, matriz comparativa e leis do design idle (1.2)
- [ ] 00 — Síntese: resumo executivo + 30 insights ranqueados
- [ ] 🛑 Checkpoint da Fase 1

## Decisões tomadas

| Data | Decisão | Quem |
|---|---|---|
| 2026-11-06 | Acesso à web confirmado: a pesquisa usa fontes reais, com link. | Claude |
| 2026-11-06 | Repositório: https://github.com/abextadu/jogo (branch `main`). Commits com o e-mail privado (noreply) do GitHub. | Gabriel |
| 2026-11-06 | Pesquisa em duas ondas, com subagentes em paralelo, seguindo `METODOLOGIA.md`. | Claude |
| 2026-11-06 | Ampliação da lista de jogos além do mínimo pedido: Egg Inc., Shop Titans, Guild Wars 2, Black Desert, Throne and Liberty/Lost Ark, Entropia Universe, Axie Infinity/Web3, New World, Banana/Bongo Cat e radar 2023–2026. | Claude |

## Pendências e decisões aguardando o Gabriel

- Nenhuma por enquanto. As decisões da Fase 1 serão apresentadas no checkpoint.

## Registro

- **2026-11-06** — Estrutura criada (`docs/`, `PROGRESSO.md`, `CLAUDE.md`, `METODOLOGIA.md`). Git inicializado. Onda 1 da pesquisa iniciada.
- **2026-11-07** — A primeira rodada foi interrompida antes de gravar arquivos. Pesquisa retomada em lotes de 6, com gravação a cada ficha concluída (`METODOLOGIA.md`, seção 10).
