# GDD 04 — Combate: regras, expedições, masmorras, chefes e cercos

> **Depende de:** [00-biblia](00-biblia.md) e [03-personagem](03-personagem.md). **Conversa com:** `02-progressao`, `05-itens`, `06-oficios-e-coleta`, `07-economia`, `09-social`, `10-live-ops` e `14-arte-e-ui` (pontos marcados "a reconciliar").
> **Etiquetas:** [F] fato com fonte, [H] proposta do estúdio, [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**

## 1. Resumo do módulo

O combate do jogo é um **plano que o servidor executa**. O jogador escreve regras ("quando a minha vida cair abaixo de 35%, usar poção"), escolhe a região, os suprimentos e o que fazer se der errado, e sai. O servidor simula as lutas, inclusive enquanto ele está fora, e na volta entrega um diário. As decisões centrais:

1. **Regras por gatilhos**, lidas de cima para baixo, com casas de regra conquistadas jogando (3 no início, 12 no nível 90) e um **plano de expedição** separado, com recuo e Plano B. O ausente nunca acorda com a expedição parada por um erro bobo.
2. **Fórmulas simples:** `dano = ATQ × potência × 100 / (100 + DEF)`. Uma DEF de 100 corta metade do dano.
3. **Duas barras nos encantados: Vida e Bruma.** Zerar a Vida **dispersa** o encantado (mais rápido, rende material negociável). Zerar a Bruma primeiro o **liberta** (mais lento, rende dádiva, Mérito e empurra a Bruma da região). Os encantados nunca morrem.
4. **Expedições de coleta** são filas de combate que abastecem Curtume, Culinária, Alquimia e Carpintaria, reguladas pela **Lei da Caipora**: caçar demais numa região cansa a mata e chama a protetora dos bichos.
5. **Nenhuma perda de item por derrota.** Os itens só saem do jogo pelo desgaste ([00-biblia](00-biblia.md), 6.5).
6. **Masmorras assíncronas:** cada membro entra com uma cópia congelada do personagem, a mesa enche ao longo de horas, os ajudantes completam o grupo e o servidor resolve. Há Encruzilhadas para votar, com prazo.
7. **Momentos ativos com teto:** cargas de **Arrancada** que se acumulam com o jogador fora, **Encruzilhadas** com janela de horas e **Clarões** no cerco. Somados, dão no máximo +25% sobre o valor diário de combate do ausente.
8. **Cerco semanal** com inscrição até 24 h antes, **Presságio** revelado pelos batedores, **Arsenal** abastecido pelos ofícios, **Guarda do Arraial** (NPC) equipada pela cidade e **dificuldade elástica**. Perder custa à cidade, nunca ao ausente.

## 2. Princípios do combate

| # | Princípio | De onde vem |
|---|---|---|
| C1 | **O combate é um plano.** As regras são escritas antes e executadas pelo servidor. | Lei 8, do plano ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)); [F] o Milky Way Idle tem consumíveis e habilidades que disparam por condições configuráveis ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md), com [Steam](https://store.steampowered.com/app/3224420/Milky_Way_Idle/)) |
| C2 | **Derrota não tira itens.** Ela encerra ou desvia o plano e custa desgaste. | Pilar 4 e [00-biblia](00-biblia.md), 6.5. [F] No Melvor, a morte perde um item equipado para sempre e gera reviews de "perdi itens dormindo" ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) |
| C3 | **O ativo ganha opções com teto.** Janelas de decisão, nunca de reflexo; ganho de presença de no máximo +25% por dia. | Lei 9; [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 11 |
| C4 | **Participação é um orçamento de decisões que se acumula.** | [F] Dois ataques por membro na guerra de clãs do Clash of Clans; inscrição até 2 h antes no chefe mundial do IdleMMO ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), resumo) |
| C5 | **Tudo é simulado no servidor**, de forma determinística, com semente registrada. O diário pode ser reproduzido. | P9 da bíblia; lei 15; [F] o Melvor simula no cliente, e o save é editável ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) |
| C6 | **O combate é um elo da cadeia:** consome comida, poções e equipamento, e abastece os ofícios. | Pilares 1 e 2 |
| C7 | **Nada coletivo trava por falta de gente:** ajudantes, Guarda do Arraial e dificuldade elástica. | Lei 22; [F] as missões públicas vazias do Warhammer Online ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 15) |
| C8 | **Os encantados não se matam.** Dispersam-se ou libertam-se. | [00-biblia](00-biblia.md), seção 3 |

## 3. Regras de combate (os gatilhos)

### 3.1 Como funcionam

Cada regra tem a forma **`QUANDO <condição> [E <condição>] → <ação> [no alvo]`**. As regras ficam numa lista ordenada. Cada vez que o combatente pode agir, o servidor lê a lista de cima para baixo e executa **a primeira regra cuja condição é verdadeira e cuja ação está disponível** (há ânimo, a recarga acabou, há estoque no cinto). Se nenhuma regra serve, o combatente faz o ataque básico.

[F] É o modelo dos *gambits* do Final Fantasy XII: a lista é lida de cima para baixo, a primeira condição atendida dispara, cada personagem começa com 4 casas e pode chegar a 12, e o comando direto do jogador passa na frente dos gambits ([Wikipedia](https://en.wikipedia.org/wiki/Final_Fantasy_XII); [StrategyWiki](https://strategywiki.org/wiki/Final_Fantasy_XII/Gambits)).

### 3.2 Catálogo inicial de condições

| Sobre | Condições [H] |
|---|---|
| **Mim** | PV < X% · PV > X% · ânimo ≥ X · Guarda < X% · estou com [estado] · postura atual é [postura] · ressonância = N |
| **Aliados** | PV de um aliado < X% · aliado com [estado] · aliado ligado pelo Juramento · número de aliados de pé < N |
| **Alvo e inimigos** | Alvo é [bicho / alma / encantado / chefe] · Bruma do alvo < X% · PV do alvo < X% · alvo com [estado] · alvo sem Marca · alvo tem ponto fraco revelado · inimigos ≥ N · inimigo corpo a corpo ao lado · inimigo prepara [ataque anunciado] |
| **Luta** | Tempo de luta > T s · primeiro turno do encontro · encontro é de elite |
| **Estoque** | Cinto tem < N de [item] · óleo da arma acabou |

### 3.3 Ações

- Usar uma habilidade.
- Usar um consumível do cinto, em mim ou num aliado.
- Mudar de postura (Guardião) ou de trilha (Batedor, entre encontros).
- **Escolher o alvo:** menor PV, maior ameaça, o marcado, o encantado, o que está preparando ataque.
- **Esperar:** guardar ânimo, ou ficar parado diante de um ataque anunciado (seção 10.1, o Boitatá).
- **Recuar do encontro:** abandonar a luta atual, sem drop e sem contar como derrota.

### 3.4 Casas de regra

- **3 casas no nível 1** de vocação e **+1 nos níveis 10, 20, …, 90**, até **12 casas**.
- Cada vocação vem com **três modelos prontos**: *Seguro*, *Equilibrado* e *Agressivo*. O novato nunca precisa escrever uma regra no primeiro dia.
- **Nunca à venda.** [F] É a lei 10, da automação conquistada ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)), e [F] o Idle Champions vende familiares que automatizam tarefas, o que gera queixa ([B03](../01-pesquisa/fichas/B03-idle-champions.md)).

### 3.5 O plano da expedição: recuo e Plano B

Além das regras de luta, cada expedição tem um **plano**, que não ocupa casas de regra:

| Gatilho de recuo [H] | O que fazer |
|---|---|
| Poções no cinto < N | Ir ao Plano B, ou voltar e encerrar |
| Alguma peça com durabilidade < X% (padrão: 15%) | Ir ao Plano B (região mais fácil) ou voltar |
| Derrotas ≥ N na última hora | Ir ao Plano B |
| Mochila cheia | **Voltar, depositar no armazém e retomar** (custa só o tempo do caminho) |
| Pressão de caça da região > X% (seção 7.3) | Ir ao Plano B |
| Bruma da região > X% | Ir ao Plano B |
| Refeição acabou | Repor do armazém e retomar, ou seguir sem refeição |

[H] **O Plano B é o coração do respeito ao ausente.** Se o plano A falha às 3 h da manhã, o personagem não fica parado até o meio-dia: ele passa para o plano que o próprio jogador escolheu. A mochila cheia nunca encerra a expedição, porque um teto de mochila abaixo do offline de 24 h seria um teto de offline disfarçado (lei 7).

### 3.6 Exemplo — o modelo "Equilibrado" do Caçador

| # | Regra |
|---|---|
| 1 | QUANDO meu PV < 35% → Poção de cura |
| 2 | QUANDO inimigos ≥ 3 → Chuva de flechas |
| 3 | QUANDO inimigo corpo a corpo ao lado → Recuo |
| 4 | QUANDO alvo sem Marca → Marca |
| 5 | QUANDO alvo é bicho E PV do alvo < 30% → Tiro certeiro (busca o abate limpo) |
| 6 | QUANDO alvo é chefe E ânimo ≥ 60 → Disparo carregado |

**Plano:** caçar na Várzea; se as poções caírem abaixo de 3 ou a pressão de caça passar de 70%, Plano B: caçar na Capoeira do Vau.

### 3.7 Comandos ao vivo

Quem assiste à luta pode dar um comando que passa na frente das regras, como no FFXII. **O comando ao vivo não dá bônus**: equivale a editar as regras na hora. O bônus por presença existe só nas janelas da seção 10.2.

### 3.8 Quatro perguntas

[H] *Referência:* os gambits do FFXII e os gatilhos do Milky Way Idle. *Diferença:* um plano de expedição com Plano B, e condições ligadas ao mundo (pressão de caça, Bruma da região, família do inimigo). *Problema:* o idle sem decisão vira espera, e o combate automático sem regras vira "quem tem mais número". *Comportamento:* o jogador pensa antes de sair, lê o diário, ajusta e se sente esperto (lei 8). *Risco:* virar programação, que afasta o casual. Mitigação: modelos prontos, editor por blocos (módulo 14) e um diário que diz qual regra disparou em cada momento.

## 4. Cálculo de dano e defesa

### 4.1 Tempo

- Cada combatente age quando o seu contador chega ao **intervalo da arma**: facas 2,2 s · facão 2,4 s · espada 2,6 s · arco 2,8 s · cajado e bordão 3,0 s · maça e machado 3,2 s. Lento soma 30% ao intervalo.
- O servidor simula em passos de 0,1 s, com semente registrada, e o mesmo cálculo vale para o tempo online e para o offline.

### 4.2 Fórmulas

