# GDD 02 — Progressão

> **Escopo.** A progressão completa do personagem, com fórmulas e contas: curvas de XP de ofício e de vocação, teto de aprendiz, filas, offline, as duas taxas (ativa e ausente), Maestria e Selo de mestre, números em duas velocidades e a lei do serrote.
> **Depende de:** [00 — Bíblia](00-biblia.md) e [01 — Loops](01-loops.md). **Alimenta:** 03, 05, 06, 07, **08 (simulação)**, 10, 11 e 12.
> **Etiquetas:** [F] fato com fonte · [H] proposta do estúdio · [NV] não verificado. **Todo número é [H] até a simulação.**
> **Como as contas foram feitas.** Um modelo de bolso em Node.js simulou cada perfil em passos de 5 minutos por 420 dias, com as regras deste módulo e as premissas da seção 3.3. O modelo ficou fora do projeto (a única exceção de código é o script do módulo 08); o módulo 08 deve reimplementá-lo e confirmar ou corrigir estes números.
> **Revisão de consistência (2026-11-11).** Este módulo foi alinhado às resoluções do diretor: níveis de tier 1, 15, 35, 55, 75 e 90 (R5); bancada ativa só com firme e forçar (R7); bônus de calouro de ×1,6 na XP de ofício nos 3 primeiros dias da conta (R10); depois do teto de offline, mais 12 h a 25%, adotado (R15); a ferramenta não acelera (R16); o Selo volta o nível, mas mantém o tier de produção (R22). A tabela 3.4, o resumo, os exemplos e as datas ligadas ao primeiro 30, ao 60, ao 80 e ao 100 foram refeitos por estimativa desta revisão (horas de fila recalculadas pela fórmula; calendário proporcional às horas, mais o efeito do bônus de calouro) e levam "~". **As demais datas (nível total, vocação, técnicas de Maestria) vêm do modelo original** e devem ser lidas como até ~7% mais tardias. A simulação (08) já roda com essas regras e mediu o primeiro 100 no D149, D123 e D102 (casual, regular e hardcore); o modelo do 02 deve ser recalculado na Fase 5.

## Resumo

- **Curva de ofício:** `XP(n) = 5 × n^2,75` (XP para subir do nível n ao n+1). São 41,4 milhões de XP e **2.346 horas de fila a 100%** do 1 ao 100 com os níveis de tier do 06 (eram 2.190 com os antigos). **Primeiro 100 de ofício mestre: D102 no hardcore, D123 no regular, D149 no casual** (medido na simulação 08 com as regras desta revisão; o modelo original dava D95, D116 e D141) (revisão de consistência: R5). A pista de ≥ 90 dias vale até para o hardcore.
- **Sem muro antes do D7:** com o bônus de calouro (×1,6 na XP de ofício nos 3 primeiros dias), o regular chega ao 30 por volta do D3,9 (D5,5 sem o bônus; revisão de consistência: R10), com um nível a cada 6 a 15 horas na primeira semana e no máximo 36 h sem algum desbloqueio que importa.
- **Curva de vocação:** `XP_voc(n) = 4 × n^2,75` (80% da de ofício). Regular no 100 de vocação por volta do D143, sem contar cerco e Fronteira (eram D134 com os degraus antigos; revisão de consistência: R5).
- **Teto de aprendiz (30):** ofícios não mestres vão até o 30 e fazem os tiers T1 e T2; o T3 abre no 35 e é só de mestre (revisão de consistência: R5). A XP depois do 30 vai para uma reserva de até 861 mil XP (o caminho do 30 ao 40), que vale se o ofício virar mestre.
- **Filas 1 → 3:** a 2ª no primeiro 30 de ofício (regular: ~D3,9), a 3ª com ofício mestre 60, vocação 40 e 1.000 de Mérito (regular: ~D30). Uma fila por atividade.
- **Offline 24 h → 72 h:** quatro degraus de +12 h (regular: D10, D26, D50 e ~D69). Depois do teto, mais 12 h a 25% da taxa ausente (revisão de consistência: R15).
- **Taxa ausente 70% → 100%:** seis marcos de +5% (regular: D2, ~D3,9, D7,5, ~D30, D48 e ~D122). **Taxa ativa:** a bancada ativa rende 100% (firme) ou 125% (forçar), por no máximo 2 h por dia; o achado e a qualidade ativos ficam com o Faro, o lote fino e a obra-prima do 06, pagos com Inspiração (revisão de consistência: R7).
- **Maestria:** depois do 100, cada 400 mil XP vira 1 ponto de Maestria (~0,8 dia no regular); técnicas aos 5, 10 e 20 pontos.
- **Selo de mestre:** com 20 pontos no ciclo, o jogador pode passar a oficina: o nível do ofício volta ao 30, **mas o tier de produção fica** (revisão de consistência: R22); ganha um grau do Selo, uma regra nova e um multiplicador de XP nesse ofício de ×2, ×4, ×8, ×16 e ×32 (graus I a V). Ganho por ciclo: +200%, +133%, +114% e +107% em Maestria acumulada. Ciclos de ~57, 36, 26 e 21 dias no regular (eram 66, 41, 28 e 22 quando o Selo fechava os tiers).
- **Duas velocidades:** o pessoal cresce exponencialmente (multiplicador do Selo, Maestria acumulada, XP por nível); o negociável fica limitado (unidades por hora ≤ 1,10 × o nominal, uma fila por ofício, 3 filas por conta).
- **Conflitos com os módulos paralelos (seção 13.3), resolvidos pelo diretor:** a ferramenta não acelera (R16; acelerando até 1,72 × o nominal, o hardcore chegava ao 100 no D81 a D85 e quebrava a pista) e os níveis de tier são os do 06, 35, 55, 75 e 90 (R5), sem mexer na curva.

## 1. Os eixos de progressão

| Eixo | Alcance | Como sobe | Forma de crescimento | Negociável? |
|---|---|---|---|---|
| **Nível de ofício** | 1–100 (mestre); 1–30 (aprendiz) | XP da fila e da obra-prima | Custo por nível cresce como `n^2,75` | Não |
| **Nível de vocação** | 1–100 | Expedição, cerco, Fronteira | Idem, 80% do custo | Não |
| **Tier de material** | T1–T6 | Níveis 1, 15, 35, 55, 75 e 90 (revisão de consistência: R5) | Degraus | Os bens do tier, sim |
| **Domínio do tier** | +0% a +10% de velocidade | Níveis acima do desbloqueio do tier | Linear, com teto | Não (o efeito no volume tem teto) |
| **Taxa ausente** | 70% → 100% | Seis marcos | Degraus, com teto | Não |
| **Filas** | 1 → 3 | Duas conquistas | Degraus, com teto | Não |
| **Etapas e regras de fila** | 2 → 5 etapas | Nível total e Selo | Degraus | Não |
| **Teto de offline** | 24 h → 72 h | Quatro conquistas | Degraus, com teto | Não |
| **Nível total** | 12 → 500 | Soma dos 12 ofícios | Linear | Não |
| **Mérito** | sem teto | Encomendas, Obras, cercos (módulo 09) | Linear | Não (preso à conta) |
| **Maestria** | pontos sem teto | XP além do 100 | Linear no ciclo, multiplicada pelo Selo | Não |
| **Selo de mestre** | graus I–V no lançamento | Passar a oficina (reset ao 30) | Exponencial (×2 por grau) | Não |

**Tudo nesta tabela é preso à conta e nada está à venda** (zona vermelha, P7 do [conceito](../02-conceito.md)). Os Coins não tocam em nenhum eixo (decisão do checkpoint 2, bíblia seção 5).

## 2. O ritmo da fila

### 2.1 Tempo por ação, XP por ação e tiers

| Tier | Nível de desbloqueio | Tempo por ação na coleta | XP por ação | XP/h nominal | Unidades/h nominal | Unidades/h com domínio máximo |
|---|---|---|---|---|---|---|
| T1 | 1 | 6 s | 10 | 6.000 | 600 | 660 |
| T2 | 15 | 9 s | 20 | 8.000 | 400 | 440 |
| T3 | 35 | 12 s | 36 | 10.800 | 300 | 330 |
| T4 | 55 | 16 s | 60 | 13.500 | 225 | 248 |
| T5 | 75 | 22 s | 110 | 18.000 | 164 | 180 |
| T6 | 90 | 30 s | 190 | 22.800 | 120 | 132 |

Níveis de desbloqueio do 06 (revisão de consistência: R5). Os tempos por ação desta tabela são de referência; os que valem são os do [06](06-oficios-e-coleta.md) (coleta de 3 a 30 s; revisão de consistência: R4), e a XP/h por tier não muda com eles.

"Nominal" é o ritmo da ação a 100%, que é a taxa ativa no lance firme. A fila no piloto automático roda na taxa ausente (seção 8).

**Regra: XP por hora igual em todos os ofícios do mesmo tier** [H]. A XP de uma ação é `XP/h do tier × tempo da ação ÷ 3.600`. Assim, o módulo 06 pode dar a cada receita o tempo que quiser sem mexer na curva. Exemplo: uma lâmina T4 de 120 s rende `13.500 × 120 ÷ 3.600 = 450 XP`.

