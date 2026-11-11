# Padrões, matriz comparativa e leis do design idle

> Seção 1.2 do briefing. Junta o que as 49 fichas mostram com a teoria do [02a — Teoria do design idle](02a-teoria-design-idle.md). Cada afirmação remete à ficha que a sustenta; as fontes externas estão nas fichas. Etiquetas: [F] fato com fonte, [C] consenso da comunidade, [H] leitura do estúdio.

## Resumo executivo

**O que os sucessos duradouros têm em comum** [H]: camadas descobríveis ao longo de anos, cada uma mudando uma regra; respeito ao jogador ausente, que decide antes de sair e nunca perde; um laço social que dá motivo para voltar sem exigir plantão; economia com destruição real de itens; um canal oficial de RMT mais barato e seguro que o mercado negro; monetização que não vende a espera; e um estúdio que publica dados e cumpre o que promete.

**O que os fracassos têm em comum** [H]: dinheiro real saindo do jogo (saque ou leilão em dinheiro); venda de tempo, ausência, ação ou automação; confiança no cliente e transferências sem garantia de atomicidade; fontes de moeda sem teto; dependência de um terceiro (Flash, portal, provedor de pagamento); falta de conteúdo no lançamento; e mudanças estruturais ou monetárias sem aviso.

**O que a matriz de 56 jogos mostra:**
- Perda de itens aparece em 16 dos 29 jogos com mercado entre jogadores, contra 1 dos 27 sem mercado.
- O token é o RMT oficial dominante: 16 jogos, dos quais 12 estão estáveis ou crescendo.
- Dos 6 jogos com saque ou leilão em dinheiro real, 5 estão em declínio. Os casos de alerta foram escolhidos por terem dado errado, mas nenhum modelo com saque direto sobreviveu bem.
- Offline parcial, com teto, é a norma (39 de 56).

**Leis:** 14 leis de design idle (do 02a) e 8 leis novas de economia multiplayer, que saem das fichas.

## 1. O que os sucessos têm em comum

| # | Padrão | Evidência nas fichas | Por que funciona [H] |
|---|---|---|---|
| 1 | **Camadas descobríveis por anos, cada uma mudando uma regra** | Cookie Clicker: mais de 10 anos, 18 prédios, 639 conquistas, 96% positivas ([A01](fichas/A01-cookie-clicker.md)); Antimatter Dimensions: cada camada de prestígio reinventa o jogo ([A06](fichas/A06-antimatter-dimensions.md)); KoL: 3 paths novos por ano ([D03](fichas/D03-kingdom-of-loathing.md)); Torn: mais de 20 anos de pequenas atualizações ([D01](fichas/D01-torn.md)) | Novidade de regra renova o domínio; "o mesmo, mais rápido" cansa. |
| 2 | **O ausente decide antes de sair e nunca perde** | Melvor: 24 h simuladas na volta ([B01](fichas/B01-melvor-idle.md)); IdleOn: taxa ausente visível e melhorável ([B02](fichas/B02-legends-of-idleon.md)); EVE: treino de skills offline ([F01](fichas/F01-eve-online.md)); KoL: até 5 dias de turnos acumulados ([D03](fichas/D03-kingdom-of-loathing.md)) | O jogador se sente esperto pelo plano, não refém do relógio. |
| 3 | **Laço social que dá motivo para voltar sem exigir plantão** | Egg Inc.: contratos co-op com prazo e nota individual ([A09](fichas/A09-egg-inc.md)); Tap Titans 2: raids de 30 s a cada 12 h ([B06](fichas/B06-tap-titans-2.md)); Idle Clans: clã com progressão própria ([C02](fichas/C02-idle-clans.md)); S&F: guerra com inscrição ([D02](fichas/D02-shakes-and-fidget.md)) | Compromisso com o grupo é o gancho mais forte de retenção, desde que o ausente não vire peso. |
| 4 | **Economia como conteúdo, com destruição real** | EVE: ~1,14 quatrilhão de ISK destruídos em 2025 ([F01](fichas/F01-eve-online.md)); Albion: equipamento como consumível ([F02](fichas/F02-albion-online.md)); PoE: moedas que são consumíveis de crafting ([F05](fichas/F05-path-of-exile.md)); MWI: especialização e livro de ordens ([C01](fichas/C01-milky-way-idle.md)) | Destruição cria demanda permanente para quem produz e segura a inflação. |
| 5 | **Canal oficial de RMT mais barato e seguro que o mercado negro** | Bonds: riqueza do gold farming −80% em um mês ([F03](fichas/F03-runescape-e-osrs.md)); Donator Pack do Torn abaixo do preço de sites de RMT ([D01](fichas/D01-torn.md)); Char Bazaar do Tibia ([F04](fichas/F04-tibia.md)); 65% obtêm a membership do IdleMMO com ouro ([C04](fichas/C04-idlemmo.md)) | Quem pagaria ao mercado negro paga ao estúdio, e quem não paga recebe o valor via mercado. |
| 6 | **Monetização que não vende a espera nem o poder** | PoE: cosmético e conveniência ([F05](fichas/F05-path-of-exile.md)); Soda Dungeon 2: promessa pública e 93% positivas ([B04](fichas/B04-soda-dungeon.md)); Melvor: premium + expansões ([B01](fichas/B01-melvor-idle.md)) | Confiança vira ativo de marca num gênero cheio de armadilhas. |
| 7 | **Dados públicos e comunicação** | EVE: relatórios econômicos mensais ([F01](fichas/F01-eve-online.md)); Torn: economista, relatório anual e API ([D01](fichas/D01-torn.md)); MWI: `marketplace.json` horário ([C01](fichas/C01-milky-way-idle.md)); OSRS: enquetes com limiar de aprovação ([F03](fichas/F03-runescape-e-osrs.md)) | Quem entende a regra aceita o dreno e confia na política monetária. |
| 8 | **Recomeço justo e periódico** | OSRS Leagues: ~241 mil simultâneos em 2025 ([F03](fichas/F03-runescape-e-osrs.md)); New World Fresh Start acima da expansão paga ([G04](fichas/G04-new-world.md)); servidores do S&F a cada ~6 semanas ([D02](fichas/D02-shakes-and-fidget.md)); rodadas do Travian ([D05](fichas/D05-travian.md)); ligas do PoE ([F05](fichas/F05-path-of-exile.md)) | Igualdade de largada reativa veteranos e atrai novatos. |

