# GDD 03 — Personagem: vocações, atributos, caminhos e ajudantes

> **Depende de:** [00-biblia](00-biblia.md). **Conversa com:** [04-combate](04-combate.md), `02-progressao`, `05-itens`, `06-oficios-e-coleta`, `07-economia` e `11-monetizacao` (pontos marcados "a reconciliar").
> **Etiquetas:** [F] fato com fonte, [H] proposta do estúdio, [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**
> **Regra da casa:** um personagem por conta (Checkpoint 2). O personagem tem uma vocação ativa, dois ofícios mestres e os ajudantes que contratou.

## 1. Resumo do módulo

O personagem é a soma de três identidades: **como luta** (a vocação), **o que produz** (os dois ofícios mestres) e **o que fez pela cidade** (o Mérito). As decisões centrais deste módulo:

1. **Quatro atributos** (Força, Destreza, Saber, Vigor) e poucos derivados, legíveis numa tela de celular.
2. **O poder vem de três donos diferentes:** a progressão pessoal (presa à conta), o equipamento (feito por outros jogadores, negociável e que se gasta) e os consumíveis (comida e poções, gastos por hora de combate). Nenhuma das três fontes basta sozinha.
3. **Cada vocação tem uma regra própria** (uma mecânica-assinatura) e um **olhar de colheita**: o mesmo bicho rende coisas diferentes para cada vocação. A vocação decide o que você tira do mundo, e isso faz do combate mais um elo da cadeia de ofícios.
4. **Cada vocação é freguesa de ofícios diferentes.** O Guardião gasta armadura, o Caçador gasta flechas, o Encantador gasta óleo de lamparina, o Erveiro gasta ervas frescas, o Batedor gasta tochas.
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

## 3. Atributos base

### 3.1 Os quatro atributos

| Atributo | Sigla | Para que serve |
|---|---|---|
| **Força** | FOR | Dano de armas pesadas (espada, maça, machado, facão). Chance de bloqueio com escudo. |
| **Destreza** | DES | Dano de armas leves e de arcos. Crítico e esquiva. |
| **Saber** | SAB | Potência dos cantos e dos preparos, clareza (o dano contra a Bruma), efeito das poções usadas pelo Erveiro. |
| **Vigor** | VIG | Vida máxima, resistência a estados (medo, enleio, peçonha) e regeneração. |

[H] Quatro e não seis: cada atributo precisa mudar uma decisão. Um "Carisma" ou uma "Sorte" que só somam porcentagens pequenas viram ruído numa tela de celular. A sorte nos achados mora na vocação Batedor e nos caminhos, onde é uma escolha, não um número escondido.

### 3.2 Como os atributos crescem

- **Nível 1:** 5 pontos em cada atributo.
- **A cada nível de vocação (do 2 ao 100):** +2 pontos. **Um é fixo**, distribuído pelo perfil da vocação; **o outro é livre**.
- **No nível 100:** 20 + 99 fixos + 99 livres = 218 pontos.
- **Os atributos pertencem à ficha da vocação.** Quem troca de vocação encontra a ficha daquela vocação como deixou (seção 8).

| Vocação | Perfil do ponto fixo |
|---|---|
| Guardião | FOR 50% · VIG 50% |
| Caçador | DES 60% · VIG 40% |
| Encantador | SAB 60% · VIG 40% |
| Erveiro | SAB 50% · VIG 30% · DES 20% |
| Batedor | DES 60% · FOR 40% |

[H] **Quatro perguntas.** *Referência:* a metade fixa vem do crescimento por classe dos RPGs clássicos; a metade livre, dos pontos distribuíveis do Shakes & Fidget, que tem cinco atributos ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). *Problema:* com tudo livre, surgem builds quebradas ("tudo em DES"), que o meta copia; com tudo fixo, não há escolha. *Comportamento:* o jogador ajusta a metade livre conforme a região e o papel no grupo. *Risco:* uma distribuição ótima vira receita de wiki. Mitigação: a redistribuição é barata (seção 6.3), e as fraquezas dos assombrados mudam por região, então não existe uma única distribuição ótima.

### 3.3 Atributos derivados (fórmulas)

