# GDD 04 — Combate: regras, expedições, masmorras, chefes, cercos e bestiário

> **Depende de:** [00-biblia](00-biblia.md) e [03-personagem](03-personagem.md). **Conversa com:** [05-itens](05-itens.md), [06-oficios-e-coleta](06-oficios-e-coleta.md), `02-progressao`, `07-economia`, `09-social`, `10-live-ops` e `14-arte-e-ui` (pontos marcados "a reconciliar").
> **Etiquetas:** [F] fato com fonte, [H] proposta do estúdio, [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**
> **Tema:** fantasia medieval clássica em pixel art, conforme a revisão da bíblia de 2026-11-11 (seção 9). O ritmo das armas e a durabilidade seguem o [05-itens](05-itens.md).

## 1. Resumo do módulo

O combate do jogo é um **plano que o servidor executa**. O jogador escreve regras ("quando a minha vida cair abaixo de 35%, usar poção"), escolhe a região, os suprimentos e o que fazer se der errado, e sai. O servidor simula as lutas, inclusive enquanto ele está fora, e na volta o diário entra no Relatório da volta. As decisões centrais:

1. **Regras por gatilhos**, lidas de cima para baixo, com casas de regra conquistadas jogando (3 no início, 12 no nível 90), e um **plano de expedição** separado, com recuo e Plano B. O ausente nunca acorda com a expedição parada por um erro bobo.
2. **Fórmulas simples:** `dano = ATQ × potência × 100 / (100 + DEF)`. Uma DEF de 100 corta metade do dano.
3. **Duas barras nas criaturas corrompidas: Vida e Névoa.** Zerar a Vida **abate** a criatura (mais rápido, rende material negociável). Zerar a Névoa primeiro a **purifica** (mais lento, rende dádiva e Mérito e empurra a Névoa da região). Purificar é o modo de "libertar uma região corrompida" que a bíblia pede (seção 3).
4. **Expedições de coleta** são filas de combate que abastecem Curtume, Culinária, Alquimia e Carpintaria, reguladas pela **Lei da Cerva**: caçar demais numa região cansa a mata e chama a Cerva Antiga, guardiã das feras.
5. **Nenhuma perda de item por derrota.** Os itens só saem do jogo pelo desgaste ([00-biblia](00-biblia.md), 6.5; [05-itens](05-itens.md), seção 6).
6. **Masmorras assíncronas:** cada membro entra com uma cópia congelada do personagem, a mesa enche ao longo de horas, os ajudantes completam o grupo e o servidor resolve. Há Encruzilhadas para votar, com prazo.
7. **Momentos ativos com teto:** cargas de **Arrancada** que se acumulam com o jogador fora, **Encruzilhadas** com janela de horas e **Clarões** no cerco. Somados, dão no máximo +25% sobre o valor diário de combate do ausente.
8. **Cerco semanal** com inscrição até 24 h antes, **Presságio** revelado pelos vigias, **Arsenal** abastecido pelos ofícios, **Guarda da Cidade** (NPC) equipada pela cidade e **dificuldade elástica**. Perder custa à cidade, nunca ao ausente.
9. **Bestiário de fantasia clássica com desenho próprio:** feras, mortos-vivos e corrompidos (goblins, orcs, trolls, basiliscos, serpes), com a Névoa como fio comum. **Nenhum povo é mau por natureza**: os bandos que atacam estão tomados pela Névoa.

## 2. Princípios do combate

| # | Princípio | De onde vem |
|---|---|---|
| C1 | **O combate é um plano.** As regras são escritas antes e executadas pelo servidor. | Lei 8, do plano ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)); [F] o Milky Way Idle tem consumíveis e habilidades que disparam por condições configuráveis ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md), com [Steam](https://store.steampowered.com/app/3224420/Milky_Way_Idle/)) |
| C2 | **Derrota não tira itens.** Ela encerra ou desvia o plano e custa desgaste. | Pilar 4 e [00-biblia](00-biblia.md), 6.5. [F] No Melvor, a morte perde um item equipado para sempre e gera reviews de "perdi itens dormindo" ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) |
| C3 | **O ativo ganha opções com teto.** Janelas de decisão, nunca de reflexo; ganho de presença de no máximo +25% por dia. | Lei 9; [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 11 |
| C4 | **Participação é um orçamento de decisões que se acumula.** | [F] Dois ataques por membro na guerra de clãs do Clash of Clans; inscrição até 2 h antes no chefe mundial do IdleMMO ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), resumo) |
| C5 | **Tudo é simulado no servidor**, de forma determinística, com semente registrada. O diário pode ser reproduzido. | P9 da bíblia; lei 15; [F] o Melvor simula no cliente, e o save é editável ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) |
| C6 | **O combate é um elo da cadeia:** consome comida, poções e equipamento, e abastece os ofícios. | Pilares 1 e 2 |
| C7 | **Nada coletivo trava por falta de gente:** ajudantes, Guarda da Cidade e dificuldade elástica. | Lei 22; [F] as missões públicas vazias do Warhammer Online ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 15) |
| C8 | **Purificar vale tanto quanto abater.** | [00-biblia](00-biblia.md), seção 3 ("libertar uma região corrompida é recompensa e narrativa, não só abate") |

## 3. Regras de combate (os gatilhos)

### 3.1 Como funcionam

Cada regra tem a forma **`QUANDO <condição> [E <condição>] → <ação> [no alvo]`**. As regras ficam numa lista ordenada. Cada vez que o combatente pode agir, o servidor lê a lista de cima para baixo e executa **a primeira regra cuja condição é verdadeira e cuja ação está disponível** (há ânimo, a recarga acabou, há estoque no cinto). Se nenhuma regra serve, o combatente faz o ataque básico.

[F] É o modelo dos *gambits* do Final Fantasy XII: a lista é lida de cima para baixo, a primeira condição atendida dispara, cada personagem começa com 4 casas e pode chegar a 12, e o comando direto do jogador passa na frente dos gambits ([Wikipedia](https://en.wikipedia.org/wiki/Final_Fantasy_XII); [StrategyWiki](https://strategywiki.org/wiki/Final_Fantasy_XII/Gambits)).

### 3.2 Catálogo inicial de condições

| Sobre | Condições [H] |
|---|---|
| **Mim** | PV < X% · PV > X% · ânimo ≥ X · Guarda < X% · estou com [estado] · postura atual é [postura] · ressonância = N |
| **Aliados** | PV de um aliado < X% · aliado com [estado] · aliado ligado pelo Juramento · número de aliados de pé < N |
| **Alvo e inimigos** | Alvo é [fera / morto-vivo / corrompido / chefe] · Névoa do alvo < X% · PV do alvo < X% · alvo com [estado] · alvo sem Marca · alvo tem ponto fraco revelado · inimigos ≥ N · inimigo corpo a corpo ao lado · inimigo prepara [ataque anunciado] |
| **Luta** | Tempo de luta > T s · primeiro turno do encontro · encontro é de elite |
| **Estoque** | Cinto tem < N de [item] · óleo da arma acabou |

### 3.3 Ações

- Usar uma habilidade.
- Usar um consumível do cinto, em mim ou num aliado.
- Mudar de postura (Cavaleiro) ou de trilha (Ladino, entre encontros).
- **Escolher o alvo:** menor PV, maior ameaça, o marcado, o corrompido, o que está preparando ataque.
- **Esperar:** guardar ânimo, ou ficar parado diante de um ataque anunciado (seção 10.1, o olhar do Basilisco-rei).
- **Recuar do encontro:** abandonar a luta atual, sem drop e sem contar como derrota.

### 3.4 Casas de regra

- **3 casas no nível 1** de vocação e **+1 nos níveis 10, 20, …, 90**, até **12 casas**.
- Cada vocação vem com **três modelos prontos**: *Seguro*, *Equilibrado* e *Agressivo*. O novato nunca precisa escrever uma regra no primeiro dia.
- **Nunca à venda.** [F] É a lei 10, da automação conquistada ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)), e [F] o Idle Champions vende familiares que automatizam tarefas, o que gera queixa ([B03](../01-pesquisa/fichas/B03-idle-champions.md)).

### 3.5 O plano da expedição: recuo e Plano B

Além das regras de luta, cada expedição tem um **plano**, que não ocupa casas de regra:

| Gatilho [H] | O que fazer |
|---|---|
| Peça abaixo de X% de durabilidade | **Reparo automático** com kits do armazém, como no [05-itens](05-itens.md), seção 6.5; sem kits, trocar para o conjunto reserva; sem reserva, Plano B |
| Poções no cinto < N | Ir ao Plano B, ou voltar e encerrar |
| Derrotas ≥ N na última hora | Ir ao Plano B |
| Mochila cheia | **Voltar, depositar no armazém e retomar** (custa só o tempo do caminho) |
| Pressão de caça da região > X% (seção 7.3) | Ir ao Plano B |
| Névoa da região > X | Ir ao Plano B |
| Refeição acabou | Repor do armazém e retomar, ou seguir sem refeição |

[H] **O Plano B é o coração do respeito ao ausente.** Se o plano A falha às 3 h da manhã, o personagem não fica parado até o meio-dia: ele passa para o plano que o próprio jogador escolheu. A mochila cheia nunca encerra a expedição, porque um teto de mochila abaixo do offline de 24 h seria um teto de offline disfarçado (lei 7).

### 3.6 Exemplo — o modelo "Equilibrado" do Caçador

| # | Regra |
|---|---|
| 1 | QUANDO meu PV < 35% → Poção de cura |
| 2 | QUANDO inimigos ≥ 3 → Chuva de flechas |
| 3 | QUANDO inimigo corpo a corpo ao lado → Recuo |
| 4 | QUANDO alvo sem Marca → Marca |
| 5 | QUANDO alvo é fera E PV do alvo < 30% → Tiro certeiro (busca o abate limpo) |
| 6 | QUANDO alvo é chefe E ânimo ≥ 60 → Disparo carregado |

**Plano:** caçar nos Campos de Urze; se as poções caírem abaixo de 3 ou a pressão de caça passar de 70%, Plano B: caçar no Bosque Raso.

