# GDD 10 — Live ops

> **Escopo.** A estrutura da Era (13 semanas), a Travessia (a partir da 2ª Era), os eventos semanais, mensais e as festas, a cadência de atualizações, a comunicação com a comunidade, o plano do 1º ano, os ganchos contra a evasão depois da 4ª semana e as métricas de operação. Depende da [bíblia](00-biblia.md) e do [09 — Social](09-social.md); conversa com os módulos 04 (Cercos), 07 (economia), 08 (simulação) e 11 (monetização).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**
> **Unidade de conta:** **hora-fila (h-f)**, o que um personagem típico produz em 1 hora de Fila (definida no [09](09-social.md)). **P** = produção semanal do Arraial em h-f, medida nas 2 semanas anteriores.

## Resumo das decisões

| # | Decisão | Por quê, em uma linha |
|---|---|---|
| L1 | **Quatro ritmos públicos:** semana, mês, Era e ano, com o calendário das 2 Eras seguintes sempre publicado. | Previsibilidade é respeito ao ausente e ao planejador (lei 8). |
| L2 | **A Era tem esqueleto fixo:** 3 Obras (S1, S5, S9), ganchos na S5 e na S9, Grande Cerco na S12 e semana de Colheita na S13. | Toda Era tem começo, virada e fim, e o pós-pico tem data para novidade. |
| L3 | **A Travessia usa o mesmo personagem**, com uma Fila da Travessia extra e igual para todos, progressão própria que zera, teto de tier por região e **nenhum mercado próprio**. A cidade abastece a Travessia. | Recomeço justo sem dividir a base nem a economia (lei 22). |
| L4 | **Marcos com teto semanal acumulável.** | O hardcore não termina na 4ª semana, e quem pausou alcança. |
| L5 | **Da Travessia volta só história:** títulos, cosméticos, relíquias decorativas e um monumento coletivo. | Nada que infle o Arraial ou o divida. |
| L6 | **Eventos drenam e não emitem.** Recompensas presas à conta e cosméticas, materiais consumidos, zero ouro e zero item negociável. | Evento como torneira foi um erro documentado no EVE e no SimpleMMO. |
| L7 | **Regra econômica só muda na fronteira** (mês ou Era), com 7 dias de aviso, e nunca na S12, na S13 ou nos 3 primeiros dias da Era. | Quem planejou não é punido (lei 8 e lei 21). |
| L8 | **Relatório econômico mensal e notas de patch com o porquê**, em PT e EN. | Confiança é produto (pilar 5). |

## 1. Princípios de live ops

1. **Calendário público e previsível.** [H] O jogador ausente só se sente esperto se souber o que vem. A [Fase 2](../02-conceito.md) pede calendário de Eras com pelo menos duas de antecedência.
2. **O ausente nunca perde.** Todo evento tem participação passiva pela Fila, e todo exclusivo volta um dia ([03, §10](../01-pesquisa/03-alem-do-idle.md)). [F] O modo férias pago do S&F gerou revolta ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)).
3. **Regra muda só na fronteira.** [F] O nerf de recompensas no início de uma temporada do AFK Journey gerou pedido de reembolso, reversão e compensação ([06](../01-pesquisa/06-monetizacao-retencao.md)).
4. **A pausa é legítima.** [H] O fim da Era é um ponto de saída sem culpa e de volta sem atraso. [F] A própria equipe do Diablo IV sugeriu que os jogadores dessem um tempo entre temporadas ([03, §2](../01-pesquisa/03-alem-do-idle.md)); para um idle, isso é virtude.
5. **Evento é freguês, não torneira.** [F] No EVE, itens de eventos aparecem entre as fontes de ISK do mês; o SimpleMMO cortou o ouro dos chefes mundiais em set/2026 ([03, §3 e §10](../01-pesquisa/03-alem-do-idle.md)). [H] Aqui, todo evento consome bens produzidos por jogadores.
6. **Uma coisa grande de cada vez.** [H] No máximo um evento grande ativo, uma Travessia por vez (bíblia, §6.1). [F] As temporadas simultâneas do Idlescape esvaziaram os livros de ofertas ([C03](../01-pesquisa/fichas/C03-idlescape.md)).
7. **Sistêmico antes de narrativo.** [H] Uma Era de regra nova custa menos que uma Era de conteúdo novo ([02-conceito, §7](../02-conceito.md)).
8. **Momento ao vivo se repete.** [F] O show de Travis Scott no Fortnite foi repetido em cinco sessões entre 23 e 25/4/2020 e reuniu 27,7 milhões de jogadores únicos ([03, §10](../01-pesquisa/03-alem-do-idle.md)). [H] Todo "ao vivo" do Arraial passa em 3 horários.

## 2. Os quatro ritmos

| Ritmo | Duração | O que acontece | Para quê |
|---|---|---|---|
| **Semana** | 7 dias | Cerco, Encomendas, Rota da semana, Diário do Arraial | Hábito curto, de 5 a 15 minutos por sessão (bíblia, §6.1) |
| **Mês** | ~4 semanas, pelo calendário civil | Feira Grande, Boletim do IPA, atualização do mês, festa (quando houver) | Renovação e prestação de contas |
| **Era** | 13 semanas | Ameaça, regra, 3 Obras, 1 ou 2 Câmaras, Travessia (a partir da 2ª) | O arco da temporada |
| **Ano** | 4 Eras | Aniversário do Arraial, Livro do Arraial, expansão anual | Legado |

## 3. A estrutura de uma Era

### 3.1 Os componentes

| Componente | O que é | Regras [H] |
|---|---|---|
| **Ameaça nova** | Um encantado corrompido pela Bruma e os assombrados que ele traz. Muda o Cerco: por onde vem o ataque e que posto é mais exigido (módulo 04) | Aparece na S1, mostra força na S6 e é enfrentado na S12. Vencido, é **libertado**, e a cura entra na história do Arraial (bíblia, §3) |
| **Regra nova** | Uma regra sistêmica temporária que muda decisões | Anunciada 4 semanas antes; **nunca toca a zona vermelha** (offline, Filas, automação, taxa do ausente); nunca anula um plano em andamento; sai no fim da Era |
| **Obras** | 3 por Era: Obra I (S1 a S4), Obra II (S5 a S8) e Grande Obra (S9 a S12) | A Câmara escolhe entre 2 ou 3 opções (09, §6.5); cada Obra concluída empurra a Bruma e abre região ou receitas |
| **Câmara** | 1 ou 2 posses por Era, sempre na S1, S5 ou S9 | Calendário no [09, §6.4](09-social.md) |
| **Travessia** | A partir da 2ª Era, da S2 à S12 | §4 |
| **Festas** | As que caem no período, pelo calendário civil | §5.3 |

### 3.2 Calendário semana a semana

