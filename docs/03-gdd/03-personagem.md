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
| **Regeneração fora de luta** | 1% do PV por segundo; **2% com refeição** | É a principal razão de comer (seção 4.2). |

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
- **Efeito principal:** a regeneração fora de luta sobe de 1% para 2% do PV por segundo. É isso que separa uma expedição que dura a noite de uma que gasta o cinto de poções na primeira hora.
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

## 5. As cinco vocações

**Como ler cada ficha.** Toda vocação tem: a fantasia em uma frase; o papel em expedições, masmorras e cercos; os atributos; o que veste e de que ofícios é freguesa; o **olhar de colheita** (o multiplicador de drops por família de material, detalhado no [04-combate](04-combate.md), seção 7); a **mecânica-assinatura**; 6 habilidades ativas e 3 passivas no lançamento; e 3 caminhos (seção 6).

**Regras comuns às habilidades** [H]:
- As ativas abrem nos níveis de vocação 1, 5, 10, 20, 35 e 50; as passivas, nos níveis 15, 30 e 45.
- Toda habilidade conhecida fica disponível. Quem decide o uso são as **regras de combate** ([04-combate](04-combate.md), seção 3), e o limite real é o número de casas de regra, não uma barra de atalhos.
- Custo em ânimo e recarga em segundos. Potência em % do ATQ (ou da CLA, quando é clareza).

### 5.1 Guardião

> *"Quem fica no vau quando a Bruma sobe."*

| Campo | |
|---|---|
| **Papel** | Expedição: lento e seguro, gasta poucas poções. Masmorra: frente, protege o grupo. Cerco: posto da Muralha. |
| **Atributos** | FOR e VIG |
| **Veste** | Espada, maça ou machado; escudo; armadura pesada (proficiência: DEF +10%) |
| **Freguês de** | Ferraria (arma e armadura), Carpintaria (escudo). **A armadura e o escudo do Guardião se desgastam 1,5 vez mais rápido.** |
| **Olhar de colheita** | Matéria dura × 1,6 (ossos, chifres, cascos, escamas), que abastece a Carpintaria, a Ferraria e as obras |

**Mecânica-assinatura: Guarda e posturas.**
- **Guarda:** uma segunda barra, igual a 20% do PV, que absorve dano antes da vida. Começa cheia em cada luta e sobe 5% do PV a cada bloqueio.
- **Posturas:** *Firme* (dano recebido −20%, dano causado −20%), *Avante* (dano causado +15%, bloqueio −10 pontos percentuais) e *Escolta* (o Juramento vai sozinho para o aliado com menos vida; dano causado −10%). Trocar de postura é uma ação sem custo, com recarga de 5 s, e são as regras que decidem a troca (ex.: "quando houver 3 ou mais inimigos → Postura Firme").

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Golpe de escudo | 20 | 8 s | 120% do ATQ, atordoa 1 s, +5% do PV em Guarda |
| Brado | 30 | 20 s | Os inimigos atacam só o Guardião por 6 s |
| Talho pesado | 40 | 6 s | 220% do ATQ |
| Juramento | 30 | 25 s | Liga-se a um aliado: 50% do dano que ele sofre vai para o Guardião, por 12 s |
| Muralha | 50 | 40 s | Guarda dobra e DEF +30% por 10 s |
| Pé no chão | 20 | 30 s | Imune a medo, enleio e empurrão por 8 s |

**Passivas:** *Couro grosso* (proficiência em armadura pesada) · *Ombro amigo* (aliados sofrem −5% de dano) · *Teimosia* (abaixo de 30% do PV, DEF +25%).

[H] **Quatro perguntas.** *Referência:* o tanque dos MMOs e a defesa por inscrição do Shakes & Fidget ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). *Diferença:* aqui o Guardião é o melhor freguês do ferreiro (gasta mais armadura) e o eixo do cerco; no solo, é a vocação mais barata em poções. *Problema:* masmorras assíncronas precisam de alguém que absorva, e um tanque no solo costuma ser lento e chato. *Comportamento:* compra armadura com frequência, se inscreve nos cercos, vira referência na guilda. *Risco:* faltar Guardião, como falta tanque nos MMOs [NV]. Mitigação: ajudante Guardião, bônus para papel em falta nas masmorras ([04-combate](04-combate.md), seção 9) e custo de consumíveis menor, que compensa o desgaste.

### 5.2 Caçador

> *"Lê o rastro, conta as flechas e respeita a Caipora."*

| Campo | |
|---|---|
| **Papel** | Expedição: dano à distância constante, a melhor vocação de caça. Masmorra: dano num alvo. Cerco: Torres. |
| **Atributos** | DES e VIG |
| **Veste** | Arco; aljava; armadura média de couro (proficiência: DEF +10%) |
| **Freguês de** | Carpintaria (arco e **flechas: 1 feixe por hora de combate**, com pontas da Ferraria), Alfaiataria com Curtume (couro) |
| **Olhar de colheita** | Pele × 1,6, carne × 1,4, essência × 0,8. É o Caçador que alimenta o Curtume ([00-biblia](00-biblia.md), 6.3) |

