# GDD 03 — Personagem: vocações, atributos, caminhos e ajudantes

> **Depende de:** [00-biblia](00-biblia.md). **Conversa com:** [04-combate](04-combate.md), [05-itens](05-itens.md), [06-oficios-e-coleta](06-oficios-e-coleta.md), `02-progressao`, `07-economia` e `11-monetizacao` (pontos marcados "a reconciliar").
> **Etiquetas:** [F] fato com fonte, [H] proposta do estúdio, [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**
> **Regra da casa:** um personagem por conta (Checkpoint 2). O personagem tem uma vocação ativa, dois ofícios mestres e os ajudantes que contratou.
> **Tema:** fantasia medieval clássica em pixel art, conforme a revisão da bíblia de 2026-11-11 (seção 9). Os números de itens (casas, tiers, qualidade, ritmo das armas e durabilidade) vêm do [05-itens](05-itens.md).

## 1. Resumo do módulo

O personagem é a soma de três identidades: **como luta** (a vocação), **o que produz** (os dois ofícios mestres) e **o que fez pela cidade** (o Mérito). As decisões centrais deste módulo:

1. **Quatro atributos** (Força, Destreza, Saber, Vigor) e poucos derivados, legíveis numa tela de celular.
2. **O poder vem de três donos diferentes:** a progressão pessoal (presa à conta), o equipamento (feito por outros jogadores, negociável e que se gasta) e os consumíveis (comida e poções, gastos por hora de combate). Nenhuma das três fontes basta sozinha.
3. **Cada vocação tem uma regra própria** (a mecânica-assinatura) e um **olhar de colheita**: a mesma fera rende coisas diferentes para cada vocação. A vocação decide o que você tira do mundo, e isso faz do combate mais um elo da cadeia de ofícios.
4. **Cada vocação é freguesa de ofícios diferentes.** O Cavaleiro gasta armadura, o Caçador gasta flechas, o Mago gasta pó arcano, o Druida gasta ervas frescas, o Ladino gasta ração de viagem.
5. **Três caminhos por vocação**, com bifurcações que mudam regras, e redistribuição barata, para que experimentar seja parte do jogo.
6. **Troca de vocação** permitida, com níveis guardados por vocação, espera de 7 dias e recuperação acelerada. A identidade pesa, mas não aprisiona.
7. **Ajudantes** são companheiros de combate, nunca filas extras: lutam ao lado do personagem, comem e gastam equipamento, preenchem masmorras quando falta gente e não produzem nada negociável.

## 2. Princípios do personagem

| # | Princípio | Por quê |
|---|---|---|
| PP1 | **Identidade combinada.** 5 vocações × 66 pares de ofícios mestres (12 escolhe 2) = 330 perfis possíveis. | [H] A interdependência só funciona se as pessoas forem diferentes umas das outras. Num servidor de 2 a 5 mil simultâneos, 330 perfis garantem que quase ninguém é igual ao vizinho ([00-biblia](00-biblia.md), 6.7). |
| PP2 | **Três fontes de poder com donos diferentes.** Pessoal (níveis, caminhos, regras), equipamento (de outros jogadores), consumíveis (de outros jogadores). | [F] No Diablo III, mais de 50% dos jogadores usavam o leilão com regularidade, e o diretor disse que isso prejudicou o jogo ([00-sintese](../01-pesquisa/00-sintese.md), insight 12). [H] Se o mercado decidir todo o poder, ele esvazia o jogo; se não decidir nada, ninguém compra. A meta é o meio-termo (seção 4.5). |
| PP3 | **O poder se decide antes de sair.** A build e as regras de combate são o plano do ausente. | [F] Lei 8, do plano ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)). O jogador se sente esperto pelo que preparou. |
| PP4 | **A vocação define o que você tira do mundo.** | [H] Nos idles estudados, o combate só consome. Aqui ele também abastece, e cada vocação abastece um ofício diferente (seção 7). |
| PP5 | **Nada de poder à venda.** Nem níveis, nem pontos de caminho, nem casas de regra, nem ajudantes. | Checkpoint 2 e P7 da [bíblia](00-biblia.md). [F] O IdleOn vende dano 1,5x e "+30% AFK gains", e a positividade caiu para 63% em 2026 ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)). |
| PP6 | **Arquétipo conhecido, regra própria.** As cinco vocações são as clássicas da fantasia; a diferença está na mecânica-assinatura e no papel econômico. | [H] O jogador entende "Cavaleiro" e "Mago" em um segundo, o que ajuda no celular e no vídeo curto. O risco de parecer clone do Tibia é tratado na seção 12. |

## 3. Atributos base

### 3.1 Os quatro atributos

| Atributo | Sigla | Para que serve |
|---|---|---|
| **Força** | FOR | Dano da espada. Chance de bloqueio. |
| **Destreza** | DES | Dano do facão e do arco. Crítico e esquiva. |
| **Saber** | SAB | Potência das magias e dos preparos, clareza (o dano contra a Névoa), efeito das poções usadas pelo Druida. |
| **Vigor** | VIG | Vida máxima, resistência a estados (medo, enleio, peçonha) e regeneração. |

[H] Quatro e não seis: cada atributo precisa mudar uma decisão. Um "Carisma" ou uma "Sorte" que só somam porcentagens pequenas viram ruído numa tela de celular. A sorte nos achados mora na vocação Ladino e nos caminhos, onde é uma escolha, não um número escondido.

### 3.2 Como os atributos crescem

- **Nível 1:** 5 pontos em cada atributo.
- **A cada nível de vocação (do 2 ao 100):** +2 pontos. **Um é fixo**, distribuído pelo perfil da vocação; **o outro é livre**.
- **No nível 100:** 20 + 99 fixos + 99 livres = 218 pontos.
- **Os atributos pertencem à ficha da vocação.** Quem troca de vocação encontra a ficha daquela vocação como deixou (seção 8).

| Vocação | Perfil do ponto fixo |
|---|---|
| Cavaleiro | FOR 50% · VIG 50% |
| Caçador | DES 60% · VIG 40% |
| Mago | SAB 60% · VIG 40% |
| Druida | SAB 50% · VIG 30% · DES 20% |
| Ladino | DES 60% · FOR 40% |

[H] **Quatro perguntas.** *Referência:* a metade fixa vem do crescimento por classe dos RPGs clássicos; a metade livre, dos pontos distribuíveis do Shakes & Fidget, que tem cinco atributos ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). *Problema:* com tudo livre, surgem builds quebradas ("tudo em DES"), que o meta copia; com tudo fixo, não há escolha. *Comportamento:* o jogador ajusta a metade livre conforme a região e o papel no grupo. *Risco:* uma distribuição ótima vira receita de wiki. Mitigação: a redistribuição é barata (seção 6.3), e as fraquezas das criaturas mudam por região, então não existe uma única distribuição ótima.

### 3.3 Atributos derivados (fórmulas)