## 2. O que os fracassos têm em comum

| # | Padrão | Evidência nas fichas | Mecanismo do dano [H] |
|---|---|---|---|
| 1 | **Dinheiro real saindo do jogo** | Diablo III ([G01](fichas/G01-diablo-3-casa-de-leilao.md)); Entropia ([G02](fichas/G02-entropia-universe.md)); Axie ([G03](fichas/G03-axie-infinity-e-web3.md)); Banana ([G05](fichas/G05-banana-e-bongo-cat.md)); Lucent do Throne and Liberty ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)) | O jogador vira trabalhador, o bot vira o jogador ótimo e todo ajuste parece roubo. |
| 2 | **Vender tempo, ausência, ação ou automação** | Horas offline do MWI ([C01](fichas/C01-milky-way-idle.md)); "+30% AFK gains" do IdleOn ([B02](fichas/B02-legends-of-idleon.md)); energia do SimpleMMO ([C05](fichas/C05-simplemmo.md)); VIP que amplia o baú no AFK Arena ([E01](fichas/E01-afk-arena-e-afk-journey.md)); modo férias pago do S&F ([D02](fichas/D02-shakes-and-fidget.md)); aceleração no OGame e no Travian ([D04](fichas/D04-ogame.md), [D05](fichas/D05-travian.md)) | Num idle, a espera é o jogo: vender o fim dela é vender o fim do jogo. |
| 3 | **Confiar no cliente e transferir sem atomicidade** | Dupes e invulnerabilidade do New World ([G04](fichas/G04-new-world.md)); save editável do Melvor ([B01](fichas/B01-melvor-idle.md)); injetor de cheats do IdleOn ([B02](fichas/B02-legends-of-idleon.md)); MapleStory europeu sem rollback ([G07](fichas/G07-economias-que-colapsaram.md)) | Uma falha de consistência vira inflação em horas. |
| 4 | **Fontes de moeda sem teto** | SimpleMMO ([C05](fichas/C05-simplemmo.md)); Ultima Online e Lost Ark ([G07](fichas/G07-economias-que-colapsaram.md)); liga Standard do PoE ([F05](fichas/F05-path-of-exile.md)); mesas de missões do WoW ([F06](fichas/F06-world-of-warcraft.md)) | Renda que cresce com tempo, nível e número de contas é inflação estrutural. |
| 5 | **Dependência externa e falta de conteúdo** | Fim do Flash e do Kongregate ([G06](fichas/G06-idles-que-morreram.md)); provedor de pagamento único do Idlescape ([C03](fichas/C03-idlescape.md)); poucos dias de conteúdo no Clicker Heroes 2 ([A02](fichas/A02-clicker-heroes.md)); premium barato de cauda curta ([A10](fichas/A10-nova-onda-idle-2023-2026.md)) | O jogo morre por um interruptor que o estúdio não controla, ou por um penhasco no D7. |
| 6 | **Mudança estrutural ou monetária sem aviso** | Imposto do EVE sem explicação ([F01](fichas/F01-eve-online.md)); piso do point retirado no Torn ([D01](fichas/D01-torn.md)); câmbio fixo reajustado no Black Desert ([F08](fichas/F08-black-desert.md)); nerf no início de temporada do AFK Journey ([E01](fichas/E01-afk-arena-e-afk-journey.md)); NGE do Star Wars Galaxies e Harvest do PoE ([03](03-alem-do-idle.md)) | Quem planejou é punido, e o jogador ausente, que só planeja, é o mais punido. |
| 7 | **Opacidade e punição sem apelação** | Banimentos opacos no OGame e no Travian ([D04](fichas/D04-ogame.md), [D05](fichas/D05-travian.md)); requisitos "?" do Realm Grinder ([A04](fichas/A04-realm-grinder.md)); economia de baús do Idle Champions ([B03](fichas/B03-idle-champions.md)) | Veteranos, que escrevem as reviews negativas, reclamam de traição, não de tédio ([B01](fichas/B01-melvor-idle.md), [B02](fichas/B02-legends-of-idleon.md)). |
| 8 | **Poder pago concentrado na largada ou na temporada** | Servidores novos do S&F ([D02](fichas/D02-shakes-and-fidget.md)); títulos permanentes do passe no Tap Titans 2 ([B06](fichas/B06-tap-titans-2.md)); roupas que viram material no Black Desert ([F08](fichas/F08-black-desert.md)) | A competição justa, que é a razão da temporada, vira leilão. |

## 3. Matriz comparativa: mecânicas × jogos

