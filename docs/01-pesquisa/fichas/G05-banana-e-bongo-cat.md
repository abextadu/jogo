# Banana (2024) e Bongo Cat (2025): idles cujos drops viram dinheiro

| Campo | Banana | Bongo Cat |
|---|---|---|
| Grupo | G — Casos de alerta (drops com valor real e bots) | G — Casos de alerta (drops com valor real e bots) |
| Desenvolvedora / publicadora | Equipe de quatro pessoas; um dev assina "aaladin66" e o porta-voz é "Hery" | Irox Games (CEO Marcel Zurawka) |
| Lançamento | 23/4/2024 (Steam) | 5/3/2025 (Steam) |
| Plataformas | PC (Windows) | PC |
| Modelo de negócio | Grátis; loja com 5 bananas a US$ 0,25; taxa do jogo sobre vendas no Mercado da Comunidade Steam | Grátis; 5 DLCs pagos, loja de itens e passe (Paw Pass) com trilha premium; taxa sobre o Mercado |
| Status em 2026 | Em declínio: média de 3.099 jogadores simultâneos em out/2026 | Estável: média de 149 mil em out/2026 |

> **Cartão-resumo:** Banana e Bongo Cat quase não têm jogo: um é uma banana para clicar, o outro um gato que bate na barra de tarefas enquanto você digita. O motor é o drop: itens que caem com o tempo e podem ser vendidos no Mercado da Comunidade Steam. Banana chegou a 890 mil simultâneos em junho de 2024, e o próprio dev estimou que só um terço era humano. Bongo Cat, com cerca de metade de bots segundo o criador, rendeu uns US$ 12,6 mil em quatro meses. Vieram clones, e em 2026 um RPG idle do mesmo tipo levou os servidores da Steam ao limite. **Lição nº 1:** se tempo passivo gera algo vendável, o melhor "jogador" é uma fazenda de bots.

## 1. Loop central

