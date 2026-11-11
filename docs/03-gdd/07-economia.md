# GDD 07 — Economia

> **Escopo.** As quatro moedas, o teto de emissão negociável, a tabela de fontes e drenos de ouro e de itens, os cinco canais de troca (Bolsa, Feira, Pregão, Câmbio e Troca), o Alvará, o Cartório, o Baú do Mascate, as alavancas contra inflação e manipulação, a constituição econômica do Arraial, o painel diário e a lista de parâmetros para a simulação (módulo 08).
> **Base:** [bíblia](00-biblia.md) (glossário, seção 6.6 e regras da seção 8), [conceito](../02-conceito.md) (piso P1–P12), [PROGRESSO](../PROGRESSO.md) (decisões do Gabriel), [04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), [05d](../01-pesquisa/05d-rmt-recomendacao.md), [00-sintese](../01-pesquisa/00-sintese.md) e as leis 15 a 22 do [02](../01-pesquisa/02-padroes-matriz-leis.md).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação.** Onde ele depende de outro módulo escrito em paralelo, aparece "a reconciliar com o módulo X".
> **Decisões que este módulo não reabre:** Alvará e ouro transferíveis livremente; RMT informal não intermediado nem proibido; Cartório desde o lançamento; Baú comprável com Alvará e negociável por ouro, com conteúdo em itens; jogo 18+ com idade verificada; sem parecer jurídico (risco assumido pelo Gabriel). Onde uma dessas decisões cria tensão com a pesquisa, o módulo registra a tensão e desenha a mitigação, sem mudar a decisão.

## 0. Resumo

1. **O ouro só nasce em quatro lugares, todos com orçamento:** venda a NPC (curva logarítmica por conta e por dia), encomendas, cercos e eventos com inscrição, e o começo do jogo. O combate idle solta itens, nunca moedas. Quem controla essas quatro torneiras controla a emissão (seção 4).
2. **O teto de emissão é um portão de saída, não uma marca no item.** O jogador produz à vontade e usa tudo o que produz. O teto limita só o valor que ele mesmo criou e que sai da conta por dia (venda, Troca ou NPC). Ele cresce de forma linear com a progressão, acumula por até 3 dias e começa reduzido nas contas novas. O excedente fica na conta para uso próprio ou vira obra e Mérito (seção 3).
3. **O dreno principal é o consumo embutido:** insumos vendidos por NPC em toda receita de T2 para cima e na partida das expedições, indexados ao IPA, mais desgaste e quebra. As taxas são freio, não âncora (seções 4 e 9).
4. **Toda forma de mover valor custa o mesmo:** cerca de 6% para trocar item por ouro em qualquer canal, 12% para converter Alvará em ouro em qualquer canal e 3% para presentear. Sem isso, o comércio foge para o canal mais barato e o índice perde o sentido (seção 5.6).
5. **O Câmbio forma o preço do Alvará num leilão de chamada a cada hora:** um preço único por rodada, com banda de ±3% por rodada e ±10% por dia. Com 2 a 5 mil simultâneos, o Câmbio terá poucas operações por hora. Um livro contínuo seria raso e premiaria velocidade, e uma fila administrada poria o estúdio como culpado de cada alta. O leilão de chamada junta a liquidez, tira a vantagem do clique e gera o índice (seção 5.4).
6. **Cartório:** vende o personagem, não o cidadão. Vão junto o progresso, os ajudantes, a casa, os cosméticos aplicados e o equipamento em uso, que fica preso ao comprador por 30 dias. Ficam com o vendedor o Mérito, o ouro, o Alvará e o armazém. A taxa de 10% é paga em Alvará e destruída. O anúncio só abre depois de um aviso de 72 h ao dono da conta (seção 7).
7. **Baú do Mascate:** custa 1/5 de Alvará, publica a tabela de chances com garantia, tem tiragem máxima para o topo e teto de compra e de abertura por mês. Seu conteúdo é negociável até ser aplicado, e aplicar prende o item à conta, o que funciona como dreno de cosméticos (seção 8).
8. **Constituição pública de 14 artigos:** a meta do IPA vai de 0% a +8% ao ano. A Câmara mexe só na Feira, nas prioridades das encomendas e na escolha da obra. Política monetária não vai a voto (seção 11).