| Semana | Arraial | Travessia (a partir da Era 2) | Comunicação e eventos | Gancho |
|---|---|---|---|---|
| **S−4** (é a S9 da Era anterior) | — | Anúncio da próxima terra e da **lista de suprimentos** | **Prévia da Era:** ameaça, regra, opções da Obra I | Expectativa |
| **S−1** (S12 da anterior) | — | — | Notas de patch completas, com o porquê | — |
| **S1 — Abertura** | A ameaça e a regra entram; a Obra I começa; Cerco de apresentação (dificuldade baixa); **Fôlego de volta** para quem retorna (§9) | **Embarque:** inscrição, montagem do Posto, Encomenda de preparação | Festa de abertura; Diário especial | Reativação |
| **S2** | Cerco | **A Bruma se abre:** o mapa começa a ser revelado pelas Margens | Vídeo curto do mapa (marketing) | Corrida inicial |
| **S3** | Cerco | Margens | — | — |
| **S4** | Cerco; consulta e escolha da Obra II | Margens; meta: 30% do mapa revelado | — | — |
| **S5 — Revelação** | A Obra I termina e abre região e receitas; a Obra II começa; **a regra da Era ganha a segunda camada**; novo tipo de assombrado | **Rios internos** abrem; primeiro chefe regional | Diário: "o que mudou" | **Gancho 1** |
| **S6** | O chefe da Era aparece no Cerco pela primeira vez (e foge) | Inscrição nas frentes do final | — | Encontro marcado |
| **S7 — Meio da Era** | Cerco | Frentes formadas; meta: 55% do mapa | Evento de meio de Era | Compromisso social |
| **S8** | Cerco; consulta e escolha da Grande Obra | Miolo do mapa | — | — |
| **S9 — Reviravolta** | A Obra II termina; a Grande Obra começa; **a Bruma contra-ataca** (Cercos mais duros) | Trechos sem presença voltam a enevoar; o **Coração da Bruma** aparece quando 75% do mapa estiver revelado | Prévia da próxima Era (S−4) | **Gancho 2** |
| **S10** | Cerco | **Assalto ao Coração**, etapa 1 | Contagem regressiva | — |
| **S11** | Cerco | Assalto ao Coração, etapas 2 e 3; batalha final no sábado, transmitida em 3 horários | — | Final coletivo |
| **S12 — Grande Cerco** | O chefe da Era no Cerco final; vencido, é libertado; a Grande Obra termina | **Desfecho:** resultado coletivo; o mapa se fecha no domingo | Notas de patch da próxima Era | Clímax |
| **S13 — Colheita** | Cerco leve (vigília); títulos e rankings da Era; **Livro da Era** (crônica com nomes); congelamento de mudanças | **Loja do Posto** aberta; relíquias entregues; **Livro da Travessia**; Marcos não gastos convertidos no domingo; Encomenda de preparação da próxima Travessia | Boletim especial de fim de Era | **Pausa legítima** |

### 3.3 A semana típica

| Dia (horário de Brasília) | O que acontece [H] |
|---|---|
| **Segunda, 9h** | Quadro do Arraial: 4 Encomendas da cidade (prazo de 5 dias); Encomendas de guilda (7 dias); Encomenda prioritária da Câmara; nova Rota da semana |
| **Quarta, 21h** | Fecha a inscrição do Cerco (24 h antes, bíblia §6.1) |
| **Quinta, 21h** | Cerco resolvido no servidor, com replay disponível e boletim |
| **Sexta** | Diário do Arraial, edição semanal |
| **Sábado e domingo** | Janela de festas e eventos de fim de semana, quando houver |
| **Domingo, 23h59** | Fecha a Rota da semana e os rankings semanais |

- **Sem reset diário.** [H] A "sede de aventura" do S&F, que zera à meia-noite, pune quem não entra ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). O ritmo semanal cabe num idle.
- **O Cerco é resolvido sem precisar de ninguém online.** Os momentos ativos do Cerco são opcionais e só somam (módulo 04, P12).
- **Orçamento de atenção:** tudo o que é semanal deve caber em cerca de 10 minutos por dia. [H] O estudo [além do idle](../01-pesquisa/03-alem-do-idle.md) aponta o "jogo de checklist" como risco.

### 3.4 Tamanho das Obras

`Tamanho(Obra) = f × P × 4 semanas`, com **f = 2,5% (Obra I), 3% (Obra II) e 5% (Grande Obra)** [H]. O tamanho é calculado no lançamento da Obra, a partir da produção das 2 semanas anteriores, e fica congelado depois.

- **Exemplo calculado:** um Arraial com 15.000 ativos semanais, cada um produzindo 118 h-f por semana (Fila rodando 70% do tempo), tem P = 15.000 × 118 = 1,77 milhão de h-f. A Obra I pede 0,025 × 1,77 milhão × 4 ≈ **177 mil h-f**, e a Grande Obra 0,05 × 1,77 milhão × 4 ≈ **354 mil h-f**.
- **Na Era inteira,** as três Obras pedem (2,5% + 3% + 5%) × 4 / 13 ≈ **3,2% da produção da Era**. A reconciliar com o teto de emissão do módulo 07, porque a produção acima do teto vai para as Obras (bíblia, §6.6).
- **Escala com a população:** um Arraial menor recebe Obras menores. [F] As missões públicas do Warhammer Online morreram quando a multidão seguiu em frente ([03, §15](../01-pesquisa/03-alem-do-idle.md)).
- **A Obra nunca fracassa.** Se não terminar na janela, ganha mais 1 semana. Se ainda faltar, termina na "versão modesta" (bônus menor, visual simples) no fim da Era, e a seguinte começa no prazo. [H]
- **O que uma Obra dá:** abre região (recursos e tier novos), receitas, melhoria de defesa para os Cercos e marcos visuais no Arraial. Bônus de renda só com orçamento aprovado no módulo 07.

### 3.5 Banco de ideias de Eras

Todas as ameaças e regras são provisórias. **Nomes e caracterização de seres do folclore, sobretudo de origem indígena e afro-brasileira, dependem da revisão de sensibilidade cultural (bíblia, §3; módulo 14).**

| Era | Ameaça | Regra nova [H] | Decisão que a regra muda |
|---|---|---|---|
| **Fundação** (Era 1) | A primeira onda de assombrados do Vau, sem encantado-chefe nomeado | **Mutirão:** entregas nas Obras rendem +50% de Mérito | Investir cedo na cidade em vez de só em si |
| **Cheia** | A Cobra-Grande do rio, corrompida | O rio sobe: a Pesca rende mais, a coleta de margem fecha, os Cercos chegam pela água | Mudar de rota de coleta; estocar antes |
| **Estiagem** | Um encantado do sertão | A água vira insumo: Culinária e Alquimia consomem mais; a Colheita rende menos | Quem guardou grãos e água; demanda para a Pesca |
| **Ventania** | Assombrados do litoral | Desgaste maior em madeira e tecido (velas e cordas) | Demanda para Carpintaria e Tecelagem |
| **Bruma Densa** | Um encantado da mata | Explorar custa luz (lanternas consumíveis); os achados do Batedor sobem | O valor do Batedor e da Alquimia (óleo) |
| **Defeso** | Era de paz armada, sem chefe novo | Pesca em rodízio de rios; o manejo dá bônus | A Pesca muda de lugar; a ecologia vira tema |

- **Uma regra muda decisões, não números.** [H] "O mesmo, mais rápido" não é novidade (lei 2, [02](../01-pesquisa/02-padroes-matriz-leis.md)).
- **Toda regra é revisada com o módulo 07** antes do anúncio, para estimar o choque de preços e avisar os produtores com 4 semanas.

## 4. A Travessia

### 4.1 O que é: a decisão de formato

A bíblia define a Travessia como "a temporada de expedição à Bruma, em mundo paralelo, a partir da 2ª Era" e diz que ela devolve só títulos, cosméticos e relíquias. Falta decidir **quem entra nesse mundo paralelo**. Há três caminhos:

| Opção | Como funciona | A favor | Contra |
|---|---|---|---|
| (A) Personagem novo, do zero, com economia própria (modelo das Leagues do OSRS) | Cada um cria um personagem sazonal | Recomeço justo e total. [F] As Leagues do OSRS bateram 210.027 simultâneos na estreia da Liga V ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)) | Quebra "um personagem por conta"; a cidade não abastece nada e esvazia; duas economias (lei 22) |
| **(B) O mesmo personagem, com progressão de Travessia que zera, teto de tier por região e uma Fila extra só para a Bruma ← recomendado** | Entra com o personagem do Arraial, mas o poder na Bruma vem sobretudo do nível de desbravador e do que se acha lá | A cidade abastece (suprimentos e equipamento se gastam); um personagem por conta; recomeço quase justo | O veterano ainda leva alguma vantagem; uma Fila extra precisa de aval da bíblia |
| (C) O mesmo personagem, sem normalização | O equipamento do Arraial vale integralmente | Simples | O veterano domina; não há recomeço |

