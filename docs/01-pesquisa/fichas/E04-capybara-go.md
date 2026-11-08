# Capybara Go!

| Campo | Valor |
|---|---|
| Grupo | E — Idle/AFK RPGs mobile de alto faturamento (híbrido hybrid-casual / roguelike idle) |
| Desenvolvedora / publicadora | Habby (China), a mesma de Archero |
| Lançamento | Soft launch na Coreia do Sul e em Taiwan em out/2024; lançamento mundial em nov/2024 (acesso nos EUA desde 20/nov/2024) |
| Plataformas | iOS, Android |
| Modelo de negócio | F2P híbrido: compras no app (maior parte) + anúncios recompensados + compras de energia; skins, montarias e acessórios |
| Status em 2026 | Estável a crescendo (o mais bem posicionado no recorte de idle RPG nos EUA em 2025) |

> **Por que esta escolha:** os dados de 2025 apontam Capybara Go! como o idle RPG de maior receita que ensina algo **diferente** de AFK Arena, Idle Heroes e Legend of Mushroom. Foi o líder dos rankings de Idle RPG da Sensor Tower nos EUA em 2025 e rendeu cerca de US$ 140 mi no ano, o 22º do ranking chinês de jogos no exterior [F] ([Tiger Brokers, resumo Sensor Tower, 13/jan/2026](https://www.itiger.com/news/1143976939); [Sensor Tower, Q3 2025 EUA Android](https://sensortower.com/blog/2025-q3-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb)). Seven Knights Idle Adventure, a outra sugestão, não apareceu em nenhum dado de receita que encontrei. A diferença: aqui a retenção vem de uma **partida curta de "dias" com eventos aleatórios e escolhas**, e não de heróis colecionáveis, e o dinheiro vem de tema fofo, meme viral e anúncios, não de gacha pesado.

> **Cartão-resumo:** "Roguelike de texto com elementos de idle RPG", com uma capivara que atravessa dias, eventos, batalhas automáticas e escolhas de habilidade. Passou de US$ 100 mi em 2 de fev/2025 (AppMagic) e rendeu ~US$ 140 mi em 2025 (Sensor Tower). Mistura o roguelike da Habby, o "cassino social" do Monopoly GO e os rerolls do Legend of Mushroom. **Lição nº 1:** uma sessão curta de escolhas (3 opções de habilidade, eventos aleatórios) dá a sensação de jogar sem ser pura espera, e a energia com recarga mais anúncios opcionais monetiza sem gacha de heróis.

## 1. Loop central

- **Cada "dia" avança num clique; eventos rodam sozinhos.** O jogador enfrenta escolhas aleatórias, batalhas, mini-jogos e escolhas de habilidade entre 3 opções. Não há movimento nem input durante a batalha, só metajogo e autoplay (sob o botão de viagem). O autor do estudo de UA chama o gênero de "Social Casino RPG" e compara com o Monopoly GO [F] ([Lancaric, case study de UA, 2024](https://lancaric.me/capybara-go-global-launch-ua-case-study/)).
- **Gênero oficial:** "roguelike baseado em texto com elementos de idle RPG" [F] ([PocketGamer.biz, fev/2025](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/); [TechNode, 19/dez/2024](https://technode.com/2024/12/19/capybara-go-takes-40-million-in-overseas-revenue-within-two-months-of-launch/)).
- **Cada corrida custa energia.** Uma página de estudo de caso de origem incerta descreve: 5 de energia por corrida, teto de 30, recarga com o tempo, mais 15 de energia por anúncio (duas vezes ao dia), 15 de energia por 90 gemas (quatro vezes ao dia) e um pacote grátis de 10 a cada 5 horas, com o excedente guardado na caixa de entrada [C] ([Mechanics Playbook, página de caso](https://mechanics-playbook-next.pages.dev/case-studies/capybara-go/), via trecho de busca; fonte de procedência não confirmada, trate os números como indício).
- **Modos secundários** dão duas tentativas grátis e mais duas atrás de anúncio, que alimentam as moedas e a energia; os baús mais baratos da loja oferecem "3+1" posições de anúncio por dia [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)).
- [H] A principal diferença para os outros três jogos é que a corrida é **curta e com decisões**; o idle é o "piloto automático" dentro da corrida, e não um baú de ausência.

## 2. Camadas de progressão e prestígio

- Progressão por **poder de combate** com capítulos de história e modo difícil; páginas de fãs listam o poder necessário para "pular" a história e o modo difícil [C] ([MeowDB](https://meowdb.com/db/capybara-go/combat-power-needed-to-skip-story-and-hard-mode)).
- Skins, montarias e acessórios são o caminho de personalização [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/)).
- Rerolls de atributos "carregados do Legend of Mushroom" [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)).
- Prestígio clássico: não encontrado. Os dois gachas de heróis dos outros jogos aparecem aqui menos centrais: as fontes não estabelecem um gacha claro [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/)), embora uma review cite "puxadas" com multiplicadores de 3x, 5x e 7x [C] (App Store, via trecho de busca). Taxas e pity: **não encontrados**.

## 3. Progresso offline

- **Praticamente não é um idle de ausência.** As fontes falam em "mecânicas passivas" e em jogar "no próprio ritmo", sem descrever acúmulo offline [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/)).
- O **limite de energia (30)** com recarga cumpre, em parte, o papel do baú com teto de horas: guarda trabalho para o jogador, mas em pedaços de 6 corridas [C] (Mechanics Playbook acima). [H] A mesma lógica de "janela de colheita" do AFK Arena, aplicada a corridas em vez de recompensas.

## 4. Ganchos de retenção (D1 / D7 / D30)

- Retenção em números: **não encontrada** (Lancaric não discute; Sensor Tower paga).
- [H] Ganchos prováveis: corrida curta, energia que recarrega, personalização fofa, atualizações de versão. A atualização 1.5 gerou o melhor dia (US$ 1,4 mi em 24/jan/2025, +64% sobre o dia anterior) [F] ([PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/)). Isso mostra que **atualização de conteúdo move receita**.
- **Viralidade:** o meme da capivara (um vídeo de TikTok de terceiros com 114 mi de visualizações) puxou instalações [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)).

## 5. Jogador ativo vs. jogador ausente

- A corrida exige presença (clicar em avançar), então o jogo atende mais ao **jogador de poucos minutos** do que ao ausente. Um avaliador diz que nunca ficou sem energia jogando cerca de 30 minutos por dia [C] (App Store, via trecho de busca).
- Anúncios recompensados oferecem atalho opcional ao ativo. Os anúncios são ligados a incentivos de compra, em alguns casos, para "empurrar" quem vê o anúncio para pagar por conveniência [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/)).
- Sem guerra de guildas nem PvP encontrados nas fontes; [NV] o jogo parece essencialmente solo.

## 6. Economia e moedas

- Moedas: energia, gemas, moedas de modos e materiais de rerroll (fontes parciais) [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)). Sem mercado entre jogadores [NV] (nenhuma fonte descreve).
- O **"inbox" que guarda a energia excedente** é um desenho amigável: o jogador não perde o que o jogo deu [C] (Mechanics Playbook). Vale como princípio: não destruir o que foi ganho.

## 7. Social

- Praticamente só **o meme**: a capivara como símbolo de virais [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/)). Multiplayer e amigos: não mencionados nas fontes. Fusão de servidor e guerra de guilda: não encontrados.

## 8. Monetização

- **IAP é a maior parte.** Uma análise de UA estimou US$ 600 a 700 mil/dia em IAP e ~US$ 100 mil/dia em anúncios (~20% da receita, estimativa do autor, não dado divulgado), num total próximo de US$ 800 mil/dia antes do lançamento nos EUA [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)). A AppMagic exclui anúncios do número de US$ 109 mi, então a receita total é maior [F] ([PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/)).
- **Modelo híbrido:** anúncios recompensados + IAP. Para jogos midcore no Android, o AppsFlyer reportou ROAS D90 de 146% para o híbrido, contra 93% só IAP e 58% só anúncios [C] (resumo de busca, relatório AppsFlyer não aberto).
- **Preços de pacotes e passes:** não encontrados (a App Store Singapura bloqueou a leitura).
- **Divulgação de probabilidades:** o jogo vende principalmente na Coreia (28% do gasto mundial), Taiwan (17%) e EUA (15%) [F] ([PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/)). A Coreia exige a divulgação das probabilidades de itens por sorteio desde 2024 (ver [E01](E01-afk-arena-e-afk-journey.md)). Taxas deste jogo: não encontradas. O Brasil proíbe loot box para menores: `05b-rmt-legal-brasil.md`.