## 1. Premissas e escala

### 1.1 População de referência

| Premissa | Valor [H] | Por quê |
|---|---|---|
| Simultâneos por Arraial | 2 a 5 mil (bíblia 6.7) | Alvo do plano de negócio ([08](../01-pesquisa/08-mercado-posicionamento.md)) |
| Jogadores ativos por dia (DAU) | 20 a 40 mil (5 a 10 vezes o pico de simultâneos) | Sessões curtas de 5 a 15 min, 2 a 6 vezes por dia (bíblia 6.1), dão muita gente diferente por dia para cada vaga simultânea. **A calibrar no alfa.** |
| Contas que pagam algo no mês | 6% a 10% do DAU | Faixa de trabalho; módulo 11 |
| Perfis da simulação | casual, mediano, hardcore, pagante, bot (bíblia, módulo 08) | Definidos na seção 4.6 |

### 1.2 Escala do ouro

- **O ouro tem duas casas decimais** (centésimos), no livro-razão e na tela. Os bens básicos valem de poucos centésimos a dezenas de ouro, e uma escala inteira deixaria o degrau de preço grosseiro demais nos itens baratos (seção 5.1). O brasileiro já pensa em reais e centavos. **[proposta de mudança na bíblia]**, que não fixa a unidade.
- **Inteiros de 64 bits em centésimos** em todo saldo e toda ordem. O OSRS precisou liberar ofertas acima de 2,147 bilhões em 2026 ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md), via [04a, §5.3](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Âncora relativa, não absoluta.** O número que importa é quanto o Alvará custa em dias de renda, não em ouro. Meta [H]: **o Alvará vale de 12 a 20 dias das fontes brutas de ouro de um jogador mediano** (seção 4.6). Com a renda mediana de ~970 ouro por dia, isso dá um preço inicial esperado de ~15.000 ouro (faixa a testar: 8.000 a 30.000).
- **Valor de referência (VR):** o preço de mercado estimado de cada item, recalculado de hora em hora (seção 5.1). Taxas, teto de emissão, Troca e painel usam o VR, nunca o valor de NPC. É a correção do erro que o IdleMMO admitiu: um único número (o valor de NPC) controlava a emissão, a base do imposto e o piso de preço ([C04](../01-pesquisa/fichas/C04-idlemmo.md), via [04a, §5.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). **[proposta de mudança na bíblia]:** incluir "valor de referência (VR)" no glossário.

### 1.3 Três camadas de valor

| Camada | O que contém | Regra | Referência |
|---|---|---|---|
| **Progresso preso** | Níveis, maestria, Selos, ajudantes, filas, offline, Mérito, Marcos | Pode crescer sem limite; nunca vira negociável por compra | P1; lei 16; [04a, decisão 1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md) |
| **Bens negociáveis** | Ouro, materiais, consumíveis, equipamento, cosméticos de jogador e do Baú | Unidades que cabem na cabeça; emissão com teto por conta; tudo se gasta | P2, P3 |
| **Alvará** | O token | Nasce só de compra em reais; nunca dá renda, XP ou poder | Bíblia, seção 5 |

## 2. Moedas

### 2.1 Quadro

| Moeda | O que faz | Como entra | Como sai | Negociável? |
|---|---|---|---|---|
| **Ouro** | Moeda de todos os balcões e das taxas; paga insumos de NPC, serviços, obras e luxos | Venda a NPC, encomendas, cercos e eventos com inscrição, missões do começo (seção 4.1) | Insumos de NPC, custo de partida, taxas, obras, luxos, Selo, ajudantes (seção 4.3) | **Sim, livremente:** balcões e Troca, sempre com taxa destruída |
| **Alvará** | 30 dias de conveniência (acumuláveis), saldo de cosméticos, Baús na loja, lances no Cartório | Só compra em reais na loja web (Pix e cartão). Nunca de graça, nunca como prêmio | Consumido (conveniência, cosméticos, Baú) ou destruído na taxa do Cartório | **Sim, livremente,** depois da carência por meio de pagamento (seção 6.3). Troca por ouro só no Câmbio ou na Troca |
| **Marcos** | Moeda da Travessia: suprimentos temporários, melhorias de posto, cosméticos e títulos da temporada | Atividades da Travessia (expedições na Bruma, descobertas, chefes de região) | Gastos na Travessia; no fim da temporada, a sobra vira uma recompensa cosmética fixa por faixa, nunca ouro | **Não.** Presos à conta e à temporada; zeram ao fim |
| **Mérito** | Títulos de cidadania e prioridade nas recompensas da cidade; não pesa no voto | Contribuição para obras, nota em encomendas, defesa nos cercos | Não se gasta. O **Mérito vitalício** só cresce (títulos). O **Mérito da Era** zera a cada Era (prioridade) | **Não.** Preso à conta, e fica com a conta no Cartório (seção 7.3) |

**Saldo de cosméticos.** O Alvará pode virar saldo da loja, preso à conta, para comprar cosméticos de valor fracionado. O nome e a tabela ficam com o módulo 11. O saldo nunca volta a ser Alvará e nunca paga outro jogador, para que não exista uma segunda moeda negociável (o pergaminho do IdleMMO, [05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)).

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

[H] Com o Alvará a R$ 19,90 e a 15.000 ouro, 1 ouro vale ~R$ 0,0013. Uma conta mediana que vendesse todo o teto renderia ~R$ 2,80 por dia (~R$ 84 por mês) a preço oficial. Uma conta no topo renderia ~R$ 163 por mês brutos e ~R$ 105 líquidos de insumos e desgaste (~35% de custo). No RMT informal, o ouro costuma sair abaixo do oficial: no OSRS, a 45% do Bond ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)). Isso deixa o salário de uma conta no topo entre R$ 50 e R$ 75 por mês.
- **Restrição de desenho [H]:** o salário-teto líquido de uma conta no topo fica **abaixo de ~R$ 100 por mês a preço oficial.** Acima disso, alugar a identidade verificada de um terceiro (o "laranja") passa a compensar.
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
| **Pagante** | Mediano que compra 2 Alvarás por mês, consome 1 e vende 1 no Câmbio | 2.100 |
| **Bot** | Conta verificada de terceiro, 3 filas, vende até o teto todo dia, sem luxo nem obra | até 4.100 |

