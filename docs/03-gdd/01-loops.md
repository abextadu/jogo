# GDD 01 — Loops por escala de tempo

> **Escopo.** O que o jogador faz, decide e ganha em cada escala de tempo, dos segundos às Fronteiras, e como o ausente e o ativo convivem em cada uma. Inclui o diagrama do loop central, o dia típico de três perfis e a lista do que se decide antes de sair (lei do plano).
> **Depende de:** [00 — Bíblia](00-biblia.md). **Alimenta:** [02 — Progressão](02-progressao.md) e os módulos 04, 06, 07, 08, 09, 10 e 12.
> **Etiquetas:** [F] fato com fonte · [H] proposta do estúdio · [NV] não verificado. **Todo número é [H] até a simulação (módulo 08).** As fórmulas e as contas dos números de progressão citados aqui estão no [02](02-progressao.md).

## Resumo

- **O loop central tem cinco tempos:** planejar → ausência → volta → sessão ativa → cidade → planejar de novo. A ausência produz volume e XP. A sessão ativa produz qualidade, opções e cooperação. A cidade consome o que se produz e devolve demanda, Mérito e metas comuns.
- **Três regras valem em todas as escalas** [H]:
  1. **A fila não sabe se a aba está aberta.** O cálculo é o mesmo online e offline, feito no servidor. Ficar olhando a tela não rende nada a mais.
  2. **O ativo ganha outra coisa, não "o mesmo, mais rápido".** O ganho de volume do ativo tem teto baixo e conhecido (no máximo 2 h por dia de bancada ativa, que somam de +2% a +6,5% de volume num dia). O ganho de verdade do ativo é qualidade (obra-prima), achados, mercado e cidade.
  3. **Tudo o que é coletivo aceita contribuição planejada.** Encomendas, Obras e cercos recebem entregas automáticas e inscrições prévias. Ninguém precisa estar online num horário marcado.
- **Sete escalas:** segundos (o tique da fila e o lance), minutos (a sessão), horas (a ausência), dias (encomendas, Obras, nível), semanas (cerco, tier novo), Eras (~13 semanas: ameaça nova, regra nova, eleição) e Fronteiras (10 a 12 semanas, a partir da 2ª Era).
- **O dia típico** mostra que o casual (2 sessões curtas) produz cerca de dois terços do volume do hardcore no ofício principal e chega ao primeiro 100 por volta do D149, contra o D102 do hardcore (com os níveis de tier do 06; revisão de consistência: R5). A diferença entre eles está menos no volume e mais em qualidade, mercado e cidade.

## 1. O loop central

```
                 ┌──────────────────────────────────────────────────────┐
                 │  ANTES DE SAIR (1 a 3 min) — o plano                 │
                 │  filas + etapas + regras · ordens na Bolsa e na Feira│
                 │  entregas a encomendas · regras da expedição         │
                 │  inscrição no cerco · destino do excedente           │
                 └──────────────────────────┬───────────────────────────┘
                                            │
                                            ▼
   ┌────────────────────────────────────────────────────────────────────┐
   │  AUSÊNCIA (horas; até o teto de offline, 24 h → 72 h)              │
   │  filas na taxa ausente: volume + XP · achados do ausente           │
   │  ordens executam · expedições rodam · entregas automáticas         │
   └──────────────────────────┬─────────────────────────────────────────┘
                              │
                              ▼
   ┌────────────────────────────────────────────────────────────────────┐
   │  VOLTA (segundos) — Relatório da volta                             │
   │  "você planejou X, rendeu Y, o gargalo foi Z" · três metas         │
   └──────────────────────────┬─────────────────────────────────────────┘
                              │
                              ▼
   ┌────────────────────────────────────────────────────────────────────┐
   │  SESSÃO ATIVA (5 a 15 min)                                         │
   │  obra-prima (qualidade) · bancada ativa (lances, achados ativos)   │
   │  Bolsa, Feira, Leilão · encomendas · Obra · preparo do cerco       │
   └──────────────────────────┬─────────────────────────────────────────┘
                              │
                              ▼
   ┌────────────────────────────────────────────────────────────────────┐
   │  CIDADE (dias e semanas)                                           │
   │  equipamento se desgasta e quebra → demanda → mercado              │
   │  encomendas e Obras → Mérito e bônus coletivos                     │
   │  cerco → consumo de suprimentos → demanda                          │
   └──────────────────────────┬─────────────────────────────────────────┘
                              │
                              └──────────► volta ao plano
```

O diagrama tem dois motores encaixados [H]:

- **O motor pessoal** (plano → ausência → volta) é o idle: o tempo trabalha, a volta mostra a consequência do plano, e o jogador se sente esperto ou aprende o que mudar. É a leitura do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 1.2: no idle, a decisão é deslocada no tempo.
- **O motor coletivo** (sessão → cidade → demanda) é o MMO: o que um produz, outro usa e gasta. O desgaste fecha o laço, porque tudo que se negocia se gasta (pilar 2 da [bíblia](00-biblia.md)). Sem ele, o estoque só cresce e o preço só cai (lei 17 do [02](../01-pesquisa/02-padroes-matriz-leis.md)).

O loop econômico, que o módulo 07 detalha, é a parte do motor coletivo que mais importa para a simulação:

```
  fila de coleta ──► fila de transformação ──► fila de criação ──► uso
       ▲                   (Bolsa)                (Feira/Leilão)      │
       │                                                              ▼
       └──── demanda ◄──── reparo (consome material) ◄──── desgaste e quebra
```

## 2. Decisões estruturais dos loops

Cada decisão responde às quatro perguntas da seção 8 da bíblia: referência, problema, comportamento e risco.

### L1. A fila roda igual com a aba aberta ou fechada

A fila calcula no servidor, por eventos, a mesma produção com o jogador presente ou ausente. Abrir o jogo não acelera nada, e fechar não atrasa nada. A única forma de mudar o ritmo de uma fila é entrar na bancada ativa (L2), que exige decisões e tem teto diário.

- **Referência:** Melvor, que calcula o offline igual ao online ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); o modelo de offline por eventos no servidor ([07](../01-pesquisa/07-tecnica-idles-online.md)). **Diferencia-se** do IdleOn, que premia o cliente aberto com eventos e doces e transforma o ausente em "ausente com o PC ligado" ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)).
- **Problema:** o incentivo a deixar a aba aberta 24 h, que gasta bateria, cansa o jogador e é o terreno natural do bot.
- **Comportamento:** fechar o jogo sem culpa; voltar quando quiser.
- **Risco:** um evento esquecido no cálculo faz o offline render diferente do online, e o mercado precifica a diferença. Mitigação: teste automático de paridade entre o cálculo por eventos e a simulação tique a tique ([07](../01-pesquisa/07-tecnica-idles-online.md)).

### L2. Duas taxas visíveis: a ausente na fila, a ativa na bancada ativa

Cada fila mostra dois números, sempre [H]:

- **Taxa ausente:** o rendimento da fila no piloto automático. Começa em **70%** do ritmo nominal da ação e sobe até **100%** jogando, em seis marcos de +5% (detalhe no [02](02-progressao.md), seção 8).
- **Taxa ativa:** o rendimento da fila quando o jogador assume a **bancada ativa**, um modo em que a cada 45 s aparece um **lance**: uma escolha curta entre duas ou três opções. **Firme** rende 100% do ritmo nominal. **Forçar** rende 125% e gasta a ferramenta em dobro. São só esses dois lances (revisão de consistência: R7).

A bancada ativa vale para uma fila por vez ("você só tem duas mãos") e conta no máximo **2 h por dia**. Sem resposta por dois lances seguidos, a fila volta sozinha à taxa ausente, sem perda.

**Reconciliado com o 06 (revisão de consistência: R7):** o lance garimpar/apurar saiu. O achado e a qualidade ativos ficam com o **Faro** (a sessão ativa de quem coleta), o lote fino e a obra-prima do [06](06-oficios-e-coleta.md), pagos com Inspiração; a bancada ativa fica só com firme e forçar. Onde este módulo diz "achados ativos", leia-se o que o Faro rende.

- **Referência:** a taxa AFK separada, visível e melhorável do IdleOn (base de 20%, até ~85%) ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)). **Diferencia-se** dele em três pontos: a taxa ausente começa alta (70%), chega a 100% e nunca está à venda (o IdleOn vende "+30% AFK gains"). E o "ativo" é uma decisão, não um cliente aberto.
- **Problema:** dar sentido à presença sem punir a ausência. Também segura a emissão no lançamento: com todos começando em 70%, a fonte começa apertada, como pede o insight 9 da [síntese](../01-pesquisa/00-sintese.md).
- **Comportamento:** o ativo escolhe onde vale a pena pôr as mãos (um veio, uma fornada); o ausente vê a própria oficina ficar mais eficiente com o tempo.
- **Risco:** a bancada ativa virar obrigação ou alvo de script. Mitigação: o teto de 2 h/dia; o ganho de volume é pequeno (ver a seção 8 do [02](02-progressao.md)); o lance tem troca de verdade (velocidade contra desgaste contra achado), não um clique certo; detecção por regularidade dos lances ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).

### L3. O ativo ganha qualidade e opções; o ausente ganha volume e achados próprios

| Só o ativo tem | Só o ausente tem |
|---|---|
| **Obra-prima:** a única forma de chegar à qualidade Obra-prima (bíblia, 6.5). | **Volume contínuo** de até 72 h sem ninguém olhar. |
| **Achados ativos:** materiais raros que saem do Faro (R7). | **Achados do ausente:** a cada hora contínua na mesma atividade, chance de `mín(h, 20)%` de um achado preso à conta (ex.: 8 h seguidas = 36% somados; 24 h = 2,9 achados) [H]. |
| **Mercado com informação fresca:** reagir a um preço, comprar um insumo na hora. | **Ordens persistentes:** vender e comprar por preço-limite sem estar online. |
| **Janelas ativas** dos cercos e das crises da Fronteira, com bônus. | **Versão automática** das mesmas janelas, com o resultado do plano e sem bônus. |

Os achados do ausente são reagentes e peças de coleção **presos à conta** (P2 do [conceito](../02-conceito.md)). Uma parte deles só serve na obra-prima do próprio jogador: o ausente encontra, e o ativo usa. Isso liga as duas taxas em vez de opô-las. O conteúdo exato dos achados fica com o módulo 06.

