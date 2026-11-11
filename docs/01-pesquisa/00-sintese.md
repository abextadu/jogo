# Síntese da Fase 1 — Pesquisa profunda

> Fechamento da Fase 1. Resume 49 fichas de jogos e 11 estudos temáticos (cerca de 300 mil palavras, com fonte em todo dado concreto). Cada insight remete ao arquivo onde estão as fontes primárias. Etiquetas: [F] fato com fonte, [C] consenso da comunidade, [H] leitura do estúdio.
> Navegação: [mapa do gênero](01-mapa-do-genero.md) · [padrões, matriz e leis](02-padroes-matriz-leis.md) · [notas de síntese](_notas-de-sintese.md) · [metodologia](METODOLOGIA.md).

## Resumo executivo

**O que estudamos.** 56 jogos em 49 fichas: idles clássicos e a nova onda de 2023–2026, idle RPGs, todos os idle MMOs relevantes (inclusive dois lançados em set/2026), RPGs de navegador de 20 anos, os AFK de celular que mais faturam, as nove economias de MMO de referência e os casos de alerta (Diablo III, Entropia, Axie, New World, Banana e coletâneas de idles que morreram e de economias que colapsaram). Os estudos cobrem teoria do design idle, mecânicas de outros gêneros, economia (fontes, drenos, mercados, bots), RMT, jurídico no Brasil e no mundo, monetização, técnica e mercado.

**A conclusão central** [H]. O melhor idle RPG online precisa resolver uma contradição que nenhum concorrente resolveu: o idle vive de números que crescem e de tempo que trabalha sozinho, enquanto uma economia de jogadores morre de inflação e de bots. A pesquisa aponta uma saída consistente:
1. **Duas camadas.** O progresso pessoal pode crescer sem limite e roda enquanto o jogador está ausente. Os bens negociáveis ficam em unidades fixas, nascem de ação ativa ou de produção limitada pelo tempo, e são destruídos pelo uso.
2. **Dinheiro entra, circula e não sai.** O RMT que sobrevive é o token oficial negociável por ouro. Saque e leilão em dinheiro fracassaram e esbarram na lei; sorteio pago está vedado a menores no Brasil desde mar/2026.
3. **Confiança como produto.** A espera nunca é vendida; as regras monetárias são públicas; o servidor é a única verdade, com registro contábil de cada moeda.

**O espaço de mercado.** Nenhum idle MMO junta economia profunda, RMT legal e transparente, temporadas paralelas, social sem plantão e o pacote Brasil (servidor, PT-BR, Pix, preço em real). Os concorrentes diretos são estúdios de 1 a 2 pessoas com poucos milhares de jogadores simultâneos. O Brasil é cabeça de ponte comprovada para MMOs leves (cerca de 45% dos jogadores do Tibia). O teto provado do nicho é modesto, então o plano precisa fechar a conta com 2 a 5 mil simultâneos.

**O que fica em aberto.** As 41 perguntas para advogado dos estudos jurídicos; números de retenção específicos de idle MMO; e a calibragem de tudo isso, que é trabalho da simulação da Fase 3.

## Os 30 insights mais importantes, por impacto

O ranking pesa quanto o insight muda o conceito, a economia e a viabilidade do jogo [H].

### Economia e dinheiro real

