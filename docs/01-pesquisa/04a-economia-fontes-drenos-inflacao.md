# Economia I: fontes, drenos, inflação e concentração de riqueza

> **Escopo.** Como os jogos de referência criam e destroem moeda e itens; o que os dados públicos mostram sobre inflação, deflação e concentração de riqueza; o que a literatura ensina (Simpson, Koster, Castronova, Lehdonvirta e os economistas da CCP, da ArenaNet e da Valve); por que um idle online tende à inflação estrutural; o que medir todo dia; e quais alavancas usar, em que ordem. Ficam fora o desenho do mercado, a manipulação e os bots ([04b](04b-economia-mercados-protecoes-bots.md)) e os modelos de RMT e o jurídico (série 05).
>
> **Perguntas:** (1) De onde vem e para onde vai a riqueza em cada jogo de referência? (2) Que alavancas seguraram a inflação, e a que custo político? (3) Por que a renda idle infla mais rápido que a de um MMO comum? (4) Que painel uma equipe pequena precisa ter no dia 1? (5) Que regras monetárias devemos tornar públicas antes do lançamento?
>
> Todos os links foram acessados em novembro de 2026. Quando um dado vem de uma ficha, cito a fonte original e a ficha (pasta [`fichas/`](fichas/)), onde está o contexto.

## Resumo executivo

- **As economias que duram destroem bens em massa e usam taxas só como ajuste fino.** O EVE destruiu ~1,14 quatrilhão de ISK em itens em 2025; o Albion trata equipamento como consumível. Nos idles online, a torneira principal é a venda ao NPC e o dreno principal é o imposto, o que deixa a moeda refém do volume de comércio (seção 2).
- **O preço do token em ouro é o melhor termômetro público, mas mede também a oferta do próprio token.** WoW e Albion inflam ~20% ao ano; o GW2 inflou ~400% ao ano no lançamento e ~6% depois; o saco de Cowbells do MWI subiu 6 vezes em 19 meses. Já PLEX, point do Torn e Bond do OSRS caíram com a moeda crescendo, por brinde, rota de jogo ou mais pagantes (seção 3.1).
- **Massa crescendo não quer dizer preço subindo.** Com velocidade em queda e produção em alta, o EVE teve deflação de bens em 2007 e em 2025–26. É o retrato natural de um idle (seção 3.2).
- **A concentração é extrema:** no EVE, os 10% mais ricos tinham 98% da riqueza em 2020, e ela acompanha as horas jogadas. Num idle com renda offline, acompanharia a idade da conta (seções 3.4 e 5.1).
- **A taxa de mercado é âncora fraca num idle**, porque a velocidade é baixa. O consumo embutido no progresso é a alavanca mais forte e a de menor custo político; cortes de fonte e escassez imposta, as piores (seções 5.2 e 7).
- **Recomendação:** três camadas de valor (progresso preso à conta, bens negociáveis em unidades absolutas, token), emissão negociável com teto por conta, drenos na ordem certa, painel e relatório desde o alfa, lançamento com fontes apertadas e uma constituição econômica pública de 12 artigos.

## 1. Vocabulário mínimo

