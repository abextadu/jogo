# GDD 08 — Simulação da economia

> **Escopo.** O único código permitido antes da Fase 5: uma simulação de 12 meses de uma Cidade, em passos diários, que testa a economia desenhada no [07](07-economia.md) com as interfaces de [02](02-progressao.md), [04](04-combate.md), [05](05-itens.md), [06](06-oficios-e-coleta.md), [09](09-social.md), [10](10-live-ops.md), [11](11-monetizacao.md), [12](12-onboarding.md) e [13](13-anti-abuso.md). Toma quatro decisões de reconciliação e devolve uma tabela de parâmetros para o diretor aplicar nos módulos.
> **Arquivos:** [`08-simulacao/`](08-simulacao/) — `sim.js` (modelo), `relatorio.js`, `parametros.json`, `cenarios.json`, [`README.md`](08-simulacao/README.md) e [`resultados/`](08-simulacao/resultados/) (CSV por cenário, `resumo.json` e o [**relatório com os gráficos**](08-simulacao/resultados/relatorio.html)).
> **Etiquetas:** [F] fato com fonte · [H] proposta ou premissa do estúdio · [NV] não verificado. **Todo resultado aqui é [H]:** é o que um modelo com premissas de comportamento declaradas produz, não uma previsão. O que vale mais são as **direções** (o que sobe, o que quebra, o que conserta) e as **contradições entre metas**, que o modelo mostra com clareza.

## 0. Resumo executivo

**O que foi feito.** Um modelo de agentes de 12 meses, com ~27 a 30 mil contas ativas, 24 grupos de bens, o teto de emissão do 07, as fontes e os drenos de ouro, os Coins com Câmbio de hora em hora, o Bazar, o Baú, a contestação e os bots do 13. Foram 39 cenários e 14 rodadas de ajuste; as decisões usam a média de três sementes. O ouro fecha no centavo.

**A economia ficou saudável?** **Em parte, e num corredor estreito.** No base, 6 dos 12 critérios passam em todas as sementes:
- **Passam:** drenos ÷ fontes 86%, contas no teto 23%, premium a 16,5 dias de renda, top 10% com 38% da riqueza, 46% do premium via ouro, Coins em 0,6% das Trocas.
- **IPC:** na média das sementes, +2% ao ano. O nível fica estável, mas a tendência de 6 meses é ruidosa (±25 pontos).
- **Falham, e são estruturais:**
  - a massa de 2 a 3 premiums, que o 1º ano, com a evasão do 12, não alcança;
  - os básicos acima de 1,3 vez o piso, que o aprendiz T1–T2 impede;
  - as metas em reais do 13 (salário-teto e dia de teto), incompatíveis com as do 07.

A conta-fazenda rende ~R$ 16 por mês. Fora do corredor, a economia cai em fartura (preços no piso) ou em escassez de T5–T6 (o ouro vai para poucos e o Coin despenca).

**Para o checkpoint da Fase 3: cinco decisões**

| # | Decisão | Opções | Recomendação e porquê |
|---|---|---|---|
| 1 | A ferramenta acelera a fila? | (a) não acelera (02); (b) até 1,72× (05/06); (c) acelera e a curva sobe para 5,6 | **(a).** Com (b), o hardcore chega ao 100 no D85 (abaixo da pista de 90) e o 2º semestre entra em escassez em todas as sementes (IPC +83% ao ano). (c) conserta a pista, mas deixa 46% do consumo sem atender, contra 33% |
| 2 | Paridade do Coin | (a) R$ 0,10 (07); (b) R$ 1,00 com as regras do 07 ÷ 10; (c) R$ 1,00 sem ajuste | **(b).** A economia é a mesma em (a) e (b); o preço em reais fica visível sem conta (11 §2.5). Em (c), o lance mínimo do Bazar vira R$ 300 e o Bazar morre |
| 3 | Teto: medida e excedente | (a) VR de mercado + portão (07); (b) VR fixo + portão; (c) nasce preso (05/06); (d) unidades | **(b).** (a) não segura a deflação (preços na metade, 2% no teto); (c) põe 100% das contas no teto e 57% da produção nasce presa; (d) dobra o lucro da fazenda |
| 4 | Coins na Troca | (a) 12% (07); (b) 3% (bíblia) | **(a).** Com (b), o Câmbio fica sem negócio em 21 de 24 rodadas e o Coin chega ao alarme de moeda paralela (9,6% das Trocas) |
| 5 | Pacote de ajustes do 08 | (a) aplicar; (b) só depois do alfa | **(a)**, porque são regras e não números: **indexação dos insumos até ±10% ao mês na 1ª Era** (o efeito mais firme: sem ela, IPC +105% ao ano); **Selo que mantém o tier de produção**; **ouro de encomenda só a partir do 14º dia** (fazenda −20%); **meta do 13 em lucro da fazenda (~R$ 15/mês)** no lugar de "dia de teto ≈ R$ 1"; massa medida nas contas de 90 dias ou mais; e o indicador de **consumo essencial não atendido** no painel |

**Os riscos que a simulação acendeu:**
1. **Uma onda de doações derruba o Coin** (de 79 para 9 ouro) e faz a fazenda render R$ 98 por mês.
2. **A detecção fraca de bots** deixa a fazenda passar da rampa (R$ 52 por mês).
3. **A evasão alta vira escassez**, não deflação.
4. **O Coin cai devagar o ano inteiro no base**: o premium vai de 27 para 13 dias de renda. No 2º ano, ele precisa de novos usos na loja.

O que mais muda nos módulos está na **seção 8**. A tabela vem antes das limitações (seção 9) e de "Como isso pode dar errado".

## 1. O modelo em linguagem simples

A Cidade é uma amostra de contas (20% das contas reais na escala padrão; cada conta simulada vale por cinco). Todo dia, cada conta:

1. **Progride** como no 02: a fila trabalha 24 h × a eficiência do perfil, dividida entre o ofício mestre principal, o segundo mestre, a vocação e os aprendizes; a XP sobe o nível, o nível abre tiers (1, 15, 35, 55, 75 e 90, do 06), marcos sobem a taxa ausente de 70% a 100%, a 2ª e a 3ª fila chegam, e depois do 100 vêm a Maestria e o Selo.
2. **Produz**: cada hora de fila gera 60 minutos de valor de referência (VR), que é trabalho embutido (06 §11.5), vezes o domínio e a taxa. A coleta gera matéria bruta; a transformação e a criação consomem insumos (com as ligas puxando o tier de baixo e carvão, casca e pedra "sem tier"); o aprendiz faz T1–T2; o combate solta peles, carnes e matéria dura (04).
3. **Consome**: equipamento e kits pelo desgaste do 05, 1 refeição e ~3 poções por hora de combate (04), ferramentas por hora de ofício, cerco, Fronteira e festas. No começo, o kit preso do onboarding cobre o combate.
4. **Vai ao mercado**: compra o que falta e anuncia o excedente; o preço de cada um dos 24 grupos de bens (bruto, insumo, equipamento e consumível, de T1 a T6) anda em direção ao ponto em que oferta e procura se encontram. Quem vende gasta cota do teto (portão de saída, com crédito dos insumos comprados); a matéria bruta T1–T2 pode ir ao NPC pela curva logarítmica.
5. **Mexe no ouro**: recebe encomendas, cercos, eventos e o começo do jogo; paga insumos de NPC, partida, ajudantes, taxas, luxos, Obras em ouro, Selo e a Oficina da Cidade.
6. **Mexe nos Coins** (se doa): doação em lotes com carência, conveniência, loja e Baú (dreno), venda no Câmbio. Quem não doa compra a conveniência com ouro quando o preço cabe na disposição dele. O Câmbio roda 24 leilões de chamada por dia, em escala real.

