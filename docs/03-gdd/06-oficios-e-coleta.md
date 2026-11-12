# GDD 06 — Ofícios e coleta

> **Módulo 06 do GDD.** Os 12 ofícios, recursos, receitas, cadeias de produção, interdependência, a obra-prima como mecânica ativa, a ligação com o mercado, as oficinas NPC de reforço, o equilíbrio de demanda e o teto de aprendiz. Depende da [bíblia](00-biblia.md) e do [05 — Itens](05-itens.md), que define tiers, qualidades e durabilidade.
> Etiquetas: [F] fato com fonte (quase sempre remetendo à ficha ou ao estudo da Fase 1), [H] proposta do estúdio, [NV] não verificado. **Todo número é [H] até a simulação (módulo 08).** As tabelas de equilíbrio vêm de um modelo de conferência feito à parte, que expande cada receita até o bruto e soma as horas de cada ofício. O script oficial é o do 08.

## Resumo

- **Doze ofícios, três camadas, uma rede.** Cada peça de T3 em diante passa por 4 a 7 ofícios. A espada de ferro exige 6, e o gibão de couro, 7 (seção 5). Insumos sem tier (pedra, casca, resina e carvão) dão trabalho útil ao novato em qualquer fase do servidor.
- **A fila prepara, o ativo acaba.** O ausente produz volume (Comum e Bom) na fila. Quando volta, o mestre faz sessões de 1 a 3 minutos, sem cronômetro e feitas de decisões com risco calculado: a **obra-prima** (qualidade da peça), a obra-prima de transformação (insumo nobre), o lote fino (consumíveis) e o **Faro** (a sessão ativa de quem coleta). Todas gastam **Inspiração**, que acumula 1 por hora, online ou offline, até o teto de offline da conta.
- **Mercado pela natureza do bem:** o que é fungível vai à **Bolsa** (brutos, insumos, consumíveis, kits, reagentes e peças Comuns novas); o que tem estado próprio vai à **Feira** (qualidade, desgaste, acabamento); o que é contado vai ao **Leilão** (Únicos, lendários, relíquias).
- **Oficinas NPC de reforço** vendem insumos, kits, consumíveis básicos e peças de oficina a **2,5× o valor de referência** (o preço do [07](07-economia.md), seção 4.8; revisão de consistência: D7), com limite diário, tudo preso à conta. Ninguém trava, e nenhum cartel passa de cerca de 2,5 a 3,5× o valor de referência.
- **Equilíbrio de demanda verificado** com 4 refeições por hora de combate: cada ofício ficava entre 5,6% e 13,1% das horas exigidas pelo consumo (a meta é 1/12, ou 8,3%). Com 1 refeição por combatente por hora (revisão de consistência: R1), uma hora de combate consome de ~11 minutos de ofício (T1) a ~42 minutos (T6), e a Culinária e a Pesca cairiam abaixo da faixa (seção 9.2). Para segurar a demanda delas, **a refeição também dá um bônus pequeno de ofício e as provisões do cerco e da Fronteira passam a ser refeições** (revisão de consistência: D1). As Obras compensam os ofícios abaixo da média.
- **Teto de aprendiz 30:** o aprendiz faz T1 e T2 de tudo, sempre Comum. O T3 exige nível 35, e a interdependência fica obrigatória por volta da segunda semana.

## 1. Os 12 ofícios num quadro

| Camada | Ofício | Recursos e produtos | Ferramenta (quem faz) | Principais compradores |
|---|---|---|---|---|
| Coleta | **Mineração** | Minério por tier; pedra (sem tier); gemas (subproduto) | Picareta (Ferraria) | Fundição, Obras, Carpintaria, Alquimia |
| Coleta | **Lenhadoria** | Tora por tier; casca e resina (sem tier) | Machado (Ferraria) | Carpintaria, Fundição (carvão), Curtume, Alquimia |
| Coleta | **Pesca** | Peixe por tier; escama (subproduto) | Vara de pesca (Carpintaria) | Culinária, Alquimia |
| Coleta | **Colheita** | Fibra, erva e alimento por tier | Foice (Ferraria) | Tecelagem, Alquimia, Culinária |
| Transformação | **Fundição** | Carvão; lingotes e ligas | Fole (Alfaiataria) | Ferraria, Carpintaria, Alfaiataria, Obras |
| Transformação e criação | **Carpintaria** | Tábua e cabo; arco, escudo, cajado, bordão, flechas, vara, tear, pilão, kit de marcenaria, móveis, paliçada | Serrote (Ferraria) | Ferraria, Alfaiataria, vocações, vários ofícios (ferramentas) |
| Transformação | **Curtume** | Couro (pele do combate + casca) | Faca de descarne (Ferraria) | Alfaiataria, Ferraria, Carpintaria |
| Transformação | **Tecelagem** | Tecido e linha; decoração de pano (tapeçaria, tapete) | Tear (Carpintaria) | Alfaiataria, Carpintaria, Ferraria |
| Criação | **Ferraria** | Espada, adaga, armadura pesada, lanterna, 8 ferramentas, kit de metal, estrepes | Martelo (Ferraria) | Cavaleiro, Ladino, quase todos os ofícios |
| Criação | **Alfaiataria** | Armaduras média e leve, aljava, bornal, fole, kit de costura, Moda da Cidade | Agulhas e tesoura (Ferraria) | Caçador, Ladino, Mago, Druida, Fundição |
| Criação | **Alquimia** | Poções, óleo de arma, pó arcano, unguento, corante, reagentes, breu de cerco | Alambique (Ferraria) | Todas as vocações; todo mestre que faz obra-prima |
| Criação | **Culinária** | Refeições, ração de viagem, banquete de cerco | Pilão (Carpintaria) | Todas as vocações; Obras (mutirão) |

**O combate também coleta:** as vocações soltam **pele** (Curtume), **carne de caça** (Culinária), **cinza de névoa** (Alquimia) e **pele rara**. **O combate não solta ouro** ([04](04-combate.md); [07](07-economia.md), seção 2.2; revisão de consistência: R2). A bíblia liga o combate ao Curtume (seção 6.3), e este módulo estende essa ligação à Culinária e à Alquimia.

## 2. Regras comuns a todos os ofícios

### 2.1 Níveis, tiers e mestre

- Nível de ofício de 1 a 100 (bíblia, seção 6.2). **Nível exigido por tier:** T1 = 1, T2 = 15, T3 = 35, T4 = 55, T5 = 75, T6 = 90. Dentro do tier, peças pequenas pedem +2 e armas e peças de corpo pedem +5 (tabelas da seção 11).
- **Dois ofícios mestres** vão até 100 e à maestria. **Os outros dez param em 30** (o teto de aprendiz, seção 10).
- **Habilidades do ofício** (obra-prima, obra-prima de transformação, lote fino e Faro): **abrem no nível 10 do ofício, para mestres e aprendizes** (revisão de consistência: R11). O teto de aprendiz limita só o tier (T1 e T2) e a qualidade (Comum): o aprendiz abre as sessões, mas o que passa do Comum (a chance de Bom na fila, a peça Fina ou melhor, o lote Fino) fica com o mestre. O lendário pede T4 a T6 e é só de mestre.

### 2.2 Velocidade

```
tempo = tempo_base(T) ÷ V
tempo_base(T) = tempo_T1 × f(T)      f = 1,0 · 1,4 · 1,8 · 2,3 · 2,9 · 3,75   (T1 a T6)
V = dom(n) = 1 + 0,01 × mín(10; nível − nível de desbloqueio do tier mais alto disponível)
```

**A ferramenta não acelera** (revisão de consistência: R16): ela é portão de tier, tem durabilidade e dá Faro (chance de matéria rara) ou Esmero (chance de Bom), mas não mexe no tempo. O domínio é o do [02](02-progressao.md), seção 2.2, com teto de +10%. Na simulação, com a ferramenta acelerando a fila até 1,72 vez o nominal, o hardcore chegava ao 100 no D85 e o IPC ia a +83% ao ano ([08](08-simulacao.md), decisão 1).

- A coleta de T1 leva 8 s e chega a 30 s no T6, que é o limite da âncora da bíblia (3 a 30 s por unidade). A Colheita leva 6 s no T1 e 22,5 s no T6, porque alimenta três cadeias.
- **Insumos sem tier** (pedra, casca, resina e carvão) levam o tempo do T1 em qualquer fase. Um iniciante coleta casca tão rápido quanto um veterano, e a casca serve ao couro do T6.
- **Exemplo** (refeito sem a aceleração da ferramenta; revisão de consistência: R16): mineiro nível 40, minério de ferro (T2), picareta de aço (T3) Boa. O tier mais alto disponível é o T3 (aberto no 35), então V = 1 + 0,01 × 5 = 1,05. Tempo = 11,2 s ÷ 1,05 = 10,7 s, ou 337 minérios por hora. A picareta Boa não acelera: dá acesso até o T3, dura mais e acha mais matéria rara. O V máximo é 1,10.
- **Ferramenta é portão:** sem ferramenta do tier (ou de tier maior), não se trabalha naquele tier ([05](05-itens.md), seção 4.5).
- **[proposta de mudança na bíblia]** A âncora de 3 a 30 s vale para a **coleta**. A transformação e os consumíveis vão de 6 s a 3 min por unidade (o lingote de aldarita leva 94 s). A criação de equipamento é uma **ação longa**, de 5 a 115 minutos por peça (a espada de cobre leva 25 minutos; a couraça de aldarita, 113). Motivo: a peça concentra o trabalho de dezenas de unidades, e só assim a Ferraria e a Alfaiataria têm uma fatia justa das horas (seção 9).

### 2.3 Fila, teto de emissão e vínculo

**Nada nasce preso pela produção** (revisão de consistência: R18). O **teto de emissão** é um portão de saída: limita o valor criado pela própria conta que sai dela por dia (venda, Troca, venda a NPC), contado em **valor de referência fixo** (VR: o trabalho embutido da seção 11.5 vezes 2,0 ouro por minuto). Os insumos comprados dão crédito na mesma régua; os presos (da Oficina da Cidade ou do NPC) não dão crédito. O que passa do teto fica para uso próprio, Encomendas e Obras (que pagam em Mérito), ou sai nos dias seguintes. Regras completas no [07](07-economia.md), seção 3; aplicação aos itens no [05](05-itens.md), seção 9.

### 2.4 Inspiração: o recurso das sessões ativas

