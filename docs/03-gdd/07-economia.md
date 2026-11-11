# GDD 07 — Economia

> **Escopo.** As quatro moedas, o teto de emissão negociável, a tabela de fontes e drenos de ouro e de itens, os cinco canais de troca (Bolsa, Feira, Leilão, Câmbio e Troca), o Coin, o Bazar de Personagens, o Baú Misterioso, as alavancas contra inflação e manipulação, a constituição econômica da Cidade, o painel diário e a lista de parâmetros para a simulação (módulo 08).
> **Base:** [bíblia](00-biblia.md) (glossário, seção 6.6 e regras da seção 8), [conceito](../02-conceito.md) (piso P1–P12), [PROGRESSO](../PROGRESSO.md) (decisões do Gabriel), [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), [05d](../01-pesquisa/05d-rmt-recomendacao.md), [00-sintese](../01-pesquisa/00-sintese.md) e as leis 15 a 22 do [02](../01-pesquisa/02-padroes-matriz-leis.md).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação.** Onde ele depende de outro módulo escrito em paralelo, aparece "a reconciliar com o módulo X".
> **Decisões que este módulo não reabre:** Coins (moeda divisível) creditados por doação em reais, sem reembolso; conta suspensa até regularizar quando a doação é contestada no banco (chargeback, MED); Coins e ouro transferíveis livremente; RMT informal não intermediado nem proibido; Bazar de Personagens desde o lançamento; Baú comprável com Coins e negociável por ouro, com conteúdo em itens; jogo 18+ com idade verificada; sem parecer jurídico (risco assumido pelo Gabriel). Onde uma dessas decisões cria tensão com a pesquisa, o módulo registra a tensão e desenha a mitigação, sem mudar a decisão.

## 0. Resumo

1. **O ouro só nasce em quatro lugares, todos com orçamento:** venda a NPC (curva logarítmica por conta e por dia), encomendas, cercos e eventos com inscrição, e o começo do jogo. O combate idle solta itens, nunca moedas. Quem controla essas quatro torneiras controla a emissão (seção 4).
2. **O teto de emissão é um portão de saída, não uma marca no item.** O jogador produz à vontade e usa tudo o que produz. O teto limita só o valor que ele mesmo criou e que sai da conta por dia (venda, Troca ou NPC), medido em **valor de referência fixo** (trabalho embutido × 2,0 ouro por minuto), com o crédito dos insumos na mesma régua (revisão de consistência: R18 e R24). Ele cresce de forma linear com a progressão, acumula por até 3 dias e começa reduzido nas contas novas. O excedente fica na conta para uso próprio ou vira obra e Mérito (seção 3).
3. **O dreno principal é o consumo embutido:** insumos vendidos por NPC em toda receita de T2 para cima e na partida das expedições, indexados ao IPC (até ±10% ao mês na 1ª Era e ±2% depois; revisão de consistência: R21), mais desgaste e quebra. As taxas são freio, não âncora (seções 4 e 9).
4. **Toda forma de mover valor custa o mesmo:** cerca de 6% para trocar item por ouro em qualquer canal, 12% para converter Coins em ouro em qualquer canal e 3% para presentear. Sem isso, o comércio foge para o canal mais barato e o índice perde o sentido (seção 5.6).
5. **O Câmbio forma o preço do Coin, em unidades, num leilão de chamada a cada hora:** um preço único por Coin em cada rodada, com banda de ±3% por rodada e ±10% por dia. Com 2 a 5 mil simultâneos, o Câmbio terá poucas operações por hora. Um livro contínuo seria raso e premiaria velocidade, e uma fila administrada poria o estúdio como culpado de cada alta. O leilão de chamada junta a liquidez, tira a vantagem do clique e gera o índice (seção 5.4).
6. **Bazar de Personagens:** vende o personagem, não o cidadão. Vão junto o progresso, os ajudantes, a casa, os cosméticos aplicados e o equipamento em uso, que fica preso ao comprador por 30 dias. Ficam com o vendedor o Mérito, o ouro, o Coin e o armazém. A taxa de 10% é paga em Coins e destruída. O anúncio só abre depois de um aviso de 72 h ao dono da conta (seção 7).
7. **Baú Misterioso:** custa 5 Coins (R$ 5, preço do 11; revisão de consistência: R17), publica a tabela de chances com garantia, tem tiragem máxima para o topo e teto de compra e de abertura por mês. Seu conteúdo é negociável até ser aplicado, e aplicar prende o item à conta, o que funciona como dreno de cosméticos (seção 8).
8. **Constituição pública de 14 artigos:** a meta do IPC vai de 0% a +8% ao ano. O Conselho mexe só na Feira, nas prioridades das encomendas e na escolha da obra. Política monetária não vai a voto (seção 11).
9. **Coins como moeda divisível:** a doação credita Coins (**1 Coin = R$ 1,00, em unidades inteiras**; premium de 30 dias por 20 Coins; revisão de consistência: R17). O gasto na loja destrói o Coin, que é o dreno dele. A carência vale por lote de doação, e a doação contestada no banco suspende a conta até ela regularizar. Quem recebeu de boa-fé fica com o que recebeu (seção 6).

## 1. Premissas e escala

### 1.1 População de referência

| Premissa | Valor [H] | Por quê |
|---|---|---|
| Simultâneos por Cidade | 2 a 5 mil (bíblia 6.7) | Alvo do plano de negócio ([08](../01-pesquisa/08-mercado-posicionamento.md)) |
| Jogadores ativos por dia (DAU) | 20 a 40 mil (5 a 10 vezes o pico de simultâneos) | Sessões curtas de 5 a 15 min, 2 a 6 vezes por dia (bíblia 6.1), dão muita gente diferente por dia para cada vaga simultânea. **A calibrar no alfa.** |
| Contas que pagam algo no mês | 6% a 10% do DAU | Faixa de trabalho; módulo 11 |
| Perfis da simulação | casual, mediano, hardcore, pagante, bot (bíblia, módulo 08) | Definidos na seção 4.6 |

### 1.2 Escala do ouro