| O quê | Fórmula [H] |
|---|---|
| **Acerto** | `acerto = 95% − esquiva do alvo` (mín. 60%). Cego: acerto × 0,5 |
| **Dano** | `dano = ATQ × potência × 100 / (100 + DEF do alvo) × C × A × V` |
| C (crítico) | × 1,5 no crítico (o Batedor chega a × 2,0); × 1 sem crítico |
| A (afinidade) | × 1,5 contra fraqueza · × 1,0 neutro · × 0,5 contra resistência |
| V (variação) | sorteio de 0,9 a 1,1, pela semente |
| **Bloqueio** | o golpe bloqueado causa 30% do dano |
| **Guarda** | absorve o dano antes do PV ([03-personagem](03-personagem.md), seção 5.1) |
| **Dano à Bruma** | `dano na Bruma = CLA × potência de clareza × 100 / (100 + RB)`, sendo RB a resistência à Bruma do encantado |
| Golpes sem clareza | causam na barra de Bruma 10% do que causam na Vida (40% com óleo de clareza) |
| **Peçonha e sangria** | ignoram a DEF |

A defesa tem retorno decrescente: DEF 100 corta 50% do dano, DEF 200 corta 67%, DEF 300 corta 75%. Jogadores e inimigos usam a mesma fórmula.

### 4.3 Exemplo calculado — Caçador nível 30 contra uma queixada tomada (T3)

**O Caçador** (do [03-personagem](03-personagem.md), seção 4.4): ATQ 48,9; crítico 10,1%; esquiva 8,1%; DEF 39; PV 529; arco de 2,8 s.
**A queixada tomada pela Bruma (T3):** PV 300; DEF 40; esquiva 0%; ATQ 30; golpe a cada 3,2 s.

| Golpe do Caçador | Conta | Dano esperado |
|---|---|---|
| Básico | 48,9 × 1,0 × 100/140 = 34,9; × (1 + 0,101 × 0,5) pelo crítico; × 0,95 de acerto | **34,8** |
| Básico com Marca (+15%) | 34,8 × 1,15 | **40,1** |
| Tiro certeiro com Marca | 48,9 × 2,5 × 100/140 × (1 + 0,301 × 0,5) × 0,95 × 1,15 | **≈ 110** |

**A luta:** Marca, dois básicos, Tiro certeiro e três básicos: 40 + 40 + 110 + 3 × 40 = 310, o bastante para os 300 de PV. São 7 ações × 2,8 s ≈ **20 s**.

**O que o Caçador sofre:** 30 × 100/139 = 21,6 por golpe da queixada, com acerto de 95% − 8,1% = 86,9%, ou seja, 18,8 por golpe esperado. Em 20 s são 6 golpes: **≈ 113 de PV** (21% da vida).

**Entre lutas:** com refeição, ele regenera 2% de 529 = 10,6 de PV por segundo e recupera os 113 em 11 s, menos que os 20 a 25 s da procura pelo próximo encontro. Sem refeição, regenera 5,3 por segundo e fecha cada luta com um pequeno déficit, que vira poção nos encontros com bando ou elite. **É assim que a refeição economiza poções** (seção 8).

## 5. A Bruma: dispersar ou libertar

### 5.1 Três famílias de inimigos

| Família | O que é | Desfecho | O que rende |
|---|---|---|---|
| **Bichos tomados** | Animais que a Bruma deformou e enfureceu. A fauna sã nunca é alvo. | Abate | Pele, carne, matéria dura (seção 7) |
| **Almas** | Assombrações do folclore (corpo-seco, pisadeira, visagens) que a Bruma levanta | Dar descanso | Essência de Bruma, relíquias das cidades de outrora |
| **Encantados corrompidos** | Os seres do folclore (Curupira, Caipora, Boitatá…), tomados pela Bruma | **Dispersar** ou **libertar** | Ver 5.2 |