56 jogos de 47 fichas. Algumas fichas cobrem mais de um jogo, e as coletâneas G06 e G07 ficam de fora. Os valores seguem a seção 6 da [METODOLOGIA](METODOLOGIA.md); `?` significa não verificado. Ressalva: os casos de alerta (grupo G) foram escolhidos por terem dado errado, o que infla o "Declínio" entre os jogos com dinheiro real.

### 3.1 Desenho, plataforma e negócio

| Ficha | Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Status |
|---|---|---|---|---|---|---|---|---|
| [A01](fichas/A01-cookie-clicker.md) | Cookie Clicker | Web+PC+Mobile | Premium | Parcial | 1 | Nenhum | Não | Estável |
| [A02](fichas/A02-clicker-heroes.md) | Clicker Heroes (CH1) | Web+PC+Mobile | F2P | Parcial | 2 | Híbrido | Não | Estável |
| [A02](fichas/A02-clicker-heroes.md) | Clicker Heroes 2 | PC | Premium | ? | ? | Híbrido | Não | Encerrado |
| [A03](fichas/A03-adventure-capitalist.md) | AdVenture Capitalist | Web+PC+Mobile | F2P | Total | 1 | Nenhum | Não | Estável |
| [A04](fichas/A04-realm-grinder.md) | Realm Grinder | Web+PC+Mobile | F2P | Parcial | 3+ | Nenhum | Não | Estável |
| [A05](fichas/A05-ngu-idle.md) | NGU Idle | Web+PC | F2P | Parcial | 2 | Auto | Não | Estável |
| [A06](fichas/A06-antimatter-dimensions.md) | Antimatter Dimensions | Web+PC+Mobile | F2P | Parcial | 3+ | Nenhum | Não | Estável |
| [A07](fichas/A07-kittens-game.md) | Kittens Game | Web+PC+Mobile | Premium | Parcial | 2 | Nenhum | Simples | Estável |
| [A08](fichas/A08-trimps.md) | Trimps | Web+PC | F2P | Parcial | 3+ | Auto | Não | Estável |
| [A09](fichas/A09-egg-inc.md) | Egg, Inc. | Mobile | F2P | Parcial | 2 | Nenhum | Simples | Estável |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | (the) Gnorp Apologue | PC | Premium | Parcial | 3+ | Nenhum | Não | Declínio |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Nodebuster | PC | Premium | ? | 2 | Nenhum | Não | Declínio |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Revolution Idle | PC | F2P | Parcial | 3+ | Nenhum | Não | Estável |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Rusty's Retirement | PC | Premium | Parcial | 0 | Nenhum | Simples | Estável |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | The Tower – Idle Tower Defense | Mobile | F2P | Parcial | 2 | Auto | Não | Estável |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Melvor Idle 2 (acesso antecipado 17/nov/2026) | PC | Premium | Total | 1 | Auto | Profundo | Crescendo |
| [A11](fichas/A11-scapewatch.md) | Scapewatch: Idle MMO | Web+PC+Mobile | Híbrido | Parcial | 0 | Auto | Profundo | Crescendo |
| [A12](fichas/A12-deep-vein-idle.md) | Deep Vein Idle | Web+Mobile | F2P | Parcial | 0 | Auto | Profundo | Crescendo |
| [B01](fichas/B01-melvor-idle.md) | Melvor Idle | Web+PC+Mobile | Premium | Parcial | 0 | Auto | Profundo | Declínio |
| [B02](fichas/B02-legends-of-idleon.md) | Legends of IdleOn | Web+PC+Mobile | F2P | Total | 0 | Híbrido | Profundo | Estável |
| [B03](fichas/B03-idle-champions.md) | Idle Champions | PC+Mobile | F2P | ? | 1 | Auto | Não | Estável |
| [B04](fichas/B04-soda-dungeon.md) | Soda Dungeon 1 e 2 | Mobile+PC | F2P | Parcial | 1 | Auto | Simples | Estável |
| [B05](fichas/B05-idle-slayer.md) | Idle Slayer | Mobile+PC | F2P | Parcial | 2 | Híbrido | Simples | Estável |
| [B06](fichas/B06-tap-titans-2.md) | Tap Titans 2 | Mobile | F2P | Parcial | 1 | Ativo | Não | Estável |
| [C01](fichas/C01-milky-way-idle.md) | Milky Way Idle | Web+PC | F2P | Parcial | 0 | Auto | Profundo | Estável |
| [C02](fichas/C02-idle-clans.md) | Idle Clans | PC+Mobile | F2P | Parcial | 0 | Auto | Profundo | Estável |
| [C03](fichas/C03-idlescape.md) | Idlescape | Web+PC | F2P | Parcial | 0 | Auto | Profundo | Encerrado |
| [C04](fichas/C04-idlemmo.md) | IdleMMO | Web+Mobile | Híbrido | Parcial | 0 | Auto | Profundo | Estável |
| [C05](fichas/C05-simplemmo.md) | SimpleMMO | Web+Mobile | Híbrido | Parcial | 0 | Ativo | Simples | Declínio |
| [C06](fichas/C06-shop-titans.md) | Shop Titans | PC+Mobile | F2P | Parcial | 0 | Auto | Profundo | Declínio |
| [D01](fichas/D01-torn.md) | Torn | Web+Mobile | F2P | Parcial | 0 | Híbrido | Simples | Crescendo |
| [D02](fichas/D02-shakes-and-fidget.md) | Shakes & Fidget | Web+PC+Mobile | F2P | Parcial | 1 | Auto | Não | Estável |
| [D03](fichas/D03-kingdom-of-loathing.md) | Kingdom of Loathing | Web | F2P | Parcial | 1 | Ativo | Simples | Estável |
| [D04](fichas/D04-ogame.md) | OGame | Web+Mobile | F2P | Parcial | 0 | Híbrido | Simples | Estável |
| [D05](fichas/D05-travian.md) | Travian | Web+Mobile | F2P | Parcial | 0 | Híbrido | Simples | Estável |
| [E01](fichas/E01-afk-arena-e-afk-journey.md) | AFK Arena / AFK Journey | Mobile | F2P | Parcial | 1 | Auto | Não | Declínio (Arena) / Estável (Journey) |
| [E02](fichas/E02-idle-heroes.md) | Idle Heroes | Mobile | F2P | Parcial | 0 | Auto | Não | Estável |
| [E03](fichas/E03-legend-of-mushroom.md) | Legend of Mushroom | Mobile | F2P | Parcial | 0 | Auto | Não | Estável |
| [E04](fichas/E04-capybara-go.md) | Capybara Go! | Mobile | F2P | Parcial | ? | Auto | Não | Crescendo |
| [F01](fichas/F01-eve-online.md) | EVE Online | PC | Híbrido | Parcial | 0 | Ativo | Profundo | Estável |
| [F02](fichas/F02-albion-online.md) | Albion Online | PC+Mobile | F2P | Parcial | 0 | Ativo | Profundo | Estável |
| [F03](fichas/F03-runescape-e-osrs.md) | Old School RuneScape | PC+Mobile | Híbrido | Parcial | 0 | Híbrido | Profundo | Crescendo |
| [F03](fichas/F03-runescape-e-osrs.md) | RuneScape (RS3) | PC+Mobile | Híbrido | Parcial | 0 | Híbrido | Profundo | ? |
| [F04](fichas/F04-tibia.md) | Tibia | PC | Híbrido | Parcial | 0 | Ativo | Simples | Crescendo |
| [F05](fichas/F05-path-of-exile.md) | Path of Exile 1 e 2 | PC | F2P | Não | 1 | Ativo | Não | Estável |
| [F06](fichas/F06-world-of-warcraft.md) | World of Warcraft | PC | Assinatura | Parcial | 0 | Ativo | Profundo | Estável |
| [F07](fichas/F07-guild-wars-2.md) | Guild Wars 2 | PC | Híbrido | Não | 0 | Ativo | Profundo | Estável |
| [F08](fichas/F08-black-desert.md) | Black Desert | PC+Console | Híbrido | Não | 0 | Ativo | Profundo | Estável |
| [F09](fichas/F09-throne-and-liberty-e-lost-ark.md) | Throne and Liberty | PC+Console | F2P | Não | 0 | Ativo | Simples | Declínio |
| [F09](fichas/F09-throne-and-liberty-e-lost-ark.md) | Lost Ark | PC | F2P | Não | 0 | Ativo | Simples | Declínio |
| [G01](fichas/G01-diablo-3-casa-de-leilao.md) | Diablo III (era RMAH, 2012–2014) | PC | Premium | Não | 0 | Ativo | Simples | Declínio |
| [G02](fichas/G02-entropia-universe.md) | Entropia Universe | PC | F2P | Não | 0 | Ativo | Profundo | Declínio |
| [G03](fichas/G03-axie-infinity-e-web3.md) | Axie Infinity | PC+Mobile | Híbrido | Não | 0 | Ativo | Não | Declínio |
| [G04](fichas/G04-new-world.md) | New World (Aeternum) | PC | Híbrido | Não | 0 | Ativo | Profundo | Declínio |
| [G05](fichas/G05-banana-e-bongo-cat.md) | Banana | PC | F2P | Não | 0 | Nenhum | Não | Declínio |
| [G05](fichas/G05-banana-e-bongo-cat.md) | Bongo Cat | PC | F2P | Não | 0 | Nenhum | Não | Estável |

