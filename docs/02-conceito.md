# Fase 2 — Conceito

> Três conceitos de jogo diferentes, construídos sobre a pesquisa da Fase 1 ([síntese](01-pesquisa/00-sintese.md)) e sobre as decisões do checkpoint ([PROGRESSO](PROGRESSO.md)). Etiquetas: [F] fato com fonte (aqui, quase sempre remetendo à ficha ou ao estudo), [H] proposta ou leitura do estúdio, [NV] conhecimento prévio não verificado.
> Os conceitos diferem na fantasia, no ciclo de jogo, no tipo de jogo ativo e na estrutura social. Todos se apoiam no mesmo **piso comum** (seção 1), que vem da pesquisa e das decisões do Gabriel e não está em disputa nesta fase.

## 1. O piso comum dos três conceitos

| # | Regra | De onde vem |
|---|---|---|
| P1 | **Números em duas velocidades.** O progresso pessoal (níveis, maestrias, prestígio) pode crescer sem limite. Os bens negociáveis ficam em unidades que cabem na cabeça. | Leis 5 e 6 ([02](01-pesquisa/02-padroes-matriz-leis.md)); insight 4 |
| P2 | **O tempo ausente gera progresso preso à conta.** O negociável nasce de ação ativa ou de produção limitada (uma fila por vez, com teto de emissão por conta). | Lei 16; insight 3 ([G05](01-pesquisa/fichas/G05-banana-e-bongo-cat.md)) |
| P3 | **Tudo que se negocia se gasta.** Desgaste, quebra, consumo no crafting e perda opcional em zonas de risco são os drenos principais; as taxas são ajuste fino. | Lei 17; insight 5 ([04a](01-pesquisa/04a-economia-fontes-drenos-inflacao.md)) |
| P4 | **Mercado em ouro com quatro balcões:** bolsa (livro de ordens), vitrine (venda instantânea), leilão e câmbio do token. Também há transferência direta livre entre jogadores, com taxa em ouro destruída. | [04b](01-pesquisa/04b-economia-mercados-protecoes-bots.md); decisão 1 |
| P5 | **Token oficial** comprado em reais, transferível livremente; bazar oficial de contas desde o lançamento; RMT informal não intermediado pelo estúdio. | Decisão 1 |
| P6 | **Caixas** compráveis com token e com ouro no mercado; conteúdo sempre em itens; probabilidades publicadas e teto de gasto. | Decisão 2; salvaguarda S5 |
| P7 | **Zona vermelha fora da loja:** teto de offline, filas, automação, taxa do ausente e poder direto. | Lei 13; [06](01-pesquisa/06-monetizacao-retencao.md) |
| P8 | **Jogo 18+ com idade verificada:** cada conta é um adulto identificado, o que também é a principal barreira contra bots e multicontas. | Decisão 3 |
| P9 | **Servidor autoritativo e livro-razão** de partidas dobradas para toda moeda e todo item. | Lei 15; [07](01-pesquisa/07-tecnica-idles-online.md) |
| P10 | **Brasil primeiro, bilíngue,** PWA no navegador, Pix, servidor no Brasil. | Decisão 4 |
| P11 | **Constituição econômica pública,** índice do token e relatório mensal. | Lei 21; [04a](01-pesquisa/04a-economia-fontes-drenos-inflacao.md) |
| P12 | **O ausente nunca perde e o ativo ganha opções:** duas taxas visíveis (ativa e ausente), offline generoso calculado no servidor, janelas ativas que dão bônus e nunca são obrigatórias. | Leis 7, 8 e 9; insights 14 e 15 |

## 2. Conceito A — **Casas da Maré**

> **Fantasia em uma frase:** você comanda uma casa mercante num arquipélago em que cada porto paga um preço diferente, e quem planeja a rota certa antes de dormir acorda rico.

### Pilares