**Mecânica-assinatura: marca, abate limpo e caça de respeito.**
- **Marca:** o alvo marcado recebe +15% de dano do Caçador por 10 s.
- **Abate limpo:** quando o golpe final num bicho tomado pela Bruma sai do arco, num alvo marcado, o bicho rende **+50% de pele em quantidade**. A pele não ganha qualidade. [F] O FFXIV tirou a versão de alta qualidade dos materiais coletados por causa do inventário e manteve a qualidade só no crafting ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 7). [H] Insumo padronizado, qualidade só no produto final.
- **Caça de respeito:** o Caçador gera 30% menos **pressão de caça** na região ([04-combate](04-combate.md), seção 7.3, a Lei da Caipora).

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Marca | 10 | 4 s | Marca o alvo (+15% de dano do Caçador, 10 s) |
| Tiro certeiro | 40 | 6 s | 250% do ATQ, +20 pontos percentuais de crítico |
| Chuva de flechas | 45 | 15 s | 90% do ATQ em até 3 alvos |
| Tiro na perna | 25 | 10 s | 100% do ATQ e Lento por 6 s |
| Recuo | 20 | 20 s | Esquiva o próximo golpe; inimigos corpo a corpo perdem 1 ação |
| Disparo carregado | 60 | 25 s | 400% do ATQ, ignora 30% da DEF |

**Passivas:** *Olho de caçador* (+5 pontos de crítico com arco) · *Couro cru* (proficiência em armadura média) · *Caça de respeito*.

[H] **Quatro perguntas.** *Referência:* o caçador dos MMOs e o combate que consome comida e munição do Melvor ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). *Diferença:* aqui a caça abastece o Curtume e a Culinária, e o abate limpo premia a regra bem escrita (marcar antes de finalizar). *Problema:* o farm de peles é o que um bot faria. *Comportamento:* rodar entre regiões, ler a pressão de caça, negociar peles na Bolsa. *Risco:* o Caçador vira a única vocação de farm e o Curtume fica refém de bots. Mitigação: todas as vocações tiram pele na base, a pressão de caça é regional e o teto de emissão negociável é por conta ([00-biblia](00-biblia.md), 6.6).

### 5.3 Encantador

> *"Aprendeu os cantos que os encantados ensinavam antes da Bruma e anda com uma lanterna para desfazê-la."*

| Campo | |
|---|---|
| **Papel** | Expedição: dano em área contra bandos. Masmorra: controle. A vocação que melhor **liberta** encantados. Cerco: Torres. |
| **Atributos** | SAB e VIG |
| **Veste** | Cajado ou flauta; lanterna; veste leve (proficiência: +5% de SAB) |
| **Freguês de** | Carpintaria (cajado, flauta), Ferraria (lanterna), Alquimia (**óleo de lamparina: 1 frasco por hora de combate**), Alfaiataria com Tecelagem (veste) |
| **Olhar de colheita** | Essência de Bruma × 1,8, pele e carne × 0,8 |

**Mecânica-assinatura: ressonância e lume.**
- **Ressonância.** Os cantos têm três famílias: *Raiz* (controle), *Correnteza* (área) e *Luz* (clareza). Cada canto de família diferente da anterior soma 1 de ressonância, até 3. Com 3, o canto seguinte sai em dobro e a ressonância zera. Repetir a família zera também. [H] Num idle, o mago costuma "apertar o maior botão"; aqui a **ordem das regras** é o jogo do Encantador.
- **Lume.** Com óleo na lanterna, o grupo ganha +10% de CLA. Sem óleo, a lanterna apaga e nada mais acontece.

| Ativa | Família | Ânimo | Recarga | Efeito |
|---|---|---|---|---|
| Enleio | Raiz | 30 | 12 s | Imobiliza até 3 inimigos por 3 s |
| Acalanto | Raiz | 35 | 20 s | Sono de 6 s num alvo; acorda com dano |
| Correnteza | Correnteza | 30 | 4 s | 110% do ATQ em todos os inimigos e Lento por 3 s |
| Redemoinho | Correnteza | 55 | 18 s | 180% do ATQ em todos os inimigos |
| Clarão | Luz | 40 | 6 s | 200% da CLA na barra de Bruma e cega por 2 s |
| Eco | — | 25 | 15 s | Repete o último canto a 60%, sem quebrar a ressonância |

**Passivas:** *Voz firme* (Firmeza +10 pontos) · *Lume* · *Linho fino* (proficiência em veste leve).

[H] **Quatro perguntas.** *Referência:* o mago de área e de controle; a formação como decisão no Idle Champions ([B03](../01-pesquisa/fichas/B03-idle-champions.md)). *Diferença:* as duas barras dos encantados (Vida e Bruma) fazem do Encantador o diplomata da Bruma; ele escolhe libertar em vez de dispersar ([04-combate](04-combate.md), seção 5). *Problema:* magia de área sem decisão. *Comportamento:* escrever regras em sequência, buscar encantados para libertar, comprar óleo da Alquimia. *Risco:* controle em cadeia trava inimigos para sempre na simulação. Mitigação: redução por repetição de controle e resistência dos chefes ([04-combate](04-combate.md), seção 6).