| Derivado | Fórmula [H] | Observação |
|---|---|---|
| **Vida máxima (PV)** | `PV = 60 + 10 × VIG + 5 × nível` | O nível dá uma base para quem não investe em VIG. O 05 não dá PV às peças. |
| **Ataque (ATQ)** | `ATQ = atributo principal da arma × (1 + atributo do personagem / 100)` | O atributo principal da arma vem do [05-itens](05-itens.md), seção 4.3. O atributo do personagem é FOR na espada, DES no facão e no arco, SAB no cajado e no bordão. |
| **Defesa (DEF)** | soma da defesa das peças de armadura e do escudo (05, seção 4.3) | Uso no dano: [04-combate](04-combate.md), seção 4. |
| **Precisão** | secundário do arco e da aljava (05) | Soma no acerto. |
| **Crítico** | `chance = 5% + 0,1% × DES + secundário de crítico do facão` (máx. 50%); dano × 1,5 | O Ladino pode chegar a × 2,0 pelo caminho. |
| **Esquiva** | `0,1% × DES + secundário de esquiva da armadura média` (máx. 30%) | |
| **Bloqueio** | `secundário de bloqueio da espada e do escudo + 0,1% × FOR` (máx. 40%); o golpe bloqueado causa 30% do dano | Cavaleiro. |
| **Clareza (CLA)** | `CLA = (SAB + 0,5 × atributo principal do cajado ou do bordão) × (1 + Foco da armadura leve)` | Dano contra a barra de Névoa das criaturas corrompidas ([04-combate](04-combate.md), seção 5). |
| **Firmeza** | `0,2% × (VIG + SAB) + secundário de firmeza da armadura pesada` (máx. 50%) | Chance de resistir a um estado negativo. |
| **Ânimo** | começa a luta em 30, +10 por ação básica, máx. 100 | O recurso das habilidades. Zera entre lutas. |
| **Regeneração fora de luta** | 1% do PV por segundo; **2% com refeição** | É a principal razão de comer (seção 4.2). |

**Exemplo calculado — Cavaleiro nível 1:** FOR 5, VIG 5, sem armadura. `PV = 60 + 10 × 5 + 5 × 1 = 115`. Com uma espada de cobre (T1) Comum, de dano 10: `ATQ = 10 × (1 + 5/100) = 10,5`.

## 4. Como equipamento, comida e poções modificam o personagem

### 4.1 Equipamento: as seis casas do 05 e a casa da dádiva

As casas, as famílias de peça, os números por tier e a qualidade são do [05-itens](05-itens.md), seção 4. Este módulo usa esses números e propõe uma sétima casa.

| Casa | Cavaleiro | Caçador | Mago | Druida | Ladino |
|---|---|---|---|---|---|
| **Arma** | Espada (Ferraria) | Arco (Carpintaria) | Cajado de duas mãos (Carpintaria) | Bordão (Carpintaria) | Facão (Ferraria) |
| **Secundária** | Escudo (Carpintaria) | Aljava, leva até 300 flechas (Alfaiataria) | — (o cajado ocupa as duas mãos) | Bornal (Alfaiataria) | Lamparina (Ferraria) |
| **Cabeça, corpo, mãos, pés** | Armadura pesada (Ferraria) | Armadura média de couro (Alfaiataria) | Armadura leve de tecido (Alfaiataria) | Armadura leve | Armadura média |
| **Dádiva** (proposta) | Uma **dádiva** de uma criatura purificada: não é feita por ninguém, vem da purificação ([04-combate](04-combate.md), seção 5) e fica **presa à conta** | | | | |

**[proposta para o módulo 05]** Acrescentar a **casa da dádiva** às seis casas de combate.

[H] **Quatro perguntas sobre a casa da dádiva, presa à conta.** *Referência:* os itens presos à conta do Loot 2.0 do Diablo III ([00-sintese](../01-pesquisa/00-sintese.md), insight 3, e [G01](../01-pesquisa/fichas/G01-diablo-3-casa-de-leilao.md)). *Problema:* as seis casas negociáveis concentram o poder no mercado; uma casa pessoal garante que uma parte do poder vem da história do próprio jogador. *Comportamento:* purificar criaturas, e não só abatê-las. *Risco:* a dádiva certa vira obrigação. Mitigação: as dádivas são laterais (um efeito contra uma família de criaturas, uma resistência), e nenhuma vale mais que uma peça de tier acima.

**Qualquer vocação veste qualquer peça.** A vocação tem bônus de proficiência no seu tipo de armadura (seção 5). [H] Restringir por classe divide a demanda e esvazia livros na Bolsa e na Feira; liberar com bônus mantém a identidade sem fatiar o mercado.

**Números usados aqui** (do [05-itens](05-itens.md), seções 4 a 6):
- **Poder de item por tier:** `PI(T) = 10 × 1,6^(T − 1)`: 10, 16, 26, 41, 66 e 105, de T1 a T6. A arma tem atributo principal igual a um fator vezes o PI (espada 1,00; facão 0,85; arco 0,95; cajado 1,40; bordão 0,70 de dano e 0,60 de cura). A defesa das quatro peças de armadura é 3,0 × PI (pesada), 2,2 × PI (média) ou 1,5 × PI (leve); o escudo, 0,6 × PI.
- **Secundários** por família: bloqueio (espada e escudo), crítico (facão), precisão (arco e aljava), área (cajado), alívio (bordão), achados e visão na Névoa (lamparina), cura (bornal), firmeza (pesada), esquiva (média) e foco (leve).
- **Qualidade** multiplica principal e secundário: Comum × 1,00 · Bom × 1,08 · Fino × 1,16 · Obra-prima × 1,25.
- **Durabilidade e reparo:** as regras do 05 (120 pontos na peça Comum, 10 por hora de combate, 3 reparos com kits feitos por artesãos). A peça zerada fica inoperante até o reparo e só some no fim do ciclo de reparos ([00-biblia](00-biblia.md), 6.5). Os ajustes por vocação e por situação estão no [04-combate](04-combate.md), seção 8.

### 4.2 Comida: a refeição

- **Uma casa de refeição.** O personagem leva um prato por vez (Culinária).
- **Consumo:** 1 porção por hora de combate, por combatente. **O ajudante também come** (seção 9). Reconciliado: vale 1 refeição por combatente por hora, e o 06 foi alinhado (revisão de consistência: R1).
- **Efeito principal:** a regeneração fora de luta sobe de 1% para 2% do PV por segundo. É isso que separa uma expedição que dura a noite de uma que gasta o cinto de poções na primeira hora.
- **Efeito do prato:** +4 / +6 / +9 / +12 / +16 / +20 num atributo (T1 a T6), vezes o multiplicador de qualidade. Os pratos por tier são do 05 (caldo, ensopado, torta de caça, assado com ervas, guisado do castelo, festim real); cada receita escolhe o atributo, e algumas trocam o bônus por um efeito (resistência a peçonha, +ânimo inicial). Exemplos: ensopado de javali (FOR), truta na brasa (DES), caldo de cevada (VIG), torta de ervas (SAB).
- **Sem refeição:** nada de ruim acontece além de a regeneração ficar lenta. O personagem gasta cerca de duas vezes mais poções ([04-combate](04-combate.md), seção 8).

[H] **Quatro perguntas.** *Referência:* a comida com Auto Eat do Melvor, consumida quando a vida cai a 20% ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). *Diferença:* aqui a comida é sustento por hora, não cura de emergência; a emergência é a poção. Assim, Culinária e Alquimia vendem coisas diferentes e competem pela mesma decisão ("como me sustento"). *Problema:* comida que só cura vira apenas uma poção pior. *Comportamento:* demanda constante e previsível por Culinária e demanda de pico por Alquimia. *Risco:* a refeição virar imposto obrigatório. Mitigação: sem ela o jogo funciona, só custa mais poções; a escolha é qual consumível comprar.

### 4.3 Poções, óleos e unguentos: o cinto

- **O cinto** guarda os consumíveis de combate: **4 casas** no início, **6** no nível 30 de vocação e **8** no nível 60. Cada casa guarda uma pilha de um tipo. [F] O Milky Way Idle abre mais espaços de comida e bebida com o Giant Pouch, no nível total 750 ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)). Aqui as casas se conquistam pelo nível de vocação e nunca se vendem.
- **As regras de combate decidem quando usar** cada consumível ([04-combate](04-combate.md), seção 3).

| Consumível (Alquimia) | Efeito [H] |
|---|---|
| Poção de cura | Restaura 30% do PV (T1), +2 pontos percentuais por tier, até 40% (T6). |
| Tônico | +40 de ânimo na hora. |
| Antídoto | Remove peçonha e enleio. |
| Água de clareza | Remove os estados da Névoa (medo, desnorteio, enfeitiçado) e dá +20% de CLA por 20 s. |
| Óleo de arma | Por 300 golpes, a arma ganha uma afinidade (fogo, clareza, prata, lama). Contra a fraqueza certa, o dano sobe 50%. |
| Unguento de couro ou de metal | Por 4 horas de combate, a armadura perde 30% menos durabilidade. |