## 9. Números disponíveis (com fonte)

Todas são estimativas de terceiros.

- **Sensor Tower (via TechNode, 19/dez/2024):** US$ 40 mi de receita no exterior até 11/dez/2024; receita triplicou em nov/2024; 9º no ranking de jogos chineses no exterior em novembro; o de maior crescimento na Coreia [F] ([TechNode](https://technode.com/2024/12/19/capybara-go-takes-40-million-in-overseas-revenue-within-two-months-of-launch/)).
- **AppMagic (via PocketGamer.biz):** US$ 100 mi de gasto bruto em 2/fev/2025, US$ 109 mi até 10/fev; pico mensal de US$ 33,3 mi em dez/2024 e US$ 32,1 mi em jan/2025; Coreia US$ 30,1 mi, Taiwan US$ 18,7 mi, EUA US$ 16,1 mi desde 20/nov. [F] ([PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/)). Downloads de 11 mi em um momento anterior (AppMagic, via busca).
- **Sensor Tower, ano de 2025:** ~US$ 140 mi, 22º no ranking chinês de jogos no exterior; a Habby cresceu 35% e foi a 9ª entre os publishers chineses [F] ([Tiger Brokers, 13/jan/2026](https://www.itiger.com/news/1143976939)).
- **EUA, Android (semanal, Sensor Tower):** Q1/2025 de ~US$ 436 mil a ~US$ 283 mil; Q2 de ~US$ 280 mil a ~US$ 153 mil; Q3 com pico de ~US$ 438 mil no início de set/2025. No mesmo recorte, Legend of Mushroom teve ~US$ 219 mil como melhor semana do Q3 [F] ([Sensor Tower, Q1](https://sensortower.com/blog/2025-q1-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb); [Q2](https://sensortower.com/blog/2025-q2-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb); [Q3](https://sensortower.com/blog/2025-q3-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb), valores lidos via trechos de busca).
- **Nota na App Store:** cerca de 4,67/5, com ~516 mil avaliações, segundo um rastreador de terceiros [C] (trecho de busca, não confirmado na loja).

## 10. Por que deu certo

- **Fórmula Habby:** o template de roguelike com ramificação de Archero, o autoplay do Monopoly GO e os rerolls do Legend of Mushroom [F] ([Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/)). [H] É uma combinação testada, com UA forte (Google, Facebook, TikTok, Unity).
- **Tema universal e viral:** a capivara fofa abre o público além do RPG tradicional [F] (Lancaric).
- **Soft launch longo:** 2,5 meses de soft launch antes do mundial [F] ([PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/)).
- **Monetização por conveniência:** energia e anúncios opcionais, que podem soar menos agressivos que gacha. [H] Mas há reclamações (abaixo).

## 11. Do que os jogadores mais reclamam

Dados anedóticos (não consegui contar em volume; Reddit bloqueado):

- **Pay-to-win mais adiante:** um avaliador diz que, a partir de certo capítulo, é preciso "ver um milhão de anúncios" ou pagar [C] (App Store SG, via trecho de busca); um review do Sensor Tower diz "pay to win demais" [C] ([Sensor Tower, página do app](https://app.sensortower.com/api/ios/apps/6596787726?country=US)).
- **Anúncios longos** (25 a 30 segundos) e opção de pets que só mostra anúncio [C] (App Store, via trecho de busca).
- **Multiplicadores de puxada** (3x, 5x, 7x) que deixam saldo sobrando [C] (idem).
- **Contraponto:** outro avaliador nunca ficou sem energia com 30 minutos por dia [C] (idem).
- Nenhuma fonte profissional critica o jogo [F] ([Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/), sem críticas), ou seja, o contraditório vem só de reviews de loja.

## 12. Mecânicas-chave: o porquê

**Corrida de "dias" com eventos aleatórios e 3 escolhas de habilidade** — Problema: dar decisão sem exigir reflexo · Emoção: "caça-níqueis com cérebro" · Comportamento: abrir para uma corrida de poucos minutos · Efeito colateral: corrida exige presença, o ausente não ganha.

**Energia com teto e recarga (5 por corrida, teto 30)** — Problema: limitar sessões e criar retorno · Emoção: alívio de não perder o que a recarga deu (com o inbox) · Comportamento: 2 a 3 sessões por dia · Efeito colateral: compra de energia por gemas e anúncios vira ponto de pagamento.

**Anúncio recompensado ligado a oferta de compra** — Problema: monetizar o não-pagante · Emoção: ganho "grátis" · Comportamento: assistir e, às vezes, comprar a conveniência · Efeito colateral: anúncios longos e a sensação de "ver milhões de anúncios".

**Tema meme (capivara)** — Problema: aquisição barata e viral · Emoção: carinho · Comportamento: compartilhamento · Efeito colateral: dependência de modismo.

**Atualização de versão como pico de receita** — Problema: manter receita sem gacha novo de herói · Comportamento: retorno do ex-jogador · Efeito colateral: cadência de conteúdo vira obrigação.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Sessão curta de **decisões significativas** (escolhas entre 3 opções, eventos) como camada "ativa" opcional, que dá bônus ao ativo sem punir o ausente.
  - Energia/recarga com **inbox que guarda o excedente**: nada que o jogador ganhou se perde.
  - Anúncios recompensados **opcionais e curtos**; vale testar um "passe sem anúncios" justo (preço baixo) em vez de comprar conveniência.
  - Tema e identidade fortes (meme, mascote) para aquisição orgânica; atualização com conteúdo novo como pico de retorno.
- **Evitar:**
  - Capítulos que só avançam com "milhões de anúncios" ou com pagamento (muro de pagamento).
  - Multiplicadores de puxada que deixam saldo inútil.
  - Anúncios longos e ofertas de compra grudadas ao anúncio.
  - Falta de transparência de taxas num jogo vendido em mercados com regra de divulgação.
  - Nenhum socia/economia de jogadores: Capybara Go! prova que se vende sem, mas nada disso ajuda o nosso eixo multiplayer.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Capybara Go! | Mobile | F2P | Parcial | ? | Auto | Não | Nenhum | Não | Nenhum | ? | ? | ? | ? | Sim | Sim | ? | ? | Não | Crescendo |

## Fontes

1. [Sensor Tower: Top 30 Chinese mobile game publishers 2025, Tiger Brokers](https://www.itiger.com/news/1143976939) — imprensa (Sensor Tower) — 13/jan/2026.
2. [Habby's Capybara Go surpasses $100m in gross player spending, PocketGamer.biz](https://www.pocketgamer.biz/habbys-capybara-go-surpasses-100m-in-gross-player-spending/) — imprensa (AppMagic) — fev/2025.
3. [Capybara Go takes $40 million in overseas revenue, TechNode](https://technode.com/2024/12/19/capybara-go-takes-40-million-in-overseas-revenue-within-two-months-of-launch/) — imprensa (Sensor Tower) — 19/dez/2024.
4. [Capybara GO Global Launch UA Case Study, Lancaric](https://lancaric.me/capybara-go-global-launch-ua-case-study/) — análise — 2024.
5. [Capybara Go, Friendly GameDev](https://friendlygamedev.com/game-reviews/capybara-go/) — opinião — data não encontrada.
6. [Sensor Tower, Top 5 Idle RPG EUA Android Q1](https://sensortower.com/blog/2025-q1-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb), [Q2](https://sensortower.com/blog/2025-q2-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb), [Q3](https://sensortower.com/blog/2025-q3-android-top-5-idle%20rpg-revenue-us-6040bbc2241bc16eb883a0cb) — dados — 2025 (via busca).
7. [Mechanics Playbook, Capybara Go](https://mechanics-playbook-next.pages.dev/case-studies/capybara-go/) — análise de procedência incerta (via busca).
8. [MeowDB, poder de combate](https://meowdb.com/db/capybara-go/combat-power-needed-to-skip-story-and-hard-mode) — fã/comunidade.
9. [Sensor Tower, página do app (iOS US)](https://app.sensortower.com/api/ios/apps/6596787726?country=US); [App Store SG](https://apps.apple.com/sg/app/capybara-go/id6596787726) — loja/dados (via busca).
10. [E01, AFK Arena e AFK Journey](E01-afk-arena-e-afk-journey.md) — ficha irmã.