Os bots seguem o 13: automação na própria conta (3% das contas, produz no máximo, detectada a 8% por semana) e fazendas de identidade alugada (0,5%, vendem tudo, mandam o ouro ao mercado cinza, ondas de banimento a cada 3 semanas com recuperação de 70%).

**O que sai por dia:** IPC, preço do Coin e do premium em ouro e em dias de renda do mediano, massa de ouro, estoque de Coins, velocidade, fontes e drenos por categoria, Gini e participação do top 1% e do top 10% na riqueza (ouro, itens a preço de mercado e Coins), preços por grupo, contas no teto, lucro de uma conta-fazenda em R$ por mês, salário-teto do topo, falta de consumo essencial e mais (ver o [README](08-simulacao/README.md)).

## 2. Premissas que o GDD não fixava (e que a simulação precisou fixar)

| Premissa | Valor usado [H] | Por quê | Onde mexe |
|---|---|---|---|
| **Ouro por minuto de VR** | 2,0 | O 07 não fixou (pendência do 05/06). Com 2,0, a produção diária de um mediano fica em ~6.000 VR, a ordem de grandeza das tabelas 4.4 e 4.5 do 07 | `producao.ouro_por_minuto_ref` |
| **Valor dos drops** | 11 minutos de VR por hora de combate, × fator do tier | O 04 dá ~100 abates/h (40 peles, 50 carnes, 25 de matéria dura numa caçada); a ~0,13 min por unidade, uma hora de caçada vale ~15 min; a média com mortos-vivos e corrompidos fica em ~11 | `consumo.drops_min_por_hora_T1` |
| **Consumo por hora de combate (T1)** | 8,0 min de equipamento e kits + 3,15 min de consumíveis (1 refeição, 3 poções, consumível de vocação) | 05 §6 (vida útil e reparo) e 04 (resolução R1: 1 refeição por hora). Fica ~10% abaixo do 06 §9.1, que contava 4 refeições | `consumo.*` |
| **Entrada de contas** | 4.000 por dia nos 14 dias de estreia; depois 1.500 por dia | Com a retenção do 12 (D1 50%, D7 25%, D30 12%), cada conta nova joga ~20 dias em média; 1.500 por dia sustentam ~27 a 30 mil ativos. **O "1,5% dos ativos por dia" do 07 sustentaria só ~9 mil** (ver 7.6) | `populacao.*` |
| **Pagantes** | 13,3% das contas ativas (4% do MAU ÷ DAU/MAU de 30%), faixas do 11 | 11 §8 | `coins.*` |
| **Comportamento de mercado** | Preço de reserva de quem vende (0,35 a 0,55 do VR, com ruído), propensão a vender (35% a 100% do excedente), Obra para o excedente acima de 5 dias de produção, disposição a pagar pelo premium (mediana de 12 dias de renda) | Sem dado; são os palpites mais pesados do modelo (seção 9) | `perfis.*`, `mercado.*`, `coins.*` |

## 3. As iterações de ajuste

Cada linha mudou uma coisa e foi rodada de novo. As primeiras, na escala 0,1 (rápida); as finais, na escala 0,2, com três sementes. "Critérios" conta quantos dos 12 critérios de saúde (07 §13 e 13 §2.2) passaram.

| # | O que mudou | Por quê | O que melhorou | O que piorou ou ficou | Critérios |
|---|---|---|---|---|---|
| 0 | Valores iniciais do 07 e dos módulos, sem ajuste | Ponto de partida | — | A cadeia trava: os artesãos sem ouro não compram insumo, o equipamento falta, todo mundo compra na Oficina (o maior dreno do jogo), o ouro some (900 por conta) e o Coin cai de 75 para 6 ouro | — |
| 1 | Comportamentos: quem vende considera a fração que de fato vende antes de recusar o NPC; consumo essencial sensível ao preço; Oficina só até a disposição | Sem isso, ninguém usava o NPC e a Oficina comia o ouro | O mercado passa a casar; o NPC vira piso e fonte (~250 ouro por conta por dia) | **Deflação:** os preços caem 58% até o dia 90 (até o preço de reserva de quem vende) e o IPC ainda cai 36% ao ano no 2º semestre; Coin de 75 para 29; fazenda a R$ 60/mês | 4/12 |
| 2 | Teto medido em **VR fixo** (trabalho embutido, 05/06) em vez de VR de mercado (07) | No VR de mercado, o teto afrouxa quando o preço cai: na deflação, cada conta pode tirar mais unidades | O teto passa a segurar a oferta; preços ~40% mais altos; IPC de −36% para −13% ao ano | 60% das contas no teto; Coin ainda cai | 5/12 |
| 3 | Teto pela metade (300 + 15n + 25m) | Testar o pedido do 13 (um dia de teto ≈ R$ 1) | Fazenda um pouco menor | **Escassez:** o equipamento vai ao teto da Oficina, 65% do consumo essencial fica sem atender, IPC +42% ao ano | 4/12 (descartada) |
| 4 | Insumos "sem tier" (carvão, casca, pedra) em todos os tiers; aprendiz em três etapas; crédito dos insumos na mesma régua do teto | Fidelidade às receitas do 06 §11 e §12 | Fim das anomalias de T1 (bruto T1 em falta, T2 inundado) | — | 7/12 |
| 5 | Margem da criação usa a fração que vende; 35% da fila escolhe o tier mais lucrativo; subprodutos da coleta | O artesão planejava como se tudo vendesse e queimava ouro em insumo; ninguém fazia T1–T2 depois de subir | Preços coerentes entre tiers | Coin cai de 74 para 21; 38% do consumo essencial sem atender | 4/12 |
| 6 | Pagantes com a mesma retenção dos demais; kit inicial cobre a 1ª semana; "no teto" = esgotou a cota (07 §12.2); a política pede mais bens, não só mais ouro (07 §4.7) | Os pagantes tinham virado 26% dos ativos (o dobro do 11) e dobravam a oferta de Coins | Coin a ~67; premium a 23 dias; no teto 29%; salário-teto R$ 70 | IPC −6% ao ano | 5/12 |
| 7 | Ordem do orçamento: essenciais, depois criação; poupança do premium só segura luxo; insumo de NPC dentro do orçamento de criação. Testada e retirada uma regra de capital de giro | A poupança travava o consumo e a criação | Menos falta de consumo para quem tem ouro | Regime instável: alternou fartura e escassez (IPC de +36% a +462% ao ano conforme a regra) | 2 a 4/12 |
| 8 | **Indexação dos insumos de NPC até ±10% ao mês na 1ª Era** (o 07 diz ±2%) | Os preços acham o nível em 60 dias; com ±2%, o insumo de NPC passou a valer 24% da receita do artesão | Coin estável (67 a 74); fazenda R$ 18; salário-teto R$ 130 | IPC −9% ao ano | 3/12 |
| 9 | Fila do livro: quem anuncia ao preço do dia vende na mesma fração; **Carpintaria conta como criação** (arcos, escudos, cajados, ferramentas, kits); proporção de insumos dos kits nas receitas do 06; escolha do ofício com viés pelo índice de ofício (06 §9.5) | Só hardcore e bots vendiam; o equipamento era o gargalo porque só 2 de 12 ofícios o faziam | IPC +2% ao ano; no teto 25%; premium 20 dias; top 10% em 41% | Massa, básicos e critérios em reais | 6/12 |
| 10 | Amortecimento: o artesão decide pela média de 7 dias; preço anda no máximo 5% ao dia; tendência do IPC por regressão | Ciclos de preço tipo "teia de aranha" | Menos ruído | — | 5/12 |
| 11 | Testes: reserva de preço mais baixa; inclinação do teto 20 e 15; ouro de encomenda só a partir do 14º dia; luxo 1% ao dia; orçamento de encomendas 200 por conta por dia | Baixar o lucro da fazenda e o salário-teto sem estrangular a oferta | Ouro de encomenda a partir do 14º dia leva a fazenda a ~R$ 15/mês sem efeito colateral visível; luxo e orçamento aproximam drenos ÷ fontes da meta | Inclinação menor que 30 traz a escassez de volta (equipamento de T5–T6) | 7/12 (semente 42) |
| 12 | Na escala 0,2, o 2º semestre inflacionava (+57% ao ano). Testes de uma semente: sem Selo; Selo adiado; Selo que mantém o tier; Selo de 10 mil ouro e 10 mil VR | Hipótese: o custo do Selo tira o capital de giro dos mestres de T5–T6 | Numa semente: sem Selo, −6%; Selo barato, +11% | — | 5 e 6/12 |
| 13 | Disposição mediana a pagar pelo premium: 12 dias de renda (antes 8) | Calibrar o critério de 12 a 20 dias, que depende de comportamento (S3 mede a sensibilidade) | Premium a 15–18 dias | — | — |
| 14 | **Três sementes por cenário** para cada decisão | Na escala 0,2, a tendência semestral do IPC varia ±25 pontos entre sementes; uma semente não decide nada | Confirmados: VR fixo, portão, indexação rápida, inclinação do 07, ferramenta que não acelera, 12% na Troca. **Derrubada:** a hipótese do Selo caro (com 30 mil ouro, a média foi igual ou melhor, e drenos ÷ fontes entrou na meta). O custo do Selo volta ao do 07 | — | Final |