### 5.4 Erveiro

> *"Sabe o nome de cada folha e faz o remédio e a peçonha da mesma raiz."*

| Campo | |
|---|---|
| **Papel** | Expedição: lento, mas quase não gasta poções. Masmorra: cura e suporte. Liberta encantados (em segundo lugar). Cerco: Enfermaria. |
| **Atributos** | SAB, VIG e DES |
| **Veste** | Bordão; bornal; veste leve (proficiência: +5% de SAB) |
| **Freguês de** | Colheita (**ervas frescas: cerca de 6 por hora de combate**), Alquimia (poções), Carpintaria (bordão), Alfaiataria (bornal e veste) |
| **Olhar de colheita** | Peçonhas, resinas e sementes raras × 1,8 (as duas primeiras abastecem a Alquimia; as sementes, a Colheita); matéria dura × 0,8 |

**Mecânica-assinatura: preparo de campo, ervas frescas e peçonha.**
- **Preparo de campo:** toda poção que o Erveiro usa, nele ou num aliado, tem +30% de efeito. **Um Erveiro no grupo reduz o gasto de poções do grupo em cerca de 30%.** Ele troca demanda de Alquimia por demanda de Colheita, e é a vocação que mais mexe nessa balança.
- **Ervas frescas:** cada habilidade gasta 1 erva. Sem ervas, as habilidades saem a 60%.
- **Peçonha:** até 5 acúmulos; cada um causa `0,15 × SAB` de dano por segundo, por 8 s.

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Emplastro | 25 | 6 s | Cura 20% do PV de um aliado |
| Chá de raiz | 40 | 20 s | Cura 4% do PV por segundo no grupo, por 6 s |
| Peçonha | 20 | 3 s | 80% do ATQ e 2 acúmulos de peçonha |
| Pó de urtiga | 30 | 15 s | Inimigos com −20% de acerto por 6 s |
| Sarar | 35 | 8 s | 150% da CLA na barra de Bruma de um encantado e remove um estado de um aliado |
| Frasco arremessado | 15 | 10 s | Arremessa um consumível do cinto: a poção cura todos a 60%, o óleo pega em todos |

**Passivas:** *Mão leve* (o preparo de campo) · *Conhecer a folha* (Firmeza +30 pontos contra peçonha) · *Bornal arrumado* (+1 casa no cinto).

[H] **Quatro perguntas.** *Referência:* o curandeiro dos MMOs. A fantasia vem do raizeiro, o conhecedor popular de plantas, e **não** de práticas religiosas como benzimento ou defumação (seção 12). *Diferença:* o Erveiro multiplica o que a Alquimia vende e consome o que a Colheita colhe. *Problema:* sem curador, a masmorra assíncrona vira um sorvedouro de poções. *Comportamento:* grupos procuram Erveiros; o Erveiro compra ervas e vende o próprio serviço como "economia de poção". *Risco:* curador obrigatório. Mitigação: ajudante Erveiro e poções fortes cobrem a falta, e nenhuma masmorra exige um papel.

### 5.5 Batedor

> *"Vai na frente, volta com o mapa e com o que ninguém tinha visto."*

| Campo | |
|---|---|
| **Papel** | Expedição: críticos e achados raros. Masmorra: dano explosivo, desarma armadilhas. Cerco: **Vigia**, que revela o Presságio antes do cerco. Travessia: abre o mapa. |
| **Atributos** | DES e FOR |
| **Veste** | Facão ou par de facas; armadura média (proficiência: esquiva +5 pontos) |
| **Freguês de** | Ferraria (facão e facas), Alfaiataria com Curtume (couro; **as botas do Batedor gastam 1,5 vez mais**), Carpintaria (**tochas: 1 por hora** nas regiões com Bruma da região de 40% ou mais) |
| **Olhar de colheita** | Achados × 2,5; todo o resto × 0,9 |

**Mecânica-assinatura: faro, trilhas e emboscada.**
- **Trilhas.** Na expedição, o Batedor escolhe o modo: *Varredura* (o padrão); *Rastro fino* (pula 30% dos encontros comuns e dobra a chance de achado por encontro: menos material, mais raridade); *Picada* (vai mais fundo: +50% de encontros de elite, a região conta +10 pontos de Bruma, achados × 1,5, mais risco).
- **Emboscada.** O primeiro golpe do Batedor em cada encontro é crítico.
- **Vigia.** A expedição de vigia rende pontos de vigia para o Presságio do cerco, e o Batedor rende o dobro ([04-combate](04-combate.md), seção 11.2).

| Ativa | Ânimo | Recarga | Efeito |
|---|---|---|---|
| Corte duplo | 25 | 4 s | Dois golpes de 80% do ATQ |
| Faca no ponto | 40 | 8 s | 180% do ATQ, ignora 50% da DEF |
| Sumir no mato | 30 | 20 s | Esquiva +50 pontos por 5 s |
| Assobio | 20 | 15 s | O alvo perde a próxima ação |
| Olho vivo | 35 | 25 s | O grupo ganha +15 pontos de crítico por 8 s e vê a fraqueza do alvo |
| Arremesso | 15 | 6 s | 120% do ATQ à distância |

