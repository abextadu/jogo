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
| **Libertado** | A Bruma zera antes da Vida | A luta acaba na hora. O encantado volta a ser quem era e agradece. Rende **dádiva** (chance), **Mérito**, avanço na **Bruma da região** (−3 pontos por libertação comum, −15 por um encantado maior), entrada no bestiário e, nos maiores, uma carta de contratação de ajudante ([03-personagem](03-personagem.md), seção 9.3). Quase tudo é **preso à conta** ou é bem público. |
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

**A Bruma da região** (0 a 100) muda a mistura de inimigos. Ela sobe 2 pontos por dia sozinha, desce com limpeza, libertação e obras, e sobe 15 pontos numa região de fora quando a cidade perde um cerco (11.5).

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
- Cada bicho abatido soma 0,02 ponto (o Caçador soma 0,014, pela *Caça de respeito*). A região descansa 5 pontos por hora. Uma região aguenta uns 250 abates por hora (cerca de quatro caçadores em tempo integral) sem subir.
- **Rendimento dos bichos** (pele, carne, matéria dura): `multiplicador = 1 − 0,5 × (pressão / 100)²`. Com 50%, rende 87,5%; com 80%, 68%; com 100%, 50%.
- **A partir de 80%, a Caipora se zanga:** encontros com a **Caipora tomada** (elite) começam a aparecer. Libertá-la derruba a pressão da região para 20% (um bem público) e rende dádiva; dispersá-la derruba para 60%, por pouco tempo.
- **Presente à Caipora:** antes de caçar, o jogador pode deixar um presente (uma refeição Fina ou melhor), e a pressão que ele gera cai pela metade naquela expedição. É um dreno da Culinária. Usar fumo, como na tradição, ou só comida fica para a consultoria cultural (seção 15).
- **Nas regras:** "QUANDO a pressão passar de 70% → Plano B".

**Exemplo:** doze caçadores na Várzea, 750 abates por hora, somam 15 pontos e a região descansa 5: +10 por hora. Começando em 20%, a pressão chega a 80% em 6 h. Às 3 h da manhã, as regras dos caçadores ausentes os levam ao Plano B, e a Várzea descansa.

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

<!-- PARTE 3 -->