- **Referência:** o Melvor e os "RuneScape idle" equilibram skills pela XP/h de cada ação ([B01](../01-pesquisa/fichas/B01-melvor-idle.md); [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 9.4). Diferencia-se ao fixar a XP/h por tier, não por receita.
- **Problema:** com doze ofícios, qualquer diferença de XP/h vira "o ofício certo para upar", e o jogador escolhe pela planilha, não pelo gosto.
- **Comportamento:** escolher o ofício pelo papel na cidade e pelo estilo de jogo (coleta roda sozinha; criação pede insumo e decisão; ver o [01](01-loops.md), seção 4).
- **Risco:** a XP igual esconde diferenças reais de esforço (a criação exige comprar insumos). Mitigação: a recompensa da criação vem em ouro e qualidade, não em XP.

**Nota para o módulo 06** (reconciliada; revisão de consistência: R4 e R5): os tempos de ação são os do [06](06-oficios-e-coleta.md) (coleta de 8 s no T1 a 30 s no T6; transformação até ~170 s por unidade no T6; criação de equipamento de 5 a 115 minutos por peça; revisão de consistência: D2), e os níveis de tier também (35, 55, 75 e 90 no lugar de 30, 50, 70 e 85). Como a XP/h deste módulo não depende do tempo da ação, a curva não muda com eles.

### 2.2 Domínio do tier

`dom(n) = 1 + 0,01 × mín(n − n_tier, 10)`, em que `n_tier` é o nível de desbloqueio do tier mais alto disponível.

Exemplo (refeito com os níveis de tier do 06; revisão de consistência: R5): Mineração 62, tier T4 (desbloqueado no 55): `dom = 1 + 0,01 × 7 = 1,07`, ou seja, 7% mais rápido que o nominal. No 65, chega a 1,10 e para. No 75, o T5 abre e o domínio recomeça do zero no tier novo.

O domínio vale para velocidade (unidades e XP). **A ferramenta não acelera** [H; decidido pelo diretor, revisão de consistência: R16; o 05 e o 06 foram alinhados]: a ferramenta do tier é o portão que permite trabalhar naquele tier (regra do [05](05-itens.md), seção 4.5, que adotamos), e a qualidade dela (Comum a Obra-prima) muda a durabilidade e a chance de achado, não a velocidade. Isso mantém a velocidade da fila com um teto único e conhecido (1,10 × o nominal), o que importa para a emissão e para a pista de conteúdo.

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

**Exemplo calculado** (refeito com o T4 no 55; revisão de consistência: R5). O regular, por volta do D30, tem Mineração 60 (T4, domínio de 5 níveis) e taxa ausente de 90%:
- unidades/h = 3.600 ÷ 16 × 1,05 × 0,90 = **212,6 minérios por hora**, ou uma ação a cada 16,9 s;
- XP/h = 13.500 × 1,05 × 0,90 = **12.758 XP por hora**;
- numa noite de 9 h: **1.913 minérios T4 e 114.818 XP**.

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

**Do 60 ao 61, perfil regular por volta do D30** (refeito com os níveis de tier do 06; revisão de consistência: R5). `XP(60) = 5 × 60^2,75 = 5 × 77.610 = 388.048 XP`. A XP/h da fila é 12.758 (seção 2.3), então são `388.048 ÷ 12.758 = 30,4 h de fila`. O regular dá ao ofício principal 20,5 h de fila por dia (24 h × 0,90 de eficiência × 0,95 da fila; seção 3.3) e soma ~0,5 h de XP ativa (duas obras-primas). Resultado: **~1,5 dia para o nível 61**.

**Do 99 ao 100, perfil regular.** `XP(99) = 1.538.037`. Com T6 (aberto no 90, domínio de 9 níveis) e taxa de 95%, a XP/h é `22.800 × 1,09 × 0,95 = 23.609`. São 65,1 h de fila, **~3 dias**. É a espera mais longa da curva, e no mesmo período a Maestria já aparece como próxima camada.

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

**XP de obra-prima** [H]: cada obra-prima rende a XP de 15 minutos de fila do tier da peça, e só as **8 primeiras do dia** rendem XP (as seguintes rendem a peça e a qualidade). Sem esse teto, a XP ativa viraria o atalho principal para o 100 e quebraria a pista. A obra-prima também consome insumo, o que já limita o número. **Nota [a reconciliar com o 06]:** o [06](06-oficios-e-coleta.md), seção 2.4, limita as sessões ativas com a **Inspiração** (+1 por hora, teto igual ao teto de offline; obra-prima de 3 a 5). Com 24 de Inspiração por dia, o hardcore faz no máximo ~6 obras-primas de T3–T4, menos que as 8 do modelo. As datas do hardcore ficam, portanto, um pouco mais tardias que as da tabela 3.4, o que só aumenta a folga da pista.

### 3.4 Tabela nível → tempo acumulado (ofício mestre principal)

"Horas de fila a 100%" é o mínimo teórico, com a fila sempre na taxa ativa. As colunas por perfil mostram o tempo de calendário desde a criação do personagem (D3,9 = três dias e 21 horas), já com a taxa ausente, as filas, as obras-primas e as conquistas de cada perfil.

**Revisão de consistência (R5 e R10).** Tier, XP/h e horas a 100% foram recalculados pela fórmula com os níveis de tier do 06 (35, 55, 75 e 90). As colunas de calendário são **estimativas desta revisão (~)**: até o 30, o modelo original com o bônus de calouro (×1,6 nos 3 primeiros dias); depois do 30, a data original vezes a razão entre as horas novas e as antigas, menos o adiantamento do bônus (~1,5 dia). A simulação (08), que usa as mesmas regras, mediu o 100 no D149, D123 e D102.

| Nível | XP para o próximo | XP acumulado | Tier | XP/h nominal (com domínio) | Horas de fila a 100% | Casual | Regular | Hardcore |
|---|---|---|---|---|---|---|---|---|
| 5 | 418 | 368 | T1 | 6.240 | 0,06 | ~0,1 h | ~0,1 h | ~0,1 h |
| 10 | 2.812 | 6.156 | T1 | 6.540 | 0,96 | ~2,0 h | ~1,6 h | ~1,1 h |
| 15 | 8.575 | 30.142 | T2 | 8.000 | 4,6 | ~9,4 h | ~7,5 h | ~5,6 h |
| 20 | 18.915 | 91.638 | T2 | 8.400 | 12,1 | ~D1,1 | ~D0,9 | ~D0,6 |
| 25 | 34.939 | 215.774 | T2 | 8.800 | 26,6 | ~D2,3 | ~D1,9 | ~D1,3 |
| **30** | 57.684 | 433.069 | T2 | 8.800 | 51,3 | **~D5,2** | **~D3,9** | **~D2,6** |
| **35** | 88.137 | 779.119 | T3 | 10.800 | 90,6 | **~D8,4** | **~D6,5** | **~D4,5** |
| 40 | 127.243 | 1.294.370 | T3 | 11.340 | 137,3 | ~D11,6 | ~D9,0 | ~D6,6 |
| 45 | 175.916 | 2.023.926 | T3 | 11.880 | 200,4 | ~D15,9 | ~D12,5 | ~D9,4 |
| 50 | 235.038 | 3.017.395 | T3 | 11.880 | 284,0 | ~D21,6 | ~D17,1 | ~D13,1 |
| **55** | 305.469 | 4.328.754 | T4 | 13.500 | 394,4 | **~D29,1** | **~D23,3** | **~D18,1** |
| 60 | 388.048 | 6.016.234 | T4 | 14.175 | 516,8 | ~D37,4 | ~D30,1 | ~D23,7 |
| 65 | 483.595 | 8.142.221 | T4 | 14.850 | 663,9 | ~D46,7 | ~D37,8 | ~D29,9 |
| 70 | 592.911 | 10.773.162 | T4 | 14.850 | 841,1 | ~D58,0 | ~D47,0 | ~D37,5 |
| **75** | 716.784 | 13.979.485 | T5 | 18.000 | 1.057,0 | **~D71,8** | **~D58,1** | **~D46,9** |
| 80 | 855.988 | 17.835.528 | T5 | 18.900 | 1.266,9 | ~D84,5 | ~D68,6 | ~D55,9 |
| 85 | 1.011.281 | 22.419.467 | T5 | 19.800 | 1.504,8 | ~D98,8 | ~D80,4 | ~D65,6 |
| **90** | 1.183.415 | 27.813.255 | T6 | 22.800 | 1.777,2 | **~D115,5** | **~D94,2** | **~D76,8** |
| 95 | 1.373.125 | 34.102.571 | T6 | 23.940 | 2.047,6 | ~D131,8 | ~D107,7 | ~D87,8 |
| **100** | — (Maestria) | 41.376.756 | T6 | 25.080 | 2.345,6 | **~D150** | **~D122** | **~D100** |

**O segundo ofício mestre** chega depois, porque só ganha fila própria com a 3ª fila: 30 no D16,9 / D13,6 / D10,4; 60 no ~D72 / ~D52 / ~D43; 100 no **~D188 / ~D150 / ~D129** (casual / regular / hardcore; estimativa com os níveis de tier do 06, revisão de consistência: R5).

**A primeira sessão** é ativa e corre na taxa de 100%: o nível 5 sai em ~4 min (368 XP a ~6.200 XP/h) e o 7 em ~14 min (1.478 XP). O módulo 12 desenha esses minutos. Com o bônus de calouro valendo desde a criação da conta, esses tempos caem para ~2,5 e ~9 min, e o 12 adota esses tempos (revisão de consistência: R10 e D3).

### 3.5 Checagem da pista de conteúdo

| Requisito da bíblia (6.2) | Resultado no modelo | Situação |
|---|---|---|
| ≥ 90 dias de jogo normal até o primeiro 100 de ofício mestre | Regular D123; casual D149; **até o hardcore leva 102 dias** (simulação 08, com os níveis de tier do 06, o bônus de calouro e a ferramenta que não acelera; revisão de consistência: R5, R10 e R16) | Cumpre, com folga de 12 dias no hardcore |
| Nenhum muro sério antes do D7 | Regular chega ao 30 por volta do D3,9 (com o bônus de calouro); na semana 1, um nível a cada 6 a 15 h e no máximo 36 h sem desbloqueio (seção 11) | Cumpre |
| Era de ~13 semanas | No fim da 1ª Era (D91), o regular está perto do 89 e o hardcore perto do 96; o primeiro 100 do servidor cai na 2ª semana da 2ª Era (D101 na simulação), com a primeira Fronteira já aberta | Coerente |

**Leitura da bíblia** [H]: "jogo normal" foi lido como o perfil regular. Cumprimos também a leitura mais dura (o primeiro 100 do servidor só depois do D90), porque a vantagem do hardcore no ofício principal é de apenas ~22% sobre o regular: a fila é uma por atividade e roda no máximo 24 h por dia.

**A virada do 30 mais cedo: bônus de calouro (adotado pelo diretor; revisão de consistência: R10)** [H]: para atender o pedido do [12](12-onboarding.md) (primeiro 30 entre o D2 e o D4), **a XP de ofício rende ×1,6 nos 3 primeiros dias da conta**. Estimativa desta revisão, calibrada no modelo original: o 30 vai para ~D5,2 (casual), ~D3,9 (regular) e ~D2,6 (hardcore), e o 100 adianta de 1 a 2 dias. O regular e o hardcore ficam dentro do D2 a D4; o casual chega por volta do D5, o que o diretor aceitou (revisão de consistência: D3). A variante estudada antes (×1,6 no primeiro ofício até ele chegar ao 30, sem prazo) dava D4,3 / D3,5 / D2,6. A pista continua cumprida.

**Botões de ajuste para o módulo 08:** o coeficiente `5` desloca todas as datas na mesma proporção (no modelo, com 5,5 no lugar de 5, o 100 do regular foi do D115,8 ao D127,4: +10,0%). O expoente `2,75` muda a forma: maior atrasa o fim mais que o começo. A eficiência do plano e a taxa ausente são as premissas de que as datas mais dependem; se o alfa medir eficiências diferentes, recalibrar o coeficiente, não as regras.

## 4. Curva de XP de vocação

### 4.1 A fórmula

```
XP_voc(n) = 4 × n^2,75        (80% da curva de ofício)
```

Exemplo: `XP_voc(40) = 4 × 40^2,75 = 4 × 25.449 = 101.795 XP`. Total até o 100: **33.101.406 XP**, ou 1.752 horas de expedição a 100%.

A expedição é uma atividade de fila (ver o [01](01-loops.md), seção 2, L5). As regiões de expedição seguem os mesmos degraus dos tiers (abrem na vocação 1, 15, 35, 55, 75 e 90; revisão de consistência: R5; a tabela 4.2 e as datas de vocação são do modelo original, com os degraus antigos) e a mesma XP/h por degrau da tabela 2.1 [H, a reconciliar com o módulo 04]. O "encontro" faz o papel da ação, e a XP de cada encontro segue a regra da seção 2.1.

**Por que 80%** [H]: a vocação recebe menos horas de fila que o ofício principal (30% da fila única no começo, 50% da 2ª fila, 70% a 75% da 3ª). Com a curva mais barata, ela anda perto do ofício principal, e o jogador chega à primeira Fronteira (D91) com a vocação perto do 77 (casual), do 85 (regular) ou do 90 (hardcore), antes de contar a XP do cerco.

### 4.2 Tabela nível → tempo acumulado (só expedição)

O modelo conta só a XP da fila de expedição. O cerco e a Fronteira também dão XP de vocação (módulos 04 e 10); por isso, estas datas são o limite mais lento.

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

A bíblia reserva a Maestria aos ofícios mestres (seção 6.2). **Recomendação** [H, a reconciliar com o módulo 03]: no lançamento, a vocação para de subir no 100; a expedição segue rendendo peles, carnes e achados. O crescimento depois do 100 vem de equipamento e de build (módulo 03), e a Fronteira dá a progressão sazonal. Se o módulo 03 quiser uma camada além do 100 para a vocação, ela deve seguir as regras da seção 9 (prestígio que muda uma regra), com mudança na bíblia.

- **Referência:** o personagem único com vocação fixa (decisão do checkpoint 2); a camada de temporada como prestígio coletivo (lei 12).
- **Problema:** dar ritmo de combate parecido com o de ofício, sem que a vocação roube fila do ofício.
- **Comportamento:** usar a 3ª fila para a vocação e chegar à Fronteira pronto para ela.
- **Risco:** a vocação "acabar" no D115 a D166 e o combate perder meta. Mitigação: a Fronteira (a partir do D91) e o equipamento que se desgasta mantêm o combate com objetivo.

## 5. Ofício mestre e teto de aprendiz

### 5.1 As regras

1. Todo personagem pode praticar os 12 ofícios. Todos começam como **aprendiz**: teto no nível 30 e acesso aos tiers T1 e T2 (revisão de consistência: R5).
2. Ao chegar ao 30 num ofício, o jogador pode **tomá-lo como ofício mestre**, se tiver vaga. São 2 vagas. O mestre sobe até o 100, faz os tiers T3 a T6 (o T3 abre no 35) e acumula Maestria. A escolha é um gesto simples, com uma tela que explica o que muda; não custa nada.
3. Os outros 10 ofícios ficam no teto de aprendiz.

Na prática, a primeira vaga é preenchida na virada do 30 (de ~D2,6 a ~D5,2, conforme o perfil, com o bônus de calouro; revisão de consistência: R10), e a segunda quando outro ofício chega ao 30 (regular: D13,6).

### 5.2 A XP depois do 30: a reserva

- A fila de um aprendiz no 30 continua produzindo normalmente (T1 e T2).
- A XP ganha vai para a **reserva do ofício**, até **861.301 XP**, que é exatamente a XP do 30 ao 40. No T2, com domínio máximo e taxa ausente de 85%, a reserva enche em `861.301 ÷ (8.000 × 1,10 × 0,85) = 115 h` de fila, uns 5 a 6 dias de fila dedicada (refeito com o T3 no 35; revisão de consistência: R5).
- Se o ofício virar mestre depois, a reserva entra na hora: ele pula do 30 para até o 40.
- Com a reserva cheia, a fila segue rendendo bens, sem XP.
- No 30, o aprendiz trabalha no T2 com o domínio máximo (+10%); o T3 abre no 35 e é só de mestre (revisão de consistência: R5).

### 5.3 Trocar de ofício mestre

- **Período de experiência** (proposta do [12](12-onboarding.md), que adotamos): uma troca grátis nos 7 dias seguintes à primeira declaração. O ofício trocado fica adormecido como abaixo, sem perder nada.
- **Depois, uma troca por Era** [H]. O ofício que deixa de ser mestre fica **adormecido**: guarda o nível, a Maestria e os Selos, mas trabalha como aprendiz (T1 e T2) até voltar a ser mestre.
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
- **Comportamento:** fazer sozinho o básico (T1 e T2 em todos os ofícios; revisão de consistência: R5), comprar o avançado de outros mestres e escolher os dois ofícios mestres depois de experimentar.
- **Risco:** um ofício sem mestres suficientes trava a cadeia. Mitigação: oficinas NPC de reforço com preço teto e qualidade baixa ([conceito](../02-conceito.md)); a troca por Era deixa a oferta se mover para onde falta mestre; o módulo 08 mede a distribuição de mestres por ofício.

## 6. Filas e etapas

### 6.1 As regras

1. O personagem tem de **1 a 3 filas em paralelo**.
2. **Cada fila roda uma atividade diferente:** um ofício ou uma expedição. Duas filas nunca rodam o mesmo ofício.
3. Filas **nunca estão à venda**. Os Coins e o Baú Misterioso não dão fila (zona vermelha).
4. **Fila conquistada é permanente.** O Selo, a troca de ofício mestre ou qualquer reset não tiram fila, porque os requisitos contam o maior nível já alcançado.

### 6.2 Como se conquistam

| Fila | Requisito | Casual | Regular | Hardcore |
|---|---|---|---|---|
| 1ª | Início | D0 | D0 | D0 |
| 2ª | Primeiro ofício no 30 e vocação 10 | ~D5,2 | ~D3,9 | ~D2,6 |
| 3ª | Ofício mestre no 60, vocação 40 e 1.000 de Mérito | D50 | ~D30,1 | ~D23,7 |

Datas com os níveis de tier do 06 e o bônus de calouro (estimativa; revisão de consistência: R5 e R10).

**Por que esses requisitos** [H]: a 2ª fila chega na virada do 30 e alivia a decisão mais dura da primeira semana (dividir uma fila só entre o ofício e a vocação). A 3ª pede os três pilares de uma vez: ofício, combate e cidade (Mérito). No casual, o Mérito é o que segura a 3ª fila até o D50; se a simulação mostrar que isso afasta o casual, o requisito de Mérito é o primeiro a baixar.

### 6.3 Etapas e regras de fila (a automação conquistada)

Dentro de cada fila, as **etapas** encadeiam ações em sequência ("minerar 1.000, depois fundir"). As **regras** dizem o que fazer quando algo muda.

| O que a fila ganha | Requisito | Regular |
|---|---|---|
| 2 etapas por fila; "repetir até N"; "entregar X% à encomenda ou à Obra"; regras de destino do excedente do [07](07-economia.md) ("quando o estoque de X passar de N, doar à Obra" ou "vender ao NPC"); **proteções ligadas:** pular a etapa sem insumo, usar a ferramenta reserva, recuar a expedição | Início | D0 |
| 3 etapas por fila | Nível total 150 | D21 |
| 4 etapas por fila | Nível total 250 | D41,5 |
| 5 etapas e regras condicionais de produção ("se o estoque de X passar de N, troque a receita para Y") | Selo grau I, opção "Oficina de mestre" (seção 9.2) | ~D137 |

**Princípio** [H]: **proteção é padrão; otimização se conquista.** As regras que evitam perda vêm ligadas no primeiro dia. As que otimizam se conquistam jogando.

**Limite** [H]: nenhuma regra de fila compra ou vende nos balcões entre jogadores (Bolsa, Feira, Leilão, Câmbio). Esses balcões só recebem ordens postas pelo jogador, que ficam abertas enquanto ele está fora. A venda ao NPC e a doação à Obra podem ser regras de fila, porque não disputam preço com ninguém. É a política "leitura liberada, escrita humana" ([07](../01-pesquisa/07-tecnica-idles-online.md)).

### 6.4 As quatro perguntas

- **Referência:** a automação conquistada por marco do Antimatter Dimensions ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)); filas de tarefas que aliviam a memória do jogador ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.1). **Diferencia-se** do MWI, que vende vagas de fila ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)), e do Trimps, cuja automação de verdade virou um script de terceiros ([A08](../01-pesquisa/fichas/A08-trimps.md)).
- **Problema:** o que o jogo não automatiza vira script e bot (insight 16 da [síntese](../01-pesquisa/00-sintese.md)); e o ausente perde produção quando o plano é curto demais.
- **Comportamento:** planos mais longos e mais espertos conforme o jogador domina o jogo; a decisão resolvida vira automação, a interessante continua humana.
- **Risco:** a 3ª fila multiplica a emissão do veterano por até 3 em relação ao novato com uma fila. Mitigação: a fila é uma por atividade, então a emissão de um mesmo bem por conta tem teto de 24 h por dia; o teto de emissão negociável por conta (módulo 07) segura o resto.

