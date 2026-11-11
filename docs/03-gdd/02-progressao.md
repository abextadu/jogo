# GDD 02 — Progressão

> **Escopo.** A progressão completa do personagem, com fórmulas e contas: curvas de XP de ofício e de vocação, teto de aprendiz, filas, offline, as duas taxas (ativa e ausente), Maestria e Selo de mestre, números em duas velocidades e a lei do serrote.
> **Depende de:** [00 — Bíblia](00-biblia.md) e [01 — Loops](01-loops.md). **Alimenta:** 03, 05, 06, 07, **08 (simulação)**, 10, 11 e 12.
> **Etiquetas:** [F] fato com fonte · [H] proposta do estúdio · [NV] não verificado. **Todo número é [H] até a simulação.**
> **Como as contas foram feitas.** Um modelo de bolso em Node.js simulou cada perfil em passos de 5 minutos por 420 dias, com as regras deste módulo e as premissas da seção 3.3. O modelo ficou fora do projeto (a única exceção de código é o script do módulo 08); o módulo 08 deve reimplementá-lo e confirmar ou corrigir estes números.

## Resumo

- **Curva de ofício:** `XP(n) = 5 × n^2,75` (XP para subir do nível n ao n+1). São 41,4 milhões de XP e **2.190 horas de fila a 100%** do 1 ao 100. **Primeiro 100 de ofício mestre: D95 no hardcore, D116 no regular, D141 no casual.** A pista de ≥ 90 dias vale até para o hardcore.
- **Sem muro antes do D7:** o regular chega ao 30 no D5,5, com um nível a cada 6 a 15 horas na primeira semana e no máximo 36 h sem algum desbloqueio que importa.
- **Curva de vocação:** `XP_voc(n) = 4 × n^2,75` (80% da de ofício). Regular no 100 de vocação no D134, sem contar cerco e Travessia.
- **Teto de aprendiz (30):** ofícios não mestres vão até o 30 e fazem os tiers T1 a T3. A XP depois do 30 vai para uma reserva de até 861 mil XP (o caminho do 30 ao 40), que vale se o ofício virar mestre.
- **Filas 1 → 3:** a 2ª no primeiro 30 de ofício (regular: D5,5), a 3ª com ofício mestre 60, vocação 40 e 1.000 de Mérito (regular: D29,7). Uma fila por atividade.
- **Offline 24 h → 72 h:** quatro degraus de +12 h (regular: D10, D26, D50 e D65).
- **Taxa ausente 70% → 100%:** seis marcos de +5% (regular: D2, D5,5, D7,5, D30, D48 e D116). **Taxa ativa:** a bancada ativa rende 100% (firme), 125% (forçar) ou 75% com achados ×4 (garimpar), por no máximo 2 h por dia.
- **Maestria:** depois do 100, cada 400 mil XP vira 1 ponto de Maestria (~0,8 dia no regular); técnicas aos 5, 10 e 20 pontos.
- **Selo de mestre:** com 20 pontos no ciclo, o jogador pode passar a oficina: o ofício volta ao 30, ganha um grau do Selo, uma regra nova e um multiplicador de XP nesse ofício de ×2, ×4, ×8, ×16 e ×32 (graus I a V). Ganho por ciclo: +200%, +133%, +114% e +107% em Maestria acumulada. Ciclos de 66, 41, 28 e 22 dias no regular.
- **Duas velocidades:** o pessoal cresce exponencialmente (multiplicador do Selo, Maestria acumulada, XP por nível); o negociável fica limitado (unidades por hora ≤ 1,10 × o nominal, uma fila por ofício, 3 filas por conta).

## 1. Os eixos de progressão

| Eixo | Alcance | Como sobe | Forma de crescimento | Negociável? |
|---|---|---|---|---|
| **Nível de ofício** | 1–100 (mestre); 1–30 (aprendiz) | XP da fila e da obra-prima | Custo por nível cresce como `n^2,75` | Não |
| **Nível de vocação** | 1–100 | Expedição, cerco, Travessia | Idem, 80% do custo | Não |
| **Tier de material** | T1–T6 | Níveis 1, 15, 30, 50, 70 e 85 | Degraus | Os bens do tier, sim |
| **Domínio do tier** | +0% a +10% de velocidade | Níveis acima do desbloqueio do tier | Linear, com teto | Não (o efeito no volume tem teto) |
| **Taxa ausente** | 70% → 100% | Seis marcos | Degraus, com teto | Não |
| **Filas** | 1 → 3 | Duas conquistas | Degraus, com teto | Não |
| **Etapas e regras de fila** | 2 → 5 etapas | Nível total e Selo | Degraus | Não |
| **Teto de offline** | 24 h → 72 h | Quatro conquistas | Degraus, com teto | Não |
| **Nível total** | 12 → 500 | Soma dos 12 ofícios | Linear | Não |
| **Mérito** | sem teto | Encomendas, Obras, cercos (módulo 09) | Linear | Não (preso à conta) |
| **Maestria** | pontos sem teto | XP além do 100 | Linear no ciclo, multiplicada pelo Selo | Não |
| **Selo de mestre** | graus I–V no lançamento | Passar a oficina (reset ao 30) | Exponencial (×2 por grau) | Não |

**Tudo nesta tabela é preso à conta e nada está à venda** (zona vermelha, P7 do [conceito](../02-conceito.md)). O Alvará não toca em nenhum eixo (decisão do checkpoint 2, bíblia seção 5).

## 2. O ritmo da fila

### 2.1 Tempo por ação, XP por ação e tiers

| Tier | Nível de desbloqueio | Tempo por ação na coleta | XP por ação | XP/h nominal | Unidades/h nominal | Unidades/h com domínio máximo |
|---|---|---|---|---|---|---|
| T1 | 1 | 6 s | 10 | 6.000 | 600 | 660 |
| T2 | 15 | 9 s | 20 | 8.000 | 400 | 440 |
| T3 | 30 | 12 s | 36 | 10.800 | 300 | 330 |
| T4 | 50 | 16 s | 60 | 13.500 | 225 | 248 |
| T5 | 70 | 22 s | 110 | 18.000 | 164 | 180 |
| T6 | 85 | 30 s | 190 | 22.800 | 120 | 132 |

"Nominal" é o ritmo da ação a 100%, que é a taxa ativa no lance firme. A fila no piloto automático roda na taxa ausente (seção 8).

**Regra: XP por hora igual em todos os ofícios do mesmo tier** [H]. A XP de uma ação é `XP/h do tier × tempo da ação ÷ 3.600`. Assim, o módulo 06 pode dar a cada receita o tempo que quiser sem mexer na curva. Exemplo: uma lâmina T4 de 120 s rende `13.500 × 120 ÷ 3.600 = 450 XP`.

- **Referência:** o Melvor e os "RuneScape idle" equilibram skills pela XP/h de cada ação ([B01](../01-pesquisa/fichas/B01-melvor-idle.md); [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 9.4). Diferencia-se ao fixar a XP/h por tier, não por receita.
- **Problema:** com doze ofícios, qualquer diferença de XP/h vira "o ofício certo para upar", e o jogador escolhe pela planilha, não pelo gosto.
- **Comportamento:** escolher o ofício pelo papel na cidade e pelo estilo de jogo (coleta roda sozinha; criação pede insumo e decisão; ver o [01](01-loops.md), seção 4).
- **Risco:** a XP igual esconde diferenças reais de esforço (a criação exige comprar insumos). Mitigação: a recompensa da criação vem em ouro e qualidade, não em XP.

**Nota para o módulo 06** [a reconciliar com o 06]: os tempos acima são de coleta e cabem na faixa da bíblia (3 a 30 s por unidade). Equipamento tende a precisar de ações mais longas (por exemplo, 60 a 300 s por peça) para o volume de armas e armaduras caber na demanda. Como a XP/h não depende do tempo da ação, isso não afeta este módulo.

### 2.2 Domínio do tier

`dom(n) = 1 + 0,01 × mín(n − n_tier, 10)`, em que `n_tier` é o nível de desbloqueio do tier mais alto disponível.

Exemplo: Mineração 57, tier T4 (desbloqueado no 50): `dom = 1 + 0,01 × 7 = 1,07`, ou seja, 7% mais rápido que o nominal. No 60, chega a 1,10 e para. No 70, o T5 abre e o domínio recomeça do zero no tier novo.

O domínio vale para velocidade (unidades e XP). **A ferramenta não acelera** [H, a reconciliar com o módulo 05]: a ferramenta do tier é o que permite o ritmo nominal; uma ferramenta de tier abaixo rende −20% por tier de diferença, e sem ferramenta a fila rende −50%. A qualidade da ferramenta (Comum a Obra-prima) muda a durabilidade e a chance de achado, não a velocidade. Isso mantém a velocidade da fila com um teto único e conhecido (1,10 × o nominal), o que importa para a emissão.

- **Referência:** o OGame, em que a produção cresce bem mais devagar que o custo e em unidades iguais para todos ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 9.4); a lei 6 (custo exponencial, fonte linear).
- **Problema:** cada bônus de velocidade empilhado (nível, ferramenta, técnica) multiplica a emissão do veterano; com três ou quatro fontes de +15%, a fila do veterano renderia o dobro da do novato no mesmo tier.
- **Comportamento:** o jogador busca a ferramenta Fina ou Obra-prima porque ela dura mais e acha mais, e volta ao mercado quando ela quebra (demanda para os ofícios de criação).
- **Risco:** ferramenta "sem efeito visível" parecer pouco desejável. Mitigação: a durabilidade e a chance de achado aparecem em números na tela da fila (horas de fila restantes, achados por dia).

