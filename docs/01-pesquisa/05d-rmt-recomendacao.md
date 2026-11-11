# Recomendação de RMT para o nosso jogo (nov./2026)

> **Escopo.** Escolher o modelo de RMT oficial do nosso RPG idle de navegador, comparando seis candidatos, e definir as regras mínimas de desenho, o plano em fases, as alternativas, o que levar ao advogado e as decisões que cabem ao dono do produto.
>
> **Perguntas que este estudo responde:** (1) Qual modelo de RMT adotar no lançamento, e por quê? (2) O que fica para depois, e sob que condições? (3) Quais regras mínimas o modelo precisa ter desde o primeiro dia (o que é negociável, taxas, limites, carência, verificação, índice)? (4) O que precisa de parecer jurídico antes do GDD? (5) Que decisões o Gabriel precisa tomar?
>
> **Base.** Este estudo não traz pesquisa nova de mercado: apoia-se em [05a](05a-rmt-modelos-mercado-paralelo.md) (modelos e mercado paralelo), [05b](05b-rmt-legal-brasil.md) (Brasil), [05c](05c-rmt-legal-global-pagamentos.md) (mundo, pagamentos e lojas), [04b](04b-economia-mercados-protecoes-bots.md) (mercados e bots), [06](06-monetizacao-retencao.md) (monetização) e nas fichas. Os poucos dados novos (prazos de *chargeback* e do MED) têm link próprio. Quase tudo aqui é **[H]**, análise do estúdio; os fatos de apoio levam **[F]** e link.
>
> **Aviso.** Nada aqui é parecer jurídico. Onde a recomendação depende de leitura da lei, está marcado **"validar com advogado"**.

## Resumo executivo

**[H] Recomendação: um híbrido em fases que começa com um único canal de RMT, o token.** É um item comprado do estúdio em reais e trocado por ouro numa bolsa própria. O dinheiro só entra no jogo; nunca sai.

- **Como é o token:** vale 30 dias da assinatura de conforto (cosmético mensal, passe da temporada, interface, privilégios de anfitrião) ou uma quantia de moeda premium fechada para cosméticos. Nunca compra renda, XP, tempo offline, automação, filas, vagas de mercado ou poder.
- **Como circula:** pode ser vendido por ouro **uma única vez**; quem o compra com ouro recebe-o preso à conta. Não há troca direta entre jogadores. O preço em ouro sai de uma fila administrada e é publicado como índice da economia.
- **Quem vende:** só adulto com idade verificada, conta madura e segundo fator de autenticação; para os demais, o token chega preso. Há carência por meio de pagamento, tetos por conta e uma taxa em ouro que é destruída (dreno).
- **Regra de convivência:** nenhum sorteio pago no jogo, nem com dinheiro nem com ouro.

**Por quê:** é o único candidato sem luz vermelha em nenhum critério (seção 3). Todos os tokens estudados seguem vivos, ao contrário dos modelos em que o dinheiro sai ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.I). É luz verde no Brasil e fora ([05b](05b-rmt-legal-brasil.md); [05c](05c-rmt-legal-global-pagamentos.md)), dá ao não pagante uma rota ao premium (65,2% no IdleMMO) e é compatível com o idle se o tempo ausente só render progresso preso à conta.

**Depois, com gatilhos:** limites maiores, segunda revenda com destrave pago em ouro e novos usos do token. **Fora do roadmap:** saque, leilão em reais, crédito em reais e venda de contas, cada um com condições escritas para ser reavaliado.

**Custo:** antifraude e antibot permanentes, verificação de idade e a política monetária do índice. Antes do GDD, oito perguntas ★ vão ao advogado (seção 8).

---

## 1. Ponto de partida: as restrições que já estão decididas pela pesquisa

**[H]** Os estudos anteriores fecharam algumas portas. Qualquer candidato precisa respeitar estas nove restrições, ou explicar por que não:

| # | Restrição | De onde vem |
|---|---|---|
| R1 | **Dinheiro de jogador nunca passa pela conta do estúdio.** Guardar saldo sacável exige autorização prévia do Banco Central; leilão em dinheiro só com parceiro autorizado e *split* | [05b](05b-rmt-legal-brasil.md), §6 e §11; [05c](05c-rmt-legal-global-pagamentos.md), §5 |
| R2 | **Sorteio pago e dinheiro de verdade não coexistem.** Com token, o ouro ganha preço em dinheiro, e o prêmio de qualquer sorte paga passa a ter valor de mercado | [05b](05b-rmt-legal-brasil.md), §12; [05c](05c-rmt-legal-global-pagamentos.md), §8; [06](06-monetizacao-retencao.md), princípio 3 |
| R3 | **Menores em modo protegido por padrão**, com verificação de idade que não seja autodeclaração para qualquer função restrita | [05b](05b-rmt-legal-brasil.md), §2 e §10 |
| R4 | **O tempo ausente gera só progresso preso à conta**; item negociável exige ação ativa verificada | [04b](04b-economia-mercados-protecoes-bots.md), §4.7; [G05](fichas/G05-banana-e-bongo-cat.md) |
| R5 | **A loja não vende resultado**: renda, XP, offline, automação, filas, espaço, vantagem de mercado | [06](06-monetizacao-retencao.md), princípios 1 e 2 |
| R6 | **O mercado roda em ouro**, com um único câmbio dinheiro → ouro | [04b](04b-economia-mercados-protecoes-bots.md), §5.1; [06](06-monetizacao-retencao.md), princípio 9 |
| R7 | **A economia mora na web (PWA)**; apps de loja vendem só o que não circula | [05c](05c-rmt-legal-global-pagamentos.md), §6.5 |
| R8 | **RMT como módulo que liga e desliga por país** | [05b](05b-rmt-legal-brasil.md), "Como isso pode dar errado"; [05c](05c-rmt-legal-global-pagamentos.md), Implicações |
| R9 | **Gateways aprovam o modelo por escrito**, com dois provedores; disputas bem abaixo de 1,5% | [05c](05c-rmt-legal-global-pagamentos.md), §5.1 e §5.2 |

---

## 2. Os candidatos

Seis candidatos, mais uma linha de controle (nenhum RMT oficial). Para cada um: o que é, em que se inspira, que problema resolve, que comportamento incentiva e que risco cria.

### (a) Token de tempo e conveniência negociável por ouro
- **O que é:** item vendido pelo estúdio, que vale um período de assinatura (ou moeda premium fechada) e pode ser trocado por ouro.
- **Inspiração:** Bond do OSRS (uma revenda e destrave pago), WoW Token (sem troca direta, preço administrado), membership do IdleMMO e PLEX ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.A).
- **Problema:** dá vazão legal à demanda por ouro e uma rota ao premium para quem não paga.
- **Comportamento:** o pagante compra tempo de outros jogadores; o não pagante farma ouro para comprar premium.
- **Risco:** o ouro ganha preço em dinheiro, o que atrai bots; o preço do token em ouro vira assunto político.