## 7. Offline

### 7.1 As regras

1. O relógio de ausência começa na última ação do jogador. Quando ele volta, o relógio zera.
2. As filas produzem até o **teto de offline**. Depois, seguem por mais 12 h a 25% (o rabo da seção 7.3, adotado na bíblia; revisão de consistência: R15) e então param.
3. Ordens de mercado, entregas já feitas, prazos de encomenda e o cerco não dependem do teto: as ordens ficam abertas, e o cerco usa a inscrição.
4. A fila também para antes do teto se o insumo acabar e não houver etapa seguinte; o Relatório da volta explica.
5. O cálculo é feito no servidor, por eventos, na hora em que alguém precisa do estado ([07](../01-pesquisa/07-tecnica-idles-online.md)).
6. O teto nunca está à venda e é igual para todos no início: **24 h**.

### 7.2 Como o teto sobe: 24 h → 72 h

Quatro degraus de +12 h, cada um de uma área do jogo, conquistáveis em qualquer ordem:

| Degrau | Requisito | Casual | Regular | Hardcore |
|---|---|---|---|---|
| +12 h | Nível total 100 | D12,8 | D10,4 | D9,0 |
| +12 h | Vocação 50 | D32,2 | D26,5 | D23,6 |
| +12 h | 2.000 de Mérito | D100 | D50 | D20 |
| +12 h | Ofício mestre no 80 | ~D84,5 | ~D68,6 | ~D55,9 |