| Derivado | Fórmula [H] | Observação |
|---|---|---|
| **Vida máxima (PV)** | `PV = 60 + 10 × VIG + 5 × nível + PV do equipamento` | O nível dá uma base para quem não investe em VIG. |
| **Ataque (ATQ)** | `ATQ = dano da arma × (1 + atributo da arma / 100)` | O atributo da arma é FOR nas pesadas, DES nas leves e nos arcos, SAB nos cajados e nas lanternas. |
| **Defesa (DEF)** | soma da DEF das peças de armadura e da secundária | Uso no dano: ver [04-combate](04-combate.md), seção 4. |
| **Crítico** | `chance = 5% + 0,1% × DES` (máx. 50%); dano × 1,5 | O Batedor pode chegar a × 2,0 pelo caminho. |
| **Esquiva** | `0,1% × DES + bônus da armadura` (leve 5%, média 3%, pesada 0%; máx. 30%) | |
| **Bloqueio** (com escudo) | `15% + 0,1% × FOR` (máx. 40%); o golpe bloqueado causa 30% do dano | Só com escudo na secundária. |
| **Clareza (CLA)** | `CLA = SAB + clareza do foco` | Dano contra a barra de Bruma dos encantados ([04-combate](04-combate.md), seção 5). |
| **Firmeza** | `0,2% × (VIG + SAB)` (máx. 50%) | Chance de resistir a um estado negativo. |
| **Ânimo** | começa a luta em 30, +10 por ação básica, máx. 100 | O recurso das habilidades. Zera entre lutas. |
| **Regeneração fora de luta** | 0,5% do PV por segundo; **2% com refeição** | É a principal razão de comer (seção 4.2). |

**Exemplo calculado — Guardião nível 1:** FOR 5, VIG 5, sem equipamento. `PV = 60 + 10 × 5 + 5 × 1 = 115`. Com uma espada T1 Comum (dano 10): `ATQ = 10 × (1 + 5/100) = 10,5`.

## 4. Como equipamento, comida e poções modificam o personagem

### 4.1 Equipamento: seis casas

| Casa | O que vai nela | Quem faz (a reconciliar com 05 e 06) |
|---|---|---|
| **Arma** | Espada, maça, machado, facão, arco, cajado, bordão | Ferraria (metal), Carpintaria (arcos, cajados, cabos) |
| **Secundária** | Escudo, aljava, lanterna, bornal, segunda faca | Carpintaria (escudo, aljava), Ferraria (lanterna, faca), Alfaiataria (bornal) |
| **Cabeça** | Elmo, chapéu de couro, lenço | Ferraria (pesada), Alfaiataria (média e leve) |
| **Corpo** | Couraça, gibão de couro, veste | Ferraria (pesada), Alfaiataria com Curtume (média) e com Tecelagem (leve) |
| **Pés** | Botas, alpercatas | Alfaiataria com Curtume |
| **Amuleto** | Uma **dádiva** de um encantado libertado | Ninguém: vem da libertação ([04-combate](04-combate.md), seção 5) e fica **presa à conta** |

[H] **Quatro perguntas sobre o amuleto preso à conta.** *Referência:* os itens presos à conta do Loot 2.0 do Diablo III ([00-sintese](../01-pesquisa/00-sintese.md), insight 3, e [G01](../01-pesquisa/fichas/G01-diablo-3-casa-de-leilao.md)). *Problema:* as cinco casas negociáveis concentram o poder no mercado; uma casa pessoal garante que uma parte do poder vem da história do próprio jogador. *Comportamento:* libertar encantados, e não só dispersá-los. *Risco:* a dádiva certa vira obrigação. Mitigação: as dádivas são laterais (um efeito contra uma família de assombrados, uma resistência), e nenhuma vale mais que uma peça de tier acima.

**Qualquer vocação veste qualquer peça.** A vocação tem bônus de proficiência no seu tipo de armadura (seção 5). [H] Restringir por classe divide a demanda e esvazia livros na Bolsa e na Feira; liberar com bônus mantém a identidade sem fatiar o mercado.

**Números de referência por tier** [H], a reconciliar com o módulo 05:

| Tier | Dano da arma | DEF do conjunto (armadura média) | PV do conjunto |
|---|---|---|---|
| T1 | 10 | 12 | 20 |
| T2 | 18 | 22 | 35 |
| T3 | 30 | 36 | 55 |
| T4 | 48 | 56 | 80 |
| T5 | 72 | 84 | 110 |
| T6 | 105 | 120 | 150 |

- Armadura **pesada**: DEF × 1,4, sem esquiva. Armadura **leve**: DEF × 0,7, esquiva +5% e +SAB por tier (+2 por tier).
- **Qualidade** multiplica os números da peça: Comum × 1,00 · Bom × 1,08 · Fino × 1,16 · Obra-prima × 1,30.
- **Desgaste:** abaixo de 20% de durabilidade, a peça perde 15% dos números; a 0% fica **avariada** e não dá nada até o reparo. Ela só some pelo ciclo de reparos ([00-biblia](00-biblia.md), 6.5). As taxas por hora estão no [04-combate](04-combate.md), seção 8.

### 4.2 Comida: a refeição