[H] **Por que a fauna sã nunca é alvo:** a Caipora protege os bichos e castiga quem abate além da necessidade ([Wikipedia, Caipora](https://pt.wikipedia.org/wiki/Caipora)). E, no Brasil real, a caça de animais silvestres é proibida ([Lei 5.197/1967, art. 1º](https://www.planalto.gov.br/ccivil_03/leis/l5197.htm)). O Caçador limpa a mata do que a Bruma estragou; ele não caça onça.

**[proposta de mudança na bíblia]** A seção 3 da bíblia diz que a Bruma transforma os encantados em assombrados. Propomos ampliar: **os assombrados têm três origens** (bichos tomados, almas e encantados corrompidos), e só os encantados têm a barra de Bruma e podem ser libertados.

### 5.2 Duas barras nos encantados

Todo encantado corrompido tem **Vida** e **Bruma**. A Bruma vale de 50% a 70% da Vida e **se regenera 2% por segundo** se ninguém usar clareza nele por 5 s.

| Resultado | Quando acontece | O que rende |
|---|---|---|
| **Libertado** | A Bruma zera antes da Vida | A luta acaba na hora. O encantado volta a ser quem era e agradece. Rende **dádiva** (chance), **Mérito**, avanço na **Bruma da região** (−0,5 ponto por libertação comum, −15 por um encantado maior; 7.1), entrada no bestiário e, nos maiores, uma carta de contratação de ajudante ([03-personagem](03-personagem.md), seção 9.3). Quase tudo é **preso à conta** ou é bem público. |
| **Dispersado** | A Vida zera antes | O corpo de Bruma se desfaz e o encantado foge para o fundo da mata, ainda tomado; volta mais tarde. Rende **essência de Bruma** e restos negociáveis (Alquimia). |

**A decisão está nas regras.** Para libertar, o grupo precisa de clareza (Encantador, Erveiro, óleo de clareza) e precisa **segurar o dano físico** ("QUANDO alvo é encantado → não usar Talho pesado"). Dispersar é cerca de 1,5 a 2 vezes mais rápido.

**Exemplo:** Curupira tomado (elite, T2): Vida 900, Bruma 500, RB 25. Um Encantador nível 25, com SAB 40 e cajado de clareza 15, tem CLA 55. O Clarão (potência 2,0) causa 55 × 2,0 × 100/125 = **88 na Bruma**. São 6 Clarões, com recarga de 6 s, revezados com Enleio e Correnteza para alimentar a ressonância: cerca de 40 s. Nesse tempo, a Correnteza tira uns 400 da Vida, e a libertação acontece com folga. Um Guardião sozinho, com Talho pesado, dispersa o mesmo Curupira em uns 25 s.

### 5.3 Dádivas

A dádiva ocupa a casa do amuleto, é **presa à conta** e tem efeito lateral, nunca o maior número do personagem ([03-personagem](03-personagem.md), seção 4.1). Exemplos [H]:
- *Fio de cabelo do Curupira:* imune a desnorteio na mata; +10% de dano contra almas.
- *Escama da Boiúna:* imune a ser arrastado pela correnteza; +10% de DEF em regiões de rio.
- *Brasa do Boitatá:* +20% de resistência a fogo; o lume do grupo sobe 5%.

Chance de dádiva: 10% por libertação de encantado comum; **garantida na primeira libertação de cada encantado maior**, por conta.

### 5.4 Quatro perguntas

[H] *Referência:* a bíblia ("curar ou libertar um encantado é recompensa e narrativa, não só abate") e os eventos sem disputa de abate do Guild Wars 2 ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). *Diferença:* nenhum idle estudado tem "não matar" como opção de peso igual a matar. *Problema:* tratar o folclore como monstro para abater seria caricatura, e repetiria um gesto colonial: [F] Anchieta classificou os curupiras como demônios no século XVI, e jesuítas do XVII os identificaram com o Diabo ([Wikipedia, Curupira](https://pt.wikipedia.org/wiki/Curupira)). *Comportamento:* grupos com clareza, regras que seguram o dano, gente que volta à mesma região para libertar quem só tinha dispersado. *Risco:* libertar ser economicamente pior e ninguém libertar. Mitigação: Mérito, dádiva, avanço da região e cartas de ajudante; a simulação equilibra o valor por hora dos dois caminhos.

## 6. Estados e controle

| Estado | Efeito [H] |
|---|---|
| Atordoado | Perde a próxima ação |
| Enleado | Não se move: o corpo a corpo não alcança quem está à distância; não pode recuar |
| Lento | +30% no intervalo |
| Sono | Perde as ações até sofrer dano |
| Cego | Acerto × 0,5 |
| Medo | −30% de dano causado |
| Peçonha | Dano por segundo, acumula até 5 (7 com o marco *Dente fino*) |
| Sangria | Dano por segundo, 4 s |
| Encantado pelo canto | Para de agir por 3 s (a Mãe-d'água) |
| Náusea | −20 pontos de acerto (o Mapinguari) |
| Desnorteio | Em luta: 20% de chance de errar o alvo. Na expedição: +50% no tempo de procura (o Curupira) |

- **Firmeza** é a chance de resistir a um estado ([03-personagem](03-personagem.md), seção 3.3).
- **Redução por repetição:** o mesmo controle (atordoar, enlear, sono, encanto) no mesmo alvo, dentro de 10 s, dura 50%, depois 25%, e depois o alvo fica imune por 10 s.
- **Chefes:** controles duram metade e eles são imunes a sono.

## 7. Expedições de coleta

### 7.1 Tipos de expedição

| Tipo | Alvo | Rende | Efeito no mundo |
|---|---|---|---|
| **Caça** | Bichos tomados | Pele, carne, matéria dura | Gera pressão de caça (7.3) |
| **Limpeza** | Almas e visagens | Essência de Bruma, relíquias, achados | Baixa a Bruma da região |
| **Libertação** | Encantados | Dádivas, Mérito, cartas de ajudante | Baixa muito a Bruma da região |
| **Vigia** | Os arredores, na semana do cerco | Pontos de vigia para o Presságio (11.2) | Revela o cerco |
| **Travessia** | A terra nova da temporada | Marcos e mapa | A partir da 2ª Era; módulo 10 |

**A Bruma da região** (0 a 100) muda a mistura de inimigos. Ela sobe 3 pontos por dia sozinha. Desce com a limpeza (1 ponto a cada 100 almas que recebem descanso), com a libertação (0,5 ponto por encantado comum; 15 por um encantado maior) e com as obras. Sobe 15 pontos numa região de fora quando a cidade perde um cerco (11.5). O piso é 10: a Bruma nunca some de todo, a não ser onde as obras a empurram. [H] As taxas escalam com a população e se calibram no módulo 08.

| Bruma da região | Bichos | Almas | Encantados | Observação |
|---|---|---|---|---|
| Abaixo de 30 | 70% | 25% | 5% | Boa para caça |
| De 30 a 60 | 45% | 40% | 15% | Mista; tochas a partir de 40 |
| Acima de 60 | 25% | 45% | 30% | Mais essência e mais perigo: +1% de força dos inimigos por ponto acima de 60 |

### 7.2 Como é uma expedição

1. **Escolhas antes de sair:** região (tier e bioma), tipo, ajudantes, suprimentos (cinto, refeições e consumível vocacional, tirados do armazém), regras, plano com recuo e Plano B, e a trilha, no caso do Batedor.
2. **Caminho:** de 5 a 20 min de ida, conforme a distância, sem combate (o Batedor vaqueano corta 25%).
3. **Ciclo:** procura do próximo encontro (20 a 30 s; o desnorteio soma 50%) → encontro com 1 a 4 inimigos (luta média de 20 a 40 s) → saque → regeneração.
4. **A expedição ocupa a fila,** como uma ação de ofício ([00-biblia](00-biblia.md), glossário). Lutar ou produzir é a grande decisão do dia.
5. **Roda offline** até o teto de offline do jogador (24 h na base, até 72 h conquistadas).
6. **Na volta, o diário:** encontros, regras que dispararam, consumo, desgaste, drops, Encruzilhadas e o motivo de cada recuo.

### 7.3 A Lei da Caipora: pressão de caça

[F] Na tradição, a Caipora reina sobre os animais, castiga sobretudo quem abate além do necessário e aceita presentes (fumo de corda deixado numa árvore) que garantem a boa sorte do caçador ([Wikipedia, Caipora](https://pt.wikipedia.org/wiki/Caipora), com base em Câmara Cascudo e no *Dicionário de tupi antigo* de Eduardo Navarro).

[H] **No jogo:**
- Cada região tem uma **pressão de caça** de 0 a 100%, **comum ao servidor inteiro**.
- Cada região tem uma **capacidade** de abates por hora, recalculada todo dia: 1,5 vez a parte que lhe caberia se a caça daquele tier se espalhasse igualmente pelas regiões abertas do tier (pelos abates das últimas 24 h). Assim a regra escala com a população do servidor.
- **Variação por hora:** `20 × (abates na última hora / capacidade − 1)` pontos. Abaixo da capacidade, a região descansa; acima, a pressão sobe. Cada abate do Caçador conta 0,7 (a *Caça de respeito*).
- **Rendimento dos bichos** (pele, carne, matéria dura): `multiplicador = 1 − 0,5 × (pressão / 100)²`. Com 50%, rende 87,5%; com 80%, 68%; com 100%, 50%.
- **A partir de 80%, a Caipora se zanga:** encontros com a **Caipora tomada** (elite) começam a aparecer. Libertá-la derruba a pressão da região para 20% (um bem público) e rende dádiva; dispersá-la derruba para 60%, por pouco tempo.
- **Presente à Caipora:** antes de caçar, o jogador pode deixar um presente (uma refeição Fina ou melhor), e os abates dele contam metade naquela expedição. É um dreno da Culinária. Usar fumo, como na tradição, ou só comida fica para a consultoria cultural (seção 15).
- **Nas regras:** "QUANDO a pressão passar de 70% → Plano B".

**Exemplo:** a Várzea tem capacidade de 1.000 abates por hora. Numa noite em que muita gente a escolhe, ela recebe 1.500 por hora: a pressão sobe 20 × (1,5 − 1) = 10 pontos por hora e vai de 20% a 80% em 6 h. Às 3 h da manhã, as regras dos ausentes os levam ao Plano B, a Várzea fica abaixo da capacidade e descansa.

[H] **Quatro perguntas.** *Referência:* o estado de mundo por região, movido pela soma do idle de todos ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 15), e a própria lenda. *Diferença:* a regulação do farm vira folclore e bem público, e não um "rendimento decrescente" escondido. *Problema:* o farm concentrado num ponto (o terreno do bot), preços que despencam e um mundo que não reage. *Comportamento:* espalhar a caça, rodar entre regiões, libertar a Caipora como serviço à cidade. *Risco:* um grupo grande esgota uma região para atrapalhar os outros. Mitigação: o efeito máximo é −50%, a região descansa sozinha, a libertação zera o problema e os Planos B levam os caçadores para outro lugar.

### 7.4 Drops por hora

**Referência:** uma hora de expedição, **sozinho**, na **margem 0** (tier do equipamento igual ao tier da região), com refeição e pressão de caça abaixo de 30%. São cerca de **55 encontros por hora** e **100 abates por hora**. O tier da região define o tier do material (a Várzea T1 rende pele T1; a Mata Funda T4 rende pele T4); a quantidade é a mesma em todos os tiers.

**Drop por abate, na base** [H]:

| Família de inimigo | Pele | Carne | Matéria dura | Peçonha, resina, sementes | Essência de Bruma | Relíquia | Achado |
|---|---|---|---|---|---|---|---|
| Bicho tomado | 0,40 | 0,50 | 0,25 | 0,05 | 0,02 | — | 0,002 |
| Alma | — | — | — | — | 0,50 | 0,05 | 0,006 |
| Encantado dispersado | — | — | — | — | 3,0 | 0,3 | 0,02 |

**Ritmo e olhar de colheita por vocação** ([03-personagem](03-personagem.md), seção 7):

| Vocação | Ritmo de abate | Pele | Carne | Matéria dura | Peçonha, resina, sementes | Essência | Achados |
|---|---|---|---|---|---|---|---|
| Guardião | × 0,8 | × 1,0 | × 1,0 | **× 1,6** | × 1,0 | × 1,0 | × 1,0 |
| Caçador | × 1,1 | **× 1,6** | **× 1,4** | × 1,0 | × 1,0 | × 0,8 | × 1,0 |
| Encantador | × 1,0 (× 1,3 contra bandos) | × 0,8 | × 0,8 | × 1,0 | × 1,0 | **× 1,8** | × 1,0 |
| Erveiro | × 0,7 | × 1,0 | × 1,0 | × 0,8 | **× 1,8** | × 1,0 | × 1,0 |
| Batedor | × 1,1 | × 0,9 | × 0,9 | × 0,9 | × 0,9 | × 0,9 | **× 2,5** |

**Exemplo — uma hora de caça na Várzea:**

| | Abates | Pele | Carne | Matéria dura | Achados |
|---|---|---|---|---|---|
| Base | 100 | 40 | 50 | 25 | 0,2 |
| Caçador (40% dos abates são limpos: +50% de pele) | 110 | 0,40 × 1,6 × 110 × 1,2 ≈ **84** | **77** | 27 | 0,22 |
| Guardião | 80 | 32 | 40 | **32** | 0,16 |
| Batedor (Varredura) | 110 | 40 | 50 | 25 | **0,55** |

O Guardião tira menos por hora, mas gasta cerca de 40% menos poções (8.1). O valor líquido por hora de cada vocação tem de ficar dentro de ±10% (meta para o módulo 08).

**Regras gerais dos drops** [H]:
- **O combate não solta ouro.** [proposta para o módulo 07] O ouro entra pela venda de bens básicos ao NPC e pelas encomendas. O ouro de monstro é a torneira clássica que cresce com horas e com contas (lei 6; [F] o SimpleMMO cortou o ouro dos chefes mundiais em set/2026, numa série de drenos, segundo [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3).
- **Teto de emissão:** o que passar do teto negociável diário da conta fica preso à conta (o próprio jogador usa) ou vai para as obras como Mérito ([00-biblia](00-biblia.md), 6.6).
- **Todas as tabelas de drop são públicas** (P6 e insight 2 da [síntese](../01-pesquisa/00-sintese.md)).
- **Achados** têm grau (comum, raro, único): relíquias das cidades de outrora (para obras e coleções), **moldes** (receitas especiais para os ofícios), mapas, minérios e madeiras raros. Os únicos são presos à conta.
- A **Arrancada** multiplica os drops por 1,5 durante 10 min (10.2).

## 8. Consumo e desgaste por hora de combate

### 8.1 Consumo por combatente

**Referência:** margem 0, com refeição, sozinho.

| Consumível | Por hora de combate [H] |
|---|---|
| **Refeição** | 1 porção por combatente (o personagem e cada ajudante) |
| **Poção de cura** | ~1 na margem +1 · **~3 na margem 0** · ~8 na margem −1 (com risco de derrota). Sem refeição, × 2 |
| Ajuste por vocação | Guardião × 0,6 · Erveiro × 0,5 · Caçador × 1,0 · Encantador × 1,1 · Batedor × 1,2 |
| Com Erveiro no grupo | −30% para todos (−50% com o marco *Farmácia de campo*) |
| **Feixe de flechas** | 1 (Caçador) |
| **Óleo de lamparina** | 1 frasco (Encantador) |
| **Ervas frescas** | ~6 (Erveiro) |
| **Tocha** | 1 (Batedor, em regiões com Bruma ≥ 40) |
| Óleo de arma | Opcional: 1 frasco dura 300 golpes, uns 25 min de uso contínuo; as regras decidem quando aplicar |
| Tônico, antídoto, água de clareza | De 0 a 3, conforme a região e o inimigo |

### 8.2 Desgaste

- **Durabilidade:** 100 pontos por peça, em qualquer tier. O tier muda o custo do reparo, não a duração.

| Casa | Pontos perdidos por hora de combate (margem 0) [H] |
|---|---|
| Arma | 2,5 |
| Secundária | 2,0 (escudo do Guardião: 3,0) |
| Cabeça e corpo | 2,0 (Guardião: 3,0) |
| Pés | 1,5 (Batedor: 2,25) |

- **Modificadores:** peça um tier acima da região (margem +1): × 0,6; um tier abaixo (margem −1): × 1,5; cada derrota: −5 pontos em todas as peças; unguento: −30% na armadura.
- **Abaixo de 20 pontos**, a peça perde 15% dos números (com aviso). **A 0**, fica avariada e não dá nada até o reparo. **Nunca some por uso.**
- **Reparo** (a reconciliar com 05 e 06): consome material, devolve a peça ao máximo e reduz o máximo em 10 pontos. Depois do 5º reparo, a peça vive com máximo de 50; quando chega a 0 de novo, **se gasta e some** ([00-biblia](00-biblia.md), 6.5).
- **Vida útil de uma arma:** 100 + 90 + 80 + 70 + 60 + 50 = 450 pontos ÷ 2,5 por hora = **180 h de combate**. Para quem luta cerca de 6 h por dia (somando o offline), dá **uns 30 dias**. Armadura: uns 37 dias; a do Guardião, uns 25. Meta: **3 a 6 semanas de uso normal** (a reconciliar com 05 e 07).
- **Cerco:** 8 pontos por peça, cobrados no fechamento da inscrição (11.1). **Masmorra:** 4 pontos por peça e por corrida, cobrados no compromisso (9.2).
- O recuo padrão do plano é a 15 pontos, para o ausente não voltar com tudo avariado.

[H] **Quatro perguntas.** *Referência:* [F] perda de itens aparece em 16 dos 29 jogos com mercado entre jogadores e em 1 dos 27 sem mercado; o Shop Titans precisou da quebra de equipamento para sustentar quem fabrica ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md), lei 17). *Diferença:* aqui a perda é só por desgaste, previsível e visível, nunca por morte. *Problema:* sem destruição, o estoque cresce e o preço cai. *Comportamento:* compra recorrente de equipamento e reparo; os ofícios sempre têm freguês. *Risco:* o desgaste parecer imposto. Mitigação: a barra de durabilidade e a previsão de "horas restantes" aparecem no plano da expedição antes de sair.

## 9. Masmorras de grupo assíncronas

### 9.1 Formato

- **5 salas e um chefe.** Grupo de 3 a 5 vagas. Dificuldades: *Normal*, *Brava* (exige ter vencido a Normal) e *Lendária* (da Era).
- Cada masmorra conta uma lenda: o Casarão do Corpo-seco, o Furo da Boiúna, a Lavra da Mãe-do-ouro (seção 12).

### 9.2 Como funciona

1. **Abrir ou entrar numa mesa** no quadro de masmorras do Arraial. O quadro mostra as vagas por papel (frente, dano, suporte) e a faixa de poder recomendada.
2. **Comprometer-se.** Cada membro entrega uma **cópia congelada** do personagem: atributos, caminhos, equipamento, regras e um cinto de consumíveis, que sai do inventário. O desgaste da corrida (4 pontos por peça) é cobrado nessa hora. O personagem continua livre para a sua fila normal, porque quem entra na masmorra é a cópia.
3. **Prazo de formação:** até 12 h. Se a mesa não encher, os ajudantes de quem abriu completam as vagas; na falta deles, entram ajudantes do Arraial (NPC genéricos).
4. **Resolução:** o servidor simula sala por sala no "toque" seguinte (a cada 15 min).
5. **Encruzilhadas:** em duas salas, o grupo escolhe entre 2 ou 3 caminhos (ex.: "a ponte podre ou o desvio pelo brejo"). Cada jogador tem um voto, e os ajudantes não votam. A janela é de 4 h; sem votos, vale a escolha padrão deixada por quem abriu a mesa. **O ausente nunca trava o grupo.**
6. **Diário e saque.** Todos recebem o diário. **O saque é individual**: cada membro abre o próprio baú, e ninguém disputa o drop de ninguém.

### 9.3 Cargas, bônus de grupo e papel em falta

- **Cargas de masmorra:** 1 por dia, acumulando até 4. Entrar gasta uma.
- **Bônus de grupo:** `multiplicador do baú = 1 + 0,2 × (jogadores − 1)`. Um jogador com quatro ajudantes: × 1,0; três jogadores: × 1,4; cinco jogadores: × 1,8. Os ajudantes não contam. [F] No IdleOn, o multiplicador de drop das masmorras vai de 1 (solo) a cerca de 3,16 (10 pessoas) ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)).
- **Papel em falta:** se a mesa não tem nenhum jogador de frente ou de suporte, quem entra nesse papel ganha +25% no próprio baú.
- **Fora da faixa:** quem está muito abaixo da faixa de poder recomendada recebe metade do baú. Isso tira o lucro do "carregamento" pago, um vetor clássico de RMT ([F] o Milky Way Idle baniu centenas de contas por boosting em mai/2025, segundo [C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).

### 9.4 Recompensas

Materiais próprios da masmorra (negociáveis, com teto diário), **moldes** (receitas especiais para os ofícios, negociáveis e consumidos quando aprendidos), relíquias, entradas de bestiário e títulos. A masmorra não dá Mérito: ela é pessoal, e o Mérito é cívico.

[H] **Os moldes amarram o combate de grupo à demanda dos artesãos:** o ferreiro que quer a receita da masmorra precisa de quem a vença, e o vencedor precisa de quem saiba usá-la.

### 9.5 Quatro perguntas

[H] *Referência:* as masmorras do IdleOn, com multiplicador por tamanho do grupo ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)); as do Milky Way Idle, com chaves, recomeço na onda 1 se o grupo morre e **expulsão de quem fica 5 min sem dar "pronto"** ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)), que é justamente o que evitamos; e o saque sem disputa do GW2 ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). *Diferença:* cópia congelada, prazo de horas e Encruzilhada com escolha padrão. *Problema:* grupo síncrono exige horário marcado, contra o P12. *Comportamento:* formar grupos de amigos pelo bônus; guildas com "noite de masmorra" opcional. *Risco:* mesas que nunca enchem de madrugada (mitigação: ajudantes); abuso da cópia, entrando com o melhor equipamento e vendendo-o depois (mitigação: desgaste cobrado no compromisso); [F] saque leiloado que cria demanda por ouro, como o GDKP que a Blizzard proibiu ([00-sintese](../01-pesquisa/00-sintese.md), insight 22) (mitigação: baú individual).