**Modelo de bolso por conta ativa** ([04a, §5.2](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)): `dM/dt = (1 − a) × E − (τ × V + s) × M`, com equilíbrio `M* = (1 − a) × E ÷ (τ × V + s)`.

- **Exemplo (mediano):**
  - Emissão: `E = 970` por dia.
  - Drenos de atividade (insumos, partida, ajudantes): 530, o que dá `a = 0,55`.
  - Comércio e Câmbio: `τ × V ≈ 0,0018` por dia (taxa efetiva de ~6% sobre um giro de ~2% da massa por dia, mais o Câmbio).
  - Luxos, obras em ouro e Selo: `s ≈ 1%` do estoque por dia.
  - Resultado: `M* = 0,45 × 970 ÷ 0,0118 ≈ 37.000` de ouro por conta ativa (~2,5 Alvarás), com constante de tempo de ~85 dias. Uma conta que começa com 2.000 chega a ~24.000 no dia 85.
- **Três conclusões:**
  1. **A alavanca é `a`:** cada 10 pontos a mais de consumo embutido cortam ~20% de `M*`.
  2. **`s` encurta o caminho até o equilíbrio,** mas é comportamental: depende de os luxos serem desejados. É o parâmetro mais incerto do modelo.
  3. **`τ` é freio.** Dobrar todas as taxas move `M*` menos de 15%.