- **Referência:** drops raros que só saem no modo AFK do IdleOn ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)); a regra do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2: o ativo ganha "em outra moeda".
- **Problema:** se o ativo só ganhar "o mesmo, mais rápido", o ausente é a versão piorada do jogador, e o ativo vira obrigação.
- **Comportamento:** deixar a mesma atividade rodando a noite toda (paciência) e guardar a sessão ativa para a obra-prima e o mercado.
- **Risco:** regras de exclusividade pouco intuitivas, que exigem wiki (o efeito colateral do IdleOn). Mitigação: os dois números e os dois tipos de achado aparecem na própria tela da fila.

### L4. Relatório da volta: a consequência do plano

Toda volta abre com um relatório curto, em três linhas e um detalhe opcional: o que foi planejado, o que rendeu e o gargalo. Exemplo (números ilustrativos): "Você deixou Mineração e Fundição por 9 h. Rendeu 2.005 minérios T4 e 120 mil XP de Mineração. A Fundição parou às 4h10, quando acabou o estoque de minério T3. Sugestão: comprar minério T3 na Bolsa ou pôr uma etapa de T3 na Mineração."

- **Referência:** o modal de progresso offline do Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); a leitura do [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.2: sem retorno, a ausência vira loteria.
- **Problema:** o jogador não atribuir o resultado a si mesmo.
- **Comportamento:** ajustar o plano a cada volta, aprendendo com o gargalo.
- **Risco:** o relatório vira sermão ou propaganda. Mitigação: três linhas e a linha do tempo como detalhe opcional, sem oferta da loja no Relatório da volta.

### L5. Uma fila por atividade

O personagem tem de 1 a 3 filas em paralelo, e cada uma roda uma atividade diferente (um ofício ou uma expedição). Duas filas nunca rodam o mesmo ofício. Dentro de uma fila, as **etapas** encadeiam ações em sequência (por exemplo: minerar 1.000, depois fundir). Detalhe no [02](02-progressao.md), seção 6.

- **Referência:** uma ação por vez no Melvor e no MWI, que limita a oferta a jogadores × horas ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 9.4). **Diferencia-se** do MWI, que vende vagas de fila ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)).
- **Problema:** com filas no mesmo ofício, o veterano triplica a oferta de um bem e a velocidade de um nível. A regra mantém cada ofício limitado a 24 h de fila por dia, por conta.
- **Comportamento:** montar cadeias curtas (coleta + transformação) e comprar no mercado o que falta.
- **Risco:** o jogador sentir as filas como "pouco". Mitigação: a 2ª fila chega na primeira semana, a 3ª no primeiro mês.

### L6. O coletivo aceita contribuição planejada

As encomendas recebem entregas automáticas das filas (regra "entregar X% à encomenda Y"). O cerco tem inscrição até 24 h antes, e o inscrito luta com o equipamento e os consumíveis que deixou separados. As Obras aceitam doação programada do excedente. O jogador presente pode somar: uma obra-prima entregue à encomenda pesa mais na nota; uma janela de comando no cerco dá bônus. Mas ninguém perde por não estar lá na hora.

- **Referência:** contratos do Egg Inc. com prazo e nota individual ([A09](../01-pesquisa/fichas/A09-egg-inc.md)); a guerra de guilda do Shakes & Fidget, em que o inscrito luta com 100% da vida e o não inscrito com 50% ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)); ataques acumuláveis como orçamento de decisões ([03](../01-pesquisa/03-alem-do-idle.md)).
- **Problema:** o laço social mais forte do gênero é o cooperativo com prazo, mas o plantão afasta o ausente (insight 19 da [síntese](../01-pesquisa/00-sintese.md)).
- **Comportamento:** comprometer-se com o grupo pelo plano, não pela presença.
- **Risco:** o carona, que se inscreve e não contribui. Mitigação: nota individual e recompensa proporcional à entrega (módulo 09).

### L7. Sem recompensa por login diário

Não existe prêmio por entrar todo dia, nem sequência de dias ("streak") que se perde. Os ritmos diários do jogo são de mercado (a torneira de venda a NPC que cai com o volume do dia) e de cidade (encomendas e Obras), e nenhum deles pune quem falta um dia.

- **Referência:** o "playing by appointment" como padrão obscuro ([Zagal et al., via 02a](../01-pesquisa/02a-teoria-design-idle.md), seção 6.1); o descanso do WoW, que virou prêmio em vez de castigo ([03](../01-pesquisa/03-alem-do-idle.md)).
- **Problema:** a obrigação diária que transforma o jogo em tarefa e faz quem perdeu a sequência desistir.
- **Comportamento:** voltar porque há uma meta quase cumprida (lei das três metas), não por medo de perder.
- **Risco:** perder uma alavanca de retenção comprovada no mobile. Mitigação: as três metas visíveis (seção 3.8) e as cadências coletivas fazem o papel de puxar a volta.

### L8. A Fronteira roda numa trilha própria [proposta, a reconciliar com o módulo 10]

A Fronteira não consome as filas da cidade. Ela roda numa trilha sazonal à parte (as expedições da Fronteira), abastecida com suprimentos e equipamentos feitos na cidade. Assim, a temporada soma ao jogo em vez de competir com os ofícios.

- **Referência:** as Leagues do OSRS, mundo paralelo que não reseta o principal ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)); o risco de esvaziar a cidade, registrado no [conceito](../02-conceito.md), seção 7.
- **Problema:** se a Fronteira usar as mesmas filas, quem entra nela atrasa os ofícios, e quem fica na cidade perde a temporada.
- **Comportamento:** participar das duas coisas; a Fronteira vira cliente dos ofícios.
- **Risco:** a trilha extra aumentar a emissão total na temporada. Mitigação: o que a Fronteira produz é Marcos e relíquias presos à conta e à temporada (glossário da bíblia); o que vem da cidade para a Fronteira é consumido lá (dreno).