**Passivas:** *Pé leve* (proficiência em armadura média) · *Faro* (achados × 2,5) · *Vaqueano* (o caminho até a região leva 25% menos tempo).

[H] **Quatro perguntas.** *Referência:* o batedor e o ladino dos RPGs; a fantasia vem do **vaqueano** e do **mateiro**, os guias que conhecem o terreno. **Não** vem do bandeirante ([00-biblia](00-biblia.md), seção 3): o Batedor guia e descobre, não conquista. *Diferença:* troca volume por raridade e dá à cidade a informação do cerco. *Problema:* o explorador puro não tem papel em grupo. *Comportamento:* expedições de vigia na semana do cerco, leitura do mapa, achados na Feira e no Pregão. *Risco:* achados raros viram torneira e alvo de bots. Mitigação: teto de emissão, chances publicadas, parte dos achados presa à conta e o "grau garantido" uma vez por dia, no máximo (seção 6.2).

## 6. Caminhos de build

### 6.1 Como funciona

- **Pontos de caminho:** 1 a cada 2 níveis de vocação (níveis 2, 4, …, 100), ou seja, **50 pontos no nível 100**.
- **Três caminhos por vocação, de 25 pontos cada.** Nos pontos 5, 15 e 25 de cada caminho há um **marco**, que é uma bifurcação: o jogador escolhe uma de duas opções. Entre os marcos, cada ponto dá +1% num número do tema do caminho.
- **Com 50 pontos**, cabe fechar dois caminhos inteiros e deixar um de fora, ou fechar um e abrir os outros dois até o segundo marco (25 + 15 + 10).
- **Os marcos mudam regras, não só números.** Cada caminho tem 8 versões (2 × 2 × 2), e a combinação de dois caminhos completos dá 192 builds por vocação, sem contar as divisões parciais.

[H] **Quatro perguntas.** *Referência:* a árvore de classes do IdleOn, com bônus que mudam a conta inteira ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)), e a lei 2, da regra nova ([02-padroes](../01-pesquisa/02-padroes-matriz-leis.md)). *Diferença:* poucos nós, cada um uma escolha que se lê; nada de árvore de 200 nós com +0,5%. *Problema:* árvores grandes viram planilha, e as pequenas acabam rápido. *Comportamento:* testar combinações, comparar diários de expedição, discutir builds. *Risco:* um combo dominante. Mitigação: as fraquezas mudam por região e por Era, e a simulação mede a vantagem de cada marco.

### 6.2 Os caminhos de cada vocação

Cada célula mostra a opção A / a opção B do marco.

**Guardião**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Muralha** | Defesa e cerco | *Guarda larga* (Guarda = 30% do PV) / *Guarda viva* (a Guarda regenera 2% por segundo em luta) | *Pedra do vau* (no posto Muralha do cerco, poder de cerco × 1,15) / *Casco* (bloqueia também cantos e peçonha) | *Transbordo* (a Guarda que sobra no fim da luta cura o aliado mais ferido) / *Inabalável* (imune a atordoamento; Firmeza +20 pontos) |
| **Escolta** | Proteger o grupo | *Olho no grupo* (Juramento dura +6 s) / *Corpo na frente* (Brado reduz em 10% o dano de quem foi provocado) | *Juramento duplo* (liga-se a dois aliados) / *Revezamento* (uma vez por luta, toma no lugar do aliado o golpe que o derrubaria) | *Porteira fechada* (enquanto houver Guarda, ninguém atinge a retaguarda) / *Mão estendida* (cada bloqueio cura 2% do PV do aliado ligado) |
| **Desforra** | Contra-ataque, solo | *Revide* (golpes bloqueados devolvem 40% do dano) / *Peso do braço* (Talho pesado +30%) | *Raiva mansa* (+4% de dano a cada 10% de PV perdido) / *Quebra-casco* (Golpe de escudo tira 20% da DEF do alvo por 6 s) | *Desforra* (depois de 3 bloqueios, o próximo Talho é crítico) / *Muro que anda* (Postura Avante sem perda de bloqueio) |