- **Meta [H]:** `M* ÷ preço do Alvará` entre 2 e 3 por conta ativa. A riqueza grande deve estar em itens, que se gastam, não em ouro parado.

**Conta de guardanapo do Câmbio [H]:**
- **Volume:** com 30 mil ativos por dia, 8% de pagantes, 2 Alvarás por pagante por mês e metade vendida no Câmbio, são ~2.400 Alvarás por mês, ou **~3 por hora**.
- **Ouro:** o volume é de ~36 milhões por mês, e os 12% destroem ~4,3 milhões por mês, **~0,5% das fontes**. O Câmbio é um dreno pequeno; seu papel é o índice e a rota do não pagante.
- **Rota do não pagante:** ~50% da conveniência viria de ouro, dentro da faixa-alvo de 30% a 65% do [05d, §6](../01-pesquisa/05d-rmt-recomendacao.md) (65,2% no IdleMMO).
- **Pagante:** recebe ~13.200 de ouro por Alvará, o equivalente a ~14 dias de fontes de um mediano.

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
| **Câmbio** | Alvará ↔ ouro | Leilão de chamada a cada hora | 12% de quem vende | Estúdio |
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

| Opção | Como funciona | Com 2 a 5 mil simultâneos (~3 operações por hora, seção 4.6) |
|---|---|---|
| (A) Livro contínuo | Como o PLEX do EVE | Raso: uma conta com 20 Alvarás move o preço, o spread fica largo e quem clica primeiro leva. Manipulável |
| (B) Fila administrada | Como o WoW Token: o sistema fixa a cotação pela fila de vendedores e pela demanda | Execução imediata, mas o preço é "do estúdio", e cada alta vira culpa da casa, como os tetos do Black Desert ([04b, §1.8](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). Se o vendedor trava a cotação e o comprador paga outra, a diferença cria ou destrói ouro fora do livro-razão |
| **(C) Leilão de chamada a cada hora ← recomendado** | Os jogadores deixam ordens com preço limite, e a cada hora o sistema calcula **um preço único** que maximiza o volume, dentro de uma banda | O preço é formado pelos jogadores, a liquidez de uma hora se junta num instante só, a velocidade não vale nada e cada rodada já é o índice |

**Por que (C).** É um livro de ordens, como queria o [04b, §5.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md), compensado em rodadas, e tem a estabilidade que o [05d, §4.1](../01-pesquisa/05d-rmt-recomendacao.md) buscava na fila administrada. A divergência entre os dois estudos fica resolvida. [F] Na literatura de desenho de mercado, Budish, Cramton e Shim propõem trocar o livro contínuo por leilões em lote frequentes. Eles mostram que o lote anula o valor de pequenas vantagens de velocidade e transforma a competição por rapidez em competição por preço ([QJE 130(4), 2015](https://econpapers.repec.org/RePEc:oup:qjecon:v:130:y:2015:i:4:p:1547-1621); [versão de trabalho](https://conference.nber.org/conf_papers/f69665.pdf)). [H] No nosso caso, o lote serve menos contra robôs de milissegundo e mais para juntar uma liquidez escassa. Para um idle, esperar até uma hora não custa nada.

**Regras [H].**
- **Ordens:** compra (quantidade e preço máximo, com o ouro reservado) e venda (quantidade e preço mínimo, com o Alvará reservado). Há ordem "a qualquer preço dentro da banda". No máximo 10 Alvarás por ordem e 3 ordens abertas por conta.
- **A rodada:** a cada hora cheia, o sistema escolhe o preço `P*` dentro da banda que maximiza o número de Alvarás negociados. No empate, fica o menor desequilíbrio e depois o preço mais perto da rodada anterior. Todos negociam a `P*`: quem ofereceu mais recebe a diferença de volta, e quem pediu menos recebe mais. A prioridade é por preço e depois por antiguidade. O que sobra fica para a rodada seguinte.
- **Banda:** ±3% da rodada anterior; no máximo ±10% em 24 horas. Ao bater no limite diário, o Câmbio segue funcionando, mas o painel avisa e a equipe revisa (disjuntor da seção 10).
- **Taxa:** 12% de `P*`, descontada de quem vende e destruída. O preço publicado é o que o comprador paga.
- **Limite de compra:** 10 Alvarás por conta a cada 7 dias, contra o cornering e o entesouramento especulativo. É uma regra do balcão, não da transferência: a Troca continua livre. Não há limite de venda, porque o teto de gasto em reais já limita a oferta de cada pagante (seção 6).
- **O estúdio nunca compra nem vende no Câmbio,** e isso fica escrito na constituição.
- **Frequência:** de hora em hora no lançamento. Se passar de 30 Alvarás por rodada de forma sustentada, as rodadas podem ficar a cada 15 minutos.

**Exemplo calculado.** A rodada anterior saiu a 15.000, e a banda vai de 14.550 a 15.450.

| Ordens | Quantidade | Limite |
|---|---|---|
| Compra | 6 | até 15.300 |
| Compra | 4 | até 15.000 |
| Compra | 5 | até 14.600 |
| Venda | 3 | a partir de 14.500 |
| Venda | 5 | a partir de 14.900 |
| Venda | 4 | a partir de 15.200 |

- Volume por preço: a 14.600 negociam-se 3; de 14.900 a 15.000, 8 (há 10 compradores e 8 vendedores); a 15.200, 6.
- O volume máximo, 8, sai a 14.900 ou a 15.000, com o mesmo desequilíbrio. O desempate pelo preço mais perto da rodada anterior dá **`P* = 15.000`**.
- Os 6 compradores a 15.300 levam tudo e recebem 300 de volta por Alvará. Dos 4 a 15.000, os 2 mais antigos levam.
- Cada vendedor recebe `15.000 × 0,88 = 13.200`, e a rodada destrói `8 × 1.800 = 14.400` de ouro.

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
| **Alvará na Troca** | Quem recebe paga **12% do preço do Câmbio** em ouro. **[proposta de mudança na bíblia]** (seção 5.6) |
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

**O conflito com a bíblia.** Pela bíblia, a Troca custa 3% e o Câmbio, 12%. Se um Alvará pudesse ser trocado por ouro na Troca a 6% no total (3% + 3%), o Câmbio seria contornado, o dreno cairia à metade e o índice passaria a medir só a parte do mercado que ainda usasse o balcão. O mesmo vale para o Baú lacrado, que é Alvará em outra forma: 1 Alvará compra 5 Baús, que voltariam a ouro na Bolsa por 6%. **[proposta de mudança na bíblia]:** o Alvará e o Baú lacrado pagam 12% em qualquer canal. Isso não limita a transferência; só a deixa com o mesmo preço em todo lugar.

## 6. Alvará

### 6.1 Emissão

- **Só por compra em reais**, na loja web (Pix e cartão), por conta verificada (todas são, P8). O preço em reais fica com o módulo 11 (faixa a testar: R$ 14,90 a R$ 24,90; bíblia 6.7).
- **Nunca de graça:** não é prêmio de evento, de ranking nem de Travessia. Compensação por manutenção vem em dias de conveniência presos, nunca em Alvará. [F] O PLEX caiu de ~6 para ~4,5 milhões de ISK com distribuição gratuita e a unificação do mercado ([05d](../01-pesquisa/05d-rmt-recomendacao.md), "Como isso pode dar errado").
- **Item, não moeda:** unidade indivisível, com número de série no livro-razão ([05d, §4.1](../01-pesquisa/05d-rmt-recomendacao.md)).

### 6.2 Usos

| Uso | Efeito | Observação |
|---|---|---|
| **Consumir** | 30 dias de conveniência, acumuláveis | O conteúdo da conveniência fica com o módulo 11. **Nunca:** desconto de taxa, teto ou cota maior, filas, offline, vagas de ordem, renda, XP ou poder ([05d, §5.2](../01-pesquisa/05d-rmt-recomendacao.md): desconto de taxa favorece quem já é rico, [F08](../01-pesquisa/fichas/F08-black-desert.md)) |
| **Converter em saldo de cosméticos** | Saldo preso à conta, para itens de valor fracionado | Não volta a ser Alvará (seção 2.1) |
| **Comprar Baús** | 1 Alvará = 5 Baús (seção 8) | O Baú herda a carência do Alvará |
| **Dar lance no Cartório** | Pagamento de personagens (seção 7) | Só com Alvarás fora da carência |
| **Vender no Câmbio** | Ouro de outro jogador, menos 12% | Seção 5.4 |
| **Trocar na Troca** | Por qualquer coisa | 12% do preço do Câmbio, pago por quem recebe (proposta, seção 5.6) |

### 6.3 Carência por meio de pagamento (salvaguarda S2)

Antes da **primeira transferência** (Câmbio, Troca, lance no Cartório), cada Alvará cumpre uma carência que depende do meio de pagamento. Durante a carência, ele pode ser consumido, mas não transferido. Depois dela, circula livremente para sempre (decisão do Gabriel).

| Situação | Carência [H] | Referência |
|---|---|---|
| Pix, conta com histórico limpo | 72 horas | [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md) |
| Cartão, conta com histórico limpo | 7 dias | Coins do Tibia transferíveis conforme o meio de pagamento ([F04](../01-pesquisa/fichas/F04-tibia.md)) |
| Primeira compra da conta, qualquer meio | 7 dias | Trava de 72 h do MWI; retenção de 7 dias da Steam ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)) |
| Compra fora do padrão da conta ou com sinal de risco | Até 30 dias | GGMAX retém de 7 a 30 dias ([05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)) |

- [F] Nenhuma carência cobre o prazo inteiro de contestação: cerca de 120 dias no cartão e até 80 dias no MED do Pix ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)). [H] A carência barra a fraude rápida, e o resto fica com a regra de reversão.
- **Baús comprados com Alvará em carência** e o conteúdo deles herdam a carência que falta: não se vendem nem se trocam antes do fim.