- **O ouro tem duas casas decimais** (centésimos), no livro-razão e na tela. Os bens básicos valem de frações de ouro a dezenas de ouro, e uma escala inteira deixaria o degrau de preço grosseiro demais nos itens baratos (seção 5.1). O brasileiro já pensa em reais e centavos. **[proposta de mudança na bíblia]**, que não fixa a unidade.
- **Inteiros de 64 bits em centésimos** em todo saldo e toda ordem. O OSRS precisou liberar ofertas acima de 2,147 bilhões em 2026 ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md), via [04a, §5.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Âncora relativa, não absoluta.** O número que importa é quanto o premium custa em dias de renda, não em ouro. Meta [H]: **o premium de 30 dias vale de 12 a 20 dias das fontes brutas de ouro de um jogador mediano** (seção 4.6). Com a renda mediana de ~970 ouro por dia, isso dá ~15.000 ouro pelo premium de 30 dias (faixa a testar: 8.000 a 30.000). Com o premium a 20 Coins (seção 6.1), o preço inicial esperado é de **~750 ouro por Coin** (faixa: 400 a 1.500) (revisão de consistência: R17).
- **Valor de referência (VR):** o valor **fixo** de lançamento de cada item, igual ao trabalho embutido nele ([06](06-oficios-e-coleta.md), seção 11.5) vezes **2,0 ouro por minuto de ofício** (o mesmo número serve de referência para os preços de NPC e para o valor dos drops). O teto de emissão, a cota, o crédito dos insumos e o preço-base de NPC usam o VR (revisão de consistência: R18 e R24). O VR não acompanha o mercado de propósito: medido em preço de mercado, o teto afrouxava quando os preços caíam e não segurava a deflação ([08](08-simulacao.md), decisão 3).
- **Preço de mercado:** a mediana ponderada por volume dos negócios das últimas 24 horas, recalculada de hora em hora (seção 5.1). Taxas, banda da Bolsa, Troca, IPC e painel usam o preço de mercado, nunca o valor de NPC. Esta versão do módulo chamava esse número de "VR" (revisão de consistência: R18). Separar os dois corrige o erro que o IdleMMO admitiu: um único número (o valor de NPC) controlava a emissão, a base do imposto e o piso de preço ([C04](../01-pesquisa/fichas/C04-idlemmo.md), via [04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). "Valor de referência (VR)" entrou no glossário da bíblia.

### 1.3 Três camadas de valor

| Camada | O que contém | Regra | Referência |
|---|---|---|---|
| **Progresso preso** | Níveis, maestria, Selos, ajudantes, filas, offline, Mérito, Marcos | Pode crescer sem limite; nunca vira negociável por compra | P1; lei 16; [04a, decisão 1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md) |
| **Bens negociáveis** | Ouro, materiais, consumíveis, equipamento, cosméticos de jogador e do Baú | Unidades que cabem na cabeça; emissão com teto por conta; tudo se gasta | P2, P3 |
| **Coins** | O token, em unidades | Nasce só de doação em reais; gasto na loja, é destruído; nunca dá renda, XP ou poder | Bíblia, glossário e seção 5 |

## 2. Moedas

### 2.1 Quadro

| Moeda | O que faz | Como entra | Como sai | Negociável? |
|---|---|---|---|---|
| **Ouro** | Moeda de todos os balcões e das taxas; paga insumos de NPC, serviços, obras e luxos | Venda a NPC, encomendas, cercos e eventos com inscrição, missões do começo (seção 4.1) | Insumos de NPC, custo de partida, taxas, obras, luxos, Selo, ajudantes (seção 4.3) | **Sim, livremente:** balcões e Troca, sempre com taxa destruída |
| **Coins** | Moeda divisível, gasta na loja em premium (conveniência por tempo), cosméticos, Baú Misterioso e outros itens de conforto e cosmético; paga lances no Bazar de Personagens | Só por doação em reais na loja web (Pix e cartão), sem reembolso. Nunca de graça, nunca como prêmio | Destruído quando é gasto na loja ou na taxa do Bazar de Personagens | **Sim, livremente,** depois da carência por lote (seção 6.3). Troca por ouro só no Câmbio ou na Troca |
| **Marcos** | Moeda da Fronteira: suprimentos temporários, melhorias do Acampamento (a base da Fronteira; revisão de consistência: D6), cosméticos e títulos da temporada | Atividades da Fronteira (expedições na Névoa, descobertas, chefes de região) | Gastos na Fronteira; no fim da temporada, a sobra vira uma recompensa cosmética fixa por faixa, nunca ouro | **Não.** Presos à conta e à temporada; zeram ao fim |
| **Mérito** | Títulos de cidadania e prioridade na ordem de escolha das recompensas da cidade; não pesa no voto | Contribuição para obras, nota em encomendas, defesa nos cercos | Não se gasta. O **Mérito vitalício** só cresce (títulos). O **Mérito da Era** zera a cada Era (vale só para a ordem de escolha; revisão de consistência: R13) | **Não.** Preso à conta, e fica com a conta no Bazar de Personagens (seção 7.3) |

**Gastar na loja destrói o Coin.** Como o Coin é uma moeda divisível, a loja cobra direto em Coins qualquer valor, e cada Coin gasto sai da economia. A loja é a fonte de demanda que sustenta o preço do Coin em ouro, e por isso o que ela vende (premium, cosméticos, Baú) precisa ter demanda real (seção 6.2).

### 2.2 Decisões sobre as moedas

**Ouro sem moeda caindo de monstro.** O combate idle (expedições e masmorras assíncronas) solta peles, carnes, componentes e raros, mas não ouro.
- *Referência:* a mesa de missões do WoW e a produção passiva do Banana viraram torneira de valor negociável ([F06](../01-pesquisa/fichas/F06-world-of-warcraft.md); [G05](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). No IdleMMO, a torneira está no volume dos comuns ([04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- *Problema que resolve:* tira a fonte de ouro mais difícil de orçar, a que roda 24 horas para todos.
- *Comportamento:* o ouro vem de vender o que se produz e de participar da cidade, e isso empurra o jogador para o mercado e para as encomendas.
- *Risco:* a renda de quem só combate depende de vender peles e drops. Mitigação: o Curtume precisa das peles (bíblia 6.3) e as encomendas pedem produtos de combate. **[proposta de mudança na bíblia]:** registrar que as criaturas não carregam moeda. A ficção ajuda, porque são criaturas corrompidas pela Névoa, não bandidos.

**Mérito em duas contas.** O vitalício dá títulos; o da Era dá prioridade na ordem de escolha e zera. As duas contas ficam com a conta no Bazar de Personagens (decisão vigente da bíblia; revisão de consistência: R13).
- *Referência:* moedas de prestígio do GW2, elogiadas por Shokrizade ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); recomeço como válvula contra a concentração ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- *Problema:* sem zerar, quem chegou primeiro fica com a prioridade para sempre.
- *Comportamento:* contribuir a cada Era, não só uma vez.
- *Risco:* o veterano se sente rebaixado a cada Era. Mitigação: o vitalício e os títulos ficam. Reconciliado com o 09: a "prioridade do Mérito" vale só para a ordem de escolha, e o Mérito nunca pesa no voto (revisão de consistência: R13).

**Marcos zeram, a memória fica.**
- *Referência:* artigo 10 do esboço de constituição ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); Leagues do OSRS ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)); lei 22.
- *Problema:* uma moeda de temporada que atravessasse para a cidade importaria a inflação da temporada e dividiria a base.
- *Comportamento:* gastar na temporada, sem entesourar.
- *Risco:* sensação de perda no fim. Mitigação: a sobra vira cosmético por faixa, e a tela final mostra o que foi conquistado. **A reconciliar com o módulo 10.**

## 3. Teto de emissão negociável (piso P2)

### 3.1 O problema

[H] Num idle, a emissão negociável cresce por três multiplicadores ao mesmo tempo: tempo de calendário (a fila roda 24 horas), eficiência que sobe com a progressão e número de contas ([04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). [F] No Banana, cerca de 2/3 dos jogadores eram bots, e no Bongo Cat, cerca de metade, porque o tempo passivo gerava item vendável ([G05](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). Com um teto por conta e por dia, a emissão total passa a ser proporcional ao número de **adultos verificados**, a única variável que o estúdio consegue fiscalizar (P8).

### 3.2 Duas formas de implementar: a decisão

| Opção | Como funciona | Prós | Contras |
|---|---|---|---|
| (A) Marca na criação | Cada unidade nasce "negociável" até a cota do dia acabar e "presa" depois | Simples de explicar | O jogador vê parte da produção "nascer presa" e sente que perdeu. A queixa nº 1 dos idles online é perder produção ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), "Como isso pode dar errado"). Prende para sempre o que poderia sair amanhã |
| **(B) Portão de saída ← recomendado** | Tudo nasce igual. O teto mede só o **valor criado pela própria conta que sai dela** (venda, Troca dada, venda a NPC) | Nada nasce preso, e o uso próprio é ilimitado. O excedente pode sair nos dias seguintes. O fluxo para o mercado continua limitado a contas × teto | Exige rastrear no livro-razão a origem de cada lote e o crédito dos insumos comprados (seção 3.3) |

**Recomendação: (B).** Os dois limitam igualmente o fluxo para o mercado, que é o que importa para a inflação. A opção (B) não faz nada "nascer preso" e só aparece para quem vende muito. O custo é técnico: a origem precisa estar no livro-razão desde o primeiro dia (lei 15, P9).

### 3.3 Regras do portão

- **Dois estados por lote:**
  - **De origem:** produzido ou ganho pela própria conta (coleta, produção, combate idle, sessões ativas, prêmios de evento) e ainda não saiu dela.
  - **Circulante:** já passou por um portão, ou chegou de fora (compra, Troca recebida, conteúdo de Baú) (revisão de consistência: D13).
  - O jogador só vê a diferença na tela de venda ("este lote usa X da sua cota").
- **Consome cota:** a saída de valor de origem.
  - Venda de lote de origem na Bolsa, na Feira ou no Leilão.
  - Troca em que o jogador dá item de origem.
  - Depósito de item de origem no banco da guilda, porque dali ele sai para outros.
  - Toda venda a NPC, de qualquer item, porque cria ouro novo.
- **Não consome cota:** uso próprio, consumo, reparo, entrega em encomenda, doação à obra, revenda de circulante, ouro e Coins.
- **Crédito dos insumos comprados.** Quando a receita usa insumos circulantes, o produto carrega um **crédito** igual ao VR desses insumos, **na mesma régua do teto** (VR fixo, nunca o preço pago). Na saída, a cota consumida é `max(0; VR do produto − crédito)`. Você só gasta cota com o valor que você mesmo criou, e o artesão que compra insumos e agrega valor não é punido duas vezes. O crédito é obrigatório: sem ele, o teto estrangula a criação ([08](08-simulacao.md), cenário E10) (revisão de consistência: R18).
- **Reserva na hora de anunciar.** Um anúncio ou uma ordem de venda de lote de origem reserva cota no momento da criação: `quantidade × max(0; VR − crédito)`. Cancelou, a reserva volta. Isso impede ordens que aparecem no livro mas não podem ser executadas, uma forma de spoofing ([04b, §2.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). Como o VR é fixo, a cota não depende do preço pedido nem do arremate: no Leilão, a reserva é a mesma de qualquer balcão, e o arremate nunca deixa cota negativa (revisão de consistência: R18).
- **Prêmios de evento com inscrição** (cerco, chefe de Era, encomenda, Relíquias da Fronteira) **nascem de origem** e gastam cota quando saem da conta, como tudo o que é negociável, inclusive o que vem de janelas ativas (revisão de consistência: D13). O orçamento por evento limita quanto nasce; o teto limita quanto sai.

**Exemplo calculado.** A Ana (Ferraria 50, teto 2.100) compra 100 lingotes de ferro na Bolsa, de VR 12 cada (circulantes: 1.200 de crédito, qualquer que tenha sido o preço pago), e usa o próprio carvão (de origem, VR 300). Ela forja 5 espadas Boas de VR 600 cada (3.000 no total). Os VR do exemplo são ilustrativos; os reais saem do trabalho embutido do [06](06-oficios-e-coleta.md), seção 11.5, a 2,0 ouro por minuto. Vendendo as 5, consome `3.000 − 1.200 = 1.800` de cota e ainda pode vender 300 de VR em outros lotes de origem no dia.

### 3.4 Quanto vale o teto

**Fórmula [H]:** `teto(n, m) = 600 + 30 × n + 50 × m` (em VR fixo por dia; revisão de consistência: R18; a simulação confirmou a fórmula, o acúmulo e a rampa, e não recomenda baixar a inclinação, que traz escassez), em que `n` é o **maior nível já alcançado** entre os dois ofícios mestres e a vocação (1 a 100), para que o Selo, que volta o nível ao 30, não corte o teto de quem toma prestígio, e `m` é a **soma dos graus de Selo** nos dois ofícios mestres (0 a 10 no lançamento: 5 graus × 2) (reconciliado com o [02](02-progressao.md); revisão de consistência: D9).

| Estágio | n | m | Teto por dia |
|---|---|---|---|
| Recém-chegado | 10 | 0 | 900 |
| Casual | 25 | 0 | 1.350 |
| Mediano | 50 | 0 | 2.100 |
| Hardcore | 85 | 0 | 3.150 |
| Mestre completo | 100 | 10 | 4.100 |

- **Linear, de propósito.** Do começo ao topo, o teto cresce cerca de 4,5 vezes. A emissão negociável por conta não pode crescer exponencialmente com o nível ([04a, §5.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). O exponencial mora no progresso preso.
- **Enche como caixa d'água:** a cota recebe 1/24 do teto por hora e acumula até **3 dias de teto**, o mesmo que o offline máximo (bíblia 6.1). Não há hora de virada, o que evita a corrida de bots no reset. O ausente de fim de semana não perde nada (P12).
- **Contas novas:** 25% do teto nos dias 1 a 7, 50% nos dias 8 a 14, 75% nos dias 15 a 30 e 100% a partir do dia 31. É o custo de conta do [04b, §3.6](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), que pesa sobre **dar** valor, nunca sobre comprar. Exemplo: uma conta no dia 3 com `n = 12` tem `(600 + 360) × 0,25 = 240` por dia.
- **Igual para todos e nunca à venda.** A conveniência do Coin não aumenta o teto, a cota nem o acúmulo (P7).
- **Meta de calibração:** o teto deve ficar entre 1,5 e 2 vezes a **necessidade de venda típica** de cada estágio, isto é, o que um jogador honesto precisa vender para comprar os insumos dos ofícios que não domina. Indicador: **10% a 30% das contas ativas batem no teto num dia típico.** Se mais de 40% baterem, o teto aperta o comércio honesto. Se menos de 5% baterem, ele não segura nada.

### 3.5 O que acontece com o excedente

A produção acima do teto não se perde. Ela fica na conta, de origem, e tem quatro destinos:
1. **Uso próprio** nos dois ofícios mestres e nos ofícios de aprendiz: consumo, reparo, insumos.
2. **Encomendas:** a entrega não consome cota.
3. **Obra:** a doação vira **Mérito**. A regra de fila "quando o estoque de origem de X passar de N, doar o excedente à obra corrente" deixa isso automático. A tela de volta mostra "seu excedente ergueu 3 m da muralha: +76 Mérito".
4. **Sair depois**, nos dias em que sobrar cota.

**Conversão em Mérito [H]:** `Mérito do dia = (1/20) × (H ÷ ln 2) × ln(1 + C × ln 2 ÷ H)`, com `H = 2.000` e `C` = contribuição ponderada do dia em VR. Materiais contam 100% e ouro conta 50%, para premiar quem produz mais do que quem só paga. Exemplo: `C = 2.000` dá `0,05 × 2.885 × ln(1,693) ≈ 76` Mérito; `C = 8.000` dá `≈ 192`, ou seja, quatro vezes a contribuição rende só 2,5 vezes o Mérito. A curva logarítmica impede que o rico compre prioridade na cidade. **A reconciliar com o módulo 09.**

### 3.6 O salário-teto do farmer

[H] Com o Coin a R$ 1,00 e a ~750 ouro (o premium de 30 dias a 20 Coins, R$ 20 e ~15.000 ouro; revisão de consistência: R17), 1 ouro vale ~R$ 0,0013. Uma conta mediana que vendesse todo o teto renderia ~R$ 2,80 por dia (~R$ 84 por mês) a preço oficial. Uma conta no topo renderia ~R$ 163 por mês brutos e ~R$ 105 líquidos de insumos e desgaste (~35% de custo). No RMT informal, o ouro costuma sair abaixo do oficial: no OSRS, a 45% do Bond ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)). Isso deixa o salário de uma conta no topo entre R$ 50 e R$ 75 por mês.
- **Restrição de desenho [H] (revisão de consistência: R20):** o **lucro de uma conta-fazenda** (conta verificada de terceiro que farma, vende o que pode e repassa o ouro no mercado cinza) fica **em até ~R$ 15 por mês**, medido no painel (seção 12.2). Acima disso, alugar a identidade verificada de um terceiro (o "laranja") passa a compensar. No cenário base da simulação, a fazenda rende ~R$ 16 por mês (R$ 15,50 a R$ 17,50 entre sementes), no limite ([08](08-simulacao.md), seção 7.1).
- **O salário-teto do topo deixou de ser meta.** No modelo, ele fica em R$ 130 a R$ 160 por mês, mas a conta de topo leva ~100 dias para existir e é única por pessoa: o risco do laranja está na fazenda, não no topo. A simulação também desaconselha baixar a inclinação do teto (de 30 para 25 por nível), porque isso traz de volta a escassez de T5–T6 ([08](08-simulacao.md), iteração 11). O salário-teto continua no painel como indicador interno (revisão de consistência: R20).
- **Barreiras somadas:** a identidade verificada (P8), os ~90 dias até o nível 100 (bíblia 6.2), a rampa de conta nova, a detecção por fluxo (seção 10) e o ouro de encomenda só a partir do 14º dia da conta (seção 4.1; revisão de consistência: R23).

### 3.7 Quatro perguntas (portão de saída)

- **Referência:** barras com teto e um refill por dia no Torn; uma ação por vez no MWI e no Melvor; teto por janela da Steam ([04a, §7.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md); [G05](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). **Diferença:** nenhum deles limita a saída em vez da criação, nem dá crédito aos insumos comprados.
- **Problema que resolve:** emissão negociável proporcional a tempo × eficiência × contas; bots e farms de identidade.
- **Comportamento que incentiva:** especializar-se e agregar valor, em vez de despejar matéria-prima; doar o excedente à cidade.
- **Risco:** complexidade no livro-razão (um erro de crédito vira dupe de cota) e sensação de castigo para o produtor pesado. Mitigação: testes de propriedade na Fase 5, conciliação contínua e tela de volta que mostra o excedente convertido.

## 4. Fontes e drenos

Ordens de grandeza **por jogador ativo por dia**, em ouro ou em VR, para os três perfis da seção 4.6. São metas de desenho para a simulação, não previsões. Os números de itens dependem das receitas e da durabilidade: **a reconciliar com os módulos 05 e 06**. Os de progressão (`n` por perfil), **com o módulo 02**.

### 4.1 Fontes de ouro

| Fonte | Como funciona | Quem controla o volume | Casual | Mediano | Hardcore |
|---|---|---|---|---|---|
| **Venda a NPC** | Só matéria-prima bruta (coleta e caça), com curva logarítmica por conta (seção 4.2). Consome cota | Estúdio: preço-base e meia-vida da curva | 280 | 520 | 830 |
| **Encomendas da cidade** | Ouro mais Mérito pela entrega, com nota individual; de 1 a 3 encomendas ativas por conta (**a reconciliar com os módulos 01 e 09**). **O ouro só a partir do 14º dia da conta;** antes disso, a encomenda paga só Mérito e XP (o mesmo corte de "conta nova" do 13; a entrega não passa pelo portão, e sem esse corte a conta-fazenda recebe ouro desde o 2º dia; com ele, a fazenda rende ~20% menos, [08](08-simulacao.md), seção 7.5) (revisão de consistência: R23) | Estúdio fixa o orçamento; o Conselho escolhe quais bens a cidade pede (seção 11) | 150 | 300 | 450 |
| **Cercos** | Prêmio semanal por defesa, rateado pela nota | Orçamento fixo por cerco | 50 | 100 | 150 |
| **Chefes e eventos com inscrição** | Janelas ativas (P12), com orçamento por evento | Orçamento por evento | 0 | 50 | 120 |
| **Missões do começo** | ~2.000 de ouro no total, só na primeira semana | Fixo, uma vez por conta | (~290/dia na 1ª semana) | — | — |
| **Total** | | | **480** | **970** | **1.550** |

**Não são fontes de ouro:** combate idle (seção 2.2), Fronteira (paga em Marcos), Coins (só compra ouro de outro jogador, sem emissão), Bazar de Personagens e Baú. [H] Quando o premium compra ouro de outro jogador, não há emissão; quando compraria ouro do sistema, haveria. Por isso não existe nenhuma conversão de Coins em ouro do sistema ([04a, §2.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

### 4.2 Venda a NPC: a torneira logarítmica

- **Regra:** a venda de um item de preço-base `p0` paga `p0 × 0,5^(x ÷ H)`, em que `x` é o ouro que a conta já recebeu do NPC nas últimas 24 horas (janela móvel, somando todos os itens) e `H` é a meia-vida, igual para todos.
- **Total recebido** ao vender itens de preço-base somado `B` numa janela: `G = (H ÷ ln 2) × ln(1 + B × ln 2 ÷ H)`.
- **Exemplo com `H = 300`:**

| Preço-base vendido (B) | Ouro recebido (G) | Pagamento do próximo item |
|---|---|---|
| 500 | 332 | 46% |
| 1.000 | 518 | 30% |
| 3.000 | 896 | 13% |
| 10.000 | 1.377 | 4% |

- **Preço-base `p0` = 40% do VR do item** (o valor fixo de lançamento, a 2,0 ouro por minuto; revisão de consistência: R24), fixo em valor nominal. Isso cria um **estabilizador automático:** se os preços sobem, a torneira do NPC pesa cada vez menos; se os básicos despencam, o NPC vira piso.
- **Só matéria-prima bruta.** Nada processado, nenhum equipamento, nenhum consumível. Isso evita o bot que fabrica lixo para vender ao NPC ([04b, §1.7](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Funciona ausente:** a regra de fila "vender ao NPC o que passar de N unidades" roda no servidor dentro do offline.
- **Quatro perguntas.**
  - *Referência:* a venda a NPC é a torneira nº 1 dos idles online (IdleMMO, Idle Clans, MWI), e Koster viu nos lojistas do Ultima Online a "torneira de ouro" ([04a, §2.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). *Diferença:* a curva cai com o volume do dia, e o preço do NPC não serve de base para o imposto.
  - *Problema:* garantir que todo produtor tenha comprador, sem uma torneira sem fundo.
  - *Comportamento:* vender ao NPC só o primeiro lote e levar o resto ao mercado, às encomendas ou à obra.
  - *Risco:* a curva pode parecer injusta para quem vende muito. Mitigação: a tela mostra a curva e a alternativa (o preço na Bolsa e a encomenda aberta).

### 4.3 Drenos de ouro

Famílias do modelo do [04a, §5.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md): **(a)** proporcional à atividade, **(τV)** proporcional ao comércio, **(s)** proporcional ao estoque, ou desejado.

| Dreno | Como funciona | Família | Casual | Mediano | Hardcore |
|---|---|---|---|---|---|
| **Insumos de NPC** no crafting e no reparo | Toda receita de T2 para cima pede um insumo vendido por NPC (fundente, sal, linha, frasco, prego, óleo; nomes no módulo 06), com preço de ~10% a 15% do VR do produto no lançamento, **indexado ao IPC** (revisão mensal, **até ±10% por mês na 1ª Era e no máximo ±2% por mês depois**; revisão de consistência: R21). O insumo nasce preso e não se revende | a | 180 | 380 | 650 |
| **Custo de partida** de expedições e masmorras | Provisões básicas e licença, por partida, crescendo com o tier da região | a | 40 | 90 | 160 |
| **Ajudantes, treino e troca de ofício mestre** | Contratação e treino em ouro, sem salário recorrente para não punir o ausente; a troca de ofício mestre tem custo que cresce com o nível | a e s | 30 | 60 | 100 |
| **Taxas da Bolsa, da Feira e do Leilão** | 5% + 1%, 6% e 7% (bíblia 6.6), arredondadas para cima | τV | 15 | 40 | 90 |
| **Taxa da Troca** | 3% do que cada lado recebe (seção 5.5) | τV | 3 | 8 | 15 |
| **Taxa do Câmbio** | 12% do valor de cada Coin vendido (rateio por conta ativa) | τV | 10 | 20 | 40 |
| **Obras em ouro** | Doação opcional que vira Mérito a 50% do peso do material | s | 20 | 60 | 120 |
| **Luxos por ouro** | Cosméticos e decorações vendidos por NPC (nascem presos), ampliações da casa, peças de prestígio de preço muito alto | s | 30 | 120 | 250 |
| **Selo de mestre** (amortizado) | Passar a oficina exige uma "obra de mestre" de **30 mil ouro** e materiais (~20 mil de VR). O Selo volta o nível do ofício, mas **mantém o tier de produção** já alcançado (revisão de consistência: R22) | s | 0 | 40 | 120 |
| **Total** | | | **328** | **818** | **1.545** |
| **Drenos ÷ fontes** | | | 68% | 84% | 100% |

- **O casual poupa mais, em proporção:** é essa poupança que compra Coins e equipamento de quem produz. O hardcore gasta quase tudo em luxo e prestígio, o que acerta o dreno de topo ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), mecanismos que desconcentram).
- **Meta de regime [H]:** no agregado, os drenos ficam entre 85% e 95% das fontes. O resto é a poupança que acompanha a entrada de jogadores e a meta de inflação.
- **Por que indexar os insumos e não as fontes:** o insumo indexado acompanha os preços e mantém a força do dreno, enquanto a fonte nominal fixa perde força com a inflação. Os dois juntos formam um par de estabilizadores. O risco é uma espiral de custos (seção "Como isso pode dar errado"), limitada pelo teto de ±2% por mês depois da 1ª Era. **Na 1ª Era, a indexação vai até ±10% ao mês:** os preços acham o nível nos primeiros 60 dias e, com ±2%, o insumo de NPC passava a valer ~24% da receita do artesão, travava a criação e levava o IPC a +105% ao ano no 2º semestre. É a recomendação com o efeito mais firme da simulação ([08](08-simulacao.md), seção 7.6) (revisão de consistência: R21).
- **A taxa do Bazar de Personagens** é paga em Coins (seção 7). Só a taxa de anúncio em ouro entra neste quadro, com peso desprezível por conta.

### 4.4 Fontes de itens (VR por dia)

| Fonte | Como funciona | Casual | Mediano | Hardcore |
|---|---|---|---|---|
| **Coleta na fila** | Mineração, Lenhadoria, Pesca e Colheita, uma ação por vez por fila | 1.500 | 3.500 | 6.500 |
| **Combate idle** | Peles, carnes, componentes e raros comuns de expedições e masmorras assíncronas | 300 | 800 | 1.500 |
| **Prêmios de encomenda, cerco e chefe** | Itens com orçamento por evento; nascem de origem e gastam cota quando saem da conta (revisão de consistência: D13) | 80 | 180 | 350 |
| **Fronteira** | Relíquias negociáveis com tiragem por temporada; o resto é preso | 0 | 30 | 80 |
| **Valor agregado pela cadeia** | Transformação e criação: o VR do produto menos o dos insumos | 500 | 1.500 | 3.000 |
| **Total bruto** | | **2.380** | **6.010** | **11.430** |

Ficam fora da conta diária: o **Baú Misterioso** (cosméticos, conforme os pagantes, seção 8) e a **oficina de reforço** (seção 4.8), que só vende itens presos.

### 4.5 Drenos de itens (VR por dia)

| Dreno | Como funciona | Casual | Mediano | Hardcore |
|---|---|---|---|---|
| **Desgaste e quebra** | Toda ferramenta e todo equipamento perdem durabilidade com o uso. O reparo reduz a durabilidade máxima, e depois de N reparos a peça some (bíblia 6.5). Ordem de grandeza: uma peça dura de 15 a 25 dias de uso, com 3 a 5 reparos | 450 | 1.200 | 2.400 |
| **Material de reparo** | Consumido a cada reparo | 80 | 250 | 500 |
| **Consumíveis** | Refeições, poções e óleos no combate, nas expedições e nos cercos | 250 | 700 | 1.400 |
| **Entregas de encomenda** | A cidade consome o que recebe | 250 | 600 | 900 |
| **Obras** | Doação de material, a principal válvula do excedente | 250 | 1.100 | 2.800 |
| **Venda a NPC** | O item vendido some (valor-base) | 400 | 900 | 2.300 |
| **Selo de mestre** (amortizado) | Materiais da obra de mestre | 0 | 80 | 250 |
| **Suprimentos da Fronteira** | Levados da cidade e consumidos lá, só durante a temporada (fora do total) | (0) | (200) | (400) |
| **Aplicar cosmético** | Vestir ou decorar prende o item à conta: ele sai do mercado (seção 8) | — | — | — |
| **Total** | | **1.680** | **4.830** | **10.550** |
| **Drenos ÷ fontes** | | 71% | 80% | 92% |

- **Leitura:** o saldo positivo é o estoque que cresce nos primeiros meses de cada conta (armazém, equipamento reserva). A meta é o agregado chegar a **90% a 100% depois do 6º mês**, com as obras absorvendo a variação.
- **O maior risco dos itens é a deflação, não a inflação.** A produção roda 24 horas e cresce com o número de contas. [F] No EVE, o índice de minerais caiu ~52% em 12 meses até fev/2026 com a massa de ISK subindo ([04a, §3.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). Daí as alavancas antideflação da seção 9.2.

### 4.6 Perfis e modelo agregado

| Perfil | Definição [H] | Teto |
|---|---|---|
| **Casual** | `n ≈ 25`, 1 fila, 2 sessões por dia | 1.350 |
| **Mediano** | `n ≈ 50`, 2 filas, 3 a 4 sessões | 2.100 |
| **Hardcore** | `n ≈ 85`, 3 filas, 6 sessões, obras-primas frequentes | 3.150 |
| **Pagante** | Mediano que doa ~R$ 40 por mês (~40 Coins; revisão de consistência: R17), gasta metade na loja e vende metade no Câmbio | 2.100 |
| **Bot** | Conta verificada de terceiro, 3 filas, vende até o teto todo dia, sem luxo nem obra | até 4.100 |

**Modelo de bolso por conta ativa** ([04a, §5.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)): `dM/dt = (1 − a) × E − (τ × V + s) × M`, com equilíbrio `M* = (1 − a) × E ÷ (τ × V + s)`.

- **Exemplo (mediano):**
  - Emissão: `E = 970` por dia.
  - Drenos de atividade (insumos, partida, ajudantes): 530, o que dá `a = 0,55`.
  - Comércio e Câmbio: `τ × V ≈ 0,0018` por dia (taxa efetiva de ~6% sobre um giro de ~2% da massa por dia, mais o Câmbio).
  - Luxos, obras em ouro e Selo: `s ≈ 1%` do estoque por dia.
  - Resultado: `M* = 0,45 × 970 ÷ 0,0118 ≈ 37.000` de ouro por conta ativa (~2,5 premiums de 30 dias, ~49 Coins; revisão de consistência: R17), com constante de tempo de ~85 dias. Uma conta que começa com 2.000 chega a ~24.000 no dia 85.
- **Três conclusões:**
  1. **A alavanca é `a`:** cada 10 pontos a mais de consumo embutido cortam ~20% de `M*`.
  2. **`s` encurta o caminho até o equilíbrio,** mas é comportamental: depende de os luxos serem desejados. É o parâmetro mais incerto do modelo.
  3. **`τ` é freio.** Dobrar todas as taxas move `M*` menos de 15%.
- **Meta [H]:** `M* ÷ preço em ouro do premium de 30 dias` entre 2 e 3 por conta ativa. A riqueza grande deve estar em itens, que se gastam, não em ouro parado.

**Conta de guardanapo do Câmbio [H]:**
- **Volume:** com 30 mil ativos por dia, 8% de pagantes, ~R$ 40 doados por pagante por mês (~40 Coins) e metade vendida no Câmbio, são ~48 mil Coins por mês, ~67 por hora. Em número de ordens, com ordens típicas de ~20 Coins, isso dá **~3 a 7 ordens por hora**: poucas unidades e poucos participantes (revisão de consistência: R17).
- **Ouro:** o volume é de ~36 milhões por mês (48 mil Coins a ~750 ouro), e os 12% destroem ~4,3 milhões por mês, **~0,5% das fontes**. O Câmbio é um dreno pequeno; seu papel é o índice e a rota do não pagante.
- **Rota do não pagante:** ~50% do premium viria de ouro, dentro da faixa-alvo de 30% a 65% do [05d, §6](../01-pesquisa/05d-rmt-recomendacao.md) (65,2% no IdleMMO).
- **Pagante:** recebe ~660 de ouro por Coin, ou ~13.200 pelos 20 Coins de um premium, o equivalente a ~14 dias de fontes de um mediano (revisão de consistência: R17).

### 4.7 Obras e encomendas como amortecedores

- **Obras** recebem material e ouro sem limite e convertem tudo em Mérito pela curva da seção 3.5. São o dreno elástico do excedente: quanto mais a cidade produz, mais a obra absorve. [F] Metas comunitárias ficaram em 1º no ranking do [03](../01-pesquisa/03-alem-do-idle.md).
- **Encomendas** são a demanda de última instância com pagamento em ouro. **Na deflação dos básicos,** o estúdio amplia o orçamento e pede os bens em excesso: entra ouro e saem itens. **Na inflação,** reduz o ouro das encomendas e aumenta o Mérito, que não cria moeda, mas só quando o consumo essencial não atendido está baixo; se a alta vem de escassez, cortar o ouro aperta o capital dos artesãos e piora a falta (seção 9.3; revisão de consistência: R25). É a mesma lógica do item sink do OSRS, que compra e apaga itens com parte do imposto ([04a, §2.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)), mas com a cidade como freguesa visível.

### 4.8 Regras contra arbitragem com o NPC

1. **O NPC compra só matéria-prima bruta e vende só três coisas:** insumos (presos), luxos (presos) e itens de qualidade Comum da **oficina de reforço** ([conceito](../02-conceito.md), "Gargalo de ofício"), também presos e a preço-teto.
2. **Nenhum laço de lucro:** o preço de venda do NPC de qualquer coisa fica sempre acima do que o NPC pagaria, no topo da curva, por todos os insumos dela. Isso responde à arbitragem que esvaziou o Habitat ([04a, decisão 4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
3. **Oficina de reforço:** o preço-teto fica em 2,5 vezes o VR-alvo de lançamento do item Comum. O item sai preso, então não vira fonte de bens negociáveis. Mas, como substituto para uso próprio, ele segura o preço do mercado e quebra cartéis de ofício. Cada compra na oficina é um dreno de ouro.
4. **O preço-base de compra do NPC é fixo.** Mexer nele é medida de emergência, com aviso (artigo 11 da constituição). O IdleMMO mostrou que esse número move a fonte, a base do imposto e o piso ao mesmo tempo ([04a, §7.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

## 5. Os balcões e a Troca

### 5.0 Visão geral

| Canal | O que negocia | Mecanismo | Taxa (destruída) | Quem mexe na taxa |
|---|---|---|---|---|
| **Bolsa** | Commodities fungíveis por item, tier e qualidade; Baús lacrados por série | Livro de ordens contínuo | 1% de anúncio + 5% na venda | Estúdio (constituição) |
| **Feira** | Itens únicos e com atributos | Anúncio de preço fixo, compra na hora | 6% na venda (inclui sinal de 0,5%) | **Conselho, de 4% a 8%** |
| **Leilão** | Raridades | Leilão inglês com lance máximo automático | 7% do lance vencedor + abertura | Estúdio |
| **Câmbio** | Coins ↔ ouro, em unidades | Leilão de chamada a cada hora | 12% de quem vende | Estúdio |
| **Troca** | Qualquer coisa negociável, direto entre dois jogadores | Proposta assíncrona com garantia | 3% do que cada lado recebe; 12% sobre Coins e Baú lacrado (revisão de consistência: R19) | Estúdio |
| **Bazar de Personagens** | Personagens | Leilão em Coins | 10% em Coins | Estúdio (seção 7) |

Princípios do [04b, §5.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md):
- **Tudo assíncrono:** o ausente deixa ordens, lances máximos e propostas, e volta para colher.
- **Mercado em ouro:** o Coin só se troca por ouro no Câmbio e na Troca. Bolsa, Feira e Leilão não aceitam Coins como pagamento, para que ele não vire a moeda do mercado, a "dolarização" do Throne and Liberty ([F09](../01-pesquisa/fichas/F09-throne-and-liberty-e-lost-ark.md)).
- **Velocidade não dá vantagem.**
- **Antifraude no fluxo, não no preço.**

### 5.1 Bolsa (livro de ordens)

| Regra | Valor inicial [H] | Por quê |
|---|---|---|
| **Garantia** | 100% do ouro na compra e do item na venda | Ordem que não pode ser executada é spoofing; o EVE exige garantia integral desde 2020 ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Casamento** | Prioridade por preço e depois por antiguidade; execução parcial; o negócio sai pelo preço da ordem que já estava no livro | Padrão do MWI e do GE ([04b, §1.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Taxa de anúncio** | 1% do valor da ordem que **fica no livro**, compra ou venda, sem reembolso. A ordem que executa na hora não paga | Freia spam e undercut; mantém o total em ~6% para qualquer lado (seção 5.6) |
| **Taxa de venda** | 5% do valor executado, paga por quem vende | Bíblia 6.6 |
| **Arredondamento** | Para cima, ao centésimo; mínimo de 0,10 ouro por cobrança | Com arredondamento para baixo, item barato não pagava taxa no MWI ([04b, §3.5](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Degrau de preço** | 3 algarismos significativos (mínimo 0,01): 1,23 · 12,3 · 123 · 1.230. O degrau relativo fica entre 0,1% e 1% | O EVE trocou 0,01 ISK por 4 dígitos em 2020 contra a guerra de 0,01. Com uma Cidade de 2 a 5 mil simultâneos e livros finos, 3 dígitos dão mais fila por preço |
| **Espera para modificar** | 10 minutos depois de criar ou modificar | O EVE usa 5 minutos ([04b, §3.5](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Taxa de reanúncio** | Modificar cobra de novo 1% sobre o valor da ordem modificada e reinicia a antiguidade | Cobrir a melhor ordem por um degrau rende no máximo 1% e custa 1%: o undercut em série nunca compensa |
| **Preço de mercado** (antes chamado aqui de "valor de referência"; o VR agora é o valor fixo da seção 1.2; revisão de consistência: R18) | Mediana ponderada por volume dos negócios das últimas 24 h, recalculada de hora em hora, com variação máxima de ±5% por hora | Limite de variação do MWI contra pump and dump |
| **Banda suave** | Banda de ±15% em torno do preço de mercado. A venda abaixo entra no piso da banda e desce 2% por hora até o preço pedido; a compra acima entra no teto e sobe 2% por hora. Item novo, sem histórico, usa ±50% nas primeiras 72 h | Desenho do MWI ([04b, §3.4](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)): retarda despejos e altas forçadas sem tabelar o preço |
| **Alerta de desvio** | Confirmação para vender abaixo de 80% ou comprar acima de 120% da média de 24 h | Idle Clans ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Preço mínimo de anúncio** | 50% do preço-base de NPC do item | Contra o preço absurdo usado para transferir valor |
| **Vagas** | 8 ordens abertas no começo, até 20 por progressão (**a reconciliar com o módulo 02**), nunca por dinheiro | "Monopólios dos top players" no MWI ([04b, §1.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Expiração** | 30 dias | MWI e Idlescape |
| **Limite de compra por janela** | Itens críticos (insumos-gargalo, lista no módulo 06): no máximo 3 dias do consumo de referência do estágio a cada 4 horas, por conta | Limite de 4 horas do GE contra o cornering ([04b, §3.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Tela** | Cinco melhores níveis de cada lado, histórico de 1, 7 e 30 dias, volume de 24 h e posição da ordem na fila ("sua ordem é a 3ª no preço 12,3") | A posição visível faltou ao Black Desert ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), Implicações) |

**Exemplo da banda.** O minério tem preço de mercado 10. Alguém põe 1.000 unidades à venda a 6. A ordem entra a 8,50 e vai descendo 2% por hora (8,33; 8,16…). Se ninguém comprar antes, ela chega a 6 depois de `ln(6 ÷ 8,5) ÷ ln(0,98) ≈ 17` horas. Quem quer despejar consegue, mas não derruba o preço numa tacada, e os compradores têm tempo de aparecer.

**Quatro perguntas.**
- *Referência:* EVE, GE, MWI e Idle Clans. *Diferença:* taxa de reanúncio igual à de anúncio, que torna o undercut matematicamente inútil, e posição na fila visível.
- *Problema:* liquidez para commodities sem que o dono esteja online.
- *Comportamento:* pensar o preço uma vez e deixar a ordem trabalhar; acertar o preço vira uma forma de o ausente se sentir esperto.
- *Risco:* livros finos nos tiers altos, com spread largo. Mitigação: medir spread e tempo até a execução por item e afrouxar degrau e banda com dados.

### 5.2 Feira (venda instantânea)

| Regra | Valor inicial [H] |
|---|---|
| **O que negocia** | Itens únicos ou com atributos: equipamento (qualidade, atributos, durabilidade restante), obras-primas, cosméticos e decorações ainda não aplicados |
| **Taxa de venda** | 6% do preço, paga por quem vende; o Conselho ajusta entre 4% e 8%, no máximo 1 ponto por mandato e com 30 dias de aviso |
| **Sinal** | 0,5% do preço pedido na criação, sem reembolso, **abatido da taxa de venda** se o item vender (o total continua 6%). Mínimo de 1 ouro. **[proposta de complemento à bíblia]** |
| **Duração** | 14 dias; renovar paga novo sinal |
| **Mudar o preço** | Espera de 30 minutos; cada mudança paga novo sinal |
| **Pré-vitrine** | O anúncio novo fica 5 minutos visível, mas sem compra. Quem pede para comprar nesse tempo entra num sorteio gratuito entre os interessados; depois, a compra é direta, por ordem de chegada |
| **Valor estimado** | Modelo por base, tier, qualidade, atributos e durabilidade, a partir das vendas dos últimos 14 dias. O vendedor confirma duas vezes se pedir menos de 70% do estimado |
| **Busca** | Oficial, com filtros por atributo, tier, qualidade e durabilidade. Ordens de compra com filtro de atributos na versão seguinte |
| **Vagas** | 10 anúncios, até 25 por progressão |

**Quatro perguntas.**
- *Referência:* Merchant Tabs do PoE2 (venda com vendedor offline e espera para mudar o preço), IdleMMO, Idlescape; sorteio entre pré-ordens de mesmo preço no Black Desert ([04b, §1.3 e §1.6](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- *Problema:* vender o que não é fungível. A pré-vitrine resolve o sniping de anúncio com preço errado, que é corrida de clique e terreno de bot.
- *Comportamento:* o lojista que monta vitrine e cuida da reputação; o comprador de celular compete com o de desktop.
- *Risco:* descoberta de preço ruim em itens raros com atributos. Mitigação: valor estimado publicado com intervalo e histórico de vendas parecidas.

### 5.3 Leilão (leilão)

| Regra | Valor inicial [H] |
|---|---|
| **O que negocia** | Raridades: drops de chefe, obras-primas excepcionais, cosméticos muito raros e lendários, relíquias. Qualquer item negociável com valor estimado a partir de 2.000 ou sem estimativa |
| **Formato** | Leilão inglês de 1, 3 ou 7 dias; lance inicial obrigatório e visível; sem reserva oculta |
| **Lance máximo automático** | O jogador fixa o máximo, e o sistema cobre com o incremento mínimo de 3% (mínimo de 10 ouro) |
| **Garantia** | 100% do lance máximo, devolvida quando o lance é coberto |
| **Prorrogação** | Lance nos últimos 30 minutos empurra o fim para 30 minutos depois dele; no total, a prorrogação vai até 24 horas |
| **Irrevogável** | Lances não se cancelam; o vendedor não cancela depois do primeiro lance |
| **Contas ligadas** | Proibido o lance próprio e o de contas com vínculo alto no risco de troca com o vendedor (seção 5.5) |
| **Taxas** | 7% do lance vencedor, paga pelo vendedor (bíblia 6.6). Abertura de 50 ouro + 0,5% do lance inicial, sem reembolso **[proposta de complemento à bíblia]** |
| **Aviso** | Feed público na abertura e alertas por categoria |

**Quatro perguntas.**
- *Referência:* prorrogação de 30 minutos e proibição de lance próprio no IdleMMO; reserva de lance no Char Bazaar ([04b, §1.4](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- *Problema:* o preço do que não tem referência. O lance máximo automático resolve o problema do ausente, que num leilão comum perde só por não estar online no fim.
- *Comportamento:* disputa pública que vira evento; o drop raro de chefe ganha um palco.
- *Risco:* lance de fachada com conta ligada e conluio. Mitigação: risco de troca aplicado aos lances e revisão do grafo nos pregões de valor alto.

### 5.4 Câmbio (Coins ↔ ouro)

**A decisão: como se forma o preço.**

| Opção | Como funciona | Com 2 a 5 mil simultâneos (~3 a 7 ordens por hora, seção 4.6) |
|---|---|---|
| (A) Livro contínuo | Como o PLEX do EVE | Raso: uma conta com algumas centenas de Coins move o preço (revisão de consistência: R17), o spread fica largo e quem clica primeiro leva. Manipulável |
| (B) Fila administrada | Como o WoW Token: o sistema fixa a cotação pela fila de vendedores e pela demanda | Execução imediata, mas o preço é "do estúdio", e cada alta vira culpa da casa, como os tetos do Black Desert ([04b, §1.8](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). Se o vendedor trava a cotação e o comprador paga outra, a diferença cria ou destrói ouro fora do livro-razão |
| **(C) Leilão de chamada a cada hora ← recomendado** | Os jogadores deixam ordens com preço limite, e a cada hora o sistema calcula **um preço único** que maximiza o volume, dentro de uma banda | O preço é formado pelos jogadores, a liquidez de uma hora se junta num instante só, a velocidade não vale nada e cada rodada já é o índice |

**Por que (C).** É um livro de ordens, como queria o [04b, §5.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), compensado em rodadas, e tem a estabilidade que o [05d, §4.1](../01-pesquisa/05d-rmt-recomendacao.md) buscava na fila administrada. A divergência entre os dois estudos fica resolvida. [F] Na literatura de desenho de mercado, Budish, Cramton e Shim propõem trocar o livro contínuo por leilões em lote frequentes. Eles mostram que o lote anula o valor de pequenas vantagens de velocidade e transforma a competição por rapidez em competição por preço ([QJE 130(4), 2015](https://econpapers.repec.org/RePEc:oup:qjecon:v:130:y:2015:i:4:p:1547-1621); [versão de trabalho](https://conference.nber.org/conf_papers/f69665.pdf)). [H] No nosso caso, o lote serve menos contra robôs de milissegundo e mais para juntar uma liquidez escassa. Para um idle, esperar até uma hora não custa nada.

**Regras [H].**
- **Unidade e preço:** o Câmbio negocia Coins em unidades inteiras (1 Coin = R$ 1,00). O preço é cotado **por Coin, em ouro**, com o degrau de 3 algarismos significativos da Bolsa (ex.: 753). O degrau relativo é o mesmo que em 75,3 (revisão de consistência: R17).
- **Ordens:** compra (quantidade e preço máximo, com o ouro reservado) e venda (quantidade e preço mínimo, com os Coins do saldo livre reservados). Há ordem "a qualquer preço dentro da banda". Cada ordem vai de **1 a 200 Coins**, com até 3 ordens abertas por conta (revisão de consistência: R17).
- **A rodada:** a cada hora cheia, o sistema escolhe o preço `P*` dentro da banda que maximiza o número de Coins negociados. No empate, fica o menor desequilíbrio e depois o preço mais perto da rodada anterior. Todos negociam a `P*`: quem ofereceu mais recebe a diferença de volta, e quem pediu menos recebe mais. A prioridade é por preço e depois por antiguidade. O que sobra fica para a rodada seguinte.
- **Banda:** ±3% da rodada anterior; no máximo ±10% em 24 horas. Ao bater no limite diário, o Câmbio segue funcionando, mas o painel avisa e a equipe revisa (disjuntor da seção 10).
- **Taxa:** 12% de `P*` vezes a quantidade, arredondada para cima ao centésimo, descontada de quem vende e destruída. O preço publicado é o que o comprador paga.
- **Limite de compra:** **200 Coins** por conta a cada 7 dias (~10 premiums de 30 dias; revisão de consistência: R17), contra o cornering e o entesouramento especulativo. É uma regra do balcão, não da transferência: a Troca continua livre. Não há limite de venda, porque o teto de doação já limita a oferta de cada pagante (seção 6.5).
- **Contestação:** se a doação de quem vendeu for contestada depois da rodada, o comprador de boa-fé fica com os Coins, e a conta que contestou fica suspensa até regularizar (seção 6.4).
- **O estúdio nunca compra nem vende no Câmbio,** e isso fica escrito na constituição.
- **Frequência:** de hora em hora no lançamento. Se passar de 30 ordens executadas por rodada de forma sustentada, as rodadas podem ficar a cada 15 minutos.

**Exemplo calculado** (refeito com 1 Coin = R$ 1,00; revisão de consistência: R17). A rodada anterior saiu a 750 por Coin, e a banda vai de 727,50 a 772,50.

| Ordens | Quantidade (Coins) | Limite (ouro por Coin) |
|---|---|---|
| Compra | 60 | até 765 |
| Compra | 40 | até 750 |
| Compra | 50 | até 730 |
| Venda | 30 | a partir de 725 |
| Venda | 50 | a partir de 745 |
| Venda | 40 | a partir de 760 |

- Volume por preço: a 730 negociam-se 30; de 745 a 750, 80 (há 100 Coins pedidos na compra e 80 oferecidos na venda); a 760, 60.
- O volume máximo, 80, sai a 745 ou a 750, com o mesmo desequilíbrio. O desempate pelo preço mais perto da rodada anterior dá **`P* = 750`**.
- A compra de 60 a 765 leva tudo e recebe 15 de volta por Coin. Da compra de 40 a 750, os 20 Coins das ordens mais antigas são atendidos.
- Cada vendedor recebe `750 × 0,88 = 660` por Coin, e a rodada destrói `80 × 90 = 7.200` de ouro.

**Quatro perguntas.**
- *Referência:* PLEX e Bond (preço de mercado), WoW Token (cotação única), o leilão de abertura das bolsas [NV] e os leilões em lote frequentes (Budish et al.).
- *Problema:* um preço de Coins confiável num mercado com poucas operações por hora, sem que o estúdio fixe o câmbio.
- *Comportamento:* deixar a ordem e voltar depois; ninguém ganha por ficar olhando.
- *Risco:* rodadas vazias no começo, com o índice parado. Mitigação: se uma rodada não tiver negócio, o índice repete o último preço com a marca "sem negócio", e o painel mostra as ordens em espera (seção 12).

### 5.5 Troca (direta e livre)

A Troca é livre por decisão do Gabriel: nenhum limite de valor, nenhuma proibição de presente e nenhuma exigência de equilíbrio. O desenho trata do custo, da segurança e da leitura do fluxo.

| Regra | Valor inicial [H] |
|---|---|
| **Formato** | Proposta assíncrona: um lado monta a oferta, e o outro aceita em até 24 horas. Tudo o que está na proposta fica reservado até aceitar, recusar ou expirar |
| **Taxa** | **Cada lado paga 3% do valor de mercado do que recebe,** em ouro, destruído (mínimo de 1 ouro). Uma troca equilibrada custa ~6% no total, como a Bolsa; um presente custa 3% a quem recebe. Qualquer lado pode assumir a taxa do outro |
| **Valor de mercado** | Preço de mercado da Bolsa para commodities (revisão de consistência: R18); valor estimado da Feira para itens únicos; ouro pelo valor de face; item sem estimativa pelo maior entre o valor declarado e um piso por tier |
| **Coins na Troca** | Quem recebe paga **12% do preço do Câmbio vezes a quantidade**, em ouro. Adotado na bíblia, seção 6.6 (revisão de consistência: R19; com 3%, o Câmbio fica sem negócio em 21 de 24 rodadas e os Coins chegam a 9,6% das Trocas, [08](08-simulacao.md), decisão 4). Com o Coin divisível, essa taxa também impede que ele vire a moeda em que se cotam os itens entre jogadores (seção 6.2). Só sai Coins do saldo livre, fora da carência |
| **Contestação no banco** | Se a doação de quem deu o Coin for contestada (chargeback, MED), quem recebeu de boa-fé fica com ele, e a conta que contestou fica suspensa até regularizar (seção 6.4). Com sinais de fraude organizada, o caso cai no nível 3 abaixo |
| **Baú lacrado na Troca** | Quem recebe paga **12% do preço de mercado** do Baú. Adotado na bíblia, seção 6.6 (revisão de consistência: R18 e R19) |
| **Cota** | Dar item de origem consome cota de quem dá (seção 3.3) |
| **Tela de confirmação** | Valor de mercado de cada lado, desequilíbrio em percentual e aviso acima de 50%; aviso extra quando o outro lado é uma conta com menos de 7 dias |
| **Banco da guilda** | Depositar é Troca com a guilda: não paga taxa, mas item de origem consome cota. Retirar paga 3%, como presente. **A reconciliar com o módulo 09** |

**Risco de troca no livro-razão (salvaguarda S3).** Todo movimento de valor entre contas é registrado com o valor de mercado do momento (revisão de consistência: R18).
- **O que o motor calcula:** o fluxo líquido por par de contas e por direção, o valor unilateral acumulado (quanto uma conta deu a muitas e quanto outra recebeu de muitas) e padrões de funil. O peso cai com meia-vida de 30 dias. É o modelo do IdleMMO ([04b, §3.8](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)), adaptado: aqui o risco **não exige equilíbrio**, porque a Troca é livre. Ele serve à segurança e à detecção.

| Nível | Quando | O que acontece |
|---|---|---|
| **0, normal** | Quase todas as trocas | Execução imediata |
| **1, atenção** | Fluxo unilateral grande e recorrente entre as mesmas contas | Execução imediata; entra no grafo de detecção |
| **2, retenção** | Padrão de conta invadida: dispositivo novo, troca recente de senha ou e-mail e entrega de muito valor | Retenção de 24 a 72 horas, com aviso ao e-mail e ao segundo fator de quem dá, que pode cancelar com um clique |
| **3, revisão** | Funil típico de fazenda (muitas contas novas dando valor a uma só) ou valor vindo de fraude de pagamento | Retenção até revisão humana, por no máximo 7 dias, com apelação em português |

**O RMT informal não é motivo de retenção:** vender ouro por Pix é decisão do jogador (S4). Os motivos de retenção são roubo de conta, fraude de pagamento, bot e multiconta.

**Quatro perguntas.**
- *Referência:* risco de troca do IdleMMO; taxa de 13% nas trocas diretas do IdleMMO; contratos do EVE, que escapam do imposto ([04a, §2.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md); [04b, §3.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). *Diferença:* aqui a Troca paga o mesmo que os balcões, então não há para onde fugir.
- *Problema:* liberdade social e comercial (presentes, guildas, RMT informal) sem abrir um canal de lavagem barato.
- *Comportamento:* presentear e negociar entre amigos, com a taxa vista como custo normal.
- *Risco:* mula barata (3% por presente). Mitigação: cota no item de origem, grafo de funil e retenção só nos padrões de fraude.

### 5.6 Mesma taxa em todo canal

[H] "Toda transferência de valor entre jogadores paga a mesma taxa, para o comércio não migrar para trocas diretas nem para uma moeda paralela" ([04a, decisão 5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). [F] No EVE, os contratos escapam do imposto de venda; no IdleMMO, o pergaminho de assinatura virou moeda paralela e o comércio escapava do imposto ([04b, §3.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).

**Custo para mover 1.000 de valor:**

| Operação | Bolsa | Feira | Leilão | Troca | Câmbio | Bazar de Personagens |
|---|---|---|---|---|---|---|
| Item por ouro | 6% (1% + 5%) | 6% | 7% + abertura | 6% (3% + 3%) | — | — |
| Presente (de um lado só) | — | — | — | 3% | — | — |
| Coins por ouro | — | — | — | **12%** | 12% | — |
| Baú lacrado por ouro | **12%** | — | — | **12%** | — | — |
| Personagem | — | — | — | — | — | 10% em Coins |

**O conflito com a bíblia (resolvido; revisão de consistência: R19).** Pela versão anterior da bíblia, a Troca custava 3% e o Câmbio, 12%. Se um Coin pudesse ser trocado por ouro na Troca a 6% no total (3% + 3%), o Câmbio seria contornado, o dreno cairia à metade e o índice passaria a medir só a parte do mercado que ainda usasse o balcão. O mesmo vale para o Baú lacrado, que é Coins em outra forma: 5 Coins compram 1 Baú, que voltaria a ouro na Bolsa por 6%. A simulação confirmou: com 3% por lado, o Câmbio fica sem negócio em 21 de 24 rodadas e os Coins chegam a 9,6% das Trocas de itens ([08](08-simulacao.md), decisão 4). **A bíblia (seção 6.6) adotou:** o Coin e o Baú lacrado pagam 12% em qualquer canal. Isso não limita a transferência; só a deixa com o mesmo preço em todo lugar.

## 6. Coins

### 6.1 Emissão por doação

- **O pagamento é uma doação que credita Coins** (decisão do Gabriel, [PROGRESSO](../PROGRESSO.md)). Cada valor doado na loja web (Pix e cartão) credita um número de Coins na conta. Os pacotes e eventuais bônus por valor ficam com o módulo 11.
- **Moeda em unidades.** O Coin é uma moeda divisível em unidades inteiras, não mais um item de 30 dias.
  - **Paridade [H]: 1 Coin = R$ 1,00, em unidades inteiras;** R$ 10 doados creditam 10 Coins (revisão de consistência: R17).
  - Preços da loja do [11](11-monetizacao.md): premium de 30 dias a 20 Coins, Baú a 5 Coins.
  - A simulação mostrou que a economia é a mesma com R$ 0,10 ou R$ 1,00 por Coin, desde que as regras escritas em Coins sejam divididas por 10; o que muda é que o preço em reais fica visível sem conta ([08](08-simulacao.md), decisão 2). As regras deste módulo já estão em Coins de R$ 1,00.
- **Sem reembolso** por parte do estúdio.
- **Nunca de graça:** não é prêmio de evento, de ranking nem de Fronteira. Compensação por manutenção vem em dias de premium presos, nunca em Coins. [F] O PLEX caiu de ~6 para ~4,5 milhões de ISK com distribuição gratuita e a unificação do mercado ([05d](../01-pesquisa/05d-rmt-recomendacao.md), "Como isso pode dar errado").
- **Rastreio por lote.** Cada doação gera um lote no livro-razão, com valor, meio de pagamento, data e carência.
  - No saldo, os Coins são iguais entre si. Mas o livro-razão sabe de que lote saiu cada unidade transferida, e é isso que permite a carência (6.3) e a regra de contestação (6.4).
  - **Ordem de uso:** o gasto na loja consome primeiro o saldo em carência. A transferência sai só do saldo livre, do lote mais antigo para o mais novo.
- **Validar com advogado:**
  - Chamar o pagamento de doação não muda a natureza de compra perante o CDC (Lei 8.078/1990, art. 49, arrependimento de 7 dias). Também pode atrair ITCMD e conflitar com as regras dos provedores de pagamento. O alerta já está registrado no [PROGRESSO](../PROGRESSO.md), e o risco foi assumido pelo Gabriel.
  - Uma moeda divisível que paga outros jogadores na Troca se afasta do circuito fechado (Lei 12.865/2013, art. 6º, §3º) e se aproxima de ativo virtual (Lei 14.478/2022, art. 3º) ([05b](../01-pesquisa/05b-rmt-legal-brasil.md)).

### 6.2 Usos

| Uso | Efeito | Observação |
|---|---|---|
| **Gastar na loja** | Premium (conveniência por tempo), cosméticos, Baú Misterioso e outros itens de conforto e cosmético | O Coin gasto na loja é **destruído**: é o dreno do Coin. O conteúdo do premium fica com o módulo 11. **Nunca:** desconto de taxa, teto ou cota maior, filas, offline, vagas de ordem, renda, XP ou poder ([05d, §5.2](../01-pesquisa/05d-rmt-recomendacao.md): desconto de taxa favorece quem já é rico, [F08](../01-pesquisa/fichas/F08-black-desert.md)) |
| **Comprar Baús** | 5 Coins por Baú (seção 8; revisão de consistência: R17) | O Baú comprado com saldo em carência herda a carência |
| **Dar lance no Bazar de Personagens** | Pagamento de personagens (seção 7) | Só com saldo livre |
| **Vender no Câmbio** | Em unidades, por ouro de outro jogador, menos 12% | Seção 5.4 |
| **Trocar na Troca** | Por qualquer coisa | 12% do preço do Câmbio vezes a quantidade, pago por quem recebe (seção 5.6; revisão de consistência: R19) |

- **Estoque:** `Coins em circulação = doados − gastos na loja − destruídos no Bazar de Personagens`. Publicado de forma agregada (6.6). Como moeda, o Coin pode ser guardado sem prazo. O estoque parado é demanda futura da loja e oferta futura do Câmbio, e o painel o acompanha.
- **Risco novo: moeda paralela.** Divisível e livre, o Coin pode virar a moeda em que se cotam os itens caros entre jogadores, fora do ouro. Foi o que aconteceu com o pergaminho do IdleMMO e com a "dolarização" do Throne and Liberty ([04b, §5.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md); [05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). Defesas: balcões só em ouro (5.0), 12% em qualquer troca de Coins (5.6) e índice publicado em ouro.

### 6.3 Carência por lote e meio de pagamento (salvaguarda S2)

Antes da **primeira transferência** (Câmbio, Troca, lance no Bazar de Personagens), cada lote de Coins cumpre uma carência que depende do meio de pagamento. Durante a carência, os Coins do lote podem ser gastos na loja, mas não transferidos. Depois dela, circulam livremente para sempre (decisão do Gabriel).

| Situação | Carência [H] | Referência |
|---|---|---|
| Pix, conta com histórico limpo | 72 horas | [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md) |
| Cartão, conta com histórico limpo | 7 dias | Coins do Tibia transferíveis conforme o meio de pagamento ([F04](../01-pesquisa/fichas/F04-tibia.md)) |
| Primeira doação da conta, qualquer meio | 7 dias | Trava de 72 h do MWI; retenção de 7 dias da Steam ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)) |
| Doação fora do padrão da conta ou com sinal de risco | Até 30 dias | GGMAX retém de 7 a 30 dias ([05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)) |

- [F] Nenhuma carência cobre o prazo inteiro de contestação: cerca de 120 dias no cartão e até 80 dias no MED do Pix ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)). [H] A carência barra a fraude rápida, e o resto fica com a regra de contestação.
- **Baús comprados com saldo em carência** e o conteúdo deles herdam a carência que falta: não se vendem nem se trocam antes do fim.

### 6.4 Contestação forçada pelo banco (chargeback e MED)

**Regra decidida pelo Gabriel:** a conta cuja doação é contestada (chargeback no cartão ou MED do Pix) **fica suspensa até regularizar**, isto é, até pagar de novo o valor contestado. A regra substitui a dívida em ouro.

Como ela se aplica a uma moeda que circula [H]:
1. **Durante a suspensão,** a conta não joga, não negocia e não transfere. Coins, ouro e itens ficam congelados com ela. As ordens abertas são canceladas, e o que estava reservado volta, congelado, para a própria conta.
2. **Quem recebeu de boa-fé fica com o que recebeu:** Coins numa Troca, ouro de uma venda no Câmbio, um personagem no Bazar de Personagens. O estúdio absorve a perda; nada é tirado de terceiros por causa da contestação de outro.
3. **Regularizou, a suspensão cai,** e a conta volta com o que tinha.
4. **Fraude organizada é outro caso.** Quando a contestação vem com sinais de fraude (cartão de terceiro, funil de contas, risco de troca nível 3), as contas que receberam o valor entram em revisão. **A reconciliar com o módulo 13.**
5. **Disjuntor:** se as disputas passarem de um limiar interno (bem abaixo do 1,5% das bandeiras, [05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §5.1), as transferências de Coins (Câmbio, Troca, Bazar de Personagens) são suspensas. O gasto na loja continua.

**Efeito na economia.** Os Coins contestados que já foram transferidos seguem circulando sem dinheiro por trás. A massa ativa de ouro e de Coins cai pelo que fica congelado nas contas suspensas. A simulação modela os dois efeitos (parâmetro 45 e cenário 11 da seção 13).

**Por que a carência continua necessária.** A suspensão não pesa para quem usa cartão roubado: o fraudador abandona a conta. A carência impede que ele transfira antes de a vítima perceber.

**Tensão registrada.** O [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md) recomendava revogar só o valor contestado, sem bloquear a conta inteira, porque a FTC condenou a Epic por bloquear contas inteiras depois de contestações ([05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §3.1). A decisão do Gabriel suspende a conta, mas devolve tudo ao regularizar. **Validar com advogado** a suspensão e o congelamento de saldo diante do CDC (art. 51, cláusulas abusivas). Risco assumido pelo Gabriel.

### 6.5 Teto de doação mensal

- **Padrão igual para todos [H]:** **R$ 250 por mês**, somando todas as doações (250 Coins) (o valor do [11](11-monetizacao.md), seção 7.1; revisão de consistência: R17 e D8).
- **Aumento** só por pedido e com espera, em dois níveis: R$ 600 e R$ 1.200 por mês. **Limites pessoais menores** a qualquer hora. O limite de doações por dia, o painel de gasto e a resposta a sinais de risco ficam no 11 ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 10).
- **Papel econômico:** o teto limita a oferta de Coins por pagante e, com ela, o "pay-to-win de capital", em que quem paga compra liquidez para dominar livros ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), mecanismo 5). Também limita o estrago de um cartão roubado.
- **Os valores ficam com o módulo 11.**

### 6.6 Índice público do Coin

- **No jogo e em dados abertos, com atraso de 1 hora:**
  - preço de cada rodada do Câmbio, **por Coin, em ouro** (série horária e diária, com abertura, máxima, mínima e fechamento);
  - a leitura humana do índice, **o preço do premium de 30 dias em ouro** (o preço por Coin vezes os Coins do premium);
  - volume em unidades, ordens em espera dos dois lados e ouro destruído pela taxa.
- **Semanal, agregado:**
  - Coins doados, gastos na loja, destruídos no Bazar de Personagens e em circulação;
  - parcela do premium obtida com ouro;
  - contas suspensas por contestação e contas regularizadas.
- **Leitura obrigatória ao lado da cesta (IPC) e da massa monetária:** o preço do Coin mede também a oferta e a demanda do próprio Coin. [F] PLEX, point do Torn e Bond do OSRS caíram com a moeda crescendo ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). Aqui, o gasto na loja e a taxa do Bazar de Personagens destroem Coins e empurram o preço para cima sem que os bens mudem; um estoque grande parado pode empurrá-lo para baixo de uma vez.

### 6.7 Quatro perguntas (Coins como moeda divisível e livre)

- **Referência:** Tibia Coins (moeda em unidades, transferível conforme o meio de pagamento, [F04](../01-pesquisa/fichas/F04-tibia.md)); PLEX, Bond e WoW Token. *Diferença:* livre em qualquer canal, com a mesma taxa em todos, e o gasto na loja como dreno.
- **Problema:** capturar a demanda de RMT pelo canal oficial e dar ao não pagante uma rota ao premium (lei 19).
- **Comportamento:** o pagante doa e vende parte dos Coins por ouro, financiando o tempo do não pagante; o Coin vira presente entre amigos; quem não paga junta ouro para o premium.
- **Risco:** moeda paralela, ativo virtual e entesouramento especulativo. Mitigação: balcões só em ouro, limite de compra no Câmbio, taxa de 12% em todo canal, nenhuma emissão grátis e o estoque em circulação no painel. **Validar com advogado** (seção 6.1).

## 7. Bazar de Personagens (bazar de contas)

### 7.1 Formato

- **Leilão em Coins** de 3 ou 7 dias, com lance inicial de pelo menos **30 Coins (R$ 30)**, incremento de 5% (mínimo de 1 Coin) e lance máximo automático (revisão de consistência: R17; sem dividir por 10, o lance mínimo viraria R$ 300 e o Bazar não teria venda no ano, [08](08-simulacao.md), decisão 2).
- **Prorrogação** de 30 minutos para lance no fim, até 24 horas no total.
- **Garantia de 100%** em Coins do saldo livre, fora da carência; lances irrevogáveis.
- [F] O Char Bazaar do Tibia funciona com taxa de 50 TC, comissão de 12%, pagamento só com coins transferíveis e reserva de 10% do lance. Em 2025 movimentou 721,4 milhões de TC, com ~98,7 milhões em taxas, cerca de 13% da receita da CipSoft pela estimativa de terceiros ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).

### 7.2 Taxas

- **10% do lance vencedor em Coins, destruído** (bíblia 6.6), arredondado para cima à unidade. Exemplos:
  - venda por 30 → taxa 3, o vendedor recebe 27;
  - venda por 235 → taxa 24 (23,5 arredondado para cima), recebe 211.
  - Com o lance mínimo de 30 Coins, o arredondamento à unidade acrescenta no máximo 1 Coin à taxa (revisão de consistência: R17).
- **Anúncio:** 2.000 ouro, sem reembolso, contra anúncios de teste e spam. **[proposta de complemento à bíblia]**
- **Por que o Coin é destruído:** o dinheiro já entrou quando o Coin foi doado. Destruí-lo tira oferta de Coins e não cria receita nova para o estúdio a cada venda, como pede a regra de que taxa não é receita (bíblia 6.6). Efeito colateral: o preço do Coin em ouro sobe (seção 6.6).

### 7.3 O que vai junto e o que fica

**Princípio: o Bazar de Personagens vende o personagem, não o cidadão nem o cofre.**

| Vai com o personagem | Fica com a conta do vendedor |
|---|---|
| Níveis, maestrias, Selos de mestre, vocação, habilidades | **Mérito**, vitalício e da Era: a cidadania é da pessoa |
| Ajudantes | **Ouro e Coins** |
| Equipamento em uso, **preso ao comprador por 30 dias** | Inventário e armazém negociáveis |
| Cosméticos aplicados e presos; casa e decoração presa | Direito de voto e histórico no Conselho (módulo 09) |
| Títulos de feito, com a marca "via Bazar de Personagens" visível no perfil | **Marcos:** zerados na venda, porque a temporada é de quem jogou |
| Nome do personagem (o comprador pode trocar) | Registros históricos (ranking, nome no mapa da Fronteira) com o nome da época |

- **Por que o armazém fica:** se o ouro e os itens fossem junto, o Bazar de Personagens viraria um câmbio de ouro por Coin a 10%, mais barato que o Câmbio (12%). O equipamento em uso vai, porque o comprador quer um personagem pronto, mas fica preso por 30 dias, para não servir de cofre disfarçado.
- **Por que o Mérito fica:** quem comprasse um personagem com Mérito alto compraria prioridade na cidade. O [conceito](../02-conceito.md) já previa carência para contas compradas votarem; aqui a cidadania nem muda de mãos.

### 7.4 Quem pode vender [H]

- Conta com pelo menos 30 dias e 40 horas de jogo ativo verificado (sessões com decisões, não cliente aberto).
- Segundo fator de autenticação ativo há pelo menos 14 dias, sem troca de e-mail, senha ou segundo fator nos últimos 14 dias.
- Personagem fora de guilda, sem mandato no Conselho, sem encomenda ativa, sem suspensão por contestação, sem investigação aberta e sem Coins em carência.
- Uma venda a cada 60 dias por conta.

### 7.5 Quem pode comprar

- **Uma identidade verificada = uma conta = um personagem ativo** (P8 e decisão 4 do checkpoint 2). Para receber o personagem, a conta do comprador precisa estar vaga:
  - uma conta nova;
  - uma conta cujo personagem foi vendido no Bazar de Personagens;
  - ou uma conta cujo personagem foi encerrado pelo dono (os bens negociáveis ficam na conta).
- Não existe "guardar" o personagem antigo para voltar a ele, o que daria a uma pessoa quatro ofícios mestres por revezamento e quebraria o pilar 1.
- O personagem comprado chega sem guilda e fica 30 dias fora dos pódios de ranking da Era. **A reconciliar com os módulos 03, 09 e 13.**

### 7.6 Segurança

- **Aviso de 72 horas:** ao criar o anúncio, o dono da conta recebe aviso por e-mail e no segundo fator, com cancelamento em um clique. O leilão só abre depois disso. É a janela contra o roubo de conta.
- **Liquidação atômica** no livro-razão. O personagem muda de conta, e nenhuma senha, e-mail ou documento muda de mãos. As sessões do vendedor no personagem são encerradas. [F] Antes do Char Bazaar, compradores acionavam a recuperação de conta para confirmar a posse, e o comércio corria no eBay com golpe e banimento ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).
- **Os Coins recebidos pelo vendedor ficam retidos por 7 dias.** Se, em até 30 dias, ficar provado que a venda veio de conta invadida, o personagem volta ao dono legítimo, e os Coins retidos voltam ao comprador. Depois disso, o caso segue o artigo 12 da constituição.
- **Contestação no banco depois da liquidação** (seção 6.4):
  - Se a doação que pagou os lances do comprador for contestada, o vendedor de boa-fé fica com os Coins, e a conta compradora fica suspensa até regularizar, com o personagem.
  - Se a contestação for de doações do próprio vendedor, a conta dele fica suspensa, mas a venda não se desfaz: o comprador de boa-fé fica com o personagem.
- **Vender a conta fora do Bazar de Personagens continua proibido,** não por ser RMT (o RMT informal está em aberto), mas porque significa entregar a identidade verificada de outra pessoa. Isso quebra a regra de idade (P8) e a barreira contra multicontas.

### 7.7 Quatro perguntas

- **Referência:** Char Bazaar do Tibia ([F04](../01-pesquisa/fichas/F04-tibia.md); [05a, §3.C](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). *Diferença:* o cofre e a cidadania não vão junto, e há um aviso de 72 horas ao dono.
- **Problema:** o mercado cinza de contas, com golpe de recuperação e venda da identidade de outra pessoa.
- **Comportamento:** investir no personagem como patrimônio e "realizar" o progresso ao sair, em vez de abandonar a conta.
- **Risco:** num idle, vender a conta é vender tempo ausente acumulado, que é o que um bot produz de graça ([05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). Mitigação: 40 horas de jogo ativo verificado, uma venda a cada 60 dias, identidade verificada e detecção de nivelamento automatizado. **Validar com advogado** a natureza jurídica da venda de personagem e a suspensão por contestação (CDC, arts. 49 e 51).

## 8. Baú Misterioso

### 8.1 Preço e compra

- **5 Coins por Baú na loja** [H], ou R$ 5, o preço do módulo 11 (revisão de consistência: R17).
- Comprado com Coins, o **Baú lacrado é um item negociável por ouro** (decisão do Gabriel). É fungível dentro da série, então é negociado na Bolsa, num livro por série.
- **Taxa:** o Baú lacrado é Coins em outra forma e paga 12% em qualquer canal (1% de anúncio + 11% na venda na Bolsa; 12% na Troca), como a bíblia adotou na seção 6.6 (revisão de consistência: R19). Pela arbitragem, o preço do Baú em ouro tende a ficar perto de 5 vezes o preço do Coin, mais ou menos o prêmio da série (revisão de consistência: R17).

### 8.2 Conteúdo

- **Só cosmético e decorativo** (bíblia, seção 5): visuais de equipamento e roupa, decoração de casa, aparências de ajudante, molduras e gestos. Nunca poder, renda, XP, filas, offline ou material de crafting.
- **Uma série por Era.** No fim da Era, a série sai da loja; os Baús lacrados que restarem continuam circulando com tiragem fechada.
- **Negociável até ser aplicado.** Vestir ou decorar prende o item à conta, e ele passa a ir junto com o personagem no Bazar de Personagens. É o dreno dos cosméticos: P3 pede que tudo o que se negocia se gaste, e cosmético não se desgasta.
- **Duplicatas:** podem ser desfeitas em fragmentos presos (nome a definir no módulo 11), que compram, a preço fixo, um item escolhido da mesma série. A troca é determinística, sem nova sorte. Evita o erro do Trade Up do CS2, um conversor que inundou o topo ([04a, §2.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Convivência com o artesão:** os cosméticos feitos por jogadores com materiais (tinturas, bordados, mobília) circulam no mercado ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7). O Baú traz "visuais de série", e os ofícios fazem o que se aplica por cima e a decoração funcional. **A reconciliar com os módulos 05, 06 e 14**, para que o Baú não tire o freguês do alfaiate.

### 8.3 Tabela de chances (exemplo publicado por série)

| Raridade | Chance por Baú [H] | Garantia | Tiragem |
|---|---|---|---|
| Comum | 62% | — | Livre |
| Incomum | 25% | — | Livre |
| Raro | 10% | A cada 10 Baús da série abertos pela conta, pelo menos 1 Raro ou melhor | Livre |
| Muito raro | 2,7% | A cada 60, pelo menos 1 Muito raro ou melhor | Livre |
| Lendário | 0,3% | — | **Máxima por série e por Cidade** (ex.: 200), com contador público. Esgotada, a chance passa ao Muito raro, e a tabela publicada muda na hora |

- **Publicar a chance nominal e a efetiva com a garantia.** Sem garantia, a chance de 10 Baús sem nenhum Raro ou melhor seria de `0,87^10 ≈ 25%`, e é esse caso que a garantia cobre.
- **Escassez prometida:** a tiragem do topo só aumenta com aviso prévio (artigo 8 da constituição).

### 8.4 Teto de gasto (salvaguarda S5)

| Limite | Valor [H] |
|---|---|
| Baús comprados na loja | **Até 20 por conta por mês** (100 Coins, R$ 100, com o Baú a 5 Coins; o limite do [11](11-monetizacao.md), seção 5.7; revisão de consistência: R17 e D8) |
| Baús abertos, de qualquer origem | Até 10 por dia e 40 por mês por conta |
| Limites pessoais | Menores, a qualquer hora, com efeito imediato |
| Ofertas | Nenhuma com contagem regressiva ou personalizada para quem mais gasta ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 10) |
| Histórico | Gasto e aberturas visíveis ao jogador |

### 8.5 Quatro perguntas

- **Referência:** a caixa do RubinOT, citada pelo Gabriel; probabilidades publicadas e teto de gasto (S5); tiragem prometida ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), artigo 6 do esboço).
- **Problema:** receita de cosmético com colecionismo e mercado secundário vivo.
- **Comportamento:** colecionar séries, negociar duplicatas, exibir o raro.
- **Risco, o maior do módulo:** pagamento (Coins, ou ouro que vale reais) + sorte + prêmio com valor de mercado (o conteúdo é negociável, e o RMT informal está aberto). É a configuração que o estudo jurídico marcou como luz vermelha ([00-sintese](../01-pesquisa/00-sintese.md), "O que muda com essas decisões"):
  - Lei de Contravenções Penais (Decreto-Lei 3.688/1941), art. 50;
  - ECA Digital (Lei 15.211/2025), art. 20, que veda caixas de recompensa em jogos de acesso provável por crianças e adolescentes. O jogo 18+ com idade verificada reduz esse risco, mas não o elimina numa PWA aberta;
  - tese de Nova York contra a Valve; recusa de gateways e de lojas.
  - **Validar com advogado.** Risco assumido pelo Gabriel (salvaguarda S1 não adotada).
  - Mitigação econômica: conteúdo sem poder, aplicar prende, garantia e tiragem publicadas, tetos e um interruptor que torna o conteúdo preso por país, se a lei mudar ([05d](../01-pesquisa/05d-rmt-recomendacao.md), "Como isso pode dar errado", item 9).

## 9. Anti-inflação e antideflação

### 9.1 Alavancas ranqueadas

Critérios do [04a, §7](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md): eficácia, custo político e encaixe no idle. A ordem é a de uso.

| # | Alavanca | Como aparece aqui | Eficácia | Custo político | Uso |
|---|---|---|---|---|---|
| 1 | **Consumo embutido** | Insumos de NPC indexados ao IPC e custo de partida (seção 4.3) | Alta; acompanha a emissão sozinha | Baixo: o jogador gasta porque quer produzir | Ligada desde o lançamento |
| 2 | **Teto de emissão por conta** | Portão de saída (seção 3) | Alta, preventiva | Baixo no lançamento; alto se vier depois (SimpleMMO, [04a, §3.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Desde o lançamento; nunca afrouxar sem análise de impacto |
| 3 | **Desgaste e quebra** | Durabilidade, reparo que reduz o máximo, quebra depois de N reparos | Alta para itens | Baixo quando é consumo do uso, não decaimento arbitrário (Simpson, [04a, §4.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Desde o lançamento |
| 4 | **Obras e encomendas elásticas** | Obra sem limite, com Mérito em curva; encomenda com orçamento móvel (seção 4.7) | Média a alta; funciona nos dois sentidos | Baixo: a cidade é a freguesa | Ajuste mensal |
| 5 | **Drenos progressivos** | Troca de ofício mestre, treino de ajudante e ampliação da casa com custo crescente | Alta contra concentração | Médio; explicar como serviço, não como imposto sobre o sucesso | Desde o lançamento |
| 6 | **Drenos de topo** | Selo de mestre, luxos por ouro, peças de prestígio de preço muito alto | Média; mira o topo | Baixo | Novos a cada Era |
| 7 | **Taxas** | Balcões, Troca, Câmbio | Freio, não âncora: dobrar todas move `M*` menos de 15% (seção 4.6) | Médio; alto quando sobem | Mudança com rampa de 1 ponto por mês e 30 dias de aviso |
| 8 | **Destino visível das taxas** | O ouro destruído em taxas aparece como contribuição da cidade à obra que o Conselho escolher | Torna a taxa aceitável | Baixo | Desde o lançamento |
| 9 | **Item sink por orçamento** | Encomenda especial que compra e apaga um item que entra rápido demais, com lista e regra publicadas | Média, focada | Baixo, se for público | Depois do 6º mês, se preciso |
| 10 | **Fronteira** | Economia de Marcos separada; a cidade abastece a fronteira | Alta como demanda de bens | Médio | A partir da 2ª Era |

**Regra do destino visível [H]:** os benefícios das obras **não podem multiplicar fontes negociáveis** (nada de "+10% de ouro das encomendas para todos"). Eles abrem regiões, conteúdo, conforto e cosméticos. Caso contrário, a taxa vira combustível de inflação. **A reconciliar com os módulos 09 e 10.**

**A evitar ou só para emergência** ([04a, §7.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)):
- cortar fontes depois do lançamento;
- escassez imposta;
- mexer no preço-base de NPC;
- confisco e rollback geral;
- bandas rígidas;
- taxa sobre a compra do Coin (falhou no Albion);
- Coins grátis;
- aluguel ou decaimento obrigatório do estoque, que pune o ausente;
- dreno que vira receita.

### 9.2 Antideflação (o piso de 0%)

[H] Num idle de produção, a deflação dos básicos é o risco mais provável e o mais doloroso: o produtor ouve "meu trabalho não vale nada" ([04a, §3.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Sinais:**
  - preço de mercado de um básico abaixo de 1,3 vez o preço-base de NPC por 14 dias;
  - IPC anualizado em 90 dias abaixo de 0%;
  - velocidade em queda de 30% em 4 semanas.
- **Alavancas, nesta ordem:**
  1. **Encomendas ampliadas** para os bens em excesso (entra ouro, saem itens).
  2. **Obra especial** com Mérito em dobro para o bem em excesso, por tempo limitado.
  3. **Indexação dos insumos,** que cai sozinha com o IPC.
  4. **Festas da Cidade:** eventos de consumo de fantasia medieval (um Festival da Colheita que consome refeições e decoração, por exemplo), com recompensa cosmética.
  5. **Suprimentos da Fronteira.**
  6. Só por último, e pelo artigo 11, a meia-vida do NPC.

### 9.3 Diagnóstico antes do remédio

Quando o índice sai da meta, a primeira pergunta é **o que subiu**:
- **Só o Coin subiu,** com a cesta estável: oferta e demanda de Coins (mais Bazar de Personagens, menos pagantes). Não se mexe nos drenos de ouro.
- **A cesta subiu:** primeiro, separar "muito ouro" de "pouca oferta" pelo **consumo essencial não atendido** (seção 12.2). Se ele estiver alto, a alta é escassez: não cortar o ouro das encomendas, que é o capital de giro dos artesãos, e pedir mais bens ([08](08-simulacao.md), seção 7.4; revisão de consistência: R25). Se estiver baixo, é inflação de bens. Ação por ordem: luxos novos, mais Mérito no lugar do ouro nas encomendas, indexação e, só depois, taxas com rampa.
- **Massa sobe, preços caem:** entesouramento com produção alta, a deflação do EVE em 2025–26. Ação: seção 9.2.

Nunca reagir a um indicador só ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), "Como isso pode dar errado").

## 10. Anti-manipulação

### 10.1 As 16 proteções do [04b, §5.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), adaptadas

| # | Proteção | Como fica aqui | Seção |
|---|---|---|---|
| 1 | Livro-razão de partidas dobradas, atômico e idempotente | Inclui a **origem de cada lote** e o crédito dos insumos, necessários ao portão de saída | 3.3 |
| 2 | Garantia de 100% | Em toda ordem, lance, proposta de Troca e lance no Bazar de Personagens | 5 |
| 3 | Degrau relativo, espera e taxa de reanúncio | 3 algarismos; 10 min na Bolsa e 30 min na Feira; reanúncio de 1% | 5.1, 5.2 |
| 4 | Taxas arredondadas para cima, sobre o valor de mercado | Sobre o preço de mercado, nunca sobre o preço de NPC | 1.2, 5 |
| 5 | Valor de referência, banda suave e alerta | Preço de mercado horário com ±5% por hora; banda de ±15% com caminhada de 2% por hora; o VR fixo mede só o teto e a cota (revisão de consistência: R18) | 5.1 |
| 6 | Piso de NPC abaixo do custo | Preço-base de 40% do VR, com curva logarítmica | 4.2 |
| 7 | Limite de compra por janela | Itens críticos a cada 4 horas; Coins, 200 unidades por semana no Câmbio (revisão de consistência: R17) | 5.1, 5.4 |
| 8 | Negociável e preso separados, com teto | Portão de saída com cota | 3 |
| 9 | Custo de conta para dar valor | Idade verificada para todos, rampa da cota em 30 dias e condições do Bazar de Personagens | 3.4, 7.4 |
| 10 | Risco de troca por par e direção | Sem exigir equilíbrio (a Troca é livre); níveis com retenção só em padrão de fraude | 5.5 |
| 11 | Grafo de transferências | Pontuação de mula, funil e bot; revisão humana; apelação em português; relatório trimestral de banimentos | 5.5; **módulo 13** |
| 12 | Regras públicas antes do lançamento | Proibidos: bots, multicontas, manipulação coordenada, exploits, fraude de pagamento e venda de identidade. RMT informal: não proibido e não intermediado; golpes no informal sem suporte (S4) | 11 |
| 13 | Dados oficiais com atraso e API de leitura | Atraso de 1 hora, agregados, sem dado por conta; uma ação do usuário por requisição de escrita | 12 |
| 14 | Disjuntores e alarmes | Por item, por balcão e por moeda, testados antes de serem precisos | 12 |
| 15 | Ferramentas internas com dupla aprovação | Mais embargo e publicação simultânea de mudanças econômicas; funcionários sem comércio relevante no jogo | 11 |
| 16 | Nunca premiar volume | Seção 10.3 | 10.3 |

**Além das 16:**
- pré-vitrine com sorteio gratuito entre interessados na Feira;
- leilão de chamada no Câmbio;
- aviso de 72 horas ao dono no Bazar de Personagens;
- mesma taxa em todo canal (5.6);
- reserva de cota no anúncio (3.3).

### 10.2 Manipulação coordenada

- **Proibida:** combinar entre contas para mover preço (cornering combinado, pump and dump, ordens de fachada, lances de fachada).
- **Permitida:** a especulação individual, comprar barato e vender caro sozinho, que é jogo legítimo ([04b, §2.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Sanções escritas:**
  - confisco de até 3 vezes o ganho, limitado ao que a conta tem, com o valor destruído, nunca revendido;
  - suspensão e banimento progressivos (**a reconciliar com o módulo 13**).
- **Referências:** regra 2.4 do MWI; confisco de 2 a 3 vezes no MWI ([04b, §3.9–3.10](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).

### 10.3 Nada de ranking por volume

- Nenhuma conquista, missão, título ou ranking premia número de vendas, volume negociado ou lucro de comércio.
- As encomendas dão nota pela qualidade e pelo prazo, não pelo volume.
- O Mérito tem curva logarítmica por dia.
- [F] Quando a LooksRare pagou recompensas proporcionais ao volume, ~87% do volume foi classificado como wash trading ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- Os rankings públicos de economia ficam restritos a coleção, obras-primas e contribuição à cidade, todos em curva.

## 11. Constituição econômica da Cidade

> **Preâmbulo.** O ouro é a moeda comum da Cidade. O estúdio se compromete a preservar o poder de compra do ouro, a garantir ao recém-chegado acesso aos bens de que precisa, a recompensar decisões e não tempo de cliente aberto, e a nunca vender a espera. Estas regras são públicas e só mudam pelo artigo 14.

| Art. | Regra | Origem |
|---|---|---|
| **1. Mandato e metas** | Meta: variação do IPC de 0% a +8% ao ano, com piso de 0%, medida em janela móvel de 90 dias e anualizada. A banda é revista uma vez, no 90º dia depois do lançamento. Metas auxiliares: drenos entre 85% e 95% das fontes; massa por conta ativa entre 2 e 3 premiums de 30 dias em ouro; premium de 30 dias entre 12 e 20 dias de renda mediana | Bíblia 6.6; meta de expansão do Torn; GW2 depois de 2015 ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **2. Moedas e camadas** | Quatro moedas: Ouro, Coins, Marcos e Mérito. O que é preso nunca se torna negociável por compra; o que é pago nunca vira renda, XP ou poder | Seção 2; bíblia, seção 5 |
| **3. Emissão** | O ouro só nasce nas fontes listadas na seção 4.1. O teto de emissão e sua fórmula são públicos. Nenhuma fonte negociável cresce exponencialmente com o nível. Toda mudança de fonte, de teto ou do offline vem com análise de impacto publicada | Lei 16; IdleMMO e SimpleMMO ([04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **4. Drenos e taxas** | Lista pública de drenos. Toda taxa em ouro é destruída, nunca receita. Mudança de taxa com 30 dias de aviso e rampa de no máximo 1 ponto por mês. O destino visível das taxas é a obra | Bíblia 6.6; rampa do Torn; revolta no EVE e no OSRS |
| **5. Mesma taxa** | Item por ouro custa ~6% em qualquer canal; Coins e Baú lacrado, 12%; presente, 3% | Seção 5.6 |
| **6. Coins** | Moeda em unidades que nasce só de doação em reais, sem reembolso, e nunca é dada de graça. Gasta na loja, é destruída. O estúdio nunca compra nem vende no Câmbio. A regra da rodada (banda, desempate, frequência) é pública. A carência por lote é publicada. A doação contestada no banco suspende a conta até regularizar, e quem recebeu de boa-fé fica com o que recebeu | Seção 6; PLEX ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); decisões do Gabriel |
| **7. Bazar de Personagens** | Regras de venda, o que vai e o que fica, taxa de 10% destruída e aviso de 72 horas | Seção 7 |
| **8. Baú e escassez prometida** | Tabela de chances, garantia e tiragem publicadas antes da venda de cada série. A tiragem do topo nunca aumenta sem 60 dias de aviso. Teto de compra e de abertura | Seção 8; Trade Up do CS2 |
| **9. Conselho** | Mexe só nas faixas da tabela abaixo. Política monetária (teto, NPC, insumos, Câmbio, Coins, Bazar de Personagens, Baú) não vai a voto | O OSRS não pôs o imposto em votação ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **10. Transparência** | Painel público, relatório mensal, dados abertos com atraso de 1 hora, API de leitura e erros corrigidos em público | MER do EVE; JSON do MWI; Varoufakis |
| **11. Emergência** | Disjuntor por item, balcão ou moeda, com comunicação em até 2 horas, prazo anunciado e relatório em 7 dias. Rollback geral só como último recurso. A remoção de valor indevido, inclusive de quem recebeu de boa-fé, segue regra escrita antes. Mudar o preço-base de NPC é medida só deste artigo | New World, ESO, Diablo IV ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 8 do esboço) |
| **12. Exploits, bots e fraude** | Confisco proporcional (até 3 vezes o ganho, limitado ao saldo), destruído; suspensão e banimento progressivos. O RMT informal não é intermediado, garantido, apoiado pelo suporte nem proibido pelo estúdio (S4). Nenhuma API ou parceria com sites de RMT | Decisão do Gabriel; [05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md) |
| **13. Garantias** | Nunca estarão à venda: a espera, o offline, as filas, o teto e a cota, a taxa do ausente, renda, XP e poder. Proibidos no jogo: juros, cassinos e pirâmides entre jogadores | Lei 13; [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 11 do esboço |
| **14. Emenda** | Mudanças pedem 60 dias de aviso, justificativa com dados, consulta pública e histórico de versões. Exceção: o artigo 11 | [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 12 do esboço |

**Faixas do Conselho:**

| Alavanca | Faixa | Limite de mudança |
|---|---|---|
| Taxa da Feira | 4% a 8% (bíblia 6.6) | No máximo 1 ponto por mandato, com 30 dias de aviso |
| Bens pedidos nas encomendas da cidade | Quais bens e em que proporção, dentro do orçamento em ouro fixado pelo estúdio | A cada mandato |
| Obra corrente | Entre as 2 ou 3 que o estúdio libera a cada Era | A cada mandato |
| Destino simbólico das taxas | Qual obra recebe o crédito do ouro destruído | A cada mandato |

**Por que o Conselho não mexe na moeda:** captura por guildas ricas e por contas compradas é um risco já registrado no [conceito](../02-conceito.md). Uma taxa que muda a cada eleição destrói a confiança no livro de ordens. O Conselho governa a cidade; a constituição governa a moeda. **A reconciliar com o módulo 09** (poderes e mandato).

## 12. Painel diário e alarmes

### 12.1 O IPC

- **Cesta:** 24 bens em quatro grupos:
  - 8 matérias-primas, cobrindo as quatro coletas e os tiers;
  - 6 intermediários (lingote, tábua, couro, fio e tecido);
  - 4 consumíveis (refeição e poção, em dois tiers);
  - 6 "custos de reposição": o preço de mercado de repor e manter por 30 dias um conjunto de referência de ferramentas e equipamento em três estágios (casual, mediano, hardcore).
- **Preço de cada bem:** o preço de mercado (mediana ponderada por volume em 24 horas; revisão de consistência: R18).
- **Pesos:** valor negociado nos 30 dias anteriores, com **cesta encadeada mensal**, para acompanhar a mudança do consumo sem quebrar a série.
- **Ficam fora da cesta:** os insumos de NPC, que são indexados ao próprio IPC (seria circular), e os cosméticos.
- **Base 100 no 30º dia depois do lançamento,** quando a monetização inicial das contas já passou.
- **Publicação:** diária, com variação anualizada em 30 e em 90 dias, ao lado do preço do Coin (bíblia, glossário) e de um **índice de luxo** separado (raros do Leilão, cosméticos e Baú).
- **Referência:** índices de minerais, primários, secundários e de consumo do EVE desde 2007 ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

### 12.2 Painel

| Métrica | Definição | Frequência | Alarme inicial [H] | Público? |
|---|---|---|---|---|
| **IPC** | Seção 12.1 | Diária | Anualizado em 90 dias fora de 0% a 8%; variação de 3% em 7 dias | Sim |
| **Índice de luxo** | Raros, cosméticos, Baú | Semanal | — | Sim |
| **Preço do Coin** | Rodada do Câmbio, por unidade em ouro, e o premium de 30 dias em ouro | Horária | ±10% em 24 h; descolamento de mais de 15% do IPC em 30 dias | Sim |
| **Premium em dias de renda** | Preço em ouro do premium de 30 dias ÷ fontes brutas diárias do mediano | Semanal | Fora de 12 a 20 dias | Sim |
| **Estoque de Coins** | Doados − gastos na loja − destruídos; parcela parada há mais de 30 dias | Semanal | Estoque parado acima de 2 meses de gasto na loja | Sim, agregado |
| **Massa monetária (M)** | Ouro em contas ativas (login em 30 dias) e inativas | Diária, alarme horário | +2% em 24 h. [F] O dupe do EverQuest II somou ~20% em 24 h ([04a, §6.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Sim |
| **M por conta ativa ÷ preço do premium** | Em ouro | Semanal | Fora de 2 a 3 depois do 6º mês | Sim |
| **Delta de retorno** | Ouro que entra ou sai da massa ativa com contas que voltam ou somem | Diária | — | Interno |
| **Velocidade** | Valor negociado entre jogadores ÷ M média | Semanal | Queda de 30% em 4 semanas | Sim |
| **Fontes por categoria** | NPC, encomendas, cercos, eventos, começo | Horária e diária | Fonte acima de 1,5 vez a média de 7 dias sem mudança de conteúdo | Sim, agregado |
| **Drenos por categoria** | Insumos, partida, taxas, obras, luxos, Selo, ajudantes | Diária | Abaixo de 80% das fontes por 14 dias, ou acima de 105% por 30 | Sim |
| **Fração no teto** | Contas ativas que esgotaram a cota no dia | Diária | Fora de 10% a 30% | Sim |
| **Estoque de origem** | VR de origem acumulado por conta (mediana e percentil 99) | Semanal | Percentil 99 crescendo por 4 semanas | Interno |
| **Básicos contra o piso** | Preço de mercado ÷ preço-base de NPC de cada básico | Diária | Abaixo de 1,3 por 14 dias | Interno e relatório |
| **Consumo essencial não atendido** (novo; revisão de consistência: R25) | Parcela do desgaste e dos consumíveis previstos (equipamento, kits, refeições, poções) que as contas ativas não compraram nem produziram | Diária | A calibrar no alfa (no base da simulação, 25% a 40%); separa "muito ouro" de "pouca oferta" antes de qualquer corte no ouro das encomendas (seção 9.3) | Interno e relatório |
| **Liquidez** | Spread, tempo até a execução, ordens expiradas, rodadas do Câmbio sem negócio | Diária | Spread acima de 10% nos 20 itens mais negociados; 3 rodadas vazias seguidas | Sim, agregado |
| **Concentração** | Fatia do 1% e do 10% mais ricos e Gini entre contas ativas com pelo menos 20 h de jogo ativo. Riqueza = ouro + itens a preço de mercado + Coins a preço do Câmbio | Semanal | Fatia do 1% subindo por 3 meses; 10% mais ricos com mais de 60% | Sim, mensal |
| **Riqueza por coorte** | Mediana por idade da conta e por horas ativas | Semanal | Conta com menos de 7 dias acima do percentil 99 | Interno |
| **Itens raros** | Criados, destruídos e vivos, por item | Diária, alarme horário | Criação acima de 3 vezes a média | Interno |
| **Destruição** | VR destruído por dia, por categoria | Diária | — | Sim |
| **Premium via ouro** | Parcela dos Coins gastos em premium que foram comprados com ouro (Câmbio ou Troca) | Mensal | Fora de 30% a 65% | Sim |
| **Coins como moeda paralela** | Parcela das Trocas de itens pagas em Coins, em valor | Mensal | Acima de 10% | Interno; tendência no relatório |
| **Bazar de Personagens** | Vendas, preço médio, Coins destruídos | Semanal | — | Sim |
| **Baú** | Aberturas, contas no teto, tiragem restante | Diária | Mais de 2% das contas pagantes no teto | Sim (tiragem ao vivo) |
| **Risco de troca** | Contas nos níveis 2 e 3, retenções, apelações, reversões | Diária | — | Relatório trimestral |
| **Disputas de pagamento** | Chargebacks e MED ÷ doações; contas suspensas e regularizadas; Coins contestados que já tinham sido transferidos | Diária | Acima de 0,5% | Interno; agregado no relatório |
| **Mercado cinza** | Preço do nosso ouro em reais em sites de terceiros ÷ preço via Coin | Semanal | Abaixo de 60% do oficial | Interno; tendência no relatório |
| **Lucro da conta-fazenda** (meta; revisão de consistência: R20) | Lucro em reais de uma conta verificada que farma e vende o que pode, com a rampa de conta nova, as taxas e o ouro vendido no mercado cinza | Mensal | Acima de ~R$ 15 por mês | Interno; tendência no relatório |
| **Salário-teto** | Teto do topo × reais por ouro | Mensal | Indicador, sem meta (seção 3.6; revisão de consistência: R20) | Interno |
| **Poder vindo do mercado** | Fração do equipamento em uso que foi comprada | Mensal | Acima de 50% | Interno |
| **Pagante e não pagante** | Diferença de progresso mediano | Mensal | — | Sim ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 12) |
| **Conciliação do livro-razão** | Soma dos saldos contra os lançamentos, por moeda e por item, incluindo a cota | Contínua | Qualquer divergência | Interno |

### 12.3 Disjuntores, relatório e dados abertos

- **Disjuntores** por item (congela a criação e a negociação de um item), por balcão, por moeda (congela as transferências de uma moeda) e por fluxo (suspende as transferências de Coins quando as disputas passam do limiar). Todos são testados no alfa. [F] Desligar o comércio inteiro abriu outro dupe no New World ([04b, §3.11](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Relatório econômico mensal** público, no molde do MER do EVE: IPC, luxo, Coins, massa, velocidade, fontes e drenos por categoria, destruição, concentração, Bazar de Personagens, Baú, banimentos e o porquê de cada mudança. Com dados agregados para baixar.
- **Dados abertos:** atraso de 1 hora e agregação; nenhum dado por conta. Fluxos por conta, sinais de detecção e os limiares internos ficam só com a equipe ([04a, §6.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

## 13. Parâmetros para a simulação (módulo 08)

| # | Parâmetro | Valor inicial | Faixa a testar | Seção |
|---|---|---|---|---|
| **População** | | | | |
| 1 | Ativos por dia por Cidade | 30.000 | 15.000 a 50.000 | 1.1 |
| 2 | Mix de perfis | Casual 50%, mediano 35%, hardcore 10%, bot 5% | Bot de 0% a 20% | 4.6 |
| 3 | Pagantes (sobrepostos aos perfis) | 8% dos ativos; ~R$ 40 doados por mês (~40 Coins); 50% vendidos | 4% a 15%; R$ 15 a R$ 100; 20% a 80% | 4.6 |
| 4 | Entrada de contas novas por dia | **~1.500 contas verificadas por dia** (~5% dos ativos), com a curva de retenção do 12; 4.000 por dia nos 14 dias de estreia. O "1,5% dos ativos por dia" sustentaria só ~9 mil ativos (revisão de consistência: R26) | 0 (90 dias sem novos) a +50% | — |
| 5 | Evasão mensal | 25% | 10% a 50% | — |
| **Teto de emissão** | | | | |
| 6 | Base do teto | 600 | 300 a 1.000 | 3.4 |
| 7 | Teto por nível (`n`) | 30 | 15 a 50 | 3.4 |
| 8 | Teto por grau de Selo (`m`, soma dos graus nos dois ofícios mestres, 0 a 10; revisão de consistência: D9) | 50 | 0 a 100 | 3.4 |
| 9 | Acúmulo da cota | 3 dias | 1 a 5 | 3.4 |
| 10 | Rampa de conta nova | 25%, 50%, 75%, 100% (dias 7, 14 e 30) | Sem rampa a 60 dias | 3.4 |
| **Fontes de ouro** | | | | |
| 11 | Preço-base de NPC | 40% do VR-alvo | 25% a 60% | 4.2 |
| 12 | Meia-vida da curva de NPC (`H`) | 300 | 150 a 600 | 4.2 |
| 13 | Ouro de encomendas (mediano, por dia) | 300; **só a partir do 14º dia da conta** (revisão de consistência: R23) | 100 a 600 | 4.1 |
| 14 | Ouro de cercos (por dia equivalente) | 100 | 50 a 200 | 4.1 |
| 15 | Ouro do começo | 2.000 | 500 a 5.000 | 4.1 |
| **Drenos** | | | | |
| 16 | Insumo de NPC, em % do VR do produto | 12% | 5% a 25% | 4.3 |
| 17 | Indexação do insumo ao IPC | **Até ±10% por mês na 1ª Era; ±2% por mês depois** (revisão de consistência: R21) | Sem indexação a ±10% | 4.3 |
| 18 | Custo de partida (mediano, por dia) | 90 | 30 a 200 | 4.3 |
| 19 | Vida útil de uma peça | 20 dias de uso | 7 a 40 | 4.5; **módulo 05** |
| 20 | Reparos até a quebra | 4 | 2 a 8 | **Módulo 05** |
| 21 | Propensão a luxo (`s`) | 1% do estoque por dia | 0,2% a 2% | 4.6 |
| 22 | Custo do Selo de mestre | 30.000 ouro + materiais (~20.000 de VR); o Selo mantém o tier de produção (revisão de consistência: R22) | 10.000 a 100.000 | 4.3; **módulo 02** |
| 23 | Mérito: meia-vida e peso do ouro | `H = 2.000`; 50% | 1.000 a 5.000; 25% a 100% | 3.5 |
| **Taxas** | | | | |
| 24 | Bolsa: anúncio e venda | 1% + 5% | 0,5% a 2%; 3% a 8% | 5.1 |
| 25 | Feira | 6% | 4% a 8% (faixa do Conselho) | 5.2 |
| 26 | Leilão | 7% + abertura | 5% a 10% | 5.3 |
| 27 | Troca, por lado | 3% | 1% a 5% | 5.5 |
| 28 | Câmbio | 12% | 8% a 18% | 5.4 |
| 29 | Coins e Baú lacrado na Troca | 12% (adotado na bíblia; revisão de consistência: R19) | 3% contra 12% (cenário 9) | 5.6 |
| 30 | Bazar de Personagens | 10% em Coins | 6% a 15% | 7.2 |
| **Microestrutura** | | | | |
| 31 | Degrau de preço | 3 algarismos | 2 a 4 | 5.1 |
| 32 | Espera para modificar | 10 min (Bolsa), 30 min (Feira) | 5 a 60 min | 5.1 |
| 33 | Banda suave | ±15%, caminhada de 2% por hora | ±10% a ±25%; 1% a 5% | 5.1 |
| 34 | Preço de mercado: janela e limite de variação | 24 h; ±5% por hora | 12 a 72 h; ±2% a ±10% | 5.1 |
| 34a | Ouro por minuto de VR (novo; revisão de consistência: R24) | 2,0 ouro por minuto de ofício, fixo desde o lançamento; base do VR, do preço-base de NPC e do valor dos drops | — | 1.2 |
| 35 | Vagas de ordem | 8 a 20 | 5 a 30 | 5.1 |
| 36 | Limite de compra de itens críticos | 3 dias de consumo a cada 4 h | 1 a 7 dias | 5.1 |
| **Câmbio e Coins** | | | | |
| 37 | Coins por real doado | 1 (1 Coin = R$ 1,00; revisão de consistência: R17) | Pacotes com bônus de 0% a 15% | 6.1; **módulo 11** |
| 38 | Premium de 30 dias, em Coins | 20 (revisão de consistência: R17) | 15 a 25 | 6.1; **módulo 11** |
| 39 | Mecanismo do Câmbio | Leilão de chamada a cada hora | Contínuo; fila administrada; rodadas de 15 min a 4 h | 5.4 |
| 40 | Banda | ±3% por rodada; ±10% por dia | ±1% a ±5%; ±5% a ±20% | 5.4 |
| 41 | Tamanho de ordem e limite de compra | 1 a 200 Coins por ordem; 200 por conta a cada 7 dias (revisão de consistência: R17) | 50 a 1.000 por semana | 5.4 |
| 42 | Preço de abertura do Coin | 750 ouro (premium de 30 dias ≈ 15.000; revisão de consistência: R17) | 400 a 1.500 | 1.2 |
| 43 | Carência por lote | Pix 72 h; cartão 7 dias; risco até 30 dias | 0 a 14 dias | 6.3 |
| 44 | Teto de doação | R$ 250 por mês; níveis de R$ 600 e R$ 1.200 por pedido (revisão de consistência: D8) | R$ 150 a R$ 1.200 | 6.5; **módulo 11** |
| 45 | Contestação no banco | 0,3% das doações contestadas; 50% das contas suspensas regularizam em 30 dias; 60% dos Coins contestados já transferidos | 0% a 1,5%; 0% a 100%; 0% a 100% | 6.4 |
| 46 | Coins guardados | 20% dos doados ficam parados mais de 30 dias | 0% a 60% | 6.2 |
| **Bazar de Personagens e Baú** | | | | |
| 47 | Vendas no Bazar de Personagens | 1% das contas ativas por mês | 0,3% a 3% | 7 |
| 48 | Condições para vender | 30 dias + 40 h ativas | 7 a 90 dias; 10 a 100 h | 7.4 |
| 49 | Lance inicial mínimo no Bazar de Personagens | 30 Coins (revisão de consistência: R17) | 10 a 100 | 7.1 |
| 50 | Preço do Baú | 5 Coins (revisão de consistência: R17) | 2 a 8 | 8.1; **módulo 11** |
| 51 | Garantia do Baú | Raro a cada 10; Muito raro a cada 60 | 5 a 20; 30 a 120 | 8.3 |
| 52 | Teto de abertura | 40 por mês | 10 a 100 | 8.4 |
| 53 | Cosméticos aplicados por mês (saem do mercado) | 40% dos novos | 10% a 80% | 8.2 |

**Critérios de saúde (a simulação passa se, depois do 6º mês, em todos os cenários):**
- IPC entre 0% e 8% ao ano;
- drenos entre 85% e 95% das fontes;
- 10% a 30% das contas no teto;
- premium de 30 dias entre 12 e 20 dias de renda mediana;
- massa por conta ativa entre 2 e 3 premiums de 30 dias, em ouro;
- 10% mais ricos com menos de 60% da riqueza;
- premium via ouro entre 30% e 65%;
- Trocas de itens pagas em Coins abaixo de 10% do valor;
- básicos acima de 1,3 vez o piso de NPC;
- lucro de uma conta-fazenda até ~R$ 15 por mês (substitui o salário-teto do topo abaixo de R$ 100; revisão de consistência: R20).

**Cenários de estresse:**
1. Crescimento normal.
2. 90 dias sem jogador novo ([G03](../01-pesquisa/fichas/G03-axie-infinity-e-web3.md)).
3. Evasão de 50%.
4. Bots em 20% das contas, com identidades de terceiros.
5. Onda de pagantes, como o MWI depois do Steam ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
6. Dupe de 20% da massa em 24 horas (teste do disjuntor).
7. Conselho leva a Feira a 4% e depois a 8%.
8. A Fronteira puxa 40% da atividade.
9. Coins na Troca a 3% (mede a fuga do Câmbio; a simulação confirmou os 12%, R19).
10. Sem o crédito dos insumos no portão (mede o peso da regra sobre os artesãos).
11. Onda de contestações: 1,5% das doações contestadas por 30 dias. Mede os Coins sem lastro em circulação, a massa congelada nas contas suspensas e o efeito no preço do Coin.
12. Despejo do estoque guardado: 50% dos Coins parados vendidos no Câmbio em 7 dias.

## 14. A reconciliar com outros módulos

| Módulo | O que depende dele |
|---|---|
| **02 Progressão** | `n` por perfil (maior nível já alcançado) e `m` (soma dos graus de Selo), reconciliados (revisão de consistência: D9); custo do Selo de mestre (30 mil ouro, R22); vagas de ordem por progressão; custo da troca de ofício mestre |
| **03 Personagem** | Conta vaga no Bazar de Personagens; custos de ajudantes |
| **04 Combate** | Combate idle sem ouro; consumíveis por luta; orçamento de prêmios de cercos e chefes |
| **05 Itens** | VR-alvo de lançamento por item e tier; vida útil, reparos e quebra; qualidade nos livros da Bolsa; cosméticos de jogador frente ao Baú |
| **06 Ofícios** | Receitas com insumo de NPC e seus nomes; lista de itens críticos; produção por hora de fila; oficina de reforço |
| **09 Social** | Mérito (curva e uso); poderes e faixas do Conselho; banco da guilda; encomendas e obras |
| **10 Live ops** | Marcos e suprimentos da Fronteira; relíquias; festas da Cidade; série do Baú por Era; benefícios das obras sem multiplicar fontes |
| **11 Monetização** | Coins por real e pacotes de doação; preço do premium e do Baú em Coins; conteúdo do premium; teto de doação |
| **13 Anti-abuso** | Sinais e níveis do risco de troca; grafo; carência por lote; contestação (suspensão até regularizar, no lugar da dívida em ouro) e revisão de fraude organizada; sanções de exploit; segurança do Bazar de Personagens |
| **14 Arte e UI** | Telas da cota e da volta; Bolsa com posição na fila; rodada do Câmbio; Troca com desequilíbrio; pré-vitrine da Feira |

## 15. Propostas de mudança na bíblia

1. **Coins na Troca paga 12% do preço do Câmbio,** e não 3%, para não contornar o Câmbio (seção 5.6). **Adotada** (revisão de consistência: R19).
2. **Baú lacrado paga 12%** em qualquer venda ou Troca, pela mesma razão (seções 5.6 e 8.1). **Adotada** (revisão de consistência: R19).
3. **Esclarecer a taxa da Troca:** 3% do valor de mercado do que cada lado recebe, pago por quem recebe. Uma troca equilibrada custa ~6%, como os balcões; um presente, 3% (seção 5.5).
4. **Ouro com duas casas decimais** (seção 1.2).
5. **Glossário:** incluir "valor de referência (VR)" e "cota" (o saldo disponível do teto de emissão) (seções 1.2 e 3). **Adotada** no anexo do glossário, com o VR fixo (revisão de consistência: R14 e R18).
6. **As criaturas não carregam moeda:** o combate idle não emite ouro (seção 2.2).
7. **Pequenas taxas de anúncio:** sinal de 0,5% na Feira (abatido da taxa de venda), abertura no Leilão (50 ouro + 0,5%) e anúncio no Bazar de Personagens (2.000 ouro) (seções 5.2, 5.3 e 7.2).
8. **Mérito em duas contas** (vitalício e da Era), que fica com a conta, e não com o personagem, no Bazar de Personagens (seções 2.2 e 7.3). **Adotada** como decisão vigente (revisão de consistência: R13).
9. **Câmbio por leilão de chamada a cada hora** (seção 5.4).
10. **Esclarecer a taxa de anúncio da Bolsa:** o 1% vale para a ordem que fica no livro; a ordem que executa na hora paga só a parte dela (5% se vende, nada se compra). Assim o custo de um negócio é ~6% para qualquer combinação de lados (seção 5.1).

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Teto visto como castigo** | O produtor pesado vê a cota acabar e sente que perde produção, a queixa nº 1 dos idles online | Portão de saída (nada nasce preso); acúmulo de 3 dias; crédito dos insumos; excedente que vira obra e Mérito na tela de volta; meta de 10% a 30% no teto |
| **Teto frouxo demais** | Contas verificadas de terceiros ("laranjas") farmam até o teto e vendem ouro por Pix | Lucro da conta-fazenda até ~R$ 15 por mês, medido (R20); rampa de 30 dias; ouro de encomenda só a partir do 14º dia (R23); ~90 dias até o nível 100; grafo de funil; cenário 4 da simulação |
| **Bug no portão vira dupe** | Um erro no crédito dos insumos ou na reserva de cota emite valor negociável sem limite | Cota no livro-razão com conciliação contínua; testes de propriedade na Fase 5; disjuntor por item |
| **Deflação dos básicos** | A produção de 24 horas cresce com as contas, e minério e madeira caem até o piso do NPC | Obras sem limite; encomendas elásticas; festas de consumo; alarme de 1,3 vez o piso |
| **Espiral dos insumos indexados** | O IPC sobe, o insumo sobe, o custo de produzir sobe e o IPC sobe de novo | Insumo fora da cesta do IPC; indexação parcial, com teto de ±2% por mês depois da 1ª Era; o insumo mais caro também destrói mais ouro (efeito contrário). Na 1ª Era, o risco é o inverso: indexação lenta demais trava a criação, e por isso ela vai até ±10% ao mês (R21) |
| **Câmbio raso** | Poucos vendedores no começo, rodadas vazias e preço parado ou aos saltos | Leilão de chamada; banda por rodada; rodadas mais espaçadas se preciso; preço de abertura sem garantia, só como referência |
| **Coins dispara em ouro** | Inflação de lançamento, como no GW2, ou o gasto na loja e o Bazar de Personagens destruindo Coins tiram a rota do não pagante | Lançar apertado; leitura junto da cesta; meta de 12 a 20 dias de renda para o premium; destruição medida em separado |
| **O Coin despenca** | Onda de pagantes, teto de doação alto demais ou um estoque guardado despejado de uma vez, e o pagante não vê valor em vender. No base da simulação, o Coin cai devagar o ano inteiro (o premium vai de 27 para 13 dias de renda) | Teto de doação; nenhum Coin grátis; novos usos de Coins na loja no 2º ano, sempre conforto e cosmético ([11](11-monetizacao.md); R27); estoque parado no painel; banda do Câmbio; cenário 12 |
| **O Coin vira moeda paralela** | Divisível e livre, ele passa a cotar os itens caros entre jogadores, fora do ouro (o pergaminho do IdleMMO) | Balcões só em ouro; 12% em toda troca de Coins; índice em ouro; alarme acima de 10% das Trocas de itens pagas em Coins |
| **Fraude com cartão roubado sai de graça** | A suspensão não pesa para quem abandona a conta, e os Coins que ela já transferiu ficam sem lastro | Carência por lote; teto de doação; disjuntor por taxa de disputas; revisão das contas receptoras em padrão de fraude (módulo 13); cenário 11 |
| **Suspensão contestada** | A FTC condenou a Epic por bloquear contas inteiras depois de contestações; o jogador honesto que contestou por engano perde o acesso a tudo | Suspensão reversível ao regularizar, com tudo devolvido; nada tirado de terceiros de boa-fé; aviso claro antes da doação; **validar com advogado** (CDC, art. 51) |
| **"Doação" sem reembolso questionada** | O rótulo não afasta o direito de arrependimento (CDC, art. 49), pode atrair ITCMD e conflitar com as regras dos provedores de pagamento | Alerta registrado no PROGRESSO; risco assumido pelo Gabriel; **validar com advogado** |
| **Pay-to-win de capital** | O pagante vende Coins e compra o mercado inteiro de ouro | Teto de doação; limite de compra por janela; o mercado negocia insumos e equipamento que se gasta; diferença pagante × não pagante publicada |
| **Arbitragem entre canais** | Se a taxa de 12% sobre Coins e Baú lacrado na Troca for afrouxada, o Coin passa a ser trocado por ouro na Troca a 6%, e o índice e o dreno do Câmbio somem | 12% em todo canal, adotado (R19); cenário 9 da simulação; publicar o índice também com as trocas de Coins na Troca |
| **Troca livre como lavanderia** | Mulas, cartão roubado, conta invadida esvaziada por presentes | Carência S2 por lote; risco de troca com retenção nos padrões de fraude; grafo; suspensão da conta que contesta, até regularizar |
| **Bazar de Personagens vira fábrica ou rota de roubo** | Personagens upados por automação; conta invadida vendida | 40 horas ativas; uma venda a cada 60 dias; aviso de 72 horas; Coins do vendedor retidos 7 dias; reversão em 30 dias |
| **Baú lido como jogo de azar** | Pagamento + sorte + prêmio com valor em dinheiro; gateway ou loja recusa; ação judicial | Conteúdo sem poder; chances e tiragem publicadas; tetos; interruptor por país que prende o conteúdo; **validar com advogado** (LCP, art. 50; Lei 15.211/2025, art. 20); risco assumido pelo Gabriel |
| **Baú como canal de lavagem** | Cartão roubado → Coins → Baús → ouro | Baú herda a carência do lote; taxa de 12%; teto de compra |
| **Golpes no RMT informal** | O estúdio não intermedia, e o jogador lesado chega ao suporte sem solução | Termos claros (S4); avisos na Troca; o Câmbio e o Bazar de Personagens como rotas seguras e baratas |
| **Conselho capturado** | Uma guilda rica elege conselheiros e leva a Feira ao extremo da faixa | Faixa estreita, 1 ponto por mandato, 30 dias de aviso; política monetária fora do voto |
| **Concentração por idade de conta** | A renda acompanha o tempo de calendário, e quem chegou primeiro domina | Teto linear; drenos progressivos e de topo; Mérito da Era; Fronteira como recomeço; concentração por coorte no painel |
| **Medir errado** | Gini dominado por contas abandonadas; erro no painel, como os 9% do MER | Corte por 20 horas ativas; itens a preço de mercado; conciliação contínua; metodologia publicada |
| **Constituição rígida demais** | Uma calibragem ruim no lançamento não cabe nas regras | Banda revista no 90º dia; artigo 11 de emergência; histórico de versões |
| **Conflito de interesse** | O estúdio aperta drenos ou o Baú para vender mais Coins | Taxas sempre destruídas; contrato público; diferença pagante × não pagante publicada; a constituição vale também para a monetização |

