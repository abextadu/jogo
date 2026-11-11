# Modelos de RMT e o mercado paralelo (nov./2026)

> **Escopo.** Mapear todos os modelos de RMT (*real money trading*, trocas que envolvem dinheiro real) que um jogo já adotou oficialmente, o que aconteceu com quem adotou cada um, e o mercado paralelo (RMT ilegal) que eles tentam substituir.
>
> **Perguntas que este estudo responde:** (1) Quais são os modelos de RMT oficial e quais variáveis os distinguem? (2) O que aconteceu, em números, com cada jogo que adotou cada modelo? (3) Por que existe o mercado paralelo, de que tamanho ele é e que dano causa? (4) Há evidência de que um canal oficial bem desenhado o esvazia? Até onde vale essa tese?
>
> **Relação com outros estudos.** O detalhe jurídico está em [05b](05b-rmt-legal-brasil.md) (Brasil) e [05c](05c-rmt-legal-global-pagamentos.md) (mundo, pagamentos e lojas). Bots, banimentos e proteções de mercado estão em [04b](04b-economia-mercados-protecoes-bots.md), que este estudo cita sem repetir. A recomendação para o nosso jogo está em [05d](05d-rmt-recomendacao.md).

## Resumo executivo

Há nove famílias de RMT oficial. Três variáveis explicam quase tudo o que aconteceu com elas: **para onde vai o dinheiro** (só entra, circula ou sai do jogo), **o que circula** (item de uso fixo, moeda divisível ou contas) e **quem segura o dinheiro** (ninguém, o estúdio ou um parceiro licenciado).

- **[F] Todos os tokens estudados, em que o dinheiro só entra, seguem ativos em 2026:** PLEX, Bonds, WoW Token, Tibia Coins, gemas do GW2, Gold do Albion, Cowbells, membership do IdleMMO, points do Torn. Seu preço em moeda do jogo virou o termômetro público da inflação (~2,6× em cinco anos no Albion, ~150× desde 2012 no GW2; no Torn, caiu).
- **[F] Os modelos em que o dinheiro sai recuaram ou foram terceirizados:** a casa de leilão em dinheiro do Diablo III fechou em 21 meses; a Station Exchange da Sony foi entregue a terceiros depois de mais de US$ 1 milhão em multas por *chargeback*; a Linden Lab vendeu a Tilia, sua subsidiária de pagamentos; as corretoras coreanas foram processadas por tolerar ₩ 1 trilhão em itens de bots.
- **[F] O mercado paralelo é grande:** de US$ 500 milhões (Heeks, 2008) a US$ 3 bilhões (Banco Mundial, dados de 2009); no Brasil, já tem escrow e Pix.
- **[F] O canal oficial o esvazia quando sai mais barato ou mais seguro:** −80% na riqueza do *gold farming* um mês depois dos Bonds; ~721 milhões de Tibia Coins no Char Bazaar em 2025.
- **[H] Mas não o elimina:** o ouro clandestino do OSRS sai a 45% do preço oficial, e o WoW ainda bane bots aos milhares. O token dá ao ouro um preço legítimo em dinheiro, e isso atrai bots. Sem drenos, custo de conta e repressão permanente, ele subsidia o farmer.

---

## 1. Taxonomia: as variáveis que definem um modelo de RMT

**[H]** Classificação do estúdio, construída a partir dos casos das seções 2 e 3. Cada modelo é uma combinação destas escolhas:

| Variável | Opções | Por que importa |
|---|---|---|
| **Direção do dinheiro** | (1) só entra (o estúdio vende algo); (2) circula entre jogadores dentro do jogo (crédito, moeda premium); (3) sai do jogo (saque, venda em dinheiro entre jogadores) | Define o regime jurídico: circuito fechado é luz verde; saque exige licença financeira em quase todo lugar ([05b](05b-rmt-legal-brasil.md), seção 11; [05c](05c-rmt-legal-global-pagamentos.md), seção 7) |
| **O que circula** | item de uso fixo (token); moeda premium divisível; itens comuns com preço em dinheiro; contas e personagens | Quanto mais fungível e divisível, mais o bem vira moeda paralela, mais serve à lavagem e mais difícil é reverter uma fraude |
| **Quem fixa o preço** | mercado livre (livro de ordens); estoque do câmbio (GW2); algoritmo do estúdio (WoW Token); teto fixado pelo estúdio (Black Desert) | Preço livre informa a inflação; preço administrado vira crise a cada reajuste |
| **Quem segura o dinheiro** | ninguém (dinheiro só entra); o estúdio; parceiro licenciado (Tilia, Live Gamer, PSP de marketplace) | Quem segura saldo de terceiros vira instituição financeira |
| **Quem pode participar** | todos; só assinantes; só maiores verificados; só criadores | Define exposição a menores, fraude e bots |
| **Travas** | carência depois da compra; limite por período; uma revenda só; custo de conta para vender | São o que separa um token saudável de uma moeda paralela |

---

## 2. Mapa dos modelos e o que aconteceu com quem adotou cada um

| Família | Exemplos | Como o dinheiro anda | O que aconteceu | Situação em 2026 |
|---|---|---|---|---|
| **A. Token trocado por moeda do jogo** | PLEX (EVE), WoW Token, Bonds (RS3/OSRS), Tibia Coins, Cowbells (MWI), points do Torn, Mr. Accessory (KoL), gemas (GW2), Gold (Albion), cristais (Lost Ark), membership (IdleMMO) | Só entra: o estúdio vende o token; jogadores o trocam por moeda do jogo | Esvaziou parte do RMT ilegal (Bonds: −80% em um mês); o preço em ouro subiu na maioria dos casos (de ~2,6× a ~150×) e virou índice de inflação; atraiu bots onde o ouro era fácil de farmar (Lost Ark) | Ativo em todos os casos estudados |
| **B. Moeda premium como meio de troca** | Lucent (Throne and Liberty), gemas no mercado (Shop Titans), itens de pérola (Black Desert) | Entra e circula: a moeda paga é a moeda do mercado, ou o item da loja vira prata | "Dolarização" da economia; mercado cinza 25% a 35% mais barato que a loja (TL); câmbio administrado com reajustes de +78% e +94% (BDO); rótulo de *pay-to-win* | Ativo, com controvérsia permanente |
| **C. Venda oficial de personagens** | Char Bazaar (Tibia) | Entra e circula em moeda premium transferível; sem saque oficial | Legalizou um mercado em que quase todas as contas do topo já tinham sido vendidas; ~13% da receita da CipSoft em 2025 (estimativa de terceiro) | Ativo |
| **D. Casa de leilão em dinheiro** | Station Exchange (EverQuest II, 2005–2008); RMAH (Diablo III, 2012–2014) | Sai: jogador paga outro jogador em dinheiro, com comissão | Station Exchange: US$ 1,87 milhão no 1º ano, depois fraude e multas de *chargeback*, entregue à Live Gamer; RMAH: o leilão passou a ditar o valor do drop e fechou | Encerrado nos dois casos |
| **E. Saque em dinheiro** | Entropia Universe; Second Life (LindeX, Tilia); Roblox (DevEx, só criadores) | Sai: o operador ou parceiro paga em dinheiro | Entropia: saque em ~50 dias úteis e receita como vantagem da casa; Linden: subsidiária licenciada, depois vendida; Roblox: mais de US$ 1 bilhão pago a criadores em 2025 | Ativo, sempre com licença ou parceiro financeiro |
| **F. Crédito fechado sem saque** | Mercado da Comunidade Steam | Entra e circula como saldo de carteira; não sai oficialmente | Mercado gigante de itens; 77 mil contas sequestradas por mês em 2015; jogo de azar de terceiros com skins; processo de Nova York (2026); idles cheios de bots | Ativo, sob processo |
| **G. Corretoras terceirizadas legais** | ItemBay e ItemMania (Coreia) | Sai: o site intermedeia a venda entre jogadores, fora do jogo | Duopólio com 95% do mercado; ~₩ 1 trilhão por ano; processadas em 2014 por tolerar ₩ 1,056 trilhão em itens de bots | Ativas, toleradas; integração com jogo investigada em 2026 |
| **H. Web3 / *play-to-earn*** | Axie Infinity, Pixels, TIB do Tibia | Sai, por cripto | Token −99%; hack de US$ 568 a 625 milhões; dominado por bots; proibido na Steam e na Coreia | Em declínio |
| **I. Nenhum RMT, com repressão** | WoW antes de 2015, RuneScape 2007–2011, Garena (Free Fire) | — | O mercado paralelo continua; restringir a troca de todos puniu o honesto e não matou o RWT (RuneScape) | Referência de controle |

As fontes de cada célula estão nas subseções da seção 3.

---

## 3. Análise por família

### 3.A Token trocado por moeda do jogo

**Os casos, em números**