- **[F]** Banana: clicar numa banana só aumenta um contador. O que importa é o drop: um item comum a cada 3 horas e um raro a cada 18 horas, vendáveis no Mercado da Steam ([Wikipedia](https://en.wikipedia.org/wiki/Banana_(2024_video_game)); [Game World Observer, 10/6/2024](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money)). Clicar não acelera nada ([Wikipedia](https://en.wikipedia.org/wiki/Banana_(2024_video_game))).
- **[F]** Bongo Cat: um gato fica sobre a barra de tarefas e "toca bongô" a cada tecla ou clique ([Insider Gaming, 13/4/2025](https://insider-gaming.com/what-is-bongo-cat-on-steam/)). Um item cosmético, em geral um chapéu, cai a cada 30 minutos de uso ativo ([bo3.gg](https://bo3.gg/articles/how-to-get-hats-in-bongo-cat)). A página oficial lista as chances: comum 90%, incomum 9,5%, raro 0,49%, épico 0,01% e lendário 1 em 500 mil ([Steam](https://store.steampowered.com/app/3419430/Bongo_Cat/)).
- **[F]** A Steam oferece aos desenvolvedores um gerador de drops por tempo de jogo: o item só é concedido depois de X minutos, com janela de recarga e teto de concessões por janela. A regra é de *tempo de jogo* registrado pela Steam, não de ações dentro do jogo ([Steamworks: Inventory Schema](https://partner.steamgames.com/doc/features/inventory/schema)). **[H]** O desenho do Banana (3 h / 18 h) é compatível com esse mecanismo, mas não confirmamos qual API cada jogo usa.
- **[H]** O loop real é deixar aberto, receber e vender. É o idle na forma mais pura, e também a mais fácil de automatizar.

## 2. Camadas de progressão e prestígio

- **[F]** Banana não tem progressão além de uma conquista ([Wikipedia](https://en.wikipedia.org/wiki/Banana_(2024_video_game))). Bongo Cat tem coleção, troca de 10 itens de uma raridade por 1 da seguinte e um passe com trilha grátis e premium ([LootWiki, revisado em 29/9/2026](https://lootwiki.com/bongo-cat/exchange-trading/)).
- **[H]** Sem progressão, todo o valor está no item, e o item só vale o que alguém pagar por ele.

## 3. Progresso offline

- **[F]** Não há progresso offline: os drops dependem do aplicativo aberto, e a única conquista do Banana pede um minuto com o jogo aberto ([Wikipedia](https://en.wikipedia.org/wiki/Banana_(2024_video_game))).
- **[H]** Quando a recompensa exige só "estar aberto", uma conta a mais custa quase nada. O jogador ausente e o bot ficam indistinguíveis, e é exatamente esse o problema que o nosso jogo terá de resolver.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **[F]** O gancho é a loteria. O Special Golden Banana foi vendido por US$ 1.378,58, a maior venda registrada do jogo em 2024 ([Wikipedia, citando a Polygon](https://en.wikipedia.org/wiki/Banana_(2024_video_game)); [Game World Observer](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money)).
- **[F]** O Banana troca periodicamente os itens que entram e saem do sorteio, o que torna escassos os retirados ([Steam News: Drop Pool Update](https://store.steampowered.com/news/app/2923300/view/535485157226840210)).
- **[H]** É retenção sem diversão: o humano volta pelo bilhete, e o bot nunca sai.

## 5. Jogador ativo vs. jogador ausente

- **[F]** Os devs do Banana relataram jogadores usando até 1.000 contas alternativas, porque o jogo quase não consome recursos do PC ([Game World Observer](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money)).
- **[F]** A Valve já enfrentou isso no Team Fortress 2. Em 2013, passou a dar drops só a quem estivesse jogando de verdade: servidor com anticheat VAC, sem modo texto, uma única cópia do jogo e resposta ao aviso de drop sem programa externo ([Shacknews, 18/7/2013](https://www.shacknews.com/article/80228/tf2-blocks-item-drops-for-idlers)).
- **[H]** O bot é o jogador ausente perfeito. Toda recompensa por presença passiva é capturada primeiro por quem roda mil contas.

## 6. Economia e moedas

- **[F]** No Mercado da Comunidade, a Steam cobra 5% (mínimo de US$ 0,01) e a publicadora define uma taxa própria (no CS2, 10%) ([FAQ da Steam](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B)). O valor vai para a carteira Steam, sem saque oficial para banco, Pix ou PayPal ([Game Over Drive](https://gameoverdrive.com.br/tbh-task-bar-hero-dinheiro/)).
- **[F]** A maioria das bananas sai pelo mínimo de 3 centavos ([Mein-MMO, 20/6/2024](https://mein-mmo.de/en/banana-is-the-biggest-game-on-steam-developer-says-we-are-not-a-scam-but-has-scammers-on-the-team,1140892)). Em 2025, o item mais caro anunciado (Cybernana) passava de mil dólares, mas só três foram vendidos no ano, todos abaixo de 200 ([Destructoid, 3/8/2025](https://www.destructoid.com/hundreds-of-thousands-of-people-are-still-clicking-on-that-damned-banana/)). No Bongo Cat, um Cuckoo Clock valia US$ 13,50 ([GamePressure, 22/4/2025](https://www.gamepressure.com/newsroom/bongo-cat-now-has-more-players-than-banana-clicker-but-the-realit/z97d86)).
- **[F]** Preço anunciado não é preço pago. No Task Bar Hero (2026), um arco anunciado a US$ 1.585,75 nunca foi vendido acima de US$ 22, e a madeira tinha mais de 200 mil anúncios a centavos ([Kotaku, 17/6/2026](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)).
- **[H]** Cálculo nosso: numa venda de 3 centavos, as taxas mínimas levam a maior parte e o vendedor fica com 1 ou 2 centavos. Uma fazenda de 1.000 contas, com 8 itens comuns por conta por dia, rende 8.000 itens, ou US$ 80 a 160 por dia, e mais de 1.300 bilhetes de item raro. O lucro do bot está no volume de bilhetes, não no item comum.

## 7. Social

- **[F]** Bongo Cat ganhou modo multiplayer, com até 100 gatos na tela ([PC Gamer](https://www.pcgamer.com/games/life-sim/bongo-cat-still-one-of-the-biggest-games-on-steam-gets-even-bigger-with-multiplayer-you-can-now-have-up-to-100-cats-on-your-screen-at-once-all-of-them-happily-bapping-away-as-their-owners-type)). As trocas entre usuários foram cortadas em 11/3/2025 por causa de bots e só voltaram, entre amigos, em 10/11/2025 ([LootWiki](https://lootwiki.com/bongo-cat/exchange-trading/)).
- **[H]** O social, nesses jogos, é o mercado. Quando o mercado é tomado por bots, não sobra nada.

## 8. Monetização

- **[F]** O Banana vende cinco bananas a US$ 0,25 cada ([Game World Observer](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money)). O Bongo Cat tem 5 DLCs pagos e uma loja de itens ([Steam](https://store.steampowered.com/app/3419430/Bongo_Cat/)). Em maio de 2025, os itens da loja deixaram de ser vendáveis no Mercado ([LootWiki](https://lootwiki.com/bongo-cat/exchange-trading/)).
- **[F]** Mesmo entre os mais jogados do Steam, o Bongo Cat rendeu líquidos de cerca de US$ 2.000 (mar/2025), 4.050 (abr), 3.800 (mai) e 2.800 (jun), segundo Zurawka em entrevista à Eurogamer ([WN Hub, 26/6/2025](https://wnhub.io/news/stores-and-publishing/item-48117)). Ele disse que o ganho real foi a visibilidade: "Before, we knocked on 50 doors; now, they are coming to us" ([PC Gamer](https://www.pcgamer.com/gaming-industry/game-development/top-10-steam-game-bongo-cat-is-actually-losing-us-money-says-dev-which-is-fine-because-its-been-great-for-business-before-we-knocked-on-50-doors-now-they-are-coming-to-us)).
- **[H]** Ganhar na taxa do mercado quase não paga o desenvolvedor. Quem captura o valor são os donos das fazendas de contas.

## 9. Números disponíveis (com fonte)

| Jogo | Lançamento | Pico simultâneo no Steam | Média em out/2026 | Parcela de bots (estimativa) |
|---|---|---|---|---|
| Banana | 23/4/2024 | 890.713 em jun/2024 ([SteamCharts](https://steamcharts.com/app/2923300)) | 3.099 | ~2/3: com 141 mil online, só um terço era real, segundo o dev à Polygon ([Insider Gaming](https://insider-gaming.com/banana-steam-make-money/)) |
| Bongo Cat | 5/3/2025 | 193.859 em mai/2025 ([SteamCharts](https://steamcharts.com/app/3419430)) | 149.312 | ~1/2, segundo Zurawka à Eurogamer ([WN Hub](https://wnhub.io/news/stores-and-publishing/item-48117)) |
| Cats | 21/5/2024 | 48.668 (pico de 24 h em jun/2024) ([GamingOnLinux](https://www.gamingonlinux.com/2024/06/cats-is-another-idle-clicker-item-farming-game-like-banana-rising-up-the-steam-player-counts)) | não verificado | não encontrado |
| TBH: Task Bar Hero | 27/5/2026 | 545.349 ([SteamCharts](https://steamcharts.com/app/3678970)) | não verificado | acusações de domínio por bots ([Kotaku](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)) |

- **[F]** Curva do Banana (média mensal): 5.447 em mai/2024, 399.467 em jun/2024, 285.265 em nov/2024, 104.140 em dez/2024, entre 94 mil e 116 mil durante 2025 e 3.099 em out/2026 ([SteamCharts](https://steamcharts.com/app/2923300)). Outros rastreadores dão picos diferentes, conforme o horário da coleta. Não encontrei a causa das quedas de nov/2024 e de 2026.
- **[F]** Bongo Cat: a média caiu de 116.214 (jul/2025) para 78.904 (ago/2025) depois de uma ofensiva contra bots ([SteamCharts](https://steamcharts.com/app/3419430); [PC Gamer](https://www.pcgamer.com/games/life-sim/bongo-cat-still-one-of-the-biggest-games-on-steam-gets-even-bigger-with-multiplayer-you-can-now-have-up-to-100-cats-on-your-screen-at-once-all-of-them-happily-bapping-away-as-their-owners-type)) e voltou a 123–153 mil em 2026. Não encontrei estimativa de bots para 2026.
- **[H]** De fora, é impossível saber quantos humanos existem. Quando bots são pagos para estar "online", número de simultâneos vira métrica de vaidade.

## 10. Por que viraram fenômeno, e por que são alerta

### 10.1 A economia do bot

- **[F]** Hery, do Banana, atribuiu o sucesso a ser "a legal infinite money glitch" ([Polygon, 11/6/2024, via Know Your Meme](https://knowyourmeme.com/memes/banana-clicker-game)). Um membro da equipe era ligado a um jogo anterior removido pela Valve, descrito por um YouTuber como esquema de *pump-and-dump* de Bitcoin. A equipe diz ter se separado dele ([Mein-MMO, 20/6/2024](https://mein-mmo.de/en/banana-is-the-biggest-game-on-steam-developer-says-we-are-not-a-scam-but-has-scammers-on-the-team,1140892)).
- **[H]** Três condições bastam para a fazenda: recompensa por tempo com o app aberto, saída do item para dinheiro real e custo quase zero por conta adicional. Com as três, o bot sempre vence o humano.

### 10.2 A reação da Valve

- **[F]** Em 2024, a Valve não comentou publicamente o caso Banana. Os devs disseram ter pedido ajuda à Valve contra os bots ([Coinspeaker](https://www.coinspeaker.com/bots-game-banana-steam/); [Game World Observer](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money)).
- **[F]** Em 2026, segundo a Kotaku, a Valve pediu aos devs do Task Bar Hero um aviso para os jogadores retirarem itens do Mercado, porque a carga tinha levado os servidores da Steam ao limite ([Kotaku, 17/6/2026](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)). O jogo suspendeu novas listagens em 8/6/2026 para reduzir o tráfego de bots ([aviso no Steam](https://store.steampowered.com/news/app/3678970/view/717906943451071378); o texto não carregou e a data veio do trecho indexado). Contas pegas trapaceando duas vezes perderam o acesso ao Mercado para sempre ([Inven Global, 1/6/2026](https://labs.invenglobal.com/articles/22394/popular-idle-game-taskbar-hero-hits-140k-concurrent-users-but-gold-farmers-and-cheaters-leave-players-paying-the-price)).
- **[F]** Precedentes: o TF2 em 2013 (seção 5). Nas cartas colecionáveis, a Valve admitiu em 2017 que havia "jogos falsos" feitos para fabricar cartas e criou uma "métrica de confiança": só jogos acima de um patamar soltam cartas ([Wikipedia: Steam Trading Cards](https://en.wikipedia.org/wiki/Steam_Trading_Cards); [IGN, 17/5/2017](http://www.ign.com/articles/2017/05/17/steam-overhauling-trading-cards-system-because-of-fake-games)). Em jogos grátis, cartas só caem depois de uma compra ([FAQ das cartas](https://steamcommunity.com/tradingcards/faq/)).
- **[H]** A Valve tem as ferramentas (tetos por janela, métrica de confiança, regra da compra), mas deixa a política de cada jogo com o desenvolvedor e só age quando a carga pesa na própria infraestrutura.

### 10.3 Clones e o efeito no Steam

- **[F]** O Banana nasceu como cópia do Egg, um clicker anterior que também dava itens Steam. Um dev o chamou de cópia do Egg "but way worse" ([Wikipedia, citando a Polygon](https://en.wikipedia.org/wiki/Banana_(2024_video_game)); [GamingOnLinux](https://www.gamingonlinux.com/2024/06/cats-is-another-idle-clicker-item-farming-game-like-banana-rising-up-the-steam-player-counts)).
- **[F]** Cats (21/5/2024) solta estilos de gato e sushi no inventário Steam com o jogo rodando em segundo plano ([GamingOnLinux, 17/6/2024](https://www.gamingonlinux.com/2024/06/cats-is-another-idle-clicker-item-farming-game-like-banana-rising-up-the-steam-player-counts)). Vieram clones de maçã e melão ([GamesRadar](https://gamesradar.com/games/if-it-goes-viral-on-steam-itll-get-cloned-wildly-popular-banana-clicker-currently-beating-elden-ring-by-steam-players-spawns-apple-and-melon-competitors)) e de melancia a cocô ([Multiplayer.it](https://multiplayer.it/notizie/steam-si-sta-riempiendo-cloni-banana-tra-cocomeri-defecazioni.html)).
- **[F]** Nas paradas: o Banana foi o 2º mais jogado do Steam em 15/6/2024, atrás só do CS2 ([Wikipedia](https://en.wikipedia.org/wiki/Banana_(2024_video_game))). O Bongo Cat chegou ao 4º lugar ([GamePressure](https://www.gamepressure.com/newsroom/bongo-cat-now-has-more-players-than-banana-clicker-but-the-realit/z97d86)). O TBH, um RPG idle na barra de tarefas, ficou entre o 2º e o 3º em junho de 2026 ([Inven Global](https://www.invenglobal.com/articles/22636/taskbar-hero-the-viral-game-hitting-2-in-steam-concurrent-players); [Kotaku](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)).
- **[F]** Na infraestrutura: no TBH, os farmers geraram pedidos anormais de criação de itens, com quedas, lag e bugs para todos ([Inven Global](https://labs.invenglobal.com/articles/22394/popular-idle-game-taskbar-hero-hits-140k-concurrent-users-but-gold-farmers-and-cheaters-leave-players-paying-the-price)).
- **[H]** "Mais jogado" deixou de medir diversão. As paradas do Steam viraram vitrine de fazendas, e cada sucesso gera uma onda de clones que dilui o mercado.

### Quadro: o mercado de skins do CS2 e a volatilidade de itens com valor real

- **[F]** Em julho de 2025 a Steam lançou a proteção de trocas (*Trade Protection*): o item recebido fica travado por 7 dias e qualquer lado pode reverter a troca. A reversão desfaz todas as trocas dos últimos 7 dias e deixa a conta 30 dias sem Mercado. Itens protegidos não podem ser trocados por itens sem proteção ([PCWorld, 17/7/2025](https://www.pcworld.com/article/2851576/steam-thwarts-counter-strike-scammers-with-new-trade-reversal-system.html); [PC Gamer](https://www.pcgamer.com/games/fps/steam-will-let-you-reverse-your-last-7-days-of-cs2-and-soon-other-trades-if-you-accidentally-swap-your-usd10-000-ak-47-for-some-magic-beans)). Parte da comunidade previu uma queda forte do mercado ([GamePressure](https://www.gamepressure.com/newsroom/prepare-for-a-massive-market-crash-cs2s-new-trade-protection-feat/z481f5)).
- **[F]** Em 22–23/10/2025, uma atualização passou a permitir trocar 5 skins Covert por uma faca ou luvas. Em cinco horas o mercado perdeu cerca de US$ 1 bilhão, e quase US$ 2 bilhões pela medição da Pricempire ([Esports.net](https://www.esports.net/news/counter-strike/counter-strike-2-skins-market-crashes-in-2bn-market-cap-drop-after); [Sportskeeda](https://www.sportskeeda.com/esports/why-cs2-skins-market-crash-today-october-23-2025-nearly-2-billion-market-cap-loss-explained)). O fundo foi de cerca de US$ 3,5 bilhões em 26/10, e a Valve não comentou além das notas do patch ([Esports.net](https://www.esports.net/wiki/guides/cs2-knives-skin-market-crash/)).
- **[F]** Facas e luvas caíram de 40% a 50% na primeira reação, e as Covert subiram de 30% a 50% no primeiro dia. Um ano depois, o total voltou a cerca de US$ 6 bilhões, mas facas comuns seguem 40% a 55% abaixo, e uma Butterfly Knife | Fade (Factory New) foi de US$ 4.300 para cerca de US$ 2.200 ([Gamertweak, 19/10/2026](https://gamertweak.com/one-year-after-valves-trade-up-update-where-the-cs2-skin-market-stands-now/)).
- **[F]** As medições divergem: a CSMarketCap calculou queda de 45% (de US$ 609 milhões para 337 milhões) num recorte do mercado ([CSMarketCap](https://csmarketcap.com/blog/market-insights/cs2-knife-trade-up-update-the-272m-market-crash)). Todos esses números são estimativas de terceiros.
- **[H]** Quando itens valem dinheiro, cada patch de design é política monetária. Uma linha nas notas (uma nova fonte de facas) apagou bilhões em valor de papel numa noite.

## 11. Do que os jogadores mais reclamam

- **[C]** Bots dominando o mercado e derrubando preços ([Steam, fórum de sugestões](https://steamcommunity.com/discussions/forum/10/4343239957170991719/); [GamingOnLinux](https://www.gamingonlinux.com/2024/06/cats-is-another-idle-clicker-item-farming-game-like-banana-rising-up-the-steam-player-counts); [Kotaku](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738)).
- **[C]** Medidas anti-bot que punem humanos: o corte de trocas no Bongo Cat ([GamePressure](https://www.gamepressure.com/newsroom/bongo-cat-now-has-more-players-than-banana-clicker-but-the-realit/z97d86); [3DJuegos](https://www.3djuegos.com/pc/noticias/todo-mundo-sospecha-gato-que-ha-conquistado-steam-incluso-su-creador-hace-eso-lucha-quienes-se-aprovechan)) e banimentos injustos no TBH, com critérios vagos ([Kotaku](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738); [Inven Global](https://labs.invenglobal.com/articles/22394/popular-idle-game-taskbar-hero-hits-140k-concurrent-users-but-gold-farmers-and-cheaters-leave-players-paying-the-price)).
- **[C]** "É golpe?": acusações de esquema e de economia artificial. A IGN escreveu que o Banana "não é tecnicamente um golpe", mas gera itens inúteis que só dão lucro à Steam e aos devs ([Wikipedia, citando a IGN](https://en.wikipedia.org/wiki/Banana_(2024_video_game)); [Mein-MMO](https://mein-mmo.de/en/banana-is-the-biggest-game-on-steam-developer-says-we-are-not-a-scam-but-has-scammers-on-the-team,1140892)).

## 12. Mecânicas-chave: o porquê

- **Drop por tempo com o app aberto** — Resolve: recompensa sem exigir atenção · Emoção: expectativa de bilhete de loteria · Incentiva: deixar aberto e multiplicar contas · Efeito colateral: bots em escala industrial.
- **Item vendável por saldo real** — Resolve: dá valor percebido a um jogo sem conteúdo · Emoção: "dinheiro de graça" · Incentiva: especulação e acúmulo · Efeito colateral: atrai fazendas, golpes e acusações de esquema.
- **Raridade extrema (1 em 500 mil)** — Resolve: cria o sonho do prêmio grande · Emoção: esperança · Incentiva: mais contas, porque cada conta é mais um bilhete · Efeito colateral: o retorno esperado favorece quem tem mais contas.
- **Rotação do conjunto de drops** — Resolve: escassez e novidade · Emoção: corrida e medo de perder · Incentiva: especular com itens retirados · Efeito colateral: preço sem relação com uso.
- **Troca 10→1 (Bongo Cat)** — Resolve: drena itens comuns · Emoção: progresso de coleção · Incentiva: consolidar em vez de vender a centavos · Efeito colateral: também é atalho para o bot subir de raridade.
- **Mercado travado por progresso (TBH: Cubo nível 10)** — Resolve: conta nova não vende ([ExitLag](https://www.exitlag.com/blog/task-bar-hero-market/)) · Emoção: atrito · Incentiva: o bot a "jogar" até o nível · Efeito colateral: só atrasa, se o nível também for automatizável.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - **[H]** A chance de ganhar algo com valor real é um gancho fortíssimo: o Banana chegou ao 2º lugar do Steam sem ter jogo. Nosso RMT oficial vai atrair o mesmo comportamento, e a defesa precisa estar no desenho desde o primeiro dia.
  - **[H]** A troca de raridade (10→1) é um bom dreno para drops comuns.
  - **[H]** Itens da loja não negociáveis separam monetização de economia (o Bongo Cat fez isso em maio de 2025).
- **Evitar:**
  - **[H]** Recompensar tempo de cliente aberto com algo negociável.
  - **[H]** Medir sucesso por número de simultâneos.
  - **[H]** Anti-bot que corta o comércio de todos (Bongo Cat) ou bane por heurística sem apelação rápida (TBH).
  - **[H]** Mudar a origem de itens valiosos sem análise de impacto (CS2).
- **O que exigir como "prova de jogo" [H]:**
  1. **Separar progresso de valor negociável.** O tempo ausente rende progresso e itens vinculados à conta. Só decisões ativas, verificadas pelo servidor, geram itens negociáveis.
  2. **Teto de valor negociável** por conta e por período, com retorno decrescente (o equivalente ao `drop_max_per_window` da Steam).
  3. **Custo para negociar:** idade de conta, nível e missão para vender; verificação de identidade (KYC) para sacar dinheiro. Sem custo de entrada, cada conta extra é um bilhete grátis.
  4. **Prova de uso:** o item só fica negociável depois de usado ou aprimorado com recursos do jogo. Tempo vira trabalho, e trabalho tem custo.
  5. **Desafio do servidor em momentos aleatórios** (a regra do TF2). Quem não responde perde só a parte negociável, nunca o progresso, para o ausente não se sentir punido.
  6. **Uma sessão ativa por conta** e detecção de multicontas por dispositivo, rede e meio de pagamento.
  7. **Carência e reversão de trocas** contra roubo de contas, como a proteção do CS2. Banimento com apelação, sem travar o comércio dos demais.
  8. **Métrica interna de humanos verificados por dia**, não de "online".
  9. **Política monetária:** mudanças em drops e fontes de itens valiosos passam por análise de impacto, anúncio prévio e implantação gradual.
  - Ver também a [ficha do New World](G04-new-world.md) para transações atômicas e servidor autoritativo.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Banana | PC | F2P | Não | 0 | Nenhum | Não | Troca+Livro | Não | Leilão-$ | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não | Declínio |
| Bongo Cat | PC | F2P | Não | 0 | Nenhum | Não | Troca+Livro | Não | Leilão-$ | Não | Nenhum | Não | Não | Não | Não | Sim | Não | Não | Estável |

Notas: "Mercado = Troca+Livro" porque o Mercado da Comunidade Steam aceita ordens de compra e de venda **[NV]**. No Bongo Cat, a troca direta foi limitada a amigos a partir de nov/2025. "RMT oficial = Leilão-$" porque a venda é em saldo real da carteira Steam, sem saque. "Passe = Sim" no Bongo Cat pela trilha premium do Paw Pass, de preço não encontrado.

## Fontes

Todos os links foram acessados em novembro de 2026.

1. [Banana (2024 video game)](https://en.wikipedia.org/wiki/Banana_(2024_video_game)) — wiki — atualizada até dez/2024.
2. [Game World Observer: Banana passa de 220 mil](https://gameworldobserver.com/2024/06/10/banana-steam-220k-players-rare-items-trade-real-money) — imprensa — 10/6/2024.
3. [Insider Gaming: 700 mil clicando numa banana](https://insider-gaming.com/banana-steam-make-money/) — imprensa — 16/6/2024.
4. [Mein-MMO: "não somos golpe"](https://mein-mmo.de/en/banana-is-the-biggest-game-on-steam-developer-says-we-are-not-a-scam-but-has-scammers-on-the-team,1140892) — imprensa — 20/6/2024.
5. [Know Your Meme: Banana (cita a Polygon de 11/6/2024)](https://knowyourmeme.com/memes/banana-clicker-game) — comunidade — 2024.
6. [Coinspeaker: bots no Banana](https://www.coinspeaker.com/bots-game-banana-steam/) — imprensa — jun/2024.
7. [Destructoid: ainda clicando na banana](https://www.destructoid.com/hundreds-of-thousands-of-people-are-still-clicking-on-that-damned-banana/) — imprensa — 3/8/2025.
8. [Steam News: Banana — Drop Pool Update](https://store.steampowered.com/news/app/2923300/view/535485157226840210) — oficial — s/d.
9. [SteamCharts: Banana](https://steamcharts.com/app/2923300) — dados — mai/2024 a out/2026.
10. [SteamCharts: Bongo Cat](https://steamcharts.com/app/3419430) — dados — mar/2025 a out/2026.
11. [SteamCharts: TBH: Task Bar Hero](https://steamcharts.com/app/3678970) — dados — 2026.
12. [Steam: página do Bongo Cat](https://store.steampowered.com/app/3419430/Bongo_Cat/) — oficial — consultada em nov/2026.
13. [Insider Gaming: o que é o Bongo Cat](https://insider-gaming.com/what-is-bongo-cat-on-steam/) — imprensa — 13/4/2025.
14. [bo3.gg: como ganhar chapéus no Bongo Cat](https://bo3.gg/articles/how-to-get-hats-in-bongo-cat) — guia — 2025.
15. [LootWiki: trocas e mercado do Bongo Cat](https://lootwiki.com/bongo-cat/exchange-trading/) — wiki de fãs — revisada em 29/9/2026.
16. [GamePressure: Bongo Cat passa o Banana](https://www.gamepressure.com/newsroom/bongo-cat-now-has-more-players-than-banana-clicker-but-the-realit/z97d86) — imprensa — 22/4/2025.
17. [WN Hub: Bongo Cat sem lucro (entrevista à Eurogamer)](https://wnhub.io/news/stores-and-publishing/item-48117) — imprensa — 26/6/2025.
18. [PC Gamer: Bongo Cat "losing us money"](https://www.pcgamer.com/gaming-industry/game-development/top-10-steam-game-bongo-cat-is-actually-losing-us-money-says-dev-which-is-fine-because-its-been-great-for-business-before-we-knocked-on-50-doors-now-they-are-coming-to-us) — imprensa — 2025.
19. [PC Gamer: multiplayer do Bongo Cat](https://www.pcgamer.com/games/life-sim/bongo-cat-still-one-of-the-biggest-games-on-steam-gets-even-bigger-with-multiplayer-you-can-now-have-up-to-100-cats-on-your-screen-at-once-all-of-them-happily-bapping-away-as-their-owners-type) — imprensa — 2025.
20. [3DJuegos: o gato que conquistou o Steam](https://www.3djuegos.com/pc/noticias/todo-mundo-sospecha-gato-que-ha-conquistado-steam-incluso-su-creador-hace-eso-lucha-quienes-se-aprovechan) — imprensa — 2025.
21. [GamingOnLinux: Cats](https://www.gamingonlinux.com/2024/06/cats-is-another-idle-clicker-item-farming-game-like-banana-rising-up-the-steam-player-counts) — imprensa — 17/6/2024.
22. [GamesRadar: clones de maçã e melão](https://gamesradar.com/games/if-it-goes-viral-on-steam-itll-get-cloned-wildly-popular-banana-clicker-currently-beating-elden-ring-by-steam-players-spawns-apple-and-melon-competitors) — imprensa — jun/2024.
23. [Multiplayer.it: Steam se enche de clones](https://multiplayer.it/notizie/steam-si-sta-riempiendo-cloni-banana-tra-cocomeri-defecazioni.html) — imprensa — 2024.
24. [Kotaku: TBH cheio de bots](https://kotaku.com/steams-latest-chart-topping-idle-game-is-packed-with-bots-trying-to-sell-in-game-weapons-for-1000-2000706738) — imprensa — 17/6/2026.
25. [Inven Global: TBH e os gold farmers](https://labs.invenglobal.com/articles/22394/popular-idle-game-taskbar-hero-hits-140k-concurrent-users-but-gold-farmers-and-cheaters-leave-players-paying-the-price) — imprensa — 1/6/2026.
26. [Inven Global: TBH em 2º no Steam](https://www.invenglobal.com/articles/22636/taskbar-hero-the-viral-game-hitting-2-in-steam-concurrent-players) — imprensa — jun/2026.
27. [Steam News: TBH — fechamento temporário do Mercado](https://store.steampowered.com/news/app/3678970/view/717906943451071378) — oficial — jun/2026.
28. [ExitLag: mercado do TBH](https://www.exitlag.com/blog/task-bar-hero-market/) — guia — 2026.
29. [Game Over Drive: TBH dá dinheiro?](https://gameoverdrive.com.br/tbh-task-bar-hero-dinheiro/) — imprensa (BR) — 2026.
30. [Steamworks: Inventory Schema (playtime generator)](https://partner.steamgames.com/doc/features/inventory/schema) — oficial — s/d.
31. [FAQ do Mercado da Comunidade Steam](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B) — oficial — s/d.
32. [Shacknews: TF2 bloqueia drops para quem só deixa aberto](https://www.shacknews.com/article/80228/tf2-blocks-item-drops-for-idlers) — imprensa — 18/7/2013.
33. [Steam Trading Cards](https://en.wikipedia.org/wiki/Steam_Trading_Cards) — wiki — consultada em nov/2026.
34. [IGN: Steam reformula as cartas por causa de jogos falsos](http://www.ign.com/articles/2017/05/17/steam-overhauling-trading-cards-system-because-of-fake-games) — imprensa — 17/5/2017.
35. [FAQ das cartas colecionáveis](https://steamcommunity.com/tradingcards/faq/) — oficial — s/d.
36. [Steam, fórum de sugestões: "bots own the Steam Market"](https://steamcommunity.com/discussions/forum/10/4343239957170991719/) — comunidade — 2024.
37. [PCWorld: proteção de trocas](https://www.pcworld.com/article/2851576/steam-thwarts-counter-strike-scammers-with-new-trade-reversal-system.html) — imprensa — 17/7/2025.
38. [PC Gamer: reverter trocas de 7 dias](https://www.pcgamer.com/games/fps/steam-will-let-you-reverse-your-last-7-days-of-cs2-and-soon-other-trades-if-you-accidentally-swap-your-usd10-000-ak-47-for-some-magic-beans) — imprensa — jul/2025.
39. [GamePressure: medo de queda com a proteção de trocas](https://www.gamepressure.com/newsroom/prepare-for-a-massive-market-crash-cs2s-new-trade-protection-feat/z481f5) — imprensa — jul/2025.
40. [Esports.net: queda de US$ 2 bi](https://www.esports.net/news/counter-strike/counter-strike-2-skins-market-crashes-in-2bn-market-cap-drop-after) — imprensa — 23/10/2025.
41. [Esports.net: o que houve com facas e luvas](https://www.esports.net/wiki/guides/cs2-knives-skin-market-crash/) — guia — out/2025.
42. [Sportskeeda: por que o mercado caiu](https://www.sportskeeda.com/esports/why-cs2-skins-market-crash-today-october-23-2025-nearly-2-billion-market-cap-loss-explained) — imprensa — 23/10/2025.
43. [CSMarketCap: queda de US$ 272 mi](https://csmarketcap.com/blog/market-insights/cs2-knife-trade-up-update-the-272m-market-crash) — dados — out/2025.
44. [Gamertweak: um ano depois do trade-up](https://gamertweak.com/one-year-after-valves-trade-up-update-where-the-cs2-skin-market-stands-now/) — imprensa — 19/10/2026.