| # | Insight | Evidência | Implicação direta |
|---|---|---|---|
| 1 | **Dinheiro entra, circula e não sai.** O token negociável por ouro é o RMT oficial que sobrevive; saque e leilão em dinheiro fracassaram. | [F] Dos 16 jogos da matriz com token, 12 estão estáveis ou crescendo; dos 6 com saque ou leilão em dinheiro, 5 estão em declínio ([02](02-padroes-matriz-leis.md)); Diablo III, Entropia e Axie ([G01](fichas/G01-diablo-3-casa-de-leilao.md), [G02](fichas/G02-entropia-universe.md), [G03](fichas/G03-axie-infinity-e-web3.md)) | RMT do lançamento: um token-item comprado em reais que vale conforto e cosmético (nunca poder), vendável por ouro uma única vez, numa bolsa só na web, com preço publicado como índice. Nada de saque, leilão em reais, crédito em reais ou venda de contas ([05d](05d-rmt-recomendacao.md)). Todos os modelos em que o dinheiro saiu foram revertidos, vendidos ou terceirizados ([05a](05a-rmt-modelos-mercado-paralelo.md)). |
| 2 | **Sorteio pago está vedado a menores no Brasil desde 17/3/2026, e sorteio pago com saque reúne os elementos de jogo de azar.** | [F] Lei 15.211 (ECA Digital), art. 20; Decreto 12.880; LCP, art. 50; TJDFT condenou a Riot a R$ 15 milhões (jun/2026) ([05b](05b-rmt-legal-brasil.md)). Lá fora, loot box vira jogo de azar quando o prêmio vale dinheiro ([05c](05c-rmt-legal-global-pagamentos.md)) | Zero sorteio pago. Probabilidades publicadas para qualquer aleatoriedade grátis. Validar com advogado. |
| 3 | **O tempo ausente deve gerar só progresso preso à conta.** Se o tempo passivo gera algo vendável, bots capturam o valor. | [F] No Banana, ~2/3 dos jogadores eram bots; no Bongo Cat, ~metade ([G05](fichas/G05-banana-e-bongo-cat.md)); o Pixels perdeu 74% dos diários quando mudou as recompensas ([G03](fichas/G03-axie-infinity-e-web3.md)); as mesas de missões do WoW emitiam ouro ([F06](fichas/F06-world-of-warcraft.md)) | Eixo do design: o ausente produz progresso pessoal; o negociável nasce de ação ativa verificada ou de produção limitada por tempo. |
| 4 | **Números em duas velocidades.** Renda exponencial num mercado comum é inflação embutida. | [F] Inflação estrutural do SimpleMMO ([C05](fichas/C05-simplemmo.md)); teto de 2,1 bilhões de gp do OSRS ([F03](fichas/F03-runescape-e-osrs.md)); [H] leis 5 e 6 ([02a](02a-teoria-design-idle.md)) | O exponencial vive no pessoal (níveis, prestígio); o mercado negocia bens em unidades que cabem na cabeça. Reset pessoal nunca apaga bens negociáveis. |
| 5 | **Mercado entre jogadores exige destruição real de itens; a taxa é só ajuste fino.** | [F] Perda de itens em 16 dos 29 jogos com mercado e em 1 dos 27 sem ([02](02-padroes-matriz-leis.md)); o EVE destruiu ~1,14 quatrilhão de ISK em bens em 2025 ([F01](fichas/F01-eve-online.md)); lá o imposto de transação era menos de 1/5 das fontes ([04a](04a-economia-fontes-drenos-inflacao.md)) | Desgaste, consumo no crafting e perda opcional em zonas de risco como drenos principais. |
| 6 | **O canal oficial só esvazia o mercado negro se for mais barato e mais seguro.** | [F] Os Bonds derrubaram a riqueza do gold farming em mais de 80% em um mês, mas o ouro clandestino do OSRS ainda sai a 45% do preço do Bond ([F03](fichas/F03-runescape-e-osrs.md)); o Donator Pack do Torn sai por menos da metade do preço de sites de RMT ([D01](fichas/D01-torn.md)); no Brasil, a GGMAX vende itens de mais de 150 jogos ([08](08-mercado-posicionamento.md)) | Precificar o token contra o mercado cinza e monitorar o preço do nosso ouro lá fora. A evidência de que o canal oficial esvazia o paralelo é fina (só o caso dos Bonds tem antes/depois), então isso se mede desde o alfa ([05a](05a-rmt-modelos-mercado-paralelo.md)). |
| 7 | **RMT oficial só funciona com repressão permanente a bots.** | [F] Albion bane 12 a 21 mil contas por mês em 2026 ([F02](fichas/F02-albion-online.md)); o Lost Ark baniu mais de 1 milhão no primeiro mês ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)); processos contra fabricantes de bots funcionam ([04b](04b-economia-mercados-protecoes-bots.md)) | Operação antibot e anti-DDoS desde o dia 1; punir o vendedor, não o comprador; detecção por grafo de transferências. |
| 8 | **O preço do token em ouro é o termômetro público da economia, junto com uma cesta de preços.** | [F] Cowbells de ~200 mil para ~1,2 milhão em 19 meses ([C01](fichas/C01-milky-way-idle.md)); WoW Token de 30 mil para 185–400 mil ([F06](fichas/F06-world-of-warcraft.md)); o token também mede a própria oferta ([04a](04a-economia-fontes-drenos-inflacao.md)) | Índice público do token, cesta de preços, massa monetária e velocidade da moeda num painel diário com alarme. |
| 9 | **A inflação mais violenta é a do lançamento.** | [F] Guild Wars 2: ~+400% ao ano até 2015 e ~6% depois; MWI: ~+200% ao ano ([04a](04a-economia-fontes-drenos-inflacao.md), [F07](fichas/F07-guild-wars-2.md)) | Fontes apertadas no lançamento; meta provisória de inflação de um dígito ao ano, a calibrar na Fase 3. |
| 10 | **Regras monetárias públicas: toda mudança vem com aviso, dados e porquê.** | [F] Imposto do EVE subiu de 4% para 7,5% sem explicação e gerou revolta ([F01](fichas/F01-eve-online.md)); o Torn tem economista e meta de expansão ([D01](fichas/D01-torn.md)); câmbio fixo do Black Desert virou crise ([F08](fichas/F08-black-desert.md)) | "Constituição econômica" publicada no lançamento, relatório mensal e dados abertos ([04a](04a-economia-fontes-drenos-inflacao.md)). |
| 11 | **Moeda premium como moeda do mercado distorce a economia.** | [F] O Lucent do Throne and Liberty saía 25–35% abaixo da loja no mercado cinza ([F09](fichas/F09-throne-and-liberty-e-lost-ark.md)) | Todos os balcões em ouro; o token entra por um câmbio separado, flutuante e com limites ([04b](04b-economia-mercados-protecoes-bots.md)). |
| 12 | **Um mercado global com compra imediata pode virar a principal fonte de poder e esvaziar o jogo.** | [F] Na GDC 2013, o diretor do Diablo III disse que mais de 50% dos jogadores usavam o leilão com regularidade e que ele prejudicou o jogo ([G01](fichas/G01-diablo-3-casa-de-leilao.md)) | O mercado negocia insumos e consumíveis; o poder final passa por decisão e esforço próprios. Medir que parte do poder vem do mercado. |