[H] O unguento troca demanda de Ferraria e Alfaiataria por demanda de Alquimia. O dreno total cai um pouco, e a simulação (08) precisa dizer se compensa; se não compensar, o efeito cai para 15%.

### 4.4 Exemplo completo — Caçador nível 30

- **Atributos:** 29 pontos fixos (60% DES, 40% VIG: 17 e 12) e 29 livres (20 em DES e 9 em VIG). Fica DES 42, VIG 26, FOR 5, SAB 5.
- **Equipamento** (números do 05): arco de carvalho (T3) Bom (dano 0,95 × 26 × 1,08 = 26,7; precisão 6% × 1,08 = 6,5%; um disparo a cada 2,5 s) e armadura média de couro de urso (T3) Bom nas quatro peças (defesa 2,2 × 26 × 1,08 ≈ 62; esquiva 6% × 1,08 = 6,5%).
- **Refeição:** truta na brasa T3 Comum (+9 DES).

| Derivado | Conta | Resultado |
|---|---|---|
| PV | 60 + 10 × 26 + 5 × 30 | **470** |
| ATQ | 26,7 × (1 + (42 + 9) / 100) | **40,3** |
| Crítico | 5% + 0,1% × 51 | **10,1%** |
| Precisão | | **6,5%** |
| Esquiva | 0,1% × 51 + 6,5% | **11,6%** |
| DEF | | **62** |
| Dano básico por segundo, antes da defesa do alvo | 40,3 × (1 + 0,101 × 0,5) / 2,5 | **≈ 16,9** |

A conta contra um alvo de verdade, com defesa e crítico, está no [04-combate](04-combate.md), seção 4.

### 4.5 O orçamento de poder

[H] Meta para o meio do jogo, medida na simulação (08) pela queda do índice de poder (dano por segundo × vida efetiva) quando se troca cada fonte pela base:

| Fonte | Parte do poder | Dono |
|---|---|---|
| Progressão pessoal (atributos, caminhos, regras, dádiva) | 30% a 45% | Presa à conta |
| Equipamento | 40% a 55% | Negociável, se gasta |
| Consumíveis (refeição, poções, óleos) | 10% a 20% | Negociável, consumido |

*Por quê:* abaixo de 40%, o equipamento não sustenta Ferraria, Carpintaria e Alfaiataria; acima de 55%, o mercado vira a principal fonte de poder, e o jogador que joga muito mas compra pouco se sente inútil (lei 14, do mercado complementar, em [02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)).

## 5. As cinco vocações

**Como ler cada ficha.** Toda vocação tem: a fantasia em uma frase; o papel em expedições, masmorras e cercos; os atributos; o que veste e de que ofícios é freguesa; o **olhar de colheita** (o multiplicador de drops por família de material, detalhado no [04-combate](04-combate.md), seção 7); a **mecânica-assinatura**; 6 habilidades ativas e 3 passivas no lançamento; e 3 caminhos (seção 6).

**Regras comuns às habilidades** [H]:
- As ativas abrem nos níveis de vocação 1, 5, 10, 20, 35 e 50; as passivas, nos níveis 15, 30 e 45. A ordem das tabelas não é a ordem de abertura, que fica para os módulos 02 e 12, com uma regra: até o nível 10, cada vocação já tem uma habilidade de cada função central (no Mago, uma de cada escola; no Mago e no Druida, uma de clareza).
- Toda habilidade conhecida fica disponível. Quem decide o uso são as **regras de combate** ([04-combate](04-combate.md), seção 3), e o limite real é o número de casas de regra, não uma barra de atalhos.
- Custo em ânimo e recarga em segundos. Potência em % do ATQ (ou da CLA, quando é clareza).

### 5.1 Cavaleiro

> *"Quem segura o portão quando a Névoa sobe."*

| Campo | |
|---|---|
| **Papel** | Expedição: lento e seguro, gasta poucas poções. Masmorra: frente, protege o grupo. Cerco: posto da Muralha. |
| **Atributos** | FOR e VIG |
| **Veste** | Espada; escudo; armadura pesada (proficiência: DEF +10%) |
| **Freguês de** | Ferraria (espada e armadura), Carpintaria (escudo). **A armadura e o escudo do Cavaleiro se desgastam 1,5 vez mais rápido.** |
| **Olhar de colheita** | Matéria dura × 1,6 (ossos, chifres, garras, escamas), que abastece a Carpintaria, a Ferraria e as obras |

**Mecânica-assinatura: Guarda e posturas.**
- **Guarda:** uma segunda barra, igual a 20% do PV, que absorve dano antes da vida. Começa cheia em cada luta e sobe 5% do PV a cada bloqueio.
- **Posturas:** *Firme* (dano recebido −20%, dano causado −20%), *Avante* (dano causado +15%, bloqueio −10 pontos percentuais) e *Escolta* (o Juramento vai sozinho para o aliado com menos vida; dano causado −10%). Trocar de postura é uma ação sem custo, com recarga de 5 s, e são as regras que decidem a troca (ex.: "quando houver 3 ou mais inimigos → Postura Firme").

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Golpe de escudo | 20 | 8 s | 120% do ATQ, atordoa 1 s, +5% do PV em Guarda |
| Brado | 30 | 20 s | Os inimigos atacam só o Cavaleiro por 6 s |
| Talho pesado | 40 | 6 s | 220% do ATQ |
| Juramento | 30 | 25 s | Liga-se a um aliado: 50% do dano que ele sofre vai para o Cavaleiro, por 12 s |
| Muralha | 50 | 40 s | Guarda dobra e DEF +30% por 10 s |
| Pé no chão | 20 | 30 s | Imune a medo, enleio e empurrão por 8 s |

**Passivas:** *Placa firme* (proficiência em armadura pesada) · *Ombro amigo* (aliados sofrem −5% de dano) · *Teimosia* (abaixo de 30% do PV, DEF +25%).

[H] **Quatro perguntas.** *Referência:* o tanque dos MMOs e a defesa por inscrição do Shakes & Fidget ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). *Diferença:* aqui o Cavaleiro é o melhor freguês do ferreiro (gasta mais armadura) e o eixo do cerco; no solo, é a vocação mais barata em poções. *Problema:* masmorras assíncronas precisam de alguém que absorva, e um tanque no solo costuma ser lento e chato. *Comportamento:* compra armadura com frequência, se inscreve nos cercos, vira referência na guilda. *Risco:* faltar Cavaleiro, como falta tanque nos MMOs [NV]. Mitigação: ajudante Cavaleiro, bônus para papel em falta nas masmorras ([04-combate](04-combate.md), seção 9) e custo de consumíveis menor, que compensa o desgaste.

### 5.2 Caçador

> *"Lê o rastro, conta as flechas e respeita a Cerva Antiga."*

| Campo | |
|---|---|
| **Papel** | Expedição: dano à distância constante, a melhor vocação de caça. Masmorra: dano num alvo. Cerco: Torres. |
| **Atributos** | DES e VIG |
| **Veste** | Arco; aljava; armadura média de couro (proficiência: DEF +10%) |
| **Freguês de** | Carpintaria (arco e **flechas: 1 feixe por hora de combate**, com pontas da Ferraria), Alfaiataria com Curtume (aljava e couro) |
| **Olhar de colheita** | Pele × 1,6, carne × 1,4, cinza de névoa × 0,8. É o Caçador que alimenta o Curtume ([00-biblia](00-biblia.md), 6.3) |