### 3.2 Economia, social e monetização

| Ficha | Jogo | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [A01](fichas/A01-cookie-clicker.md) | Cookie Clicker | Nenhum | Não | Nenhum | Não | Nenhum | Sim | Sim | Não | ? | Não | Não | Não |
| [A02](fichas/A02-clicker-heroes.md) | Clicker Heroes (CH1) | Nenhum | Não | Nenhum | Sim | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A02](fichas/A02-clicker-heroes.md) | Clicker Heroes 2 | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A03](fichas/A03-adventure-capitalist.md) | AdVenture Capitalist | Nenhum | Não | Nenhum | Não | Nenhum | Não | Sim | Não | Sim | ? | ? | Não |
| [A04](fichas/A04-realm-grinder.md) | Realm Grinder | Nenhum | Não | Nenhum | Não | Nenhum | Não | Sim | Não | ? | Não | Não | Não |
| [A05](fichas/A05-ngu-idle.md) | NGU Idle | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | ? | Não | Não | Não |
| [A06](fichas/A06-antimatter-dimensions.md) | Antimatter Dimensions | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A07](fichas/A07-kittens-game.md) | Kittens Game | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A08](fichas/A08-trimps.md) | Trimps | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A09](fichas/A09-egg-inc.md) | Egg, Inc. | Nenhum | Não | Nenhum | Não | Nenhum | Sim | Sim | Não | Sim | Não | Sim | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | (the) Gnorp Apologue | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Nodebuster | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Revolution Idle | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | ? | ? | ? | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Rusty's Retirement | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | The Tower – Idle Tower Defense | Nenhum | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Não | Sim | Sim | Sim | Não |
| [A10](fichas/A10-nova-onda-idle-2023-2026.md) | Melvor Idle 2 (acesso antecipado 17/nov/2026) | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [A11](fichas/A11-scapewatch.md) | Scapewatch: Idle MMO | ? | Não | Nenhum | Sim | Nenhum | Não | Sim | Não | Não | Não | Não | ? |
| [A12](fichas/A12-deep-vein-idle.md) | Deep Vein Idle | Troca+Livro | Não | Nenhum | Sim | Nenhum | Não | Sim | Não | Não | Não | Sim | ? |
| [B01](fichas/B01-melvor-idle.md) | Melvor Idle | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Sim |
| [B02](fichas/B02-legends-of-idleon.md) | Legends of IdleOn | Troca | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Sim | ? | Não | Não | Não |
| [B03](fichas/B03-idle-champions.md) | Idle Champions | Nenhum | Não | Nenhum | Não | Nenhum | Sim | Sim | Sim | Não | ? | ? | Não |
| [B04](fichas/B04-soda-dungeon.md) | Soda Dungeon 1 e 2 | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Sim | Não | Não | Não |
| [B05](fichas/B05-idle-slayer.md) | Idle Slayer | Nenhum | Não | Nenhum | Não | Nenhum | Não | Sim | Não | Sim | Não | Sim | Não |
| [B06](fichas/B06-tap-titans-2.md) | Tap Titans 2 | Nenhum | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Sim | Sim | Sim | Sim | Não |
| [C01](fichas/C01-milky-way-idle.md) | Milky Way Idle | Livro | Sim | Token | Sim | Nenhum | Não | Sim | Não | Não | Não | Sim | Não |
| [C02](fichas/C02-idle-clans.md) | Idle Clans | Livro | Sim | Token | Sim | Nenhum | Não | Sim | Não | Não | Não | Sim | Sim |
| [C03](fichas/C03-idlescape.md) | Idlescape | Listagem+Livro | ? | Nenhum | Sim | Nenhum | Sim | Sim | Não | Não | Não | Sim | ? |
| [C04](fichas/C04-idlemmo.md) | IdleMMO | Troca+Listagem+Livro+Leilão | Sim | Token | Sim | Assíncrono+Território | Sim | Sim | Não | Não | Não | Sim | Não |
| [C05](fichas/C05-simplemmo.md) | SimpleMMO | Troca+Listagem | Sim | Token | Sim | Assíncrono | Sim | Sim | Sim | Não | Não | Sim | Sim |
| [C06](fichas/C06-shop-titans.md) | Shop Titans | Livro | Sim | Token | Sim | Nenhum | Não | Sim | Sim | Não | Sim | Sim | Sim |
| [D01](fichas/D01-torn.md) | Torn | Troca+Listagem+Leilão | Sim | Token | Sim | Assíncrono+Território | Não | Sim | Não | Não | Não | Sim | Sim |
| [D02](fichas/D02-shakes-and-fidget.md) | Shakes & Fidget | Nenhum | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Sim | Sim | Não | Sim | Não |
| [D03](fichas/D03-kingdom-of-loathing.md) | Kingdom of Loathing | Troca+Listagem | Sim | Token | Sim | Assíncrono | Sim | Sim | Não | Não | Não | Sim | Não |
| [D04](fichas/D04-ogame.md) | OGame | Troca | Não | Nenhum | Sim | Síncrono+Território | Sim | Sim | Não | ? | ? | Sim | Sim |
| [D05](fichas/D05-travian.md) | Travian | Troca | Não | Nenhum | Sim | Síncrono+Território | Sim | Sim | Não | ? | ? | Sim | Sim |
| [E01](fichas/E01-afk-arena-e-afk-journey.md) | AFK Arena / AFK Journey | Nenhum | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Sim | Sim | Sim | Sim | Não |
| [E02](fichas/E02-idle-heroes.md) | Idle Heroes | Nenhum | Não | Nenhum | Sim | Assíncrono | Não | Sim | Sim | ? | Sim | Sim | Não |
| [E03](fichas/E03-legend-of-mushroom.md) | Legend of Mushroom | Nenhum | Não | Nenhum | Sim | Assíncrono | Não | Sim | Sim | Sim | Sim | ? | Não |
| [E04](fichas/E04-capybara-go.md) | Capybara Go! | Nenhum | Não | Nenhum | ? | ? | ? | ? | Sim | Sim | ? | ? | Não |
| [F01](fichas/F01-eve-online.md) | EVE Online | Livro+Troca+Leilão | Sim | Token | Sim | Síncrono+Território | Não | Sim | ? | Não | ? | Sim | Sim |
| [F02](fichas/F02-albion-online.md) | Albion Online | Livro+Troca | Sim | Token | Sim | Síncrono+Território | Sim | Sim | ? | Não | ? | Sim | Sim |
| [F03](fichas/F03-runescape-e-osrs.md) | Old School RuneScape | Troca+Livro | Sim | Token | Sim | Síncrono | Sim | Sim | Não | Não | Não | Sim | Sim |
| [F03](fichas/F03-runescape-e-osrs.md) | RuneScape (RS3) | Troca+Livro | Sim | Token | Sim | Síncrono | ? | Sim | Não | Não | Não | Sim | Sim |
| [F04](fichas/F04-tibia.md) | Tibia | Troca+Listagem+Leilão | Sim | Token+Personagem+Saque-$ | Sim | Síncrono | Não | Sim | Não | Não | Não | Sim | Sim |
| [F05](fichas/F05-path-of-exile.md) | Path of Exile 1 e 2 | Troca+Listagem+Livro | Não | Nenhum | Sim | Síncrono | Sim | Sim | Sim | Não | Não | Não | Não |
| [F06](fichas/F06-world-of-warcraft.md) | World of Warcraft | Troca+Listagem+Leilão | Sim | Token | Sim | Síncrono | Sim | Sim | Não | Não | Não | Sim | Sim |
| [F07](fichas/F07-guild-wars-2.md) | Guild Wars 2 | Livro | Sim | Token | Sim | Síncrono+Território | Sim | Sim | Sim | Não | Não | Não | Não |
| [F08](fichas/F08-black-desert.md) | Black Desert | Livro | Sim | Token | Sim | Síncrono+Território | Sim | Sim | Sim | Não | Sim | Sim | Sim |
| [F09](fichas/F09-throne-and-liberty-e-lost-ark.md) | Throne and Liberty | Leilão | Sim | Leilão-$ | Sim | Síncrono+Território | Não | Sim | ? | Não | Sim | ? | ? |
| [F09](fichas/F09-throne-and-liberty-e-lost-ark.md) | Lost Ark | Listagem+Leilão | Sim | Token | Sim | Síncrono | Não | Sim | Sim | Não | ? | Sim | ? |
| [G01](fichas/G01-diablo-3-casa-de-leilao.md) | Diablo III (era RMAH, 2012–2014) | Leilão | Não | Leilão-$+Saque-$ | Não | Nenhum | Não | Não | Não | Não | Não | Não | Sim |
| [G02](fichas/G02-entropia-universe.md) | Entropia Universe | Troca+Leilão | Sim | Saque-$ | Sim | Síncrono | Não | Sim | Sim | Não | Não | Não | Sim |
| [G03](fichas/G03-axie-infinity-e-web3.md) | Axie Infinity | Listagem+Leilão | Sim | Saque-$ | Sim | Síncrono | Sim | Sim | ? | Não | ? | Não | Não |
| [G04](fichas/G04-new-world.md) | New World (Aeternum) | Troca+Livro | Não | Nenhum | Sim | Síncrono+Território | Sim | Sim | Não | Não | Sim | Não | Sim |
| [G05](fichas/G05-banana-e-bongo-cat.md) | Banana | Troca+Livro | Não | Leilão-$ | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não |
| [G05](fichas/G05-banana-e-bongo-cat.md) | Bongo Cat | Troca+Livro | Não | Leilão-$ | Não | Nenhum | Não | Não | Não | Não | Sim | Não | Não |