### 6.4 Regra de reversão (chargeback e MED)

Adaptada do [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md) à transferência livre; publicada antes do lançamento.
1. **Alvará contestado ainda na conta:** só ele é revogado. A conta não é bloqueada por inteiro sem processo, o que a FTC condenou no caso Epic ([05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §3.1).
2. **Alvará contestado e já transferido:** quem o recebeu de boa-fé fica com ele, e o estúdio absorve a perda. A conta que comprou e contestou recebe uma **dívida em ouro** igual ao preço do Câmbio no dia, perde o acesso aos balcões até quitar e é banida se houver fraude. O ouro recebido é rastreado no livro-razão e congelado onde ainda for identificável nas contas do fraudador.
3. **Disjuntor:** se as disputas passarem de um limiar interno (bem abaixo do 1,5% das bandeiras, [05c](../01-pesquisa/05c-rmt-legal-global-pagamentos.md), §5.1), a venda de Alvará no Câmbio e na Troca é suspensa, e a compra para consumo continua.
- **Validar com advogado:** a dívida em ouro e o congelamento diante do CDC (Lei 8.078/1990, art. 51, cláusulas abusivas) e do arrependimento de 7 dias (art. 49).

### 6.5 Teto de gasto em reais

- **Padrão igual para todos [H]:** R$ 300 por mês somando todas as compras, o que dá ~15 Alvarás.
- **Aumento** por pedido, até R$ 1.500 por mês, com 7 dias de espera. **Limites pessoais menores** a qualquer hora. Esfriamento de 24 horas depois de compra acima de R$ 150. Painel de gasto ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 10).
- **Papel econômico:** o teto limita a oferta de Alvarás por pagante e, com ela, o "pay-to-win de capital", em que quem paga compra liquidez para dominar livros ([04a, §3.4](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), mecanismo 5).
- **Os valores ficam com o módulo 11.**