### 3.7 Comandos ao vivo

Quem assiste à luta pode dar um comando que passa na frente das regras, como no FFXII. **O comando ao vivo não dá bônus**: equivale a editar as regras na hora. O bônus por presença existe só nas janelas da seção 10.2.

### 3.8 Quatro perguntas

[H] *Referência:* os gambits do FFXII e os gatilhos do Milky Way Idle. *Diferença:* um plano de expedição com Plano B e reparo automático, e condições ligadas ao mundo (pressão de caça, Névoa da região, família do inimigo). *Problema:* o idle sem decisão vira espera, e o combate automático sem regras vira "quem tem mais número". *Comportamento:* o jogador pensa antes de sair, lê o diário, ajusta e se sente esperto (lei 8). *Risco:* virar programação, que afasta o casual. Mitigação: modelos prontos, editor por blocos (módulo 14) e um diário que diz qual regra disparou em cada momento.

## 4. Cálculo de dano e defesa

### 4.1 Tempo

- Cada combatente age quando o seu contador chega ao **intervalo da arma**, conforme o ritmo do [05-itens](05-itens.md) (seção 4.3): facão 1,5 s · espada 2,0 s · bordão 2,0 s · arco 2,5 s · cajado 3,0 s. Lento soma 30% ao intervalo.
- O servidor simula com semente registrada, e o mesmo cálculo vale para o tempo online e para o offline.

### 4.2 Fórmulas

| O quê | Fórmula [H] |
|---|---|
| **Acerto** | `acerto = 95% + precisão − esquiva do alvo` (entre 60% e 100%). Cego: acerto × 0,5 |
| **Dano** | `dano = ATQ × potência × 100 / (100 + DEF do alvo) × C × A × V` |
| C (crítico) | × 1,5 no crítico (o Ladino chega a × 2,0); × 1 sem crítico |
| A (afinidade) | × 1,5 contra fraqueza · × 1,0 neutro · × 0,5 contra resistência |
| V (variação) | sorteio de 0,9 a 1,1, pela semente |
| **Bloqueio** | o golpe bloqueado causa 30% do dano |
| **Guarda** | absorve o dano antes do PV ([03-personagem](03-personagem.md), seção 5.1) |
| **Dano à Névoa** | `dano na Névoa = CLA × potência de clareza × 100 / (100 + RN)`, sendo RN a resistência à Névoa da criatura |
| Golpes sem clareza | causam na barra de Névoa 10% do que causam na Vida (40% com óleo de clareza) |
| **Peçonha e sangria** | ignoram a DEF |

A defesa tem retorno decrescente: DEF 100 corta 50% do dano, DEF 200 corta 67%, DEF 300 corta 75%. Jogadores e inimigos usam a mesma fórmula.

### 4.3 Exemplo calculado — Caçador nível 30 contra um urso jovem (T3)

**O Caçador** ([03-personagem](03-personagem.md), seção 4.4): ATQ 40,3; crítico 10,1%; precisão 6,5%; esquiva 11,6%; DEF 62; PV 470; arco de 2,5 s.
**O urso jovem (T3):** PV 280; DEF 40; esquiva 0%; ATQ 30; golpe a cada 3,2 s.

| Golpe do Caçador | Conta | Dano esperado |
|---|---|---|
| Básico | 40,3 × 1,0 × 100/140 = 28,8; × (1 + 0,101 × 0,5) pelo crítico; acerto de 100% (95% + 6,5%, no teto) | **30,2** |
| Básico com Marca (+15%) | 30,2 × 1,15 | **34,8** |
| Tiro certeiro com Marca | 40,3 × 2,5 × 100/140 × (1 + 0,301 × 0,5) × 1,15 | **≈ 95** |

**A luta:** Marca, dois básicos, Tiro certeiro e quatro básicos: 2 × 34,8 + 95 + 4 × 34,8 ≈ 304, o bastante para os 280 de PV. São 8 ações × 2,5 s = **20 s**.

**O que o Caçador sofre:** 30 × 100/162 = 18,5 por golpe do urso, com acerto de 95% − 11,6% = 83,4%, ou seja, 15,4 por golpe esperado. Em 20 s são 6 golpes: **≈ 93 de PV** (20% da vida).

**Entre lutas:** com refeição, ele regenera 2% de 470 = 9,4 de PV por segundo e recupera os 93 em 10 s, menos que os 20 a 25 s da procura pelo próximo encontro. Sem refeição, regenera 4,7 por segundo e empata com o dano de cada luta; nos encontros com bando ou elite, o déficit vira poção. **É assim que a refeição economiza poções** (seção 8).

## 5. A Névoa: purificar ou abater

### 5.1 Três famílias de criaturas

| Família | O que é | Desfecho | O que rende |
|---|---|---|---|
| **Feras** | Animais e bestas de Aldária: javalis, lobos, ursos, aranhas gigantes, basiliscos, serpes. As **feras da Névoa** são variantes tomadas por ela, mais fortes e mais escuras. | Abate | Pele, carne, matéria dura (seção 7); as feras da Névoa soltam também cinza de névoa |
| **Mortos-vivos** | Os mortos dos reinos de outrora, que a Névoa levanta: soldados de ossos, vultos, cavaleiros caídos | Dar descanso | Cinza de névoa, vestígios dos reinos de outrora |
| **Corrompidos** | Povos e grandes criaturas tomados pela Névoa: bandos goblins e orcs, trolls, a Tecelã, a Cerva Antiga | **Abater** ou **purificar** | Ver 5.2 |

**[proposta de mudança na bíblia]** A bíblia (seção 3) fala de criaturas e de criaturas corrompidas pela Névoa. Propomos fixar **três famílias** (feras, mortos-vivos e corrompidos) e que **só os corrompidos tenham a barra de Névoa** e possam ser purificados.

### 5.2 Duas barras nos corrompidos

Todo corrompido tem **Vida** e **Névoa**. A Névoa vale de 50% a 70% da Vida e **se regenera 2% por segundo** se ninguém usar clareza nele por 5 s.

| Resultado | Quando acontece | O que rende |
|---|---|---|
| **Purificado** | A Névoa zera antes da Vida | A luta acaba na hora. A criatura volta ao que era antes da Névoa: o goblin volta para os túneis do seu povo, o troll volta a dormir como pedra. Rende **dádiva** (chance), **Mérito**, avanço contra a **Névoa da região** (−0,5 ponto por purificação comum, −15 por um grande corrompido; 7.1), entrada no bestiário e, nos grandes, uma carta de contratação de ajudante ([03-personagem](03-personagem.md), seção 9.3). Quase tudo é **preso à conta** ou é bem público. |
| **Abatido** | A Vida zera antes | A criatura cai. Rende **cinza de névoa** e restos negociáveis (Alquimia). Nos grandes corrompidos, o corpo de Névoa se desfaz e a criatura volta, ainda tomada, no ciclo seguinte (10.1). |

**A decisão está nas regras.** Para purificar, o grupo precisa de clareza (Mago, Druida, óleo de clareza) e precisa **segurar o dano físico** ("QUANDO alvo é corrompido → não usar Talho pesado"). Abater é cerca de 1,5 a 2 vezes mais rápido.

**Exemplo:** chefe goblin corrompido (elite, T2): Vida 900, Névoa 500, RN 25. Um Mago nível 25, com SAB 40, cajado de bétula (T2) Comum (dano de encanto 22,4) e armadura leve (Foco de 8%), tem `CLA = (40 + 0,5 × 22,4) × 1,08 ≈ 55`. O Clarão (potência 2,0) causa 55 × 2,0 × 100/125 = **88 na Névoa**. São 6 Clarões, com recarga de 6 s, revezados com Enleio e Rajada para alimentar a ressonância: cerca de 40 s. Nesse tempo, a Rajada tira uns 400 da Vida, e a purificação acontece com folga. Um Cavaleiro sozinho, com Talho pesado, abate o mesmo goblin em uns 25 s.

### 5.3 Dádivas

A dádiva ocupa a casa da dádiva, é **presa à conta** e tem efeito lateral, nunca o maior número do personagem ([03-personagem](03-personagem.md), seção 4.1). Exemplos [H]:
- *Fio da Tecelã:* imune a desnorteio na floresta; +10% de dano contra mortos-vivos.
- *Escama da Serpe:* imune ao rasante; +10% de DEF nas serras.
- *Lasca do Troll Ancião:* +20% de resistência a atordoamento; +5% de Guarda (Cavaleiro) ou de cura recebida (demais vocações).
- *Pelo da Cerva Antiga:* cada abate seu conta 20% menos na pressão de caça.

Chance de dádiva: 10% por purificação de corrompido comum; **garantida na primeira purificação de cada grande corrompido**, por conta.

### 5.4 Quatro perguntas

[H] *Referência:* a bíblia ("libertar uma região corrompida é recompensa e narrativa, não só abate") e os eventos sem disputa de abate do Guild Wars 2 ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). *Diferença:* nenhum idle estudado tem "não matar" como opção de peso igual a matar. *Problema:* o combate de fantasia que é só abate fica repetitivo, e o orc "mau por natureza" é um clichê que envelheceu mal. *Comportamento:* grupos com clareza, regras que seguram o dano, gente que volta à mesma região para purificar quem só tinha abatido. *Risco:* purificar ser economicamente pior e ninguém purificar. Mitigação: Mérito, dádiva, recuo da Névoa da região e cartas de ajudante; a simulação equilibra o valor por hora dos dois caminhos.

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
| Enfeitiçado | Para de agir por 3 s (o lamento dos vultos) |
| Náusea | −20 pontos de acerto (o hálito do Basilisco-rei) |
| Petrificado | Não age por 3 s e sofre dano (o olhar do Basilisco-rei) |
| Desnorteio | Em luta: 20% de chance de errar o alvo. Na expedição: +50% no tempo de procura (as teias da Tecelã) |

- **Firmeza** é a chance de resistir a um estado ([03-personagem](03-personagem.md), seção 3.3).
- **Redução por repetição:** o mesmo controle (atordoar, enlear, sono, enfeitiçar) no mesmo alvo, dentro de 10 s, dura 50%, depois 25%, e depois o alvo fica imune por 10 s.
- **Chefes:** controles duram metade e eles são imunes a sono.