| Regra | Valor [H] |
|---|---|
| Ganho | **+1 por hora real**, online ou offline |
| Teto | **Igual ao teto de offline da conta:** 24 no início, até 72, conquistado jogando |
| Custo | Faro 2 · obra-prima de transformação 2 · lote fino 2 · obra-prima de criação 3 (T1–T2), 4 (T3–T4) ou 5 (T5–T6) · lendário 10 |
| Negociável? | Não. Nunca à venda (zona vermelha, P7) |
| Ritmo esperado | De 5 a 12 sessões por dia, de 1 a 3 minutos cada |

- [F] O Albion acumula 10.000 de Focus por dia para crafting e refino com bônus, e o ausente volta com um recurso de valor ([F02](../01-pesquisa/fichas/F02-albion-online.md)). Aqui, a Inspiração é igual para quem paga e quem não paga.
- **Por que o teto acompanha o offline:** quem fica fora 24 h volta com 24 de Inspiração e nada se perdeu. Uma regra só para os dois.
- **Contra bots:** a Inspiração limita o que uma conta produz em sessões ativas. Um script perfeito rende o mesmo que um humano atento.

## 3. A identidade de cada ofício

| Ofício | Por que é indispensável | Sessão ativa | Risco próprio e mitigação |
|---|---|---|---|
| Mineração | Todo metal; pedra das Obras e do fundente T4; gema do cajado, da decoração e das receitas raras | Faro: *Prospecção* (veio puro, gemas) | O ferro tem demanda dupla (T2 e aço); bots de coleta, contidos pelo teto de emissão |
| Lenhadoria | O carvão de toda a Fundição (só pinho e bétula); tábuas e cabos; casca do Curtume; resina da Alquimia e dos kits | Faro: *Corte seletivo* (cerne) | Fatia baixa nos tiers altos; as Obras pedem madeira |
| Pesca | A refeição, o maior consumo recorrente; escama das poções e dos reagentes | Faro: *Ceva* (peixe raro) | Só tem dois compradores; o banquete de cerco amplia a demanda |
| Colheita | Três cadeias ao mesmo tempo: tecido, Alquimia e Culinária | Faro: *Forrageio* (fibra longa ou erva rara) | A fatia mais alta (13%); mais jogadores vão escolhê-la, o que é aceitável |
| Fundição | Todo lingote e toda liga; todo kit de metal | Obra-prima: *lingote temperado* | O carvão trava se a Lenhadoria de T1–T2 esvaziar; a Oficina da Cidade vende carvão |
| Carpintaria | Cabos de quase toda arma e ferramenta; armas de três vocações | Obra-prima: *tábua de cerne* e peças | Duas camadas num ofício só; o tempo de criação (35 s por unidade) é menor que o da Ferraria |
| Curtume | O couro está em armas, escudos, arcos, armaduras médias, sandálias e kits de costura | Obra-prima: *couro encerado* | Depende de peles do combate; drops calibrados com folga (seção 9.4) |
| Tecelagem | A linha costura todo couro e tecido; o tecido veste duas vocações | Obra-prima: *brocado* | A linha sai barata (720 por hora); a margem vem do tecido e do brocado |
| Ferraria | Ferramentas de 8 ofícios e o reparo de todo metal | Obra-prima de peças | Peças longas (25 minutos a espada de cobre); a obra-prima não acelera, porque o ativo ganha qualidade, e não volume |
| Alfaiataria | Quatro das cinco vocações vestem Alfaiataria; reparo de couro e tecido | Obra-prima de peças | A maior fatia entre as criações (10%) |
| Alquimia | Os reagentes são a moeda da obra-prima, consumida no uso como as orbs do Path of Exile ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)); consumíveis de três vocações | Lote fino | Um reagente obrigatório viraria imposto; ele é sempre opcional |
| Culinária | Todo combate come: 1 refeição por combatente por hora (o personagem e cada ajudante; revisão de consistência: R1) | Lote fino | Refeição de pouca margem; o lote fino e o banquete dão a margem. Com 1 refeição por hora, a demanda do combate cai a cerca de um quarto (seção 9.2); o bônus de ofício da refeição e as provisões do cerco e da Fronteira, que passam a ser refeições, repõem a demanda (revisão de consistência: D1) |

## 4. Cadeias de produção

Quantidades exatas da seção 11. Entre colchetes, o tempo de fila em T2, sem bônus.

### 4.1 Do minério à espada (T2)

```
Espada de ferro ......................................... Ferraria [35 min]
├── 16 lingotes de ferro ................................ Fundição [35 s cada]
│   ├── 48 minérios de ferro ............................ Mineração [11,2 s cada]
│   └── 32 carvões ...................................... Fundição [6 s por 2]
│       └── 16 toras de pinho ou bétula ................. Lenhadoria
├── 2 cabos de bétula ................................... Carpintaria [14 s cada]
│   └── 2 toras de bétula ............................... Lenhadoria
└── 2 couros de lobo .................................. Curtume [63 s cada]
    ├── 4 peles de lobo ............................... combate
    └── 2 cascas ........................................ Lenhadoria
Ofícios: Mineração, Lenhadoria, Fundição, Carpintaria, Curtume, Ferraria (6) + combate
Trabalho embutido: cerca de 60 minutos de ofício
```

### 4.2 A liga puxa o tier de baixo (T3)

```
Lingote de aço .......................................... Fundição (T3)
├── 1 minério negro ............................... Mineração (T3)
├── 2 minérios de ferro ................................. Mineração (T2)
└── 3 carvões ← 1,5 tora de pinho ou bétula ............. Lenhadoria (T1–T2)
```

Cada espada de aço consome 32 minérios de ferro. O minerador de T2 continua com freguês quando o servidor amadurece.

### 4.3 Da fibra à túnica (T2)

```
Túnica de linho .......................................... Alfaiataria [19,5 min]
├── 12 tecidos de linho .................................. Tecelagem [56 s cada]
│   └── 24 feixes de linho ................................ Colheita
├── 8 linhas de linho .................................... Tecelagem [14 s por 2]
│   └── 4 feixes de linho ................................. Colheita
└── 2 corantes .......................................... Alquimia [21 s cada]
    └── 4 sálvias ........................................ Colheita
Ofícios: Colheita, Tecelagem, Alquimia, Alfaiataria (4)
```

### 4.4 Da pele ao gibão (T2): sete ofícios numa peça

```
Gibão de lobo ......................................... Alfaiataria [20,4 min]
├── 12 couros de lobo ................................. Curtume
│   ├── 24 peles de lobo .............................. combate (Caçador e Ladino soltam mais)
│   └── 12 cascas ....................................... Lenhadoria
├── 8 linhas de linho .................................... Tecelagem ← 4 feixes de linho (Colheita)
└── 3 lingotes de ferro (rebites) ....................... Fundição
    ├── 9 minérios de ferro ............................. Mineração
    └── 6 carvões ← 3 toras ............................. Lenhadoria
Ofícios: Curtume, Lenhadoria, Tecelagem, Colheita, Fundição, Mineração, Alfaiataria (7) + combate
```

### 4.5 Do rio à refeição (T2)

```
Ensopado (refeição) ................................ Culinária [21 s]
├── 2 carpas ........................................... Pesca
├── 1 carne de caça (T2) ................................ combate
└── 1 cevada ............................................. Colheita
Receitas alternativas: 3 carpas + 1 cevada (pescador) · 2 carnes + 2 cevadas (caçador)
```

Três receitas para o mesmo item (um livro só na Bolsa) dão folga quando falta peixe ou carne.

### 4.6 O reparo também é cadeia

```
Kit de costura (T2) ..................................... Alfaiataria [84 s]
├── 2 couros de lobo .................................. Curtume ← peles (combate) + casca (Lenhadoria)
├── 2 tecidos de linho ................................... Tecelagem ← feixes de linho (Colheita)
└── 4 linhas de linho .................................... Tecelagem ← feixes de linho (Colheita)
```

Quem veste couro ou tecido depende, a cada reparo, de cinco ofícios.

### 4.7 A cadeia ativa: três mestres numa obra-prima

```
Espada de aço Obra-prima ................................ sessão da ferreira (Inspiração 4)
├── peça em bruto ....................................... fila da Ferraria (cadeia 4.1, com aço)
├── 1 lingote temperado de aço .......................... sessão de um fundidor (Inspiração 2)
│   └── 1 veio puro de minério negro ......................... Faro de um minerador (Inspiração 2)
└── 1 calmante (reagente T3) ............................ Alquimia ← 2 resinas (Lenhadoria) + 1 arruda (Colheita)
```

Uma obra-prima com insumo nobre junta o trabalho ativo de três mestres diferentes e o volume de outros cinco ofícios.

## 5. Interdependência

### 5.1 Quantos ofícios cada item exige (T2)

| Item | Ofícios envolvidos | Total |
|---|---|---|
| Espada de ferro | Mineração, Lenhadoria, Fundição, Carpintaria, Curtume, Ferraria | 6 + combate |
| Gibão de lobo | Curtume, Lenhadoria, Tecelagem, Colheita, Fundição, Mineração, Alfaiataria | 7 + combate |
| Escudo de bétula | Lenhadoria, Carpintaria, Mineração, Fundição, Curtume | 5 + combate |
| Arco de bétula | Lenhadoria, Carpintaria, Colheita, Tecelagem, Curtume | 5 + combate |
| Cajado de bétula | Lenhadoria, Carpintaria, Colheita, Tecelagem, Mineração (quartzo), Fundição (ponteira) | 6 |
| Túnica de linho | Colheita, Tecelagem, Alquimia, Alfaiataria | 4 |
| Vara de pesca | Lenhadoria, Carpintaria, Colheita, Tecelagem, Mineração, Fundição | 6 |
| Fole (ferramenta da Fundição) | Curtume, Lenhadoria, Carpintaria, Colheita, Tecelagem, Alfaiataria | 6 + combate |
| Kit de costura | Curtume, Lenhadoria, Colheita, Tecelagem, Alfaiataria | 5 + combate |
| Refeição | Pesca, Colheita, Culinária | 3 + combate |
| Poção de cura | Colheita, Pesca, Alquimia | 3 |

### 5.2 Quem abastece quem

