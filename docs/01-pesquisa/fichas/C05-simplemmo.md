# SimpleMMO

| Campo | Valor |
|---|---|
| Grupo | C — MMO de navegador "leve" com economia de jogadores (parente direto do IdleMMO) |
| Desenvolvedora / publicadora | Criado por Mike (Michael "Galahad" D.), sozinho, como hobby; hoje publicado pela Galahad Creative Ltd (Londres) |
| Lançamento | Protótipo em 23/08/2017; no ar em 02/02/2018 (web e Android); iOS em 28/02/2022 |
| Plataformas | Web, Android e iOS |
| Modelo de negócio | F2P com diamantes (moeda premium) vendáveis por ouro e assinatura "Plebeian"; teve anúncios no passado |
| Status em 2026 | Em declínio lento: jogo maduro e ainda atualizado, mas com aquisição em queda e o foco do estúdio no IdleMMO |

> **Cartão-resumo (até 120 palavras):** SimpleMMO é um MMORPG textual em que o jogador explora "dando passos": cada clique gera um evento curto (item, ouro, monstro, NPC). Feito por um desenvolvedor solo nos fins de semana, cresceu por boca a boca até cerca de 1 milhão de contas, com guildas, guerras de guilda, chefes mundiais, PvP e um mercado em que diamantes (premium) são vendidos por ouro. Pagou caro por decisões apressadas: monetização que vende ação (recargas de energia e pontos de missão), que o próprio criador associa ao P2W; inflação de ouro e de níveis; e dívida técnica. O estúdio hoje cita o jogo como exemplo de inflação a evitar. **Lição nº 1:** a janela ativa curta é ótima, mas vender mais ação com moeda premium vira P2W e atrai bots.

## 1. Loop central

