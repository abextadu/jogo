# GDD 07 — Economia

> **Escopo.** As quatro moedas, o teto de emissão negociável, a tabela de fontes e drenos de ouro e de itens, os cinco canais de troca (Bolsa, Feira, Pregão, Câmbio e Troca), o Alvará, o Cartório, o Baú do Mascate, as alavancas contra inflação e manipulação, a constituição econômica do Arraial, o painel diário e a lista de parâmetros para a simulação (módulo 08).
> **Base:** [bíblia](00-biblia.md) (glossário, seção 6.6 e regras da seção 8), [conceito](../02-conceito.md) (piso P1–P12), [PROGRESSO](../PROGRESSO.md) (decisões do Gabriel), [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), [05d](../01-pesquisa/05d-rmt-recomendacao.md), [00-sintese](../01-pesquisa/00-sintese.md) e as leis 15 a 22 do [02](../01-pesquisa/02-padroes-matriz-leis.md).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação.** Onde ele depende de outro módulo escrito em paralelo, aparece "a reconciliar com o módulo X".
> **Decisões que este módulo não reabre:** Alvará em coins (moeda divisível) creditados por doação em reais, sem reembolso; conta suspensa até regularizar quando a doação é contestada no banco (chargeback, MED); Alvará e ouro transferíveis livremente; RMT informal não intermediado nem proibido; Cartório desde o lançamento; Baú comprável com Alvará e negociável por ouro, com conteúdo em itens; jogo 18+ com idade verificada; sem parecer jurídico (risco assumido pelo Gabriel). Onde uma dessas decisões cria tensão com a pesquisa, o módulo registra a tensão e desenha a mitigação, sem mudar a decisão.

## 0. Resumo

1. **O ouro só nasce em quatro lugares, todos com orçamento:** venda a NPC (curva logarítmica por conta e por dia), encomendas, cercos e eventos com inscrição, e o começo do jogo. O combate idle solta itens, nunca moedas. Quem controla essas quatro torneiras controla a emissão (seção 4).
2. **O teto de emissão é um portão de saída, não uma marca no item.** O jogador produz à vontade e usa tudo o que produz. O teto limita só o valor que ele mesmo criou e que sai da conta por dia (venda, Troca ou NPC). Ele cresce de forma linear com a progressão, acumula por até 3 dias e começa reduzido nas contas novas. O excedente fica na conta para uso próprio ou vira obra e Mérito (seção 3).
3. **O dreno principal é o consumo embutido:** insumos vendidos por NPC em toda receita de T2 para cima e na partida das expedições, indexados ao IPA, mais desgaste e quebra. As taxas são freio, não âncora (seções 4 e 9).
4. **Toda forma de mover valor custa o mesmo:** cerca de 6% para trocar item por ouro em qualquer canal, 12% para converter Alvará em ouro em qualquer canal e 3% para presentear. Sem isso, o comércio foge para o canal mais barato e o índice perde o sentido (seção 5.6).
5. **O Câmbio forma o preço do Alvará, em unidades, num leilão de chamada a cada hora:** um preço único por Alvará em cada rodada, com banda de ±3% por rodada e ±10% por dia. Com 2 a 5 mil simultâneos, o Câmbio terá poucas operações por hora. Um livro contínuo seria raso e premiaria velocidade, e uma fila administrada poria o estúdio como culpado de cada alta. O leilão de chamada junta a liquidez, tira a vantagem do clique e gera o índice (seção 5.4).
6. **Cartório:** vende o personagem, não o cidadão. Vão junto o progresso, os ajudantes, a casa, os cosméticos aplicados e o equipamento em uso, que fica preso ao comprador por 30 dias. Ficam com o vendedor o Mérito, o ouro, o Alvará e o armazém. A taxa de 10% é paga em Alvará e destruída. O anúncio só abre depois de um aviso de 72 h ao dono da conta (seção 7).
7. **Baú do Mascate:** custa ~40 Alvarás (~R$ 4), publica a tabela de chances com garantia, tem tiragem máxima para o topo e teto de compra e de abertura por mês. Seu conteúdo é negociável até ser aplicado, e aplicar prende o item à conta, o que funciona como dreno de cosméticos (seção 8).
8. **Constituição pública de 14 artigos:** a meta do IPA vai de 0% a +8% ao ano. A Câmara mexe só na Feira, nas prioridades das encomendas e na escolha da obra. Política monetária não vai a voto (seção 11).
9. **Alvará em coins:** a doação credita Alvarás (referência de trabalho: ~R$ 0,10 cada; premium de 30 dias por ~200). O gasto na loja destrói o Alvará, que é o dreno dele. A carência vale por lote de doação, e a doação contestada no banco suspende a conta até ela regularizar. Quem recebeu de boa-fé fica com o que recebeu (seção 6).

## 1. Premissas e escala

### 1.1 População de referência

| Premissa | Valor [H] | Por quê |
|---|---|---|
| Simultâneos por Arraial | 2 a 5 mil (bíblia 6.7) | Alvo do plano de negócio ([08](../01-pesquisa/08-mercado-posicionamento.md)) |
| Jogadores ativos por dia (DAU) | 20 a 40 mil (5 a 10 vezes o pico de simultâneos) | Sessões curtas de 5 a 15 min, 2 a 6 vezes por dia (bíblia 6.1), dão muita gente diferente por dia para cada vaga simultânea. **A calibrar no alfa.** |
| Contas que pagam algo no mês | 6% a 10% do DAU | Faixa de trabalho; módulo 11 |
| Perfis da simulação | casual, mediano, hardcore, pagante, bot (bíblia, módulo 08) | Definidos na seção 4.6 |

### 1.2 Escala do ouro