| Ofício | Abastece diretamente |
|---|---|
| Mineração | Fundição (minério, pedra fundente), Carpintaria (gema do cajado), Obras (pedra) |
| Lenhadoria | Carpintaria (tora, resina), Fundição (tora para carvão), Curtume (casca), Alquimia (resina) |
| Pesca | Culinária (peixe), Alquimia (escama) |
| Colheita | Tecelagem (fibra), Alquimia (erva), Culinária (alimento) |
| Fundição | Ferraria (lingote, carvão), Carpintaria (lingote: escudo, cajado, bordão, flechas, vara), Alfaiataria (rebites) |
| Carpintaria | Ferraria (cabos), Alfaiataria (tábua do fole), Pesca (vara), Tecelagem (tear), Culinária (pilão) |
| Curtume | Ferraria, Carpintaria e Alfaiataria (couro) |
| Tecelagem | Alfaiataria (tecido, linha), Carpintaria (linha, tecido), Ferraria (pavio da lanterna) |
| Ferraria | Ferramentas de Mineração, Lenhadoria, Colheita, Carpintaria, Curtume, Ferraria, Alfaiataria e Alquimia; kits de metal |
| Alfaiataria | Fundição (fole); kits de costura |
| Alquimia | Alfaiataria (corante); toda obra-prima (reagentes); combate |
| Culinária | Combate; Obras |

**Leitura** [H]: todo ofício compra de pelo menos dois outros e vende para pelo menos dois. Não existe ofício-folha que ninguém precise.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Rede densa de receitas (4 a 7 ofícios por peça) | [F] Cadeia coletar → refinar → fabricar do Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)); especialização via mercado do Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); teto de pontos do SWG ([03, §8](../01-pesquisa/03-alem-do-idle.md)) | O jogador autossuficiente que não precisa de ninguém ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) | Comércio, encomendas, guildas de produção | Gargalo quando falta gente num ofício; oficinas NPC (seção 8) e receitas alternativas |
| Ferramentas cruzadas (a Fundição depende da Alfaiataria, a Pesca da Carpintaria) | [H] Insight do 03, §8: consumo e perda em cada elo | Ofícios de coleta e transformação que não compram nada | Todo ofício é cliente de outro | Ciclo de dependência no lançamento; ferramentas T1–T2 ao alcance do aprendiz |

## 6. A obra-prima: decisões, não reflexo

### 6.1 Princípio: a fila prepara, o ativo acaba

- Na fila, o mestre marca peças **para obra-prima**. Elas ficam prontas **em bruto** na bancada, com o **mesmo tempo de fila** de uma peça comum. A bancada guarda 5 peças em bruto (ampliável pelo [02](02-progressao.md)).
- Quando volta, o mestre faz a **sessão de acabamento**: de 1 a 3 minutos, gastando Inspiração. A sessão **não interrompe a fila**.
- **O ausente nunca perde:** com a bancada cheia, a fila acaba as próximas peças do jeito normal. Uma peça em bruto pode ser acabada "na fila" a qualquer momento, com a chance normal de Comum ou Bom.
- **Por que assim:** a obra-prima dá **qualidade, nunca volume**. O ativo não produz mais peças que o ausente; produz peças melhores. É a frase do conceito ("o ativo ganha qualidade, o ausente ganha volume") transformada em regra.

### 6.2 A sessão de criação (Ferraria, Alfaiataria, Carpintaria)

**Abertura.** O jogador escolhe 1 de 3 **métodos** do ofício. Na Ferraria: *Forja lenta* (a ação Firme rende +2 pontos), *Forja quente* (a Ousada rende +20% de pontos e custa +5 de tensão) e *Dobra* (começa com 10 pontos e 10 de tensão).

**Quatro etapas.** Em cada uma, o material revela um **temperamento**: uma carta de um baralho próprio do ofício, com pesos publicados. O jogador vê o temperamento da etapa atual e o da próxima. Depois escolhe **uma ação**:

| Ação | Pontos de qualidade (PQ) | Tensão |
|---|---|---|
| **Firme** | +12, fixo | +5 |
| **Ousada** | +18 a +30 (faixa mostrada na tela) | +20 |
| **Técnica do ofício** (1 vez por sessão) | ver tabela abaixo | ver tabela abaixo |

Antes de cada ação, o jogador pode gastar até **2 reagentes por sessão** e **1 insumo nobre**:

| Recurso | Efeito |
|---|---|
| Calmante (reagente) | −25 de tensão |
| Realce (reagente) | A próxima ação rende +50% de pontos |
| Visão (reagente) | Revela todos os temperamentos que faltam |
| Insumo nobre (da linha do material principal da peça) | +18 pontos sem tensão; libera um acabamento especial |

**Fim.**
- **Limiares:** abaixo de 40, Comum; de 40 a 69, Bom; de 70 a 99, Fino; 100 ou mais, Obra-prima; **130 ou mais, com insumo nobre, Único** ([05](05-itens.md), seção 7.1).
- **Tensão:** se chegar a 100 em qualquer momento, **a peça trinca** e sai Comum. A peça nunca se perde; perdem-se os reagentes e o insumo nobre já usados.
- **Acabamento:** o jogador distribui os pontos de acabamento da qualidade alcançada ([05](05-itens.md), seção 5.1).
- **Bônus de nível:** +1 ponto por ação a cada 10 níveis acima do exigido (máximo +3).
- **"Mão firme" (anti-frustração):** cada sessão que termina abaixo de Fino dá +8 pontos iniciais na próxima do mesmo ofício (acumula até +24) e zera quando o jogador alcança Fino. Regra publicada, no espírito do *failstack* do Black Desert, em que o azar tem fim conhecido ([F08](../01-pesquisa/fichas/F08-black-desert.md)).
- **Maestria** (a reconciliar com o [02](02-progressao.md)): ver 2 ou 3 temperamentos à frente e ganhar um 2º uso de técnica.

**Baralho de temperamentos da Ferraria** (cada ofício tem o seu, com a mesma estrutura):

| Temperamento | Peso | Efeito na etapa |
|---|---|---|
| Veio limpo | 20% | A ação rende +50% de pontos |
| Metal dócil | 15% | −5 de tensão em qualquer ação |
| Brasa viva | 15% | A Ousada custa só +10 de tensão |
| Bolha | 15% | A Ousada custa +15 de tensão a mais |
| Liga teimosa | 15% | A Firme rende metade |
| Rachadura oculta | 10% | Se a tensão estiver em 50 ou mais no fim da etapa, +15 |
| Fagulha | 10% | A técnica, usada nesta etapa, rende o dobro |

**Técnicas por ofício** (uma vez por sessão):

| Ofício | Técnica | Efeito |
|---|---|---|
| Ferraria | Têmpera | −20 de tensão e +6 pontos |
| Carpintaria | Leitura do veio | Revela os temperamentos que faltam e troca um deles |
| Alfaiataria | Pesponto | A próxima ação rende o dobro de pontos e o dobro de tensão |
| Fundição | Banho de cinza | −15 de tensão |
| Curtume | Curtume lento | +15 pontos; a etapa seguinte não aceita Ousada |
| Tecelagem | Trama fechada | +8 pontos e −8 de tensão |
| Alquimia | Destilação dupla | Desfaz a última ação e deixa escolher de novo |
| Culinária | Ponto certo | Se a tensão estiver entre 40 e 60, +20 pontos |

### 6.3 Exemplo de sessão: espada de aço (T3)

A ferreira Edda está no nível 55 (a receita pede 40, o que dá +1 ponto por ação). Ela gasta 4 de Inspiração e usa 1 realce. Não tem insumo nobre.

| Etapa | Temperamento (próximo) | Decisão | Pontos | Tensão |
|---|---|---|---|---|
| Método | — | Forja quente | 0 | 0 |
| 1 | Veio limpo (Bolha) | Ousada, que rola 24: 24 × 1,2 (quente) × 1,5 (veio) + 1 | **44** | 20 + 5 = **25** |
| 2 | Bolha (Brasa viva) | Firme, porque Ousada com Bolha custaria +40 de tensão: 12 + 1 | **57** | **30** |
| 3 | Brasa viva (Rachadura oculta) | Realce e Ousada, que rola 22: 22 × 1,2 × 1,5 + 1 | **98** | 10 + 5 = **45** |
| 4 | Rachadura oculta | Ousada, que rola 22: 22 × 1,2 + 1; a tensão passa de 50 e a rachadura soma +15 | **125** | 45 + 25 + 15 = **85** |
| Fim | — | Obra-prima com 125 pontos: 2 + 2 = 4 pontos de acabamento | | |

Edda põe 2 pontos em Bloqueio (de 7,5% para 9,5%) e 2 em têmpera (+10% de durabilidade). Na etapa 4, a Firme teria dado 111 pontos com tensão 65, uma obra-prima com 3 pontos de acabamento e sem risco. Ela arriscou um ponto a mais. Se a Ousada tivesse rolado 30, teria feito 135 pontos, mas sem insumo nobre não haveria Único. **Essa é a decisão que o jogo quer:** ler o próximo temperamento, gastar o reagente no momento certo e saber quando parar.

**Distribuição-alvo** [H, calibrar no alfa], para um mestre no nível da receita + 10:

| Situação | Comum | Bom | Fino | Obra-prima | Único |
|---|---|---|---|---|---|
| Sem insumo nobre, 1 reagente | 5% | 25% | 50% | 20% | 0% |
| Com insumo nobre e 2 reagentes | 2% | 6% | 27% | 60% | 5% |

### 6.4 As outras sessões ativas

| Sessão | Quem faz | Inspiração | O que a fila prepara | Etapas | Resultado |
|---|---|---|---|---|---|
| **Obra-prima de criação** | Ferraria, Alfaiataria e Carpintaria (peças), a partir do nível 10 do ofício; o aprendiz fica no Comum (R11) | 3, 4 ou 5, conforme o tier | Peça em bruto | 4 | Qualidade da peça, de Comum a Único |
| **Obra-prima de transformação** | Fundição, Carpintaria (tábua), Curtume e Tecelagem, a partir do nível 10 do ofício (R11) | 2 | Fornada de 10 insumos e 1 matéria rara | 3 | 40 pontos: 1 insumo nobre; 70: 2; 100: 3 (convertidos da fornada) |
| **Lote fino** | Alquimia e Culinária, a partir do nível 10 do ofício; o lote Fino é só de mestre, porque o aprendiz fica no Comum (R11) | 2 | Lote de 10 (T1–T2), 8 (T3–T4) ou 6 (T5–T6) consumíveis | 2 e o "ponto" | A partir de 50 pontos, o lote inteiro sai Fino (+25% de efeito). Erva rara ou peixe raro dá +20 pontos |
| **Faro** | Mineração, Lenhadoria, Pesca e Colheita, a partir do nível 10 do ofício, para mestres e aprendizes (R11) | 2 | Nada: é feito na jazida do tier que a fila está coletando | 3 golpes | Matéria rara, gemas e um punhado de brutos |
| **Lendário** | Mestre de criação com nível da receita + 10 | 10 | Peça em bruto de T4 a T6 | 5 | Lendário a partir de 120 pontos ([05](05-itens.md), seção 7.2) |

