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
| Era de ~13 semanas | No fim da 1ª Era (D91), o regular está perto do 90 e o hardcore perto do 95; o primeiro 100 do servidor cai na 1ª semana da 2ª Era, junto com a primeira Travessia | Coerente |

**Leitura da bíblia** [H]: "jogo normal" foi lido como o perfil regular. Cumprimos também a leitura mais dura (o primeiro 100 do servidor só depois do D90), porque a vantagem do hardcore no ofício principal é de apenas ~22% sobre o regular: a fila é uma por atividade e roda no máximo 24 h por dia.

**Botões de ajuste para o módulo 08:** o coeficiente `5` desloca todas as datas quase na mesma proporção (+10% no coeficiente ≈ +10% nos dias). O expoente `2,75` muda a forma: maior atrasa o fim mais que o começo. A eficiência do plano e a taxa ausente são as premissas de que as datas mais dependem; se o alfa medir eficiências diferentes, recalibrar o coeficiente, não as regras.