## 7. Expedições de coleta

### 7.1 Tipos de expedição e regiões

| Tipo | Alvo | Rende | Efeito no mundo |
|---|---|---|---|
| **Caça** | Feras | Pele, carne, matéria dura | Gera pressão de caça (7.3) |
| **Limpeza** | Mortos-vivos | Cinza de névoa, relíquias, achados | Baixa a Névoa da região |
| **Purificação** | Corrompidos | Dádivas, Mérito, cartas de ajudante | Baixa muito a Névoa da região |
| **Vigia** | Os arredores, na semana do cerco | Pontos de vigia para o Presságio (11.2) | Revela o cerco |
| **Fronteira** | A terra nova da temporada | Marcos e mapa | A partir da 2ª Era; módulo 10 |

**Regiões de partida** (nomes provisórios, a reconciliar com o 05, que liga as peles aos tiers, e com o 10):

| Região | Tier | Feras | Corrompidos e mortos-vivos | Grande corrompido |
|---|---|---|---|---|
| Bosque Raso | T1 | Javali, cervo | Goblins remendões, soldados de ossos | — |
| Campos de Urze | T2 | Lobo | Orcs dos clãs das colinas, vultos | — |
| Floresta Funda | T3 | Urso, aranha gigante | A Tecelã (elite), orcs | Troll Ancião da Ponte de Pedra |
| Charco Velho | T4 | Basilisco | Vultos, carniçais | Basilisco-rei |
| Serra das Galerias | T4 | Aranha gigante | Goblins das galerias, soldados de ossos | Verme das Galerias |
| Picos da Serpe | T5 | Serpe | Orcs tomados, vultos | Serpe-de-Névoa |
| Ruínas na Névoa | T6 | Dragão (a reconciliar com o 10) | Cavaleiros caídos | Reservado para a Era |

**A Névoa da região** (0 a 100) muda a mistura de inimigos. Ela sobe 3 pontos por dia sozinha. Desce com a limpeza (1 ponto a cada 100 mortos-vivos que recebem descanso), com a purificação (0,5 ponto por corrompido comum; 15 por um grande corrompido) e com as obras. Sobe 15 pontos numa região de fora quando a cidade perde um cerco (11.5). O piso é 10: a Névoa nunca some de todo, a não ser onde as obras a empurram. [H] As taxas escalam com a população e se calibram no módulo 08.

| Névoa da região | Feras | Mortos-vivos | Corrompidos | Observação |
|---|---|---|---|---|
| Abaixo de 30 | 70% | 25% | 5% | Boa para caça |
| De 30 a 60 | 45% | 40% | 15% | Mista. A partir de 40, **visão curta**: −10 pontos de acerto para o grupo, menos se houver lamparina (Ladino) |
| Acima de 60 | 25% | 45% | 30% | Mais cinza de névoa e mais perigo: +1% de força dos inimigos por ponto acima de 60 |

### 7.2 Como é uma expedição

1. **Escolhas antes de sair:** região (tier e bioma), tipo, ajudantes, suprimentos (cinto, refeições e consumível vocacional, tirados do armazém), regras, plano com recuo e Plano B, e a trilha, no caso do Ladino.
2. **Caminho:** de 5 a 20 min de ida, conforme a distância, sem combate (o Ladino *Andarilho* corta 25%).
3. **Ciclo:** procura do próximo encontro (20 a 30 s; o desnorteio soma 50%) → encontro com 1 a 4 inimigos (luta média de 20 a 40 s) → saque → regeneração.
4. **A expedição ocupa a fila,** como uma ação de ofício ([00-biblia](00-biblia.md), glossário). Lutar ou produzir é a grande decisão do dia.
5. **Roda offline** até o teto de offline do jogador (24 h na base, até 72 h conquistadas).
6. **Na volta, o diário,** dentro do Relatório da volta: encontros, regras que dispararam, consumo, desgaste, drops, Encruzilhadas e o motivo de cada recuo.

### 7.3 A Lei da Cerva: pressão de caça

[H] **A Cerva Antiga** é uma cerva branca, de galhada coberta de musgo, mais velha que os reinos de outrora. Ela guarda as feras das matas de Aldária: tolera quem caça para comer e para vestir e se volta contra quem caça além disso. A Névoa a alcança quando a mata está cansada. O arquétipo é o cervo branco das narrativas medievais [NV: conhecimento prévio]; a Cerva, a lei e o desenho são nossos.

**No jogo:**
- Cada região tem uma **pressão de caça** de 0 a 100%, **comum ao servidor inteiro**.
- Cada região tem uma **capacidade** de abates por hora, recalculada todo dia: 1,5 vez a parte que lhe caberia se a caça daquele tier se espalhasse igualmente pelas regiões abertas do tier (pelos abates das últimas 24 h). Assim a regra escala com a população do servidor.
- **Variação por hora:** `20 × (abates na última hora / capacidade − 1)` pontos. Abaixo da capacidade, a região descansa; acima, a pressão sobe. Cada abate do Caçador conta 0,7 (a *Caça de respeito*).
- **Rendimento das feras** (pele, carne, matéria dura): `multiplicador = 1 − 0,5 × (pressão / 100)²`. Com 50%, rende 87,5%; com 80%, 68%; com 100%, 50%.
- **A partir de 80%, a Cerva Antiga aparece tomada pela Névoa** (elite). Purificá-la derruba a pressão da região para 20% (um bem público) e rende dádiva; abatê-la derruba para 60%, por pouco tempo, e ela volta.
- **Presente à Cerva:** antes de caçar, o jogador pode deixar um presente na pedra da Cerva (uma refeição Fina ou melhor), e os abates dele contam metade naquela expedição. É um dreno da Culinária.
- **Nas regras:** "QUANDO a pressão passar de 70% → Plano B".

**Exemplo:** os Campos de Urze têm capacidade de 1.000 abates por hora. Numa noite em que muita gente os escolhe, recebem 1.500 por hora: a pressão sobe 20 × (1,5 − 1) = 10 pontos por hora e vai de 20% a 80% em 6 h. Às 3 h da manhã, as regras dos ausentes os levam ao Plano B, os Campos ficam abaixo da capacidade e descansam.

[H] **Quatro perguntas.** *Referência:* o estado de mundo por região, movido pela soma do idle de todos ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 15). *Diferença:* a regulação do farm vira lore e bem público, e não um "rendimento decrescente" escondido. *Problema:* o farm concentrado num ponto (o terreno do bot), preços que despencam e um mundo que não reage. *Comportamento:* espalhar a caça, rodar entre regiões, purificar a Cerva como serviço à cidade. *Risco:* um grupo grande esgotar uma região para atrapalhar os outros. Mitigação: o efeito máximo é −50%, a região descansa sozinha, a purificação zera o problema e os Planos B levam os caçadores para outro lugar.

### 7.4 Drops por hora

**Referência:** uma hora de expedição, **sozinho**, na **margem 0** (tier do equipamento igual ao tier da região), com refeição e pressão de caça abaixo de 30%. São cerca de **55 encontros por hora** e **100 abates por hora**. O tier da região define o tier do material (o Bosque Raso rende pele de javali, T1; os Campos de Urze, pele de lobo, T2); a quantidade é a mesma em todos os tiers.

**Drop por abate, na base** [H]:

| Família | Pele | Carne | Matéria dura | Peçonha, resina, sementes | Cinza de névoa | Relíquia | Achado |
|---|---|---|---|---|---|---|---|
| Fera | 0,40 | 0,50 | 0,25 | 0,05 | 0,02 (0,3 nas feras da Névoa) | — | 0,002 |
| Morto-vivo | — | — | — | — | 0,50 | 0,05 | 0,006 |
| Corrompido abatido | — | — | — | — | 3,0 | 0,3 | 0,02 |

**Ritmo e olhar de colheita por vocação** ([03-personagem](03-personagem.md), seção 7):

| Vocação | Ritmo de abate | Pele | Carne | Matéria dura | Peçonha, resina, sementes | Cinza de névoa | Achados |
|---|---|---|---|---|---|---|---|
| Cavaleiro | × 0,8 | × 1,0 | × 1,0 | **× 1,6** | × 1,0 | × 1,0 | × 1,0 |
| Caçador | × 1,1 | **× 1,6** | **× 1,4** | × 1,0 | × 1,0 | × 0,8 | × 1,0 |
| Mago | × 1,0 (× 1,3 contra bandos) | × 0,8 | × 0,8 | × 1,0 | × 1,0 | **× 1,8** | × 1,0 |
| Druida | × 0,7 | × 1,0 | × 1,0 | × 0,8 | **× 1,8** | × 1,0 | × 1,0 |
| Ladino | × 1,1 | × 0,9 | × 0,9 | × 0,9 | × 0,9 | × 0,9 | **× 2,5** |

**Exemplo — uma hora de caça nos Campos de Urze (lobos, T2):**

| | Abates | Pele | Carne | Matéria dura | Achados |
|---|---|---|---|---|---|
| Base | 100 | 40 | 50 | 25 | 0,2 |
| Caçador (40% dos abates são limpos: +50% de pele) | 110 | 0,40 × 1,6 × 110 × 1,2 ≈ **84** | **77** | 27 | 0,22 |
| Cavaleiro | 80 | 32 | 40 | **32** | 0,16 |
| Ladino (Varredura) | 110 | 40 | 50 | 25 | **0,55** |

O Cavaleiro tira menos por hora, mas gasta cerca de 40% menos poções (8.1). O valor líquido por hora de cada vocação tem de ficar dentro de ±10% (meta para o módulo 08).