**O Faro, a sessão de quem coleta.**
- **O terreno** mostra 6 pontos, cada um com um **sinal** visível. Na Mineração: terra vermelha, brilho no veio, pedra solta, água minando. Cada sinal tem chances publicadas de matéria rara, gema ou nada.
- **Três golpes.** Em cada ponto escolhido, o jogador pode **cavar** (resultado do sinal) ou **aprofundar** (dobra a chance de matéria rara, com 25% de risco de desmoronamento, que encerra a sessão e gasta 20 pd da ferramenta).
- **Média esperada** de um mestre atento: 1 matéria rara por sessão (na Mineração, mais 0,3 gema) e 20 unidades do bruto do tier.
- **Nomes por ofício:** Prospecção (Mineração), Corte seletivo (Lenhadoria: oco, cerne aparente, cupim), Ceva (Pesca: remanso, cardume, sombra no fundo) e Forrageio (Colheita: touceira viçosa, flor fora de época, terra preta).
- **A fila também acha matéria rara,** mas pouco: 1 a cada 2.000 ações. O Faro da ferramenta melhora essa chance ([05](05-itens.md), seção 4.5).
- **Termo novo:** "Faro" é proposto para o glossário, como nome único da sessão ativa das quatro coletas.

**Matérias raras e insumos nobres:**

| Linha | Matéria rara (Faro ou combate) | Insumo nobre (obra-prima de transformação) | Uso principal |
|---|---|---|---|
| Metal | Veio puro (Tn) | Lingote temperado (Tn) | Obra-prima de armas, armadura pesada e lanterna; lendário de metal |
| Madeira | Cerne (Tn) | Tábua de cerne (Tn) | Obra-prima de arco, escudo, cajado e bordão |
| Couro | Pele rara (Tn), só do combate: feras de elite e chefes; o Caçador e o Ladino acham mais | Couro encerado (Tn) | Obra-prima de armadura média e aljava |
| Tecido | Fibra longa (Tn) | Brocado (Tn) | Obra-prima de armadura leve e bornal; Moda da Cidade fina |
| Comida | Peixe raro (Tn) | Vai direto ao lote | Lote fino da Culinária; banquete de cerco |
| Erva | Erva rara (Tn) | Vai direto ao lote | Lote fino da Alquimia |

**Valor de referência das matérias raras e dos insumos nobres (D16, resolvida na Fase 4, [arquitetura](../04-arquitetura.md), §17)** [H]: a matéria rara do tier n vale **2.000 × o VR de uma unidade do bruto do tier n**, o tempo de fila em que ela apareceria por acaso (1 a cada 2.000 ações); o insumo nobre vale **(VR da matéria rara + VR dos 10 insumos da fornada) ÷ 2**, porque um mestre atento tira em média 2 por fornada. Exemplo: o veio puro de ferro (T2) vale ~747 de VR. A calibrar com a telemetria do alfa.

### 6.5 O que nunca entra na obra-prima

- **Cronômetro ou reflexo.** Não há tempo para decidir. A sessão fica salva no servidor e pode ser pausada e retomada, o que serve ao celular e à acessibilidade.
- **Compra.** Inspiração, reagentes e insumos nobres nunca vão à loja nem ao Baú. Os reagentes vêm só da Alquimia dos jogadores.
- **Perda da peça.** O pior resultado é Comum.
- **Chances escondidas.** Os baralhos, as faixas da Ousada e os sinais do Faro são públicos.
- **Jurídico.** A obra-prima tem acaso limitado (temperamentos e faixa da Ousada) e pode usar reagente comprado com ouro, que se troca por Coins (e os Coins vêm de doação em reais). Nossa leitura [H] é que se trata de habilidade com piso garantido, e não de caixa de recompensa como a define a Lei 15.211/2025, art. 2º, IV ("mediante pagamento", "sem conhecer o conteúdo de antemão") ([05b](../01-pesquisa/05b-rmt-legal-brasil.md)). **Validar com advogado.**

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| A fila prepara, o ativo acaba; a sessão não dá volume | [H] P12 e lei 9 ([02](../01-pesquisa/02-padroes-matriz-leis.md)); [F] minigames obrigatórios geram reviews negativas no Idle Slayer ([00, insight 15](../01-pesquisa/00-sintese.md)) | O ativo ganhar tudo, ou ganhar nada | Voltar de 2 a 6 vezes por dia para acabar peças, sem obrigação | Sessões repetitivas cansam; baralhos por ofício e temperamentos novos a cada Era |
| Decisão com risco visível (tensão), sem cronômetro | [F] Experimentação do SWG; lição do Harvest do Path of Exile sobre definir desde o início quanto é controlável ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | Crafting de clique sem escolha ou de sorte pura | Aprender o baralho, planejar o reagente, saber parar | A comunidade calcula a política ótima; aceitável, porque é planejamento, e a faixa da Ousada mantém o risco |
| Inspiração acumulada 1 por hora, com teto igual ao offline | [F] Focus do Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)) | Obra-prima ilimitada para quem fica 10 h online; bots | O ausente volta com Inspiração cheia | Quem tem 72 h de offline acumula mais; é conquista de jogo (P7) |
| Faro como sessão ativa da coleta | [F] Qualidade que nasce de informação e timing no SWG ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | Coletor mestre sem jogo ativo | O coletor ativo vira fornecedor da obra-prima dos outros | Matéria rara demais derruba o valor do insumo nobre; a média de 1 por sessão é calibrável |
| Cadeia ativa entre mestres (Faro → transformação → criação) | [H] Insight 19 (cooperação com prazo) aplicado ao crafting | Obra-prima solitária | Contratos e encomendas entre mestres | Se uma ponta falta, a outra trava; o insumo nobre é opcional abaixo de 130 pontos |

## 7. Ligação com o mercado

**Regra geral:** o que é fungível vai à **Bolsa** (livro de ordens); o que tem estado próprio (qualidade acima de Comum, desgaste, acabamento, assinatura) vai à **Feira** (preço fixo); o que é contado ou excepcional vai ao **Leilão** (lances). A **peça Comum nova** é fungível e tem livro na Bolsa: é por aí que o volume do ausente encontra comprador **[proposta de mudança na bíblia, a reconciliar com o [07](07-economia.md)]**.

| Ofício | Bolsa | Feira | Leilão | Quem compra |
|---|---|---|---|---|
| Mineração | Minérios, pedra, gemas, veio puro | — | — | Fundição, Obras, Carpintaria, Alquimia |
| Lenhadoria | Toras, casca, resina, cerne | — | — | Carpintaria, Fundição, Curtume, Alquimia |
| Pesca | Peixes, escama, peixe raro | — | — | Culinária, Alquimia |
| Colheita | Fibras, ervas, alimentos, fibra longa, erva rara | — | — | Tecelagem, Alquimia, Culinária |
| Fundição | Carvão, lingotes, lingote temperado | — | — | Ferraria, Carpintaria, Alfaiataria, Obras |
| Carpintaria | Tábuas, cabos, tábua de cerne, flechas, kit de marcenaria, peças Comuns novas | Arcos, escudos, cajados, bordões, ferramentas e móveis de qualidade ou usados | Únicos | Caçador, Cavaleiro, Mago, Druida; Pesca, Tecelagem e Culinária (ferramentas) |
| Curtume | Couros, couro encerado | — | — | Alfaiataria, Ferraria, Carpintaria |
| Tecelagem | Tecidos, linhas, brocado | Tapeçarias e tapetes | — | Alfaiataria, Carpintaria, Ferraria |
| Ferraria | Kits de metal, peças Comuns novas | Armas, armaduras pesadas, lanternas e ferramentas de qualidade ou usadas | Únicos e lendários | Cavaleiro, Ladino, oito ofícios (ferramentas) |
| Alfaiataria | Kits de costura, peças Comuns novas | Armaduras média e leve, aljava, bornal e fole de qualidade ou usados; Moda da Cidade | Únicos e lendários | Caçador, Ladino, Mago, Druida, Fundição |
| Alquimia | Poções, óleos, pós, unguentos, corante e reagentes (Comum e Fino) | — | — | Todas as vocações; todo mestre que faz obra-prima |
| Culinária | Refeições e rações de viagem (Comum e Fino) | — | — | Todas as vocações; Obras (mutirão) |

**Outros destinos da produção:**
- **Venda a NPC** (preço decrescente por volume diário, bíblia 6.6): só bens básicos, ou seja, brutos e insumos de T1–T2, pedra e carvão. A reconciliar com o 07.
- **Encomendas e Obras** aceitam itens presos à conta e pagam em Mérito (e, nas Encomendas, também na recompensa definida pelo [09](09-social.md)). São o comprador de último recurso do excedente de quem sobe de nível.
- **Regras de venda do ausente:** antes de sair, o artesão pode deixar regras como "vender toda espada Comum nova contra ordens de compra acima de 90% do valor estimado". O detalhe é do 07. A automação é grátis e nunca vai à loja (P7).

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Fungível na Bolsa, estado próprio na Feira, contado no Leilão | [F] O Path of Exile separou commodities num livro de ofertas e itens únicos em listagem com compra instantânea ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)); livro de ordens do Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)) | Itens diferentes num mesmo livro; o ausente sem comprador | O ausente vende volume por ordens persistentes; o ativo anuncia peças assinadas | Livros rasos para itens raros de tier alto; agrupar por família na interface |
| Peça Comum nova na Bolsa | [H] P12: o volume do ausente tem mercado próprio | O Comum encalhado na Feira, sem liquidez | Ordens de compra de equipamento (guildas equipando membros) | Muitos livros (um por peça e tier); só a Comum nova entra, Bom e acima vão à Feira |

## 8. Oficinas NPC de reforço (Oficina da Cidade)

| Regra | Valor [H] |
|---|---|
| O que vende | Insumos (carvão, lingote, tábua, cabo, couro, tecido e linha) de T1 a T6; kits de reparo de T1 a T6; refeição e poção de cura de T1 a T6; **peças de oficina** de T1 a T6 |
| Peça de oficina | Comum com −10% nos atributos, −20% de durabilidade máxima e **1 reparo só** (17 h de vida em uso normal) |
| O que nunca vende | Brutos (o coletor não perde o freguês), matérias raras, insumos nobres, reagentes, Fino, qualidade acima de Comum, cosméticos |
| Preço | **2,5 × VR** do item, em ouro (o preço-teto do [07](07-economia.md), seção 4.8; revisão de consistência: D7), com +10% a cada faixa de volume vendida no servidor no dia; zera à meia-noite |
| Limite por conta e por dia | Insumos e kits até 120 minutos de VR; 2 peças de oficina; 20 consumíveis |
| Vínculo | **Tudo preso à conta**, e o que for feito com esses itens também ([05](05-itens.md), seção 9) |
| Para onde vai o ouro | Destruído (dreno) |
| Alarme | Se a oficina atender mais de 5% do consumo de um item por 7 dias, o painel público mostra o ofício em falta e avisa o Conselho e o estúdio |

