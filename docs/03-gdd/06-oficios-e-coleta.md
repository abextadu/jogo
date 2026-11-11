# GDD 06 — Ofícios e coleta

> **Módulo 06 do GDD.** Os 12 ofícios, recursos, receitas, cadeias de produção, interdependência, a obra-prima como mecânica ativa, a ligação com o mercado, as oficinas NPC de reforço, o equilíbrio de demanda e o teto de aprendiz. Depende da [bíblia](00-biblia.md) e do [05 — Itens](05-itens.md), que define tiers, qualidades e durabilidade.
> Etiquetas: [F] fato com fonte (quase sempre remetendo à ficha ou ao estudo da Fase 1), [H] proposta do estúdio, [NV] não verificado. **Todo número é [H] até a simulação (módulo 08).** As tabelas de equilíbrio vêm de um modelo de conferência feito à parte, que expande cada receita até o bruto e soma as horas de cada ofício. O script oficial é o do 08.

## Resumo

- **Doze ofícios, três camadas, uma rede.** Cada peça de T3 em diante passa por 4 a 7 ofícios. A espada de ferro exige 6, e o gibão de couro, 7 (seção 5). Insumos sem tier (pedra, casca, resina e carvão) dão trabalho útil ao novato em qualquer fase do servidor.
- **A fila prepara, o ativo acaba.** O ausente produz volume (Comum e Bom) na fila. Quando volta, o mestre faz sessões de 1 a 3 minutos, sem cronômetro e feitas de decisões com risco calculado: a **obra-prima** (qualidade da peça), a obra-prima de transformação (insumo nobre), o lote fino (consumíveis) e o **Faro** (a sessão ativa de quem coleta). Todas gastam **Inspiração**, que acumula 1 por hora, online ou offline, até o teto de offline da conta.
- **Mercado pela natureza do bem:** o que é fungível vai à **Bolsa** (brutos, insumos, consumíveis, kits, reagentes e peças Comuns novas); o que tem estado próprio vai à **Feira** (qualidade, desgaste, acabamento); o que é contado vai ao **Pregão** (Únicos, lendários, relíquias).
- **Oficinas NPC de reforço** vendem insumos, kits, consumíveis básicos e peças de oficina a **2× o valor de referência**, com limite diário, tudo preso à conta. Ninguém trava, e nenhum cartel passa de cerca de 2 a 3× o valor de referência.
- **Equilíbrio de demanda verificado:** cada ofício fica entre 5,6% e 13,1% das horas exigidas pelo consumo (a meta é 1/12, ou 8,3%). Uma hora de combate consome de 12 minutos de ofício (T1) a 49 minutos (T6), e as Obras compensam os ofícios abaixo da média.
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
| Transformação | **Tecelagem** | Tecido e linha; móveis de pano (rede, tapete) | Tear (Carpintaria) | Alfaiataria, Carpintaria, Ferraria |
| Criação | **Ferraria** | Espada, facão, armadura pesada, lamparina, 8 ferramentas, kit de metal, estrepes | Martelo (Ferraria) | Guardião, Batedor, quase todos os ofícios |
| Criação | **Alfaiataria** | Armaduras média e leve, aljava, bornal, fole, kit de costura, Moda do Arraial | Agulhas e tesoura (Ferraria) | Caçador, Batedor, Encantador, Erveiro, Fundição |
| Criação | **Alquimia** | Poções, óleo de arma, pó de encanto, unguento, corante, reagentes, breu de cerco | Alambique (Ferraria) | Todas as vocações; todo mestre que faz obra-prima |
| Criação | **Culinária** | Refeições, farofa de trilha, banquete de cerco | Pilão (Carpintaria) | Todas as vocações; Obras (mutirão) |

**O combate também coleta:** as vocações soltam **pele** (Curtume), **carne de caça** (Culinária), **cinza de bruma** (Alquimia), **pele rara** e ouro. A bíblia liga o combate ao Curtume (seção 6.3), e este módulo estende essa ligação à Culinária e à Alquimia.

## 2. Regras comuns a todos os ofícios

### 2.1 Níveis, tiers e mestre

- Nível de ofício de 1 a 100 (bíblia, seção 6.2). **Nível exigido por tier:** T1 = 1, T2 = 15, T3 = 35, T4 = 55, T5 = 75, T6 = 90. Dentro do tier, peças pequenas pedem +2 e armas e peças de corpo pedem +5 (tabelas da seção 11).
- **Dois ofícios mestres** vão até 100 e à maestria. **Os outros dez param em 30** (o teto de aprendiz, seção 10).
- **O que só o mestre faz:** chance de Bom na fila, obra-prima, Faro, lote fino e lendário. Tudo isso abre no nível 10 do ofício mestre.