1. **O mapa é o mercado.** Seis portos, cada um com sua própria bolsa e preços próprios. A riqueza vem de produzir num lugar e vender em outro. [H] A inspiração são os mercados regionais do EVE e do Albion ([F01](01-pesquisa/fichas/F01-eve-online.md), [F02](01-pesquisa/fichas/F02-albion-online.md)). A diferença: todos os idle MMOs estudados têm um mercado global único ([02](01-pesquisa/02-padroes-matriz-leis.md)).
2. **A rota é a decisão do ausente.** O jogador monta o comboio (navios, carga, escolta, rota) e as regras de recuo. A viagem roda offline e volta com um diário de bordo.
3. **Risco escolhido, nunca imposto.** Rotas seguras pagam pouco. Águas disputadas pagam muito, com chance de perder carga para criaturas e para corsários (jogadores), mas só em janelas anunciadas e com seguro comprável em ouro.
4. **Uma casa que atravessa gerações.** O prestígio é a sucessão: o patriarca se aposenta, e o herdeiro herda parte da fortuna pessoal e um legado que muda uma regra (por exemplo, enxergar a bolsa de mais um porto). Os bens negociáveis nunca são apagados.
5. **Companhias de comércio.** As guildas são companhias, com armazéns, frota conjunta e encomendas coletivas com prazo e nota individual.

### O lado RPG

A casa contrata uma tripulação de heróis (capitães, escoltas, exploradores), cada um com classe, nível e equipamento que se desgasta. O combate é automático, nas rotas e nas ilhas de expedição, com regras configuráveis antes de partir.

### Loop por escala de tempo

| Escala | O que o jogador faz |
|---|---|
| Minutos (ativo) | Lê o quadro de preços dos portos, ajusta ordens, aceita contratos e despacha comboios. |
| Horas (ausente) | Oficinas produzem em fila, comboios navegam e heróis exploram ilhas. |
| Dias | Encomendas da companhia; feiras de porto (eventos com demanda alta de um bem); janelas de corso. |
| Semanas | Ranking de casas; chegada de uma "monção" que muda ventos e preços de rota. |
| Temporadas | Um mar novo, paralelo, aberto por alguns meses. |

### Diferencial que nenhum concorrente tem

Geografia econômica: mercados regionais com logística e risco, a coisa que torna o EVE e o Albion profundos, num formato que se joga em cinco minutos. Nenhum idle MMO estudado tem isso.

### Por que venceria os jogos de referência

- Os idle MMOs atuais são grades de skills ao estilo RuneScape com um mercado global ([C01](01-pesquisa/fichas/C01-milky-way-idle.md)–[C06](01-pesquisa/fichas/C06-shop-titans.md), [A11](01-pesquisa/fichas/A11-scapewatch.md)). Aqui o mercado é o próprio jogo, e a informação vale ouro.
- Atende o segmento "trader" do EVE e do Albion, mal servido pelo idle ([08](01-pesquisa/08-mercado-posicionamento.md)).

### Como a economia e o RMT se encaixam

- **Arbitragem regional:** faz a moeda girar, o que ajuda contra a deflação dos bens básicos ([04a](01-pesquisa/04a-economia-fontes-drenos-inflacao.md)).
- **Drenos:** taxas de porto, perdas no mar e desgaste da frota.
- **RMT:** o token compra conforto. No bazar se vende uma casa com frota e reputação nos portos. As caixas viram "cargas de naufrágio" que soltam itens.

### Riscos principais