**Caçador**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Mateiro** | Caça e sustento | *Abate limpo+* (+75% de pele em vez de 50%) / *Fartura* (+30% de carne) | *Rastro frio* (gera 50% menos pressão de caça, em vez de 30%) / *Presente aceito* (o presente à Caipora vale por duas expedições) | *Pacto do mateiro* (com a pressão da região abaixo de 50%, +20% em todo drop de bicho) / *Leitor de rastro* (encontros de bicho grande, a elite, duas vezes mais frequentes) |
| **Atirador** | Chefes | *Marca funda* (Marca +25%) / *Fôlego de tiro* (Tiro certeiro com 2 s a menos de recarga) | *Ponto fraco* (críticos em alvos com ponto fraco causam × 2,0) / *Marca dupla* (dois alvos marcados) | *Flecha que não erra* (Disparo carregado não pode ser esquivado e acerta o ponto fraco) / *Cadência* (+3% de dano por golpe seguido no mesmo alvo, até 10 vezes) |
| **Armadilheiro** | Controle e área | *Laço* (Tiro na perna também enleia por 2 s) / *Estrepe* (Chuva de flechas deixa o chão com estrepes: Lento) | *Tocaia* (o primeiro golpe de cada encontro causa × 2) / *Mundéu* (uma armadilha por luta: o primeiro inimigo que avança fica atordoado por 3 s) | *Várzea de estrepes* (no cerco, cada Armadilheiro inscrito tira 1% da força da primeira onda, até 10%) / *Rede* (Chuva de flechas atinge até 5 alvos) |

**Encantador**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Libertador** | A Bruma | *Luz mansa* (o Clarão quase não fere a Vida: 10%) / *Lume forte* (aura de +20% de CLA) | *Desencanto* (CLA +40%) / *Promessa* (ao libertar um encantado, o grupo recupera 25% do PV e 30 de ânimo) | *Manhã clara* (a barra de Bruma do alvo não se regenera) / *Farol* (no cerco, cada Libertador inscrito tira 1% da força das ondas com encantados, até 10%) |
| **Tempestade** | Área | *Cheia* (Correnteza com +1 s de Lento) / *Pororoca* (Redemoinho com 6 s a menos de recarga) | *Remanso* (inimigos lentos sofrem +20% de dano) / *Ressaca* (com ressonância cheia, o canto atinge todos os inimigos) | *Tromba-d'água* (Redemoinho com ressonância cheia sai em triplo) / *Rio acima* (+5 de ânimo por inimigo atingido pela Correnteza) |
| **Acalanto** | Controle | *Sono pesado* (Acalanto de 9 s) / *Raiz funda* (Enleio de 4 s) | *Cantiga de roda* (o Acalanto pula para outro alvo quando quebra) / *Mata fechada* (inimigos enleados sofrem +25 pontos de crítico) | *Ninar a maré* (no cerco, cada Encantador Acalanto inscrito tira 1% da força das duas primeiras ondas, até 10%) / *Dono do tempo* (controles não sofrem a redução por repetição contra bichos) |

**Erveiro**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Curador** | Cura | *Repartir* (a poção usada pelo Erveiro também cura 50% no aliado mais ferido) / *Mão quente* (Emplastro +10 pontos) | *Enfermaria* (no cerco, a cobertura da Enfermaria conta em dobro) / *Ponto de apoio* (aliados abaixo de 30% do PV recebem +40% de cura) | *Ninguém fica* (uma vez por luta, impede a queda de um aliado) / *Farmácia de campo* (o grupo gasta 50% menos poções, em vez de 30%) |
| **Peçonheiro** | Dano no tempo | *Peçonha que corre* (o alvo que cai passa os acúmulos adiante) / *Dente fino* (até 7 acúmulos) | *Veneno de jararaca* (o alvo envenenado cura 50% menos) / *Formigueiro* (Pó de urtiga põe 1 acúmulo em todos) | *Febre* (acúmulos causam o dobro em alvos atordoados ou enleados) / *Antídoto vivo* (o Erveiro é imune a peçonha e o grupo resiste a 50%) |
| **Sarador** | Libertar e cuidar da mata | *Sarar forte* (+30% de CLA no Sarar) / *Água limpa* (Água de clareza dura 40 s) | *Sarar a mata* (cada encantado libertado pelo grupo tira 10 pontos da pressão de caça da região) / *Mata amiga* (em regiões com Bruma abaixo de 30%, regeneração +50%) | *Orvalho* (ao libertar um encantado, o grupo perde todos os estados negativos e fica imune por 10 s) / *Raiz e flor* (Sarar também cura 10% do PV do aliado mais ferido) |

**Batedor**

| Caminho | Tema | Marco 5 | Marco 15 | Marco 25 |
|---|---|---|---|---|
| **Vaqueano** | Exploração e Travessia | *Atalho* (caminho até a região 50% mais curto) / *Noite clara* (as tochas duram o dobro) | *Picada aberta* (na Travessia, revela o mapa duas vezes mais rápido) / *Vigia de longe* (pontos de vigia × 1,5) | *Guia do grupo* (na masmorra, o grupo evita a primeira armadilha e ganha uma Encruzilhada a mais) / *Rota de fuga* (recuar nunca custa desgaste extra, nem do chefe) |
| **Faca na bota** | Crítico | *Gume* (crítico × 1,75) / *Dois tempos* (Corte duplo com três golpes) | *Golpe de misericórdia* (crítico garantido em alvos abaixo de 25% do PV) / *Sangria* (críticos sangram 20% do dano em 4 s) | *Corte certo* (crítico × 2,0) / *Na sombra* (depois de Sumir no mato, os dois próximos golpes são críticos) |
| **Achador** | Achados | *Olho de achador* (achados +30%) / *Bolso fundo* (mochila +20%) | *Rastro fino+* (o Rastro fino pula 40% e multiplica os achados por 2,5) / *Relíquia* (achados de almas das cidades antigas sobem um grau) | *Sorte de achador* (uma vez por dia, o primeiro achado raro sobe um grau) / *Mapa do tesouro* (1 em cada 20 achados é um mapa que abre uma Encruzilhada especial na expedição seguinte) |