**O que as iterações ensinaram.** O modelo tem três regimes: **fartura** (a produção movida a XP inunda o mercado, os preços caem até o preço de reserva de quem vende e ficam lá), **escassez** (o equipamento de tier alto falta, o preço vai ao teto da Oficina, o ouro migra para poucos artesãos e o Coin despenca) e um **corredor estreito** entre os dois, onde a economia fica de pé. As alavancas que mais mexem no regime são, nesta ordem: como o teto é medido, a velocidade da indexação dos insumos de NPC e a inclinação do teto. As taxas quase não mexem, como o 07 previa ("as taxas são freio, não âncora"). **Lição de método:** com uma semente só, o modelo "descobriu" um efeito do custo do Selo que três sementes desmentiram; por isso todas as decisões da seção 6 usam a média de três sementes.

## 4. Resultados do cenário base

Configuração final (seção 8), escala 0,2, três sementes (42, 7 e 2026). Janela de saúde: dia 182 a 365. Gráficos: [`resultados/relatorio.html`](08-simulacao/resultados/relatorio.html); séries diárias: [`resultados/base.csv`](08-simulacao/resultados/base.csv); médias de três sementes: [`resultados/sementes_a.json`](08-simulacao/resultados/sementes_a.json).

| Critério de saúde (07 §13 e 13 §2.2) | Meta | Base (média de 3 sementes; faixa) | Situação |
|---|---|---|---|
| IPC ao ano (tendência do dia 182 ao 365) | 0% a 8% | **+2%** (−28% a +55%) | Na média, sim; semente a semente, não: o nível fica estável, mas a tendência de 6 meses é ruidosa |
| Drenos ÷ fontes | 85% a 95% | **86%** (86% a 87%) | ✓ |
| Contas no teto num dia | 10% a 30% | **23%** (22% a 25%) | ✓ |
| Premium de 30 dias em dias de renda do mediano | 12 a 20 | **16,5** (15,8 a 17,8) | ✓, mas cai ao longo do ano (27 no dia 150, 13 no dia 364) |
| Massa por conta ativa | 2 a 3 premiums | **0,8** (1,7 nas contas com 90 dias ou mais) | ✗ estrutural (7.2) |
| Top 10% da riqueza | < 60% | **38%** (top 1%: 7%; Gini 0,50) | ✓ |
| Premium via ouro | 30% a 65% | **46%** | ✓ |
| Trocas de itens pagas em Coins | < 10% | **0,6%** | ✓ |
| Básicos ÷ piso do NPC | ≥ 1,3 | **0,79** | ✗ estrutural (7.3) |
| Salário-teto do topo | < R$ 100/mês | **R$ 145** (R$ 129 a R$ 157) | ✗ (7.1) |
| Um dia de teto (mediano) | ~R$ 1 | **R$ 5,80** | ✗ (7.1) |
| Lucro da conta-fazenda | até ~R$ 15/mês | **R$ 16,30** (R$ 15,50 a R$ 17,50) | No limite |

**Números de referência do base (semente 42):**
- **População:** ~27 mil ativos na janela (28,4 mil no dia 364); ~3.900 pagantes (13,7%); 1º 100 de ofício mestre do servidor no D101; por perfil, D149 (casual), D123 (regular) e D102 (hardcore).
- **Preços:** os bens perdem ~60% do VR de lançamento nos primeiros 90 dias e depois ficam num patamar (IPC entre 34 e 48 o ano todo; 38 no dia 364).
- **Coin:** abre a 75 ouro, sobe a ~110 no dia 60 (pouca oferta, ainda na carência) e cai devagar até 37 no dia 364 (média de 44 na janela; premium a ~8.900 ouro); o estoque de Coins em circulação vai de 1,4 milhão (dia 150) a 3,3 milhões (dia 364).
- **Câmbio:** ~100 ordens novas por dia, negócio em 20 das 24 rodadas, volatilidade diária de ~5%.
- **Renda mediana:** ~560 ouro por dia (fontes brutas das contas com 30 dias ou mais).

**Fontes e drenos de ouro** (ouro por conta ativa por dia, média da janela, semente 42):

| Fontes | Ouro/dia | Drenos | Ouro/dia |
|---|---|---|---|
| Venda a NPC | 251 | Insumos de NPC | 202 |
| Encomendas | 208 | Ajudantes | 81 |
| Cercos | 75 | Partida | 73 |
| Começo do jogo | 40 | Selo de mestre | 67 |
| Eventos | 30 | Taxas dos balcões | 50 |
| | | Oficina da Cidade | 33 |
| | | Luxos | 14 |
| | | Obras em ouro, Câmbio, Troca, Bazar | 6 |
| **Total** | **604** | **Total (sem a fiscalização)** | **525 (87%)** |