### 6.6 Índice público do Alvará

- **No jogo e em dados abertos, com atraso de 1 hora:**
  - preço de cada rodada do Câmbio (série horária e diária, com abertura, máxima, mínima e fechamento);
  - volume e ordens em espera dos dois lados;
  - ouro destruído pela taxa.
- **Semanal:**
  - Alvarás consumidos, destruídos no Cartório e em circulação, agregados;
  - parcela da conveniência obtida com ouro.
- **Leitura obrigatória ao lado da cesta (IPA) e da massa monetária:** o preço do Alvará mede também a oferta e a demanda do próprio Alvará. [F] PLEX, point do Torn e Bond do OSRS caíram com a moeda crescendo ([04a, §3.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). Aqui, a taxa do Cartório, que destrói Alvarás, empurra o preço para cima sem que os bens mudem.

### 6.7 Quatro perguntas (Alvará livre)

- **Referência:** Tibia Coins transferíveis e Premium Scrolls ([F04](../01-pesquisa/fichas/F04-tibia.md)); PLEX, Bond e WoW Token. *Diferença:* livre em qualquer canal, mas com a mesma taxa em todos.
- **Problema:** capturar a demanda de RMT pelo canal oficial e dar ao não pagante uma rota à conveniência (lei 19).
- **Comportamento:** o pagante financia o tempo do não pagante; o Alvará vira presente entre amigos.
- **Risco:** o Alvará livre circulando sem limite se aproxima de "ativo virtual" (Lei 14.478/2022, art. 3º), ponto amarelo do [00-sintese](../01-pesquisa/00-sintese.md). **Validar com advogado**; risco assumido pelo Gabriel. Também pode virar reserva de valor especulativa. Mitigação: limite de compra no Câmbio, taxa de 12% em todo canal e nenhuma emissão grátis.

## 7. Cartório (bazar de contas)

### 7.1 Formato

- **Leilão em Alvará** de 3 ou 7 dias, com lance inicial de pelo menos 5 Alvarás, incremento de 1 Alvará e lance máximo automático.
- **Prorrogação** de 30 minutos para lance no fim, até 24 horas no total.
- **Garantia de 100%** em Alvarás fora da carência; lances irrevogáveis.
- [F] O Char Bazaar do Tibia funciona com taxa de 50 TC, comissão de 12%, pagamento só com coins transferíveis e reserva de 10% do lance. Em 2025 movimentou 721,4 milhões de TC, com ~98,7 milhões em taxas, cerca de 13% da receita da CipSoft pela estimativa de terceiros ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).