## 10. Chefes e momentos ativos

### 10.1 Chefes

| Nível | Onde aparece | Como se luta |
|---|---|---|
| **Elite de região** | Encontros raros na expedição: o bicho grande, a Caipora ou o Curupira tomados | Na própria expedição, pelas regras |
| **Chefe de masmorra** | Na última sala | Pela cópia congelada do grupo (9.2) |
| **Encantado maior** | Uma região por ciclo (ex.: o Mapinguari na Mata Funda) | **Assalto do Arraial**, assíncrono, com o servidor inteiro |
| **Cabeça da maré** | A última onda do cerco | No cerco (11) |

**O assalto do Arraial** (o chefe mundial do jogo) [H]:
- **Anúncio** com 48 h de antecedência e **janela de investidas de 48 h**, para caber em qualquer fuso e em qualquer rotina.
- **Inscrição** a qualquer momento da janela. Cada inscrito tem **2 investidas**: lutas simuladas de 3 min da cópia congelada do personagem, com os ajudantes, contra o encantado.
- **Vida e Bruma do encantado são compartilhadas pelo servidor** e escalam com a população ativa da semana.
- **Desfechos:**
  - *Libertado* (a Bruma zera antes): a Bruma da região recua 15 pontos, abre-se uma área nova da região, cada participante recebe a dádiva desse encantado (na primeira vez) e uma carta de contratação de ajudante.
  - *Dispersado* (a Vida zera antes): a região fica calma por uma semana (Bruma da região −5) e os participantes recebem essência e restos raros.
  - *Fim da janela sem desfecho:* o encantado recua ao fundo da mata. **A Vida volta, a Bruma não**: o dano de clareza acumulado fica para o próximo ciclo, e a libertação pode ser construída ao longo de semanas.
- **Recompensa por patamar**, sem ranking de dano: *bronze* (1 investida ou mais), *prata* (contribuição igual ou acima da mediana) e *ouro* (duas vezes a mediana, teto). Pagam 75%, 85% e 100% da recompensa. A contribuição soma o dano na Vida, **duas vezes** o dano na Bruma e a cura. [F] É o modelo das medalhas do Guild Wars 2, que pagam 75%, 85% ou 100% e metade quando o evento falha ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3).
- **Quase tudo preso à conta.** A parte negociável tem orçamento por assalto ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3, "chefe como torneira").

**Mecânicas que vêm da lenda** [H] (as fontes estão na seção 12):

| Encantado maior | Mecânica | Como as regras respondem |
|---|---|---|
| **Mapinguari** (Mata Funda, T4) | *Ponto fraco no umbigo:* golpes comuns causam 20%; críticos acertam o ponto fraco e causam o dano cheio. *Fedor:* aura de náusea. *Grito:* medo em todos a cada 30 s. | Builds de crítico (Batedor, Caçador *Atirador*); "QUANDO o chefe preparar o Grito → Pé no chão ou Água de clareza"; Chá de raiz contra a náusea |
| **Boitatá** (Campos, T3) | *Olhar de brasa:* anunciado 2 s antes. Quem agir durante o olhar fica cego e queima; quem esperar não sofre nada. Resiste a fogo; fraco contra lama. | "QUANDO o chefe preparar o Olhar de brasa → Esperar", fiel à lenda de que quem encontra o boitatá deve ficar imóvel e de olhos fechados |
| **Boiúna** (Rios, T3 e T5) | *Banzeiro:* a cada 20 s, uma onda arrasta quem não estiver firme, e o arrastado perde 2 ações. Imune a enleio. | Guardião com Pé no chão, dádiva *Escama da Boiúna*, regras que guardam ânimo para depois do banzeiro |
| **Mãe-do-ouro** (Serra das Lavras, T4) | *Desabamento:* a cada 25 s, cai pedra num alvo, a menos que haja Muralha ativa. *Clarão de ouro:* cega quem estiver de frente. | Guardião com Muralha no tempo certo; Batedor desarma o desabamento com Olho vivo |

### 10.2 Momentos ativos

**Orçamento do ativo** [H]: somadas, as janelas ativas dão **no máximo +25%** sobre o valor diário de combate do ausente, e nenhuma é necessária para nada. A tela do personagem mostra as duas taxas: a **ausente**, que é 100% (o offline rende igual ao online, como no Melvor, segundo [B01](../01-pesquisa/fichas/B01-melvor-idle.md)), e a **ativa**, de até 125%.

| Janela | Como funciona | Ganho | Para o ausente |
|---|---|---|---|
| **Arrancada** | Ganha-se uma carga a cada 4 h, inclusive offline, até 6. Gastar uma dá 10 min de combate atento: o jogador escolhe o foco (pele, essência, achados ou XP), assiste e pode comandar. | Drops ou XP do foco × 1,5 por 10 min | As cargas esperam. O ausente só adia, nunca perde |
| **Encruzilhada** na expedição | Cerca de uma a cada 45 min de expedição: um acontecimento com 2 ou 3 escolhas ("rastro de bicho grande", "fonte de água limpa", "uma visagem que chora"). Janela de 2 h; notificação opcional. | A escolha certa no contexto rende +5% a +10% no trecho seguinte | Vale a escolha padrão do plano: *segura* ou *ousada* |
| **Encruzilhada** na masmorra | Voto do grupo, janela de 4 h (9.2) | Rota melhor e salas bônus | Vale a escolha padrão da mesa |
| **Investida ao vivo** | No assalto a um encantado maior, gastar uma carga de Arrancada para lutar ao vivo | +25% de contribuição naquela investida | A investida automática vale 100% |
| **Clarões do cerco** | Entre as ondas, os inscritos que estão online decidem o uso do Farol e do Arsenal (11.4) | Ondas mais bem defendidas e +10% de Mérito para quem votou | Vale o plano de defesa da cidade |

**A conta do teto:** 6 cargas × 10 min × +50% equivalem a uns 30 min de combate a mais por dia. Para quem luta cerca de 8 h por dia, isso é +6%. Somadas as Encruzilhadas, um jogador muito presente chega a uns +12% a +15%. O teto de +25% fica como folga para eventos.

**O que é só do ausente:** a **paciência da mata**. Expedições que rodam 6 h ou mais sem mudança no plano passam a ter chance de encontros raros "da madrugada", com drops de coleção que não saem para quem mexe na expedição o tempo todo. [F] O IdleOn reserva drops raros de skill para personagens ausentes, para que nenhum lado seja a versão pior do outro ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)).

**Decisão, nunca reflexo.** Nenhuma janela premia tempo de reação; todas são escolhas validadas no servidor, com prazo de minutos ou horas. Um bot ganha, no máximo, o mesmo que um humano, porque o ganho é limitado pelas cargas.