### 2.3 A fórmula da fila

```
unidades/h = 3.600 ÷ t_tier × dom(n) × taxa
XP/h       = XP/h_tier     × dom(n) × taxa
```

em que `taxa` é a taxa ausente (0,70 a 1,00) no piloto automático, ou a taxa do lance (1,00, 1,25 ou 0,75) na bancada ativa.

**Exemplo calculado.** O regular no D30 tem Mineração 60 (T4) e taxa ausente de 90%:
- unidades/h = 3.600 ÷ 16 × 1,10 × 0,90 = **222,75 minérios por hora**, ou uma ação a cada 16,2 s;
- XP/h = 13.500 × 1,10 × 0,90 = **13.365 XP por hora**;
- numa noite de 9 h: **2.005 minérios T4 e 120.285 XP**.

## 3. Curva de XP de ofício

### 3.1 A fórmula

```
XP(n) = 5 × n^2,75          (XP para subir do nível n ao n+1, arredondado)
XP_total(L) = soma de XP(n) para n de 1 a L−1
```

Exemplos: `XP(1) = 5`; `XP(10) = 5 × 10^2,75 = 5 × 562,3 = 2.812`; `XP(60) = 388.048`; `XP(99) = 1.538.037`. Total até o 100: **41.376.756 XP**.

**Por que uma potência, e não uma exponencial** [H]. A XP/h já cresce em degraus (de 6.000 no T1 a 22.800 no T6, ×3,8). Somada a uma curva de potência, o tempo por nível cresce devagar no fim, cerca de `n^1,5` entre o 50 e o 100, e não forma um muro. Testamos no modelo uma curva exponencial (`XP(n) = 60 × n × 1,075^n`): o regular chegava ao 30 por volta do D1,6 (rápido demais) e ao 100 só perto do D218, com cerca de duas semanas por nível no fim (um muro).