## 4. O que a matriz mostra

Contagens feitas sobre as 56 linhas acima. Cada leitura é [H], apoiada na contagem e nas fichas.

1. **Mercado entre jogadores pede destruição de itens.** Perda de itens (desgaste, quebra, destruição, perda na morte) aparece em 16 dos 29 jogos com mercado, e em 1 dos 27 sem mercado. Sem destruição, o estoque só cresce e o preço só cai.
2. **O token é o RMT oficial que sobrevive.** De 22 jogos com algum RMT oficial, 16 usam token (moeda premium ou item comprado com dinheiro e negociável por moeda do jogo). Desses, 12 estão estáveis ou crescendo: Albion, Black Desert, EVE, Guild Wars 2, Idle Clans, IdleMMO, Kingdom of Loathing, Milky Way Idle, OSRS, Tibia, Torn e WoW. Os em declínio (Lost Ark, Shop Titans, SimpleMMO) têm problemas documentados de bots ou de venda de poder, não do token em si.
3. **Saque e leilão em dinheiro não sobreviveram bem.** Dos 6 jogos com saque ou leilão em dinheiro real, 5 estão em declínio: Diablo III, Entropia, Axie, Banana e Throne and Liberty. O Bongo Cat está estável, mas cerca de metade dos jogadores eram bots ([G05](fichas/G05-banana-e-bongo-cat.md)). O Tibia saca de forma indireta e recente, por um token vendável fora do jogo ([F04](fichas/F04-tibia.md)).
4. **Moeda premium negociável é a norma onde há mercado:** 19 dos 29 jogos com mercado. Isso inclui 5 dos 6 idle MMOs do grupo C.
5. **Offline parcial é o padrão.** São 39 dos 56 jogos; offline total, só em 3 (AdVenture Capitalist, IdleOn e Melvor Idle 2). O teto existe em quase todos, e a disputa é sobre o tamanho dele e sobre quem pode ampliá-lo.
6. **O idle MMO ainda não tem temporada, território nem RMT legalizado juntos.** Entre os 8 idle MMOs (grupo C, mais Scapewatch e Deep Vein Idle), 3 têm temporadas (Idlescape, que fechou, IdleMMO e SimpleMMO) e só o IdleMMO tem algum território. Nenhum combina livro de ordens, token com câmbio público, temporadas paralelas, guerra assíncrona de guildas e foco no Brasil. Esse é o espaço vazio que a pesquisa de mercado ([08](08-mercado-posicionamento.md)) deve confirmar ou derrubar.
7. **Gacha aparece em 15 de 56**, concentrado nos mobile AFK e nos MMOs asiáticos. No Brasil, sorteio pago está vedado a menores desde mar/2026 ([05b](05b-rmt-legal-brasil.md)).
8. **O modelo de negócio é majoritariamente F2P:** 35 F2P, 11 híbridos, 9 premium e 1 assinatura. Premium puro com conteúdo finito tem cauda curta ([A10](fichas/A10-nova-onda-idle-2023-2026.md), [A02](fichas/A02-clicker-heroes.md)).