[H] **Quatro perguntas.** *Referência:* os golden cookies do Cookie Clicker e as cargas que se acumulam com o jogador fora ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 11). *Diferença:* tudo é decisão e tudo se acumula. *Problema:* um idle sem motivo para abrir; e, no outro extremo, [F] a janela fixa do Tap Titans 2, sem tolerância, em que o clã cobra quem falta ([B06](../01-pesquisa/fichas/B06-tap-titans-2.md)), e os minigames obrigatórios do Idle Slayer, citados em 4 de 10 reviews negativas recentes ([00-sintese](../01-pesquisa/00-sintese.md), insight 15). *Comportamento:* 2 a 6 sessões curtas por dia ([00-biblia](00-biblia.md), 6.1). *Risco:* a janela virar obrigação. Mitigação: o teto, as cargas acumuláveis e a regra de que nada essencial é exclusivo do ativo.

## 11. Cercos

[H] O cerco é o grande momento de combate do jogo e o maior consumidor coletivo da economia. Toda semana, a Bruma sobe em maré e os assombrados atacam o Arraial. A defesa é assíncrona: quem se inscreve até 24 h antes luta com a cópia congelada do personagem, esteja online ou não.

### 11.1 A semana do cerco

| Quando | O que acontece |
|---|---|
| **D−7** (logo depois do cerco anterior) | Maré baixa: começa o reparo da Integridade e abre a inscrição. O Presságio mostra só a intensidade da próxima maré. |
| **D−6 a D−1** | Os vigias acumulam pontos e revelam o Presságio por etapas (11.2). A cidade produz provisões e deposita no **Arsenal**. A Câmara publica Encomendas de cerco (módulo 09). |
| **T−24 h** | **Fecha a inscrição.** O servidor congela a cópia de cada inscrito, cobra o desgaste do cerco (8 pontos por peça) e reserva o cinto. |
| **T** (horário escolhido pela Câmara dentro de uma faixa; padrão: sábado, 20 h, horário de Brasília) | Resolução em **5 ondas**, uma a cada ~20 min, durante 2 h. Clarões entre as ondas. |
| **T+2 h** | Resultado, Mérito, baús, Fôlego do Arraial e abertura do reparo. |

[F] A inscrição prévia vem da guerra de guildas do Shakes & Fidget, com 10 h de preparação ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)), e do chefe mundial do IdleMMO, com fila até 2 h antes ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). [H] **A diferença:** no Shakes & Fidget, quem não se inscreve defende com 50% da vida e o inativo com 10%. Aqui, **quem não se inscreve não luta e não pesa**: a força do cerco não é calculada pela lista de quem faltou (11.3).

### 11.2 O Presságio

- **Pontos de vigia:** cada hora de expedição de Vigia rende 10 pontos (o Batedor, 20; com o marco *Vigia de longe*, 30).
- **Meta de vigia:** 3 pontos por jogador ativo na semana. Exemplo: com 3.000 ativos, 9.000 pontos, ou umas 450 horas de Batedor somadas na cidade.

| Etapa | O que se revela |
|---|---|
| 25% da meta | A família predominante (bichos, almas ou encantados) |
| 50% | As fraquezas (fogo, clareza, prata, lama) |
| 75% | A ordem e o tamanho das ondas |
| 100% | O cabeça da maré e a sua habilidade |

- **Provisão certa vale mais:** a que acerta uma fraqueza revelada vale × 1,5; a genérica, × 1,0; a errada (óleo de fogo contra o Boitatá, que resiste a fogo), × 0,5.

[H] Quanto antes a cidade enxerga, mais dias os ofícios têm para produzir o que importa. Os Batedores viram os olhos da cidade, e a informação vira coordenação entre quem luta e quem produz.

### 11.3 Como se calcula o cerco

**Postos** [H]:

| Posto | Vocação afim (× 1,3) | Capacidade | Função |
|---|---|---|---|
| **Muralha** | Guardião | 35% dos inscritos | Segura as ondas |
| **Torres** | Caçador, Encantador | 35% | Dano à distância |
| **Enfermaria** | Erveiro | 15% | Reduz a fadiga das ondas |
| **Vigia e sabotagem** | Batedor | 15% | Tira até 10% da força da 5ª onda |

Acima da capacidade, cada defensor a mais conta 50%. Uma vocação fora do posto afim conta × 1,0.

**Poder de cerco (PC) de um defensor.** No fechamento da inscrição, o servidor faz a cópia congelada lutar 60 s contra o **assombrado-padrão da Era** (o mesmo para todos) e mede:

`PC = dano causado + cura feita + 0,5 × dano absorvido no lugar de aliados`

Exemplo: o Caçador nível 30 da seção 4.3 tem PC perto de 900; um Guardião do mesmo nível, uns 950 (500 de dano e 900 absorvidos); um Erveiro, uns 1.000 (300 de dano e 700 de cura). [H] Medir pela simulação, e não por uma soma de atributos, deixa cada vocação contribuir do seu jeito.

**Defesa de cada onda:**

`D(onda) = Σ (PC × afinidade do posto × fator de capacidade) × fadiga + G + P(onda)`

- **Fadiga** na onda *i*: `1 − 0,08 × (i − 1) × (1 − cobertura)`, sendo a cobertura da Enfermaria `mín(1; PC da Enfermaria / (0,15 × PC total))`. Sem Erveiros, os defensores chegam à 5ª onda com 68% da força.
- **G — a Guarda do Arraial.** Os guardas NPC da cidade, um para cada 10 jogadores ativos, com PC de 300 cada: `G = guardas × 300 × (1 + 0,1 × nível da Muralha) × fração equipada × Integridade / 100`. A **fração equipada** é a parte dos guardas que tem um kit (arma e armadura) no Arsenal. **A obra da Muralha e os kits da Guarda são o que o ausente deixou pronto para a cidade.**
- **P — provisões** do Arsenal gastas na onda. Cada unidade vale, por tier, 20 / 30 / 45 / 65 / 90 / 120 (T1 a T6), vezes o acerto com o Presságio (1,5 / 1,0 / 0,5). O plano de defesa distribui as provisões pelas ondas (padrão: proporcional à força de cada uma).

**Força de cada onda:** `F(onda) = F_ref × m`, com m = 0,6 · 0,8 · 1,0 · 1,2 · 1,6 (da 1ª à 5ª onda).

**F_ref, a força de referência, é elástica:**
- No primeiro cerco de um Arraial: `F_ref = 400 × jogadores ativos na semana`.
- Depois, muda com o resultado: Vitória plena × 1,10 · Vitória × 1,05 · Resistência × 0,97 · Queda × 0,85.
- Piso de 250 e teto de 700 × jogadores ativos. Cada Era nova multiplica por 1,2 e traz uma ameaça nova.
- **Rigor**, escolhido pela Câmara dentro de faixas (módulo 09): *Brando* (× 0,85 na força, × 0,8 nas recompensas) ou *Bravo* (× 1,2 na força, × 1,3 nas recompensas).

**Resultado de cada onda:** `r = D / F`. Se r ≥ 1, a onda é repelida. Se r < 1, abre-se uma brecha, e a **Integridade** da Muralha perde `40 × (1 − r)` pontos.

**Resultado do cerco**, pela Integridade perdida nesta semana:

| Resultado | Condição |
|---|---|
| **Vitória plena** | As 5 ondas repelidas |
| **Vitória** | Perda de até 15 pontos |
| **Resistência** | Perda de 15 a 40 pontos |
| **Queda** | Perda de mais de 40 pontos |

**Exemplo calculado.** Arraial com 3.000 jogadores ativos na semana; F_ref = 400 × 3.000 = **1.200.000**.
- **Inscritos:** 900 (30%), distribuídos nos postos dentro da capacidade (315 na Muralha, 315 nas Torres, 135 na Enfermaria, 135 na Vigia). PC médio de 1.000; 80% estão no posto afim, o que dá afinidade média de 1,24. **Σ = 900 × 1.000 × 1,24 = 1.116.000.**
- **Enfermaria:** 135 × 1.000 × 1,24 = 167.400, que é exatamente 15% do total: cobertura 1 e nenhuma fadiga.
- **Guarda:** 300 guardas × 300 × 1,3 (Muralha nível 3) × 0,9 (90% equipados) × 1,0 = **105.300**.
- **Arsenal:** 24.000 provisões T1 e T2 (valor médio 25); com o Presságio em 50%, 60% delas acertam a fraqueza. Valor efetivo médio: 25 × (0,6 × 1,5 + 0,4 × 1,0) = 32,5; total de **780.000**, distribuído pelas ondas.
- **Vigia:** com cobertura total, a 5ª onda perde 10%.

| Onda | m | F | P da onda | D | r | Perda de Integridade |
|---|---|---|---|---|---|---|
| 1 | 0,6 | 720.000 | 90.000 | 1.311.300 | 1,82 | 0 |
| 2 | 0,8 | 960.000 | 120.000 | 1.341.300 | 1,40 | 0 |
| 3 | 1,0 | 1.200.000 | 150.000 | 1.371.300 | 1,14 | 0 |
| 4 | 1,2 | 1.440.000 | 180.000 | 1.401.300 | 0,97 | 1,1 |
| 5 | 1,6 | 1.728.000 (−10%) | 240.000 | 1.461.300 | 0,85 | 6,2 |

**Perda total: 7,3 pontos → Vitória.** Na semana seguinte, F_ref sobe 5%.
**A mesma cidade sem Erveiros:** a fadiga deixa os defensores com 84%, 76% e 68% da força nas ondas 3, 4 e 5. A 3ª onda passa raspando (r = 0,99), a 4ª abre brecha de 8,5 pontos e a 5ª, de 14,4. A perda total vai a uns 23 pontos: **Resistência**. É o argumento numérico para a cidade ter suporte, sem obrigar ninguém.

### 11.4 Clarões, plano de defesa e tetos

- **Clarões.** Entre uma onda e outra há 10 min em que os inscritos online votam:
  - **acender o Farol** (uma vez por cerco): +20% na defesa de uma onda;
  - **abrir o Arsenal:** antecipar até 30% das provisões restantes para a onda seguinte.
- **Plano de defesa.** Sem ninguém online, vale o plano escrito pela Câmara: até 5 regras no mesmo formato das regras de combate. Ex.: "QUANDO a onda tiver maioria de encantados → acender o Farol". [H] É o sistema de regras aplicado à cidade, e a forma de o ausente (e o vereador) decidir antes.
- **Tetos.** Cada marco de cerco dos caminhos ([03-personagem](03-personagem.md), seção 6.2) tem teto de 10%. A soma das reduções de força numa onda não passa de 20%. *Pedra do vau* e *Enfermaria* estão sujeitos ao fator de capacidade. Sem teto, a cidade inteira escolheria o mesmo marco e o cerco viraria uma conta resolvida.

### 11.5 Recompensas e consequências