### Design do idle

| # | Insight | Evidência | Implicação direta |
|---|---|---|---|
| 13 | **A espera nunca é vendida: teto de offline, filas, automação e taxa do ausente ficam fora da loja.** | [F] Ir de 10 h a 72 h de offline no MWI custa US$ 232–267 e é queixa recorrente ([C01](fichas/C01-milky-way-idle.md)); o IdleOn vende "+30% AFK gains" e caiu para 63% de positivas em 2026 ([B02](fichas/B02-legends-of-idleon.md)); o VIP do AFK Arena amplia o baú ([E01](fichas/E01-afk-arena-e-afk-journey.md)) | Carta pública de monetização e uma "zona vermelha" que nunca vai à loja ([06](06-monetizacao-retencao.md)). |
| 14 | **O ausente nunca perde, decide antes de sair e vê a consequência do plano na volta.** | [F] Melvor simula 24 h na volta ([B01](fichas/B01-melvor-idle.md)); o KoL acumula 5 dias de turnos ([D03](fichas/D03-kingdom-of-loathing.md)); o rested XP do WoW foi reformulado de penalidade para bônus ([03](03-alem-do-idle.md)) | Offline generoso calculado no servidor, teto que cresce jogando, tela de retorno com o resultado do plano. |
| 15 | **Duas taxas visíveis, ativa e ausente, com recompensas exclusivas para cada lado. O ativo ganha opções, nunca obrigações.** | [F] IdleOn: ganho ausente de 20% a ~85% com melhorias ([B02](fichas/B02-legends-of-idleon.md)); minigames obrigatórios em 4 de 10 negativas do Idle Slayer ([B05](fichas/B05-idle-slayer.md)) | Janelas ativas curtas com bônus; nenhum conteúdo essencial exige presença. |
| 16 | **Automação se conquista jogando; o que o jogo não automatiza vira script e bot.** | [F] AutoTrimps e Kitten Scientists ([A08](fichas/A08-trimps.md), [A07](fichas/A07-kittens-game.md)); autobuyers por camada no Antimatter Dimensions ([A06](fichas/A06-antimatter-dimensions.md)); familiares vendidos no Idle Champions geram queixa ([B03](fichas/B03-idle-champions.md)) | Árvore de automação oficial como progressão; API pública de leitura e política de scripts ("leitura liberada, escrita humana") ([07](07-tecnica-idles-online.md)). |
| 17 | **Camadas descobríveis ao longo de anos, cada uma mudando uma regra, fazem um idle durar uma década.** | [F] Cookie Clicker: mais de 10 anos, 639 conquistas, 96% positivas ([A01](fichas/A01-cookie-clicker.md)); o KoL lança 3 paths novos por ano ([D03](fichas/D03-kingdom-of-loathing.md)) | Plano de conteúdo em camadas, cada uma com regra nova; prestígio que muda a decisão. |
| 18 | **O penhasco do lançamento é falta de conteúdo.** | [F] O Clicker Heroes 2 tinha "poucos dias" de conteúdo e perdeu 81% da média em dois meses ([G06](fichas/G06-idles-que-morreram.md)); premium barato tem pico forte e cauda curta ([A10](fichas/A10-nova-onda-idle-2023-2026.md)) | Medir a pista de conteúdo em dias reais de jogo idle; primeiro muro sério só depois do D7. |

