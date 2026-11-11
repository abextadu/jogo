# GDD 05 — Itens

> **Módulo 05 do GDD.** Tiers e materiais, raridade, atributos, qualidade, durabilidade e quebra, únicos e lendários, cosméticos e a regra do que é negociável. Depende da [bíblia](00-biblia.md) e do [06 — Ofícios e coleta](06-oficios-e-coleta.md), que tem as receitas.
> Etiquetas: [F] fato com fonte (aqui, quase sempre remetendo à ficha ou ao estudo da Fase 1), [H] proposta do estúdio, [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).** As contas de conferência foram feitas num modelo de planilha à parte; o script oficial é o do 08.

## Resumo

- **Seis tiers, lista fechada.** Metais: cobre, ferro, aço, prata, platina e **aldarita** (a liga rara própria do jogo). Madeiras: pinho, bétula, carvalho, freixo, teixo e ébano. Fibras, peles, ervas, alimentos e peixes também ganham nome por tier (seção 2). A partir do T3, as ligas puxam material dos tiers de baixo, para que nenhum tier morra.
- **Não existe raridade sorteada.** A variação de um item vem da qualidade de crafting (Comum, Bom, Fino, Obra-prima), que nasce de decisão, e de duas categorias especiais: o **Único** (obra-prima com traço, que muda o jeito de jogar e não aumenta o poder) e o **Lendário** (contado: no máximo 24 por Era por Cidade). **Nenhum monstro solta equipamento pronto:** todo equipamento é feito por jogador.
- **O tier manda, a qualidade refina.** Cada tier multiplica o poder por 1,6. A obra-prima vale +25%, e uma obra-prima nunca alcança uma peça Comum do tier seguinte.
- **Tudo se gasta, de forma previsível.** Uma peça perde 10 pontos de durabilidade por hora de uso. Cada reparo consome kits feitos por artesãos e tira 20% da durabilidade máxima original. Depois do 3º reparo, a peça quebra e some. Vida útil de referência: **34 h de uso para uma peça Comum, 44 h para uma obra-prima e 88 h para um lendário.** Nada se desgasta parado no baú.
- **Cosmético nunca vira poder.** O Baú Misterioso só tem visuais, decoração e aparências de ajudante. Ao ser aplicado, o cosmético vira coleção da conta e sai do mercado. Isso cumpre o "tudo que se negocia se gasta" (P3).
- **O negociável tem origem limpa (P2).** O teto de emissão da conta é um portão de saída, contado em valor de referência fixo: tudo o que é negociável gasta cota quando sai da conta, inclusive o que veio de janelas ativas, e nada nasce preso pela produção. Só o que vem das oficinas NPC (2,5× o VR) é preso à conta (revisão de consistência: R18, D7 e D13).

## 1. Princípios que este módulo garante

| Princípio | Como os itens o cumprem |
|---|---|
| P1 — números em duas velocidades | Atributos de item ficam em escala humana (dano de 10 a 137). O exponencial fica no progresso pessoal (02). |
| P2 — o negociável nasce de ação ativa ou de produção limitada | Teto de emissão contado em valor de referência fixo, com portão de saída (seção 9; revisão de consistência: R18). |
| P3 — tudo que se negocia se gasta | Durabilidade com fim certo em equipamentos e ferramentas; consumíveis consumidos; cosméticos consumidos ao aplicar; lendários também quebram. |
| P7 — zona vermelha fora da loja | Reparo, kits, Inspiração e qualquer coisa que dê atributo nunca vão à loja nem ao Baú. |
| P12 — o ausente nunca perde | Item parado não se desgasta; a peça zerada fica inoperante, e não quebra, enquanto tiver reparos; o reparo automático é grátis e configurável. |
| Pilar 1 — ninguém faz tudo | Uma peça de T3 em diante exige de 4 a 7 ofícios (06, seção 5). |

## 2. Tiers e materiais (lista fechada)

### 2.1 A tabela dos seis tiers

O nível exigido vale para a receita (ofício) e para usar a peça (vocação). A reconciliar com o [02](02-progressao.md) e o [03](03-personagem.md).

| Tier | Nível | Metal (lingote) | Minério | Madeira | Fibra | Pele (combate) | Erva | Alimento | Peixe | Refeição | Gema |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | Cobre | Minério de cobre | Pinho | Cânhamo | Javali | Camomila | Nabo | Perca | Caldo | Quartzo |
| T2 | 15 | Ferro | Minério de ferro | Bétula | Linho | Lobo | Sálvia | Cevada | Carpa | Ensopado | Quartzo |
| T3 | 35 | Aço (liga) | Minério negro + minério de ferro | Carvalho | Algodão | Urso | Arruda | Trigo | Truta | Torta de caça | Ametista |
| T4 | 55 | Prata | Minério de prata | Freixo | Seda | Basilisco | Beladona | Fava | Salmão | Assado com ervas | Ametista |
| T5 | 75 | Platina | Minério de platina | Teixo | Cardo-prateado | Serpe | Mandrágora | Uva | Esturjão | Guisado do castelo | Safira |
| T6 | 90 | Aldarita | Fragmento de aldarita | Ébano | Seda-de-névoa | Dragão | Lírio-da-névoa | Maçã-dourada | Enguia-da-névoa | Festim real | Safira |

**Insumos sem tier** (servem a todos os tiers e dão trabalho útil a quem está começando): **pedra** (Mineração), **casca** e **resina** (Lenhadoria), **carvão** (Fundição, feito só de pinho ou bétula) e **escama** (subproduto da Pesca). A **cinza de névoa** (com tier) é solta pelas criaturas corrompidas.

**Como os nomes foram escolhidos** [H]:
- **Metais.** Os cinco primeiros são materiais clássicos da fantasia, reconhecíveis sem explicação. O aço é liga de ferro com **minério negro** (rico em carvão), por isso o T3 consome minério de ferro do T2. A prata tem o papel clássico de metal contra mortos-vivos e criaturas corrompidas. A **aldarita** é a liga rara própria do jogo: só se forma onde a Névoa recuou, e seus fragmentos aparecem nas crateras que as Obras revelam. O nome vem de Aldária, nome provisório do mundo, e muda junto com ele.
- **Madeiras.** Seguem a sugestão da bíblia (carvalho, freixo, teixo, ébano), da mais macia à mais rara: pinho, bétula, carvalho, freixo (cabos e hastes), teixo (o arco longo clássico) e ébano.
- **Fibras, ervas e peixes dos tiers altos.** Plantas e bichos da própria Aldária, tocados pela Névoa (seda-de-névoa, lírio-da-névoa, enguia-da-névoa), ao lado de itens clássicos de lenda (cardo-prateado, mandrágora, maçã-dourada).
- **Fauna.** As peles vêm de feras do bestiário clássico (javali, lobo, urso, basilisco, serpe, dragão). As criaturas corrompidas (orcs, goblins, mortos-vivos e outras) soltam cinza de névoa, não pele. O bestiário é do [04](04-combate.md); os nomes acima devem ser reconciliados com ele.
- **O que fica de fora.** Nomes próprios de materiais de outros jogos e obras conhecidas (mithril, adamantita, runita, oricalco e afins), como manda a bíblia (seção 3).
- **Refeições.** Pratos de taverna, do caldo ao festim real.

### 2.2 Ligas: os tiers de baixo nunca morrem

