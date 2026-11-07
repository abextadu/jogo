# Melvor Idle

| Campo | Valor |
|---|---|
| Grupo | B — Idle RPG de referência (single-player, premium) |
| Desenvolvedora / publicadora | Games by Malcs (Brendan "Malcs" Malcolm, Perth, Austrália) / Jagex Partners |
| Lançamento | Acesso antecipado público em set/2019 (navegador); Steam EA em 19/nov/2020; versão 1.0 em 18/nov/2021 |
| Plataformas | Navegador, PC (Steam, Epic; Windows/macOS/Linux), iOS, Android |
| Modelo de negócio | Premium: demo grátis → versão completa paga uma vez + 3 expansões pagas; sem microtransações |
| Status em 2026 | Em declínio lento: sem expansão nova desde jun/2024; o estúdio migrou para *Melvor Idle 2* (Early Access em 17/nov/2026) |

> **Cartão-resumo:** Melvor Idle é o RuneScape "destilado": mais de 20 skills interligadas (coleta → produção → combate), sem andar nem clicar em árvores, rodando sozinho no navegador, no PC ou no celular. Deu certo porque tirou o atrito de uma fantasia conhecida, trata o ausente como o presente (offline rende igual ao online, até 24 h) e cobra uma vez. Vendeu mais de 1 milhão de unidades. O limite vem da mesma escolha: o jogo confia no cliente (save local editável, cheats aceitos) e por isso nunca pôde ter economia entre jogadores. **Lição nº 1:** a cadeia de skills interligadas é a base ideal para uma economia de jogadores, mas só com servidor autoritativo desde o primeiro dia.

## 1. Loop central

