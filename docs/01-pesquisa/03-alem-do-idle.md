# Além do idle: mecânicas de outros gêneros para um RPG idle online

> **Escopo.** Este estudo examina mecânicas de MMOs, jogos de estratégia de navegador, mobile, roguelites e jogos de serviço que poderiam dar dinâmica e jogo ativo a um RPG idle de navegador, multiplayer, com economia de jogadores, mercado, casa de leilão e RMT oficial, sem quebrar a essência idle.
>
> **Perguntas que responde:** quem faz cada mecânica bem e quem faz mal; como ela encaixaria num idle respeitando o jogador ausente; que problema resolve, que emoção gera e que comportamento incentiva; quanto custa construir; que riscos cria e como mitigá-los; e quais são as mais promissoras para o nosso caso.
>
> Fichas citadas por caminho estão em `fichas/`. Todos os links foram acessados em novembro de 2026.

## Resumo executivo

*(Preenchido ao final do estudo.)*

## Como ler este estudo

- **O teste do ausente** [H]: para cada mecânica, a pergunta-guia é "um jogador que entra duas vezes por dia, por cinco minutos, consegue participar com decisões e sair sem ter sido punido?". Uma mecânica passa no teste quando (a) a participação é medida em **decisões e orçamentos** (ataques, fichas, cargas), não em horas online; (b) o ausente **contribui** com algo que deixou pronto (defesa, fila, contrato, estoque); (c) a perda possível com o jogador fora é **limitada e conhecida de antemão**.
- **Custo de implementação**: *baixo* = reaproveita sistemas que um idle online já terá (fila de tarefas, inventário, mercado) e cabe em poucas semanas de uma equipe pequena; *médio* = sistema novo com estado próprio, balanceamento e interface dedicada; *alto* = sistema novo que exige simulação, emparelhamento, moderação ou operação contínua (equipe de eventos, atendimento, antifraude).
- Cada mecânica segue o mesmo roteiro: o que é · quem faz bem · quem faz mal · encaixe no idle · problema, emoção e comportamento · custo · riscos e mitigação.

---

## Parte A — Mecânicas pedidas

### 1. Território e guerra de guildas

**O que é.** Guildas disputam pontos de um mapa compartilhado que dão renda, bônus ou prestígio; a disputa é uma guerra com regras de início, duração e vitória.