### (b) Moeda premium negociável por ouro, em câmbio aberto e com limites
- **O que é:** a própria moeda premium, divisível, trocada por ouro num câmbio com estoques ou num livro, com teto diário.
- **Inspiração:** câmbio de gemas do GW2, Gold do Albion, sacos de Cowbells do MWI, cristais do Lost Ark.
- **Problema:** liquidez máxima; qualquer quantia vira ouro.
- **Comportamento:** câmbio contínuo, especulação, estoque de moeda premium à espera de alta.
- **Risco:** moeda paralela; moeda premium aceita por outro jogador se aproxima de arranjo de pagamento e de moeda eletrônica (luz amarela em [05b](05b-rmt-legal-brasil.md), §12, e [05c](05c-rmt-legal-global-pagamentos.md), §8); fraude mais difícil de reverter, porque a moeda é fungível.

### (c) Leilão oficial de contas ou personagens, sem saque
- **O que é:** bazar em que o vendedor anuncia a conta e o comprador paga em moeda premium transferível; o estúdio cobra comissão.
- **Inspiração:** Char Bazaar do Tibia (12% + 50 TC; ~721 milhões de TC em 2025).
- **Problema:** tira do mercado negro a venda de contas e o golpe da recuperação de conta.
- **Comportamento:** subir contas para vender.
- **Risco:** num idle, a conta acumula tempo ausente; vender a conta é vender o que um bot produz parado ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.C); distorce rankings e guerras de guilda; menores no circuito.

### (d) Crédito fechado em reais, sem saque
- **O que é:** carteira em reais; o jogador vende itens a outros e recebe crédito, que só gasta no jogo.
- **Inspiração:** carteira e Mercado da Comunidade Steam.
- **Problema:** deixa o jogador financiar compras com o que produz.
- **Comportamento:** todo item passa a ter preço em reais; farm por valor; especulação.
- **Risco:** zona cinzenta do Banco Central quando o crédito paga outro jogador ([05b](05b-rmt-legal-brasil.md), §11, modelo 5); a tese de Nova York contra a Valve; idles com mercado Steam viraram fazendas de bots ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.F).

### (e) Saque em dinheiro via parceiro licenciado
- **O que é:** venda entre jogadores em reais, ou recompra, com o dinheiro guardado e repassado por instituição autorizada (contas em nome dos jogadores, *split*), e o estúdio só com a comissão.
- **Inspiração:** Station Exchange → Live Gamer, Tilia no Second Life, DevEx do Roblox (só criadores).
- **Problema:** formaliza o mercado paralelo inteiro e remunera quem produz.
- **Comportamento:** jogar como trabalho; bots; fraude de cartão.
- **Risco:** luz vermelha no Brasil e na maioria dos países; PLD e KYC; tributo como plataforma; multas por *chargeback* (mais de US$ 1 milhão na Station Exchange); gateways e lojas recusam ([05b](05b-rmt-legal-brasil.md), §11; [05c](05c-rmt-legal-global-pagamentos.md), §7).

### (f) Híbrido em fases
- **O que é:** começar pelo candidato de menor risco e abrir os outros degraus só com gatilhos medidos e parecer.
- **Inspiração:** a sequência do Tibia (Premium Scrolls em 2012, coins em 2015, Bazaar em 2020) e a dos Bonds (RS3 em 2013, OSRS em 2015).
- **Problema:** aprender com dados reais antes de subir a escada.
- **Comportamento:** depende do degrau.
- **Risco:** prometer o degrau seguinte e não entregar; ou entregá-lo por pressão de receita, sem os gatilhos.

### (0) Controle: nenhum RMT oficial
- Só venda direta de assinatura e cosméticos, e repressão ao mercado paralelo (RuneScape 2007–2013, Garena no Free Fire). Serve de linha de base: o mercado paralelo existe mesmo assim ([05a](05a-rmt-modelos-mercado-paralelo.md), §4.1).

---

## 3. Avaliação comparativa

**[H]** 🟢 bom ou baixo risco · 🟡 depende de desenho ou parecer · 🔴 ruim ou alto risco. O candidato (f) herda a nota de (a) no lançamento e só soma o risco de outro degrau quando ele for aberto.

| Critério | (a) Token | (b) Moeda premium em câmbio | (c) Bazar de contas | (d) Crédito em reais | (e) Saque via parceiro | (0) Nenhum RMT |
|---|---|---|---|---|---|---|
| **Saúde da economia** (inflação, dreno) | 🟢 item discreto; taxa em ouro é dreno; preço vira índice | 🟡 moeda paralela; inflação explosiva no início (GW2 ~×76 em 2,5 anos) | 🟡 transfere riqueza acumulada; dreno só pela comissão | 🔴 todo item com preço em reais; patch vira política monetária (CS2) | 🔴 o jogo passa a servir ao mercado (Diablo III) | 🟡 mercado negro sem índice nem dreno |
| **Justiça para quem não paga** | 🟢 rota ao premium por ouro (IdleMMO: 65,2%) | 🟡 mesma rota, mas o capital pago compra o mercado (P2W de capital do MWI) | 🟡 comprar conta é comprar progresso | 🔴 quem paga compra itens de outros com dinheiro | 🔴 jogar vira trabalho; quem paga compra poder | 🟡 justo no papel; o mercado negro dá vantagem a quem paga por fora |
| **Valor para quem paga** | 🟢 compra tempo dos outros com segurança | 🟢 flexível | 🟢 alto, para quem vende e para quem compra | 🟢 o pagante monetiza o que produz | 🟢 o maior (dinheiro) | 🔴 só compras diretas |
| **Receita** | 🟡 recorrente (assinatura), limitada pelos tetos | 🟢 escala com o comércio | 🟡 comissão (~13% da receita da CipSoft) | 🟡 taxa sobre o volume | 🟡 comissão menos fraude e licença (SOE: US$ 3 mi de receita, US$ 1 mi em multas) | 🔴 a menor |
| **Risco legal no Brasil** | 🟢 circuito fechado (Lei 12.865, art. 6º, §3º) | 🟡 moeda transferível se aproxima de arranjo | 🟢/🟡 bazar em moeda premium | 🟡 propósito limitado em dúvida | 🔴 BCB, PLD, LCP, tributo de plataforma | 🟢 |
| **Risco legal fora** | 🟢 (🟡 Coreia; 🟡 menores no rascunho do DFA) | 🟡 moeda eletrônica (EMD2) | 🟡 | 🟡 Nova York × Valve | 🔴 FinCEN, EMD2, crime na Coreia | 🟢 |
| **Meios de pagamento e lojas** | 🟢 operador vendendo a própria moeda; bolsa só na web | 🟡 | 🟡 | 🔴 crédito de terceiros com limites (Stripe) | 🔴 Stripe, Adyen e Apple 5.3.3 | 🟢 |
| **Fraude, *chargeback*, lavagem** | 🟡 cartão roubado → token → ouro; contido por carência e por uma revenda só | 🔴 fungível, vários saltos, difícil de reverter | 🔴 conta roubada revendida; golpe de recuperação | 🔴 chaves do CS:GO; 77 mil contas roubadas por mês na Steam | 🔴 Station Exchange, Tilia, ItemBay | 🟡 a fraude acontece fora, mas o roubo de contas continua |
| **Menores (ECA Digital)** | 🟡 venda do token só para adulto verificado | 🟡 | 🔴 menor vendendo conta: negócio nulo ou anulável | 🔴 circuito de dinheiro | 🔴 | 🟢 |
| **Custo operacional e antifraude** | 🟡 antibot, carência, verificação de idade | 🔴 monitorar um câmbio contínuo | 🔴 disputas de posse, suporte, verificação | 🔴 | 🔴 KYC, PLD, COAF, parceiro, fiscal | 🟡 repressão sem receita que a pague |
| **Compatibilidade com o idle** (bots, ausente) | 🟢 se o ausente só gerar progresso preso, o bot só ganha o que joga ativo | 🟡 a liquidez contínua facilita o bot sacar | 🔴 a conta é tempo ausente acumulado: bot de nivelamento parado | 🔴 Banana, Bongo Cat, Task Bar Hero | 🔴 Axie, Pixels | 🟡 |
| **Contagem** | **7 🟢 · 4 🟡 · 0 🔴** | 2 🟢 · 7 🟡 · 2 🔴 | 1 🟢 · 6 🟡 · 4 🔴 | 1 🟢 · 3 🟡 · 7 🔴 | 1 🟢 · 1 🟡 · 9 🔴 | 4 🟢 · 5 🟡 · 2 🔴 |