**Teto resultante** (datas do 80 com os níveis de tier do 06, estimativa; revisão de consistência: R5):

| Teto | Casual | Regular | Hardcore |
|---|---|---|---|
| 36 h | D12,8 | D10,4 | D9,0 |
| 48 h | D32,2 | D26,5 | D20,0 |
| 60 h | ~D84,5 | D50,0 | D23,6 |
| 72 h | D100 | ~D68,6 | ~D55,9 |

### 7.3 O rabo depois do teto (adotado na bíblia; revisão de consistência: R15)

Depois do teto, a fila não corta seco: **segue por mais 12 h a 25% da taxa ausente** [H]. Isso equivale a 3 h de fila a mais, e só acontece em ausências maiores que o teto. Quem dormiu demais ou viajou não encontra a oficina parada há horas.

- **Referência:** a recomendação do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2: rendimento decrescente é melhor que corte seco; Pecorella chamou de erro o teto de 2 h do Egg Inc. (idem, seção 6.1).
- **Alternativa descartada:** o corte seco, mais simples de explicar. **O diretor adotou o rabo** (R15): o custo na emissão é pequeno e o ganho de confiança é grande.

### 7.4 As quatro perguntas

- **Referência:** o Melvor, com 24 h simuladas na volta ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o KoL, que acumula até 5 dias de turnos ([D03](../01-pesquisa/fichas/D03-kingdom-of-loathing.md)). **Diferencia-se** do MWI, que cortou o offline de 16 para 10 h e vende cada hora extra até 72 h ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).
- **Problema:** o ausente precisa de folga para o fim de semana e a viagem, mas todo aumento de teto é política monetária: o IdleMMO previu uma "enxurrada de itens" ao ampliar o seu ([04a](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md), seção 5.1).
- **Comportamento:** pausas saudáveis sem medo; o teto maior como conquista de quem se envolveu com o jogo.
- **Risco:** uma ausência de 72 h despeja de uma vez três dias de produção no mercado. Mitigação: o [07](07-economia.md), seção 3, resolve com o teto como **portão de saída**: a cota enche 1/24 por hora, acumula até 3 dias (o mesmo que o offline máximo) e só é gasta quando o valor sai da conta. Quem volta de 72 h pode vender três dias de cota, não mais.

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
| 2 | Primeiro ofício no 30 | ~D5,2 | ~D3,9 | ~D2,6 |
| 3 | 300 de Mérito | D15,0 | D7,5 | D3,0 |
| 4 | Ofício mestre no 60 | ~D37,4 | ~D30,1 | ~D23,7 |
| 5 | Nível total 300 | D65,5 | D48,2 | D53,8 |
| 6 | Ofício mestre no 100 | ~D150 | ~D122 | ~D100 |

Marcos 2, 4 e 6 com os níveis de tier do 06 e o bônus de calouro (estimativa; revisão de consistência: R5 e R10).

**Taxa resultante** (os marcos podem vir em qualquer ordem):

| Taxa ausente | Casual | Regular | Hardcore |
|---|---|---|---|
| 70% | D0 | D0 | D0 |
| 75% | D2,6 | D2,1 | D2,0 |
| 80% | ~D5,2 | ~D3,9 | ~D2,6 |
| 85% | D15,0 | D7,5 | D3,0 |
| 90% | ~D37,4 | ~D30,1 | ~D23,7 |
| 95% | D65,5 | D48,2 | D53,8 |
| 100% | ~D150 | ~D122 | ~D100 |

O hardcore chega ao 95% depois do regular porque põe menos fila nos aprendizes (o marco 5 depende do nível total). É um efeito desejado: o marco premia quem treina os ofícios de apoio.

**Moldura** [H]: a interface chama a taxa de "ritmo da oficina" e mostra o próximo marco ("+5% quando sua vocação chegar ao 20"). É a lição do descanso do WoW: o mesmo número, apresentado como conquista, e não como castigo ([03](../01-pesquisa/03-alem-do-idle.md), seção 17).

### 8.2 Taxa ativa: a bancada ativa

| Lance | Ritmo | Efeito | Quando faz sentido |
|---|---|---|---|
| **Firme** | 100% | Normal | O padrão; é o que vale quando o jogador não escolhe |
| **Forçar** | 125% | A ferramenta gasta em dobro | Prazo de encomenda; insumo barato; ferramenta sobrando |

Regras [H]: um lance a cada 45 s; uma fila por vez na bancada ativa; **no máximo 2 h por dia por conta**; sem resposta em dois lances seguidos, a fila volta à taxa ausente sem perda.

**Reconciliado com o 06 (revisão de consistência: R7):** o lance garimpar/apurar saiu. O achado e a qualidade ativos ficam com as sessões do [06](06-oficios-e-coleta.md) pagas com Inspiração: o **Faro** (coleta), o lote fino e a obra-prima. A bancada ativa fica só com firme e forçar e continua sendo a "taxa ativa" visível que o P12 exige. Os números de volume da seção 8.3 não mudam, porque já usavam o lance forçar.

### 8.3 Quanto o ativo ganha em volume (exemplo calculado)

- **No D1** (taxa ausente de 70%): a bancada no lance firme rende `1,00 ÷ 0,70 = 1,43`, isto é, +43% enquanto dura; forçando, `1,25 ÷ 0,70 = 1,79`, +79%. No dia inteiro, o máximo possível é forçar as 2 h: `2 × (1,25 − 0,70) = 1,1 h` de fila nominal a mais, sobre `24 × 0,70 = 16,8 h`: **+6,5% no volume daquela fila**, com o dobro de desgaste da ferramenta nessas 2 h.
- **Depois do 100** (taxa de 100%): o firme não acrescenta nada; forçando 2 h, `2 × 0,25 = 0,5 h` sobre 24 h: **+2,1%**.

O multiplicador de renda bruta do ativo sobre o ausente tem, portanto, teto baixo e conhecido, que cai conforme o jogador progride, como pede o [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2. O ganho real do ativo está nos exclusivos de cada lado, listados no [01](01-loops.md), L3: obra-prima, achados ativos, mercado e janelas ativas para o ativo; volume contínuo, achados do ausente e ordens persistentes para o ausente.

### 8.4 As quatro perguntas

- **Referência:** a taxa AFK separada, visível e melhorável do IdleOn, de 20% a ~85% ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)). **Diferencia-se** em três pontos: começa em 70%, chega a 100% e nunca está à venda (o IdleOn vende "+30% AFK gains"); o ativo é uma decisão com teto, não um cliente aberto.
- **Problema:** dar sentido à presença sem punir a ausência; e apertar a fonte no lançamento, quando a inflação é mais violenta (insight 9 da [síntese](../01-pesquisa/00-sintese.md)): com todos em 70% no D1, a emissão começa 30% abaixo do nominal e sobe conforme a cidade progride.
- **Comportamento:** envolver-se com a cidade e com os ofícios de apoio para subir a taxa; pôr as mãos onde o achado ou a qualidade valem a pena (no Faro e na obra-prima do 06; revisão de consistência: R7).
- **Risco:** o 70% ser lido como castigo ("por que minha fila rende menos?"). Mitigação: a moldura de "ritmo da oficina"; o primeiro +5% chega no D2; o caminho até 100% fica visível desde o primeiro dia.