**Regras gerais dos drops** [H]:
- **O combate não solta ouro.** O ouro entra pela venda de bens básicos ao NPC e pelas encomendas, como o [07-economia](07-economia.md) já decidiu ("o combate idle não solta ouro"). O ouro de monstro é a torneira clássica que cresce com horas e com contas (lei 6; [F] o SimpleMMO cortou o ouro dos chefes mundiais em set/2026, numa série de drenos, segundo [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). Reconciliado: o 05 (seção 3, regra-mãe) e o 06 (seção 1) tiraram o ouro dos drops de combate (revisão de consistência: R2).
- **Teto de emissão:** o que passar do teto negociável diário da conta fica preso à conta (o próprio jogador usa) ou vai para as obras como Mérito ([00-biblia](00-biblia.md), 6.6).
- **Todas as tabelas de drop são públicas** (P6 e insight 2 da [síntese](../01-pesquisa/00-sintese.md)).
- **Achados** têm grau (comum, raro, único): vestígios dos reinos de outrora (para obras e coleções), **moldes** (receitas especiais para os ofícios), mapas, minérios e madeiras raros. Os únicos são presos à conta.
- A **Arrancada** multiplica os drops por 1,5 durante 10 min (10.2).

## 8. Consumo e desgaste por hora de combate

### 8.1 Consumo por combatente

**Referência:** margem 0, com refeição, sozinho.

| Consumível | Por hora de combate [H] |
|---|---|
| **Refeição** | 1 porção por combatente (o personagem e cada ajudante). Reconciliado: o 06 foi alinhado (revisão de consistência: R1). |
| **Poção de cura** | ~1 na margem +1 · **~3 na margem 0** · ~8 na margem −1 (com risco de derrota). Sem refeição, × 2 |
| Ajuste por vocação | Cavaleiro × 0,6 · Druida × 0,5 · Caçador × 1,0 · Mago × 1,1 · Ladino × 1,2 |
| Com Druida no grupo | −30% para todos (−50% com o marco *Botica de campo*) |
| **Feixe de flechas** | 1 (Caçador) |
| **Pó arcano** | 1 medida (Mago) |
| **Ervas frescas** | ~6 (Druida) |
| **Ração de viagem** | 1 (Ladino, nas trilhas de Rastro fino e Trilha funda) |
| Óleo de arma | Opcional: 1 frasco dura 300 golpes, de 8 a 15 min de luta contínua conforme a arma; as regras decidem quando aplicar |
| Tônico, antídoto, água de clareza | De 0 a 3, conforme a região e o inimigo |

### 8.2 Desgaste

**A base é a do [05-itens](05-itens.md), seção 6:** a peça Comum nasce com 120 pontos de durabilidade (× 1,1, 1,2 e 1,3 nas qualidades acima), perde 10 por hora de combate comum, × 1,5 em masmorra e na Fronteira e × 2,0 no cerco; aceita 3 reparos, cada um tirando 20% do máximo original, e quebra no quarto zero. Vida de referência: cerca de 34 h de uso para uma peça Comum. A peça zerada com reparo disponível fica inoperante e espera o **reparo automático**, que é grátis e configurado no plano (3.5).

**Ajustes que este módulo propõe** [H] (a reconciliar com o 05):

| Ajuste | Multiplicador do desgaste |
|---|---|
| Armadura e escudo do Cavaleiro | × 1,5 |
| Botas do Ladino | × 1,5 |
| Peça um tier acima da região (margem +1) | × 0,6 |
| Peça um tier abaixo da região (margem −1) | × 1,5 |
| Cada derrota | −5 pontos em todas as peças |
| Unguento na armadura | × 0,7 |

**Cópias congeladas pagam na hora do compromisso:**
- **Cerco:** 2 h de cerco × 10 × 2,0 = **40 pontos por peça**, cobrados no fechamento da inscrição (11.1).
- **Masmorra:** cerca de 1 h × 10 × 1,5 = **15 pontos por peça e por corrida**, cobrados no compromisso (9.2).

**Exemplo:** a couraça Comum de um Cavaleiro tem 2,8 × 120 = 336 pontos na vida toda. A 10 × 1,5 = 15 por hora, dura **22 h de combate**, uns 3 dias para quem luta 8 h por dia. A do Caçador dura as 34 h de referência. É por isso que o Cavaleiro compra armadura com frequência e gasta pouca poção.

[H] **Quatro perguntas.** *Referência:* [F] perda de itens aparece em 16 dos 29 jogos com mercado entre jogadores e em 1 dos 27 sem mercado; o Shop Titans precisou da quebra de equipamento para sustentar quem fabrica ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md), lei 17). *Diferença:* aqui a perda é só por desgaste, previsível e visível, nunca por morte; e o desgaste varia por vocação, o que dá a cada vocação um perfil de freguês. *Problema:* sem destruição, o estoque cresce e o preço cai. *Comportamento:* compra recorrente de equipamento e de kits de reparo; os ofícios sempre têm freguês. *Risco:* o desgaste parecer imposto. Mitigação: a barra de durabilidade e a previsão de "horas restantes" aparecem no plano da expedição antes de sair.

## 9. Masmorras de grupo assíncronas

### 9.1 Formato

- **5 salas e um chefe.** Grupo de 3 a 5 vagas. Dificuldades: *Normal*, *Brava* (exige ter vencido a Normal) e *Lendária* (da Era).
- Cada masmorra conta uma história: a Toca dos Remendões, o Ninho da Tecelã, a Cripta do Juramento Quebrado (seção 12).

### 9.2 Como funciona

1. **Abrir ou entrar numa mesa** no quadro de masmorras da Cidade. O quadro mostra as vagas por papel (frente, dano, suporte) e a faixa de poder recomendada.
2. **Comprometer-se.** Cada membro entrega uma **cópia congelada** do personagem: atributos, caminhos, equipamento, regras e um cinto de consumíveis, que sai do inventário. O desgaste da corrida (15 pontos por peça) é cobrado nessa hora. O personagem continua livre para a sua fila normal, porque quem entra na masmorra é a cópia.
3. **Prazo de formação:** até 12 h. Se a mesa não encher, os ajudantes de quem abriu completam as vagas; na falta deles, entram ajudantes da Cidade (NPC genéricos).
4. **Resolução:** o servidor simula sala por sala no "toque" seguinte (a cada 15 min).
5. **Encruzilhadas:** em duas salas, o grupo escolhe entre 2 ou 3 caminhos (ex.: "a ponte podre ou o desvio pelo esgoto"). Cada jogador tem um voto, e os ajudantes não votam. A janela é de 4 h; sem votos, vale a escolha padrão deixada por quem abriu a mesa. **O ausente nunca trava o grupo.**
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
| **Elite de região** | Encontros raros na expedição: a fera grande, a Tecelã ou a Cerva Antiga tomadas pela Névoa | Na própria expedição, pelas regras |
| **Chefe de masmorra** | Na última sala | Pela cópia congelada do grupo (9.2) |
| **Grande corrompido** | Uma região por ciclo (ex.: o Troll Ancião na Floresta Funda) | **Assalto da Cidade**, assíncrono, com o servidor inteiro |
| **Cabeça da maré** | A última onda do cerco | No cerco (11) |

**O assalto da Cidade** (o chefe mundial do jogo) [H]:
- **Anúncio** com 48 h de antecedência e **janela de investidas de 48 h**, para caber em qualquer fuso e em qualquer rotina.
- **Inscrição** a qualquer momento da janela. Cada inscrito tem **2 investidas**: lutas simuladas de 3 min da cópia congelada do personagem, com os ajudantes, contra o grande corrompido.
- **Vida e Névoa do chefe são compartilhadas pelo servidor** e escalam com a população ativa da semana.
- **Desfechos:**
  - *Purificado* (a Névoa zera antes): a Névoa da região recua 15 pontos, abre-se uma área nova da região, cada participante recebe a dádiva desse chefe (na primeira vez) e uma carta de contratação de ajudante.
  - *Abatido* (a Vida zera antes): a região fica calma por uma semana (Névoa da região −5) e os participantes recebem cinza de névoa e restos raros. O chefe volta, ainda tomado, no ciclo seguinte.
  - *Fim da janela sem desfecho:* o chefe recua para o fundo da região. **A Vida volta, a Névoa não**: o dano de clareza acumulado fica para o próximo ciclo, e a purificação pode ser construída ao longo de semanas.
- **Recompensa por patamar**, sem ranking de dano: *bronze* (1 investida ou mais), *prata* (contribuição igual ou acima da mediana) e *ouro* (duas vezes a mediana, teto). Pagam 75%, 85% e 100% da recompensa. A contribuição soma o dano na Vida, **duas vezes** o dano na Névoa e a cura. [F] É o modelo das medalhas do Guild Wars 2, que pagam 75%, 85% ou 100% e metade quando o evento falha ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3).
- **Quase tudo preso à conta.** A parte negociável tem orçamento por assalto ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3, "chefe como torneira").

**Mecânicas que vêm do arquétipo** [H] (a lore e as fontes estão na seção 12):

| Grande corrompido | Mecânica | Como as regras respondem |
|---|---|---|
| **Troll Ancião da Ponte de Pedra** (Floresta Funda, T3) | *Couro de pedra:* golpes comuns causam 20%; críticos acertam as frestas e causam o dano cheio. *Luz do dia:* cada Clarão que o atinge o petrifica por 1 s (com redução por repetição). *Rugido:* medo em todos a cada 30 s. | Builds de crítico (Ladino, Caçador *Atirador*); Mago com Clarão na ordem certa; "QUANDO o chefe preparar o Rugido → Pé no chão ou Água de clareza" |
| **Basilisco-rei** (Charco Velho, T4) | *Olhar:* anunciado 2 s antes. Quem agir durante o olhar fica petrificado por 3 s e sofre dano; quem esperar não sofre nada. *Hálito:* náusea e peçonha em área. *Cheiro de doninha:* o unguento de doninha (Alquimia) o deixa 20% mais lento. | "QUANDO o chefe preparar o Olhar → Esperar"; antídoto e Chá de raiz contra o hálito; o unguento no cinto |
| **Serpe-de-Névoa** (Picos da Serpe, T5) | *Rasante:* a cada 20 s, derruba quem não estiver firme, e o derrubado perde 2 ações. Voa: imune a enleio; flechas causam × 1,3. | Cavaleiro com Pé no chão, dádiva *Escama da Serpe*, Caçadores no grupo, regras que guardam ânimo para depois do rasante |
| **Verme das Galerias** (Serra das Galerias, T4) | *Desabamento:* a cada 25 s, cai pedra num alvo, a menos que haja Muralha ativa. *Poeira:* cega quem estiver de frente. | Cavaleiro com Muralha no tempo certo; Ladino com Olho vivo antecipa o desabamento |