**Regras da opção B [H]:**
- **Fila da Travessia:** uma Fila extra, **igual para todos**, que só faz expedições na Bruma e some no fim da Travessia. Ela não é vendida, não conta no teto de 3 Filas e não produz nada negociável. [H] Sem ela, explorar tiraria tempo da produção do Arraial; com ela, a Travessia soma demanda sem tirar oferta. **[proposta de mudança na bíblia]** (§12), a reconciliar com o módulo 02.
- **Nível de desbravador** de 1 a 30, que zera a cada Travessia, com talentos de exploração por vocação (o Batedor revela mais rápido e acha mais, o Erveiro estende o fôlego da expedição, e assim por diante; módulo 03).
- **Teto de tier por região:** nas Margens, todo equipamento acima de T2 funciona como T2; nos Rios internos, como T3 ou T4; no Coração, como T5. [H] O veterano leva o melhor dentro do teto, não um T6 que anula o desafio. A reconciliar com os módulos 04 e 05.
- **Sem mercado na Travessia.** O mercado é o do Arraial. O que se acha na Bruma fica preso à conta e à temporada. [H] Uma economia por vez, RMT fora da temporada (lei 22).
- **Quem entra:** qualquer conta com 7 dias ou mais. [H] Barra a conta descartável sem barrar o novato.

### 4.2 O mapa coletivo

- **Forma:** cerca de 140 hexágonos em 7 regiões, em anéis: **Margens** (anéis 1 e 2), **Rios internos** (3 e 4), **Serras e Matas** (5) e **Coração da Bruma** (6). Geração procedural com pontos de interesse feitos à mão (ruínas das cidades antigas, encantados presos, relíquias), cerca de 1 a cada 10 hexágonos [H], como o [conceito](../02-conceito.md) propõe.
- **Revelação:** cada hexágono precisa de pontos de exploração, somados por todas as expedições do servidor.

`custo(hex) = 400 × anel^1,3 × limite(A / 5.000; entre 0,5 e 2)`, em que **A** = desbravadores ativos na semana anterior [H].
- Exemplo: um hexágono do anel 3, com A = 3.000 → 400 × 3^1,3 × 0,6 = 400 × 4,17 × 0,6 ≈ **1.001 pontos**. No anel 1, com o mesmo A: 400 × 1 × 0,6 = **240 pontos**.
- **Ritmo-alvo:** 30% do mapa revelado no fim da S4, 55% na S7 e 75% na S9. Se o servidor ficar mais de 10 pontos percentuais atrás da meta, os custos da semana seguinte caem 15% (no máximo duas vezes); se ficar à frente, sobem 10%. O ajuste é publicado no Diário. [H]
- **O nome do descobridor:** vai para o hexágono o nome de **quem mais contribuiu** para revelá-lo (empate: quem chegou primeiro), seguido de "e mais N". [H] Dar o nome a quem dá o último ponto premiaria a corrida pelo golpe final; o GW2 não usa "tag" justamente para evitar isso ([03, §3](../01-pesquisa/03-alem-do-idle.md)).
- **O mapa é público,** inclusive para quem não participa. [H] O mapa sendo revelado "cabe num vídeo de 10 segundos" ([02-conceito, §3](../02-conceito.md)).
- **Reviravolta (S9):** hexágonos sem nenhuma expedição por 7 dias voltam a enevoar e pedem nova exploração para render pontos regionais. Os nomes dos descobridores ficam, e ninguém perde recompensa pessoal. [H]

### 4.3 Marcos

**Fontes:** expedições concluídas (proporcionais à distância e ao risco), contribuição em hexágonos, metas regionais coletivas (todos que contribuíram numa região recebem quando ela é pacificada) e o final.

**Teto semanal de 1.000 Marcos, acumulável:** o teto que não se usou numa semana passa para a seguinte, dentro da mesma Travessia. Máximo teórico: 11 semanas × 1.000 = **11.000 Marcos**. [H]
- O hardcore não esgota a Travessia na 4ª semana, e quem entra na S6 encontra 5.000 de teto disponível (as semanas S2 a S6).
- [H] O estudo de monetização recomenda um passe por marcos com teto semanal, para o ativo não disparar na frente ([06](../01-pesquisa/06-monetizacao-retencao.md)); aqui o mesmo vale para a moeda da temporada.

**Dois catálogos no Posto [H]:**

| Catálogo | O que tem | Faixa de preço |
|---|---|---|
| **Usar na Bruma** | Melhorias e equipamento sazonal, que somem no fim | 200 a 1.500 |
| **Levar para casa** | Cosméticos (500 a 3.000) e relíquias decorativas (até 6.000) | 500 a 6.000 |

- **O dilema é de propósito:** gastar agora para ir mais longe ou guardar para levar algo para casa. [F] É o mesmo dilema dos orbs do Path of Exile, em que cada orb é aposta ou poupança ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)).
- **O título-base não depende de gastar:** quem **ganha** 2.000 Marcos na Travessia recebe "Desbravador(a) da Nª Travessia", mesmo que tenha gastado tudo na Bruma.
- **Exemplo:** um casual que ganha 40% do teto (4.400 Marcos) leva o título-base, uma relíquia menor e dois cosméticos, ou investe 1.500 na Bruma e leva menos para casa. Um dedicado que ganha 90% (9.900) leva quase todo o catálogo principal.
- **No fim da S13, os Marcos não gastos viram automaticamente uma lembrança decorativa** proporcional ao saldo. Nunca viram ouro, Alvará, Mérito ou XP. [H]

### 4.4 A cidade abastece a Travessia

Cada expedição consome um **kit** comprado no Arraial [H]:

| Item do kit | Ofícios que fornecem |
|---|---|
| Comida | Culinária, com Pesca, Colheita e carne da caça |
| Poções e unguentos | Alquimia, com Colheita |
| Luz (tochas, lanternas, óleo) | Carpintaria e Alquimia |
| Reparo do equipamento, que se desgasta **1,5 vez mais rápido na Bruma** | Ferraria, Alfaiataria, Curtume, Carpintaria |

- **Consumo estimado:** 0,1 h-f de bens do Arraial por hora de expedição [H]. Com a Fila da Travessia sempre ativa, são 2,4 h-f por dia, cerca de 14% da produção diária típica (17 h-f). Com 60% dos ativos na Travessia, a demanda total sobe **cerca de 8% sobre a produção do Arraial**.
- **O pico vem na S2 e na S3.** Para não virar choque: a lista de suprimentos sai na S−4; há Encomendas de preparação na S13 e na S1; e, se a escassez passar de um limiar, as oficinas NPC de reforço com preço teto (mitigação do [conceito](../02-conceito.md), §7) entram. A calibrar no módulo 08.
- [H] É a resposta ao risco "a temporada esvazia a cidade" do conceito: a Travessia aumenta a demanda pelos ofícios em vez de competir com eles.

### 4.5 O final coletivo: o Assalto ao Coração

O [conceito](../02-conceito.md) previa uma corrida de guildas para fundar uma cidadela no coração do continente e listava o risco de um "final dominado pelas guildas grandes". **Proposta: o final é do Arraial inteiro, com guildas em frentes.** [H]