### Social, temporadas e mecânicas ativas

| # | Insight | Evidência | Implicação direta |
|---|---|---|---|
| 19 | **O laço social mais forte do gênero é cooperativo, com prazo e nota individual, sem plantão.** | [F] Egg Inc.: maior número de ativos semanais entre cinco idles comparados (~974 mil nos EUA, Q4 2023, estimativa da Sensor Tower) ([A09](fichas/A09-egg-inc.md)); raids curtas do Tap Titans 2 ([B06](fichas/B06-tap-titans-2.md)); guerra com inscrição no S&F ([D02](fichas/D02-shakes-and-fidget.md)) | Contratos de guilda com prazo e cargas de ação acumuláveis; o ausente não vira peso ([03](03-alem-do-idle.md)). |
| 20 | **Temporadas paralelas que não resetam o jogo principal batem recordes, mas a evasão depois do pico é brutal e temporadas demais dividem a base.** | [F] Leagues do OSRS: ~241 mil simultâneos em 2025 ([F03](fichas/F03-runescape-e-osrs.md)); Fresh Start do New World acima da expansão paga ([G04](fichas/G04-new-world.md)); PoE de 184 mil para 16 mil em dois meses ([F05](fichas/F05-path-of-exile.md)); temporadas esvaziaram os livros do Idlescape ([C03](fichas/C03-idlescape.md)) | Temporadas como mundos paralelos, uma por vez, devolvendo só cosmético; ganchos depois da 4ª semana; RMT fora delas. |
| 21 | **Metas comunitárias são a mecânica de outros gêneros com melhor relação benefício/risco; território é a pior para começar.** | [H] Ranking do estudo; [F] a taxa do MWI vira bônus do servidor ([C01](fichas/C01-milky-way-idle.md)); a renda territorial passiva virou bola de neve e foi cortada no Albion ([03](03-alem-do-idle.md)) | Começar por metas e eventos coletivos; território só mais tarde, assíncrono, por atividade e com janela anunciada. |
| 22 | **A demanda por RMT nasce do desenho.** | [F] A Blizzard proibiu o GDKP porque ele "cria demanda por ouro que não existiria" ([G07](fichas/G07-economias-que-colapsaram.md)); proibir o comércio em 2007 não resolveu o RMT do RuneScape ([F03](fichas/F03-runescape-e-osrs.md)) | Nenhum sistema que crie demanda artificial por ouro (ex.: loot de chefe leiloado); nunca restringir a troca honesta para combater RMT. |