**Leitura.** A estrutura de fontes e drenos fica perto do que o 07 desenhou: o NPC e as encomendas respondem por ~75% das fontes, e o insumo de NPC é o maior dreno, como o 07 previa ("o dreno principal é o consumo embutido"). As diferenças: a renda mediana é ~40% menor que os 970 do 07 (o NPC paga menos, porque os básicos ficam no piso), o Selo pesa mais que no 07 (67 contra 40) e as taxas, menos (50 contra 70). **O que preocupa no base** é a queda lenta do Coin ao longo do ano: o premium passa de 27 para 13 dias de renda entre o dia 150 e o 364, porque o estoque de Coins cresce mais rápido que o ouro das contas que querem comprá-los. No 2º ano, sem novos usos para o Coin na loja, o premium sairia da faixa por baixo (07, risco "O Coin despenca").

## 5. Estresses

Semente 42 para todos (a mesma do base, para comparar); a tendência do IPC numa semente só é ruidosa (seção 9), por isso a tabela traz também o que cada choque mexe diretamente.

| Cenário | Critérios | O que o choque fez | Leitura |
|---|---|---|---|
| **E1** Crescimento (entrada +50%) | 6/12 | 40 mil ativos; preços, Coin e concentração iguais ao base; premium 18,8 dias | **Aceitável.** A economia escala com a população (o teto é por conta) |
| **E2** 90 dias sem jogador novo | 5/12 | Ativos de 22,6 mil para 8,8 mil (−60%) em 90 dias; contas no teto vão a 57%; top 10% a 61%; Coin cai de 80 para 20; drenos ÷ fontes 76% | **Falha passageira.** Sem gente nova, sobram os veteranos, mais ricos e mais concentrados; tudo volta em ~60 dias depois que a entrada retorna. Lição: a aquisição é política econômica |
| **E3** Evasão de 50% ao mês | 5/12 | Ativos de 22,6 mil para 17,3 mil; IPC de 40 para 99 (falta quem produza); 49% do consumo sem atender | **Falha.** A evasão alta vira escassez, não deflação: quem sai leva capacidade de produção |
| **E4** Bots em 20% | 5/12 | 7.300 contas-fazenda; básicos a 0,55 do piso (elas despejam no NPC); drenos ÷ fontes 75%; lucro de R$ 5 a R$ 14 por conta por mês (a concorrência entre fazendas derruba o preço) | **Aceitável para a fazenda, ruim para a economia.** O teto por conta e a rampa seguram o lucro de cada uma; o despejo de 20% das contas derruba os básicos |
| **E5** Onda de pagantes | 6/12 | O Coin cai de 79 para **9 ouro** em 60 dias (premium a 3 dias de renda); o real por ouro sobe 9 vezes e a **fazenda passa a render R$ 98 por mês** no auge (R$ 36 no fim do ano) | **Falha séria.** É o choque mais perigoso do ano: barateia o premium para todos e torna o RMT e a fazenda lucrativos. Mitigação: teto de doação, novos usos de loja e o alarme do Coin (07 §12.2) |
| **E6** Dupe de 20% com disjuntor | 6/12 | A massa sobe 4,6% em um dia (o vazamento de 25%) e volta ao nível do base em ~1 mês; Coin e IPC sem efeito visível além do ruído | **Aceitável.** O disjuntor faz o trabalho |
| **E6b** Dupe sem disjuntor | 7/12 | A massa sobe 19,6% e volta ao nível do base em ~2 meses (os drenos de estoque, como o luxo, crescem com a massa); o Coin sobe um pouco | **Aceitável no modelo.** Ver limitação: no modelo, o preço dos bens responde pouco à quantidade de ouro (a procura é de necessidade); na vida real, o vazamento iria a Coins, luxos e especulação |
| **E7** Feira a 4% e depois 8% | 5/12 (3 sementes: 5, 5 e 6) | Média de 3 sementes: IPC +24% (−9% a +45%), nível igual ao base | **Aceitável.** A faixa do Conselho é segura; a Feira a 8% encarece o equipamento e pesa um pouco no 2º semestre |
| **E8** Fronteira puxa 40% | 5/12 | Menos produção e mais desgaste nas semanas de Fronteira; IPC +79% ao ano na semente 42; contas no teto caem a 16%; premium 23,8 dias | **Falha moderada.** Com 40% da atividade na Névoa, a cidade fica sem oferta; o 10 deve limitar a Fila da Fronteira a uma fila extra, como já propõe |
| **E9** Coins na Troca a 3% | 7/12 | Ver decisão 4 | **Falha de desenho:** o Câmbio esvazia |
| **E10** Sem o crédito dos insumos | 4/12 | Contas no teto 36%; 58% do consumo sem atender; top 10% 47% | **Falha.** O crédito é o que deixa o artesão que compra insumos agregar valor; sem ele, o teto estrangula a criação |
| **E11** Contestações a 1,5% | 6/12 | 50 contas suspensas (escala da Cidade) no fim do ano; Coins sem lastro de 10 mil para 25 mil; o **disjuntor de disputas dispara** e suspende o Câmbio por alguns dias; Coin de 50 para 29 no 2º semestre | **Aceitável.** O dano direto é pequeno (Coins sem lastro < 1% do estoque); o efeito maior é o Câmbio parado pelo disjuntor |
| **E12** Despejo dos Coins guardados | 6/12 | O Coin cai 31% em 15 dias (51 para 35), contido pela banda de ±10% ao dia, e recupera em parte | **Aceitável.** A banda e o leilão de hora em hora funcionam como amortecedor |
| **X1** Bots do 13 (10% + 3%, detecção pela metade) | 4/12 | Fazendas vivem mais, passam da rampa e chegam a **R$ 52 por mês** no fim do ano; premium 10 dias | **Falha.** A detecção é a defesa que mais pesa no lucro da fazenda depois da rampa |
| **X2** Catástrofe da verificação | 5/12 | 3.200 contas falsas em 14 dias, banidas no dia 121; cada uma rendeu só R$ 4 por mês (estava na rampa de 25%) | **Aceitável.** A rampa de conta nova anula a onda de contas falsas |
| **X3** Fuga dos doadores | 7/12 | O Coin fica caro (68 a 78 ouro); premium a 25–29 dias de renda; fazenda R$ 10 | **Falha leve:** a rota do não pagante encarece; o resto da economia nem sente |

**Resumo dos estresses.** Quatro choques realmente machucam: a **onda de pagantes** (o Coin despenca e a fazenda volta a dar lucro), a **detecção fraca de bots**, a **evasão alta** (vira escassez) e o **teto sem crédito dos insumos**. Os choques de ouro (dupe) e de Coins (despejo, contestações) são absorvidos pelos disjuntores, pela banda do Câmbio e pelos drenos. A faixa do Conselho na Feira (4% a 8%) é segura.

## 6. As quatro decisões de reconciliação