| Lingote | Receita (Fundição) | Puxa demanda de |
|---|---|---|
| Cobre (T1) | 3 minérios de cobre + 2 carvões | Lenhadoria T1–T2 (carvão) |
| Ferro (T2) | 3 minérios de ferro + 2 carvões | idem |
| Aço (T3) | 1 minério negro + 2 minérios de ferro + 3 carvões | **Mineração T2** |
| Prata (T4) | 3 minérios de prata + 3 carvões + 1 pedra (fundente) | pedra |
| Platina (T5) | 2 minérios de platina + 1 lingote de aço + 4 carvões | **Fundição T3 e Mineração T2** |
| Aldarita (T6) | 2 fragmentos de aldarita + 1 lingote de prata + 4 carvões | **Fundição T4** |

O couro segue a mesma lógica: 1 casca por couro em T1–T2, 2 em T3–T4 e 3 em T5–T6.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Ligas e insumos sem tier que puxam material dos tiers de baixo | [F] No Shop Titans, itens antigos viram insumo e moeda de troca e mantêm o mercado ativo ([C06](../01-pesquisa/fichas/C06-shop-titans.md)); [H] o aço como liga de ferro é intuitivo | Tier velho com preço zero, coletor iniciante sem freguês | O novato coleta pedra, casca, resina e pinho, que todo tier precisa; o veterano compra | Cadeia comprida demais assusta; um gargalo no T2 trava o T5 (mitigação: oficinas NPC, [06](06-oficios-e-coleta.md) seção 8) |
| Nomes de fantasia clássica, com uma liga rara própria e nada copiado de outro jogo | Bíblia, seções 3, 6.5 e 9 | Legibilidade imediata para o público do gênero, sem risco de propriedade intelectual | Entender a escada de tiers sem tutorial (pinho, carvalho, ébano) | Parecer genérico ("mais um clone"); a identidade vem da aldarita, dos materiais da Névoa e da direção de arte do [14](14-arte-e-ui.md) |

## 3. Raridade: a variação nasce de decisão, não de sorteio

**Opções consideradas:**
- **(A) Sem raridade sorteada.** O item varia só por tier e por qualidade de crafting, e existem duas categorias especiais (Único e Lendário) com regras próprias. **← recomendado**
- (B) Raridade com afixos aleatórios (comum, mágico, raro), no modelo do Diablo e do Path of Exile.
- (C) Raridade só nos drops de monstro, e crafting só de itens comuns.

**Por que (A)** [H]:
1. **Liquidez.** Com 2 a 5 mil simultâneos, cada variação a mais divide os livros da Bolsa. O estudo de crafting recomenda poucos níveis de qualidade, só no produto final ([03, §7](../01-pesquisa/03-alem-do-idle.md)), e o FFXIV abandonou a qualidade nos insumos porque ela virou entulho no inventário (mesma fonte).
2. **Tudo feito por jogadores.** No Albion, todo equipamento é feito por jogadores, e o Black Market existe para que o PvE não gere equipamento do nada ([F02](../01-pesquisa/fichas/F02-albion-online.md)). A opção (C) mataria a Ferraria, a Alfaiataria e a Carpintaria.
3. **Distância do jogo de azar.** Afixos sorteados, num jogo com ouro que vale reais, tornam cada craft uma aposta. O estudo jurídico recomenda tratar como caixa de recompensa qualquer sorteio que custe um recurso comprável ([05b](../01-pesquisa/05b-rmt-legal-brasil.md)). Validar com advogado.
4. **O mercado não pode ser o único caminho para o poder.** [F] O diretor do Diablo III disse que a casa de leilão prejudicou o jogo ([G01](../01-pesquisa/fichas/G01-diablo-3-casa-de-leilao.md)). Com afixos raros, o melhor item seria sempre comprado, nunca feito.

**Categorias que existem** (de onde o item vem, e não um sorteio):

| Categoria | Como nasce | Onde se negocia |
|---|---|---|
| Peça de mercado (Comum, Bom, Fino, Obra-prima) | Fila de um ofício e, para as três qualidades de cima, uma sessão de obra-prima | Bolsa (Comum nova) ou Feira (seção 9) |
| **Único** | Obra-prima excepcional, com insumo nobre (seção 7.1) | Feira ou Leilão |
| **Lendário** | Obra-prima com Relíquia da Fronteira, contada por Era (seção 7.2) | Leilão |
| Matéria rara, insumo nobre, reagente, Relíquia da Fronteira | Insumos especiais das sessões ativas e da Fronteira ([06](06-oficios-e-coleta.md), seção 6) | Bolsa (relíquia: Leilão) |
| Peça de oficina | Comprada da oficina NPC de reforço, pior que a Comum | Não se negocia |

**Regra-mãe:** os monstros soltam materiais (pele, carne, cinza de névoa, matéria rara de elite) e Mérito. **Nunca ouro** ([04](04-combate.md); [07](07-economia.md), seção 2.2; revisão de consistência: R2) **e nunca equipamento pronto.**

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Sem raridade sorteada; Único e Lendário como categorias de origem | Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)); FFXIV e SWG ([03, §7](../01-pesquisa/03-alem-do-idle.md)); diferencia-se do Path of Exile ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)) | Mercado fragmentado, crafting sem valor, craft como aposta | Especializar-se e fazer bem, não "rolar até sair" | Perde-se a emoção do drop raro; ela é compensada pelo Faro, pelo Único e pela Fronteira |
| Nenhum monstro solta equipamento pronto | Black Market do Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)) | Equipamento surgindo do nada e matando quem fabrica | Toda peça em uso tem um artesão por trás | O combate parece menos recompensador; compensado por drops de material com valor de mercado |

## 4. Famílias de itens e atributos

### 4.1 Espaços de equipamento

Seis espaços de combate, mais a ferramenta do ofício em uso e os consumíveis. A reconciliar com o [03](03-personagem.md) (atributos de personagem) e o [04](04-combate.md) (como cada número entra no combate).

| Espaço | Cavaleiro | Caçador | Mago | Druida | Ladino |
|---|---|---|---|---|---|
| Arma | Espada (Ferraria) | Arco (Carpintaria) | Cajado, de duas mãos (Carpintaria) | Bordão (Carpintaria) | Adaga (Ferraria) |
| Mão secundária | Escudo (Carpintaria) | Aljava (Alfaiataria) | — (o cajado ocupa as duas mãos) | Bornal (Alfaiataria) | Lanterna (Ferraria) |
| Cabeça, corpo, mãos, pés | Armadura pesada (Ferraria) | Armadura média de couro (Alfaiataria) | Armadura leve de tecido (Alfaiataria) | Armadura leve de tecido | Armadura média de couro |
| Consumível de vocação | Óleo de arma | Flechas | Pó arcano | Unguento | Ração de viagem |

Todo personagem também usa **refeições** e **poções de cura**, e uma **ferramenta** para cada ofício que exerce.

### 4.2 Orçamento de poder por tier

`PI(T) = 10 × 1,6^(T − 1)`, arredondado. Exemplo: T4 = 10 × 1,6³ = 40,96 ≈ 41.

| Tier | T1 | T2 | T3 | T4 | T5 | T6 |
|---|---|---|---|---|---|---|
| PI (poder de item) | 10 | 16 | 26 | 41 | 66 | 105 |

Por que 1,6 [H]: a obra-prima (+25%) fica sempre abaixo da Comum do tier seguinte (+60%). O tier é o grande degrau, e a qualidade é a concorrência dentro dele. Isso protege o ausente: quem compra Comum do seu tier nunca fica um tier inteiro atrás.