## 9. Maestria e Selo de mestre (o prestígio)

### 9.1 Maestria: depois do 100

- Depois do 100, a XP do ofício mestre vira **pontos de Maestria**: **1 ponto a cada 400.000 XP** [H]. No T6, com domínio máximo e taxa de 100%, são 15,9 h de fila por ponto, ou **~0,8 dia no regular**.
- A Maestria tem **três técnicas** dentro de cada ciclo [H, efeitos a reconciliar com os módulos 05 e 06]:

| Pontos no ciclo | Técnica | Efeito | Regular |
|---|---|---|---|
| 5 | **Olho de mestre** | A fila desse ofício passa a produzir uma pequena fração de peças Finas (ex.: 5%); na coleta, o módulo 06 define o equivalente (ex.: mais achados) | ~D126 |
| 10 | **Mão leve** | −15% de desgaste de ferramenta nesse ofício | ~D130 |
| 20 | **Selo disponível** | O jogador pode passar a oficina (seção 9.2) | ~D137 |

Datas com o 100 do regular no ~D122 (estimativa; revisão de consistência: R5).

- **Ficar no 100 é uma escolha válida.** A Maestria continua acumulando, sem teto, e vale inteira no Selo quando o jogador quiser. Nada se perde por esperar.

### 9.2 O Selo de mestre: o que reseta, o que fica, o que muda

Na ficção, o mestre passa a oficina a um aprendiz e recomeça como oficial, agora com o Selo.

**O que reseta:**
- O nível (a XP) do ofício volta ao **30**, o teto de aprendiz. **O tier de produção fica** (revisão de consistência: R22): o mestre que passou a oficina continua sabendo trabalhar no maior tier que já dominou, e o que recomeça é a XP. O domínio do tier (até +10%) só volta a contar quando o nível passar de novo do desbloqueio daquele tier. Motivo: na simulação, com o Selo fechando os tiers, a oferta de T5–T6 caía, o IPC do 2º semestre subia 70% ao ano e 44% do consumo ficava sem atender ([08](08-simulacao.md), seção 7.4).
- Os pontos de Maestria do ciclo são gravados no Selo como **Maestria acumulada**, e as técnicas do ciclo fecham (reabrem no próximo 100, mais depressa).

**O que fica:**
- Tudo o que foi produzido, vendido, guardado ou anunciado; o ouro; as ordens e posições no mercado. **O reset pessoal nunca apaga bem negociável** (insight 4 da [síntese](../01-pesquisa/00-sintese.md)).
- O tier de produção (pelo maior nível já alcançado; R22).
- Filas, teto de offline, taxa ausente e etapas: as conquistas contam o maior nível já alcançado.
- Mérito, títulos, coleção, nível total (pelo maior nível) e a vaga de mestre.
- Os graus do Selo e as regras escolhidas em cada um.

**O custo:** passar a oficina exige uma obra de mestre de **30 mil ouro** e materiais (~20 mil de VR), um dreno de topo do [07](07-economia.md), seção 4.3. A simulação testou um Selo mais barato e não viu ganho (revisão de consistência: R22).

**O que muda:**
- **Multiplicador de XP desse ofício:** `mult = 1 + Maestria acumulada ÷ 20`. Tomando o Selo no mínimo de cada grau, dá **×2, ×4, ×8, ×16 e ×32**. Vale para a XP desse ofício e, portanto, para a Maestria dele. **Não mexe em unidades por hora.**
- **Uma regra nova por grau, escolhida entre duas.** A escolha é de identidade, à moda das facções do Realm Grinder ([A04](../01-pesquisa/fichas/A04-realm-grinder.md)). Menu-base, que o módulo 06 adapta a cada ofício [H]:

| Grau | Tema | Opção A | Opção B |
|---|---|---|---|
| I | Oficina | **Oficina de mestre:** a fila desse ofício ganha a 5ª etapa e regras condicionais | **Mão firme:** a obra-prima desse ofício ganha um passo de decisão a mais |
| II | Ensino | **Aprendizes:** até 2 jogadores tomados como aprendizes ganham +50% de XP nesse ofício até o 30; o mestre ganha Mérito quando cada um chega ao 30 | **Conserto de mestre:** os consertos que você faz reduzem menos a durabilidade máxima da peça (um serviço que outros jogadores procuram) |
| III | Assinatura | **Receita de assinatura:** uma variante exclusiva de receita T5 ou T6, escolhida entre duas | **Marca do mestre:** suas peças levam seu nome e o grau do Selo, visíveis na Feira e no Leilão |
| IV | Reforja | **Reforja sem perda:** reforjar uma peça não arrisca destruí-la (o exemplo do [conceito](../02-conceito.md)); o material da reforja continua sendo consumido | **Fusão:** fundir duas peças gastas numa só, com a durabilidade máxima restaurada; as duas peças somem (dreno) |
| V | Lenda | **Nome na Obra:** seu nome gravado numa Obra concluída da Cidade (cosmético) | **Obra-prima nomeada:** suas obras-primas recebem nome e história, rastreados no livro-razão (cosmético) |

### 9.3 Ganho por ciclo e duração dos ciclos

O mínimo de Maestria no ciclo dobra a cada grau: `mínimo(g) = 20 × 2^(g − 1)`.

Tabela refeita com o Selo que mantém o tier e os níveis de tier do 06 (estimativa desta revisão; revisão de consistência: R5 e R22). Como o mestre volta ao 30 já trabalhando no T6, a volta ao 100 corre na XP/h do T6 e fica mais curta; não há mais janela sem T4, T5 ou T6.

| Grau | Mínimo no ciclo | Maestria acumulada | **Ganho do ciclo** | Multiplicador | Selo no regular | Duração do ciclo | Janela sem T4 a T6 | Volta ao 100 |
|---|---|---|---|---|---|---|---|---|
| I | 20 | 20 | — | ×2 | ~D137 | ~137 dias (desde a criação) | nenhuma | ~42 dias |
| II | 40 | 60 | **+200%** | ×4 | ~D194 | ~57 dias | nenhuma | ~21 dias |
| III | 80 | 140 | **+133%** | ×8 | ~D231 | ~36 dias | nenhuma | ~11 dias |
| IV | 160 | 300 | **+114%** | ×16 | ~D256 | ~26 dias | nenhuma | ~5 dias |
| V | 320 | 620 | **+107%** | ×32 | ~D277 | ~21 dias | nenhuma | ~3 dias |

Selos nos outros perfis (estimativa): casual ~D168, ~D237, ~D281, ~D312 e ~D337; hardcore ~D113, ~D161, ~D191, ~D212 e ~D229.

**Exemplo calculado (Selo II, regular; refeito, revisão de consistência: R22).** Maestria acumulada = 20 + 40 = 60, então `mult = 1 + 60 ÷ 20 = 4`. Com o tier mantido, a volta do 30 ao 100 corre no T6 (22.800 XP/h, domínio só acima do 90) e custa 1.769 h de fila a 100%; dividida por 4, são 442 h, ou **~21 dias** a ~21 h de fila por dia. Depois, o grau III pede 80 pontos: `80 × 400.000 ÷ (25.080 × 4) = 319 h`, mais **~15 dias**. O ciclo inteiro dá ~36 dias (eram 41 quando o Selo fechava os tiers).

**Por que os ciclos encurtam e depois param de encurtar** [H]: a volta ao 100 cai pela metade a cada grau (o multiplicador dobra), mas a fase de Maestria fica em ~15 dias, porque o mínimo dobra junto com o multiplicador. O ciclo converge para pouco mais de duas semanas (no grau V, ~21 dias com a volta de ~3 dias). É o "refaz rápido o que já foi dominado e vai mais longe" da lei 4, sem que o ciclo vire nada.