- **Uma ação por vez.** O jogador escolhe uma ação de uma skill (cortar carvalho, pescar camarão, forjar barras) e ela se repete sozinha. Ao fechar o jogo, ele registra qual skill e qual ação estavam ativas e retoma essa ação na volta [F] ([wiki oficial — Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression)).
- **Skills interligadas.** O jogo tem 8 skills de combate e 15 de fora do combate, mais de 1.100 itens e mais de 40 pets [F] ([Jagex, lançamento da v1.0, 18/nov/2021](https://www.jagex.com/news/melvor-idle-version-1-0-launches-on-pc-and-mobile)). A versão completa soma 24 skills, contra 11 na demo [F] ([wiki — Full Version](https://wiki.melvoridle.com/w/Full_Version)). A lógica é a do RuneScape: as skills de coleta geram matéria-prima, as de produção a transformam e o combate consome o resultado (comida, poções, munição, runas, armaduras).
  - Também há conexões laterais. O Township troca recursos da cidade por consumíveis que não existem em nenhum outro lugar do jogo [F] ([wiki — FAQ](https://wiki.melvoridle.com/w/FAQ)). Skills sem combate dão bônus de combate: Agility, Astrology e Cartography [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)).
- **Combate automático com decisões ativas.** Os ataques são automáticos; o jogador monta o conjunto [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ); [Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression)):
  - conjuntos de equipamento salvos e poções com reuso automático;
  - comida com **Auto Eat**, upgrade comprado em níveis. No nível I, o personagem come com 20% de vida ou menos e morre se o inimigo acertar acima desse limiar;
  - Prayer, com pontos vindos de enterrar ossos;
  - tarefas de Slayer, que pagam Slayer Coins, em áreas com penalidades que o equipamento neutraliza;
  - dungeons, sequências de monstros que terminam em chefe.
  - **Morte:** um item aleatório do conjunto equipado é **perdido para sempre**, exceto com a prayer *Protect Item*.
- **O que fica rodando em paralelo.** Farming cresce em tempo real e não replanta sozinho offline [F] ([Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression)). Township rende por tempo e pede visitas periódicas [C] ([thread Steam sobre Township](https://steamcommunity.com/app/1267910/discussions/0/3823048293516778888); [review negativa nº 58 de 2026, "exigente com seu tempo"](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- [H] **Leitura do estúdio:** o limite de uma ação por vez é a decisão de design mais importante do jogo. Cada saída vira uma escolha ("o que treinar nas próximas 8 horas?"), e os temporizadores paralelos dão motivo para voltar sem punir quem não volta.

## 2. Camadas de progressão e prestígio

- **Não há prestígio nem reset.** A progressão é vertical e acumulativa:
  - níveis 1–99 por skill;
  - **Mastery** por item ou ação, com um *Mastery Pool* por skill que libera bônus em checkpoints;
  - *Mastery Tokens* [F] ([Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression)).
- **As expansões estendem o teto em vez de reiniciar** [F] ([wiki — Full Version](https://wiki.melvoridle.com/w/Full_Version)):
  - *Throne of the Herald* (20/out/2022): níveis 100–120, 7 dungeons e 8 áreas de Slayer. Exige 99 em alguma skill ou vencer a última dungeon do jogo base.
  - *Atlas of Discovery* (7/set/2023): skills Cartography e Archaeology e o modo Ancient Relics. A data vem da [Jagex](https://www.jagex.com/news/melvor-idle-s-new-expansion-atlas-of-discovery-launching-this-september); a wiki diz 4/set.
  - *Into the Abyss* (13/jun/2024): o "Reino Abissal", com 60 níveis abissais em quase todas as skills, as skills Corruption e Harvesting, a dungeon The Abyss e os Strongholds [F] ([press release da Jagex, 16/mai/2024](https://gamedeveloper.com/press-release/runescape-inspired-idle-adventure-melvor-idle-taps-into-the-abyss-with-major-new-expansion-releasing-june-13th)). A wiki registra "14/mar/2024", o que parece erro: o Steam e a imprensa trazem 13/jun.
- **Modos em saves separados funcionam como "prestígio lateral"** [F] ([wiki — Game Mode](https://wiki.melvoridle.com/w/Game_Mode), lida via resultado de busca porque o WebFetch recebeu 403):
  - **Hardcore:** o personagem é apagado ao morrer [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)).
  - **Adventure:** as skills são compradas com GP, e os níveis fora do combate não passam do nível de combate.
  - **Ancient Relics** (com o Atlas): sem preservação nem duplicação, Cooking e Fishing bloqueados até o fim do jogo base, tetos de nível presos a dungeons; as relíquias vêm do treino das skills [F] ([wiki — Ancient Relics/Guide](https://wiki.melvoridle.com/w/Ancient_Relics/Guide), via busca).
  - Modos de 1º de abril por tempo limitado, como *Hardcore Adventure Speedrun* [F] ([notícia oficial, abr/2024](https://news.melvoridle.com/game-update-april-fools-2024)).
  - Nenhum modo tem ranking ou temporada compartilhada.

## 3. Progresso offline

- **Como é calculado** [F] ([wiki oficial — Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression)):
  - Não existe processamento durante a ausência. Ao voltar, o jogo mede o tempo fora, **limitado a 24 horas**, e simula tique a tique tudo o que teria acontecido com o jogo aberto: XP, Mastery, itens, sinergias de Summoning liberadas no caminho.
  - No fim, mostra um resumo do que aconteceu.
  - Segundo a própria wiki, não há diferença de ganho entre online e offline. A única diferença é não poder **trocar de ação**.
- **Restrições e riscos:**
  - Combate e Thieving offline só rodam com a opção *Toggle Offline Combat* ligada e **podem matar o personagem**.
  - Farming não replanta.
  - Uma aba em segundo plano, desacelerada pelo navegador, também dispara o cálculo offline.
- **Histórico.** O offline estreou na V0.13 e divergia do online. O combate offline veio na V0.21 e a paridade de Mastery, na V1.0.3. O mod "Unlimited Offline" remove o teto, mas alonga o carregamento, porque a simulação inteira roda na volta [F] ([mesma página](https://wiki.melvoridle.com/w/Offline_Progression)).
- **Sequência.** O *Melvor Idle 2* mantém o princípio: o progresso offline anda "no mesmo ritmo" do jogo ativo [F] ([RuneScape News, 29/out/2026](https://secure.runescape.com/m=news/introducing-melvor-idle-2---a-runescape-adventure)).
- [H] **Leitura do estúdio:** recalcular na volta, de forma determinística, é barato e justo. Mas, num jogo com economia, o cálculo tem de rodar no **servidor**; no Melvor ele roda no cliente, e é isso que deixa o save editável.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** níveis rápidos, chance de pets raros e muitas skills liberadas de uma vez, o que chega a ser excessivo ("30 mecânicas logo de cara") [C] ([reviews negativas recentes, nº 29 e nº 30](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- **D7:** primeiras dungeons, tarefas de Slayer, a corrida pelo primeiro 99 e os checkpoints do Mastery Pool.
- **D30 e além:** completar o registro de itens, monstros e pets ("ótimo rastreamento de coleção") [C] ([reviews positivas, nº 30](https://steamcommunity.com/app/1267910/positivereviews/?browsefilter=mostrecent&filterLanguage=english); [thread "Mixed reviews"](https://steamcommunity.com/app/1267910/discussions/0/3823048293516778888)), os níveis 100–120 e abissais e os modos em save separado.
- **Retenção medida pelo tempo de jogo:**
  - Nas 50 reviews positivas mais recentes (out–nov/2026), a mediana de tempo de jogo é **195 h**, e 35 delas passam de 100 h.
  - Mesmo entre as 80 negativas de 2026, a mediana é **91 h** [F] (contagem nossa em [positivas](https://steamcommunity.com/app/1267910/positivereviews/?browsefilter=mostrecent&filterLanguage=english) e [negativas](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- [H] **Leitura do estúdio:** o Melvor retém pela coleção e pela meta longa (99 em tudo), não por eventos. A falta de eventos ao vivo o deixa estável e barato de manter, mas sem picos de retorno.

## 5. Jogador ativo vs. jogador ausente

- **O ganho por minuto é idêntico.** O ativo só leva vantagem em três pontos:
  1. **Trocar de ação** quando os recursos acabam ou um nível novo libera algo melhor.
  2. **Reagir a drops e à morte** no combate.
  3. **Fazer as dungeons de fim de jogo.**
- **O terceiro ponto virou atrito.** Desde 2022 os jogadores dizem que *Into the Mist* e *Impending Darkness* exigem atenção ativa (trocar equipamento a cada fase, segurar botão contra o chefe que se cura). A divisão é clara entre quem acha isso estressante, "o oposto das tags Idler e Casual", e quem acha que bastam 3 horas de foco num jogo de milhares [C] ([thread "Into the Mist arruinou o jogo", jul–ago/2022](https://steamcommunity.com/app/1267910/discussions/0/3416559828459728016); reviews negativas de 2026 nº 40, 47 e 69 em [Steam](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- **Reclamações de "não é idle o bastante":** 8 das 80 negativas de 2026 (check-ins frequentes, morte com perda de item, expansões que "impedem de idlar") [C] ([reviews negativas](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- [H] **Leitura do estúdio:** o Melvor resolve muito bem o lado do ausente, que "fica esperto" ao escolher a ação certa e preparar comida e poções antes de sair. Falha em dar ao ativo uma recompensa **opcional**: o conteúdo ativo é **obrigatório** para avançar, o que pune o perfil idle. O desenho certo é o inverso: o ativo ganha bônus ou atalho, nunca a única porta.

## 6. Economia e moedas

- **Moedas e fontes.** GP vem de vender itens à loja do jogo e de drops. Slayer Coins vêm só de tarefas de Slayer [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)). Township tem recursos próprios, trocados no *Trading Post* do Township (uma troca com NPC) [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)).
- **Drenos** [C] ([reviews negativas nº 24 e nº 75](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english), sobre o banco cheio):
  - espaço no banco comprado com GP;
  - upgrades de ferramentas e de Auto Eat;
  - consumíveis de combate (comida, munição, runas, poções);
  - perda de item na morte.
- **Não há troca entre jogadores, mercado nem leilão.** O FAQ oficial trata o jogo como single-player e liberado para cheats: "ninguém será banido"; o jogador pode editar o save "como quiser" [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)).
- [H] **Leitura do estúdio:** num jogo solo, a "economia" é só um orçamento de tempo, e a inflação não importa. Mas a cadeia coleta → produção → consumo já é uma economia de especialização à espera de jogadores: quem só pesca vende comida a quem só luta.

## 7. Social

- **Dentro do jogo, nada.** O FAQ diz que não há planos de leaderboards no futuro imediato [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)). O social vive fora do jogo: Discord, [r/MelvorIdle](https://www.reddit.com/r/MelvorIdle/) e mods.
- **A comunidade pede e constrói o que falta** [C]:
  - Em set/2024 saiu o mod comunitário **Melvor Multiplayer** (concurso de mods de 2024): troca e presentes entre amigos, marketplace global e esforços coletivos. O autor (u/Kruithne) conta que o mercado virou listagem simples, e não um "Grand Exchange", porque não havia preços estabelecidos. E o mod é só **cooperativo**: como qualquer um pode trapacear, ranking e PvP não fariam sentido ([thread no Reddit, 29/set/2024](https://www.reddit.com/r/MelvorIdle/comments/1fsd4ah/new_mod_melvor_multiplayer/), lida via [espelho](https://axebps-redlib.hf.space/r/MelvorIdle/comments/1fsd4ah/new_mod_melvor_multiplayer)).
  - Num fórum do Steam circula a versão, de segunda mão, de que o dev descartou multiplayer e casa de leilão [NV] ([thread Steam, 2021](https://steamcommunity.com/app/1267910/discussions/0/4917340730756584239); não achamos a declaração original).
- **O tema quase não aparece nas reviews negativas:** só 1 das 80 de 2026 cita a falta de outras pessoas [F] (contagem nossa, [Steam](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)).
- [H] **Leitura do estúdio:** quem compra o Melvor sabe que é solo. A demanda por multiplayer aparece como **migração** para "Melvor-likes" online (Idle Clans, IdleMMO, Milky Way Idle), não como reclamação. Uma busca atribuiu ao dev a frase de que seu modelo de monetização não funciona num produto multiplayer [NV] (o Reddit bloqueou o acesso).
- **A sequência continua solo.** O *Melvor Idle 2* segue single-player, com "recursos sociais básicos": lista de amigos, perfis na nuvem e presença [F] ([RuneScape News, 29/out/2026](https://secure.runescape.com/m=news/introducing-melvor-idle-2---a-runescape-adventure)).

## 8. Monetização

- **Preço do jogo base.** A demo é grátis e a versão completa é uma compra única: US$ 9,99 no Steam [F] ([Jagex, v1.0](https://www.jagex.com/news/melvor-idle-version-1-0-launches-on-pc-and-mobile)) e R$ 32,99 no Steam brasileiro em nov/2026 [F] ([loja Steam](https://store.steampowered.com/app/1267910/Melvor_Idle/)). Não há mensalidade [F] ([wiki — Full Version](https://wiki.melvoridle.com/w/Full_Version)).
- **Expansões.** Três, independentes entre si, a US$ 4,99 cada (R$ 16,99) [F] ([loja Steam](https://store.steampowered.com/app/1267910/Melvor_Idle/); [Into the Abyss: US$ 4,99 / £4,29 / €4,99, release de 13/jun/2024](https://pocketgamer.com/melvor-idle/into-the-abyss)).
- **iOS:** upgrade completo a US$ 9,99, pacote "Expanded Edition" a US$ 13,90 [F] ([App Store](https://apps.apple.com/us/app/melvor-idle/id1518963622)).
- **Compra multiplataforma, de mão única:** quem compra no Steam ou na Epic joga também no celular e no navegador pela conta Melvor Cloud; quem compra no celular **não** ganha chave para PC [F] ([wiki — Full Version](https://wiki.melvoridle.com/w/Full_Version)).
- **Promessa de marca:** o Melvor "nunca terá microtransações" [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)). A sequência repete "No Microtransactions" e promete "expansões regulares" [F] ([RuneScape News](https://secure.runescape.com/m=news/introducing-melvor-idle-2---a-runescape-adventure)).
- **Patreon:** 3.520 membros pagantes em nov/2026 [F] ([Patreon](https://www.patreon.com/melvoridle/about)); foi o canal do alpha do *Melvor Idle 2* [F] ([dev blog, 20/nov/2025](https://news.melvoridle.com/what-weve-been-up-to-with-melvor-idle-2/)). Houve ainda um brinde de 24 h na Epic em 21/dez/2023 [F] ([notícia oficial](https://news.melvoridle.com/melvor-idle-is-free-for-24-hours-only-on-the-epic-games-store)).
- **Preço não é a reclamação.** Só 3 das 80 negativas de 2026 citam preço ou DLC [F] (contagem nossa). [H] Expansões baratas, compradas uma vez e sem resetar o save, são aceitas sem ressentimento.

## 9. Números disponíveis (com fonte)

| Dado | Valor | Data / tipo | Fonte |
|---|---|---|---|
| Unidades vendidas | mais de 1 milhão | out/2026, declaração da Jagex | [Jagex](https://www.jagex.com/news/jagex-announces-partnership-with-games-by-malcs-to-publish-idle-adventure-sequel-melvor-idle-2-a-runescape-adventure) |
| Jogadores únicos | mais de 1 milhão; mais de 600 mil downloads (Steam + lojas mobile) | out/2021, declaração da Jagex | [Jagex](https://www.jagex.com/news/jagex-announces-partnership-to-publish-melvor-idle) |
| Reviews no Steam | 14.780 no total; 92% positivas entre 8.670 em inglês; 85% entre 94 nos últimos 30 dias | nov/2026, API e loja do Steam | [appdetails](https://store.steampowered.com/api/appdetails?appids=1267910); [loja](https://store.steampowered.com/app/1267910/Melvor_Idle/) |
| Positividade por ano | 2021: 94,0% · 2022: 88,7% · 2023: 84,9% · 2024: 90,4% · 2025: 85,1% · 2026 (até 6/nov): 83,3% | histograma de reviews do Steam | [histograma](https://store.steampowered.com/appreviewhistogram/1267910?l=english&review_score_preference=0) |
| Pico simultâneo de todos os tempos (Steam) | 11.837 | out/2022, mês do *Throne of the Herald* | [SteamCharts](https://steamcharts.com/app/1267910) |
| Média de jogadores simultâneos (Steam) | cerca de 4.400 na média mensal de 2025 → cerca de 3.350 em jan–out/2026; out/2026: média de 3.717, pico de 4.886 | SteamCharts | [SteamCharts](https://steamcharts.com/app/1267910) |
| iOS | 4,8★ (9,1 mil avaliações) | nov/2026 | [App Store](https://apps.apple.com/us/app/melvor-idle/id1518963622) |
| Android | cerca de 907 mil instalações, 3,74★ (13 mil avaliações); receita estimada abaixo de US$ 10 mil/mês | estimativa da AppGoblin, coleta de 4/nov/2026 (é estimativa de terceiro) | [AppGoblin](https://appgoblin.info/apps/com.malcs.melvoridle) |
| Mods | mais de 1 milhão de downloads em 140 mods | ModDB, sem data | [ModDB](https://www.moddb.com/games/melvor-idle/features/melvor-idle-surpasses-1-million-mod-downloads-powered-by-modio) (título lido via busca; página com 403) |
| Demo do *Melvor Idle 2* | mais de 50 mil downloads; pico acima de 7.200 simultâneos | Steam Next Fest, out/2026 | [dev blog](https://news.melvoridle.com/melvor-idle-2-a-runescape-adventure-releases-17-november-2026-into-steam-early-access-next-fest-roundup/) |

[H] **Leitura dos números:** o pico da demo do sucessor (7.200) já supera o maior pico mensal do original em 2026 (5.758, em ago); a base vai migrar. A distância entre iOS (4,8★) e Android (3,74★, estimativa) sugere problemas próprios do Android, que não investigamos.

## 10. Por que deu certo

1. **"RuneScape destilado."** Malcs pegou os elementos do RuneScape de que ele gostava, "enxugou" e automatizou [F] ([TheGamer, 29/out/2021](https://www.thegamer.com/melvor-idle-interview-jagex/)). Ele se inspira sobretudo no OSRS [F] ([MMORPG.com, 10/dez/2021](https://www.mmorpg.com/interviews/interview-digging-deep-into-melvor-idle-with-its-creator-brendan-malcolm-2000123838)). Nas 50 positivas recentes, 12 citam RuneScape ou OSRS, como "RuneScape sem andar" e "OSRS em segundo plano" [F] (contagem nossa, [Steam](https://steamcommunity.com/app/1267910/positivereviews/?browsefilter=mostrecent&filterLanguage=english)).
2. **Respeito ao tempo.** O dev tinha emprego fixo e não tinha tempo para jogos ativos, e o idle permitia sentir a jornada até o 99 [F] ([TheGamer](https://www.thegamer.com/melvor-idle-interview-jagex/)). Ele queria "momentos curtos" que cabem num dia apertado [F] ([MMORPG.com](https://www.mmorpg.com/interviews/interview-digging-deep-into-melvor-idle-with-its-creator-brendan-malcolm-2000123838)). O offline igual ao online materializa isso.
3. **Estrutura aberta, "faça o que quiser"**, em oposição aos idles lineares [F] ([TheGamer](https://www.thegamer.com/melvor-idle-interview-jagex/)). **Barreira baixa:** navegador, celular e PC com save em nuvem comum [F] ([wiki — Full Version](https://wiki.melvoridle.com/w/Full_Version)), inspirada no RuneScape de navegador de 2006 [F] ([MMORPG.com](https://www.mmorpg.com/interviews/interview-digging-deep-into-melvor-idle-with-its-creator-brendan-malcolm-2000123838)).
4. **Comunidade próxima e um dev que escuta.** Township e Astrology foram retrabalhadas depois da má recepção [C] ([thread "Mixed reviews", set/2023](https://steamcommunity.com/app/1267910/discussions/0/3823048293516778888); [MMORPG.com](https://www.mmorpg.com/interviews/interview-digging-deep-into-melvor-idle-with-its-creator-brendan-malcolm-2000123838)). A Jagex chegou ao dev pelo Reddit e pelo Discord.
5. **Mods oficiais multiplataforma via mod.io**, inclusive no celular, desde out/2022 [F] ([press release do *Throne of the Herald*](https://www.gamedeveloper.com/press-release/melvor-idle-throne-of-the-herald-dlc-launches-today), via busca). Eles tapam buracos de QoL do jogo base [C] (positivas nº 30 e 31).
6. **Publicadora com a marca certa:** a Jagex divulga o jogo para a base do RuneScape, e o sucessor vira oficialmente "A RuneScape Adventure" [F] ([Jagex, out/2026](https://www.jagex.com/news/jagex-announces-partnership-with-games-by-malcs-to-publish-idle-adventure-sequel-melvor-idle-2-a-runescape-adventure)).

## 11. Do que os jogadores mais reclamam

Amostra: as **80 reviews negativas mais recentes em inglês** no Steam, de 13/jan a 6/nov/2026, classificadas manualmente ([página](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english)). Uma review pode cair em mais de um tema.

1. **Técnica, conexão e save: 35 de 80 (44%), o tema dominante em 2026** [F] (contagem nossa).
   - 14 reclamam da **exigência de internet num jogo solo**: não abre sem rede, pede VPN atrás de firewall, desloga sozinho, perde progresso quando o servidor cai (onda de reviews em 12–13/ago/2026).
   - 12 relatam **perda de save**, local ou em nuvem; 10, bugs de desempenho (não fecha pelo Steam, CPU alta, travamentos).
   - **Contexto:** a loja avisa que o jogo "requer conexão" [F] ([Steam](https://store.steampowered.com/app/1267910/Melvor_Idle/)). O cliente offline só entrou em beta em 18/nov/2024 [F] ([anúncio oficial](https://steamcommunity.com/app/1267910/eventcomments/7004881118891652955/)), após reclamações desde 2023 [C] ([thread "Offline mode"](https://steamcommunity.com/app/1267910/discussions/0/3823048658579138055/)). O FAQ admite que os saves **não têm backup no Steam** e que a nuvem sincroniza sozinha a cada 12 h, o que permite sobrescrever por engano [F] ([FAQ](https://wiki.melvoridle.com/w/FAQ)).
   - Quem reclama gostou do jogo: mediana de 91 h, e 39 das 80 passam de 100 h.
2. **Tédio e falta de propósito: cerca de 11 de 80** ("número sobe e só", "simulador de espera").
3. **Apresentação: cerca de 10 de 80** (falta de som, UI de planilha, arte que "parece IA"), sobretudo de quem jogou menos de 2 h.
4. **"Não é idle de verdade": 8 de 80**, mais cerca de 5 sobre muros de fim de jogo (Impending Darkness, Into the Mist, a lentidão de Astrology) [C] (ver seção 5; [thread de 2022](https://steamcommunity.com/app/1267910/discussions/0/3416559828459728016)).
5. **Desconfiança com a Jagex e com a sequência: 6 de 80** ("corrijam o primeiro antes de empurrar o segundo").
6. **Rebalanceamentos que frustram quem ainda está progredindo**, como os nerfs no Township [C] ([thread "Mixed reviews"](https://steamcommunity.com/app/1267910/discussions/0/3823048293516778888); negativa nº 41).
7. **Pouco citados:** preço das expansões (3 de 80) e falta de multiplayer (1 de 80).

## 12. Mecânicas-chave: o porquê

- **Uma ação por vez + offline idêntico ao online (teto de 24 h)** — Problema que resolve: o idle que pune quem sai · Emoção: "fui esperto" ao escolher o que treinar e voltar a um resumo cheio · Comportamento: um check-in por dia e planejamento · Efeito colateral: com o cálculo no cliente, o save fica editável e o teto de 24 h frustra quem viaja.
- **Skills em cadeia (coleta → produção → combate)** — Problema: o idle de uma nota só · Emoção: sensação de "mundo" e de autossuficiência · Comportamento: treinar skills "chatas" porque alimentam as favoritas · Efeito colateral: num jogo solo, obriga o jogador a fazer tudo; em multiplayer, viraria especialização e comércio.
- **Mastery por ação + pool com checkpoints** — Problema: o fim do progresso depois do 99 · Emoção: coleção e microprogresso constante · Comportamento: repetir ações já "dominadas" · Efeito colateral: o ganho marginal fica minúsculo ("um quectossegundo mais rápido").
- **Morte com perda de item aleatório; Hardcore apaga o personagem** — Problema: o combate sem tensão · Emoção: risco real, mesmo ausente · Comportamento: preparar comida e Auto Eat, superdimensionar a defesa · Efeito colateral: medo de deixar o combate offline e reviews do tipo "perdi itens dormindo".
- **Expansões que sobem o teto (100–120, níveis abissais) sem reset** — Problema: monetizar sem microtransação · Emoção: "mais do mesmo que eu amo" · Comportamento: comprar ao chegar ao fim · Efeito colateral: o fim de jogo fica mais ativo e difícil, em choque com a promessa idle.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - **Offline igual ao online, recalculado de forma determinística na volta**, com resumo claro. Faz o ausente se sentir esperto. No nosso caso, o cálculo roda no **servidor**.
  - **Cadeia de skills interligadas** como espinha dorsal: cada profissão produz o insumo de outra. Uma economia de jogadores nasce dessa dependência entre especializações.
  - **Uma ação principal por vez** como fonte de decisão, com no máximo 1 ou 2 temporizadores paralelos (plantação, cidade), que dão motivo para voltar sem punir quem não volta.
  - **Promessa pública de monetização** como ativo de marca ("nunca microtransações", no caso deles). Precisamos de uma equivalente e crível para o nosso RMT, por exemplo "nada de poder vendido pela loja".
  - **Modos de desafio opcionais** em contas ou temporadas separadas: replay sem reset forçado.
- **Evitar:**
  - **Confiar no cliente.** Save editável e cheats liberados impedem economia, ranking e PvP. Até o mod de multiplayer teve de ser só cooperativo.
  - **Exigir conexão sem entregar valor online.** No Melvor, isso só trouxe custo (perda de save, quedas) e virou o maior motivo de review negativa em 2026. Se exigirmos online, ele tem que valer: mercado, social e backup confiável no servidor.
  - **Conteúdo ativo obrigatório** no fim de um jogo vendido como idle. O ativo deve ser **atalho ou bônus**, nunca a única porta.
  - **Silêncio e UI de planilha.** Feedback sonoro e visual mínimo é barato e reduz a rejeição dos primeiros 30 minutos.
  - **Deixar o produto principal envelhecer** enquanto o time vai para o próximo: a desconfiança com a sequência já aparece nas reviews.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Melvor Idle | Web+PC+Mobile | Premium | Parcial | 0 | Auto | Profundo | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Sim | Declínio |

## Fontes

1. [Jagex announces partnership to publish Melvor Idle](https://www.jagex.com/news/jagex-announces-partnership-to-publish-melvor-idle) — oficial — 21/out/2021.
2. [Melvor Idle Version 1.0 launches on PC and mobile](https://www.jagex.com/news/melvor-idle-version-1-0-launches-on-pc-and-mobile) — oficial — 18/nov/2021.
3. [Jagex announces partnership… Melvor Idle 2: A RuneScape Adventure](https://www.jagex.com/news/jagex-announces-partnership-with-games-by-malcs-to-publish-idle-adventure-sequel-melvor-idle-2-a-runescape-adventure) — oficial — 29/out/2026.
4. [Introducing Melvor Idle 2 – A RuneScape Adventure](https://secure.runescape.com/m=news/introducing-melvor-idle-2---a-runescape-adventure) — oficial — 29/out/2026.
5. [MI2 releases 17 November 2026 into Steam Early Access (+ Next Fest Roundup)](https://news.melvoridle.com/melvor-idle-2-a-runescape-adventure-releases-17-november-2026-into-steam-early-access-next-fest-roundup/) — oficial (dev blog) — 29/out/2026.
6. [What we've been up to with Melvor Idle 2](https://news.melvoridle.com/what-weve-been-up-to-with-melvor-idle-2/) — oficial (dev blog) — 20/nov/2025.
7. [Melvor Idle's new expansion Atlas of Discovery launching this September](https://www.jagex.com/news/melvor-idle-s-new-expansion-atlas-of-discovery-launching-this-september) — oficial — 1/ago/2023.
8. [Melvor Idle taps Into the Abyss… releasing June 13th](https://gamedeveloper.com/press-release/runescape-inspired-idle-adventure-melvor-idle-taps-into-the-abyss-with-major-new-expansion-releasing-june-13th) — press release (Jagex) — 16/mai/2024.
9. [Melvor Idle launches Into the Abyss expansion](https://pocketgamer.com/melvor-idle/into-the-abyss) — imprensa — jun/2024 (preço lido via busca).
10. [Melvor Idle: Throne of the Herald DLC launches today](https://www.gamedeveloper.com/press-release/melvor-idle-throne-of-the-herald-dlc-launches-today) — press release — out/2022 (lido via busca).
11. [Wiki oficial — Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression) — wiki oficial — versão 1.3.1, lida em nov/2026.
12. [Wiki oficial — Full Version (expansões e plataformas)](https://wiki.melvoridle.com/w/Full_Version) — wiki oficial — nov/2026.
13. [Wiki oficial — FAQ](https://wiki.melvoridle.com/w/FAQ) — wiki oficial — nov/2026.
14. [Wiki oficial — Game Mode](https://wiki.melvoridle.com/w/Game_Mode) e [Ancient Relics/Guide](https://wiki.melvoridle.com/w/Ancient_Relics/Guide) — wiki oficial — lidas via resultado de busca (o WebFetch recebeu 403).
15. [Game Update – April Fools Day – v1.2.2](https://news.melvoridle.com/game-update-april-fools-2024) — oficial — abr/2024 (via busca).
16. [Loja Steam — Melvor Idle](https://store.steampowered.com/app/1267910/Melvor_Idle/) e [API appdetails](https://store.steampowered.com/api/appdetails?appids=1267910) — dados — nov/2026.
17. [Histograma de reviews do Steam](https://store.steampowered.com/appreviewhistogram/1267910?l=english&review_score_preference=0) — dados — nov/2026.
18. [Reviews negativas mais recentes (Steam)](https://steamcommunity.com/app/1267910/negativereviews/?browsefilter=mostrecent&filterLanguage=english) — comunidade — 80 reviews de jan–nov/2026, classificadas por nós.
19. [Reviews positivas mais recentes (Steam)](https://steamcommunity.com/app/1267910/positivereviews/?browsefilter=mostrecent&filterLanguage=english) — comunidade — 50 reviews de out–nov/2026.
20. [SteamCharts — Melvor Idle](https://steamcharts.com/app/1267910) — dados — nov/2026.
21. [Offline Client now available for Beta testing](https://steamcommunity.com/app/1267910/eventcomments/7004881118891652955/) — oficial (anúncio no Steam) — 18/nov/2024.
22. [Thread "Offline mode"](https://steamcommunity.com/app/1267910/discussions/0/3823048658579138055/) — comunidade — set/2023–jan/2024.
23. [Thread "1300 hours in… Into the Mist has ruined the game"](https://steamcommunity.com/app/1267910/discussions/0/3416559828459728016) — comunidade — jul–ago/2022.
24. [Thread "Mixed reviews"](https://steamcommunity.com/app/1267910/discussions/0/3823048293516778888) — comunidade — set/2023.
25. [Thread "Suggestion – Multiple actions"](https://steamcommunity.com/app/1267910/discussions/0/4917340730756584239) — comunidade — 2021.
26. [r/MelvorIdle — New mod: Melvor Multiplayer](https://www.reddit.com/r/MelvorIdle/comments/1fsd4ah/new_mod_melvor_multiplayer/) ([espelho](https://axebps-redlib.hf.space/r/MelvorIdle/comments/1fsd4ah/new_mod_melvor_multiplayer)) — comunidade — 29/set/2024 (via busca).
27. [ModDB — Melvor Idle surpasses 1 million mod downloads](https://www.moddb.com/games/melvor-idle/features/melvor-idle-surpasses-1-million-mod-downloads-powered-by-modio) — imprensa/dados — sem data (título via busca).
28. [App Store — Melvor Idle](https://apps.apple.com/us/app/melvor-idle/id1518963622) — loja — nov/2026.
29. [AppGoblin — Melvor Idle (Android)](https://appgoblin.info/apps/com.malcs.melvoridle) — estimativa de terceiro — coleta de 4/nov/2026.
30. [Patreon — Melvor Idle](https://www.patreon.com/melvoridle/about) — oficial — nov/2026.
31. [Interview: Digging deep into Melvor Idle with its creator](https://www.mmorpg.com/interviews/interview-digging-deep-into-melvor-idle-with-its-creator-brendan-malcolm-2000123838) — entrevista — 10/dez/2021.
32. [Melvor Idle Interview: Turning RuneScape into an idle game](https://www.thegamer.com/melvor-idle-interview-jagex/) — entrevista — 29/out/2021.
33. [Melvor Idle is free for 24 hours only on the Epic Games Store](https://news.melvoridle.com/melvor-idle-is-free-for-24-hours-only-on-the-epic-games-store) e [PC Gamer](https://pcgamer.com/melvor-idle-the-runescape-inspired-idle-game-with-an-overwhelmingly-positive-rating-is-free-on-the-epic-games-store) — oficial/imprensa — dez/2023 (via busca).