### Monetização e confiança

| # | Insight | Evidência | Implicação direta |
|---|---|---|---|
| 23 | **A assinatura aceita é a que também se compra com ouro, sem multiplicador de renda.** | [F] 65,2% das memberships do IdleMMO vieram de ouro ([C04](fichas/C04-idlemmo.md)); no Brasil, 87% dos jogadores usam moeda ganha no jogo ([06](06-monetizacao-retencao.md)); o +50% de Silver do premium do Albion parece P2W ([F02](fichas/F02-albion-online.md)) | Assinatura negociável como base de receita recorrente, com conveniência e cosmético, sem renda extra. |
| 24 | **Cosmético que vira poder, ou passe que dá bônus permanente, cola o rótulo de P2W.** | [F] Roupas viram material de aprimoramento no Black Desert ([F08](fichas/F08-black-desert.md)); títulos permanentes do passe no Tap Titans 2 ([B06](fichas/B06-tap-titans-2.md)); no PC, o cosmético atinge 85,8% dos jogadores e o P2W estagnou ([06](06-monetizacao-retencao.md)) | Cosmético nunca se converte em progresso; passe por marcos, sem poder e sem expirar. |
| 25 | **Ética sem receita contínua quebra o estúdio, mas teto de gasto e reembolso viram marca.** | [F] O Clicker Heroes 2 recusou microtransações e gastou "muito mais do que ganhou" ([A02](fichas/A02-clicker-heroes.md)); o gasto das "baleias" acompanha o jogo problemático, não a renda ([06](06-monetizacao-retencao.md)) | Receita recorrente desde o dia 1, teto de gasto padrão para todos, aumento só para adulto verificado. |
| 26 | **Quem escreve as reviews negativas são os veteranos, e eles reclamam de traição, não de tédio.** | [F] Mediana de 91 h no Melvor e ~7.000 h no IdleOn entre os autores de negativas ([B01](fichas/B01-melvor-idle.md), [B02](fichas/B02-legends-of-idleon.md)); banimentos opacos no OGame e no Travian ([D04](fichas/D04-ogame.md), [D05](fichas/D05-travian.md)) | Políticas de monetização, moderação e apelação públicas; carta de princípios desde o lançamento ([03](03-alem-do-idle.md)). |

### Técnica, plataforma e mercado