Fontes das células: [05a](05a-rmt-modelos-mercado-paralelo.md) (§3.A a §3.I), [05b](05b-rmt-legal-brasil.md) (§11 e §12), [05c](05c-rmt-legal-global-pagamentos.md) (§5 a §8) e [06](06-monetizacao-retencao.md). O "~×76 em 2,5 anos" do GW2 é a conta de 0,27 para 20,66 de ouro por 100 gemas entre set./2012 e mai./2015 ([análise histórica](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis)).

**Leitura [H].** O token (a) é o único sem nenhuma luz vermelha. Os pontos amarelos dele são todos de **operação** (fraude, menores, custo), não de **estrutura**, e por isso se resolvem com regras de desenho (seção 5). Os candidatos (c), (d) e (e) falham justamente onde o idle é mais frágil: quando o que se vende acumula tempo ausente, ou quando qualquer item ganha preço em reais. A linha de controle (0) perde em receita e em valor para quem paga, e não elimina o mercado paralelo, só abre mão de competir com ele.

---

## 4. A recomendação

### 4.1 O modelo: (f) híbrido em fases, começando por um token-item de uma revenda

**[H]** Recomendamos lançar com **um único canal de RMT**: o token (nome provisório, a definir no conceito da Fase 2), com estas sete características.

1. **Item, não moeda.** Unidade indivisível, com número de série no livro-razão, uso fixo e nenhum valor monetário nos termos de uso. Não paga itens de outros jogadores, não vai para banco de guilda, não entra em leilão. *Por quê:* desenhado como item que só compra do estúdio, fica no porto seguro jurídico do circuito fechado ([05b](05b-rmt-legal-brasil.md), §6, "nossa leitura"); e o pergaminho do IdleMMO mostrou o que acontece quando o token vira meio de pagamento ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.A).
2. **Uso fixo e sem poder.** Vale 30 dias da assinatura de conforto proposta no [06](06-monetizacao-retencao.md) (princípio 5: cosmético mensal, passe da temporada, interface, privilégios de anfitrião) **ou** uma quantia de moeda premium fechada, que compra só cosméticos e serviços de conta. *Por quê:* princípios 1 e 2 do [06](06-monetizacao-retencao.md); o +50% de Silver do Premium do Albion é lido como *pay-to-win* na ficha do jogo, e a membership do IdleMMO, que dá +15% de XP, é descrita pelo próprio estúdio como o centro do debate sobre *pay-to-win* ([F02](fichas/F02-albion-online.md); [C04](fichas/C04-idlemmo.md); [06](06-monetizacao-retencao.md), §1).
3. **Uma revenda só.** Comprado em reais, pode ser vendido por ouro uma vez; quem o recebe por ouro fica com ele preso à conta, para consumir. *Por quê:* regra do Bond do OSRS ([OSRS Wiki](https://oldschool.runescape.wiki/w/Old_school_bond)); encurta a cadeia de lavagem para um salto e impede a moeda paralela.
4. **Bolsa dedicada, sem troca direta.** O vendedor entrega o token à bolsa e trava a cotação do momento; o comprador paga a cotação corrente; o preço é ajustado pelo sistema conforme a fila de ofertas e a demanda, com limite de variação por dia. *Por quê:* é o desenho do WoW Token ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/WoW_Token)). Com a população pequena de um idle no lançamento (o IdleMMO tem ~6,4 mil jogando no contador oficial, segundo o [07](07-tecnica-idles-online.md)), um livro de ordens aberto seria raso, manipulável e favorável a quem clica primeiro. **Divergência registrada:** o [04b](04b-economia-mercados-protecoes-bots.md) (§5.2, balcão D) propõe um livro dedicado com preço livre; a escolha final entre os dois vai para a simulação da Fase 3.
5. **Só adulto verificado vende.** Comprar o token com dinheiro é livre dentro dos tetos de gasto; **vendê-lo por ouro** exige 18+ com idade verificada (método aceito pela ANPD, não autodeclaração), segundo fator de autenticação e conta madura. Para contas sem verificação, o token chega preso e funciona como assinatura direta. *Por quê:* a venda do token é, na prática, a compra de ouro com dinheiro; mantê-la fora do alcance de menores atende ao ECA Digital e ao rascunho do DFA, que mira *pay-to-win* para menores ([05b](05b-rmt-legal-brasil.md), §2; [05c](05c-rmt-legal-global-pagamentos.md), §1.3). A verificação também funciona como "custo de conta" contra bots ([04b](04b-economia-mercados-protecoes-bots.md), §5.3, item 9). **Validar com advogado.**
6. **Taxa em ouro destruída.** Uma taxa sobre cada venda do token, paga em ouro e destruída, com o valor anunciado como bem público (por exemplo, buff de servidor ou meta comunitária). *Por quê:* a taxa do MWI virou buff coletivo e tornou o dreno aceitável ([C01](fichas/C01-milky-way-idle.md)); o câmbio do token tende a ser o maior volume de ouro do jogo (no EVE, o ISK gasto em PLEX equivaleu a 86% do ISK criado em jan./2026, [F01](fichas/F01-eve-online.md)), e é ali que um dreno proporcional pesa.
7. **Nenhum sorteio pago, com dinheiro ou com ouro.** O token não compra nada aleatório, e o ouro também não compra caixas, roletas ou sorteios. Drops aleatórios ganhos jogando ficam, com chances publicadas. *Por quê:* com token, o ouro tem preço em reais, e um sorteio comprado com ouro pode ser lido como "mediante pagamento" ([05b](05b-rmt-legal-brasil.md), §12, luz amarela 2); os Países Baixos, o Reino Unido e Nova York tratam prêmio com valor de mercado como jogo de azar ([05c](05c-rmt-legal-global-pagamentos.md), §8). **Validar com advogado** o caso de fabricação com chance de falha que consome material comprado com ouro.