- **Quando:** S10 e S11, com a batalha final no sábado da S11.
- **Três etapas coletivas:** abrir caminho (exploração), sustentar o cerco reverso (suprimentos e combate) e libertar o encantado-mor (combate e ofícios).
- **Frentes:** até 5 frentes, cada uma com uma exigência diferente (suprimentos, combate, exploração, ofícios, cura). Cada guilda escolhe uma frente na S6 e na S7; solos e guildas pequenas entram na **Frente do Arraial**, montada pelo sistema. [H] Nenhuma frente vence sozinha, como na regra das duas plantas do Travian, que exige que a segunda planta esteja com outro jogador da mesma aliança ([D05](../01-pesquisa/fichas/D05-travian.md)).
- **Resultado em três patamares, todos com desfecho:** **Libertação** (100% das etapas), **Vitória parcial** (de 70% a 99%) e **Vigília** (abaixo de 70%). Cada patamar tem o seu monumento e o seu capítulo no Livro da Travessia. [H] Temporada com fim digno (lei 12); o GW2 paga metade da recompensa num evento fracassado ([03, §3](../01-pesquisa/03-alem-do-idle.md)).
- **Ranking por frente e por guilda,** em divisões por porte e por membro (09, §5.2). Ninguém leva tudo.
- **A batalha final é resolvida uma vez e transmitida em 3 horários** (14h, 20h e 23h de Brasília), com o replay sincronizado. [H]

### 4.6 O que volta ao Arraial

| O que | Para quem | Forma |
|---|---|---|
| Título da Travessia | Quem ganhou 2.000 Marcos ou mais | Preso à conta |
| Títulos por percentil | Top 1%, 5%, 10%, 25% e 50% em Marcos ganhos | Preso à conta |
| Título de cartógrafo | Quem teve o nome gravado num hexágono | Preso à conta |
| Cosméticos | Comprados com Marcos | Presos à conta |
| Relíquias | Compradas com Marcos ou achadas em pontos de interesse | Decorativas, presas, expostas na casa, na Sede ou no museu do Arraial |
| Monumento | O Arraial | Obra visual na praça e o nome da terra no mapa do Arraial |
| Livro da Travessia | Todos | Crônica e mapa com os nomes |
| **Nada disso** | — | Ouro, Alvará, item negociável, material, XP, Mérito ou poder |

### 4.7 Entrar atrasado e voltar

- O teto de Marcos acumulado (§4.3) espera por quem chega depois.
- **Ventos a favor:** até atingir o nível de desbravador mediano do servidor, o XP de desbravador rende 1,5 vez. [H] [F] O "rested XP" do WoW é o mesmo sistema de uma penalidade rejeitada no beta, reapresentado como prêmio para quem volta ([03, §17](../01-pesquisa/03-alem-do-idle.md)).
- As metas regionais pagam a todos que contribuíram, inclusive com pouco; o final fica aberto até o último dia.

| Quatro perguntas | Travessia |
|---|---|
| Referência | Leagues do OSRS (mundo paralelo, só cosméticos de volta), Fresh Start do New World (recomeço trouxe mais gente que a expansão paga), Maravilha do Mundo do Travian (final coletivo) ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md); [G04](../01-pesquisa/fichas/G04-new-world.md); [D05](../01-pesquisa/fichas/D05-travian.md)). Diferença: o mesmo personagem, sem mercado próprio, e a cidade como fornecedora. |
| Problema | Economia velha, domínio dos veteranos e a falta de um "agora é a minha vez", sem dividir a base. |
| Comportamento | Volta em massa no começo, planejamento de expedição, compras de suprimentos no Arraial e cooperação no final. |
| Risco | Evasão depois do pico, como a do PoE; choque de demanda; veteranos na frente. Ver §9 e §13. |

## 5. Eventos

### 5.1 Semanais

| Evento | O que é | Por que existe |
|---|---|---|
| **Cerco** | Ataque semanal com inscrição até 24 h antes (módulo 04; social no [09, §4.2](09-social.md)) | O momento de combate do jogo e a demanda constante por equipamento |
| **Encomendas** | 4 da cidade e 1 por guilda ([09, §2.7 e §4.1](09-social.md)) | Cooperação leve com prazo |
| **Rota da semana** | Uma expedição com **semente fixa, igual para todos**: o jogador monta o plano (rota, grupo, regras de recuo) uma vez e o servidor resolve; ranking por percentil e recompensa cosmética. A reconciliar com o 04 | Competição justa e sem economia. [F] O Daily Climb do Slay the Spire dá uma tentativa por dia com semente e condições iguais para todos ([03, §6](../01-pesquisa/03-alem-do-idle.md)). [H] Semanal, para caber no idle |
| **Diário do Arraial** | Jornal semanal (§7.3) | Dar assunto comum e registrar a história |

### 5.2 Mensais

- **Feira Grande** (último fim de semana do mês, de sexta a domingo) [H]:
  - **Concurso de obra-prima:** 4 ofícios por mês em rodízio, de modo que cada ofício tem o seu concurso a cada 3 meses. A peça inscrita é **doada ao museu** (sai da economia) e o júri é a nota de qualidade do sistema (módulo 06), não voto popular. Os vencedores entram no Livro de Obras-Primas.
  - **Sem oferta com prazo.** A rotação mensal da loja é anunciada, sem contagem regressiva. [H] O estudo de monetização recomenda calendário público e nenhuma oferta com prazo ([06](../01-pesquisa/06-monetizacao-retencao.md)).
- **Boletim do IPA** (primeira terça do mês) e **Conversa com o estúdio** (live bilíngue na mesma semana) (§7).
- **Atualização do mês** (na semana do Boletim) (§6).

### 5.3 As festas do Arraial

Festas com raízes brasileiras, reinterpretadas na ficção de Pindorama. **Regras culturais [H]:** usar as formas festivas seculares e amplamente compartilhadas (fogueira, dança em roda, bloco, amigo oculto, roda de causos, teatro do boi); **não usar ritos religiosos** (santos, procissões, cultos de matriz africana ou indígena) como mecânica; não copiar nomes, cores e símbolos de agremiações reais; e passar cada festa pela revisão de sensibilidade (bíblia, §3) com consultoria de pessoas das tradições envolvidas.