**A regra de bolso do 02a** (resetar com +50% a +200% da moeda de prestígio; [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.1) é cumprida com folga: o ganho mínimo de cada ciclo vai de +107% a +200%. Quem espera mais acumula mais e ganha mais.

### 9.4 A decisão: quando tomar o Selo

| Se o jogador toma o Selo agora | Se espera |
|---|---|
| Ganha a regra nova e o multiplicador já | Acumula mais Maestria, e o multiplicador seguinte fica maior |
| Continua no mesmo tier, mas perde o domínio (até +10%) e as técnicas do ciclo até voltar ao 100 (R22) | Mantém o domínio e as técnicas do ciclo |

Duas jogadas possíveis [H]: **alternar** os dois ofícios mestres (um no Selo, o outro no 100, segurando as técnicas de um deles) e **cronometrar** com o mercado (por exemplo, no começo de uma Era, quando a demanda muda). Antes de confirmar, a tela mostra a projeção: "Selo agora: ×4; você continua no T6; volta ao 100 em ~21 dias" (revisão de consistência: R22).

**Automação do reset (lei 4):** a partir do grau III, quando o momento certo já virou fórmula para o jogador, ele pode ligar o "Selo automático ao atingir o mínimo". É opção, nunca padrão.

### 9.5 Quantas camadas

1. **Maestria:** contínua, sem reset. Pontos e três técnicas por ciclo.
2. **Selo de mestre:** o reset do ofício ao 30. **Cinco graus no lançamento;** proposta de um grau novo a cada 1 ou 2 Eras, sempre com uma regra nova (lei 2; insight 17 da [síntese](../01-pesquisa/00-sintese.md)). No regular, o grau V chega por volta do D277, no começo da 4ª Era.
3. **Era e Fronteira:** o prestígio coletivo, sem reset pessoal, com fim digno a cada temporada (lei 12). Desenho no módulo 10.

### 9.6 As quatro perguntas

- **Referência:** a regra de bolso e o "refaz rápido e vai mais longe" de Pecorella ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.1); a automação do reset no Antimatter Dimensions ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)); a facção como identidade no Realm Grinder ([A04](../01-pesquisa/fichas/A04-realm-grinder.md)); o Selo do [conceito](../02-conceito.md). **Diferencia-se** dos prestígios de idle solo porque nunca toca em bem negociável e volta ao 30, não ao 1.
- **Problema:** conteúdo depois do 100; uma regra nova em vez de "o mesmo, mais rápido"; e o veterano que, sem rotação, ocuparia o T6 para sempre.
- **Comportamento:** ciclos de domínio e identidade; rotação periódica dos produtores de topo; o ensino de novatos (opção Aprendizes).
- **Risco:** voltar ao 30 parecer castigo, mesmo com o tier mantido; ciclos mais curtos acelerarem os graus; regras do Selo que reduzem drenos (conserto, reforja). Como o Selo mantém o tier (R22), muitos mestres tomarem o Selo ao mesmo tempo não esvazia a oferta de T6. Mitigações na seção "Como isso pode dar errado".

## 10. Números em duas velocidades

O piso P1 do [conceito](../02-conceito.md) pede que o pessoal possa crescer sem limite e que o negociável fique em unidades que cabem na cabeça (leis 5 e 6 do [02](../01-pesquisa/02-padroes-matriz-leis.md)). Aqui está onde cada coisa mora:

| Cresce sem limite (pessoal, preso à conta) | Quanto | Fica linear ou com teto (negociável ou ligado à emissão) | Quanto |
|---|---|---|---|
| XP por nível | `XP(10) = 2.812` → `XP(99) = 1.538.037` (×547) | Unidades por ação | 1, sempre |
| XP total | 6.156 no 10 → 41,4 milhões no 100 | Velocidade da fila | ≤ 1,10 × nominal (domínio) × taxa ≤ 1,00; forçar (×1,25) só na bancada ativa, até 2 h/dia |
| Multiplicador de XP do Selo | ×2 → ×32, dobrando por grau | Unidades por hora por fila | T1: 420 a 660; T6: 84 a 132 |
| Maestria acumulada | 20 → 620 em cinco Selos (×31) | Unidades por dia de um mesmo bem, por conta | ≤ 24 h de fila: T1 ≤ 15.840; T6 ≤ 3.168 (+66 forçando) |
| Mérito | sem teto | Filas por conta | ≤ 3, uma por atividade |
| Nível total, coleção, títulos | até 500; sem teto | Teto de offline | ≤ 72 h (+ rabo de 3 h equivalentes, adotado; R15) |
| | | Taxa ausente | ≤ 100% |
| | | Ganho de volume do ativo | ≤ +6,5% do dia (cai para +2,1% no fim) |
| | | Achados do ausente | ≤ 20% por hora contínua |
| | | Venda a NPC | Preço decrescente por volume do dia (módulo 07) |
| | | Emissão negociável por conta e dia | Teto linear do módulo 07 (portão de saída; cota acumula até 3 dias) |

**O exemplo que resume a regra** [H]: um mestre no Selo V tem multiplicador ×32 e sobe do 30 ao 100 em 3 dias. Mas, no T6, a fila dele produz os mesmos 132 minérios por hora (no máximo) que a de qualquer outro mestre no 100 (com o T6 no 90, o domínio máximo vem no 100; revisão de consistência: R5). O exponencial acelera o nível, não a torneira.

**Onde o exponencial pode tocar o negociável: só nos custos.** Se algum módulo criar uma compra pessoal paga com bens negociáveis (melhoria de oficina, casa, Obra), o custo pode crescer exponencialmente com o nível, porque é dreno (lei 6). A fonte negociável nunca cresce assim.

## 11. A lei do serrote: tempo até o próximo desbloqueio ou compra que importa

A lei 1 do [02](../01-pesquisa/02-padroes-matriz-leis.md) pede calibrar a espera até a próxima compra que importa, por faixa, e derrubá-la antes que vire muro. A tabela usa o perfil regular. A coluna "maior espera" vem do modelo, contando como desbloqueio: receita nova (premissa: a cada 3 níveis até o 30 e a cada 5 depois, a reconciliar com o módulo 06), tier, fila, offline, taxa, etapa, Maestria, Selo, cada cerco semanal e cada encomenda concluída (premissa: uma a cada 4 dias no regular).

| Faixa | Ritmo de nível (ofício principal) | Desbloqueios que importam | Maior espera sem desbloqueio | A compra que importa (alvo para os módulos 05 e 07) | Três metas: minutos · horas · dias |
|---|---|---|---|---|---|
| **1ª sessão** (0–15 min) | Um nível a cada 1 a 3 min (do 2 ao 7) | Primeira receita, primeira venda, primeiro lance | < 5 min | Nenhuma: o jogo dá a ferramenta T1 | Lance · nível 8 · 2ª fila |
| **1ª hora** | Um nível a cada 10 a 20 min (até o ~9) | Receita do nível 9; primeira ordem na Bolsa; primeira encomenda aberta | ~40 min | Insumo ou ferramenta T1 melhor: minutos de renda | Venda · nível 10 · tier T2 |
| **Resto do D1** | Um nível a cada 1 a 5 h (até o ~17) | T2 no 15; receitas no 12 e no 15; o primeiro Relatório da volta | 10 h (a noite) | Ferramenta T2: ~meio dia de vendas | Obra-prima · receita · virada do 30 |
| **D2 a D7** | Um nível a cada 6 a 15 h (17 → 35) | +5% de taxa (D2); **virada do 30 (~D3,9, com o bônus de calouro):** ofício mestre, 2ª fila, +5%; T3 no 35 (~D6,5); primeiro cerco (D7) | 36 h | Ferramenta T3: 1 a 2 dias de renda | Encomenda · nível · virada do 30 |
| **D8 a D30** | Um nível a cada 8 a 34 h (35 → 60) | +5% (D7,5); 36 h de offline (D10); 2º mestre (D13,6); 3ª etapa (D21); T4 no 55 (~D23); 48 h (D26,5); 3ª fila e +5% (~D30) | 52 h | Ferramenta T4: ~3 dias de renda | Mercado · nível · T4 e 3ª fila |
| **D31 a D91** (1ª Era) | Um nível a cada 32 a 59 h (60 → ~89) | 4ª etapa (D41,5); +5% (D48); 60 h (D50); T5 no 75 (~D58); 72 h (~D69); fim da Era (D91) | 4 dias | Ferramenta T5: ~5 dias | Obra-prima T5 · nível · T5 e 72 h |
| **D92 a D182** (2ª Era) | Um nível a cada 52 a 74 h até o 100 (~D122); depois, um ponto de Maestria a cada ~0,8 dia | Fronteira (D91); T6 no 90 (~D94); 100 e taxa 100% (~D122); técnicas (~D126, ~D130); Selo I (~D137), sem sair do T6; 2º mestre no 100 (~D150) | 4 dias | Ferramenta T6: ~7 dias; insumos de obra-prima T6; doações à Obra | Obra-prima T6 · ponto de Maestria · Selo I |
| **D183 em diante** | Ciclos de Selo de ~57, 36, 26 e 21 dias | Selos II a V (~D194, ~D231, ~D256, ~D277); Eras e Fronteiras | 4 dias | Insumos e equipamento de reposição | Mercado · volta ao 100 · próximo Selo |

Tabela com os níveis de tier do 06, o bônus de calouro e o Selo que mantém o tier (estimativa; revisão de consistência: R5, R10 e R22). A maior espera de cada faixa vem do modelo original.

**Regra de cadência** [H], para os módulos 06 e 10 cumprirem, medida **no perfil casual** (o mais lento): no máximo uma noite sem algo novo no D1; no máximo 2 dias na primeira semana; no máximo 4 dias no primeiro mês; no máximo 7 dias depois. No modelo, o casual fica dentro disso: maior espera de 9 h no D1, 37 h na semana 1, 4 dias no mês 1 e 6 dias depois (as encomendas dele fecham a cada ~6 dias). O regular fica bem abaixo: 10 h, 36 h, 52 h e 4 dias.

**O muro de tempo previsto** [H]: do 90 ao 100 (~D94 a ~D122 no regular), um nível leva 2 a 3 dias. É a faixa mais lenta da curva. Ela é segurada pela meta de dias (o 100 abre a Maestria) e pela Fronteira, que começa no D91. É um muro do tipo 2 da taxonomia do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 8: curto, só de espera, sem botão de pagar ao lado.

**A compra que importa.** O preço em ouro é do módulo 07; este módulo fixa os **alvos de tempo** que a simulação deve acertar: a ferramenta do tier novo deve custar de meio dia (T2) a ~7 dias (T6) da renda líquida típica do jogador naquela faixa. E, para o desgaste sustentar a demanda, **uma ferramenta deve durar de 3 a 7 dias de fila contínua** [H, a reconciliar com o módulo 05].

## 12. Interfaces com outros módulos

### 12.1 Para a simulação da economia (módulo 08)