## 3. Loops por escala de tempo

| Escala | Duração | O que move o jogo | Exemplo de decisão |
|---|---|---|---|
| Segundos | 3 a 45 s | O tique da fila; o lance da bancada ativa; o passo da obra-prima | Firme ou forçar o veio? |
| Minutos | 5 a 15 min | A sessão | Vender o lingote ou fundir mais? |
| Horas | 2 a 72 h | A ausência | (decidida antes de sair) |
| Dias | 1 a 7 dias | Encomendas, Obras, níveis, ferramentas | Em que encomenda entrar? |
| Semanas | 1 a 4 semanas | Cerco, tier novo, filas e offline | Inscrever-se no cerco, com que papel? |
| Eras | ~13 semanas | Ameaça, regra nova, Conselho, Selo | Tomar o Selo agora ou depois? |
| Fronteiras | 10 a 12 semanas | A terra nova e a cidadela | Até onde levar a expedição? |

### 3.1 Segundos (3 a 45 s)

| | |
|---|---|
| **O que faz** | A fila completa ações de 6 s (T1) a 30 s (T6) na coleta [H]. Na bancada ativa, um lance a cada 45 s. Na obra-prima, passos de 5 a 20 s (reagente, temperatura, acabamento; o desenho é do módulo 06). |
| **Decisão** | Só no ativo: firme ou forçar na bancada; no Faro e na obra-prima, cada passo (R7). |
| **O que ganha** | Uma unidade e XP por ação (T1: 10 XP a cada 6 s; T6: 190 XP a cada 30 s); no lance, achados ativos; na obra-prima, a qualidade da peça. |
| **Ausente × ativo** | Para o ausente, essa escala não existe: o servidor salta de evento em evento e não processa tique. O ativo vê a barra encher e escolhe lances. Não escolher equivale a "firme", sem castigo. |

**Por quê** [H]: a escala de segundos é onde mora o clique, e o clique repetido é o que o autoclicker resolve ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 7: Pecorella chama o autoclicker de "erro de design"). Por isso o lance é raro (um a cada 45 s), é uma escolha com troca e não é um toque por unidade.

### 3.2 Minutos: a sessão (5 a 15 min, 2 a 6 vezes por dia)

| | |
|---|---|
| **O que faz** | Lê o Relatório da volta; ajusta filas, etapas e regras; mexe no mercado (ordens na Bolsa, anúncios na Feira, lances no Leilão); faz obras-primas (2 a 5 min cada); entrega à encomenda; doa à Obra; prepara o cerco; vota. |
| **Decisão** | O que produzir a seguir; vender, guardar, usar ou doar; em que peça arriscar uma obra-prima e com que reagentes; o preço-limite das ordens; o que consertar. |
| **O que ganha** | Ouro, peças de qualidade, Mérito, nota na encomenda e a próxima meta de minutos. |
| **Ausente × ativo** | A sessão do casual tem a mesma forma da do hardcore, só mais curta: ler, decidir, sair. Nada na sessão tem cronômetro contra o jogador. A obra-prima pode ser pausada e retomada; o servidor guarda o estado por 24 h [H]. |

**Ordem da sessão** [H], pensada para caber em 5 minutos no celular: (1) Relatório da volta (não há nada a coletar: o que a fila fez já está no inventário); (2) vender, guardar ou usar; (3) uma decisão do dia (encomenda, obra-prima ou mercado); (4) plano para sair. Os passos 3 e 4 têm atalho: "repetir o plano anterior".

### 3.3 Horas: a ausência (2 a 72 h)