### 7.2 Taxas

- **10% do lance vencedor em Alvará, destruído** (bíblia 6.6), arredondado para cima ao Alvará inteiro, com mínimo de 1. Exemplos:
  - venda por 8 → taxa 1 (12,5%), o vendedor recebe 7;
  - venda por 23 → taxa 3 (13%), recebe 20;
  - venda por 50 → taxa 5 (10%), recebe 45.
- **Anúncio:** 2.000 ouro, sem reembolso, contra anúncios de teste e spam. **[proposta de complemento à bíblia]**
- **Por que em Alvará destruído:** o dinheiro já entrou quando o Alvará foi comprado. Destruí-lo tira oferta de Alvará e não cria receita nova para o estúdio a cada venda, como pede a regra de que taxa não é receita (bíblia 6.6). Efeito colateral: o preço do Alvará em ouro sobe (seção 6.6).

### 7.3 O que vai junto e o que fica

**Princípio: o Cartório vende o personagem, não o cidadão nem o cofre.**

| Vai com o personagem | Fica com a conta do vendedor |
|---|---|
| Níveis, maestrias, Selos de mestre, vocação, habilidades | **Mérito**, vitalício e da Era: a cidadania é da pessoa |
| Ajudantes | **Ouro, Alvará e saldo de cosméticos** |
| Equipamento em uso, **preso ao comprador por 30 dias** | Inventário e armazém negociáveis |
| Cosméticos aplicados e presos; casa e decoração presa | Direito de voto e histórico na Câmara (módulo 09) |
| Títulos de feito, com a marca "via Cartório" visível no perfil | **Marcos:** zerados na venda, porque a temporada é de quem jogou |
| Nome do personagem (o comprador pode trocar) | Registros históricos (ranking, nome no mapa da Travessia) com o nome da época |