**Quem faz bem**
- [F] **Clash of Clans (Clan Wars)** é o modelo assíncrono de referência: guerras de 5 contra 5 até 50 contra 50, com 23 horas de preparação e um dia de batalha em que cada membro tem **dois ataques**, sem poder atacar a mesma base duas vezes; o layout da base de guerra só muda na preparação ([Supercell, 11/04/2018](https://supercell.com/en/games/clashofclans/blog/news/clan-wars-explained-part-1-preparation-day/)). A participação é um orçamento de ações, não presença.
- [F] **Torn (territórios e rackets)**: territórios do mapa da cidade dão uma pequena renda diária de *respect* e, se tiverem um *racket*, um recurso diário. Uma guerra de território dura no máximo três dias e a vitória mais rápida possível leva 14 horas; há carência de 72 horas entre guerras pelo mesmo território. Rackets surgem em territórios aleatórios e têm níveis de 1 a 5, cada nível dobrando o rendimento ([Torn Wiki, Territory](https://wiki.torn.com/wiki/Territory); [Torn Wiki, Racket](https://wiki.torn.com/wiki/Racket); vistos via resumo de busca, porque a wiki bloqueia acesso automatizado). [H] Guerras de dias, não de minutos, são o que permite a um jogo de navegador ter guerra sem exigir vigília.
- [F] **EVE Online (Equinox, 2024)**: os *skyhooks* de soberania só podem ser saqueados em **janelas de ataque visíveis a todos**; o dono influencia o horário, mas há um deslocamento aleatório. A produção é dividida ao meio: metade fica num cofre protegido e só a outra metade fica exposta. O objetivo declarado foi tirar dos donos a necessidade de ficar em alerta "around the clock" ([CCP, 25/09/2024](https://www.eveonline.com/news/view/equinox-update-enhanced-skyhooks)). É o desenho mais explícito de respeito ao defensor ausente que encontramos num jogo de território.
- [F] **Black Desert (Node War)**: guerras diárias em horário fixo, divididas em tiers com teto de participantes (25 a 30 no tier 1, 40 a 50 no tier 2, 55 a 75 no tier 3) e teto de gear score nos tiers baixos; o vencedor cobra imposto para o fundo da guilda ([wiki oficial, via `fichas/F08-black-desert.md`](https://www.naeu.playblackdesert.com/en-US/Wiki?wikiNo=56)). [H] O teto por tier impede que uma megaguilda ocupe todos os nós ao mesmo tempo.
- [F] **SimpleMMO (navegador)**: na versão 9.0 (mar/2021), guerras de guilda que antes eram infinitas passaram a terminar em 1.000 abates ou rendição; o poder da guilda perde 1 ponto por dia "para estimular atividade" ([blog oficial](https://www.galahadcreative.com/blog/simplemmo-v9-0-guilds-guilds-guilds/)). Segundo a wiki de fãs, a guilda pode se declarar PvE e sair das guerras, só é alvo quem tem 10 membros ativos acima do nível 200, e a mesma dupla espera 48 horas para guerrear de novo ([wiki de fãs, via `fichas/C05-simplemmo.md`](https://simplemmo.fandom.com/wiki/Guilds)).

**Quem faz mal**
- [F] **Albion Online e a bola de neve da renda passiva.** Na Season 14 (2021), a Sandbox cortou o valor-base dos territórios, tirou a renda de castelos e passou a premiar atividade individual, para evitar posses que viram "high passive income for the already winning guild" e temporadas decididas só por quem põe mais horas ([post de desenvolvedor, 2021](https://devtrackers.gg/albion/p/36a1bb7c-changes-for-guild-season-14)). Ainda assim, 7 das 10 reviews negativas mais úteis do ano no Steam citam o domínio de grandes guildas e alianças, e uma reformulação anunciada para 2027 deixará de exigir competição de guildas para participar das temporadas (`fichas/F02-albion-online.md`, com [Steam](https://steamcommunity.com/app/761890/negativereviews/?browsefilter=trendyear&filterLanguage=all&p=1) e [dev update de out/2026](https://albiononline.com/news/dev-update-october-2026)).
- [C] **New World e o monopólio territorial.** Uma companhia chegou a deter todos os territórios do maior servidor europeu ([AltChar](https://www.altchar.com/game-news/one-company-holds-all-territories-on-new-worlds-biggest-eu-server-aSYve6B5QNFN)); a guerra final é sempre 50 contra 50 e os líderes escolhem quem entra, o que exclui quem não está numa companhia grande ([Mein-MMO](https://mein-mmo.de/en/the-new-world-endgame-pvp-has-a-problem-it-excludes-players-without-a-large-guild,731698); [PC Gamer](https://pcgamer.com/new-worlds-huge-pvp-wars-risk-alienating-anyone-not-in-a-big-company)). [F] Jogadores usavam "companhias de fachada" para escapar de impostos e invasões, e a Amazon criou uma carência de 72 horas para atuar em território depois de trocar de companhia ([PC Gamer](https://www.pcgamer.com/new-world-is-finally-cracking-down-on-shell-companies); [GamesRadar](https://gamesradar.com/new-world-takes-on-players-with-multiple-shell-companies)). [F] As fusões de servidor apagaram as conquistas territoriais ([NME, 18/12/2021, via `fichas/G04-new-world.md`](https://www.nme.com/news/new-world-announces-more-player-world-mergers-3121580)).
- [C] **EVE Online (Aegis Sov, 2015).** A captura por *Entosis Link* (um módulo que conta tempo, sem causar dano) foi descrita como tediosa e virou ferramenta de assédio barato: naves descartáveis forçavam defensores a responder em sistemas vazios ([Massively OP, 23/08/2015](https://massivelyop.com/2015/08/23/eve-evolved-has-the-aegis-sovereignty-system-worked/); [EN24, 16/08/2015](https://evenews24.com/2015/08/16/null-sec-alliances-petition-changes-to-aegis-sov/); vistos via resumo de busca). [F] O próprio sistema já tinha uma ideia boa, a janela diária de vulnerabilidade cujo tamanho dependia de quanto a aliança usava o espaço ([notas de patch](https://www.eveonline.com/news/view/patch-notes-for-aegis-sovereignty)); o erro foi a ação de captura, não a janela.
- [C] **4X mobile (Lords Mobile, Rise of Kingdoms).** Escudos de proteção e o risco de ser "zerado" (perder todo o exército) dominam as queixas; jogadores e guias descrevem o fim de jogo como decidido por quem gasta ([Steam, Lords Mobile](https://steamcommunity.com/app/1041320/discussions/0/2524779067026651305); [AppGamer, reviews de RoK](https://www.appgamer.com/rise-of-kingdoms/reviews/?show=3); [Wikipedia, RoK, citando crítica que deu nota 4/10 pelo pay-to-win](https://en.wikipedia.org/wiki/Rise_of_Kingdoms)). As fontes são fracas (guias e reviews), mas o padrão é consistente.

**Encaixe no idle (teste do ausente)** [H]
- **Guerra como orçamento, não como vigília**: cada membro recebe N ações de guerra por ciclo (o "dois ataques" do Clash of Clans), que pode gastar em qualquer momento da janela de dias. Quem não gasta não é punido; a guilda só deixa de ganhar aquelas ações.
- **O ausente defende com o que deixou pronto**: a defesa é um *snapshot* (formação, equipamento, armadilhas) montado antes, como a base de guerra do Clash of Clans.
- **Janelas e cofre protegido**: território só é atacável em janelas anunciadas, com o horário influenciado pelo defensor e um deslocamento aleatório (EVE). Parte da produção do território fica sempre protegida.
- **Território dá prestígio e conveniência, não renda que cresce sozinha**: bônus modestos, manutenção crescente por território extra e decaimento sem atividade (Albion, SimpleMMO).
- **Ligas por porte**: guildas pequenas disputam com pequenas (tiers do Black Desert); guilda "PvE" pode ficar fora (SimpleMMO).

**Problema · emoção · comportamento.** [H] Resolve a falta de objetivo coletivo de longo prazo e de cola social no fim de jogo · gera pertencimento, rivalidade e orgulho de bandeira · incentiva coordenação, login para gastar ações, recrutamento e diplomacia.

**Custo: alto.** Mapa persistente, máquina de estados de guerra, emparelhamento, simulação de batalha contra *snapshots*, antifraude (contas de fachada, conluio entre guildas "rivais") e moderação política. É também a mecânica mais sensível a balanceamento: um erro na renda territorial contamina o mercado inteiro.

**Riscos e mitigação**
- *Bola de neve das grandes guildas* → renda territorial pequena e decrescente por território, manutenção progressiva, tetos de participantes por guerra e ligas por porte.
- *Contas e guildas de fachada* → carência ao trocar de guilda (as 72 horas do New World), vínculo de conta e limites para alts.
- *Exclusão de quem joga sozinho* → trilhas individuais de progresso sazonal paralelas à guerra (o que o Albion fez em 2021 e amplia em 2027).
- *Perda grande com o jogador fora* → nunca tirar progresso pessoal; só recursos do território, e com a parte protegida.
- *Fuso horário* → guerras de vários dias e janelas que rotacionam, em vez de horário nobre fixo de um país.
- *Ação de captura tediosa (Entosis)* → toda ação de guerra deve ser uma decisão (onde atacar, com que composição), nunca um cronômetro.
- *Pagar para vencer* → gasto não pode virar poder de guerra direto; ataques e tetos iguais para todos.

---

### 2. Temporadas e ligas

**O que é.** Períodos com início e fim (de semanas a meses) em que a disputa recomeça, muitas vezes num mundo ou economia à parte, com ranking e recompensas próprias.

**Quem faz bem**
- [F] **Old School RuneScape (Leagues e Deadman)**: as temporadas são **modos paralelos** em mundos separados, em que todos começam do zero. Elas devolvem à conta principal só cosméticos e prestígio, com troféus por percentil do top 60% ao top 1% ([OSRS Wiki, Twisted League](https://oldschool.runescape.wiki/w/Twisted_League)). Os recordes de jogadores simultâneos coincidem com estreias de Liga: 210.027 no lançamento da Liga V, em 27/11/2024 ([MeinMMO](https://mein-mmo.de/en/23-year-old-mmorpg-played-more-than-new-world-throne-and-liberty-and-lost-ark-combined-thanks-to-a-major-event,1203195)); o Deadman: Annihilation (jan–fev/2026) teve mais de 153 mil participantes ([Jagex](https://www.jagex.com/news/old-school-runescape-prepares-for-final-(deadman)-annihilation)). Detalhes em `fichas/F03-runescape-e-osrs.md`. [H] O jogo principal nunca reseta e não inflaciona com a temporada.
- [F] **Path of Exile (ligas)**: o reset da liga zera personagens, moeda e preços e funciona como dreno final da economia; o recorde de simultâneos do PoE1 no Steam (228.398) veio numa estreia de liga ([SteamCharts](https://steamcharts.com/app/238960); `fichas/F05-path-of-exile.md`).
- [F] **Diablo IV**: temporadas de cerca de três meses exigem personagem novo, que ao fim migra para o modo "eterno" sem perder nada; o passe tem trilha gratuita e trilha paga só de cosméticos ([Wikipedia](https://en.wikipedia.org/wiki/Diablo_IV)).
- [F] **Travian**: cada rodada dura cerca de 200 dias até o fim de jogo, quando coalizões correm para construir a Maravilha do Mundo; o primeiro a chegar ao nível 100 vence, o servidor para e uma rodada nova começa do zero ([Wikipedia](https://en.wikipedia.org/wiki/Travian)). [H] O fim marcado dá desfecho a uma guerra que, sem ele, viraria estagnação.
- [F] **IdleMMO (idle de navegador)**: temporadas de guilda de 60 dias, quatro campanhas sazonais por ano que funcionam como passe gratuito e ligas de grupo que premiam o top 25 ([wiki oficial, via `fichas/C04-idlemmo.md`](https://support.idle-mmo.com/wiki/guilds/seasons)).

**Quem faz mal**
- [F] **A evasão depois da estreia é brutal.** No PoE1, o pico mensal no Steam foi de 184.284 em março de 2026 (liga Mirage), 53.761 em abril e 16.105 em maio ([SteamCharts](https://steamcharts.com/app/238960), via `fichas/F05-path-of-exile.md`). O modelo troca retenção contínua por reativação sazonal.
- [C] **Fadiga de temporada.** Comentaristas e jogadores descrevem o ciclo de recomeçar a cada poucos meses como desgastante no PoE ([Prima Games](https://primagames.com/tips/is-path-of-exiles-dwindling-player-count-simply-due-to-fatigue-or-is-it-something-more-abhorrent); [fórum oficial](https://www.pathofexile.com/forum/view-thread/3513537)) e no Diablo IV, cuja primeira temporada foi recebida com revolta pelos nerfs e pela moagem ([GamesRadar](https://gamesradar.com/diablo-4s-controversial-season-1-leads-players-to-a-staggering-revelation-you-can-stop-playing-when-youre-not-having-fun); [Kotaku](https://kotaku.com/diablo-4-season-1-grind-burnout-level-xp-loot-rpg-1850621843)). A própria equipe do Diablo IV sugeriu que o jogador "dê um tempo" e volte na temporada seguinte ([PC Gamer](https://pcgamer.com/diablo-4-developers-gently-suggest-players-should-take-a-break-as-the-brutal-grind-continues-to-wear-them-down)).
- [F] **Idlescape: temporadas que fragmentam uma base pequena.** Legacy, Pre-Launch e temporadas Ironman criaram várias economias simultâneas, e uma base pequena dividida em modos gerou livros de ofertas rasos (`fichas/C03-idlescape.md`, com [patch 0.23.0](https://www.idlescape.com/news/beta-0-23-0)).
- [F] **Recompensa por ranking vira mercado de boosting.** No WoW, o título do top 1% de Mythic+ estimula carregamentos pagos; em setembro de 2026 a Blizzard passou a revisar o top 1% da temporada ([fórum oficial](https://us.forums.blizzard.com/en/wow/t/uh-oh-top-1-of-mythic-runs-under-review/2343265), via `fichas/F06-world-of-warcraft.md`).

**Encaixe no idle (teste do ausente)** [H]
- **Temporada como mundo paralelo, nunca como reset do principal** (modelo OSRS). O personagem eterno segue intocado; o sazonal migra para o eterno ao fim (modelo Diablo IV), e o que se leva é cosmético, título ou conveniência de conta.
- **Ritmo de idle**: temporadas longas (três a quatro meses), metas por marcos alcançáveis em ritmo casual e **recompensas por percentil** e por patamares, não só pelo top 10. Quem entra no meio recebe aceleração de recuperação.
- **A temporada legitima a pausa.** O fim marcado é um ponto de saída sem culpa e um ponto de volta com motivo (a sugestão de "dar um tempo" do Diablo IV é, para um idle, uma virtude).
- **Uma temporada por vez, com mercado único entre os sazonais**, para não repetir a fragmentação do Idlescape.
- **RMT fora da temporada**: o token vive na economia eterna. Há precedente: o WoW Token ficou fora do Classic Era, do Hardcore e do Season of Discovery (`fichas/F06-world-of-warcraft.md`).

**Problema · emoção · comportamento.** [H] Resolve economia velha, inflação acumulada e domínio dos veteranos · gera recomeço justo, corrida e "agora é minha vez" · incentiva retorno em massa no início, planejamento de builds e conteúdo de criadores.

**Custo: médio a alto.** Médio se a temporada for um conjunto de modificadores sobre as mesmas regras, num esquema de banco separado com migração ao fim. Alto se cada temporada pedir mecânica nova, como no PoE: aí o custo é a cadência de conteúdo, não o código.

**Riscos e mitigação**
- *População e mercado fragmentados* → uma temporada ativa por vez, limiar mínimo de população e fusão dos sazonais no eterno ao fim.
- *Fadiga* → temporadas opcionais, longas e com recompensas cosméticas; nada de exigir recomeço da conta principal.
- *Boosting e RMT por ranking* → recompensas por percentil e patamar, intransferíveis, com revisão do topo.
- *Inflação no eterno quando a riqueza sazonal migra* → converter riqueza sazonal em cosméticos e moeda de conta, com teto de ouro migrado.
- *Pagar para largar na frente* → nenhum poder pago dentro da temporada.

### 3. Chefes mundiais compartilhados

**O que é.** Um inimigo que aparece para todo o servidor (ou para uma guilda), derrotado em conjunto, com recompensa repartida por participação.

**Quem faz bem**
- [F] **Guild Wars 2**: eventos e chefes **não usam "tag"**. Todo mundo que participa ativamente ganha experiência, karma e moedas, e o loot é calculado por jogador; medalhas de bronze, prata e ouro pagam 75%, 85% ou 100% da recompensa, e um evento fracassado paga metade. O desenho declarado busca cooperação em vez de competição, para reduzir roubo de abate e acampamento de spawn ([wiki oficial, Dynamic event](https://wiki.guildwars2.com/wiki/Dynamic_event)). Os chefes mundiais seguem horário fixo e o baú do chão só pode ser saqueado uma vez por personagem por dia por chefe; o baú bônus, uma vez por conta por dia ([wiki oficial, World boss](https://wiki.guildwars2.com/wiki/World_boss)).
- [F] **IdleMMO (idle de navegador)**: 11 chefes mundiais permanentes, lutas de 10 a 28 minutos e reaparecimento a cada 8 a 18 horas. O jogador pode **entrar na fila até 2 horas antes** da luta, e os chefes são a principal fonte de ovos de pet ([wiki oficial, World Bosses](https://support.idle-mmo.com/wiki/combat/world-bosses)); alertas de chefe são opcionais ([patch notes](https://web.idle-mmo.com/patch-notes)). Ver `fichas/C04-idlemmo.md`. [H] É o melhor exemplo de chefe mundial compatível com o ausente: a decisão é se inscrever e escolher o equipamento, não estar online no minuto exato.
- [F] **Idle Clans** e **Shop Titans**: chefes de clã para até 20 jogadores e uma Clan Cup semanal que premia número e velocidade de abates ([wiki, Clan](https://idleclans.wiki/w/Clan)); no Shop Titans, os eventos de guilda (Dragon Invasion, Lost City of Gold) cumprem o papel de chefe compartilhado ([CogConnected, 16/06/2026](https://cogconnected.com/2026/06/kabam-celebrates-7-years-of-shop-titans-with-new-content-and-rewards/)). Ver `fichas/C02-idle-clans.md` e `fichas/C06-shop-titans.md`.

**Quem faz mal**
- [C] **Chefe de mundo aberto com "tag" e acampamento.** No WoW Classic, jogadores relatam disputa por Azuregos e Kazzak e problemas com as camadas (*layering*) de servidor ([fórum oficial da Blizzard](https://us.forums.blizzard.com/en/wow/t/examples-of-layering-exploits-and-problems/198240)); já em 2005 havia acusação de guilda que decifrou o horário de spawn para monopolizar os chefes ([Lurker Lounge](https://lurkerlounge.com/forums/printthread.php?tid=6143)). [H] Quando o chefe é escasso e o loot vai para quem "marcou" primeiro, o conteúdo coletivo vira corrida de poucos.
- [F] **Vender a automação do conteúdo coletivo.** O Idle Clans vende um token de "Auto raid" (US$ 4,99) para fazer uma raid totalmente AFK e outro de chaves de chefe ilimitadas ([wiki, Tokens](https://idleclans.wiki/w/Tokens)). [H] Isso esvazia o motivo para jogar junto e transforma o chefe em compra.
- [F] **Chefe como torneira de ouro.** O SimpleMMO reduziu o ouro dos chefes mundiais em set/2026, dentro de uma série de drenos contra uma economia que "cresceu massivamente" ([log de atualizações](https://web.simple-mmo.com/updates); [blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)). O criador já tinha admitido em 2023 que o sistema de chefes fora feito "com barbante e fita adesiva" ([blog oficial, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)). Ver `fichas/C05-simplemmo.md`.

**Encaixe no idle (teste do ausente)** [H]
- **Inscrição antecipada e luta simulada**: o jogador se inscreve horas antes (IdleMMO) com um *snapshot* do personagem; a luta corre no servidor, e o ativo pode intervir (usar habilidades, trocar formação) para ganhar uma fatia extra, nunca a recompensa base.
- **Sem "tag" e sem loot disputado** (GW2): recompensa individual por patamar de contribuição, com teto diário por conta para conter alts.
- **HP do servidor que desce com o idle de todos**: um chefe global com dias de duração, cuja vida cai com a produção ociosa de cada jogador, liga o ausente ao evento sem exigir presença.
- **Horários que rotacionam por fuso**, ou muitas aparições ao dia (de 8 a 18 horas no IdleMMO), para o Brasil e o resto do mundo terem chance igual.

**Problema · emoção · comportamento.** [H] Resolve a solidão do idle e a falta de momento coletivo · gera espetáculo, "estávamos todos lá" e a tensão de bater o tempo · incentiva login em horários marcados, socialização e preparo de equipamento.

**Custo: médio.** Exige estado compartilhado com muitas escritas simultâneas no mesmo contador de vida (agregação e idempotência no PostgreSQL), agenda, simulação de luta e tabelas de recompensa. Reaproveita o combate automático que o jogo já terá.

**Riscos e mitigação**
- *Torneira de ouro e itens* → recompensa principal em material de progresso pessoal ou intransferível, e parte negociável sob orçamento diário.
- *Ranking de dano dominado por baleias* → recompensa por patamar de participação, com retorno decrescente no topo.
- *Alts multiplicando recompensa* → teto por conta, não por personagem (como o baú bônus do GW2).
- *Fuso único* → horários rotativos ou janelas longas.
- *Automação paga* → nunca vender a participação; no máximo conveniência de inscrição, igual para todos.

### 4. PvP assíncrono

**O que é.** Jogadores enfrentam a defesa, a base ou uma cópia (*snapshot*, "fantasma") do personagem de outros, sem que o defensor precise estar online.

**Quem faz bem**
- [F] **Super Auto Pets**: todas as batalhas da Arena são assíncronas, contra times de outros jogadores, ou contra times gerados quando não há jogador disponível naquele turno. O jogo também roda no navegador ([Wikipedia](https://en.wikipedia.org/wiki/Super_Auto_Pets)).
- [F] **Backpack Battles**: o personagem luta "asynchronously without player control" contra o de outro jogador, escolhido de forma semialeatória entre as runs alheias; a run acaba em 10 vitórias ou 5 derrotas. Vendeu cerca de 640 mil unidades no primeiro mês no Steam e passou de 36 mil jogadores simultâneos no lançamento (jun/2025) ([Wikipedia](https://en.wikipedia.org/wiki/Backpack_Battles)).
- [F] **Clash of Clans**: ataques de até três minutos contra vilas de outros jogadores ([Wikipedia](https://en.wikipedia.org/wiki/Clash_of_Clans)). Quem é saqueado ganha escudo: no sistema antigo, 12, 14 ou 16 horas conforme a destruição (30%, 60% ou 90%); desde outubro de 2025, um "Magic Shield" fixo de 8 horas quando 30% ou mais do saque disponível é roubado ([Clash Ninja](https://www.clash.ninja/guides/what-are-shields-and-guard); [Supercell](https://supercell.com/en/games/clashofclans/blog/release-notes/get-ready-for-ranked-update); [Fragster](https://www.fragster.com/clash-of-clans-october-2025-update-battle-modes-shield-rework-more/)). O jogo passou de US$ 6,4 bilhões de receita até 2018 ([Wikipedia](https://en.wikipedia.org/wiki/Clash_of_Clans)).
- [F] **SimpleMMO (navegador)**: o PvP é massivo e assíncrono, contra personagens de outros jogadores; foram 105,8 milhões de "jogadores derrotados" em 2022, contra 21 milhões em 2021 ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/), via `fichas/C05-simplemmo.md`).

**Quem faz mal**
- **Ficar online como escudo.** [NV] No Clash of Clans a vila não pode ser atacada com o dono conectado (conhecimento prévio, coerente com a regra a seguir, mas sem fonte lida). [F] Desde a atualização de dezembro de 2015, quem acumula três horas online sem escudo é forçado a uma pausa de seis minutos (o *Personal Break*) ([Christian Post, 28/11/2015](https://www.christianpost.com/trends/clash-of-clans-updates-village-guard-personal-breaks-league-bonuses-and-loot.html)). A mesma atualização acabou com o escudo grátis e passou a exigir 30% de destruição para gerá-lo ([Pocket Gamer, 16/12/2015](https://www.pocketgamer.com/clash-of-clans/clash-of-clans-101-the-complete-guide-to-decembers-town-hall-11-update/)). [H] A pausa forçada mostra o efeito colateral do raide assíncrono mal desenhado: estar conectado vira proteção, e o jogo passa a premiar quem nunca sai, o oposto do idle.
- [C] **Ser "zerado" enquanto dorme** é a queixa central dos 4X mobile (seção 1), em que a perda do ausente é grande e o escudo é vendido.
- [H] **Saque sem teto contra o mais fraco** desestimula quem chega: o veterano "farma" o novato. As fichas de OGame e Travian, em andamento, tratam do caso clássico; aqui só registramos o padrão.

**Encaixe no idle (teste do ausente)** [H]
- **Fantasmas em vez de raides**: o modelo Super Auto Pets / Backpack Battles é o mais idle de todos. O personagem ausente vira oponente de outros, e pode até render uma pequena recompensa de defesa quando seu fantasma vence. Ninguém perde nada por estar fora.
- **Se houver saque, perda limitada e anunciada**: só o que está "exposto" (produção ainda não guardada), nunca equipamento nem progresso; escudo automático depois de cada saque; proteção de novato.
- **Estar online não protege nem expõe**: nem vantagem de defesa por estar logado, nem desvantagem (a lição do *Personal Break*).
- **Faixas de poder e formatos normalizados** para que a derrota venha de decisão, não de diferença de conta.

**Problema · emoção · comportamento.** [H] Resolve a falta de oposição humana num gênero solitário, sem exigir agenda · gera rivalidade, vingança e orgulho de uma build bem montada · incentiva teoria de builds, leitura de registros de batalha e ataques no momento escolhido.

**Custo: médio.** Guardar *snapshots*, simulação determinística no servidor (a mesma do combate automático), emparelhamento por força e registro de batalha. Fica mais barato se o combate do jogo já for automático e reproduzível.

**Riscos e mitigação**
- *Veterano caçando novato* → emparelhamento por faixa de poder, proteção de novato e retorno decrescente contra alvos mais fracos.
- *Aversão à perda* → fantasmas sem perda; saque só opt-in e limitado.
- *Pagar para vencer* → formatos com nível ou poder normalizado.
- *Alts alimentando vitórias* → recompensas por rating, teto diário e detecção de conluio.
- *Meta estagnado* → regras rotativas, como as filas semanais do Super Auto Pets ([Wikipedia](https://en.wikipedia.org/wiki/Super_Auto_Pets)).

### 5. Arenas

**O que é.** PvP estruturado num ranking (ladder), com tentativas por dia, temporadas e recompensas por posição; em idles e jogos mobile, quase sempre contra o time de defesa de outro jogador.

**Quem faz bem**
- [F] **Hearthstone (Arena)**: o jogador monta um baralho de 30 cartas escolhendo entre três opções, rodada após rodada, joga até um número fixo de vitórias ou derrotas e recebe recompensas conforme o resultado ([Wikipedia](https://en.wikipedia.org/wiki/Hearthstone)). [H] O *draft* neutraliza a vantagem de coleção: todos montam com o que o sorteio oferece.
- [F] **Clash of Clans (Clan War Leagues, out/2018)**: cada clã enfrenta sete outros e sobe ou cai de liga pelas estrelas ([Wikipedia](https://en.wikipedia.org/wiki/Clash_of_Clans)). No modo ranqueado de 2025, cada ataque vale no máximo 40 troféus ([Blueprint CoC](https://blueprintcoc.com/blogs/new-clash-of-clans-update/ranked-battle-sneak-peek-2); [Clash Ninja](https://www.clash.ninja/blog/battle-and-ranked-modes)).
- [F] **Super Auto Pets (Versus)**: todos começam com 1.500 pontos e há filas semanais com conjuntos de bichos que mudam ([Wikipedia](https://en.wikipedia.org/wiki/Super_Auto_Pets)). [H] A rotação semanal renova o meta sem *power creep*.
- [F] **Backpack Battles**: a "arena" é a própria run, com fim em 10 vitórias ou 5 derrotas ([Wikipedia](https://en.wikipedia.org/wiki/Backpack_Battles)). [H] Limitar por derrotas, e não por tempo, deixa o jogador parar quando quiser.

**Quem faz mal**
- [C] **Arena de coleção paga.** No AFK Arena, críticos descrevem o PvP como pay-to-win, com quem paga tendo heróis mais fortes e mais vitórias ([Indiecator](https://indiecator.org/2020/12/26/afk-arena-exists/); [Gamebrain](https://gamebrain.co/game/afk-arena-1)). No Hearthstone, estimou-se de US$ 50 a 100 para ter baralhos competitivos e cerca de US$ 400 por ano para manter a coleção completa ([Wikipedia, citando Polygon, 2017](https://en.wikipedia.org/wiki/Hearthstone)).
- [F] **Moeda premium como prêmio de topo.** No SimpleMMO, o top 3 da arena ganha diamantes, a moeda paga ([wiki de fãs, via `fichas/C05-simplemmo.md`](https://simplemmo.fandom.com/wiki/Diamonds)). [H] Num jogo com RMT oficial, prêmio de ranking conversível em dinheiro cria incentivo a contas alimentadas, boosting e bots.

**Encaixe no idle (teste do ausente)** [H]
- **Cargas acumuláveis**: as tentativas diárias se acumulam até um teto (por exemplo, três dias de cargas), para quem fica fora não perder a cota.
- **A defesa pontua sozinha**: o time de defesa do ausente ganha pontos quando resiste, então ele sobe no ranking mesmo sem atacar.
- **Duas arenas**: uma "aberta", com o poder da conta, e uma normalizada (*draft* ou nível fixo), em que vence a decisão. A normalizada é a que recebe o ranking de prestígio.
- **Recompensa por patamar e por participação**, com cosméticos e títulos no topo, e nunca moeda conversível em dinheiro.

**Problema · emoção · comportamento.** [H] Resolve a falta de um placar legível entre jogadores e dá um destino competitivo ao poder acumulado · gera status, progresso visível e o "só mais uma" · incentiva login diário curto, ajuste de defesa e estudo do meta.

**Custo: médio, baixo se o PvP assíncrono já existir.** Exige sistema de rating (Elo ou Glicko), temporadas, tabelas de recompensa e antifraude. Sobre a base da seção 4, é uma camada incremental.

**Riscos e mitigação**
- *Topo dominado por quem paga* → arena normalizada como a de prestígio, e retorno decrescente do poder na aberta.
- *Alts e conluio* → emparelhamento por rating, teto de pontos contra o mesmo oponente, revisão do topo.
- *"Snipe" no corte do ranking diário* → corte em horário aleatório ou pontuação média do período.
- *Prêmio de ranking com valor em dinheiro* → prêmios intransferíveis.

<!-- PARTE A, MECÂNICAS 6 A 11: EM ANDAMENTO -->