| # | Insight | Evidência | Implicação direta |
|---|---|---|---|
| 27 | **Ledger de partidas dobradas, transações atômicas e idempotência desde o dia 1. O estrago depende do tempo até detectar.** | [F] No New World, desligar o comércio criou outro dupe, e o valor duplicado foi removido rastreando-o ([G04](fichas/G04-new-world.md)); Habitat e EQ2 detectaram em 24 h e contiveram o dano, o MapleStory europeu não ([G07](fichas/G07-economias-que-colapsaram.md)); 20–30 pedidos simultâneos estão ao alcance de qualquer script ([07](07-tecnica-idles-online.md)) | Servidor autoritativo, ledger, alarme de massa monetária, botão de suspender o comércio, testes concorrentes em tudo que move valor, 2FA e CSP. |
| 28 | **As lojas de apps e os gateways empurram o RMT para a web e proíbem dinheiro entre usuários.** | [F] Apple 5.3.3 e regras do Google ([05c](05c-rmt-legal-global-pagamentos.md)); Stripe e Adyen restringem moeda sacável ([05c](05c-rmt-legal-global-pagamentos.md)); saldo em reais sacável exige autorização do BCB ([05b](05b-rmt-legal-brasil.md)) | PWA primeiro, com o mercado dentro dela; aprovação do modelo por escrito com dois provedores de pagamento; dinheiro de jogador nunca na conta do estúdio. |
| 29 | **O Brasil é cabeça de ponte comprovada para MMO leve, quando recebe o pacote completo.** | [F] Tibia: ~45% dos jogadores e 32 de 90 mundos ([F04](fichas/F04-tibia.md)); Ragnarok LATAM com mais de 80% de brasileiros; Pix com 42% do e-commerce ([08](08-mercado-posicionamento.md)); negativas em português do Albion citam ping e preço em dólar ([F02](fichas/F02-albion-online.md)) | Servidor no Brasil, PT-BR nativo, Pix, preço em real e comunidade; o jogo nasce bilíngue para crescer lá fora. |
| 30 | **O espaço vazio existe, mas o teto provado do nicho é modesto e a oferta explodiu.** | [F] Nenhum idle MMO junta economia profunda, RMT legal, temporadas e pacote Brasil ([02](02-padroes-matriz-leis.md), [08](08-mercado-posicionamento.md)); idle MMOs têm de centenas a poucos milhares de simultâneos; lançamentos com a tag Idler foram de 329 em 2023 para 1.566 em 2026 até setembro ([08](08-mercado-posicionamento.md)); o Melvor Idle 2 da Jagex chega em 17/nov/2026 ([A10](fichas/A10-nova-onda-idle-2023-2026.md)) | Identidade própria legível num vídeo curto; plano de negócio que fecha com 2 a 5 mil simultâneos; custos enxutos. |

## O que isso significa para a Fase 2

Os três conceitos da Fase 2 vão variar na fantasia, na estrutura e no tipo de jogo ativo. Por recomendação da pesquisa, os três compartilham um núcleo [H]:
- números em duas velocidades;
- tempo ausente preso à conta;
- destruição de itens como dreno principal;
- mercado em ouro com câmbio separado para o token;
- dinheiro que entra e não sai;
- zero sorteio pago;
- zona vermelha fora da loja;
- servidor autoritativo com ledger;
- PWA primeiro;
- pacote Brasil.

## 🛑 Checkpoint da Fase 1: decisões para o Gabriel

**1. Até onde vai o dinheiro real?** Este é o ponto em que a pesquisa mais se afasta da ideia inicial de um RMT que movimenta e escoa a economia.
- **(A) Dinheiro só entra. ← recomendado**
  - Um token-item vendido em reais e revendável por ouro uma única vez.
  - A taxa em ouro de cada venda é destruída, então o RMT continua escoando riqueza.
  - Saque, leilão em reais, crédito em reais e venda de contas ficam fora do roadmap, com as condições de reavaliação escritas ([05d](05d-rmt-recomendacao.md)).
- (B) A, mais um bazar oficial de contas pago em token, entre 18 e 24 meses (modelo Tibia).
- (C) Mercado com saque em dinheiro via parceiro licenciado.
- *Por quê:* (A) é o único modelo sem luz vermelha em nenhum critério. Os modelos em que o dinheiro sai foram revertidos (Station Exchange, Diablo III, Tilia), e saque exige licença financeira no Brasil e fora. (B) pode vir depois, se (A) funcionar. (C) transforma o estúdio em instituição financeira.