- **Por que o armazém fica:** se o ouro e os itens fossem junto, o Cartório viraria um câmbio de ouro por Alvará a 10%, mais barato que o Câmbio (12%). O equipamento em uso vai, porque o comprador quer um personagem pronto, mas fica preso por 30 dias, para não servir de cofre disfarçado.
- **Por que o Mérito fica:** quem comprasse um personagem com Mérito alto compraria prioridade na cidade. O [conceito](../02-conceito.md) já previa carência para contas compradas votarem; aqui a cidadania nem muda de mãos.

### 7.4 Quem pode vender [H]

- Conta com pelo menos 30 dias e 40 horas de jogo ativo verificado (sessões com decisões, não cliente aberto).
- Segundo fator de autenticação ativo há pelo menos 14 dias, sem troca de e-mail, senha ou segundo fator nos últimos 14 dias.
- Personagem fora de guilda, sem mandato na Câmara, sem encomenda ativa, sem dívida, sem investigação aberta e sem Alvará em carência.
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
- **Vender a conta fora do Cartório continua proibido,** não por ser RMT (o RMT informal está em aberto), mas porque significa entregar a identidade verificada de outra pessoa. Isso quebra a regra de idade (P8) e a barreira contra multicontas.

### 7.7 Quatro perguntas

- **Referência:** Char Bazaar do Tibia ([F04](../01-pesquisa/fichas/F04-tibia.md); [05a, §3.C](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). *Diferença:* o cofre e a cidadania não vão junto, e há um aviso de 72 horas ao dono.
- **Problema:** o mercado cinza de contas, com golpe de recuperação e venda da identidade de outra pessoa.
- **Comportamento:** investir no personagem como patrimônio e "realizar" o progresso ao sair, em vez de abandonar a conta.
- **Risco:** num idle, vender a conta é vender tempo ausente acumulado, que é o que um bot produz de graça ([05a](../01-pesquisa/05a-rmt-modelos-mercado-paralelo.md)). Mitigação: 40 horas de jogo ativo verificado, uma venda a cada 60 dias, identidade verificada e detecção de nivelamento automatizado. **Validar com advogado** a natureza jurídica da venda de personagem e as regras de reversão (CDC, arts. 49 e 51).

## 8. Baú do Mascate

### 8.1 Preço e compra

- **1 Alvará = 5 Baús na loja** [H], ou ~R$ 4 por Baú com o Alvará a R$ 19,90. **O preço final fica com o módulo 11.**
- Comprado com Alvará, o **Baú lacrado é um item negociável por ouro** (decisão do Gabriel). É fungível dentro da série, então é negociado na Bolsa, num livro por série.
- **Taxa:** o Baú lacrado é Alvará em outra forma e paga 12% em qualquer canal (1% de anúncio + 11% na venda na Bolsa; 12% na Troca). **[proposta de mudança na bíblia]** (seção 5.6). Pela arbitragem, o preço do Baú em ouro tende a ficar perto do preço do Alvará dividido por 5, mais ou menos o prêmio da série.

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
| Baús comprados na loja | Até 25 por conta por mês (5 Alvarás) |
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

<!-- continua -->