- **Liquidez dividida:** com 2 a 5 mil simultâneos, seis bolsas podem ficar vazias; o mercado regional precisa de população ([08](01-pesquisa/08-mercado-posicionamento.md)).
- **Bots e scripts:** a arbitragem premia velocidade, e velocidade é o terreno do bot ([04b](01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
- **Jogo de planilha:** o público fica menor e afasta quem quer aventura.
- **Corsários:** o PvP pode punir o ausente, se a janela e o seguro falharem.

## 3. Conceito B — **Fronteira**

> **Fantasia em uma frase:** a cada temporada uma terra nova surge da névoa, o servidor inteiro se lança a desbravá-la, e a sua companhia decide até onde ir, o que arriscar e o que trazer de volta.

### Pilares

1. **Um mapa que o servidor descobre junto.** Cada temporada abre um continente novo, revelado região a região pelas expedições de todos. O que um descobre, todos veem, com o nome do descobridor gravado no mapa.
2. **A expedição é um plano.** Antes de partir, o jogador escolhe o grupo de heróis, os suprimentos (consumidos: dreno), a rota e as regras de recuo. A expedição roda offline e volta com um diário. [H] É a lei do plano aplicada ao centro do jogo ([02](01-pesquisa/02-padroes-matriz-leis.md)).
3. **Crises: janelas curtas de alto valor.** Eventos anunciados, de 10 a 15 minutos (uma tempestade, uma criatura antiga que acorda), em que decisões ativas multiplicam a recompensa. Quem não está presente recebe a versão automática.
4. **Capital e fronteira.** A capital é o mundo permanente, com o mercado, o token, o bazar e a progressão longa. A fronteira é um mundo paralelo que termina num final coletivo: as guildas correm para fundar uma cidadela no coração do continente. Ao fim, ela devolve à capital títulos, cosméticos e relíquias. [H] Modelo das Leagues do OSRS e da Maravilha do Mundo do Travian ([F03](01-pesquisa/fichas/F03-runescape-e-osrs.md), [D05](01-pesquisa/fichas/D05-travian.md)).
5. **Companhias de exploração.** As guildas mantêm postos avançados e rotas de suprimento, e disputam regiões de forma assíncrona, em janelas anunciadas.

### O lado RPG

Grupo de heróis com vocações e equipamento que se desgasta. Combate automático guiado por regras que o jogador define. Chefes de região que exigem preparo.

### Loop por escala de tempo

| Escala | O que o jogador faz |
|---|---|
| Minutos (ativo) | Monta e ajusta expedições, compra suprimentos e lê os diários. |
| Horas (ausente) | Expedições avançam, e a capital produz em fila. |
| Dias | O mapa avança; crises; chefes de região. |
| Semanas | Postos de guilda e disputas de região. |
| Temporadas (~10 a 12 semanas) | A corrida final pela cidadela; o mapa se fecha e um novo continente é anunciado. |

### Diferencial que nenhum concorrente tem

A temporada é o produto principal, não um modo secundário: um mapa coletivo, descoberto pelo servidor inteiro, com final. Nenhum idle MMO estudado tem isso ([02](01-pesquisa/02-padroes-matriz-leis.md), leitura 6).

### Por que venceria os jogos de referência

- **Demanda comprovada:** temporadas têm a evidência mais forte da pesquisa. As Leagues do OSRS chegaram a ~241 mil simultâneos, e o Fresh Start do New World trouxe mais gente que a expansão paga ([F03](01-pesquisa/fichas/F03-runescape-e-osrs.md), [G04](01-pesquisa/fichas/G04-new-world.md)).
- **Relançamento a cada temporada:** cada uma é um evento de marketing, e o mapa sendo revelado cabe num vídeo de 10 segundos ([A10](01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).
- **Contra a queixa do veterano:** o recomeço justo responde a "os veteranos dominam" ([C01](01-pesquisa/fichas/C01-milky-way-idle.md)).

### Como a economia e o RMT se encaixam

- **Duas economias:** a fronteira tem moeda de temporada. A capital concentra o ouro, o mercado, o token e o bazar, de modo que o RMT fica fora da temporada (lei 22).
- **Drenos:** os suprimentos consumidos e as perdas de expedição.
- **Caixas:** viram "relicários" achados na fronteira e vendidos na capital.

### Riscos principais

- **Custo de conteúdo:** um continente por temporada é caro. Mitigação: geração procedural com pontos de interesse feitos à mão.
- **Evasão depois do pico:** o PoE caiu de 184 mil para 16 mil em dois meses ([F05](01-pesquisa/fichas/F05-path-of-exile.md)).
- **Final dominado pelas guildas grandes.**
- **Fragmentação:** se a capital esvaziar entre temporadas, a base se divide ([C03](01-pesquisa/fichas/C03-idlescape.md)).

## 4. Conceito C — **Cidade dos Ofícios**

> **Fantasia em uma frase:** você é mestre de ofício numa cidade que os jogadores reconstroem juntos; nada se faz sozinho, e a cidade inteira sobe ou cai pelo que vocês produzem.

### Pilares

1. **Ninguém faz tudo.** Cada personagem domina no máximo dois ofícios mestres, entre cerca de doze. Um item bom exige três ou quatro ofícios diferentes. [H] Nos idles estudados um jogador faz tudo sozinho, e o mercado é opcional ([C01](01-pesquisa/fichas/C01-milky-way-idle.md), [B01](01-pesquisa/fichas/B01-melvor-idle.md)); aqui o mercado é a cola social.
2. **A obra-prima é o momento ativo.** O crafting comum roda em fila. A obra-prima é uma sessão curta de decisões (reagentes, temperatura, acabamento) que define a qualidade: o ativo ganha qualidade, o ausente ganha volume. [H] Crafting com qualidade variável, recomendado no [03](01-pesquisa/03-alem-do-idle.md).
3. **Tudo se gasta.** Ferramentas, armas e armaduras perdem durabilidade e quebram, e a cidade consome materiais em obras. Quem produz sempre tem freguês. [F] A quebra de equipamento sustenta os fabricantes no Shop Titans ([C06](01-pesquisa/fichas/C06-shop-titans.md)).
4. **A cidade é o chefe final.**
   - Os jogadores constroem juntos megaprojetos (muralha, farol, templo) que dão bônus a todos. [F] Metas comunitárias ficaram em 1º no ranking do [03](01-pesquisa/03-alem-do-idle.md).
   - Periodicamente, hordas cercam a cidade. A defesa usa o que foi produzido e guarnições montadas pelas guildas, com inscrição prévia e sem plantão.
5. **Um conselho eleito.** Os jogadores elegem um conselho que decide, dentro de faixas fixadas pela constituição econômica, o próximo megaprojeto e a taxa do mercado local. [H] Como cada conta é um adulto verificado, uma pessoa tem um voto. [NV] *A Tale in the Desert* teve leis votadas pelos jogadores e megaprojetos coletivos.

### O lado RPG

Cada personagem tem uma vocação de combate (guerreiro, caçador, arcanista e outras) e seus ofícios. Vai em expedições automáticas para coletar materiais, entra em masmorras de grupo assíncronas e sobe em maestria. A defesa da cidade é o grande momento de combate do jogo.

### Loop por escala de tempo

| Escala | O que o jogador faz |
|---|---|
| Minutos (ativo) | Faz obras-primas, mexe no mercado, aceita encomendas. |
| Horas (ausente) | Coleta e produção em fila; expedições de material. |
| Dias | Encomendas da cidade: contratos coletivos com prazo e nota individual ([A09](01-pesquisa/fichas/A09-egg-inc.md)). |
| Semanas | Cerco da cidade; avanço dos megaprojetos. |
| Meses | Eleição do conselho; uma nova "Era" da cidade, com ameaça nova e uma regra nova. |

### Prestígio

- **Selo de mestre.** Quem domina um ofício pode passar a oficina a um aprendiz: reseta o ofício e ganha um selo que muda uma regra dele (por exemplo, reforjar sem perda). O que foi produzido e vendido continua existindo.

### Diferencial que nenhum concorrente tem

Três coisas juntas, que nenhum idle tem:
- interdependência forçada de ofícios;
- uma cidade compartilhada, com megaprojetos e cercos;
- um governo eleito pelos jogadores, dentro de regras públicas.

### Por que venceria os jogos de referência

- **Retenção social sem plantão:** encomendas com prazo e cercos com inscrição dão motivo para voltar sem exigir horário ([A09](01-pesquisa/fichas/A09-egg-inc.md), [B06](01-pesquisa/fichas/B06-tap-titans-2.md), [D02](01-pesquisa/fichas/D02-shakes-and-fidget.md)).
- **Economia saudável por desenho:** desgaste e especialização sustentam a demanda e seguram a inflação (leis 6 e 17).
- **Conteúdo sistêmico e barato:** a cidade, os cercos e a política geram histórias novas sem que o estúdio precise escrever um continente por temporada.
- **Funciona com pouca gente:** uma cidade por servidor concentra a população, o que serve ao teto de 2 a 5 mil simultâneos ([08](01-pesquisa/08-mercado-posicionamento.md)).

### Como a economia e o RMT se encaixam

- **Token:** compra conforto.
- **Bazar:** vende mestres de ofício, um valor alto para quem chega tarde.
- **Caixas:** viram "baús de encomenda" que soltam itens.
- **RMT informal:** gira em torno de bens com demanda permanente, porque tudo se gasta.

### Riscos principais

- **Gargalo de ofício:** se ninguém domina couro, todos travam. Mitigação: oficinas NPC de reforço, com preço teto e qualidade baixa.
- **Cartéis de ofício** e captura do conselho pelas guildas ricas.
- **Política tóxica.**
- **Rejeição pelo jogador solitário,** que quer ser autossuficiente.
- **Balanceamento:** equilibrar doze ofícios é difícil.

## 5. Comparação

| Critério | A — Casas da Maré | B — Fronteira | C — Cidade dos Ofícios |
|---|---|---|---|
| Fantasia | Mercador estrategista | Desbravador | Mestre artesão e cidadão |
| Jogo ativo | Mercado e rotas | Crises de 10–15 min | Obras-primas e cercos |
| Social | Companhias de comércio | Corrida de guildas | Cidade inteira, encomendas e conselho |
| Diferencial | Mercados regionais | Mapa coletivo por temporada | Interdependência e governo |
| Força na pesquisa | Economia como conteúdo (EVE, Albion) | Temporadas (OSRS, New World) | Metas comunitárias, contratos co-op, desgaste |
| Funciona com 2–5 mil simultâneos | Fraco (liquidez dividida) | Médio (uma fronteira por vez) | Forte (uma cidade por servidor) |
| Custo de conteúdo | Médio | Alto | Médio-baixo (sistêmico) |
| Risco de bot | Alto (arbitragem) | Médio | Médio (cartéis, farming de material) |
| Público | Nicho trader | Amplo, com picos | Amplo e fiel, menos solo |

## 6. Recomendação

**[H] Recomendamos o Conceito C (Cidade dos Ofícios) como núcleo, com a Fronteira (B) como camada de temporada a partir da segunda temporada.**

Por quê:
1. **É o que a pesquisa mais sustenta.** O C usa as mecânicas que ficaram no topo do estudo de outros gêneros (metas comunitárias, contratos cooperativos, profissões interdependentes, crafting com qualidade) e as leis econômicas mais fortes (desgaste como dreno, bens negociáveis nascidos de produção limitada) ([03](01-pesquisa/03-alem-do-idle.md), [02](01-pesquisa/02-padroes-matriz-leis.md)).
2. **Fecha a conta com pouca gente.** Uma cidade por servidor concentra a população e a liquidez, e o conteúdo sistêmico custa menos para um estúdio pequeno.
3. **A Fronteira entra como temporada, com ficção coerente.** A cidade envia expedições a uma terra nova a cada temporada, uma fronteira por vez, devolvendo títulos, cosméticos e relíquias. Isso traz a evidência de demanda mais forte da pesquisa sem dividir a base (lei 22).
4. **As Casas da Maré ficam como expansão.** Os mercados regionais só fazem sentido quando houver população para uma segunda cidade. Aí, o comércio entre cidades vira o próximo grande sistema.

O que isso entrega frente à concorrência: um idle MMO em que o servidor é uma cidade viva, a economia é o tecido social, e cada temporada é uma expedição coletiva.

## 7. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Massa crítica** | Com poucos jogadores, um ofício fica vazio e trava a cadeia. | Oficinas NPC de reforço com preço teto e qualidade baixa; ofícios equilibrados por simulação na Fase 3. |
| **Cartel de ofício** | Poucos mestres controlam um insumo e sobem o preço. | Teto de ofícios por personagem, NPC de reforço como preço teto e qualidade como concorrência. |
| **Captura do conselho** | Guildas ricas compram votos ou o RMT informal compra contas para votar. | Uma pessoa verificada, um voto; poderes só dentro de faixas constitucionais; contas compradas no bazar com carência para votar. |
| **Política tóxica** | O conselho vira briga e assédio. | Poder limitado, mandato curto, moderação e regras de conduta públicas. |
| **O solitário vai embora** | Quem quer fazer tudo sozinho se frustra com a interdependência. | Rota solo viável e mais lenta, com NPC de reforço; dois ofícios mestres mais acesso básico aos demais. |
| **Obra-prima vira obrigação** | Se a qualidade ativa dominar o mercado, o ausente é punido. | Duas taxas visíveis; a obra-prima melhora a qualidade, mas o volume do ausente tem mercado próprio (P12). |
| **Bots na coleta** | Material bruto gerado em fila é farmado em massa por contas falsas. | Conta = adulto verificado (P8); teto de emissão negociável por conta (P2); detecção por fluxo de valor ([04b](01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| **Caixas e RMT aberto** | Caixa comprável com token, conteúdo negociável e RMT informal reúnem pagamento, sorte e prêmio com valor em dinheiro. | Decisão do Gabriel com risco assumido; probabilidades publicadas, teto de gasto e termos de uso (S2–S5). Revisitar se houver mudança legal. |
| **Temporada esvazia a cidade** | A Fronteira atrai todos e a cidade fica parada. | A cidade abastece a fronteira (suprimentos, equipamentos): a temporada aumenta a demanda pelos ofícios, em vez de competir com eles. |
| **Conteúdo de era** | Cada nova "Era" exige ameaça e regra novas. | Calendário de eras com pelo menos dois de antecedência; eras sistêmicas (regra nova) antes de eras narrativas (conteúdo novo). |

## 8. 🛑 Checkpoint da Fase 2: decisões para o Gabriel

> **Decidido em 2026-11-11:** o Gabriel aprovou as 5 recomendações (opção A em todas).

**1. Qual conceito?**
- **(A) Cidade dos Ofícios como núcleo, com a Fronteira como temporada a partir da segunda temporada, e as Casas da Maré como expansão futura. ← recomendado**
- (B) Cidade dos Ofícios sozinha, sem temporadas.
- (C) Fronteira como núcleo.
- (D) Casas da Maré como núcleo.
- *Por quê:* (A) junta o conceito mais sustentado pela pesquisa e o mais viável com pouca gente à mecânica com a demanda mais comprovada.

**2. Qual a identidade do mundo?**
- **(A) Fantasia original com raízes brasileiras: rios, mata, sertão e litoral, com o folclore reinterpretado como mitologia própria, sem caricatura. ← recomendado**
- (B) Fantasia medieval clássica.
- (C) Outra estética (steampunk, ficção científica leve).
- *Por quê:* a oferta de idles explodiu e "mais um scapelike" se perde ([08](01-pesquisa/08-mercado-posicionamento.md)). Uma identidade brasileira diferencia lá fora e aproxima aqui, como mitologias locais fizeram por outros jogos [H].

**3. O que o token compra?**
- **(A) Conforto e cosmético: assinatura de conveniência, visuais, passe da temporada. Nunca renda, XP ou poder. ← recomendado**
- (B) O mesmo, mais bônus de renda ou XP.
- (C) Só cosméticos.
- *Por quê:* (B) cola o rótulo de pay-to-win ([06](01-pesquisa/06-monetizacao-retencao.md)); (C) tira valor do token e da rota do não pagante ([05d](01-pesquisa/05d-rmt-recomendacao.md)).

**4. Quantos personagens por conta?**
- **(A) Um personagem por conta, com companheiros NPC contratados (não negociáveis). ← recomendado**
- (B) Uma família de 3 a 5 personagens por conta (como o IdleOn).
- (C) Sem limite.
- *Por quê:* a interdependência de ofícios só funciona se uma pessoa não puder ter todos os ofícios em alts. No bazar, uma conta vira um personagem, o que é claro. E um adulto verificado corresponde a um personagem, uma barreira contra multicontas.

**5. Como fica o PvP?**
- **(A) Sem PvP direto no lançamento; a competição é assíncrona (cercos, rankings de guilda, corrida da Fronteira). ← recomendado**
- (B) Arena assíncrona entre jogadores, sem perda de itens.
- (C) Zonas de PvP com perda de itens.
- *Por quê:* o PvP direto pune o ausente e exige plantão ([D04](01-pesquisa/fichas/D04-ogame.md), [03](01-pesquisa/03-alem-do-idle.md)). (B) pode entrar depois, como modo opcional.