Todas com três sementes (média; faixa entre parênteses). Fonte: [`sementes_a.json`](08-simulacao/resultados/sementes_a.json), [`sementes_b.json`](08-simulacao/resultados/sementes_b.json) e [`sementes_c.json`](08-simulacao/resultados/sementes_c.json).

### Decisão 1 — A ferramenta acelera a fila?

| Opção | 1º 100 (casual / regular / hardcore) | IPC ao ano | Nível do IPC | Consumo não atendido | Produção |
|---|---|---|---|---|---|
| **R1a — Não acelera (02)** ← recomendada | D149 / D123 / **D102** | +2% (−28% a +55%) | 46 | 33% | 174 milhões de VR/dia |
| R1b — Acelera até 1,72× (05/06) | D142 / D111 / **D85** | **+83%** (+41% a +121%) | 70 | 47% | +5% |
| R1c — Acelera, curva com coeficiente 5,6 | D159 / D124 / D95 | +4% (−6% a +10%) | 50 | 46% | +2,5% |

**Recomendação: a ferramenta não acelera** (fica como portão de tier, durabilidade e achado, como o 02 propõe). Com aceleração, o hardcore chega ao 100 no D85 e a pista de ≥ 90 dias quebra; a progressão mais rápida leva o servidor ao T5–T6 mais cedo, e a escassez de topo (seção 7.4) chega no 2º semestre em todas as sementes (+83% ao ano). Subir o coeficiente para 5,6 conserta a pista (D95) e o IPC, mas deixa 46% do consumo sem atender (contra 33%) e atrasa o casual para o D159. A aceleração cria um problema e o conserto cria outro; sem ela, os dois somem.

### Decisão 2 — Paridade do Coin: R$ 1,00 (11) ou R$ 0,10 (07)?

| Opção | Premium em ouro | Premium (dias) | Rodadas com negócio | Vendas presas abaixo do mínimo (por ano) | Vendas no Bazar (por ano) | Fazenda/mês |
|---|---|---|---|---|---|---|
| R2a — R$ 0,10, regras do 07 | 9.182 | 16,5 | 20,2 de 24 | ~1.400 | 72 a 86 | R$ 16,30 |
| **R2b — R$ 1,00, regras do 07 ÷ 10** ← recomendada | 10.298 | 18,2 | 19,8 de 24 | **0** | 31 a 58 | R$ 16,30 |
| R2c — R$ 1,00, regras do 07 sem ajuste | 7.794 | 13,7 | 20,3 de 24 | **~7.500** | **0** (~300 bloqueadas) | R$ 21,60 |

**A economia não muda com a paridade:** com as regras reescaladas, R2b e R2a ficam dentro do ruído uma da outra em todos os indicadores (o preço do Coin em ouro apenas se multiplica por 10). O degrau de 3 algarismos significativos do 07 também não muda: o degrau relativo é o mesmo em 75,3 e em 753. **O que muda são as regras escritas em Coins.** Sem reescalar, o lance mínimo do Bazar vira R$ 300 e mata o Bazar (nenhuma venda no ano, ~300 bloqueadas), e a ordem mínima de 10 Coins vira R$ 10, o que deixa ~7.500 vendas pequenas presas por ano.

**Recomendação: 1 Coin = R$ 1,00, em unidades inteiras** (a paridade do 11), com as regras do 07 divididas por 10: ordem de 1 a 200 Coins, compra máxima de 200 por conta a cada 7 dias, lance inicial do Bazar de 30 Coins, premium de 30 dias a 20 Coins, Baú a 5. O motivo é de produto, não de economia: o preço em reais fica visível sem conta (11 §2.5, contra a "moeda que esconde o preço real"), e a simulação mostra que isso não custa nada ao Câmbio. O 07 §5.4, §6.1, §7.1 e §13 (parâmetros 37, 38, 41, 49 e 50) precisa ser reescrito em Coins de R$ 1.

### Decisão 3 — Teto em unidades ou em valor de referência; excedente "nasce preso" ou "portão de saída"?

| Opção | IPC ao ano | Nível do IPC | No teto | Premium (dias) | Consumo não atendido | Fazenda/mês | VR que nasce preso |
|---|---|---|---|---|---|---|---|
| R3a — VR de mercado, portão (07) | +16% (+10% a +23%) | **26** | **2%** | 19,4 | 21% | R$ 24,00 | 0 |
| **R3b — VR fixo, portão** ← recomendada (é o base) | +2% (−28% a +55%) | 46 | 23% | 16,5 | 33% | R$ 16,30 | 0 |
| R3c — VR fixo, nasce preso, sem crédito (05/06) | +8% (+6% a +12%) | 91 | **100%** | 9,4 | **72%** | R$ 38,70 | **93 milhões de VR/dia** (57% da produção) |
| R3d — Unidades | **+102%** (+54% a +131%) | 74 | 48% | 6,1 | 63% | R$ 32,80 | 0 |

**Recomendação: teto em valor de referência fixo (o trabalho embutido do 05/06) com o portão de saída do 07, e o crédito dos insumos na mesma régua.**
- **VR de mercado (07):** o teto afrouxa quando o preço cai (cada unidade custa menos cota), então não segura a deflação. Os preços assentam na metade do nível do base, só 2% das contas chegam ao teto, e a fazenda rende 50% mais.
- **"Nasce preso" (05/06):** toda conta que produz bate no teto, todos os dias, e mais da metade da produção nasce presa. Como o insumo comprado não dá crédito, o artesão estrangula: 72% do consumo fica sem atender e o equipamento vai ao teto da Oficina. É exatamente a "queixa nº 1 dos idles online" que o 07 §3.2 temia.
- **Unidades:** quem fabrica peças (muito valor por unidade) escapa do teto, e as fazendas fazem isso: o lucro dobra e a economia entra em escassez de tudo que não é peça.

### Decisão 4 — Taxa da Troca para Coins: 3% (bíblia) ou 12% (07)?

| Opção | Rodadas do Câmbio com negócio | Coins trocados fora do Câmbio | Trocas de itens pagas em Coins | Volatilidade diária do Coin | Premium (dias) | IPC |
|---|---|---|---|---|---|---|
| **R4a — 12% (07)** ← recomendada | **20 de 24** | 1× | 0,6% | 5,0% | 16,5 | +2% |
| R4b — 3% por lado | **3 de 24** | **13×** | **9,6%** (alarme do 07 em 10%) | 1,9% (o preço quase não se forma) | 18,9 | −1% (−38% a +22%) |

**Recomendação: 12% para Coins e Baú lacrado em qualquer canal** (a proposta do 07). Com 3% por lado, Coins por ouro na Troca custam 6% contra 12% no Câmbio, e ~60% das vendas fogem do balcão. O Câmbio fica sem negócio em 21 de 24 rodadas, e o índice público do Coin passa a medir uma fatia pequena e viciada do mercado. O Coin vira moeda de pagamento de itens no limite do alarme de "moeda paralela". O resto da economia quase não muda (os 6% da Troca também são destruídos), o que confirma o 07: o problema da taxa baixa é o índice e a moeda paralela, não a inflação.

## 7. O que a simulação descobriu

### 7.1 As metas em reais do 07 e do 13 não cabem juntas