### 4.3 Atributo principal por família (peça Comum)

| Família | Atributo principal | Fórmula | T1 | T2 | T3 | T4 | T5 | T6 |
|---|---|---|---|---|---|---|---|---|
| Espada | Dano por golpe | 1,00 × PI | 10 | 16 | 26 | 41 | 66 | 105 |
| Adaga | Dano por golpe | 0,85 × PI | 8,5 | 13,6 | 22,1 | 34,9 | 56,1 | 89,3 |
| Arco | Dano por disparo | 0,95 × PI | 9,5 | 15,2 | 24,7 | 39,0 | 62,7 | 99,8 |
| Cajado (2 mãos) | Dano arcano | 1,40 × PI | 14 | 22,4 | 36,4 | 57,4 | 92,4 | 147 |
| Bordão | Dano + Cura | 0,70 × PI + 0,60 × PI | 7 + 6 | 11,2 + 9,6 | 18,2 + 15,6 | 28,7 + 24,6 | 46,2 + 39,6 | 73,5 + 63 |
| Escudo | Defesa | 0,60 × PI | 6 | 9,6 | 15,6 | 24,6 | 39,6 | 63 |
| Armadura pesada (4 peças) | Defesa total | 3,0 × PI | 30 | 48 | 78 | 123 | 198 | 315 |
| Armadura média (4 peças) | Defesa total | 2,2 × PI | 22 | 35 | 57 | 90 | 145 | 231 |
| Armadura leve (4 peças) | Defesa total | 1,5 × PI | 15 | 24 | 39 | 62 | 99 | 158 |

- **Divisão da armadura:** corpo 40%, cabeça 20%, mãos 20%, pés 20%. Exemplo: couraça de ferro (T2) = 48 × 0,4 = 19,2 de defesa.
- **Ritmo de ataque** (golpes por minuto: espada 30, adaga 40, arco 24, cajado 20, bordão 30) e **conversão em dano real** ficam com o [04](04-combate.md). Os fatores acima são o orçamento de poder de cada família, não o balanceamento final.

### 4.4 Atributo secundário por família

O secundário é um percentual fixo por família, multiplicado pela qualidade e melhorado pelo acabamento da obra-prima (seção 5).

| Família | Secundário (Comum) | Para que serve |
|---|---|---|
| Espada | Bloqueio 6% | Linha de frente |
| Adaga | Crítico 8% | Dano explosivo do Ladino |
| Arco | Precisão 6% | Dano à distância estável |
| Cajado | Área 10% (parte do dano que atinge os vizinhos do alvo) | Controle e dano em área |
| Bordão | Alívio 5% (chance de limpar uma condição ao curar) | Suporte |
| Escudo | Bloqueio 8% | Linha de frente |
| Aljava | Precisão 5%; leva até 300 flechas | Autonomia do Caçador no offline |
| Lanterna | Achados 8%; visão na Névoa | Exploração e achados raros |
| Bornal | Cura 8%; +1 consumível automático | Suporte no offline |
| Armadura pesada | Firmeza 6% (resiste a empurrão e atordoamento) | Cercos |
| Armadura média | Esquiva 6% | Caçador e Ladino |
| Armadura leve | Foco 8% (amplia magia e cura) | Mago e Druida |

### 4.5 Ferramentas

- **Portão de tier.** Só se coleta ou produz um tier com ferramenta daquele tier ou maior.
- **A ferramenta não acelera a fila** (revisão de consistência: R16). A versão anterior dava +10% de velocidade por tier acima da receita e até +12% pela qualidade; na simulação, isso levava o hardcore ao 100 no D85 e o IPC a +83% ao ano ([08](08-simulacao.md), decisão 1). A velocidade vem só do domínio do [02](02-progressao.md) (até +10%). A qualidade da ferramenta muda a durabilidade (seção 6) e o secundário abaixo.
- **Secundário.** As ferramentas de coleta têm **Faro** (chance de matéria rara, na fila e na sessão de Faro). As de transformação e criação têm **Esmero** (+0, +2, +4 ou +6 pontos percentuais na chance de Bom da fila, conforme a qualidade).
- Lista e receitas no [06](06-oficios-e-coleta.md), seção 11.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Tier ×1,6; qualidade no máximo +25% | [H] Lei da escala humana (lei 5, [02](../01-pesquisa/02-padroes-matriz-leis.md)) | Obra-prima obrigatória; ausente um tier atrás | Comprar Comum do seu tier e buscar obra-prima como melhoria, nunca como requisito | Pouca diferença percebida entre qualidades; calibrar no alfa |
| Ferramenta como portão de tier, com desgaste | [F] Ferramentas que se gastam e consumíveis em cada elo da cadeia ([03, §8](../01-pesquisa/03-alem-do-idle.md)) | Ofícios de coleta e de transformação sem consumo próprio | Toda hora de ofício consome trabalho de outro ofício | Um gargalo de ferramenta trava a coleta; ferramentas de T1–T2 estão ao alcance do aprendiz |

## 5. Qualidade de crafting

### 5.1 As quatro qualidades

| Qualidade | Principal e secundário | Durabilidade máxima | Pontos de acabamento | Como nasce |
|---|---|---|---|---|
| **Comum** | ×1,00 | ×1,0 | 0 | Fila de qualquer artesão; sessão de obra-prima que fica abaixo de 40 pontos de qualidade ou trinca |
| **Bom** | ×1,08 | ×1,1 | 0 | Fila de mestre, com chance; sessão de obra-prima entre 40 e 69 pontos |
| **Fino** | ×1,16 | ×1,2 | 1 | **Só na obra-prima**, entre 70 e 99 pontos |
| **Obra-prima** | ×1,25 | ×1,3 | 2, mais 1 a cada 10 pontos acima de 100 (máximo 5) | **Só na obra-prima**, a partir de 100 pontos |

- **Ponto de acabamento.** O artesão escolhe, ao fim da sessão, onde aplicar cada ponto: **+1 ponto percentual no secundário** da família (ex.: Crítico da adaga de 8% para 9%) ou **+5% de durabilidade máxima** (a "têmpera"). É assim que o ativo personaliza a peça, como na experimentação do Star Wars Galaxies ([03, §7](../01-pesquisa/03-alem-do-idle.md)), sem ganhar poder bruto além do teto de +25%.
- **Assinatura.** Fino e Obra-prima levam o nome do artesão. A reputação vira marca no mercado ([03, §7](../01-pesquisa/03-alem-do-idle.md)).
- **Exemplo (espada de ferro, T2):** Comum, 16 de dano e 6% de Bloqueio; Bom, 17,3 e 6,5%; Fino, 18,6 e 7,0%, mais 1 ponto; Obra-prima, 20,0 e 7,5%, mais 2 a 5 pontos. Uma espada de aço Comum (T3) tem 26 de dano: a obra-prima de ferro não alcança o tier seguinte.

### 5.2 De onde vem cada qualidade