- **Fonte (*faucet*, torneira):** tudo o que cria moeda ou item do nada: drop, venda a NPC, recompensa de missão, produção idle.
- **Dreno (*sink*, ralo):** tudo o que destrói moeda ou item: taxa paga ao sistema, compra em NPC, consumo, quebra, destruição em combate.
- **Transferência:** muda o dono sem criar nem destruir. Comércio entre jogadores, compra do token premium com ouro e imposto que volta como prêmio são transferências, não drenos.
- **Conversor:** transforma um recurso em outro. Vender um item ao NPC é, ao mesmo tempo, dreno de item e fonte de moeda.
- [F] A taxonomia acadêmica dos incrementais usa as mesmas quatro peças: fontes, drenos, conversores e *traders*, que movem recursos entre jogadores ([Alharthi et al., CHI 2018](https://par.nsf.gov/servlets/purl/10061230), via [02a, seção 9.1](02a-teoria-design-idle.md)).
- **Massa monetária (M):** estoque de moeda em poder dos jogadores. O EVE conta só as contas ativas ([F01](fichas/F01-eve-online.md)).
- **Emissão líquida:** fontes menos drenos num período.
- **Inflação de preços** (a moeda compra menos) é diferente de **inflação de poder** (cada conteúdo novo desvaloriza o equipamento antigo, o *mudflation*). As duas andam juntas, mas pedem remédios diferentes.
- **Velocidade (V):** quantas vezes a moeda troca de mãos num período. A equação de trocas, M·V = P·Q, liga massa, velocidade, preços e volume de bens.
- **Concentração:** quanto da riqueza está no topo (participação do 1% e do 10% mais ricos, coeficiente de Gini).

## 2. Catálogo de fontes e drenos

### 2.1 Moeda nos MMOs de referência

| Jogo | Fontes de moeda | Drenos de moeda | Dado de escala | Fontes |
|---|---|---|---|---|
| **EVE Online** | Recompensas de NPC e ESS, missões, incursões, *commodities* vendidas a NPC (EDENCOM Data, itens de evento) | Imposto de venda (7,5%; 3,37% com skill), corretagem (3% em estação NPC), sobretaxa de 0,5% em estruturas, imposto de corporação NPC (11%), reprocessamento, alfândega, livros de skill, taxas industriais | [F] Fontes de 203,6 tri de ISK em jan/2026. Com o imposto de venda subindo de 4% para 7,5%, o dreno de impostos de transação foi de 22,7 para 37 tri por mês (mar/2025) | [F01](fichas/F01-eve-online.md); [EVE Uni](https://wiki.eveuniversity.org/Tax); [Nosy Gamer, fev/2026](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html); [Nosy Gamer, abr/2025](https://nosygamer.blogspot.com/2025/04/a-look-at-active-isk-delta-in-march-2025.html) |
| **Albion Online** | Silver dos monstros (+50% com Premium); vendas ao Black Market, pagas com Silver desviado dos drops | Taxa de ordem (2,5%), imposto de venda (8%, ou 4% com Premium), manutenção de territórios, melhorias de ilha, drenos da Wild Blood; reparo [NV] | [F] Sem relatório oficial. O Gold foi de ~3.400 para ~9.000 Silver em cinco anos | [F02](fichas/F02-albion-online.md); [AlbionMarket.gg](https://albionmarket.gg/guides/black-market-flipping); [GamingOnLinux](https://gamingonlinux.com/2017/06/albion-onlines-new-black-market-feature-is-sounding-really-interesting) |
| **Old School RuneScape** | Drops, venda a NPC e alquimia [NV] | Imposto do Grand Exchange (2% desde mai/2025, teto de 5 mi por item), item sink pago com parte do imposto, 10% para destravar um Bond revendido | [F] A Jagex admitiu em 2025 que os drenos "haven't kept pace" com a entrada de gold; ofertas acima de 2,147 bi gp liberadas em set/2026 | [F03](fichas/F03-runescape-e-osrs.md); [Jagex, 2025](https://secure.runescape.com/m=news/yama-cas--more?oldschool=true); [Jagex, 2026](https://secure.runescape.com/m=news/ge-improvements-beyond-max-cash?oldschool=1) |
| **Tibia** | Loot vendido a NPC [NV] | Blessings com preço por nível (20 mil gp cada a partir do nível 120, tabela de fãs de 2019), aluguel de casas (400–800 mil gp/mês nas de topo; guildhalls de 10 mi) | [F] O Char Bazaar arrecadou 98,7 mi de Tibia Coins em taxas em 2025 (levantamento de terceiros) | [F04](fichas/F04-tibia.md); [TibiaQA](https://www.tibiaqa.com/3324/whats-the-price-of-a-blessing?show=3325); [Exevo Pan](https://www.exevopan.com/blog/financial-report-2025) |
| **World of Warcraft** | Missões, loot, vendas a NPC; as mesas de missões aparecem entre as fontes que criaram ouro | Consertos, depósito e 5% do leilão, correio, voos, treinadores, banco, transmog, luxos (Mammoth a 14 mil; Brutosaur a 5 mi no NPC e até 9.999.999 no Mercado Negro) | [F] Token: 30 mil de ouro em 2015; ~304,5 mil em nov/2026 | [F06](fichas/F06-world-of-warcraft.md); [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Money) |
| **Guild Wars 2** | Recompensas (principal fonte no beta) e masmorras (principal fonte até 2015, quando foram cortadas) | Trading Post (5% para anunciar, sem reembolso, mais 10% na venda), spread do câmbio de gemas, Mystic Forge, lendários | [F] 100 gemas: 0,27 de ouro (2012), 20,66 (2015), 40,65 (nov/2026) | [F07](fichas/F07-guild-wars-2.md); [wiki oficial](https://wiki.guildwars2.com/wiki/Trading_Post); [API](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000) |
| **Path of Exile** | Orbs caem como loot; o ouro (desde a 3.25) cai do loot e não é negociável | Orbs consumidas no craft; ouro gasto em NPC e na taxa da Currency Exchange; reset de liga | — | [F05](fichas/F05-path-of-exile.md); [Maxroll](https://maxroll.gg/poe/currency/currency-exchange-market) |
| **Black Desert** | Prata do grind: a média diária por jogador ativo foi 5,06 vezes (NA) e 6 vezes (EU) maior em 2023 que em 2019 | Comissão de 35% (30% do mercado + 5% do território; o Value Pack devolve parte), Cron Stones de NPC no aprimoramento (3 mi cada em 2023) | [F] Teto em prata dos itens de pérola: 473 mi → 840 mi (2022) → 1,63 bi (2023) | [F08](fichas/F08-black-desert.md); [aviso oficial, set/2023](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896) |
| **Throne and Liberty** | Lucent comprado com dinheiro, ganho no leilão e em eventos de PvP | Taxa de 20% no leilão (destrói Lucent); imposto do castelo (~2%), do qual 40% viram prêmio de cerco (transferência) | [F] Cofres de castelo acima de 1,5 mi de Lucent (~€ 25 mil) em nov/2024 | [F09](fichas/F09-throne-and-liberty-e-lost-ark.md); [Mein-MMO](https://mein-mmo.de/en/throne-and-liberty-auction-house-what-are-you-actually-paying-the-luzent-tax-for,1188334) |
| **Lost Ark** | Ouro de raides e missões; câmbio cristais → ouro | Cortes de fonte em nov/2022: Rapport sem ouro, boas-vindas pagas em prata, masmorra de 1.500 para 900 de ouro | — | [G07](fichas/G07-economias-que-colapsaram.md); [Siliconera](https://www.siliconera.com/major-lost-ark-update-to-introduce-changes-in-earning-gold/) |
| **Torn** | Roubos, tráfico, juros do banco, dividendos, missões | Taxa de 5% no Item Market (rampa de 1% a 5% em 2025; +10% para vender anônimo); points gastos em refills, bazar e cosméticos | [F] Massa monetária +15,8% em 2016 e +16,3% em 2018, com meta abaixo de 20% ao ano | [D01](fichas/D01-torn.md); [Review 2016](https://www.torn.com/economic_reports/2016review.pdf); [wiki](https://wiki.torn.com/wiki/Item_Market) |
| **Diablo III** | Ouro de drops | 15% no leilão de ouro. No leilão em dinheiro, US$ 1 ou 15%, mais 15% no saque, eram receita, não dreno | [F] Dupe de trilhões de ouro em mai/2013 | [G01](fichas/G01-diablo-3-casa-de-leilao.md); [Game Informer](https://www.gameinformer.com/b/news/archive/2012/05/01/blizzard-details-diablo-iii-auction-house-fees.aspx) |
| **Entropia Universe** | Depósitos em dinheiro (10 PED = US$ 1) | Decaimento de armas e ferramentas pelo valor TT: dreno e receita ao mesmo tempo | [F] ~US$ 1,3 de receita por hora jogada | [G02](fichas/G02-entropia-universe.md) |
| **Axie Infinity** | SLP por partida, sem teto de emissão | Reprodução, o único dreno grande | [F] 1,3% dos Axies queimados; SLP −99% | [G03](fichas/G03-axie-infinity-e-web3.md); [Naavik](https://naavik.co/deep-dives/axie-infinity-part-2/) |
| **New World** | Poucas fontes de *coin* | Fabricação, respec, taxas, reparos, casas | [F] Antes dos dupes faltava ouro; depois, preços até mil vezes maiores em alguns servidores (relatos) | [G04](fichas/G04-new-world.md); [Mein-MMO](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789) |

### 2.2 Moeda nos idles online

| Jogo | Fontes de moeda | Drenos de moeda | Dado de escala | Fontes |
|---|---|---|---|---|
| **Milky Way Idle** | Coins de venda a NPC e drops | Taxa de 4% do vendedor, convertida todo dia em *Community Buffs*; 18% na venda de sacos de Cowbells. As Cowbells (premium) somem em upgrades, MooPass, cosméticos, troca de nome, rerolls e buffs de servidor (10 a 20 por minuto) | [F] Saco de 10 Cowbells: ~200 mil Coins (abr/2025) e ~1,19 mi (nov/2026) | [C01](fichas/C01-milky-way-idle.md); [wiki](https://milkywayidle.wiki.gg/wiki/Marketplace); [marketplace.json](https://www.milkywayidle.com/game_data/marketplace.json) |
| **Idle Clans** | Vendas ao NPC (+10% com upgrade de clã), drops, missões | Taxa de 1% sobre vendas de 100 de ouro ou mais; upgrades; casas de clã (até 500 mi); 1 mi para tornar um token premium negociável de novo | [F] Carteira com teto de 2 bi de ouro | [C02](fichas/C02-idle-clans.md); [Player market](https://idleclans.wiki/w/Player_market); [Premium](https://idleclans.wiki/w/Premium_membership_token) |
| **Idlescape** | Loot e NPC | Taxa de 5%; mercado novo a cada liga | — | [C03](fichas/C03-idlescape.md) |
| **IdleMMO** | Venda ao NPC, a principal fonte; o Shrine converte tokens premium em ouro (700 por token, para nível total 600+) | Imposto, o principal dreno: 15% na venda (12% para membros), 13% nas trocas diretas, ordens de compra com taxa não reembolsável e leilão a 12%; Shrine (250 mil a 1,1 mi de ouro por dia); casas | [F] Com a alta do valor de NPC em mar/2026, o imposto de troca dobrou em alguns dias e triplicou em outros | [C04](fichas/C04-idlemmo.md); [blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/); [wiki](https://support.idle-mmo.com/wiki/economy-and-trading/market) |
| **SimpleMMO** | Passos de viagem, PvP, vendas, missões | Cogumelo de energia (30 mil), teleporte por nível (até 250 mil), taxa de 2,5% a 5% em doações; cortes de fonte (teto de ouro por monstro, menos ouro de chefes mundiais) | [F] Diamante (premium) a 0,8–1 mi de ouro (~2025) | [C05](fichas/C05-simplemmo.md); [retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/); [updates](https://web.simple-mmo.com/updates) |
| **Shop Titans** | Venda a clientes NPC | Imposto do mercado que cresce com a duração da listagem, reparo, investimento na cidade da guilda; gemas em baús e talentos | [F] Gema implícita estável no tier baixo de 2021 a 2026; itens de topo em bilhões | [C06](fichas/C06-shop-titans.md); [guia](https://shopkeeper.neocities.org/docs/personal-guides/guide-market) |

### 2.3 Itens

| Jogo | Como os itens nascem | Como os itens morrem | Fontes |
|---|---|---|---|
| **EVE Online** | Mineração e indústria de jogadores; loot de NPC | [F] Destruição em combate: ~1,14 quatrilhão de ISK em naves e itens em 2025, segundo a CCP; só a batalha de M2-XFE destruiu 29,1 tri em ~14 h. Reprocessamento converte itens em minerais | [F01](fichas/F01-eve-online.md); [PC Gamer](https://www.pcgamer.com/games/mmo/eve-online-players-destroyed-1-142-260-784-813-930-isk-worth-of-ships-in-2025-which-according-to-my-caveman-level-maths-amounts-to-over-usd6-million-lost-to-the-void/); [CCP](https://www.eveonline.com/news/view/the-massacre-of-m2-xfe) |
| **Albion Online** | Crafting de jogadores. O loot de PvE vem do Black Market, que só tem itens vendidos por jogadores | [C] Cerca de 30% do equipamento de quem morre em zona vermelha ou preta é destruído e 70% fica para o saque; [F] parte do que se vende ao Black Market se "perde" no caminho | [F02](fichas/F02-albion-online.md); [itemku](https://www.itemku.com/en/blog/albion-online/albion-online-regear-guide-estimating-silver-needed-after-pvp-losses/3945/); [GamingOnLinux](https://gamingonlinux.com/2017/06/albion-onlines-new-black-market-feature-is-sounding-really-interesting) |
| **Old School RuneScape** | Drops e skilling | [F] Item sink: parte do imposto do GE compra e apaga itens de topo escolhidos pela entrada diária estimada, com orçamento e cota | [F03](fichas/F03-runescape-e-osrs.md); [Jagex, 2021](https://secure.runescape.com/m=news/grand-exchange-tax--item-sink?oldschool=1) |
| **Tibia** | Loot | [F] Na morte, 10% de chance por item equipado e a mochila inteira; red e black skull perdem tudo; 5 blessings evitam a perda | [F04](fichas/F04-tibia.md); [manual](https://www.tibia.com/gameguides/?subtopic=manual&section=characters) |
| **Guild Wars 2** | Drops e reciclagem (salvage) | [F] Receitas temporárias na Mystic Forge para absorver excedentes; lendários que consomem, por exemplo, 77 Mystic Clovers e 250 Globs of Ectoplasm num só presente | [F07](fichas/F07-guild-wars-2.md); [John Smith, 2012](https://guildwars2.com/en/news/john-smith-on-the-state-of-the-guild-wars-2-economy/); [wiki](https://wiki.guildwars2.com/wiki/Gift_of_Fortune) |
| **Path of Exile** | Drops | [F] A moeda é o próprio material de craft: cada orb usada sai da economia; o reset de liga é o dreno final [H] | [F05](fichas/F05-path-of-exile.md) |
| **Black Desert** | Grind e crafting | [F] A falha no aprimoramento rebaixa o item e, nos acessórios comuns, destrói o item e a cópia usada; as Cron Stones somem mesmo no sucesso (3.650 por tentativa no último degrau dos Kharazad) | [F08](fichas/F08-black-desert.md); [wiki](https://www.naeu.playblackdesert.com/en-US/Wiki?wikiNo=48) |
| **Shop Titans** | Crafting | [F] O equipamento quebra nas missões; habilidades reduzem a chance em 20% a 40%; reparo com kits ou ouro | [C06](fichas/C06-shop-titans.md) |
| **Diablo III** | Drops | [F] O Loot 2.0 (2014) prendeu lendários à conta: tirou itens do mercado sem destruí-los | [G01](fichas/G01-diablo-3-casa-de-leilao.md); [Shacknews](https://www.shacknews.com/article/83266/diablo-3-patch-201-deploys-with-loot-20) |
| **Diablo II** | Drops (a Stone of Jordan virou moeda) | [F] Vender SoJs ao NPC enche um contador do servidor que invoca o Diablo Clone: um dreno-evento | [G07](fichas/G07-economias-que-colapsaram.md); [Blizzard](https://news.blizzard.com/en-us/article/23762796) |
| **Entropia Universe** | Loot e crafting | [F] Decaimento por uso, medido no valor TT | [G02](fichas/G02-entropia-universe.md) |
| **Axie Infinity** | Reprodução cria Axies | [F] "Liberação" (queima): só 1,3% do estoque | [G03](fichas/G03-axie-infinity-e-web3.md) |
| **IdleMMO** | Coleta e crafting | [F] O Bartering dava até 300 mil de EXP por entrega e levou jogadores a descartar itens míticos, um dreno acidental que o estúdio admitiu como erro | [C04](fichas/C04-idlemmo.md) |
| **Bongo Cat / CS2** | Drop por tempo; caixas | [F] Troca de 10 comuns por 1 mais raro (Bongo Cat). No CS2, a troca de 5 itens Covert por faca ou luva (out/2025) funcionou ao contrário: um conversor que inundou o topo | [G05](fichas/G05-banana-e-bongo-cat.md); [G07](fichas/G07-economias-que-colapsaram.md) |
| **Ultima Online** | Spawns alimentados por um "banco" central de recursos | [F] No ciclo fechado original, todo item destruído voltava ao banco; os jogadores acumularam e o banco secou. Os consumíveis foram o dreno mais aceito | [G07](fichas/G07-economias-que-colapsaram.md); [Simpson](https://gwern.net/doc/economics/1999-04-07-simpson-theingameconomicsofultimaonline.html) |

### 2.4 O que o catálogo mostra

- [H] **Quem destrói itens em massa ajusta a moeda só no detalhe.** EVE e Albion fazem do equipamento um consumível; a moeda é calibrada por taxas. Jogos que não destroem itens (Diablo III antes do Loot 2.0, Standard do PoE, SimpleMMO) acumulam estoque e veem o preço do topo explodir.
- [H] **A torneira número 1 dos idles é a venda ao NPC.** IdleMMO, Idle Clans e Milky Way Idle têm na conversão item → ouro a principal entrada de moeda. É a "torneira de ouro" que Koster viu nos lojistas do Ultima Online ([Koster](https://www.raphkoster.com/?p=16263)). Quem controla o preço de NPC controla a emissão.
- [F] **As taxas de transação vão de 1% a 35%**: Idle Clans 1%, OSRS 2%, MWI 4%, Torn 5%, Idlescape 5%, EVE 7,5% mais corretagem, Albion 6,5% a 10,5% por ordem, GW2 15%, IdleMMO 15%, TL 20%, BDO 35% (fichas citadas acima). [H] As mais altas aparecem onde a taxa também é receita ou vende assinatura (TL e BDO). A faixa de 4% a 15% é a dos jogos que usam a taxa só como dreno.
- [H] **Nem todo "imposto" é dreno.** O ISK gasto em PLEX vai para quem vendeu o token; 40% do imposto do castelo do TL voltam como prêmio. Contar transferência como dreno superestima o controle da inflação.
- [H] **Dreno que é receita gera desconfiança.** No Entropia e no TL, o mesmo número que segura a economia é o faturamento da empresa, e todo ajuste parece aumento da margem da casa ([G02](fichas/G02-entropia-universe.md); [F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
- [H] **Conversão premium → ouro é torneira.** O Shrine do IdleMMO emite ouro a partir de tokens pagos; o MWI recusou uma troca direta de Cowbell por Coins justamente por ser inflacionária ([enquete do MWI](https://steamcommunity.com/app/3224420/discussions/0/600776571073120773)). Quando o premium compra ouro de outro jogador, não há emissão; quando compra ouro do sistema, há.

## 3. Inflação, deflação e concentração: o que os dados mostram

### 3.1 O termômetro do token

[H] Todo jogo com um token de preço fixo em dinheiro e preço livre em moeda do jogo ganha de graça um índice público: quanto ouro um dólar compra. Montamos as séries disponíveis. O "ritmo anual" é a taxa geométrica equivalente, calculada por nós.

| Token | Série (moeda do jogo por token) | Variação | Ritmo anual [H] | O que mais moveu o preço |
|---|---|---|---|---|
| **WoW Token** (América do Norte) | [F] 30 mil de ouro (abr/2015; ~20 mil em 24 h) → mais de 400 mil (out/2023) → 185–190 mil (set/2024) → ~304,5 mil (nov/2026, sem data exata) ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/WoW_Token); [Wowhead](https://www.wowhead.com/news/wow-token-price-breaks-400k-all-time-high-in-north-america-335416); [fórum](https://us.forums.blizzard.com/en/wow/t/wow-token-price-hike/1965815); [wow.gg](https://wow.gg/auction-house/token)) | ×10 em 11,6 anos | ~+22% | Desde 2017 o token também vira saldo Battle.net, o que amplia a demanda; sobe antes de raides e cai em secas de conteúdo ([F06](fichas/F06-world-of-warcraft.md)) |
| **Guild Wars 2**: 100 gemas | [F] 0,27 de ouro (set/2012) → 20,66 (mai/2015) → 40,65 (nov/2026) ([análise histórica](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis); [API](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000)) | ×76 em 2,7 anos; depois ×2 em 11,5 anos | ~+400% no início; ~+6% depois | Fontes generosas e drenos descalibrados no lançamento ([F07](fichas/F07-guild-wars-2.md)) |
| **Albion**: Gold (Américas) | [F] ~3.400 Silver (nov/2021) → 4.900–5.300 (2023) → 7.700–8.400 (2025) → ~9.000 (nov/2026), dados de terceiros ([API 2021](https://west.albion-online-data.com/api/v2/stats/gold.json?date=11-07-2021&end_date=11-08-2021); [API 2026](https://west.albion-online-data.com/api/v2/stats/gold.json?count=24)) | ×2,6 em 5 anos | ~+21% | A taxa sobre a compra de Gold (2023) não segurou a tendência; o dev atribuiu a queda do Premium a drenos novos ([F02](fichas/F02-albion-online.md); [Eltharyon](https://devtrackers.gg/albion/p/5596ca00-gold-market-purchase-fee-set-to-0)) |
| **Milky Way Idle**: saco de 10 Cowbells | [C] acima de 400 mil antes do Steam ([thread](https://steamcommunity.com/app/3224420/discussions/0/600784500009537616/)); [F] ~200 mil (abr/2025, [enquete oficial](https://steamcommunity.com/app/3224420/discussions/0/600776571073120773)) → ~1,19 mi de média (nov/2026, [marketplace.json](https://www.milkywayidle.com/game_data/marketplace.json)) | ×6 em 19 meses; ×3 contra o nível pré-Steam | ~+200% desde o fundo | A chegada de pagantes com o Steam derrubou o saco; depois, emissão de Coins sem dreno à altura ([C01](fichas/C01-milky-way-idle.md)) |
| **EVE**: PLEX (The Forge) | [F] 2,55 mi de ISK (mai/2017) → 2,75 mi (jan/2022) → média de 6,1 mi (jul/2024–abr/2025) → 4,2 mi (início de 2026), acima de 5 mi depois de uma grande promoção da loja (mar/2026) e ~4,5 mi depois ([Nosy Gamer](https://nosygamer.blogspot.com/2025/04/new-changes-to-plex.html); [TAGN](https://tagn.wordpress.com/category/eve-online/eve-monthly-economic-report/)) | estável por 5 anos; ×2,2 em 3; −26% em 2025–26 | ~+1,6% (2017–22) | PLEX distribuído de graça em objetivos diários, eventos e Twitch Drops, e mercado global único desde jul/2025 ([F01](fichas/F01-eve-online.md)) |
| **OSRS**: Bond | [F] 14,57 mi de gp (16/05/2026) → 10,74 mi (11/11/2026); mínimo de 9,56 mi em 01/11/2026 ([API oficial do GE](https://secure.runescape.com/m=itemdb_oldschool/api/graph/13190.json)) | −26% em 6 meses | — | Causa não investigada. Mostra que o token também cai |
| **Torn**: point | [F] US$ 67 mil (início de 2016) → 53 mil (fim de 2016) → ~51,5 mil (fev/2019) → ~49 mil (abr/2022) ([Review 2016](https://www.torn.com/economic_reports/2016review.pdf); [TCT, 2019](https://torncitynewspaper.blogspot.com/2019/02/market-report-february.html); [TCT, 2022](https://torncitynewspaper.blogspot.com/2022/05/market-report-april.html)) | −27% em 6 anos | ~−5% | Mais points vindos de rota de jogo (as vendas ao museu triplicaram de 2018 para 2019), enquanto a massa de dinheiro crescia ~16% ao ano ([D01](fichas/D01-torn.md)) |
| **Black Desert**: teto em prata dos itens de pérola (câmbio administrado) | [F] 473 mi → 840 mi (mai/2022) → 1,63 bi (set/2023) ([Mein-MMO](https://mein-mmo.de/en/mmorpg-black-desert-makes-changes-to-in-game-currency-players-immediately-complain-about-pay2win,821091); [aviso oficial](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896)) | ×3,4 | — | A prata média por jogador ativo foi multiplicada por 5 a 6 entre 2019 e 2023, ~+50% ao ano [H] ([F08](fichas/F08-black-desert.md)) |
| **EverQuest**: Krono (Oakwynd) | [F] ~65 mil de platina → 2 mi, com pico perto de 4 mi, em dias (nov/2023) ([Mein-MMO](https://mein-mmo.de/en/the-economy-of-a-large-old-mmorpg-is-currently-being-destroyed-someone-gave-me-a-million-gold-as-a-welcome,1061366); [EverQuest Guides](https://www.everquestguides.com/everquest-articles/oakwynd-krono-price-tracking-post-duplication-hack/)) | ×30 a ×60 | — | Dupe ([G07](fichas/G07-economias-que-colapsaram.md)) |
| **Ultima Online** (câmbio do mercado cinza) | [F] ~200 de ouro por US$ 1, estável por anos; depois a moeda passou a valer cerca de cem vezes menos ([Koster](https://www.raphkoster.com/?p=16263)) | ÷100 | — | Coleta facilitada na fase Renaissance, um "subsídio radical" |

**Leitura [H]:**

- **O token mede duas coisas ao mesmo tempo:** a inflação da moeda e a oferta e a demanda do próprio token. Em três casos o token caiu enquanto a massa de moeda crescia: EVE em 2025–26 (PLEX grátis e mercado global), Torn em 2016–22 (rota de jogo pelo museu) e OSRS em 2026, num jogo cuja própria desenvolvedora admite que os drenos não acompanham a entrada de gold. Mais pagantes (MWI depois do Steam) ou mais usos para o token (saldo Battle.net no WoW) também mexem no preço sem que a moeda mude. Ler o token como índice de preços puro leva a diagnóstico errado; ele precisa de uma cesta de bens e da massa monetária ao lado.
- **A inflação mais destrutiva é a do lançamento.** No GW2 o ouro perdeu ~98% do valor em dólar nos primeiros 2,5 anos e depois passou a inflar ~6% ao ano. É a melhor referência de longo prazo da amostra.
- **WoW e Albion vivem com ~20% ao ano.** Nenhum dos dois quebrou, mas o custo em ouro de tudo o que o token compra subiu na mesma proporção para quem não paga.
- **Régua provisória** para a nossa simulação: um dígito por ano contra o token é saudável; dois dígitos, inflação crônica; três dígitos, problema de lançamento ou de desenho (o MWI).

### 3.2 Quando a moeda cresce e os preços caem: massa, velocidade e produção

- [F] **EVE, 3º trimestre de 2007:** a massa de ISK foi de 75 para pouco mais de 90 trilhões, e os preços ao produtor e ao consumidor caíram. O comentarista notou que, sem PIB nem velocidade da moeda, era difícil interpretar o dado ([Felix Salmon, 15/11/2007](https://www.felixsalmon.com/2007/11/virtual-deflation/)).
- [F] **EVE, 1º trimestre de 2008:** o boletim trimestral abriu com o tema da deflação e trazia índices de minerais, produtos primários, secundários e bens de consumo, todos com base 100. A resenha avaliou que a oferta de bens tinha acompanhado ou superado a de moeda ([Engadget, 17/11/2008](https://www.engadget.com/2008-11-17-making-money-eve-economic-review-reviewed.html)).
- [F] **EVE, 2025–2026:** a massa de ISK subiu 7,5% em 12 meses até nov/2025 ([Nosy Gamer](https://nosygamer.blogspot.com/2025/12/eve-onlines-november-2025-monthly.html)). Em 12 meses até fev/2026, o índice de minerais caiu ~52%, o de naves ~21% e o de módulos ~13%, e a velocidade do ISK seguiu em queda ([TAGN, post de 13/03/2026](https://tagn.wordpress.com/category/eve-online/eve-monthly-economic-report/)). O MER publica um gráfico de velocidade da moeda entre seus 23 gráficos ([MER set/2026](https://www.eveonline.com/news/view/monthly-economic-report-september-2026)).
- [H] **Leitura pela equação de trocas (M·V = P·Q):** se os jogadores entesouram (V cai) e a produção cresce (Q sobe, com mais mineração, automação ou bots), os preços caem mesmo com a massa subindo. A massa isolada não diz se há inflação. Num idle esse quadro é o padrão: Q cresce sozinho, porque a produção roda 24 horas, e V tende a ser baixo, porque o jogador está ausente e a carteira acumula. O dinheiro parado pode voltar de uma vez: o "Active ISK Delta" do EVE, o ISK que entra e sai com jogadores que voltam ou se afastam, foi de +82,2 tri em ago/2026 a −144,7 tri em set/2026 ([MER set/2026](https://www.eveonline.com/news/view/monthly-economic-report-september-2026)).
- [H] **Conta de ordem de grandeza (EVE, jan/2026):** o gasto no mercado foi de ~841 tri de ISK (533,2 tri em itens de jogo, 132,5 tri em acessórios ligados à loja e 175,1 tri em PLEX, segundo o [Nosy Gamer](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html)). Isso equivale a ~32% da massa de nov/2025 (2.614,5 tri): um giro de mercado de ~3,9 vezes por ano. As fontes do mês (203,6 tri) somaram ~7,8% do estoque.
- [F] **Torn:** o banco central do jogo trabalha com meta explícita de expansão monetária abaixo de 20% ao ano, para evitar hiperinflação. A oferta cresceu 15,8% em 2016 e 16,3% em 2018, e o economista mediu o impacto de uma feature nova (+0,2% da massa) antes de lançá-la ([D01](fichas/D01-torn.md); [Review 2016](https://www.torn.com/economic_reports/2016review.pdf); [TCT, 2019](https://torncitynewspaper.blogspot.com/2019/08/economic-report-summary.html)).
- [F] **Black Desert:** com a renda diária de prata por jogador ativo multiplicada por 5 a 6 em quatro anos, a Pearl Abyss desvalorizou a prata frente aos itens pagos, subindo o teto em 94% de uma vez ([aviso oficial, set/2023](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896)).
- [F] **EverQuest II (2009):** com 314 milhões de transações de quatro meses, Castronova e colegas viram agregados (produção, consumo, massa monetária) que se comportam como os de economias reais, mas com oscilações bem maiores ([USC Annenberg](https://annenberg.usc.edu/node/18646); [registro do artigo](https://vivo.colorado.edu/display/pubid_147301)). Segundo a imprensa, a inflação passou de 50% em cinco meses quando os jogadores correram para itens novos ([IBTimes](https://ibtimes.com/virtual-economies-videogames-used-case-studies-333430)); não conferi no texto do artigo.

### 3.3 O erro do lado oposto: deflação e escassez

- [F] **Ultima Online:** no ciclo fechado, os jogadores acumularam (um personagem tinha mais de dez mil camisas iguais) e o banco de recursos secou. A progressão por uso fez artesãos fabricarem sem demanda, e o preço dos bens básicos despencou ([Simpson](https://gwern.net/doc/economics/1999-04-07-simpson-theingameconomicsofultimaonline.html)).
- [F] **New World, antes dos dupes:** poucas fontes e muitos custos; a falta de ouro levou jogadores de volta ao escambo ([G04](fichas/G04-new-world.md); [Mein-MMO](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789)).
- [F] **EVE, "era da escassez" (2020–2021):** a CCP cortou a distribuição de minerais sob o lema de que a escassez gera guerra. Em jul/2021, o pico de jogadores simultâneos foi de 22.645, o menor desde 2006, e os motivos apontados foram o custo de repor naves e a vantagem de quem acumulou antes ([Ecosystem Outlook](https://eveonline.com/article/qm06cu/); [Mein-MMO](https://mein-mmo.de/en/mmorpg-eve-online-is-in-crisis-lowest-player-numbers-in-15-years,697861)).
- [F] **SimpleMMO, 2022:** a série de drenos e o teto de ouro por monstro vieram com revolta reconhecida pelo próprio estúdio ([retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [H] **Lição:** escassez imposta de cima pune quem está começando ou reconstruindo, não quem já acumulou. Para controlar estoque, drenos desejáveis funcionam melhor que cortes de fonte. E deflação de bens básicos é sentida pelo produtor como "meu trabalho não vale nada", o que num idle de produção é a pior mensagem possível.

### 3.4 Concentração de riqueza

**O que se mediu:**

- [F] **EVE (Hooper, DiGRA 2020):** com dados internos da CCP de 26/07/2020, o artigo usa o coeficiente de Gini e conclui que a riqueza é mais concentrada que na economia real e "fortemente correlacionada" com o tempo de jogo ([DiGRA](https://dl.digra.org/index.php/dl/article/view/1187)). Segundo o resumo do PlayLab da Universidade de Tampere, os 10% mais ricos tinham 98,26% da riqueza (85,34% entre quem jogou mais de 20 horas), contra 81,7% no mundo real; 82,65% da riqueza estava em itens e só 17,35% em ISK. A riqueza acompanha as horas jogadas, não a idade da conta, e a mediana se alcança com ~120 horas ([PlayLab, 06/05/2021](https://blogs.tuni.fi/playlab/game-research-highlights/the-dedicated-get-richer/)). O valor do Gini não aparece no resumo, e o PDF não pôde ser lido aqui.
- [F] **Guild Wars 2, beta (2012):** o infográfico de John Smith dizia que a riqueza estava mais bem distribuída que a dos EUA em 2007 ([Kotaku](https://kotaku.com/the-guild-wars-2-economy-as-seen-by-its-dark-and-myster-5937545); [F07](fichas/F07-guild-wars-2.md)). [H] Medida antes de qualquer acúmulo, não diz nada sobre a economia madura.
- [F] **Star Wars Galaxies:** Koster comparou a distribuição de riqueza do jogo com a de economias reais e disse que nem as piores economias de "barões ladrões" eram tão desiguais (resumo de busca de um espelho do Slashdot de 2004: [slashdot.mozz.us](https://slashdot.mozz.us/stories/04/05/10/0338234/?score=3)).

**Mecanismos que concentram** (casos das fichas; a leitura é nossa [H]):

1. **Renda proporcional ao tempo.** No EVE, ao tempo jogado. Num idle com renda offline, ao tempo de calendário: a riqueza passaria a acompanhar a idade da conta, o oposto do que o Hooper encontrou no EVE, e a vantagem de quem chegou primeiro ficaria permanente.
2. **Capital produtivo que se paga.** Quem acumulou na era das Rorquals (2016–2019) enfrentou a escassez de 2021 com estoque ([F01](fichas/F01-eve-online.md)).
3. **Benefícios que crescem com o volume.** O desconto de taxa do Value Pack favorece quem mais vende ([F08](fichas/F08-black-desert.md)); o Premium do Albion dá +50% de Silver e corta as taxas pela metade ([F02](fichas/F02-albion-online.md)).
4. **Tesouros coletivos para quem já vence.** O imposto do castelo do TL engorda as guildas do topo ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
5. **Capital comprado que vira poder de mercado.** No MWI, sacos de Cowbells vendidos por ouro dão a quem paga liquidez para dominar livros ([C01](fichas/C01-milky-way-idle.md)).
6. **Multicontas.** Cadeias de alts canalizam itens para a conta principal (IdleMMO); o multiboxing aparece em 9 das 10 reviews negativas mais úteis do ano no EVE ([C04](fichas/C04-idlemmo.md); [_notas-de-sintese](_notas-de-sintese.md)).
7. **Novidade cotada na moeda dos veteranos.** Bens de oferta limitada passam a ter preço que só o veterano paga ([02a, seção 9.2](02a-teoria-design-idle.md)).

**Mecanismos que desconcentram:**

1. **Drenos progressivos:** blessings com preço por nível no Tibia; teleporte com custo por nível no SimpleMMO; custos exponenciais em geral ([F04](fichas/F04-tibia.md); [C05](fichas/C05-simplemmo.md)).
2. **Drenos de luxo no topo:** o Brutosaur de 5 milhões no WoW e o item decorativo de ouro que os economistas contratados pela Jagex propuseram em 2021 ([F06](fichas/F06-world-of-warcraft.md); [mmofallout, 04/11/2021](https://mmofallout.com/jagex-hires-real-world-economists-in-runescape)).
3. **Recomeço:** mundos Fresh Start do New World (pico de 137.755 contra 77.642 com a expansão), ligas do PoE e do Idlescape ([G04](fichas/G04-new-world.md); [C03](fichas/C03-idlescape.md)).
4. **Válvulas para os pequenos:** zonas de saque que dão a guildas menores uma fatia do cofre do castelo no TL ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
5. **Tetos por conta:** barras de energia e um refill por dia no Torn; carteira de até 2 bi no Idle Clans; listagem limitada ao patrimônio no Shop Titans ([D01](fichas/D01-torn.md); [C02](fichas/C02-idle-clans.md); [C06](fichas/C06-shop-titans.md)).
6. **Retorno decrescente dos atalhos pagos:** os injetores de SP do EVE ([F01](fichas/F01-eve-online.md)).
7. **Prender à conta o que se farma:** Loot 2.0 no Diablo III e bAXS no Axie ([G01](fichas/G01-diablo-3-casa-de-leilao.md); [G03](fichas/G03-axie-infinity-e-web3.md)).

**Como medir sem se enganar [H]:** o Gini sobre todas as contas é dominado por contas novas e abandonadas (98% contra 85% no EVE ao filtrar por 20 horas). Medir por coortes de atividade, publicar a fatia do 1% e do 10% mais ricos entre contas ativas e incluir itens a preço de mercado, já que no EVE eles são mais de 80% da riqueza. Um Gini só de moeda engana.

## 4. Teoria e literatura

### 4.1 Zachary Booth Simpson e o Ultima Online (1999–2000)

O texto fundador do modelo de torneira e ralo, apresentado na Computer Game Developers Conference de 2000 ([Simpson, "The In-game Economics of Ultima Online"](https://gwern.net/doc/economics/1999-04-07-simpson-theingameconomicsofultimaonline.html)):

- [F] **Entradas e saídas.** Itens entram sobretudo pelo loot de monstros, pelo crafting e por lojistas NPC que criam bens "do nada". Na estrutura que substituiu o ciclo fechado, o ouro entra pelo loot e pelas compras feitas por NPCs. Os itens saem por cinco ralos (fabricação que falha, degradação, decaimento, consumo e destruição pelo NPC) e o ouro por dois (compras em NPC e aluguel de vendedores).
- [F] **O que os jogadores aceitaram.** Falha de fabricação, degradação e decaimento foram rejeitados como artificiais; o consumo foi aceito. Vender ao NPC era popular porque parecia lucro, mas o autor observa que isso não é dreno de bens: é conversão de bens em ouro recém-impresso.
- [F] **Incentivo mal desenhado e a correção.** O aluguel dos vendedores, cobrado sobre o preço dos recursos, transformou os vendedores em depósito barato, com preços absurdos. A correção foi cobrar aluguel sobre o valor que o próprio jogador atribuía ao item. As casas decaem se o dono não as visita, há uma por personagem, e a compra de escrituras virou um grande dreno de ouro.
- [F] **Falsificação.** Um bug de clonagem gerou inflação estimada em "centenas de milhares a milhões" de vezes e destruiu a economia de ouro; os jogadores recorreram ao escambo e à caridade. O autor formula a "Hacker's Law": exploits são achados mais rápido do que são corrigidos.
- [F] **Sinais de falência** listados por ele: veteranos dando equipamento, novatos sem nada para vender, inventários inchados, itens largados pelo mundo, falta do que comprar, escambo no lugar da moeda e preços muito voláteis ([G07, seção 5](fichas/G07-economias-que-colapsaram.md)).
- [H] **O que vale até hoje:** o ouro precisa de um destino desejado; o dreno aceito é o consumo, não a punição; e cobrar sobre o valor declarado pelo próprio jogador alinha incentivos. É o mesmo princípio que levou o IdleMMO a calcular o imposto sobre o valor de mercado ([C04](fichas/C04-idlemmo.md)).

### 4.2 Raph Koster

- [F] Koster, que escreve a partir do próprio trabalho no UO, descreve a economia do jogo como "radicalmente subsidiada", com lojas de NPC funcionando como torneira de ouro e drenos fracos demais, mesmo com desgaste de itens. O câmbio ficou em ~200 de ouro por dólar durante anos e depois caiu para cerca de um centésimo. A inflação é cara de corrigir porque recompensas, preços de casas e custos fixos estão todos na moeda, e os jogos online costumam fechar o ciclo com um wipe ([Koster, "The evolution of UO's economy"](https://www.raphkoster.com/?p=16263), via [02a](02a-teoria-design-idle.md)).
- [F] No ensaio "Economies in a virtual setting", ele conta que o UO abandonou a simulação econômica realista porque não era divertida: lojas abarrotadas, falências e oscilações de preço desestabilizavam o jogo. Os jogadores esperam vender o que fabricam a preço estável e tratam a falta de lucro como bug. A preocupação que sobrou com a economia movida por jogadores é se o novato ainda consegue os bens para começar ([raphkoster.com](https://raphkoster.com/gaming/economy.shtml)).
- [F] Nas "Laws of Online World Design", a economia de torneira e ralo é aquela em que o novo é gerado, se acumula no jogo e sai por um ralo; no vocabulário dele, *sink* é o reservatório, não o dreno (resumo de busca de [raphkoster.com/gaming/laws.shtml](https://raphkoster.com/gaming/laws.shtml)). [H] Hoje *sink* virou sinônimo de dreno. Neste estudo, "dreno" é sempre o que destrói.
- [H] **O que importa para nós:** inflação é barata de criar e cara de desfazer. Como tudo está cotado na moeda, revertê-la exige reprecificar o mundo inteiro ou recomeçar do zero.

### 4.3 Edward Castronova

- [F] **2001, *Virtual Worlds: A First-Hand Account of Market and Society on the Cyberian Frontier*** (CESifo Working Paper 618): com trabalho de campo em Norrath (EverQuest) de abril a setembro de 2001, Castronova estimou um PNB per capita entre o da Rússia e o da Bulgária, um salário nominal de ~US$ 3,42 por hora e ~60 mil pessoas presentes a qualquer momento ([CESifo](https://www.cesifo.org/DocDL/cesifo_wp618.pdf); [Wikipedia](https://en.wikipedia.org/wiki/Edward_Castronova)).
- [H] O artigo mostrou que o tempo passado num mundo virtual produz bens com preço em dinheiro real. Logo, a demanda por RMT é estrutural, não uma anomalia: o canal oficial (Bond, PLEX) existe para capturar uma demanda que surgiria de qualquer jeito.
- [F] **2009, "As real as real? Macroeconomic behavior in a large-scale virtual world"** (*New Media & Society*, com Williams, Shen, Ratan, Xiong, Huang e Keegan): com 314 milhões de transações do EverQuest II, os agregados seguiram padrões do mundo real, com oscilações maiores. Um mundo novo aberto com as mesmas regras reproduziu rápido os agregados dos antigos, o que os autores leram como prova de que o código é a lei ([USC Annenberg](https://annenberg.usc.edu/node/18646); [registro](https://vivo.colorado.edu/display/pubid_147301)).
- [H] **Para nós:** se as regras determinam os agregados, a simulação da Fase 3 tem valor preditivo. E cada servidor de temporada vai repetir a mesma curva macro, inflação de lançamento incluída, a menos que as regras mudem.

### 4.4 Lehdonvirta e Castronova, *Virtual Economies: Design and Analysis* (MIT Press, 2014)

- [F] Publicado em maio de 2014 (ISBN 9780262027250), o livro apresenta aos desenvolvedores os fundamentos de mercados, instituições e dinheiro para criar ou analisar economias de bens virtuais com escassez artificial. A ênfase é a microeconomia elementar, com partes de economia comportamental, macroeconomia e sociologia do consumo, e o escopo inclui jogos, Bitcoin e os pontos, curtidas e seguidores das redes sociais ([Oxford Internet Institute](https://www.oii.ox.ac.uk/?p=9173); [DOI](https://doi.org/10.7551/mitpress/9525.001.0001)).
- [F] Um resumo de leitura de terceiro descreve as "torneiras" do livro como os mecanismos que criam itens ou moeda e que a publicadora regula por taxas de spawn e tabelas de loot ([Antoine Buteau](https://www.antoinebuteau.com/virtual-economies-book-summary/)). É resumo de terceiro, não o texto.
- [NV] Não consegui o sumário: as páginas da MIT Press devolveram 403. Lembro que o livro trata de oferta de moeda e de métricas macroeconômicas, mas não confirmei os capítulos.
- [H] **A contribuição central para nós:** num mundo virtual a escassez é escolhida pelo designer, não dada pela natureza. A economia vira ferramenta de design (engajamento, justiça, monetização), e cada parâmetro de escassez é uma decisão política.

### 4.5 Economistas dentro dos estúdios

| Quem | Onde e quando | O que fez | Lição para nós |
|---|---|---|---|
| **Eyjólfur Guðmundsson** | CCP, contratado em jun/2007; saiu em 2014 | [F] Boletim trimestral sobre inflação, crescimento e preços, com índices de minerais, produtos primários, secundários e bens de consumo. Frase de apresentação: "Economic information is the lifeblood of the game" ([CCP, 27/06/2007](https://community.eveonline.com/news/news-channels/press-releases/eve-online-appoints-in-world-economist-1); [Engadget](https://www.engadget.com/2008-11-17-making-money-eve-economic-review-reviewed.html); [F01](fichas/F01-eve-online.md)) | [H] O mesmo dado para todos, publicado com regularidade, é parte do jogo |
| **CCP Quant, CCP Larrikin e o EVE Online Economic Council** | CCP; MER assinado por Quant (2017) e Larrikin (2018), hoje pelo conselho, que já existia em 2020 | [F] MER mensal com 23 gráficos (fontes e drenos, massa monetária, velocidade, índices, destruição) e dados brutos em zip; pesquisas de percepção sobre bots ([MER set/2026](https://www.eveonline.com/news/view/monthly-economic-report-september-2026); [Q1 2020](https://www.eveonline.com/article/qcig37/Q1%20Economy%20Review)) | [H] Publicar dados brutos expõe erros (um blogueiro achou um erro de 9% na massa, segundo o [Nosy Gamer](https://nosygamer.blogspot.com/2025/12/eve-onlines-november-2025-monthly.html)), mas dá auditoria de graça |
| **John Smith** | ArenaNet, 2012–2017 | [F] Definiu exploit como laço que cria valor sem custo e leva à hiperinflação; usou receitas temporárias na Mystic Forge para absorver excedentes; em 2015 pôs a escassez no centro, cortou a principal fonte de ouro e avisou que viria instabilidade ([blog, 2012](https://guildwars2.com/en/news/john-smith-on-the-state-of-the-guild-wars-2-economy/); [blog, 2015](https://www.guildwars2.com/en/news/the-guild-wars-2-heart-of-thorns-economy)) | [H] Decisão impopular chega com o porquê e com aviso |
| **Yanis Varoufakis** | Valve, 2012 | [F] Estudou o escambo do Team Fortress 2 com dados de preço completos. Esperava que um item virasse moeda, mas o escambo seguiu dominante; montou um índice de potencial de arbitragem (nov/2011 a mai/2012) e recomendou mostrar os preços correntes dos itens populares, para aumentar as trocas e reduzir a arbitragem ([texto original, espelho](https://gwern.net/doc/economics/2012-varoufakis-teamfortress2arbitrage.html); [Engadget](https://www.engadget.com/2012-06-25-valve-economist-examines-tf2s-sophisticated-barter-system.html)) | [H] Transparência de preço é política econômica: tira a renda de quem vive da informação |
| **Lt_Wolf** | Torn; assinou o relatório de 2019 (a série pública começou em 2016) | [F] Meta de expansão monetária abaixo de 20% ao ano; impacto de feature medido antes do lançamento ([D01](fichas/D01-torn.md)) | [H] Meta pública e análise de impacto prévia |
| **Economistas contratados pela Jagex** | OSRS, 2021 | [F] Ajudaram a montar o pacote contra a inflação: imposto no GE, item sink pago pela arrecadação, ampliação do banco por ~888 mi de ouro no total e um item decorativo de ouro para as casas; só os dois últimos iriam a voto ([mmofallout, 04/11/2021](https://mmofallout.com/jagex-hires-real-world-economists-in-runescape)) | [H] Drenos em pacote, com o que é política monetária fora do voto |
| **Ramin Shokrizade** (externo) | Crítica ao GW2, 2013 | [F] Chamou o mercado de itens antes do fim de jogo de um dos piores que estudou e elogiou a moeda "apertada", o câmbio de gemas como dreno e as moedas de prestígio ([Game Developer](https://www.gamedeveloper.com/design/guild-wars-2-economy-review)) | [H] Cada faixa do jogo precisa de demanda própria |

### 4.6 A academia sobre intervenções

- [F] **OSRS, imposto e item sink (Hogan-Hennessy, Xenopoulos e Silva, 2022):** com métodos de inferência causal, o estudo concluiu que o imposto não mudou de forma relevante o volume negociado em torno dos limites de isenção, que o item sink contribuiu para a alta de preços dos bens de luxo sem reduzir o volume e que o mercado ilícito de gold quase não foi afetado ([arXiv](https://arxiv.org/abs/2210.07970)).
- [H] **Leitura:** um imposto de 1% quase não muda comportamento; ele drena, mas não empurra ninguém. O item sink sustenta o preço do luxo, o que é exatamente o objetivo de tirar oferta. E nenhum dreno resolve o RMT: isso pede o canal oficial com fiscalização (Bonds, [F03](fichas/F03-runescape-e-osrs.md)).

### 4.7 Velocidade e métricas

- [F] A equação de trocas liga massa (M), velocidade (V), nível de preços (P) e volume real (Q): M·V = P·Q ([Wikipedia](https://en.wikipedia.org/wiki/Equation_of_exchange)). O coeficiente de Gini vai de 0 (todos iguais) a 1 (um só tem tudo) ([Wikipedia](https://en.wikipedia.org/wiki/Gini_coefficient)).
- [F] Os dois painéis mais completos publicados são o MER do EVE (fontes e drenos por categoria, massa, velocidade, índices de preço com base 2018, destruição, produção, mineração) e os relatórios anuais do Torn (massa e sua meta, preço do point) ([MER set/2026](https://www.eveonline.com/news/view/monthly-economic-report-september-2026); [D01](fichas/D01-torn.md)).
- [H] **Por que a velocidade importa mais num idle:** uma taxa de transação drena τ·V·M por período. Se os jogadores entesouram, V cai e o dreno enfraquece justamente quando o estoque cresce. É o caso do EVE em 2025–26 (seção 3.2), e o idle tende a ele por natureza.

## 5. O problema específico do idle

### 5.1 Por que a renda idle infla mais rápido

[H] Num MMO comum, a emissão é limitada pela atenção: alguém precisa estar lá para matar o monstro. Num idle, três multiplicadores agem ao mesmo tempo:

1. **Tempo de calendário, não tempo de jogo.** A torneira roda offline, 24 horas por dia, para todos; o descompasso entre fonte e dreno aparece mais rápido que num MMO ([G07, seção 2.15](fichas/G07-economias-que-colapsaram.md)).
2. **Crescimento com a progressão.** A eficiência de um idle cresce em ordens de grandeza. Se ela alimenta moeda negociável, a emissão por conta cresce do mesmo jeito ([02a, seção 9.2](02a-teoria-design-idle.md)).
3. **Número de contas.** Cada conta extra é mais uma torneira, com custo marginal quase nulo. [F] No Banana, ~2/3 dos jogadores eram bots, e no Bongo Cat, cerca de metade ([G05](fichas/G05-banana-e-bongo-cat.md)); no IdleMMO, a trapaça principal são cadeias de contas secundárias que canalizam itens para a principal ([C04](fichas/C04-idlemmo.md)).

O que os idles online relatam:

- [F] **SimpleMMO**, nas palavras do próprio estúdio: o ouro ficou tão comum que deixou de pesar nas decisões, os preços subiram, a progressão ficou mais difícil para os novos e os veteranos passaram a guardar montanhas de ouro sem sentido ([blog do IdleMMO, 21/03/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)). A causa foram fontes de ouro que crescem com o nível, sem teto ([C05](fichas/C05-simplemmo.md)).
- [F] **IdleMMO**: em períodos movimentados, o ouro entra mais rápido do que sai. A principal fonte é a venda ao NPC; o maior dreno, o imposto de troca; as masmorras são outro grande dreno. O mesmo número, o valor de NPC, define a entrada de ouro, a base do imposto e o preço mínimo de listagem. Pelas contas do estúdio, mesmo que todos os itens lendários e míticos de dois anos fossem vendidos ao NPC pelos valores novos, os itens comuns de skill, como minérios, gerariam a mesma quantidade de ouro em 10 a 20 dias (mesma fonte). [H] A torneira está no volume dos comuns, não no raro.
- [F] **IdleMMO, teto offline**: ao planejar a ampliação do tempo idle (personagem principal de 3 para 8 horas; secundário de 2 para 3 horas), o estúdio disse estar atento à "possível enxurrada de itens extras" e previu ajustes nas skills e nos bônus do Shrine, além de tornar as contas secundárias menos eficientes que a principal ([blog, 11/03/2025](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/)). [H] Todo aumento do teto offline é uma decisão de política monetária.
- [F] **Milky Way Idle**: o saco de Cowbells subiu ~6 vezes em ouro em 19 meses ([C01](fichas/C01-milky-way-idle.md)).
- [H] **Concentração por idade de conta.** Se a renda acompanha o tempo de calendário, a riqueza acompanha a idade da conta, e não as horas de decisão (seção 3.4). Sem válvula, quem chega no segundo ano encontra preços cotados na moeda de quem chegou no primeiro.

### 5.2 Um modelo de bolso

[H] Chame de **E** a emissão diária de moeda negociável e separe três famílias de dreno:

- **Proporcional à atividade**, a·E: custo por ação, consumíveis, imposto sobre a recompensa (como os 11% das corporações NPC do EVE, [F01](fichas/F01-eve-online.md)).
- **Proporcional ao comércio**, τ·V·M: a taxa de mercado τ incide sobre o que gira; V é a fração da massa que troca de mãos por dia.
- **Proporcional ao estoque**, s·M: compras de luxo, manutenção, decaimento.

A massa evolui como dM/dt = (1 − a)·E − (τ·V + s)·M e tende ao equilíbrio **M\* = (1 − a)·E ÷ (τ·V + s)**, com constante de tempo 1 ÷ (τ·V + s).

Exemplo numérico com E = 1 bilhão por dia:

| Cenário | Parâmetros | M\* (equilíbrio) | Tempo característico | Leitura |
|---|---|---|---|---|
| Só taxa de mercado | a = 0; τ = 5%; V = 1% ao dia (giro de ~3,7 vezes por ano, perto do EVE); s = 0 | 2 trilhões (2.000 dias de emissão) | ~5,5 anos | A massa cresce quase em linha reta por anos: inflação contínua |
| + consumo embutido | a = 70%; τ, V e s como acima | 600 bilhões | ~5,5 anos | O nível cai a 30%, e o crescimento inicial também |
| + dreno de estoque | a = 0; s = 0,1% ao dia; τ e V como acima | ~667 bilhões | ~1,8 ano | O dreno de estoque encurta o caminho até o equilíbrio |

Três conclusões [H]:

1. **A taxa de mercado é fraca como dreno principal de um idle**, porque V é baixo. Ela é ótima como freio de especulação e de spam, e ruim como âncora monetária. O EVE confirma em escala: o imposto de transação de mar/2025 (37 tri de ISK por mês) equivale a menos de um quinto das fontes de jan/2026 (203,6 tri), meses diferentes ([F01](fichas/F01-eve-online.md)).
2. **A alavanca mais forte é o parâmetro a**, o consumo ligado à própria atividade: ele cresce junto com a emissão sem ajuste manual. É o que fazem as orbs do PoE e o aprimoramento do BDO.
3. **O dreno de estoque é necessário para limitar o acúmulo**, mas, num idle, aluguel e decaimento punem o ausente. Ele precisa vir como compra desejada (luxo, projeto de longo prazo, temporada), não como taxa sobre quem está fora.

E o mais importante: **E não é constante.** Ela cresce com o número de contas e com a emissão por conta. Se a emissão por conta crescer exponencialmente com a progressão, M\* cresce exponencialmente, e nenhuma taxa resolve. Daí a regra das duas velocidades.

### 5.3 Números em duas velocidades

O [02a, seção 9.5](02a-teoria-design-idle.md) propõe seis princípios, que este estudo endossa:

1. O exponencial mora nos **custos** (que drenam) e nas camadas **pessoais e não negociáveis** (multiplicadores, maestria, eficiência), nunca na fonte de moeda negociável.
2. As fontes negociáveis são limitadas pelo **tempo de ação** e pelo número de jogadores.
3. Os drenos escalam com a riqueza e o nível: são **percentuais**, não fixos.
4. O prestígio individual converte bens negociáveis em poder pessoal, o que é dreno, e **nunca reseta o mercado**.
5. A **temporada** é o prestígio coletivo, e o que foi pago atravessa o reset.
6. Os números negociáveis ficam em **escala humana**, com inteiros de 64 bits em todo lugar (o OSRS precisou liberar ofertas acima de 2,147 bi em 2026: [F03](fichas/F03-runescape-e-osrs.md)).

[F] As referências que sustentam isso: no OGame, o custo da mina cresce bem mais rápido que a produção, em unidades absolutas iguais para todos; no Melvor e no MWI, uma ação por vez limita a oferta a jogadores × horas ([02a, seção 9.4](02a-teoria-design-idle.md)).

[H] Tradução prática:

| Pode crescer exponencialmente (pessoal) | Precisa ficar em unidades absolutas (negociável) |
|---|---|
| XP, níveis, maestria | Unidades produzidas por ação |
| Multiplicadores sobre bens presos à conta | Moeda emitida por ação e preço de NPC |
| Custos de upgrade, em moeda e materiais | Taxas e tetos de mercado |
| Metas de prestígio | Ganho negociável por conta e por dia |
| Velocidade de ações até um teto | Quantidade de itens raros que entram por dia |

### 5.4 Como os idles online lidam com isso

| Jogo | Como limita a emissão | Dreno principal | O que deu errado | Fonte |
|---|---|---|---|---|
| **Milky Way Idle** | Uma ação por vez, com fila | Taxa de 4% convertida em buffs coletivos; 18% nos sacos de Cowbells | Saco ×6 em 19 meses; horas offline vendidas por premium viraram reclamação de P2W | [C01](fichas/C01-milky-way-idle.md) |
| **Idle Clans** | Fila de tarefas; carteira até 2 bi; limite diário de compra de tokens e trava de revenda | Upgrades e casas de clã (até 500 mi) | Taxa de 1% quase não drena, e a riqueza circula entre alts | [C02](fichas/C02-idle-clans.md) |
| **IdleMMO** | Teto de tempo idle; alts menos eficientes que a conta principal | Imposto de troca (15%) e masmorras | Valor de NPC baixo deixava itens raros circularem quase sem imposto; o pergaminho de assinatura virou moeda paralela | [C04](fichas/C04-idlemmo.md) |
| **SimpleMMO** | Energia e passos (ação ativa) | Cogumelos de energia, teleporte por nível | Ouro por nível sem teto; drenos e tetos tardios geraram revolta | [C05](fichas/C05-simplemmo.md) |
| **Shop Titans** | Energia e fluxo de clientes | Quebra de equipamento, reparo, imposto que cresce com a duração da listagem | Preços em "K": tier baixo estável, topo em bilhões | [C06](fichas/C06-shop-titans.md) |
| **Idlescape** | Ligas com mercado próprio | Taxa de 5% | Base pequena fragmentada em ligas | [C03](fichas/C03-idlescape.md) |
| **Torn** (navegador, com timers) | Barras com teto; um refill por dia | Taxa de 5% em rampa | Remoção sem aviso do piso do point gerou pânico | [D01](fichas/D01-torn.md) |

### 5.5 Multicontas: a torneira que se multiplica

- [F] Os bloqueios de conta nova que funcionam como custo de entrada: no OSRS, comércio restrito até 20 horas de jogo, 10 quest points e nível total 100 ([F03](fichas/F03-runescape-e-osrs.md)); no New World, nada de troca ou envio de moeda antes de 72 horas ou do nível 10 ([G04](fichas/G04-new-world.md)); no Lost Ark, o ouro das recompensas iniciais virou prata ([G07](fichas/G07-economias-que-colapsaram.md)).
- [H] **Consequência monetária:** com teto de emissão negociável por conta e por dia, a emissão total passa a ser proporcional ao número de contas **reais**, que é a variável que conseguimos fiscalizar (pagamento, dispositivo, verificação), e não ao produto tempo × eficiência × contas. O detalhe das defesas fica no [04b](04b-economia-mercados-protecoes-bots.md); a regra de base está na [G05](fichas/G05-banana-e-bongo-cat.md): o tempo ausente gera progresso preso à conta, e só decisões ativas verificadas geram bens negociáveis.

## 6. Painel de métricas

### 6.1 O que medir

[H] Com um livro-razão de partidas dobradas ([G04](fichas/G04-new-world.md); [G07](fichas/G07-economias-que-colapsaram.md)), quase todo o painel sai de graça: basta etiquetar cada lançamento com a categoria da fonte ou do dreno. Os limiares de alarme abaixo são pontos de partida para calibrar na simulação da Fase 3.

| Métrica | Definição operacional | Frequência | Alarme inicial [H] | Referência |
|---|---|---|---|---|
| **Emissão por fonte** | Créditos do sistema por categoria: drop, venda a NPC, missão, produção offline, evento | Horária e diária | Fonte acima de 1,5× a média de 7 dias sem mudança de conteúdo | Gráficos de fontes do MER ([EVE](https://www.eveonline.com/news/view/monthly-economic-report-september-2026)) |
| **Drenos por categoria** | Débitos ao sistema: taxa, consumo, reparo, luxo, aprimoramento | Diária | Drenos abaixo de 80% das fontes por 14 dias | MER; IdleMMO ([C04](fichas/C04-idlemmo.md)) |
| **Massa monetária (M)** | Por moeda, separando contas ativas (login em 30 dias) e inativas | Diária, com alarme horário | Alta de 2% em 24 h. O dupe do EverQuest II somou ~20% em 24 h ([Slashdot](https://games.slashdot.org/story/05/08/16/1927252/crackers-slam-eq2-economy)) | MER; [G07](fichas/G07-economias-que-colapsaram.md) |
| **Delta de retorno** | Moeda que entra ou sai da massa ativa com contas que voltam ou somem | Diária | — | Active ISK Delta do EVE |
| **Velocidade** | Valor negociado entre jogadores no período ÷ M média | Semanal | Queda de 30% em 4 semanas | Gráfico de velocidade do MER |
| **Índice de preços de consumo** | Cesta encadeada de bens básicos, com pesos pelo volume | Diária | Acima da meta anualizada (ver constituição) | Índices do EVE desde 2007 ([Engadget](https://www.engadget.com/2008-11-17-making-money-eve-economic-review-reviewed.html)) |
| **Índice de luxo** | Cesta de itens raros e de prestígio | Semanal | — | Alta do luxo com o item sink ([arXiv](https://arxiv.org/abs/2210.07970)) |
| **Preço do token em ouro** | Média ponderada por volume, com spread | Horária | Variação de 15% em 24 h; descolamento da cesta | Krono, WoW Token, PLEX, Gold, Cowbells (seção 3.1) |
| **Preço no mercado cinza** | Ouro em sites de RMT ÷ ouro pelo canal oficial | Semanal | Paralelo abaixo de 60% do oficial | No OSRS, o paralelo saía a ~45% do Bond ([R v Lakeman](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4)) |
| **Concentração** | Fatia do 1% e do 10% mais ricos e Gini, entre contas ativas, com itens a preço de mercado | Semanal | Fatia do 1% em alta por 3 meses seguidos | [Hooper](https://dl.digra.org/index.php/dl/article/view/1187) |
| **Riqueza por coorte** | Mediana por idade da conta e por horas jogadas | Semanal | Conta com menos de 7 dias acima do percentil 99 | [G07, seção 5](fichas/G07-economias-que-colapsaram.md) |
| **Estoque de itens raros** | Unidades vivas, criadas e destruídas por item | Diária, com alarme horário | Criação acima de 3× a média | Entrada diária estimada do item sink do OSRS ([Jagex](https://secure.runescape.com/m=news/grand-exchange-tax--item-sink?oldschool=1)) |
| **Destruição** | Valor destruído por dia (quebra, consumo, perda) | Diária | — | Destruição no MER |
| **Liquidez** | Spread, tempo até a execução, fração de ordens que expiram | Diária | — | Bandas do MWI ([C01](fichas/C01-milky-way-idle.md)) |
| **Poder vindo do mercado** | Fração do equipamento em uso comprada, contra a obtida jogando | Mensal | Acima de 50% | Diablo III ([G01](fichas/G01-diablo-3-casa-de-leilao.md)) |
| **Conciliação do livro-razão** | Soma dos saldos contra a soma dos lançamentos | Contínua | Qualquer divergência | [G04](fichas/G04-new-world.md) |

### 6.2 Quem publica, e como

| Quem | O que publica | Frequência | Como coleta | Observação |
|---|---|---|---|---|
| **EVE Online Economic Council** (MER) | [F] 23 gráficos: mineração, produção, destruição, fontes e drenos, massa, velocidade, índices; dados brutos em zip | Mensal | Servidor | [F] O de setembro de 2026 saiu em 14/10/2026 ([MER](https://www.eveonline.com/news/view/monthly-economic-report-september-2026)); blogs como o [Nosy Gamer](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html) reprocessam os dados |
| **Torn** (Economic Review) | [F] Massa, meta de expansão, preço do point | Relatórios de 2016 e 2019, pelo menos | Servidor | [D01](fichas/D01-torn.md); o PDF de 2016 devolveu 403 nesta pesquisa |
| **Albion Online Data Project** | [F] Preços correntes e históricos por item e cidade, e o preço do Gold, via API REST | Contínua | Cliente comunitário que lê o tráfego de rede e envia as ordens que o jogador abriu; não é afiliado à Sandbox, que aceita a leitura, mas não a modificação ([site](https://www.albion-online-data.com/)) | A Sandbox não publica relatório próprio ([F02](fichas/F02-albion-online.md)) |
| **OSRS, API oficial do GE** | [F] Preço diário de 180 dias por item ([exemplo: Bond](https://secure.runescape.com/m=itemdb_oldschool/api/graph/13190.json)) | Diária | Servidor | — |
| **OSRS Wiki, Real-time Prices** | [F] Último preço e séries de 5 minutos e 1 hora | Contínua | Negociações enviadas por usuários do RuneLite; API gratuita desde a parceria de 2021 ([RuneLite](https://runelite.net/blog/show/2021-03-08-Wiki-Ge-Partnership); [cliente de terceiros](https://github.com/elertan/osrs-wiki-prices)) | Não oficial, mas é a fonte que a comunidade usa |
| **Guild Wars 2, API oficial** | [F] Cotação do câmbio de gemas e preços do Trading Post ([câmbio](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000)) | Tempo real | Servidor | — |
| **Milky Way Idle** (`marketplace.json`) | [F] Preços e, desde fev/2026, volume e preço médio | Horária; no começo, de 6 em 6 horas, com aleatoriedade e atraso "para evitar manipulação" | Servidor | [C01](fichas/C01-milky-way-idle.md); [JSON](https://www.milkywayidle.com/game_data/marketplace.json) |
| **Idle Clans** | [F] Médias de 1, 7 e 30 dias, volume e mais negociados dentro do cliente; API pública | Contínua | Servidor | [C02](fichas/C02-idle-clans.md) |
| **World of Warcraft** | [F] Preço do token pela Game Data API (caminho `data/wow/token/index`, segundo fontes da comunidade e um post do fórum oficial) | Contínua | Servidor | [Fórum](https://us.forums.blizzard.com/en/blizzard/t/world-of-warcraft-classic-api-update-wow-token-data-in-china/4960); [módulo de terceiros](https://www.powershellgallery.com/packages/BlizzWoWRetailGameData/3.5/Content/Get-WoWTokenIndex.ps1) |

### 6.3 O que publicar e com que atraso

- [H] **Relatório mensal público:** fontes e drenos por categoria, massa, velocidade, índices de preço, preço do token, fatia do 1% e do 10%, destruição. É o MER adaptado, e custa pouco num PostgreSQL com o livro-razão etiquetado.
- [H] **Dados abertos de preço**, com atraso e agregação: o MWI começou em 6 horas e com ruído, e depois passou a ser horário. Nunca o livro em tempo real por conta.
- [H] **Só interno:** fluxos por conta, sinais de detecção e os parâmetros dos alarmes.
- [F] **Por quê:** a transparência de preços tira renda de quem vive de informação (Varoufakis, [Engadget](https://www.engadget.com/2012-06-25-valve-economist-examines-tf2s-sophisticated-barter-system.html)), a comunidade audita o estúdio (o erro de 9% no MER) e a API oficial elimina o motivo para raspar o servidor ([C01](fichas/C01-milky-way-idle.md)).

## 7. Alavancas de design ranqueadas

Critérios [H]: **eficácia** (quanto move a economia e se acompanha o problema sem ajuste manual), **custo político** (revolta, percepção de P2W, punição do ausente) e **encaixe no idle**. A ordem é a recomendação para o desenho inicial.

### 7.1 Alavancas de base, para ligar no lançamento

| # | Alavanca | Eficácia | Custo político | Evidência | Cuidado |
|---|---|---|---|---|---|
| 1 | **Consumo embutido no progresso**: moeda e materiais como insumo de upgrade, craft, aprimoramento e expedição | Alta; escala com a atividade | Baixo: o jogador gasta porque quer | Orbs do PoE; lendários do GW2; aprimoramento do BDO; consumo aceito no UO (Simpson) | Aprimoramento com falha é aposta: proteção vendida por dinheiro vira sorteio pago ([05b](05b-rmt-legal-brasil.md)); usar pity explícito ([F08](fichas/F08-black-desert.md)) |
| 2 | **Custo por ação e imposto sobre a recompensa** | Alta; embutido na emissão | Baixo se vier desde o início | 11% das corporações NPC do EVE; entrada das masmorras do IdleMMO ([F01](fichas/F01-eve-online.md); [C04](fichas/C04-idlemmo.md)) | Não pode parecer pedágio sobre o ausente |
| 3 | **Teto de emissão negociável por conta e por tempo**: uma ação por vez, barras, teto diário de bens negociáveis | Alta, preventiva | Baixo no lançamento; alto se vier depois | Barras e um refill por dia no Torn; uma ação por vez no MWI e no Melvor; teto por janela da Steam ([G05](fichas/G05-banana-e-bongo-cat.md)); teto tardio no SimpleMMO gerou revolta | O teto mira o bem negociável, nunca o progresso pessoal |
| 4 | **Destruição e desgaste de itens, com risco escolhido** | Alta para itens: sustenta a demanda de quem produz | Baixo quando opcional (EVE, Albion); alto quando arbitrário | 1,14 quatrilhão de ISK destruído em 2025; ~30% destruído na morte no Albion; quebra no Shop Titans | Simpson: decaimento arbitrário é rejeitado. Num idle: durabilidade de ferramentas, consumíveis de expedição, perda parcial só em modos de risco opcionais |
| 5 | **Drenos progressivos**: preço que cresce com nível ou riqueza | Alta contra concentração | Médio: pode soar como castigo do sucesso | Blessings do Tibia; teleporte do SimpleMMO | Explicar como seguro ou serviço, não como imposto sobre o sucesso |
| 6 | **Drenos de status, cosméticos e projetos de longo prazo** | Média; mira o topo | Baixo | Brutosaur de 5 mi e transmog no WoW; lendários do GW2; item decorativo dos economistas da Jagex; Diablo Clone ([G07](fichas/G07-economias-que-colapsaram.md)) | Vender na loja o atalho do troféu desvaloriza o troféu ([F06](fichas/F06-world-of-warcraft.md)) |
| 7 | **Taxa de mercado em duas partes** (anúncio sem reembolso + corte na venda, arredondado para cima) | Média: depende da velocidade | Médio; alto quando sobe | 5% + 10% no GW2; depósito + 5% no WoW; arredondamento para cima no MWI | Subidas pedem rampa anunciada (Torn, 1% a 5%) e explicação (a alta para 7,5% no EVE e o "Boston Tea Party" do OSRS) |
| 8 | **Arrecadação convertida em bem público** (buff de servidor) | Média; torna a taxa aceitável | Baixo | Taxa → Community Buffs no MWI; boosts por doação no Idle Clans | Com mercado parado, o servidor desacelera; se pago com premium, depende de baleias |
| 9 | **Item sink automático por orçamento e cota** | Média, focada nos itens que entram rápido demais | Baixo (invisível) | OSRS desde 2021; sustenta o preço do luxo ([arXiv](https://arxiv.org/abs/2210.07970)) | Publicar a lista e a lógica, para não parecer manipulação |
| 10 | **Temporadas com economia nova** | Muito alta: zera inflação e concentração no mundo novo | Médio: fragmenta a base e custa conteúdo | Fresh Start do New World; ligas do PoE; Idlescape | O mundo permanente não pode virar cemitério inflacionado (o Standard do PoE, [F05](fichas/F05-path-of-exile.md)) |

### 7.2 Alavancas de emergência ou a evitar

| Alavanca | Por que é ruim (ou só para emergência) | Evidência |
|---|---|---|
| **Cortar fontes depois do lançamento** | Rápido, mas o custo político é alto; se for inevitável, com rampa e compensação | SimpleMMO 2022; masmorras do GW2 em 2015; ouro do Lost Ark em 2022 |
| **Escassez imposta** | Pune o novato e quem está reconstruindo | Era da escassez do EVE ([F01](fichas/F01-eve-online.md)) |
| **Mexer no preço de NPC** | Alavanca fortíssima: move fonte, base de imposto e piso de uma vez | IdleMMO, mar/2026 ([C04](fichas/C04-idlemmo.md)) |
| **Confisco e rollback** | Só para exploit, com política publicada antes; remover o valor duplicado, sem rollback geral | New World; confisco de 2 a 3 vezes o ganho no MWI ([C01](fichas/C01-milky-way-idle.md)) |
| **Disjuntor do comércio** | Para dupes, por sistema e testado; o desligamento geral do New World abriu outro dupe | [G04](fichas/G04-new-world.md); [G07](fichas/G07-economias-que-colapsaram.md) |
| **Bandas e tetos de preço** | Freiam manipulação, não inflação, e custam liquidez; o câmbio fixado vira crise a cada reajuste | Bandas do MWI; tetos do BDO ([F08](fichas/F08-black-desert.md)) |
| **Taxa sobre a compra do token** | Não segurou a especulação nem o preço | Albion, 2023 ([F02](fichas/F02-albion-online.md)) |
| **Token distribuído de graça** | Derruba o preço e desvaloriza a compra de quem pagou | PLEX em 2025 ([F01](fichas/F01-eve-online.md)) |
| **Aluguel ou decaimento obrigatório sobre o estoque** | Pune o ausente (o despejo no Tibia); só serve para luxo opcional | [F04](fichas/F04-tibia.md); Simpson |
| **Dreno que é receita** | Cada ajuste parece aumento da margem da casa | Entropia; taxa de 20% do TL ([G02](fichas/G02-entropia-universe.md); [F09](fichas/F09-throne-and-liberty-e-lost-ark.md)) |

## Implicações para o nosso jogo

Tudo nesta seção é proposta do estudo [H], apoiada nas evidências acima. Os números são pontos de partida para a simulação da Fase 3, não decisões.

### Oito decisões de arquitetura econômica

1. **Três camadas de valor desde o dia 1.** (a) Progresso pessoal, que pode ser exponencial e fica preso à conta: XP, maestria, multiplicadores, automação. (b) Bens negociáveis em unidades absolutas, limitados por tempo de ação e por conta. (c) Token premium, que nasce só de compra em dinheiro e tem preço livre em ouro. *Inspiração:* duas velocidades ([02a](02a-teoria-design-idle.md)), Loot 2.0 e bAXS. *Problema que resolve:* inflação pela idade da conta e pelo número de contas. *Comportamento:* planejar e especializar. *Risco:* prender coisa demais mata o mercado, como no Diablo III depois do Loot 2.0; a camada negociável precisa ser larga o bastante para sustentar o social.
2. **Emissão negociável só de decisões ativas ou planejadas, com teto diário por conta.** A produção offline rende progresso preso à conta e um fluxo negociável limitado; o que passar do teto vira progresso pessoal, nunca se perde. *Inspiração:* barras do Torn, uma ação por vez do MWI, checklist da [G05](fichas/G05-banana-e-bongo-cat.md). *Diferença:* o oposto do Banana e do Axie. *Risco:* o teto parecer castigo; mitigação na tela de volta, que mostra o excedente convertido.
3. **Drenos na ordem certa.** Primeiro o consumo embutido no progresso, que acompanha a emissão; depois o custo por ação; depois o desgaste de itens com risco escolhido; só então a taxa de mercado, que é freio, não âncora (seção 5.2). Meta inicial para a simulação: o consumo ligado à atividade absorver a maior parte da emissão negociável em regime. *Risco:* drenos demais geram deflação de bens básicos, a pior mensagem para quem produz (seção 3.3).
4. **Venda ao NPC como torneira controlada, separada da base do imposto.** Preço de NPC baixo, fixo e sempre abaixo de qualquer preço de compra no NPC (contra a arbitragem do Habitat, [G07](fichas/G07-economias-que-colapsaram.md)). Impostos calculados sobre o valor de mercado estimado, não sobre o valor de NPC. *Inspiração:* o diagnóstico do IdleMMO de que um único número controlava entrada, imposto e piso.
5. **Taxa de mercado em duas partes, com arrecadação visível.** Anúncio sem reembolso mais corte na venda, arredondado para cima, na faixa de 4% a 10% somados (a faixa de quem usa a taxa só como dreno, seção 2.4). Parte da arrecadação vira bem público do servidor, como no MWI, e o resto é destruído. Toda transferência de valor entre jogadores paga a mesma taxa, para o comércio não migrar para trocas diretas nem para uma moeda paralela (os pergaminhos do IdleMMO).
6. **Token como termômetro, nunca como brinde.** Preço livre, spread publicado, nada de taxa sobre a compra (Albion) e nada de distribuição em massa (EVE). O preço é lido junto com a cesta e a massa (seção 3.1). O formato do token e o jurídico ficam com [05a](05a-rmt-modelos-mercado-paralelo.md), [05b](05b-rmt-legal-brasil.md) e [05d](05d-rmt-recomendacao.md).
7. **Painel e relatório desde o alfa.** O livro-razão etiquetado por categoria gera o painel da seção 6; alarmes de massa, de itens raros e do token; disjuntor por sistema. Relatório mensal público a partir do beta aberto.
8. **Lançar apertado e soltar aos poucos.** A inflação de lançamento foi a mais destrutiva da amostra (GW2), e cortar fontes depois gera revolta (SimpleMMO). Dar é fácil; tirar, não.

### Esboço de "constituição econômica"

Regras públicas de política monetária, para publicar antes do lançamento. A forma imita um mandato de banco central; o conteúdo vem dos casos estudados.

> **Preâmbulo.** O ouro é a moeda comum de todos os jogadores. O estúdio se compromete a preservar o poder de compra do ouro, a garantir ao recém-chegado acesso aos bens de que precisa e a recompensar decisões, não tempo de cliente aberto. Estas regras só mudam pelo processo do artigo 12.

| Artigo | Regra proposta | De onde vem |
|---|---|---|
| **1. Mandato e meta** | A política monetária busca estabilidade de um Índice de Preços de Bens Básicos, cesta pública e encadeada. Meta inicial: variação anual entre 0% e +8%, com banda revista ao fim dos primeiros 90 dias. Indicadores auxiliares: preço do token em ouro, massa ativa, velocidade, fatia do 1% e do 10% | Meta de expansão do Torn; GW2 depois de 2015 (~6% ao ano) como referência; deflação como risco (seção 3.3) |
| **2. Camadas de valor** | Três camadas: progresso preso à conta, bens negociáveis e token. O que é preso nunca se torna negociável por compra; o que é pago nunca vira material de poder | Loot 2.0, bAXS; roupa → Cron Stones no BDO ([F08](fichas/F08-black-desert.md)) |
| **3. Emissão** | Toda fonte de ouro e de bens negociáveis é catalogada e publicada por categoria. Nenhuma fonte negociável cresce exponencialmente com o nível. O ganho negociável por conta tem teto diário público. Mudanças de fonte, incluindo o teto offline, vêm com análise de impacto publicada | SimpleMMO; IdleMMO; impacto medido antes no Torn |
| **4. Drenos** | Lista pública. Os principais são consumo no progresso e custo por ação. Taxas de mercado ficam numa faixa publicada; mudanças com 30 dias de aviso e rampa de no máximo 1 ponto percentual por mês. Parte da arrecadação vira bem público visível | Rampa de 1% a 5% do Torn; revolta no EVE e no OSRS; MWI |
| **5. Token** | Nasce só de compra em dinheiro. Prêmios em token ficam limitados a uma fração pequena e publicada da emissão mensal. Preço livre entre jogadores; o estúdio não fixa câmbio nem taxa a compra; o spread é publicado | PLEX grátis no EVE; câmbio administrado do BDO; taxa de 2023 no Albion |
| **6. Escassez prometida** | Itens de prestígio têm tiragem máxima publicada. A oferta de um item usado como reserva de valor só aumenta com aviso prévio e transição gradual | Trade Up do CS2 ([G07](fichas/G07-economias-que-colapsaram.md)) |
| **7. Transparência** | Relatório econômico mensal com dados abertos; preços públicos com atraso; API oficial de leitura; erros corrigidos em público | MER do EVE; JSON do MWI; Varoufakis |
| **8. Emergência** | Disjuntor por sistema (mercado, trocas, item), com comunicação em até 2 horas e prazo máximo anunciado; relatório em 7 dias; rollback geral só como último recurso; regra de remoção de valor indevido, inclusive de quem recebeu de boa-fé, escrita antes | ESO, Diablo IV, New World, SWG ([G07](fichas/G07-economias-que-colapsaram.md)) |
| **9. Exploits e RMT paralelo** | Confisco proporcional (até 3 vezes o ganho), "dívida" na moeda para quem comprou por fora e banimento de quem vende. Política publicada antes do lançamento | MWI; TL ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)) |
| **10. Temporadas** | Cada temporada tem economia própria. Atravessam o reset o que foi pago, os cosméticos e os títulos; ouro e bens da temporada, não. O mundo permanente segue a mesma constituição | Idlescape; ligas do OSRS e do PoE |
| **11. Proibições e garantias** | Proibidos juros, bancos, cassinos e pirâmides de jogadores, e ativos do jogo circulando fora dele. Nunca estarão à venda: a taxa de ganho ausente, multiplicadores de renda negociável e capacidade de produção | Ginko e IWantISK ([G07](fichas/G07-economias-que-colapsaram.md)); [G03](fichas/G03-axie-infinity-e-web3.md); IdleOn e Shop Titans ([_notas-de-sintese](_notas-de-sintese.md)) |
| **12. Emenda** | Mudanças nesta constituição pedem aviso de 60 dias, justificativa com dados e consulta pública, sem votação vinculante em política monetária; tudo fica num histórico de versões. Exceção: o artigo 8 | O OSRS não pôs o imposto e o item sink em votação ([mmofallout](https://mmofallout.com/jagex-hires-real-world-economists-in-runescape)); a alta sem explicação no EVE |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Ler errado o termômetro** | O token cai porque mais gente paga ou porque houve brinde, e o estúdio conclui que há deflação (EVE, Torn, OSRS em 2026) | Nunca reagir só ao token: cesta, massa e velocidade juntas (seção 3.1) |
| **Drenos fortes demais** | Deflação de bens básicos, entesouramento, iliquidez (UO, New World antes dos dupes, era da escassez do EVE) | Piso de 0% na meta; alarme de velocidade e de liquidez; rampas |
| **A taxa empurra o comércio para fora** | Contratos no EVE, bazar no Torn, pergaminhos como moeda paralela no IdleMMO | Mesma taxa em toda transferência de valor; imposto sobre valor de mercado; isenções sociais com teto diário (pedido de guilda do Shop Titans) |
| **Revolta fiscal** | O "Boston Tea Party" do OSRS e a alta para 7,5% no EVE | Rampa anunciada, porquê com dados e balanço público antes e depois |
| **Constituição rígida demais** | Uma calibragem ruim no lançamento ou um exploit não cabem nas regras | Artigo 8; banda de meta mais larga nos primeiros 90 dias, anunciada de antemão |
| **Dreno que depende de crescimento** | O dreno só funciona com jogadores entrando, como a reprodução no Axie | Teste de estresse na Fase 3: 90 dias sem novos jogadores, evasão de 50%, contas dobradas por bots |
| **Dados abertos a favor de bots e manipuladores** | Preço em tempo real orienta *pump and dump* e farm | Atraso, agregação e ruído (MWI); nada por conta |
| **Painel errado** | O erro de 9% do MER passou três meses sem ser visto | Conciliação contínua do livro-razão, metodologia publicada, reconhecimento a quem acha erro |
| **Bem público pago por baleias** | O ritmo de todos passa a depender de quem paga (Idle Clans, Idlescape) | Bem público financiado sobretudo por taxas; contribuição premium com teto |
| **Temporada que só replica a concentração** | Veteranos com conhecimento e alts dominam o mundo novo | Teto negociável por conta; rankings por coorte; recompensas de temporada cosméticas |
| **Temporada que esvazia o mundo permanente** | Fusão de 13 para 6 mundos no New World um mês depois; o Standard do PoE | Mundo permanente com drenos próprios e janelas periódicas de recomeço |
| **Teto negociável visto como castigo do ausente** | A sensação de perder produção por causa de um teto, que é a queixa nº 1 dos idles online ([_notas-de-sintese](_notas-de-sintese.md)) | Excedente convertido em progresso pessoal, visível na tela de volta |
| **Teto offline como inflação disfarçada** | Ampliar o tempo idle aumenta a oferta, como o IdleMMO admitiu | Toda mudança de teto passa pelo artigo 3 |
| **Economista sem poder** | Metas de receita passam por cima da política monetária | A constituição vale também para a monetização; mudança só pelo artigo 12 |

## Fontes

Todos os links foram acessados em novembro de 2026.

**Literatura e academia**

1. [Simpson, "The In-game Economics of Ultima Online"](https://gwern.net/doc/economics/1999-04-07-simpson-theingameconomicsofultimaonline.html) — artigo, CGDC (espelho) — 1999/2000.
2. [Koster, "The evolution of UO's economy"](https://www.raphkoster.com/?p=16263) — blog do autor — 2002.
3. [Koster, "Economies in a virtual setting"](https://raphkoster.com/gaming/economy.shtml) — ensaio do autor — sem data (site 1998–2010).
4. [Koster, "Laws of Online World Design"](https://raphkoster.com/gaming/laws.shtml) — ensaio do autor (lido via trecho de busca).
5. [Castronova, *Virtual Worlds: A First-Hand Account...*, CESifo WP 618](https://www.cesifo.org/DocDL/cesifo_wp618.pdf) — artigo — dez/2001.
6. [Edward Castronova](https://en.wikipedia.org/wiki/Edward_Castronova) — Wikipedia.
7. ["As real as real?" (Castronova et al., *New Media & Society*)](https://vivo.colorado.edu/display/pubid_147301) — registro do artigo — 2009.
8. [USC Annenberg sobre o estudo do EverQuest II](https://annenberg.usc.edu/node/18646) — universidade — 2009.
9. [IBTimes, "Virtual economies in videogames used as case studies"](https://ibtimes.com/virtual-economies-videogames-used-case-studies-333430) — imprensa.
10. [Lehdonvirta e Castronova, *Virtual Economies* (DOI)](https://doi.org/10.7551/mitpress/9525.001.0001) — livro, MIT Press — 2014.
11. [Oxford Internet Institute, página do livro](https://www.oii.ox.ac.uk/?p=9173) — universidade — 2014.
12. [Antoine Buteau, resumo de *Virtual Economies*](https://www.antoinebuteau.com/virtual-economies-book-summary/) — resumo de terceiro.
13. [Hooper, "EVE Online: The Worlds of Wealth and War"](https://dl.digra.org/index.php/dl/article/view/1187) — artigo, DiGRA — 2020.
14. [PlayLab (Universidade de Tampere), "The dedicated get richer"](https://blogs.tuni.fi/playlab/game-research-highlights/the-dedicated-get-richer/) — blog acadêmico — 06/05/2021.
15. [Hogan-Hennessy, Xenopoulos e Silva, "Market Interventions in a Large-Scale Virtual Economy"](https://arxiv.org/abs/2210.07970) — preprint, arXiv — 14/10/2022.
16. [Alharthi et al., taxonomia dos incrementais (CHI 2018)](https://par.nsf.gov/servlets/purl/10061230) — artigo — 2018.
17. [Varoufakis, "Arbitrage and Equilibrium in the Team Fortress 2 Economy"](https://gwern.net/doc/economics/2012-varoufakis-teamfortress2arbitrage.html) — blog da Valve (espelho) — 2012.
18. [Equation of exchange](https://en.wikipedia.org/wiki/Equation_of_exchange) e [Gini coefficient](https://en.wikipedia.org/wiki/Gini_coefficient) — Wikipedia.

**Oficiais (estúdios, relatórios e APIs)**

19. [CCP, "EVE Online Appoints In-World Economist"](https://community.eveonline.com/news/news-channels/press-releases/eve-online-appoints-in-world-economist-1) — oficial — 27/06/2007.
20. [EVE, Monthly Economic Report de setembro de 2026](https://www.eveonline.com/news/view/monthly-economic-report-september-2026) — oficial — 14/10/2026.
21. [EVE, Ecosystem Outlook](https://eveonline.com/article/qm06cu/) — oficial — 27/12/2020.
22. [EVE, Q1 2020 Economy Review](https://www.eveonline.com/article/qcig37/Q1%20Economy%20Review) — oficial — 2020.
23. [CCP, "The Massacre of M2-XFE"](https://www.eveonline.com/news/view/the-massacre-of-m2-xfe) — oficial — 04/02/2021.
24. [Jagex, Grand Exchange Tax & Item Sink](https://secure.runescape.com/m=news/grand-exchange-tax--item-sink?oldschool=1) — oficial — dez/2021.
25. [Jagex, imposto de 2%](https://secure.runescape.com/m=news/yama-cas--more?oldschool=true) — oficial — 29/05/2025.
26. [Jagex, ofertas acima do teto de 32 bits](https://secure.runescape.com/m=news/ge-improvements-beyond-max-cash?oldschool=1) — oficial — 30/09/2026.
27. [API oficial do GE do OSRS, Bond (item 13190)](https://secure.runescape.com/m=itemdb_oldschool/api/graph/13190.json) — dados oficiais — mai a nov/2026.
28. [Manual do Tibia](https://www.tibia.com/gameguides/?subtopic=manual&section=characters) — oficial.
29. [John Smith, "On the state of the Guild Wars 2 economy"](https://guildwars2.com/en/news/john-smith-on-the-state-of-the-guild-wars-2-economy/) — oficial — 14/09/2012.
30. [ArenaNet, "The Guild Wars 2: Heart of Thorns Economy"](https://www.guildwars2.com/en/news/the-guild-wars-2-heart-of-thorns-economy) — oficial — 12/10/2015.
31. [API do GW2, câmbio de gemas](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000) — dados oficiais — 07/11/2026.
32. [Wiki oficial do GW2, Trading Post](https://wiki.guildwars2.com/wiki/Trading_Post), [Gift of Fortune](https://wiki.guildwars2.com/wiki/Gift_of_Fortune) e [análise histórica do câmbio](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis) — wiki oficial.
33. [Black Desert, aviso de set/2023](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896) e [wiki de aprimoramento](https://www.naeu.playblackdesert.com/en-US/Wiki?wikiNo=48) — oficial.
34. [Blizzard, PTR 2.4 do Diablo II: Resurrected](https://news.blizzard.com/en-us/article/23762796) — oficial — mar/2022.
35. [Blizzard, fórum: API do WoW Token na China](https://us.forums.blizzard.com/en/blizzard/t/world-of-warcraft-classic-api-update-wow-token-data-in-china/4960) e [preço do token](https://us.forums.blizzard.com/en/wow/t/wow-token-price-hike/1965815) — fórum oficial.
36. [Torn Economic Review 2016](https://www.torn.com/economic_reports/2016review.pdf) — oficial (403 nesta pesquisa; dados via [D01](fichas/D01-torn.md)) — 2016.
37. [Wiki do Torn, Item Market](https://wiki.torn.com/wiki/Item_Market) — wiki oficial.
38. [Galahad Creative, "IdleMMO Economic Changes"](https://www.galahadcreative.com/blog/idlemmo-economic-changes/) — oficial — 21/03/2026.
39. [Galahad Creative, "Let's talk about idle times"](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/) — oficial — 11/03/2025.
40. [Galahad Creative, retrospectiva 2022 do SimpleMMO](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/) e [log de atualizações](https://web.simple-mmo.com/updates) — oficial.
41. [Wiki do IdleMMO, Market](https://support.idle-mmo.com/wiki/economy-and-trading/market) — wiki oficial.
42. [Milky Way Idle, `marketplace.json`](https://www.milkywayidle.com/game_data/marketplace.json), [wiki do Marketplace](https://milkywayidle.wiki.gg/wiki/Marketplace) e [enquete oficial sobre Cowbells](https://steamcommunity.com/app/3224420/discussions/0/600776571073120773) — oficial — 2025–2026.
43. [Wiki do Idle Clans, Player market](https://idleclans.wiki/w/Player_market) e [Premium](https://idleclans.wiki/w/Premium_membership_token) — wiki.
44. [Eltharyon (Sandbox), taxa sobre a compra de Gold zerada](https://devtrackers.gg/albion/p/5596ca00-gold-market-purchase-fee-set-to-0) — dev tracker — 2023.
45. [R v Lakeman [2026] EWCA Crim 4](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4) — decisão judicial — 13/01/2026.

**Imprensa e blogs especializados**

46. [Felix Salmon, "Virtual Deflation"](https://www.felixsalmon.com/2007/11/virtual-deflation/) — blog — 15/11/2007.
47. [Engadget, "EVE Economic Review Reviewed"](https://www.engadget.com/2008-11-17-making-money-eve-economic-review-reviewed.html) — imprensa — 17/11/2008.
48. [Engadget, Varoufakis e o TF2](https://www.engadget.com/2012-06-25-valve-economist-examines-tf2s-sophisticated-barter-system.html) — imprensa — 25/06/2012.
49. [Nosy Gamer, jan/2026 do EVE](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html), [nov/2025](https://nosygamer.blogspot.com/2025/12/eve-onlines-november-2025-monthly.html), [mar/2025](https://nosygamer.blogspot.com/2025/04/a-look-at-active-isk-delta-in-march-2025.html) e [PLEX](https://nosygamer.blogspot.com/2025/04/new-changes-to-plex.html) — blog — 2025–2026.
50. [TAGN, categoria do MER](https://tagn.wordpress.com/category/eve-online/eve-monthly-economic-report/) — blog — 2026.
51. [PC Gamer, ISK destruído em 2025](https://www.pcgamer.com/games/mmo/eve-online-players-destroyed-1-142-260-784-813-930-isk-worth-of-ships-in-2025-which-according-to-my-caveman-level-maths-amounts-to-over-usd6-million-lost-to-the-void/) — imprensa — 2026.
52. [Mein-MMO, crise do EVE em 2021](https://mein-mmo.de/en/mmorpg-eve-online-is-in-crisis-lowest-player-numbers-in-15-years,697861) — imprensa — 11/07/2021.
53. [Mein-MMO, taxa do TL](https://mein-mmo.de/en/throne-and-liberty-auction-house-what-are-you-actually-paying-the-luzent-tax-for,1188334) — imprensa — 26/11/2024.
54. [Mein-MMO, prata do BDO](https://mein-mmo.de/en/mmorpg-black-desert-makes-changes-to-in-game-currency-players-immediately-complain-about-pay2win,821091) — imprensa — 05/05/2022.
55. [Mein-MMO, Krono do EverQuest](https://mein-mmo.de/en/the-economy-of-a-large-old-mmorpg-is-currently-being-destroyed-someone-gave-me-a-million-gold-as-a-welcome,1061366) — imprensa — 26/11/2023.
56. [Mein-MMO, ouro do New World](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789) — imprensa — 21/10/2021.
57. [Siliconera, ouro do Lost Ark](https://www.siliconera.com/major-lost-ark-update-to-introduce-changes-in-earning-gold/) — imprensa — 15/11/2022.
58. [Kotaku, infográfico de John Smith](https://kotaku.com/the-guild-wars-2-economy-as-seen-by-its-dark-and-myster-5937545) — imprensa — 24/08/2012.
59. [Game Developer, crítica de Shokrizade ao GW2](https://www.gamedeveloper.com/design/guild-wars-2-economy-review) — imprensa — 2013.
60. [Game Informer, taxas do leilão do Diablo III](https://www.gameinformer.com/b/news/archive/2012/05/01/blizzard-details-diablo-iii-auction-house-fees.aspx) — imprensa — 01/05/2012.
61. [Shacknews, Loot 2.0](https://www.shacknews.com/article/83266/diablo-3-patch-201-deploys-with-loot-20) — imprensa — 2014.
62. [Slashdot, dupe do EverQuest II](https://games.slashdot.org/story/05/08/16/1927252/crackers-slam-eq2-economy) — imprensa — 16/08/2005.
63. [Espelho do Slashdot, Koster sobre o SWG](https://slashdot.mozz.us/stories/04/05/10/0338234/?score=3) — imprensa (lido via trecho de busca) — 2004.
64. [mmofallout, economistas contratados pela Jagex](https://mmofallout.com/jagex-hires-real-world-economists-in-runescape) — imprensa — 04/11/2021.
65. [Naavik, Axie Infinity parte 2](https://naavik.co/deep-dives/axie-infinity-part-2/) — análise — 2022.
66. [Wowhead, token acima de 400 mil](https://www.wowhead.com/news/wow-token-price-breaks-400k-all-time-high-in-north-america-335416) — imprensa — 09/10/2023.
67. [GamingOnLinux, Black Market do Albion](https://gamingonlinux.com/2017/06/albion-onlines-new-black-market-feature-is-sounding-really-interesting) — imprensa — 02/06/2017.
68. [RuneLite, parceria com a wiki para preços do GE](https://runelite.net/blog/show/2021-03-08-Wiki-Ge-Partnership) — blog do cliente — 08/03/2021.

**Comunidade, wikis e dados de terceiros**

69. [Albion Online Data Project](https://www.albion-online-data.com/) e [API de preços do Gold, 2021](https://west.albion-online-data.com/api/v2/stats/gold.json?date=11-07-2021&end_date=11-08-2021) e [2026](https://west.albion-online-data.com/api/v2/stats/gold.json?count=24) — dados comunitários.
70. [AlbionMarket.gg](https://albionmarket.gg/guides/black-market-flipping) e [itemku](https://www.itemku.com/en/blog/albion-online/albion-online-regear-guide-estimating-silver-needed-after-pvp-losses/3945/) — guias da comunidade — 2026.
71. [EVE University, Tax](https://wiki.eveuniversity.org/Tax) — wiki da comunidade.
72. [warcraft.wiki.gg, Money](https://warcraft.wiki.gg/wiki/Money) e [WoW Token](https://warcraft.wiki.gg/wiki/WoW_Token) — wiki.
73. [wow.gg, preço do token](https://wow.gg/auction-house/token) — dados de terceiros — nov/2026.
74. [Maxroll, Currency Exchange do PoE](https://maxroll.gg/poe/currency/currency-exchange-market) — guia.
75. [TibiaQA, preço das blessings](https://www.tibiaqa.com/3324/whats-the-price-of-a-blessing?show=3325) — site de fãs — 2019.
76. [Exevo Pan, relatório financeiro de 2025 do Char Bazaar](https://www.exevopan.com/blog/financial-report-2025) — dados de terceiros.
77. [Torn City Times, fev/2019](https://torncitynewspaper.blogspot.com/2019/02/market-report-february.html), [ago/2019](https://torncitynewspaper.blogspot.com/2019/08/economic-report-summary.html) e [abr/2022](https://torncitynewspaper.blogspot.com/2022/05/market-report-april.html) — jornal da comunidade.
78. [Guia "Using the Market" do Shop Titans](https://shopkeeper.neocities.org/docs/personal-guides/guide-market) — guia de jogador.
79. [Thread do Steam sobre o preço das Cowbells](https://steamcommunity.com/app/3224420/discussions/0/600784500009537616/) — comunidade.
80. [EverQuest Guides, Krono de Oakwynd](https://www.everquestguides.com/everquest-articles/oakwynd-krono-price-tracking-post-duplication-hack/) — site de fã — 01/12/2023.
81. [osrs-wiki-prices (cliente de terceiros)](https://github.com/elertan/osrs-wiki-prices) e [módulo PowerShell do WoW Token](https://www.powershellgallery.com/packages/BlizzWoWRetailGameData/3.5/Content/Get-WoWTokenIndex.ps1) — código de terceiros.

**Fontes internas**

82. Fichas [C01](fichas/C01-milky-way-idle.md), [C02](fichas/C02-idle-clans.md), [C03](fichas/C03-idlescape.md), [C04](fichas/C04-idlemmo.md), [C05](fichas/C05-simplemmo.md), [C06](fichas/C06-shop-titans.md), [D01](fichas/D01-torn.md), [F01](fichas/F01-eve-online.md), [F02](fichas/F02-albion-online.md), [F03](fichas/F03-runescape-e-osrs.md), [F04](fichas/F04-tibia.md), [F05](fichas/F05-path-of-exile.md), [F06](fichas/F06-world-of-warcraft.md), [F07](fichas/F07-guild-wars-2.md), [F08](fichas/F08-black-desert.md), [F09](fichas/F09-throne-and-liberty-e-lost-ark.md), [G01](fichas/G01-diablo-3-casa-de-leilao.md), [G02](fichas/G02-entropia-universe.md), [G03](fichas/G03-axie-infinity-e-web3.md), [G04](fichas/G04-new-world.md), [G05](fichas/G05-banana-e-bongo-cat.md), [G06](fichas/G06-idles-que-morreram.md), [G07](fichas/G07-economias-que-colapsaram.md).
83. [02a — Teoria do design idle](02a-teoria-design-idle.md), seção 9, e [_notas-de-sintese](_notas-de-sintese.md).