[H] Os marcos de cerco (*Pedra do vau*, *Várzea de estrepes*, *Farol*, *Ninar a maré*, *Enfermaria*) têm teto por cerco ([04-combate](04-combate.md), seção 11.4). Sem teto, a cidade inteira escolheria o mesmo marco e o cerco viraria uma conta resolvida.

### 6.3 Redistribuição e conjuntos

- **Redistribuir** atributos livres e pontos de caminho: grátis uma vez por dia; depois, `20 × nível da vocação` em ouro, destruído. Exemplo: no nível 50, a segunda redistribuição do dia custa 1.000 de ouro.
- **Conjuntos** (build + regras + equipamento salvos): 1 no início, o 2º no nível 20 de vocação e o 3º no nível 50. Trocar de conjunto é instantâneo fora de luta.
- **Nada disso vai à loja.** [H] Proposta para o módulo 11: os conjuntos não entram na conveniência do Alvará, porque mexem com a decisão do jogo, e não com o conforto (a reconciliar).

[H] **Quatro perguntas.** *Referência:* o "respec" caro dos MMOs antigos, que congela o meta, contra o respec livre dos jogos de serviço. *Problema:* o caro pune quem experimenta; o grátis ilimitado faz o jogador trocar a cada luta, e a escolha perde o peso. *Comportamento:* experimentar uma vez por dia e se comprometer. *Risco:* a taxa vira um dreno irrelevante. Ela é pequena de propósito; o dreno de verdade está no desgaste.

## 7. Sinergias com os ofícios

### 7.1 O que cada vocação compra e o que entrega

| Vocação | Compra de (consumo por hora de combate, [H]) | Entrega (olhar de colheita) para |
|---|---|---|
| **Guardião** | Ferraria e Carpintaria: armadura e escudo com **desgaste × 1,5**; refeição | Matéria dura (× 1,6) → Carpintaria, Ferraria, obras |
| **Caçador** | Carpintaria com Ferraria: **1 feixe de flechas**; Alfaiataria com Curtume: couro; refeição | Pele (× 1,6) → Curtume; carne (× 1,4) → Culinária |
| **Encantador** | Alquimia: **1 frasco de óleo de lamparina**; Ferraria: lanterna; Tecelagem com Alfaiataria: veste; refeição | Essência de Bruma (× 1,8) → Alquimia |
| **Erveiro** | Colheita: **~6 ervas frescas**; Alquimia: poções (com +30% de efeito); refeição | Peçonhas e resinas (× 1,8) → Alquimia; sementes raras → Colheita |
| **Batedor** | Carpintaria: **1 tocha** (regiões com Bruma ≥ 40%); Curtume com Alfaiataria: botas com **desgaste × 1,5**; refeição | Achados (× 2,5) → Feira e Pregão, obras, moldes para os ofícios |

**Checagem de cobertura** [H]: todo ofício tem pelo menos um freguês vocacional. Mineração e Fundição vendem por meio da Ferraria (armas, armaduras, pontas, lanternas); Lenhadoria, por meio da Carpintaria (que tem fregueses nas cinco vocações); Pesca, Colheita e Culinária, pela refeição de todos; Curtume e Tecelagem, pelas armaduras médias e leves; Alquimia, pelas poções de todos e pelo óleo do Encantador.

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

**Exemplo:** um Caçador nível 80 troca para Guardião. O Guardião começa no nível 1 com XP em dobro até o nível 40. A partir daí, a XP volta ao normal. Se ele voltar ao Caçador depois de 7 dias, encontra o nível 80, a build e as regras como deixou, e paga a taxa.

### 8.2 Por que assim

[H] **Quatro perguntas.** *Referência:* o FFXIV deixa trocar de job a qualquer momento ao trocar a arma [NV: conhecimento prévio, não conferido nesta fase]; a maioria dos idles prende a classe ao personagem. *Problema:* com um personagem por conta, uma classe presa para sempre gera arrependimento e abandono; uma classe trocada a cada luta apaga a identidade e o papel social ("o Erveiro da guilda"). *Comportamento:* experimentar no começo, se comprometer depois e voltar a experimentar por um custo. *Risco:* trocar para a vocação do meta na véspera de cada cerco. Mitigação: a espera de 7 dias e o bloqueio a partir do fechamento da inscrição; a fraqueza do cerco só aparece aos poucos ([04-combate](04-combate.md), seção 11.2), e não dá tempo de trocar e subir a vocação nova.

## 9. Ajudantes

### 9.1 O que são