O valor em reais de um dia de teto é a conta de três números:

`dia de teto (R$) = R$ 20 × (teto em ouro ÷ renda mediana em ouro) ÷ (dias de renda que o premium custa)`

- O 07 pede o premium entre 12 e 20 dias de renda e o teto de 1,5 a 2 vezes a venda típica; nas contas do próprio 07, o teto do mediano é ~2,2 vezes a renda diária (2.100 contra 970).
- O 13 pede que um dia de teto valha ~R$ 1, o que exige o teto em ~0,75 vez a renda diária (com o premium em 15 dias).
- **No modelo, o teto em ouro fica em ~2,5 a 3 vezes a renda mediana, e um dia de teto vale ~R$ 5,80 (R$ 5,20 a R$ 6,30 entre sementes).** Para chegar a R$ 1, o teto teria de cair a um quarto, e isso estrangula a oferta: na iteração 3, com o teto pela metade, o equipamento foi ao teto da Oficina e 65% do consumo ficou sem atender.
- **Por que mexer no ouro não resolve:** se as fontes de ouro dobram, os preços em ouro sobem junto e a razão entre o teto e a renda quase não muda. É uma razão real, não nominal: quanto do ouro de uma conta vem de outros jogadores (mercado, limitado pelo teto) e quanto vem do sistema (fontes).

**O que importa de verdade contra o laranja é o lucro da conta-fazenda**, e esse fica baixo: a fazenda vive ~35 dias, passa a maior parte da vida na rampa de conta nova, vende com 6% de taxa, paga 3% na Troca e vende o ouro a 50% do oficial. No base, ela rende **de R$ 15,50 a R$ 17,50 por conta por mês** (média de três sementes: R$ 16,30), ou ~R$ 19 na vida inteira, perto dos R$ 12 que o 13 estimou. **Recomendação:** trocar a meta do 13 ("um dia de teto ≈ R$ 1") por "**lucro de uma conta-fazenda até ~R$ 15 por mês, medido**", e manter as defesas que mais pesam: a identidade verificada, a rampa de conta nova, a detecção por ondas e a carência de 14 dias no ouro das encomendas (seção 7.5). O salário-teto do topo (R$ 130 a R$ 160 por mês no modelo, contra a meta de R$ 100) é o mesmo problema visto do outro lado; como a conta de topo leva ~100 dias para existir e é única por pessoa, o risco do laranja está na fazenda, não no topo.

### 7.2 "Massa de 2 a 3 premiums por conta ativa" não acontece no 1º ano

Com a retenção do 12, ~36% das contas ativas têm menos de 30 dias, e a poupança líquida da economia é de 10% a 20% das fontes. A massa por conta ativa fica em ~0,8 premium no base (de 0,7 a 1,5 nos cenários); nas contas com 90 dias ou mais, sobe para ~1,7. A meta do 07 vale para uma conta madura em equilíbrio (o `M*` do 07 §4.6 leva ~85 dias para chegar a dois terços). **Recomendação:** medir a meta só nas contas com 90 dias ou mais, ou baixar a faixa do 1º ano para 0,7 a 1,5.

### 7.3 Os básicos T1–T2 vivem no piso do NPC

O aprendiz passa de 15% a 45% da fila em T1–T2 (02 §3.3), e a fila do artesão sem insumo também volta à coleta T1–T2 (02 §6.3, "pular a etapa sem insumo"). Essa oferta é muito maior do que a procura de T1–T2, e o preço desses básicos fica colado ao piso do NPC o ano todo (~0,8 vez o preço-base no base, 0,55 com bots em 20%; meta de 1,3 vez) **em todos os cenários**. É o risco nº 1 do 07 ("deflação dos básicos"), e o NPC faz o papel de piso que o 07 desenhou. **Recomendação:** (a) as Obras da S1 a S4 de cada Era pedem básicos com Mérito em dobro (07 §9.2, alavanca 2); (b) aceitar o básico no piso como estado normal e trocar o alarme de 1,3 vez o piso por "1,0 vez por 14 dias", deixando o 1,3 para os insumos.

### 7.4 O capital de giro e o Selo de mestre decidem o 2º semestre

No 2º semestre, o servidor chega a T5–T6. Uma peça de T6 tem ~3,9 vezes o trabalho de uma de T1 com a mesma durabilidade, e o consumo por hora de combate cresce na mesma proporção (06 §9.1). O artesão de T6 precisa adiantar um dia de insumos (~58% do valor do que produz) e o insumo de NPC, e esse capital sai do caixa dele. Quando o caixa dos mestres de topo não acompanha, o equipamento de T5–T6 falta, o preço vai ao teto da Oficina, o ouro migra para poucos artesãos e a rota do não pagante fecha (o Coin cai). Em algumas sementes o 2º semestre entra nesse regime e em outras não: é o "corredor estreito" da seção 3. **Recomendações:**

1. **Indexação rápida dos insumos de NPC na 1ª Era** (seção 7.6): é a alavanca com o efeito mais claro sobre esse regime (S7, três sementes).
2. **O Selo volta o nível, não o tier de produção:** o mestre que "passou a oficina" continua sabendo trabalhar no maior tier que já dominou, e o que recomeça é a XP. Isso responde ao risco do próprio 02 ("muitos mestres tomarem o Selo ao mesmo tempo e faltar T6") sem mexer na pista de conteúdo. No modelo, com o Selo fechando os tiers (S6, três sementes), o IPC do 2º semestre sobe 70% ao ano (+10% a +108%) e 44% do consumo fica sem atender, contra +2% e 33% no base. **O custo do Selo do 07 (30 mil ouro + materiais) fica:** a hipótese de que ele drenava o capital dos mestres não se sustentou com três sementes (S4).
3. **A política de encomendas precisa de diagnóstico.** Quando o IPC sobe por **escassez** de oferta, a regra do 07 §4.7 corta o ouro das encomendas e aperta ainda mais o capital dos artesãos. O painel deve separar "muito ouro" de "pouca oferta" com um indicador novo, o **consumo essencial não atendido** (quanto do desgaste e dos consumíveis previstos não foi comprado), e só cortar ouro no primeiro caso.

### 7.5 A fazenda achou uma torneira fora do teto: o ouro das encomendas

A entrega de encomenda não gasta cota (07 §3.3), e o pagamento em ouro é emissão. Uma conta nova inscrita nas encomendas recebe ouro desde o 2º dia, e a fazenda, que se inscreve em tudo, usa isso. **Recomendação:** o ouro das encomendas só a partir do 14º dia da conta (o mesmo corte de "conta nova" do 13 §12.1); antes disso, a encomenda paga só Mérito e XP. O cenário S9 mostra o efeito de tirar a carência.

### 7.6 Outras descobertas