- **Aprendiz** (ofício não mestre, até o nível 30): a fila sai sempre Comum, e o aprendiz não faz obra-prima.
- **Mestre na fila:** `P(Bom) = 10% + 1 ponto percentual por nível acima do exigido (máximo 40%) + Esmero da ferramenta (0, 2, 4 ou 6 pontos)`. Exemplo: ferreiro nível 30 fazendo espada de ferro (receita de nível 20), com martelo Fino: 10% + 10% + 4% = 24% de chance de Bom.
- **Obra-prima:** a fila prepara a peça "em bruto", e o mestre, quando está ativo, faz a sessão de acabamento (de 1 a 3 minutos, gastando Inspiração). O resultado sai pela pontuação de qualidade. A mecânica completa está no [06](06-oficios-e-coleta.md), seção 6.
- **O que isso garante:** o ausente tem volume (Comum e Bom, sem limite além da fila e do teto de emissão), e o ativo tem qualidade (Fino e Obra-prima, limitados pela Inspiração). Nenhum dos dois perde o lugar no mercado.

### 5.3 Insumos e consumíveis

- **Insumos não têm qualidade.** Lingote é lingote. Isso deixa a Bolsa funda e o inventário legível, seguindo a lição do FFXIV ([03, §7](../01-pesquisa/03-alem-do-idle.md)). A variação dos insumos fica em itens distintos: matéria rara e insumo nobre ([06](06-oficios-e-coleta.md), seção 6).
- **Consumíveis têm dois graus:** **Comum** (da fila) e **Fino** (lote acabado numa sessão ativa), com +25% de efeito. **Adotado na bíblia** (seção 6.5; revisão de consistência: R3): a bíblia listava quatro qualidades para tudo; agora são quatro no equipamento e duas nos consumíveis. Nos consumíveis, quatro graus dariam quatro livros por poção na Bolsa e esvaziariam todos. Dois graus mantêm o ganho do ativo com metade da fragmentação.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Fino e Obra-prima só na sessão ativa; Bom também na fila do mestre | [H] Duas taxas visíveis (P12); [F] no Albion, foco e especialização aumentam a chance de qualidade alta ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | O ativo sem vantagem real, ou o ausente punido | O ativo volta para acabar peças; o ausente vende volume | Obra-prima vira obrigação; mitigado pelo teto de +25%, pela Inspiração limitada e pela Comum na Bolsa |
| Acabamento em pontos escolhidos pelo artesão | Experimentação do SWG ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | Peça boa igual a todas as outras; artesão sem identidade | Encomendas sob medida ("quero têmpera") | Combinações demais na Feira; os filtros por acabamento resolvem |
| Consumíveis com dois graus | FFXIV ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | Livros rasos na Bolsa | Comprar Fino para momentos importantes (cerco, chefe) | Aval do diretor dado (R3) |

## 6. Durabilidade, reparo e quebra

### 6.1 Regras

1. **Unidade:** ponto de durabilidade (pd). Equipamento de combate nasce com **D0 = 120 pd**; ferramenta, com **D0 = 300 pd**.
2. **Desgaste só no uso:** 10 pd por hora de uso normal. Multiplicadores de atividade: combate comum ×1,0; masmorra e Fronteira ×1,5; cerco ×2,0; ferramenta em fila de ofício ×1,0; sessão de Faro, 2 pd por golpe (20 pd num desmoronamento). Item no baú, ou equipado com a fila parada, não perde nada. A reconciliar com o [04](04-combate.md).
3. **Reparo:** devolve a durabilidade até o novo máximo, consome kits de reparo e tira **20% da durabilidade máxima original**. Uma peça aceita **3 reparos**. No 4º zero, ela **quebra e some**.
4. **Peça zerada com reparo disponível fica inoperante, não quebra.** Ela espera o reparo, manual ou automático. Só a última vida termina em quebra.
5. **Kits:** cada reparo consome `K = arredondar(maior quantidade de um insumo na receita ÷ 8)` kits do mesmo tier, no mínimo 1, mais uma pequena **taxa de bancada em ouro, destruída** (valor no [07](07-economia.md)).

### 6.2 Fórmulas

```
Dmax(0) = D0 × q × (1 + 0,05 × t)
          q = 1,0 (Comum), 1,1 (Bom), 1,2 (Fino), 1,3 (Obra-prima)
          t = pontos de acabamento aplicados em têmpera
Dmax(k) = Dmax(0) × (1 − 0,20 × k)        k = reparos já feitos (0 a 3)
vida útil total (pd) = Dmax(0) × (1 + 0,8 + 0,6 + 0,4) = 2,8 × Dmax(0)
vida útil (h) = 2,8 × Dmax(0) ÷ desgaste por hora
```

Lendário: `D0 × 1,5`, perda de 10% por reparo e 6 reparos, ou seja, `vida = 4,9 × Dmax(0)`.

### 6.3 Exemplo calculado: espada de ferro Fina, com 1 ponto de têmpera

| Fase | Durabilidade máxima | Horas de uso normal | Custo da fase |
|---|---|---|---|
| Nova | 120 × 1,2 × 1,05 = **151 pd** | 15,1 h | A espada: 16 lingotes de ferro + 2 cabos de bétula + 2 couros de lobo |
| 1º reparo | 151 × 0,8 = 121 pd | 12,1 h | 2 kits de metal T2 = 8 lingotes de ferro + 4 carvões |
| 2º reparo | 151 × 0,6 = 91 pd | 9,1 h | idem |
| 3º reparo (última vida) | 151 × 0,4 = 60 pd | 6,0 h | idem |
| **Total** | 423 pd | **42,3 h** (35,3 h na mistura de referência) | 40 lingotes de ferro (120 minérios), 92 carvões (46 toras de pinho ou bétula), 2 cabos, 2 couros |

**A decisão do jogador.** Em trabalho embutido ([06](06-oficios-e-coleta.md), seção 11.5), a espada de ferro Comum vale cerca de 60 minutos de ofício e dá 12 h na primeira vida (5 min/h). O 3º reparo custa 2 kits (cerca de 14 minutos) por 6 h (2,4 min/h). Reparar compensa sempre, mas cada vez menos. A última vida é o momento de encomendar a próxima peça.

### 6.4 Kits de reparo

| Kit | Receita (tier n) | Quem faz | Repara |
|---|---|---|---|
| Kit de metal | 4 lingotes + 2 carvões | Ferraria | Armas de metal, armadura pesada, lanterna, ferramentas de metal |
| Kit de costura | 2 couros + 2 tecidos + 4 linhas | Alfaiataria | Armaduras média e leve, aljava, bornal, fole |
| Kit de marcenaria | 4 tábuas + 2 resinas | Carpintaria | Arco, escudo, cajado, bordão, vara de pesca, tear, pilão |

Kits por reparo de cada peça: [06](06-oficios-e-coleta.md), tabela 11.3. Exemplos: espada 2, couraça 3, elmo 1, gibão 2, túnica 2, arco 1, picareta 2. Um reparo custa de 23% a 38% do trabalho embutido da peça.

### 6.5 O que acontece no fim, e como o ausente se protege

- **Reparo automático (grátis para todos, nunca à venda):** antes de sair, o jogador escolhe a regra. Por exemplo: "reparar quando a peça cair abaixo de 10%, usando kits do baú; se os kits acabarem, trocar para o conjunto reserva; se não houver reserva, parar a fila e guardar". [F] O Shop Titans vende o alívio da quebra no VIP, e os jogadores reclamam ([C06](../01-pesquisa/fichas/C06-shop-titans.md)). Aqui, o alívio é regra do jogo.
- **Avisos:** na última vida ("esta peça quebra quando zerar") e a 10%. A tela de retorno mostra o que quebrou, o que foi reparado e quantos kits foram gastos.
- **Conjunto reserva:** um segundo conjunto salvo, usado automaticamente quando o principal quebra ou fica inoperante.
- **Aposentar:** a qualquer momento, o dono pode tirar a peça de uso. Ela vira **troféu**: decoração da casa, presa à conta e sem função. Sai da economia como se tivesse quebrado, mas fica com o histórico (horas de uso, cercos defendidos, artesão). Quem ama a própria obra-prima não precisa vê-la sumir.
- **Registro de serviço:** toda peça Fina ou melhor guarda o próprio histórico. Quando ela quebra, o registro fica no perfil do artesão e do dono.