### 10.2 Momentos ativos

**Orçamento do ativo** [H]: somadas, as janelas ativas dão **no máximo +25%** sobre o valor diário de combate do ausente, e nenhuma é necessária para nada. A tela do personagem mostra as duas taxas: a **ausente**, que é 100% (o offline rende igual ao online, como no Melvor, segundo [B01](../01-pesquisa/fichas/B01-melvor-idle.md)), e a **ativa**, de até 125%.

| Janela | Como funciona | Ganho | Para o ausente |
|---|---|---|---|
| **Arrancada** | Ganha-se uma carga a cada 4 h, inclusive offline, até 6. Gastar uma dá 10 min de combate atento: o jogador escolhe o foco (pele, cinza de névoa, achados ou XP), assiste e pode comandar. | Drops ou XP do foco × 1,5 por 10 min | As cargas esperam. O ausente só adia, nunca perde |
| **Encruzilhada** na expedição | Cerca de uma a cada 45 min de expedição: um acontecimento com 2 ou 3 escolhas ("rastro de fera grande", "fonte de água limpa", "um vulto que chora"). Janela de 2 h; notificação opcional. | A escolha certa no contexto rende +5% a +10% no trecho seguinte | Vale a escolha padrão do plano: *segura* ou *ousada* |
| **Encruzilhada** na masmorra | Voto do grupo, janela de 4 h (9.2) | Rota melhor e salas bônus | Vale a escolha padrão da mesa |
| **Investida ao vivo** | No assalto a um grande corrompido, gastar uma carga de Arrancada para lutar ao vivo | +25% de contribuição naquela investida | A investida automática vale 100% |
| **Clarões do cerco** | Entre as ondas, os inscritos que estão online decidem o uso do Farol e do Arsenal (11.4) | Ondas mais bem defendidas e +10% de Mérito para quem votou | Vale o plano de defesa da cidade |

**A conta do teto:** 6 cargas × 10 min × +50% equivalem a uns 30 min de combate a mais por dia. Para quem luta cerca de 8 h por dia, isso é +6%. Somadas as Encruzilhadas, um jogador muito presente chega a uns +12% a +15%. O teto de +25% fica como folga para eventos.

**O que é só do ausente:** a **paciência da mata**. Expedições que rodam 6 h ou mais sem mudança no plano passam a ter chance de encontros raros "da madrugada" (o Pesadelo é um deles, seção 12.4), com drops de coleção que não saem para quem mexe na expedição o tempo todo. [F] O IdleOn reserva drops raros de skill para personagens ausentes, para que nenhum lado seja a versão pior do outro ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)).

**Decisão, nunca reflexo.** Nenhuma janela premia tempo de reação; todas são escolhas validadas no servidor, com prazo de minutos ou horas. Um bot ganha, no máximo, o mesmo que um humano, porque o ganho é limitado pelas cargas.

[H] **Quatro perguntas.** *Referência:* os golden cookies do Cookie Clicker e as cargas que se acumulam com o jogador fora ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 11). *Diferença:* tudo é decisão e tudo se acumula. *Problema:* um idle sem motivo para abrir; e, no outro extremo, [F] a janela fixa do Tap Titans 2, sem tolerância, em que o clã cobra quem falta ([B06](../01-pesquisa/fichas/B06-tap-titans-2.md)), e os minigames obrigatórios do Idle Slayer, citados em 4 de 10 reviews negativas recentes ([00-sintese](../01-pesquisa/00-sintese.md), insight 15). *Comportamento:* 2 a 6 sessões curtas por dia ([00-biblia](00-biblia.md), 6.1). *Risco:* a janela virar obrigação. Mitigação: o teto, as cargas acumuláveis e a regra de que nada essencial é exclusivo do ativo.

## 11. Cercos

[H] O cerco é o grande momento de combate do jogo e o maior consumidor coletivo da economia. Toda semana, a Névoa sobe em maré e as criaturas da Névoa atacam a Cidade. A defesa é assíncrona: quem se inscreve até 24 h antes luta com a cópia congelada do personagem, esteja online ou não.

### 11.1 A semana do cerco

| Quando | O que acontece |
|---|---|
| **D−7** (logo depois do cerco anterior) | Maré baixa: começa o reparo da Integridade e abre a inscrição. O Presságio mostra só a intensidade da próxima maré. |
| **D−6 a D−1** | Os vigias acumulam pontos e revelam o Presságio por etapas (11.2). A cidade produz provisões e deposita no **Arsenal**. O Conselho publica Encomendas de cerco (módulo 09). |
| **T−24 h** | **Fecha a inscrição.** O servidor congela a cópia de cada inscrito, cobra o desgaste do cerco (40 pontos por peça, 8.2) e reserva o cinto. |
| **T** (horário escolhido pelo Conselho dentro de uma faixa; padrão: sábado, 20 h, horário de Brasília) | Resolução em **5 ondas**, uma a cada ~20 min, durante 2 h. Clarões entre as ondas. |
| **T+2 h** | Resultado, Mérito, baús, Fôlego da Cidade e abertura do reparo. |

[F] A inscrição prévia vem da guerra de guildas do Shakes & Fidget, com 10 h de preparação ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)), e do chefe mundial do IdleMMO, com fila até 2 h antes ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 3). [H] **A diferença:** no Shakes & Fidget, quem não se inscreve defende com 50% da vida e o inativo com 10%. Aqui, **quem não se inscreve não luta e não pesa**: a força do cerco não é calculada pela lista de quem faltou (11.3).

### 11.2 O Presságio

- **Pontos de vigia:** cada hora de expedição de Vigia rende 10 pontos (o Ladino, 20; com o marco *Vigia de longe*, 30).
- **Meta de vigia:** 3 pontos por jogador ativo na semana. Exemplo: com 3.000 ativos, 9.000 pontos, ou umas 450 horas de Ladino somadas na cidade.

| Etapa | O que se revela |
|---|---|
| 25% da meta | A família predominante (feras, mortos-vivos ou corrompidos) |
| 50% | As fraquezas (fogo, clareza, prata, lama) |
| 75% | A ordem e o tamanho das ondas |
| 100% | O cabeça da maré e a sua habilidade |

- **Provisão certa vale mais:** a que acerta uma fraqueza revelada vale × 1,5; a genérica, × 1,0; a errada (óleo de fogo contra uma maré de criaturas que resistem a fogo), × 0,5.

[H] Quanto antes a cidade enxerga, mais dias os ofícios têm para produzir o que importa. Os Ladinos viram os olhos da cidade, e a informação vira coordenação entre quem luta e quem produz.

### 11.3 Como se calcula o cerco

**Postos** [H]:

| Posto | Vocação afim (× 1,3) | Capacidade | Função |
|---|---|---|---|
| **Muralha** | Cavaleiro | 35% dos inscritos | Segura as ondas |
| **Torres** | Caçador, Mago | 35% | Dano à distância |
| **Enfermaria** | Druida | 15% | Reduz a fadiga das ondas |
| **Vigia e sabotagem** | Ladino | 15% | Tira até 10% da força da 5ª onda |

Acima da capacidade, cada defensor a mais conta 50%. Uma vocação fora do posto afim conta × 1,0.

**Poder de cerco (PC) de um defensor.** No fechamento da inscrição, o servidor faz a cópia congelada lutar 60 s contra a **criatura-padrão da Era** (a mesma para todos) e mede:

`PC = dano causado + cura feita + 0,5 × dano absorvido no lugar de aliados`

Exemplo: o Caçador nível 30 da seção 4.3 tem PC perto de 900; um Cavaleiro do mesmo nível, uns 950 (500 de dano e 900 absorvidos); um Druida, uns 1.000 (300 de dano e 700 de cura). [H] Medir pela simulação, e não por uma soma de atributos, deixa cada vocação contribuir do seu jeito.

**Defesa de cada onda:**

`D(onda) = Σ (PC × afinidade do posto × fator de capacidade) × fadiga + G + P(onda)`

- **Fadiga** na onda *i*: `1 − 0,08 × (i − 1) × (1 − cobertura)`, sendo a cobertura da Enfermaria `mín(1; PC da Enfermaria / (0,15 × PC total))`. Sem Druidas, os defensores chegam à 5ª onda com 68% da força.
- **G — a Guarda da Cidade.** Os guardas NPC da cidade, um para cada 10 jogadores ativos, com PC de 300 cada: `G = guardas × 300 × (1 + 0,1 × nível da Muralha) × fração equipada × Integridade / 100`. A **fração equipada** é a parte dos guardas que tem um kit (arma e armadura) no Arsenal. **A obra da Muralha e os kits da Guarda são o que o ausente deixou pronto para a cidade.**
- **P — provisões** do Arsenal gastas na onda (as provisões são refeições; revisão de consistência: D1). Cada unidade vale, por tier, 20 / 30 / 45 / 65 / 90 / 120 (T1 a T6), vezes o acerto com o Presságio (1,5 / 1,0 / 0,5). O plano de defesa distribui as provisões pelas ondas (padrão: proporcional à força de cada uma).

**Força de cada onda:** `F(onda) = F_ref × m`, com m = 0,6 · 0,8 · 1,0 · 1,2 · 1,6 (da 1ª à 5ª onda).

**F_ref, a força de referência, é elástica:**
- No primeiro cerco de uma Cidade: `F_ref = 400 × jogadores ativos na semana`.
- Depois, muda com o resultado: Vitória plena × 1,10 · Vitória × 1,05 · Resistência × 0,97 · Queda × 0,85.
- Piso de 250 e teto de 700 × jogadores ativos. Cada Era nova multiplica por 1,2 e traz uma ameaça nova.
- **Rigor**, escolhido pelo Conselho dentro de faixas (módulo 09): *Brando* (× 0,85 na força, × 0,8 nas recompensas) ou *Bravo* (× 1,2 na força, × 1,3 nas recompensas).