Ajudantes são **companheiros NPC** com nome, história e vocação (uma das cinco). São **contratados no Arraial**, **presos à conta** e **não negociáveis** ([00-biblia](00-biblia.md), glossário). Se a conta for vendida no Cartório, eles vão junto, porque a unidade é a conta.

### 9.2 O que fazem e o que não fazem

| Fazem | Não fazem |
|---|---|
| Lutam ao lado do personagem em **expedições** e **masmorras** | **Não abrem fila.** Nunca fazem uma atividade sozinhos, em paralelo ao personagem |
| Preenchem vagas vazias nas masmorras assíncronas | **Não coletam, não produzem e não vão ao mercado** |
| Seguem regras próprias (3 casas, com modelos prontos) | **Não lutam no cerco** (seção 9.6) |
| Comem (1 porção por hora) e gastam o próprio equipamento | Não levam parte do saque e não contam para o bônus de grupo |
| Têm laço com o personagem e capítulos de história | Não se vendem, nem por Alvará nem por ouro na loja |

### 9.3 Como se contratam

- **A primeira ajudante é grátis**, na primeira hora de jogo: uma Erveira que cura o novato (nome e história no módulo 12).
- **Os seguintes exigem uma carta de contratação**, conquistada jogando:
  - marcos de Mérito (ex.: 500 e 2.000 de Mérito);
  - níveis de vocação (20, 40 e 60);
  - libertação de encantados maiores: o libertado apresenta um companheiro ([04-combate](04-combate.md), seção 10).
- **Com a carta, paga-se uma taxa de contratação em ouro, destruída** (a calibrar no módulo 07).
- **Aparências** de ajudante são cosméticas e podem estar no Baú do Mascate e na loja, como a bíblia já prevê (Checkpoint 2). O ajudante, nunca.

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

[H] O cerco é o momento cívico do jogo: um adulto verificado, um defensor ([00-biblia](00-biblia.md), P8). Se os ajudantes lutassem, quem tem mais ajudantes defenderia mais, e "um adulto, um personagem" viraria "um adulto, três combatentes". A parte NPC do cerco é a **Guarda do Arraial**, que pertence à cidade e é equipada com o que a cidade produz ([04-combate](04-combate.md), seção 11.3).

### 9.7 Efeito econômico

[H] Dois ajudantes deixam a expedição 40% a 60% mais rápida em abates (estimativa a validar no módulo 08). Mas triplicam o consumo de refeição e somam o desgaste de duas armas e duas armaduras. O ganho líquido existe, e o custo vai para os ofícios de outros jogadores. **Ir sozinho é mais barato e mais lento; ir com ajudantes é mais caro e mais rápido.** É uma decisão, não uma obrigação.

### 9.8 Quatro perguntas

[H] *Referência:* os retainers do FFXIV e os seguidores das garrisons do WoW ([03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md), seção 12). *Diferença:* lá, o retainer faz missões sozinho e traz itens, o que é uma fila extra. Aqui, o ajudante só acompanha. E os familiares vendidos do Idle Champions, que automatizam o jogo, geram queixa de pay-to-win ([B03](../01-pesquisa/fichas/B03-idle-champions.md)); aqui, nada disso é vendido. *Problema:* com um personagem por conta, o jogador solitário fica sem grupo e as masmorras assíncronas ficam sem gente na madrugada. *Comportamento:* apego, consumo extra e a busca por jogadores de verdade por causa do bônus de grupo ([04-combate](04-combate.md), seção 9). *Risco:* o ajudante virar um personagem alternativo disfarçado. Mitigação: nunca abre fila, nunca produz e nunca negocia.

## 10. Interfaces com outros módulos

| Módulo | O que precisa deste |
|---|---|
| **02 — Progressão** | Curva de XP de vocação de 1 a 100; pontos de caminho (1 a cada 2 níveis); níveis de abertura de habilidades, casas do cinto (4/6/8) e casas de regra; XP × 2 de recuperação na troca de vocação |
| **04 — Combate** | Atributos, derivados e fórmulas (seção 3); mecânicas-assinatura; ajudantes em expedições e masmorras |
| **05 — Itens** | Seis casas; números por tier e qualidade (seção 4.1); proficiências por tipo de armadura; a dádiva presa à conta na casa do amuleto; peça avariada a 0% |
| **06 — Ofícios** | Consumíveis vocacionais: feixe de flechas (Carpintaria com Ferraria), óleo de lamparina (Alquimia), ervas frescas (Colheita), tochas (Carpintaria); refeições com bônus de atributo; famílias de material do olhar de colheita (matéria dura, pele, carne, essência, peçonha e resina, sementes, achados) |
| **07 — Economia** | Drenos deste módulo: redistribuição (`20 × nível` em ouro a partir da segunda do dia), taxa de troca de vocação, taxa de contratação de ajudante; consumo dos ajudantes (refeição e desgaste) |
| **09 — Social** | Marcos de Mérito que dão cartas de contratação; papel de cada vocação no cerco |
| **11 — Monetização** | Fora da loja: níveis, pontos de caminho, casas de regra e do cinto, conjuntos, ajudantes e cartas de contratação. Na loja, só aparências |
| **12 — Onboarding** | Escolha de vocação no primeiro combate; fase de experimentar até o nível 10; primeira ajudante grátis; campo de treino |