### 6.6 Vida útil de referência (para a simulação)

Mistura de referência [H]: 70% de combate comum, 20% de masmorra ou Fronteira e 10% de cerco, o que dá `10 × (0,7 + 0,2 × 1,5 + 0,1 × 2) = 12 pd/h`.

| Item | Dmax(0) | Vida em uso normal (10 pd/h) | Vida na mistura (12 pd/h) |
|---|---|---|---|
| Equipamento Comum | 120 | 33,6 h | 28,0 h |
| Equipamento Bom | 132 | 37,0 h | 30,8 h |
| Equipamento Fino (sem têmpera) | 144 | 40,3 h | 33,6 h |
| Obra-prima (sem têmpera) | 156 | 43,7 h | 36,4 h |
| Obra-prima com 5 pontos de têmpera | 195 | 54,6 h | 45,5 h |
| Lendário (r = 10%, 6 reparos) | 180 | 88,2 h | 73,5 h |
| Ferramenta Comum | 300 | 84 h de ofício | — |
| Ferramenta Obra-prima | 390 | 109 h de ofício | — |
| Peça de oficina (NPC: −20%, 1 reparo) | 96 | 17,3 h | 14,4 h |

**Na prática:** quem combate 8 h por dia troca de conjunto Comum a cada 4 dias e repara a cada 1 ou 2 dias. Quem deixa o combate rodando 24 h troca a cada 1,4 dia, e também colhe três vezes mais drops.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Durabilidade com fim certo (3 reparos, −20% cada) | [F] Quebra sustenta quem fabrica no Shop Titans ([C06](../01-pesquisa/fichas/C06-shop-titans.md)); equipamento como consumível no Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)); perda de itens em 16 de 29 jogos com mercado ([02](../01-pesquisa/02-padroes-matriz-leis.md)) | Estoque que só cresce e preço que só cai (lei 17) | Demanda contínua de artesãos; planejar a próxima peça | Frustração com a perda; mitigada por previsibilidade, avisos e aposentadoria |
| Desgaste só no uso, sem sorte de quebra | [F] No Ultima Online, degradação e decaimento foram rejeitados como artificiais e o consumo foi aceito ([04a, §4.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)); diferencia-se da quebra aleatória do Shop Titans | O desgaste parecer punição | Ver a durabilidade como combustível da atividade, e não como imposto | Jogadores pararem a fila para poupar a peça; o custo por hora é baixo perto do ganho da atividade |
| Reparo com kits feitos por artesãos, não com ouro de NPC | [F] Reparo com kits no Shop Titans ([C06](../01-pesquisa/fichas/C06-shop-titans.md)); [H] dreno de material, e não de moeda | Reparo que só drena ouro e não dá trabalho a ninguém | Ferraria, Alfaiataria e Carpintaria têm freguês mesmo sem peça nova | Falta de kit trava o reparo; há kit na oficina NPC de reforço |
| Reparo automático grátis; peça zerada fica inoperante, não quebra | Insight 13 ([00](../01-pesquisa/00-sintese.md)); [F] o Shop Titans monetiza o alívio da quebra ([C06](../01-pesquisa/fichas/C06-shop-titans.md)) | O ausente acordar sem equipamento | Decidir a regra antes de sair | A regra mal configurada gasta kits caros; mostrar a estimativa de gasto ao configurar |

## 7. Únicos e lendários

### 7.1 Único: muda o jeito de jogar, não o tamanho do poder

- **Como nasce:** sessão de obra-prima de criação que chega a **130 pontos de qualidade ou mais, usando um insumo nobre**. O artesão escolhe **1 entre 3 traços** sorteados da lista pública da família da peça e dá nome a ela (nome moderado).
- **Atributos:** os de uma obra-prima (×1,25 e pontos de acabamento) **mais o traço**. O traço é uma troca: ganha num contexto e perde noutro, de 5% a 10%. Nunca é aumento puro.
- **Sem limite por Era.** O Único é raro por construção. A meta é de 2% a 5% das sessões de mestres bem preparados (nível da receita + 10, com insumo nobre e reagente) [H, calibrar no alfa]. Como o traço é horizontal, um Único a mais não desequilibra o combate.
- **Durabilidade e fim:** os de uma obra-prima. O Único quebra como qualquer peça, e o registro fica no perfil do artesão.

| Traço (família) | Ganho | Custo |
|---|---|---|
| Canto do ferro (espada) | +8% de dano em cerco | −4% de dano fora do cerco |
| Sombra mansa (adaga) | +10% de achados na Névoa | −5% de crítico |
| Vento de través (arco) | +6% de precisão em masmorra | −6% de dano em cerco |
| Centelha errante (cajado) | +1 alvo atingido na área a cada 2 magias | −8% de dano no alvo principal |
| Mão curadora (bordão) | +10% de cura em aliados abaixo de 30% de vida | −5% de dano |
| Couro de andarilho (gibão) | +6% de esquiva | −6% de defesa |
| Muralha de Pedraforte (couraça) | +10% de firmeza em cerco | +10% de desgaste |
| Mão de lenhador (machado) | +15% de chance de matéria rara no Faro | −5% de velocidade na fila |

### 7.2 Lendário: contado, nomeado e finito

| Regra | Valor [H] |
|---|---|
| Tiers | Só T4, T5 e T6 |
| Receita | Uma peça preparada para obra-prima, mais **1 Relíquia da Fronteira** do tier, **2 insumos nobres** da linha da peça, 2 reagentes e 10 de Inspiração, feita na **Bancada das Lendas**, prédio aberto por uma Obra (a reconciliar com o [09](09-social.md)) |
| Quem forja | Mestre com nível igual ou maior que o da receita + 10; **no máximo 1 lendário por mestre por Era** |
| Sessão | 5 etapas, em vez de 4. Sucesso a partir de 120 pontos, sem trincar. Se falhar, a peça sai obra-prima (ou Comum, se trincar), **a relíquia volta ao dono** e os insumos nobres e reagentes são consumidos |
| **Limite** | **No máximo 24 lendários forjados por Era em cada Cidade** (8 de T4, 8 de T5 e 8 de T6), com contador público. Cada relíquia vale por duas Eras (a de origem e a seguinte) e depois vira decoração presa à conta |
| Poder | ×1,30 (a obra-prima tem ×1,25), 5 pontos de acabamento e 1 efeito lendário da lista da família |
| Durabilidade | D0 × 1,5; cada reparo tira 10%; 6 reparos; cerca de 88 h de uso normal |
| Memória | O forjador dá o nome. O **Livro de Lendas da Cidade** registra o forjador, a expedição da Fronteira que achou a relíquia, os donos, os feitos (cercos, chefes) e o fim |
| Fim | Ao quebrar, vira **Relíquia partida** (decoração presa ao último dono) e a página do Livro se fecha. Em vida, pode ser aposentado e doado ao Salão da Cidade, o que rende Mérito (a reconciliar com o [09](09-social.md)) |
| Mercado | Leilão (e Troca, sob o risco de troca do [13](13-anti-abuso.md)) |
| Era 1 | Não há lendários. Os primeiros nascem da 1ª Fronteira, na 2ª Era |