**Por que 2×.** O teto efetivo de preço que um cartel consegue cobrar é calculado pelo custo por hora da alternativa:
- **Insumo:** passa de 2,5× VR e o comprador vai à Oficina. Teto ≈ **2,5× VR** (refeito com o preço do 07; revisão de consistência: D7).
- **Peça:** a espada de ferro de jogador custa 60 min de VR, mais 3 reparos (6 kits de cerca de 7 min), num total de 103 min para 33,6 h, ou **3,1 min/h**. A de oficina custa 150 min (2,5 × 60), mais 1 reparo (2 kits a 2,5×, cerca de 35 min), num total de 185 min para 17,3 h, ou **10,7 min/h**. Um cartel de ferreiros (peça e kits) só perde o cliente para a Oficina acima de cerca de **3,5× VR** (103 × 3,5 ÷ 33,6 ≈ 10,7). A concorrência entre ferreiros e o insumo com teto seguram o preço bem antes disso.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Oficina NPC a 2,5× VR (revisão de consistência: D7), com limite diário e tudo preso | [H] Concorrente de reserva do conceito ([02-conceito](../02-conceito.md), riscos); [F] comprador NPC de último recurso ([03, §8](../01-pesquisa/03-alem-do-idle.md)) | Gargalo de ofício (ninguém faz couro) e cartel | Nunca travar; preferir o jogador, que é bem mais barato | Virar fonte principal se o preço for baixo demais; alarme de 5% e rampa de preço |
| Não vende brutos nem nada de qualidade | [F] O Black Market do Albion protege quem produz ([F02](../01-pesquisa/fichas/F02-albion-online.md)) | NPC concorrendo com o coletor e com o mestre ativo | O topo do mercado é sempre do jogador | Um gargalo na coleta não tem válvula direta; os insumos da Oficina cobrem o caso |
| Tudo preso à conta | [H] Lei 16 ([02](../01-pesquisa/02-padroes-matriz-leis.md)) | Arbitragem: comprar do NPC e revender | Usar a Oficina só para si | Menos liquidez em crise; aceitável |

## 9. Equilíbrio de demanda entre os ofícios

### 9.1 O que uma hora de combate consome

O modelo de conferência expande o consumo de uma hora de combate (desgaste de equipamento e reparos, consumíveis, e o desgaste das ferramentas de quem produziu tudo isso) até o bruto. Depois, soma as horas de cada ofício. A média é feita entre as cinco vocações em partes iguais. Nos tiers T5 e T6 as ligas foram aproximadas.

| Tier | Minutos de ofício por hora de combate (com 4 refeições) | Com 1 refeição (R1, estimativa) | Equipamento, ferramentas e kits (com 1 refeição) | Consumíveis (com 1 refeição) |
|---|---|---|---|---|
| T1 | 12,4 | ~10,6 | 65% | 35% |
| T2 | 17,2 | ~14,5 | 65% | 35% |
| T3 | 22,4 | ~19,1 | 66% | 34% |
| T4 | 29,4 | ~24,9 | 67% | 33% |
| T5 | 37,8 | ~32,4 | 68% | 32% |
| T6 | 49,0 | ~41,5 | 68% | 32% |

**Revisão de consistência (R1):** o modelo de conferência contava 4 refeições por hora de combate; a regra agora é **1 refeição por combatente por hora** (o personagem e cada ajudante, [04](04-combate.md)). A coluna nova tira 3 refeições pelo trabalho embutido da tabela 12.3 (0,6 min no T1 a 2,5 min no T6); cada ajudante em combate soma de volta 1 refeição. A simulação (08) usou 1 refeição e ~3 poções e ficou ~10% abaixo da coluna antiga.

**Leitura.** Se o jogador médio divide a fila meio a meio entre combate e ofícios, o consumo do combate absorve de ~17% (T1) a ~69% (T6) do que os ofícios produzem (com 4 refeições, eram 20% e 82%). O resto vai para Obras, Encomendas, cercos, progresso e excedente guardado na conta (nada nasce preso; R18). Um servidor jovem, concentrado em T1–T2, tem muito excedente. Isso combina com a narrativa (a cidade está sendo construída) e exige **Obras pesadas no início**. Num servidor maduro, o consumo de combate sustenta os ofícios sozinho. É o principal dado para o [07](07-economia.md) e o [08](08-simulacao.md).

### 9.2 Participação de cada ofício nas horas exigidas

| Ofício | T1 | T2 | T4 | T6 |
|---|---|---|---|---|
| Colheita | 13,0% | 13,1% | 12,7% | 12,4% |
| Alfaiataria | 10,3% | 10,4% | 10,0% | 9,8% |
| Alquimia | 9,2% | 9,2% | 8,9% | 8,7% |
| Culinária | 9,0% | 9,1% | 8,8% | 8,6% |
| Pesca | 8,6% | 8,7% | 8,3% | 8,2% |
| Ferraria | 7,9% | 8,1% | 8,0% | 8,2% |
| Curtume | 8,0% | 8,1% | 7,8% | 7,6% |
| Tecelagem | 7,6% | 7,7% | 7,4% | 7,2% |
| Fundição | 7,4% | 7,1% | 6,9% | 6,8% |
| Carpintaria | 6,7% | 6,8% | 6,6% | 6,6% |
| Lenhadoria | 6,6% | 6,1% | 7,1% | 8,2% |
| Mineração | 5,6% | 5,7% | 7,5% | 7,7% |

**Revisão de consistência (R1):** a tabela acima foi calculada com 4 refeições por hora. Com 1 refeição por combatente, a demanda de combate da Culinária cai para ~3,5% das horas e a da Pesca para ~2,5% (no T1, estimativa desta revisão), abaixo da tolerância; os outros ofícios sobem um pouco. **Resolução do diretor (revisão de consistência: D1):**
- **A refeição também dá um bônus pequeno de ofício:** por exemplo, +3% de eficiência numa fila por 1 h [H]. O bônus conta dentro do teto de 1,10× do domínio e nunca o ultrapassa (D15). **A 2ª rodada da simulação recomenda tirar o bônus** ([08](08-simulacao.md), seção 10): os consumíveis já faltam no modelo, e o bônus leva a inflação a +100% ao ano. Decisão 4 do checkpoint da Fase 4. A refeição é consumida ao ser comida, então quem só produz também come, e a demanda de Culinária e Pesca deixa de depender só do combate.
- **As provisões do cerco e da Fronteira passam a ser refeições** (o rancho do cerco no Arsenal, [04](04-combate.md), seção 11.6; a comida do kit de expedição, [10](10-live-ops.md), seção 4.4).
- **A meta continua de 6% a 11% das horas exigidas por ofício.** O tamanho do bônus e a quantidade de provisões ficam para **calibrar na próxima rodada da simulação** (08), junto com o recálculo desta tabela pelo modelo de conferência.

Meta: 1/12 = 8,3%, com tolerância de 6% a 11% [H]. A Colheita fica acima porque serve a três cadeias (é aceitável: mais gente a escolhe). Mineração, Lenhadoria, Carpintaria e Fundição ficam abaixo no começo, e por isso **as Obras pedem principalmente pedra, tábuas, toras e lingotes** (seção 12.5).

### 9.3 Paridade entre vocações (manutenção por hora de combate, T2)

| Vocação | Minutos de ofício por hora | Diferença da média (17,2) | Custo do conjunto novo (T1 / T2, minutos) |
|---|---|---|---|
| Cavaleiro | 19,3 | +12% | 192 / 263 |
| Caçador | 18,5 | +8% | 96 / 134 |
| Mago | 14,8 | −14% | 82 / 114 |
| Druida | 16,8 | −2% | 92 / 129 |
| Ladino | 16,8 | −2% | 126 / 173 |

Meta: ±15% em torno da média. O Cavaleiro paga mais pelo conjunto (metal pesado) e menos em consumíveis; o Mago, o contrário. O ajuste fino é do [04](04-combate.md), que decide o consumo real de cada vocação.

### 9.4 O que o combate precisa soltar (proposta ao 04)

| Drop (por hora de combate comum, no tier) | Demanda média do consumo | Proposta de drop médio [H] | Quem solta mais |
|---|---|---|---|
| Pele | 2,65 | **3,5** | Caçador ×1,5 |
| Carne de caça | 4,6 | **6** | Caçador ×1,5 |
| Cinza de névoa | 2,7 | **3,5** | Mago ×1,5 (as outras vocações soltam um pouco menos, para a média se manter) |
| Pele rara | — | 1 a cada 15 h | Ladino e Caçador ×2 |

A folga de cerca de 30% atende Encomendas, Obras e as receitas alternativas. Também é por hora de combate que o consumo de **brutos** é medido (T1): 5,2 minérios, 3,5 toras (1,9 delas para carvão), 1,3 casca, 1,25 resina, 3,4 fibras, 7,6 ervas, 5,2 alimentos, 8 peixes e 2,2 escamas. Esses números contam 4 refeições; com 1 refeição por combatente (R1), os peixes caem para ~2 e os alimentos para ~1,3.

### 9.5 Alavancas e regras de ajuste

1. **Tempo por ação** de cada receita (o ajuste mais fino, que não muda a receita que o jogador conhece).
2. **Quantidades** das receitas (só entre Eras, com aviso).
3. **Consumo por hora** de combate (refeições, poções, consumível de vocação) e **vida útil** (D0, perda por reparo, número de reparos), ambos no [05](05-itens.md).
4. **Obras e Encomendas** como demanda dirigida aos ofícios em baixa.
5. **Índice de ofício:** o ouro por hora mediano dos mestres de cada ofício, publicado no painel do [07](07-economia.md). Meta: entre 75% e 130% da mediana geral. Se um ofício ficar abaixo por 14 dias, as Encomendas e Obras da semana seguinte pedem os insumos dele. Se ficar acima, a Oficina da Cidade amplia o limite diário dos itens dele. Mudanças de receita só entre Eras, com aviso, dados e porquê (lei 21).

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Equilíbrio medido em horas de ofício, com meta de 1/12 por ofício | [H] Lei 17 ([02](../01-pesquisa/02-padroes-matriz-leis.md)); [F] "poucos usos para material" está entre as queixas do Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)) | Ofício sem freguês, que esvazia e trava a cadeia | Qualquer escolha de mestre é viável | O modelo de conferência erra o comportamento real; a simulação e o índice de ofício corrigem |
| Obras e Encomendas como demanda dirigida | [F] Metas comunitárias em 1º lugar no ranking do [03](../01-pesquisa/03-alem-do-idle.md); a taxa vira bem público no Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)) | Excedente de quem sobe de nível derrubando preços | Doar o excedente à cidade, em troca de Mérito | Obras que pedem demais esvaziam a Bolsa; o Conselho escolhe dentro de faixas (09) |