## 11. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Glossário:** incluir **Dádiva** (item preso à conta dado por um encantado libertado; ocupa a casa do amuleto) e **Caminho** (especialização dentro da vocação, com marcos).
2. **[proposta de mudança na bíblia] Seção 6.4:** acrescentar a cada vocação o seu consumível (Guardião: desgaste × 1,5 na armadura; Caçador: flechas; Encantador: óleo de lamparina; Erveiro: ervas frescas; Batedor: tochas), para que os módulos 06 e 07 contem com essa demanda.
3. **[proposta de mudança na bíblia] Seção 5:** registrar como decisão que **ajudantes não abrem fila, não produzem, não negociam e não lutam no cerco**.

## 12. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Build única** | Uma combinação de caminhos domina, a wiki publica e todo mundo copia. | Marcos que mudam regras, fraquezas que variam por região e por Era, redistribuição barata e medição da vantagem de cada marco na simulação. |
| **Vocação de farm** | Uma vocação rende muito mais valor por hora e vira a escolha de quem farma (e dos bots). | O olhar de colheita espalha o valor por famílias de material diferentes; meta de valor por hora dentro de ±10% entre vocações, medida no módulo 08. |
| **Papel em falta** | Ninguém quer ser Guardião ou Erveiro e as masmorras travam. | Ajudantes com essas vocações, bônus para papel em falta e nenhuma masmorra que exija um papel. |
| **Ajudante como alt** | Com o tempo, alguém propõe dar uma tarefa ao ajudante, e ele vira uma fila extra. | Decisão registrada na bíblia (proposta 3); qualquer mudança passa pela regra de que filas extras não se vendem nem se multiplicam. |
| **Poder comprável** | Casas de regra, conjuntos ou ajudantes entram na conveniência do Alvará. | Lista explícita do que nunca vai à loja (seção 10, linha do 11). |
| **Cinco estoques para cuidar** | Flechas, óleo, ervas, tochas, refeição e poções viram uma lista de compras chata. | Nada trava: sem o consumível vocacional, a habilidade sai a 60% ou a lanterna apaga. Avisos de estoque, ordem de compra na Bolsa e reposição pelo armazém. |
| **Excesso de regras para o novato** | Posturas, ressonância, peçonha e trilhas assustam no primeiro dia. | Modelos de regras prontos por vocação; as mecânicas-assinatura abrem por nível (a ressonância, por exemplo, no nível 10, junto com a terceira ativa); o editor de regras vem no módulo 14. |
| **Meta-hopping no cerco** | O servidor troca de vocação conforme a fraqueza revelada. | Espera de 7 dias, bloqueio desde o fechamento da inscrição e revelação gradual do Presságio. |
| **Orçamento de poder errado** | O equipamento explica 80% do poder e o mercado decide tudo, ou 20% e ninguém compra. | Meta de 40% a 55% para o equipamento, medida na simulação antes do alfa (seção 4.5). |
| **Sensibilidade cultural** | O Erveiro vira um benzedeiro ou um pajé de caricatura; o Batedor vira um bandeirante; o Encantador usa objetos sagrados. | O Erveiro vem do raizeiro (saber popular de plantas), sem rezas, benzimentos ou defumação; o Batedor vem do vaqueano e do mateiro; nenhum objeto sagrado de religião viva (maracá, cachimbo ritual, patuá) vira equipamento. Revisão de sensibilidade antes da arte ([00-biblia](00-biblia.md), seção 3, módulo 14). |

## Referências deste módulo

- Bíblia e conceito: [00-biblia](00-biblia.md), [02-conceito](../02-conceito.md).
- Pesquisa: [00-sintese](../01-pesquisa/00-sintese.md) (insights 3, 12, 13, 16); [02-padroes-matriz-leis](../01-pesquisa/02-padroes-matriz-leis.md) (leis 2, 8, 10, 14); [03-alem-do-idle](../01-pesquisa/03-alem-do-idle.md) (seções 7 e 12).
- Fichas: [B01 Melvor Idle](../01-pesquisa/fichas/B01-melvor-idle.md) (Auto Eat, consumíveis de combate), [B02 Legends of IdleOn](../01-pesquisa/fichas/B02-legends-of-idleon.md) (árvore de classes, venda de poder), [B03 Idle Champions](../01-pesquisa/fichas/B03-idle-champions.md) (formação, familiares vendidos), [C01 Milky Way Idle](../01-pesquisa/fichas/C01-milky-way-idle.md) (gatilhos, Giant Pouch), [D02 Shakes & Fidget](../01-pesquisa/fichas/D02-shakes-and-fidget.md) (atributos distribuíveis, guerra com inscrição), [G01 Diablo III](../01-pesquisa/fichas/G01-diablo-3-casa-de-leilao.md) (itens presos à conta).
- O folclore usado pelas vocações (Caipora, encantados) e as fontes estão no [04-combate](04-combate.md), seção 12.