**Efeitos lendários** (exemplos; a lista é pública e fechada por família):
- *Bastião de Pedraforte* (couraça): quando o dono defende um cerco, a guarnição dele recebe +5% de defesa.
- *Flecha que volta* (aljava): 20% das flechas disparadas voltam à aljava.
- *Facho do Ladino* (lanterna): na Fronteira, a expedição do dono revela uma região vizinha a mais no mapa coletivo.

**De onde vêm as relíquias:** das metas coletivas e dos destaques da Fronteira. Proposta para o [10](10-live-ops.md): 12 relíquias por metas coletivas do servidor e 12 por destaques individuais e de guilda.

### 7.3 Comparação

| | Obra-prima | Único | Lendário |
|---|---|---|---|
| Poder sobre a Comum | +25% | +25% e um traço de troca | +30%, 5 pontos e um efeito |
| Limite | Inspiração do artesão | Raridade natural (2% a 5% das sessões boas) | 24 por Era por Cidade; 1 por mestre por Era |
| Exige | Sessão ativa | Sessão de 130 pontos ou mais, com insumo nobre | Relíquia, 2 insumos nobres, Bancada das Lendas |
| Vida útil (uso normal) | 44 a 55 h | 44 a 55 h | cerca de 88 h |
| Onde se vende | Feira | Feira ou Leilão | Leilão |

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Único com traço horizontal e sem limite | [H] Lei do mercado complementar (lei 14, [02](../01-pesquisa/02-padroes-matriz-leis.md)); assinatura do artesão ([03, §7](../01-pesquisa/03-alem-do-idle.md)) | Desejo por algo raro sem criar poder que se compra | Caçar a sessão perfeita e escolher o traço para o próprio estilo | Um traço "obrigatório" para cerco; revisar a lista a cada Era, com aviso |
| Lendário contado por Era, com relíquia da Fronteira e fim certo | [F] Tetos e eventos públicos para itens de topo no Black Desert ([F08](../01-pesquisa/fichas/F08-black-desert.md)); temporadas que devolvem cosmético e relíquia ([02-conceito](../02-conceito.md)) | Topo de equipamento que se acumula para sempre e concentra poder | A Fronteira abastece a cidade; o forjador vira personagem da história do servidor | Guildas ricas compram todas as relíquias; mitigado pelo limite de 1 lendário por mestre por Era, pelo fim em cerca de 88 h e pelo Leilão público |
| Relíquia volta ao dono quando a forja falha | [F] O "pity" do Black Desert, em que o azar tem fim conhecido ([F08](../01-pesquisa/fichas/F08-black-desert.md)) | Perder um item contado por um sorteio | Tentar sem medo, com custo real nos insumos nobres | Tentativas demais travam a relíquia; ela expira em duas Eras |

## 8. Cosméticos

### 8.1 Regra de ouro: cosmético nunca vira poder

Nenhum cosmético dá atributo, velocidade, XP, Inspiração, Mérito, tempo de offline, fila ou qualquer vantagem de jogo. Nenhum cosmético **se desmonta** ou vira insumo de receita, reparo, Obra ou Encomenda. [F] No Black Desert, roupas pagas viravam Cron Stones (material de aprimoramento), e é isso que cola o rótulo de *pay-to-win* desde 2016 ([F08](../01-pesquisa/fichas/F08-black-desert.md)). Essa regra vale também para a decoração da casa: decoração não dá bônus de "conforto" nem de descanso.

### 8.2 Guarda-roupa da conta: aplicar é consumir

- Todo cosmético negociável é um item até ser **aplicado**. Ao aplicar, o item é consumido e a aparência entra no **guarda-roupa** da conta, para sempre e presa a ela.
- Do guarda-roupa, a aparência pode ser posta sobre qualquer peça da família compatível e trocada à vontade, de graça.
- **Por que assim:** o Baú é negociável (decisão do Gabriel), e o piso diz que tudo que se negocia se gasta (P3). Aplicar tira o item do mercado; a coleção fica com o jogador.

### 8.3 De onde vêm os cosméticos

| Fonte | Negociável? | Observação |
|---|---|---|
| Baú Misterioso | Sim, fechado ou como item antes de aplicar | Coins na loja ou ouro no mercado (decisão do checkpoint 1) |
| Loja de cosméticos (venda direta por Coins) | Sim, antes de aplicar | Conteúdo e preço no [11](11-monetizacao.md) |
| Fronteira | Não | Cosméticos de temporada presos à conta; o RMT fica fora da temporada (lei 22) |
| Mérito e títulos da cidade | Não | Reconhecimento cívico |
| **Moda da Cidade** (feita por ofícios) | Sim, enquanto nova | Seção 8.5 |
| Troféus (peças aposentadas) e Relíquia partida | Não | Seção 6.5 e 7.2 |

### 8.4 Baú Misterioso

**Conteúdo (sempre item, sempre cosmético ou decorativo):**

| Categoria | Exemplos |
|---|---|
| Aparência de arma e de armadura | Espada da festa da colheita (com fitas de trigo), couraça de escamas de dragão, cajado de galho retorcido |
| Conjunto visual de roupa | Gibão de patrulheiro da Fronteira, túnica de bordadeira |
| Decoração da casa | Tapeçaria bordada, estante de pergaminhos, candelabro de cobre, tapete de lã |
| Aparência de ajudante | Ajudante com capuz de viajante, ajudante pescador com rede |
| Efeito visual | Rastro de vaga-lumes, brilho de lanterna |
| Moldura de perfil e emote | Moldura de vitral, emote "puxar o fole" |

**Faixas e chances publicadas** [H; o [11](11-monetizacao.md) fixa os números]:

| Faixa | Chance |
|---|---|
| Simples | 65% |
| Refinado | 27% |
| Raro | 7% |
| Raríssimo | 1% |

- **Garantia:** depois de 19 Baús seguidos sem Raro ou Raríssimo, o 20º garante um dos dois. O contador é da conta e aparece na tela.
- **Coleção por Era:** cada Era traz uma coleção temática. Para não criar medo de perder (FOMO), coleções antigas voltam num "Arquivo do Baú" depois de 12 meses, como o Legacy Vault do IdleMMO ([C04](../01-pesquisa/fichas/C04-idlemmo.md)).
- **Nunca no Baú:** nada da seção 8.1, nem kit, reagente, material, ouro, Coins, relíquia, Inspiração, fila ou tempo de offline.
- **Teto de gasto e chances publicadas** (salvaguarda S5): no [11](11-monetizacao.md).
- **Jurídico.** Uma caixa paga com Coins (que vêm de doação em reais) ou com ouro (que se troca por Coins no Câmbio), com sorte e com conteúdo que se revende por ouro, reúne pagamento, sorte e prêmio com valor econômico. Normas: Lei de Contravenções Penais, art. 50 (jogo de azar); Lei 15.211/2025 (ECA Digital), art. 2º, IV, e art. 20, que vedam caixas de recompensa em jogos acessíveis a menores; aqui, o jogo é 18+ com idade verificada ([05b](../01-pesquisa/05b-rmt-legal-brasil.md)). É decisão do Gabriel, com risco assumido (bíblia, seção 5). **Validar com advogado.**