## 5. As leis do bom design idle

As leis são síntese do estúdio [H]: cada uma se apoia em fontes e tem pelo menos um contraexemplo de quem a violou e pagou o preço. As 14 primeiras vêm do [02a](02a-teoria-design-idle.md), seção 11, onde estão as fontes e os contraexemplos completos. As 8 seguintes são novas: vêm das fichas de economia, de MMOs e dos casos de alerta, e respondem ao que o 02a deixou em aberto, um idle com economia entre jogadores.

### 5.1 Leis de design idle

| # | Lei | Em uma frase | Contraexemplo |
|---|---|---|---|
| 1 | Serrote | Calibre o tempo até a próxima compra que importa, em faixas, e derrube a espera antes que vire muro. | Muros de fim de jogo do Melvor ([B01](fichas/B01-melvor-idle.md)). |
| 2 | Regra nova | Toda camada muda ao menos uma regra; "o mesmo, mais rápido" não é novidade. | Clones de Clicker Heroes ([02a](02a-teoria-design-idle.md)). |
| 3 | Três metas | Sempre uma meta de minutos, uma de horas e uma de dias, com barra honesta. | "Simulador de espera" nas reviews do Melvor ([B01](fichas/B01-melvor-idle.md)). |
| 4 | Prestígio que acelera | O reset refaz rápido o que já foi dominado e vai mais longe a cada ciclo. | Superprestígio que reduz o poder ([02a](02a-teoria-design-idle.md)). |
| 5 | Escala humana | O número negociável cabe na cabeça; o exponencial vive nas camadas pessoais. | Teto de 2,1 bilhões de gp do OSRS ([F03](fichas/F03-runescape-e-osrs.md)). |
| 6 | Custo exponencial, fonte linear | Num mercado comum, o exponencial fica nos custos, nunca na fonte de moeda. | Inflação estrutural do SimpleMMO ([C05](fichas/C05-simplemmo.md)). |
| 7 | Ausente que não perde | Sair nunca destrói o que existe, e o teto offline cresce jogando. | MWI cortou o offline no patch que criou upgrades pagos ([C01](fichas/C01-milky-way-idle.md)). |
| 8 | Plano | O valor do ausente está na decisão tomada antes de sair; rebalanceamento não pune quem planejou. | Nerfs no Township do Melvor ([B01](fichas/B01-melvor-idle.md)). |
| 9 | Ativo como atalho | O ativo ganha opções e bônus limitados; nada essencial exige presença. | Minigames obrigatórios do Idle Slayer ([B05](fichas/B05-idle-slayer.md)). |
| 10 | Automação conquistada | A automação é a recompensa do domínio e não se vende. | AutoTrimps ([A08](fichas/A08-trimps.md)); familiares vendidos no Idle Champions ([B03](fichas/B03-idle-champions.md)). |
| 11 | Muro com saída | Todo muro tem uma saída que é decisão, nunca um botão de pagar ao lado. | Energia do SimCity Social ([02a](02a-teoria-design-idle.md)). |
| 12 | Temporada e fim digno | Cada temporada tem fim explícito e reset coletivo que preserva o que foi pago. | Inflação da liga Standard do PoE ([F05](fichas/F05-path-of-exile.md)). |
| 13 | Espera não vendida | Vende-se cosmético, conveniência sem poder e bens produzidos por jogadores; nunca a taxa do ausente. | "+30% AFK gains" do IdleOn ([B02](fichas/B02-legends-of-idleon.md)). |
| 14 | Mercado complementar | O mercado especializa e acelera, mas não pode ser o melhor caminho para tudo. | Casas de leilão do Diablo III ([G01](fichas/G01-diablo-3-casa-de-leilao.md)). |