## 10. Teto de aprendiz (30)

**Regras:**
- Qualquer personagem treina **qualquer ofício até o nível 30**. Os **dois ofícios mestres** vão até 100 e à maestria.
- O aprendiz **alcança T1 (nível 1) e T2 (nível 15)**, com 15 níveis de folga no T2 (velocidade +10%, o teto do domínio; revisão de consistência: R16). **O T3 exige 35** e é só de mestre.
- O aprendiz **só faz Comum** e só T1–T2. As sessões ativas abrem para ele no nível 10 do ofício, como para o mestre, mas o resultado fica no Comum; na prática, o que ele aproveita é o Faro (matéria rara do tier dele) (revisão de consistência: R11).
- Insumos sem tier (pedra, casca, resina e carvão) estão ao alcance de qualquer aprendiz em qualquer fase. Ninguém fica sem trabalho útil.

**Por que 30** [H]:
- **Rota solo nos primeiros dias:** com aprendizado espalhado, um jogador monta sozinho o conjunto T2 inteiro, com kits e comida. Isso cumpre o "nenhum muro sério antes do D7" (bíblia 6.2) e acolhe o jogador solitário ([02-conceito](../02-conceito.md), riscos).
- **Interdependência obrigatória a partir do T3,** por volta da segunda semana, quando o mercado já tem gente.
- **Exemplo:** a maga Lia escolheu Alfaiataria e Tecelagem como mestres. Como aprendiz em Colheita, Alquimia, Lenhadoria, Carpintaria, Mineração e Fundição, ela faz sozinha o cajado de bétula, a túnica de linho e os kits de T2. Para o cajado de carvalho (T3, Carpintaria 40), precisa de um carpinteiro mestre, e em troca vende túnicas Finas.

**Trocar um ofício mestre** (proposta a reconciliar com o [02](02-progressao.md)):
- O ofício deixado **adormece** no nível em que estava e passa a ser usado como aprendiz (até 30). Se um dia voltar a ser mestre, retoma o nível. O ausente nunca perde o que investiu.
- Carência de 30 dias entre trocas. A primeira troca é grátis nos primeiros 14 dias de conta (arrependimento do começo). As seguintes custam uma "carta de ofício" em ouro destruído (valor no [07](07-economia.md)).

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Aprendiz até 30, que alcança T1–T2, sempre Comum | [F] Teto de pontos do Star Wars Galaxies ([03, §8](../01-pesquisa/03-alem-do-idle.md)); diferencia-se do Melvor, em que cada jogador faz tudo ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) | Gargalo no lançamento; o solitário que desiste | Começar sozinho e especializar-se quando o mercado amadurece | O aprendiz satura o T1–T2 com Comum barato; as Obras absorvem, e a Comum de mestre tem chance de Bom |
| Troca de mestre com ofício adormecido e carência | [F] A NGE do SWG tirou a identidade dos jogadores e foi um desastre ([03, §8](../01-pesquisa/03-alem-do-idle.md)) | Arrependimento sem saída, ou troca livre que vira "mestre de tudo" | Escolher com calma e mudar raramente | Troca a cada 30 dias ainda permite rodízio; a simulação mede o uso |

## 11. Tabela de receitas: T1 e T2 completos

Convenções: nomes no formato "T1 / T2"; **as quantidades são as mesmas nos dois tiers**; tempos sem bônus (nível igual ao da receita, ferramenta do mesmo tier, Comum); T2 = T1 × 1,4. "Kits/reparo" segue a regra do [05](05-itens.md), seção 6.1.

### 11.1 Coleta

| Ação (T1 / T2) | Ofício | Nível | Tempo T1 | Tempo T2 | Unidades/h T1 | Unidades/h T2 | Subprodutos por ação |
|---|---|---|---|---|---|---|---|
| Minério de cobre / de ferro | Mineração | 1 / 15 | 8 s | 11,2 s | 450 | 321 | pedra 10%; quartzo 0,2% |
| Pedra (sem tier) | Mineração | 1 | 8 s | 8 s | 450 | 450 | — |
| Tora de pinho / de bétula | Lenhadoria | 1 / 15 | 8 s | 11,2 s | 450 | 321 | casca 10%; resina 5% |
| Casca (sem tier) | Lenhadoria | 1 | 8 s | 8 s | 450 | 450 | — |
| Resina (sem tier) | Lenhadoria | 1 | 8 s | 8 s | 450 | 450 | — |
| Perca / Carpa | Pesca | 1 / 15 | 8 s | 11,2 s | 450 | 321 | escama 40% |
| Cânhamo / Linho (fibra) | Colheita | 1 / 15 | 6 s | 8,4 s | 600 | 429 | — |
| Camomila / Sálvia (erva) | Colheita | 1 / 15 | 6 s | 8,4 s | 600 | 429 | — |
| Nabo / Cevada (alimento) | Colheita | 1 / 15 | 6 s | 8,4 s | 600 | 429 | — |
| Matéria rara na fila | todos os de coleta | — | — | — | 1 a cada 2.000 ações | | — |

**Combate** (proposta ao [04](04-combate.md), por hora de combate comum no tier): pele de javali / de lobo 3,5; carne de caça 6; cinza de névoa 3,5; pele rara 1 a cada 15 h.

### 11.2 Transformação

| Produto (T1 / T2) | Ofício | Nível | Insumos | Saída | Tempo T1 | Tempo T2 | Saída/h T1 | Saída/h T2 |
|---|---|---|---|---|---|---|---|---|
| Carvão (sem tier) | Fundição | 1 | 1 tora de pinho ou de bétula | 2 | 6 s | 6 s | 1.200 | 1.200 |
| Lingote de cobre / de ferro | Fundição | 1 / 15 | 3 minérios + 2 carvões | 1 | 25 s | 35 s | 144 | 103 |
| Tábua de pinho / de bétula | Carpintaria | 1 / 15 | 2 toras | 1 | 16 s | 22,4 s | 225 | 161 |
| Cabo de pinho / de bétula | Carpintaria | 1 / 15 | 1 tora | 1 | 10 s | 14 s | 360 | 257 |
| Couro de javali / de lobo | Curtume | 1 / 15 | 2 peles + 1 casca | 1 | 45 s | 63 s | 80 | 57 |
| Tecido de cânhamo / de linho | Tecelagem | 1 / 15 | 2 fibras | 1 | 40 s | 56 s | 90 | 64 |
| Linha de cânhamo / de linho | Tecelagem | 1 / 15 | 1 fibra | 2 | 10 s | 14 s | 720 | 514 |

### 11.3 Criação

**Ferraria** (75 s por unidade de insumo no T1; 105 s no T2):

| Peça (cobre / ferro) | Nível | Insumos | Tempo T1 | Tempo T2 | Peças/h T1 | Kits/reparo |
|---|---|---|---|---|---|---|
| Espada | 5 / 20 | 16 lingotes + 2 cabos + 2 couros | 25 min | 35 min | 2,4 | 2 de metal |
| Adaga | 5 / 20 | 12 lingotes + 2 cabos + 2 couros | 20 min | 28 min | 3,0 | 2 |
| Elmo | 3 / 17 | 10 lingotes + 2 couros | 15 min | 21 min | 4,0 | 1 |
| Couraça | 5 / 20 | 20 lingotes + 4 couros | 30 min | 42 min | 2,0 | 3 |
| Manoplas | 3 / 17 | 8 lingotes + 2 couros | 12,5 min | 17,5 min | 4,8 | 1 |
| Botas de metal | 3 / 17 | 8 lingotes + 2 couros | 12,5 min | 17,5 min | 4,8 | 1 |
| Lanterna | 3 / 17 | 8 lingotes + 2 tecidos | 12,5 min | 17,5 min | 4,8 | 1 |
| Picareta | 1 / 15 | 12 lingotes + 2 cabos | 17,5 min | 24,5 min | 3,4 | 2 |
| Machado | 1 / 15 | 12 lingotes + 2 cabos | 17,5 min | 24,5 min | 3,4 | 2 |
| Foice | 1 / 15 | 8 lingotes + 2 cabos | 12,5 min | 17,5 min | 4,8 | 1 |
| Serrote | 1 / 15 | 8 lingotes + 2 cabos | 12,5 min | 17,5 min | 4,8 | 1 |
| Faca de descarne | 1 / 15 | 6 lingotes + 2 cabos | 10 min | 14 min | 6,0 | 1 |
| Martelo | 1 / 15 | 10 lingotes + 2 cabos | 15 min | 21 min | 4,0 | 1 |
| Agulhas e tesoura | 1 / 15 | 6 lingotes | 7,5 min | 10,5 min | 8,0 | 1 |
| Alambique | 1 / 15 | 16 lingotes | 20 min | 28 min | 3,0 | 2 |
| Kit de metal | 1 / 15 | 4 lingotes + 2 carvões | 60 s | 84 s | 60 | — |

**Carpintaria, criação** (35 s por unidade de insumo no T1; 49 s no T2):

| Peça (pinho / bétula) | Nível | Insumos | Tempo T1 | Tempo T2 | Peças/h T1 | Kits/reparo |
|---|---|---|---|---|---|---|
| Arco | 5 / 20 | 8 tábuas + 4 linhas + 2 couros | 8,2 min | 11,4 min | 7,3 | 1 de marcenaria |
| Escudo | 5 / 20 | 10 tábuas + 4 lingotes + 2 couros | 9,3 min | 13,1 min | 6,4 | 1 |
| Cajado | 5 / 20 | 4 cabos + 6 tábuas + 4 tecidos + 2 lingotes + 1 quartzo | 9,9 min | 13,9 min | 6,1 | 1 |
| Bordão | 5 / 20 | 4 cabos + 4 tábuas + 2 couros + 4 linhas + 2 lingotes | 9,3 min | 13,1 min | 6,4 | 1 |
| Flechas (lote de 30) | 1 / 15 | 2 cabos + 1 lingote | 60 s | 84 s | 1.800 flechas | — |
| Vara de pesca | 1 / 15 | 4 cabos + 4 linhas + 2 lingotes | 5,8 min | 8,2 min | 10,3 | 1 |
| Tear | 1 / 15 | 12 tábuas + 4 linhas | 9,3 min | 13,1 min | 6,4 | 2 |
| Pilão | 1 / 15 | 8 tábuas | 4,7 min | 6,5 min | 12,9 | 1 |
| Kit de marcenaria | 1 / 15 | 4 tábuas + 2 resinas | 60 s | 84 s | 60 | — |