### 8.5 Moda da Cidade: cosmético feito por ofício, que se gasta

- **O que é:** roupas e acessórios de festa sem nenhum atributo, feitos pela Alfaiataria com tecido, linha, corante (Alquimia) e, nas versões finas, brocado (Tecelagem). Exemplos: traje da festa da colheita, manto da festa de inverno, máscara da noite dos mortos, faixa do aniversário da Cidade.
- **Desgaste:** a peça é negociável enquanto nova. Ao ser vestida, prende-se à conta e **dura 30 dias de uso** (dias em que esteve vestida). Depois, puiu.
- **Por que existe:** dá demanda à Tecelagem, à Alfaiataria e à Alquimia fora do combate, deixa o artesão vender estilo, e não poder, e cumpre o P3. Receitas no [06](06-oficios-e-coleta.md), seção 12.
- **Temas sazonais:** as festas de fantasia medieval da bíblia (colheita, inverno, mortos, aniversário da Cidade e outras). O visual passa pela revisão de semelhança com outros jogos do [14](14-arte-e-ui.md).

### 8.6 Decoração da casa

- **Fontes:** móveis feitos por ofício (Carpintaria: mesa, cadeira de balanço, estante de pergaminhos; Tecelagem: tapeçaria, tapete; Ferraria: candelabro de cobre), o Baú, os troféus e as relíquias partidas.
- **Colocar prende:** um móvel negociável, ao ser colocado na casa, prende-se a ela e sai do mercado.
- **Zero vantagem de jogo,** como diz a seção 8.1. A casa é vitrine, memória e lugar de visita.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Cosmético nunca vira poder, nem se desmonta | [F] Roupa virando Cron Stone no Black Desert ([F08](../01-pesquisa/fichas/F08-black-desert.md)); insight 24 ([00](../01-pesquisa/00-sintese.md)) | Rótulo de *pay-to-win* | Comprar identidade, e não vantagem | Pressão comercial para "só um bônus pequeno"; a regra entra na carta pública de monetização |
| Aplicar consome e prende no guarda-roupa | [H] P3 aplicado a um item negociável | Cosmético eterno circulando sem dreno | Colecionar; o mercado de cosméticos se renova a cada Era | Quem aplica por engano perde o item; pedir confirmação ao aplicar |
| Moda da Cidade com 30 dias de uso | [H] Demanda fora do combate para a cadeia têxtil | Tecelagem e Alfaiataria dependentes só da guerra | Vestir-se para eventos e encomendar roupa de festa | Concorrer com o Baú; a Moda é mais barata e efêmera, o Baú é permanente |

## 9. O que é negociável e o que fica preso à conta (piso P2)

| Negociável | Preso à conta |
|---|---|
| Brutos, insumos, consumíveis, kits e reagentes produzidos pela conta; a saída deles gasta cota do teto de emissão (portão de saída; revisão de consistência: R18) | Nada nasce preso pela produção: o que passa do teto fica na conta, negociável, à espera de cota |
| Matérias raras, insumos nobres, peças de obra-prima e o lote Fino (nascem de ação ativa e **gastam cota quando saem da conta**, como tudo que é negociável; revisão de consistência: D13) | Tudo comprado nas **oficinas NPC de reforço** |
| Equipamentos e ferramentas, novos ou usados (a peça usada vale pelo que resta) | Os insumos vendidos pelo NPC nas receitas de T2 para cima ([07](07-economia.md), seção 4.3) |
| Únicos e lendários (com registro público) | Inspiração, Mérito, Marcos, Selo de mestre, títulos e ajudantes |
| Relíquias da Fronteira, até expirarem | Cosméticos aplicados (guarda-roupa), móveis colocados, Moda vestida, troféus e relíquias partidas |
| Cosméticos ainda não aplicados (Baú fechado ou aberto, loja, Moda nova) | Recompensas de primeira semana e kit inicial do onboarding ([12](12-onboarding.md)) |
| Ouro e Coins (bíblia) | Cosméticos de Fronteira e de Mérito |

**Como o teto de emissão se aplica aos itens** (regras no [07](07-economia.md), seção 3; revisão de consistência: R18):
1. **Contado em valor de referência fixo (VR),** e não em unidades. O VR de cada item é o trabalho embutido nele, em minutos de ofício ([06](06-oficios-e-coleta.md), seção 11.5), vezes **2,0 ouro por minuto**, fixo desde o lançamento (R24). Contar em VR impede contornar o teto fabricando poucas peças caras, e o VR fixo impede que o teto afrouxe quando os preços caem ([08](08-simulacao.md), decisão 3).
2. **A saída emite, não a fila.** Nada nasce preso: tudo o que a conta produz é "de origem" e pode ser usado à vontade. Quando sai da conta (venda, Troca, venda a NPC), gasta cota igual ao VR do item menos o crédito dos insumos comprados, na mesma régua. **O que veio de janelas ativas também conta** (revisão de consistência: D13): matéria rara do Faro, insumo nobre, lote Fino, peça de obra-prima e prêmios de evento gastam cota pelo VR deles quando saem da conta. A qualidade não muda o VR: a peça Fina ou melhor conta pelo VR da versão Comum mais o VR dos insumos especiais que consumiu. O VR das matérias raras e dos insumos nobres fica a fixar no [06](06-oficios-e-coleta.md), seção 11.5.
3. **O excedente espera.** O que passa da cota do dia fica na conta: uso próprio, Encomendas, doação às Obras (que viram Mérito) ou venda nos dias seguintes (a cota enche 1/24 por hora e acumula até 3 dias). A regra de fila "quando o estoque de X passar de N, doar à Obra" deixa isso automático.
4. **Insumo preso não dá crédito.** O que vem da Oficina da Cidade (a 2,5× o VR; revisão de consistência: D7) ou do NPC é preso e não se vende; usado numa receita, não dá crédito de cota, e o produto gasta cota pelo VR inteiro. A versão anterior deste módulo fazia o produto "nascer preso" ("o vínculo contamina"); com o portão de saída, a cota já impede o vazamento. Reparar uma peça com kit preso é permitido, porque o reparo não cria item.

**Exemplo** (refeito com o portão de saída; R18). A ferreira Edda esgota a cota do dia às 15 h. A espada que sai às 16 h nasce igual às outras: ela pode usá-la, entregá-la numa Encomenda da cidade ou doá-la a uma Obra hoje, ou vendê-la amanhã, quando a cota tiver enchido. Os lingotes que ela comprou na Bolsa dão crédito pelo VR deles: na venda, a espada gasta só o VR que Edda agregou. Se ela tivesse usado um lingote da Oficina da Cidade, a espada gastaria cota pelo VR inteiro.

| Decisão | Referência | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Teto em VR fixo com portão de saída e crédito dos insumos (R18) | Lei 16 ([02](../01-pesquisa/02-padroes-matriz-leis.md)); [F] Banana e Bongo Cat dominados por bots ([G05](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)) | Farm automático virando oferta sem limite no mercado | Produzir à vontade, agregar valor e dar destino útil ao excedente (Obras) | Regra difícil de entender; a tela de venda mostra quanto da cota cada lote usa e a barra do teto do dia |
| Equipamento usado continua negociável | [F] O equipamento circula e se perde no Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)) | Novato sem acesso a equipamento bom e barato | Mercado de usados; vender a peça antes da última vida | Lavagem de valor por peças usadas a preço absurdo; faixa de preço pelo valor estimado e risco de troca ([C04](../01-pesquisa/fichas/C04-idlemmo.md)) |