- **Indexação lenta no lançamento.** Os preços acham o nível nos primeiros 60 dias (no modelo, assentam entre 0,4 e 0,7 do VR de lançamento). Com ±2% ao mês, o insumo de NPC passa a valer ~24% da receita do artesão e trava a criação: com a regra do 07 desde o lançamento (S7, três sementes), o IPC sobe 105% ao ano no 2º semestre (+65% a +135%), 56% do consumo fica sem atender e o premium cai a 10 dias. **Recomendação:** ±10% ao mês na 1ª Era e ±2% depois (07 §4.3 e parâmetro 17). É a recomendação com o efeito mais firme de todo o estudo.
- **Entrada de contas.** O 07 usa "1,5% dos ativos por dia". Com a retenção do 12, cada conta nova verificada joga ~20 dias em média, e 1,5% sustentaria só ~9 mil ativos. Para 30 mil ativos são precisas ~1.500 contas novas verificadas por dia (~5% dos ativos), o que também pesa no custo de verificação do 11 §8.5. **Recomendação:** o 07 e o 11 passam a expressar a entrada em contas verificadas por dia, com a curva de retenção.
- **O combate do 04 quase não consome matéria-prima na conta.** Com ~100 abates por hora, uma hora de caçada solta ~15 minutos de VR em peles, carnes e matéria dura e consome ~11 em desgaste e consumíveis: no T1, o combate é neutro em VR, e o dreno líquido vem dos tiers altos. Isso reforça a dependência das Obras e das encomendas no começo do servidor (06 §9.1).
- **Os pagantes não podem ter retenção muito melhor que a média** sem que a oferta de Coins dobre: com 30% a menos de evasão para quem doa, os pagantes viraram 26% dos ativos (o dobro do 11) e o Coin caiu à metade. O 11 deve medir a retenção dos doadores no alfa, porque ela mexe direto no preço do Coin.
- **Consumo essencial não atendido de 25% a 40%.** O casual (75% de eficiência e vocação com 50% a 70% de uma fila, 02 §3.3) não paga todo o consumo previsto pelo 04 e pelo 05 com a renda que tem: luta com peça gasta ou compra menos. O número depende do preço de reserva e do passo diário; é o primeiro a medir no alfa.

## 8. Tabela final de parâmetros recomendados

O que muda em cada módulo (o diretor aplica; este módulo não edita os outros). "Sem mudança" significa que a simulação confirmou o valor do módulo. Todos os valores continuam [H] até o alfa. O arquivo [`parametros.json`](08-simulacao/parametros.json) tem a configuração completa, com a origem de cada número.

| Módulo e seção | Parâmetro | Valor no GDD hoje | Recomendação do 08 | Evidência |
|---|---|---|---|---|
| **07 §3.2–3.4; 05 §9; 06 §2.3** | Medida do teto | VR = preço de mercado (07); trabalho embutido (05/06) | **VR fixo de lançamento (trabalho embutido × ouro por minuto)** | Decisão 3 (R3a × R3b) |
| 07 §3.2; 05 §9; 06 §2.3 | Destino do excedente | Portão de saída (07) × nasce preso (05/06) | **Portão de saída**; o 05 §9 e o 06 §2.3 passam a seguir o 07 | Decisão 3 (R3c) |
| 07 §3.3 | Crédito dos insumos comprados | VR de mercado dos insumos | Na mesma régua do teto (VR fixo); obrigatório | E10 |
| 07 §3.4 e §13 (6 a 10) | Fórmula, acúmulo e rampa do teto | 600 + 30n + 50m; 3 dias; 25/50/75% até o dia 30 | **Sem mudança.** Não baixar a inclinação para 25 (07 §3.6): traz escassez | S8, iteração 3 |
| **07 §4.3 e §13 (17)** | Indexação dos insumos de NPC | ±2% por mês | **Até ±10% por mês na 1ª Era; ±2% depois** | S7 (o efeito mais firme do estudo) |
| 07 §4.3 e §13 (16) | Insumo de NPC | 12% do VR do produto, de T2 para cima | Sem mudança | — |
| 07 §4.1 e §13 (13) | Orçamento de ouro das encomendas | 150 / 300 / 450 por perfil (~225 por conta) | 200 por conta ativa por dia, com a política elástica pedindo **orçamento e quantidade** (07 §4.7) | Iteração 11 |
| **09 §2 e 07 §4.1** | Ouro das encomendas para conta nova | Desde a inscrição | **Só a partir do 14º dia da conta** (corte de "conta nova" do 13 §12.1); antes, só Mérito e XP | S9 (fazenda −20%) |
| 07 §4.7 e §9.3 | Política de encomendas | Reage ao IPC | Reage à causa: se o consumo essencial não atendido estiver alto (escassez), não cortar o ouro | Seção 7.4 |
| 07 §4.3 e §13 (21) | Propensão a luxo | 1% do estoque por dia | 1% do ouro acima da reserva para luxo de NPC, mais 0,4% para Moda da Cidade (05 §8.5) e 0,2% para Obra em ouro | Iteração 11 |
| 07 §13 (22); 02 §9.2 | Custo do Selo de mestre | 30 mil ouro + materiais | **Sem mudança** (30 mil + 20 mil VR) | S4 |
| **02 §9.2** | O que o Selo reseta | Nível ao 30 e fecha T4–T6 até voltar | **Volta o nível (XP) ao 30, mas mantém o tier de produção já alcançado** | S6 |
| **02 §2.2; 05 §4.5; 06 §2.2** | A ferramenta acelera a fila? | 05/06: até 1,72× | **Não acelera**: portão de tier, durabilidade e achado; domínio até +10% (02) | Decisão 1 |
| **11 §2; 07 §5.4, §6.1, §7.1, §13 (37, 38, 41, 49, 50)** | Paridade e regras em Coins | R$ 1 (11) × R$ 0,10 (07) | **1 Coin = R$ 1,00, inteiro**; ordem de 1 a 200 Coins; compra de até 200 por conta a cada 7 dias; lance mínimo do Bazar 30 Coins; premium 20 Coins; Baú 5 Coins | Decisão 2 |
| **Bíblia 6.6; 07 §5.6** | Coins e Baú lacrado na Troca | 3% (bíblia) × 12% (07) | **12%** em qualquer canal | Decisão 4, E9 |
| **13 §2.2** | Meta contra a fazenda | Um dia de teto ≈ R$ 1 | **Lucro de uma conta-fazenda até ~R$ 15 por mês**, medido no painel (07 §12.2, linha "Salário-teto") | Seção 7.1 |
| 07 §13 (critérios) e §12.2 | Massa por conta ativa | 2 a 3 premiums | Medir só nas contas com 90 dias ou mais (meta 1,5 a 3) | Seção 7.2 |
| 07 §9.2 e §12.2 | Alarme dos básicos | VR abaixo de 1,3× o piso por 14 dias | 1,0× para os básicos T1–T2 (que vivem no piso por desenho); 1,3× para os insumos; Obras da S1–S4 pedem básicos com Mérito em dobro | Seção 7.3 |
| 07 §12.2 (painel) | Indicadores novos | — | **Consumo essencial não atendido**; preço de T5–T6 contra a Oficina; estoque de Coins ÷ gasto mensal na loja (o Coin cai devagar no base) | Seções 4 e 7.4 |
| 07 §13 (4); 11 §8.5 | Entrada de contas | 1,5% dos ativos por dia | Em contas verificadas por dia, com a curva do 12: ~1.500 por dia (~5% dos ativos) para ~30 mil ativos; o custo de verificação do 11 deve usar esse número | Seção 7.6 |
| 04; 06 §9.4 e §11.5 | Valor dos drops | Sem valor (06) | ~0,13 min de VR por unidade (o tempo de uma coleta T1); uma hora de caçada ≈ 15 min de VR | Seção 2 |
| 04 (R1 do diretor) | Refeições por hora de combate | 1 (04) × 4 (06) | Sem mudança (1). Com 4, o consumo sobe e o 2º semestre entra em escassez (S1: IPC +93%, 50% sem atender) | S1 |
| 07 §1.2; 05 §9; 06 §13 | Ouro por minuto de VR | Não fixado | 2,0 ouro por minuto de ofício no lançamento | Seção 2 |
| 11 §8 | Retenção dos doadores | — | Medir no alfa: se quem doa ficar muito mais que a média, a oferta de Coins dobra e o Coin cai à metade | Seção 7.6 |
| 10 §11 | Fronteira | +8% de P, Fila da Fronteira extra | Sem mudança; manter a Fronteira numa fila extra (com 40% da atividade, a cidade fica sem oferta) | E8 |
| 09 §5 | Faixa da Feira | 4% a 8% | Sem mudança (as duas pontas são seguras) | E7 |