### 5.2 Leis da economia multiplayer (novas)

| # | Lei | Em uma frase | Sustentação | Contraexemplo |
|---|---|---|---|---|
| 15 | **Ledger** | Toda moeda e todo item têm origem rastreável, e toda transferência é atômica e idempotente. | Ledger de partidas dobradas ([07](07-tecnica-idles-online.md)); New World removeu 98% do valor duplicado rastreando-o ([G04](fichas/G04-new-world.md)) | MapleStory europeu detectou tarde e não teve rollback ([G07](fichas/G07-economias-que-colapsaram.md)). |
| 16 | **Tempo preso à conta** | O tempo ausente gera progresso preso à conta; o que é negociável nasce de ação ativa verificada ou de produção limitada por tempo. | Prova de jogo do TF2 e do Steam ([G05](fichas/G05-banana-e-bongo-cat.md)); Loot 2.0 e bAXS ([G01](fichas/G01-diablo-3-casa-de-leilao.md), [G03](fichas/G03-axie-infinity-e-web3.md)) | Banana: ~2/3 dos jogadores eram bots ([G05](fichas/G05-banana-e-bongo-cat.md)); mesas de missões do WoW emitindo ouro ([F06](fichas/F06-world-of-warcraft.md)). |
| 17 | **Dreno que destrói** | A economia precisa de perda real de itens (desgaste, consumo, destruição); taxa é ajuste fino. | EVE e Albion ([F01](fichas/F01-eve-online.md), [F02](fichas/F02-albion-online.md)); 16 de 29 na matriz | Shop Titans precisou da quebra de equipamento para sustentar quem fabrica ([C06](fichas/C06-shop-titans.md)). |
| 18 | **Termômetro público** | O preço do token em ouro é o índice de inflação: publicado, com alarme, corrigido com drenos e não com taxa de câmbio. | Cowbells, PLEX, WoW Token, gemas do GW2 ([C01](fichas/C01-milky-way-idle.md), [F01](fichas/F01-eve-online.md), [F06](fichas/F06-world-of-warcraft.md), [F07](fichas/F07-guild-wars-2.md)) | Krono do EverQuest de 65 mil para milhões em dias ([G07](fichas/G07-economias-que-colapsaram.md)); taxa de câmbio do Albion que falhou ([F02](fichas/F02-albion-online.md)). |
| 19 | **Canal oficial mais barato** | O RMT oficial vence o mercado negro em preço e segurança, ou não esvazia nada. | Bonds ([F03](fichas/F03-runescape-e-osrs.md)); Donator Pack do Torn ([D01](fichas/D01-torn.md)); Char Bazaar ([F04](fichas/F04-tibia.md)) | Mercado negro a 45% do preço do Bond ([F03](fichas/F03-runescape-e-osrs.md)); GDKP do WoW criando demanda por ouro ([G07](fichas/G07-economias-que-colapsaram.md)). |
| 20 | **Dinheiro que não sai** | O dinheiro entra e circula, mas não sai; saque e sorteio pago nunca convivem. | Brasil e exterior ([05b](05b-rmt-legal-brasil.md), [05c](05c-rmt-legal-global-pagamentos.md)) | Diablo III, Entropia e Axie ([G01](fichas/G01-diablo-3-casa-de-leilao.md), [G02](fichas/G02-entropia-universe.md), [G03](fichas/G03-axie-infinity-e-web3.md)). |
| 21 | **Constituição econômica** | Regras monetárias públicas; toda mudança vem com aviso, dados e porquê; carta de princípios desde o lançamento. | Torn com economista e meta de expansão ([D01](fichas/D01-torn.md)); relatórios do EVE ([F01](fichas/F01-eve-online.md)) | Imposto do EVE sem explicação ([F01](fichas/F01-eve-online.md)); câmbio fixo do Black Desert ([F08](fichas/F08-black-desert.md)); NGE do SWG ([03](03-alem-do-idle.md)). |
| 22 | **População mínima** | Temporadas e conteúdo coletivo não podem fragmentar a base: temporadas como mundos paralelos que devolvem só cosmético. | Leagues do OSRS ([F03](fichas/F03-runescape-e-osrs.md)); reforço de NPC ([03](03-alem-do-idle.md)) | Temporadas do Idlescape esvaziaram os livros ([C03](fichas/C03-idlescape.md)); missões públicas vazias do Warhammer Online ([03](03-alem-do-idle.md)). |