- **O ouro tem duas casas decimais** (centésimos), no livro-razão e na tela. Os bens básicos valem de frações de ouro a dezenas de ouro, e uma escala inteira deixaria o degrau de preço grosseiro demais nos itens baratos (seção 5.1). O brasileiro já pensa em reais e centavos. **[proposta de mudança na bíblia]**, que não fixa a unidade.
- **Inteiros de 64 bits em centésimos** em todo saldo e toda ordem. O OSRS precisou liberar ofertas acima de 2,147 bilhões em 2026 ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md), via [04a, §5.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Âncora relativa, não absoluta.** O número que importa é quanto o premium custa em dias de renda, não em ouro. Meta [H]: **o premium de 30 dias vale de 12 a 20 dias das fontes brutas de ouro de um jogador mediano** (seção 4.6). Com a renda mediana de ~970 ouro por dia, isso dá ~15.000 ouro pelo premium de 30 dias (faixa a testar: 8.000 a 30.000). Com o premium a ~200 Alvarás (seção 6.1), o preço inicial esperado é de **~75 ouro por Alvará** (faixa: 40 a 150).
- **Valor de referência (VR):** o preço de mercado estimado de cada item, recalculado de hora em hora (seção 5.1). Taxas, teto de emissão, Troca e painel usam o VR, nunca o valor de NPC. É a correção do erro que o IdleMMO admitiu: um único número (o valor de NPC) controlava a emissão, a base do imposto e o piso de preço ([C04](../01-pesquisa/fichas/C04-idlemmo.md), via [04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). **[proposta de mudança na bíblia]:** incluir "valor de referência (VR)" no glossário.

### 1.3 Três camadas de valor

| Camada | O que contém | Regra | Referência |
|---|---|---|---|
| **Progresso preso** | Níveis, maestria, Selos, ajudantes, filas, offline, Mérito, Marcos | Pode crescer sem limite; nunca vira negociável por compra | P1; lei 16; [04a, decisão 1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md) |
| **Bens negociáveis** | Ouro, materiais, consumíveis, equipamento, cosméticos de jogador e do Baú | Unidades que cabem na cabeça; emissão com teto por conta; tudo se gasta | P2, P3 |
| **Alvará** | O token, em coins | Nasce só de doação em reais; gasto na loja, é destruído; nunca dá renda, XP ou poder | Bíblia, glossário e seção 5 |

## 2. Moedas

### 2.1 Quadro

| Moeda | O que faz | Como entra | Como sai | Negociável? |
|---|---|---|---|---|
| **Ouro** | Moeda de todos os balcões e das taxas; paga insumos de NPC, serviços, obras e luxos | Venda a NPC, encomendas, cercos e eventos com inscrição, missões do começo (seção 4.1) | Insumos de NPC, custo de partida, taxas, obras, luxos, Selo, ajudantes (seção 4.3) | **Sim, livremente:** balcões e Troca, sempre com taxa destruída |
| **Alvará** | Moeda divisível (coins), gasta na loja em premium (conveniência por tempo), cosméticos, Baú do Mascate e outros itens de conforto e cosmético; paga lances no Cartório | Só por doação em reais na loja web (Pix e cartão), sem reembolso. Nunca de graça, nunca como prêmio | Destruído quando é gasto na loja ou na taxa do Cartório | **Sim, livremente,** depois da carência por lote (seção 6.3). Troca por ouro só no Câmbio ou na Troca |
| **Marcos** | Moeda da Travessia: suprimentos temporários, melhorias de posto, cosméticos e títulos da temporada | Atividades da Travessia (expedições na Bruma, descobertas, chefes de região) | Gastos na Travessia; no fim da temporada, a sobra vira uma recompensa cosmética fixa por faixa, nunca ouro | **Não.** Presos à conta e à temporada; zeram ao fim |
| **Mérito** | Títulos de cidadania e prioridade nas recompensas da cidade; não pesa no voto | Contribuição para obras, nota em encomendas, defesa nos cercos | Não se gasta. O **Mérito vitalício** só cresce (títulos). O **Mérito da Era** zera a cada Era (prioridade) | **Não.** Preso à conta, e fica com a conta no Cartório (seção 7.3) |

**Gastar na loja destrói o Alvará.** Como o Alvará agora é moeda divisível, não há mais saldo de cosméticos separado: a loja cobra direto em Alvarás, e cada Alvará gasto sai da economia. A loja é a fonte de demanda que sustenta o preço do Alvará em ouro, e por isso o que ela vende (premium, cosméticos, Baú) precisa ter demanda real (seção 6.2).

### 2.2 Decisões sobre as moedas

**Ouro sem moeda caindo de monstro.** O combate idle (expedições e masmorras assíncronas) solta peles, carnes, componentes e raros, mas não ouro.
- *Referência:* a mesa de missões do WoW e a produção passiva do Banana viraram torneira de valor negociável ([F06](../01-pesquisa/fichas/F06-world-of-warcraft.md); [G05](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). No IdleMMO, a torneira está no volume dos comuns ([04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- *Problema que resolve:* tira a fonte de ouro mais difícil de orçar, a que roda 24 horas para todos.
- *Comportamento:* o ouro vem de vender o que se produz e de participar da cidade, e isso empurra o jogador para o mercado e para as encomendas.
- *Risco:* a renda de quem só combate depende de vender peles e drops. Mitigação: o Curtume precisa das peles (bíblia 6.3) e as encomendas pedem produtos de combate. **[proposta de mudança na bíblia]:** registrar que os assombrados não carregam moeda. A ficção ajuda, porque são encantados corrompidos, não bandidos.

**Mérito em duas contas.** O vitalício dá títulos; o da Era dá prioridade e zera.
- *Referência:* moedas de prestígio do GW2, elogiadas por Shokrizade ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); recomeço como válvula contra a concentração ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- *Problema:* sem zerar, quem chegou primeiro fica com a prioridade para sempre.
- *Comportamento:* contribuir a cada Era, não só uma vez.
- *Risco:* o veterano se sente rebaixado a cada Era. Mitigação: o vitalício e os títulos ficam. **A reconciliar com o módulo 09** (uso do Mérito na prioridade e nos títulos).

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
  - **De origem:** produzido pela própria conta (coleta, produção, combate idle) e ainda não saiu dela.
  - **Circulante:** já passou por um portão, ou chegou de fora (compra, Troca recebida, prêmio de evento com inscrição, conteúdo de Baú).
  - O jogador só vê a diferença na tela de venda ("este lote usa X da sua cota").
- **Consome cota:** a saída de valor de origem.
  - Venda de lote de origem na Bolsa, na Feira ou no Pregão.
  - Troca em que o jogador dá item de origem.
  - Depósito de item de origem no banco da guilda, porque dali ele sai para outros.
  - Toda venda a NPC, de qualquer item, porque cria ouro novo.
- **Não consome cota:** uso próprio, consumo, reparo, entrega em encomenda, doação à obra, revenda de circulante, ouro e Alvará.
- **Crédito dos insumos comprados.** Quando a receita usa insumos circulantes, o produto carrega um **crédito** igual ao VR desses insumos no momento da produção. Na saída, a cota consumida é `max(0; VR do produto − crédito)`. Você só gasta cota com o valor que você mesmo criou, e o artesão que compra insumos e agrega valor não é punido duas vezes.
- **Reserva na hora de anunciar.** Um anúncio ou uma ordem de venda de lote de origem reserva cota no momento da criação: `quantidade × max(VR; preço pedido)`. Cancelou, a reserva volta. Isso impede ordens que aparecem no livro mas não podem ser executadas, uma forma de spoofing ([04b, §2.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). No Pregão, onde o preço final é incerto, reserva-se pelo lance inicial. Se o arremate passar da cota, a diferença vira cota negativa, descontada dos dias seguintes.
- **Prêmios de evento com inscrição** (cerco, chefe de Era, encomenda, relíquias da Travessia) nascem circulantes, porque já têm orçamento próprio por evento (seção 4.1).

**Exemplo calculado.** A Ana (Ferraria 50, teto 2.100) compra 100 lingotes de ferro na Bolsa a VR 12 (circulantes, 1.200 de crédito) e usa o próprio carvão (de origem, VR 300). Ela forja 5 espadas Boas de VR 600 cada (3.000 no total). Vendendo as 5, consome `3.000 − 1.200 = 1.800` de cota e ainda pode vender 300 de VR em outros lotes de origem no dia.

### 3.4 Quanto vale o teto

**Fórmula [H]:** `teto(n, m) = 600 + 30 × n + 50 × m` (em VR por dia), em que `n` é o maior nível entre os dois ofícios mestres e a vocação (1 a 100), e `m` é o número de camadas de maestria (0 a 10). **A reconciliar com o módulo 02** (número de camadas).

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
- **Igual para todos e nunca à venda.** A conveniência do Alvará não aumenta o teto, a cota nem o acúmulo (P7).
- **Meta de calibração:** o teto deve ficar entre 1,5 e 2 vezes a **necessidade de venda típica** de cada estágio, isto é, o que um jogador honesto precisa vender para comprar os insumos dos ofícios que não domina. Indicador: **10% a 30% das contas ativas batem no teto num dia típico.** Se mais de 40% baterem, o teto aperta o comércio honesto. Se menos de 5% baterem, ele não segura nada.

### 3.5 O que acontece com o excedente

A produção acima do teto não se perde. Ela fica na conta, de origem, e tem quatro destinos:
1. **Uso próprio** nos dois ofícios mestres e nos ofícios de aprendiz: consumo, reparo, insumos.
2. **Encomendas:** a entrega não consome cota.
3. **Obra:** a doação vira **Mérito**. A regra de fila "quando o estoque de origem de X passar de N, doar o excedente à obra corrente" deixa isso automático. A tela de volta mostra "seu excedente ergueu 3 m da muralha: +76 Mérito".
4. **Sair depois**, nos dias em que sobrar cota.

**Conversão em Mérito [H]:** `Mérito do dia = (1/20) × (H ÷ ln 2) × ln(1 + C × ln 2 ÷ H)`, com `H = 2.000` e `C` = contribuição ponderada do dia em VR. Materiais contam 100% e ouro conta 50%, para premiar quem produz mais do que quem só paga. Exemplo: `C = 2.000` dá `0,05 × 2.885 × ln(1,693) ≈ 76` Mérito; `C = 8.000` dá `≈ 192`, ou seja, quatro vezes a contribuição rende só 2,5 vezes o Mérito. A curva logarítmica impede que o rico compre prioridade na cidade. **A reconciliar com o módulo 09.**

### 3.6 O salário-teto do farmer

[H] Com o Alvará a ~R$ 0,10 e a ~75 ouro (o premium de 30 dias a ~R$ 20 e ~15.000 ouro), 1 ouro vale ~R$ 0,0013. Uma conta mediana que vendesse todo o teto renderia ~R$ 2,80 por dia (~R$ 84 por mês) a preço oficial. Uma conta no topo renderia ~R$ 163 por mês brutos e ~R$ 105 líquidos de insumos e desgaste (~35% de custo). No RMT informal, o ouro costuma sair abaixo do oficial: no OSRS, a 45% do Bond ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)). Isso deixa o salário de uma conta no topo entre R$ 50 e R$ 75 por mês.
- **Restrição de desenho [H]:** o salário-teto líquido de uma conta no topo fica **abaixo de ~R$ 100 por mês a preço oficial.** Acima disso, alugar a identidade verificada de um terceiro (o "laranja") passa a compensar.
- **Com os valores iniciais, o topo fica no limite (~R$ 105).** Se a simulação confirmar, a inclinação cai de 30 para 25 por nível, ou a camada de maestria cai de 50 para 25 (parâmetros 7 e 8 da seção 13).
- **Barreiras somadas:** a identidade verificada (P8), os ~90 dias até o nível 100 (bíblia 6.2), a rampa de conta nova e a detecção por fluxo (seção 10).

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
| **Encomendas da cidade** | Ouro mais Mérito pela entrega, com nota individual; de 1 a 3 encomendas ativas por conta (**a reconciliar com os módulos 01 e 09**) | Estúdio fixa o orçamento; a Câmara escolhe quais bens a cidade pede (seção 11) | 150 | 300 | 450 |
| **Cercos** | Prêmio semanal por defesa, rateado pela nota | Orçamento fixo por cerco | 50 | 100 | 150 |
| **Chefes e eventos com inscrição** | Janelas ativas (P12), com orçamento por evento | Orçamento por evento | 0 | 50 | 120 |
| **Missões do começo** | ~2.000 de ouro no total, só na primeira semana | Fixo, uma vez por conta | (~290/dia na 1ª semana) | — | — |
| **Total** | | | **480** | **970** | **1.550** |

**Não são fontes de ouro:** combate idle (seção 2.2), Travessia (paga em Marcos), Alvará (só compra ouro de outro jogador, sem emissão), Cartório e Baú. [H] Quando o premium compra ouro de outro jogador, não há emissão; quando compraria ouro do sistema, haveria. Por isso não existe nenhuma conversão de Alvará em ouro do sistema ([04a, §2.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

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

- **Preço-base `p0` = 40% do VR-alvo do item no lançamento**, fixo em valor nominal. Isso cria um **estabilizador automático:** se os preços sobem, a torneira do NPC pesa cada vez menos; se os básicos despencam, o NPC vira piso.
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
| **Insumos de NPC** no crafting e no reparo | Toda receita de T2 para cima pede um insumo vendido por NPC (fundente, sal, linha, frasco, prego, óleo; nomes no módulo 06), com preço de ~10% a 15% do VR do produto no lançamento, **indexado ao IPA** (revisão mensal, no máximo ±2% por mês). O insumo nasce preso e não se revende | a | 180 | 380 | 650 |
| **Custo de partida** de expedições e masmorras | Provisões básicas e licença, por partida, crescendo com o tier da região | a | 40 | 90 | 160 |
| **Ajudantes, treino e troca de ofício mestre** | Contratação e treino em ouro, sem salário recorrente para não punir o ausente; a troca de ofício mestre tem custo que cresce com o nível | a e s | 30 | 60 | 100 |
| **Taxas da Bolsa, da Feira e do Pregão** | 5% + 1%, 6% e 7% (bíblia 6.6), arredondadas para cima | τV | 15 | 40 | 90 |
| **Taxa da Troca** | 3% do que cada lado recebe (seção 5.5) | τV | 3 | 8 | 15 |
| **Taxa do Câmbio** | 12% do valor de cada Alvará vendido (rateio por conta ativa) | τV | 10 | 20 | 40 |
| **Obras em ouro** | Doação opcional que vira Mérito a 50% do peso do material | s | 20 | 60 | 120 |
| **Luxos por ouro** | Cosméticos e decorações vendidos por NPC (nascem presos), ampliações da casa, peças de prestígio de preço muito alto | s | 30 | 120 | 250 |
| **Selo de mestre** (amortizado) | Passar a oficina exige uma "obra de mestre" em ouro e materiais (**a reconciliar com o módulo 02**) | s | 0 | 40 | 120 |
| **Total** | | | **328** | **818** | **1.545** |
| **Drenos ÷ fontes** | | | 68% | 84% | 100% |

- **O casual poupa mais, em proporção:** é essa poupança que compra Alvarás e equipamento de quem produz. O hardcore gasta quase tudo em luxo e prestígio, o que acerta o dreno de topo ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), mecanismos que desconcentram).
- **Meta de regime [H]:** no agregado, os drenos ficam entre 85% e 95% das fontes. O resto é a poupança que acompanha a entrada de jogadores e a meta de inflação.
- **Por que indexar os insumos e não as fontes:** o insumo indexado acompanha os preços e mantém a força do dreno, enquanto a fonte nominal fixa perde força com a inflação. Os dois juntos formam um par de estabilizadores. O risco é uma espiral de custos (seção "Como isso pode dar errado"), limitada pelo teto de ±2% por mês e testada na simulação.
- **A taxa do Cartório** é paga em Alvará (seção 7). Só a taxa de anúncio em ouro entra neste quadro, com peso desprezível por conta.

### 4.4 Fontes de itens (VR por dia)

| Fonte | Como funciona | Casual | Mediano | Hardcore |
|---|---|---|---|---|
| **Coleta na fila** | Mineração, Lenhadoria, Pesca e Colheita, uma ação por vez por fila | 1.500 | 3.500 | 6.500 |
| **Combate idle** | Peles, carnes, componentes e raros comuns de expedições e masmorras assíncronas | 300 | 800 | 1.500 |
| **Prêmios de encomenda, cerco e chefe** | Itens com orçamento por evento; nascem circulantes | 80 | 180 | 350 |
| **Travessia** | Relíquias negociáveis com tiragem por temporada; o resto é preso | 0 | 30 | 80 |
| **Valor agregado pela cadeia** | Transformação e criação: o VR do produto menos o dos insumos | 500 | 1.500 | 3.000 |
| **Total bruto** | | **2.380** | **6.010** | **11.430** |

Ficam fora da conta diária: o **Baú do Mascate** (cosméticos, conforme os pagantes, seção 8) e a **oficina de reforço** (seção 4.8), que só vende itens presos.

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
| **Suprimentos da Travessia** | Levados da cidade e consumidos lá, só durante a temporada (fora do total) | (0) | (200) | (400) |
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
| **Pagante** | Mediano que doa ~R$ 40 por mês (~400 Alvarás), gasta metade na loja e vende metade no Câmbio | 2.100 |
| **Bot** | Conta verificada de terceiro, 3 filas, vende até o teto todo dia, sem luxo nem obra | até 4.100 |

**Modelo de bolso por conta ativa** ([04a, §5.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)): `dM/dt = (1 − a) × E − (τ × V + s) × M`, com equilíbrio `M* = (1 − a) × E ÷ (τ × V + s)`.

- **Exemplo (mediano):**
  - Emissão: `E = 970` por dia.
  - Drenos de atividade (insumos, partida, ajudantes): 530, o que dá `a = 0,55`.
  - Comércio e Câmbio: `τ × V ≈ 0,0018` por dia (taxa efetiva de ~6% sobre um giro de ~2% da massa por dia, mais o Câmbio).
  - Luxos, obras em ouro e Selo: `s ≈ 1%` do estoque por dia.
  - Resultado: `M* = 0,45 × 970 ÷ 0,0118 ≈ 37.000` de ouro por conta ativa (~2,5 premiums de 30 dias, ~490 Alvarás), com constante de tempo de ~85 dias. Uma conta que começa com 2.000 chega a ~24.000 no dia 85.
- **Três conclusões:**
  1. **A alavanca é `a`:** cada 10 pontos a mais de consumo embutido cortam ~20% de `M*`.
  2. **`s` encurta o caminho até o equilíbrio,** mas é comportamental: depende de os luxos serem desejados. É o parâmetro mais incerto do modelo.
  3. **`τ` é freio.** Dobrar todas as taxas move `M*` menos de 15%.
- **Meta [H]:** `M* ÷ preço em ouro do premium de 30 dias` entre 2 e 3 por conta ativa. A riqueza grande deve estar em itens, que se gastam, não em ouro parado.

**Conta de guardanapo do Câmbio [H]:**
- **Volume:** com 30 mil ativos por dia, 8% de pagantes, ~R$ 40 doados por pagante por mês (~400 Alvarás) e metade vendida no Câmbio, são ~480 mil Alvarás por mês, ~670 por hora. Em número de ordens, com ordens típicas de ~200 Alvarás, isso dá **~3 a 7 ordens por hora**: muitas unidades, mas poucos participantes.
- **Ouro:** o volume é de ~36 milhões por mês, e os 12% destroem ~4,3 milhões por mês, **~0,5% das fontes**. O Câmbio é um dreno pequeno; seu papel é o índice e a rota do não pagante.
- **Rota do não pagante:** ~50% do premium viria de ouro, dentro da faixa-alvo de 30% a 65% do [05d, §6](../01-pesquisa/05d-rmt-recomendacao.md) (65,2% no IdleMMO).
- **Pagante:** recebe ~66 de ouro por Alvará, ou ~13.200 pelos ~200 Alvarás de um premium, o equivalente a ~14 dias de fontes de um mediano.

### 4.7 Obras e encomendas como amortecedores

- **Obras** recebem material e ouro sem limite e convertem tudo em Mérito pela curva da seção 3.5. São o dreno elástico do excedente: quanto mais a cidade produz, mais a obra absorve. [F] Metas comunitárias ficaram em 1º no ranking do [03](../01-pesquisa/03-alem-do-idle.md).
- **Encomendas** são a demanda de última instância com pagamento em ouro. **Na deflação dos básicos,** o estúdio amplia o orçamento e pede os bens em excesso: entra ouro e saem itens. **Na inflação,** reduz o ouro das encomendas e aumenta o Mérito, que não cria moeda. É a mesma lógica do item sink do OSRS, que compra e apaga itens com parte do imposto ([04a, §2.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)), mas com a cidade como freguesa visível.

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
| **Feira** | Itens únicos e com atributos | Anúncio de preço fixo, compra na hora | 6% na venda (inclui sinal de 0,5%) | **Câmara, de 4% a 8%** |
| **Pregão** | Raridades | Leilão inglês com lance máximo automático | 7% do lance vencedor + abertura | Estúdio |
| **Câmbio** | Alvará ↔ ouro, em unidades | Leilão de chamada a cada hora | 12% de quem vende | Estúdio |
| **Troca** | Qualquer coisa negociável, direto entre dois jogadores | Proposta assíncrona com garantia | 3% do que cada lado recebe; 12% sobre Alvará e Baú lacrado | Estúdio |
| **Cartório** | Personagens | Leilão em Alvará | 10% em Alvará | Estúdio (seção 7) |

Princípios do [04b, §5.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md):
- **Tudo assíncrono:** o ausente deixa ordens, lances máximos e propostas, e volta para colher.
- **Mercado em ouro:** o Alvará só se troca por ouro no Câmbio e na Troca. Bolsa, Feira e Pregão não aceitam Alvará como pagamento, para que ele não vire a moeda do mercado, a "dolarização" do Throne and Liberty ([F09](../01-pesquisa/fichas/F09-throne-and-liberty-e-lost-ark.md)).
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
| **Degrau de preço** | 3 algarismos significativos (mínimo 0,01): 1,23 · 12,3 · 123 · 1.230. O degrau relativo fica entre 0,1% e 1% | O EVE trocou 0,01 ISK por 4 dígitos em 2020 contra a guerra de 0,01. Com um Arraial de 2 a 5 mil simultâneos e livros finos, 3 dígitos dão mais fila por preço |
| **Espera para modificar** | 10 minutos depois de criar ou modificar | O EVE usa 5 minutos ([04b, §3.5](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Taxa de reanúncio** | Modificar cobra de novo 1% sobre o valor da ordem modificada e reinicia a antiguidade | Cobrir a melhor ordem por um degrau rende no máximo 1% e custa 1%: o undercut em série nunca compensa |
| **Valor de referência** | Mediana ponderada por volume dos negócios das últimas 24 h, recalculada de hora em hora, com variação máxima de ±5% por hora | Limite de variação do MWI contra pump and dump |
| **Banda suave** | Banda de ±15% em torno do VR. A venda abaixo entra no piso da banda e desce 2% por hora até o preço pedido; a compra acima entra no teto e sobe 2% por hora. Item novo, sem histórico, usa ±50% nas primeiras 72 h | Desenho do MWI ([04b, §3.4](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)): retarda despejos e altas forçadas sem tabelar o preço |
| **Alerta de desvio** | Confirmação para vender abaixo de 80% ou comprar acima de 120% da média de 24 h | Idle Clans ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Preço mínimo de anúncio** | 50% do preço-base de NPC do item | Contra o preço absurdo usado para transferir valor |
| **Vagas** | 8 ordens abertas no começo, até 20 por progressão (**a reconciliar com o módulo 02**), nunca por dinheiro | "Monopólios dos top players" no MWI ([04b, §1.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Expiração** | 30 dias | MWI e Idlescape |
| **Limite de compra por janela** | Itens críticos (insumos-gargalo, lista no módulo 06): no máximo 3 dias do consumo de referência do estágio a cada 4 horas, por conta | Limite de 4 horas do GE contra o cornering ([04b, §3.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Tela** | Cinco melhores níveis de cada lado, histórico de 1, 7 e 30 dias, volume de 24 h e posição da ordem na fila ("sua ordem é a 3ª no preço 12,3") | A posição visível faltou ao Black Desert ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), Implicações) |

**Exemplo da banda.** O minério tem VR 10. Alguém põe 1.000 unidades à venda a 6. A ordem entra a 8,50 e vai descendo 2% por hora (8,33; 8,16…). Se ninguém comprar antes, ela chega a 6 depois de `ln(6 ÷ 8,5) ÷ ln(0,98) ≈ 17` horas. Quem quer despejar consegue, mas não derruba o preço numa tacada, e os compradores têm tempo de aparecer.

**Quatro perguntas.**
- *Referência:* EVE, GE, MWI e Idle Clans. *Diferença:* taxa de reanúncio igual à de anúncio, que torna o undercut matematicamente inútil, e posição na fila visível.
- *Problema:* liquidez para commodities sem que o dono esteja online.
- *Comportamento:* pensar o preço uma vez e deixar a ordem trabalhar; acertar o preço vira uma forma de o ausente se sentir esperto.
- *Risco:* livros finos nos tiers altos, com spread largo. Mitigação: medir spread e tempo até a execução por item e afrouxar degrau e banda com dados.

### 5.2 Feira (venda instantânea)

| Regra | Valor inicial [H] |
|---|---|
| **O que negocia** | Itens únicos ou com atributos: equipamento (qualidade, atributos, durabilidade restante), obras-primas, cosméticos e decorações ainda não aplicados |
| **Taxa de venda** | 6% do preço, paga por quem vende; a Câmara ajusta entre 4% e 8%, no máximo 1 ponto por mandato e com 30 dias de aviso |
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

### 5.3 Pregão (leilão)

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

### 5.4 Câmbio (Alvará ↔ ouro)

**A decisão: como se forma o preço.**

| Opção | Como funciona | Com 2 a 5 mil simultâneos (~3 a 7 ordens por hora, seção 4.6) |
|---|---|---|
| (A) Livro contínuo | Como o PLEX do EVE | Raso: uma conta com alguns milhares de Alvarás move o preço, o spread fica largo e quem clica primeiro leva. Manipulável |
| (B) Fila administrada | Como o WoW Token: o sistema fixa a cotação pela fila de vendedores e pela demanda | Execução imediata, mas o preço é "do estúdio", e cada alta vira culpa da casa, como os tetos do Black Desert ([04b, §1.8](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). Se o vendedor trava a cotação e o comprador paga outra, a diferença cria ou destrói ouro fora do livro-razão |
| **(C) Leilão de chamada a cada hora ← recomendado** | Os jogadores deixam ordens com preço limite, e a cada hora o sistema calcula **um preço único** que maximiza o volume, dentro de uma banda | O preço é formado pelos jogadores, a liquidez de uma hora se junta num instante só, a velocidade não vale nada e cada rodada já é o índice |

**Por que (C).** É um livro de ordens, como queria o [04b, §5.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), compensado em rodadas, e tem a estabilidade que o [05d, §4.1](../01-pesquisa/05d-rmt-recomendacao.md) buscava na fila administrada. A divergência entre os dois estudos fica resolvida. [F] Na literatura de desenho de mercado, Budish, Cramton e Shim propõem trocar o livro contínuo por leilões em lote frequentes. Eles mostram que o lote anula o valor de pequenas vantagens de velocidade e transforma a competição por rapidez em competição por preço ([QJE 130(4), 2015](https://econpapers.repec.org/RePEc:oup:qjecon:v:130:y:2015:i:4:p:1547-1621); [versão de trabalho](https://conference.nber.org/conf_papers/f69665.pdf)). [H] No nosso caso, o lote serve menos contra robôs de milissegundo e mais para juntar uma liquidez escassa. Para um idle, esperar até uma hora não custa nada.

**Regras [H].**
- **Unidade e preço:** o Câmbio negocia Alvarás em unidades inteiras. O preço é cotado **por Alvará, em ouro**, com o degrau de 3 algarismos significativos da Bolsa (ex.: 75,3).
- **Ordens:** compra (quantidade e preço máximo, com o ouro reservado) e venda (quantidade e preço mínimo, com os Alvarás do saldo livre reservados). Há ordem "a qualquer preço dentro da banda". Cada ordem vai de 10 a 2.000 Alvarás, com até 3 ordens abertas por conta.
- **A rodada:** a cada hora cheia, o sistema escolhe o preço `P*` dentro da banda que maximiza o número de Alvarás negociados. No empate, fica o menor desequilíbrio e depois o preço mais perto da rodada anterior. Todos negociam a `P*`: quem ofereceu mais recebe a diferença de volta, e quem pediu menos recebe mais. A prioridade é por preço e depois por antiguidade. O que sobra fica para a rodada seguinte.
- **Banda:** ±3% da rodada anterior; no máximo ±10% em 24 horas. Ao bater no limite diário, o Câmbio segue funcionando, mas o painel avisa e a equipe revisa (disjuntor da seção 10).
- **Taxa:** 12% de `P*` vezes a quantidade, arredondada para cima ao centésimo, descontada de quem vende e destruída. O preço publicado é o que o comprador paga.
- **Limite de compra:** 2.000 Alvarás por conta a cada 7 dias (~10 premiums de 30 dias), contra o cornering e o entesouramento especulativo. É uma regra do balcão, não da transferência: a Troca continua livre. Não há limite de venda, porque o teto de doação já limita a oferta de cada pagante (seção 6.5).
- **Contestação:** se a doação de quem vendeu for contestada depois da rodada, o comprador de boa-fé fica com os Alvarás, e a conta que contestou fica suspensa até regularizar (seção 6.4).
- **O estúdio nunca compra nem vende no Câmbio,** e isso fica escrito na constituição.
- **Frequência:** de hora em hora no lançamento. Se passar de 30 ordens executadas por rodada de forma sustentada, as rodadas podem ficar a cada 15 minutos.

**Exemplo calculado.** A rodada anterior saiu a 75,00 por Alvará, e a banda vai de 72,75 a 77,25.

| Ordens | Quantidade (Alvarás) | Limite (ouro por Alvará) |
|---|---|---|
| Compra | 600 | até 76,50 |
| Compra | 400 | até 75,00 |
| Compra | 500 | até 73,00 |
| Venda | 300 | a partir de 72,50 |
| Venda | 500 | a partir de 74,50 |
| Venda | 400 | a partir de 76,00 |

- Volume por preço: a 73,00 negociam-se 300; de 74,50 a 75,00, 800 (há 1.000 Alvarás pedidos na compra e 800 oferecidos na venda); a 76,00, 600.
- O volume máximo, 800, sai a 74,50 ou a 75,00, com o mesmo desequilíbrio. O desempate pelo preço mais perto da rodada anterior dá **`P* = 75,00`**.
- A compra de 600 a 76,50 leva tudo e recebe 1,50 de volta por Alvará. Da compra de 400 a 75,00, os 200 Alvarás das ordens mais antigas são atendidos.
- Cada vendedor recebe `75,00 × 0,88 = 66,00` por Alvará, e a rodada destrói `800 × 9,00 = 7.200` de ouro.

**Quatro perguntas.**
- *Referência:* PLEX e Bond (preço de mercado), WoW Token (cotação única), o leilão de abertura das bolsas [NV] e os leilões em lote frequentes (Budish et al.).
- *Problema:* um preço de Alvará confiável num mercado com poucas operações por hora, sem que o estúdio fixe o câmbio.
- *Comportamento:* deixar a ordem e voltar depois; ninguém ganha por ficar olhando.
- *Risco:* rodadas vazias no começo, com o índice parado. Mitigação: se uma rodada não tiver negócio, o índice repete o último preço com a marca "sem negócio", e o painel mostra as ordens em espera (seção 12).

### 5.5 Troca (direta e livre)

A Troca é livre por decisão do Gabriel: nenhum limite de valor, nenhuma proibição de presente e nenhuma exigência de equilíbrio. O desenho trata do custo, da segurança e da leitura do fluxo.

| Regra | Valor inicial [H] |
|---|---|
| **Formato** | Proposta assíncrona: um lado monta a oferta, e o outro aceita em até 24 horas. Tudo o que está na proposta fica reservado até aceitar, recusar ou expirar |
| **Taxa** | **Cada lado paga 3% do valor de mercado do que recebe,** em ouro, destruído (mínimo de 1 ouro). Uma troca equilibrada custa ~6% no total, como a Bolsa; um presente custa 3% a quem recebe. Qualquer lado pode assumir a taxa do outro |
| **Valor de mercado** | VR da Bolsa para commodities; valor estimado da Feira para itens únicos; ouro pelo valor de face; item sem estimativa pelo maior entre o valor declarado e um piso por tier |
| **Alvará na Troca** | Quem recebe paga **12% do preço do Câmbio vezes a quantidade**, em ouro. **[proposta de mudança na bíblia]** (seção 5.6). Com o Alvará divisível, essa taxa também impede que ele vire a moeda em que se cotam os itens entre jogadores (seção 6.2). Só sai Alvará do saldo livre, fora da carência |
| **Contestação no banco** | Se a doação de quem deu o Alvará for contestada (chargeback, MED), quem recebeu de boa-fé fica com ele, e a conta que contestou fica suspensa até regularizar (seção 6.4). Com sinais de fraude organizada, o caso cai no nível 3 abaixo |
| **Baú lacrado na Troca** | Quem recebe paga **12% do VR** do Baú. **[proposta de mudança na bíblia]** (seção 8) |
| **Cota** | Dar item de origem consome cota de quem dá (seção 3.3) |
| **Tela de confirmação** | VR de cada lado, desequilíbrio em percentual e aviso acima de 50%; aviso extra quando o outro lado é uma conta com menos de 7 dias |
| **Banco da guilda** | Depositar é Troca com a guilda: não paga taxa, mas item de origem consome cota. Retirar paga 3%, como presente. **A reconciliar com o módulo 09** |

**Risco de troca no livro-razão (salvaguarda S3).** Todo movimento de valor entre contas é registrado com o VR do momento.
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

| Operação | Bolsa | Feira | Pregão | Troca | Câmbio | Cartório |
|---|---|---|---|---|---|---|
| Item por ouro | 6% (1% + 5%) | 6% | 7% + abertura | 6% (3% + 3%) | — | — |
| Presente (de um lado só) | — | — | — | 3% | — | — |
| Alvará por ouro | — | — | — | **12%** (proposta) | 12% | — |
| Baú lacrado por ouro | **12%** (proposta) | — | — | **12%** (proposta) | — | — |
| Personagem | — | — | — | — | — | 10% em Alvará |

**O conflito com a bíblia.** Pela bíblia, a Troca custa 3% e o Câmbio, 12%. Se um Alvará pudesse ser trocado por ouro na Troca a 6% no total (3% + 3%), o Câmbio seria contornado, o dreno cairia à metade e o índice passaria a medir só a parte do mercado que ainda usasse o balcão. O mesmo vale para o Baú lacrado, que é Alvará em outra forma: 40 Alvarás compram 1 Baú, que voltaria a ouro na Bolsa por 6%. **[proposta de mudança na bíblia]:** o Alvará e o Baú lacrado pagam 12% em qualquer canal. Isso não limita a transferência; só a deixa com o mesmo preço em todo lugar.

## 6. Alvará

### 6.1 Emissão por doação

- **O pagamento é uma doação que credita Alvarás** (decisão do Gabriel, [PROGRESSO](../PROGRESSO.md)). Cada valor doado na loja web (Pix e cartão) credita um número de Alvarás na conta. Os pacotes e eventuais bônus por valor ficam com o módulo 11.
- **Moeda em unidades.** O Alvará é uma moeda divisível em unidades inteiras (coins), não mais um item de 30 dias.
  - **Referência de trabalho [H]:** 1 Alvará ≈ R$ 0,10, ou seja, R$ 10 doados creditam 100 Alvarás.
  - Com isso, o premium de 30 dias fica entre 149 e 249 Alvarás (a faixa de R$ 14,90 a R$ 24,90 da bíblia 6.7), e o Baú, em ~40.
  - **A reconciliar com o módulo 11.**
- **Sem reembolso** por parte do estúdio.
- **Nunca de graça:** não é prêmio de evento, de ranking nem de Travessia. Compensação por manutenção vem em dias de premium presos, nunca em Alvará. [F] O PLEX caiu de ~6 para ~4,5 milhões de ISK com distribuição gratuita e a unificação do mercado ([05d](../01-pesquisa/05d-rmt-recomendacao.md), "Como isso pode dar errado").
- **Rastreio por lote.** Cada doação gera um lote no livro-razão, com valor, meio de pagamento, data e carência.
  - No saldo, os Alvarás são iguais entre si. Mas o livro-razão sabe de que lote saiu cada unidade transferida, e é isso que permite a carência (6.3) e a regra de contestação (6.4).
  - **Ordem de uso:** o gasto na loja consome primeiro o saldo em carência. A transferência sai só do saldo livre, do lote mais antigo para o mais novo.
- **Validar com advogado:**
  - Chamar o pagamento de doação não muda a natureza de compra perante o CDC (Lei 8.078/1990, art. 49, arrependimento de 7 dias). Também pode atrair ITCMD e conflitar com as regras dos provedores de pagamento. O alerta já está registrado no [PROGRESSO](../PROGRESSO.md), e o risco foi assumido pelo Gabriel.
  - Uma moeda divisível que paga outros jogadores na Troca se afasta do circuito fechado (Lei 12.865/2013, art. 6º, §3º) e se aproxima de ativo virtual (Lei 14.478/2022, art. 3º) ([05b](../01-pesquisa/05b-rmt-legal-brasil.md)).

### 6.2 Usos

| Uso | Efeito | Observação |
|---|---|---|
| **Gastar na loja** | Premium (conveniência por tempo), cosméticos, Baú do Mascate e outros itens de conforto e cosmético | O Alvará gasto na loja é **destruído**: é o dreno do Alvará. O conteúdo do premium fica com o módulo 11. **Nunca:** desconto de taxa, teto ou cota maior, filas, offline, vagas de ordem, renda, XP ou poder ([05d, §5.2](../01-pesquisa/05d-rmt-recomendacao.md): desconto de taxa favorece quem já é rico, [F08](../01-pesquisa/fichas/F08-black-desert.md)) |
| **Comprar Baús** | ~40 Alvarás por Baú (seção 8) | O Baú comprado com saldo em carência herda a carência |
| **Dar lance no Cartório** | Pagamento de personagens (seção 7) | Só com saldo livre |
| **Vender no Câmbio** | Em unidades, por ouro de outro jogador, menos 12% | Seção 5.4 |
| **Trocar na Troca** | Por qualquer coisa | 12% do preço do Câmbio vezes a quantidade, pago por quem recebe (proposta, seção 5.6) |

- **Estoque:** `Alvarás em circulação = doados − gastos na loja − destruídos no Cartório`. Publicado de forma agregada (6.6). Como moeda, o Alvará pode ser guardado sem prazo. O estoque parado é demanda futura da loja e oferta futura do Câmbio, e o painel o acompanha.
- **Risco novo: moeda paralela.** Divisível e livre, o Alvará pode virar a moeda em que se cotam os itens caros entre jogadores, fora do ouro. Foi o que aconteceu com o pergaminho do IdleMMO e com a "dolarização" do Throne and Liberty ([04b, §5.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md); [05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). Defesas: balcões só em ouro (5.0), 12% em qualquer troca de Alvará (5.6) e índice publicado em ouro.

### 6.3 Carência por lote e meio de pagamento (salvaguarda S2)

Antes da **primeira transferência** (Câmbio, Troca, lance no Cartório), cada lote de Alvarás cumpre uma carência que depende do meio de pagamento. Durante a carência, os Alvarás do lote podem ser gastos na loja, mas não transferidos. Depois dela, circulam livremente para sempre (decisão do Gabriel).

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
1. **Durante a suspensão,** a conta não joga, não negocia e não transfere. Alvarás, ouro e itens ficam congelados com ela. As ordens abertas são canceladas, e o que estava reservado volta, congelado, para a própria conta.
2. **Quem recebeu de boa-fé fica com o que recebeu:** Alvarás numa Troca, ouro de uma venda no Câmbio, um personagem no Cartório. O estúdio absorve a perda; nada é tirado de terceiros por causa da contestação de outro.
3. **Regularizou, a suspensão cai,** e a conta volta com o que tinha.
4. **Fraude organizada é outro caso.** Quando a contestação vem com sinais de fraude (cartão de terceiro, funil de contas, risco de troca nível 3), as contas que receberam o valor entram em revisão. **A reconciliar com o módulo 13.**
5. **Disjuntor:** se as disputas passarem de um limiar interno (bem abaixo do 1,5% das bandeiras, [05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §5.1), as transferências de Alvará (Câmbio, Troca, Cartório) são suspensas. O gasto na loja continua.

**Efeito na economia.** Os Alvarás contestados que já foram transferidos seguem circulando sem dinheiro por trás. A massa ativa de ouro e de Alvará cai pelo que fica congelado nas contas suspensas. A simulação modela os dois efeitos (parâmetro 45 e cenário 11 da seção 13).

**Por que a carência continua necessária.** A suspensão não pesa para quem usa cartão roubado: o fraudador abandona a conta. A carência impede que ele transfira antes de a vítima perceber.

**Tensão registrada.** O [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md) recomendava revogar só o valor contestado, sem bloquear a conta inteira, porque a FTC condenou a Epic por bloquear contas inteiras depois de contestações ([05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §3.1). A decisão do Gabriel suspende a conta, mas devolve tudo ao regularizar. **Validar com advogado** a suspensão e o congelamento de saldo diante do CDC (art. 51, cláusulas abusivas). Risco assumido pelo Gabriel.

### 6.5 Teto de doação mensal

- **Padrão igual para todos [H]:** R$ 300 por mês, somando todas as doações (~3.000 Alvarás).
- **Aumento** por pedido, até R$ 1.500 por mês, com 7 dias de espera. **Limites pessoais menores** a qualquer hora. Esfriamento de 24 horas depois de doação acima de R$ 150. Painel de gasto ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 10).
- **Papel econômico:** o teto limita a oferta de Alvarás por pagante e, com ela, o "pay-to-win de capital", em que quem paga compra liquidez para dominar livros ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), mecanismo 5). Também limita o estrago de um cartão roubado.
- **Os valores ficam com o módulo 11.**

### 6.6 Índice público do Alvará

- **No jogo e em dados abertos, com atraso de 1 hora:**
  - preço de cada rodada do Câmbio, **por Alvará, em ouro** (série horária e diária, com abertura, máxima, mínima e fechamento);
  - a leitura humana do índice, **o preço do premium de 30 dias em ouro** (o preço por Alvará vezes os Alvarás do premium);
  - volume em unidades, ordens em espera dos dois lados e ouro destruído pela taxa.
- **Semanal, agregado:**
  - Alvarás doados, gastos na loja, destruídos no Cartório e em circulação;
  - parcela do premium obtida com ouro;
  - contas suspensas por contestação e contas regularizadas.
- **Leitura obrigatória ao lado da cesta (IPA) e da massa monetária:** o preço do Alvará mede também a oferta e a demanda do próprio Alvará. [F] PLEX, point do Torn e Bond do OSRS caíram com a moeda crescendo ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). Aqui, o gasto na loja e a taxa do Cartório destroem Alvarás e empurram o preço para cima sem que os bens mudem; um estoque grande parado pode empurrá-lo para baixo de uma vez.

### 6.7 Quatro perguntas (Alvará em coins, livre)

- **Referência:** Tibia Coins (moeda em unidades, transferível conforme o meio de pagamento, [F04](../01-pesquisa/fichas/F04-tibia.md)); PLEX, Bond e WoW Token. *Diferença:* livre em qualquer canal, com a mesma taxa em todos, e o gasto na loja como dreno.
- **Problema:** capturar a demanda de RMT pelo canal oficial e dar ao não pagante uma rota ao premium (lei 19).
- **Comportamento:** o pagante doa e vende parte dos Alvarás por ouro, financiando o tempo do não pagante; o Alvará vira presente entre amigos; quem não paga junta ouro para o premium.
- **Risco:** moeda paralela, ativo virtual e entesouramento especulativo. Mitigação: balcões só em ouro, limite de compra no Câmbio, taxa de 12% em todo canal, nenhuma emissão grátis e o estoque em circulação no painel. **Validar com advogado** (seção 6.1).

## 7. Cartório (bazar de contas)

### 7.1 Formato

- **Leilão em Alvará** de 3 ou 7 dias, com lance inicial de pelo menos 300 Alvarás (~R$ 30), incremento de 5% (mínimo de 10 Alvarás) e lance máximo automático.
- **Prorrogação** de 30 minutos para lance no fim, até 24 horas no total.
- **Garantia de 100%** em Alvarás do saldo livre, fora da carência; lances irrevogáveis.
- [F] O Char Bazaar do Tibia funciona com taxa de 50 TC, comissão de 12%, pagamento só com coins transferíveis e reserva de 10% do lance. Em 2025 movimentou 721,4 milhões de TC, com ~98,7 milhões em taxas, cerca de 13% da receita da CipSoft pela estimativa de terceiros ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).

### 7.2 Taxas

- **10% do lance vencedor em Alvará, destruído** (bíblia 6.6), arredondado para cima à unidade. Exemplos:
  - venda por 300 → taxa 30, o vendedor recebe 270;
  - venda por 2.345 → taxa 235, recebe 2.110.
  - Com o Alvará em unidades, o arredondamento deixa de pesar nas vendas pequenas.
- **Anúncio:** 2.000 ouro, sem reembolso, contra anúncios de teste e spam. **[proposta de complemento à bíblia]**
- **Por que em Alvará destruído:** o dinheiro já entrou quando o Alvará foi doado. Destruí-lo tira oferta de Alvará e não cria receita nova para o estúdio a cada venda, como pede a regra de que taxa não é receita (bíblia 6.6). Efeito colateral: o preço do Alvará em ouro sobe (seção 6.6).

### 7.3 O que vai junto e o que fica

**Princípio: o Cartório vende o personagem, não o cidadão nem o cofre.**

| Vai com o personagem | Fica com a conta do vendedor |
|---|---|
| Níveis, maestrias, Selos de mestre, vocação, habilidades | **Mérito**, vitalício e da Era: a cidadania é da pessoa |
| Ajudantes | **Ouro e Alvará** |
| Equipamento em uso, **preso ao comprador por 30 dias** | Inventário e armazém negociáveis |
| Cosméticos aplicados e presos; casa e decoração presa | Direito de voto e histórico na Câmara (módulo 09) |
| Títulos de feito, com a marca "via Cartório" visível no perfil | **Marcos:** zerados na venda, porque a temporada é de quem jogou |
| Nome do personagem (o comprador pode trocar) | Registros históricos (ranking, nome no mapa da Travessia) com o nome da época |

- **Por que o armazém fica:** se o ouro e os itens fossem junto, o Cartório viraria um câmbio de ouro por Alvará a 10%, mais barato que o Câmbio (12%). O equipamento em uso vai, porque o comprador quer um personagem pronto, mas fica preso por 30 dias, para não servir de cofre disfarçado.
- **Por que o Mérito fica:** quem comprasse um personagem com Mérito alto compraria prioridade na cidade. O [conceito](../02-conceito.md) já previa carência para contas compradas votarem; aqui a cidadania nem muda de mãos.

### 7.4 Quem pode vender [H]

- Conta com pelo menos 30 dias e 40 horas de jogo ativo verificado (sessões com decisões, não cliente aberto).
- Segundo fator de autenticação ativo há pelo menos 14 dias, sem troca de e-mail, senha ou segundo fator nos últimos 14 dias.
- Personagem fora de guilda, sem mandato na Câmara, sem encomenda ativa, sem suspensão por contestação, sem investigação aberta e sem Alvará em carência.
- Uma venda a cada 60 dias por conta.

### 7.5 Quem pode comprar

- **Uma identidade verificada = uma conta = um personagem ativo** (P8 e decisão 4 do checkpoint 2). Para receber o personagem, a conta do comprador precisa estar vaga:
  - uma conta nova;
  - uma conta cujo personagem foi vendido no Cartório;
  - ou uma conta cujo personagem foi encerrado pelo dono (os bens negociáveis ficam na conta).
- Não existe "guardar" o personagem antigo para voltar a ele, o que daria a uma pessoa quatro ofícios mestres por revezamento e quebraria o pilar 1.
- O personagem comprado chega sem guilda e fica 30 dias fora dos pódios de ranking da Era. **A reconciliar com os módulos 03, 09 e 13.**

### 7.6 Segurança

- **Aviso de 72 horas:** ao criar o anúncio, o dono da conta recebe aviso por e-mail e no segundo fator, com cancelamento em um clique. O leilão só abre depois disso. É a janela contra o roubo de conta.
- **Liquidação atômica** no livro-razão. O personagem muda de conta, e nenhuma senha, e-mail ou documento muda de mãos. As sessões do vendedor no personagem são encerradas. [F] Antes do Char Bazaar, compradores acionavam a recuperação de conta para confirmar a posse, e o comércio corria no eBay com golpe e banimento ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).
- **Os Alvarás recebidos pelo vendedor ficam retidos por 7 dias.** Se, em até 30 dias, ficar provado que a venda veio de conta invadida, o personagem volta ao dono legítimo, e os Alvarás retidos voltam ao comprador. Depois disso, o caso segue o artigo 12 da constituição.
- **Contestação no banco depois da liquidação** (seção 6.4):
  - Se a doação que pagou os lances do comprador for contestada, o vendedor de boa-fé fica com os Alvarás, e a conta compradora fica suspensa até regularizar, com o personagem.
  - Se a contestação for de doações do próprio vendedor, a conta dele fica suspensa, mas a venda não se desfaz: o comprador de boa-fé fica com o personagem.
- **Vender a conta fora do Cartório continua proibido,** não por ser RMT (o RMT informal está em aberto), mas porque significa entregar a identidade verificada de outra pessoa. Isso quebra a regra de idade (P8) e a barreira contra multicontas.

### 7.7 Quatro perguntas

- **Referência:** Char Bazaar do Tibia ([F04](../01-pesquisa/fichas/F04-tibia.md); [05a, §3.C](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). *Diferença:* o cofre e a cidadania não vão junto, e há um aviso de 72 horas ao dono.
- **Problema:** o mercado cinza de contas, com golpe de recuperação e venda da identidade de outra pessoa.
- **Comportamento:** investir no personagem como patrimônio e "realizar" o progresso ao sair, em vez de abandonar a conta.
- **Risco:** num idle, vender a conta é vender tempo ausente acumulado, que é o que um bot produz de graça ([05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). Mitigação: 40 horas de jogo ativo verificado, uma venda a cada 60 dias, identidade verificada e detecção de nivelamento automatizado. **Validar com advogado** a natureza jurídica da venda de personagem e a suspensão por contestação (CDC, arts. 49 e 51).

## 8. Baú do Mascate

### 8.1 Preço e compra

- **~40 Alvarás por Baú na loja** [H], ou ~R$ 4 com o Alvará a ~R$ 0,10. **O preço final fica com o módulo 11.**
- Comprado com Alvará, o **Baú lacrado é um item negociável por ouro** (decisão do Gabriel). É fungível dentro da série, então é negociado na Bolsa, num livro por série.
- **Taxa:** o Baú lacrado é Alvará em outra forma e paga 12% em qualquer canal (1% de anúncio + 11% na venda na Bolsa; 12% na Troca). **[proposta de mudança na bíblia]** (seção 5.6). Pela arbitragem, o preço do Baú em ouro tende a ficar perto de 40 vezes o preço do Alvará, mais ou menos o prêmio da série.

### 8.2 Conteúdo

- **Só cosmético e decorativo** (bíblia, seção 5): visuais de equipamento e roupa, decoração de casa, aparências de ajudante, molduras e gestos. Nunca poder, renda, XP, filas, offline ou material de crafting.
- **Uma série por Era.** No fim da Era, a série sai da loja; os Baús lacrados que restarem continuam circulando com tiragem fechada.
- **Negociável até ser aplicado.** Vestir ou decorar prende o item à conta, e ele passa a ir junto com o personagem no Cartório. É o dreno dos cosméticos: P3 pede que tudo o que se negocia se gaste, e cosmético não se desgasta.
- **Duplicatas:** podem ser desfeitas em fragmentos presos (nome a definir no módulo 11), que compram, a preço fixo, um item escolhido da mesma série. A troca é determinística, sem nova sorte. Evita o erro do Trade Up do CS2, um conversor que inundou o topo ([04a, §2.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Convivência com o artesão:** os cosméticos feitos por jogadores com materiais (tinturas, bordados, mobília) circulam no mercado ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7). O Baú traz "visuais de série", e os ofícios fazem o que se aplica por cima e a decoração funcional. **A reconciliar com os módulos 05, 06 e 14**, para que o Baú não tire o freguês do alfaiate.

### 8.3 Tabela de chances (exemplo publicado por série)

| Raridade | Chance por Baú [H] | Garantia | Tiragem |
|---|---|---|---|
| Comum | 62% | — | Livre |
| Incomum | 25% | — | Livre |
| Raro | 10% | A cada 10 Baús da série abertos pela conta, pelo menos 1 Raro ou melhor | Livre |
| Muito raro | 2,7% | A cada 60, pelo menos 1 Muito raro ou melhor | Livre |
| Lendário | 0,3% | — | **Máxima por série e por Arraial** (ex.: 200), com contador público. Esgotada, a chance passa ao Muito raro, e a tabela publicada muda na hora |

- **Publicar a chance nominal e a efetiva com a garantia.** Sem garantia, a chance de 10 Baús sem nenhum Raro ou melhor seria de `0,87^10 ≈ 25%`, e é esse caso que a garantia cobre.
- **Escassez prometida:** a tiragem do topo só aumenta com aviso prévio (artigo 8 da constituição).

### 8.4 Teto de gasto (salvaguarda S5)

| Limite | Valor [H] |
|---|---|
| Baús comprados na loja | Até 25 por conta por mês (~1.000 Alvarás, ~R$ 100) |
| Baús abertos, de qualquer origem | Até 40 por conta por mês |
| Limites pessoais | Menores, a qualquer hora, com efeito imediato |
| Ofertas | Nenhuma com contagem regressiva ou personalizada para quem mais gasta ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 10) |
| Histórico | Gasto e aberturas visíveis ao jogador |

### 8.5 Quatro perguntas

- **Referência:** a caixa do RubinOT, citada pelo Gabriel; probabilidades publicadas e teto de gasto (S5); tiragem prometida ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), artigo 6 do esboço).
- **Problema:** receita de cosmético com colecionismo e mercado secundário vivo.
- **Comportamento:** colecionar séries, negociar duplicatas, exibir o raro.
- **Risco, o maior do módulo:** pagamento (Alvará, ou ouro que vale reais) + sorte + prêmio com valor de mercado (o conteúdo é negociável, e o RMT informal está aberto). É a configuração que o estudo jurídico marcou como luz vermelha ([00-sintese](../01-pesquisa/00-sintese.md), "O que muda com essas decisões"):
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
| 1 | **Consumo embutido** | Insumos de NPC indexados ao IPA e custo de partida (seção 4.3) | Alta; acompanha a emissão sozinha | Baixo: o jogador gasta porque quer produzir | Ligada desde o lançamento |
| 2 | **Teto de emissão por conta** | Portão de saída (seção 3) | Alta, preventiva | Baixo no lançamento; alto se vier depois (SimpleMMO, [04a, §3.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Desde o lançamento; nunca afrouxar sem análise de impacto |
| 3 | **Desgaste e quebra** | Durabilidade, reparo que reduz o máximo, quebra depois de N reparos | Alta para itens | Baixo quando é consumo do uso, não decaimento arbitrário (Simpson, [04a, §4.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Desde o lançamento |
| 4 | **Obras e encomendas elásticas** | Obra sem limite, com Mérito em curva; encomenda com orçamento móvel (seção 4.7) | Média a alta; funciona nos dois sentidos | Baixo: a cidade é a freguesa | Ajuste mensal |
| 5 | **Drenos progressivos** | Troca de ofício mestre, treino de ajudante e ampliação da casa com custo crescente | Alta contra concentração | Médio; explicar como serviço, não como imposto sobre o sucesso | Desde o lançamento |
| 6 | **Drenos de topo** | Selo de mestre, luxos por ouro, peças de prestígio de preço muito alto | Média; mira o topo | Baixo | Novos a cada Era |
| 7 | **Taxas** | Balcões, Troca, Câmbio | Freio, não âncora: dobrar todas move `M*` menos de 15% (seção 4.6) | Médio; alto quando sobem | Mudança com rampa de 1 ponto por mês e 30 dias de aviso |
| 8 | **Destino visível das taxas** | O ouro destruído em taxas aparece como contribuição da cidade à obra que a Câmara escolher | Torna a taxa aceitável | Baixo | Desde o lançamento |
| 9 | **Item sink por orçamento** | Encomenda especial que compra e apaga um item que entra rápido demais, com lista e regra publicadas | Média, focada | Baixo, se for público | Depois do 6º mês, se preciso |
| 10 | **Travessia** | Economia de Marcos separada; a cidade abastece a fronteira | Alta como demanda de bens | Médio | A partir da 2ª Era |

**Regra do destino visível [H]:** os benefícios das obras **não podem multiplicar fontes negociáveis** (nada de "+10% de ouro das encomendas para todos"). Eles abrem regiões, conteúdo, conforto e cosméticos. Caso contrário, a taxa vira combustível de inflação. **A reconciliar com os módulos 09 e 10.**

**A evitar ou só para emergência** ([04a, §7.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)):
- cortar fontes depois do lançamento;
- escassez imposta;
- mexer no preço-base de NPC;
- confisco e rollback geral;
- bandas rígidas;
- taxa sobre a compra do Alvará (falhou no Albion);
- Alvará grátis;
- aluguel ou decaimento obrigatório do estoque, que pune o ausente;
- dreno que vira receita.

### 9.2 Antideflação (o piso de 0%)

[H] Num idle de produção, a deflação dos básicos é o risco mais provável e o mais doloroso: o produtor ouve "meu trabalho não vale nada" ([04a, §3.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Sinais:**
  - VR de um básico abaixo de 1,3 vez o preço-base de NPC por 14 dias;
  - IPA anualizado em 90 dias abaixo de 0%;
  - velocidade em queda de 30% em 4 semanas.
- **Alavancas, nesta ordem:**
  1. **Encomendas ampliadas** para os bens em excesso (entra ouro, saem itens).
  2. **Obra especial** com Mérito em dobro para o bem em excesso, por tempo limitado.
  3. **Indexação dos insumos,** que cai sozinha com o IPA.
  4. **Festas do Arraial:** eventos de consumo com raízes brasileiras (uma festa junina que consome refeições e decoração, por exemplo), com recompensa cosmética.
  5. **Suprimentos da Travessia.**
  6. Só por último, e pelo artigo 11, a meia-vida do NPC.

### 9.3 Diagnóstico antes do remédio

Quando o índice sai da meta, a primeira pergunta é **o que subiu**:
- **Só o Alvará subiu,** com a cesta estável: oferta e demanda de Alvará (mais Cartório, menos pagantes). Não se mexe nos drenos de ouro.
- **A cesta subiu:** inflação de bens. Ação por ordem: luxos novos, mais Mérito no lugar do ouro nas encomendas, indexação e, só depois, taxas com rampa.
- **Massa sobe, preços caem:** entesouramento com produção alta, a deflação do EVE em 2025–26. Ação: seção 9.2.

Nunca reagir a um indicador só ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), "Como isso pode dar errado").

## 10. Anti-manipulação

### 10.1 As 16 proteções do [04b, §5.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), adaptadas

| # | Proteção | Como fica aqui | Seção |
|---|---|---|---|
| 1 | Livro-razão de partidas dobradas, atômico e idempotente | Inclui a **origem de cada lote** e o crédito dos insumos, necessários ao portão de saída | 3.3 |
| 2 | Garantia de 100% | Em toda ordem, lance, proposta de Troca e lance no Cartório | 5 |
| 3 | Degrau relativo, espera e taxa de reanúncio | 3 algarismos; 10 min na Bolsa e 30 min na Feira; reanúncio de 1% | 5.1, 5.2 |
| 4 | Taxas arredondadas para cima, sobre o valor de mercado | Sobre o VR, nunca sobre o preço de NPC | 1.2, 5 |
| 5 | Valor de referência, banda suave e alerta | VR horário com ±5% por hora; banda de ±15% com caminhada de 2% por hora | 5.1 |
| 6 | Piso de NPC abaixo do custo | Preço-base de 40% do VR-alvo, com curva logarítmica | 4.2 |
| 7 | Limite de compra por janela | Itens críticos a cada 4 horas; Alvará, 2.000 unidades por semana no Câmbio | 5.1, 5.4 |
| 8 | Negociável e preso separados, com teto | Portão de saída com cota | 3 |
| 9 | Custo de conta para dar valor | Idade verificada para todos, rampa da cota em 30 dias e condições do Cartório | 3.4, 7.4 |
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
- aviso de 72 horas ao dono no Cartório;
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

## 11. Constituição econômica do Arraial

> **Preâmbulo.** O ouro é a moeda comum do Arraial. O estúdio se compromete a preservar o poder de compra do ouro, a garantir ao recém-chegado acesso aos bens de que precisa, a recompensar decisões e não tempo de cliente aberto, e a nunca vender a espera. Estas regras são públicas e só mudam pelo artigo 14.

| Art. | Regra | Origem |
|---|---|---|
| **1. Mandato e metas** | Meta: variação do IPA de 0% a +8% ao ano, com piso de 0%, medida em janela móvel de 90 dias e anualizada. A banda é revista uma vez, no 90º dia depois do lançamento. Metas auxiliares: drenos entre 85% e 95% das fontes; massa por conta ativa entre 2 e 3 premiums de 30 dias em ouro; premium de 30 dias entre 12 e 20 dias de renda mediana | Bíblia 6.6; meta de expansão do Torn; GW2 depois de 2015 ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **2. Moedas e camadas** | Quatro moedas: Ouro, Alvará, Marcos e Mérito. O que é preso nunca se torna negociável por compra; o que é pago nunca vira renda, XP ou poder | Seção 2; bíblia, seção 5 |
| **3. Emissão** | O ouro só nasce nas fontes listadas na seção 4.1. O teto de emissão e sua fórmula são públicos. Nenhuma fonte negociável cresce exponencialmente com o nível. Toda mudança de fonte, de teto ou do offline vem com análise de impacto publicada | Lei 16; IdleMMO e SimpleMMO ([04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **4. Drenos e taxas** | Lista pública de drenos. Toda taxa em ouro é destruída, nunca receita. Mudança de taxa com 30 dias de aviso e rampa de no máximo 1 ponto por mês. O destino visível das taxas é a obra | Bíblia 6.6; rampa do Torn; revolta no EVE e no OSRS |
| **5. Mesma taxa** | Item por ouro custa ~6% em qualquer canal; Alvará e Baú lacrado, 12%; presente, 3% | Seção 5.6 |
| **6. Alvará** | Moeda em unidades que nasce só de doação em reais, sem reembolso, e nunca é dada de graça. Gasta na loja, é destruída. O estúdio nunca compra nem vende no Câmbio. A regra da rodada (banda, desempate, frequência) é pública. A carência por lote é publicada. A doação contestada no banco suspende a conta até regularizar, e quem recebeu de boa-fé fica com o que recebeu | Seção 6; PLEX ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); decisões do Gabriel |
| **7. Cartório** | Regras de venda, o que vai e o que fica, taxa de 10% destruída e aviso de 72 horas | Seção 7 |
| **8. Baú e escassez prometida** | Tabela de chances, garantia e tiragem publicadas antes da venda de cada série. A tiragem do topo nunca aumenta sem 60 dias de aviso. Teto de compra e de abertura | Seção 8; Trade Up do CS2 |
| **9. Câmara** | Mexe só nas faixas da tabela abaixo. Política monetária (teto, NPC, insumos, Câmbio, Alvará, Cartório, Baú) não vai a voto | O OSRS não pôs o imposto em votação ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| **10. Transparência** | Painel público, relatório mensal, dados abertos com atraso de 1 hora, API de leitura e erros corrigidos em público | MER do EVE; JSON do MWI; Varoufakis |
| **11. Emergência** | Disjuntor por item, balcão ou moeda, com comunicação em até 2 horas, prazo anunciado e relatório em 7 dias. Rollback geral só como último recurso. A remoção de valor indevido, inclusive de quem recebeu de boa-fé, segue regra escrita antes. Mudar o preço-base de NPC é medida só deste artigo | New World, ESO, Diablo IV ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 8 do esboço) |
| **12. Exploits, bots e fraude** | Confisco proporcional (até 3 vezes o ganho, limitado ao saldo), destruído; suspensão e banimento progressivos. O RMT informal não é intermediado, garantido, apoiado pelo suporte nem proibido pelo estúdio (S4). Nenhuma API ou parceria com sites de RMT | Decisão do Gabriel; [05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md) |
| **13. Garantias** | Nunca estarão à venda: a espera, o offline, as filas, o teto e a cota, a taxa do ausente, renda, XP e poder. Proibidos no jogo: juros, cassinos e pirâmides entre jogadores | Lei 13; [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 11 do esboço |
| **14. Emenda** | Mudanças pedem 60 dias de aviso, justificativa com dados, consulta pública e histórico de versões. Exceção: o artigo 11 | [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), art. 12 do esboço |

**Faixas da Câmara:**

| Alavanca | Faixa | Limite de mudança |
|---|---|---|
| Taxa da Feira | 4% a 8% (bíblia 6.6) | No máximo 1 ponto por mandato, com 30 dias de aviso |
| Bens pedidos nas encomendas da cidade | Quais bens e em que proporção, dentro do orçamento em ouro fixado pelo estúdio | A cada mandato |
| Obra corrente | Entre as 2 ou 3 que o estúdio libera a cada Era | A cada mandato |
| Destino simbólico das taxas | Qual obra recebe o crédito do ouro destruído | A cada mandato |

**Por que a Câmara não mexe na moeda:** captura por guildas ricas e por contas compradas é um risco já registrado no [conceito](../02-conceito.md). Uma taxa que muda a cada eleição destrói a confiança no livro de ordens. A Câmara governa a cidade; a constituição governa a moeda. **A reconciliar com o módulo 09** (poderes e mandato).

## 12. Painel diário e alarmes

### 12.1 O IPA

- **Cesta:** 24 bens em quatro grupos:
  - 8 matérias-primas, cobrindo as quatro coletas e os tiers;
  - 6 intermediários (lingote, tábua, couro, fio e tecido);
  - 4 consumíveis (refeição e poção, em dois tiers);
  - 6 "custos de reposição": o VR de repor e manter por 30 dias um conjunto de referência de ferramentas e equipamento em três estágios (casual, mediano, hardcore).
- **Preço de cada bem:** o VR (mediana ponderada por volume em 24 horas).
- **Pesos:** valor negociado nos 30 dias anteriores, com **cesta encadeada mensal**, para acompanhar a mudança do consumo sem quebrar a série.
- **Ficam fora da cesta:** os insumos de NPC, que são indexados ao próprio IPA (seria circular), e os cosméticos.
- **Base 100 no 30º dia depois do lançamento,** quando a monetização inicial das contas já passou.
- **Publicação:** diária, com variação anualizada em 30 e em 90 dias, ao lado do preço do Alvará (bíblia, glossário) e de um **índice de luxo** separado (raros do Pregão, cosméticos e Baú).
- **Referência:** índices de minerais, primários, secundários e de consumo do EVE desde 2007 ([04a, §4.5](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

### 12.2 Painel

| Métrica | Definição | Frequência | Alarme inicial [H] | Público? |
|---|---|---|---|---|
| **IPA** | Seção 12.1 | Diária | Anualizado em 90 dias fora de 0% a 8%; variação de 3% em 7 dias | Sim |
| **Índice de luxo** | Raros, cosméticos, Baú | Semanal | — | Sim |
| **Preço do Alvará** | Rodada do Câmbio, por unidade em ouro, e o premium de 30 dias em ouro | Horária | ±10% em 24 h; descolamento de mais de 15% do IPA em 30 dias | Sim |
| **Premium em dias de renda** | Preço em ouro do premium de 30 dias ÷ fontes brutas diárias do mediano | Semanal | Fora de 12 a 20 dias | Sim |
| **Estoque de Alvarás** | Doados − gastos na loja − destruídos; parcela parada há mais de 30 dias | Semanal | Estoque parado acima de 2 meses de gasto na loja | Sim, agregado |
| **Massa monetária (M)** | Ouro em contas ativas (login em 30 dias) e inativas | Diária, alarme horário | +2% em 24 h. [F] O dupe do EverQuest II somou ~20% em 24 h ([04a, §6.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) | Sim |
| **M por conta ativa ÷ preço do premium** | Em ouro | Semanal | Fora de 2 a 3 depois do 6º mês | Sim |
| **Delta de retorno** | Ouro que entra ou sai da massa ativa com contas que voltam ou somem | Diária | — | Interno |
| **Velocidade** | Valor negociado entre jogadores ÷ M média | Semanal | Queda de 30% em 4 semanas | Sim |
| **Fontes por categoria** | NPC, encomendas, cercos, eventos, começo | Horária e diária | Fonte acima de 1,5 vez a média de 7 dias sem mudança de conteúdo | Sim, agregado |
| **Drenos por categoria** | Insumos, partida, taxas, obras, luxos, Selo, ajudantes | Diária | Abaixo de 80% das fontes por 14 dias, ou acima de 105% por 30 | Sim |
| **Fração no teto** | Contas ativas que esgotaram a cota no dia | Diária | Fora de 10% a 30% | Sim |
| **Estoque de origem** | VR de origem acumulado por conta (mediana e percentil 99) | Semanal | Percentil 99 crescendo por 4 semanas | Interno |
| **Básicos contra o piso** | VR ÷ preço-base de NPC de cada básico | Diária | Abaixo de 1,3 por 14 dias | Interno e relatório |
| **Liquidez** | Spread, tempo até a execução, ordens expiradas, rodadas do Câmbio sem negócio | Diária | Spread acima de 10% nos 20 itens mais negociados; 3 rodadas vazias seguidas | Sim, agregado |
| **Concentração** | Fatia do 1% e do 10% mais ricos e Gini entre contas ativas com pelo menos 20 h de jogo ativo. Riqueza = ouro + itens a VR + Alvará a preço do Câmbio | Semanal | Fatia do 1% subindo por 3 meses; 10% mais ricos com mais de 60% | Sim, mensal |
| **Riqueza por coorte** | Mediana por idade da conta e por horas ativas | Semanal | Conta com menos de 7 dias acima do percentil 99 | Interno |
| **Itens raros** | Criados, destruídos e vivos, por item | Diária, alarme horário | Criação acima de 3 vezes a média | Interno |
| **Destruição** | VR destruído por dia, por categoria | Diária | — | Sim |
| **Premium via ouro** | Parcela dos Alvarás gastos em premium que foram comprados com ouro (Câmbio ou Troca) | Mensal | Fora de 30% a 65% | Sim |
| **Alvará como moeda paralela** | Parcela das Trocas de itens pagas em Alvará, em valor | Mensal | Acima de 10% | Interno; tendência no relatório |
| **Cartório** | Vendas, preço médio, Alvarás destruídos | Semanal | — | Sim |
| **Baú** | Aberturas, contas no teto, tiragem restante | Diária | Mais de 2% das contas pagantes no teto | Sim (tiragem ao vivo) |
| **Risco de troca** | Contas nos níveis 2 e 3, retenções, apelações, reversões | Diária | — | Relatório trimestral |
| **Disputas de pagamento** | Chargebacks e MED ÷ doações; contas suspensas e regularizadas; Alvarás contestados que já tinham sido transferidos | Diária | Acima de 0,5% | Interno; agregado no relatório |
| **Mercado cinza** | Preço do nosso ouro em reais em sites de terceiros ÷ preço via Alvará | Semanal | Abaixo de 60% do oficial | Interno; tendência no relatório |
| **Salário-teto** | Teto do topo × reais por ouro | Mensal | Acima de R$ 100 por mês líquidos | Interno |
| **Poder vindo do mercado** | Fração do equipamento em uso que foi comprada | Mensal | Acima de 50% | Interno |
| **Pagante e não pagante** | Diferença de progresso mediano | Mensal | — | Sim ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 12) |
| **Conciliação do livro-razão** | Soma dos saldos contra os lançamentos, por moeda e por item, incluindo a cota | Contínua | Qualquer divergência | Interno |

### 12.3 Disjuntores, relatório e dados abertos

- **Disjuntores** por item (congela a criação e a negociação de um item), por balcão, por moeda (congela as transferências de uma moeda) e por fluxo (suspende as transferências de Alvará quando as disputas passam do limiar). Todos são testados no alfa. [F] Desligar o comércio inteiro abriu outro dupe no New World ([04b, §3.11](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Relatório econômico mensal** público, no molde do MER do EVE: IPA, luxo, Alvará, massa, velocidade, fontes e drenos por categoria, destruição, concentração, Cartório, Baú, banimentos e o porquê de cada mudança. Com dados agregados para baixar.
- **Dados abertos:** atraso de 1 hora e agregação; nenhum dado por conta. Fluxos por conta, sinais de detecção e os limiares internos ficam só com a equipe ([04a, §6.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).

## 13. Parâmetros para a simulação (módulo 08)

| # | Parâmetro | Valor inicial | Faixa a testar | Seção |
|---|---|---|---|---|
| **População** | | | | |
| 1 | Ativos por dia por Arraial | 30.000 | 15.000 a 50.000 | 1.1 |
| 2 | Mix de perfis | Casual 50%, mediano 35%, hardcore 10%, bot 5% | Bot de 0% a 20% | 4.6 |
| 3 | Pagantes (sobrepostos aos perfis) | 8% dos ativos; ~R$ 40 doados por mês (~400 Alvarás); 50% vendidos | 4% a 15%; R$ 15 a R$ 100; 20% a 80% | 4.6 |
| 4 | Entrada de contas novas por dia | 1,5% dos ativos | 0% (90 dias sem novos) a 5% | — |
| 5 | Evasão mensal | 25% | 10% a 50% | — |
| **Teto de emissão** | | | | |
| 6 | Base do teto | 600 | 300 a 1.000 | 3.4 |
| 7 | Teto por nível (`n`) | 30 | 15 a 50 | 3.4 |
| 8 | Teto por camada de maestria (`m`) | 50 | 0 a 100 | 3.4 |
| 9 | Acúmulo da cota | 3 dias | 1 a 5 | 3.4 |
| 10 | Rampa de conta nova | 25%, 50%, 75%, 100% (dias 7, 14 e 30) | Sem rampa a 60 dias | 3.4 |
| **Fontes de ouro** | | | | |
| 11 | Preço-base de NPC | 40% do VR-alvo | 25% a 60% | 4.2 |
| 12 | Meia-vida da curva de NPC (`H`) | 300 | 150 a 600 | 4.2 |
| 13 | Ouro de encomendas (mediano, por dia) | 300 | 100 a 600 | 4.1 |
| 14 | Ouro de cercos (por dia equivalente) | 100 | 50 a 200 | 4.1 |
| 15 | Ouro do começo | 2.000 | 500 a 5.000 | 4.1 |
| **Drenos** | | | | |
| 16 | Insumo de NPC, em % do VR do produto | 12% | 5% a 25% | 4.3 |
| 17 | Indexação do insumo ao IPA | ±2% por mês | Sem indexação a ±5% | 4.3 |
| 18 | Custo de partida (mediano, por dia) | 90 | 30 a 200 | 4.3 |
| 19 | Vida útil de uma peça | 20 dias de uso | 7 a 40 | 4.5; **módulo 05** |
| 20 | Reparos até a quebra | 4 | 2 a 8 | **Módulo 05** |
| 21 | Propensão a luxo (`s`) | 1% do estoque por dia | 0,2% a 2% | 4.6 |
| 22 | Custo do Selo de mestre | 30.000 ouro + materiais | 10.000 a 100.000 | 4.3; **módulo 02** |
| 23 | Mérito: meia-vida e peso do ouro | `H = 2.000`; 50% | 1.000 a 5.000; 25% a 100% | 3.5 |
| **Taxas** | | | | |
| 24 | Bolsa: anúncio e venda | 1% + 5% | 0,5% a 2%; 3% a 8% | 5.1 |
| 25 | Feira | 6% | 4% a 8% (faixa da Câmara) | 5.2 |
| 26 | Pregão | 7% + abertura | 5% a 10% | 5.3 |
| 27 | Troca, por lado | 3% | 1% a 5% | 5.5 |
| 28 | Câmbio | 12% | 8% a 18% | 5.4 |
| 29 | Alvará e Baú lacrado na Troca | 12% (proposta) | 3% (bíblia) contra 12% | 5.6 |
| 30 | Cartório | 10% em Alvará | 6% a 15% | 7.2 |
| **Microestrutura** | | | | |
| 31 | Degrau de preço | 3 algarismos | 2 a 4 | 5.1 |
| 32 | Espera para modificar | 10 min (Bolsa), 30 min (Feira) | 5 a 60 min | 5.1 |
| 33 | Banda suave | ±15%, caminhada de 2% por hora | ±10% a ±25%; 1% a 5% | 5.1 |
| 34 | VR: janela e limite de variação | 24 h; ±5% por hora | 12 a 72 h; ±2% a ±10% | 5.1 |
| 35 | Vagas de ordem | 8 a 20 | 5 a 30 | 5.1 |
| 36 | Limite de compra de itens críticos | 3 dias de consumo a cada 4 h | 1 a 7 dias | 5.1 |
| **Câmbio e Alvará** | | | | |
| 37 | Alvarás por real doado | 10 (1 Alvará ≈ R$ 0,10) | Pacotes com bônus de 0% a 15% | 6.1; **módulo 11** |
| 38 | Premium de 30 dias, em Alvarás | 200 | 149 a 249 | 6.1; **módulo 11** |
| 39 | Mecanismo do Câmbio | Leilão de chamada a cada hora | Contínuo; fila administrada; rodadas de 15 min a 4 h | 5.4 |
| 40 | Banda | ±3% por rodada; ±10% por dia | ±1% a ±5%; ±5% a ±20% | 5.4 |
| 41 | Tamanho de ordem e limite de compra | 10 a 2.000 Alvarás por ordem; 2.000 por conta a cada 7 dias | 500 a 10.000 por semana | 5.4 |
| 42 | Preço de abertura do Alvará | 75 ouro (premium de 30 dias ≈ 15.000) | 40 a 150 | 1.2 |
| 43 | Carência por lote | Pix 72 h; cartão 7 dias; risco até 30 dias | 0 a 14 dias | 6.3 |
| 44 | Teto de doação | R$ 300 por mês | R$ 150 a R$ 1.500 | 6.5; **módulo 11** |
| 45 | Contestação no banco | 0,3% das doações contestadas; 50% das contas suspensas regularizam em 30 dias; 60% dos Alvarás contestados já transferidos | 0% a 1,5%; 0% a 100%; 0% a 100% | 6.4 |
| 46 | Alvarás guardados | 20% dos doados ficam parados mais de 30 dias | 0% a 60% | 6.2 |
| **Cartório e Baú** | | | | |
| 47 | Vendas no Cartório | 1% das contas ativas por mês | 0,3% a 3% | 7 |
| 48 | Condições para vender | 30 dias + 40 h ativas | 7 a 90 dias; 10 a 100 h | 7.4 |
| 49 | Lance inicial mínimo no Cartório | 300 Alvarás | 100 a 1.000 | 7.1 |
| 50 | Preço do Baú | 40 Alvarás | 20 a 80 | 8.1; **módulo 11** |
| 51 | Garantia do Baú | Raro a cada 10; Muito raro a cada 60 | 5 a 20; 30 a 120 | 8.3 |
| 52 | Teto de abertura | 40 por mês | 10 a 100 | 8.4 |
| 53 | Cosméticos aplicados por mês (saem do mercado) | 40% dos novos | 10% a 80% | 8.2 |

**Critérios de saúde (a simulação passa se, depois do 6º mês, em todos os cenários):**
- IPA entre 0% e 8% ao ano;
- drenos entre 85% e 95% das fontes;
- 10% a 30% das contas no teto;
- premium de 30 dias entre 12 e 20 dias de renda mediana;
- massa por conta ativa entre 2 e 3 premiums de 30 dias, em ouro;
- 10% mais ricos com menos de 60% da riqueza;
- premium via ouro entre 30% e 65%;
- Trocas de itens pagas em Alvará abaixo de 10% do valor;
- básicos acima de 1,3 vez o piso de NPC;
- salário-teto líquido do topo abaixo de R$ 100 por mês.

**Cenários de estresse:**
1. Crescimento normal.
2. 90 dias sem jogador novo ([G03](../01-pesquisa/fichas/G03-axie-infinity-e-web3.md)).
3. Evasão de 50%.
4. Bots em 20% das contas, com identidades de terceiros.
5. Onda de pagantes, como o MWI depois do Steam ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
6. Dupe de 20% da massa em 24 horas (teste do disjuntor).
7. Câmara leva a Feira a 4% e depois a 8%.
8. A Travessia puxa 40% da atividade.
9. Sem a proposta de 12% na Troca (mede a fuga do Câmbio).
10. Sem o crédito dos insumos no portão (mede o peso da regra sobre os artesãos).
11. Onda de contestações: 1,5% das doações contestadas por 30 dias. Mede os Alvarás sem lastro em circulação, a massa congelada nas contas suspensas e o efeito no preço do Alvará.
12. Despejo do estoque guardado: 50% dos Alvarás parados vendidos no Câmbio em 7 dias.

## 14. A reconciliar com outros módulos

| Módulo | O que depende dele |
|---|---|
| **02 Progressão** | `n` por perfil; camadas de maestria; custo do Selo de mestre; vagas de ordem por progressão; custo da troca de ofício mestre |
| **03 Personagem** | Conta vaga no Cartório; custos de ajudantes |
| **04 Combate** | Combate idle sem ouro; consumíveis por luta; orçamento de prêmios de cercos e chefes |
| **05 Itens** | VR-alvo de lançamento por item e tier; vida útil, reparos e quebra; qualidade nos livros da Bolsa; cosméticos de jogador frente ao Baú |
| **06 Ofícios** | Receitas com insumo de NPC e seus nomes; lista de itens críticos; produção por hora de fila; oficina de reforço |
| **09 Social** | Mérito (curva e uso); poderes e faixas da Câmara; banco da guilda; encomendas e obras |
| **10 Live ops** | Marcos e suprimentos da Travessia; relíquias; festas do Arraial; série do Baú por Era; benefícios das obras sem multiplicar fontes |
| **11 Monetização** | Alvarás por real e pacotes de doação; preço do premium e do Baú em Alvarás; conteúdo do premium; teto de doação |
| **13 Anti-abuso** | Sinais e níveis do risco de troca; grafo; carência por lote; contestação (suspensão até regularizar, no lugar da dívida em ouro) e revisão de fraude organizada; sanções de exploit; segurança do Cartório |
| **14 Arte e UI** | Telas da cota e da volta; Bolsa com posição na fila; rodada do Câmbio; Troca com desequilíbrio; pré-vitrine da Feira |

## 15. Propostas de mudança na bíblia

1. **Alvará na Troca paga 12% do preço do Câmbio,** e não 3%, para não contornar o Câmbio (seção 5.6).
2. **Baú lacrado paga 12%** em qualquer venda ou Troca, pela mesma razão (seções 5.6 e 8.1).
3. **Esclarecer a taxa da Troca:** 3% do valor de mercado do que cada lado recebe, pago por quem recebe. Uma troca equilibrada custa ~6%, como os balcões; um presente, 3% (seção 5.5).
4. **Ouro com duas casas decimais** (seção 1.2).
5. **Glossário:** incluir "valor de referência (VR)" e "cota" (o saldo disponível do teto de emissão) (seções 1.2 e 3).
6. **Os assombrados não carregam moeda:** o combate idle não emite ouro (seção 2.2).
7. **Pequenas taxas de anúncio:** sinal de 0,5% na Feira (abatido da taxa de venda), abertura no Pregão (50 ouro + 0,5%) e anúncio no Cartório (2.000 ouro) (seções 5.2, 5.3 e 7.2).
8. **Mérito em duas contas** (vitalício e da Era), que fica com a conta, e não com o personagem, no Cartório (seções 2.2 e 7.3).
9. **Câmbio por leilão de chamada a cada hora** (seção 5.4).
10. **Esclarecer a taxa de anúncio da Bolsa:** o 1% vale para a ordem que fica no livro; a ordem que executa na hora paga só a parte dela (5% se vende, nada se compra). Assim o custo de um negócio é ~6% para qualquer combinação de lados (seção 5.1).

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Teto visto como castigo** | O produtor pesado vê a cota acabar e sente que perde produção, a queixa nº 1 dos idles online | Portão de saída (nada nasce preso); acúmulo de 3 dias; crédito dos insumos; excedente que vira obra e Mérito na tela de volta; meta de 10% a 30% no teto |
| **Teto frouxo demais** | Contas verificadas de terceiros ("laranjas") farmam até o teto e vendem ouro por Pix | Salário-teto abaixo de R$ 100 por mês líquidos; rampa de 30 dias; ~90 dias até o nível 100; grafo de funil; cenário 4 da simulação |
| **Bug no portão vira dupe** | Um erro no crédito dos insumos ou na reserva de cota emite valor negociável sem limite | Cota no livro-razão com conciliação contínua; testes de propriedade na Fase 5; disjuntor por item |
| **Deflação dos básicos** | A produção de 24 horas cresce com as contas, e minério e madeira caem até o piso do NPC | Obras sem limite; encomendas elásticas; festas de consumo; alarme de 1,3 vez o piso |
| **Espiral dos insumos indexados** | O IPA sobe, o insumo sobe, o custo de produzir sobe e o IPA sobe de novo | Insumo fora da cesta do IPA; indexação parcial, com teto de ±2% por mês; o insumo mais caro também destrói mais ouro (efeito contrário); testar na simulação |
| **Câmbio raso** | Poucos vendedores no começo, rodadas vazias e preço parado ou aos saltos | Leilão de chamada; banda por rodada; rodadas mais espaçadas se preciso; preço de abertura sem garantia, só como referência |
| **Alvará dispara em ouro** | Inflação de lançamento, como no GW2, ou o gasto na loja e o Cartório destruindo Alvarás tiram a rota do não pagante | Lançar apertado; leitura junto da cesta; meta de 12 a 20 dias de renda para o premium; destruição medida em separado |
| **Alvará despenca** | Onda de pagantes, teto de doação alto demais ou um estoque guardado despejado de uma vez, e o pagante não vê valor em vender | Teto de doação; nenhum Alvará grátis; novos usos sem poder ([05d, §4.2](../01-pesquisa/05d-rmt-recomendacao.md)); estoque parado no painel; banda do Câmbio; cenário 12 |
| **Alvará vira moeda paralela** | Divisível e livre, ele passa a cotar os itens caros entre jogadores, fora do ouro (o pergaminho do IdleMMO) | Balcões só em ouro; 12% em toda troca de Alvará; índice em ouro; alarme acima de 10% das Trocas de itens pagas em Alvará |
| **Fraude com cartão roubado sai de graça** | A suspensão não pesa para quem abandona a conta, e os Alvarás que ela já transferiu ficam sem lastro | Carência por lote; teto de doação; disjuntor por taxa de disputas; revisão das contas receptoras em padrão de fraude (módulo 13); cenário 11 |
| **Suspensão contestada** | A FTC condenou a Epic por bloquear contas inteiras depois de contestações; o jogador honesto que contestou por engano perde o acesso a tudo | Suspensão reversível ao regularizar, com tudo devolvido; nada tirado de terceiros de boa-fé; aviso claro antes da doação; **validar com advogado** (CDC, art. 51) |
| **"Doação" sem reembolso questionada** | O rótulo não afasta o direito de arrependimento (CDC, art. 49), pode atrair ITCMD e conflitar com as regras dos provedores de pagamento | Alerta registrado no PROGRESSO; risco assumido pelo Gabriel; **validar com advogado** |
| **Pay-to-win de capital** | O pagante vende Alvarás e compra o mercado inteiro de ouro | Teto de doação; limite de compra por janela; o mercado negocia insumos e equipamento que se gasta; diferença pagante × não pagante publicada |
| **Arbitragem entre canais** | Se as propostas 1 e 2 forem recusadas, o Alvará passa a ser trocado por ouro na Troca a 6%, e o índice e o dreno do Câmbio somem | Cenário 9 da simulação; publicar o índice também com as trocas de Alvará na Troca |
| **Troca livre como lavanderia** | Mulas, cartão roubado, conta invadida esvaziada por presentes | Carência S2 por lote; risco de troca com retenção nos padrões de fraude; grafo; suspensão da conta que contesta, até regularizar |
| **Cartório vira fábrica ou rota de roubo** | Personagens upados por automação; conta invadida vendida | 40 horas ativas; uma venda a cada 60 dias; aviso de 72 horas; Alvarás do vendedor retidos 7 dias; reversão em 30 dias |
| **Baú lido como jogo de azar** | Pagamento + sorte + prêmio com valor em dinheiro; gateway ou loja recusa; ação judicial | Conteúdo sem poder; chances e tiragem publicadas; tetos; interruptor por país que prende o conteúdo; **validar com advogado** (LCP, art. 50; Lei 15.211/2025, art. 20); risco assumido pelo Gabriel |
| **Baú como canal de lavagem** | Cartão roubado → Alvarás → Baús → ouro | Baú herda a carência do lote; taxa de 12%; teto de compra |
| **Golpes no RMT informal** | O estúdio não intermedia, e o jogador lesado chega ao suporte sem solução | Termos claros (S4); avisos na Troca; o Câmbio e o Cartório como rotas seguras e baratas |
| **Câmara capturada** | Uma guilda rica elege vereadores e leva a Feira ao extremo da faixa | Faixa estreita, 1 ponto por mandato, 30 dias de aviso; política monetária fora do voto |
| **Concentração por idade de conta** | A renda acompanha o tempo de calendário, e quem chegou primeiro domina | Teto linear; drenos progressivos e de topo; Mérito da Era; Travessia como recomeço; concentração por coorte no painel |
| **Medir errado** | Gini dominado por contas abandonadas; erro no painel, como os 9% do MER | Corte por 20 horas ativas; itens a VR; conciliação contínua; metodologia publicada |
| **Constituição rígida demais** | Uma calibragem ruim no lançamento não cabe nas regras | Banda revista no 90º dia; artigo 11 de emergência; histórico de versões |
| **Conflito de interesse** | O estúdio aperta drenos ou o Baú para vender mais Alvará | Taxas sempre destruídas; contrato público; diferença pagante × não pagante publicada; a constituição vale também para a monetização |

