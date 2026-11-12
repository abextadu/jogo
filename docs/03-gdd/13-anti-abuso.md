# GDD 13 — Anti-abuso: bots, multicontas, exploits, fraude e moderação

> **Codinome:** Projeto Ofício. Módulo da Fase 3, escrito sobre a [bíblia](00-biblia.md) (glossário, decisões vigentes, números-âncora) e sobre as decisões do Gabriel registradas no [PROGRESSO](../PROGRESSO.md). Depende de 00 e 07 (economia). Conversa com 02 (filas), 06 (obra-prima), 08 (simulação), 09 (Conselho e guildas), 11 (Coins, Pix, teto de gasto), 12 (onboarding) e 14 (interface).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou leitura do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).** Os pontos jurídicos citam a norma e estão marcados **validar com advogado**: não há parecer jurídico (decisão do Gabriel, risco assumido).
> **Escopo:** desenho e processo. Nada de código; a implementação é da Fase 4 (arquitetura). As decisões deste módulo são numeradas **AA-1** a **AA-26**.
> **Checkpoint 3 (2026-11-11), decisão do Gabriel:** sem verificação de idade alguma e transferência de Coins e ouro imediata, sem freios. Este módulo foi refeito para isso: saíram a verificação, os cofres de identidade, a reverificação, a carência do Coin, o limite de saída de conta nova e as retenções de saída. A regra "uma pessoa, uma conta ativa" continua, cobrada por detecção. AA-9, AA-13 e AA-17 foram retiradas e a AA-8 foi refeita; a numeração das outras foi mantida.

## 0. Resumo em uma tela

**O problema.** Na Cidade, todo ouro tem preço em reais. O Coin é comprado em reais e trocado por ouro no Câmbio; ouro e Coins circulam livremente pela Troca; o RMT informal não é proibido. [H] Isso faz do jogo um alvo melhor que a média: num jogo de navegador, criar conta custa um clique, e o câmbio oficial dá ao ouro um preço legítimo em dinheiro ([04b, §4.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md); [F09, §13](../01-pesquisa/fichas/F09-throne-and-liberty-e-lost-ark.md)).

**A resposta: três travas e uma rede.**

1. **Teto de valor por conta.** O negociável nasce de ação ativa ou de produção limitada pela Fila, com teto de emissão negociável por conta e por dia (P2; módulo 07). Uma conta automatizada não gera mais valor negociável que uma conta humana bem jogada.
2. **Uma pessoa, uma conta ativa, como regra dos termos.** Sem verificação de identidade (checkpoint 3), a regra é cobrada por detecção: fluxo de valor entre contas, meio de pagamento, aparelho, rede e comportamento. Uma conta extra custa quase nada, então o que segura a fazenda é o teto (trava 1), a rampa de conta nova e a detecção em ondas.
3. **Velocidade não vale nada.** Mercado sem corrida de clique, janelas ativas decididas por escolha e não por reflexo, API que só lê.
4. **A rede é o livro-razão.** Toda moeda e todo item têm origem registrada (P9). O que foi roubado, duplicado ou comprado com fraude é rastreado e removido sem rollback geral. A punição é proporcional e revisada por gente.

**A separação que organiza o módulo:** *o RMT informal não é infração; a origem ilícita do valor é.* Vender o próprio ouro por Pix fora do jogo é negócio do jogador, sem garantia nem suporte do estúdio. Bot, multiconta, conta alugada, roubo, golpe, fraude de pagamento e exploit são infrações, e o valor que nasce delas é removido de onde estiver.

**Os números principais** (detalhe e cenários na seção 12):

| Item | Valor inicial [H] |
|---|---|
| Carência do Coin, limite de saída e retenção | **nenhum** (checkpoint 3): Coins e ouro saem da conta na hora |
| Conta nova | menos de 14 dias **ou** menos de 20 h de jogo ativo: rampa do teto de emissão e sem ouro de encomenda; sem limite de saída |
| Bazar de Personagens | vendedor com 30+ dias, 60+ h de jogo ativo e 2FA há 7+ dias; comprador 30 dias sem votar e 90 dias sem revender |
| Bots na simulação (cenário base) | 3% das contas com automação na própria conta; fazendas: 0,5% na 1ª rodada (com identidade verificada), 3% a 20% na 2ª rodada, sem verificação (Fase 4) |
| Detecção | fazendas: 60% das contas por onda, a cada 3 semanas; automação na própria conta: 8% por semana |
| Disputas de pagamento | meta abaixo de 0,5%; disjuntor de cartão a 0,8% |
| Apelação | revisão por outra pessoa; resposta em até 7 dias para banimento |

## 1. Princípios