**Alfaiataria** (38 s por unidade de insumo no T1; 53,2 s no T2):

| Peça (couro de javali / de lobo; tecido de cânhamo / de linho) | Nível | Insumos | Tempo T1 | Tempo T2 | Peças/h T1 | Kits/reparo |
|---|---|---|---|---|---|---|
| Chapéu de couro | 3 / 17 | 6 couros + 4 linhas + 1 lingote | 7,0 min | 9,8 min | 8,6 | 1 de costura |
| Gibão | 5 / 20 | 12 couros + 8 linhas + 3 lingotes | 14,6 min | 20,4 min | 4,1 | 2 |
| Luvas de couro | 3 / 17 | 5 couros + 4 linhas + 1 lingote | 6,3 min | 8,9 min | 9,5 | 1 |
| Botas de couro | 3 / 17 | 5 couros + 4 linhas + 1 lingote | 6,3 min | 8,9 min | 9,5 | 1 |
| Capuz | 3 / 17 | 6 tecidos + 4 linhas + 1 corante | 7,0 min | 9,8 min | 8,6 | 1 |
| Túnica | 5 / 20 | 12 tecidos + 8 linhas + 2 corantes | 13,9 min | 19,5 min | 4,3 | 2 |
| Luvas de pano | 3 / 17 | 5 tecidos + 4 linhas + 1 corante | 6,3 min | 8,9 min | 9,5 | 1 |
| Sandálias | 3 / 17 | 2 tecidos + 3 couros + 4 linhas | 5,7 min | 8,0 min | 10,5 | 1 |
| Aljava | 3 / 17 | 6 couros + 4 linhas + 1 lingote | 7,0 min | 9,8 min | 8,6 | 1 |
| Bornal | 3 / 17 | 4 tecidos + 2 couros + 4 linhas + 1 corante | 7,0 min | 9,8 min | 8,6 | 1 |
| Fole | 1 / 15 | 6 couros + 4 tábuas + 4 linhas | 8,9 min | 12,4 min | 6,8 | 1 |
| Kit de costura | 1 / 15 | 2 couros + 2 tecidos + 4 linhas | 60 s | 84 s | 60 | — |

**Alquimia** (15 s no T1, 21 s no T2; 240 e 171 por hora; nível 1 / 15):

| Produto | Insumos (erva de camomila / de sálvia; cinza de névoa T1 / T2) | Uso |
|---|---|---|
| Poção de cura | 2 ervas + 1 escama | Todas as vocações |
| Óleo de arma | 1 resina + 1 erva + 1 cinza | Cavaleiro |
| Pó arcano | 2 cinzas + 1 erva | Mago |
| Unguento | 2 ervas + 1 resina | Druida |
| Corante | 2 ervas | Alfaiataria (armadura leve, bornal, Moda) |
| Calmante (reagente) | 2 resinas + 1 erva | Obra-prima: −25 de tensão |
| Realce (reagente) | 2 cinzas + 1 escama | Obra-prima: +50% na próxima ação |
| Visão (reagente) | 2 ervas + 2 escamas | Obra-prima: revela os temperamentos |

**Culinária** (nível 1 / 15):

| Produto (T1 / T2) | Insumos | Tempo T1 | Tempo T2 | Por hora T1 / T2 |
|---|---|---|---|---|
| Refeição: Caldo / Ensopado | 2 peixes + 1 carne + 1 alimento; ou 3 peixes + 1 alimento; ou 2 carnes + 2 alimentos | 15 s | 21 s | 240 / 171 |
| Ração de viagem (Ladino) | 2 alimentos + 1 carne | 12 s | 16,8 s | 300 / 214 |

### 11.4 Consumo de referência por hora de combate comum (para a simulação)

| Consumo | Todas as vocações | Cavaleiro | Caçador | Mago | Druida | Ladino |
|---|---|---|---|---|---|---|
| Refeição | 1 por combatente (o personagem e cada ajudante; revisão de consistência: R1). Fora do combate, comer dá um bônus pequeno de ofício (ex.: +3% de eficiência numa fila por 1 h; revisão de consistência: D1) | | | | | |
| Poção de cura | 2 | | | | +1 (3 no total) | |
| Consumível de vocação | — | 1,5 óleo de arma | 45 flechas | 6 pós arcanos | 4 unguentos | 3 rações de viagem |
| Equipamento | 10 pd por hora em cada peça usada ([05](05-itens.md), seção 6) | | | | | |
| Ferramenta de quem produz | 10 pd por hora de ofício | | | | | |

Masmorra e Fronteira multiplicam o desgaste por 1,5 e o cerco, por 2. O consumo de refeições e poções em cada atividade fica com o [04](04-combate.md).

### 11.5 Valor de referência: trabalho embutido (minutos de ofício)

Base do VR ([05](05-itens.md), seção 9) e do preço da Oficina da Cidade: **VR = minutos desta tabela × 2,0 ouro por minuto**, fixo desde o lançamento (revisão de consistência: R18 e R24). Soma o tempo de fila de toda a cadeia, sem bônus. **Não inclui** os drops de combate (pele, carne, cinza) nem os subprodutos (escama, gema). A simulação valorou cada drop em ~0,13 min de VR por unidade, o tempo de uma coleta T1 ([08](08-simulacao.md), seção 2).

| Item | T1 | T2 | Item | T1 | T2 |
|---|---|---|---|---|---|
| Minério, tora, peixe | 0,13 | 0,19 | Arco | 14,7 | 20,6 |
| Pedra, casca, resina | 0,13 | 0,13 | Escudo | 20,6 | 28,5 |
| Fibra, erva, alimento | 0,10 | 0,14 | Cajado | 19,9 | 27,7 |
| Carvão | 0,12 | 0,12 | Bordão | 17,1 | 23,7 |
| Lingote | 1,1 | 1,4 | Flechas (lote de 30) | 2,7 | 3,6 |
| Tábua | 0,5 | 0,7 | Vara de pesca | 9,7 | 13,3 |
| Cabo | 0,3 | 0,4 | Tear | 16,3 | 22,8 |
| Couro (sem a pele) | 0,9 | 1,2 | Pilão | 8,9 | 12,5 |
| Tecido | 0,9 | 1,2 | Kit de marcenaria | 3,4 | 4,8 |
| Linha | 0,1 | 0,2 | Chapéu de couro | 13,8 | 19,3 |
| Espada | 44,2 | 60,3 | Gibão | 29,4 | 40,9 |
| Adaga | 35,0 | 47,8 | Luvas ou botas de couro | 12,3 | 17,2 |
| Elmo | 27,3 | 37,2 | Capuz | 13,2 | 18,4 |
| Couraça | 54,5 | 74,5 | Túnica | 26,3 | 36,8 |
| Manoplas ou botas de metal | 22,7 | 31,0 | Luvas de pano | 11,7 | 16,3 |
| Lanterna | 22,6 | 30,9 | Sandálias | 10,6 | 14,9 |
| Picareta ou machado | 30,7 | 41,9 | Aljava | 13,8 | 19,3 |
| Foice ou serrote | 21,5 | 29,4 | Bornal | 13,2 | 18,5 |
| Faca de descarne | 16,9 | 23,1 | Fole | 16,8 | 23,6 |
| Martelo | 26,1 | 35,6 | Kit de costura | 5,0 | 7,0 |
| Agulhas e tesoura | 13,8 | 18,8 | Poção, óleo, unguento, corante | 0,5 a 0,6 | 0,6 a 0,8 |
| Alambique | 36,8 | 50,0 | Pó arcano | 0,3 | 0,5 |
| Kit de metal | 5,4 | 7,1 | Refeição | 0,6 | 0,9 |
| Reagentes | 0,3 a 0,6 | 0,4 a 0,8 | Ração de viagem | 0,4 | 0,6 |

**Conjunto completo novo** (6 peças, ou 5 para o Mago): Cavaleiro 192 / 263; Caçador 96 / 134; Mago 82 / 114; Druida 92 / 129; Ladino 126 / 173 minutos.

## 12. Estrutura de T3 a T6

### 12.1 Regras

- **Mesmas receitas e mesmas quantidades** em todos os tiers. Muda o material (tabela do [05](05-itens.md), seção 2.1) e o tempo (fator f(T)).
- **Ligas e cascas puxam os tiers de baixo:** aço = 1 minério negro + 2 minérios de ferro + 3 carvões; prata = 3 minérios + 3 carvões + 1 pedra; platina = 2 minérios + 1 lingote de aço + 4 carvões; aldarita = 2 fragmentos + 1 lingote de prata + 4 carvões ([05](05-itens.md), seção 2.2). Couro: 1 casca (T1–T2), 2 (T3–T4) ou 3 (T5–T6).
- **Insumos sem tier** mantêm o tempo do T1 em qualquer fase.
- **Níveis:** T3 = 35, T4 = 55, T5 = 75, T6 = 90; peças pequenas +2, armas e peças de corpo +5.

### 12.2 Tempos de referência por tier

| Ação | T1 | T2 | T3 | T4 | T5 | T6 |
|---|---|---|---|---|---|---|
| Coleta (Mineração, Lenhadoria, Pesca) | 8 s | 11,2 s | 14,4 s | 18,4 s | 23,2 s | 30 s |
| Unidades por hora nessa coleta | 450 | 321 | 250 | 196 | 155 | 120 |
| Colheita | 6 s | 8,4 s | 10,8 s | 13,8 s | 17,4 s | 22,5 s |
| Lingote | 25 s | 35 s | 45 s | 58 s | 73 s | 94 s |
| Couro | 45 s | 63 s | 81 s | 104 s | 131 s | 169 s |
| Tecido | 40 s | 56 s | 72 s | 92 s | 116 s | 150 s |
| Poção ou refeição | 15 s | 21 s | 27 s | 35 s | 44 s | 56 s |
| Espada | 25 min | 35 min | 45 min | 58 min | 73 min | 94 min |
| Couraça | 30 min | 42 min | 54 min | 69 min | 87 min | 113 min |
| Gibão | 14,6 min | 20,4 min | 26,2 min | 33,5 min | 42,2 min | 54,6 min |