- **Referência:** a lei do serrote e os muros de fim de jogo do Melvor ([02](../01-pesquisa/02-padroes-matriz-leis.md), lei 1; [B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o penhasco de conteúdo do Clicker Heroes 2 ([G06](../01-pesquisa/fichas/G06-idles-que-morreram.md)).
- **Problema:** a curva tem de render ≥ 90 dias até o primeiro 100 sem muro antes do D7 e sem muro no fim.
- **Comportamento:** níveis rápidos no começo (aprender o jogo), depois um nível a cada 1 a 3 dias, o ritmo de "meta de dias".
- **Risco:** o fim plano demais tira o peso do 100. Mitigação: o 100 abre a Maestria e o Selo, que mudam regras (seção 9).

### 3.2 Exemplo calculado

**Do 60 ao 61, perfil regular no D30.** `XP(60) = 5 × 60^2,75 = 5 × 77.610 = 388.048 XP`. A XP/h da fila é 13.365 (seção 2.3), então são `388.048 ÷ 13.365 = 29,0 h de fila`. O regular dá ao ofício principal 20,5 h de fila por dia (24 h × 0,90 de eficiência × 0,95 da fila; seção 3.3) e soma ~0,5 h de XP ativa (duas obras-primas). Resultado: **~1,4 dia para o nível 61**.

**Do 99 ao 100, perfil regular.** `XP(99) = 1.538.037`. Com T6, domínio máximo e taxa de 95%, a XP/h é `22.800 × 1,10 × 0,95 = 23.826`. São 64,6 h de fila, **~3 dias**. É a espera mais longa da curva, e no mesmo período a Maestria já aparece como próxima camada.

### 3.3 Os perfis do modelo

| Premissa | Casual | Regular | Hardcore |
|---|---|---|---|
| Sessões por dia | 2 (5 a 15 min) | 4 | ~10, com obras-primas |
| **Eficiência do plano** (fração das horas em que a fila produz: insumo que acaba, ferramenta que quebra, plano ruim) | 75% | 90% | 98% |
| Divisão com 1 fila: principal / vocação / aprendiz | 55 / 30 / 15% | 55 / 30 / 15% | 60 / 30 / 10% |
| Com 2 filas: fila A · fila B | A: principal 95% · B: 2º mestre 35%, vocação 50%, aprendiz 15% | igual ao casual | A: principal 100% · B: 40 / 50 / 10% |
| Com 3 filas: A · B · C | A: principal 95% · B: 2º mestre 90% · C: vocação 70%, aprendiz 30% | igual ao casual | A: 100% · B: 2º mestre 95% · C: vocação 75%, aprendiz 25% |
| Obras-primas por dia (cada uma vale 15 min de XP da fila do tier) | 1 | 2 | 8 |
| Bancada ativa por dia (lance firme) | 10 min | 25 min | 90 min |
| Mérito por dia (provisório, módulo 09) | 20 | 40 | 100 |

**Horas de fila por dia no ofício principal**, depois da 2ª fila: casual 17,1 h; regular 20,5 h; hardcore 23,5 h. O teto físico é 24 h: a fila é uma por atividade.

**XP de obra-prima** [H]: cada obra-prima rende a XP de 15 minutos de fila do tier da peça, e só as **8 primeiras do dia** rendem XP (as seguintes rendem a peça e a qualidade). Sem esse teto, a XP ativa viraria o atalho principal para o 100 e quebraria a pista. A obra-prima também consome insumo, o que já limita o número.

### 3.4 Tabela nível → tempo acumulado (ofício mestre principal)

"Horas de fila a 100%" é o mínimo teórico, com a fila sempre na taxa ativa. As colunas por perfil mostram o tempo de calendário desde a criação do personagem (D5,5 = cinco dias e meio), já com a taxa ausente, as filas, as obras-primas e as conquistas de cada perfil.

| Nível | XP para o próximo | XP acumulado | Tier | XP/h nominal (com domínio) | Horas de fila a 100% | Casual | Regular | Hardcore |
|---|---|---|---|---|---|---|---|---|
| 5 | 418 | 368 | T1 | 6.240 | 0,06 | 0,2 h | 0,1 h | 0,1 h |
| 10 | 2.812 | 6.156 | T1 | 6.540 | 0,96 | 3,2 h | 2,6 h | 1,8 h |
| 15 | 8.575 | 30.142 | T2 | 8.000 | 4,6 | 15 h | 12 h | 9 h |
| 20 | 18.915 | 91.638 | T2 | 8.400 | 12,1 | D1,7 | D1,4 | D1,0 |
| 25 | 34.939 | 215.774 | T2 | 8.800 | 26,6 | D3,6 | D2,9 | D2,1 |
| **30** | 57.684 | 433.069 | T3 | 10.800 | 51,3 | **D6,8** | **D5,5** | **D4,0** |
| 35 | 88.137 | 779.119 | T3 | 11.340 | 82,6 | D9,1 | D7,4 | D5,4 |
| 40 | 127.243 | 1.294.370 | T3 | 11.880 | 127,2 | D12,2 | D9,8 | D7,4 |
| 45 | 175.916 | 2.023.926 | T3 | 11.880 | 188,6 | D16,5 | D13,3 | D10,2 |
| **50** | 235.038 | 3.017.395 | T4 | 13.500 | 272,2 | **D22,2** | **D17,9** | **D13,9** |
| 55 | 305.469 | 4.328.754 | T4 | 14.175 | 367,4 | D28,6 | D23,2 | D18,2 |
| 60 | 388.048 | 6.016.234 | T4 | 14.850 | 484,1 | D36,5 | D29,7 | D23,5 |
| 65 | 483.595 | 8.142.221 | T4 | 14.850 | 627,3 | D45,6 | D37,2 | D29,6 |
| **70** | 592.911 | 10.773.162 | T5 | 18.000 | 804,4 | **D57,0** | **D46,5** | **D37,2** |
| 75 | 716.784 | 13.979.485 | T5 | 18.900 | 979,0 | D68,0 | D55,3 | D44,7 |
| 80 | 855.988 | 17.835.528 | T5 | 19.800 | 1.179,1 | D80,1 | D65,3 | D53,3 |
| **85** | 1.011.281 | 22.419.467 | T6 | 22.800 | 1.410,6 | **D94,1** | **D76,9** | **D62,8** |
| 90 | 1.183.415 | 27.813.255 | T6 | 23.940 | 1.642,4 | D108,2 | D88,5 | D72,3 |
| 95 | 1.373.125 | 34.102.571 | T6 | 25.080 | 1.900,1 | D123,8 | D101,4 | D82,8 |
| **100** | — (Maestria) | 41.376.756 | T6 | 25.080 | 2.190,2 | **D141,4** | **D115,8** | **D94,7** |

**O segundo ofício mestre** chega depois, porque só ganha fila própria com a 3ª fila: 30 no D16,9 / D13,6 / D10,4; 60 no D67 / D48,5 / D40; 100 no **D176 / D140 / D120** (casual / regular / hardcore).

**A primeira sessão** é ativa e corre na taxa de 100%: o nível 5 sai em ~4 min (368 XP a ~6.200 XP/h) e o 7 em ~14 min (1.478 XP). O módulo 12 desenha esses minutos.

### 3.5 Checagem da pista de conteúdo

| Requisito da bíblia (6.2) | Resultado no modelo | Situação |
|---|---|---|
| ≥ 90 dias de jogo normal até o primeiro 100 de ofício mestre | Regular D116; casual D141; **até o hardcore leva 95 dias** | Cumpre, com folga de 5 dias no hardcore |
| Nenhum muro sério antes do D7 | Regular chega ao 30 no D5,5; na semana 1, um nível a cada 6 a 15 h e no máximo 36 h sem desbloqueio (seção 11) | Cumpre |
| Era de ~13 semanas | No fim da 1ª Era (D91), o regular está perto do 90 e o hardcore perto do 98; o primeiro 100 do servidor cai na 1ª semana da 2ª Era, junto com a primeira Travessia | Coerente |

**Leitura da bíblia** [H]: "jogo normal" foi lido como o perfil regular. Cumprimos também a leitura mais dura (o primeiro 100 do servidor só depois do D90), porque a vantagem do hardcore no ofício principal é de apenas ~22% sobre o regular: a fila é uma por atividade e roda no máximo 24 h por dia.

**Botões de ajuste para o módulo 08:** o coeficiente `5` desloca todas as datas na mesma proporção (no modelo, com 5,5 no lugar de 5, o 100 do regular foi do D115,8 ao D127,4: +10,0%). O expoente `2,75` muda a forma: maior atrasa o fim mais que o começo. A eficiência do plano e a taxa ausente são as premissas de que as datas mais dependem; se o alfa medir eficiências diferentes, recalibrar o coeficiente, não as regras.

## 4. Curva de XP de vocação

### 4.1 A fórmula

```
XP_voc(n) = 4 × n^2,75        (80% da curva de ofício)
```

Exemplo: `XP_voc(40) = 4 × 40^2,75 = 4 × 25.449 = 101.795 XP`. Total até o 100: **33.101.406 XP**, ou 1.752 horas de expedição a 100%.

A expedição é uma atividade de fila (ver o [01](01-loops.md), seção 2, L5). As regiões de expedição seguem os mesmos degraus dos tiers (abrem na vocação 1, 15, 30, 50, 70 e 85) e a mesma XP/h por degrau da tabela 2.1 [H, a reconciliar com o módulo 04]. O "encontro" faz o papel da ação, e a XP de cada encontro segue a regra da seção 2.1.

**Por que 80%** [H]: a vocação recebe menos horas de fila que o ofício principal (30% da fila única no começo, 50% da 2ª fila, 70% a 75% da 3ª). Com a curva mais barata, ela anda perto do ofício principal, e o jogador chega à primeira Travessia (D91) com a vocação perto do 77 (casual), do 85 (regular) ou do 90 (hardcore), antes de contar a XP do cerco.

### 4.2 Tabela nível → tempo acumulado (só expedição)

O modelo conta só a XP da fila de expedição. O cerco e a Travessia também dão XP de vocação (módulos 04 e 10); por isso, estas datas são o limite mais lento.

| Nível | XP para o próximo | XP acumulado | Horas de expedição a 100% | Casual | Regular | Hardcore |
|---|---|---|---|---|---|---|
| 10 | 2.249 | 4.925 | 0,8 | 4,8 h | 4,1 h | 3,8 h |
| 20 | 15.132 | 73.310 | 9,7 | D2,6 | D2,1 | D2,0 |
| 30 | 46.147 | 346.454 | 41,0 | D8,8 | D7,2 | D6,0 |
| 40 | 101.795 | 1.035.494 | 101,7 | D17,1 | D13,9 | D12,1 |
| 50 | 188.030 | 2.413.913 | 217,8 | D32,2 | D26,5 | D23,6 |
| 60 | 310.439 | 4.812.983 | 387,3 | D52,4 | D40,0 | D34,3 |
| 70 | 474.329 | 8.618.527 | 643,5 | D74,5 | D58,3 | D50,4 |
| 80 | 684.790 | 14.268.420 | 943,3 | D99,6 | D79,1 | D68,5 |
| 90 | 946.732 | 22.250.603 | 1.313,9 | D130,5 | D104,9 | D90,6 |
| **100** | — | 33.101.406 | 1.752,1 | **D165,9** | **D134,5** | **D115,7** |

### 4.3 Depois do 100

A bíblia reserva a Maestria aos ofícios mestres (seção 6.2). **Recomendação** [H, a reconciliar com o módulo 03]: no lançamento, a vocação para de subir no 100; a expedição segue rendendo peles, carnes e achados. O crescimento depois do 100 vem de equipamento e de build (módulo 03), e a Travessia dá a progressão sazonal. Se o módulo 03 quiser uma camada além do 100 para a vocação, ela deve seguir as regras da seção 9 (prestígio que muda uma regra), com mudança na bíblia.

- **Referência:** o personagem único com vocação fixa (decisão do checkpoint 2); a camada de temporada como prestígio coletivo (lei 12).
- **Problema:** dar ritmo de combate parecido com o de ofício, sem que a vocação roube fila do ofício.
- **Comportamento:** usar a 3ª fila para a vocação e chegar à Travessia pronto para ela.
- **Risco:** a vocação "acabar" no D115 a D166 e o combate perder meta. Mitigação: a Travessia (a partir do D91) e o equipamento que se desgasta mantêm o combate com objetivo.

## 5. Ofício mestre e teto de aprendiz

### 5.1 As regras

1. Todo personagem pode praticar os 12 ofícios. Todos começam como **aprendiz**: teto no nível 30 e acesso aos tiers T1 a T3.
2. Ao chegar ao 30 num ofício, o jogador pode **tomá-lo como ofício mestre**, se tiver vaga. São 2 vagas. O mestre sobe até o 100, faz os tiers T4 a T6 e acumula Maestria. A escolha é um gesto simples, com uma tela que explica o que muda; não custa nada.
3. Os outros 10 ofícios ficam no teto de aprendiz.

Na prática, a primeira vaga é preenchida na virada do 30 (D4 a D7, conforme o perfil), e a segunda quando outro ofício chega ao 30 (regular: D13,6).

### 5.2 A XP depois do 30: a reserva

- A fila de um aprendiz no 30 continua produzindo normalmente (T1 a T3).
- A XP ganha vai para a **reserva do ofício**, até **861.301 XP**, que é exatamente a XP do 30 ao 40. No T3, com taxa ausente de 85%, a reserva enche em `861.301 ÷ (10.800 × 0,85) = 94 h` de fila, uns 4 a 5 dias de fila dedicada.
- Se o ofício virar mestre depois, a reserva entra na hora: ele pula do 30 para até o 40.
- Com a reserva cheia, a fila segue rendendo bens, sem XP.
- No 30, o aprendiz não tem domínio do T3 (o domínio conta níveis acima do 30). O mestre trabalha até 10% mais rápido no T3 que o aprendiz.

### 5.3 Trocar de ofício mestre

- **Uma troca por Era** [H]. O ofício que deixa de ser mestre fica **adormecido**: guarda o nível, a Maestria e os Selos, mas trabalha como aprendiz (T1 a T3) até voltar a ser mestre.
- O novo mestre parte do nível que tiver (no mínimo 30) mais a reserva.
- A conquista feita com o ofício antigo (fila, offline, taxa) não se perde: os requisitos contam o maior nível já alcançado.

### 5.4 Nível total

A soma dos níveis dos 12 ofícios, de 12 (todos no 1) a **500** (dois mestres no 100 e dez aprendizes no 30). Ela dá marcos que premiam treinar os aprendizes:

| Nível total | O que dá | Regular |
|---|---|---|
| 100 | +12 h de teto de offline | D10,4 |
| 150 | 3ª etapa por fila | D21,0 |
| 200 | Título | D32,9 |
| 250 | 4ª etapa por fila | D41,5 |
| 300 | +5% de taxa ausente | D48,2 |
| 400 | Título | D64,3 |
| 500 | Título "de todos os ofícios" (todos os aprendizes no 30 e dois mestres no 100) | depois do 2º mestre no 100 (D140 ou mais) |

### 5.5 As quatro perguntas

- **Referência:** a especialização do Milky Way Idle e a limitação de profissões dos MMOs ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); o pilar "ninguém faz tudo" do [conceito](../02-conceito.md). **Diferencia-se** do Melvor e dos idles em que um jogador faz tudo sozinho ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)).
- **Problema:** a interdependência só existe se os tiers altos dependerem de poucos mestres; mas o jogador solitário precisa de uma rota viável (risco "o solitário vai embora", [conceito](../02-conceito.md), seção 7).
- **Comportamento:** fazer sozinho o básico (T1 a T3 em todos os ofícios), comprar o avançado de outros mestres e escolher os dois ofícios mestres depois de experimentar.
- **Risco:** um ofício sem mestres suficientes trava a cadeia. Mitigação: oficinas NPC de reforço com preço teto e qualidade baixa ([conceito](../02-conceito.md)); a troca por Era deixa a oferta se mover para onde falta mestre; o módulo 08 mede a distribuição de mestres por ofício.