### 2.2 Velocidade

```
tempo = tempo_base(T) ÷ V
tempo_base(T) = tempo_T1 × f(T)      f = 1,0 · 1,4 · 1,8 · 2,3 · 2,9 · 3,75   (T1 a T6)
V = (1 + 0,01 × mín(30; nível − nível da receita)) × (1 + E)
E = 0,10 × mín(2; tier da ferramenta − tier da receita) + qualidade da ferramenta (0 · 0,04 · 0,08 · 0,12)
```

- A coleta de T1 leva 8 s e chega a 30 s no T6, que é o limite da âncora da bíblia (3 a 30 s por unidade). A Colheita leva 6 s no T1 e 22,5 s no T6, porque alimenta três cadeias.
- **Insumos sem tier** (pedra, casca, resina e carvão) levam o tempo do T1 em qualquer fase. Um iniciante coleta casca tão rápido quanto um veterano, e a casca serve ao couro do T6.
- **Exemplo:** mineiro nível 40, minério de ferro (receita de nível 15), picareta de aço (T3) Boa. V = (1 + 0,25) × (1 + 0,10 + 0,04) = 1,25 × 1,14 = 1,425. Tempo = 11,2 s ÷ 1,425 = 7,9 s, ou 458 minérios por hora. O V máximo, sem maestria, é 1,3 × 1,32 = 1,72.
- **Ferramenta é portão:** sem ferramenta do tier (ou de tier maior), não se trabalha naquele tier ([05](05-itens.md), seção 4.5).
- **[proposta de mudança na bíblia]** A criação de equipamento é uma **ação longa**, de 5 a 95 minutos por peça (a espada de cobre leva 25 minutos). Ela fica fora da âncora de 3 a 30 s, que passa a valer para coleta, transformação e consumíveis. Motivo: a peça concentra o trabalho de dezenas de unidades, e só assim a Ferraria e a Alfaiataria têm uma fatia justa das horas (seção 9).

### 2.3 Fila, teto de emissão e vínculo

A fila produz itens negociáveis até o **teto de emissão** do dia, contado em **valor de referência** (VR, o trabalho embutido da seção 11.5). O que passa do teto nasce preso. Tudo feito com insumo preso nasce preso. Regras completas no [05](05-itens.md), seção 9; números no [07](07-economia.md).

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
| Lenhadoria | O carvão de toda a Fundição (só cedro e peroba); tábuas e cabos; casca do Curtume; resina da Alquimia e dos kits | Faro: *Mateiro* (cerne) | Fatia baixa nos tiers altos; as Obras pedem madeira |
| Pesca | A refeição, o maior consumo recorrente; escama das poções e dos reagentes | Faro: *Ceva* (peixe raro) | Só tem dois compradores; o banquete de cerco amplia a demanda |
| Colheita | Três cadeias ao mesmo tempo: tecido, Alquimia e Culinária | Faro: *Roçado* (fibra longa ou erva rara) | A fatia mais alta (13%); mais jogadores vão escolhê-la, o que é aceitável |
| Fundição | Todo lingote e toda liga; todo kit de metal | Obra-prima: *lingote temperado* | O carvão trava se a Lenhadoria de T1–T2 esvaziar; a Oficina do Arraial vende carvão |
| Carpintaria | Cabos de quase toda arma e ferramenta; armas de três vocações | Obra-prima: *tábua de cerne* e peças | Duas camadas num ofício só; o tempo de criação (35 s por unidade) é menor que o da Ferraria |
| Curtume | O couro está em armas, escudos, arcos, armaduras médias, sandálias e kits de costura | Obra-prima: *couro de angico* | Depende de peles do combate; drops calibrados com folga (seção 9.4) |
| Tecelagem | A linha costura todo couro e tecido; o tecido veste duas vocações | Obra-prima: *renda* | A linha sai barata (720 por hora); a margem vem do tecido e da renda |
| Ferraria | Ferramentas de 8 ofícios e o reparo de todo metal | Obra-prima de peças | Peças longas (25 minutos a espada de cobre); a obra-prima não acelera, porque o ativo ganha qualidade, e não volume |
| Alfaiataria | Quatro das cinco vocações vestem Alfaiataria; reparo de couro e tecido | Obra-prima de peças | A maior fatia entre as criações (10%) |
| Alquimia | Os reagentes são a moeda da obra-prima, consumida no uso como as orbs do Path of Exile ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)); consumíveis de três vocações | Lote fino | Um reagente obrigatório viraria imposto; ele é sempre opcional |
| Culinária | Todo combate come: 4 refeições por hora | Lote fino | Refeição de pouca margem; o lote fino e o banquete dão a margem |

<!-- continua -->