**Mérito do defensor:**

`Mérito = 100 × (0,6 + 0,4 × mín(1,5; PC / PC mediano)) × fator do resultado`

O fator do resultado é 1,3 na Vitória plena, 1,15 na Vitória, 1,0 na Resistência e 0,8 na Queda. **Perder ainda dá Mérito: ninguém é punido por defender.**

| Defensor, numa Vitória | Conta | Mérito |
|---|---|---|
| Mediano | 100 × (0,6 + 0,4 × 1,0) × 1,15 | 115 |
| Muito forte (no teto de 1,5) | 100 × (0,6 + 0,4 × 1,5) × 1,15 | 138 |
| Novato (25% do PC mediano) | 100 × (0,6 + 0,4 × 0,25) × 1,15 | 80,5 |

[H] O mais forte ganha 1,7 vez o que ganha o novato, não 10 vezes. O piso de 60% premia aparecer; o teto de 1,5 impede que o Mérito vire placar de baleia.

**Mérito do fornecedor:**
- Provisões, kits da Guarda e materiais de reparo entregues ao Arsenal valem Mérito pelo **preço de referência do sistema** (a cesta do IPA), não pelo pico do mercado.
- **O que o próprio jogador produziu conta 100%; o que ele comprou conta 50%.** O livro-razão sabe quem produziu cada lote ([00-biblia](00-biblia.md), P9).
- A partir de 300 de Mérito de fornecimento na semana, a taxa cai à metade.
- [H] O desconto para o item comprado estreita o caminho Alvará → ouro → itens → Mérito, sem fechá-lo de todo (a reconciliar com 07 e 09).

**Para todos os inscritos:** um baú do cerco, preso à conta (materiais, cosméticos e títulos), melhor quanto melhor o resultado.

**Para a cidade inteira, inclusive os ausentes:** o **Fôlego do Arraial**. Vitória plena: +10% de XP de vocação e de ofício por 7 dias; Vitória: +5%. Nenhum Fôlego mexe em drenos (desgaste, consumo, taxas). [F] O Milky Way Idle converte as taxas do mercado em bônus para o servidor inteiro, e o dreno passa a ser lido como contribuição ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).

**Se a cidade perde (Queda):**
- **A Integridade cai.** Isso só afeta a Guarda no cerco seguinte. Abre-se uma Encomenda de reparo com Mérito × 1,5: a reconstrução vira conteúdo.
- **A Bruma avança:** uma região de fora ganha +15 de Bruma da região por 7 dias. Fica mais perigosa, mas também rende mais essência e mais encantados para libertar.
- **A maré seguinte vem mais fraca** (F_ref × 0,85). A Bruma também se cansa, e a cidade não entra numa espiral de derrotas.
- **Nunca acontece:** perda de item pessoal, de nível, de Mérito, de obra concluída ou de bônus de obra. **O ausente não perde nada**; só deixa de ganhar o Mérito e o baú daquele cerco.

### 11.6 O que o cerco consome da cidade

Por **1.000 jogadores ativos**, numa semana normal [H] (a reconciliar com 06, 07 e 09):

| Consumo | Quantidade | Ofícios que abastecem |
|---|---|---|
| Provisões no Arsenal (poções, óleos, flechas, rancho do cerco) | ~8.000 unidades | Alquimia, Carpintaria, Ferraria, Culinária |
| Kits da Guarda (arma e armadura) | 100 guardas; ~8 kits gastos por semana (8% de desgaste por cerco), mais o que faltar para equipar todos | Ferraria, Alfaiataria, Curtume, Carpintaria |
| Reparo da Integridade (~10 pontos por semana) | ~1.000 tábuas, 500 lingotes e 200 blocos de pedra | Carpintaria, Fundição, Mineração |
| Desgaste dos defensores (~300 inscritos × 6 peças × 8 pontos) | ~32 peças-equivalentes gastas por semana | Ferraria, Alfaiataria, Carpintaria |
| Consumíveis dos cintos dos inscritos | Cerca de metade do que foi reservado | Alquimia, Culinária |

### 11.7 Quatro perguntas

[H] *Referência:* a guerra com inscrição do Shakes & Fidget ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)), os dois ataques do Clash of Clans, as janelas anunciadas do EVE ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 1) e as metas comunitárias, a mecânica de outros gêneros com melhor relação entre benefício e risco ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), ranking). *Diferença:* o cerco **consome o que a cidade produziu** (Arsenal, kits da Guarda, Muralha), os Batedores revelam o que vem, a dificuldade se ajusta ao resultado, e quem falta não pesa. *Problema:* um momento coletivo sem plantão e um dreno coletivo que pareça contribuição, e não imposto. *Comportamento:* uma semana com ritmo (vigiar, produzir, inscrever, assistir se quiser); artesãos que nunca lutam também defendem a cidade pelo Arsenal. *Risco:* ver a seção 15.

## 12. Bestiário inicial

### 12.1 Regras de respeito

1. **Os encantados não são monstros.** Nunca morrem: dispersam-se ou libertam-se. Os verbos do jogo são *libertar*, *sarar*, *dispersar* e *dar descanso*. Nunca *matar*, *exorcizar* ou *caçar* um encantado.
2. **A Bruma corrompe de fora.** A corrupção nunca é culpa nem natureza do encantado, e a Bruma não se associa a nenhum povo.
3. **O bestiário separa "A lenda" de "Em Pindorama".** A primeira parte conta o que a tradição registra, com a fonte; a segunda, a nossa reinterpretação. O jogo não deve ensinar invenção como se fosse tradição.
4. **Ficam fora** as entidades cultuadas em religiões vivas e as figuras com carga racial, de escravidão ou de misoginia, até uma revisão com consultoria (12.5).
5. **Sem sexualização.** A Mãe-d'água do jogo é a avó-d'água dos pescadores, não a sereia sensual do século XIX.
6. **Consultoria** com folcloristas e com representantes de povos indígenas e de comunidades tradicionais antes de fechar arte e textos ([00-biblia](00-biblia.md), seção 3; módulo 14).

[F] As fontes abaixo são verbetes da Wikipedia que remetem a obras de referência (sobretudo o *Dicionário do folclore brasileiro* e a *Geografia dos mitos brasileiros*, de Luís da Câmara Cascudo). [H] Antes do texto final do bestiário, cada lenda deve ser conferida na obra original, e a consultoria deve validar a reinterpretação.

### 12.2 Encantados corrompidos (podem ser libertados)