## 6. Filas e etapas

### 6.1 As regras

1. O personagem tem de **1 a 3 filas em paralelo**.
2. **Cada fila roda uma atividade diferente:** um ofício ou uma expedição. Duas filas nunca rodam o mesmo ofício.
3. Filas **nunca estão à venda**. O Alvará e o Baú do Mascate não dão fila (zona vermelha).
4. **Fila conquistada é permanente.** O Selo, a troca de ofício mestre ou qualquer reset não tiram fila, porque os requisitos contam o maior nível já alcançado.

### 6.2 Como se conquistam

| Fila | Requisito | Casual | Regular | Hardcore |
|---|---|---|---|---|
| 1ª | Início | D0 | D0 | D0 |
| 2ª | Primeiro ofício no 30 e vocação 10 | D6,8 | D5,5 | D4,0 |
| 3ª | Ofício mestre no 60, vocação 40 e 1.000 de Mérito | D50 | D29,7 | D23,5 |

**Por que esses requisitos** [H]: a 2ª fila chega na virada do 30 e alivia a decisão mais dura da primeira semana (dividir uma fila só entre o ofício e a vocação). A 3ª pede os três pilares de uma vez: ofício, combate e cidade (Mérito). No casual, o Mérito é o que segura a 3ª fila até o D50; se a simulação mostrar que isso afasta o casual, o requisito de Mérito é o primeiro a baixar.

### 6.3 Etapas e regras de fila (a automação conquistada)

Dentro de cada fila, as **etapas** encadeiam ações em sequência ("minerar 1.000, depois fundir"). As **regras** dizem o que fazer quando algo muda.

| O que a fila ganha | Requisito | Regular |
|---|---|---|
| 2 etapas por fila; "repetir até N"; "entregar X% à encomenda ou à Obra"; **proteções ligadas:** pular a etapa sem insumo, usar a ferramenta reserva, recuar a expedição | Início | D0 |
| 3 etapas por fila | Nível total 150 | D21 |
| 4 etapas por fila | Nível total 250 | D41,5 |
| 5 etapas e regras condicionais ("se o estoque de X passar de N, troque para Y") | Selo grau I, opção "Oficina de mestre" (seção 9.2) | D131 |

**Princípio** [H]: **proteção é padrão; otimização se conquista.** As regras que evitam perda vêm ligadas no primeiro dia. As que otimizam se conquistam jogando.

**Limite** [H]: nenhuma regra de fila compra ou vende no mercado. O mercado só recebe ordens postas pelo jogador, que ficam abertas enquanto ele está fora. É a política "leitura liberada, escrita humana" ([07](../01-pesquisa/07-tecnica-idles-online.md)).

### 6.4 As quatro perguntas

- **Referência:** a automação conquistada por marco do Antimatter Dimensions ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)); filas de tarefas que aliviam a memória do jogador ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.1). **Diferencia-se** do MWI, que vende vagas de fila ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)), e do Trimps, cuja automação de verdade virou um script de terceiros ([A08](../01-pesquisa/fichas/A08-trimps.md)).
- **Problema:** o que o jogo não automatiza vira script e bot (insight 16 da [síntese](../01-pesquisa/00-sintese.md)); e o ausente perde produção quando o plano é curto demais.
- **Comportamento:** planos mais longos e mais espertos conforme o jogador domina o jogo; a decisão resolvida vira automação, a interessante continua humana.
- **Risco:** a 3ª fila multiplica a emissão do veterano por até 3 em relação ao novato com uma fila. Mitigação: a fila é uma por atividade, então a emissão de um mesmo bem por conta tem teto de 24 h por dia; o teto de emissão negociável por conta (módulo 07) segura o resto.

## 7. Offline

### 7.1 As regras

1. O relógio de ausência começa na última ação do jogador. Quando ele volta, o relógio zera.
2. As filas produzem até o **teto de offline**. Depois, param (com o rabo da seção 7.3, se aprovado).
3. Ordens de mercado, entregas já feitas, prazos de encomenda e o cerco não dependem do teto: as ordens ficam abertas, e o cerco usa a inscrição.
4. A fila também para antes do teto se o insumo acabar e não houver etapa seguinte; o relatório de volta explica.
5. O cálculo é feito no servidor, por eventos, na hora em que alguém precisa do estado ([07](../01-pesquisa/07-tecnica-idles-online.md)).
6. O teto nunca está à venda e é igual para todos no início: **24 h**.

### 7.2 Como o teto sobe: 24 h → 72 h

Quatro degraus de +12 h, cada um de uma área do jogo, conquistáveis em qualquer ordem:

| Degrau | Requisito | Casual | Regular | Hardcore |
|---|---|---|---|---|
| +12 h | Nível total 100 | D12,8 | D10,4 | D9,0 |
| +12 h | Vocação 50 | D32,2 | D26,5 | D23,6 |
| +12 h | 2.000 de Mérito | D100 | D50 | D20 |
| +12 h | Ofício mestre no 80 | D80,1 | D65,3 | D53,3 |

**Teto resultante:**

| Teto | Casual | Regular | Hardcore |
|---|---|---|---|
| 36 h | D12,8 | D10,4 | D9,0 |
| 48 h | D32,2 | D26,5 | D20,0 |
| 60 h | D80,1 | D50,0 | D23,6 |
| 72 h | D100 | D65,3 | D53,3 |

### 7.3 O rabo depois do teto [proposta de mudança na bíblia]

Depois do teto, a fila não corta seco: **segue por mais 12 h a 25% da taxa ausente** [H]. Isso equivale a 3 h de fila a mais, e só acontece em ausências maiores que o teto. Quem dormiu demais ou viajou não encontra a oficina parada há horas.

- **Referência:** a recomendação do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2: rendimento decrescente é melhor que corte seco; Pecorella chamou de erro o teto de 2 h do Egg Inc. (idem, seção 6.1).
- **Alternativa:** manter o corte seco da bíblia, que é mais simples de explicar. **Recomendação:** adotar o rabo; o custo na emissão é pequeno e o ganho de confiança é grande.

### 7.4 As quatro perguntas

- **Referência:** o Melvor, com 24 h simuladas na volta ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o KoL, que acumula até 5 dias de turnos ([D03](../01-pesquisa/fichas/D03-kingdom-of-loathing.md)). **Diferencia-se** do MWI, que cortou o offline de 16 para 10 h e vende cada hora extra até 72 h ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).
- **Problema:** o ausente precisa de folga para o fim de semana e a viagem, mas todo aumento de teto é política monetária: o IdleMMO previu uma "enxurrada de itens" ao ampliar o seu ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), seção 5.1).
- **Comportamento:** pausas saudáveis sem medo; o teto maior como conquista de quem se envolveu com o jogo.
- **Risco:** uma ausência de 72 h despeja de uma vez três dias de produção no mercado. Mitigação: o teto de emissão negociável é contado por dia de produção (o servidor sabe quando cada unidade nasceu), então 72 h fora valem três tetos diários, não um teto gigante [a reconciliar com o módulo 07].