**Mecânica-assinatura: marca, abate limpo e caça de respeito.**
- **Marca:** o alvo marcado recebe +15% de dano do Caçador por 10 s.
- **Abate limpo:** quando o golpe final numa fera sai do arco, num alvo marcado, a fera rende **+50% de pele em quantidade**. A pele não ganha qualidade. [F] O FFXIV tirou a versão de alta qualidade dos materiais coletados por causa do inventário e manteve a qualidade só no crafting ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 7); o 05 segue a mesma regra ("insumos não têm qualidade").
- **Caça de respeito:** cada abate do Caçador conta 0,7 na **pressão de caça** da região ([04-combate](04-combate.md), seção 7.3, a Lei da Cerva).

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Marca | 10 | 4 s | Marca o alvo (+15% de dano do Caçador, 10 s) |
| Tiro certeiro | 40 | 6 s | 250% do ATQ, +20 pontos percentuais de crítico |
| Chuva de flechas | 45 | 15 s | 90% do ATQ em até 3 alvos |
| Tiro na perna | 25 | 10 s | 100% do ATQ e Lento por 6 s |
| Recuo | 20 | 20 s | Esquiva o próximo golpe; inimigos corpo a corpo perdem 1 ação |
| Disparo carregado | 60 | 25 s | 400% do ATQ, ignora 30% da DEF |

**Passivas:** *Olho de caçador* (+5 pontos de crítico com arco) · *Couro cru* (proficiência em armadura média) · *Caça de respeito*.

[H] **Quatro perguntas.** *Referência:* o caçador dos MMOs e o combate que consome comida e munição do Melvor ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). *Diferença:* aqui a caça abastece o Curtume e a Culinária, e o abate limpo premia a regra bem escrita (marcar antes de finalizar). *Problema:* o farm de peles é o que um bot faria. *Comportamento:* rodar entre regiões, ler a pressão de caça, negociar peles na Bolsa. *Risco:* o Caçador virar a única vocação de farm e o Curtume ficar refém de bots. Mitigação: todas as vocações tiram pele na base, a pressão de caça é regional e o teto de emissão negociável é por conta ([00-biblia](00-biblia.md), 6.6).

### 5.3 Mago

> *"Estudou as três escolas antigas e usa a luz delas para desfazer a Névoa."*

| Campo | |
|---|---|
| **Papel** | Expedição: dano em área contra bandos. Masmorra: controle. A vocação que melhor **purifica** criaturas corrompidas. Cerco: Torres. |
| **Atributos** | SAB e VIG |
| **Veste** | Cajado de duas mãos; armadura leve (proficiência: +5% de SAB) |
| **Freguês de** | Carpintaria (cajado), Alquimia (**pó arcano: 1 medida por hora de combate**), Alfaiataria com Tecelagem (armadura leve) |
| **Olhar de colheita** | Cinza de névoa × 1,8, pele e carne × 0,8 |

**Mecânica-assinatura: ressonância e lume.**
- **Ressonância.** As magias têm três escolas: *Terra* (controle), *Tempestade* (área) e *Luz* (clareza). Cada magia de escola diferente da anterior soma 1 de ressonância, até 3. Com 3, a magia seguinte sai em dobro e a ressonância zera. Repetir a escola zera também. [H] Num idle, o mago costuma "apertar o maior botão"; aqui a **ordem das regras** é o jogo do Mago.
- **Lume.** Com pó arcano no cinto, o Mago gasta 1 medida por hora e o grupo ganha +10% de CLA. Sem pó, o lume se apaga e nada mais acontece.

| Ativa | Escola | Ânimo | Recarga | Efeito |
|---|---|---|---|---|
| Enleio | Terra | 30 | 12 s | Raízes de pedra imobilizam até 3 inimigos por 3 s |
| Torpor | Terra | 35 | 20 s | Sono de 6 s num alvo; acorda com dano |
| Rajada | Tempestade | 30 | 4 s | 110% do ATQ em todos os inimigos e Lento por 3 s |
| Redemoinho | Tempestade | 55 | 18 s | 180% do ATQ em todos os inimigos |
| Clarão | Luz | 40 | 6 s | 200% da CLA na barra de Névoa e cega por 2 s |
| Eco | — | 25 | 15 s | Repete a última magia a 60%, sem quebrar a ressonância |

**Passivas:** *Voz firme* (Firmeza +10 pontos) · *Lume* · *Linho fino* (proficiência em armadura leve).

[H] **Quatro perguntas.** *Referência:* o mago de área e de controle; a formação como decisão no Idle Champions ([B03](../01-pesquisa/fichas/B03-idle-champions.md)). *Diferença:* as duas barras das criaturas corrompidas (Vida e Névoa) fazem do Mago quem escolhe purificar em vez de abater ([04-combate](04-combate.md), seção 5). *Problema:* magia de área sem decisão. *Comportamento:* escrever regras em sequência, buscar criaturas para purificar, comprar pó arcano da Alquimia. *Risco:* controle em cadeia travar inimigos para sempre na simulação. Mitigação: redução por repetição de controle e resistência dos chefes ([04-combate](04-combate.md), seção 6).

### 5.4 Druida

> *"Fala a língua das raízes: tira o remédio e o veneno da mesma folha."*

| Campo | |
|---|---|
| **Papel** | Expedição: lento, mas quase não gasta poções. Masmorra: cura e suporte. Purifica criaturas (em segundo lugar, depois do Mago). Cerco: Enfermaria. |
| **Atributos** | SAB, VIG e DES |
| **Veste** | Bordão; bornal; armadura leve (proficiência: +5% de SAB) |
| **Freguês de** | Colheita (**ervas frescas: cerca de 6 por hora de combate**), Alquimia (poções), Carpintaria (bordão), Alfaiataria (bornal e armadura leve) |
| **Olhar de colheita** | Peçonhas, resinas e sementes raras × 1,8 (as duas primeiras abastecem a Alquimia; as sementes, a Colheita); matéria dura × 0,8 |

**Mecânica-assinatura: preparo de campo, ervas frescas e peçonha.**
- **Preparo de campo:** toda poção que o Druida usa, nele ou num aliado, tem +30% de efeito. **Um Druida no grupo reduz o gasto de poções do grupo em cerca de 30%.** Ele troca demanda de Alquimia por demanda de Colheita, e é a vocação que mais mexe nessa balança.
- **Ervas frescas:** cada habilidade gasta 1 erva. Sem ervas, as habilidades saem a 60%.
- **Peçonha:** até 5 acúmulos; cada um causa `0,15 × SAB` de dano por segundo, por 8 s.

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Emplastro | 25 | 6 s | Cura 20% do PV de um aliado |
| Chá de raiz | 40 | 20 s | Cura 4% do PV por segundo no grupo, por 6 s |
| Peçonha | 20 | 3 s | 80% do ATQ e 2 acúmulos de peçonha |
| Pó de urtiga | 30 | 15 s | Inimigos com −20% de acerto por 6 s |
| Seiva pura | 35 | 8 s | 150% da CLA na barra de Névoa de uma criatura corrompida e remove um estado de um aliado |
| Frasco arremessado | 15 | 10 s | Arremessa um consumível do cinto: a poção cura todos a 60%, o óleo pega em todos |

**Passivas:** *Mão leve* (o preparo de campo) · *Conhecer a folha* (Firmeza +30 pontos contra peçonha) · *Bornal arrumado* (+1 casa no cinto).

[H] **Quatro perguntas.** *Referência:* o curandeiro e o druida dos RPGs de fantasia. *Diferença:* o Druida multiplica o que a Alquimia vende e consome o que a Colheita colhe. *Problema:* sem curador, a masmorra assíncrona vira um sorvedouro de poções. *Comportamento:* grupos procuram Druidas; o Druida compra ervas e vende o próprio serviço como "economia de poção". *Risco:* curador obrigatório. Mitigação: ajudante Druida e poções fortes cobrem a falta, e nenhuma masmorra exige um papel.