**Resultado de cada onda:** `r = D / F`. Se r ≥ 1, a onda é repelida. Se r < 1, abre-se uma brecha, e a **Integridade** da Muralha perde `40 × (1 − r)` pontos.

**Resultado do cerco**, pela Integridade perdida nesta semana:

| Resultado | Condição |
|---|---|
| **Vitória plena** | As 5 ondas repelidas |
| **Vitória** | Perda de até 15 pontos |
| **Resistência** | Perda de 15 a 40 pontos |
| **Queda** | Perda de mais de 40 pontos |

**Exemplo calculado.** Cidade com 3.000 jogadores ativos na semana; F_ref = 400 × 3.000 = **1.200.000**.
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
**A mesma cidade sem Druidas:** a fadiga deixa os defensores com 84%, 76% e 68% da força nas ondas 3, 4 e 5. A 3ª onda passa raspando (r = 0,99), a 4ª abre brecha de 8,5 pontos e a 5ª, de 14,4. A perda total vai a uns 23 pontos: **Resistência**. É o argumento numérico para a cidade ter suporte, sem obrigar ninguém.

### 11.4 Clarões, plano de defesa e tetos

- **Clarões.** Entre uma onda e outra há 10 min em que os inscritos online votam:
  - **acender o Farol** (uma vez por cerco): +20% na defesa de uma onda;
  - **abrir o Arsenal:** antecipar até 30% das provisões restantes para a onda seguinte.
- **Plano de defesa.** Sem ninguém online, vale o plano escrito pelo Conselho: até 5 regras no mesmo formato das regras de combate. Ex.: "QUANDO a onda tiver maioria de corrompidos → acender o Farol". [H] É o sistema de regras aplicado à cidade, e a forma de o ausente (e o conselheiro) decidir antes.
- **Tetos.** Cada marco de cerco dos caminhos ([03-personagem](03-personagem.md), seção 6.2) tem teto de 10%. A soma das reduções de força numa onda não passa de 20%. *Pedra do portão* e *Enfermaria* estão sujeitos ao fator de capacidade. Sem teto, a cidade inteira escolheria o mesmo marco e o cerco viraria uma conta resolvida.

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
- Provisões, kits da Guarda e materiais de reparo entregues ao Arsenal valem Mérito pelo **preço de referência do sistema** (a cesta do IPC), não pelo pico do mercado.
- **O que o próprio jogador produziu conta 100%; o que ele comprou conta 25%** (o mesmo peso do [09](09-social.md); revisão de consistência: D10). O livro-razão sabe quem produziu cada lote ([00-biblia](00-biblia.md), P9).
- A partir de 300 de Mérito de fornecimento na semana, a taxa cai à metade.
- [H] O desconto para o item comprado estreita o caminho Coins → ouro → itens → Mérito, sem fechá-lo de todo (reconciliado com o 09: 25% do Mérito e zero ponto de ranking para item comprado; revisão de consistência: D10).

**Para todos os inscritos:** um baú do cerco, preso à conta (materiais, cosméticos e títulos), melhor quanto melhor o resultado.

**Para a cidade inteira, inclusive os ausentes:** o **Fôlego da Cidade**. Vitória plena: +10% de XP de vocação e de ofício por 7 dias; Vitória: +5%. Nenhum Fôlego mexe em drenos (desgaste, consumo, taxas). [F] O Milky Way Idle converte as taxas do mercado em bônus para o servidor inteiro, e o dreno passa a ser lido como contribuição ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).

**Se a cidade perde (Queda):**
- **A Integridade cai.** Isso só afeta a Guarda no cerco seguinte. Abre-se uma Encomenda de reparo com Mérito × 1,5: a reconstrução vira conteúdo.
- **A Névoa avança:** uma região de fora ganha +15 de Névoa da região por 7 dias. Fica mais perigosa, mas também rende mais cinza de névoa e mais corrompidos para purificar.
- **A maré seguinte vem mais fraca** (F_ref × 0,85). A Névoa também se cansa, e a cidade não entra numa espiral de derrotas.
- **Nunca acontece:** perda de item pessoal, de nível, de Mérito, de obra concluída ou de bônus de obra. **O ausente não perde nada**; só deixa de ganhar o Mérito e o baú daquele cerco.

### 11.6 O que o cerco consome da cidade

Por **1.000 jogadores ativos**, numa semana normal [H] (a reconciliar com 05, 06, 07 e 09):

| Consumo | Quantidade | Ofícios que abastecem |
|---|---|---|
| Provisões no Arsenal: **refeições** (o rancho do cerco; revisão de consistência: D1). Poções, óleos e flechas seguem nos cintos dos inscritos (última linha) | ~8.000 unidades | Culinária, com Pesca, Colheita e carne da caça |
| Kits da Guarda (arma e armadura) | 100 guardas; 40 pontos de desgaste por peça a cada cerco, ou ~24 peças (~12 kits) gastas por semana, mais o que faltar para equipar todos | Ferraria, Alfaiataria, Curtume, Carpintaria |
| Reparo da Integridade (~10 pontos por semana) | ~1.000 tábuas, 500 lingotes e 200 blocos de pedra | Carpintaria, Fundição, Mineração |
| Desgaste dos defensores (~300 inscritos × 6 peças × 40 pontos) | ~72.000 pontos, ou ~214 peças Comuns-equivalentes gastas por semana | Ferraria, Alfaiataria, Carpintaria, e os kits de reparo |
| Consumíveis dos cintos dos inscritos | Cerca de metade do que foi reservado | Alquimia, Culinária |

### 11.7 Quatro perguntas

[H] *Referência:* a guerra com inscrição do Shakes & Fidget ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)), os dois ataques do Clash of Clans, as janelas anunciadas do EVE ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 1) e as metas comunitárias, a mecânica de outros gêneros com melhor relação entre benefício e risco ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), ranking). *Diferença:* o cerco **consome o que a cidade produziu** (Arsenal, kits da Guarda, Muralha), os Ladinos revelam o que vem, a dificuldade se ajusta ao resultado, e quem falta não pesa. *Problema:* um momento coletivo sem plantão e um dreno coletivo que pareça contribuição, e não imposto. *Comportamento:* uma semana com ritmo (vigiar, produzir, inscrever, assistir se quiser); artesãos que nunca lutam também defendem a cidade pelo Arsenal. *Risco:* ver a seção 15.

## 12. Bestiário inicial

### 12.1 Regras do bestiário

1. **Arquétipo clássico, desenho e lore próprios.** Os arquétipos vêm de fontes de domínio público (bestiários medievais, folclore europeu, mitologia clássica). Nomes, aparência, mecânicas e combinações são nossos. Nada é copiado de outros jogos (bíblia, seção 3: Tibia, Albion, RuneScape e outros), e há revisão de semelhança antes de fechar a arte (módulo 14).
2. **A Névoa corrompe de fora. Nenhum povo é mau por natureza.** Orcs e goblins são povos de Aldária; os bandos que atacam estão tomados pela Névoa e podem ser purificados. A cidade está em guerra com a Névoa, não com os povos.
3. **Cada ficha separa "De onde vem" (o arquétipo e a fonte) de "Em Aldária" (a nossa versão).**
4. **Cada criatura tem uma mecânica que nasce do arquétipo** (o olhar do basilisco, o troll que vira pedra ao sol) **e uma resposta nas regras.**
5. **Leitura em pixel art:** cada família tem silhueta e cor próprias, e os corrompidos carregam **veios de névoa**, a marca visual comum que diz "pode ser purificado" (a reconciliar com o 14).

### 12.2 Feras (abate)

| Fera | Tier e região | Rende | Comportamento [H] |
|---|---|---|---|
| **Javali** | T1, Bosque Raso | Pele, carne, presas (matéria dura) | Investida: o primeiro golpe da luta causa × 1,5 |
| **Cervo** | T1, Bosque Raso | Pele, carne, galhada (matéria dura) | Foge: se não cair em 15 s, o encontro acaba (Tiro na perna resolve) |
| **Lobo** | T2, Campos de Urze | Pele, carne | Em matilha de 2 a 4; o uivo chama mais um lobo se a luta passar de 20 s |
| **Urso** | T3, Floresta Funda | Pele, carne, garras | Agarrão: segura um alvo por 2 s |
| **Aranha gigante** | T3 e T4, Floresta Funda e Serra das Galerias | Peçonha (Alquimia), seda (a reconciliar com o 05 e o 06 como fibra alternativa da Tecelagem) | Teia: enleia; peçonha |
| **Basilisco** | T4, Charco Velho | Pele (o couro de basilisco do 05), escamas | Olhar fraco: cega por 1 s; resiste a peçonha |
| **Serpe** | T5, Picos da Serpe | Pele, escamas | Voa: imune a enleio; flechas × 1,3 |
| **Dragão** | T6, Ruínas na Névoa | Pele de dragão (05) | Reservado para a Era (a reconciliar com o 10) |

**Feras da Névoa:** variantes de qualquer fera, tomadas pela Névoa: +30% de força, pelagem escurecida com veios de névoa e cinza de névoa no drop (7.4). Não têm a barra de Névoa: são abatidas, como as outras feras.

### 12.3 Corrompidos (purificar ou abater)

**Goblins remendões** — Bosque Raso (T1) e, em bandos mais fortes, Serra das Galerias (T4) · bandos e elite
- *Em Aldária:* um povo pequeno dos túneis, que conserta o que os outros jogam fora e troca sucata por comida com quem passa. A Névoa transformou bandos inteiros em saqueadores com armaduras de remendo.
- *Em combate:* bandos de 3 ou 4. *Armadilha de sucata:* o primeiro inimigo que avança fica atordoado por 2 s. O **chefe remendão** (elite: Vida 900, Névoa 500) é o exemplo da seção 5.2.
- *Purificados:* voltam aos túneis. [H] Proposta para o 10: túneis libertados viram ponto de troca de sucata com a cidade. Masmorra: **Toca dos Remendões** (T1–T2).

