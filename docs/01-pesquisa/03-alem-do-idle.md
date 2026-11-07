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

<!-- PARTE A, MECÂNICAS 2 A 11: EM ANDAMENTO -->