## 8. As duas taxas visíveis: ausente e ativa

Toda tela de fila mostra os dois números (o desenho do loop está no [01](01-loops.md), L2 e L3).

### 8.1 Taxa ausente: 70% → 100%

```
taxa_ausente = 0,70 + 0,05 × (marcos obtidos)        de 0,70 a 1,00
```

Vale para todas as filas da conta, em unidades e em XP, sempre que a fila não está na bancada ativa (inclusive com a aba aberta). **Nunca está à venda** (zona vermelha). Os seis marcos vêm de áreas diferentes do jogo:

| Marco (+5%) | Requisito | Casual | Regular | Hardcore |
|---|---|---|---|---|
| 1 | Vocação 20 | D2,6 | D2,1 | D2,0 |
| 2 | Primeiro ofício no 30 | D6,8 | D5,5 | D4,0 |
| 3 | 300 de Mérito | D15,0 | D7,5 | D3,0 |
| 4 | Ofício mestre no 60 | D36,5 | D29,7 | D23,5 |
| 5 | Nível total 300 | D65,5 | D48,2 | D53,8 |
| 6 | Ofício mestre no 100 | D141,4 | D115,8 | D94,7 |

**Taxa resultante** (os marcos podem vir em qualquer ordem):

| Taxa ausente | Casual | Regular | Hardcore |
|---|---|---|---|
| 70% | D0 | D0 | D0 |
| 75% | D2,6 | D2,1 | D2,0 |
| 80% | D6,8 | D5,5 | D3,0 |
| 85% | D15,0 | D7,5 | D4,0 |
| 90% | D36,5 | D29,7 | D23,5 |
| 95% | D65,5 | D48,2 | D53,8 |
| 100% | D141,4 | D115,8 | D94,7 |

O hardcore chega ao 95% depois do regular porque põe menos fila nos aprendizes (o marco 5 depende do nível total). É um efeito desejado: o marco premia quem treina os ofícios de apoio.

**Moldura** [H]: a interface chama a taxa de "ritmo da oficina" e mostra o próximo marco ("+5% quando sua vocação chegar ao 20"). É a lição do descanso do WoW: o mesmo número, apresentado como conquista, e não como castigo ([03](../01-pesquisa/03-alem-do-idle.md), seção 17).

### 8.2 Taxa ativa: a bancada ativa

| Lance | Ritmo | Efeito | Quando faz sentido |
|---|---|---|---|
| **Firme** | 100% | Normal | O padrão; é o que vale quando o jogador não escolhe |
| **Forçar** | 125% | A ferramenta gasta em dobro | Prazo de encomenda; insumo barato; ferramenta sobrando |
| **Garimpar** (coleta) / **Apurar** (transformação e criação) | 75% | Chance de achado ativo ×4 (coleta), ou chance de a peça da fila subir de qualidade ×4 (demais) | Quando o achado ou a qualidade valem mais que o volume |

Regras [H]: um lance a cada 45 s; uma fila por vez na bancada ativa; **no máximo 2 h por dia por conta**; sem resposta em dois lances seguidos, a fila volta à taxa ausente sem perda. A chance-base dos achados e da qualidade é do módulo 06.

### 8.3 Quanto o ativo ganha em volume (exemplo calculado)

- **No D1** (taxa ausente de 70%): a bancada no lance firme rende `1,00 ÷ 0,70 = 1,43`, isto é, +43% enquanto dura; forçando, `1,25 ÷ 0,70 = 1,79`, +79%. No dia inteiro, o máximo possível é forçar as 2 h: `2 × (1,25 − 0,70) = 1,1 h` de fila nominal a mais, sobre `24 × 0,70 = 16,8 h`: **+6,5% no volume daquela fila**, com o dobro de desgaste da ferramenta nessas 2 h.
- **Depois do 100** (taxa de 100%): o firme não acrescenta nada; forçando 2 h, `2 × 0,25 = 0,5 h` sobre 24 h: **+2,1%**.

O multiplicador de renda bruta do ativo sobre o ausente tem, portanto, teto baixo e conhecido, que cai conforme o jogador progride, como pede o [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2. O ganho real do ativo está nos exclusivos de cada lado, listados no [01](01-loops.md), L3: obra-prima, achados ativos, mercado e janelas ativas para o ativo; volume contínuo, achados do ausente e ordens persistentes para o ausente.

### 8.4 As quatro perguntas

- **Referência:** a taxa AFK separada, visível e melhorável do IdleOn, de 20% a ~85% ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)). **Diferencia-se** em três pontos: começa em 70%, chega a 100% e nunca está à venda (o IdleOn vende "+30% AFK gains"); o ativo é uma decisão com teto, não um cliente aberto.
- **Problema:** dar sentido à presença sem punir a ausência; e apertar a fonte no lançamento, quando a inflação é mais violenta (insight 9 da [síntese](../01-pesquisa/00-sintese.md)): com todos em 70% no D1, a emissão começa 30% abaixo do nominal e sobe conforme a cidade progride.
- **Comportamento:** envolver-se com a cidade e com os ofícios de apoio para subir a taxa; pôr as mãos onde o achado ou a qualidade valem a pena.
- **Risco:** o 70% ser lido como castigo ("por que minha fila rende menos?"). Mitigação: a moldura de "ritmo da oficina"; o primeiro +5% chega no D2; o caminho até 100% fica visível desde o primeiro dia.

## 9. Maestria e Selo de mestre (o prestígio)

### 9.1 Maestria: depois do 100

- Depois do 100, a XP do ofício mestre vira **pontos de Maestria**: **1 ponto a cada 400.000 XP** [H]. No T6, com domínio máximo e taxa de 100%, são 15,9 h de fila por ponto, ou **~0,8 dia no regular**.
- A Maestria tem **três técnicas** dentro de cada ciclo [H, efeitos a reconciliar com os módulos 05 e 06]:

| Pontos no ciclo | Técnica | Efeito | Regular |
|---|---|---|---|
| 5 | **Olho de mestre** | A fila desse ofício passa a produzir uma pequena fração de peças Finas (ex.: 5%); na coleta, o módulo 06 define o equivalente (ex.: mais achados) | D119,6 |
| 10 | **Mão leve** | −15% de desgaste de ferramenta nesse ofício | D123,4 |
| 20 | **Selo disponível** | O jogador pode passar a oficina (seção 9.2) | D131,0 |

- **Ficar no 100 é uma escolha válida.** A Maestria continua acumulando, sem teto, e vale inteira no Selo quando o jogador quiser. Nada se perde por esperar.

### 9.2 O Selo de mestre: o que reseta, o que fica, o que muda

Na ficção, o mestre passa a oficina a um aprendiz e recomeça como oficial, agora com o Selo.

**O que reseta:**
- O nível do ofício volta ao **30**, o teto de aprendiz. Os tiers T4 a T6 desse ofício fecham até ele voltar ao 50, ao 70 e ao 85.
- Os pontos de Maestria do ciclo são gravados no Selo como **Maestria acumulada**, e as técnicas do ciclo fecham (reabrem no próximo 100, mais depressa).

**O que fica:**
- Tudo o que foi produzido, vendido, guardado ou anunciado; o ouro; as ordens e posições no mercado. **O reset pessoal nunca apaga bem negociável** (insight 4 da [síntese](../01-pesquisa/00-sintese.md)).
- Filas, teto de offline, taxa ausente e etapas: as conquistas contam o maior nível já alcançado.
- Mérito, títulos, coleção, nível total (pelo maior nível) e a vaga de mestre.
- Os graus do Selo e as regras escolhidas em cada um.

**O que muda:**
- **Multiplicador de XP desse ofício:** `mult = 1 + Maestria acumulada ÷ 20`. Tomando o Selo no mínimo de cada grau, dá **×2, ×4, ×8, ×16 e ×32**. Vale para a XP desse ofício e, portanto, para a Maestria dele. **Não mexe em unidades por hora.**
- **Uma regra nova por grau, escolhida entre duas.** A escolha é de identidade, à moda das facções do Realm Grinder ([A04](../01-pesquisa/fichas/A04-realm-grinder.md)). Menu-base, que o módulo 06 adapta a cada ofício [H]:

| Grau | Tema | Opção A | Opção B |
|---|---|---|---|
| I | Oficina | **Oficina de mestre:** a fila desse ofício ganha a 5ª etapa e regras condicionais | **Mão firme:** a obra-prima desse ofício ganha um passo de decisão a mais |
| II | Ensino | **Aprendizes:** até 2 jogadores tomados como aprendizes ganham +50% de XP nesse ofício até o 30; o mestre ganha Mérito quando cada um chega ao 30 | **Conserto de mestre:** os consertos que você faz reduzem menos a durabilidade máxima da peça (um serviço que outros jogadores procuram) |
| III | Assinatura | **Receita de assinatura:** uma variante exclusiva de receita T5 ou T6, escolhida entre duas | **Marca do mestre:** suas peças levam seu nome e o grau do Selo, visíveis na Feira e no Pregão |
| IV | Reforja | **Reforja sem perda:** reforjar uma peça não arrisca destruí-la (o exemplo do [conceito](../02-conceito.md)); o material da reforja continua sendo consumido | **Fusão:** fundir duas peças gastas numa só, com a durabilidade máxima restaurada; as duas peças somem (dreno) |
| V | Lenda | **Nome na Obra:** seu nome gravado numa Obra concluída do Arraial (cosmético) | **Obra-prima nomeada:** suas obras-primas recebem nome e história, rastreados no livro-razão (cosmético) |

### 9.3 Ganho por ciclo e duração dos ciclos

O mínimo de Maestria no ciclo dobra a cada grau: `mínimo(g) = 20 × 2^(g − 1)`.

| Grau | Mínimo no ciclo | Maestria acumulada | **Ganho do ciclo** | Multiplicador | Selo no regular | Duração do ciclo | Sem T4 / T5 / T6 depois do Selo | Volta ao 100 |
|---|---|---|---|---|---|---|---|---|
| I | 20 | 20 | — | ×2 | D131 | 131 dias (desde a criação) | 5 / 18 / 32 dias | 51 dias |
| II | 40 | 60 | **+200%** | ×4 | D197 | 66 dias | 2,6 / 9 / 16 dias | 25 dias |
| III | 80 | 140 | **+133%** | ×8 | D238 | 41 dias | 1,3 / 4,5 / 8 dias | 13 dias |
| IV | 160 | 300 | **+114%** | ×16 | D266 | 28 dias | 0,7 / 2,2 / 4 dias | 6 dias |
| V | 320 | 620 | **+107%** | ×32 | D287 | 22 dias | 0,3 / 1,1 / 2 dias | 3 dias |

Selos nos outros perfis: casual D160, D240, D289, D323 e D349; hardcore D107, D162, D195, D218 e D236.

**Exemplo calculado (Selo II, regular).** Maestria acumulada = 20 + 40 = 60, então `mult = 1 + 60 ÷ 20 = 4`. A volta do 30 ao 100 custa 2.139 h de fila a 100% (2.190 − 51; tabela 3.4); dividida por 4, são 535 h, ou **25 dias** a ~21 h de fila por dia. Depois, o grau III pede 80 pontos: `80 × 400.000 ÷ (25.080 × 4) = 319 h`, mais **~15 dias**. O ciclo inteiro dá 40 dias, e o modelo deu 41.

**Por que os ciclos encurtam e depois param de encurtar** [H]: a volta ao 100 cai pela metade a cada grau (o multiplicador dobra), mas a fase de Maestria fica em ~15 dias, porque o mínimo dobra junto com o multiplicador. O ciclo converge para pouco mais de duas semanas. É o "refaz rápido o que já foi dominado e vai mais longe" da lei 4, sem que o ciclo vire nada.

**A regra de bolso do 02a** (resetar com +50% a +200% da moeda de prestígio; [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.1) é cumprida com folga: o ganho mínimo de cada ciclo vai de +107% a +200%. Quem espera mais acumula mais e ganha mais.

### 9.4 A decisão: quando tomar o Selo

| Se o jogador toma o Selo agora | Se espera |
|---|---|
| Ganha a regra nova e o multiplicador já | Acumula mais Maestria, e o multiplicador seguinte fica maior |
| Fica sem T4 a T6 nesse ofício por um tempo (tabela 9.3) e perde essa renda | Continua vendendo T6 e mantém as técnicas do ciclo |

Três jogadas possíveis [H]: **alternar** os dois ofícios mestres (um no Selo, o outro no 100, segurando a renda); **estocar** T6 antes do Selo; e **cronometrar** com o mercado (por exemplo, no começo de uma Era, quando a demanda muda). Antes de confirmar, a tela mostra a projeção: "Selo agora: ×4; sem T6 por ~16 dias; volta ao 100 em ~25 dias".

**Automação do reset (lei 4):** a partir do grau III, quando o momento certo já virou fórmula para o jogador, ele pode ligar o "Selo automático ao atingir o mínimo". É opção, nunca padrão.

### 9.5 Quantas camadas

1. **Maestria:** contínua, sem reset. Pontos e três técnicas por ciclo.
2. **Selo de mestre:** o reset do ofício ao 30. **Cinco graus no lançamento;** proposta de um grau novo a cada 1 ou 2 Eras, sempre com uma regra nova (lei 2; insight 17 da [síntese](../01-pesquisa/00-sintese.md)). No regular, o grau V chega no D287, no começo da 4ª Era.
3. **Era e Travessia:** o prestígio coletivo, sem reset pessoal, com fim digno a cada temporada (lei 12). Desenho no módulo 10.

### 9.6 As quatro perguntas

- **Referência:** a regra de bolso e o "refaz rápido e vai mais longe" de Pecorella ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.1); a automação do reset no Antimatter Dimensions ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)); a facção como identidade no Realm Grinder ([A04](../01-pesquisa/fichas/A04-realm-grinder.md)); o Selo do [conceito](../02-conceito.md). **Diferencia-se** dos prestígios de idle solo porque nunca toca em bem negociável e volta ao 30, não ao 1.
- **Problema:** conteúdo depois do 100; uma regra nova em vez de "o mesmo, mais rápido"; e o veterano que, sem rotação, ocuparia o T6 para sempre.
- **Comportamento:** ciclos de domínio e identidade; rotação periódica dos produtores de topo; o ensino de novatos (opção Aprendizes).
- **Risco:** ficar 32 dias sem T6 depois do Selo I parecer castigo; muitos mestres tomarem o Selo ao mesmo tempo e faltar T6; regras do Selo que reduzem drenos (conserto, reforja). Mitigações na seção "Como isso pode dar errado".

## 10. Números em duas velocidades

O piso P1 do [conceito](../02-conceito.md) pede que o pessoal possa crescer sem limite e que o negociável fique em unidades que cabem na cabeça (leis 5 e 6 do [02](../01-pesquisa/02-padroes-matriz-leis.md)). Aqui está onde cada coisa mora:

| Cresce sem limite (pessoal, preso à conta) | Quanto | Fica linear ou com teto (negociável ou ligado à emissão) | Quanto |
|---|---|---|---|
| XP por nível | `XP(10) = 2.812` → `XP(99) = 1.538.037` (×547) | Unidades por ação | 1, sempre |
| XP total | 6.156 no 10 → 41,4 milhões no 100 | Velocidade da fila | ≤ 1,10 × nominal (domínio) × taxa ≤ 1,00; forçar (×1,25) só na bancada ativa, até 2 h/dia |
| Multiplicador de XP do Selo | ×2 → ×32, dobrando por grau | Unidades por hora por fila | T1: 420 a 660; T6: 84 a 132 |
| Maestria acumulada | 20 → 620 em cinco Selos (×31) | Unidades por dia de um mesmo bem, por conta | ≤ 24 h de fila: T1 ≤ 15.840; T6 ≤ 3.168 (+66 forçando) |
| Mérito | sem teto | Filas por conta | ≤ 3, uma por atividade |
| Nível total, coleção, títulos | até 500; sem teto | Teto de offline | ≤ 72 h (+ rabo de 3 h equivalentes, se aprovado) |
| | | Taxa ausente | ≤ 100% |
| | | Ganho de volume do ativo | ≤ +6,5% do dia (cai para +2,1% no fim) |
| | | Achados do ausente | ≤ 20% por hora contínua |
| | | Venda a NPC | Preço decrescente por volume do dia (módulo 07) |
| | | Emissão negociável por conta e dia | Teto do módulo 07, contado por dia de produção |

**O exemplo que resume a regra** [H]: um mestre no Selo V tem multiplicador ×32 e sobe do 30 ao 100 em 3 dias. Mas, no T6, a fila dele produz os mesmos 132 minérios por hora (no máximo) que a de qualquer outro mestre acima do 95. O exponencial acelera o nível, não a torneira.

**Onde o exponencial pode tocar o negociável: só nos custos.** Se algum módulo criar uma compra pessoal paga com bens negociáveis (melhoria de oficina, casa, Obra), o custo pode crescer exponencialmente com o nível, porque é dreno (lei 6). A fonte negociável nunca cresce assim.

## 11. A lei do serrote: tempo até o próximo desbloqueio ou compra que importa