## 10. Interfaces com outros módulos

| Módulo | O que este módulo entrega | O que precisa receber |
|---|---|---|
| [02 — Progressão](02-progressao.md) | Níveis de tier (1, 15, 35, 55, 75, 90); aprendiz só faz Comum; Selo de mestre pode mudar uma regra de item (sugestão: peças assinadas por um Selo aceitam 4 reparos) | Curva de nível; teto de offline, que limita a Inspiração |
| [03 — Personagem](03-personagem.md) | Espaços de equipamento, classes de armadura por vocação, secundários | Como Defesa, Esquiva, Foco e Firmeza entram nos atributos |
| [04 — Combate](04-combate.md) | PI por tier, fatores de família, desgaste por atividade (×1,0 / ×1,5 / ×2,0), proibição de equipamento como drop | Drops de material por hora (o [06](06-oficios-e-coleta.md), seção 9.4, pede cerca de 3,5 peles, 6 carnes e 3,5 cinzas por hora de combate) |
| [07 — Economia](07-economia.md) | Regras de durabilidade e reparo (o dreno principal), classes de balcão (seção 9 e [06](06-oficios-e-coleta.md), seção 7), VR em minutos de ofício | Recebido: 2,0 ouro por minuto de referência (R24) e teto em VR fixo com portão de saída (R18). Falta: taxa de bancada |
| [08 — Simulação](08-simulacao.md) | D0 = 120 pd (300 nas ferramentas), 10 pd/h, 3 reparos de −20%, kits por reparo, mistura de atividades, vida útil (tabela 6.6), distribuição de qualidades, 24 lendários por Era, chances do Baú | — |
| [10 — Live-ops](10-live-ops.md) | Relíquias por Era, coleções do Baú, Moda sazonal | Calendário de Fronteiras e de eventos |
| [11 — Monetização](11-monetizacao.md) | Conteúdo e faixas do Baú; regra de ouro dos cosméticos | Preços, teto de gasto |
| [13 — Anti-abuso](13-anti-abuso.md) | Vínculo, oficina NPC presa, lendários no Leilão | Risco de troca para peças caras |
| [14 — Arte e UI](14-arte-e-ui.md) | Guarda-roupa, troféus, Livro de Lendas, cota usada por lote na tela de venda (R18), ícones em pixel art de cada material por tier | Revisão de semelhança dos nomes e visuais com outros jogos |

## 11. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Consumíveis com dois graus** (Comum e Fino), e não quatro. Motivo: liquidez da Bolsa (seção 5.3). **Adotada** (revisão de consistência: R3).
2. **[proposta de mudança na bíblia] Novos números-âncora em 6.5:** `PI(T) = 10 × 1,6^(T−1)`; D0 = 120 pd (ferramentas 300); desgaste de 10 pd por hora de uso; 3 reparos de −20% cada; vida de referência de 34 h para Comum e 44 h para obra-prima; 24 lendários por Era por Cidade.
3. **[proposta de mudança na bíblia] Teto de emissão medido em valor de referência** (trabalho embutido), com a regra "o vínculo contamina". **Adotada em parte** (revisão de consistência: R18): o teto é medido em VR fixo, com crédito dos insumos na mesma régua e o portão de saída do 07; a regra "o vínculo contamina" saiu, porque nada nasce preso.
4. **[proposta de mudança na bíblia] Bolsa também para peças Comuns novas** (são fungíveis), o que dá ao volume do ausente um mercado líquido. A reconciliar com o 07.
5. **[proposta de mudança na bíblia] Lista fechada de materiais em 6.5:** a tabela 2.1 (cobre, ferro, aço, prata, platina, aldarita; pinho, bétula, carvalho, freixo, teixo, ébano; e as demais linhas) substitui os exemplos da bíblia. Como a bíblia sugeria cinco metais para seis tiers, a platina entra como T5.
6. **[proposta de mudança na bíblia] Termos novos no glossário:** Inspiração, Faro, kit de reparo, matéria rara, insumo nobre, reagente, Relíquia da Fronteira, Único, Lendário, guarda-roupa, Moda da Cidade, Oficina da Cidade, valor de referência (VR), troféu e Livro de Lendas.

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **A quebra vira frustração** | O jogador perde a obra-prima favorita "sem aviso", como nas queixas do Shop Titans ([C06](../01-pesquisa/fichas/C06-shop-titans.md)). | Desgaste previsível e visível, aviso na última vida, aposentadoria a qualquer momento, registro de serviço, reparo automático grátis. |
| **O desgaste parece imposto artificial** | Jogadores rejeitam degradação que não vem do uso, como no Ultima Online ([04a, §4.1](../01-pesquisa/04a-economia-fontes-drenos-inflacao.md)). | Nada se desgasta parado; o custo por hora aparece na tela da atividade, ao lado do ganho por hora. |
| **Drenos fracos ou fortes demais** | A vida útil de 34 h e o custo de reparo estão errados para a economia real. | Todos os parâmetros vão para a simulação (08); mudanças só entre Eras, com aviso e dados (lei 21). |
| **A obra-prima vira requisito** | Masmorras e cercos calibrados para equipamento Fino. | O 04 calibra o conteúdo pela peça Comum do tier; a qualidade é margem de conforto, não chave. |
| **O lendário concentra poder e vira alvo de RMT** | Uma guilda compra todas as relíquias e equipa só os seus. | Limite de 24 por Era e de 1 por mestre; efeito modesto (+5% sobre a obra-prima); fim em cerca de 88 h; Leilão público e risco de troca. |
| **Cosmético vira poder por pressão comercial** | Um bônus de decoração "só de conforto" entra para vender mais. | A regra de ouro (8.1) entra na carta pública de monetização; qualquer exceção exige anúncio público. |
| **O Baú é questionado juridicamente** | Caixa paga, com sorte e prêmio revendável (LCP, art. 50; Lei 15.211/2025, art. 20). | Jogo 18+ verificado; chances publicadas; garantia; teto de gasto; conteúdo só cosmético; decisão registrada do Gabriel. **Validar com advogado.** |
| **A Feira fragmentada esconde o bom negócio** | Qualidades, acabamentos e vidas restantes geram milhares de anúncios únicos. | Valor estimado por qualidade e vida restante (à moda do Milky Way Idle, [C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); filtros; Comum nova na Bolsa. |
| **A cota é mal entendida** (revisão de consistência: R18; a regra "o vínculo contamina" saiu) | O jogador usa um insumo preso da Oficina na receita e estranha que a peça gaste mais cota na venda. | A tela de venda mostra quanto da cota cada lote usa e o crédito dos insumos; a receita avisa quando um insumo preso não dá crédito. |
| **Nomes genéricos ou parecidos com outro jogo** | Cobre, ferro, carvalho e dragão são comuns no gênero, e um nome de material ou visual de item acaba igual ao de outro jogo (risco de "mais um clone" e de propriedade intelectual, bíblia, seção 3). | Liga rara e materiais da Névoa com nomes próprios (aldarita, seda-de-névoa, lírio-da-névoa); lista de nomes proibidos (mithril, adamantita, runita, oricalco e afins); revisão de semelhança no 14 antes de fechar nomes e ícones. |
| **Bots no Faro e na obra-prima** | Um script joga as sessões melhor que o humano. | A Inspiração limita o volume por conta (um bot rende o mesmo que um humano); a conta é um adulto verificado (P8). |