### 12.3 Trabalho embutido de referência (minutos de ofício)

| Item | T1 | T2 | T3 | T4 | T5 | T6 |
|---|---|---|---|---|---|---|
| Espada | 44 | 60 | 77 | 97 | 133 | 158 |
| Couraça | 55 | 75 | 96 | 121 | 165 | 197 |
| Gibão | 29 | 41 | 55 | 70 | 95 | 120 |
| Túnica | 26 | 37 | 47 | 58 | 76 | 94 |
| Arco | 15 | 21 | 27 | 35 | 44 | 57 |
| Refeição | 0,6 | 0,9 | 1,1 | 1,5 | 1,8 | 2,5 |
| Conjunto do Cavaleiro | 192 | 263 | 337 | 454 | 579 | 740 |
| Conjunto do Mago | 82 | 114 | 147 | 189 | 239 | 309 |

Valores de T5 e T6 aproximados (o modelo simplificou as ligas). A simulação recalcula pela receita exata.

### 12.4 Matérias raras, insumos nobres e lendários por tier

- **Matérias raras e insumos nobres** existem em todos os tiers, com o nome do material (ex.: veio puro de cobre, lingote temperado de aldarita; cerne de teixo, tábua de cerne de ébano; fibra longa de seda, brocado de seda-de-névoa).
- **Lendários:** só de T4 a T6, com Relíquia da Fronteira do tier ([05](05-itens.md), seção 7.2).
- **Gemas:** quartzo (T1–T2), ametista (T3–T4) e safira (T5–T6), no cajado, na decoração e nas máscaras da Moda da Cidade.

### 12.5 Obras e defesas de cerco (estrutura)

- **Obras** pedem sobretudo **pedra, toras, tábuas, lingotes e carvão** (os ofícios abaixo da meta na seção 9.2), mais tecido e refeições para o mutirão. Aceitam itens presos e pagam em Mérito. Quantidades no [09](09-social.md).
- **Defesas de cerco**, consumidas a cada cerco (quantidades no [04](04-combate.md)): **paliçada** (Carpintaria: 10 tábuas + 4 cabos), **estrepes** (Ferraria, lote de 10: 4 lingotes), **breu de cerco** (Alquimia: 3 resinas + 1 carvão) e **banquete de cerco** (Culinária: 10 refeições + 1 peixe raro, um buff para a guarnição).

### 12.6 Moda da Cidade e móveis (estrutura)

Sem tier de poder: o material escolhido muda só o visual (uma mesa de pinho ou de ébano).

| Item | Ofício | Insumos |
|---|---|---|
| Traje de festa (colheita, aniversário da Cidade) | Alfaiataria | 8 tecidos + 6 linhas + 3 corantes (versão fina: +1 brocado) |
| Manto da festa de inverno | Alfaiataria | 6 tecidos + 2 couros + 4 linhas + 2 corantes |
| Máscara da noite dos mortos | Alfaiataria | 2 couros + 1 corante + 1 gema |
| Mesa | Carpintaria | 8 tábuas |
| Cadeira de balanço | Carpintaria | 6 tábuas + 2 cabos |
| Estante de pergaminhos | Carpintaria | 10 tábuas + 1 resina |
| Tapeçaria | Tecelagem | 6 tecidos + 8 linhas + 2 corantes |
| Candelabro de cobre | Ferraria | 4 lingotes de cobre + 1 quartzo |

## 13. Interfaces com outros módulos

| Módulo | O que este módulo entrega | O que precisa receber |
|---|---|---|
| [07 — Economia](07-economia.md) | Produção por hora de cada ofício (seção 11); VR por item (11.5); classes de balcão (seção 7); Oficina da Cidade a 2,5× VR (seção 8; revisão de consistência: D7); bens básicos para venda a NPC; índice de ofício (9.5) | Recebido: 2,0 ouro por minuto de referência (R24); drops a ~0,13 min de VR por unidade (08); teto em VR fixo com portão de saída (R18). Falta: taxa da carta de ofício |
| [08 — Simulação](08-simulacao.md) | Receitas T1–T2 completas e estrutura T3–T6; f(T); consumo por hora de combate por vocação (11.4); minutos de ofício por hora de combate por tier (9.1); participação dos ofícios (9.2); Inspiração (+1/h, teto igual ao offline, custos); distribuição de qualidades da obra-prima (6.3); Faro: 1 matéria rara por sessão | Distribuição de tempo dos jogadores entre combate e ofícios, por perfil (casual, hardcore, pagante, bot) |
| [02 — Progressão](02-progressao.md) | Níveis por tier; aprendiz até 30; regras de troca de mestre; ganchos de maestria na obra-prima | Curva de XP por ofício; tempo até o nível 30 (estimativa nossa: 8 a 15 h de fila por ofício) |
| [03 — Personagem](03-personagem.md) | Consumível de cada vocação; quem solta mais de cada drop | Atributos que usam Foco, Firmeza e Esquiva |
| [04 — Combate](04-combate.md) | Drops necessários por hora (9.4); defesas de cerco (12.5); fauna das peles por tier | Consumo real por atividade; bestiário final |
| [09 — Social](09-social.md) | O que as Obras e Encomendas devem pedir (9.2 e 12.5); Bancada das Lendas | Quantidades das Obras; regras das Encomendas entre mestres |
| [12 — Onboarding](12-onboarding.md) | Ordem de desbloqueio: fila (D1), Faro e obra-prima no nível 10 do ofício (R11), insumos nobres a partir do T3 | Ritmo dos primeiros dias |
| [13 — Anti-abuso](13-anti-abuso.md) | A Inspiração como teto por conta das sessões ativas; teto de emissão; Oficina presa | Detecção de bots na coleta |
| [14 — Arte e UI](14-arte-e-ui.md) | Telas da obra-prima e do Faro (sem cronômetro, com pausa, pensadas para o celular); ícones em pixel art por material e tier | Wireframes das sessões |

## 14. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Tempos por tipo de ação:** a âncora de 3 a 30 s vale para a **coleta**. A transformação e os consumíveis vão de 6 s a 3 min por unidade, e a **criação de peças é ação longa, de 5 a 115 min**. Motivo: dar a cada camada uma fatia justa das horas (seção 9). **Adotada** (revisão de consistência: R4), com a transformação registrada na bíblia como "até ~170 s por unidade no T6" (couro e tecido T6; revisão de consistência: D2).
2. **[proposta de mudança na bíblia] Inspiração** como recurso das sessões ativas: +1 por hora, teto igual ao teto de offline da conta, nunca à venda. **Adotada** no anexo do glossário (R14).
3. **[proposta de mudança na bíblia] Faro** como nome da sessão ativa das quatro coletas. **Adotada** no anexo do glossário (R14).
4. **[proposta de mudança na bíblia] Níveis por tier:** T1 = 1, T2 = 15, T3 = 35, T4 = 55, T5 = 75, T6 = 90. Com o teto de aprendiz em 30, o aprendiz alcança T1–T2. **Adotada** (R5).
5. **[proposta de mudança na bíblia] Bolsa também para peças Comuns novas** (igual ao [05](05-itens.md), seção 11).

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Gargalo de ofício** | Pouca gente escolhe Curtume, e todo couro trava (o risco nº 1 do conceito). | Oficina da Cidade a 2,5× VR (revisão de consistência: D7); índice de ofício com Encomendas e Obras dirigidas; receitas alternativas na Culinária; insumos sem tier ao alcance de todos. |
| **Cartel de ofício** | Os poucos mestres de Fundição T5 combinam preço. | Teto efetivo de 2,5× VR nos insumos e de cerca de 3,5× nas peças, pela Oficina (revisão de consistência: D7); Leilão e Bolsa públicos; regra antimanipulação no 07. |
| **O excedente de quem sobe de nível derruba os preços** | Milhares de aprendizes fazem T1–T2 para ganhar XP, e o preço vai a zero. | O aprendiz só faz Comum; Obras e Encomendas absorvem o excedente em troca de Mérito; a venda a NPC é decrescente; o teto de emissão segura a saída do resto (portão; R18). |
| **O consumo não absorve a produção** | Com 12 a 49 minutos de ofício por hora de combate, um servidor jovem produz demais (seção 9.1). | Obras pesadas no início; o teto de emissão em VR; alavancas de consumo e de vida útil para a simulação calibrar. |
| **A obra-prima vira obrigação** | Masmorras calibradas para o Fino, ou o jogador sente que "perde" sem fazer sessões. | O 04 calibra pela peça Comum; a Inspiração acumula sem perda até o teto; a fila nunca para por falta de sessão. |
| **A obra-prima vira planilha resolvida** | A comunidade calcula a política ótima de cada baralho. | É planejamento, não reflexo, e isso é bem-vindo. A faixa da Ousada mantém o risco, e baralhos e temperamentos novos chegam a cada Era, com aviso. |
| **A obra-prima é lida como jogo de azar** | Acaso com insumo comprado com ouro, que vale Coins e reais. | Piso garantido (a peça nunca se perde); chances públicas; nada vendido pelo estúdio afeta a sessão. **Validar com advogado** (Lei 15.211/2025, art. 2º, IV). |
| **Bots na coleta** | A fila de coleta é o terreno natural do bot ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). | Teto de emissão por conta; rampa de conta nova; o Faro e a obra-prima limitados pela Inspiração; detecção por fluxo de valor no 13. |
| **Complexidade demais para o novato** | Doze ofícios, três camadas, insumos nobres e reagentes no primeiro dia. | Desbloqueio em etapas (12): só a fila no D1, sessões no nível 10, insumos nobres a partir do T3. A interface mostra "quem faz isto" em cada insumo. |
| **Ferraria lenta demais** | Uma espada de 25 minutos frustra quem quer a primeira arma. | A Oficina e a Feira têm peças prontas; o kit inicial do onboarding vem com arma; o domínio acelera até 10% (a ferramenta não acelera; R16). |
| **Troca de mestre vira rodízio** | O jogador alterna mestres a cada 30 dias para ter "todos". | O ofício adormecido só é usado como aprendiz; a Inspiração e a maestria não se transferem; a simulação mede o uso. |
| **O modelo de conferência erra** | Os números deste módulo saem de uma planilha, e não do comportamento real. | Todos os números são [H]; a simulação (08) e o alfa calibram; mudanças entre Eras, com aviso e dados (lei 21). |