### 5.5 Ladino

> *"Vai na frente, volta com o mapa e com o que ninguém tinha visto."*

| Campo | |
|---|---|
| **Papel** | Expedição: críticos e achados raros. Masmorra: dano explosivo, desarma armadilhas. Cerco: **Vigia**, que revela o Presságio antes do cerco. Fronteira: abre o mapa. |
| **Atributos** | DES e FOR |
| **Veste** | Facão; lamparina (achados e visão na Névoa); armadura média (proficiência: esquiva +5 pontos) |
| **Freguês de** | Ferraria (facão e lamparina), Alfaiataria com Curtume (couro; **as botas do Ladino gastam 1,5 vez mais**), Culinária (**ração de viagem: 1 por hora** nas trilhas de Rastro fino e de Trilha funda) |
| **Olhar de colheita** | Achados × 2,5; todo o resto × 0,9 |

**Mecânica-assinatura: tino, trilhas e emboscada.**
- **Trilhas.** Na expedição, o Ladino escolhe o modo: *Varredura* (o padrão); *Rastro fino* (pula 30% dos encontros comuns e dobra a chance de achado por encontro: menos material, mais raridade); *Trilha funda* (vai mais longe: +50% de encontros de elite, a região conta +10 pontos de Névoa, achados × 1,5, mais risco).
- **Emboscada.** O primeiro golpe do Ladino em cada encontro é crítico.
- **Vigia.** A expedição de vigia rende pontos de vigia para o Presságio do cerco, e o Ladino rende o dobro ([04-combate](04-combate.md), seção 11.2).

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Corte duplo | 25 | 4 s | Dois golpes de 80% do ATQ |
| Lâmina no ponto | 40 | 8 s | 180% do ATQ, ignora 50% da DEF |
| Sumir nas sombras | 30 | 20 s | Esquiva +50 pontos por 5 s |
| Assobio | 20 | 15 s | O alvo perde a próxima ação |
| Olho vivo | 35 | 25 s | O grupo ganha +15 pontos de crítico por 8 s e vê a fraqueza do alvo |
| Arremesso | 15 | 6 s | 120% do ATQ à distância |

**Passivas:** *Pé leve* (proficiência em armadura média) · *Tino* (achados × 2,5; o nome evita confusão com o Faro das ferramentas de coleta, do [05-itens](05-itens.md)) · *Andarilho* (o caminho até a região leva 25% menos tempo).

[H] **Quatro perguntas.** *Referência:* o ladino e o batedor dos RPGs. *Diferença:* troca volume por raridade e dá à cidade a informação do cerco. Não há PvP: o Ladino rouba da Névoa, nunca de jogadores. *Problema:* o explorador puro não tem papel em grupo. *Comportamento:* expedições de vigia na semana do cerco, leitura do mapa, achados na Feira e no Leilão. *Risco:* achados raros viram torneira e alvo de bots. Mitigação: teto de emissão, chances publicadas, parte dos achados presa à conta e o "grau garantido" uma vez por dia, no máximo (seção 6.2).

## 6. Caminhos de build

### 6.1 Como funciona

- **Pontos de caminho:** 1 a cada 2 níveis de vocação (níveis 2, 4, …, 100), ou seja, **50 pontos no nível 100**.
- **Três caminhos por vocação, de 25 pontos cada.** Nos pontos 5, 15 e 25 de cada caminho há um **marco**, que é uma bifurcação: o jogador escolhe uma de duas opções. Entre os marcos, cada ponto dá +1% num número do tema do caminho.
- **Com 50 pontos**, cabe fechar dois caminhos inteiros e deixar um de fora, ou fechar um e abrir os outros dois até o segundo marco (25 + 15 + 10).
- **Os marcos mudam regras, não só números.** Cada caminho tem 8 versões (2 × 2 × 2), e a combinação de dois caminhos completos dá 192 builds por vocação, sem contar as divisões parciais.

[H] **Quatro perguntas.** *Referência:* a árvore de classes do IdleOn, com bônus que mudam a conta inteira ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)), e a lei 2, da regra nova ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)). *Diferença:* poucos nós, cada um uma escolha que se lê; nada de árvore de 200 nós com +0,5%. *Problema:* árvores grandes viram planilha, e as pequenas acabam rápido. *Comportamento:* testar combinações, comparar diários de expedição, discutir builds. *Risco:* um combo dominante. Mitigação: as fraquezas mudam por região e por Era, e a simulação mede a vantagem de cada marco.

### 6.2 Os caminhos de cada vocação

Cada célula mostra a opção A / a opção B do marco.

**Cavaleiro**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Muralha** | Defesa e cerco | *Guarda larga* (Guarda = 30% do PV) / *Guarda viva* (a Guarda regenera 2% por segundo em luta) | *Pedra do portão* (no posto Muralha do cerco, poder de cerco × 1,15) / *Casco* (bloqueia também magias e peçonha) | *Transbordo* (a Guarda que sobra no fim da luta cura o aliado mais ferido) / *Inabalável* (imune a atordoamento; Firmeza +20 pontos) |
| **Escolta** | Proteger o grupo | *Olho no grupo* (Juramento dura +6 s) / *Corpo na frente* (Brado reduz em 10% o dano de quem foi provocado) | *Juramento duplo* (liga-se a dois aliados) / *Revezamento* (uma vez por luta, toma no lugar do aliado o golpe que o derrubaria) | *Portão fechado* (enquanto houver Guarda, ninguém atinge a retaguarda) / *Mão estendida* (cada bloqueio cura 2% do PV do aliado ligado) |
| **Desforra** | Contra-ataque, solo | *Revide* (golpes bloqueados devolvem 40% do dano) / *Peso do braço* (Talho pesado +30%) | *Raiva mansa* (+4% de dano a cada 10% de PV perdido) / *Quebra-casco* (Golpe de escudo tira 20% da DEF do alvo por 6 s) | *Desforra* (depois de 3 bloqueios, o próximo Talho é crítico) / *Muro que anda* (Postura Avante sem perda de bloqueio) |

**Caçador**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Monteiro** | Caça e sustento | *Abate limpo+* (+75% de pele em vez de 50%) / *Fartura* (+30% de carne) | *Rastro frio* (cada abate conta 0,5 na pressão de caça, em vez de 0,7) / *Presente aceito* (o presente à Cerva Antiga vale por duas expedições) | *Pacto do monteiro* (com a pressão da região abaixo de 50%, +20% em todo drop de fera) / *Leitor de rastro* (encontros de fera grande, a elite, duas vezes mais frequentes) |
| **Atirador** | Chefes | *Marca funda* (Marca +25%) / *Fôlego de tiro* (Tiro certeiro com 2 s a menos de recarga) | *Ponto fraco* (críticos em alvos com ponto fraco causam × 2,0) / *Marca dupla* (dois alvos marcados) | *Flecha que não erra* (Disparo carregado não pode ser esquivado e acerta o ponto fraco) / *Cadência* (+3% de dano por golpe seguido no mesmo alvo, até 10 vezes) |
| **Armadilheiro** | Controle e área | *Laço* (Tiro na perna também enleia por 2 s) / *Estrepe* (Chuva de flechas deixa o chão com estrepes: Lento) | *Espreita* (o primeiro golpe de cada encontro causa × 2) / *Fojo* (uma armadilha por luta: o primeiro inimigo que avança fica atordoado por 3 s) | *Campo de estrepes* (no cerco, cada 1% dos inscritos com este marco tira 1% da força da primeira onda, até 10%) / *Rede* (Chuva de flechas atinge até 5 alvos) |