- [F] O jogador avança clicando num botão de passo, e cada passo traz um texto de aventura ([página "About"](https://simple-mmo.com/about)). Em volta disso há:
  - duelos numa arena, missões, chefes mundiais e guildas;
  - mercado entre jogadores;
  - empregos (guarda, ladrão, chef, ferreiro) e rankings.
- [F] Passos não têm limite rígido: depois de 50 passos entra um "Slow Mode" com espera maior. Ele pode ser reduzido sendo membro premium, gastando moeda premium ou assistindo a um anúncio ([MobyGames](https://www.mobygames.com/game/154893/simplemmo/), visto via busca; a página bloqueou o WebFetch).
- [F] Energia (para batalhas) e pontos de missão regeneram com o tempo. O ciclo de energia caiu de 10 para 5 min em ago/2022 ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)). Empregos consomem energia ao longo do tempo, e a energia não usada volta se o emprego for cancelado antes ([log de atualizações](https://simple-mmo.com/updates), entrada sem data vista via busca).
- [F] A origem explica o design: o criador queria um jogo de navegador para sessões curtíssimas, quase sem tutorial. Fez o protótipo em cerca de 8 horas, com quatro sistemas: viagem, PvE, PvP e inventário ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)).
- [H] O passo é uma "caça-níquel de texto": ação de um segundo com recompensa variável. O loop é ativo, e o idle aparece só na periferia (regeneração e empregos).

## 2. Camadas de progressão e prestígio

- [F] Não há nível máximo nem reset: um review de 2022 elogia a ausência de teto ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)). Em set/2026, o log de atualizações menciona ajustes que se notam "por volta do nível 300.000" ([log, v12.87.0](https://web.simple-mmo.com/updates)).
- [F] Mais de 8.000 itens ([About](https://simple-mmo.com/about)). O crafting voltou na v12.0, em jan/2023 ([blog, índice p. 3](https://www.galahadcreative.com/blog/3/)).
- [F] O ouro por monstro crescia sem teto com o nível e virou problema nos níveis altos. Em ago/2022 entrou um teto de ouro por monstro que encolhe com o nível ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [H] Nível sem teto e números que crescem sem freio funcionam como um "incremental disfarçado". Isso inflaciona tudo o que escala com o nível: ouro, preços e poder.

## 3. Progresso offline

- [F] O estúdio divulga progresso idle, inclusive offline ([página do produto](https://www.galahadcreative.com/showcase/simplemmo/)).
- [F] Na prática, o offline é regeneração de energia e pontos de missão mais empregos que consomem energia. A missão automática só roda com a janela ativa, a cada 5 ou 10 s conforme a membership ([log](https://simple-mmo.com/updates), via busca).
- [H] O ausente não avança no núcleo do jogo (passos e batalhas). É o oposto do IdleMMO, que a mesma empresa criou depois.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1** — [H] Recompensa imediata a cada passo, sem tutorial. [F] O próprio jogo diz que dá para jogar "alguns segundos ou uma noite inteira" ([página do produto](https://www.galahadcreative.com/showcase/simplemmo/)).
- **D7** — [F] Tarefas diárias, semanais e mensais (reformuladas em nov/2022) e rankings que pagam diamantes. Em 2022, o prêmio diário subiu de 189 para 630 diamantes, o semanal de 546 para 1.848 e o mensal de 3.570 para 13.860 ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- **D30** — [F] Temporadas de guilda; em out/2026 uma delas foi encurtada para evitar mudanças durante a temporada ([log, v12.87.4](https://web.simple-mmo.com/updates)). Também há guerras de guilda, raids de guilda e chefes mundiais com notificação push ([log, v12.76.0](https://web.simple-mmo.com/updates)), além de eventos sazonais e temáticos, como um evento de cartas na Copa do Mundo de 2022 ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).

## 5. Jogador ativo vs. jogador ausente

- [F] O ativo domina: passos, batalhas, PvP e missões exigem presença. Membros têm missão automática mais rápida (5 s contra 10 s) e um limite diário maior de "cogumelos" de energia: 180 contra 125. O limite foi elevado por causa das "várias mecânicas novas" que consomem energia ([log](https://simple-mmo.com/updates), entradas sem data vistas via busca).
- [F] Recargas compradas com diamantes dão mais energia para batalhas PvE e PvP ([App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406), relato em review).
- [F] Com o clique como núcleo, a trapaça natural é a automação. Vários jogadores relatam banimento por bot ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)), e em out/2026 entrou uma nova verificação anti-bot ([log, v12.87.3](https://web.simple-mmo.com/updates)).
- [H] O jogador ausente fica para trás e quem paga compra mais ação. É a combinação que a metodologia pede para evitar: o ausente se sente punido e o pagante parece estar comprando vitória.

## 6. Economia e moedas

**Moedas.**
- [F] Ouro, que se ganha viajando, em PvP, vendendo itens, em missões e recebendo de outros jogadores ([wiki de fãs, Gold](https://simplemmo.fandom.com/wiki/Gold), visto via busca).
- [F] Diamantes, a moeda premium, vendidos de 20 por US$ 4,99 a 600 por US$ 69,99 ([App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406)). Pelos termos, não têm valor monetário e só podem ser usados dentro do jogo ([Termos de Uso](https://www.galahadcreative.com/policies/terms/simplemmo/), atualizados em 01/04/2023).

**Diamante negociável: o "token" de RMT do SimpleMMO.**
- [F] Desde fev/2021, jogadores vendem diamantes uns aos outros por ouro num mercado de diamantes dentro do jogo, que dispensa confiar na boa-fé do comprador. Desde a versão 8.2 ele existe em todas as cidades ([wiki de fãs, Diamonds](https://simplemmo.fandom.com/wiki/Diamonds), visto via busca; o WebFetch recebeu HTTP 402).
- [F] Um guia de jogador de cerca de 600 dias antes de nov/2026 (aprox. início de 2025) cita vendedores pedindo de 800 mil a 1 milhão de ouros por diamante ([wiki de fãs, guia](https://simplemmo.fandom.com/wiki/Clash's_Guide_to_SMMO), via busca).
- [H] Por esse guia e pelos preços da App Store, um diamante custa cerca de US$ 0,12 a 0,25. Isso daria algo como 4 a 8 milhões de ouros por dólar, um "câmbio" implícito que serve de termômetro da inflação.
- [F] Outras fontes de diamantes: a membership (30 na primeira compra e 20 por mês) e o top 3 da arena ([wiki de fãs](https://simplemmo.fandom.com/wiki/Diamonds), via busca), além dos rankings (valores acima).
- [F] O que diamantes compram ([wiki de fãs](https://simplemmo.fandom.com/wiki/Diamonds), via busca; [blog v9.0](https://www.galahadcreative.com/blog/simplemmo-v9-0-guilds-guilds-guilds/)):
  - recarga de energia (10 a 15), recarga de vida (4) e chave dourada (4);
  - criação de guilda (50 diamantes ou 15 milhões de ouros);
  - pontos de poder de guilda.

**Mercado e trocas.**
- [F] Há um mercado de jogadores desde os primeiros anos, que o criador lista entre os recursos acrescentados depois do lançamento ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)).
- [F] Trocas diretas e seguras só chegaram em ago/2021. Antes, os jogadores enviavam itens e ouro "na confiança". O novo sistema exige aceite dos dois lados, transfere tudo ao mesmo tempo e aceita até 100 itens por troca; as taxas ainda estavam "em revisão" ([blog, ago/2021](https://www.galahadcreative.com/blog/the-introduction-of-trading/)).
- [F] Uma casa de leilão foi cogitada como exceção à pausa de novas mecânicas em 2023 ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)). Desde ago/2026 é possível travar um item contra troca e venda ([log, v12.85.0](https://web.simple-mmo.com/updates)).
- Taxa de venda no mercado: não encontrada. [NV] O post da "v11" (1º/04/2022) cita 20%, mas o tom sugere piada de 1º de abril e não foi usado.

**Inflação, fontes e drenos.**
- [F] Em 2022, o estúdio disse que a economia "cresceu massivamente". Reagiu com uma série de drenos (o cogumelo de energia subiu para 30.000 ouros) e com o teto de ouro por monstro, e reconheceu a revolta dos jogadores com parte das mudanças ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [F] Drenos em 2026 ([log de atualizações](https://web.simple-mmo.com/updates)):
  - doações ao "Orphanage" passaram a ter taxa de 2,5% sobre o ouro e 5% sobre o ouro do banco (mai/2026);
  - diamantes deixaram de contar para as doações (jun/2026);
  - o teleporte passou a custar conforme o nível, até 250.000 (ago/2026);
  - o ouro dos chefes mundiais foi reduzido (set/2026).
- [F] O mesmo estúdio, num post sobre o IdleMMO, cita o SimpleMMO como exemplo de ouro tão comum que deixou de pesar nas decisões ([blog IdleMMO, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)).

**Bots, multicontas e RMT.**
- [F] Os termos proíbem vender a conta sem aprovação escrita e coletar dados de forma automatizada. Também limitam o uso de APIs a fins privados e não comerciais. Não tratam de multicontas ([Termos de Uso](https://www.galahadcreative.com/policies/terms/simplemmo/)).
- [F] O jogo bloqueia trocas com avisos de "mesmo dispositivo/rede". Um jogador de iOS relatou falsos positivos em 2024 ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)). Em jul/2026, avisos sobre alts foram acrescentados às páginas de envio, troca e guilda ([log, v12.83.0](https://web.simple-mmo.com/updates)).
- [F] O desenvolvedor afirma que banimentos sem direito a apelação costumam vir com evidência forte ([App Store](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone), resposta de 19/12/2022).

**Ferramentas da comunidade.**
- [F] Há uma API pública oficial, que ganhou dados de raids de guilda em jun/2026 ([log, v12.81](https://web.simple-mmo.com/updates)).
- [F] Existe uma extensão de Chrome de terceiros com ajustes de conveniência, a "Simple Assistant" ([Chrome Web Store](https://chrome.google.com/webstore/detail/simple-assistant/dpljccfbkelkodmmbnahgimhombjemll/reviews?hl=en), vista via busca). Sua situação diante das regras não foi verificada.

## 7. Social

- [F] Mais de 1.000 guildas ([About](https://simple-mmo.com/about)).
- [F] A versão 9.0 (mar/2021) reconstruiu as guildas do zero ([blog v9.0](https://www.galahadcreative.com/blog/simplemmo-v9-0-guilds-guilds-guilds/)):
  - guerras, antes infinitas, passaram a acabar em 1.000 abates ou na rendição;
  - o vencedor ganha EXP e pontos de poder, e o perdedor perde os dois;
  - níveis de poder de 1 a 5 (o 5 exige 60 pontos), com perda de 1 ponto por dia "para estimular atividade";
  - pontos vêm de guerras, tarefas ou diamantes;
  - armoury compartilhado e um "hall da fama" com as 50 guildas do sistema antigo.
- [F] Pela wiki de fãs ([Guilds](https://simplemmo.fandom.com/wiki/Guilds), via busca):
  - a guilda pode se declarar PvE e sair das guerras;
  - só pode ser alvo quem tem 10 membros ativos acima do nível 200;
  - a mesma dupla de guildas espera 48 h para voltar a guerrear.
  As fontes divergem sobre o número de abates (1.000, 2.000 ou 5.000), possivelmente por mudanças ao longo do tempo.
- [F] Temporadas de guilda, raids de guilda, santuários entre aliados e ranking de abates em guerra continuam ativos em 2026 ([log de atualizações](https://web.simple-mmo.com/updates)).
- [F] Chefes mundiais são lutas coletivas ([About](https://simple-mmo.com/about)). Em 2023, o criador admitiu que o sistema foi feito "com barbante e fita adesiva" e prometeu refazê-lo ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)). Um chefe novo, Binx, entrou em mai/2026 ([log, v12.77.0](https://web.simple-mmo.com/updates)).
- [F] O PvP é massivo e assíncrono, contra personagens de outros jogadores: 105,8 milhões de jogadores derrotados em 2022, contra 21 milhões em 2021. Também houve drops de itens em PvP (jan/2022) e grupos de exploração com ouro e EXP compartilhados (abr/2022) ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)). Há roubo de ouro (ladrão), recompensas por cabeça e Coliseu ([log, v12.82.0 e v12.87.3](https://web.simple-mmo.com/updates)).

## 8. Monetização

- [F] Diamantes avulsos, de US$ 4,99 a 69,99 ([App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406)), e a membership Plebeian, mensal com renovação automática ([Termos de Uso](https://www.galahadcreative.com/policies/terms/simplemmo/)).
- [F] Vantagens da membership:
  - pela wiki de fãs: diamantes de boas-vindas e mensais, empregos extras, mais cogumelos por dia, eventos exclusivos e emblemas de guilda ([wiki de fãs, Plebeian Membership](https://simplemmo.fandom.com/wiki/Plebeian_Membership), via busca; página com cerca de 900 dias);
  - pelo log oficial: missão automática mais rápida, mais palpites na temporada de guilda, 2 cargas de "worship" contra 1 e adição automática de materiais no crafting ([log](https://web.simple-mmo.com/updates)).
  - Preço da membership: não encontrado.
- [F] Anúncios:
  - os termos permitem;
  - um review de 2022 relata anúncios quebrados no iOS ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone));
  - a MobyGames cita anúncio em troca de passos;
  - em 2023, "Ads" encabeçava a lista de recursos a reavaliar para remoção ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/));
  - em 2026, o estúdio promete "zero anúncios" ([página do produto](https://www.galahadcreative.com/showcase/simplemmo/)).
  [H] Os anúncios saíram em algum momento entre 2023 e 2026.
- [F] O criador escreveu que o lado "P2W" do jogo resultou da falta de planejamento, não de uma estratégia financeira ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)). As recargas de pontos de missão por faixas (jan/2022) buscavam reduzir a distância entre pagantes e não pagantes ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [F] A estratégia de monetização do IdleMMO exclui explicitamente o SimpleMMO, descrito como um modelo mais antigo, anterior à própria Galahad Creative ([blog IdleMMO](https://www.galahadcreative.com/blog/our-monetisation-strategy/)).

## 9. Números disponíveis (com fonte)

- [F] Contas: 725.000 em jan/2022 e 951.000 no fim de 2022 ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)). Mais de 1 milhão de jogadores registrados em jul/2023 ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)).
- [F] Google Play: mais de 1 milhão de downloads em 2022, pelo console do desenvolvedor ([blog, 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [F] Estimativas de terceiros em 04/11/2026 ([AppGoblin](https://appgoblin.info/apps/dawsn.simplemmo)):
  - cerca de 1,4 milhão de instalações no Android, nota 4,55 com 34 mil avaliações;
  - +693 instalações por semana e +4,6 mil em 4 semanas;
  - receita estimada abaixo de US$ 10 mil por mês, com 57% "de anúncios". [H] Esse percentual contradiz o "zero anúncios" oficial e deve vir de SDKs remanescentes.
- [F] iOS: nota 4,1 com 118 avaliações ([App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406)).
- [F] A página "About" (desatualizada) fala em "500K+" jogadores, 240 milhões de passos e mais de 1.000 guildas ([About](https://simple-mmo.com/about)). A página do produto fala em "1M+" ([showcase](https://www.galahadcreative.com/showcase/simplemmo/)).
- [F] Jogadores online: em 2022, o desenvolvedor disse que o número varia e tem picos em eventos, e um jogador relatou nunca ter visto mais de cerca de 500 online ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)).
- [F] Trajetória de aquisição ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)):
  - pico de mais de 3.000 downloads por dia;
  - uma mudança de algoritmo da Google Play derrubou para menos de 80 por dia, ritmo que durou uns dois anos;
  - mais de 500 mil downloads em mar/2021.
- [F] Equipe: na prática, uma pessoa. Em 2023, o criador escreveu que o desenvolvimento depende quase só dele e que a base de código é difícil de passar adiante ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)).
- Não encontrado: DAU/MAU, receita real e preço da membership.

## 10. Por que deu certo (ou por que falhou)

- [H] **Deu certo pela fricção mínima:** um botão, texto e qualquer dispositivo. O próprio criador procurava um jogo para sessões de segundos e não achou ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)). PvP e guildas massivas criaram rivalidade e comunidade, e o boca a boca levou a cerca de 1 milhão de contas sem marketing relevante.
- [H] **Travou por quatro motivos:**
  - monetização que vende ação (energia, pontos de missão, passos);
  - números sem teto, que inflacionam ouro e níveis;
  - dívida técnica: o criador diz que a fundação do jogo está "podre" ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/));
  - desenvolvedor solo, com os recursos desviados para o IdleMMO desde 2023 ([blog, nov/2023](https://www.galahadcreative.com/blog/another-update-on-simplemmo/)).
- [H] **Dependência de vitrine:** uma mudança de algoritmo da Google Play cortou a aquisição em mais de 95% ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)).
- [H] **O IdleMMO é o "SimpleMMO corrigido":** sem anúncios, sem venda de ação, com assinatura negociável no lugar do diamante de recarga, taxas como dreno e tempo idle no lugar de energia.

## 11. Do que os jogadores mais reclamam

- [C] **P2W por diamantes e energia.** O criador admite o lado P2W ([blog, mar/2021](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/)). O estúdio criou recargas por faixas para reduzir a distância entre pagantes e não pagantes ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)). Um review diz que vender diamantes dá vantagem em PvP ([App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406)).
- [C] **Banimentos por bot, verificação e apelações.** Das 10 reviews visíveis na App Store, 4 tratam disso: duas de banimento por automação ou após uma troca e duas sobre a verificação, inacessível para leitores de tela, o que deixa jogadores cegos com medo de banimento injusto ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)). Em out/2026, uma nova verificação anti-bot foi acrescentada ([log, v12.87.3](https://web.simple-mmo.com/updates)).
- [C] **Grind repetitivo e jogo parado.** Um review chama o jogo de repetitivo ([App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)), e o próprio estúdio admitiu meses sem novidades visíveis em 2023 ([blog, jul/2023](https://www.galahadcreative.com/blog/an-update-on-simplemmo/)).
- [F] **Nerfs econômicos:** mudanças de economia e combate em 2022 geraram revolta, segundo o estúdio ([blog, retrospectiva 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/)).
- [F] **Detecção de multicontas com falso positivo** ("mesmo dispositivo/rede") e desconexões no iOS (review de 2024 na [App Store](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone)).
- [NV] Threads do Reddit (r/SimpleMMO) não foram acessadas: o old.reddit está bloqueado e as buscas voltaram vazias.

## 12. Mecânicas-chave: o porquê

**Passo com evento aleatório** — Problema que resolve: uma ação ativa ultracurta e satisfatória · Emoção: curiosidade, "o que vem no próximo passo" · Comportamento: muitas sessões curtas por dia · Efeito colateral: grind repetitivo e alvo ideal para bots e autoclickers.

**Energia, pontos de missão e passos com recarga premium** — Problema: limitar o ritmo e monetizar · Emoção: urgência e frustração · Comportamento: compra de diamantes ou cogumelos · Efeito colateral: P2W percebido. O teto diário de cogumelos (125/180) foi o freio que o próprio jogo precisou criar.

**Mercado de diamantes por ouro** — Problema: dar ao gratuito acesso ao premium e ao pagante liquidez em ouro · Emoção: "dá para conseguir diamantes jogando" · Comportamento: farmar ouro para comprar premium · Efeito colateral: o preço do diamante em ouro escancara a inflação (cerca de 1 milhão de ouros por diamante).

**Guerra de guildas com fim, pontos de poder que decaem e opção PvE** — Problema: guerras sem fim e guildas mortas · Emoção: rivalidade com desfecho · Comportamento: atividade contínua · Efeito colateral: diamantes compram pontos de poder, o que leva o P2W para as guildas.

**Rankings diários, semanais e mensais pagando diamantes** — Problema: criar uma fonte gratuita de premium · Emoção: competição · Comportamento: grind ativo intenso · Efeito colateral: incentiva automação e premia quem tem mais tempo, não quem decide melhor.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - A "janela ativa curta" (um botão, recompensa variável, sessões de segundos) é o melhor complemento de um idle. Mas deve ser opcional e dar algo diferente do que o idle dá, sem ser obrigatória para acompanhar o ritmo.
  - Premium negociável num mercado oficial é um canal de RMT que dá ao gratuito acesso ao premium e ainda vira indicador econômico (preço do premium em ouro).
  - Guerras de guilda com condição de fim, cooldown entre as mesmas guildas, opção de ficar só no PvE e pontos de poder que decaem.
  - Teto diário para recargas, para que dinheiro compre conveniência e não volume ilimitado de ação.
- **Evitar:**
  - Vender ação (energia, passos, missões) com premium: gera P2W percebido e um incentivo enorme para bots.
  - Fontes de ouro que crescem com o nível sem teto, e níveis sem teto: inflação estrutural, difícil de reverter sem revolta.
  - Fundação técnica improvisada e dependência de uma pessoa.
  - Verificação anti-bot inacessível e banimento sem apelação clara: o jogo é de texto e atrai público com deficiência visual.
  - Anúncio em troca de ação e aquisição dependente de um único algoritmo de loja: o PWA ajuda a diversificar.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SimpleMMO | Web+Mobile | Híbrido | Parcial | 0 | Ativo | Simples | Troca+Listagem | Sim | Token | Sim | Assíncrono | Sim | Sim | Sim | Não | Não | Sim | Sim | Declínio |

Notas:
- "Token": diamantes comprados com dinheiro e vendidos por ouro no mercado de diamantes.
- "Gacha: Sim": baús abertos com chaves vendidas por diamantes (wiki de fãs via busca; o log oficial cita a página de compra de chaves). Confirmar.
- "Ads: Não" vale para 2026 pela declaração oficial; houve anúncios antes.
- "Perda de itens: Sim": roubo de ouro e drops em PvP.
- "Declínio" é análise [H] baseada na queda de aquisição e na migração de foco para o IdleMMO, não em dados de DAU.

## Fontes

1. [SimpleMMO, About](https://simple-mmo.com/about) — oficial — sem data (números desatualizados).
2. [SimpleMMO, log de atualizações (web)](https://web.simple-mmo.com/updates) — oficial — v12.75.0 a v12.87.5 (27/03 a 29/10/2026).
3. [SimpleMMO, log de atualizações (entradas antigas, vistas via busca)](https://simple-mmo.com/updates) — oficial — sem data.
4. [Galahad Creative, página do produto SimpleMMO](https://www.galahadcreative.com/showcase/simplemmo/) — oficial — 2026.
5. [Termos de Uso do SimpleMMO](https://www.galahadcreative.com/policies/terms/simplemmo/) — oficial — vigentes desde 15/12/2021, atualizados em 01/04/2023.
6. [Blog: SimpleMMO, How I made a hole a home](https://www.galahadcreative.com/blog/simplemmo-how-i-made-a-hole-a-home/) — oficial (criador) — 08/03/2021.
7. [Blog: SimpleMMO v9.0, Guilds, guilds, guilds!](https://www.galahadcreative.com/blog/simplemmo-v9-0-guilds-guilds-guilds/) — oficial — 19/03/2021.
8. [Blog: The Introduction of Player to Player Trading](https://www.galahadcreative.com/blog/the-introduction-of-trading/) — oficial — 17/08/2021.
9. [Blog: SimpleMMO, Looking Back on 2022](https://www.galahadcreative.com/blog/simplemmo-looking-back-on-2022-a-year-in-review/) — oficial — 09/01/2023.
10. [Blog: An update on SimpleMMO](https://www.galahadcreative.com/blog/an-update-on-simplemmo/) — oficial — 03/07/2023.
11. [Blog: Another update on SimpleMMO](https://www.galahadcreative.com/blog/another-update-on-simplemmo/) — oficial — 13/11/2023.
12. [Blog, índice p. 3](https://www.galahadcreative.com/blog/3/), [p. 4](https://www.galahadcreative.com/blog/4/) e [p. 5](https://www.galahadcreative.com/blog/5/) — oficial — títulos e datas de posts de 2021 a 2023.
13. [Blog IdleMMO: Economic Changes](https://www.galahadcreative.com/blog/idlemmo-economic-changes/) — oficial — 21/03/2026 (cita a inflação do SimpleMMO).
14. [Blog IdleMMO: Our Monetisation Strategy](https://www.galahadcreative.com/blog/our-monetisation-strategy/) — oficial — 20/12/2023, atualizado em 03/11/2025.
15. [SimpleMMO na App Store](https://apps.apple.com/app/simplemmo-mmorpg-pvp-rpg/id1606898406) — loja — nov/2026.
16. [SimpleMMO na App Store, avaliações](https://apps.apple.com/us/app/simplemmo-mmorpg-pvp-rpg/id1606898406?see-all=reviews&platform=iphone) — loja/comunidade — 2022–2024.
17. [AppGoblin, dawsn.simplemmo](https://appgoblin.info/apps/dawsn.simplemmo) — dados de terceiros — leitura de 04/11/2026.
18. [MobyGames: SimpleMMO](https://www.mobygames.com/game/154893/simplemmo/) — banco de dados — visto via busca (HTTP 403 no WebFetch).
19. [Wiki de fãs: Diamonds](https://simplemmo.fandom.com/wiki/Diamonds), [Gold](https://simplemmo.fandom.com/wiki/Gold), [Guilds](https://simplemmo.fandom.com/wiki/Guilds), [Plebeian Membership](https://simplemmo.fandom.com/wiki/Plebeian_Membership) e [guia "Clash's Guide to SMMO"](https://simplemmo.fandom.com/wiki/Clash's_Guide_to_SMMO) — comunidade — vistos via busca (HTTP 402 no WebFetch); idades variadas.
20. [Chrome Web Store: Simple Assistant](https://chrome.google.com/webstore/detail/simple-assistant/dpljccfbkelkodmmbnahgimhombjemll/reviews?hl=en) — comunidade — vista via busca.