| Parâmetro | Valor [H] | Seção |
|---|---|---|
| Tempo por ação na coleta, T1 a T6 | Os do 06: 8 a 30 s na coleta, 6 a 22,5 s na Colheita (revisão de consistência: R4); a XP/h por tier não muda | 2.1, 13.3 |
| XP por ação na coleta | 10, 20, 36, 60, 110 e 190 | 2.1 |
| XP/h por tier (todas as atividades) | 6.000, 8.000, 10.800, 13.500, 18.000 e 22.800 | 2.1 |
| Níveis de desbloqueio dos tiers | 1, 15, 35, 55, 75 e 90 (ofício e vocação), os do 06; datas ~5% a 7% mais tardias depois do 30 (revisão de consistência: R5) | 2.1, 4.1, 13.3 |
| Domínio | `1 + 0,01 × mín(n − n_tier, 10)` | 2.2 |
| Produção da fila | `unidades/h = 3.600 ÷ t × dom × taxa`; 1 unidade por ação | 2.3 |
| Unidades/h por fila | T1: 420 (70%, sem domínio) a 660 (100%, domínio máximo); T6: 84 a 132 | 2.1, 10 |
| Máximo de um mesmo bem por conta e dia | 24 h de fila: T1 15.840; T6 3.168 | 10 |
| Exemplo de referência | Regular por volta do D30: 212,6 minérios T4/h e ~4.360 por dia na fila principal; 1.913 numa noite de 9 h (refeito com o T4 no 55; R5) | 2.3, 3.2 |
| Taxa ausente | 70% + 5% por marco, seis marcos, até 100%; datas por perfil | 8.1 |
| Taxa ativa | Firme 100%; forçar 125% (desgaste ×2); 2 h/dia; uma fila por vez (garimpar/apurar saiu; revisão de consistência: R7) | 8.2 |
| Bônus de calouro | ×1,6 na XP de ofício nos 3 primeiros dias da conta (revisão de consistência: R10) | 3.5 |
| Filas | 1 → 3, uma por atividade; datas por perfil | 6.2 |
| Teto de offline | 24 → 72 h; datas por perfil; rabo de 12 h a 25% (adotado; revisão de consistência: R15) | 7 |
| Perfis | Eficiência do plano 75 / 90 / 98%; alocação da tabela 3.3; sessões 2 / 4 / ~10 por dia | 3.3 |
| XP ativa | Obra-prima = 15 min de XP da fila do tier; só 8 por dia rendem XP; obras-primas por dia 1 / 2 / 8; bancada ativa 10 / 25 / 90 min | 3.3 |
| Mérito (provisório) | 20 / 40 / 100 por dia; marcos de progressão em 300, 1.000 e 2.000 | 3.3, 6.2, 7.2, 8.1 |
| Curvas | `XP(n) = 5 × n^2,75`; `XP_voc(n) = 4 × n^2,75`; datas nas tabelas 3.4 e 4.2 | 3, 4 |
| Maestria | 1 ponto = 400.000 XP; técnicas aos 5, 10 e 20 pontos | 9.1 |
| Selo | Mínimo `20 × 2^(g−1)`; `mult = 1 + acumulada ÷ 20`; volta o nível ao 30 e **mantém o tier de produção**, sem janela sem T4 a T6; custo de 30 mil ouro e materiais (revisão de consistência: R22) | 9.2, 9.3 |
| Achados do ausente | `mín(h, 20)%` por hora contínua; ~2,9 por dia de fila contínua; presos à conta | [01](01-loops.md), L3 |
| Bot | Teto físico do hardcore com eficiência de 100%: não produz mais por conta | 3.3 |
| Pagante | Os mesmos números do perfil de atividade dele: os Coins não mudam nenhum número deste módulo | 1 |

**O que a simulação precisa testar primeiro** [H]: (1) a oferta de T4 a T6 com mestres chegando aos tiers nas datas da tabela 3.4 (o Selo não os tira do tier; R22); (2) a emissão total com a taxa ausente subindo de 70% a 100% ao longo da 1ª Era; (3) a sensibilidade das datas à eficiência do plano.

### 12.2 Para os demais módulos

| Módulo | O que este módulo fixa ou pede |
|---|---|
| **03 Personagem** | Vocação sem camada além do 100 no lançamento (4.3); os ajudantes não mexem na taxa ausente nem nas filas. |
| **04 Combate** | Expedição como atividade de fila; regiões nos mesmos degraus dos tiers; XP de vocação do cerco e da Fronteira somada à da fila. |
| **05 Itens** | A ferramenta é portão de tier (regra do 05) e não acelera (revisão de consistência: R16); a qualidade muda durabilidade e achado; alvo de 3 a 7 dias de fila por ferramenta (o 05 dá 84 h à Comum e 109 h à Obra-prima, dentro do alvo); técnica Mão leve (−15% de desgaste). |
| **06 Ofícios** | XP/h igual por tier (a XP por ação segue o tempo da ação); equipamento pode ter ações de 60 a 300 s; receitas a cada 3 níveis até o 30 e a cada 5 depois; menu de regras do Selo adaptado a cada ofício; XP da obra-prima. |
| **07 Economia** | Na fórmula `teto(n, m) = 600 + 30 × n + 50 × m` do 07: **`m` = soma dos graus do Selo nos dois ofícios mestres (0 a 10 no lançamento: 5 graus × 2)**, e **`n` deve usar o maior nível já alcançado**, senão o Selo (que volta o ofício ao 30) cortaria o teto de quem toma prestígio (adotado no 07; revisão de consistência: D9). Também: destino do excedente; Selo que mantém o tier, sem choque de oferta de T6 (R22); alvos de preço de ferramenta em dias de renda (seção 11). |
| **09 Social** | Mérito como requisito de progressão (300, 1.000 e 2.000); a opção Aprendizes do Selo II. |
| **10 Live-ops** | Um grau novo de Selo a cada 1 ou 2 Eras; Fronteira em trilha própria, sem consumir filas. |
| **11 Monetização** | Zona vermelha deste módulo: filas, etapas e regras, teto de offline, taxa ausente, bancada ativa, XP, Maestria e Selo. Nada disso se compra com Coins nem entra no Baú Misterioso ou no passe. |
| **12 Onboarding** | Nível 5 em ~2,5 min e 7 em ~9 min na primeira sessão, já com o bônus de calouro; a virada do 30 entre o D2 e o D4 no regular e no hardcore e por volta do D5 no casual, com o bônus de ×1,6 nos 3 primeiros dias (revisão de consistência: R10 e D3). |

## 13. Propostas de mudança na bíblia e pontos a reconciliar

### 13.1 Propostas [proposta de mudança na bíblia]

1. **Glossário:** incluir **taxa ausente**, **taxa ativa**, **bancada ativa**, **lance**, **achados** (ativos e do ausente), **etapas** e **regras de fila**, **nível total**, **reserva do aprendiz**, **pontos de Maestria**, **grau do Selo** (o **Relatório da volta** já entrou no glossário na revisão de 2026-11-11). **Adotada em parte** no anexo do glossário (revisão de consistência: R14).
2. **Definição de Fila:** "De 1 a 3 filas paralelas por personagem; cada uma roda uma atividade diferente (nunca duas no mesmo ofício); dentro de cada fila, etapas em sequência." **Adotada** (R6).
3. **6.1, offline:** acrescentar o rabo de 12 h a 25% da taxa ausente depois do teto. **Adotada** (R15).
4. **6.1, ação básica:** "3 a 30 s por unidade" vale para coleta, transformação e consumíveis; equipamento pode levar de 60 a 300 s por peça (a confirmar no módulo 06). **Substituída pela R4 e pela D2:** 3 a 30 s só para coleta; transformação até ~170 s por unidade no T6; criação de 5 a 115 min por peça.
5. **6.2, Maestria:** "1 ponto a cada 400 mil XP depois do 100; três técnicas por ciclo (5, 10 e 20 pontos); Selo de mestre com cinco graus no lançamento; o Selo volta o ofício ao 30." Com a R22, o Selo volta o nível ao 30 e mantém o tier de produção.
6. **6.2, pista:** registrar a leitura usada: "≥ 90 dias até o primeiro 100 de ofício mestre mesmo para o hardcore". Com as regras da revisão de consistência, a simulação mediu D102 no hardcore, D123 no regular e D149 no casual (eram D95, D116 e D141).

### 13.2 Conflitos encontrados e como foram resolvidos aqui

| Conflito | Resolução proposta |
|---|---|
| O glossário diz que a fila é "uma por vez no início", e a bíblia fala em "filas 1 → 3": dá para ler como filas paralelas ou como vagas de sequência (o modelo do MWI). | Filas paralelas, uma por atividade, com etapas em sequência dentro de cada uma (seção 6). |
| As duas taxas do pilar 4 e do P12 contra a paridade online/offline recomendada no estudo técnico ([07](../01-pesquisa/07-tecnica-idles-online.md)). | O cálculo é o mesmo online e offline; a taxa só muda na bancada ativa, que é um modo explícito, com decisões e teto diário ([01](01-loops.md), L1 e L2). |
| O conceito diz que o Selo "reseta o ofício", e a pesquisa alerta para o medo do "superprestígio" que reduz o poder ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 4.2). | O reset vai ao 30, não ao 1; o jogador vê a projeção antes; ficar no 100 continua valendo. |
| O [02a](../01-pesquisa/02a-teoria-design-idle.md) prefere rendimento decrescente a corte seco; a bíblia fixa tetos de 24 h e 72 h. | Mantidos os tetos; proposto o rabo de 12 h a 25% (seção 7.3). |
| O teto de emissão é "por conta e por dia" (bíblia 6.6), mas uma ausência de 72 h entrega três dias de produção de uma vez. | Resolvido pelo 07: portão de saída com cota que acumula até 3 dias (seção 7.4). |
| O exemplo do conceito ("reforjar sem perda") reduz a destruição de itens, que é dreno (P3). | Mantido como opção do grau IV, com material consumido, ao lado de uma opção que é dreno (Fusão); o módulo 08 mede o efeito. |