## 9. Limitações do modelo

| Limitação | O que pode esconder | Como reduzir |
|---|---|---|
| **Preço de reserva e propensão a vender são palpites** [H] | O nível absoluto dos preços (o mercado assenta entre 0,4 e 0,7 do VR de lançamento) é, em boa parte, o preço de reserva. Se os jogadores aceitarem vender por quase nada, a deflação do lançamento é mais funda | Medir no alfa a distribuição dos preços pedidos na Bolsa e a taxa de doação à Obra |
| **Disposição a pagar pelo premium** [H] | O critério de 12 a 20 dias quase vira uma entrada do modelo: dobrando a disposição, o premium sobe proporcionalmente (S3) | Beta com Coins de teste (11 §2.2) e pesquisa de disposição a pagar |
| **Passo diário e capital de giro** | O artesão paga os insumos do dia com o caixa da véspera. No jogo, ele compra e vende várias vezes por dia; o modelo exagera a falta de capital no T5–T6 e, com ela, a escassez do 2º semestre | Rodar com passo de 4 h na Fase 5 (o motor de eventos do servidor permite) |
| **Ruído entre sementes** | Na escala 0,2, a tendência semestral do IPC varia cerca de ±25 pontos entre sementes; um único cenário não decide nada | Comparar cenários contra o base com a mesma semente; ler o base pela média de 3 sementes; escala 1,0 para a versão final |
| **Bens agregados em 24 grupos** | Gargalos de um ofício só (couro, por exemplo), qualidade, obra-prima, lendários e cosméticos ficam de fora dos preços | Desagregar por ofício quando houver o bestiário final e as receitas de T3–T6 fechadas |
| **XP não depende do mercado** | A pista de conteúdo (datas do 100) é a do 02 mesmo quando falta insumo ou ouro; na vida real, a falta de insumo atrasa a XP da criação | Ligar a XP da criação à produção efetiva |
| **Guildas, Conselho, Leilão e RMT externo não são agentes** | Cartéis, captura do Conselho, lances de fachada e o mercado cinza fora da fazenda | Modelos dedicados (o 13 já pede testes de grafo e de cartel) |
| **O Mérito não tem valor próprio** | A doação à Obra é uma regra de fila, não uma escolha contra a venda | Valorar o Mérito pelas recompensas que ele destrava |
| **Quem sai não volta** | O ouro das contas que saem vira massa inativa para sempre; o "delta de retorno" do 07 §12.2 fica de fora | Taxa de retorno por coorte, a medir no alfa |
| **Uma Cidade, um ano** | Eras 2 a 4 com Fronteira estão no calendário, mas o segundo ano (Selos IV e V, servidor maduro de verdade) não | Estender a 730 dias depois do alfa |

**Conferência do modelo.** O ouro fecha no centavo: a soma do ouro de todas as contas é igual às fontes menos os drenos acumulados (teste com bots desligados, diferença de 0,000%). As datas do primeiro 100 de ofício mestre por perfil (casual D149, regular D123, hardcore D102, com os tiers do 06) batem com as do 02 §13.3 (D149, D122, D100). A mesma semente reproduz o mesmo resultado.

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Confiar no número absoluto** | Alguém lê "o Coin vale 48 ouro" ou "o IPC cai 17%" como previsão e fixa preços de loja ou taxas em cima disso | Este documento só recomenda direções e regras (VR fixo, portão de saída, indexação rápida na 1ª Era); os números finais saem do alfa e do beta com Coins de teste, com o modelo recalibrado pelos dados medidos |
| **Ajustar o modelo até ele dizer o que se quer** | Com tantos comportamentos [H], dá para fazer qualquer critério passar mexendo num palpite (a disposição a pagar, por exemplo) | As iterações estão registradas (seção 3); cada parâmetro comportamental tem um cenário de sensibilidade; os critérios que dependem só de comportamento foram marcados como tais (seção 7) |
| **A economia real cair no regime de escassez** | No 2º semestre, com o servidor em T5–T6, o equipamento de topo falta, o ouro vai para poucos artesãos e a rota do não pagante fecha (o Coin despenca) | Indexação rápida na 1ª Era; Selo que mantém o tier; painel com "consumo essencial não atendido" e preço de T5–T6 contra a Oficina; Oficina da Cidade de T5–T6 como válvula; reabrir o orçamento das encomendas pela causa, não pelo IPC (seção 7.4) |
| **A economia real cair no regime de fartura** | O excedente movido a XP derruba os básicos ao piso do NPC e o artesão sente que "o trabalho não vale nada" | Teto em VR fixo; Obras e encomendas pedindo os básicos; festas de consumo; alarme de básicos contra o piso (07 §12.2), que no modelo dispara o ano todo |
| **A política reagir ao sintoma errado** | O IPC sobe por escassez de oferta e a regra do 07 §4.7 corta o ouro das encomendas, o que aperta o capital dos artesãos e piora a escassez | Diagnóstico antes do remédio (07 §9.3) com um indicador a mais: a falta de consumo essencial separa "muito ouro" de "pouca oferta" |
| **A fazenda achar uma torneira fora do teto** | O ouro das encomendas não passa pelo portão; uma conta nova inscrita recebe ouro desde o 2º dia | Ouro de encomenda só a partir do 14º dia (adotado no base); rampa de conta nova; grafo de funil do 13. O cenário S9 mede o efeito |
| **Os critérios em reais nunca fecharem** | A meta do 13 (dia de teto ≈ R$ 1) e a do 07 (premium em 12 a 20 dias de renda, teto de 1,5 a 2 vezes a venda típica) não cabem juntas (seção 7.1) | Decisão do diretor: trocar a meta do 13 pelo lucro da conta-fazenda (até ~R$ 15 por mês), que é o que de fato importa contra o laranja |
| **Simular demais e lançar de menos** | O modelo vira um fim em si e atrasa a Fase 4 | O 08 fica como ferramenta: `parametros.json` vira a configuração do servidor no alfa, e o mesmo modelo roda contra os dados medidos a cada mês |