A lei 1 do [02](../01-pesquisa/02-padroes-matriz-leis.md) pede calibrar a espera até a próxima compra que importa, por faixa, e derrubá-la antes que vire muro. A tabela usa o perfil regular. A coluna "maior espera" vem do modelo, contando como desbloqueio: receita nova (premissa: a cada 3 níveis até o 30 e a cada 5 depois, a reconciliar com o módulo 06), tier, fila, offline, taxa, etapa, Maestria, Selo, cada cerco semanal e cada encomenda concluída (premissa: uma a cada 4 dias no regular).

| Faixa | Ritmo de nível (ofício principal) | Desbloqueios que importam | Maior espera sem desbloqueio | A compra que importa (alvo para os módulos 05 e 07) | Três metas: minutos · horas · dias |
|---|---|---|---|---|---|
| **1ª sessão** (0–15 min) | Um nível a cada 1 a 3 min (do 2 ao 7) | Primeira receita, primeira venda, primeiro lance | < 5 min | Nenhuma: o jogo dá a ferramenta T1 | Lance · nível 8 · 2ª fila |
| **1ª hora** | Um nível a cada 10 a 20 min (até o ~9) | Receita do nível 9; primeira ordem na Bolsa; primeira encomenda aberta | ~40 min | Insumo ou ferramenta T1 melhor: minutos de renda | Venda · nível 10 · tier T2 |
| **Resto do D1** | Um nível a cada 1 a 5 h (até o ~17) | T2 no 15; receitas no 12 e no 15; o primeiro relatório de volta | 10 h (a noite) | Ferramenta T2: ~meio dia de vendas | Obra-prima · receita · virada do 30 |
| **D2 a D7** | Um nível a cada 6 a 15 h (17 → 30) | +5% de taxa (D2); **virada do 30 (D5,5):** ofício mestre, 2ª fila, T3, +5%; primeiro cerco (D7) | 36 h | Ferramenta T3: 1 a 2 dias de renda | Encomenda · nível · virada do 30 |
| **D8 a D30** | Um nível a cada 8 a 34 h (30 → 60) | +5% (D7,5); 36 h de offline (D10); 2º mestre (D13,6); T4 (D18); 3ª etapa (D21); 48 h (D26,5); 3ª fila e +5% (D29,7) | 52 h | Ferramenta T4: ~3 dias de renda | Mercado · nível · T4 e 3ª fila |
| **D31 a D91** (1ª Era) | Um nível a cada 32 a 59 h (60 → ~88) | 4ª etapa (D41,5); T5 (D46,5); +5% (D48); 60 h (D50); 72 h (D65); T6 (D77); fim da Era (D91) | 4 dias | Ferramenta T5: ~5 dias; T6: ~7 dias | Obra-prima T5 · nível · T6 e 72 h |
| **D92 a D182** (2ª Era) | Um nível a cada 52 a 74 h até o 100 (D116); depois, um ponto de Maestria a cada ~0,8 dia | Travessia (D91); 100 e taxa 100% (D116); técnicas (D120, D123); Selo I (D131); volta ao T4, T5 e T6 (D136, D149, D163); 2º mestre no 100 (D140) | 4 dias | Insumos de obra-prima T6; doações à Obra | Obra-prima T6 · ponto de Maestria · Selo I |
| **D183 em diante** | Ciclos de Selo de 66, 41, 28 e 22 dias | Selos II a V (D197, D238, D266, D287); Eras e Travessias | 4 dias | Insumos e equipamento de reposição | Mercado · volta ao T6 · próximo Selo |

**Regra de cadência** [H], para os módulos 06 e 10 cumprirem, medida **no perfil casual** (o mais lento): no máximo uma noite sem algo novo no D1; no máximo 2 dias na primeira semana; no máximo 4 dias no primeiro mês; no máximo 7 dias depois. No modelo, o casual fica dentro disso: maior espera de 9 h no D1, 37 h na semana 1, 4 dias no mês 1 e 6 dias depois (as encomendas dele fecham a cada ~6 dias). O regular fica bem abaixo: 10 h, 36 h, 52 h e 4 dias.

**O muro de tempo previsto** [H]: do 90 ao 100 (D88 a D116 no regular), um nível leva 2 a 3 dias. É a faixa mais lenta da curva. Ela é segurada pela meta de dias (o 100 abre a Maestria) e pela Travessia, que começa no D91. É um muro do tipo 2 da taxonomia do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 8: curto, só de espera, sem botão de pagar ao lado.

**A compra que importa.** O preço em ouro é do módulo 07; este módulo fixa os **alvos de tempo** que a simulação deve acertar: a ferramenta do tier novo deve custar de meio dia (T2) a ~7 dias (T6) da renda líquida típica do jogador naquela faixa. E, para o desgaste sustentar a demanda, **uma ferramenta deve durar de 3 a 7 dias de fila contínua** [H, a reconciliar com o módulo 05].

## 12. Interfaces com outros módulos

### 12.1 Para a simulação da economia (módulo 08)

| Parâmetro | Valor [H] | Seção |
|---|---|---|
| Tempo por ação na coleta, T1 a T6 | 6, 9, 12, 16, 22 e 30 s | 2.1 |
| XP por ação na coleta | 10, 20, 36, 60, 110 e 190 | 2.1 |
| XP/h por tier (todas as atividades) | 6.000, 8.000, 10.800, 13.500, 18.000 e 22.800 | 2.1 |
| Níveis de desbloqueio dos tiers | 1, 15, 30, 50, 70 e 85 (ofício e vocação) | 2.1, 4.1 |
| Domínio | `1 + 0,01 × mín(n − n_tier, 10)` | 2.2 |
| Produção da fila | `unidades/h = 3.600 ÷ t × dom × taxa`; 1 unidade por ação | 2.3 |
| Unidades/h por fila | T1: 420 (70%, sem domínio) a 660 (100%, domínio máximo); T6: 84 a 132 | 2.1, 10 |
| Máximo de um mesmo bem por conta e dia | 24 h de fila: T1 15.840; T6 3.168 | 10 |
| Exemplo de referência | Regular no D30: 222,75 minérios T4/h e 4.571 por dia na fila principal; 2.005 numa noite de 9 h | 2.3, 3.2 |
| Taxa ausente | 70% + 5% por marco, seis marcos, até 100%; datas por perfil | 8.1 |
| Taxa ativa | Firme 100%; forçar 125% (desgaste ×2); garimpar ou apurar 75% (achado ou qualidade ×4); 2 h/dia; uma fila por vez | 8.2 |
| Filas | 1 → 3, uma por atividade; datas por perfil | 6.2 |
| Teto de offline | 24 → 72 h; datas por perfil; rabo de 12 h a 25% (proposta) | 7 |
| Perfis | Eficiência do plano 75 / 90 / 98%; alocação da tabela 3.3; sessões 2 / 4 / ~10 por dia | 3.3 |
| XP ativa | Obra-prima = 15 min de XP da fila do tier; só 8 por dia rendem XP; obras-primas por dia 1 / 2 / 8; bancada ativa 10 / 25 / 90 min | 3.3 |
| Mérito (provisório) | 20 / 40 / 100 por dia; marcos de progressão em 300, 1.000 e 2.000 | 3.3, 6.2, 7.2, 8.1 |
| Curvas | `XP(n) = 5 × n^2,75`; `XP_voc(n) = 4 × n^2,75`; datas nas tabelas 3.4 e 4.2 | 3, 4 |
| Maestria | 1 ponto = 400.000 XP; técnicas aos 5, 10 e 20 pontos | 9.1 |
| Selo | Mínimo `20 × 2^(g−1)`; `mult = 1 + acumulada ÷ 20`; volta ao 30; janelas sem T4, T5 e T6 da tabela 9.3 | 9.2, 9.3 |
| Achados do ausente | `mín(h, 20)%` por hora contínua; ~2,9 por dia de fila contínua; presos à conta | [01](01-loops.md), L3 |
| Bot | Teto físico do hardcore com eficiência de 100%: não produz mais por conta | 3.3 |
| Pagante | Os mesmos números do perfil de atividade dele: o Alvará não muda nenhum número deste módulo | 1 |

**O que a simulação precisa testar primeiro** [H]: (1) a oferta de T4 a T6 com mestres chegando aos tiers nas datas da tabela 3.4 e saindo deles nas janelas do Selo; (2) a emissão total com a taxa ausente subindo de 70% a 100% ao longo da 1ª Era; (3) a sensibilidade das datas à eficiência do plano.

### 12.2 Para os demais módulos