**Justificativa em uma linha.** É o único modelo da escada que não exige virar empresa financeira, sobreviveu em todos os jogos que o adotaram e, com as sete características, fecha as três brechas que derrubaram os outros: moeda paralela, fraude de cartão em cadeia e venda de tempo ausente.

### 4.2 O que fica para depois, e sob que condições

| Ampliação | Quando considerar | Gatilhos para abrir (todos) | Referência |
|---|---|---|---|
| Tetos maiores de compra e de venda do token | 6 meses após o lançamento | Disputas abaixo de 0,5% das transações; fraude confirmada abaixo de 1% dos tokens vendidos; índice do token dentro da banda planejada | Visa: lojista "excessivo" a partir de 1,5% ([05c](05c-rmt-legal-global-pagamentos.md), §5.1) |
| Segunda revenda, com destrave pago em ouro | 6 a 12 meses | Os gatilhos acima, mais demanda medida por liquidez (fila de compradores sem vendedores) e nenhum padrão de mula no grafo | Destrave de 10% do Bond do OSRS ([OSRS Wiki](https://oldschool.runescape.wiki/w/Old_school_bond)) |
| Token como presente (comprar e dar a outra conta, chegando preso) | 6 a 12 meses | Detector de mula maduro; limite por par de contas | Risco de troca do IdleMMO ([C04](fichas/C04-idlemmo.md)) |
| Novos usos do token (serviços e cosméticos de guilda, entradas de temporada cosméticas) | A qualquer momento | Não dar poder; não criar demanda artificial por ouro | [06](06-monetizacao-retencao.md), princípio 1 |
| Bazar oficial de contas, pago em token ou moeda premium, sem saque | Não antes de 18 a 24 meses | Mercado cinza de contas medido e relevante; parecer favorável; regra que impeça vender tempo ausente acumulado (por exemplo, só depois de X horas de jogo ativo verificado, uma venda por conta a cada 12 meses, conta sai de guilda e de rankings, carência de 30 dias para o comprador competir); 18+ verificado nos dois lados | Char Bazaar ([F04](fichas/F04-tibia.md)); [05a](05a-rmt-modelos-mercado-paralelo.md), §3.C |

### 4.3 O que fica fora do roadmap

- **(d) Crédito em reais e (e) saque via parceiro:** **[H]** fora. Reabrir só se **todas** estas condições valerem juntas: (1) parecer favorável e estrutura com instituição autorizada que abra contas em nome dos jogadores, com *split*, e o estúdio fora do fluxo do dinheiro; (2) jogo sem nenhuma aleatoriedade paga; (3) PLD, KYC, guarda de registros por 5 anos e tributação como plataforma resolvidos, de preferência em pessoa jurídica separada ([05b](05b-rmt-legal-brasil.md), §8 e §9); (4) 12 meses seguidos com disputas abaixo de 0,5% e antibot maduro; (5) um caso de uso que não seja "jogar para ganhar". O único precedente sem desastre é o DevEx, em que só criadores sacam ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.E); se o jogo um dia tiver conteúdo criado por jogadores, esse é o formato a estudar.
- **(b) Moeda premium em câmbio aberto:** **[H]** fora enquanto o token resolver. Só se a simulação ou os dados mostrarem que o token é ilíquido demais, e mesmo assim como câmbio com estoques (GW2), nunca com a moeda premium circulando entre jogadores.

---

## 5. Regras de desenho mínimas

**[H]** Tudo nesta seção é proposta do estúdio. Os números são **pontos de partida para a simulação da Fase 3**, não decisões; as faixas observadas vêm das fichas e dos estudos citados.

### 5.1 O que é negociável e o que fica preso à conta

| Bem | Situação | Regra | Por quê |
|---|---|---|---|
| Token comprado em reais por adulto verificado | **Negociável uma vez** | Só na bolsa do token, depois da carência (5.4) | Bond do OSRS; WoW Token |
| Token comprado em reais por conta não verificada | Preso | Funciona como assinatura direta | ECA Digital; R3 |
| Token comprado com ouro | Preso | Só se consome | Uma revenda só (4.1, item 3) |
| Moeda premium | Presa, sempre | Nunca transferível, nunca paga outro jogador | Circuito fechado ([05b](05b-rmt-legal-brasil.md), §6) |
| Assinatura, passe e cosméticos da loja | Presos | — | O cosmético da loja não vira dinheiro nem poder ([06](06-monetizacao-retencao.md), princípio 7; [F08](fichas/F08-black-desert.md)) |
| Ouro | Negociável só pelos balcões | Sem troca direta de ouro no lançamento | [04b](04b-economia-mercados-protecoes-bots.md), §5.2 |
| Itens e materiais de ação ativa verificada | Negociáveis | Teto de valor negociável por conta e por período | [04b](04b-economia-mercados-protecoes-bots.md), §5.3, item 8 |
| Produção do tempo ausente (offline) | **Presa** | Vira progresso pessoal; nunca item negociável nem ouro sacável no mercado | Banana e Bongo Cat ([G05](fichas/G05-banana-e-bongo-cat.md)); mesas de missões do WoW ([F06](fichas/F06-world-of-warcraft.md)) |
| Recompensas de janelas ativas (chefes, eventos) | Em boa parte presas | Parte negociável, com teto | [03](03-alem-do-idle.md) |
| Contas e personagens | Não negociáveis | Venda e compartilhamento proibidos nos termos | Seção 4.2; [05a](05a-rmt-modelos-mercado-paralelo.md), §3.C |
| Automação, teto offline, taxa do ausente | Nunca à venda | — | [06](06-monetizacao-retencao.md), princípio 2; [02a](02a-teoria-design-idle.md) |

### 5.2 Taxas

| Taxa | Ponto de partida | Faixa observada | Destino |
|---|---|---|---|
| Venda do token por ouro | 10% a 15% do preço, em ouro | 10% (destrave do Bond do OSRS); 17,5% (câmbio do GW2); 18% (sacos de Cowbells do MWI) | Destruída; o valor é anunciado como bem público |
| Destrave da segunda revenda (fase posterior) | 10% | 10% (OSRS) | Destruída |
| Balcões de itens | Os do [04b](04b-economia-mercados-protecoes-bots.md), §5.5 (por exemplo, 4% na venda da bolsa) | 1% a 15% | Destruída ou bem público |

Fontes das faixas: [OSRS Wiki](https://oldschool.runescape.wiki/w/Old_school_bond); [wiki do GW2](https://wiki.guildwars2.com/wiki/Currency_Exchange); [wiki do MWI](https://milkywayidle.wiki.gg/wiki/Marketplace).

**Não fazer:** taxa sobre a compra do token com dinheiro além do preço anunciado; taxa sobre o câmbio como instrumento de controle da inflação (falhou no Albion, [F02](fichas/F02-albion-online.md)); desconto de taxa como benefício da assinatura (favorece quem já é rico, [F08](fichas/F08-black-desert.md)).

### 5.3 Limites

| Limite | Ponto de partida | Por quê |
|---|---|---|
| Teto mensal de gasto em dinheiro (todas as compras) | Igual para todos por padrão; aumento só para adulto verificado, por pedido, com esfriamento depois de compra grande | [06](06-monetizacao-retencao.md), princípio 10 |
| Tokens vendidos por ouro por conta | Poucos por semana (simular de 2 a 5) | Limita o "P2W de capital" e o dano de uma conta comprometida ([C01](fichas/C01-milky-way-idle.md)) |
| Tokens comprados com ouro por conta | Teto mensal (simular de 3 a 6) | Evita que poucos ricos esvaziem a fila |
| Contas novas | Não vendem token antes de um mínimo de dias e de horas de jogo ativo | OSRS: 20 h, 10 *quest points* e nível total 100 para negociar itens muito "botados" ([OSRS Wiki](https://oldschool.runescape.wiki/w/New_player_guide)) |
| Variação do preço do token | Banda diária (simular de ±5% a ±10%), com disjuntor | Banda de ±10% do MWI ([C01](fichas/C01-milky-way-idle.md)); salto do Krono no EverQuest ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.A) |

### 5.4 Carência contra *chargeback* e regra de reversão

**[F] Os prazos que a carência enfrenta:** no cartão, o titular tem em geral cerca de 120 dias para contestar uma compra por fraude ([Chargebacks911](https://chargebacks911.com/chargeback-rules/chargeback-time-limits/visa-chargeback-time-limit/); [ClearSale](https://blog.clear.sale/understanding-visa-chargeback-time-limits)); no Pix, a vítima pode pedir o MED em até 80 dias, e desde 1/9/2026 o recebedor tem 80 dias para contestar uma devolução que considere indevida ([Jornal Opção](https://www.jornalopcao.com.br/ultimas-noticias/prazo-para-contestar-devolucao-de-pix-em-caso-de-golpe-sobe-de-30-para-80-dias-864051/); [Convergência Digital](https://convergenciadigital.com.br/mercado/entra-em-vigor-regra-do-pix-amplia-prazo-para-contestar-golpe/)). São fontes de mercado e de imprensa; confirmar com o adquirente e com o manual do BCB.

**[H] Leitura:** nenhuma carência cobre 80 a 120 dias sem matar o produto. A carência serve para barrar a fraude rápida (o fraudador quer converter antes de a vítima perceber); o resto fica com limites, verificação e reversão pelo livro-razão.

| Situação | Carência antes de poder vender o token | Referência |
|---|---|---|
| Primeira compra da conta, qualquer meio | 7 dias | Trava de 72 h do MWI ([C01](fichas/C01-milky-way-idle.md)); retenção de 7 dias no mercado da Steam ([SteamDB](https://steamdb.com/en/markets/steam)) |
| Pix, conta com histórico limpo | 72 horas | — |
| Cartão, conta com histórico limpo | 7 dias | Coins do Tibia transferíveis conforme o meio de pagamento ([F04](fichas/F04-tibia.md)) |
| Compra fora do padrão da conta ou com sinal de risco | Até 30 dias | A própria GGMAX retém de 7 a 30 dias ([05a](05a-rmt-modelos-mercado-paralelo.md), §4.2) |

**Regra de reversão (proporcional, publicada antes do lançamento):**
1. Token contestado e ainda não vendido: só ele é revogado. A conta não é bloqueada por inteiro sem processo, para não repetir o que a FTC condenou no caso Epic ([05c](05c-rmt-legal-global-pagamentos.md), §3.1).
2. Token contestado e já vendido: o comprador de boa-fé **fica** com o token, e o estúdio absorve a perda; o vendedor recebe uma dívida em ouro igual ao que recebeu, perde a bolsa até quitar e é banido se houver fraude; o ouro é rastreado no livro-razão e congelado onde ainda estiver identificável.
3. Compra de menor sem autorização que precise ser devolvida: mesma regra do item 2; o estúdio absorve ([05b](05b-rmt-legal-brasil.md), §10).
4. Disjuntor: se a taxa de disputas passar de um limiar interno (bem abaixo de 1,5%), a venda do token por ouro é suspensa enquanto a compra direta continua.

### 5.5 Verificação de idade e KYC, em níveis

| Nível | Libera | Exige |
|---|---|---|
| **N0** (padrão) | Jogar; mercado em ouro; comprar token com ouro; comprar com dinheiro dentro do teto (o token chega preso) | E-mail verificado; modo protegido para menores até a idade ser verificada; compras de criança só com consentimento dos pais ([Lei 14.852, art. 17](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14852.htm)) |
| **N1** | Vender token por ouro; tetos maiores; anúncios de alto valor | 18+ verificado por método aceito pela ANPD (não autodeclaração); segundo fator de autenticação; conta madura. O estúdio não guarda documento: usa fornecedor, com minimização de dados |
| **N2** (só se um dia houver dinheiro saindo) | Saque ou venda em reais | KYC completo pelo parceiro licenciado (nome, CPF, conta de mesma titularidade), PLD, guarda por 5 anos ([05b](05b-rmt-legal-brasil.md), §8) |

### 5.6 Índice público do token e relatório econômico

- **Publicado no jogo e em dados abertos (com atraso, como o MWI):** preço do token em ouro (série horária e diária), volume da bolsa, ouro destruído pela taxa do token, massa de ouro em circulação, fontes e drenos por categoria, parcela das assinaturas obtidas com ouro, banimentos por RMT e bot, e uma estimativa do preço do nosso ouro em sites de RMT.
- **Relatório mensal**, no modelo do MER do EVE e das revisões econômicas do Torn, com o porquê de cada mudança ([F01](fichas/F01-eve-online.md); [D01](fichas/D01-torn.md)).
- **Meta de política monetária escrita:** por exemplo, crescimento da massa de ouro abaixo de um teto anual, como a meta de menos de 20% ao ano do Torn ([Review 2016](https://www.torn.com/economic_reports/2016review.pdf)). O número vem da Fase 3.
- **Alarmes internos:** salto do token acima de X% em 24 h (sinal de fraude, como o Krono); criação de ouro acima do orçamento do sistema; concentração de vendas do token em poucas contas.
- **Nunca:** dar token de graça em eventos ou recompensas. A queda do PLEX coincidiu com essa injeção ([F01](fichas/F01-eve-online.md)).

### 5.7 Política contra o RMT ilegal

- **Termos de uso:** proibido vender ouro, itens, contas ou serviços por dinheiro fora do canal oficial, usar bots e compartilhar conta; sanções escritas.
- **Vendedor:** banimento e confisco, com o valor confiscado destruído, nunca revendido ([04b](04b-economia-mercados-protecoes-bots.md), §3.10).
- **Comprador:** dívida em ouro quitável jogando e perda de acesso à bolsa até quitar; reincidência leva ao banimento (modelo do TL, [F09](fichas/F09-throne-and-liberty-e-lost-ark.md)).
- **Relatório público de banimentos** a cada trimestre ([C01](fichas/C01-milky-way-idle.md)).
- **Nenhuma API, integração ou parceria com sites de venda de itens** ([05c](05c-rmt-legal-global-pagamentos.md), §4.2, caso Lasthlas).
- **Monitoramento** de GGMAX, PlayerAuctions e similares, para medir o preço do nosso ouro e identificar vendedores. **Validar com advogado** o que é permitido fazer com essa informação.

### 5.8 Contrato público, reembolso, plataformas e países

- **Contrato público de monetização** com a frase "o dinheiro só entra", a lista do que nunca será vendido e mudanças só com 30 dias de aviso ([06](06-monetizacao-retencao.md), princípio 11). Marketing sem promessa de renda ("jogue e ganhe") ([G03](fichas/G03-axie-infinity-e-web3.md)).
- **Reembolso:** token não usado e não vendido, em 7 dias no Brasil ([CDC, art. 49](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm)) e 14 dias na UE (princípios da CPC, [05c](05c-rmt-legal-global-pagamentos.md), §1.1). Token vendido ou consumido: sem reembolso, **a validar com advogado**.
- **Plataformas:** a bolsa do token mora só na web (PWA); apps de loja vendem só a assinatura presa via IAP, ou nada, com link externo onde permitido. A Apple não deixa trocar itens comprados via IAP ([05c](05c-rmt-legal-global-pagamentos.md), §6.1).
- **Países:** bolsa do token desligada na Coreia até parecer local; China e Índia fora do lançamento; preço em euros e regras da CPC na UE ([05c](05c-rmt-legal-global-pagamentos.md), §7).

---

## 6. Plano em fases

**[H]** As fases abaixo são do RMT, não do projeto; a coluna "Quando" liga cada uma às fases do projeto.

| Fase do RMT | Quando | O que entra | Critério para avançar |
|---|---|---|---|
| **0. Fundação** | Fases 3 a 5 do projeto, antes de qualquer jogador | Livro-razão de partidas dobradas com série por token; risco de troca; grafo antimula; contrato público e termos de uso; parecer sobre as perguntas ★ (seção 8); aprovação do modelo por escrito com dois PSPs; CNPJ aberto cedo (o Pix Automático exige 6 meses, [05b](05b-rmt-legal-brasil.md), §6); fornecedor de verificação de idade; simulação do token na Fase 3 (inclusive 90 dias sem jogador novo, teste do [G03](fichas/G03-axie-infinity-e-web3.md)) | Parecer sem luz vermelha; simulação estável nos cenários de estresse |
| **1. Teste fechado** | Alfa e beta com *wipe* | Bolsa do token com tokens de teste, sem dinheiro, apagados no *wipe*; medição de bots e mulas; linha de base do preço do nosso ouro em sites de RMT | Índice do token se comporta como na simulação; detecção de mula funcionando |
| **2. Lançamento** | Lançamento, Brasil primeiro | Token com uma revenda, tetos conservadores, carência, N1 para vender, índice e relatório mensal; bolsa desligada na Coreia | — |
| **3. Ajuste** | 6 a 12 meses depois | Tetos maiores; segunda revenda com destrave em ouro; token como presente preso; novos usos sem poder | Todos os gatilhos da seção 4.2 |
| **4. Reavaliação** | 18 a 24 meses depois | Decisão sobre o bazar de contas (seção 4.2); revisão das condições de reabertura de (d) e (e) (seção 4.3) | Parecer novo; dados de mercado cinza; histórico de disputas |

**Indicadores que acompanham todas as fases [H]** (metas iniciais, a calibrar):
- disputas (*chargebacks* mais fraude) abaixo de 0,5% das transações, com o limite das bandeiras em 1,5% ([05c](05c-rmt-legal-global-pagamentos.md), §5.1);
- parcela das assinaturas obtidas com ouro entre 30% e 65% (65,2% no IdleMMO);
- preço do nosso ouro no mercado cinza perto do oficial (no OSRS, 45% do oficial é sinal de canal oficial perdendo);
- parcela das reviews negativas que citam monetização abaixo de 10% ([06](06-monetizacao-retencao.md), princípio 12);
- diferença de progresso entre o pagante mediano e o não pagante mediano, publicada.

---

## 7. Alternativas

| Alternativa | Quando escolher | O que se perde | Referência |
|---|---|---|---|
| **Lançar sem token** e abri-lo depois de 3 a 6 meses de dados | Se o parecer demorar, ou se a simulação da Fase 3 não fechar | O não pagante fica sem rota ao premium no início, e o mercado paralelo ocupa o vazio; a lição do RuneScape é ter o canal oficial desde cedo | [05a](05a-rmt-modelos-mercado-paralelo.md), §4.1 |
| **Livro de ordens aberto** para o token, no lugar da fila administrada | Se a população no lançamento for grande o bastante para um livro líquido | Mais exposição a manipulação e a bots de velocidade | [04b](04b-economia-mercados-protecoes-bots.md), §5.2 |
| **Moeda premium em câmbio com estoques** (GW2), com teto diário | Se o conceito da Fase 2 tiver muitos usos fracionados da moeda premium | Luz amarela jurídica; moeda paralela; reversão de fraude mais difícil | Candidato (b) |
| **Bazar de contas desde o lançamento** | Se o conceito da Fase 2 tiver personagens sem acúmulo relevante de tempo ausente (improvável num idle) | Bots de nivelamento; menores; rankings | Candidato (c) |
| **Nenhum RMT, para sempre** | Se o advogado disser que o token não cabe no circuito fechado | Receita e valor para quem paga; o mercado paralelo continua sem concorrência | Linha (0) |

---

## 8. O que precisa ser validado por advogado

As marcadas com ★ travam o GDD. Os números entre parênteses remetem às perguntas do [05b](05b-rmt-legal-brasil.md) (seção 13) e do [05c](05c-rmt-legal-global-pagamentos.md) (seção 9).

1. ★ O token desenhado como item, vendido pelo estúdio e revendido uma vez por ouro numa bolsa do estúdio, cabe no art. 6º, §3º, da Lei 12.865 e fora da definição de ativo virtual da Lei 14.478 (art. 3º, III)? A bolsa administrada faz do estúdio intermediário de alguma coisa? (05b 15 e 19)
2. ★ O ouro passa a ser "pagamento" para o ECA Digital e para a LCP por poder ser obtido via token? Isso alcança sorteios comprados com ouro e fabricação com chance de falha que consome material comprado com ouro? (05b 1 e 5)
3. ★ Que método de verificação de idade a ANPD aceita para liberar a venda do token? Podemos reaproveitar a verificação como sinal antifraude sem violar o ECA Digital e a LGPD? (05b 6 e 22)
4. ★ Um token comprado por adulto e revendido por ouro a um menor conta como *pay-to-progress* do menor no rascunho do DFA, ou como uso compulsivo no Decreto 12.880? (05c 4; 05b 8)
5. ★ Como aplicar o arrependimento de 7 dias (CDC) e de 14 dias (UE) ao token já vendido ou consumido? A regra de reversão da seção 5.4 (o comprador de boa-fé fica com o token; o vendedor recebe dívida) é defensável? (05b 11 e 20; 05c 3)
6. ★ A dívida em ouro e o confisco previstos nos termos são cláusulas válidas diante do art. 51 do CDC? E a resposta proporcional a *chargeback* atende ao que a FTC condenou no caso Epic? (05b 13; 05c 9)
7. ★ O modelo passa na aprovação escrita de pelo menos dois gateways (qual MCC, que reserva) e nas regras das lojas, com a bolsa só na web? (05c 14 e 15)
8. ★ Tributação: em que subitem do ISS e com que regime de IBS e CBS cai a venda do token (licença de uso, conteúdo, adiantamento de serviço)? A receita do token não usado é diferida? (05b 23)
9. Coreia: a bolsa do token viola o art. 32(1)(7)? A partir de quando precisamos de agente local? (05c 11)
10. Japão, se for mercado: a moeda premium e o token não usado entram no regime de meio de pagamento pré-pago, com garantia de 50%? (05c 12)
11. O que podemos fazer legalmente com sites de RMT de terceiros (compras de teste, notificações, ação por concorrência desleal ou violação de termos)? ([04b](04b-economia-mercados-protecoes-bots.md), §4.5)
12. Que faixa de classificação indicativa esperar com mercado, token, chat e compras, num PWA fora das lojas? (05b 10)

---

## Implicações para o nosso jogo

- **[H] Para a Fase 2 (conceito):** os três conceitos precisam caber nas restrições R1 a R9. Em especial, o conceito decide o que a assinatura oferece sem dar poder, garante que o tempo ausente só gera progresso preso e não usa nenhum sorteio pago, nem com ouro. Um conceito que dependa de gacha é incompatível com esta recomendação.
- **[H] Para a Fase 3 (GDD e simulação):** simular o preço do token em ouro em pelo menos quatro cenários (crescimento normal, 90 dias sem jogador novo, ataque de bots, onda de compras de pagantes), com a taxa de 10% a 15%, a fila administrada contra o livro aberto, os tetos e as carências da seção 5.
- **[H] Para a Fase 4 (arquitetura):** número de série por token no livro-razão; motor de risco por conta e por par de contas; integração com o fornecedor de verificação de idade; módulo de RMT ligado e desligado por país; dois PSPs; disjuntores da bolsa.
- **[H] Para a operação:** o RMT tem custo fixo permanente (antifraude, antibot, suporte, relatório mensal). Ele precisa estar no orçamento do lançamento, não depois.

## Como isso pode dar errado

1. **O token encarece demais em ouro e o não pagante perde a rota.** **[F]** No GW2, o ouro perdeu ~98% do valor em gemas em 2,5 anos ([F07](fichas/F07-guild-wars-2.md)). *Mitigação:* fontes de ouro apertadas no lançamento, drenos que escalam com o comércio, meta de massa monetária publicada, simulação antes do lançamento.
2. **O token despenca e o pagante não vê valor em vendê-lo.** **[F]** O PLEX caiu de ~6 para ~4,5 milhões de ISK depois de distribuição grátis e unificação do mercado ([F01](fichas/F01-eve-online.md)). *Mitigação:* nunca dar token de graça; usos do token com demanda real; nenhuma emissão por evento.
3. ***Pay-to-win* pela porta dos fundos.** **[H]** O pagante vende tokens e compra o mercado inteiro de ouro; foi a queixa de "P2W de capital" no MWI e a lógica do Diablo III ([C01](fichas/C01-milky-way-idle.md); [G01](fichas/G01-diablo-3-casa-de-leilao.md)). *Mitigação:* tetos de venda do token; o mercado negocia insumos, não o poder final ([04b](04b-economia-mercados-protecoes-bots.md), §5.1, princípio 8); publicar a diferença de progresso entre pagante e não pagante.
4. **Fraude em cadeia e gateway encerrando a conta.** **[F]** Station Exchange: mais de US$ 1 milhão em multas por *chargeback* ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.D). *Mitigação:* carência, N1 para vender, limites para contas novas, disjuntor por taxa de disputas, dois PSPs, aprovação escrita do modelo.
5. **Bots farmando ouro para vender contra o token.** **[F]** Lost Ark, com câmbio oficial, baniu mais de 1 milhão de contas no primeiro mês ([05a](05a-rmt-modelos-mercado-paralelo.md), §4.5). *Mitigação:* o ausente não gera nada negociável; recompensas ativas em boa parte presas; custo de conta; detecção por grafo e por regularidade ([04b](04b-economia-mercados-protecoes-bots.md), §4.7).
6. **A verificação de idade espanta quem venderia o token.** **[H]** Poucos vendedores verificados deixam a fila vazia e o token caro em ouro. *Mitigação:* verificação simples e única por conta, com o fornecedor mais barato aceito pela ANPD; medir a taxa de conversão do fluxo; se preciso, o estúdio aumenta o valor do token para quem vende (mais dias, não mais poder).
7. **Conflito de interesse: o estúdio deixa o jogo mais lento para vender mais token.** **[H]** No idle, o produto vendido costuma ser a espera ([02a](02a-teoria-design-idle.md), Shokrizade). *Mitigação:* contrato público; o tempo até as metas principais é publicado e só muda a favor do jogador; o indicador de justiça pesa tanto quanto o de receita.
8. **O mercado paralelo migra para contas e para "pilotagem".** **[H]** Com o ouro oficializado, o valor clandestino restante são contas evoluídas e o serviço de jogar no lugar do outro. *Mitigação:* termos claros, sinais de login de vários dispositivos e regiões, contas com pouco valor de revenda (vínculos sociais, temporadas), monitoramento da GGMAX.
9. **A regulação muda e o token vira outra coisa.** **[F]** Em pouco mais de um ano vieram o ECA Digital, a MP 1.394, as resoluções de ativos virtuais do BCB e a proposta do DFA ([05b](05b-rmt-legal-brasil.md); [05c](05c-rmt-legal-global-pagamentos.md)). *Mitigação:* módulo por país; capacidade de converter todo token negociável em assinatura presa com um interruptor; revisão jurídica a cada marco.
10. **Cada ajuste vira crise política.** **[F]** A retirada sem aviso do piso do point do Torn gerou pânico; a alta do imposto do EVE sem explicação gerou revolta ([D01](fichas/D01-torn.md); [F01](fichas/F01-eve-online.md)). *Mitigação:* política monetária escrita, relatório mensal, 30 dias de aviso e compensação.
11. **Fila administrada opaca vira suspeita de manipulação pelo estúdio.** **[H]** No WoW o algoritmo não é público. *Mitigação:* publicar a regra de ajuste do preço e os dados da fila com atraso; o estúdio nunca compra nem vende tokens na própria bolsa.
12. **Abuso interno.** **[F]** O maior roubo do OSRS veio de um funcionário com ferramenta de suporte ([F03](fichas/F03-runescape-e-osrs.md)). *Mitigação:* emissão de token e ajustes de saldo só com dupla aprovação e trilha de auditoria ([04b](04b-economia-mercados-protecoes-bots.md), §5.3, item 15).

---

## Perguntas de decisão para o Gabriel

**1. Qual RMT entra no lançamento?**
- (A) Token-item com uma revenda, dinheiro só entrando, bolsa só na web.
- (B) Lançar sem token e abri-lo depois de 3 a 6 meses de dados.
- (C) Moeda premium em câmbio aberto, com teto diário (modelo GW2).
- **Recomendação: (A).** É o único candidato sem luz vermelha (seção 3), e o canal oficial funciona melhor quando existe desde o início, antes de o mercado paralelo se instalar. (B) é o plano de contingência se o parecer atrasar.

**2. O que o token compra?**
- (A) A assinatura de conforto (cosmético mensal, passe, interface, anfitrião) ou moeda premium fechada para cosméticos.
- (B) O mesmo, mais bônus de renda ou de XP (como o Premium do Albion e a membership do IdleMMO).
- (C) Só cosméticos.
- **Recomendação: (A).** (B) cola o rótulo de *pay-to-win* e quebra a promessa de que a espera é igual para todos ([06](06-monetizacao-retencao.md), princípios 1 e 2); (C) tira valor demais do token e enfraquece a rota do não pagante.

**3. Vai existir alguma aleatoriedade paga?**
- (A) Nenhuma, nem com dinheiro nem com ouro; drops grátis com chances publicadas.
- (B) Nenhuma com dinheiro; caixas compradas com ouro permitidas.
- (C) Caixas pagas só para adultos verificados.
- **Recomendação: (A).** Com token, o ouro tem preço em reais, e (B) e (C) aproximam o jogo do jogo de azar no Brasil, nos Países Baixos, no Reino Unido e em Nova York ([05b](05b-rmt-legal-brasil.md), §12; [05c](05c-rmt-legal-global-pagamentos.md), §8). O custo é abrir mão do motor de receita mais comum do mobile, o que o [06](06-monetizacao-retencao.md) já aceitou.

**4. Quem pode vender o token por ouro?**
- (A) Só adulto com idade verificada, conta madura e segundo fator; para os demais, o token chega preso.
- (B) Qualquer conta madura com segundo fator, e menores com controle parental.
- (C) O jogo inteiro só para maiores de 18.
- **Recomendação: (A).** Concentra a fricção em quem converte dinheiro em ouro, atende ao ECA Digital e funciona como custo de conta contra bots, sem fechar o jogo para menores. (C) resolve o jurídico, mas corta público e não dispensa a verificação.

**5. Até onde o dinheiro pode ir no roadmap?**
- (A) O dinheiro só entra: saque, leilão em reais, crédito em reais e venda de contas ficam fora do roadmap, com as condições de reavaliação escritas (seções 4.2 e 4.3).
- (B) Bazar de contas pago em token ou moeda premium entre 18 e 24 meses (modelo Tibia).
- (C) Saque via parceiro licenciado em 2 a 3 anos.
- **Recomendação: (A).** Todos os modelos em que o dinheiro sai acabaram fechados, terceirizados ou vendidos ([05a](05a-rmt-modelos-mercado-paralelo.md), §3.I), e num idle a conta é tempo ausente acumulado. Escrever "o dinheiro só entra" no contrato público também protege o estúdio da tentação do degrau seguinte.

---

## Fontes

Todas acessadas em novembro de 2026. As demais fontes estão nos estudos e fichas linkados ao longo do texto.

**Estudos e fichas do projeto (base desta recomendação)**
1. [05a — Modelos de RMT e mercado paralelo](05a-rmt-modelos-mercado-paralelo.md).
2. [05b — Riscos legais no Brasil](05b-rmt-legal-brasil.md).
3. [05c — Riscos legais globais, pagamentos e lojas](05c-rmt-legal-global-pagamentos.md).
4. [04b — Mercados, proteções e bots](04b-economia-mercados-protecoes-bots.md) e [04a — Fontes, drenos e inflação](04a-economia-fontes-drenos-inflacao.md).
5. [06 — Monetização e retenção](06-monetizacao-retencao.md); [07 — Técnica de idles online](07-tecnica-idles-online.md); [02a — Teoria do design idle](02a-teoria-design-idle.md); [03 — Além do idle](03-alem-do-idle.md).
6. Fichas [C01](fichas/C01-milky-way-idle.md), [C04](fichas/C04-idlemmo.md), [D01](fichas/D01-torn.md), [F01](fichas/F01-eve-online.md), [F02](fichas/F02-albion-online.md), [F03](fichas/F03-runescape-e-osrs.md), [F04](fichas/F04-tibia.md), [F06](fichas/F06-world-of-warcraft.md), [F07](fichas/F07-guild-wars-2.md), [F08](fichas/F08-black-desert.md), [F09](fichas/F09-throne-and-liberty-e-lost-ark.md), [G01](fichas/G01-diablo-3-casa-de-leilao.md), [G03](fichas/G03-axie-infinity-e-web3.md), [G05](fichas/G05-banana-e-bongo-cat.md).

**Fontes externas citadas diretamente**
7. [Old school bond](https://oldschool.runescape.wiki/w/Old_school_bond) e [New player guide](https://oldschool.runescape.wiki/w/New_player_guide) — wiki (OSRS).
8. [WoW Token](https://warcraft.wiki.gg/wiki/WoW_Token) — wiki.
9. [Currency Exchange](https://wiki.guildwars2.com/wiki/Currency_Exchange) e [análise histórica do câmbio](https://wiki.guildwars2.com/wiki/User:1Maven/Currency_exchange_historic_data_analysis) — wiki oficial (GW2).
10. [Marketplace](https://milkywayidle.wiki.gg/wiki/Marketplace) — wiki do Milky Way Idle, revisada pelo desenvolvedor.
11. [Torn Economic Review 2016](https://www.torn.com/economic_reports/2016review.pdf) — oficial (Torn).
12. [Steam Market review](https://steamdb.com/en/markets/steam) — dados de terceiro.
13. [Visa chargeback time limit](https://chargebacks911.com/chargeback-rules/chargeback-time-limits/visa-chargeback-time-limit/) — fornecedor do setor (Chargebacks911); [Understanding Visa chargeback time limits](https://blog.clear.sale/understanding-visa-chargeback-time-limits) — fornecedor do setor (ClearSale).
14. [Prazo para contestar devolução de Pix sobe de 30 para 80 dias](https://www.jornalopcao.com.br/ultimas-noticias/prazo-para-contestar-devolucao-de-pix-em-caso-de-golpe-sobe-de-30-para-80-dias-864051/) — imprensa (Jornal Opção) — set./2026; [Entra em vigor regra do Pix que amplia prazo](https://convergenciadigital.com.br/mercado/entra-em-vigor-regra-do-pix-amplia-prazo-para-contestar-golpe/) — imprensa (Convergência Digital) — set./2026.
15. [Lei 14.852/2024 (Marco Legal dos Jogos Eletrônicos)](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14852.htm) e [Código de Defesa do Consumidor](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm) — legislação (Planalto).