## Implicações para o nosso jogo

- Cada decisão de design da Fase 2 deve dizer quais leis atende e qual risco aceita quando viola alguma.
- O "porquê" que as fichas mostram aponta para um idle MMO em que o ausente produz progresso pessoal, o ativo produz bens negociáveis, o mercado destrói itens e o dinheiro real entra por um token, sem nunca sair.
- O espaço vazio mais claro na matriz é a combinação que nenhum idle MMO tem: livro de ordens, token com índice público, temporadas paralelas, guerra assíncrona de guildas e servidor e preço no Brasil.
- A simulação da Fase 3 deve testar as leis 5, 6, 16, 17 e 18 com números, antes que viremos dogma.

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| Viés de seleção | Os casos de alerta foram escolhidos por terem fracassado, o que reforça a correlação entre dinheiro real e declínio. | Tratar a leitura 3 como alerta, não como prova; procurar contraexemplos ativamente (Bongo Cat, Tibia). |
| Matriz com lacunas | Várias células são `?` ou [NV], sobretudo nas fichas do Sonnet, que saíram mais curtas por bloqueio de fontes. | Revisar as células críticas antes de usar a matriz para decidir. |
| Leis viram dogma | Uma lei pode estar certa para idles solo e errada para um idle MMO. | Testar na simulação; cada lei tem um dono e um critério de revisão. |
| Copiar o "quê" | Adotar o livro de ordens do MWI sem as bandas e a taxa que o fazem funcionar. | Sempre registrar o problema que a mecânica resolve e o efeito colateral. |
| Correlação vista como causa | Jogos estáveis com token podem estar estáveis por outros motivos (marca, idade, base fiel). | Separar fato de hipótese, como as fichas fazem. |

## Fontes

Este documento sintetiza as fichas e os estudos da Fase 1; as fontes externas de cada afirmação estão nos arquivos citados.

- Fichas: [índice do mapa do gênero](01-mapa-do-genero.md).
- Estudos: [02a — teoria do design idle](02a-teoria-design-idle.md), [03 — além do idle](03-alem-do-idle.md), [05b — jurídico Brasil](05b-rmt-legal-brasil.md), [05c — jurídico global](05c-rmt-legal-global-pagamentos.md), [07 — técnica](07-tecnica-idles-online.md).
- Contagens: feitas pelo estúdio a partir das linhas da matriz de cada ficha (novembro de 2026).