### 13.3 Reconciliação com os módulos escritos em paralelo

Os módulos 05, 06, 07 e 12 foram escritos ao mesmo tempo que este. As divergências abaixo foram medidas no modelo de bolso (datas do primeiro 100 de ofício mestre). **O diretor decidiu todas na revisão de consistência** (a resolução de cada linha está na última coluna, entre parênteses).

| Tema | Este módulo | Outro módulo | Efeito medido | Recomendação |
|---|---|---|---|---|
| **Velocidade da fila** | Domínio até +10%; a ferramenta não acelera; fila ≤ 1,10 × o nominal | [05](05-itens.md) 4.5 e [06](06-oficios-e-coleta.md) 2.2: domínio até +30% sobre o nível da receita; ferramenta +10% por tier acima (até +20%) e +0% a +12% pela qualidade; fila até 1,72 × o nominal | Com os tiers e o domínio do 06, sem a ferramenta acelerar: casual D149, regular D122, hardcore D100 (pista cumprida). Somando a ferramenta (bônus de 4%, 12% e 24% por perfil): casual D143, regular D109, **hardcore D81, abaixo do mínimo de 90** | **A ferramenta não acelera:** fica como portão de tier, durabilidade e achado. A velocidade comprada no mercado vira vantagem do rico em XP e em volume ao mesmo tempo (lei 14 e lei 6). (**Decidido: R16.** Na simulação, acelerando, o hardcore chega ao 100 no D85 e o IPC vai a +83% ao ano.) |
| **Níveis dos tiers** | 1, 15, 30, 50, 70, 85; o aprendiz faz T1 a T3 | [06](06-oficios-e-coleta.md) 2.1: 1, 15, 35, 55, 75, 90 (+2 ou +5 por peça); o aprendiz faz T1 e T2 | Datas cerca de 5% mais tardias (linha acima); a interdependência fica mais forte, porque o T3 já é de mestre | **Adotar os níveis do 06**, que é o dono das receitas. As tabelas 2.1 e 3.4 trocam 30, 50, 70 e 85 por 35, 55, 75 e 90; a curva de XP não muda; os marcos que citam o 30 (teto de aprendiz) ficam. (**Decidido: R5**; tabelas refeitas nesta revisão.) |
| **Sessões ativas** | Bancada ativa com lances firme, forçar e garimpar/apurar, até 2 h/dia | [06](06-oficios-e-coleta.md) 2.4 e 6.4: Faro (coleta), obra-prima, obra-prima de transformação e lote fino, pagos com **Inspiração** (+1 por hora) | Com 24 de Inspiração por dia, o hardcore faz ~6 obras-primas, não 8: datas um pouco mais tardias | **Unificar:** o lance garimpar/apurar sai, porque o Faro e o lote fino fazem esse papel; a bancada ativa fica com firme e forçar e continua sendo a "taxa ativa" visível que o P12 exige. A proposta de glossário "achados ativos" passa a ser o que o Faro rende. (**Decidido: R7**; seção 8.2 alinhada.) |
| **Quando o mestre ganha as habilidades** | O ofício vira mestre no 30 | [06](06-oficios-e-coleta.md) 2.1: obra-prima, Faro e lote fino "abrem no nível 10 do ofício mestre"; [12](12-onboarding.md): declaração no 30 | — | Esclarecer no 06 se "nível 10" quer dizer 10 níveis depois da declaração (o 40). Recomendação: abrir na declaração (30), para a virada do 30 entregar a primeira obra-prima. (**Decidido: R11:** as habilidades abrem no nível 10 do ofício, para mestres e aprendizes; o teto de aprendiz limita só tier e qualidade.) |
| **Teto de emissão** | Segue o 07 | [06](06-oficios-e-coleta.md) 2.3: "o que passa do teto nasce preso"; [07](07-economia.md) 3.2: portão de saída, nada nasce preso | — | Seguir o 07, que é o dono do teto; o 06 precisa ser alinhado. (**Decidido: R18:** teto em VR fixo, com crédito dos insumos e portão de saída; o 05 e o 06 foram alinhados.) |
| **As duas taxas na tela** | Taxa ausente de 70% a 100%; a aba aberta não muda nada; o ativo é a bancada ativa | [12](12-onboarding.md) 5.1: "com você aqui: 10 por minuto; fora: 8 por minuto"; volta: "fora, você rendeu 80% do ritmo ativo" | — | Ajustar o texto do 12: "Na bancada: 10 por minuto. No piloto automático: 7 por minuto (ritmo da oficina: 70%, sobe jogando)". Estar presente sem decidir não muda a taxa (L1 do [01](01-loops.md)). (**Decidido: R9**; o 12 foi alinhado.) |
| **Primeiro 30** | D4 a D7 | [12](12-onboarding.md): D2 a D4 | Bônus de calouro ×1,6 leva o 30 a D2,6–D4,3, com o 100 adiantando menos de 2 dias | Decisão do diretor (seção 3.5). Recomendação: adotar o bônus ×1,6 só se o alfa mostrar evasão antes do 30. (**Decidido: R10:** bônus de ×1,6 na XP de ofício nos 3 primeiros dias, desde o lançamento.) |
| **Troca de ofício mestre** | Uma por Era | [12](12-onboarding.md): troca grátis nos 7 dias seguintes à primeira declaração | — | Adotado (seção 5.3) |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **O hardcore chega ao 100 antes do D90** | A eficiência real passa de 98%, ou aparece uma fonte de XP ativa que o modelo não previu (evento, encomenda generosa). | Teto de 8 obras-primas com XP por dia; nenhuma fonte de XP fora da fila sem passar pelo módulo 08; o coeficiente `5` ajusta todas as datas na mesma proporção. Ajustar só antes do lançamento: depois, mudar a curva pune quem planejou (lei 8). |
| **O casual se sente para trás** | O primeiro 100 dele vem por volta do D149, e a 3ª fila no D50, presa ao Mérito. | O casual não se compara ao hardcore: as metas são pessoais, os rankings são por faixa (módulo 09), e o requisito de Mérito da 3ª fila é o primeiro botão a baixar se a simulação ou o alfa mostrarem evasão. |
| **O 70% vira castigo percebido** | O jogador lê "minha fila rende 70%" como punição por não estar presente. | Moldura de "ritmo da oficina" com o próximo marco à vista; primeiro +5% no D2; a aba aberta não muda nada, então não há presença a cobrar. |
| **Ninguém toma o Selo** | Voltar ao 30 assusta, mesmo mantendo o tier, e a camada vira enfeite. | Ficar no 100 é válido, mas a regra nova e o ×2 são visíveis desde o 100; o tier fica (R22), e o custo é só o domínio, as técnicas e os 30 mil ouro; se o alfa mostrar rejeição, subir o primeiro multiplicador para ×3 (a volta ao 100 cai de ~42 para ~28 dias) antes de mexer no resto. |
| **Todo mundo toma o Selo junto** | No fim de uma Era, muitos mestres resetam ao mesmo tempo. | Resolvido na regra: o Selo mantém o tier de produção (R22), então a oferta de T6 não cai; o que muda é o ritmo de XP, que não toca o negociável. A simulação mostrou que, com o Selo fechando os tiers, faltava T6 no 2º semestre ([08](08-simulacao.md), seção 7.4). |
| **O prestígio come drenos** | As regras do Selo (Conserto de mestre, Reforja sem perda) e a técnica Mão leve reduzem o desgaste e a destruição; somadas entre muitos veteranos, enfraquecem o P3. | Cada regra que reduz dreno tem par que é dreno ou neutro; os efeitos são pequenos e medidos pelo módulo 08; ajuste com aviso prévio (lei 21). |
| **Ofícios adormecidos acumulam** | Em dois anos, um veterano tem quatro ofícios no 100, adormecidos, e troca de mestre a cada Era conforme o mercado. | Só dois exercem de cada vez; uma troca por Era; a troca é visível no perfil, e o mercado se ajusta em semanas, não em horas. |
| **A reserva do aprendiz vira atalho** | O jogador enche a reserva de vários ofícios e troca de mestre só para "colher" 10 níveis. | A reserva vale 10 níveis baratos (do 30 ao 40, ~5 dias de fila); uma troca por Era; o efeito no mercado é pequeno. |
| **Planície entre desbloqueios** | Com a curva de potência e os tiers em degraus suaves, o meio do jogo vira "o número sobe e só" (a queixa do Melvor, [B01](../01-pesquisa/fichas/B01-melvor-idle.md)). | A regra de cadência da seção 11; receitas e eventos coletivos como serrote; a meta de dias sempre visível. |
| **Bot de eficiência perfeita** | Um script mantém as filas 100% ocupadas e usa as 2 h de bancada ativa todo dia. | O teto físico é o do hardcore (uma fila por atividade, 24 h); o teto de emissão negociável por conta segura o resto; conta = adulto verificado (P8); detecção por regularidade e fluxo de valor ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| **Premissas de perfil erradas** | As eficiências (75 / 90 / 98%) e as alocações de fila são palpites; o jogo real pode ser outro. | Medir desde o alfa a eficiência do plano e a divisão de filas por coorte; recalibrar o coeficiente da curva, nunca as regras, antes do lançamento. |
| **A progressão passa a depender do social** | Mérito é requisito de marcos de taxa, fila e offline; o solitário trava. | Mérito também vem de doações solo às Obras (inclusive o excedente do teto de emissão); medir o tempo até cada marco entre jogadores sem guilda. |