**Orcs dos clãs das colinas** — Campos de Urze a Picos da Serpe (T2 a T5)
- *Em Aldária:* clãs de pastores e guerreiros orgulhosos, que viviam na borda dos reinos de outrora e foram os primeiros a ficar no caminho da Névoa. Os bandos que descem das colinas estão tomados.
- *Em combate:* *Fúria* (abaixo de 50% do PV, +30% de dano) e *Grito de guerra* (medo, uma vez por luta). Fracos contra clareza.
- *Purificados:* voltam ao clã. A lore deixa claro que a cidade não está em guerra com os orcs.

**A Tecelã** — Floresta Funda e Serra das Galerias · elite de T3 e T4
- *De onde vem:* a aranha gigante, figura clássica da fantasia.
- *Em Aldária:* uma aranha antiga, do tamanho de uma carroça, que tecia as trilhas da floresta e guiava quem se perdia. Tomada, suas teias embaralham os caminhos.
- *Em combate:* enquanto ela estiver tomada, a região inteira dá **desnorteio** (+50% no tempo de procura); teia que enleia; peçonha.
- *Purificação:* dádiva *Fio da Tecelã*. Masmorra: **Ninho da Tecelã** (T3).

**A Cerva Antiga** — todas as regiões de caça · elite que surge com pressão de caça ≥ 80%
- A guardiã das feras e da Lei da Cerva (7.3). Tomada, *afugenta*: a cada 20 s, as feras do encontro fogem sem deixar drop. Fraca contra clareza.
- *Purificação:* a pressão da região cai para 20%, para todo o servidor. Dádiva: *Pelo da Cerva Antiga*.

**Lobisomem** — Campos de Urze e estradas · elite noturna
- *De onde vem:* o lobisomem, figura antiga do folclore europeu [NV: conhecimento prévio].
- *Em Aldária:* uma pessoa tomada pela Névoa nas noites de maré alta.
- *Em combate:* rápido, sangra o alvo, fraco contra prata (óleo de prata) e fogo.
- *Desfecho:* **ninguém morre.** Se a Vida zera, ele volta à forma humana, ferido, e foge, ainda tomado. Se a Névoa zera, ele é curado de vez e vira personagem da cidade (missão e bestiário).