**Curupira** — Capoeira do Vau e Mata Funda · elite de T1 a T4
- *A lenda:* entidade tupi, protetora das matas e dos animais, de cabelo cor de fogo e pés virados para trás, que deixam rastros falsos. Engana com assobios e imitações de voz humana. Faz pactos com caçadores em troca de comida sem pimenta nem alho e de sigilo. A primeira menção escrita é de Anchieta, em 30/5/1560 ([Wikipedia](https://pt.wikipedia.org/wiki/Curupira), com base em Cascudo, Barbosa Rodrigues, Couto de Magalhães e Navarro).
- *Em Pindorama:* guardião das trilhas. Tomado pela Bruma, confunde quem entra na mata.
- *Em combate:* enquanto ele estiver tomado, a região inteira dá desnorteio (+50% no tempo de procura); 20% dos golpes contra ele erram, enganados pelos rastros falsos. Fraco contra clareza.
- *Libertação:* dádiva *Fio de cabelo do Curupira*. Fiel ao pacto da lenda: deixar um **prato sem pimenta nem alho** (Culinária) antes da expedição tira o desnorteio da região naquela expedição.

**Caipora** — todas as regiões de caça · elite que surge com pressão de caça ≥ 80%
- *A lenda:* "habitante do mato" (do tupi *ka'a* + *pora*), protetora dos animais. Monta um porco-do-mato (queixada ou cateto), castiga sobretudo quem abate além do necessário, desorienta o caçador imitando sons da mata e aceita presentes, como fumo de corda deixado numa árvore ([Wikipedia](https://pt.wikipedia.org/wiki/Caipora), com base em Navarro e Cascudo).
- *Em Pindorama:* a guardiã da Lei da Caipora (7.3).
- *Em combate:* chega montada numa queixada tomada. A cada 20 s, *afugenta*: os bichos do encontro fogem sem deixar drop. Fraca contra clareza; resiste a peçonha.
- *Libertação:* a pressão de caça da região cai para 20%, para todo o servidor. Dádiva: quem a libertou gera 20% menos pressão.

**Boitatá** — Campos · encantado maior, T3
- *A lenda:* cobra de fogo, ligada ao fogo-fátuo, que guarda campos e matas e queima quem lhes ateia fogo. Na versão do Sul registrada por Simões Lopes Neto, a boiguaçu, faminta depois de uma enchente e de uma noite sem fim, comeu os olhos dos animais e ficou luminosa; quem a encontra deve ficar imóvel, sem respirar e de olhos fechados. Anchieta registrou seres de fogo em 1560 ([Wikipedia](https://pt.wikipedia.org/wiki/Boitat%C3%A1)).
- *Em Pindorama:* a luz que guardava os campos. Tomada pela Bruma, ela própria queima o capim.
- *Em combate:* o *Olhar de brasa* (10.1). Resiste a fogo, é fraca contra lama, e a clareza vale × 1,2 contra ela.
- *Libertação:* a luz do Boitatá volta a guardar os campos: a Bruma dos Campos cai 15 pontos e uma área nova se abre.

**Mãe-d'água (a Uiara)** — Várzea e rios · elite de T1 a T3
- *A lenda:* a Uiara (do tupi) é uma protetora dos peixes e das águas, anterior à Iara. Segundo Cascudo, a Iara-sereia é a mãe-d'água "dos brancos", vinda das sereias europeias e popularizada no século XIX pela literatura (Gonçalves Dias, 1851; José de Alencar, 1871). No rio São Francisco, a mãe-d'água é uma "avó-d'água" que rege a sorte dos pescadores; no Amazonas, é a cobra-d'água, a Boiúna ([Wikipedia](https://pt.wikipedia.org/wiki/Iara)).
- *Em Pindorama:* a avó-d'água que rege a sorte da pesca. Tomada, o canto dela faz os barcos se perderem.
- *Em combate:* o *canto* deixa encantado (3 s) quem tem pouca Firmeza; a *correnteza* empurra. Fraca contra clareza.
- *Libertação:* dádiva e "a sorte volta ao rio" (um pequeno bônus de Pesca na região por 3 dias, a reconciliar com 06). **A arte a mostra idosa, nunca sexualizada.**

**Boiúna (a Cobra Grande)** — Rios · encantado maior, T3 e T5
- *A lenda:* serpente enorme e escura dos rios amazônicos, também chamada mãe-do-rio. Vira embarcações, imita barcos e assume forma de mulher. Em Belém, diz-se que dorme sob a cidade ([Wikipedia](https://pt.wikipedia.org/wiki/Boiuna); a página tem problemas de verificabilidade, então é preciso conferir em Cascudo).
- *Em Pindorama:* a dona do rio grande.
- *Em combate:* o *Banzeiro* (10.1); imune a enleio.
- *Libertação:* o rio volta a ser navegável e abre uma área nova (a reconciliar com 06).

**Mapinguari** — Mata Funda · encantado maior, T4
- *A lenda:* criatura da Amazônia, peluda e fedorenta, de pés virados, unhas em gancho e boca que vai do nariz ao estômago. Os pelos o deixam quase à prova de bala, exceto perto do umbigo. Cascudo achou a lenda relativamente recente (aparece nos relatos de seringueiros, não nos cronistas coloniais) e a viu como composta de figuras mais antigas, entre elas o Curupira. Houve até a hipótese de uma preguiça-gigante sobrevivente, defendida por David Oren ([Wikipedia em inglês](https://en.wikipedia.org/wiki/Mapinguari), citando Cascudo, *Dicionário do folclore brasileiro*, 1962, pp. 456–457).
- *Em Pindorama:* o velho da Mata Funda. Tomado, grita e derruba árvores.
- *Em combate:* ponto fraco no umbigo, fedor e grito (10.1).
- *Libertação:* a Bruma da Mata Funda cai 15 pontos e uma área nova se abre.

**Mãe-do-ouro** — Serra das Lavras · encantado maior, T4
- *A lenda:* uma bola de fogo, ou uma mulher, que indica onde há ouro e onde ele não deve ser explorado; ligada ao ciclo do ouro dos séculos XVII e XVIII ([Wikipedia em inglês](https://en.wikipedia.org/wiki/M%C3%A3e-do-Ouro) e [Toda Matéria](https://www.todamateria.com.br/mae-de-ouro/), lidas via resumo de busca). Numa versão difundida, ela faz desabar a mina de um senhor cruel.
- *Em Pindorama:* a guardiã das lavras. Tomada, faz desabar as galerias.
- *Em combate:* *Desabamento* e *Clarão de ouro* (10.1).
- *Libertação:* dádiva e área nova. [H] **Proposta para o módulo 06:** a Mãe-do-ouro pode regular a Mineração como a Caipora regula a caça.
- *Cuidado:* a versão do senhor cruel vem da história da escravidão. O jogo usa só a guardiã das minas e não transforma a escravidão em enredo.

### 12.3 Almas e assombrações (dar descanso)

**Corpo-seco e o Bradador** — Sudeste · chefe da masmorra *Casarão do Corpo-seco*
- *A lenda:* o homem que espalhou males e maltratou a própria mãe; morto, a terra o repeliu, e nem Deus nem o diabo o aceitaram (Basílio de Magalhães, citado por Cascudo). O corpo ressequido vaga à noite. Quando o espírito deixa o corpo, recebe o nome de Bradador no Paraná, em Santa Catarina e em parte do interior paulista ([Wikipedia](https://pt.wikipedia.org/wiki/Corpo-seco)).
- *Em combate:* duas fases. O Corpo-seco tem DEF alta e é fraco contra fogo. Quando ele cai, o Bradador se solta e grita: medo em área.
- *Desfecho:* dar descanso. Rende relíquias das cidades de outrora.

**Pisadeira** — pousos das expedições longas · encontro raro "da madrugada" (10.2)
- *A lenda:* mulher muito magra, de dedos longos e unhas grandes, que vive nos telhados e, de madrugada, pisa no peito de quem dormiu de barriga cheia; o verbete a associa à paralisia do sono. É mais conhecida em São Paulo e em parte de Minas Gerais ([Wikipedia](https://pt.wikipedia.org/wiki/Pisadeira_(folclore)), citando uma revisão na *Frontiers in Psychology*, 2016).
- *Em combate:* ataca no intervalo entre as lutas, quando o grupo está regenerando: *peso no peito* corta a regeneração pela metade por 1 min. Fiel à lenda, prefere quem está com refeição ativa. O Chá de raiz e a Firmeza a afastam.
- *Desfecho:* dar descanso. Rende itens de coleção. A arte não deve tratá-la como "bruxa".

**Lobisomem** — Sertão e vilas · elite noturna
- *A lenda (versão brasileira):* o sétimo filho de uma sequência do mesmo sexo (ou o oitavo, depois de sete irmãs); em algumas regiões, a transformação acontece à meia-noite de sexta-feira, numa encruzilhada, e ele volta a ser homem antes do amanhecer. Prata e fogo aparecem como formas de detê-lo ([Wikipedia](https://pt.wikipedia.org/wiki/Lobisomem), citando Simões Lopes Neto, 1913). A origem é europeia.
- *Em Pindorama:* uma pessoa tomada pela Bruma.
- *Em combate:* rápido, sangra o alvo, fraco contra prata (óleo de prata) e fogo.
- *Desfecho:* quando a Vida zera, ele volta à forma humana e foge. Ninguém morre.

**Visagens** — regiões com Bruma alta e cercos · inimigo comum
- *A palavra:* visagem é termo corrente no Pará para aparição. Em Belém, o Cortejo Visagento conta "histórias das visagens, assombrações e lendas da região" ([Portal Amazônia](https://portalamazonia.com/cultura/cortejo-visagento-se-torna-tradicao-de-dia-das-bruxas-em-homenagem-ao-folclore-amazonico/)).
- *Em Pindorama:* formas sem nome que a Bruma faz das lembranças das cidades engolidas.
- *Em combate:* em bandos, fracas contra clareza.
- *Desfecho:* dar descanso. Rendem essência e relíquias.

### 12.4 Bichos tomados pela Bruma (caça)

| Bicho | Regiões | Rende | Comportamento [H] |
|---|---|---|---|
| Queixada tomada | Capoeira do Vau, Mata Funda | Pele, carne | Em bando (2 a 4), com investida |
| Veado tomado | Campos | Pele, carne, chifre (matéria dura) | Foge: se não cair em 15 s, o encontro acaba (Tiro na perna resolve) |
| Jacaré tomado | Várzea, rios | Pele (couro), carne, dentes | DEF alta, lento, dá o bote |
| Jararaca tomada | Capoeira, Campos | Peçonha (Alquimia) | Pequena, peçonhenta; o Erveiro tira mais |
| Tatu tomado | Campos, Serra | Casco (matéria dura), carne | DEF muito alta; perfuração × 1,5 |

[H] **Espécies emblemáticas ficam fora da caça**, mesmo tomadas pela Bruma: onça, lobo-guará, boto e araras. Além do respeito à fauna, isso evita que o jogo pareça glamourizar a caça de animais silvestres, proibida no Brasil ([Lei 5.197/1967](https://www.planalto.gov.br/ccivil_03/leis/l5197.htm)).

### 12.5 O que fica fora do bestiário de inimigos, e por quê

| Figura | Motivo [H, salvo indicação] | Caminho |
|---|---|---|
| **Saci** | Menino negro de uma perna só: risco alto de caricatura racial, que a bíblia manda evitar | Candidato a aliado ou NPC, depois da consultoria |
| **Mula-sem-cabeça** | A lenda costuma ser contada como castigo de uma mulher que se envolveu com um padre [NV: conhecimento prévio, não conferido nesta fase]: moral de culpa feminina | Fora |
| **Boto** | Lenda de sedução de moças em festas, com temas de consentimento; e o boto é um animal real [NV] | Fora como inimigo |
| **Iara-sereia** | Construção literária do século XIX (12.2) | Substituída pela Mãe-d'água |
| **Comadre Fulozinha** | [F] Cultuada na Jurema, na Paraíba, como entidade de caráter ambíguo ([Wikipedia](https://pt.wikipedia.org/wiki/Comadre_Fulozinha)): religião viva | Fora |
| **Negrinho do Pastoreio** | Lenda de uma criança escravizada e martirizada [NV] | Fora |
| **Anhangá, Jurupari, Tupã** | Entidades de cosmologias indígenas, várias demonizadas pelos jesuítas; usá-las exigiria consulta aos povos | Fora |
| **Orixás, voduns, caboclos e encantados da Mina, da Umbanda, da Jurema e da pajelança** | Religiões vivas | Fora, sempre |
| **Ipupiara** | Registro de cronistas coloniais (Gândavo, 1564, em São Vicente), com uma narrativa de captura por um capitão ([artigo na revista Estação Científica, Unifap](https://periodicos.unifap.br/estacaocientifica/article/download/648/463/2049), lido via resumo de busca) | Candidata a criatura do litoral, depois de revisão |
| **Matinta Perera** | Associação a acusações de bruxaria contra mulheres idosas [NV] | Revisão antes de usar |

## 13. Interfaces com outros módulos

| Para | O quê | Valor [H] |
|---|---|---|
| **06, 07, 08** | **Comida por hora de combate** | 1 refeição por combatente (o personagem e cada ajudante) |
| | **Poções por hora** | ~3 na margem 0 (1 na +1; 8 na −1); × 2 sem refeição; × 0,7 com Erveiro no grupo; por vocação, de × 0,5 (Erveiro) a × 1,2 (Batedor) |
| | **Consumíveis vocacionais por hora** | Flechas: 1 feixe · óleo de lamparina: 1 frasco · ervas frescas: ~6 · tochas: 1 (Bruma ≥ 40) |
| | Outros consumíveis | Óleos de arma, tônicos, antídotos, água de clareza: de 0 a 3 por hora, conforme as regras e a região |
| **05, 07, 08** | **Desgaste por hora** (de 100 pontos) | Arma 2,5 · armadura e secundária 2,0 (Guardião 3,0) · pés 1,5 (Batedor 2,25) · derrota −5 · margem +1 × 0,6, margem −1 × 1,5 |
| | Ciclo de vida | Reparo tira 10 pontos do máximo; 5 reparos; 450 pontos no total ≈ 180 h de combate para uma arma ≈ 30 dias a 6 h por dia |
| | Cerco e masmorra | 8 pontos por peça no cerco; 4 por corrida de masmorra |
| **06, 07, 08** | **Drops por hora** | ~100 abates por hora, sozinho, na margem 0. Por abate de bicho: pele 0,40 · carne 0,50 · matéria dura 0,25 · peçonha, resina e sementes 0,05 · essência 0,02 · achado 0,002. Por alma: essência 0,5 · relíquia 0,05 · achado 0,006. Multiplicadores por vocação na seção 7.4. Pressão de caça tira até 50%. **Ouro: zero** |
| **07, 09** | **O que o cerco consome** (por 1.000 ativos, por semana) | ~8.000 provisões · ~8 kits da Guarda (mais os que faltarem) · ~1.000 tábuas, 500 lingotes e 200 blocos de pedra · ~32 peças-equivalentes de desgaste dos defensores · metade dos cintos reservados |
| **07, 09** | **Mérito do cerco** | 80 a 140 por defensor; fornecedor pelo preço de referência, 100% para produção própria e 50% para itens comprados, taxa pela metade acima de 300 por semana |
| **02** | XP | A curva de XP de vocação por hora de combate é do módulo 02; este módulo assume que a XP por hora cai com a margem negativa e com o ausente igual ao ativo |
| **09** | Câmara | Horário do cerco (dentro de faixa), Rigor, plano de defesa (até 5 regras), Encomendas de cerco e de reparo |
| **10** | Live-ops | Um encantado maior por ciclo; ameaça nova por Era (F_ref × 1,2); a Travessia reusa as expedições |
| **12** | Onboarding | Modelos de regras; primeira expedição guiada; primeira libertação guiada (o Curupira) |
| **13** | Anti-abuso | Semente registrada e diário reproduzível; cargas com teto; baú pela metade fora da faixa; Mérito pela metade em item comprado |
| **14** | Arte e UI | Editor de regras por blocos; diário de expedição; barras de Vida e Bruma; as duas taxas (ausente 100%, ativa até 125%) |

## 14. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Glossário:** incluir *Regras* (os gatilhos de combate), *Plano B*, *Bruma da região*, *Pressão de caça* (a Lei da Caipora), *Libertar* e *Dispersar*, *Arrancada*, *Encruzilhada*, *Presságio*, *Arsenal*, *Guarda do Arraial* e *Integridade*.
2. **[proposta de mudança na bíblia] Seção 3:** os assombrados têm três origens (bichos tomados, almas e encantados corrompidos), e só os encantados podem ser libertados (5.1).
3. **[proposta de mudança na bíblia] Seção 6.6** (com o módulo 07): **o combate não solta ouro.**
4. **[proposta de mudança na bíblia] Seção 6.1:** o cerco se resolve em 2 h, num horário escolhido pela Câmara dentro de uma faixa; a inscrição fecha 24 h antes, como já está.
5. **[proposta de mudança na bíblia] Seção 6.5:** fixar o ponto de partida em **5 reparos**, com −10 pontos de máximo por reparo.
6. **[proposta de mudança na bíblia] Seção 5:** registrar que **quem não se inscreve no cerco não luta e não pesa** no cálculo.
7. **[proposta de mudança na bíblia] Glossário, verbete Mérito:** incluir a **libertação de encantados** entre as fontes de Mérito, porque ela empurra a Bruma da região, que é um bem público.

## 15. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Regras viram programação** | O casual abre o editor, vê condições e prioridades e desiste. | Modelos prontos por vocação, editor por blocos, diário que mostra qual regra disparou e uma sugestão ("você usou 14 poções; experimente a regra X"). |
| **Simulação cara** | Milhares de expedições offline em passos de 0,1 s pesam na VPS. | Simulação por eventos (só nos instantes em que alguém age) e cálculo na volta, como no Melvor ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o desenho fica para a Fase 4. |
| **O ativo atropela o ausente** | As janelas ativas rendem tanto que perdê-las parece castigo. | Teto de +25%, cargas acumuláveis, "paciência da mata" exclusiva do ausente e medição no módulo 08. |
| **O ausente acorda com tudo parado** | Uma regra ruim faz a expedição parar às 2 h da manhã. | Plano B, recuo padrão a 15 pontos de durabilidade e mochila que nunca encerra a expedição. |
| **Bots na caça** | Contas farmam a mesma região 24 h por dia. | Pressão de caça regional, teto de emissão por conta, adulto verificado (P8), cargas com teto e detecção por padrão de fluxo ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| **Ninguém liberta** | Dispersar rende mais por hora e a libertação vira enfeite. | Mérito, dádiva, recuo da Bruma da região e cartas de ajudante; o módulo 08 iguala o valor por hora dos dois caminhos. |
| **Griefing com a pressão de caça** | Uma guilda esgota uma região para prejudicar outra. | O efeito máximo é −50%, a região descansa sozinha, a libertação da Caipora zera o problema e os Planos B espalham os caçadores. |
| **Cerco virar conta resolvida** | A comunidade descobre a composição ótima e o cerco perde a graça. | Presságio variável, ameaça nova por Era, Rigor, Clarões e tetos nos marcos. |
| **Cerco dominado por baleias ou por uma guilda** | Quem tem mais equipamento leva todo o Mérito. | Mérito comprimido (o mais forte ganha 1,7 vez o novato), PC medido contra um padrão e capacidade por posto. |
| **Espiral de derrotas** | A cidade perde, a Guarda enfraquece, a cidade perde de novo. | F_ref × 0,85 depois da Queda, Encomenda de reparo com Mérito × 1,5 e nenhuma perda de obra ou de bônus. |
| **Comprar Mérito com Alvará** | Alvará → ouro → itens → Arsenal → Mérito. | Item comprado vale 50%, preço de referência do sistema e taxa pela metade acima de 300 por semana (a fechar com 07 e 09). |
| **Fuso horário** | O sábado às 20 h de Brasília exclui quem joga de outro fuso. | A defesa é assíncrona; os Clarões são um bônus pequeno; a Câmara pode mudar o horário dentro da faixa. |
| **Abuso da cópia congelada** | Inscrever-se com o melhor equipamento e vendê-lo em seguida. | Desgaste e cinto cobrados no momento do compromisso. |
| **Carregamento pago em masmorras** | Um jogador forte "carrega" um fraco em troca de ouro ou dinheiro. | Baú pela metade fora da faixa recomendada e detecção de padrões. |
| **Pico de carga no cerco** | O servidor inteiro olha o mesmo cerco no sábado à noite. | As cópias estão congeladas desde T−24 h, então o servidor pré-calcula a parte determinística; ao vivo, só os Clarões. [F] A infraestrutura que cai no dia do evento é o alerta do Pokémon GO em Chicago, 2017 ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 10). |
| **Folclore mal usado** | Uma figura vira caricatura, ou uma entidade sagrada vira inimigo. | Regras de respeito (12.1), lista do que fica fora (12.5), "A lenda" separada de "Em Pindorama", conferência nas obras originais e consultoria antes da arte. |
| **Narrativa colonial disfarçada** | "Espíritos nativos transformados em monstros que os heróis purificam" repete a demonização jesuítica. | A Bruma não é nativa nem estrangeira, os encantados são protetores legítimos e o verbo é *libertar*, nunca *exorcizar*; a revisão de sensibilidade olha esse ponto especificamente. |

## Fontes

**Fichas e estudos do projeto:** [B01 Melvor Idle](../01-pesquisa/fichas/B01-melvor-idle.md), [B02 Legends of IdleOn](../01-pesquisa/fichas/B02-legends-of-idleon.md), [B03 Idle Champions](../01-pesquisa/fichas/B03-idle-champions.md), [B06 Tap Titans 2](../01-pesquisa/fichas/B06-tap-titans-2.md), [C01 Milky Way Idle](../01-pesquisa/fichas/C01-milky-way-idle.md), [D02 Shakes & Fidget](../01-pesquisa/fichas/D02-shakes-and-fidget.md), [00-sintese](../01-pesquisa/00-sintese.md), [02-padroes-matriz-leis](../01-pesquisa/02-padroes-matriz-leis.md), [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md).

**Fontes externas novas** (acessadas em novembro de 2026):
1. [Final Fantasy XII](https://en.wikipedia.org/wiki/Final_Fantasy_XII) — Wikipedia — sistema de gambits.
2. [Final Fantasy XII/Gambits](https://strategywiki.org/wiki/Final_Fantasy_XII/Gambits) — StrategyWiki — ordem de prioridade e casas.
3. [Milky Way Idle na Steam](https://store.steampowered.com/app/3224420/Milky_Way_Idle/) — oficial — combate com gatilhos (via [C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).
4. [Curupira](https://pt.wikipedia.org/wiki/Curupira) — Wikipedia — com base em Cascudo, Barbosa Rodrigues, Couto de Magalhães, Navarro e na carta de Anchieta de 1560.
5. [Caipora](https://pt.wikipedia.org/wiki/Caipora) — Wikipedia — com base em Navarro, Cascudo e Benatte (*Revista de História da Biblioteca Nacional*, 2010).
6. [Boitatá](https://pt.wikipedia.org/wiki/Boitat%C3%A1) — Wikipedia — com base em Cascudo, Simões Lopes Neto (*Lendas do Sul*, 1913) e Anchieta.
7. [Iara](https://pt.wikipedia.org/wiki/Iara) — Wikipedia — com base em Cascudo (*Dicionário do folclore brasileiro*; *Geografia dos mitos brasileiros*).
8. [Boiuna](https://pt.wikipedia.org/wiki/Boiuna) — Wikipedia — página com problemas de verificabilidade; conferir na obra original.
9. [Mapinguari](https://en.wikipedia.org/wiki/Mapinguari) — Wikipedia em inglês — com base em Cascudo (1962, pp. 456–457; 1976) e Oren (1993, 2001).
10. [Mãe-do-Ouro](https://en.wikipedia.org/wiki/M%C3%A3e-do-Ouro) — Wikipedia em inglês — lida via resumo de busca.
11. [Mãe de ouro](https://www.todamateria.com.br/mae-de-ouro/) — Toda Matéria — divulgação, lida via resumo de busca.
12. [Corpo-seco](https://pt.wikipedia.org/wiki/Corpo-seco) — Wikipedia — com base em Cascudo (*Geografia dos mitos brasileiros*) e Basílio de Magalhães.
13. [Pisadeira (folclore)](https://pt.wikipedia.org/wiki/Pisadeira_(folclore)) — Wikipedia — cita a revisão "Sleep Paralysis in Brazilian Folklore and Other Cultures" (*Frontiers in Psychology*, 2016).
14. [Lobisomem](https://pt.wikipedia.org/wiki/Lobisomem) — Wikipedia — versão brasileira com base em Simões Lopes Neto.
15. [Comadre Fulozinha](https://pt.wikipedia.org/wiki/Comadre_Fulozinha) — Wikipedia — página com poucas referências.
16. [Cortejo Visagento](https://portalamazonia.com/cultura/cortejo-visagento-se-torna-tradicao-de-dia-das-bruxas-em-homenagem-ao-folclore-amazonico/) — Portal Amazônia — uso do termo "visagem".
17. [Ipupiara](https://periodicos.unifap.br/estacaocientifica/article/download/648/463/2049) — revista *Estação Científica* (Unifap) — lido via resumo de busca.
18. [Lei nº 5.197/1967](https://www.planalto.gov.br/ccivil_03/leis/l5197.htm) — Planalto — proteção à fauna, art. 1º.

**Lacunas:** não conferimos as lendas diretamente nas obras de Câmara Cascudo (só pelos verbetes que as citam); o ponto fraco do Mapinguari no umbigo vem da Wikipedia em inglês citando Cascudo; a Mãe-do-ouro e o Ipupiara foram lidos só por resumo de busca; as marcações [NV] da seção 12.5 (Mula-sem-cabeça, Boto, Negrinho do Pastoreio, Matinta Perera) são conhecimento prévio a conferir na consultoria.