- **Uma casa de refeição.** O personagem leva um prato por vez (Culinária).
- **Consumo:** 1 porção por hora de combate, por combatente. **O ajudante também come** (seção 9).
- **Efeito principal:** a regeneração fora de luta sobe de 0,5% para 2% do PV por segundo. É isso que separa uma expedição que dura a noite de uma que gasta o cinto de poções na primeira hora.
- **Efeito do prato:** +4 / +6 / +9 / +12 / +16 / +20 num atributo (T1 a T6), vezes o multiplicador de qualidade. Cada receita escolhe o atributo, e algumas trocam o bônus por um efeito (resistência a peçonha, +ânimo inicial). Exemplos de nomes, a fechar no módulo 06: paçoca de carne (FOR), peixe na folha de bananeira (DES), caldo de piranha (VIG), tacacá (SAB).
- **Sem refeição:** nada de ruim acontece além de a regeneração ficar lenta. O personagem gasta duas a três vezes mais poções ([04-combate](04-combate.md), seção 8).

[H] **Quatro perguntas.** *Referência:* a comida com Auto Eat do Melvor, que é consumida quando a vida cai a 20% ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). *Diferença:* aqui a comida é sustento por hora, não cura de emergência; a cura de emergência é a poção. Assim, Culinária e Alquimia vendem coisas diferentes e competem pela mesma decisão ("como-me-sustento"). *Problema:* comida que só cura vira apenas uma poção pior. *Comportamento:* uma demanda constante e previsível por Culinária (uma porção por hora, por combatente) e uma demanda de pico por Alquimia. *Risco:* a refeição vira imposto obrigatório. Mitigação: sem ela o jogo funciona, só custa mais poções; a escolha é qual consumível comprar.

### 4.3 Poções, óleos e unguentos: o cinto

- **O cinto** guarda os consumíveis de combate: **4 casas** no início, **6** no nível 30 de vocação e **8** no nível 60. Cada casa guarda uma pilha de um tipo. [F] O Milky Way Idle abre mais espaços de comida e bebida com o Giant Pouch, no nível total 750 ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)). Aqui as casas se conquistam pelo nível de vocação e nunca se vendem.
- **As regras de combate decidem quando usar** cada consumível ([04-combate](04-combate.md), seção 3).

| Consumível (Alquimia) | Efeito [H] |
|---|---|
| Poção de cura | Restaura 30% do PV (T1), +2 pontos percentuais por tier, até 40% (T6). |
| Tônico | +40 de ânimo na hora. |
| Antídoto | Remove peçonha e enleio. |
| Água de clareza | Remove estados da Bruma (medo, desnorteio, encanto) e dá +20% de CLA por 20 s. |
| Óleo de arma | Por 300 golpes, a arma ganha uma afinidade (fogo, clareza, prata, lama). Contra a fraqueza certa, o dano sobe 50%. |
| Unguento de couro ou de metal | Por 4 horas de combate, a armadura perde 30% menos durabilidade. |

[H] O unguento troca demanda de Ferraria e Alfaiataria por demanda de Alquimia. O dreno total cai um pouco, e a simulação (08) precisa dizer se compensa; se não compensar, o efeito cai para 15%.

### 4.4 Exemplo completo — Caçador nível 30

- **Atributos:** 29 pontos fixos (60% DES, 40% VIG: 17 e 12) e 29 livres (20 em DES e 9 em VIG). Fica DES 42, VIG 26, FOR 5, SAB 5.
- **Equipamento:** arco T3 Bom (dano 30 × 1,08 = 32,4; intervalo de 2,8 s) e conjunto de couro médio T3 Bom (DEF 36 × 1,08 ≈ 39; PV 55 × 1,08 ≈ 59).
- **Refeição:** peixe na folha T3 Comum (+9 DES).

| Derivado | Conta | Resultado |
|---|---|---|
| PV | 60 + 10 × 26 + 5 × 30 + 59 | **529** |
| ATQ | 32,4 × (1 + (42 + 9) / 100) | **48,9** |
| Crítico | 5% + 0,1% × 51 | **10,1%** |
| Esquiva | 0,1% × 51 + 3% | **8,1%** |
| DEF | | **39** |
| Dano básico por segundo, antes da defesa do alvo | 48,9 × (1 + 0,101 × 0,5) / 2,8 | **≈ 18,3** |

A conta contra um alvo de verdade, com defesa e crítico, está no [04-combate](04-combate.md), seção 4.

### 4.5 O orçamento de poder

[H] Meta para o meio do jogo, medida na simulação (08) pela queda do índice de poder (dano por segundo × vida efetiva) quando se troca cada fonte pela base:

| Fonte | Parte do poder | Dono |
|---|---|---|
| Progressão pessoal (atributos, caminhos, regras, dádiva) | 30% a 45% | Presa à conta |
| Equipamento | 40% a 55% | Negociável, se gasta |
| Consumíveis (refeição, poções, óleos) | 10% a 20% | Negociável, consumido |

*Por quê:* abaixo de 40%, o equipamento não sustenta Ferraria, Carpintaria e Alfaiataria; acima de 55%, o mercado vira a principal fonte de poder, e o jogador que joga muito, mas compra pouco, se sente inútil (lei 14, do mercado complementar, em [02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)).

<!-- PARTE 2 -->