**Mago**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Purificador** | A Névoa | *Luz mansa* (o Clarão quase não fere a Vida: 10%) / *Lume forte* (aura de +20% de CLA) | *Desencanto* (CLA +40%) / *Promessa* (ao purificar uma criatura, o grupo recupera 25% do PV e 30 de ânimo) | *Manhã clara* (a barra de Névoa do alvo não se regenera) / *Farol* (no cerco, cada 1% dos inscritos com este marco tira 1% da força das ondas de corrompidos, até 10%) |
| **Tempestade** | Área | *Trovoada* (Rajada com +1 s de Lento) / *Vendaval* (Redemoinho com 6 s a menos de recarga) | *Remanso* (inimigos lentos sofrem +20% de dano) / *Ressaca* (com ressonância cheia, a magia atinge todos os inimigos) | *Olho da tempestade* (Redemoinho com ressonância cheia sai em triplo) / *Maré de força* (+5 de ânimo por inimigo atingido pela Rajada) |
| **Torpor** | Controle | *Sono pesado* (Torpor de 9 s) / *Raiz funda* (Enleio de 4 s) | *Canção de ninar* (o Torpor pula para outro alvo quando quebra) / *Prisão de pedra* (inimigos enleados sofrem +25 pontos de crítico) | *Ninar a maré* (no cerco, cada 1% dos inscritos com este marco tira 1% da força das duas primeiras ondas, até 10%) / *Dono do tempo* (controles não sofrem a redução por repetição contra feras) |

**Druida**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Curador** | Cura | *Repartir* (a poção usada pelo Druida também cura 50% no aliado mais ferido) / *Mão quente* (Emplastro +10 pontos) | *Enfermaria* (no cerco, a cobertura da Enfermaria conta em dobro) / *Ponto de apoio* (aliados abaixo de 30% do PV recebem +40% de cura) | *Ninguém fica* (uma vez por luta, impede a queda de um aliado) / *Botica de campo* (o grupo gasta 50% menos poções, em vez de 30%) |
| **Peçonheiro** | Dano no tempo | *Peçonha que corre* (o alvo que cai passa os acúmulos adiante) / *Dente fino* (até 7 acúmulos) | *Veneno de víbora* (o alvo envenenado cura 50% menos) / *Formigueiro* (Pó de urtiga põe 1 acúmulo em todos) | *Febre* (acúmulos causam o dobro em alvos atordoados ou enleados) / *Antídoto vivo* (o Druida é imune a peçonha e o grupo resiste a 50%) |
| **Bosque** | Purificar e cuidar da mata | *Seiva forte* (+30% de CLA na Seiva pura) / *Água limpa* (Água de clareza dura 40 s) | *Bosque são* (cada criatura purificada pelo grupo tira 10 pontos da pressão de caça da região) / *Bosque amigo* (em regiões com Névoa abaixo de 30, regeneração +50%) | *Orvalho* (ao purificar uma criatura, o grupo perde todos os estados negativos e fica imune por 10 s) / *Raiz e flor* (Seiva pura também cura 10% do PV do aliado mais ferido) |

**Ladino**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Explorador** | Exploração e Fronteira | *Atalho* (caminho até a região 50% mais curto) / *Lamparina acesa* (a visão na Névoa da lamparina vale para o grupo inteiro) | *Trilha aberta* (na Fronteira, revela o mapa duas vezes mais rápido) / *Vigia de longe* (pontos de vigia × 1,5) | *Guia do grupo* (na masmorra, o grupo evita a primeira armadilha e ganha uma Encruzilhada a mais) / *Rota de fuga* (recuar nunca custa desgaste extra, nem do chefe) |
| **Lâmina oculta** | Crítico | *Gume* (crítico × 1,75) / *Dois tempos* (Corte duplo com três golpes) | *Golpe de misericórdia* (crítico garantido em alvos abaixo de 25% do PV) / *Sangria* (críticos sangram 20% do dano em 4 s) | *Corte certo* (crítico × 2,0) / *Na sombra* (depois de Sumir nas sombras, os dois próximos golpes são críticos) |
| **Achador** | Achados | *Olho de achador* (achados +30%) / *Bolso fundo* (mochila +20%) | *Rastro fino+* (o Rastro fino pula 40% e multiplica os achados por 2,5) / *Relíquia* (achados de mortos-vivos dos reinos de outrora sobem um grau) | *Sorte de achador* (uma vez por dia, o primeiro achado raro sobe um grau) / *Mapa do tesouro* (1 em cada 20 achados é um mapa que abre uma Encruzilhada especial na expedição seguinte) |

[H] Os marcos de cerco (*Pedra do portão*, *Campo de estrepes*, *Farol*, *Ninar a maré*, *Enfermaria*) têm teto por cerco ([04-combate](04-combate.md), seção 11.4). Sem teto, a cidade inteira escolheria o mesmo marco e o cerco viraria uma conta resolvida.

### 6.3 Redistribuição e conjuntos

- **Redistribuir** atributos livres e pontos de caminho: grátis uma vez por dia; depois, `20 × nível da vocação` em ouro, destruído. Exemplo: no nível 50, a segunda redistribuição do dia custa 1.000 de ouro.
- **Conjuntos** (build + regras + equipamento salvos): 1 no início, o 2º no nível 20 de vocação e o 3º no nível 50. Trocar de conjunto é instantâneo fora de luta. O "conjunto reserva" do 05 (seção 6.5) usa a mesma casa.
- **Nada disso vai à loja.** [H] Proposta para o módulo 11: os conjuntos não entram no premium dos Coins, porque mexem na decisão do jogo, e não no conforto (a reconciliar).

[H] **Quatro perguntas.** *Referência:* o "respec" caro dos MMOs antigos, que congela o meta, contra o respec livre dos jogos de serviço. *Problema:* o caro pune quem experimenta; o grátis ilimitado faz o jogador trocar a cada luta, e a escolha perde o peso. *Comportamento:* experimentar uma vez por dia e se comprometer. *Risco:* a taxa virar um dreno irrelevante. Ela é pequena de propósito; o dreno de verdade está no desgaste.

## 7. Sinergias com os ofícios

### 7.1 O que cada vocação compra e o que entrega

| Vocação | Compra de (consumo por hora de combate, [H]) | Entrega (olhar de colheita) para |
|---|---|---|
| **Cavaleiro** | Ferraria e Carpintaria: armadura e escudo com **desgaste × 1,5**; refeição | Matéria dura (× 1,6) → Carpintaria, Ferraria, obras |
| **Caçador** | Carpintaria com Ferraria: **1 feixe de flechas**; Alfaiataria com Curtume: aljava e couro; refeição | Pele (× 1,6) → Curtume; carne (× 1,4) → Culinária |
| **Mago** | Alquimia: **1 medida de pó arcano**; Carpintaria: cajado; Tecelagem com Alfaiataria: armadura leve; refeição | Cinza de névoa (× 1,8) → Alquimia |
| **Druida** | Colheita: **~6 ervas frescas**; Alquimia: poções (com +30% de efeito); refeição | Peçonhas e resinas (× 1,8) → Alquimia; sementes raras → Colheita |
| **Ladino** | Culinária: **1 ração de viagem** (nas trilhas de Rastro fino e Trilha funda); Ferraria: facão e lamparina; Curtume com Alfaiataria: botas com **desgaste × 1,5**; refeição | Achados (× 2,5) → Feira e Leilão, obras, moldes para os ofícios |

**Checagem de cobertura** [H]: todo ofício tem pelo menos um freguês vocacional. Mineração e Fundição vendem por meio da Ferraria (armas, armaduras, pontas de flecha, lamparinas); Lenhadoria, por meio da Carpintaria (escudo, arco e flechas, cajado, bordão); Pesca, Colheita e Culinária, pela refeição de todos; Curtume e Tecelagem, pelas armaduras médias e leves; Alquimia, pelas poções de todos e pelo pó arcano do Mago.