**2. Vai existir alguma aleatoriedade paga?**
- **(A) Nenhuma, nem com dinheiro nem com ouro; drops grátis com chances publicadas. ← recomendado**
- (B) Caixas compradas só com ouro.
- (C) Caixas pagas só para adultos verificados.
- *Por quê:* com token, o ouro tem preço em reais. (B) e (C) aproximam o jogo do jogo de azar no Brasil e fora, e a loot box está vedada a menores no Brasil desde mar/2026.

**3. Para quem é o jogo?**
- **(A) Para todos, com modo protegido ativo por padrão para menores. Comprar acima de um teto e vender token por ouro só para adulto verificado. ← recomendado**
- (B) O jogo inteiro só para maiores de 18.
- (C) Sem verificação de idade, só controle parental.
- *Por quê:* (A) concentra a fricção em quem converte dinheiro e funciona como custo de conta contra bots. (B) corta público e ainda exige verificação. (C) esbarra no ECA Digital, com fiscalização da ANPD a partir de jan/2027.

**4. Onde e como lançamos?**
- **(A) Brasil primeiro, bilíngue (PT-BR e inglês) desde o dia 1. ← recomendado**
  - Servidor no Brasil, preço em real e Pix.
  - PWA no navegador, no desktop e no celular.
  - Steam e lojas de apps depois, sem RMT dentro das lojas.
- (B) Global desde o dia 1, com servidor nos EUA ou na Europa, web e Steam.
- (C) Web e apps nas lojas já no lançamento.
- *Por quê:* o brasileiro vira maioria quando o MMO chega localizado e perto (Tibia, Ragnarok); as reviews negativas em português do Albion reclamam de ping e de preço em dólar. As lojas empurram o RMT para a web, e o teto do nicho pede custo baixo.

**5. Quando trazemos um advogado?**
- **(A) Agora, em paralelo à Fase 2: parecer sobre as 8 perguntas que travam o GDD ([05d](05d-rmt-recomendacao.md), §8) antes de começar a Fase 3. ← recomendado**
- (B) Só antes de construir os pagamentos (Fase 5).
- (C) Seguir sem parecer e ajustar depois.
- *Por quê:* o modelo de RMT condiciona o GDD inteiro, e as normas mudam em semanas (MP 1.394, ANPD, Digital Fairness Act). Mudar a economia depois de desenhada é caro.

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Viés de seleção** | Os casos de alerta foram escolhidos por terem fracassado, e a correlação entre dinheiro real e declínio pode estar inflada. | Tratar o insight 1 como alerta forte, não como lei física; buscar contraexemplos (Bongo Cat, Tibia) na Fase 2. |
| **Lei que muda rápido** | A MP 1.394, a regulamentação da ANPD, o Digital Fairness Act e o caso Epic v. Apple mudam em semanas. | Parecer jurídico antes de construir pagamentos e RMT; revisão jurídica a cada fase. |
| **Lacunas de dados** | Retenção de idle MMO, receita do nicho e números do Brasil são esparsos; várias fontes foram lidas só por trecho de busca. | Medir desde o alfa; não basear o plano de negócio em benchmarks fracos. |
| **Síntese vira dogma** | As leis e os insights são leituras [H] apoiadas em fatos; aplicados sem crítica, podem matar uma ideia boa. | Testar as leis econômicas na simulação da Fase 3; cada exceção precisa de justificativa escrita. |
| **Núcleo comum demais** | Se os três conceitos compartilham o núcleo econômico, a escolha da Fase 2 pode parecer falsa. | Os conceitos divergem na fantasia, no ciclo ativo e na estrutura social; o núcleo é só o piso de segurança. |
| **Concorrência acelerada** | Melvor Idle 2, Scapewatch e Deep Vein Idle mostram que o espaço está sendo ocupado agora. | Diferencial que um dev solo não copia rápido: economia com ledger, RMT legal e pacote Brasil. |