| Token | Desde | O que o token compra | Preço em moeda do jogo (início → 2026) | Taxas e travas | Fonte |
|---|---|---|---|---|---|
| **PLEX** (EVE) | nov./2008 (conversão de cartões de tempo); fev./2009 (venda no site) | 500 PLEX = 30 dias de Omega; itens da loja | 2,55 milhões de ISK por PLEX (mai./2017) → ~6 (jul./2025) → 4,2 (mar./2026) → 4,5 (abr./2026) | Mercado global único desde 7/7/2025; impostos normais do mercado | [CCP, 2009](https://www.eveonline.com/news/view/the-way-of-the-plex); [Nosy Gamer](https://nosygamer.blogspot.com/2025/04/new-changes-to-plex.html); [TAGN](https://tagn.wordpress.com/category/eve-online/eve-monthly-economic-report/); [F01](fichas/F01-eve-online.md) |
| **WoW Token** | 7/4/2015 | 30 dias de jogo; desde 2017, US$ 15 de saldo Battle.net | 30 mil de ouro → ~20 mil em 24 h → mais de 400 mil (out./2023) → ~304,5 mil (nov./2026) | Preço definido pelo sistema conforme oferta e demanda; não se troca entre jogadores; comprado com ouro, fica preso à conta | [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/WoW_Token); [Wowhead](https://www.wowhead.com/news/wow-token-price-breaks-400k-all-time-high-in-north-america-335416); [wow.gg](https://wow.gg/auction-house/token); [F06](fichas/F06-world-of-warcraft.md) |
| **Bond** (RS3) | 25/9/2013 | 14 dias de assinatura ou 160 RuneCoins | — | — | [Engadget, 2013](https://www.engadget.com/2013-09-25-jagex-introduces-runescape-bonds-new-business-model.html) |
| **Bond** (OSRS) | 30/3/2015 | 14 dias de assinatura; troca de nome | £ 6 ≈ 13 milhões de gp (2026) | Negociável só enquanto está com o comprador original; destravar custa 10% do valor | [OSRS Wiki](https://oldschool.runescape.wiki/w/Old_school_bond); [R v Lakeman](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4); [F03](fichas/F03-runescape-e-osrs.md) |
| **Tibia Coins** | 2012 (Premium Scrolls); 2015 (coins) | Premium, loja, Char Bazaar | Varia por mundo | Coins "transferíveis" ou não, conforme país e meio de pagamento | [TibiaQA](https://www.tibiaqa.com/19703/what-the-difference-what-you-with-transferable-transferable-tibia-coins?show=19726); [F04](fichas/F04-tibia.md) |
| **Bag of 10 Cowbells** (MWI) | set./2023 | Loja premium (MooPass, vagas, cosméticos, buffs do servidor) | ~200 mil moedas (abr./2025) → ~1,19 milhão (nov./2026) | Taxa de 18% na venda; trava antifraude de até 72 h após a primeira compra; quem joga em modo Ironcow só compra | [enquete oficial](https://steamcommunity.com/app/3224420/discussions/0/600776571073120773); [marketplace.json](https://www.milkywayidle.com/game_data/marketplace.json); [patch notes](https://milkywayidle.wiki.gg/wiki/Patch_Notes); [C01](fichas/C01-milky-way-idle.md) |
| **Points** (Torn) | antes de 2016 | Refill de energia, bazar, cosméticos | Média de 67 mil → 53 mil (2016) → ~49 mil Torn dollars por point (abr./2022) | Teto de US$ 100 mil por point; piso da casa de penhores retirado em jun./2024 | [Review 2016](https://www.torn.com/economic_reports/2016review.pdf); [wiki Point](https://wiki.torn.com/wiki/Point); [D01](fichas/D01-torn.md) |
| **Mr. Accessory** (KoL) | até set./2004 | Loja do mês, +15 em atributos, Uncle Bucks | ~76,6 milhões de meat (nov./2026), ~58 negociados por dia | Livre entre jogadores | [Irish Times, 2004](https://www.irishtimes.com/business/loathsome-game-prospers-1.1157001); [pricegun](https://pricegun.loathers.net/api/194); [D03](fichas/D03-kingdom-of-loathing.md) |
| **Gemas** (GW2) | 2012 | Loja de gemas | 0,27 de ouro por 100 gemas (set./2012) → 20,66 (mai./2015) → 40,65 (nov./2026) | Câmbio com estoques próprios (não há troca entre jogadores); 17,5% por operação | [wiki, Currency Exchange](https://wiki.guildwars2.com/wiki/Currency_Exchange); [API oficial](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000); [F07](fichas/F07-guild-wars-2.md) |
| **Gold** (Albion) | lançamento | Premium e loja | ~3.400 Silver por Gold (nov./2021) → ~9.000 (nov./2026) | Taxa sobre a compra de Gold testada em 2023 e zerada por não funcionar | [Albion Data Project](https://west.albion-online-data.com/api/v2/stats/gold.json?count=24); [Eltharyon](https://devtrackers.gg/albion/p/5596ca00-gold-market-purchase-fee-set-to-0); [F02](fichas/F02-albion-online.md) |
| **Cristais** (Lost Ark) | 2022 (Ocidente) | Assinatura e loja | Flutuante | Câmbio separado do mercado, com limite | [Amazon Games, lido via busca](https://amazongames.com/en-ca/support/lost-ark/articles/what-is-the-currency-exchange); [F09](fichas/F09-throne-and-liberty-e-lost-ark.md) |
| **Membership** (IdleMMO) | — | 30 dias de membership (US$ 6,99) | Não encontrado | Sem limite de quantidade nem teto de preço, por decisão do estúdio | [Galahad, dez./2023, atualizado nov./2025](https://www.galahadcreative.com/blog/our-monetisation-strategy/); [C04](fichas/C04-idlemmo.md) |

**O que aconteceu, e por quê**

- **[F] O token nasceu como arma contra o RMT ilegal, sempre ao lado de repressão.** O CCP apresentou o PLEX como uma frente de uma estratégia de duas, junto com banimentos e confisco ([CCP, 2009](https://www.eveonline.com/news/view/the-way-of-the-plex)); a Blizzard justificou o WoW Token como um meio seguro e sancionado de obter ouro, no lugar de vendedores associados a roubo de contas ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/WoW_Token)); a Jagex lançou os Bonds dizendo que 40% a 50% dos jogadores ativos compravam gold num mês qualquer ([Engadget, 2013](https://www.engadget.com/2013-09-25-jagex-introduces-runescape-bonds-new-business-model.html)).
- **[F] Ele financia o premium de quem não paga.** No IdleMMO, 65,2% dos jogadores obtiveram a membership com ouro ([Galahad](https://www.galahadcreative.com/blog/our-monetisation-strategy/)); no primeiro ano dos Bonds, mais de 80% foram resgatados como assinatura ([Engadget, 2014](https://www.engadget.com/2014-09-04-how-rmt-is-changing-runescapes-economy-for-the-better.html)).
- **[F] O preço em ouro mede a inflação e reage a decisões do estúdio.** Distribuir PLEX de graça em eventos e unificar o mercado coincidiram com a queda de ~6 para ~4,5 milhões de ISK ([Nosy Gamer](https://nosygamer.blogspot.com/2025/04/new-changes-to-plex.html)); a retirada sem aviso do piso do point do Torn gerou pânico ([fórum Torn](https://www.torn.com/forums.php?p=threads&f=3&t=16406419&b=0&a=0)); no EverQuest, o Krono saltou de 65 mil para 2 a 4 milhões de platina em dias durante uma fraude ([Mein-MMO](https://mein-mmo.de/en/the-economy-of-a-large-old-mmorpg-is-currently-being-destroyed-someone-gave-me-a-million-gold-as-a-welcome,1061366)).
- **[F] Token que circula várias vezes vira moeda paralela.** No IdleMMO, dos ~9.000 pergaminhos de membership em circulação em mar./2026, mais de 5.000 trocaram de mãos em 30 dias, e itens passaram a ser pagos em pergaminhos em vez de ouro, sem gerar imposto ([Galahad, 21/3/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)). O OSRS evita isso com a regra de uma revenda só ([OSRS Wiki](https://oldschool.runescape.wiki/w/Old_school_bond)); o WoW, proibindo a troca entre jogadores ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/WoW_Token)).
- **[F] Corrigir o câmbio com taxa sobre o câmbio não funcionou.** A Sandbox criou em 2023 uma taxa sobre a compra de Gold para frear a especulação e a zerou meses depois, atribuindo a queda de preço do Premium a novos drenos de Silver, não à taxa ([Eltharyon](https://devtrackers.gg/albion/p/5596ca00-gold-market-purchase-fee-set-to-0)).
- **[F] A inflação explosiva vem no começo.** No GW2, o ouro perdeu ~98% do valor em gemas em 2,5 anos e depois só dobrou em uma década ([análise histórica](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis); [API](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000)).
- **[F] O volume pode dominar a economia.** Em jan./2026, os jogadores do EVE gastaram 175,1 trilhões de ISK em 38,2 milhões de PLEX, o equivalente a 86% de todo o ISK criado no mês ([Nosy Gamer, fev./2026](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html)).

**Quatro perguntas** **[H]**
- *Inspiração:* o Mr. Accessory do KoL (2004) e os créditos do Achaea são anteriores ao PLEX; o desenho moderno vem do PLEX e do Bond.
- *Problema que resolve:* dá vazão legal à demanda por ouro e deixa o não pagante obter o premium com tempo.
- *Comportamento:* o pagante compra tempo de outros jogadores; o não pagante farma para comprar o token; o especulador estoca o token.
- *Risco:* o token vira moeda paralela se circular livre; dá ao ouro um preço em dinheiro, que atrai bots; e o preço vira crise política a cada mudança de torneira.

### 3.B Moeda premium como meio de troca

- **[F] Throne and Liberty: a casa de leilão só aceita Lucent**, a moeda paga, com taxa de 20% mais imposto do castelo; não há troca direta entre jogadores, e o Lucent recebido pode ficar retido antes de voltar ao leilão ([PCGamesN, 2024](https://www.pcgamesn.com/throne-and-liberty/auction-house-premium-currency); [Mein-MMO, 26/11/2024](https://mein-mmo.de/en/throne-and-liberty-auction-house-what-are-you-actually-paying-the-luzent-tax-for,1188334)). Em 29/10/2024, a Amazon descontou o Lucent comprado por fora, deixando saldos negativos ("dívida") e escalando até o banimento ([PCGamesN](https://www.pcgamesn.com/throne-and-liberty/real-money-trading-punishment)). **[H]** Pelos casos relatados, o Lucent cinza saía 25% a 35% mais barato que a loja ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md), §6.4).
- **[F] Shop Titans: itens vendidos por gemas**, mas só vende por gemas quem já gastou 600 gemas no jogo, e ninguém lista acima do próprio patrimônio, regras criadas contra multicontas que canalizavam gemas e contra a revenda por terceiros ([notas 3.6.0](https://playshoptitans.com/news/version-3-6-0-release-notes)).
- **[F] Black Desert: itens da loja vendidos por prata com teto fixado pela desenvolvedora.** O teto subiu de 473 para 840 milhões de prata em mai./2022 e para 1,63 bilhão em set./2023, justificado por uma inflação de 5 a 6 vezes na prata média diária por jogador entre 2019 e 2023 ([Mein-MMO, 2022](https://mein-mmo.de/en/mmorpg-black-desert-makes-changes-to-in-game-currency-players-immediately-complain-about-pay2win,821091); [aviso oficial, 6/9/2023](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896)). As roupas da loja viram material de aprimoramento (Cron Stones), o que cola o rótulo de *pay-to-win* ([Mein-MMO, 11/9/2023](https://mein-mmo.de/en/mmorpg-black-desert-brings-controversial-change-will-be-more-pay-to-win-but-it-has-to-be-done,1034133)).

**Quatro perguntas** **[H]**
- *Inspiração:* diferencia-se do token por fazer a moeda paga circular como dinheiro do mercado (TL) ou por converter a loja em prata a câmbio fixo (BDO).
- *Problema:* receita alinhada ao volume de comércio (a taxa de 20% do TL é dreno e venda ao mesmo tempo).
- *Comportamento:* toda transação vira um câmbio; o mercado cinza disputa o preço da loja.
- *Risco:* "dolarização" da economia; cada taxa soa como cobrança; câmbio administrado vira crise a cada reajuste; juridicamente, moeda premium aceita por outro jogador se aproxima de arranjo de pagamento e de moeda eletrônica (luz amarela em [05b](05b-rmt-legal-brasil.md) e [05c](05c-rmt-legal-global-pagamentos.md)).

### 3.C Venda oficial de personagens: o Char Bazaar do Tibia

- **[F] Por quê.** Depois de mais de 20 anos de proibição, a CipSoft constatou que quase todas as contas do terço superior do ranking já tinham sido negociadas e que a recuperação de conta era acionada por compradores querendo confirmar a posse ([Mein-MMO, 2022](https://mein-mmo.de/en/mmorpg-from-germany-broke-the-taboo-that-wow-does-not-dare-to-approach-players-are-allowed-to-sell-chars,858131)).
- **[F] Regras.** Lançado em 25/8/2020; o vendedor paga 50 TC e a CipSoft fica com 12% do preço; o personagem precisa estar fora de guilda, sem casa e sem *skull*; o comprador só paga com coins transferíveis e reserva 10% do lance; as coins recebidas ficam transferíveis em até 120 dias ([Mein-MMO, 2020](https://mein-mmo.de/en/mmorpg-breaks-the-taboo-allows-players-to-sell-their-characters-for-money,544744); [FAQ oficial](https://www.tibia.com/charactertrade/?subtopic=faq); [TibiaQA](https://www.tibiaqa.com/33524/after-what-time-do-non-transferable-coins-become-transferable?show=33535)).
- **[F] Resultado.** 191.321 leilões com lance e 721,4 milhões de TC movimentados em 2025, com 98,7 milhões de TC em taxas, perto de 13% da receita da CipSoft pela estimativa do autor do levantamento ([Exevo Pan](https://www.exevopan.com/blog/financial-report-2025)); a maior venda de 2024 foi de 1,1 milhão de TC, pouco mais de € 41 mil ([Mein-MMO, 2025](https://mein-mmo.de/en/player-of-a-german-mmorpg-sells-his-character-for-the-equivalent-of-about-41000-euros,1218610)). O pico de leilões foi em 2022 ([Exevo Pan](https://www.exevopan.com/blog/financial-report-2025)).
- **[F] O passo seguinte foi a saída para cripto:** em out./2024 a CipSoft anunciou o TIB, token ERC20 na BNB Smart Chain conversível 1:1 com Tibia Coins, para maiores com conta verificada ([Tibia Token Service Agreement](https://www.tibia.com/support/tibiatokenserviceagreement.php)). **[H]** Com isso, a moeda premium ganhou saída indireta para dinheiro sem que a CipSoft pague ninguém.
- **Não encontrado:** dado oficial de queda de fraudes ou de pedidos de recuperação de conta depois do Bazaar.

**Quatro perguntas** **[H]**
- *Inspiração:* legalizar o que o eBay já fazia, como a Station Exchange tentou em 2005.
- *Problema:* golpe de recuperação de conta e venda clandestina de contas.
- *Comportamento:* subir personagens para vender; bots de nivelamento.
- *Risco:* num idle, em que a conta progride sozinha, vender a conta é vender tempo ausente, que é exatamente o que os bots produzem de graça (ver [G05](fichas/G05-banana-e-bongo-cat.md)); personagens comprados distorcem rankings e guerras de guilda.

### 3.D Casa de leilão em dinheiro: Station Exchange (2005–2008) e Diablo III (2012–2014)

**Station Exchange, da Sony Online Entertainment, no EverQuest II**

- **[F] Por quê.** Anunciada em abr./2005, numa época em que a SOE dizia que **40% das horas-homem do atendimento iam para fraudes** de negociantes de fora; John Smedley, presidente da SOE, disse também que a empresa não escondia que ia ganhar dinheiro com isso ([Wired, abr./2005](https://wirednews.pages.dev/2005/04/sony-gets-real-on-virtual-goods)). Jogadores contrários teriam servidores próprios, e a Blizzard manteve a proibição nos seus jogos (mesma fonte). Na época, a DFC Intelligence projetava que o mercado secundário de jogos online poderia chegar a US$ 800 milhões ([The Register, 2005](https://www.theregister.com/2005/04/27/sony_character_trading_everquest/)).
- **[F] Regras.** Entrou no ar em jul./2005 em dois servidores novos do EverQuest II (The Bazaar e Shadowhaven), com 10% de comissão sobre a venda e taxa de anúncio de US$ 1 para moeda e itens e de US$ 10 para personagens ([GameSpot](https://www.gamespot.com/articles/sony-scores-with-station-exchange/1100-6131956/), lido via busca; [RPGFan](https://classic.rpgfan.com/news/2005/1679.html)).
- **[F] Primeiro ano (jun./2005 a jun./2006), pelo relatório da própria SOE:** US$ 1,87 milhão em transações entre jogadores; câmbio médio estável de US$ 7,35 por peça de platina; personagens vendidos por até US$ 2.000; o maior vendedor faturou US$ 37.435 em 351 leilões; a maioria dos que ganharam dinheiro vendia itens que eles mesmos obtiveram em missões ou fabricaram, não revendia; a maioria das vendas foi compra imediata, não leilão. Edward Castronova comentou que, com um sistema oficial, o custo de atendimento "cai drasticamente" ([SOE, 7/2/2007](https://sony.mediaroom.com/2007-02-07-Sony-Online-Entertainment-Releases-Station-Exchange-Online-Gaming-Auction-Site-White-Paper)). São números da empresa, sem auditoria independente.
- **[F] O fim.** Em fev./2008 a SOE entregou o serviço à Live Gamer, uma empresa independente. Smedley disse que a fraude tinha começado a subir muito com farmers mais profissionais, que cartões roubados eram um problema crescente e que a SOE já tinha pago **mais de US$ 1 milhão em multas por *chargeback***, num serviço que gerara mais de US$ 3 milhões de receita; estimou que 95% da fraude vinha do exterior e disse que a Live Gamer podia dedicar mais recursos ao antifraude porque esse era todo o negócio dela ([Game Developer, 7/2/2008](https://www.gamedeveloper.com/game-platforms/q-a-soe-live-gamer-reveal-live-gamer-exchange-service); [Ten Ton Hammer, 8/2/2008](https://www.tentonhammer.com/news/john-smedley-discusses-live-gamer-hand-off)). Antes disso, duplicadores de moeda tentaram vender platina falsa na própria Station Exchange ([Wikipedia, citando a ZDNet](https://en.wikipedia.org/wiki/Duping_(video_games)); [G07](fichas/G07-economias-que-colapsaram.md)).
- **[H] Leitura.** É o caso mais limpo do custo oculto do dinheiro saindo do jogo: a receita veio, mas veio junto a fraude de cartão, que cresceu com a profissionalização dos farmers e se paga em multas das bandeiras. A solução da SOE foi terceirizar o risco, não eliminá-lo.

**Real-Money Auction House (RMAH) do Diablo III**

- **[F] Regras e duração:** aberta em 12/6/2012 e fechada em 18/3/2014; US$ 1 fixo por venda de equipamento, 15% em commodities, mais 15% para sacar no PayPal; preço por item entre US$ 1,25 e US$ 250; não existia no modo Hardcore nem na Coreia ([Game Informer, 1/5/2012](https://www.gameinformer.com/b/news/archive/2012/05/01/blizzard-details-diablo-iii-auction-house-fees.aspx); [Engadget](https://www.engadget.com/2012-01-13-blizzard-kills-diablo-iiis-rmt-to-appease-south-korea.html); [G01](fichas/G01-diablo-3-casa-de-leilao.md)).
- **[F] O que aconteceu:** mais de 50% dos jogadores usavam o leilão com regularidade ([MCV, GDC 2013](https://www.mcvuk.com/development-news/gdc-13-diablo-iii-auction-houses-hurt-game-admits-director/)); para a maioria, todo o equipamento vinha do leilão ([PCGamesN, fev./2013](https://www.pcgamesn.com/diablo/diablo-3-devs-acknowledge-auction-house-problems-fact-most-players-get-their-gear-ah-issue)); um dupe de ouro forçou o fechamento das duas casas em mai./2013 ([Engadget](https://www.engadget.com/2013/05/08/diablo-3-ah-bug-sees-trillions-in-gold-duping-auction-houses-sh/)); a Blizzard anunciou o fim dizendo que o sistema minava o núcleo do jogo ([Blizzard](https://news.blizzard.com/en-us/article/10974978/iii)) e corrigiu com o Loot 2.0, lendários presos à conta ([Shacknews](https://www.shacknews.com/article/83266/diablo-3-patch-201-deploys-with-loot-20)).

**Quatro perguntas** **[H]**
- *Inspiração:* formalizar o eBay e o mercado de farmers.
- *Problema:* fraude entre jogadores e receita perdida para intermediários.
- *Comportamento:* jogar o leilão em vez do jogo; farmar para vender; bots e cartões roubados.
- *Risco:* o desenho do jogo passa a servir ao mercado; *chargebacks* com multa; enquadramento financeiro; e, se houver qualquer sorte paga, jogo de azar ([05b](05b-rmt-legal-brasil.md), seção 11).

### 3.E Saque em dinheiro: Entropia, Second Life e Roblox

**Entropia Universe**
- **[F]** O PED tem câmbio fixo de 10 por dólar nos dois sentidos; o saque mínimo é de 1.000 PED, com taxa de 1%, e o pagamento costuma sair em ~50 dias úteis por causa do risco de estorno de cartão ([FAQ de saque](https://account.entropiauniverse.com/support-faq/withdrawal)). A receita média é de ~US$ 1,3 por hora jogada, que é a vantagem da casa no loop ([relatório MindArk 2023, via buscador](https://www.mindark.com/investor-relations/financial-reports/documents/2024/MindArk-Year-End-Report-2023.pdf)). A licença bancária de 2009 nunca virou banco ([GlobeNewswire](https://www.globenewswire.com/fr/news-release/2009/03/18/1062140/0/en/Virtual-World-Developer-MindArk-Granted-Real-World-Banking-License.html); [G02](fichas/G02-entropia-universe.md)).

**Second Life, LindeX e Tilia**
- **[F]** O Linden Dollar é negociado contra o dólar na LindeX e pode ser vendido de volta; em 2013, a orientação da FinCEN levou comentaristas a ler a Linden Lab como administradora e câmbio de moeda virtual conversível ([FinCEN, FIN-2013-G001](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering); [Modem World, 2013](https://modemworld.me/2013/04/05/the-linden-dollar-token-or-currency-the-us-treasury-ponders/)). Em 2019 a Tilia, subsidiária registrada como transmissora de dinheiro, passou a guardar os saldos em dólar ([Second Life](https://community.secondlife.com/blogs/entry/2598-tilia-officially-begins-operations-today-in-second-life/)); a venda à Thunes foi anunciada em 23/4/2024, com a Tilia descrita como dona de licenças de pagamento em 48 estados dos EUA ([Linden Lab](https://lindenlab.com/press-release/thunes-announces-agreement-to-acquire-tilia-llc); [Vixio](https://www.vixio.com/insights/pc-thunes-acquire-tilia-payments-licences-48-us-states)).
- **[F]** Em jul./2025, a Linden disse que a Tilia, como operação de *fintech*, tomava tempo demais para ser bem gerida, e que os pagamentos em tempo real atraíram tentativas de fraude que a empresa não pegou a tempo ([Modem World, 25/7/2025](https://modemworld.me/2025/07/25/an-update-from-linden-lab/)).
- **[F]** Em 2026, mais de 13 mil criadores tinham sacado dinheiro no ano, ficando com ~85% da receita de vendas antes das taxas de saque, num mundo com pouco menos de 700 mil usuários ativos por mês ([80.lv, 29/10/2026](https://80.lv/articles/second-life-wants-its-23-year-old-world-to-be-a-modern-game-platform)). Em mar./2023, a taxa de compra de L$ na LindeX subiu para 10% (mínimo de US$ 1,49) e a de venda para 5% ([Second Life, lido via busca; a página retornou 403](https://community.secondlife.com/blogs/entry/12863-infrastructure-investment-update-buysell-fee-change-and-land-pricing-effective-mar-6-2023/)).
- **[F]** Um banco de jogador em L$ quebrou devendo L$ 200 milhões (~US$ 750 mil), e a Linden proibiu juros sem licença ([TechCrunch, 2008](https://techcrunch.com/2008/01/08/virtual-banking-banned-in-second-life/)).

**Roblox, Developer Exchange (DevEx)**
- **[F]** Só sacam criadores, e só Robux "ganhos" (de vendas a outros usuários); Robux comprados não entram. Requisitos: 13 anos ou mais, no mínimo 30.000 Robux ganhos, e-mail verificado e formulário fiscal (W-9 ou W-8) ([Creator Hub](https://create.roblox.com/docs/production/monetization/developer-exchange)). A taxa é de US$ 0,0038 por Robux desde 5/9/2025 (antes 0,0035); uma taxa de US$ 0,0054 vale para parte do gasto de adultos verificados nos EUA (mesma fonte; [Net Influencer](https://www.netinfluencer.com/roblox-to-raise-developer-exchange-rate-for-games-aimed-at-18-plus-players-as-adult-cohort-surges/)).
- **[F]** O pagamento a criadores passou de US$ 1 bilhão nos nove primeiros meses de 2025, com US$ 427,9 milhões no 3º trimestre (+85% no ano) ([teleconferência do 3º tri. de 2025](https://www.alphaspread.com/security/nyse/rblx/investor-relations/earnings-call/q3-2025)); 2024 fechou em US$ 923 milhões, segundo a imprensa ([games.gg](https://games.gg/ko/news/roblox-창작자에게-10억-달러-이상-지급/)).
- **[H]** Cálculo nosso: a 400 Robux por US$ 4,99 no app (~US$ 0,0125 por Robux, preço de tabela citado por guias como [ThePricer](https://www.thepricer.org/how-much-do-robux-cost/)), o criador saca ~30% do valor de face do Robux, antes ainda da comissão de plataforma sobre a venda. O *spread* é a receita da Roblox, e o saque restrito a criadores evita que jogadores comuns farmem dinheiro.

**Quatro perguntas** **[H]**
- *Inspiração:* a promessa de "economia real" (Entropia, Second Life) e a economia de criadores (Roblox).
- *Problema:* remunerar quem produz valor para outros usuários.
- *Comportamento:* jogar como trabalho; farmar; investir; no Roblox, criar.
- *Risco:* licença financeira, PLD, retenção longa de saques, fraude com pagamentos instantâneos e, quando a receita é a vantagem da casa, todo ajuste parece trapaça. O saque só funcionou sem desastre onde quem saca é **criador** e há uma estrutura financeira licenciada por trás.

### 3.F Crédito fechado sem saque: o Mercado da Comunidade Steam

- **[F]** A Steam cobra 5% por venda e a publicadora define a própria taxa (10% no CS2); o valor vai para a carteira, sem saque oficial ([FAQ da Steam](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B)).
- **[F] O crédito sem saque não impediu o roubo:** em dez./2015 a Valve disse ver ~77 mil contas sequestradas e saqueadas por mês, porque quase toda conta guarda itens que valem o esforço do invasor, e criou a retenção de trocas para quem não usa o autenticador ([The Next Web, 10/12/2015](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it); [Steam](https://store.steampowered.com/news/19618/)). Hoje itens de CS2 comprados no mercado ficam 7 dias sem poder ser trocados ([SteamDB](https://steamdb.com/en/markets/steam)).
- **[F] Nem impediu o saque por fora:** em jul./2016 a Valve notificou 23 sites de aposta com skins a parar em dez dias, e em set./2016 a Comissão de Jogos de Washington mandou a Valve parar de facilitar o uso de skins em jogo de azar ([SBC News](https://sbcnews.co.uk/esports-fantasy/2016/07/21/valve-issues-cease-desist-notice-23-skins-betting-sites/); [PC Gamer](https://pcgamer.com/state-regulator-orders-valve-to-halt-csgo-skin-gambling-through-steam)). Em 2019, chaves de caixa compradas deixaram de ser negociáveis porque quase todas as revendidas vinham de fraude ([Engadget](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html)). Em 2026, Nova York processou a Valve sustentando que os itens são conversíveis em dinheiro pelo mercado oficial e por sites tolerados ([Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html); [05c](05c-rmt-legal-global-pagamentos.md), §3.4).
- **[F] Com idle, vira fazenda de bots:** ~2/3 dos jogadores do Banana e ~metade dos do Bongo Cat eram bots, e no Task Bar Hero (2026) um arco anunciado a US$ 1.585,75 nunca saiu acima de US$ 22 ([G05](fichas/G05-banana-e-bongo-cat.md); [Kotaku](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)).

**Quatro perguntas** **[H]**
- *Inspiração:* carteira de varejo; o crédito só compra dentro da plataforma.
- *Problema:* deixar o jogador financiar compras vendendo itens, sem saque.
- *Comportamento:* especular, colecionar, farmar itens com preço em dinheiro.
- *Risco:* todo item ganha preço em dinheiro, o que transforma qualquer sorte paga em jogo de azar aos olhos de Nova York e dos Países Baixos; o mercado cinza de saque nasce sozinho; e, para um estúdio, a carteira usada para pagar outro jogador é luz amarela do Banco Central ([05b](05b-rmt-legal-brasil.md), seção 11, modelo 5).

### 3.G Corretoras terceirizadas legais: ItemBay e ItemMania (Coreia)

- **[F] Tamanho.** Em 2013, as duas somavam ₩ 831,7 bilhões em transações ([Gamemeca, 10/11/2014](https://www.gamemeca.com/view.php?gid=565316)); em 1/7/2014 a Comissão de Comércio Justo aprovou a fusão das duas sob a BNM Holdings, com 52% (IMI, dona da ItemMania) e 43,2% (ItemBay) do mercado de intermediação de itens, num mercado de cerca de ₩ 1 trilhão no ano anterior, e proibiu reajustar comissões acima da inflação por três anos ([inews24, 1/7/2014](https://www.inews24.com/view/832586)).
- **[F] O processo.** Em nov./2014 a promotoria denunciou os dois presidentes por tolerar ₩ 1,056 trilhão em vendas ilegais: 53 oficinas, com bots ligados 24 horas e cerca de 133 mil contas de corretora abertas com documentos de terceiros, vendiam itens farmados; as corretoras cobravam 3% a 5% de comissão e teriam pulado verificações no saque; foram recuperados ~₩ 25,3 bilhões em comissões ([Gamemeca, 10/11/2014](https://www.gamemeca.com/view.php?gid=565316)).
- **[F] O limite legal.** A lei coreana pune, como atividade empresarial, trocar por dinheiro, intermediar ou recomprar resultados de jogo, e o Tribunal Constitucional confirmou a norma em 2022 ([Kyunghyang](https://www.khan.co.kr/article/202202281317001); [05c](05c-rmt-legal-global-pagamentos.md), §4.2); o regulamento distingue o "uso anormal" do jogo, isto é, obter moeda por meios fora do propósito do jogo ([LawTalk, comentário](https://www.lawtalk.co.kr/posts/58299)). Em jun./2026, o órgão de classificação abriu apuração contra o MMORPG Lasthlas, que integrou ao cliente a venda de itens na ItemMania ([Gamemeca, 11/6/2026](https://www.gamemeca.com/en/view.php?gid=1776384)). **[NV]** Não confirmei o texto exato do regulamento que separa o comércio tolerado do proibido.
- **[H] Leitura.** A Coreia é o maior laboratório de RMT terceirizado legal: o mercado é tolerado enquanto o operador do jogo fica fora dele, e a corretora lucra com o volume, inclusive o dos bots. A intermediação vira o elo que lava o produto das fazendas.

### 3.H Web3 e *play-to-earn*

- **[F]** O SLP do Axie, sem teto de emissão, perdeu mais de 99% do pico; só 1,3% dos Axies foram queimados; o hack da ponte Ronin levou entre US$ 568 e 625 milhões ([Naavik](https://naavik.co/deep-dives/axie-infinity-part-2/); [Merkle Science](https://merklescience.com/blog/hack-track-analysis-of-ronin-network-exploit)). O Pixels perdeu 74% dos jogadores diários em 8 dias quando mudou recompensas, e em 2026 a Sky Mavis descreveu o Axie como dominado por bots ([DL News](https://www.dlnews.com/articles/markets/axie-infinity-axs-token-jumps-as-game-devs-push-major-rewards-change/)). A Steam proíbe cripto e NFT desde 2021 ([PC Gamer](https://www.pcgamer.com/steam-bans-nfts-cryptocurrencies-blockchain/)), e a Coreia recusa classificar *play-to-earn* ([GIGAZINE](https://gigazine.net/gsc_news/en/20220105-korean-tells-block-p2e-games/)). No Brasil, anúncios prometiam R$ 10 mil por mês com o Axie ([G03](fichas/G03-axie-infinity-e-web3.md)).
- **[H]** É o modelo de saque sem nenhuma das travas dos outros: emissão sem teto, renda dependente de novos entrantes e custódia de cripto por um estúdio de jogos. Não serve de referência positiva para nada além do que evitar.

### 3.I O padrão que atravessa as famílias

**[H]** Lendo as nove famílias juntas, aparece uma escada. Cada degrau a mais de saída do dinheiro trouxe mais receita potencial, e também mais licença, mais fraude de pagamento e mais bot:

| Degrau | Modelos | Licença | Fraude de pagamento | Pressão de bots | O que aconteceu na prática |
|---|---|---|---|---|---|
| 1. Dinheiro só entra, token de uso fixo | WoW Token, Bond, PLEX | Não | Baixa (carência resolve) | Média: o ouro ganha preço | Sobreviveu em todos os casos |
| 2. Moeda paga circula no mercado | Lucent, gemas do Shop Titans | Zona cinzenta | Média | Média | Funciona, com rótulo de P2W e mercado cinza |
| 3. Contas e itens com preço em dinheiro, sem saque | Char Bazaar, Steam | Zona cinzenta | Média a alta | Alta | Cresce, mas atrai processo (Valve) e farm de contas |
| 4. Dinheiro sai, com parceiro | Station Exchange → Live Gamer; Tilia; DevEx | Sim (do parceiro) | Alta | Alta (exceto DevEx, só criadores) | Terceirizado, vendido ou restrito a criadores |
| 5. Dinheiro sai, sem trava | Axie, Entropia | Sim | Alta | Dominante | Colapso ou nicho com vantagem da casa |

---

## 4. O mercado paralelo (RMT ilegal)

### 4.1 Por que ele existe

1. **Assimetria entre tempo e dinheiro.** **[F]** A própria Sandbox descreve o câmbio do Albion como uma troca entre quem tem mais dinheiro e quem tem mais tempo ([80.lv, 13/4/2026](https://80.lv/articles/how-albion-online-devs-built-a-sandbox-mmorpg-across-an-entire-decade)). **[H]** Enquanto houver um jogador com mais dinheiro que tempo e outro com o contrário, alguém vai intermediar, com ou sem o estúdio.
2. **O desenho cria a demanda.** **[F]** A Blizzard proibiu as raides GDKP no Season of Discovery porque elas criavam demanda por ouro que não existiria de outro modo ([Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/news/blizzard-bans-gdkp-runs-in-season-of-discovery-starting-in-phase-2/)); no Diablo III, recompensas avaras e o muro do Inferno empurraram todos para o leilão ([PCGamesN, 2015](https://pcgamesn.com/diablo-iii/it-took-20-minutes-for-blizzard-to-decide-to-kill-the-diablo-3-auction-house)). **[H]** Grind, muros de progresso e itens que só se obtêm por sorte são fábricas de demanda por RMT.
3. **Proibir não basta.** **[F]** Em 2007 a Jagex limitou as trocas desequilibradas para quebrar os vendedores de gold; o jogador honesto protestou, uma petição juntou 1,2 milhão de assinaturas e o comércio livre voltou em 2011 com 91% dos votos; meses depois, uma carta da própria Jagex admitia que a guerra contra bots estava sendo vencida pelos bots ([Jagex, 2007](https://secure.runescape.com/m=news/trade-and-drop-changes); [Jagex, 2011](https://secure.runescape.com/m=news/runescape-referendum-voting-closed); [Engadget, 2011](https://www.engadget.com/2011-10-11-runescape-is-losing-the-war-on-bots.html)).
4. **Mão de obra barata e automação mais barata ainda.** **[F]** A estimativa de Heeks para 2008 era de ~400 mil farmers, ~80% na China, ganhando em média US$ 145 por mês ([Game Developer, 2008](https://gamedeveloper.com/game-platforms/study-gold-farming-likely-a-500-million-industry)). **[F]** Nos idles do Steam, a mão de obra virou script: no Banana, ~2/3 dos jogadores eram bots ([Insider Gaming](https://insider-gaming.com/banana-steam-make-money/)).
5. **O canal oficial dá preço ao ouro.** **[H]** Com token, o ouro passa a ter cotação em dinheiro publicada pelo próprio estúdio. Farmar vira trabalho remunerado, e o vendedor ilegal só precisa cobrar menos que a cotação ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md), §13).

### 4.2 Tamanho estimado

Todas as estimativas abaixo são **de terceiros** e frágeis; o próprio Heeks chamou a sua de "melhor palpite".

| Estimativa | Data do dado | Quem | Valor | O que mede |
|---|---|---|---|---|
| Projeção do mercado secundário | 2005 | DFC Intelligence, via [The Register](https://www.theregister.com/2005/04/27/sony_character_trading_everquest/) | Até US$ 800 milhões | Mercado secundário de jogos online (projeção) |
| *Gold farming* global | 2008 | Richard Heeks, Univ. de Manchester ([Game Developer](https://gamedeveloper.com/game-platforms/study-gold-farming-likely-a-500-million-industry); [Phys.org](https://phys.org/news/2008-09-countries-benefit-online-gold.html)) | ~US$ 500 milhões, podendo passar de US$ 1 bilhão; 5 a 10 milhões de compradores | Venda de ouro e itens por farmers |
| Serviços de "jogar por encomenda" | 2009 | Lehdonvirta e Ernkvist para o infoDev/Banco Mundial ([relatório, 2011](https://documents1.worldbank.org/curated/en/929131468346444204/pdf/637390WP0Knowl00Box0361524B0PUBLIC0.pdf); [Boing Boing, 2011](https://boingboing.net/2011/04/07/world-bank-gold-farm.html)) | ~US$ 3 bilhões | Renda de *gold farming* e afins para países em desenvolvimento |
| Corretoras coreanas | 2013 | Comissão de Comércio Justo, via [inews24](https://www.inews24.com/view/832586) | ~₩ 1 trilhão por ano | Intermediação legal-tolerada de itens, um só país |
| Compradores de gold no RuneScape | 2013 | CEO da Jagex, via [Engadget](https://www.engadget.com/2013-09-25-jagex-introduces-runescape-bonds-new-business-model.html) | 40% a 50% dos jogadores ativos por mês | Prevalência, não valor |
| Char Bazaar | 2025 | Levantamento de fãs ([Exevo Pan](https://www.exevopan.com/blog/financial-report-2025)) e cálculo da [F04](fichas/F04-tibia.md) | ~€ 27 milhões | Mercado oficial de personagens de um jogo |

- **Não encontrado:** uma estimativa recente (2023–2026) e confiável do RMT ilegal global, nem o volume de marketplaces como PlayerAuctions ou G2G. Busquei por tamanho de mercado de RMT em 2023–2024 e por dados desses sites, sem resultado utilizável.
- **[F] Brasil.** A GGMAX se apresenta como o maior marketplace de jogos online do país, com contas, gold e itens de mais de 150 jogos, pagamento intermediado e saque por Pix ([GGMAX](https://ggmax.com.br/torne-se-vendedor)); num publieditorial de 2022, dizia ter mais de 50 mil usuários ativos e 15 mil anúncios ([Observatório de Games](https://observatoriodegames.com.br/mercado/conheca-a-ggmax-o-marketplace-que-promove-a-compra-e-venda-de-ativos-digitais-com-seguranca)). Em reclamações de 2026, vendedores relatam saldo retido de 7 a 30 dias depois da venda de contas de Clash Royale e Free Fire ([Reclame Aqui, jul./2026](https://www.reclameaqui.com.br/ggmax/retencao-abusiva-de-saldo-ggmax-promete-prazo-de-7-dias-e-retem-valor-por-30-dias-apos-venda-de-clash-royale_kCs-xdRIYG2PhgBG/)). **[H]** Ou seja, o próprio mercado cinza já usa carência contra o golpe de recuperação de conta. Num relatório de transparência de 2021, o Mercado Livre lista "contas e jogos digitais" entre as principais categorias de anúncios removidos por violar suas políticas ([Mercado Livre, lido via busca; o PDF retornou 403](https://mercadolibre.com/org-img/institucional/Mercado-Livre-Reporte-de-Transparencia-2021-Q1-2-POR.pdf)). A Garena proíbe vender ou transferir contas de Free Fire ([Free Fire Mania](https://www.freefiremania.com.br/noticia/comprar-conta-free-fire-e-seguro.html)). Não há estatística de prevalência no Brasil ([08](08-mercado-posicionamento.md), §2.5).

### 4.3 O dano que ele causa

| Dano | Evidência | Fonte |
|---|---|---|
| **Inflação e deflação** | Cada bot é uma torneira: farma moeda e inflaciona, ou farma itens e derruba o preço de quem produz honestamente; depois do Bot Nuking Day, os itens mais "botados" do RuneScape subiram de preço | [04b](04b-economia-mercados-protecoes-bots.md), §4.2; [F03](fichas/F03-runescape-e-osrs.md) |
| **Roubo de contas** | ~77 mil contas sequestradas por mês na Steam (2015); farmers do EVE roubaram contas para recuperar ISK depois da Unholy Rage; golpe de "recuperação de conta" depois da venda é o golpe típico no Tibia e no Free Fire | [The Next Web](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it); [Engadget, 2009](https://www.engadget.com/2009-08-11-the-fight-against-rmt-in-eve-online.html); [Mein-MMO](https://mein-mmo.de/en/mmorpg-from-germany-broke-the-taboo-that-wow-does-not-dare-to-approach-players-are-allowed-to-sell-chars,858131) |
| **Custo de atendimento** | 40% das horas-homem do atendimento da SOE iam para fraude (2005) | [Wired](https://wirednews.pages.dev/2005/04/sony-gets-real-on-virtual-goods) |
| **Fraude de cartão e lavagem** | Desenvolvedores de WoW e RuneScape disseram que a maioria das contas de farm era paga com cartões roubados; chaves do CS:GO compradas com fraude; V-Bucks comprados com cartões roubados e revendidos na *dark web*; multas de *chargeback* acima de US$ 1 milhão na Station Exchange | [Wikipedia, Gold farming](https://en.wikipedia.org/wiki/Gold_farming); [Engadget, 2019](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html); [OCCRP](https://www.occrp.org/en/daily/9109-independent-credit-card-thieves-use-fortnite-to-launder-money); [Game Developer, 2008](https://www.gamedeveloper.com/game-platforms/q-a-soe-live-gamer-reveal-live-gamer-exchange-service) |
| **Uso de identidades roubadas** | 133 mil contas de corretora abertas com documentos de terceiros para vender itens de bots na Coreia | [Gamemeca, 2014](https://www.gamemeca.com/view.php?gid=565316) |
| **Roubo interno** | Um funcionário da Jagex esvaziou 68 contas (~705 bilhões de gp, avaliados em £ 543 mil) com ferramentas de suporte e vendeu fora do jogo | [R v Lakeman](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4) |
| **Infraestrutura e experiência** | Banir ~2% da base do EVE cortou ~30% do uso de CPU por usuário; o Albion sofreu ataques depois de ondas de banimento | [F01](fichas/F01-eve-online.md); [Mein-MMO](https://mein-mmo.de/en/an-mmorpg-from-germany-is-being-attacked-by-hackers-the-developer-says-funny-that-this-always-happens-after-a-ban-wave,1517133) |
| **Risco jurídico para o operador** | Nova York × Valve usa os mercados de terceiros tolerados como prova; executivos de corretoras coreanas denunciados | [Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html); [Gamemeca](https://www.gamemeca.com/view.php?gid=565316) |

### 4.4 Evidências de que um canal oficial bem desenhado esvazia o mercado paralelo

- **[F] Bonds (RS3, 2013):** um mês depois do lançamento, a riqueza ligada ao *gold farming* tinha caído mais de 80% ([MCV, 30/10/2013](https://www.mcvuk.com/development-news/jagex-chokes-runescape-gold-farmers-with-bonds-system/)). Atenção: no mesmo ano a Jagex retirou 3,7 trilhões de gp de contas de farmers e baniu mais de 1,1 milhão de bots ([Engadget](https://www.engadget.com/2013-09-25-jagex-introduces-runescape-bonds-new-business-model.html)); o efeito é da soma, não só do Bond.
- **[F/H] Torn:** o Donator Pack de US$ 5 vale ~US$ 24 milhões no jogo, cerca de US$ 0,21 por milhão, contra US$ 0,49 por milhão num site de RMT ([TornW3B](https://weav3r.dev/item/283); [PlayerAuctions](https://www.playerauctions.com/torn-city-items/291782600i!-torn-city-cash--each-unit-is-10m-cash--torn-city-/)). As datas dos dois preços não estão confirmadas ([D01](fichas/D01-torn.md)).
- **[F] Char Bazaar:** capturou um mercado que antes corria no eBay com golpe e risco de banimento, mesmo cobrando 12% mais 50 TC ([Mein-MMO, 2020](https://mein-mmo.de/en/mmorpg-breaks-the-taboo-allows-players-to-sell-their-characters-for-money,544744); [Exevo Pan](https://www.exevopan.com/blog/financial-report-2025)). **[H]** Ganhou pela segurança, não pelo preço.
- **[F] Station Exchange:** no primeiro ano, a SOE e Castronova relataram queda forte no custo de atendimento com o mesmo nível de atividade ([SOE, 2007](https://sony.mediaroom.com/2007-02-07-Sony-Online-Entertainment-Releases-Station-Exchange-Online-Gaming-Auction-Site-White-Paper)).
- **[F] IdleMMO:** 65,2% das memberships vieram de ouro, ou seja, o canal oficial atende a demanda dos dois lados ([Galahad](https://www.galahadcreative.com/blog/our-monetisation-strategy/)).
- **[H] Lacuna:** fora o −80% dos Bonds, nenhum estúdio publicou uma medida antes/depois do mercado ilegal. A tese se apoia em poucos números e em muitos relatos.

### 4.5 Os limites da tese

- **[F] O mercado negro sobrevive abaixo do preço oficial.** No OSRS, a Corte de Apelação inglesa registrou que o mercado negro vendia por ~£ 2,70 o gold que um Bond de £ 6 compraria, 45% do preço oficial ([R v Lakeman, 2026](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4)); o Lucent cinza do TL saía 25% a 35% abaixo da loja ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
- **[F] O bot continua.** Em 2023, a Blizzard banía dezenas de milhares de bots por semana e chamou o token de "uma ferramenta entre várias" ([fórum oficial](https://us.forums.blizzard.com/en/wow/t/topic/1598255/1)); em 2026, admitiu ter sido leniente demais com compradores de ouro ([80.lv](https://80.lv/articles/blizzard-admits-it-s-been-too-lenient-on-gold-buyers-in-wow/)); o Lost Ark, com câmbio oficial, baniu mais de 1 milhão de contas no primeiro mês ([Mein-MMO](https://mein-mmo.de/en/mmorpg-lost-ark-kicks-out-over-half-a-million-players-shows-the-extent-of-the-bot-problem,840686)); o Albion, com o Gold, bane de 12 a 21 mil contas por mês em 2026 ([GoHa](https://www.goha.ru/albion-online-za-sentyabr-razrabotchiki-zabanili-20-673-akkaunta-za-botov-chity-i-rmt-dJ0Ypa)).
- **[F] O canal oficial com dinheiro saindo importa a fraude para dentro.** Station Exchange: fraude crescente e mais de US$ 1 milhão em multas ([Game Developer, 2008](https://www.gamedeveloper.com/game-platforms/q-a-soe-live-gamer-reveal-live-gamer-exchange-service)); Second Life: tentativas de fraude atraídas pelos saques em tempo real ([Modem World, 2025](https://modemworld.me/2025/07/25/an-update-from-linden-lab/)); Coreia: o canal legal virou a lavanderia das fazendas de bots ([Gamemeca, 2014](https://www.gamemeca.com/view.php?gid=565316)).
- **[F] O mercado paralelo migra para o que não é oficial.** No OSRS, itens acima do teto de 2,147 bilhões de gp só eram negociados em sites de terceiros e encontros no jogo até set./2026 ([Jagex](https://secure.runescape.com/m=news/ge-improvements-beyond-max-cash?oldschool=1)); no Steam, o saque proibido nasceu em sites de aposta e de venda por fora ([PC Gamer](https://pcgamer.com/state-regulator-orders-valve-to-halt-csgo-skin-gambling-through-steam)).
- **[H] O mecanismo.** O token fixa um teto para o preço do ouro em dinheiro, e o farmer automatizado tem custo quase zero. Enquanto o bot conseguir vender abaixo do teto, ele lucra. O canal oficial derruba a margem do vendedor ilegal, mas não a zera; o que zera é tirar o valor da fonte farmável.

### 4.6 Quando a tese vale

**[H]** Pelos casos acima, o canal oficial esvazia o mercado paralelo quando sete condições aparecem juntas:

1. **Preço:** a rota oficial fica perto do mercado negro, contando o risco de banimento e golpe (Torn, Bonds).
2. **Segurança:** risco zero de golpe e de ban para quem usa a rota oficial (Char Bazaar).
3. **Custo de conta para vender:** contas novas não vendem o que tem valor (OSRS exige 20 horas, 10 *quest points* e nível total 100 para negociar itens muito "botados"; Shop Titans exige 600 gemas gastas) ([OSRS Wiki](https://oldschool.runescape.wiki/w/New_player_guide); [notas 3.6.0](https://playshoptitans.com/news/version-3-6-0-release-notes)).
4. **Ouro escasso:** drenos que acompanham as fontes, senão o token encarece e o não pagante desiste ([04a](04a-economia-fontes-drenos-inflacao.md)).
5. **Repressão permanente e pública ao vendedor**, com o comprador punido de forma recuperável (dívida, como no TL) ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
6. **Fonte farmável sem valor negociável:** o que o tempo passivo produz fica preso à conta ([G05](fichas/G05-banana-e-bongo-cat.md)).
7. **Monitoramento do preço do mercado negro** como indicador, ao lado do preço do token ([F03](fichas/F03-runescape-e-osrs.md)).

---

## Implicações para o nosso jogo

1. **[H] O dinheiro só entra.** Todos os modelos em que o dinheiro saiu do jogo acabaram fechados, terceirizados, vendidos, restritos a criadores ou em colapso (seção 3.I). Para um estúdio pequeno, o degrau 1 da escada é o único que não exige virar empresa financeira.
2. **[H] O RMT oficial deve ser um token de uso fixo, não uma moeda.** O token que circula várias vezes vira moeda paralela (IdleMMO); a moeda premium como dinheiro do mercado "dolariza" a economia (TL). Uma revenda só, como o Bond do OSRS, ou nenhuma troca direta, como o WoW Token.
3. **[H] O preço do token em ouro é um produto público,** não um dado interno: índice de inflação, alarme de fraude (Krono) e argumento contra o mercado negro. Publicar desde o primeiro dia.
4. **[H] Num idle, vender contas é vender tempo ausente**, que é o que um bot produz de graça. O Char Bazaar é um bom modelo para o Tibia, não para nós, pelo menos no lançamento.
5. **[H] A carência antes de transferir é a defesa central contra *chargeback*** (Tibia, MWI, Steam e até a GGMAX usam). Sem ela, o fraudador transforma cartão roubado em ouro antes de o estorno chegar, como na Station Exchange.
6. **[H] O canal oficial não dispensa a operação antibot.** O orçamento de antifraude e antibot é custo fixo do RMT, não projeto de lançamento.
7. **[H] O nosso concorrente no Brasil já existe**, tem escrow e Pix (GGMAX). O token oficial precisa ser mais seguro que ele e, pelo preço implícito do ouro, não muito mais caro.
8. **[H] Nada de integração com sites de venda de itens.** O caso Lasthlas mostra que, na Coreia, isso é a fronteira do crime; e Nova York usa a tolerância a esses sites como prova contra a Valve.

## Como isso pode dar errado

1. **O token vira subsídio ao bot.** **[H]** Ao publicar um preço do ouro em reais, damos ao farmer a tabela de quanto ele ganha. *Mitigação:* o tempo ausente não gera nada negociável; custo de conta para vender; detecção por grafo ([04b](04b-economia-mercados-protecoes-bots.md), §3.9).
2. **Fraude de cartão e multa das bandeiras.** **[F]** A Station Exchange pagou mais de US$ 1 milhão em multas de *chargeback*; a Visa marca como excessivo o lojista acima de 1,5% de disputas ([05c](05c-rmt-legal-global-pagamentos.md), §5.1). *Mitigação:* carência por meio de pagamento, limites para contas novas, verificação para vender o token.
3. **O token vira moeda paralela.** **[F]** IdleMMO, mar./2026. *Mitigação:* uma revenda; nenhuma troca direta; o token não paga itens.
4. **O preço do token explode e o não pagante desiste**, ou despenca e o pagante se sente lesado. **[F]** GW2 (×150) e PLEX (queda depois de distribuição grátis). *Mitigação:* drenos calibrados na Fase 3, nunca dar o token de graça, regras de política monetária publicadas.
5. **O mercado paralelo migra para contas.** **[H]** Com o ouro oficializado, o que sobra de valor clandestino são contas evoluídas e serviços de *power leveling*. *Mitigação:* termos claros, contas sem valor de revenda (progresso de temporada, vínculos sociais), monitoramento da GGMAX e similares.
6. **A repressão vira acusação de lucro.** **[H]** A dívida em moeda do TL pode parecer cobrança. *Mitigação:* política publicada antes do lançamento; dívida quitável jogando; valor confiscado destruído, nunca revendido ([04b](04b-economia-mercados-protecoes-bots.md), §3.10).
7. **A tentação do degrau seguinte.** **[F]** O sucesso do saque empurrou a MindArk para banco e token, e a Linden para uma *fintech* que ela depois vendeu ([G02](fichas/G02-entropia-universe.md); [Modem World, 2025](https://modemworld.me/2025/07/25/an-update-from-linden-lab/)). *Mitigação:* escrever no contrato público que o dinheiro não sai, e só mudar isso com parecer e estrutura separada.
8. **Evidência fraca.** **[H]** A tese de que o canal oficial esvazia o mercado paralelo se apoia num único número antes/depois (Bonds) e em relatos. *Mitigação:* medir desde o alfa o preço do nosso ouro em sites de RMT, para ter o nosso próprio antes/depois.

## Fontes

Todas acessadas em novembro de 2026. Fontes já usadas nas fichas estão também citadas lá, com mais contexto.

**Token trocado por moeda do jogo**
1. [The Way of the PLEX](https://www.eveonline.com/news/view/the-way-of-the-plex) — oficial (CCP) — 11/8/2009.
2. [New changes to PLEX](https://nosygamer.blogspot.com/2025/04/new-changes-to-plex.html) e [A different look at EVE's MER](https://nosygamer.blogspot.com/2026/02/a-different-look-at-eve-onlines-monthly.html) — blog de dados (Nosy Gamer) — abr./2025 e fev./2026.
3. [EVE Monthly Economic Report (categoria)](https://tagn.wordpress.com/category/eve-online/eve-monthly-economic-report/) — blog (TAGN) — 2025–2026.
4. [WoW Token](https://warcraft.wiki.gg/wiki/WoW_Token) — wiki — acesso nov./2026.
5. [WoW Token price breaks 400k](https://www.wowhead.com/news/wow-token-price-breaks-400k-all-time-high-in-north-america-335416) — imprensa (Wowhead) — out./2023.
6. [WoW Token (cotação)](https://wow.gg/auction-house/token) — dados de terceiro — nov./2026.
7. [Classic: WoW Token e bots](https://us.forums.blizzard.com/en/wow/t/topic/1598255/1) — oficial (fórum Blizzard) — 25/5/2023.
8. [Jagex introduces RuneScape Bonds](https://www.engadget.com/2013-09-25-jagex-introduces-runescape-bonds-new-business-model.html) — imprensa (Engadget) — 25/9/2013.
9. [Jagex chokes RuneScape gold farmers with Bonds](https://www.mcvuk.com/development-news/jagex-chokes-runescape-gold-farmers-with-bonds-system/) — imprensa (MCV) — 30/10/2013.
10. [How RMT is changing RuneScape's economy](https://www.engadget.com/2014-09-04-how-rmt-is-changing-runescapes-economy-for-the-better.html) — imprensa (Engadget) — 4/9/2014.
11. [Old school bond](https://oldschool.runescape.wiki/w/Old_school_bond) e [New player guide](https://oldschool.runescape.wiki/w/New_player_guide) — wiki (OSRS).
12. [R v Lakeman [2026] EWCA Crim 4](https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/4) — decisão judicial (Reino Unido) — 13/1/2026.
13. [GE improvements beyond max cash](https://secure.runescape.com/m=news/ge-improvements-beyond-max-cash?oldschool=1) — oficial (Jagex) — 30/9/2026.
14. [Transferable vs. non-transferable Tibia Coins](https://www.tibiaqa.com/19703/what-the-difference-what-you-with-transferable-transferable-tibia-coins?show=19726) — comunidade (TibiaQA).
15. [Milky Way Idle: Patch Notes](https://milkywayidle.wiki.gg/wiki/Patch_Notes), [marketplace.json](https://www.milkywayidle.com/game_data/marketplace.json) e [enquete sobre Cowbells](https://steamcommunity.com/app/3224420/discussions/0/600776571073120773) — wiki revisada pelo dev, dados oficiais e fórum oficial.
16. [Torn Economic Review 2016](https://www.torn.com/economic_reports/2016review.pdf) — oficial (Torn).
17. [Point](https://wiki.torn.com/wiki/Point) e [Donator Pack](https://wiki.torn.com/wiki/Donator_Pack) — wiki oficial (Torn); [TornW3B, item 283](https://weav3r.dev/item/283) — dados de terceiro; [anúncio no PlayerAuctions](https://www.playerauctions.com/torn-city-items/291782600i!-torn-city-cash--each-unit-is-10m-cash--torn-city-/) — mercado de RMT.
18. [Fórum Torn: "The Point's market value"](https://www.torn.com/forums.php?p=threads&f=3&t=16406419&b=0&a=0) — comunidade.
19. [Loathsome game prospers](https://www.irishtimes.com/business/loathsome-game-prospers-1.1157001) — imprensa (Irish Times) — 10/9/2004; [pricegun, item 194](https://pricegun.loathers.net/api/194) — dados de terceiro — 8/11/2026.
20. [Currency Exchange](https://wiki.guildwars2.com/wiki/Currency_Exchange), [análise histórica](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis) e [API de câmbio](https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000) — wiki oficial e API oficial (GW2).
21. [Albion Online Data Project, Gold](https://west.albion-online-data.com/api/v2/stats/gold.json?count=24) — dados de terceiro; [Gold market purchase fee set to 0](https://devtrackers.gg/albion/p/5596ca00-gold-market-purchase-fee-set-to-0) — oficial (dev) — 2023; [How Albion Online devs built a sandbox](https://80.lv/articles/how-albion-online-devs-built-a-sandbox-mmorpg-across-an-entire-decade) — imprensa (80.lv) — 13/4/2026.
22. [What is the Currency Exchange — Lost Ark](https://amazongames.com/en-ca/support/lost-ark/articles/what-is-the-currency-exchange) — oficial, lido via busca.
23. [Our Monetisation Strategy](https://www.galahadcreative.com/blog/our-monetisation-strategy/) e [IdleMMO Economic Changes](https://www.galahadcreative.com/blog/idlemmo-economic-changes/) — oficial (Galahad Creative) — nov./2025 e 21/3/2026.
24. [The economy of a large old MMORPG is being destroyed (Krono)](https://mein-mmo.de/en/the-economy-of-a-large-old-mmorpg-is-currently-being-destroyed-someone-gave-me-a-million-gold-as-a-welcome,1061366) — imprensa (Mein-MMO).

**Moeda premium como meio de troca e venda de personagens**
25. [Throne and Liberty: auction house premium currency](https://www.pcgamesn.com/throne-and-liberty/auction-house-premium-currency) e [real money trading punishment](https://www.pcgamesn.com/throne-and-liberty/real-money-trading-punishment) — imprensa (PCGamesN) — 2024.
26. [What are you actually paying the Lucent tax for](https://mein-mmo.de/en/throne-and-liberty-auction-house-what-are-you-actually-paying-the-luzent-tax-for,1188334) — imprensa (Mein-MMO) — 26/11/2024.
27. [Shop Titans 3.6.0 release notes](https://playshoptitans.com/news/version-3-6-0-release-notes) — oficial (Kabam) — 15/4/2020.
28. [Black Desert: aviso de reajuste de preços](https://www.naeu.playblackdesert.com/News/Detail?groupContentNo=5896) — oficial (Pearl Abyss) — 6/9/2023; [Mein-MMO, mai./2022](https://mein-mmo.de/en/mmorpg-black-desert-makes-changes-to-in-game-currency-players-immediately-complain-about-pay2win,821091) e [set./2023](https://mein-mmo.de/en/mmorpg-black-desert-brings-controversial-change-will-be-more-pay-to-win-but-it-has-to-be-done,1034133) — imprensa.
29. [MMORPG breaks the taboo, allows players to sell characters](https://mein-mmo.de/en/mmorpg-breaks-the-taboo-allows-players-to-sell-their-characters-for-money,544744) — imprensa (Mein-MMO) — 2020; [MMORPG from Germany broke the taboo](https://mein-mmo.de/en/mmorpg-from-germany-broke-the-taboo-that-wow-does-not-dare-to-approach-players-are-allowed-to-sell-chars,858131) — imprensa — 2022.
30. [Char Bazaar FAQ](https://www.tibia.com/charactertrade/?subtopic=faq) e [Tibia Token Service Agreement](https://www.tibia.com/support/tibiatokenserviceagreement.php) — oficial (CipSoft).
31. [Exevo Pan: Financial report 2025](https://www.exevopan.com/blog/financial-report-2025) — dados de fã.

**Leilão em dinheiro e saque**
32. [Sony Gets Real on Virtual Goods](https://wirednews.pages.dev/2005/04/sony-gets-real-on-virtual-goods) — imprensa (Wired, espelho) — abr./2005.
33. [Sony character trading EverQuest](https://www.theregister.com/2005/04/27/sony_character_trading_everquest/) — imprensa (The Register) — 27/4/2005.
34. [Sony scores with Station Exchange](https://www.gamespot.com/articles/sony-scores-with-station-exchange/1100-6131956/) — imprensa (GameSpot), lido via busca; [SOE's Station Exchange officially launches](https://classic.rpgfan.com/news/2005/1679.html) — imprensa (RPGFan) — 2005.
35. [SOE releases Station Exchange white paper](https://sony.mediaroom.com/2007-02-07-Sony-Online-Entertainment-Releases-Station-Exchange-Online-Gaming-Auction-Site-White-Paper) — oficial (SOE) — 7/2/2007.
36. [Q&A: SOE, Live Gamer reveal Live Gamer Exchange](https://www.gamedeveloper.com/game-platforms/q-a-soe-live-gamer-reveal-live-gamer-exchange-service) — imprensa (Gamasutra/Game Developer) — 7/2/2008.
37. [John Smedley discusses Live Gamer hand-off](https://www.tentonhammer.com/news/john-smedley-discusses-live-gamer-hand-off) — imprensa (Ten Ton Hammer) — 8/2/2008.
38. [Duping (video games)](https://en.wikipedia.org/wiki/Duping_(video_games)) — wiki (cita a ZDNet).
39. [Blizzard details Diablo III auction house fees](https://www.gameinformer.com/b/news/archive/2012/05/01/blizzard-details-diablo-iii-auction-house-fees.aspx) — imprensa (Game Informer) — 1/5/2012.
40. [GDC 13: Diablo III auction houses hurt game](https://www.mcvuk.com/development-news/gdc-13-diablo-iii-auction-houses-hurt-game-admits-director/) — imprensa (MCV) — 29/3/2013.
41. [Diablo III auction house closing](https://news.blizzard.com/en-us/article/10974978/iii) — oficial (Blizzard) — 17/9/2013.
42. [Entropia Universe: withdrawal FAQ](https://account.entropiauniverse.com/support-faq/withdrawal) — oficial (MindArk).
43. [FinCEN FIN-2013-G001](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering) — oficial (Tesouro dos EUA) — 18/3/2013.
44. [Tilia officially begins operations](https://community.secondlife.com/blogs/entry/2598-tilia-officially-begins-operations-today-in-second-life/) — oficial (Linden Lab) — 2019.
45. [Thunes announces agreement to acquire Tilia](https://lindenlab.com/press-release/thunes-announces-agreement-to-acquire-tilia-llc) — oficial (Linden Lab) — 23/4/2024; [Thunes to acquire Tilia, payments licences in 48 US states](https://www.vixio.com/insights/pc-thunes-acquire-tilia-payments-licences-48-us-states) — imprensa especializada (Vixio).
46. [An update from Linden Lab](https://modemworld.me/2025/07/25/an-update-from-linden-lab/) — blog (resumo de reunião oficial) — 25/7/2025.
47. [Second Life wants its 23-year-old world to be a modern game platform](https://80.lv/articles/second-life-wants-its-23-year-old-world-to-be-a-modern-game-platform) — imprensa (80.lv) — 29/10/2026.
48. [Infrastructure investment update: buy/sell fee change](https://community.secondlife.com/blogs/entry/12863-infrastructure-investment-update-buysell-fee-change-and-land-pricing-effective-mar-6-2023/) — oficial (Linden Lab), lido via busca — mar./2023.
49. [Virtual banking banned in Second Life](https://techcrunch.com/2008/01/08/virtual-banking-banned-in-second-life/) — imprensa (TechCrunch) — 8/1/2008.
50. [Developer Exchange](https://create.roblox.com/docs/production/monetization/developer-exchange) — oficial (Roblox Creator Hub).
51. [Roblox Q3 2025 earnings call](https://www.alphaspread.com/security/nyse/rblx/investor-relations/earnings-call/q3-2025) — transcrição de teleconferência de resultados; [Roblox paga mais de US$ 1 bilhão a criadores](https://games.gg/ko/news/roblox-창작자에게-10억-달러-이상-지급/) — imprensa; [Net Influencer](https://www.netinfluencer.com/roblox-to-raise-developer-exchange-rate-for-games-aimed-at-18-plus-players-as-adult-cohort-surges/) — imprensa — 2026.
52. [How much do Robux cost?](https://www.thepricer.org/how-much-do-robux-cost/) — guia de terceiro.

**Crédito fechado, corretoras e Web3**
53. [Steam Community Market FAQ](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B) — oficial (Valve).
54. [77,000 Steam users are hacked every month](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it) — imprensa (The Next Web) — 10/12/2015; [Steam: Security and trading](https://store.steampowered.com/news/19618/) — oficial (Valve) — dez./2015.
55. [Steam Market review](https://steamdb.com/en/markets/steam) — dados de terceiro.
56. [Valve issues cease and desist notice to 23 skins betting sites](https://sbcnews.co.uk/esports-fantasy/2016/07/21/valve-issues-cease-desist-notice-23-skins-betting-sites/) — imprensa (SBC News) — 21/7/2016; [State regulator orders Valve to halt CS:GO skin gambling](https://pcgamer.com/state-regulator-orders-valve-to-halt-csgo-skin-gambling-through-steam) — imprensa (PC Gamer) — out./2016.
57. [CS:GO fraud: loot box key trades](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html) — imprensa (Engadget) — 30/10/2019.
58. [New York targets Valve's loot boxes as illegal gambling](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html) — escritório de advocacia (Jones Walker) — 27/2/2026.
59. [Steam's latest chart-topping idle game is packed with bots](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738) — imprensa (Kotaku) — 17/6/2026.
60. [FTC aprova fusão ItemBay–IMI](https://www.inews24.com/view/832586) — imprensa (inews24, coreano) — 1/7/2014.
61. [Maior caso de comércio ilegal de itens, mais de ₩ 1 trilhão](https://www.gamemeca.com/view.php?gid=565316) — imprensa (Gamemeca, coreano) — 10/11/2014.
62. [Tribunal Constitucional confirma proibição de câmbio](https://www.khan.co.kr/article/202202281317001) — imprensa (Kyunghyang Shinmun) — 28/2/2022; [Lasthlas e ItemMania](https://www.gamemeca.com/en/view.php?gid=1776384) — imprensa (Gamemeca) — 11/6/2026; [comentário sobre uso anormal (LawTalk)](https://www.lawtalk.co.kr/posts/58299) — comentário jurídico.
63. [Axie Infinity, part 2](https://naavik.co/deep-dives/axie-infinity-part-2/) — análise (Naavik); [Ronin exploit](https://merklescience.com/blog/hack-track-analysis-of-ronin-network-exploit) — análise (Merkle Science); [Axie rewards change](https://www.dlnews.com/articles/markets/axie-infinity-axs-token-jumps-as-game-devs-push-major-rewards-change/) — imprensa (DL News) — 2026.
64. [Steam bans NFTs and cryptocurrencies](https://www.pcgamer.com/steam-bans-nfts-cryptocurrencies-blockchain/) — imprensa (PC Gamer) — 2021; [Korea blocks P2E games](https://gigazine.net/gsc_news/en/20220105-korean-tells-block-p2e-games/) — imprensa (GIGAZINE) — 5/1/2022.

**Mercado paralelo**
65. [Study: gold farming likely a $500 million industry](https://gamedeveloper.com/game-platforms/study-gold-farming-likely-a-500-million-industry) — imprensa (Game Developer) — 2008; [Countries benefit from online gold farming](https://phys.org/news/2008-09-countries-benefit-online-gold.html) — imprensa (Phys.org) — 2008.
66. [Knowledge Map of the Virtual Economy](https://documents1.worldbank.org/curated/en/929131468346444204/pdf/637390WP0Knowl00Box0361524B0PUBLIC0.pdf) — relatório (Lehdonvirta e Ernkvist, infoDev/Banco Mundial) — abr./2011; [World Bank: gold farming paid poor countries $3B in 2009](https://boingboing.net/2011/04/07/world-bank-gold-farm.html) — imprensa (Boing Boing) — 7/4/2011.
67. [Gold farming](https://en.wikipedia.org/wiki/Gold_farming) — wiki (cita NYT, Eurogamer).
68. [Trade and drop changes](https://secure.runescape.com/m=news/trade-and-drop-changes) — oficial (Jagex) — 10/12/2007; [Referendum voting closed](https://secure.runescape.com/m=news/runescape-referendum-voting-closed) — oficial — jan./2011; [RuneScape is losing the war on bots](https://www.engadget.com/2011-10-11-runescape-is-losing-the-war-on-bots.html) — imprensa (Engadget) — 11/10/2011.
69. [Blizzard bans GDKP runs in Season of Discovery](https://www.warcrafttavern.com/wow-classic/news/blizzard-bans-gdkp-runs-in-season-of-discovery-starting-in-phase-2/) — imprensa (Warcraft Tavern) — 2024; [Blizzard admits it's been too lenient on gold buyers](https://80.lv/articles/blizzard-admits-it-s-been-too-lenient-on-gold-buyers-in-wow/) — imprensa (80.lv) — 2026.
70. [The fight against RMT in EVE Online](https://www.engadget.com/2009-08-11-the-fight-against-rmt-in-eve-online.html) — imprensa (Engadget) — 11/8/2009.
71. [Credit card thieves use Fortnite to launder money](https://www.occrp.org/en/daily/9109-independent-credit-card-thieves-use-fortnite-to-launder-money) — imprensa (OCCRP) — 2019.
72. [Lost Ark kicks out over half a million players](https://mein-mmo.de/en/mmorpg-lost-ark-kicks-out-over-half-a-million-players-shows-the-extent-of-the-bot-problem,840686) — imprensa (Mein-MMO) — 2022; [Albion: 20.673 contas banidas em setembro](https://www.goha.ru/albion-online-za-sentyabr-razrabotchiki-zabanili-20-673-akkaunta-za-botov-chity-i-rmt-dJ0Ypa) — imprensa (GoHa) — 2026.
73. [Banana: Steam make money](https://insider-gaming.com/banana-steam-make-money/) — imprensa (Insider Gaming) — 2024.
74. [GGMAX: torne-se vendedor](https://ggmax.com.br/torne-se-vendedor) — oficial (GGMAX); [Conheça a GGMAX](https://observatoriodegames.com.br/mercado/conheca-a-ggmax-o-marketplace-que-promove-a-compra-e-venda-de-ativos-digitais-com-seguranca) — publieditorial — 31/5/2022; [Reclame Aqui: retenção de saldo](https://www.reclameaqui.com.br/ggmax/retencao-abusiva-de-saldo-ggmax-promete-prazo-de-7-dias-e-retem-valor-por-30-dias-apos-venda-de-clash-royale_kCs-xdRIYG2PhgBG/) — comunidade — jul./2026.
75. [Mercado Livre: relatório de transparência 2021 (1º tri.)](https://mercadolibre.com/org-img/institucional/Mercado-Livre-Reporte-de-Transparencia-2021-Q1-2-POR.pdf) — oficial, lido via busca (403).
76. [Comprar conta Free Fire é seguro?](https://www.freefiremania.com.br/noticia/comprar-conta-free-fire-e-seguro.html) — imprensa especializada — 2026.