**[conflito a reconciliar com o 05]** O 05 (seção 4.1) propõe como consumível do Cavaleiro o óleo de arma e como consumível do Druida o unguento. Este módulo propõe **desgaste × 1,5** para o Cavaleiro (a identidade dele é gastar armadura) e **ervas frescas** para o Druida (dá à Colheita um freguês direto no combate, enquanto a Alquimia já vende poções, pó arcano, óleos e unguentos para todos). Óleo e unguento continuam no cinto de qualquer vocação.

### 7.2 Sem combinação obrigatória entre vocação e ofício

**Decisão:** não há bônus por combinar uma vocação com um ofício mestre específico (por exemplo, Caçador com Curtume). A sinergia existe por si só: o Caçador curtidor pode curtir a pele que caçou, mas não ganha um multiplicador por isso.

[H] **Quatro perguntas.** *Referência:* os "combos de profissão" dos MMOs, que viram build obrigatória. *Problema:* com bônus, todo Caçador seria curtidor, os 330 perfis encolheriam para cinco e a especialização viraria autossuficiência. *Comportamento:* o Caçador que não é curtidor vende pele na Bolsa, e o curtidor que não caça compra. É exatamente o mercado que o jogo quer. *Risco:* parecer que vocação e ofício "não conversam". Mitigação: o olhar de colheita e o consumo vocacional já fazem essa conversa pelo mercado, que é onde ela deve acontecer.

## 8. Troca de vocação

### 8.1 Regras

| Regra | Valor [H] |
|---|---|
| Vocações ativas | Uma por vez |
| Progresso | **Guardado por vocação**: nível, atributos, caminhos, regras e conjuntos ficam na ficha de cada vocação |
| Primeira escolha | No primeiro combate do tutorial |
| Fase de experimentar | Troca grátis e sem espera até o nível 10 da primeira vocação |
| Depois disso | A primeira troca é grátis; as seguintes custam uma **taxa em ouro, destruída**, perto de um dia de renda de um jogador mediano (a calibrar nos módulos 07 e 08) |
| Espera entre trocas | **7 dias** |
| Bloqueios | Não se troca com inscrição de cerco já fechada (de T−24 h até o fim do cerco), com masmorra comprometida nem com inscrição em assalto a chefe |
| Recuperação | **XP × 2** na vocação nova até ela chegar a 50% do nível da vocação mais alta do personagem |
| O que não muda | Ofícios, Mérito, ajudantes, inventário, equipamento e dádivas |
| Campo de treino | Qualquer vocação pode ser testada numa ficha pronta de nível 20, contra bonecos, sem trocar |

**Exemplo:** um Caçador nível 80 troca para Cavaleiro. O Cavaleiro começa no nível 1 com XP em dobro até o nível 40. A partir daí, a XP volta ao normal. Se ele voltar ao Caçador depois de 7 dias, encontra o nível 80, a build e as regras como deixou, e paga a taxa.

### 8.2 Por que assim

[H] **Quatro perguntas.** *Referência:* o FFXIV deixa trocar de job a qualquer momento ao trocar a arma [NV: conhecimento prévio, não conferido nesta fase]; a maioria dos idles prende a classe ao personagem. *Problema:* com um personagem por conta, uma classe presa para sempre gera arrependimento e abandono; uma classe trocada a cada luta apaga a identidade e o papel social ("o Druida da guilda"). *Comportamento:* experimentar no começo, se comprometer depois e voltar a experimentar por um custo. *Risco:* trocar para a vocação do meta na véspera de cada cerco. Mitigação: a espera de 7 dias e o bloqueio a partir do fechamento da inscrição; a fraqueza do cerco só aparece aos poucos ([04-combate](04-combate.md), seção 11.2), e não dá tempo de trocar e subir a vocação nova.

## 9. Ajudantes

### 9.1 O que são

Ajudantes são **companheiros NPC** com nome, história e vocação (uma das cinco). São **contratados na Cidade**, **presos à conta** e **não negociáveis** ([00-biblia](00-biblia.md), glossário). Se o personagem for vendido no Bazar de Personagens, eles vão junto, porque a unidade é a conta.

### 9.2 O que fazem e o que não fazem

| Fazem | Não fazem |
|---|---|
| Lutam ao lado do personagem em **expedições** e **masmorras** | **Não abrem fila.** Nunca fazem uma atividade sozinhos, em paralelo ao personagem |
| Preenchem vagas vazias nas masmorras assíncronas | **Não coletam, não produzem e não vão ao mercado** |
| Seguem regras próprias (3 casas, com modelos prontos) | **Não lutam no cerco** (seção 9.6) |
| Comem (1 porção por hora) e gastam o próprio equipamento | Não levam parte do saque e não contam para o bônus de grupo |
| Têm laço com o personagem e capítulos de história | Não se vendem, nem por Coins nem por ouro na loja |

### 9.3 Como se contratam

- **A primeira ajudante é grátis**, na primeira hora de jogo: uma curandeira, Druida aprendiz, que cuida do novato (nome e história no módulo 12).
- **Os seguintes exigem uma carta de contratação**, conquistada jogando:
  - marcos de Mérito (ex.: 500 e 2.000 de Mérito);
  - níveis de vocação (20, 40 e 60);
  - purificação de grandes corrompidos: quem foi salvo da Névoa apresenta um companheiro ([04-combate](04-combate.md), seção 10).
- **Com a carta, paga-se uma taxa de contratação em ouro, destruída** (a calibrar no módulo 07).
- **Aparências** de ajudante são cosméticas e podem estar no Baú Misterioso e na loja, como a bíblia já prevê (Checkpoint 2). O ajudante, nunca.

### 9.4 Limites

| Limite | Valor [H] |
|---|---|
| Ajudantes ativos ao mesmo tempo | **1** no início; **2** a partir do nível 40 de vocação |
| Grupo máximo de expedição | Personagem + 2 ajudantes |
| Elenco contratado | Até 6 |
| Nível do ajudante | Sobe com o uso. Teto: o nível da vocação ativa do personagem − 5 |
| Caminho | Um caminho fixo de 25 pontos, escolhido na contratação |
| Casas de regra | 3; +1 no laço 3 e +1 no laço 5 (máx. 5) |
| Equipamento | 2 casas (arma e corpo); desgaste a 50% da taxa do personagem |
| Força relativa | Cerca de 70% de um jogador com o mesmo nível e equipamento (menos regras, um caminho só) |

### 9.5 Laço

O laço vai de 1 a 5 e sobe com as horas de expedição juntos e com as Encruzilhadas resolvidas ([04-combate](04-combate.md), seção 10). Cada nível abre um capítulo de história e, nos níveis 3 e 5, uma casa de regra; no 5, também uma passiva pessoal do ajudante. [H] O laço é progressão presa à conta e conteúdo narrativo barato: dá apego sem dar poder comprável.

### 9.6 Por que não lutam no cerco

[H] O cerco é o momento cívico do jogo: um adulto verificado, um defensor ([00-biblia](00-biblia.md), P8). Se os ajudantes lutassem, quem tem mais ajudantes defenderia mais, e "um adulto, um personagem" viraria "um adulto, três combatentes". A parte NPC do cerco é a **Guarda da Cidade**, que pertence à cidade e é equipada com o que a cidade produz ([04-combate](04-combate.md), seção 11.3).

### 9.7 Efeito econômico

[H] Dois ajudantes deixam a expedição 40% a 60% mais rápida em abates (estimativa a validar no módulo 08). Mas triplicam o consumo de refeição e somam o desgaste de duas armas e duas armaduras. O ganho líquido existe, e o custo vai para os ofícios de outros jogadores. **Ir sozinho é mais barato e mais lento; ir com ajudantes é mais caro e mais rápido.** É uma decisão, não uma obrigação.

### 9.8 Quatro perguntas