**Troll Ancião da Ponte de Pedra** — Floresta Funda · grande corrompido, T3
- *De onde vem:* [F] nos contos escandinavos, os trolls vivem em montanhas, rochas e cavernas, e alguns viram pedra quando expostos ao sol ([Wikipedia](https://en.wikipedia.org/wiki/Troll), com base em Kvideland e Sehmsdorf, *Scandinavian Folk Belief and Legend*, 2010, e em Orchard, 1997).
- *Em Aldária:* o troll que guardava a ponte de pedra do velho reino e dormia de dia, feito pedra, à beira do rio. A Névoa escondeu o sol dele, e ele não dorme mais.
- *Em combate:* couro de pedra, luz do dia e rugido (10.1).
- *Purificação:* ele volta a dormir como pedra, e a ponte reabre uma área nova da Floresta Funda.

**Basilisco-rei** — Charco Velho · grande corrompido, T4
- *De onde vem:* [F] Plínio, o Velho, na *História Natural* (c. 79 d.C.), descreve uma pequena serpente cujo veneno e hálito queimam plantas e racham pedras, com o mesmo poder do catoblepas, cujo olhar mata, e diz que a doninha é a sua inimiga natural; Isidoro de Sevilha e os bestiários medievais ampliaram a figura ([Wikipedia](https://en.wikipedia.org/wiki/Basilisk)).
- *Em Aldária:* o mais velho dos basiliscos do charco, que a Névoa fez crescer até o tamanho de uma barcaça.
- *Em combate:* olhar, hálito e cheiro de doninha (10.1). A regra "QUANDO o chefe preparar o Olhar → Esperar" é a lição que o charco ensina.
- *Purificação:* o charco clareia e uma área nova se abre.

**Serpe-de-Névoa** — Picos da Serpe · grande corrompido, T5
- *De onde vem:* a serpe é o dragão de duas patas da heráldica [NV: conhecimento prévio].
- *Em Aldária:* a matriarca das serpes dos picos, que caça nas correntes de vento. Tomada, ataca as estradas da serra.
- *Em combate:* rasante; voa (10.1).
- *Purificação:* a estrada da serra reabre.

**Verme das Galerias** — Serra das Galerias · grande corrompido, T4
- *De onde vem:* o "verme" das lendas medievais, dragão sem asas e sem patas [NV: conhecimento prévio].
- *Em Aldária:* um verme cego, do tamanho de uma galeria, que cava a serra desde antes das minas; os mineiros de outrora seguiam os túneis dele. Tomado, derruba as galerias.
- *Em combate:* desabamento e poeira (10.1).
- *Purificação:* ele volta a cavar sem derrubar, e as galerias que ele abre viram veios novos. [H] Proposta para o 06: o Verme pode regular a Mineração como a Cerva regula a caça.

### 12.4 Mortos-vivos (dar descanso)

**Soldados de ossos** — do Bosque Raso às Ruínas (T1 a T6)
- *Em Aldária:* os soldados dos reinos de outrora, que a Névoa levanta em fileiras, com as armas enferrujadas que tinham.
- *Em combate:* em formação; fracos contra prata (o papel clássico da prata, segundo o [05-itens](05-itens.md), seção 2) e contra fogo.
- *Rendem:* cinza de névoa e relíquias (armas e insígnias antigas, para obras e coleções).

**Vultos** — regiões com Névoa alta e cercos (T2 a T5) · inimigo comum
- *Em Aldária:* formas sem rosto que a Névoa faz das lembranças dos reinos engolidos.
- *Em combate:* em bandos; *lamento* que deixa enfeitiçado quem tem pouca Firmeza; fracos contra clareza.

**Carniçais** — Charco Velho (T4)
- *Em combate:* mordida com peçonha; fracos contra fogo.

**O Cavaleiro do Juramento Quebrado** — chefe da masmorra **Cripta do Juramento Quebrado** (T3–T4)
- *Em Aldária:* um cavaleiro do velho reino que jurou segurar o portão da capital e fugiu quando a Névoa chegou. A terra da cripta não o aceita, e ele vaga de armadura, preso ao juramento que não cumpriu. É o espelho sombrio do *Juramento* da vocação Cavaleiro ([03-personagem](03-personagem.md), seção 5.1).
- *Em combate:* duas fases. Na primeira, a armadura (DEF alta, fraca contra fogo). Quando ela cai, o espírito se solta e solta o *Lamento*: medo em área.
- *Desfecho:* dar descanso. Rende o título "Juramento cumprido" e relíquias.

**Pesadelo** — acampamentos das expedições longas · encontro raro "da madrugada" (10.2)
- *De onde vem:* [F] a mara dos folclores germânico e eslavo, um ser que se senta no peito de quem dorme e causa pesadelos; a palavra inglesa *nightmare* e a francesa *cauchemar* vêm dela, e a crença é associada à paralisia do sono ([Wikipedia](https://en.wikipedia.org/wiki/Mare_(folklore))).
- *Em Aldária:* um espírito da Névoa que ronda os acampamentos de quem passa a noite na mata.
- *Em combate:* ataca no intervalo entre as lutas, quando o grupo está regenerando: *peso no peito* corta a regeneração pela metade por 1 min. Prefere quem está de barriga cheia (com refeição ativa). O Chá de raiz e a Firmeza o afastam.
- *Desfecho:* dar descanso. Rende itens de coleção.

### 12.5 O que o bestiário evita

| O quê | Por quê | Como |
|---|---|---|
| Nomes, visuais e combinações de criaturas de outros jogos e franquias (as criaturas de assinatura do Tibia, as protegidas como "identidade de produto" do D&D, como o beholder [NV]) | Risco de clone e de propriedade intelectual ([00-biblia](00-biblia.md), seção 3 e "Como isso pode dar errado") | Arquétipos de domínio público, nomes próprios e revisão de semelhança antes da arte |
| "Raça má por natureza" | O clichê de povos inteiros como vilões envelheceu mal e afasta jogadores [H] | Orcs e goblins são povos de Aldária; só os bandos tomados atacam, e todos podem ser purificados |
| Demônios, anjos e figuras sagradas de religiões vivas como inimigos | Risco de ofensa e de classificação etária ou de loja | A ameaça é a Névoa; os mortos-vivos são os mortos dos reinos de outrora, sem iconografia religiosa real |
| Gore gratuito | O pixel art legível não precisa dele | Derrotas mostradas por fuga, queda e dissipação da névoa |

## 13. Interfaces com outros módulos

| Para | O quê | Valor [H] |
|---|---|---|
| **06, 07, 08** | **Comida por hora de combate** | 1 refeição por combatente (o personagem e cada ajudante). O 06 conta 4: a reconciliar |
| | **Poções por hora** | ~3 na margem 0 (1 na +1; 8 na −1); × 2 sem refeição; × 0,7 com Druida no grupo; por vocação, de × 0,5 (Druida) a × 1,2 (Ladino) |
| | **Consumíveis vocacionais por hora** | Flechas: 1 feixe · pó arcano: 1 medida · ervas frescas: ~6 · ração de viagem: 1 (só nas trilhas do Ladino) |
| | Outros consumíveis | Óleos de arma, tônicos, antídotos, água de clareza, unguento de doninha: de 0 a 3 por hora, conforme as regras e a região |
| **05, 07, 08** | **Desgaste por hora** | A base do 05 (10 pontos por hora, × 1,5 em masmorra e Fronteira, × 2,0 no cerco, 3 reparos). Ajustes propostos: Cavaleiro × 1,5 na armadura e no escudo; Ladino × 1,5 nas botas; margem +1 × 0,6, margem −1 × 1,5; derrota −5 |
| | Cópias congeladas | Cerco: 40 pontos por peça no fechamento da inscrição. Masmorra: 15 pontos por peça e por corrida no compromisso |
| **05, 06, 07, 08** | **Drops por hora** | ~100 abates por hora, sozinho, na margem 0. Por abate de fera: pele 0,40 · carne 0,50 · matéria dura 0,25 · peçonha, resina e sementes 0,05 · cinza de névoa 0,02 (0,3 nas feras da Névoa) · achado 0,002. Por morto-vivo: cinza de névoa 0,5 · relíquia 0,05 · achado 0,006. Por corrompido abatido: cinza de névoa 3,0. Multiplicadores por vocação na seção 7.4. Pressão de caça tira até 50%. **Ouro: zero** (igual ao 07; o 05 e o 06 precisam se alinhar) |
| **05, 06** | Fauna por tier | Javali T1, lobo T2, urso T3, basilisco T4, serpe T5, dragão T6, como no 05; mais cervo (T1) e aranha gigante (T3–T4, peçonha e seda) |
| **07, 09** | **O que o cerco consome** (por 1.000 ativos, por semana) | ~8.000 provisões (refeições; revisão de consistência: D1) · ~12 kits da Guarda (mais os que faltarem) · ~1.000 tábuas, 500 lingotes e 200 blocos de pedra · ~214 peças Comuns-equivalentes de desgaste dos defensores · metade dos cintos reservados |
| **07, 09** | **Mérito do cerco** | 80 a 140 por defensor; fornecedor pelo preço de referência, 100% para produção própria e 50% para itens comprados, taxa pela metade acima de 300 por semana |
| **02** | XP | A curva de XP de vocação por hora de combate é do 02; este módulo assume XP igual para ausente e ativo e menor na margem negativa |
| **09** | Conselho | Horário do cerco (dentro de faixa), Rigor, plano de defesa (até 5 regras), Encomendas de cerco e de reparo |
| **10** | Live-ops | Um grande corrompido por ciclo; ameaça nova por Era (F_ref × 1,2); o dragão como chefe de Era; túneis goblins libertados; a Fronteira reusa as expedições |
| **12** | Onboarding | Modelos de regras; primeira expedição guiada (Bosque Raso); primeira purificação guiada (um goblin remendão) |
| **13** | Anti-abuso | Semente registrada e diário reproduzível; cargas com teto; baú pela metade fora da faixa; Mérito a 25% em item comprado (revisão de consistência: D10) |
| **14** | Arte e UI | Editor de regras por blocos; diário no Relatório da volta; barras de Vida e Névoa; veios de névoa nos corrompidos; as duas taxas (ausente 100%, ativa até 125%) |

## 14. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Glossário:** incluir *Regras* (os gatilhos de combate), *Plano B*, *Névoa da região*, *Pressão de caça* e *Lei da Cerva*, *Purificar* e *Abater*, *Arrancada*, *Encruzilhada*, *Presságio*, *Arsenal*, *Guarda da Cidade* e *Integridade*.
2. **[proposta de mudança na bíblia] Seção 3:** fixar três famílias de criaturas (feras, mortos-vivos e corrompidos), com a barra de Névoa só nos corrompidos (5.1), e registrar o princípio **"nenhum povo é mau por natureza"** (12.1).
3. **[proposta de mudança na bíblia] Seção 6.6** (com o 07): **o combate não solta ouro**, para alinhar o 05 e o 06.
4. **[proposta de mudança na bíblia] Seção 6.1:** o cerco se resolve em 2 h, num horário escolhido pelo Conselho dentro de uma faixa; a inscrição fecha 24 h antes, como já está.
5. **[proposta de mudança na bíblia] Seção 5:** registrar que **quem não se inscreve no cerco não luta e não pesa** no cálculo.
6. **[proposta de mudança na bíblia] Glossário, verbete Mérito:** incluir a **purificação de criaturas corrompidas** entre as fontes de Mérito, porque ela empurra a Névoa da região, que é um bem público.

## 15. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Regras viram programação** | O casual abre o editor, vê condições e prioridades e desiste. | Modelos prontos por vocação, editor por blocos, diário que mostra qual regra disparou e uma sugestão ("você usou 14 poções; experimente a regra X"). |
| **Simulação cara** | Milhares de expedições offline pesam na VPS. | Simulação por eventos (só nos instantes em que alguém age) e cálculo na volta, como no Melvor ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o desenho fica para a Fase 4. |
| **O ativo atropela o ausente** | As janelas ativas rendem tanto que perdê-las parece castigo. | Teto de +25%, cargas acumuláveis, "paciência da mata" exclusiva do ausente e medição no módulo 08. |
| **O ausente acorda com tudo parado** | Uma regra ruim faz a expedição parar às 2 h da manhã. | Plano B, reparo automático, conjunto reserva e mochila que nunca encerra a expedição. |
| **Bots na caça** | Contas farmam a mesma região 24 h por dia. | Pressão de caça regional, teto de emissão por conta, adulto verificado (P8), cargas com teto e detecção por padrão de fluxo ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| **Ninguém purifica** | Abater rende mais por hora e a purificação vira enfeite. | Mérito, dádiva, recuo da Névoa da região e cartas de ajudante; o módulo 08 iguala o valor por hora dos dois caminhos. |
| **Griefing com a pressão de caça** | Uma guilda esgota uma região para prejudicar outra. | O efeito máximo é −50%, a região descansa sozinha, a purificação da Cerva zera o problema e os Planos B espalham os caçadores. |
| **Cerco virar conta resolvida** | A comunidade descobre a composição ótima e o cerco perde a graça. | Presságio variável, ameaça nova por Era, Rigor, Clarões e tetos nos marcos. |
| **Cerco dominado por baleias ou por uma guilda** | Quem tem mais equipamento leva todo o Mérito. | Mérito comprimido (o mais forte ganha 1,7 vez o novato), PC medido contra um padrão e capacidade por posto. |
| **Espiral de derrotas** | A cidade perde, a Guarda enfraquece, a cidade perde de novo. | F_ref × 0,85 depois da Queda, Encomenda de reparo com Mérito × 1,5 e nenhuma perda de obra ou de bônus. |
| **Comprar Mérito com Coins** | Coins → ouro → itens → Arsenal → Mérito. | Item comprado vale 25% (revisão de consistência: D10), preço de referência do sistema e taxa pela metade acima de 300 por semana. |
| **Fuso horário** | O sábado às 20 h de Brasília exclui quem joga de outro fuso. | A defesa é assíncrona; os Clarões são um bônus pequeno; o Conselho pode mudar o horário dentro da faixa. |
| **Abuso da cópia congelada** | Inscrever-se com o melhor equipamento e vendê-lo em seguida. | Desgaste e cinto cobrados no momento do compromisso. |
| **Carregamento pago em masmorras** | Um jogador forte "carrega" um fraco em troca de ouro ou dinheiro. | Baú pela metade fora da faixa recomendada e detecção de padrões. |
| **Pico de carga no cerco** | O servidor inteiro olha o mesmo cerco no sábado à noite. | As cópias estão congeladas desde T−24 h, então o servidor pré-calcula a parte determinística; ao vivo, só os Clarões. [F] A infraestrutura que cai no dia do evento é o alerta do Pokémon GO em Chicago, 2017 ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 10). |
| **Bestiário genérico** | Orcs, goblins, esqueletos e dragões parecem os de qualquer jogo, e o vídeo de 10 segundos não diz nada. | A Névoa como fio comum (veios de névoa, purificar ou abater), lore própria para cada criatura (os remendões, a Tecelã, o troll da ponte) e mecânicas tiradas do arquétipo. |
| **Parecido demais com o Tibia** | Orc, troll, lobisomem e basilisco também existem lá, e o visual pode convergir. | Nomes e desenhos próprios, revisão de semelhança antes da arte e nenhuma referência visual de outro jogo no material de produção. |
| **Tropo de raça má** | Orcs e goblins viram "inimigos naturais" na comunicação, contra a regra 12.1. | A lore e os textos do jogo sempre falam de bandos tomados; a purificação devolve cada um ao seu povo; revisão de texto antes do lançamento. |

## Fontes

**Fichas e estudos do projeto:** [B01 Melvor Idle](../01-pesquisa/fichas/B01-melvor-idle.md), [B02 Legends of IdleOn](../01-pesquisa/fichas/B02-legends-of-idleon.md), [B03 Idle Champions](../01-pesquisa/fichas/B03-idle-champions.md), [B06 Tap Titans 2](../01-pesquisa/fichas/B06-tap-titans-2.md), [C01 Milky Way Idle](../01-pesquisa/fichas/C01-milky-way-idle.md), [D02 Shakes & Fidget](../01-pesquisa/fichas/D02-shakes-and-fidget.md), [00-sintese](../01-pesquisa/00-sintese.md), [02-padroes-matriz-leis](../01-pesquisa/02-padroes-matriz-leis.md), [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md). **Módulos paralelos:** [05-itens](05-itens.md), [06-oficios-e-coleta](06-oficios-e-coleta.md), [07-economia](07-economia.md).

**Fontes externas novas** (acessadas em novembro de 2026):
1. [Final Fantasy XII](https://en.wikipedia.org/wiki/Final_Fantasy_XII) — Wikipedia — sistema de gambits.
2. [Final Fantasy XII/Gambits](https://strategywiki.org/wiki/Final_Fantasy_XII/Gambits) — StrategyWiki — ordem de prioridade e casas.
3. [Milky Way Idle na Steam](https://store.steampowered.com/app/3224420/Milky_Way_Idle/) — oficial — combate com gatilhos (via [C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).
4. [Basilisk](https://en.wikipedia.org/wiki/Basilisk) — Wikipedia — Plínio, o Velho (*História Natural*), Isidoro de Sevilha e os bestiários medievais.
5. [Troll](https://en.wikipedia.org/wiki/Troll) — Wikipedia — com base em Kvideland e Sehmsdorf (2010), Orchard (1997) e MacCulloch (1930).
6. [Mare (folklore)](https://en.wikipedia.org/wiki/Mare_(folklore)) — Wikipedia — a mara germânica e eslava e a paralisia do sono.

**Lacunas:** os arquétipos da serpe, do verme, do cervo branco e do lobisomem estão como [NV] (conhecimento prévio, não conferido nesta fase); a lista de criaturas protegidas de outras franquias (D&D, Tibia) precisa de checagem jurídica e de semelhança antes da arte (validar com advogado, se houver parecer).