1. **Tornar o abuso inútil antes de torná-lo detectável.** [H] O bot existe enquanto o ganho esperado de uma conta supera o custo de criá-la e perdê-la ([04b, §4.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). As defesas que duram mexem nessa conta (seção 2.2); a detecção limpa o que sobra.
2. **Mirar o fluxo de valor, não o jogador.** [H] O sinal mais forte de abuso é econômico (quem dá para quem, sem contrapartida) e nasce no livro-razão. IP e aparelho são sinais auxiliares ([07, §5.5](../01-pesquisa/07-tecnica-idles-online.md)).
3. **Nenhum freio na transferência; a defesa age depois do fato.** [H] Pela decisão do Gabriel (checkpoint 3), dar, vender e transferir são imediatos. A defesa usa o que não atrasa ninguém: taxas, detecção, revisão humana e a reversão pelo livro-razão do valor de origem ilícita provada.
4. **Punição graduada, reversível e proporcional.** [H] Sinal → pontuação → atrito → revisão humana → sanção com remoção do valor rastreado ([07, §5.4](../01-pesquisa/07-tecnica-idles-online.md)). [F] Bloquear a conta inteira de quem contesta uma cobrança foi uma das acusações da FTC contra a Epic ([05c, §3.1](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)).
5. **Nunca desligar a economia de todos.** [F] O New World desligou toda transferência de riqueza e, ao fazê-lo, criou um dupe novo ([G04, §10.2](../01-pesquisa/fichas/G04-new-world.md)). [H] Disjuntor por sistema, por item e por moeda, testado antes de ser preciso.
6. **Regra publicada antes de ser aplicada.** [H] Política, sanções e números deste módulo saem no lançamento; banimentos, valor removido e apelações entram no relatório mensal (P11).
7. **O estúdio não é parte do RMT informal.** [H] Não intermedia, não garante, não arbitra, não integra nem promove sites de venda. Mas mede o mercado cinza como indicador (seção 8.4).

## 2. Modelo de ameaça

### 2.1 Quem ataca e o que quer

| Atacante | O que quer | Por onde o valor sai | Defesa principal |
|---|---|---|---|
| **Fazenda de contas** (um operador, várias contas falsas ou alugadas) | Ouro e bens para vender por reais | Troca para uma conta coletora, depois RMT informal | §2.2 (teto e rampa); §3.4 (grafo e ondas); §4 (ligações entre contas) |
| **Automação na própria conta** (script do próprio jogador) | Poupar tempo, render sempre no teto, jogar todas as janelas ativas | Mercado e Troca, como qualquer jogador | §3.2 (teto, Fila, janelas); §3.4 |
| **Bot de mercado** | Pegar o anúncio barato antes de todos; guerra de preço | Feira, Bolsa, Leilão | §3.2 (mercado sem corrida, com o módulo 07) |
| **Multiconta caseira** (alts do mesmo jogador) | Mais ofícios mestres, mais votos, canalizar valor | Troca entre as próprias contas | §4 |
| **Explorador de bug** | Dupe, corrida, estorno que devolve o que nunca foi cobrado | Qualquer balcão | §5 |
| **Fraudador de pagamento** | Converter cartão roubado ou Pix de golpe em ouro | Câmbio, Troca, Baú Misterioso, Bazar de Personagens | §6 |
| **Ladrão de contas** | Esvaziar a conta da vítima | Troca e anúncios a preço absurdo para um comparsa | §7 |
| **Golpista** | Enganar na Troca, no RMT informal ou na venda de conta por fora | Troca; fora do jogo | §7; §8 |
| **Lavador** | Transformar dinheiro sujo em dinheiro "limpo" | Coins → ouro → venda informal | §6; §9 |
| **Insider** (funcionário com ferramenta interna) | Criar ou desviar valor; agir antes de uma mudança | Ferramentas internas | §11.4 |
| **Comprador de votos** | Capturar o Conselho | Contas compradas ou alugadas | §4; §7.5 (Bazar de Personagens); módulo 09 |

Manipulação de preço e cartel ficam no módulo 07 (anti-manipulação). Este módulo trata só do que depende de identidade, de contas ligadas e de fluxo entre contas.

### 2.2 A conta do abuso

A fórmula que todo o módulo tenta tornar negativa:

`lucro por conta = E × P × D × (1 − perdas) − C`

- **E** = ouro negociável que a conta gera por dia (no máximo, o teto de emissão negociável **T** do módulo 07);
- **P** = preço do ouro em reais no mercado cinza;
- **D** = dias de vida útil da conta até a detecção;
- **perdas** = taxa da Troca de ouro (3%, destruída; Coins e Baú lacrado pagam 12% em qualquer canal, bíblia §6.6) mais o desconto do intermediário que compra o ouro;
- **C** = custo de pôr de pé uma conta. Sem verificação (checkpoint 3), fica perto de zero: um e-mail, um aparelho real ou emulado e uma rede que não ligue as contas entre si.

**Exemplo calculado [H]** (refeito com a paridade final do Coin e com o que a simulação mediu; revisão de consistência: R17 e R20):

- E ≈ 1.200 de ouro por dia: é o que uma conta-fazenda obtém de fato, e não o teto inteiro, porque ela passa quase toda a vida na rampa de conta nova (25% a 75% do teto), não vende tudo o que produz e vende os básicos perto do piso do NPC. O número foi escolhido para reproduzir o lucro que o [08](08-simulacao.md), seção 7.1, mediu;
- 1 Coin = R$ 1,00, cotado a ~750 de ouro no Câmbio (premium de 30 dias = 20 Coins ≈ 15.000 de ouro; [07](07-economia.md), seção 1.2): cerca de R$ 1,33 por mil de ouro no canal oficial;
- mercado cinza a 50% do oficial: P ≈ R$ 0,67 por mil de ouro. [F] Referência: o ouro clandestino do OSRS sai a cerca de 45% do preço do Bond ([F03, §6.3](../01-pesquisa/fichas/F03-runescape-e-osrs.md));
- D = 35 dias (a vida média de uma conta de fazenda no cenário base da detecção, §12.1); perdas = 3% da Troca de ouro + 30% do intermediário = 33%.

Conta: 1,2 (mil de ouro) × R$ 0,67 × 35 dias × 0,67 ≈ **R$ 19 por conta na vida inteira (~R$ 16 por mês), antes de C.** A simulação mediu R$ 15,50 a R$ 17,50 por mês no cenário base.

**Leitura [H].** Com custo de conta perto de zero, como no Banana e no Bongo Cat, R$ 19 vezes mil contas paga a fazenda ([G05, §10.1](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). **Depois do checkpoint 3, este é o caso do jogo.** O lucro por conta continua pequeno, mas multiplica-se pelo número de contas. A defesa deixa de ser "cada conta custa uma pessoa" e passa a ser:

1. **E pequeno nos primeiros dias:** rampa de conta nova no teto de emissão e ouro de encomenda só a partir do 14º dia;
2. **D curto:** detecção em ondas e sinais de ligação entre contas (§3.4 e §4.2);
3. **perdas altas na saída:** taxa da Troca e do Câmbio;
4. **remoção** do valor rastreado em cada onda (§3.5).

Por isso a meta ganha uma segunda régua, de escala: **o que as fazendas extraem fica abaixo de 3% do valor negociável emitido no mês**, medido no painel do 07. A 2ª rodada da simulação, no início da Fase 4, mede fazendas de 3% a 20% das contas novas.

**O custo de conta falsa é operacional.** [H] O operador precisa de aparelhos ou emuladores, de redes que não liguem as contas e de tempo para envelhecê-las. Cada sinal de ligação que o estúdio detecta (§3.4) encarece a operação. Mas não há mais barreira de identidade: a detecção deixa de ser complemento e vira a defesa central contra multicontas. [F] Mesmo quando a identidade é exigida, ela se aluga: a Serasa Experian estimou mais de 2,6 milhões de pessoas ou contas bancárias com indícios de atuação como "laranja" no Brasil em 2025 ([Serasa Experian, 18/3/2026](https://www.serasaexperian.com.br/sala-de-imprensa/prevencao-a-fraude/contas-laranja-potenciais-crescem-mais-de-60-em-dois-anos-no-brasil-aponta-estudo-da-serasa-experian/)).

**Requisitos que a conta impõe a outros módulos [H]:**

- **Ao 07:** o **lucro de uma conta-fazenda fica em até ~R$ 15 por mês**, medido no painel do 07 (seção 12.2) (revisão de consistência: R20). Esta meta substitui a anterior ("um dia de teto vale ~R$ 1" e "salário-teto do topo até R$ 100"), que não cabia com as metas do 07: no modelo, um dia de teto do mediano vale ~R$ 5,80, e chegar a R$ 1 exigiria cortar o teto a um quarto, o que estrangula a oferta ([08](08-simulacao.md), seção 7.1). Se o lucro medido passar da meta, as alavancas são a detecção, a rampa de conta nova e o ouro de encomenda só a partir do 14º dia da conta, antes do tamanho do teto.
- **Ao 07 e ao 12:** toda fonte de valor negociável aberta a uma conta recém-criada é fábrica de bots ([G07, §2.11](../01-pesquisa/fichas/G07-economias-que-colapsaram.md)). Os primeiros dias rendem sobretudo progresso preso à conta (rampa do teto de emissão). Como a saída de valor das contas novas não tem limite (checkpoint 3), é a rampa que segura a produção que sai.

### 2.3 O paradoxo do idle: onde o bot ainda ganha

[H] No núcleo idle, o bot perde a razão de existir: o jogo já joga sozinho ([07, §5.3](../01-pesquisa/07-tecnica-idles-online.md)). [F] Ele vence onde o tempo passivo vira valor negociável e conta extra não custa nada ([G05, §12](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). Na Cidade, sobram estes lugares:

| Lugar | Ganho do bot sobre um humano bem jogado [H] | Prioridade |
|---|---|---|
| Multiplicar contas | Proporcional ao número de contas | Máxima |
| Mercado (Feira, Bolsa, Leilão) | Velocidade: pegar o barato primeiro, cobrir preço sem parar | Alta, resolvida no desenho do 07 |
| Conselho | Votos de contas compradas ou alugadas | Alta em período de eleição |
| Janelas ativas (obra-prima, eventos) | Jogar todas as sessões, sempre no ótimo | Média |
| Bazar de Personagens | Nivelar contas por automação para vender | Média |
| Reposição da Fila | Repor sem atraso, 24 h por dia | Baixa: a Fila planejada já cobre a ausência |
| Raspagem de dados | Informação de preço antes dos outros | Baixa: API oficial de leitura (§10) |

## 3. Bots

### 3.1 Por que existem neste jogo

[H] Três fatos juntos: (1) ouro e Coins são transferíveis livremente; (2) o Câmbio dá ao ouro um preço oficial em reais; (3) o RMT informal não é proibido e, portanto, tem compradores à vista. [F] O padrão é conhecido: no Lost Ark, com câmbio oficial de cristais por ouro, mais de 1 milhão de contas foram banidas por bots em dois dias de março de 2022, e a ficha lê o bot como "a sombra do câmbio oficial" ([F09, §13](../01-pesquisa/fichas/F09-throne-and-liberty-e-lost-ark.md)). [F] O canal oficial encolhe o mercado negro, mas não o elimina: um mês depois dos Bonds, a riqueza ligada a gold farming no RuneScape tinha caído mais de 80%, e mesmo assim a guerra contra bots continuou ([04b, §4.6](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).

Os lugares em que o bot ainda importa estão na tabela da seção 2.3. As decisões abaixo atacam cada um.

### 3.2 Como o desenho torna o bot inútil

**AA-1. O teto de emissão negociável é a primeira defesa anti-bot.** O teto pertence ao módulo 07; este módulo fixa os requisitos que ele precisa cumprir para servir de defesa [H]:

1. Conta **todo** valor negociável que a conta cria: drops, produção de Fila, vendas a NPC, recompensas de janelas ativas.
2. A produção acima do teto não sai da conta naquele dia: fica para uso próprio, Encomendas e Obras (vira Mérito), ou sai nos dias seguintes. Nada nasce preso: o teto é o portão de saída do 07, medido em valor de referência fixo (bíblia, §6.6; revisão de consistência: R18).
3. O teto **não cresce** com nada que um bot automatize com facilidade (horas online, número de ações, volume negociado). Se crescer, cresce com marcos de progresso que exigem decisões.
4. Perto do teto, nada para nem se perde: a cota enche 1/24 por hora e acumula até 3 dias (07, seção 3.4). O jogador vê o próprio contador: "hoje você usou 2.100 de 3.000 da sua cota" (revisão de consistência: R18).
5. O teto é igual para quem paga e para quem não paga: o Coin compra conforto, nunca renda (bíblia, §5).

- **Inspira-se na** "prova de jogo" da ficha [G05, §13](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md) e no limite de drops por janela da Steam; **diferencia-se de** Banana e Bongo Cat, em que o tempo de cliente aberto virava item vendável.
- **Resolve** a fazenda que multiplica contas para multiplicar emissão: cada conta extra rende no máximo T.
- **Incentiva** sessões curtas e bem decididas, em vez de grind; quem joga bem chega perto do teto sem precisar ficar online.
- **Risco:** o hardcore sente o teto como castigo. Mitigação: o excedente vira Mérito e progresso pessoal, que não têm teto (P1).

**AA-2. A Fila é a automação oficial.** [H] O jogador monta uma Fila planejada para o período de ausência, com tarefas de reserva quando um recurso acaba ou um requisito falha, e o servidor aplica tudo, inclusive retroativamente, na liquidação. [F] O Idle Clans faz isso com uma tarefa de reserva aplicada "inclusive de forma retroativa no offline" ([07, §1.1](../01-pesquisa/07-tecnica-idles-online.md)). Um script que repõe a Fila na hora ganha quase nada, porque a Fila não fica parada. Requisito ao módulo 02: a Fila planejada cobre, sem intervenção, pelo menos o offline base de 24 h.

- **Inspira-se em** Idle Clans e na conclusão da ficha do Tibia de que a demanda por automação deve ser atendida pelo desenho, não pelo bot ([04b, §4.4, item 9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Resolve** o motivo mais comum para automatizar: não perder tempo de Fila enquanto dorme.
- **Incentiva** o "ausente esperto", que planeja antes de sair.
- **Risco:** uma Fila poderosa demais tira decisões do jogo ativo. Mitigação: a Fila executa o plano, mas não decide preço, qualidade nem obra-prima.

**AA-3. Janelas ativas por decisão, com cota.** [H] O ativo ganha opções (P12), e isso faz do ativo um alvo de automação ([07, §5.3](../01-pesquisa/07-tecnica-idles-online.md)). Requisitos:

- **Obra-prima (módulo 06):** decisões com informação parcial e variação (reagentes, temperatura, acabamento), sem componente de reflexo; cota diária de sessões que podem chegar ao topo de qualidade (ponto de partida: 6 por dia, a reconciliar com 06); cada sessão consome reagentes do jogo. Meta testável: um resolvedor automático, rodado pelo estúdio no alfa, não deve superar em mais de 10% a qualidade média esperada dos 10% melhores humanos.
- **Cerco:** inscrição prévia e defesa assíncrona, sem nada que dependa de tempo de reação.
- **Encomenda:** nota individual pelo que foi entregue e pela qualidade, ambos limitados pela produção da conta.
- **Nunca** premiar "cliente aberto", tempo online ou número de cliques ([G05, §13](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)).

- **Inspira-se no** teste do ausente do [03](../01-pesquisa/03-alem-do-idle.md) (participação medida em decisões, não em horas); **diferencia-se de** chefes mundiais por clique.
- **Resolve** a vantagem do bot nas janelas ativas: com cota e sem reflexo, o bot joga as mesmas sessões que um humano dedicado, com resultado parecido.
- **Incentiva** pensar a sessão ativa, não repeti-la.
- **Risco:** cota baixa demais frustra quem gosta de crafting ativo. Mitigação: sessões além da cota continuam jogáveis, com qualidade limitada a Fino.

**AA-4. Mercado sem corrida (requisitos ao módulo 07).** [H] Velocidade não pode dar vantagem em nenhum balcão:

- degrau de preço relativo, espera para modificar ordens e prioridade por antiguidade no mesmo preço ([04b, §3.5](../01-pesquisa/04b-economia-mercados-protecoes-bots.md));
- garantia de 100% em toda ordem de compra e todo lance;
- **janela de vitrine na Feira:** um anúncio com preço abaixo de 80% do preço de mercado ([07](07-economia.md), seção 1.2; revisão de consistência: R18) fica visível por 2 minutos antes de poder ser comprado; quem pedir a compra nesse intervalo entra num sorteio no fim da janela. Acima disso, a compra é imediata. [F] O Black Desert sorteia o comprador entre pré-ordens de mesmo preço, e o Idle Clans pede confirmação para vender 20% abaixo da média de 24 h ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md));
- alerta para quem vende muito abaixo da referência ("seu preço está 35% abaixo do preço de mercado; confirmar?");
- lance máximo automático e prorrogação no Leilão, para que o lance de último segundo não valha nada.

- **Inspira-se em** EVE (degrau de 4 dígitos, 2020), Black Desert (sorteio) e IdleMMO (prorrogação de 30 min) ([04b, §2.2 e §1.4](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Resolve** o sniping e a guerra de 0,01, os dois lugares em que o bot de mercado vence.
- **Incentiva** preço pensado e ordens que ficam paradas; o jogador de celular compete com quem fica no desktop.
- **Risco:** a janela de vitrine atrasa quem quer vender rápido e barato de propósito. Mitigação: só vale abaixo de 80% da referência; o vendedor é avisado.

### 3.3 Desafio contra bots, só como atrito

[F] O Milky Way Idle pôs captcha contra goldfarm no mercado em out/2025 ([C01, §6.2](../01-pesquisa/fichas/C01-milky-way-idle.md)); o IdleMMO reduziu duas vezes a frequência das verificações depois de reclamações; a do SimpleMMO é inacessível a leitores de tela ([04b, §4.4, item 6](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). [H] Regra: nenhum desafio de rotina para todos. Um desafio do servidor aparece só para contas com pontuação de risco média ou alta, sempre em formato acessível (uma decisão de jogo, não um quebra-cabeça visual), e quem não responde perde só a parte negociável daquele período, nunca o progresso ([G05, §13, item 5](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)).

### 3.4 Detecção

**AA-5. Pontuação de risco por conta, com ondas para redes.** [H] Cada conta tem uma pontuação de risco que soma sinais ponderados e perde peso com o tempo (meia-vida de 30 dias). Nenhum sinal fraco sozinho passa do atrito. A tabela traz os sinais.

| Sinal | O que mede | Força [H] | Falso positivo típico | Base |
|---|---|---|---|---|
| **Fluxo sem contrapartida** | Contas que dão valor a uma coletora; estrelas, pontes e ciclos (§9.2) | Forte | Família que ajuda um parente; guilda que abastece seu artesão | Redes de farmers do Aion e do EverQuest II ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Ligação forte entre contas** | Contas ativas com o mesmo pagador (cartão ou titular do Pix), a mesma chave de aparelho ou a mesma chave de recuperação, com fluxo de valor entre elas (§4.2) | Forte com fluxo; média sem fluxo | Casal que paga com o mesmo cartão; família | §4.2 |
| **Regularidade nas ações ativas** | Intervalo entre decisões na obra-prima, nas ordens e nos anúncios; mede-se a distribuição, não a média | Média a forte | Jogador muito metódico; atalhos de acessibilidade | AUC de 0,83 a 0,96 por autossimilaridade em três jogos da NCSOFT ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); 97% de acerto por intervalo entre ações no Aion ([07, §5.4](../01-pesquisa/07-tecnica-idles-online.md)) |
| **Ausência de ciclo de sono** | Ações ativas sem pausa longa por vários dias | Média | Turno de trabalho noturno | [07, §5.4](../01-pesquisa/07-tecnica-idles-online.md) |
| **Pedidos impossíveis e iscas** | Endpoint que o cliente oficial nunca chama; formato que a interface não gera | Forte para automação, fraca para intenção | Extensão de acessibilidade; cliente desatualizado | O MWI baniu por um dia por "pedidos inválidos ao mercado", reconheceu o erro e compensou ([07, §2.2](../01-pesquisa/07-tecnica-idles-online.md)) |
| **Saturação do teto** | Conta que bate o teto todo dia e escoa quase tudo por Troca | Média | Hardcore que vende tudo o que produz | §2.2 |
| **Aparelho e rede** | Muitas contas num aparelho ou numa rede | Fraca | Lan house, república, CGNAT de operadora móvel | [07, §5.5](../01-pesquisa/07-tecnica-idles-online.md) |
| **Meio de pagamento** | O mesmo cartão em várias contas | Média | Cartão da família | Impressão de cartão da Stripe ([07, §5.5](../01-pesquisa/07-tecnica-idles-online.md)) |
| **Denúncia de jogadores** | Relatos com evidência | Média | Briga e perseguição entre jogadores | ~15% dos banimentos de 2020 no EVE vieram de denúncias ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) |
| **Anúncio em site externo** | Personagem associado a venda de grande volume | Média; só aponta onde investigar a origem | Vendedor humano legítimo | §8.4 |

**Cadência [H]:**

- **Fazendas e redes:** em ondas, a cada 3 semanas. A onda derruba coletoras, mulas e "bancos" juntos e não revela qual sinal disparou ([04b, §4.4, item 3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). O custo é deixar a fazenda lucrar até a onda; o teto (AA-1) limita esse lucro.
- **Dupe, fraude de pagamento e roubo de conta:** resposta imediata, com congelamento do valor envolvido (§5, §6, §7).
- **Automação na própria conta:** contínua e escalonada (§3.5).
- **Manutenção:** iscas trocadas a cada versão; o modelo é revisto com os casos confirmados. [F] O método por autossimilaridade exige muitos dados de cada comportamento ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)): a calibração começa no alfa.

- **Inspira-se no** risco de troca do IdleMMO, nas pesquisas de rede da NCSOFT e na fila "sinal → pontuação → atrito → revisão" do [07, §5.4](../01-pesquisa/07-tecnica-idles-online.md).
- **Resolve** o que nenhuma regra de desenho pega: a rede de contas e a automação bem disfarçada.
- **Incentiva** (no jogador) o comportamento normal, que nunca sente a pontuação; (no estúdio) dados bem guardados no livro-razão.
- **Risco:** falso positivo contra famílias e lan houses. Mitigação: sinais fracos não punem (§4.5), revisão humana obrigatória e apelação (§11).

### 3.5 Resposta

**AA-6. Escada de sanções e banimento da pessoa.** [H]

| Infração | 1ª vez | Reincidência | Valor | Quem decide |
|---|---|---|---|---|
| Automação na própria conta, sem fazenda | Aviso; remoção do ganho atribuído às janelas automatizadas; 30 dias de atrito (desafios, limites menores) | Suspensão de 14 dias; na terceira, banimento | Remoção do que a automação rendeu nas janelas ativas | Revisão humana |
| Bot de mercado | Suspensão dos balcões por 30 dias; remoção do lucro estimado | Banimento | Lucro estimado, destruído | Revisão humana |
| Multiconta sem canalizar valor (ex.: segunda conta para ter mais ofícios) | Contas extras encerradas; o jogador escolhe a que fica | Banimento | Valor das contas extras, destruído | Revisão humana |
| Fazenda ou multiconta para canalizar valor | Banimento de todas as contas da rede, com marcação dos aparelhos e meios de pagamento ligados a ela | — | Todo o valor rastreado, destruído | Revisão humana confirmada por uma segunda pessoa |
| Conta alugada ou compartilhada | Conta suspensa até o dono retomar o controle com a chave de recuperação e o segundo fator; o valor gerado pelo operador é removido | Banimento do dono | Valor gerado no período, destruído | Revisão humana |
| Dupe ou exploit deliberado | Banimento | — | Remoção total pela regra de contaminação (§5.3) | Revisão humana |
| Fraude de pagamento confirmada | Banimento | — | Coins revogados e valor rastreável confiscado (§6.3) | Revisão humana |
| Roubo de conta ou golpe | Banimento; dados à autoridade mediante ordem judicial | — | Reversão (§7.3) | Revisão humana |

Regras gerais [H]:

- **O banimento alcança o que liga as contas,** não só a conta: aparelhos, meios de pagamento e chaves de recuperação ligados à conta banida ficam marcados pelo prazo da sanção, e uma conta nova que apareça com eles vai direto à revisão. Sem identidade verificada (checkpoint 3), não há como impedir a pessoa de voltar; dá para encarecer a volta. [F] O New World desligou o compartilhamento familiar do Steam citando, entre outras coisas, contas que burlavam banimentos ([G04, §6](../01-pesquisa/fichas/G04-new-world.md)).
- **O valor confiscado é destruído,** nunca revendido nem tratado como receita ([04b, §3.10](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). Para a simulação, é um dreno de fiscalização.
- **O valor de origem ilícita é removido de onde estiver,** pela regra de contaminação (§5.3): quem o recebeu por Troca sem contrapartida perde o que recebeu, inclusive quem pagou por ele em reais fora do jogo. Quem vendeu um bem ao infrator a preço de mercado fica com o que recebeu. Regra publicada antes do lançamento: **quem compra por fora compra o risco.** **Validar com advogado** a remoção de valor de quem pagou de boa-fé fora do jogo (CDC, art. 51, sobre cláusulas que imponham desvantagem exagerada; [05b, §4](../01-pesquisa/05b-rmt-legal-brasil.md)).
- **Valores pequenos não movem a máquina:** abaixo de um limite (ponto de partida: 4 Coins de valor de mercado, R$ 4; revisão de consistência: R17), o caso é registrado e só vira ação se fizer parte de uma rede.

- **Inspira-se nos** confiscos do Milky Way Idle (2 a 3 vezes o ganho) e do New World (mais de 80% do valor duplicado removido na primeira leva) ([04b, §3.9–3.10](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); **diferencia-se de** banimentos de comprador por compra fora do canal oficial, porque aqui o RMT informal não é infração.
- **Resolve** o lucro do abuso: o valor some, e voltar com outra conta exige aparelho, rede e meio de pagamento novos.
- **Incentiva** usar o Câmbio, que é seguro, em vez de comprar ouro de origem duvidosa.
- **Risco:** remover valor de quem pagou fora do jogo gera reclamação pública ("fui roubado pelo estúdio"). Mitigação: aviso na Troca e na política (§8.1), regra anterior à punição e proporcionalidade.

**Processos contra fabricantes de bots.** [F] Os processos MDY, Bossland e Impulse funcionaram contra fabricantes comerciais visíveis, levaram de dois a quatro anos e se apoiaram na evasão de proteção técnica (EUA) e na concorrência desleal (Alemanha) ([04b, §4.5](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). [H] Para manter a porta aberta: termos de uso com cláusula explícita contra bots e scripts de escrita; registro das evidências de cada fabricante comercial; ação só contra quem vende o bot. A via equivalente no Brasil não foi pesquisada: **validar com advogado.**

## 4. Multicontas e identidade

### 4.1 A regra: uma pessoa, uma conta ativa, um personagem

**AA-7.** [H] Cada pessoa tem no máximo **uma conta ativa**, e cada conta tem um personagem (bíblia, §5). A regra está nos termos de uso; sem verificação de identidade (checkpoint 3), ela é cobrada por detecção (§4.2). Neste jogo, uma segunda conta quebra mais coisas que num idle comum:

- **Interdependência de ofícios:** com dois ofícios mestres por personagem, três contas dão seis ofícios a uma pessoa, e o pilar "ninguém faz tudo" vira opcional.
- **Teto de emissão:** cada conta extra é mais um teto diário.
- **Conselho:** uma pessoa, um voto; cada conta extra é mais um voto.
- **Mérito e Encomendas:** alts que entregam para a mesma guilda inflam notas e prioridades.

- **Inspira-se no** Código de Conduta do IdleMMO, que permite uma conta por pessoa e aponta as cadeias de multicontas como a trapaça principal ([C04, §6](../01-pesquisa/fichas/C04-idlemmo.md)), e na conta-mestre do Idle Clans, criada para aplicar limites de personagens ([07, §5.5](../01-pesquisa/07-tecnica-idles-online.md)); **diferencia-se de** MWI e IdleMMO, que permitem vários personagens por conta.
- **Resolve** a multiplicação de tetos, ofícios e votos.
- **Incentiva** cooperar com outras pessoas em vez de jogar com os próprios alts.
- **Risco:** sem identidade verificada, a regra vira letra morta para quem não move valor entre as próprias contas. Mitigação: sinais de ligação (§4.2), teto por conta (AA-1), requisitos de voto do Conselho (módulo 09) e a sanção da §3.5.

### 4.2 Sem verificação: como a regra é cobrada

**AA-8 (refeita no checkpoint 3).** Decisão do Gabriel (2026-11-11): **nenhuma verificação de idade nem de identidade**, em nenhum momento: nem na entrada, nem para doar, abrir o Baú, usar o Bazar de Personagens ou recuperar a conta. O jogo continua 18+ pelos termos de uso (decisão 3 do checkpoint 1). Criar conta pede e-mail, senha (ou chave de acesso do aparelho) e a aceitação dos termos.

**Sinais que ligam contas [H],** do mais forte ao mais fraco:

1. **Fluxo de valor** entre contas (§9.2). É o sinal principal, porque mover valor é o motivo da multiconta que importa.
2. **Meio de pagamento:** o mesmo cartão (pela impressão de cartão do PSP) ou o mesmo pagador de Pix (o nome que o Pix informa ao recebedor) em mais de uma conta ativa. Só alcança quem doa. **Validar com advogado** o uso desse dado para antifraude (LGPD, art. 7º, IX, legítimo interesse; [05b, §5](../01-pesquisa/05b-rmt-legal-brasil.md)).
3. **Chave de recuperação e e-mail:** a mesma chave ou o mesmo e-mail de recuperação em contas diferentes.
4. **Chave de aparelho:** um identificador do navegador gravado pelo jogo e, se houver, o sinal de aparelho do serviço antifraude (a definir na Fase 4).
5. **Rede:** endereço e faixa de IP. Sinal fraco, por causa do CGNAT das operadoras e das lan houses (§4.5).
6. **Comportamento:** horários idênticos, ações em espelho, uma conta que sempre liga quando a outra desliga.

Nenhum sinal sozinho pune (§4.5). A sanção da §3.5 exige fluxo de valor somado a uma ligação forte, ou um padrão de comportamento confirmado por revisão humana.

**O que o estúdio guarda e o que nunca guarda [H]:**

| Dado | Guarda | Prazo | Nunca guarda |
|---|---|---|---|
| Conta | E-mail, hash da senha, 2FA, hash da chave de recuperação | Enquanto a conta existir | Documento, data de nascimento, rosto |
| Ligações | Chaves de aparelho e referências de pagamento ligadas à conta | Enquanto a conta existir; para conta banida, 5 anos após o banimento, para que a marcação valha | Número de cartão |
| Acesso | Registros de acesso (data, hora, IP) | 6 meses, como exige o Marco Civil (art. 15, [05b, §5](../01-pesquisa/05b-rmt-legal-brasil.md)) | Conteúdo de mensagens além do necessário à moderação |
| Pagamento | Fica com o PSP; o estúdio guarda a referência da transação e o nome do pagador que o PSP informa | Prazo fiscal | Número de cartão |

As ligações e os registros de acesso ficam num banco separado do banco do jogo, com acesso por dupla aprovação, e o livro-razão referencia a pessoa só pelo ID da conta ([07, §2.6](../01-pesquisa/07-tecnica-idles-online.md)). **Validar com advogado** os prazos de guarda.

- **Inspira-se no** IdleMMO, que permite uma conta por pessoa sem pedir documento e aponta as cadeias de multicontas como a trapaça principal ([C04, §6](../01-pesquisa/fichas/C04-idlemmo.md)), e na leitura do [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md) de que o fluxo de valor é o sinal principal e aparelho e rede são auxiliares.
- **Resolve** a multiconta que importa (a que move valor), sem pedir documento a ninguém e sem custo por conta nova.
- **Incentiva** cooperar com outras pessoas: alts que trocam valor entre si acabam ligados.
- **Risco:** a multiconta que não move valor (uma segunda conta para ter mais ofícios ou mais votos) é difícil de achar. Mitigação: requisitos de voto do Conselho (módulo 09), sinais de comportamento e sanção branda (encerrar as contas extras, não banir).

### 4.3 Criação da conta

[H] O prólogo do [12](12-onboarding.md) é jogado sem conta. A conta é criada ao chegar à Cidade, sem verificação: e-mail, senha ou chave de acesso, aceitação dos termos (que dizem que o jogo é 18+) e a **chave de recuperação**, gerada na hora e mostrada uma vez. O convite ao 2FA aparece no primeiro dia, porque sem retenção de saída (checkpoint 3) ele é a principal proteção da conta (§7.1).

### 4.4 Reverificação por gatilho

**AA-9 retirada no checkpoint 3.** Sem verificação de identidade, não há reverificação. Os casos que ela cobria passam a:

- **recuperação de conta:** chave de recuperação e segundo fator, ou revisão humana do histórico da conta (§7.3);
- **Bazar de Personagens:** e-mail, senha, 2FA e chave de recuperação trocados na liquidação (§7.5);
- **conta alugada:** sanção da §3.5; o dono retoma o controle com a chave de recuperação e o segundo fator.

### 4.5 Famílias, repúblicas e lan houses

**AA-10.** [H] Regras:

- Dois adultos na mesma casa jogam, cada um com sua conta. Isso é permitido e esperado.
- **IP, aparelho e rede nunca punem sozinhos.** [H] Operadoras móveis e redes domésticas compartilham endereços entre muitos clientes ([07, §5.5](../01-pesquisa/07-tecnica-idles-online.md)). [F] O bloqueio de trocas por "mesmo dispositivo/rede" do SimpleMMO teve falsos positivos relatados ([C05, §6](../01-pesquisa/fichas/C05-simplemmo.md)).
- **Vínculo declarado (opcional):** jogadores podem declarar "mesma casa". Efeito: aparelho e rede compartilhados deixam de pesar na pontuação entre eles; o fluxo de valor entre eles continua contando, com peso menor; os dois não disputam o mesmo Leilão um contra o outro (a reconciliar com 07).
- **Lan house e aparelho público:** uma sessão de controle por conta ([07, §4.2](../01-pesquisa/07-tecnica-idles-online.md)), botão "sair de todos os aparelhos", aviso para não salvar senha e convite ao 2FA.
- **Conta compartilhada é proibida:** a conta pertence a quem a criou ou a comprou no Bazar de Personagens. A necessidade que leva a emprestar a senha (não perder dias de jogo) é atendida pelo offline de 24 h e pela Fila planejada.

- **Inspira-se na** recomendação do [04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md) ("o fluxo de valor é o sinal principal; dispositivo e rede, sinais auxiliares"); **diferencia-se do** SimpleMMO.
- **Resolve** o falso positivo mais provável no Brasil, onde rede e aparelho compartilhados são a regra.
- **Incentiva** declarar a casa em vez de esconder.
- **Risco:** fazendas se declaram "mesma casa" para pesar menos na pontuação. Mitigação: o vínculo declarado não muda a ligação por meio de pagamento nem o grafo de fluxo; uma casa com mais de 6 contas declaradas vai para revisão.

## 5. Exploits e duplicação

[H] Com RMT, um dupe deixa de ser só inflação e vira saque de dinheiro real ([G04, §8](../01-pesquisa/fichas/G04-new-world.md)). [F] No New World, jogadores relataram venda de ouro duplicado por dinheiro real, com ganhos de centenas de dólares em horas, e preços de recursos até mil vezes maiores em alguns servidores ([G04, §6](../01-pesquisa/fichas/G04-new-world.md)).

### 5.1 Requisitos para a Fase 4

Requisitos de processo e de desenho, sem código. Cada um responde a um modo de falha documentado.

| # | Requisito | Modo de falha que evita | Base |
|---|---|---|---|
| 1 | **Livro-razão de partidas dobradas** para toda moeda e todo item (P9): contas de fonte, de dreno e de trânsito; soma zero; correção só por estorno | Dupe que ninguém vê; valor sem origem | [07, §2.5](../01-pesquisa/07-tecnica-idles-online.md); [G07, §7](../01-pesquisa/fichas/G07-economias-que-colapsaram.md) |
| 2 | **Uma transação por operação**, com travas em ordem fixa e repetição segura em conflito | Troca não atômica sob lag | [07, §5.2](../01-pesquisa/07-tecnica-idles-online.md); [G04, §10.2](../01-pesquisa/fichas/G04-new-world.md) |
| 3 | **Chave de idempotência** em todo pedido que move valor | Pedido repetido que cria item novo | [07, §2.4](../01-pesquisa/07-tecnica-idles-online.md) |
| 4 | **Item único com uma só localização**, garantida pelo banco | Dupe da decoração do New World | [G04, §10.2, item 5](../01-pesquisa/fichas/G04-new-world.md) |
| 5 | **Restrições no banco:** saldo e quantidade nunca negativos; tetos de quantidade | Números negativos do Growtopia; estouro do MapleStory | [07, §5.1](../01-pesquisa/07-tecnica-idles-online.md); [G07, §2.9](../01-pesquisa/fichas/G07-economias-que-colapsaram.md) |
| 6 | **Relógio do servidor** para Fila, offline, efeitos e prazos | Relógio do aparelho manipulado | [07, §1.5](../01-pesquisa/07-tecnica-idles-online.md) |
| 7 | **Testes com pedidos simultâneos** em todo endpoint de valor, inclusive a técnica do "pacote único" | Corrida entre a verificação e a ação | [07, §5.1](../01-pesquisa/07-tecnica-idles-online.md) (PortSwigger: 20 a 30 pedidos com ~1 ms de dispersão) |
| 8 | **Caminho de exceção testado** como o caminho feliz: estorno, cancelamento, expiração, disjuntor | Estorno que devolve custo nunca cobrado | [G04, §10.2, item 3](../01-pesquisa/fichas/G04-new-world.md) |
| 9 | **Reconciliação contínua** entre saldos e livro-razão, com alarme a qualquer diferença | Duas fontes da verdade | [07, §2.5 e §5.1](../01-pesquisa/07-tecnica-idles-online.md) |
| 10 | **Alarmes de criação de valor:** ouro criado por hora por fonte, itens raros por hora, preço do Coin em 24 h | Dupe que se espalha antes de ser visto | [G07, §5](../01-pesquisa/fichas/G07-economias-que-colapsaram.md) (EQ2 pegou +20% em 24 h) |
| 11 | **Red team de economia e programa de recompensa por bugs** antes da abertura; teste de carga nos picos | Exploit que vinha do beta | [G04, §10.3](../01-pesquisa/fichas/G04-new-world.md) |
| 12 | **Texto de jogador sempre escapado** (chat, nomes, anúncios) e política de segurança de conteúdo no cliente | Injeção no chat que, no navegador, rouba a sessão | [G04, §10.2, item 7](../01-pesquisa/fichas/G04-new-world.md) |
| 13 | **PWA com offline só de leitura** (decisão vigente da bíblia, seção 5): sem rede, o cliente mostra o último estado que o servidor confirmou (Relatório da volta, Fila, inventário, preços com a hora da cotação), e todo botão que move valor fica desabilitado. Rascunhos (reordenar a fila, preparar uma lista de vendas) ficam no aparelho e só são enviados quando o jogador confirma, já online, com nova validação do servidor ([14](14-arte-e-ui.md), seção 2.7). Nenhuma ação entra em fila local para ser reenviada sozinha. O servidor é a única verdade (revisão de consistência: R12) | Ação feita offline e reenviada depois: pedido repetido, ordem a preço velho, relógio do aparelho usado para adiantar a Fila | [14](14-arte-e-ui.md) (PWA); requisitos 3 e 6 desta tabela |

### 5.2 Disjuntores por sistema

**AA-11.** [H] Cada sistema que move valor tem um disjuntor próprio. O disjuntor **bloqueia a entrada** de novas operações; nunca interrompe o meio de uma operação.

| Disjuntor | O que suspende | O que continua |
|---|---|---|
| Troca | Novas trocas | Trocas já confirmadas liquidam |
| Bolsa | Novas ordens | Ordens abertas ficam congeladas, sem casar; cancelar é permitido e devolve a garantia |
| Feira | Novos anúncios e compras | Cancelar anúncio |
| Leilão | Novos lances e leilões | Leilões em andamento: relógio pausado e prorrogado pelo tempo suspenso |
| Câmbio | Compra e venda de Coins por ouro | Consumo do Coin |
| Bazar de Personagens | Novos anúncios e lances | Vendas em andamento pausadas |
| Baú Misterioso | Compra com Coins; abertura (disjuntor separado) | Baús guardados |
| Por item | Listar e transferir aquele item | Usar o item |
| Por moeda | Transferir ouro ou Coins | Gastar com NPC, Obras e consumo |
| Obras e Encomendas | Entregas | Leitura do progresso |
| Pagamento (cartão, Pix, separados) | Compras por aquele meio | Os outros meios |

Regras [H]:

- **Quem aciona:** a pessoa de plantão aciona; uma segunda pessoa confirma em até 30 minutos. Sem confirmação, o disjuntor continua ligado e o caso sobe para o responsável (errar para o lado seguro).
- **Disparo automático** só por item ou por moeda, nunca por balcão inteiro: por exemplo, criação de um item raro cinco vezes acima do orçamento da hora.
- **Comunicação** pública em até 15 minutos, com motivo genérico, sistemas afetados e próxima atualização; revisão a cada 2 horas.
- **Teste:** cada disjuntor é ligado e desligado em ambiente de teste a cada versão, com operações em andamento, como qualquer funcionalidade.

- **Inspira-se na** suspensão de negociação das bolsas e nos disjuntores do ESO e do Diablo IV, que contiveram dupes em horas ([G07, §2.10](../01-pesquisa/fichas/G07-economias-que-colapsaram.md)); **diferencia-se do** desligamento total do New World.
- **Resolve** a propagação de um dupe sem congelar o resto da economia.
- **Incentiva** reportar e esperar, com confiança de que o problema é local.
- **Risco:** o disjuntor mal testado cria o próprio dupe. Mitigação: só bloqueia a entrada; teste obrigatório a cada versão.

### 5.3 Rastreio e remoção sem rollback geral

**AA-12. Regra de contaminação.** [F] O New World não fez rollback: removeu mais de 80% do valor duplicado na primeira leva de banimentos e, depois de rastrear moedas e itens, 98% do restante; quem esbarrou no bug sem explorá-lo não foi banido ([07, §5.1](../01-pesquisa/07-tecnica-idles-online.md)). [H] Processo:

1. **Achar a origem:** lançamentos sem fonte válida, ou com fonte válida usada por uma regra com defeito.
2. **Marcar o valor como contaminado** e congelá-lo onde estiver.
3. **Seguir o valor pelo livro-razão:**

| Caminho do valor contaminado | O que acontece |
|---|---|
| Ainda na conta de quem o criou | Removido |
| Passou por Troca sem contrapartida | Removido de quem recebeu |
| Pagou um bem de terceiro a preço dentro da banda de referência | O terceiro fica com o ouro; o bem é retirado de quem o comprou com valor contaminado e destruído |
| Pagou um bem acima da banda (anúncio absurdo) | O excesso é tratado como Troca sem contrapartida e removido |
| Foi consumido (reparo, Obra, taxa) | Baixado como perda registrada; nada a remover |

4. **Quem esbarrou sem explorar:** sem punição; o valor é removido. **Quem reportou:** recompensa do programa de bugs, paga em cosmético ou item preso à conta, nunca em ouro ou Coins.
5. **Quem explorou de propósito:** banimento e remoção total.
6. **Publicar:** o que aconteceu, quanto valor foi removido, quantas contas foram punidas.

**Rollback geral:** nunca como primeira resposta. [H] Só se a integridade do próprio livro-razão for perdida, e mesmo assim por sistema, com política escrita antes do lançamento ([G07, §7](../01-pesquisa/fichas/G07-economias-que-colapsaram.md)). [H] Restaurar backup é um rollback global e uma fábrica clássica de dupe ([07, §4.5](../01-pesquisa/07-tecnica-idles-online.md)).

- **Inspira-se no** New World e no Star Wars Galaxies, que baniu também quem recebeu moeda duplicada ([G07, §2.14](../01-pesquisa/fichas/G07-economias-que-colapsaram.md)); **diferencia-se do** Growtopia, que fez rollback de 24 horas ([07, §5.1](../01-pesquisa/07-tecnica-idles-online.md)).
- **Resolve** o dupe sem punir quem jogou honestamente.
- **Incentiva** vender a preço justo (o vendedor honesto fica protegido) e reportar bugs.
- **Risco:** a regra é complexa de explicar. Mitigação: publicada no lançamento, com exemplos, e aplicada sempre do mesmo jeito.

## 6. Fraude de pagamento e chargeback

### 6.1 Os prazos que a defesa enfrenta

- [F] No cartão, o titular tem em geral cerca de 120 dias para contestar uma compra por fraude; no Pix, a vítima pode pedir o MED em até 80 dias, e desde 1/9/2026 o recebedor tem 80 dias para contestar uma devolução indevida (fontes de mercado e de imprensa, a confirmar com o adquirente) ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)).
- [F] O MED serve para golpe, fraude e falha operacional, não para desacordo comercial; o MED 2.0, obrigatório desde 2/2/2026, rastreia o dinheiro além da primeira conta e permite bloquear valores nas contas seguintes ([05b, §6](../01-pesquisa/05b-rmt-legal-brasil.md)).
- [F] A Visa marca como "excessivo" o lojista acima de 1,5% de disputas desde 1/4/2026 (dado de fornecedores de pagamento) ([05c, §5.1](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)). A Xsolla cita 0,83% como média de chargebacks em jogos, sem metodologia publicada, e uma pesquisa do setor diz que quase 44% das disputas são fraude "amigável" ([05c, §5.3](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)).

[H] Nenhuma carência cobriria 80 a 120 dias sem matar o produto e, pela decisão do Gabriel (checkpoint 3), não há carência alguma: o Coin recém-doado pode ser transferido na hora. A defesa contra fraude fica com a autenticação do emissor, o disjuntor de pagamentos (§6.4), a detecção e a reversão pelo livro-razão ([05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md)).

### 6.2 Sem carência do Coin

**AA-13 retirada no checkpoint 3.** A salvaguarda S2 do checkpoint 1 (carência por meio de pagamento) foi recusada pelo Gabriel: os Coins doados podem ser gastos, transferidos, vendidos no Câmbio ou usados no Bazar de Personagens na hora, por qualquer meio de pagamento.

**Consequência registrada uma vez [H]:** o golpe rápido (cartão roubado → Coins → Troca ou Câmbio → ouro → venda por Pix) fica aberto. A conta contestante é suspensa (§6.3), mas o valor já saiu; o estorno e a tarifa da contestação caem sobre o estúdio. Mitigações que não atrasam a transferência:

- autenticação do emissor (3DS) obrigatória no cartão; [NV] com ela, o prejuízo da fraude tende a passar ao emissor do cartão, a confirmar com o adquirente;
- Pix como meio principal, sempre o primeiro da lista ([11](11-monetizacao.md), seção 2.3);
- teto de compras nas primeiras 24 horas da conta e disjuntor de pagamentos (§6.4);
- rastreio da cadeia pelo livro-razão, com banimento de quem participou da fraude e remoção do valor recebido sem contrapartida (§5.3).

**CDC, art. 49.** Sem carência, some a coincidência com os 7 dias de arrependimento: o Coin pode ser transferido ou consumido no primeiro minuto, e a posição do módulo 11 (Coin transferido ou consumido conta como usado, sem reembolso) fica mais exposta. **Validar com advogado** ([05b, §4](../01-pesquisa/05b-rmt-legal-brasil.md)).

### 6.3 Reversão pelo livro-razão

**AA-14. Decisão do Gabriel (2026-11-11):** o pagamento é uma doação, sem reembolso por parte do estúdio. Quando o banco desfaz um pagamento por conta própria (chargeback no cartão, MED do Pix), **a conta fica suspensa até regularizar**. Regra publicada antes do lançamento:

| Caso | Resposta |
|---|---|
| Contestação forçada pelo banco (chargeback ou MED) | A conta fica **suspensa até regularizar**: o jogador refaz a doação do valor contestado e a conta volta. Os Coins contestados que ainda estão na conta são revogados. |
| Coins (ou derivado) já transferido a um terceiro de boa-fé | O terceiro fica com ele; a regularização do contestante cobre a perda. Sem carência (checkpoint 3), este é o caso comum na fraude rápida. |
| Fraude confirmada (cartão de terceiro, conta de golpe) | Banimento das contas envolvidas após revisão; confisco do valor rastreável, inclusive do que foi recebido sem contrapartida (§5.3). |
| Contestação por engano, depois desfeita | Suspensão encerrada, tudo restaurado. |

**Suspensão até regularizar:**

- a suspensão vem com aviso do motivo, do valor a regularizar e do canal de apelação, com resposta em até 5 dias úteis [H];
- enquanto suspensa, a conta não joga, não negocia e não vota; nada do que ela tem é apagado;
- regularizar é refazer a doação do valor contestado; a conta volta no estado em que estava.

- **Inspira-se na** prática dos servidores de Tibia citada pelo Gabriel, e se diferencia da dívida em ouro do Throne and Liberty e do Lost Ark ([F09](../01-pesquisa/fichas/F09-throne-and-liberty-e-lost-ark.md)), proposta na primeira versão deste módulo.
- **Resolve** a perda do estúdio quando o valor já mudou de mãos, sem tirar nada do terceiro de boa-fé.
- **Incentiva** não contestar doações legítimas.
- **Risco (registrado uma vez, assumido pelo Gabriel):** nos EUA, a FTC puniu a Epic por bloquear as contas de quem contestava cobranças ([05c, §3.1](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)); no Brasil, bloquear a conta inteira pode ser questionado como prática abusiva no CDC. Mitigação: aviso claro, apelação rápida e regra publicada antes do lançamento. Também há o caso do dono da conta que é vítima (cartão clonado por terceiro): a apelação separa vítima de fraudador.

### 6.4 Resposta proporcional e disjuntor de pagamentos

**AA-15.** [H]

- **Suspensão com processo** (AA-14): toda suspensão por contestação traz aviso, valor a regularizar e canal de apelação, com resposta em até 5 dias úteis. [F] Nos EUA, a FTC acusou a Epic de bloquear as contas de quem contestava cobranças não autorizadas, num acordo de US$ 245 milhões em reembolsos ([05c, §3.1](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)); revisar antes de abrir o jogo para os EUA.
- **Disjuntor de pagamentos:** se disputas mais fraudes confirmadas passarem de 0,8% das compras por cartão numa janela de 30 dias, a compra por cartão fica suspensa para contas sem histórico; acima de 1,2%, a compra por cartão fica suspensa para todas as contas até a taxa voltar abaixo de 0,8%. O Pix continua. É um limiar bem abaixo do 1,5% da Visa.
- **Contra o teste de cartões roubados:** autenticação do emissor obrigatória; limite de tentativas recusadas por conta e por cartão; teto de compras nas primeiras 24 horas da conta (o teto de gasto em si é do módulo 11).
- **MED no Pix:** o estúdio é o recebedor. Uma devolução por MED entra como estorno (tabela da §6.3); se o estúdio considerar a devolução indevida, contesta dentro do prazo.
- **MED no RMT informal:** quando um jogador vende ouro por Pix e o comprador paga com dinheiro de golpe, o MED atinge a conta bancária do vendedor. O estúdio não é parte desse negócio e não interfere; age só com ordem judicial (§8.1).

- **Inspira-se na** lição do caso Epic ([05c, §3.1](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)) e no disjuntor de disputas do [05d, §5.4](../01-pesquisa/05d-rmt-recomendacao.md).
- **Resolve** o ataque de cartões que poria o estúdio acima do limite das bandeiras e faria o gateway encerrar a conta.
- **Incentiva** o Pix, que não tem chargeback de cartão.
- **Risco:** suspender o cartão prejudica o pagante honesto num mês de ataque. Mitigação: o disjuntor vale só para contas sem histórico; o Pix fica sempre disponível.

## 7. Contas roubadas e golpes

[F] Em dezembro de 2015, cerca de 77 mil contas da Steam eram invadidas por mês, e a Valve respondeu retendo por até 3 dias os itens de trocas de quem não tinha o autenticador móvel ativo havia pelo menos 7 dias ([The Next Web, 10/12/2015](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it)). [F] Em 2013, ouro de contas invadidas do WoW foi lavado em leilões falsos ([04b, §4.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). [H] Num jogo de navegador com valor em reais, a conta é uma carteira, e o leilão é a lavanderia do ladrão.

### 7.1 Segundo fator, alertas e sessões

**AA-16.** [H]

- **Segundo fator (2FA):** chave de acesso do aparelho (passkey) ou app autenticador; SMS só como último recurso, por causa da troca fraudulenta de chip.
- **Exigido para:** anunciar ou comprar no Bazar de Personagens; mudar e-mail, senha, 2FA ou chave de recuperação; criar chave de API de nível pessoal.
- **Pedido, mas não exigido,** para vender Coins no Câmbio e para Troca de saída acima de 20 Coins de valor de mercado (R$ 20; revisão de consistência: R17): quem tem 2FA ativo confirma com ele na hora; quem não tem transfere na hora, com um aviso (checkpoint 3: transferência imediata, sem freio).
- **Alerta de login** em aparelho novo, por e-mail e no jogo, com o botão "não fui eu", que encerra todas as sessões e congela as saídas de valor.
- **Uma sessão de controle por conta:** o segundo aparelho vê tudo, mas, para agir, assume o controle, e o primeiro é avisado ([07, §4.2](../01-pesquisa/07-tecnica-idles-online.md)).

- **Inspira-se no** autenticador móvel da Steam e na conta-mestre com 2FA do Idle Clans ([C02](../01-pesquisa/fichas/C02-idle-clans.md)).
- **Resolve** o roubo por senha vazada, a forma mais comum e mais barata.
- **Incentiva** ativar o 2FA cedo: sem retenção de saída (§7.2), ele é a principal proteção contra o esvaziamento da conta.
- **Risco:** o jogador perde o aparelho com o 2FA e fica trancado. Mitigação: códigos de reserva e chave de recuperação (§7.3).

### 7.2 Sem retenção de saída

**AA-17 retirada no checkpoint 3.** Não há retenção de saída em aparelho novo nem retenção do valor recebido de conta com pontuação alta: a transferência é imediata. Fica só o que o próprio dono aciona: o botão "não fui eu" (§7.1) congela as saídas da conta até ele retomar o controle.

**Consequência registrada uma vez [H]:** quem rouba a senha de uma conta sem 2FA pode esvaziá-la nas primeiras horas, antes de a vítima perceber. [F] Foi o problema que a Steam enfrentou retendo por até 3 dias os itens de quem não tinha o autenticador móvel ([The Next Web, 10/12/2015](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it)). Aqui, a proteção fica com o 2FA, os alertas e a reversão do roubo provado (§7.3).

**Por que não uma Troca reversível pelas partes.** [F] Desde julho de 2025, na Steam, o item recebido fica travado por 7 dias e qualquer um dos lados pode desfazer a troca ([G05, quadro sobre o CS2](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). [H] Com o RMT informal aberto, esse direito viraria golpe oficial: o vendedor recebe o Pix e desfaz a Troca. Aqui, só o estúdio reverte, e só em roubo confirmado.

### 7.3 Recuperação e reversão de roubo

**AA-18.** [H]

- **A recuperação volta para quem tem a chave de recuperação** (gerada na criação da conta e mostrada uma vez) e o histórico da conta (e-mail original, aparelhos, meios de pagamento). Consequência: comprar conta fora do Bazar de Personagens é inseguro por construção, porque o dono original guarda a chave e o histórico e pode recuperá-la a qualquer momento. [F] No Tibia, antes do Char Bazaar, o sistema de recuperação de conta era acionado com frequência por compradores de contas ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)).
- **Passos:** chave de recuperação ou, sem ela, revisão humana do histórico da conta; aviso em todos os canais e 72 horas antes de trocar e-mail e 2FA, salvo com a chave de recuperação; encerramento de todas as sessões.
- **Reversão na janela do roubo** (do primeiro sinal até a recuperação):
  - Troca sem contrapartida: removida de quem recebeu e devolvida à vítima;
  - venda a preço fora da banda de referência: desfeita;
  - venda a preço justo a um terceiro: mantida (o ouro da venda está na conta da vítima, salvo se saiu);
  - Coins consumidos pelo ladrão: não volta.
- **Restituição:** o estúdio devolve o que recuperou. Só cria valor novo para compensar (lançamento de fonte "restituição", com teto e registro) se o roubo veio de falha do estúdio, como uma vulnerabilidade ou um vazamento.
- **O ladrão:** banimento das contas e marcação das ligações (§3.5) e entrega de dados à autoridade mediante ordem judicial (Marco Civil, art. 15, [05b, §5](../01-pesquisa/05b-rmt-legal-brasil.md)).

- **Inspira-se na** promessa da Blizzard de devolver ouro e itens depois dos leilões falsos de 2013 ([04b, §4.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) e na regra de contaminação (§5.3).
- **Resolve** o roubo sem criar ouro do nada a cada caso.
- **Incentiva** o 2FA: quem foi roubado por falta dele recebe só o que foi recuperado.
- **Risco:** a vítima sem 2FA se sente abandonada. Mitigação: a regra é publicada e lembrada no cadastro e no primeiro anúncio de alto valor.

### 7.4 Avisos contra golpe

**AA-19.** [H]

- **Na Troca:** resumo em linguagem simples com o valor de mercado de cada lado ("Você dá: 120.000 de ouro, cerca de 160 Coins. Você recebe: nada."; com o Coin a ~750 de ouro; revisão de consistência: R17); alerta de Troca unilateral; aviso de primeira Troca com aquela pessoa; qualquer mudança zera as duas confirmações e impõe 5 segundos de espera. A Troca é atômica: ou os dois lados acontecem, ou nenhum.
- **No chat:** links escapados e com aviso; domínios conhecidos de phishing bloqueados; nomes reservados ("Suporte", "Bazar", "Conselho"); selo de equipe só pelo sistema; aviso fixo de que o estúdio nunca pede senha nem código.
- **Sobre o RMT informal:** aviso fixo na Troca e no perfil ("negócio em dinheiro fora do jogo não tem garantia nem suporte"); na Troca unilateral grande, um lembrete de golpes com Pix e MED.
- **Sobre contas:** "conta comprada fora do Bazar de Personagens pode ser recuperada pelo dono original a qualquer momento".
- **Anúncios de venda por dinheiro real nos canais oficiais** (chat global, fórum, servidor oficial no Discord) são tratados como spam e removidos. Isso não proíbe o RMT informal; só não o hospedamos (§8).

- **Inspira-se na** confirmação de desvio de preço do Idle Clans ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) e no checklist de chat escapado do New World ([G04, §13](../01-pesquisa/fichas/G04-new-world.md)).
- **Resolve** os golpes que dependem de distração: Troca trocada na última hora, falso suporte, link falso.
- **Incentiva** conferir antes de confirmar.
- **Risco:** excesso de avisos vira ruído e ninguém lê. Mitigação: avisos só nos casos de risco (Troca unilateral, primeira Troca, valor alto); o resto é discreto. O módulo 14 desenha as telas.

### 7.5 Bazar de Personagens: transferência segura de contas

**AA-20.** O Bazar de Personagens existe desde o lançamento, pago em Coins, com taxa de 10% em Coins destruída (bíblia, §6.6). Este módulo define as regras de segurança [H]:

| Etapa | Regra | Por quê |
|---|---|---|
| **Anunciar** | Conta com 30+ dias, 60+ h de jogo ativo medido, 2FA há 7+ dias, sem suspensão por contestação (decisão vigente da bíblia, seção 5; revisão de consistência: varredura), sem investigação e com pontuação de risco baixa | Barra conta nivelada por bot e conta roubada |
| **Preparar** | Sai de cargo no Conselho (conselheiro não vende durante o mandato); sai da guilda; ordens abertas canceladas com devolução da garantia; Encomendas em andamento entregues ou abandonadas | A conta muda de dono sem levar compromissos coletivos. [F] O Tibia exige personagem fora de guilda e sem casa ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)) |
| **Vender** | Pago em Coins; reserva de 10% do lance, perdida se o vencedor não pagar; sem lance da própria pessoa nem de contas com vínculo declarado | [F] Reserva de 10% do Char Bazaar ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)) |
| **Transferir** | Na liquidação, o personagem muda para a conta do comprador (D19, [arquitetura](../04-arquitetura.md), §4.6); as sessões do vendedor no personagem são encerradas; nenhuma senha, e-mail ou chave de recuperação muda de mãos; o vendedor fica com a conta, o ouro, os Coins, o Mérito e o armazém ([07](07-economia.md), §7.3) | Fecha o golpe da recuperação: não há credencial a recuperar |
| **Depois** | Comprador: 30 dias sem votar nem se candidatar no Conselho; 90 dias sem revender. O perfil mostra "transferida pelo Bazar de Personagens em mês/ano" | Captura do Conselho; revenda especulativa |
| **Limites** | Uma venda por conta vendedora a cada 90 dias; vendedores ligados entre si (§4.2) contam juntos | Fábrica de contas |

**Um personagem ativo por conta, também no Bazar de Personagens (D19).** O personagem comprado entra numa conta nova ou na conta atual do comprador. Na conta atual, o personagem que já estava lá vai para a **aposentadoria**: arquivado, sem jogar nem negociar, reativável trocando de lugar com o ativo no máximo uma vez a cada 90 dias. [H] Os dois personagens nunca ficam ativos ao mesmo tempo, então não há Troca entre eles.

- **Inspira-se no** Char Bazaar do Tibia, que tirou do mercado negro a venda de contas e o golpe da recuperação e venceu pela segurança, não pelo preço ([F04, §6.2](../01-pesquisa/fichas/F04-tibia.md)); e nas regras sugeridas no [05d, §4.2](../01-pesquisa/05d-rmt-recomendacao.md) (horas de jogo ativo, carência para competir).
- **Resolve** a venda de contas sem garantia e a recuperação usada como golpe.
- **Incentiva** investir no personagem como patrimônio e vender pelo canal seguro ao sair.
- **Risco:** o Bazar de Personagens vende tempo acumulado e distorce rankings e o Conselho. Mitigação: horas de jogo ativo como requisito, carência de voto, perfil com histórico de transferência; os rankings de prestígio podem marcar contas transferidas (a reconciliar com 09).

## 8. RMT informal

### 8.1 Política pública

**AA-21.** Decisão do Gabriel: o RMT informal não é intermediado pelo estúdio e não é proibido ([PROGRESSO](../PROGRESSO.md)). [H] Texto-base da política, para a página pública e os termos de uso:

> **Negócios com dinheiro real fora do jogo.** O Coin é a forma oficial de pôr dinheiro no jogo. Fora dele, jogadores podem combinar entre si a venda de ouro, itens ou Coins por dinheiro. O estúdio não proíbe, mas também não participa: não intermediamos, não garantimos, não damos suporte, não arbitramos disputas e não devolvemos perdas de negócios feitos fora do jogo.
> Contas só mudam de dono pelo Bazar de Personagens.
> São proibidos: bots e scripts que jogam por você, mais de uma conta ativa por pessoa, conta compartilhada ou alugada, roubo de contas, golpes, fraude de pagamento e exploração de falhas. O valor que nasce dessas práticas é removido de onde estiver, inclusive de quem o comprou fora do jogo. Quem compra por fora compra o risco.

**Termos de uso: cláusulas mínimas [H]** (todas a **validar com advogado**, em especial diante do CDC, art. 51, sobre cláusulas abusivas, e do fato de o jogo vender itens por reais, que fragiliza cláusulas de "itens sem valor" ([05b, §4](../01-pesquisa/05b-rmt-legal-brasil.md))):

1. o estúdio não é parte de negócios entre jogadores feitos fora do jogo;
2. uma pessoa, uma conta ativa; conta pessoal e intransferível, salvo pelo Bazar de Personagens;
3. proibição de automação de escrita, de multiconta e de conta alugada, com as sanções da §3.5;
4. remoção de valor de origem ilícita onde estiver (§5.3), com aviso de que isso alcança quem comprou por fora;
5. suspensão até regularizar em caso de contestação forçada pelo banco (§6.3);
6. cooperação com autoridades mediante ordem judicial.

**Risco jurídico assumido, sem reabrir a decisão.** [H] RMT informal aberto, Baú Misterioso comprável com Coins e conteúdo negociável juntam pagamento, sorte e prêmio com valor em dinheiro, a configuração que os estudos jurídicos marcaram como luz vermelha ([05b, §3](../01-pesquisa/05b-rmt-legal-brasil.md)). [F] No processo de Nova York contra a Valve, a tolerância a mercados de terceiros é parte da acusação de jogo ilegal ([05c, §3.4](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)). O que este módulo faz para não piorar o quadro: não promover, não integrar, não lucrar com o RMT informal e combater a origem ilícita do valor. Sem verificação de idade (checkpoint 3), o Baú pago fica no caso que o ECA Digital proíbe: caixas de recompensa em jogos de acesso provável por menores ([Lei 15.211/2025, art. 20](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm); Decreto 12.880/2026, arts. 18 e 23), e a classificação 18 não substitui a verificação (MJSP, NT 55/2026; [05b, §2](../01-pesquisa/05b-rmt-legal-brasil.md)). Risco assumido pelo Gabriel. **Validar com advogado.**

### 8.2 Nenhuma integração com sites de RMT

[H] Parte da AA-21:

- nenhuma API, integração, login social, parceria, afiliação, anúncio ou patrocínio de sites de venda de ouro, contas ou bots;
- o programa de criadores de conteúdo proíbe patrocínio desses sites;
- a API oficial não tem escrita (§10), então nenhum site consegue automatizar entregas.

[F] A integração do Lasthlas com a ItemMania gerou investigação na Coreia ([05c, "Como isso pode dar errado", item 4](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)).

- **Inspira-se na** política contra RMT ilegal do [05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md), adaptada: lá se propunha proibir o RMT informal; aqui ele não é proibido, mas também não é apoiado.
- **Resolve** a confusão entre "o estúdio tolera" e "o estúdio participa".
- **Incentiva** o Câmbio, o canal oficial e seguro.
- **Risco:** jogadores leem a falta de suporte como descaso. Mitigação: a política explica o porquê e aponta o Câmbio e o Bazar de Personagens como alternativas seguras.

### 8.3 Por que não arbitrar nem oferecer garantia

[H] Um depósito em garantia (escrow) para negócios em reais, ou um canal de disputa, tornaria o estúdio intermediador do RMT, o que a decisão do Gabriel exclui e o que traria o pacote de pagamentos, PLD e tributo de plataforma ([05b, §6, §8 e §9](../01-pesquisa/05b-rmt-legal-brasil.md)). Dentro do jogo, a Troca já é atômica: ouro por item nunca dá golpe. O golpe possível está do lado do dinheiro, fora do jogo.

### 8.4 Índice cinza: medir o preço do ouro em sites externos

**AA-22.** [H]

- **Coleta:** semanal, em páginas públicas de sites de venda de ouro e de contas (por exemplo, GGMAX e PlayerAuctions, citados no [05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md)) e em grupos públicos. Registra-se o preço anunciado por milhão de ouro, em reais.
- **Índice cinza:** mediana semanal desse preço, comparada com o preço oficial (cotação do Coin no Câmbio × preço do Coin em reais).
- **Uso:**
  - **saúde do canal oficial:** razão cinza/oficial com meta de 0,7 ou mais (a simulação usa 0,5 por prudência, §12.1). [F] No OSRS, o ouro clandestino sai a cerca de 45% do preço do Bond ([F03, §6.3](../01-pesquisa/fichas/F03-runescape-e-osrs.md)); [H] uma razão assim indica um canal oficial que perde em preço ([05d, §6](../01-pesquisa/05d-rmt-recomendacao.md));
  - **alarme de oferta ilícita:** queda de mais de 20% numa semana sugere surto de bots, dupe ou fraude, e dispara uma varredura;
  - **investigação:** um vendedor de grande volume aponta onde investigar a origem do ouro. Vender o próprio ouro não é infração.
- **O índice cinza é interno.** Publicá-lo daria ao mercado cinza uma cotação oficial. O relatório mensal comenta a tendência, sem números.
- **Validar com advogado** o que é permitido fazer com dados coletados em sites de terceiros ([05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md)).

- **Inspira-se no** indicador interno sugerido no [04b, "Implicações"](../01-pesquisa/04b-economia-mercados-protecoes-bots.md) e no preço do Bond contra o mercado negro do OSRS.
- **Resolve** a cegueira sobre o tamanho do mercado paralelo.
- **Incentiva** o estúdio a manter o canal oficial competitivo em preço e segurança.
- **Risco:** preço anunciado não é preço pago. [F] No Task Bar Hero, um arco anunciado a US$ 1.585,75 nunca saiu acima de US$ 22 ([G05, §6](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)). Mitigação: usar a mediana e a tendência, não o valor absoluto.

## 9. Lavagem

### 9.1 O circuito

[F] O circuito documentado é sempre o mesmo: dinheiro sujo ou cartão roubado → bem digital transferível → venda a um terceiro de boa-fé → dinheiro "limpo" para o criminoso e chargeback para o estúdio. Foi o caso das chaves do CS:GO (2019) e dos V-Bucks do Fortnite ([05c, §5.4](../01-pesquisa/05c-rmt-legal-global-pagamentos.md)). [H] Na Cidade: Coins → Câmbio → ouro → Troca → Pix.

**Posição do estúdio.** [H] Sem saque e sem transferência de reais entre usuários, o estúdio provavelmente não é pessoa obrigada pela Lei 9.613 ([05b, §8](../01-pesquisa/05b-rmt-legal-brasil.md)), mas herda as exigências de PLD dos parceiros de pagamento. **Validar com advogado.** Defesas:

1. autenticação do emissor, teto de compras nas primeiras 24 h e disjuntor de pagamentos (§6.4);
2. risco de troca como sinal (§9.2) e revisão das saídas grandes (§9.3);
3. remoção do valor de origem ilícita onde estiver (§5.3). [H] Sem carência e sem verificação (checkpoint 3), a mula anônima existe e o circuito pode fechar em minutos; a defesa é rastrear e remover depois;
4. cooperação com autoridades mediante ordem judicial;
5. guarda do livro-razão por 5 anos [H], o prazo mínimo da Lei 9.613 (art. 10) para quem é obrigado, adotado por prudência.

### 9.2 Risco de troca adaptado

**AA-23.** [F] No IdleMMO, cada troca recebe um nível de risco calculado pelo equilíbrio entre os lados e pelo valor unilateral acumulado, com decaimento; quanto maior o risco, mais equilibrada a troca precisa ser ([C04, §6](../01-pesquisa/fichas/C04-idlemmo.md)). [H] **Adaptação:** aqui a Troca é livre e o RMT informal é aberto, então a transferência sem contrapartida é legítima. O risco de troca vira só sinal, nunca limite nem exigência de equilíbrio (checkpoint 3).

**Definição.** Valor sem contrapartida (VSC) de uma Troca = valor de mercado do que um lado dá − valor de mercado do que recebe (mínimo zero). O valor de mercado é o do [07](07-economia.md), seção 5.5; o "valor de referência" passou a ser o valor fixo que mede o teto (revisão de consistência: R18). Acumula-se por par de contas e por direção, com meia-vida de 30 dias.

**Exemplo calculado.** A dá a B 120.000 de ouro e recebe um item com valor de mercado de 20.000: VSC de A para B = 100.000. Trinta dias depois, esse VSC pesa 50.000; sessenta dias depois, 25.000.

**Perfis no grafo [H]:**

| Perfil | Definição | O que costuma ser |
|---|---|---|
| Coletora | Recebe VSC de 10 ou mais contas em 30 dias | Fazenda, comprador grande de RMT informal ou artesão de guilda |
| Distribuidora | Dá VSC a 10 ou mais contas em 30 dias | Vendedor de RMT informal ou mecenas de guilda |
| Ponte | Recebe e repassa 80% ou mais do valor em menos de 24 h | Mula |
| Ciclo | A → B → C → A com VSC relevante | Lavagem ou inflação de histórico |
| Banco | Coletora e distribuidora ao mesmo tempo | Nó central de rede |

**Efeitos:** nenhum perfil bloqueia nem atrasa a Troca. Perfis somam pontuação de risco; Ponte e Ciclo envolvendo contas novas entram na fila de revisão, e o valor rastreado é removido se a origem ilícita for provada (§5.3).

- **Inspira-se no** risco de troca do IdleMMO e nas pesquisas sobre redes de farmers, que encontraram farmers, comerciantes, "bancos" e compradores com estrutura parecida com a de redes criminosas reais ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); **diferencia-se do** IdleMMO por não exigir trocas equilibradas.
- **Resolve** a cadeia de mulas sem depender de IP ou aparelho.
- **Incentiva** nada de diferente no jogador honesto: ele nunca sente a regra.
- **Risco:** a guilda generosa e o comprador grande de RMT informal parecem coletoras. Mitigação: perfil é sinal, não sanção; revisão humana distingue.

### 9.3 Revisão das saídas grandes

[H] Parte da AA-23. Nada aqui atrasa a transferência (checkpoint 3):

- **Qualquer conta:** VSC de saída acima de 200 Coins de valor de mercado (R$ 200) em 7 dias (revisão de consistência: R17) entra em revisão assíncrona. A Troca acontece na hora; a revisão olha depois.
- **Conta nova** (menos de 14 dias ou menos de 20 h de jogo ativo): sem limite de saída; VSC de saída acima de 2 × T por dia (6.000 de ouro com T = 3.000) entra na mesma revisão.
- **Câmbio:** limites e microestrutura são do módulo 07. Este módulo pede só que contas suspensas por contestação não vendam (revisão de consistência: varredura).
- **Limites em Coins de valor**, não em ouro: o IPC publica o preço do Coin em ouro, e o limite acompanha a inflação sozinho.
- **Mesma taxa em todo canal:** Coins e Baú lacrado pagam 12% também na Troca, como no Câmbio (bíblia, §6.6; revisão de consistência: R19). O Coin não tem rota mais barata que o balcão, então a lavagem por Troca não sai mais em conta e o índice do Câmbio continua medindo o mercado inteiro.

### 9.4 Sinais de alerta

[H] Para o painel de antifraude:

- contas novas que recebem muito e repassam em horas;
- Coins doados e vendidos no Câmbio ou transferidos nos primeiros minutos, repetidamente, com cartões diferentes;
- vários cartões ou contas Pix pagadoras numa mesma conta;
- Leilão ou Feira com preços fora da banda entre contas com fluxo prévio;
- Bazar de Personagens usado como saída repetida de valor;
- uma conta que concentra de muitas e distribui para muitas (perfil Banco);
- picos de Troca unilateral logo depois de ondas de banimento (a rede se reorganizando).

## 10. Scripts e API: leitura liberada, escrita humana

**AA-24.** [F] A API do Torn tem quatro níveis de chave (Public, Minimal, Limited, Full), limite de 100 pedidos por minuto por usuário somando todas as chaves e de 5.000 por minuto por IP para serviços grandes; todo serviço que pede a chave do jogador precisa exibir uma tabela de termos (se guarda dados, se compartilha, para quê, como guarda a chave), e o mau uso dá banimento permanente de chaves, IPs e usuários ([07, §5.6](../01-pesquisa/07-tecnica-idles-online.md)). [F] O Milky Way Idle publica o mercado em JSON com atraso proposital, "para evitar manipulação" ([07, §5.6](../01-pesquisa/07-tecnica-idles-online.md)).

**Níveis de acesso [H]:**

| Nível | O que lê | Quem cria | Limite |
|---|---|---|---|
| Pública | Bolsa e Feira agregadas com 15 min de atraso; histórico de preços; IPC; perfis públicos; rankings; andamento das Obras e dos Cercos | Qualquer pessoa, com chave para controle de uso | 60 pedidos por minuto por chave |
| Pessoal | O próprio inventário, as Filas, as ordens e o histórico de vendas | O jogador, com 2FA | 60 pedidos por minuto por conta, somando todas as chaves |
| Ferramenta | O que o jogador autorizar, item por item | O jogador, para um serviço de terceiros que exibe a tabela de termos | Idem |
| Dados abertos | Arquivo diário do mercado, com atraso de 24 h | Estúdio | — |

**Nunca, em nenhum nível:** escrita; dados privados de outros jogadores; livro de ofertas em tempo real; dados de identidade, pagamento ou pontuação de risco.

**Regras para scripts no cliente [H]:**

- scripts podem ler e exibir à vontade: calculadoras, painéis, alertas;
- **um gesto humano, um comando:** nada de clique automático, reposição automática de ordens, compra automática ou resolução automática de obra-prima;
- **o jogo entrega a automação que o jogador quer:** Fila planejada com tarefas de reserva (AA-2), ordens persistentes, alertas de preço por notificação e o relatório da volta. A reconciliar com os módulos 02 e 07.
- Quem viola entra na escada de sanções da §3.5.

- **Inspira-se na** API do Torn, nos dados com atraso do MWI e nas regras escritas da Jagex para clientes de terceiros ([07, §5.6](../01-pesquisa/07-tecnica-idles-online.md)); **diferencia-se do** Idlescape, que só permite mudanças visuais.
- **Resolve** a raspagem descontrolada do servidor e dá aos jogadores-economistas os dados que eles querem.
- **Incentiva** ferramentas da comunidade e transparência.
- **Risco:** ferramentas de leitura muito boas viram vantagem de quem as usa, e a fronteira entre "mostrar" e "decidir por você" se move. Mitigação: o que for útil a todos entra no cliente oficial; regras revistas a cada Era.

## 11. Moderação e apelação

### 11.1 Processo visível

**AA-25.** [H] Toda sanção chega ao jogador por escrito, em português (e em inglês na versão EN), com:

1. a regra violada, com link para o texto público;
2. a categoria da evidência (por exemplo, "fluxo de valor entre contas"), sem revelar o detector;
3. o que foi removido, congelado ou suspenso, e por quanto tempo;
4. como apelar, com prazo e número do caso;
5. o andamento do caso, visível na conta.

### 11.2 Prazos

| Etapa | Prazo [H] |
|---|---|
| Revisão humana antes de banimento | Obrigatória. Exceção: dupe, roubo e fraude em curso, em que o congelamento vem antes e a revisão em até 72 h |
| Prazo para apelar | 30 dias após a sanção |
| Resposta à apelação de banimento ou suspensão | Até 7 dias corridos |
| Resposta à apelação de outras sanções (suspensão por contestação, remoção de valor, atrito) | Até 14 dias corridos |
| Contestação de congelamento por pagamento | Até 5 dias úteis. [F] O decreto do comércio eletrônico pede resposta ao consumidor em até 5 dias ([05b, §4](../01-pesquisa/05b-rmt-legal-brasil.md)) |
| Quem revê a apelação | Sempre uma pessoa diferente de quem decidiu |

**Quando o estúdio erra:** tudo o que foi removido é restaurado, com lançamento de restituição no livro-razão; a compensação extra é sempre presa à conta (dias de conveniência não transferíveis ou cosmético), nunca Coins ou ouro. O erro é reconhecido no relatório. [F] O MWI reconheceu publicamente um falso positivo e compensou os jogadores ([07, §2.2](../01-pesquisa/07-tecnica-idles-online.md)).

### 11.3 Transparência

[H] O relatório econômico mensal (P11) traz uma seção de anti-abuso:

- banimentos e suspensões por categoria;
- contas de fazenda derrubadas por onda;
- ouro e itens removidos, Coins revogados;
- taxa de disputas de pagamento;
- apelações recebidas, revertidas e o tempo médio de resposta. [F] O OSRS publicou que só 0,36% dos banimentos de 2024 caíram na apelação ([04b, §3.9](../01-pesquisa/04b-economia-mercados-protecoes-bots.md));
- disjuntores acionados, por quanto tempo e por quê.

A cada trimestre, uma análise com tendências e mudanças de regra.

**Denúncias:** botão no perfil, na Troca e no chat; triagem; retorno ao denunciante sobre o desfecho, sem expor o denunciado. [F] A Lei 14.852/2024, art. 16, pede canal de denúncia, retorno ao denunciante, revisão de punições e relatório público em jogos com interação acessados por crianças e adolescentes ([05b, §1](../01-pesquisa/05b-rmt-legal-brasil.md)). [H] O nosso jogo é 18+ pelos termos, sem verificação (checkpoint 3); adotamos o padrão como boa prática e porque, sem verificação, menores podem estar no jogo.

- **Inspira-se no** relatório da equipe de segurança do EVE e na taxa de reversão publicada pelo OSRS ([07, §5.4](../01-pesquisa/07-tecnica-idles-online.md)); **diferencia-se de** banimentos por critério vago, uma das queixas no Task Bar Hero ([G05, §11](../01-pesquisa/fichas/G05-banana-e-bongo-cat.md)).
- **Resolve** a sensação de arbitrariedade, que destrói a confiança mais rápido que o próprio bot.
- **Incentiva** o jogador punido por engano a apelar, e o estúdio a calibrar a detecção.
- **Risco:** a equipe pequena não dá conta dos prazos. Mitigação: o atrito automático cobre a maior parte dos casos sem sanção; os prazos são revistos com os dados do alfa.

### 11.4 Equipe e ferramentas internas

**AA-26.** [F] Em 2007, um desenvolvedor do EVE entregou plantas raras à própria corporação; no OSRS, um funcionário usou credenciais da equipe de recuperação para esvaziar 68 contas, cerca de 705 bilhões de gp ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). [H] Regras:

- uma pessoa dedicada a antifraude e economia desde o alfa ([04b, "Implicações"](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)), com plantão nas semanas de lançamento, de nova Era e de Fronteira;
- toda ferramenta que move valor exige dupla aprovação e grava log imutável;
- contas de funcionários são marcadas e auditadas; não usam o Bazar de Personagens, não fazem RMT informal, não se candidatam ao Conselho;
- mudanças econômicas (drops, taxas, teto) ficam sob embargo interno e são publicadas para todos ao mesmo tempo;
- proteção contra DDoS na borda antes da primeira onda de banimentos. [F] O Albion sofreu ataques logo depois de ondas de banimento ([07, §6.6](../01-pesquisa/07-tecnica-idles-online.md)).

- **Inspira-se na** corregedoria do EVE e na dupla aprovação recomendada pelo [04b, §5.3, item 15](../01-pesquisa/04b-economia-mercados-protecoes-bots.md).
- **Resolve** o abuso que vem de dentro, o mais caro para a reputação.
- **Incentiva** confiança: o jogador sabe que a equipe também tem regras.
- **Risco:** a dupla aprovação atrasa uma resposta urgente. Mitigação: o disjuntor pode ser ligado por uma pessoa (§5.2); mover valor, nunca.

## 12. Interfaces: o que a economia e a simulação precisam

### 12.1 Parâmetros para a simulação (módulo 08)

Todos [H], a calibrar. "Base" é o cenário esperado; "estresse" é o que a economia precisa aguentar sem quebrar.

| Parâmetro | Base | Estresse | Notas |
|---|---|---|---|
| Contas com automação na própria conta | 3% | 10% | Usam 100% do teto T; jogam todas as sessões de obra-prima com até 10% de vantagem de qualidade (AA-3) |
| Contas em fazendas (contas falsas, operador de terceiros) | 3% (a 1ª rodada usou 0,5%, com identidade verificada) | 10% e 20% | Produzem no teto, vendem tudo na Bolsa e transferem o ouro a uma coletora |
| Onda de contas falsas | — | 30% das contas novas por 14 dias, depois onda de banimento | Substitui a catástrofe da verificação, que deixou de existir (checkpoint 3) |
| Detecção de fazendas | 60% das contas por onda, a cada 3 semanas | 30% por onda | Vida média de uma conta de fazenda: cerca de 5 semanas na base |
| Detecção de automação na própria conta | 8% por semana | 4% por semana | Sanção escalonada; 30% param depois da primeira sanção |
| Valor recuperado na detecção | 70% do ouro gerado pela fazenda, destruído | 40% | Entra como dreno de fiscalização, fora da meta de drenos planejados |
| Preço do ouro no mercado cinza | 50% do oficial | 30% do oficial | Determina o lucro da fazenda (§2.2) |
| Disputas de pagamento | 0,5% das compras (sem carência) | 2% por um mês (ataque de cartões) | Testar o disjuntor de 0,8% |
| Contas roubadas | 0,1% das contas por mês | 0,5% | Sem base publicada para a taxa; a Steam tinha cerca de 77 mil por mês em 2015, sem o total de contas |
| Falsos positivos | 0,5% das sanções revertidas | 2% | Valor restaurado vira lançamento de restituição |
| Carência do Coin | Zero (checkpoint 3) | — | Os Coins doados entram no Câmbio e na Troca na hora |
| Conta nova | Menos de 14 dias ou menos de 20 h de jogo ativo | — | Rampa do teto de emissão e sem ouro de encomenda; sem limite de saída |
| Contestação forçada | Conta suspensa até refazer a doação do valor contestado | — | — |
| Bazar de Personagens | 1 venda por conta a cada 90 dias; comprador 30 dias sem voto e 90 sem revenda | — | — |

**Testes que a simulação precisa rodar:** (1) sensibilidade do lucro da fazenda a T × P (§2.2); (2) efeito de 3% e 10% de contas no teto sobre o preço das commodities (deflação por oferta máxima); (3) onda de contas falsas e fazendas de 3% a 20% sem verificação, com a meta de extração abaixo de 3% do valor emitido; (4) ataque de cartões sem carência, com o disjuntor; (5) detecção pela metade do planejado.

### 12.2 O que este módulo pede a outros módulos

| Módulo | Pedido |
|---|---|
| 02 (progressão) | Fila planejada que cubra o offline base de 24 h com tarefas de reserva (AA-2); teto que não cresça com horas online (AA-1) |
| 06 (ofícios) | Obra-prima por decisão, com cota diária e meta de vantagem do resolvedor automático de até 10% (AA-3) |
| 07 (economia) | Lucro da conta-fazenda até ~R$ 15 por mês, medido no painel (§2.2; revisão de consistência: R20); janela de vitrine e alerta de desvio na Feira (AA-4); limites do Câmbio; preço de mercado por item, usado aqui na regra de contaminação e no VSC (revisão de consistência: R18) |
| 09 (social) | Carência de 30 dias para votar após compra no Bazar de Personagens; voto só para conta ativa; conselheiro não vende durante o mandato; marcação de contas transferidas nos rankings |
| 10 (live-ops) | Calendário de ondas de banimento fora das semanas de abertura de Era; plantão nas aberturas |
| 11 (monetização) | Autenticação do emissor; teto de compras nas primeiras 24 h (sem carência e sem custo de verificação, checkpoint 3) |
| 12 (onboarding) | Sem verificação; prólogo sem conta e conta criada ao chegar à Cidade, com chave de recuperação (§4.3; checkpoint 3) |
| 14 (arte e UI) | Telas da Troca com valor de mercado e avisos (AA-19); PWA com offline só de leitura (§5.1, requisito 13; R12); contador do teto; página de sanção e apelação (AA-25) |
| Fase 4 (arquitetura) | Os 13 requisitos da §5.1 (o 13º, PWA com offline só de leitura, entrou na revisão de consistência: R12); disjuntores (AA-11); banco separado para ligações e registros de acesso (AA-8); API (AA-24) |

## 13. Propostas de mudança na bíblia

**Situação depois do checkpoint 3 (2026-11-11):** o Gabriel decidiu as propostas 2, 4 e 5 de outro jeito (sem verificação de idade; transferência imediata, sem freios), e a 3 perdeu as carências do Coin. A bíblia já reflete as decisões. O texto abaixo fica como registro.

1. **[proposta de mudança na bíblia] Glossário (§4):** incluir **Carência** (período em que um valor recém-comprado não pode ser transferido), **Disjuntor** (suspensão da entrada de novas operações num balcão, item ou moeda), **Risco de troca** (pontuação do valor dado sem contrapartida entre contas) e **Aposentadoria** (conta arquivada por quem compra outra no Bazar de Personagens). São conceitos usados pelos módulos 07, 09, 11, 13 e 14. A "dívida em ouro" saiu da proposta, porque a contestação agora suspende a conta até regularizar (decisão vigente da bíblia). Os outros quatro entraram no anexo do glossário (revisão de consistência: R14).
2. **[proposta de mudança na bíblia] Decisões (§5):** explicitar **"uma pessoa, uma conta ativa"** como consequência de "18+ com idade verificada" mais "um personagem por conta", com a aposentadoria no Bazar de Personagens.
3. **[proposta de mudança na bíblia] Números-âncora (§6.6):** incluir as carências do Coin (7 dias na primeira compra e no cartão; 72 h no Pix; até 30 dias com risco), a definição de conta nova (menos de 14 dias ou menos de 20 h de jogo ativo) e as carências do Bazar de Personagens (vendedor com 30 dias e 60 h; comprador 30 dias sem voto e 90 sem revenda).
4. **[proposta de mudança na bíblia] Interpretação de "transferível livremente":** sem proibição nem pedágio além das taxas já previstas, com freios de segurança temporários, publicados e iguais para todos (carência por meio de pagamento, limite de saída de conta nova, retenção em aparelho novo, suspensão da conta enquanto a contestação não for regularizada; revisão de consistência: varredura). O diretor decide se essa leitura respeita a decisão do Gabriel.
5. **[proposta de mudança na bíblia] Prólogo sem conta** antes da verificação de idade (§4.3), a reconciliar com o módulo 12: minutos jogáveis sem chat, mercado, loja, Baú ou dados pessoais. O risco é parecer uma abertura do jogo a menores; a alternativa é verificar antes de qualquer jogo.

## 14. Conflitos e pontos em aberto

| # | Conflito | Como este módulo resolve | Quem decide |
|---|---|---|---|
| 1 | O [05d, §5.7](../01-pesquisa/05d-rmt-recomendacao.md) propunha proibir o RMT fora do canal oficial e punir compradores; o Gabriel decidiu não proibir | Pune-se a origem ilícita, não o RMT; "quem compra por fora compra o risco" | Já decidido (Gabriel) |
| 2 | O [04b, §5.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md) recomendava não ter Troca direta no lançamento, e o risco de troca do IdleMMO exige equilíbrio | A Troca existe (bíblia); o risco de troca vira só sinal (AA-23) | Já decidido (bíblia e checkpoint 3) |
| 3 | O [05d](../01-pesquisa/05d-rmt-recomendacao.md) propunha token negociável uma vez; a bíblia diz "transferível livremente" | Nenhuma carência: transferência imediata | Decidido (Gabriel, checkpoint 3) |
| 4 | O [05d, §4.2](../01-pesquisa/05d-rmt-recomendacao.md) adiava o bazar de contas para 18 a 24 meses; o Bazar de Personagens existe desde o lançamento | As salvaguardas do 05d entram como requisitos do Bazar de Personagens (AA-20) | Já decidido (Gabriel) |
| 5 | ECA Digital, art. 13: dados de verificação de idade só para essa finalidade | Sem verificação, não há dado de idade | Encerrado (checkpoint 3) |
| 6 | ANPD: biometria de todos os usuários pode ser desproporcional | Sem verificação, não há biometria | Encerrado (checkpoint 3) |
| 7 | "Uma pessoa, uma conta" × comprador do Bazar de Personagens que já tem conta | Aposentadoria da conta antiga (AA-20) | Diretor (proposta 2) |
| 8 | Limites e carências × "transferível livremente" | Nenhum freio; defesa depois do fato | Decidido (Gabriel, checkpoint 3) |
| 9 | "Jogo inteiro 18+" × funil de entrada | 18+ nos termos, sem verificação; prólogo sem conta | Decidido (Gabriel, checkpoint 3) |
| 10 | Remover valor de quem comprou de boa-fé fora do jogo | Regra publicada antes; aviso na Troca | **Validar com advogado** |
| 11 | ECA Digital × Baú pago sem verificação de idade | Risco assumido; salvaguardas opcionais não aplicadas (verificar só quem compra ou abre o Baú; Baú desligado por padrão no Brasil) | Gabriel; **validar com advogado** |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Baú pago sem verificação de idade** | Menores jogam sem barreira e compram o Baú; a ANPD fiscaliza a partir de jan./2027 (Lei 15.211/2025, art. 20; Decreto 12.880/2026, arts. 18 e 23; MJSP, NT 55/2026) | Risco assumido pelo Gabriel (checkpoint 3). Salvaguardas opcionais, não aplicadas: verificar só quem compra ou abre o Baú, ou Baú desligado por padrão no Brasil. **Validar com advogado** |
| **Fazendas de contas falsas em escala** | Sem verificação, abrir mil contas custa quase nada; R$ 16 por conta por mês vira R$ 16 mil por mês | Rampa de conta nova; ouro de encomenda só a partir do 14º dia; teto por conta; ligações (§4.2) e ondas (§3.4); meta de extração abaixo de 3% do valor emitido; 2ª rodada da simulação |
| **Conta roubada esvaziada na hora** | Sem retenção de saída, o ladrão transfere tudo antes de a vítima perceber | 2FA convidado no primeiro dia; alerta de login; botão "não fui eu"; reversão do roubo provado (§7.3) |
| **Vazamento de dados** | Um ataque expõe e-mails, ligações de aparelho e referências de pagamento | Nenhum documento nem rosto guardado; ligações em banco separado do jogo; plano de resposta a incidente com comunicação à ANPD e aos titulares (LGPD, art. 48; **validar com advogado**) |
| **Falso positivo contra família ou lan house** | Rede e aparelho compartilhados disparam a pontuação | Sinais fracos nunca punem; vínculo declarado; revisão humana; apelação com prazo |
| **Golpes fora do jogo chegam ao suporte e às redes** | Com o RMT informal aberto, golpes de Pix viram reclamação pública contra o jogo | Política clara e repetida; avisos na Troca; nenhuma promessa de reembolso; FAQ sobre MED |
| **A tolerância ao RMT informal vira argumento jurídico** | Com o Baú comprável com Coins, a soma pagamento + sorte + prêmio em dinheiro é a tese do processo de Nova York contra a Valve | Risco assumido pelo Gabriel; não promover nem integrar; combater a origem ilícita; probabilidades publicadas (S5); **validar com advogado** |
| **Confisco contestado** | Quem comprou ouro de origem ilícita por fora vai ao Procon ou à Justiça | Regra anterior à punição; proporcionalidade; limite mínimo de ação; **validar com advogado** |
| **Disjuntor cria dupe** | Um disjuntor mal testado quebra uma operação no meio, como no New World | Só bloqueia a entrada; teste a cada versão |
| **Chargebacks acima do limite das bandeiras** | Sem carência, o cartão roubado vira Pix em minutos; um ataque num mês leva o estúdio acima de 1,5% | Autenticação do emissor; teto de compras nas primeiras 24 h; disjuntor a 0,8%; Pix sempre disponível e primeiro da lista; dois PSPs ([05d](../01-pesquisa/05d-rmt-recomendacao.md)) |
| **A suspensão parece punição com fins de lucro** (revisão de consistência: varredura; a dívida em ouro saiu do módulo) | O jogador que contestou acha que o estúdio o obriga a doar de novo para voltar a jogar | Regularizar é refazer só a doação contestada, e a conta volta com tudo; regra publicada antes da doação; quem recebeu de boa-fé não perde nada; **validar com advogado** (CDC, art. 51) |
| **A equipe pequena não dá conta** | Revisões e apelações acumulam; prazos estouram | Atrito automático antes de sanção; prioridade por valor; prazos revistos com dados do alfa |
| **Os bots se adaptam** | Automação com tempos humanizados e contas envelhecidas | O sinal principal é econômico (fluxo e teto), não de tempo; iscas trocadas a cada versão |
| **Retaliação** | DDoS depois de uma onda de banimento | Proteção na borda antes da primeira onda; plano de comunicação |
| **Abuso interno** | Funcionário cria ou desvia valor | Dupla aprovação; log imutável; contas de equipe marcadas; embargo de mudanças |
| **O Bazar de Personagens vira fábrica de contas** | Contas niveladas por automação são vendidas | Horas de jogo ativo medido; pontuação de risco baixa para anunciar; uma venda por conta a cada 90 dias, com vendedores ligados contados juntos |
| **Captura do Conselho** | Contas compradas ou alugadas votam em bloco | 30 dias sem voto após o Bazar de Personagens; detecção de contas ligadas; requisitos de voto e voto só para conta ativa (módulo 09) |

## Fontes novas desta pesquisa

Links acessados em novembro de 2026. As demais referências estão nos estudos e fichas citados pelo caminho.

1. [Lei 15.211/2025 (ECA Digital), art. 13](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm) — norma (Planalto).
2. [Aferição de idade: o que o ECA Digital e as orientações preliminares da ANPD significam para o seu negócio](https://www.baptista.com.br/o-que-o-eca-digital-e-as-orientacoes-preliminares-da-anpd-significam-para-o-seu-negocio/) — escritório de advocacia (L. O. Baptista) — 17/4/2026. Resume as Orientações Preliminares da ANPD de 20/3/2026; o PDF original não foi lido.
3. [Contas laranja potenciais crescem mais de 60% em dois anos no Brasil](https://www.serasaexperian.com.br/sala-de-imprensa/prevencao-a-fraude/contas-laranja-potenciais-crescem-mais-de-60-em-dois-anos-no-brasil-aponta-estudo-da-serasa-experian/) — empresa de dados (Serasa Experian) — 18/3/2026.
4. [77,000 Steam users are hacked every month. Here's how Valve is fixing it](https://thenextweb.com/news/77000-steam-users-are-hacked-every-month-heres-how-valve-is-fixing-it) — imprensa (The Next Web) — 10/12/2015.

**Não encontrado:** fonte oficial de uma credencial pública de idade (gov.br) disponível em novembro de 2026; preço por verificação de fornecedores brasileiros; taxa de contas roubadas por total de contas em jogos de navegador. As tentativas de ler o guia preliminar da ANPD e o estudo do Cetic.br sobre aferição de idade em 25 serviços falharam (PDF ilegível pela ferramenta).