| Festa | Raiz | Na ficção | Mecânica principal [H] | Quando | Ofícios em destaque |
|---|---|---|---|---|---|
| **Festa da Fogueira** | Ciclo junino | Na noite mais longa do ano, a Bruma é mais forte, e o Arraial acende fogueiras para segurá-la | **Fogueiras de bairro** (meta comunitária em madeira, que é consumida); **barracas** de guilda e de turma com pratos de festa (consumidos); **quadrilha assíncrona** (cada um escolhe os passos durante a semana, e a dança passa no sábado em 3 horários); **correio elegante** só com cartões de frases prontas | 2 semanas em junho | Culinária, Colheita, Lenhadoria, Tecelagem, Alfaiataria |
| **Disputa dos Bois** | Boi-bumbá; o Festival de Parintins acontece no último fim de semana de junho, com a rivalidade entre Garantido e Caprichoso ([Portal Amazônia](https://portalamazonia.com/amazonia-de-a-a-z/festival-folclorico-de-parintins-1/); [CNN Brasil, 2025](https://www.cnnbrasil.com.br/nacional/norte/am/festival-de-parintins-2025-conheca-os-21-itens-de-caprichoso-e-garantido/)) [F] | Duas companhias de boi do Arraial, com nomes e cores próprios | Cada pessoa escolhe uma torcida (individual, não por guilda); as torcidas constroem alegorias com bens de muitos ofícios; a nota soma completude, qualidade e participação **por torcedor**, para a torcida menor não perder por tamanho | Último fim de semana de junho, como fecho da Fogueira | Carpintaria, Tecelagem, Alfaiataria, Alquimia (tintas) |
| **Entrudo** | Carnaval | O Entrudo é o cortejo do Arraial | **Blocos abertos e temporários**, que misturam guildas (a nota do bloco sobe com a diversidade de guildas entre os membros); fantasias e máscaras fabricadas (consumidas no desfile); estandarte do bloco como prêmio | 5 dias em fevereiro ou março, conforme a data do Carnaval no ano [NV] | Alfaiataria, Tecelagem, Curtume |
| **Noite dos Encantados** | Dia do Folclore, 22 de agosto ([Decreto 56.747/1965](https://planalto.gov.br/ccivil_03/decreto/1950-1969/d56747.htm)) [F] | Os encantados libertados nas Eras anteriores visitam o Arraial | **Bestiário** dos encantados curados; **concurso de causos** (textos curtos da comunidade, em PT ou EN, moderados; voto de uma pessoa por um causo, com revisão contra brigada); os causos vencedores entram no Diário e na boca de um NPC da taverna | A semana de 22 de agosto | Todos (a festa é de história) |
| **Folia de Fim de Ano** | Visitas de fim de ano e amigo oculto | Grupos de foliões visitam as Sedes e as casas | **Visitas** às casas e Sedes, com cumprimentos de frases prontas; **amigo oculto** opt-in: o sistema sorteia os pares, cada um fabrica um presente **com o próprio ofício e os próprios materiais** (consumidos), e quem recebe ganha uma **cópia comemorativa presa à conta**, revelada em 6 de janeiro | De 24 de dezembro a 6 de janeiro | Todos |
| **Noite da Bruma** (opcional, a decidir por dados) | Fim de outubro, perto do Halloween, que atrai o público de língua inglesa | Uma noite em que a Bruma avança sobre o Arraial | Cerco noturno temático e fantasias | Última semana de outubro | Alfaiataria, Alquimia |
| **Aniversário do Arraial** | A data de abertura do servidor | O Arraial faz anos | **Livro do Arraial** (crônica do ano: Eras, Obras, Câmaras, Travessias), monumento do ano, título de Fundador(a) para quem jogou a Era 1 | Data de abertura | — |

- **Sobre o amigo oculto e a troca de presentes:** a cópia presa à conta impede que a festa vire rota de transferência de valor. [F] A troca de pets do IdleOn, em que cada lado mantém o seu e recebe uma cópia intransferível do outro, abre o social sem abrir espaço para golpe ([notas de síntese, B01–B02](../01-pesquisa/_notas-de-sintese.md)).
- **Sobre o correio elegante:** só frases prontas, porque cartão anônimo com texto livre num jogo 18+ vira canal de assédio. [H] Quem recebe pode bloquear o remetente sem saber quem é.
- **Sobre a Festa da Fogueira e o nome "Arraial":** "arraial" é também o nome do lugar da festa junina [NV]; a coincidência pode virar a identidade da festa principal do jogo.

### 5.4 A trilha da festa: sem moeda nova

[H] As festas **não criam moeda**. Cada festa tem uma **trilha de progresso** que avança com a atividade normal durante a festa (inclusive a Fila do ausente) e com as atividades da festa. Em cada marco da trilha, o jogador **escolhe 1 entre 3 recompensas**, e entre elas há sempre itens de festas passadas. Assim os exclusivos voltam sem precisar de uma loja permanente, e o jogo evita uma sexta moeda além de ouro, Alvará, Marcos e Mérito.

### 5.5 Regras para todo evento

1. **Orçamento de emissão zero** em ouro e em itens negociáveis. As recompensas são cosméticas, decorativas, títulos, XP pessoal ou Mérito. [H]
2. **Todo evento consome:** materiais entregues em metas comunitárias, pratos, fantasias e alegorias saem da economia. Meta de consumo por semana de festa: **cerca de 1% de P** [H], a calibrar no 08.
3. **Participação passiva:** quem só deixou a Fila rodando avança na trilha, mais devagar. [H] ([03, §10](../01-pesquisa/03-alem-do-idle.md))
4. **Exclusivos que voltam:** todo cosmético de evento volta em edições futuras ou nas escolhas da trilha.
5. **Três horários para tudo que é "ao vivo".**
6. **Teste de carga antes de cada evento grande,** com fila de entrada e modo degradado. [F] No primeiro evento presencial do Pokémon GO (Chicago, 2017), a rede não aguentou e a Niantic reembolsou todos os participantes ([03, §10](../01-pesquisa/03-alem-do-idle.md)).
7. **Nunca na semana do Grande Cerco nem do final da Travessia.** Se a data civil colidir, a festa anda até 1 semana ou encolhe. [H]
8. **No máximo um evento grande ativo de cada vez.**

## 6. Cadência de atualizações

| Tipo | Frequência | O que pode mudar | O que não pode | Aviso [H] |
|---|---|---|---|---|
| **Correção urgente** | Quando preciso | Bugs, segurança, exploits | Números de economia, salvo para fechar exploit | Nota no Diário em até 24 h |
| **Nota da semana** | Toda terça | Qualidade de vida, textos, interface, cosméticos novos | Taxas, drops, receitas, durabilidade | — |
| **Atualização do mês** | Na semana do Boletim | Receitas novas, ajustes de balanceamento, ajustes de torneira anunciados no Boletim | Mudança econômica sem 7 dias de aviso | 7 dias para mudança econômica |
| **Atualização da Era** | A cada 13 semanas | Ameaça, regra, Obras, Travessia, sistemas novos | A zona vermelha; tirar algo que o jogador construiu | Prévia 4 semanas antes; notas completas 1 semana antes |
| **Expansão anual** | 1 por ano | Um sistema grande (exemplos: PvP assíncrono opcional com fantasmas, o segundo Arraial e as Casas da Maré) | — | Anúncio 1 Era antes |

- **Congelamento:** nenhuma mudança econômica na S12, na S13 e nos 3 primeiros dias da Era; na Travessia, só correções de bug. **Nerf nunca é retroativo:** o que já se ganhou, fica. [H]
- **Mudança econômica sempre tem data e aviso.** [F] O Torn subiu a taxa de mercado em rampa anunciada, um ponto por mês; o EVE subiu o imposto de 4% para 7,5% só com nota de patch e gerou revolta ([04b, §3.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Exploit em sistema de valor:** desligar **só o sistema afetado**, nunca a economia inteira, e remover o valor duplicado rastreando-o pelo livro-razão. [F] No New World, desligar todo o comércio abriu um dupe novo e puniu todos; a remoção rastreada tirou 98% do valor duplicado ([G04](../01-pesquisa/fichas/G04-new-world.md)).
- **Pipeline de conteúdo:** a equipe trabalha **duas Eras à frente** (a seguinte pronta, a outra em produção). Se uma Era atrasar, entra uma **Era sistêmica de reserva** (só regra nova e Obras, sem chefe novo), preparada com antecedência. [H]

## 7. Comunicação com a comunidade

### 7.1 Boletim do IPA (relatório econômico mensal)

Publicado na primeira terça do mês, em PT e EN, com dados abertos (CSV) **com 7 dias de atraso**. [F] O EVE publica relatório econômico mensal com dados brutos, e um blogueiro achou nele um erro de 9% na massa monetária; o MWI publica dados de mercado com atraso e aleatoriedade para evitar manipulação ([04b, §3.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); o Torn tem economista e meta de expansão monetária ([D01](../01-pesquisa/fichas/D01-torn.md)).

**Conteúdo mínimo [H]:**
1. **IPA** do mês e acumulado no ano, contra a meta de 0% a +8% ao ano (bíblia, §6.6).
2. **Preço do Alvará em ouro** no Câmbio: média, mínimo e máximo.
3. **Massa monetária** total e por faixa de jogador.
4. **Fontes e drenos por categoria**, em tabela.
5. **Destruição de itens:** desgaste e quebra, Obras, Encomendas, Travessia, festas, concursos.
6. **Volume por balcão:** Bolsa, Feira, Pregão, Câmbio, Troca, Cartório.
7. **Concentração** entre os ativos, contando itens: top 1%, top 10% e Gini.
8. **Antifraude:** contas banidas, ouro e itens removidos, golpes confirmados.
9. **Moderação:** sanções, apelações e quantas foram revertidas.
10. **O que muda no mês seguinte e por quê.**

### 7.2 Notas de patch com o porquê

Toda mudança que mexe em valor segue este modelo [H]:

> **[Nome da mudança]**
> - **O que muda:** a regra antiga e a nova.
> - **Por quê:** o problema, com o dado (exemplo: "o couro subiu 40% em 3 semanas; ver o Boletim de abril").
> - **Quem ganha e quem perde.**
> - **Quando vale:** data e hora; o aviso mínimo foi cumprido.
> - **Se você planejou com a regra antiga:** o que acontece com o que está em andamento (nada é retroativo) e se há compensação.

### 7.3 Diário do Arraial

O jornal semanal dentro do jogo, montado pelo sistema e revisado pela equipe [H]:
- **Manchete:** a Obra da vez e o que ela abriu.
- **Cerco:** o boletim, os destaques por posto e por guarnição.
- **Câmara:** os Atos, os votos nominais e as moções com a resposta do estúdio.
- **Feira:** os preços da semana na cesta do IPA.
- **Primeiros:** quem foi o primeiro a fazer o quê (primeira obra-prima de uma receita, primeiro hexágono de uma região).
- **Causos:** histórias enviadas pela comunidade e moderadas.

[H] É conteúdo sistêmico e barato: a cidade, os Cercos e a política geram as histórias ([02-conceito, §4](../02-conceito.md)).

### 7.4 Roadmap, canais e incidentes

- **Roadmap público** das 2 Eras seguintes, atualizado a cada Era. [H]
- **Canais:** dentro do jogo primeiro (Diário, Tribuna). Discord oficial em PT e EN para conversa, e redes de vídeo curto para o mapa sendo revelado e os melhores momentos do Cerco. **Nada que decide acontece fora do jogo** ([09, S6](09-social.md)).
- **Criadores de conteúdo:** recebem prévia de arte e de história antes do público, **nunca de números econômicos**. [H] Informação econômica antecipada é *front-running* ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Incidentes:** relatório público em até 72 h. Compensação pela regra do pilar 4: o tempo offline perdido numa queda é devolvido, e um Cerco afetado por queda é refeito ou dado como defendido, o que for melhor para os jogadores. [H]
- **Moções da Câmara:** respondidas em público em até 14 dias ([09, §6.5](09-social.md)).

## 8. Plano de operação do 1º ano

**Exemplo com lançamento em 1º de março [H]**, só para mostrar como o calendário civil encaixa nas Eras. A data real é decisão da Fase 5.

| Fase | Quando | Foco | Marcos |
|---|---|---|---|
| **Pré-lançamento** | 3 meses antes | Beta fechado e depois aberto; uma **"Era 0" de 6 semanas** com reinício anunciado; teste de carga do Cerco e da Feira; equipe de ataque à economia (*red team*) | Pré-registro com cosmético de fundador. [F] No S&F, quem se pré-registra num servidor novo ganha 25 cogumelos em vez de 10 ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)) |
| **Era 1 — Fundação** | Semanas 1 a 13 (março a maio) | Estabilidade, onboarding, **fontes apertadas** (a inflação mais violenta é a do lançamento, [síntese, insight 9](../01-pesquisa/00-sintese.md)); Obras por plebiscito até a S8; **1ª Câmara na S9**; sem Travessia (bíblia) | 1º Boletim no fim do mês 1; decisão sobre abrir a Travessia na Era 2 (§10, limiar de população) |
| **Era 2** | Semanas 14 a 26 (junho a agosto) | **1ª Travessia** (S2 a S12); Festa da Fogueira na S3 e na S4; Disputa dos Bois no fim da S4; **Noite dos Encantados na S13** (o dia 22 de agosto cai na S12, a semana do Grande Cerco, e pela regra 7 do §5.5 a festa anda para a Colheita, quando o encantado libertado na Era visita o Arraial); 2ª Câmara na S5 | Primeiro ciclo completo de Travessia; revisão do ritmo do mapa |
| **Era 3** | Semanas 27 a 39 (setembro a novembro) | 2ª Travessia; 3ª Câmara na S1 e 4ª na S9; **Noite da Bruma na S9**, junto com a Reviravolta | Avaliação das métricas de pós-pico das duas primeiras Travessias |
| **Era 4** | Semanas 40 a 52 (dezembro a fevereiro) | 3ª Travessia; Folia de Fim de Ano da S4 à S6; Entrudo entre a S11 e a S13, ajustado para não cair na S12 (§5.5, regra 7); 5ª Câmara na S5 | **Livro do Arraial**; anúncio da expansão anual |
| **Aniversário** | Semana 53 (Era 5, S1) | Aniversário do Arraial na abertura da Era 5; 6ª Câmara | Decisão sobre o 2º Arraial (§8.2) |

### 8.1 Equipe mínima de operação [H]

| Função | Pessoas | O que faz |
|---|---|---|
| Produção de live ops | 1 | Calendário, eventos, coordenação das Eras |
| Design de conteúdo de Era | 1 a 2 | Ameaça, regra, Obras, Travessia, festas |
| Comunidade bilíngue | 1, mais 1 de meio período em EN | Diário, Discord, Conversa com o estúdio, Câmara |
| Moderação | 2 a 3, cobrindo 7 dias em PT e EN | Fila de denúncias, notificações, apelações |
| Análise e economia | 1 de meio período | Boletim, alarmes, revisão das regras de Era com o módulo 07 |
| Plantão técnico | Escala | Picos de evento, Cerco final, final da Travessia |

[H] São de 6 a 8 pessoas. É o custo real de um jogo de serviço, e ele precisa entrar no plano de negócio do módulo 11. [F] O "custo alto para operar" dos eventos ao vivo é a principal ressalva do estudo [além do idle](../01-pesquisa/03-alem-do-idle.md) (§10).

### 8.2 O segundo Arraial

- **Gatilho [H]:** mais de 5.000 simultâneos no pico por 4 semanas seguidas (o teto do alvo da bíblia, §6.7), ou fila de entrada recorrente.
- **Como:** um Arraial novo abre **no início de uma Era**, com pré-registro. O mesmo personagem não migra; contas novas escolhem o Arraial. A Travessia continua uma por Arraial, ao mesmo tempo nos dois.
- **Fusão, se a população cair:** só na virada de Era, preservando o Livro, os títulos, os monumentos e o nome dos dois Arraiais. [F] No New World, as fusões apagaram as conquistas territoriais dos mundos de origem ([G04](../01-pesquisa/fichas/G04-new-world.md)); no S&F, as fusões reviveram mundos inativos ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)).
- **As Casas da Maré** (o comércio entre cidades) são a expansão natural quando houver dois Arraiais (decisão do checkpoint 2).

## 9. Ganchos depois da 4ª semana

[F] O problema: no PoE1, o pico mensal no Steam foi de 184.284 em março de 2026 (estreia da liga Mirage) para 53.761 em abril e 16.105 em maio, ou seja, 29% no segundo mês e menos de 9% no terceiro ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)). [H] Um idle não deveria cair assim, porque o jogo continua rodando sem o jogador; mas a temporada concentra a novidade no começo, e é isso que os ganchos corrigem.

[H] **Filosofia:** não lutar contra toda evasão. A pausa é legítima (§1, princípio 4). O que se combate é a evasão por falta de motivo (nada novo depois da S4) e por desvantagem (quem pausou acha que não alcança mais).

| Gancho | Semana | Como funciona | Referência |
|---|---|---|---|
| **Revelação** | S5 | Segunda camada da regra da Era; a Obra I abre região e receitas; novo assombrado; na Travessia, abrem os Rios internos | Lei 2, regra nova ([02](../01-pesquisa/02-padroes-matriz-leis.md)) |
| **Teto de Marcos acumulável** | Todas | O hardcore não "zera" a temporada cedo; quem pausou alcança | Passe com teto semanal ([06](../01-pesquisa/06-monetizacao-retencao.md)) |
| **O chefe da Era em capítulos** | S6 e S12 | Ele aparece, foge e volta no Grande Cerco: um encontro com data marcada | Maravilha do Mundo do Travian como fim de rodada ([D05](../01-pesquisa/fichas/D05-travian.md)) |
| **Frentes do final** | S6 e S7 | A guilda se compromete com uma frente no meio da temporada | Compromisso de grupo do Egg Inc. e do Tap Titans 2 ([A09](../01-pesquisa/fichas/A09-egg-inc.md); [B06](../01-pesquisa/fichas/B06-tap-titans-2.md)) |
| **Posse da Câmara no meio da Era** | S5 ou S9 | Eleição traz conversa, campanha e um motivo para voltar e votar | [09, §6.4](09-social.md) |
| **Reviravolta** | S9 | A Bruma contra-ataca: trechos do mapa voltam a enevoar, os Cercos endurecem, o Coração aparece | Major Orders do Helldivers 2, em que a história avança com a comunidade ([03, §18](../01-pesquisa/03-alem-do-idle.md)) |
| **Fôlego de volta e Ventos a favor** | Da S5 em diante | Quem volta depois de 14 dias recebe XP pessoal e de desbravador 1,5 vez maior até a mediana | "Rested XP" do WoW ([03, §17](../01-pesquisa/03-alem-do-idle.md)) |
| **Contagem regressiva** | S10 a S12 | Data fixa para o final, com a batalha em 3 horários | Sessões repetidas do Fortnite ([03, §10](../01-pesquisa/03-alem-do-idle.md)) |
| **Rota da semana** | Toda semana | Semente nova e ranking por percentil | Daily Climb do Slay the Spire ([03, §6](../01-pesquisa/03-alem-do-idle.md)) |
| **Tela de retorno** | Ao voltar | "Enquanto você esteve fora": o que a guilda e o Arraial fizeram, o que a sua Fila rendeu e o que ainda dá para pegar | Retorno com o resultado do plano ([síntese, insight 14](../01-pesquisa/00-sintese.md)) |
| **Aviso opt-in** | No máximo 1 por semana | Um resumo: "a Obra está em 80%", "a sua guarnição precisa de um Erveiro" | — |
| **Colheita** | S13 | Ponto de saída sem culpa e de volta sem atraso | Diablo IV sugerindo uma pausa ([03, §2](../01-pesquisa/03-alem-do-idle.md)) |

## 10. Métricas de live ops

Todas as metas são [H], ponto de partida para o alfa. As coortes precisam estar no PostgreSQL desde o alfa ([06](../01-pesquisa/06-monetizacao-retencao.md)).

| Grupo | Métrica | Meta inicial | Alarme |
|---|---|---|---|
| **Engajamento** | DAU/MAU | ≥ 18% (padrão dos idles de 2020, [06](../01-pesquisa/06-monetizacao-retencao.md)) | < 12% |
| | Sessões por dia por jogador ativo | De 2 a 6 (bíblia, §6.1) | > 8 (sinal de obrigação) ou < 1,5 |
| | Minutos ativos por dia, mediana | De 10 a 40 | > 60 (jogo de checklist) |
| **Retenção** | D1, D7 e D30 por coorte | ≥ 30%, de 6% a 7% e de 1,6% a 1,8% (quartil superior do mobile em 2025, [06](../01-pesquisa/06-monetizacao-retencao.md)) | Abaixo da mediana do mesmo estudo |
| | **Curva da Era:** ativos semanais na S6 e na S12 divididos pelos da S2 | S6 ≥ 75%; S12 ≥ 60% | S6 < 60% |
| | **Reativação:** inativos de 14 a 90 dias que voltam na S1 ou na S2 | ≥ 20% | < 10% |
| **Travessia** | Adesão (desbravadores sobre ativos semanais do Arraial) | De 50% a 70% | < 30% (pouco interesse) ou > 85% (cidade esvaziando) |
| | Ritmo do mapa contra a meta | ± 10 pontos percentuais | Fora de ± 15 |
| | Final | Libertação em 2 de cada 3 Travessias | Vigília em 2 seguidas |
| | Entrada tardia: quem entra depois da S5 e chega ao título-base | ≥ 60% | < 40% |
| | Preço dos suprimentos na S2 e na S3 contra a S−2 | ≤ +25% | > +50% |
| **Social** | Inscritos no Cerco sobre ativos semanais | ≥ 40% | < 25% |
| | Ativos com pelo menos 1 Encomenda na semana | ≥ 50% | < 30% |
| | Encomendas que batem a meta | De 70% a 85% | > 95% (fácil demais) ou < 60% (difícil demais), conforme o alerta do [03, §18](../01-pesquisa/03-alem-do-idle.md) |
| | Obras concluídas no prazo | 80% ± 10 | < 60% |
| | Comparecimento nas eleições | ≥ 25% dos aptos (o CSM teve de 8,6% a 12,7%, [03, §16](../01-pesquisa/03-alem-do-idle.md)) | < 15% |
| | Ativos em guilda | De 55% a 75% | > 90% (obrigação de fato) ou < 40% |
| | Retenção D30 de afilhados contra não afilhados | +30% relativo | ≤ 0 |
| **Segurança** | Denúncias por 1.000 mensagens | Estável | +50% numa semana |
| | Tempo até ação, prioridade 1 | < 4 h | > 12 h |
| | Apelações revertidas | < 5% | > 10% |
| | Golpes confirmados por 10 mil ativos por semana | Em queda | Em alta por 3 semanas |
| **Economia** | Emissão negociável por evento | 0 | > 0 |
| | Destruição atribuída a eventos, Obras e Travessia | Dentro da faixa do módulo 07 | — |
| | IPA | De 0% a +8% ao ano | Fora da faixa |
| **Técnica** | Disponibilidade no Cerco e no final da Travessia | ≥ 99,5% | Queda acima de 5 min |
| **Satisfação** | Pesquisa de fim de Era (0 a 10) | ≥ 7,5 | Queda de 1 ponto |
| **Fadiga** | Quem cumpre o semanal em até 10 min por dia | ≥ 80% | < 60% |

**Limiar de população para a Travessia [H]:** a Travessia só abre no formato completo com **pelo menos 1.500 ativos semanais** esperados com a Fila rodando. Abaixo disso, abre uma **Travessia curta** (6 semanas, mapa de cerca de 70 hexágonos), ou a Era segue sem Travessia. [F] Conteúdo coletivo sem gente trava ([03, §15](../01-pesquisa/03-alem-do-idle.md)), e temporadas não podem fragmentar a base (lei 22).

## 11. Interfaces com a economia e a simulação

O que os módulos 07 e 08 precisam simular [H]:

| Item | Frequência | Tamanho | Módulos |
|---|---|---|---|
| **Cerco** | 1 por semana; Grande Cerco na S12; leve na S13 | Consumo de equipamento e consumíveis por inscrito, a definir no 04; postos de ofício consomem materiais | 04, 07, 08 |
| **Encomendas da cidade** | 4 por semana, prazo de 5 dias, até 2 por pessoa | `C_base` = 8 h-f por inscrito | 07, 08 |
| **Encomendas de guilda** | 1 por semana por guilda, prazo de 7 dias | `C_base` = 10 h-f por inscrito | 07, 08 |
| **Obras** | 3 por Era (S1 a S4, S5 a S8, S9 a S12) | 2,5%, 3% e 5% de P × 4 semanas; cerca de 3,2% da produção da Era | 07, 08 |
| **Sedes de guilda** | Contínuo | Construção de 150 a 3.000 h-f por nível; manutenção de 0,5% a 2,5% da produção dos membros | 07, 08 |
| **Travessia** | S2 a S12, a partir da Era 2 | 0,1 h-f por hora de expedição; cerca de +8% de demanda sobre P com 60% de adesão; desgaste 1,5 vez maior na Bruma; pico na S2 e na S3 | 05, 07, 08 |
| **Encomendas de preparação** | S13 e S1 antes de cada Travessia | Cerca de 1 semana de suprimentos antecipada | 07, 08 |
| **Feira Grande** | Mensal | Concurso consome 1 peça por inscrito, em 4 ofícios por mês | 06, 07 |
| **Festas** | De 5 a 6 por ano | Cerca de 1% de P por semana de festa, em materiais | 07, 08 |
| **Recompensas de eventos e rankings** | — | **0 ouro e 0 item negociável**; só títulos, cosméticos, decoração, XP pessoal e Mérito | 07, 11 |
| **Recompensas da Travessia** | — | Marcos (até 1.000 por semana, acumulável, 11.000 no máximo); títulos, cosméticos e relíquias presos à conta | 07, 11 |
| **Regra da Era** | 1 por Era | Choque de oferta e demanda a estimar 4 semanas antes | 07, 08 |
| **Câmara** | Posse na S1, S5 ou S9 | Feira entre 4% e 8%, no máximo ±1 p.p. por mandato | 07, 08 |
| **Mudanças econômicas** | Só na virada de mês ou de Era, com 7 dias de aviso | — | 07 |

**Soma das demandas de sistema [H], para ordem de grandeza:** Obras (~3% da produção da Era), Encomendas e Sedes (de 8% a 12% da produção de quem participa, [09, §7](09-social.md)), Travessia (~8% de P nas Eras com Travessia) e festas (~1% de P por semana de festa). O desgaste de equipamento continua sendo o dreno principal (pilar 2); estes sistemas são a segunda camada.

## 12. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] §6.1, Travessia:** "da S2 à S12 de cada Era, a partir da 2ª (11 semanas)", dentro da faixa de 10 a 12.
2. **[proposta de mudança na bíblia] §4, glossário, Fila da Travessia:** uma Fila extra, sazonal e igual para todos, que só faz expedições na Bruma. Ela não é comprada, mas também não é "conquistada jogando", então pede aval explícito diante da regra das Filas. A reconciliar com o módulo 02.
3. **[proposta de mudança na bíblia] §4, glossário:** incluir **nível de desbravador** (progressão da Travessia, de 1 a 30, que zera), **Posto** (a base da Travessia, onde se gastam Marcos), **Coração da Bruma** (a região final), **frente** (a unidade do final coletivo) e **relíquia** (item decorativo preso à conta, sem efeito de poder).
4. **[proposta de mudança na bíblia] §6.1, Era:** o esqueleto de 3 Obras (S1, S5, S9), Grande Cerco na S12 e Colheita na S13.
5. **[proposta de mudança na bíblia] §5 ou constituição econômica:** "mudança econômica só na virada de mês ou de Era, com 7 dias de aviso; congelamento na S12, na S13 e nos 3 primeiros dias da Era; nerf nunca retroativo".
6. **[proposta ao diretor sobre o conceito] Final da Travessia:** trocar a "corrida de guildas pela cidadela" (conceito B) por um final do Arraial inteiro com frentes de guilda (§4.5), para responder ao risco "final dominado pelas guildas grandes".
7. **[proposta de mudança na bíblia] Festas sem moeda própria:** trilha de festa com escolhas (§5.4), em vez de uma quinta ou sexta moeda.

## 13. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **A esteira de conteúdo** | Uma equipe pequena não consegue entregar uma ameaça, uma regra, 3 Obras e uma Travessia a cada 13 semanas | Trabalhar 2 Eras à frente; Era sistêmica de reserva; mapas procedurais com pontos de interesse feitos à mão; reaproveitar regras de Eras antigas em combinações novas. |
| **Evasão depois do pico mesmo assim** | O PoE caiu de 184 mil para 16 mil em dois meses ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)) | Os ganchos do §9; o alarme da curva da Era; e, se a S6 ficar abaixo de 60% por 2 Eras, revisar o esqueleto (mais novidade guardada para depois da S5). |
| **A Travessia esvazia o Arraial** | Todos vão para a Bruma e a cidade para | A Fila da Travessia não tira tempo de produção; os suprimentos vêm do Arraial; o Cerco continua; alarme de adesão acima de 85%. |
| **O Arraial esvazia a Travessia** | A Travessia parece obrigação ou não vale a pena | Recompensas que todo mundo quer exibir (títulos, relíquias, nome no mapa); entrada tardia viável; alarme de adesão abaixo de 30%. |
| **Choque de suprimentos** | Os preços disparam na S2 e o novato não consegue montar um kit | Lista publicada na S−4; Encomendas de preparação; oficinas NPC de reforço com preço teto; kit básico vendido por NPC só para desbravadores de nível baixo. |
| **O veterano domina a Travessia** | O equipamento do Arraial decide tudo | Teto de tier por região; o nível de desbravador zera; percentis em vez de top 10. |
| **O final vira coisa das guildas grandes** | A megaguilda decide a frente principal | Frentes interdependentes; Frente do Arraial para os solos; divisões por porte e ranking por membro; o resultado é coletivo. |
| **Fadiga de eventos e calendário apertado** | Junho junta a abertura da Travessia, a Fogueira e os Bois | Um evento grande por vez; festa que colide encolhe ou muda de semana; o semanal cabe em 10 minutos por dia; alarme de fadiga. |
| **FOMO** | O cosmético da festa não volta e quem estava fora se sente punido | Exclusivos que voltam pelas escolhas da trilha; participação passiva; nada de oferta com prazo. |
| **A infraestrutura cai no pico** | O Grande Cerco ou o final da Travessia juntam todo mundo na mesma hora | Resolução no servidor sem depender de ninguém online; replay em 3 horários; teste de carga; fila de entrada; compensação pública (§7.4). |
| **A regra da Era parece nerf** | "Estiagem" é lida como corte de renda da Colheita | Anúncio 4 semanas antes com o porquê; a regra é temporária; sempre há outro ofício ou outra rota que ganha; nunca toca a zona vermelha. |
| **Front-running de mudanças** | Quem sabe antes da regra ou da Obra compra antes | Publicação simultânea; embargo para criadores sem números; a escolha da Obra é pública e os preços se ajustam juntos. |
| **O Boletim mostra notícia ruim ou erro** | Inflação acima da meta ou um erro nos dados, como os 9% do EVE ([04b, §3.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) | Publicar assim mesmo, com o plano de correção; errata pública; dados abertos com atraso para a comunidade conferir. |
| **Erro cultural** | Uma festa ou um encantado é lido como caricatura ou apropriação | Formas seculares, sem ritos; nomes e símbolos próprios; consultoria e revisão de sensibilidade antes de cada festa e cada Era; a comunidade co-cria (concurso de causos). |
| **O público de língua inglesa não se reconhece** | O calendário é muito brasileiro | Cada festa tem um gancho universal (fogueira, carnaval, fim de ano, Halloween); textos e momentos ao vivo em EN; moderação nos dois idiomas. |
| **População baixa para a Travessia** | Com poucos milhares de ativos, o mapa não anda e o final não sai | Custo dos hexágonos escalado pela população; limiar de 1.500 ativos e Travessia curta (§10). |
| **Custo de operação subestimado** | De 6 a 8 pessoas para operar é muito para um estúdio pequeno | Entrar no plano do módulo 11; automatizar o Diário e o Boletim; começar com menos festas (2 no ano 1) se a receita não fechar. |
| **Métrica de vaidade** | Otimizar DAU com obrigações e notificações | Alarmes de fadiga e de sessões demais; a pesquisa de satisfação pesa tanto quanto o DAU; no máximo 1 aviso por semana. |