[H] *Referência:* os retainers do FFXIV e os seguidores das garrisons do WoW ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 12). *Diferença:* lá, o retainer faz missões sozinho e traz itens, o que é uma fila extra. Aqui, o ajudante só acompanha. E os familiares vendidos do Idle Champions, que automatizam o jogo, geram queixa de pay-to-win ([B03](../01-pesquisa/fichas/B03-idle-champions.md)); aqui, nada disso é vendido. *Problema:* com um personagem por conta, o jogador solitário fica sem grupo e as masmorras assíncronas ficam sem gente na madrugada. *Comportamento:* apego, consumo extra e a busca por jogadores de verdade por causa do bônus de grupo ([04-combate](04-combate.md), seção 9). *Risco:* o ajudante virar um personagem alternativo disfarçado. Mitigação: nunca abre fila, nunca produz e nunca negocia.

## 10. Interfaces com outros módulos

| Módulo | O que precisa deste |
|---|---|
| **02 — Progressão** | Curva de XP de vocação de 1 a 100; pontos de caminho (1 a cada 2 níveis); níveis de abertura de habilidades, casas do cinto (4/6/8) e casas de regra; XP × 2 de recuperação na troca de vocação |
| **04 — Combate** | Atributos, derivados e fórmulas (seção 3); mecânicas-assinatura; ajudantes em expedições e masmorras |
| **05 — Itens** | A casa da dádiva como sétima casa; proficiências por tipo de armadura; desgaste × 1,5 na armadura e no escudo do Cavaleiro e nas botas do Ladino; o conflito sobre os consumíveis do Cavaleiro e do Druida (seção 7.1) |
| **06 — Ofícios** | Consumíveis vocacionais: feixe de flechas (Carpintaria com Ferraria), pó arcano (Alquimia), ervas frescas (Colheita), ração de viagem (Culinária); refeições com bônus de atributo; famílias de material do olhar de colheita (matéria dura, pele, carne, cinza de névoa, peçonha e resina, sementes, achados); consumo de refeição de 1 por hora (o 06 conta 4) |
| **07 — Economia** | Drenos deste módulo: redistribuição (`20 × nível` em ouro a partir da segunda do dia), taxa de troca de vocação, taxa de contratação de ajudante; consumo dos ajudantes (refeição e desgaste) |
| **09 — Social** | Marcos de Mérito que dão cartas de contratação; papel de cada vocação no cerco |
| **11 — Monetização** | Fora da loja: níveis, pontos de caminho, casas de regra e do cinto, conjuntos, ajudantes e cartas de contratação. Na loja, só aparências |
| **12 — Onboarding** | Escolha de vocação no primeiro combate; fase de experimentar até o nível 10; primeira ajudante grátis; campo de treino |

## 11. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Glossário:** incluir **Dádiva** (item preso à conta dado por uma criatura purificada; ocupa a casa da dádiva) e **Caminho** (especialização dentro da vocação, com marcos).
2. **[proposta de mudança na bíblia] Seção 6.4:** acrescentar a cada vocação o seu consumível (Cavaleiro: desgaste × 1,5 na armadura; Caçador: flechas; Mago: pó arcano; Druida: ervas frescas; Ladino: ração de viagem), para que os módulos 05, 06 e 07 contem com essa demanda.
3. **[proposta de mudança na bíblia] Seção 5:** registrar como decisão que **ajudantes não abrem fila, não produzem, não negociam e não lutam no cerco**.

## 12. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Build única** | Uma combinação de caminhos domina, a wiki publica e todo mundo copia. | Marcos que mudam regras, fraquezas que variam por região e por Era, redistribuição barata e medição da vantagem de cada marco na simulação. |
| **Vocação de farm** | Uma vocação rende muito mais valor por hora e vira a escolha de quem farma (e dos bots). | O olhar de colheita espalha o valor por famílias de material diferentes; meta de valor por hora dentro de ±10% entre vocações, medida no módulo 08. |
| **Papel em falta** | Ninguém quer ser Cavaleiro ou Druida e as masmorras travam. | Ajudantes com essas vocações, bônus para papel em falta e nenhuma masmorra que exija um papel. |
| **Ajudante como alt** | Com o tempo, alguém propõe dar uma tarefa ao ajudante, e ele vira uma fila extra. | Decisão registrada na bíblia (proposta 3); qualquer mudança passa pela regra de que filas extras não se vendem nem se multiplicam. |
| **Poder comprável** | Casas de regra, conjuntos ou ajudantes entram no premium dos Coins. | Lista explícita do que nunca vai à loja (seção 10, linha do 11). |
| **Cinco estoques para cuidar** | Flechas, pó arcano, ervas, ração, refeição e poções viram uma lista de compras chata. | Nada trava: sem o consumível vocacional, a habilidade sai a 60% ou o lume se apaga. Avisos de estoque, ordem de compra na Bolsa e reposição pelo armazém. |
| **Excesso de regras para o novato** | Posturas, ressonância, peçonha e trilhas assustam no primeiro dia. | Modelos de regras prontos por vocação; as mecânicas-assinatura abrem por nível; o editor de regras vem no módulo 14. |
| **Meta-hopping no cerco** | O servidor troca de vocação conforme a fraqueza revelada. | Espera de 7 dias, bloqueio desde o fechamento da inscrição e revelação gradual do Presságio. |
| **Orçamento de poder errado** | O equipamento explica 80% do poder e o mercado decide tudo, ou 20% e ninguém compra. | Meta de 40% a 55% para o equipamento, medida na simulação antes do alfa (seção 4.5). |
| **Parecido demais com o Tibia** | Cavaleiro, Druida e Mago lembram as vocações do Tibia, e o jogo parece cópia. | Mecânicas-assinatura próprias (Guarda e posturas, ressonância, preparo de campo, tino e trilhas), papel econômico de cada vocação, nomes de habilidades e caminhos próprios e revisão de semelhança antes da arte ([00-biblia](00-biblia.md), "Como isso pode dar errado"). |
| **Clichê de fantasia** | "Cavaleiro, Caçador, Mago, Druida, Ladino" não diz nada de novo no vídeo de 10 segundos. | A novidade está no que a vocação faz pela cidade (o Ladino que revela o cerco, o Druida que economiza poções, o Cavaleiro que gasta armadura) e no purificar contra abater; é isso que o marketing mostra. |

## Referências deste módulo

- Bíblia e conceito: [00-biblia](00-biblia.md), [02-conceito](../02-conceito.md).
- Módulos paralelos: [05-itens](05-itens.md) (casas, tiers, qualidade, durabilidade, consumíveis de vocação), [06-oficios-e-coleta](06-oficios-e-coleta.md).
- Pesquisa: [00-sintese](../01-pesquisa/00-sintese.md) (insights 3, 12, 13, 16); [02-padroes-matriz-leis](../01-pesquisa/02-padroes-matriz-leis.md) (leis 2, 8, 10, 14); [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md) (seções 7 e 12).
- Fichas: [B01 Melvor Idle](../01-pesquisa/fichas/B01-melvor-idle.md) (Auto Eat, consumíveis de combate), [B02 Legends of IdleOn](../01-pesquisa/fichas/B02-legends-of-idleon.md) (árvore de classes, venda de poder), [B03 Idle Champions](../01-pesquisa/fichas/B03-idle-champions.md) (formação, familiares vendidos), [C01 Milky Way Idle](../01-pesquisa/fichas/C01-milky-way-idle.md) (gatilhos, Giant Pouch), [D02 Shakes & Fidget](../01-pesquisa/fichas/D02-shakes-and-fidget.md) (atributos distribuíveis, guerra com inscrição), [G01 Diablo III](../01-pesquisa/fichas/G01-diablo-3-casa-de-leilao.md) (itens presos à conta).
- O bestiário (a Cerva Antiga, as criaturas corrompidas) e as fontes dos arquétipos estão no [04-combate](04-combate.md), seção 12.