| | |
|---|---|
| **O que faz** | Nada: o plano trabalha. Filas na taxa ausente; ordens executam; expedições avançam com as regras de recuo; entregas automáticas pingam na encomenda; achados do ausente rolam a cada hora contínua. |
| **Decisão** | Já foi tomada antes de sair (seção 5). |
| **O que ganha** | Volume e XP. Exemplo: o regular no D30, com Mineração 60 e taxa ausente de 90%, dorme 9 h e acorda com 2.005 minérios T4 e 120 mil XP de Mineração (cálculo no [02](02-progressao.md), seção 2.3). Mais as vendas feitas pelas ordens e os achados. |
| **Ausente × ativo** | Quem volta mais vezes ajusta mais vezes (reage a preço, troca uma etapa), mas não produz mais por hora de fila. A Bolsa não pode premiar velocidade de clique (módulo 07; [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |

**O teto de offline** [H]: 24 h para todos no início, até 72 h conquistadas jogando ([02](02-progressao.md), seção 7). A tela de saída mostra a hora em que cada fila vai parar e por quê ("fila 2 para às 3h40: acaba o minério"). Proposta em análise: depois do teto, a fila não corta seco e rende 25% por mais 12 h ([02](02-progressao.md), seção 7.3).

### 3.4 Dias (1 a 7 dias)

| | |
|---|---|
| **O que faz** | Encomendas (3 a 7 dias); fases de Obra; níveis (entre o 50 e o 100, um nível do ofício principal a cada 1 a 3 dias no perfil regular); a torneira de venda a NPC, com preço que cai conforme o volume do dia; conserto e troca de ferramentas. |
| **Decisão** | Em que encomenda entrar e quanto comprometer; vender ao NPC (piso garantido, mas decrescente) ou ao mercado; o que consertar e o que deixar quebrar. |
| **O que ganha** | Mérito, ouro, itens da encomenda, nível, receita nova. |
| **Ausente × ativo** | A nota individual da encomenda sai da entrega, não da presença: o ausente com uma boa regra de entrega tira nota boa. O ativo soma qualidade, porque a peça Fina ou Obra-prima entregue vale mais na nota. Não há prêmio de login (L7). |

### 3.5 Semanas

| | |
|---|---|
| **O que faz** | O cerco semanal (inscrição até 24 h antes; defesa assíncrona); fases grandes das Obras; um tier novo de material a cada ~4 semanas entre o D18 e o D77 (regular); conquista de filas e de teto de offline; ranking semanal de guilda (módulo 09). |
| **Decisão** | Inscrever-se ou não, com que papel, equipamento e consumíveis; que Obra apoiar; o plano de ofício para o próximo tier. |
| **O que ganha** | Recompensas do cerco (itens, Mérito, peles e carnes para o Curtume e a Culinária), bônus coletivos das Obras e equipamento gasto a repor, que vira demanda para os ofícios. |
| **Ausente × ativo** | O inscrito luta com o que deixou separado e recebe a parte dele. Quem estiver online pode assumir uma janela de comando de 10 a 15 min (onde pôr a reserva, quando abrir o estoque da muralha), com bônus, nunca exigida (lei 9 do [02](../01-pesquisa/02-padroes-matriz-leis.md)). O módulo 04 desenha o cerco. |

### 3.6 Eras (~13 semanas)

| | |
|---|---|
| **O que faz** | Enfrenta a ameaça nova da Era (um tipo novo de criatura corrompida pela Névoa nos cercos) e joga com a regra nova; elege o Conselho (a cada 2 meses); completa Obras grandes que empurram a Névoa e abrem regiões. No fim da 1ª Era, o regular está perto do 90 no ofício principal e o hardcore perto do 98. |
| **Decisão** | O voto; que Obra priorizar; trocar ou não um ofício mestre (uma troca por Era, [02](02-progressao.md), seção 5.3); quando tomar o Selo de mestre. |
| **O que ganha** | Títulos e cosméticos da Era, regiões novas, Mérito e, para quem chega ao 100, a camada do Selo. |
| **Ausente × ativo** | O voto fica aberto por dias. A regra nova é anunciada com uma Era de antecedência, para o plano de ninguém ser punido (lei 8). |

### 3.7 Fronteiras (10 a 12 semanas, a partir da 2ª Era)

| | |
|---|---|
| **O que faz** | Manda expedições à terra nova que a Névoa revelou, numa trilha própria (L8); abastece a expedição com suprimentos da cidade; enfrenta crises (janelas ativas de 10 a 15 min); a guilda corre para a cidadela no fim. |
| **Decisão** | Grupo, suprimentos, rota e regras de recuo; quanto da produção da cidade mandar; se arrisca uma rota perigosa. |
| **O que ganha** | Marcos (presos à conta e à temporada), títulos, cosméticos e relíquias que voltam para a cidade. O nome do descobridor fica gravado no mapa. |
| **Ausente × ativo** | A expedição roda offline e volta com um diário. Quem não está na crise recebe a versão automática dela, sem o bônus. O módulo 10 desenha a Fronteira. |

### 3.8 As três metas sempre visíveis

A tela principal mostra sempre três barras, cada uma com estimativa em horas reais (lei 3 do [02](../01-pesquisa/02-padroes-matriz-leis.md); o Kittens Game mostra o tempo de relógio até cada meta, [02a](../01-pesquisa/02a-teoria-design-idle.md), seção 2.4):

| Barra | O que mostra | Exemplo no D30 (regular) |
|---|---|---|
| **Meta de minutos** | A próxima ação de sessão que vale a pena | "Obra-prima de lingote: insumos prontos" |
| **Meta de horas** | O próximo nível ou receita | "Culinária (aprendiz) 19 em 4 h" |
| **Meta de dias** | O próximo nível alto, tier, fila, offline, fase de Obra ou Selo | "Mineração 61 em 1,4 dia" · "teto de offline 60 h: faltam 800 de Mérito (~20 dias)" |

A cadência dessas metas, faixa por faixa, está na lei do serrote ([02](02-progressao.md), seção 11).

## 4. O dia típico de três perfis

Os três dias se passam no **D30**, no meio da 1ª Era. Os números vêm do modelo de bolso do [02](02-progressao.md) (seção 3.3) e são [H]. Os personagens são ilustrativos.

### 4.1 Casual: Cida, 2 sessões curtas por dia

**Perfil:** ofícios mestres Lenhadoria (nível ~56, tier T4) e Carpintaria (~39); vocação Caçador (~48). Duas filas (a terceira chega por volta do D50). Taxa ausente de 85%. Teto de offline de 36 h.

| Hora | Duração | O que faz | Decisão |
|---|---|---|---|
| 07h40, no ônibus, celular | 8 min | Lê o relatório da noite: a fila 1 (Lenhadoria) rendeu ~2.000 madeiras T4 e um achado do ausente (uma resina rara, presa à conta). A fila 2 (Caçador) voltou com peles e carne. Põe 60% da madeira à venda na Bolsa por preço-limite e guarda o resto. | Vender ou guardar; trocar a fila 2 para Carpintaria (tábuas com a própria madeira), com uma 2ª etapa de volta à expedição. Liga a regra "entregar 20% das tábuas à encomenda da Muralha". |
| 21h30, no sofá | 10 min | Relatório do dia: as ordens venderam quase tudo; a encomenda subiu de nota. Faz uma obra-prima de arco T3 usando a resina achada de madrugada (3 min). Inscreve-se no cerco de sábado com o equipamento de Caçador. O machado está com 15% de durabilidade: compra um na Feira, feito por um ferreiro. | Que peça arriscar na obra-prima; com que equipamento ir ao cerco; comprar o machado agora ou consertar o velho. |
| Antes de dormir | 1 min | Repete o plano: Lenhadoria a noite toda; expedição com "recuar a 40% de vida". | — |

**Por que funciona para ela** [H]: a Lenhadoria é coleta, não precisa de insumo e roda 24 h sem parar. É o ofício que mais rende achados do ausente, porque ela raramente troca a atividade da fila (a chance cresce a cada hora contínua). O jogo nunca lhe pede um horário: a encomenda recebe pela regra, e o cerco pela inscrição.

### 4.2 Regular: Tião, 4 sessões por dia

**Perfil:** Mineração (~60, T4) e Fundição (~44); vocação Cavaleiro (~52). Três filas (a terceira chegou ontem, D29,7). Taxa ausente de 90%. Teto de offline de 48 h.

| Hora | Duração | O que faz | Decisão |
|---|---|---|---|
| 07h00 | 5 min | Relatório: a Fundição parou às 4h10, quando acabou o minério T3. A Fundição dele ainda não chega ao T4 (abre no 55; revisão de consistência: R5), e a Mineração já está no T4. Põe uma ordem de compra de minério T3 e uma de venda do minério T4 na Bolsa. | Comprar minério T3 ou pôr a Mineração no T3 por algumas horas (perde a venda do T4). |
| 12h30 | 10 min | Vende lingotes T3 na Bolsa; entrega lingotes à encomenda da guilda; faz uma sessão de Faro na Mineração atrás de gemas (2 de Inspiração; o lance garimpar saiu, R7). | Onde pôr as mãos; quanto da produção vai à guilda. |
| 18h30 | 12 min | Prepara o cerco: compra poções de uma alquimista; leva a couraça a um ferreiro para consertar (o conserto consome material e reduz a durabilidade máxima). Faz duas obras-primas de lingote. | Consertar ou trocar a couraça; que papel assumir no cerco. |
| 23h00 | 5 min | Plano da noite: Mineração no T4; Fundição com a etapa "se acabar o minério T3, fundir o estoque de T2"; Cavaleiro em expedição. | — |

**Por que funciona para ele** [H]: duas filas encadeadas (coleta + transformação) dão a Tião uma cadeia própria curta, mas os tiers dos dois ofícios não andam juntos, e ele depende do mercado para equilibrar a cadeia. É a interdependência aparecendo dentro de um jogador só. A terceira fila liberou a vocação para rodar sempre, e o cerco passou a render peles que ele vende ao Curtume.

### 4.3 Hardcore: Lia, muitas sessões e obras-primas

**Perfil:** Ferraria (~65, T4) e Alquimia (~51); vocação Ladino (~56). Três filas desde o D23,5. Taxa ausente de 90%. Teto de offline de 60 h.

| Período | O que faz | Decisão |
|---|---|---|
| Manhã (3 sessões de 5 a 15 min) | Compra lingotes T4 na Bolsa (de mineiros e fundidores como Tião); faz 3 obras-primas de lâmina T4; põe as Finas na Feira e a única Obra-prima no Leilão. | Que atributo buscar na obra-prima; a que preço vender; Feira ou Leilão. |
| Tarde (3 a 4 sessões) | 90 min de bancada ativa somados ao longo do dia (forçando a Ferraria quando há encomenda com prazo); mais 3 obras-primas; organiza a encomenda da guilda e confere a nota de cada membro. | Forçar (mais rápido, gasta o martelo em dobro) ou firme; quem da guilda precisa de ajuda. |
| Noite (3 sessões) | Alquimia produz poções para o cerco (demanda alta perto do sábado); debate a Obra da vez no Conselho; 2 obras-primas; monta a guarnição da guilda para o cerco. | Que Obra defender; quantas poções fazer para vender e quantas para a guilda. |
| Antes de dormir | Plano de 8 h para as 3 filas, com etapas de reserva; a expedição do Ladino vai a uma área de risco médio da Névoa, com regra de recuo. | Arriscar a área mais rica ou não. |

**Por que funciona para ela** [H]: o ofício de criação depende de insumos e de decisões, então recompensa quem volta muitas vezes. A vantagem dela não está no volume (só ~15% mais horas de fila que Tião no ofício principal), mas na qualidade, no mercado e na liderança.

### 4.4 Os três dias lado a lado

| | Casual (Cida) | Regular (Tião) | Hardcore (Lia) |
|---|---|---|---|
| Sessões e tempo de tela | 2 × ~9 min (~18 min) | 4 × ~8 min (~32 min) | ~10 sessões (~2 h) |
| Filas · taxa ausente · teto offline | 2 · 85% · 36 h | 3 · 90% · 48 h | 3 · 90% · 60 h |
| Horas de fila por dia no ofício principal | ~17 h | ~20,5 h | ~23,5 h |
| Volume do ofício principal (hardcore = 100) | 66 | 87 | 100 |
| XP por dia no ofício principal | ~212 mil | ~282 mil | ~346 mil |
| Obras-primas · bancada ativa | 1 · 10 min | 2 · 25 min | 8 · 90 min |
| Mérito por dia (provisório, módulo 09) | ~20 | ~40 | ~100 |
| Nível do ofício principal no D30 | ~56 | ~60 | ~65 |
| Primeiro 100 de ofício mestre | ~D149 | ~D123 | ~D102 (simulação 08, com as regras da revisão de consistência: R5, R10 e R16) |

**Leitura** [H]: o hardcore joga ~7 vezes mais tempo de tela que o casual e tem ~1,5 vez o volume dele no ofício principal. A física da fila (uma por atividade, 24 h por dia no máximo) é o que mantém essa razão pequena, e é ela que segura a emissão quando a população cresce (lei 6). O que o hardcore ganha a mais é qualidade (8 obras-primas por dia), informação de mercado e Mérito.

### 4.5 O que muda no começo e depois do 100

- **D1 a D7:** uma fila só nos primeiros dias (a 2ª chega entre ~D2,6 e ~D5,2, com o bônus de calouro), taxa ausente de 70% a 75%, teto de 24 h. A decisão central é como dividir a única fila entre o ofício e a vocação. A semana tem a **virada do 30**: o primeiro ofício chega ao teto de aprendiz, o jogador escolhe o primeiro ofício mestre, ganha a 2ª fila e mais 5% de taxa ausente, tudo no mesmo dia; o tier T3 vem no 35, poucos dias depois (revisão de consistência: R5 e R10). É a primeira virada de paradigma do jogo ([02a](../01-pesquisa/02a-teoria-design-idle.md), seção 3.2).
- **Depois do D100:** a taxa ausente chega a 95% e depois a 100%; o teto de offline chega a 72 h; a Fronteira começou no D91, com a 2ª Era. O regular chega ao 100 por volta do D123, acumula Maestria e pode tomar o primeiro Selo de mestre por volta do D137, sem sair do tier de produção ([02](02-progressao.md), seção 9; revisão de consistência: R5 e R22).

## 5. Antes de sair: o que o jogador decide (lei do plano)

Toda decisão desta lista tem um **padrão seguro**: se o jogador sair sem mexer, nada se perde e nada se arrisca além do que ele já tinha escolhido [H]. A tela de saída resume o plano em uma linha por fila, com a hora prevista de parada e o motivo, e tem o atalho "repetir o plano".

| # | Decisão | O que o jogo mostra | Padrão seguro (sem mexer) | Módulo dono |
|---|---|---|---|---|
| 1 | O que cada fila faz: atividade, receita, tier | Produção prevista e a hora em que cada fila para, com o motivo | Repetir a última atividade | 02, 06 |
| 2 | Etapas e regras da fila | A sequência simulada, com horários | Proteções ligadas: "se acabar o insumo, siga para a próxima etapa"; "se a ferramenta quebrar, use a reserva" | 02 |
| 3 | Ferramentas e reservas | Durabilidade restante em horas de fila | Sem reserva, a fila segue com a ferramenta básica, mais lenta, e não para | 05 |
| 4 | Ordens na Bolsa e anúncios na Feira (preço-limite, quantidade, validade) | Livro de ofertas e preço de referência | Nenhuma ordem nova | 07 |
| 5 | Venda a NPC (o piso) | Preço decrescente do dia | Nada vai ao NPC sem ordem | 07 |
| 6 | Entregas a encomendas (percentual da produção, teto) | Nota prevista | As entregas já combinadas seguem | 09 |
| 7 | Destino do que passar da cota de venda (o teto de emissão do 07 é um portão de saída, e a cota acumula até 3 dias): guardar para uso próprio, vender depois, entregar à encomenda ou doar a uma Obra (vira Mérito) | Cota disponível e quanto da produção já a consome | Fica na conta, para uso próprio ou venda nos dias seguintes | 07 |
| 8 | Expedição: grupo, suprimentos, rota, regras de recuo | Risco estimado e consumo de suprimentos | Recuar a 50% de vida; nunca gastar o último consumível | 04 |
| 9 | Cerco: inscrição, papel, equipamento e consumíveis separados | O prazo da inscrição (até 24 h antes) | Sem inscrição; a guarnição NPC defende | 04 |
| 10 | Obra-prima pendente | A obra-prima pausada fica guardada por 24 h | Nada se perde | 06 |
| 11 | Voto no Conselho, se houver eleição aberta | O prazo | Sem voto | 09 |
| 12 | Fronteira (a partir da 2ª Era): suprimentos e regras da expedição | Diário previsto | A expedição recua com segurança | 10 |

Duas regras protegem o plano [H]:

- **Proteção é padrão; otimização se conquista.** As regras que evitam perda (pular a etapa sem insumo, usar a ferramenta reserva, recuar a expedição) vêm ligadas desde o primeiro dia. As regras que otimizam (mais etapas, condições) se conquistam jogando ([02](02-progressao.md), seção 6.3).
- **Mudança de regra não mexe em plano em andamento.** Um rebalanceamento só vale a partir da próxima volta do jogador; o que já estava na fila termina com a regra antiga (lei 8 do [02](../01-pesquisa/02-padroes-matriz-leis.md); os nerfs no Township do Melvor, [B01](../01-pesquisa/fichas/B01-melvor-idle.md)).

## 6. Interfaces com outros módulos

| Para | O que este módulo fixa (todos [H]) |
|---|---|
| **02 Progressão** | Duas taxas (ausente 70% → 100%; ativa 100%, 125% ou 75% conforme o lance); bancada ativa de no máximo 2 h/dia; uma fila por atividade; teto de offline 24 h → 72 h. |
| **04 Combate** | A expedição é uma atividade de fila; regras de recuo com padrão seguro (50% de vida); cerco com inscrição até 24 h antes e janela de comando opcional de 10 a 15 min, com bônus. |
| **06 Ofícios** | Lance a cada 45 s; achados do ausente (`mín(h, 20)%` por hora contínua), parte deles usável só na obra-prima do próprio jogador; obra-prima pausável por 24 h. Reconciliado: o lance garimpar/apurar saiu, e o Faro e o lote fino do 06 fazem esse papel (R7). |
| **07 Economia** | Torneira de NPC diária e decrescente; destino do excedente escolhido antes de sair, compatível com o portão de saída do 07; Bolsa sem vantagem por velocidade. |
| **08 Simulação** | Perfis: casual 2 sessões/dia, regular 4, hardcore ~10; horas de fila por dia no ofício principal: 17 / 20,5 / 23,5; obras-primas por dia: 1 / 2 / 8; bancada ativa: 10 / 25 / 90 min; volume relativo 66 / 87 / 100. O bot tem o teto físico do hardcore: 3 filas × 24 h e 2 h de bancada ativa. |
| **09 Social** | Encomendas com entrega automática e nota individual pelo que foi entregue; Mérito por dia provisório de 20 / 40 / 100 por perfil; voto assíncrono. |
| **10 Live-ops** | Fronteira em trilha própria, sem consumir filas (proposta); regra de Era anunciada com uma Era de antecedência. |
| **12 Onboarding** | Ordem da sessão em quatro passos; a primeira semana termina na virada do 30. |
| **14 Arte e UI** | Relatório da volta em três linhas; as duas taxas em toda tela de fila; as três barras de meta; a tela de saída com a hora de parada de cada fila. |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **A bancada ativa vira obrigação** | O hardcore sente que "perde" se não usar as 2 h diárias, e o jogo vira plantão. | Ganho de volume pequeno e publicado (+2% a +6,5% num dia); achados ativos úteis, mas não essenciais; medir no alfa quantos usam o teto todo dia e baixá-lo se virar regra. |
| **Bot nos lances** | Um script responde lances 2 h por dia, todo dia. | O ganho é pequeno; teto de emissão negociável por conta; detecção por regularidade dos lances e pelo fluxo de valor ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); conta = adulto verificado (P8). |
| **A sessão não cabe em 5 minutos** | Decisões demais (filas, etapas, mercado, encomenda, cerco) cansam o casual no celular. | Ordem da sessão em quatro passos; "repetir o plano"; padrões seguros; teste de usabilidade com o perfil casual. |
| **Relatório da volta vira ruído** | Texto demais, ou o relatório vira vitrine de oferta. | Três linhas e detalhe opcional; nada da loja no Relatório da volta. |
| **Paridade quebra** | Um evento esquecido no cálculo por eventos faz o offline render mais (ou menos) que o online, e o mercado explora a diferença. | Teste automático de paridade a cada mudança de regra; alarme quando a emissão offline por hora divergir da online ([07](../01-pesquisa/07-tecnica-idles-online.md)). |
| **Paciência premia nunca mudar** | Os achados do ausente fazem o jogador deixar a mesma fila por semanas e parar de decidir. | A chance tem teto de 20% por hora; os achados servem à obra-prima (puxam para o ativo); a meta de dias pede tier novo e troca de receita. |
| **Sem login diário, a retenção cai** | Sem a sequência diária, parte do público não cria o hábito. | Medir D1, D7 e D30 no alfa; reforçar as três metas e as cadências coletivas; se faltar hábito, usar eventos com janela de dias, nunca sequência que se perde. |
| **Carona nas entregas automáticas** | Contas que entram na encomenda, deixam uma regra mínima e colhem a recompensa do grupo. | Nota individual pelo valor entregue; recompensa proporcional; o líder da encomenda pode remover inativos (módulo 09). |
| **Cerco em horário ruim** | Um horário fixo exclui quem trabalha à noite ou vive em outro fuso. | Inscrição até 24 h antes; defesa assíncrona; janela de comando opcional; horários rotativos ou mais de uma janela (módulo 04). |
| **A Fronteira sobrecarrega o plano** | Mais uma trilha para planejar, além das filas da cidade. | A expedição da Fronteira tem plano simples, padrão seguro e "repetir"; participar é opcional. |
| **"A aba não importa" esvazia a presença** | Se ficar online não rende nada, o jogador ativo não vê razão para voltar mais vezes. | O ativo tem ganhos que só ele tem (qualidade, achados ativos, mercado, comando no cerco, liderança); medir se o regular encontra motivo para a 3ª e a 4ª sessões. |