| Módulo | O que este módulo fixa ou pede |
|---|---|
| **03 Personagem** | Vocação sem camada além do 100 no lançamento (4.3); os ajudantes não mexem na taxa ausente nem nas filas. |
| **04 Combate** | Expedição como atividade de fila; regiões nos mesmos degraus dos tiers; XP de vocação do cerco e da Travessia somada à da fila. |
| **05 Itens** | A ferramenta não acelera: o tier dá o ritmo nominal, tier abaixo −20% por tier, sem ferramenta −50%; a qualidade muda durabilidade e achado; alvo de 3 a 7 dias de fila por ferramenta; técnica Mão leve (−15% de desgaste). |
| **06 Ofícios** | XP/h igual por tier (a XP por ação segue o tempo da ação); equipamento pode ter ações de 60 a 300 s; receitas a cada 3 níveis até o 30 e a cada 5 depois; menu de regras do Selo adaptado a cada ofício; XP da obra-prima. |
| **07 Economia** | Teto de emissão contado por dia de produção; destino do excedente; janelas do Selo como choque de oferta de T6; alvos de preço de ferramenta em dias de renda (seção 11). |
| **09 Social** | Mérito como requisito de progressão (300, 1.000 e 2.000); a opção Aprendizes do Selo II. |
| **10 Live-ops** | Um grau novo de Selo a cada 1 ou 2 Eras; Travessia em trilha própria, sem consumir filas. |
| **11 Monetização** | Zona vermelha deste módulo: filas, etapas e regras, teto de offline, taxa ausente, bancada ativa, XP, Maestria e Selo. Nada disso entra no Alvará, no Baú ou no passe. |
| **12 Onboarding** | Nível 5 em ~4 min e 7 em ~14 min na primeira sessão; a virada do 30 entre o D4 e o D7. |

## 13. Propostas de mudança na bíblia e pontos a reconciliar

### 13.1 Propostas [proposta de mudança na bíblia]

1. **Glossário:** incluir **taxa ausente**, **taxa ativa**, **bancada ativa**, **lance**, **achados** (ativos e do ausente), **etapas** e **regras de fila**, **nível total**, **reserva do aprendiz**, **pontos de Maestria**, **grau do Selo** e **relatório de volta**.
2. **Definição de Fila:** "De 1 a 3 filas paralelas por personagem; cada uma roda uma atividade diferente (nunca duas no mesmo ofício); dentro de cada fila, etapas em sequência."
3. **6.1, offline:** acrescentar o rabo de 12 h a 25% da taxa ausente depois do teto.
4. **6.1, ação básica:** "3 a 30 s por unidade" vale para coleta, transformação e consumíveis; equipamento pode levar de 60 a 300 s por peça (a confirmar no módulo 06).
5. **6.2, Maestria:** "1 ponto a cada 400 mil XP depois do 100; três técnicas por ciclo (5, 10 e 20 pontos); Selo de mestre com cinco graus no lançamento; o Selo volta o ofício ao 30."
6. **6.2, pista:** registrar a leitura usada: "≥ 90 dias até o primeiro 100 de ofício mestre mesmo para o hardcore (D95); D116 no regular; D141 no casual".

### 13.2 Conflitos encontrados e como foram resolvidos aqui

| Conflito | Resolução proposta |
|---|---|
| O glossário diz que a fila é "uma por vez no início", e a bíblia fala em "filas 1 → 3": dá para ler como filas paralelas ou como vagas de sequência (o modelo do MWI). | Filas paralelas, uma por atividade, com etapas em sequência dentro de cada uma (seção 6). |
| As duas taxas do pilar 4 e do P12 contra a paridade online/offline recomendada no estudo técnico ([07](../01-pesquisa/07-tecnica-idles-online.md)). | O cálculo é o mesmo online e offline; a taxa só muda na bancada ativa, que é um modo explícito, com decisões e teto diário ([01](01-loops.md), L1 e L2). |
| O conceito diz que o Selo "reseta o ofício", e a pesquisa alerta para o medo do "superprestígio" que reduz o poder ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.2). | O reset vai ao 30, não ao 1; o jogador vê a projeção antes; ficar no 100 continua valendo. |
| O [02a](../01-pesquisa/02a-teoria-design-idle.md) prefere rendimento decrescente a corte seco; a bíblia fixa tetos de 24 h e 72 h. | Mantidos os tetos; proposto o rabo de 12 h a 25% (seção 7.3). |
| O teto de emissão é "por conta e por dia" (bíblia 6.6), mas uma ausência de 72 h entrega três dias de produção de uma vez. | Contar o teto por dia de produção (seção 7.4), a reconciliar com o módulo 07. |
| O exemplo do conceito ("reforjar sem perda") reduz a destruição de itens, que é dreno (P3). | Mantido como opção do grau IV, com material consumido, ao lado de uma opção que é dreno (Fusão); o módulo 08 mede o efeito. |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **O hardcore chega ao 100 antes do D90** | A eficiência real passa de 98%, ou aparece uma fonte de XP ativa que o modelo não previu (evento, encomenda generosa). | Teto de 8 obras-primas com XP por dia; nenhuma fonte de XP fora da fila sem passar pelo módulo 08; o coeficiente `5` ajusta todas as datas na mesma proporção. Ajustar só antes do lançamento: depois, mudar a curva pune quem planejou (lei 8). |
| **O casual se sente para trás** | O primeiro 100 dele vem no D141, e a 3ª fila no D50, presa ao Mérito. | O casual não se compara ao hardcore: as metas são pessoais, os rankings são por faixa (módulo 09), e o requisito de Mérito da 3ª fila é o primeiro botão a baixar se a simulação ou o alfa mostrarem evasão. |
| **O 70% vira castigo percebido** | O jogador lê "minha fila rende 70%" como punição por não estar presente. | Moldura de "ritmo da oficina" com o próximo marco à vista; primeiro +5% no D2; a aba aberta não muda nada, então não há presença a cobrar. |
| **Ninguém toma o Selo** | Ficar 32 dias sem T6 depois do Selo I assusta, e a camada vira enfeite. | Ficar no 100 é válido, mas a regra nova e o ×2 são visíveis desde o 100; se o alfa mostrar rejeição, subir o primeiro multiplicador para ×3 (o T6 volta em ~21 dias) antes de mexer no resto. |
| **Todo mundo toma o Selo junto** | No fim de uma Era, muitos mestres resetam ao mesmo tempo e falta T6 no mercado. | O Selo é individual e opcional; a projeção mostra o efeito; o módulo 08 simula o choque; as oficinas NPC de reforço seguram o preço teto do T6 por algumas semanas ([conceito](../02-conceito.md)). |
| **O prestígio come drenos** | As regras do Selo (Conserto de mestre, Reforja sem perda) e a técnica Mão leve reduzem o desgaste e a destruição; somadas entre muitos veteranos, enfraquecem o P3. | Cada regra que reduz dreno tem par que é dreno ou neutro; os efeitos são pequenos e medidos pelo módulo 08; ajuste com aviso prévio (lei 21). |
| **Ofícios adormecidos acumulam** | Em dois anos, um veterano tem quatro ofícios no 100, adormecidos, e troca de mestre a cada Era conforme o mercado. | Só dois exercem de cada vez; uma troca por Era; a troca é visível no perfil, e o mercado se ajusta em semanas, não em horas. |
| **A reserva do aprendiz vira atalho** | O jogador enche a reserva de vários ofícios e troca de mestre só para "colher" 10 níveis. | A reserva vale 10 níveis baratos (do 30 ao 40, ~4 dias de fila); uma troca por Era; o efeito no mercado é pequeno. |
| **Planície entre desbloqueios** | Com a curva de potência e os tiers em degraus suaves, o meio do jogo vira "o número sobe e só" (a queixa do Melvor, [B01](../01-pesquisa/fichas/B01-melvor-idle.md)). | A regra de cadência da seção 11; receitas e eventos coletivos como serrote; a meta de dias sempre visível. |
| **Bot de eficiência perfeita** | Um script mantém as filas 100% ocupadas e usa as 2 h de bancada ativa todo dia. | O teto físico é o do hardcore (uma fila por atividade, 24 h); o teto de emissão negociável por conta segura o resto; conta = adulto verificado (P8); detecção por regularidade e fluxo de valor ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| **Premissas de perfil erradas** | As eficiências (75 / 90 / 98%) e as alocações de fila são palpites; o jogo real pode ser outro. | Medir desde o alfa a eficiência do plano e a divisão de filas por coorte; recalibrar o coeficiente da curva, nunca as regras, antes do lançamento. |
| **A progressão passa a depender do social** | Mérito é requisito de marcos de taxa, fila e offline; o solitário trava. | Mérito também vem de doações solo às Obras (inclusive o excedente do teto de emissão); medir o tempo até cada marco entre jogadores sem guilda. |

