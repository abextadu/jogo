# GDD 14 — Arte e UI

> **Escopo.** Direção de arte em pixel art (três caminhos, comparação e recomendação), regras de produção, a Névoa no mapa, criaturas normais e corrompidas, identidade própria, paleta, tipografia, iconografia, animação, tom de texto, som e música; princípios de UI e UX, navegação, notificações, acessibilidade e PWA. Os wireframes estão em [`14-wireframes/`](14-wireframes/index.html) (abra o `index.html` no navegador).
> **Depende de:** [00-biblia](00-biblia.md). Conversa com os módulos 01 (loops), 04 (bestiário), 06 (obra-prima), 07 (balcões e taxas), 09 (Conselho), 11 (doação, loja e Baú) e 13 (anti-abuso); onde um número pertence a eles, uso o número-âncora da bíblia ou marco "a reconciliar".
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou análise do estúdio · [NV] não verificado. Links acessados em novembro de 2026. **Todo número de interface e de produção (tamanhos, horas, limites, prazos) é [H].** Trechos marcados "via busca" vieram do resumo do buscador, sem abrir a página inteira.
> **Revisão de 2026-11-11.** A direção "Folheto" (xilogravura de cordel) foi descartada pela decisão do Gabriel de adotar fantasia medieval clássica em pixel art ([bíblia, §5, §6.8 e §9](00-biblia.md)). A seção 1 foi reescrita. As decisões de UI e UX da seção 2 continuam valendo, agora com os nomes da tabela de renomeação.

## Resumo

- **Direção recomendada: "Maquete".** Pixel art isométrica (grade de 32 × 16 px), paleta própria de 32 cores com uma rampa exclusiva para a Névoa, e animação de ambiente curta (2 a 4 quadros). A Cidade é desenhada como uma maquete viva, que cresce a cada obra. A Névoa é um pontilhado (*dithering*) que cobre o mapa e recua quando as obras e as expedições avançam. É a direção que mais se afasta do Tibia (grade de 32 × 32 vista de cima), a que dá o melhor gancho num vídeo vertical de 10 segundos ("a Névoa recua e a cidade aparece") e cabe num estúdio pequeno, desde que o isométrico fique só na Cidade e no mapa da Névoa. Criaturas, personagens e itens usam retratos e ícones frontais, mais baratos.
- **Criaturas corrompidas se distinguem sem depender de cor:** silhueta alterada, contorno partido que se desfaz em pontilhado, a "marca da Névoa" nos olhos, fiapos de névoa e o rótulo "corrompida". A cor (a rampa da Névoa) é o último sinal, nunca o único.
- **Tipografia livre:** Jacquarda Bastarda 9 (pixel, inspirada na caligrafia bastarda) nos títulos, Pixelify Sans (pixel legível) nos rótulos curtos e Atkinson Hyperlegible Next no texto corrido e nos números. As três sob a SIL Open Font License.
- **UI:** as decisões continuam: celular primeiro, cinco abas, tudo a no máximo dois toques, Relatório da volta sem "coletar" nem "dobrar", "previsto × confirmado", R$ ao lado de todo preço em Coins, chances do Baú Misterioso na tela de compra, no máximo 4 avisos por dia, WCAG 2.2 AA e PWA com offline só de leitura. O que muda: molduras em pixel art com escala inteira, o mapa da Cidade em isométrico com dois níveis de zoom e uma lista equivalente, a aba "Névoa" e a loja escrita para a doação que credita Coins.
- **Maiores riscos:** o custo do isométrico fugir do controle, a Névoa em pontilhado "tremer" ou cansar a vista, e o jogo ser lido como "mais um medieval em pixel". As mitigações estão nas seções 1.6 a 1.9 e 5.

## 1. Direção de arte

### 1.1 O que a arte precisa resolver

| # | Critério | Por que importa | De onde vem |
|---|---|---|---|
| 1 | **Identidade própria** | Fantasia medieval em pixel art é o terreno mais disputado do gênero, e o "idle MMO de navegador" está sendo ocupado por solos com estética RuneScape; a crítica nº 1 do Idle Clans era ser "clone do Melvor". | [bíblia, riscos](00-biblia.md); [08, H8](../01-pesquisa/08-mercado-posicionamento.md); [C02](../01-pesquisa/fichas/C02-idle-clans.md) |
| 2 | **Não parecer Tibia** | O Tibia é a referência do público brasileiro de MMO, e semelhança visual gera rejeição e risco de propriedade intelectual. | [F04](../01-pesquisa/fichas/F04-tibia.md); [bíblia §3](00-biblia.md) |
| 3 | **Legível no celular a 360 px** | O celular é a plataforma preferida de 44,1% dos jogadores brasileiros (PGB 2026). | [08, §2.1](../01-pesquisa/08-mercado-posicionamento.md) |
| 4 | **Legível num vídeo vertical de 10 segundos** | A descoberta dos idles de sucesso veio de vídeo (o Gnorp Apologue quase todo pelo YouTube). [F] O Google recomenda o formato vertical 9:16 para o Shorts ([Google Ads Help](https://support.google.com/google-ads/answer/16041697?hl=en)). | [A10, §2](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md) |
| 5 | **Barata para um estúdio pequeno** | Os concorrentes têm de 1 a 3 pessoas; cada Era (~13 semanas) pede ameaça, criaturas, cosméticos e, a partir da 2ª Era, uma Fronteira nova. | [08, §1.4](../01-pesquisa/08-mercado-posicionamento.md); [bíblia §6.1](00-biblia.md) |
| 6 | **Escalável em ícones** | 12 ofícios × 6 tiers × 4 qualidades, mais consumíveis, materiais e cosméticos do Baú: centenas de ícones no lançamento [H]. | [bíblia §6.3–6.5](00-biblia.md) |
| 7 | **Acessível** | Contraste e leitura sem depender de cor (seção 2.6). | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) |
| 8 | **Leve no navegador** | PWA com primeiro carregamento de até 1,5 MB (seção 2.7). | [07](../01-pesquisa/07-tecnica-idles-online.md) |

### 1.2 Referências de pixel art moderna, e o que cada uma ensina

| Referência | O que faz | O que aprendemos [H] |
|---|---|---|
| **Tibia** (CipSoft) | [F] Cada quadrado do mapa tem 32 × 32 px, segundo um artista do jogo; itens maiores usam 32 × 64, 64 × 32 ou 64 × 64; parte dos gráficos nem é pixel art "pura": há imagens 3D ou pintadas reduzidas para caber na grade ([TibiaVIP](https://tibiavip.app/home/news?id=4917); [TibiaQA](https://www.tibiaqa.com/24111/?show=24114); via busca). | É o visual a evitar: grade de 32 × 32, vista de cima com leve inclinação, câmera presa ao personagem. Nosso jogo é sobre a cidade, não sobre o herói andando. |
| **Stardew Valley** (ConcernedApe) | [F] Mapas em tiles de 16 × 16 px ([Stardew Valley Wiki, Modding:Maps](https://stardewvalleywiki.com/Modding:Maps); via busca); Eric Barone fez sozinho toda a pixel art, a música e o código, em cerca de quatro anos (as fontes variam entre quatro e quatro anos e meio) ([NPR, 2025](https://www.npr.org/2025/01/24/g-s1-44510/the-legacy-and-future-of-the-farming-game-stardew-valley); via busca). | 16 × 16 vista de cima é barato e legível, e por isso é a cara de metade dos indies. Bom para ícones; genérico como mundo. |
| **Kingdom Two Crowns** (Noio, Coatsink; Raw Fury) | [F] Thomas van den Berg escolheu pixel art pelo caminho mais curto entre o esboço e o jogo, quando trabalhava sozinho, e pelo efeito "impressionista", que deixa o detalhe para a imaginação; apontou como problemas a rotação, que serrilha, e a interface e a fonte, porque pixel art não escala para qualquer tamanho ([Game Developer](https://www.gamedeveloper.com/design/-i-kingdom-two-crowns-i-and-the-practical-intersection-of-pixel-art-and-roguelike-design); via busca). | Pixel art pode ser economia se a regra for clara. A interface e a escala precisam ser desenhadas junto com a arte, não depois. |
| **Songs of Conquest** (Lavapotion) | [F] Fantasia medieval em pixel art com chão e penhascos em 3D e árvores, prédios e personagens em 2D, com bastante luz moderna ([80.lv](https://80.lv/articles/mixing-2d-billboards-and-3d-environments-in-a-game/); via busca). Carl Toftfelt: muita gente acha que pixel art economiza tempo, "mas é o contrário"; mudar pixel art depois obriga a redesenhar todos os quadros. A equipe central começou com 4 pessoas e chegou a 8 ([Game Rant, 12/6/2022](https://gamerant.com/songs-of-conquest-interview-carl-toftfelt-history-early-access-development/)). | A prova de que fantasia medieval em pixel pode ter cara própria, e o aviso mais honesto sobre custo: o que encarece é a revisão. Travar o estilo cedo e animar pouco. |
| **Dead Cells** (Motion Twin) | [F] Thomas Vasseur foi o único artista por um ano; para dar conta, a equipe modelou personagens em 3D simples e renderizou em tamanho mínimo, sem suavização, gerando os quadros em pixel; o ganho principal era ajustar a animação sem redesenhar ([Game Developer, 25/1/2018](https://www.gamedeveloper.com/production/art-design-deep-dive-using-a-3d-pipeline-for-2d-animation-in-i-dead-cells-i-)). | Um caminho para baratear as obras da Cidade, que têm 4 etapas cada: bloco em 3D, render pequeno e retoque à mão (seção 1.13). |
| **Sea of Stars** (Sabotage) | [F] Uma pessoa trabalhou só na luz dinâmica desde o início, em 2018, e todos os assets tinham de atender às necessidades técnicas dessa luz ([God is a Geek, 2023](https://www.godisageek.com/2023/10/interview-with-sea-of-stars-creative-director-thierry-boulanger/); via busca); a equipe passou de 7 para 25 pessoas ([Lords of Gaming, 2022](https://lordsofgaming.net/2022/03/sea-of-stars-hands-off-demo-developer-qa); via busca). | O topo da pixel art moderna custa uma equipe que não temos. |
| **Octopath Traveler** (Square Enix, Acquire) | [F] O "HD-2D" põe sprites de pixel em cenários 3D; a equipe tentou primeiro tudo em pixel e achou o resultado "falso e de baixa qualidade" perto do que queria ([Unreal Engine, 2019](https://www.unrealengine.com/spotlights/octopath-traveler-s-hd-2d-art-style-and-story-make-for-a-jrpg-dream-come-true); via busca). | Bonito e reconhecível como "de outro". Fora do nosso orçamento e do peso de um PWA. |
| **Habbo** (Sulake) | [F] Isométrico em pixel art que parecia tridimensional e era leve o bastante para rodar no navegador no começo dos anos 2000 ([Engadget, 2019](https://www.engadget.com/2019-05-13-habbo-hotel-wandering-the-halls.html); via busca). | O isométrico em pixel é a linguagem histórica do mundo social de navegador: leve e legível como "lugar". |
| **eBoy** (Berlim) | [F] Estúdio de pixel art fundado em 1997, conhecido pelas *Pixoramas*, cidades isométricas enormes que podem levar mais de mil horas cada ([Wikipedia](https://en.wikipedia.org/wiki/EBoy); [Laughing Squid](https://laughingsquid.com/digital-art-collective-eboy-is-making-a-hyper-detailed-pixorama-pixel-art-illustration-of-san-francisco/); via busca). | Uma cidade isométrica em pixel é uma imagem que as pessoas param para olhar e compartilhar. E o aviso de custo: detalhe isométrico não tem fundo. |
| **Return of the Obra Dinn** (Lucas Pope) | [F] Arte de 1 bit em pontilhado; o pontilhado preso à tela "tremia" quando a câmera se movia, e Pope trocou por um padrão preso ao mundo ([Game Developer](https://www.gamedeveloper.com/design/lucas-pope-and-the-rise-of-the-1-bit-dither-punk-aesthetic); via busca). | O pontilhado vira identidade e funciona em escala de cinza. Na Névoa, o padrão fica preso ao mapa, nunca à tela. |
| **Rusty's Retirement** (Mister Morris Games) | [F] Idle de canto de tela em pixel art, com mais de 100 mil cópias na primeira semana ([A10, §3](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)). | Pixel art pequena e animada lê bem numa janela estreita: serve ao nosso modo canto de tela (seção 2.2). |

### 1.3 Três caminhos

**Caminho A — "Miniatura"** (vista de cima, tiles de 16 × 16 px) [H]
- **Como fica:** mapa ortogonal com leve inclinação, como Stardew Valley; paleta de 24 cores; animação mínima (2 quadros nos personagens, ambiente quase parado). A Cidade é uma grade de lotes de 2 × 2 tiles.
- **Custo:** o menor. Um artista de pixel dá conta de uma Era (seção 1.4). Tiles pequenos se reaproveitam muito.
- **Celular a 360 px:** o mais legível. Uma Cidade de 6 × 6 lotes tem 192 px de arte de largura; a 5 pixels do aparelho por pixel de arte (num celular de densidade 3), ela ocupa 320 px de tela e cada lote fica com uns 53 px.
- **Vídeo de 10 s:** legível, mas sem gancho próprio: parece "mais um indie de fazenda" e, de longe, um parente do Tibia.
- **Risco:** genérico. É o visual que todo mundo associa a Stardew e aos *scapelikes* ([A10, §5](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).

**Caminho B — "Maquete"** (isométrica 2:1, grade de 32 × 16 px) [H]
- **Como fica:** a Cidade e o mapa da Névoa em isométrico, como uma maquete vista do alto: cada lote ocupa 2 × 2 losangos (64 × 32 px de base) e os prédios sobem até 64 px. Paleta de 32 cores em rampas. Luz de dia, noite e estação por troca de paleta, não por luz dinâmica. Animação de ambiente: fumaça, bandeiras, roda-d'água, forja acesa, trabalhadores (2 a 4 quadros). Criaturas, personagens e itens **não** são isométricos: são retratos e ícones frontais, mais baratos e mais legíveis.
- **Custo:** médio. O isométrico custa mais por tile e por prédio que o A, mas fica restrito à Cidade e ao mapa da Névoa. Ninguém anda em 8 direções: o jogo é idle, e os trabalhadores ficam no lugar (uma direção, espelhada).
- **Celular a 360 px:** bom, com dois níveis de zoom. A Cidade de 6 × 6 lotes tem 384 px de arte de largura; num celular de densidade 3, a 3 pixels do aparelho por pixel de arte, ela ocupa 384 px de tela, um pouco mais que a largura, com um pequeno arraste. Cada lote, contando o prédio, vira uma área de toque de ~64 × 64 px. A vista do lote dobra a escala. O toque em losango é menos preciso que em quadrado, por isso a área de toque inclui o prédio e a Cidade tem uma lista equivalente (seção 2.6).
- **Vídeo de 10 s:** o melhor gancho dos três. Uma maquete isométrica cabe bem no quadro vertical, e "a Névoa recua e a cidade aparece" é legível sem som e sem texto em 3 segundos.
- **Risco:** o custo subir com detalhe (o aviso do eBoy) e o jogo ser lido como "construtor de cidades". Mitigação: o limite de detalhe da seção 1.6 e o combate e as expedições com linguagem própria (retratos e cartões).

**Caminho C — "Alta definição"** (tiles de 32 × 32 px ou mais, luz dinâmica) [H]
- **Como fica:** pixel art densa, com 64 cores ou mais, luz dinâmica, partículas e muitos quadros, como Sea of Stars, Eastward ou o HD-2D.
- **Custo:** o mais alto. Pede artista técnico de iluminação e várias pessoas de pixel; cada cosmético e cada criatura levam dias.
- **Celular a 360 px:** o detalhe fino vira ruído em tela pequena, e a luz dinâmica pesa no Android de entrada.
- **Vídeo de 10 s:** bonito, mas lido como "JRPG de console" e comparado com jogos de orçamento muito maior.
- **Risco:** não fechar a Era em 13 semanas e estourar o peso do PWA.

### 1.4 Comparação

Notas de 1 a 5, sempre "5 = melhor para nós". É uma leitura do estúdio [H], não uma medição.

| Critério | A — Miniatura | B — Maquete | C — Alta definição |
|---|---|---|---|
| Identidade própria no gênero | 2 | 4 | 3 |
| Distância do Tibia | 2 | 5 | 3 |
| Legibilidade a 360 px e ícone de 24 px | 5 | 4 | 2 |
| Gancho num vídeo vertical de 10 s | 3 | 5 | 4 |
| Custo por asset (5 = mais barato) | 5 | 3 | 1 |
| Custo de animação (5 = mais barato) | 5 | 4 | 1 |
| Mostrar o progresso coletivo (pilar 3) | 3 | 5 | 4 |
| Peso no navegador (5 = mais leve) | 5 | 4 | 2 |
| Conteúdo novo a cada Era | 5 | 4 | 2 |
| **Total** | **35** | **38** | **22** |

**Esforço estimado por Era** [H]. Ponto de partida por Era: uma capa, 3 a 5 criaturas com as versões corrompidas, 40 a 80 ícones de itens, 10 a 20 cosméticos, uma obra nova com 4 etapas e, a partir da 2ª Era, o tileset da Fronteira (a reconciliar com os módulos 04, 05, 10 e 11). As horas são estimativa do estúdio, não medição; uma Era tem ~65 dias úteis.

| Item | A — Miniatura | B — Maquete | C — Alta definição |
|---|---|---|---|
| Ícone de item | ~45 min | ~1 h | ~1,5 h |
| Criatura (retrato, miniatura, versão corrompida, 2 + 2 quadros) | 1,5 a 2 dias | 2 a 3 dias | 5 a 8 dias |
| Obra com 4 etapas | 2 a 3 dias | 4 a 6 dias (2 a 3 com bloco 3D) | 8 a 12 dias |
| Tileset de região | ~6 dias | ~10 dias | ~20 dias |
| **Total por Era** | **25 a 40 dias-pessoa** | **35 a 65 dias-pessoa** | **75 a 140 dias-pessoa** |
| **Equipe mínima de arte** | diretor de arte que também desenha + 1 artista de pixel | diretor de arte + 2 artistas de pixel (cenário isométrico; criaturas e ícones) | diretor de arte + 4 artistas + artista técnico de luz |

### 1.5 Recomendação: Maquete, com a economia da Miniatura nos ícones

**[H] Recomendamos o caminho B (Maquete)** para a Cidade, o mapa da Névoa e a Fronteira, e as regras do caminho A para tudo que é pequeno e numeroso: ícones de interface e de item, retratos de criatura e o personagem do jogador.

- **Referência:** inspira-se no Habbo (isométrico em pixel, leve no navegador e social), nas cidades do eBoy (a cidade isométrica como imagem que se compartilha), no Songs of Conquest (fantasia medieval em pixel com cara própria), no Kingdom Two Crowns (pixel como economia e impressionismo) e no Obra Dinn (pontilhado como identidade). Diferencia-se do Tibia (32 × 32 visto de cima, câmera no herói), da estética RuneScape dos *scapelikes* e do HD-2D, caro demais para nós.
- **Problema que resolve:** dá ao jogo uma imagem que é dele, a Cidade crescendo contra a Névoa, legível em tela pequena e em vídeo curto, com custo de uma equipe de três pessoas de arte e uma Era a cada 13 semanas. O pilar 3 ("a cidade é de todos") vira a primeira coisa que se vê.
- **Comportamento que incentiva:** voltar para ver a Névoa recuar, cooperar nas obras porque o resultado aparece na maquete de todo mundo, e compartilhar a imagem da própria Cidade.
- **Risco que cria:** custo do isométrico, toque impreciso em losangos e a leitura "parece um construtor de cidades". Mitigações: isométrico só onde há cidade e mapa; limite de detalhe (seção 1.6); lista equivalente e área de toque generosa (seção 2.6); combate e expedições em cartões e retratos, que dizem "RPG".

### 1.6 As regras da Maquete

| Elemento | Regra [H] | Por quê |
|---|---|---|
| Grade | Isométrica 2:1: losango de 32 × 16 px. Lote = 2 × 2 losangos (64 × 32 px de base). Prédio de até 64 px de altura. | Proporção clássica do pixel isométrico, com linhas de 2 px por 1 px que não serrilham. |
| Escala | Sempre inteira em pixels do aparelho (2×, 3×, 4×…). O jogo lê a densidade da tela e escolhe o maior inteiro que cabe; a sobra vira margem. Nunca escala fracionária nem rotação de sprite. | [F] O navegador amplia com `image-rendering: pixelated` até o múltiplo inteiro mais próximo e suaviza o resto ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)); escala quebrada borra o pixel. A rotação serrilha (lição do Kingdom). |
| Dois tamanhos de detalhe | **Pequeno** (ícone de 16 px, item de 24 px, miniatura de criatura de 24 px): silhueta, contorno de 1 px, até 4 cores por objeto, sem pontilhado. **Grande** (retrato de 48 px, prédio, capa): rampas completas, pontilhado e textura. | O detalhe fino vira ruído no celular. |
| Contorno | Contorno de 1 px em tom escuro da própria rampa (não preto puro) em tudo que é interativo; cenário sem contorno. | O que se toca se destaca do fundo sem cor extra. |
| Luz | Fonte única fixa, de cima e da esquerda. Dia, noite, estação e Era trocam a paleta, não acendem luz dinâmica. | Coerência, peso baixo e custo baixo; a troca de paleta é barata e muda o clima inteiro. |
| Personagem do jogador | Boneco frontal de 32 × 48 px em camadas (corpo, cabelo, roupa, ferramenta, cabeça), ao menos 6 tons de pele; cada cosmético é uma camada no mesmo esqueleto. Na maquete, o personagem aparece pequeno (16 × 24 px) na própria oficina. | Os cosméticos da loja e do Baú encaixam sem redesenho; o jogador se reconhece. |
| Criaturas | Retrato frontal de 48 × 48 px (combate e bestiário) e miniatura de 24 × 24 px (mapa). Normal e corrompida no mesmo desenho-base (seção 1.8). | Uma criatura nova por Era custa dias, não semanas. |
| Combate e expedições | Cartões: retrato da criatura, retrato do grupo, barras e rótulos. Nada de cena isométrica de batalha. | O combate é idle por regras ([04](04-combate.md)); o cartão é barato, legível e diz "RPG" no vídeo. |
| A Cidade | Cada obra tem 4 etapas desenhadas (andaime, estrutura, pronta, ornada). Cada lote mostra o ofício de quem mora nele (bigorna, tear, fumaça). | O progresso coletivo e a interdependência ficam visíveis num só olhar. |
| Qualidade do item | Moldura simples (Comum), dupla (Bom), com cantos ornados (Fino) e ornada com o selo do mestre (Obra-prima), sempre com o nome escrito. | Nunca depender só de cor; a obra-prima assinada vira reputação do artesão. |
| Tier do material | Numeral (T1 a T6) no canto do ícone e o nome do material na legenda (materiais do [módulo 05](05-itens.md)). | O jogador do mercado lê número; o novato lê nome. |
| Molduras de interface | Painéis em pixel art de 9 partes (cantos fixos, bordas que se repetem), em escala inteira; ornamento de iluminura (capitular e margem) só nos cabeçalhos, no Relatório da volta e nas capas. Telas de trabalho (Bolsa, formulários) ficam limpas. | Identidade sem roubar espaço de leitura (seção 1.9). |
| Capa da Era | Uma cena isométrica grande da ameaça da Era, desenhada pelo diretor de arte. | É a peça de marketing da temporada e a imagem do vídeo de lançamento. |
| Limite de detalhe | Um prédio da maquete leva no máximo ~3 dias de pixel, já com as 4 etapas em bloco 3D; se passar disso, simplificar antes de seguir. | O aviso do eBoy e do Songs of Conquest: pixel art não economiza tempo sozinha; a regra é que economiza. |

### 1.7 A Névoa no mapa

A bíblia define a Névoa como a "neblina de guerra" que as obras e as expedições dissipam ([§3](00-biblia.md)). No mapa ela tem três estados, todos legíveis em escala de cinza [H]:

| Estado | Como aparece | O que o jogador sabe |
|---|---|---|
| **Encoberta** | Pontilhado denso em dois tons da rampa da Névoa, cobrindo o terreno. Só aparecem as silhuetas do que é alto: uma torre em ruínas, uma árvore enorme, o contorno de uma muralha antiga. | Que existe algo ali, mas não o quê. Gera curiosidade sem revelar o conteúdo. |
| **Avistada** (a borda) | Pontilhado ralo; o terreno aparece com a paleta trocada para a rampa da Névoa (cores apagadas e frias) e sem animação de vida. As criaturas corrompidas da região ficam visíveis. | O que há na região e o que custa libertá-la. É o alvo da próxima obra ou expedição. |
| **Liberta** | Cores plenas da região e animação de vida: pássaros, fumaça, água correndo, gente nos caminhos. | Que a região é da Cidade, com coleta e caminhos abertos. |

**Como recua** [H]: quando uma obra conclui uma etapa ou uma expedição liberta uma região, a borda do pontilhado recua lote a lote, numa varredura de 1 a 3 segundos que o jogador vê ao voltar (no Relatório da volta e no mapa). Com movimento reduzido, a troca é instantânea. A Fronteira usa a mesma regra num mapa novo, que começa todo encoberto e é dissipado pelo esforço do servidor inteiro.

**Regras técnicas** [H]:
- O padrão do pontilhado fica **preso ao mapa**, não à tela, para não tremer quando o jogador arrasta o mapa (a lição do Obra Dinn). A Névoa se move devagar (deriva de 1 px a cada meio segundo, no máximo), e nada nela pisca.
- A rampa da Névoa é **exclusiva**: nenhum outro elemento do jogo usa aqueles quatro tons (seção 1.10). Na interface, a mesma família de tons (o token "Névoa" da seção 1.10) marca o que é "previsto" (seção 2.1, princípio 5): a Névoa é a cor da incerteza.
- Opção de acessibilidade "Névoa estática" (sem deriva) e "Névoa em contorno" (alto contraste: a área encoberta vira hachura grossa com o rótulo "Encoberta").

- **Quatro perguntas:** inspira-se na neblina de guerra dos jogos de estratégia e no pontilhado do Obra Dinn; diferencia-se da névoa "nuvem" pintada, que some em escala de cinza · resolve mostrar, sem texto, o que é da Cidade, o que é disputado e o que é desconhecido · incentiva planejar obras e expedições pelo que se vê na borda e voltar para ver o recuo · arrisca cansar a vista, tremer no celular e frustrar quem quer ver o mapa todo; mitigação: padrão preso ao mapa, deriva lenta, opções estática e em contorno, e silhuetas que prometem sem esconder demais.

### 1.8 Criaturas normais e corrompidas

O bestiário é de fantasia medieval clássica com desenho próprio, e muitas criaturas são corrompidas pela Névoa ([bíblia §3](00-biblia.md)). [F] As diretrizes de acessibilidade do Xbox pedem que nenhuma informação dependa só de cor e que o que a cor diz também venha por forma, padrão, ícone ou rótulo ([XAG 103](https://learn.microsoft.com/en-gb/gaming/accessibility/xbox-accessibility-guidelines/103); via busca); o *Game Accessibility Guidelines* diz o mesmo ([GAG, básico](https://gameaccessibilityguidelines.com/basic/)). Por isso a versão corrompida tem **cinco sinais**, e a cor é o último [H]:

| # | Sinal | Na criatura normal | Na corrompida |
|---|---|---|---|
| 1 | **Silhueta** | Postura e proporções naturais | Postura curvada e assimétrica, mais protuberâncias (espinhos, membros alongados). A diferença tem de aparecer na silhueta toda preta, a 24 px. |
| 2 | **Contorno** | Fechado e contínuo, 1 px | Partido nas bordas, desfazendo-se no pontilhado da Névoa |
| 3 | **Marca da Névoa** | Olhos naturais | Um losango de 2 × 2 px claro no lugar dos olhos: o ponto mais claro do sprite, legível em escala de cinza |
| 4 | **Fiapos** | Nenhum | Fiapos de pontilhado saindo do corpo (2 quadros; parados com movimento reduzido) |
| 5 | **Rótulo** | Nome ("Lobo cinzento") | Nome e ícone ("◆ Lobo cinzento corrompido"), no cartão e para o leitor de tela |
| — | Cor | Rampa da região | Paleta trocada para a rampa da Névoa (fria e apagada) |

- **Libertar é desfazer os sinais:** na animação de libertação, o contorno fecha, os fiapos somem, a marca vira olho e a cor volta. A recompensa narrativa da bíblia ("libertar não é só abater") vira imagem.
- **Produção:** a corrompida é uma variação da normal (mesmo desenho-base, mais camadas e troca de paleta), o que mantém o custo da seção 1.4.
- **Teste obrigatório** [H]: cada par normal × corrompida é reconhecido em escala de cinza e com simulação de protanopia, deuteranopia e tritanopia, a 24 px, por 4 de 5 pessoas que nunca viram o jogo.
- **Quatro perguntas:** inspira-se nas XAG e no GAG e na lógica de "estado por forma" dos jogos de estratégia legíveis; diferencia-se do "inimigo de elite em vermelho", que some para o daltônico · resolve a leitura do estado mais importante do combate e do mapa para quem não distingue cores (cerca de 1 em 12 homens, seção 2.6) · incentiva o jogador a ler o mapa de longe e a buscar a libertação · arrisca deixar as corrompidas "todas iguais" (espinho e olho brilhante em tudo); mitigação: a corrupção deforma a silhueta própria de cada espécie, e o módulo 04 define o que cada uma ganha.

### 1.9 Identidade própria: fantasia medieval em pixel sem ser clone

[H] O gênero é comum; a execução é nossa ([bíblia §3](00-biblia.md)). Seis regras:

1. **A Cidade é a protagonista, não o herói.** O Tibia põe a câmera no personagem que anda; nós pomos a câmera numa maquete que cresce. A primeira imagem de qualquer vídeo é a Cidade, não um guerreiro.
2. **Isométrico, não vista de cima.** É a escolha que mais nos separa do Tibia, de Stardew e dos *scapelikes* ([A10, §5](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).
3. **A Névoa em pontilhado com rampa exclusiva.** Nenhum jogo do gênero estudado na Fase 1 trata a neblina de guerra como textura de pixel com estados (encoberta, avistada, liberta). É o "truque legível em vídeo" que a pesquisa pede ([08, H8](../01-pesquisa/08-mercado-posicionamento.md)).
4. **A crônica iluminada.** A interface conversa com o manuscrito medieval: capitulares em pixel, margens com pequenas figuras e bordas de folhagem nos cabeçalhos, no Relatório da volta e nas capas. [F] Folhagens como a videira, a hera e o acanto estão entre os motivos mais persistentes das bordas dos manuscritos iluminados, e as margens eram cheias de figuras cômicas que viravam o mundo do avesso ([British Library, 2020](https://www.bl.uk/stories/blogs/posts/ludicrous-figures-in-the-margin); [Universidade de Nottingham](https://www.nottingham.ac.uk/manuscriptsandspecialcollections/researchguidance/medievalbooks/decorationandillumination.aspx); via busca). [H] No Relatório da volta, a marginália reage ao que aconteceu: um ferreiro dormindo se a fila parou, um goblin fugindo com o carvão se o insumo acabou. É barato (figuras de 16 px) e dá vontade de mostrar.
5. **Criatura clássica, desenho próprio.** Cada criatura parte de uma silhueta clássica reconhecível em 1 segundo (lobo, goblin, troll) e ganha um traço de Aldária: a deformação própria da corrupção, materiais e cores da região. Nada de copiar monstros, nomes ou mapas de outros jogos.
6. **Revisão de semelhança** antes de fechar cada criatura, prédio e tela-chave: comparação lado a lado com Tibia, RuneScape, Albion, Habbo e os *scapelikes* do momento, registrada numa ficha (o que se parece, o que mudamos). A bíblia já pede essa revisão ([riscos](00-biblia.md)).

**Cuidados de representação** [H]: (a) raças e povos de fantasia não carregam traços de estereótipos étnicos reais, um problema conhecido de orcs e goblins no gênero; (b) nenhum símbolo religioso real marca inimigo ou criatura corrompida; (c) o boneco do jogador tem tons de pele e tipos de corpo variados desde o lançamento.

- **Quatro perguntas:** inspira-se no manuscrito iluminado, no eBoy e no Habbo; diferencia-se do Tibia e da estética RuneScape · resolve o risco de "mais um clone" e o risco de propriedade intelectual · incentiva criadores a gravar a Cidade e a marginália · arrisca o ornamento roubar espaço e virar pastiche medieval; mitigação: ornamento só em cabeçalhos e capas, telas de trabalho limpas, teste de leitura a 360 px.

### 1.10 Paleta

**A paleta da arte: 32 cores em 8 rampas de 4 tons** [H]. Cada rampa muda um pouco de matiz do escuro para o claro (sombras mais frias, luzes mais quentes), em vez de só escurecer. [F] É o método de rampas com deslocamento de matiz que o artista Raymond Schlitter (Slynyrd) ensina, com poucas cores por imagem ([Pixelblog 1](https://www.slynyrd.com/blog/2018/1/10/pixelblog-1-color-palettes); via busca). [F] O Lospec reúne paletas públicas de 32 cores, como a Endesga 32 ([Lospec](https://lospec.com/palette-list/tag/endesga); via busca); usamos essas paletas como estudo, e a nossa é desenhada do zero. Valores iniciais, a fechar no protótipo:

| Rampa | Do escuro ao claro | Uso |
|---|---|---|
| Pedra | #2A2630 · #4E4852 · #7C7478 · #B3A9A3 | Muralhas, montanha, contorno de cenário |
| Pergaminho e pele | #8A5A44 · #C08A62 · #E3BC8E · #F6E6C8 | Pele, palha, papel, molduras |
| Terra e madeira | #3B2418 · #66402A · #94643A · #C69458 | Madeira, couro, caminhos, pele escura |
| Musgo | #1E3A2E · #2F6040 · #5C8F45 · #A3C46A | Floresta, campos, pântano |
| Água e céu | #1B2A4A · #285C8C · #4A93BF · #A2D3E2 | Rios, litoral, aço, céu |
| Fogo e ferrugem | #4A1C1C · #8E3324 · #D06A2E · #F2B04A | Forja, fogo, telhados, ouro (com a terra) |
| Realeza | #2E1838 · #5E2A72 · #9A55A8 · #D9A3D8 | Estandartes, magia, Coins |
| **Névoa (exclusiva)** | #3A3848 · #5E5B70 · #8D8A9C · #C9C6D4 | Só a Névoa e as criaturas corrompidas |

Regras [H]:
- **Regiões por combinação de rampas:** floresta (musgo e terra), montanha (pedra e água), pântano (musgo escuro e água escura), litoral (água e pergaminho).
- **Tons de pele:** as rampas de pergaminho e de terra dão ao menos 6 tons de pele ao boneco do jogador.
- **Eras e estações por troca de paleta:** o inverno troca o musgo por tons de água claros; a festa da colheita aquece a terra. Uma troca de paleta custa horas, não semanas.
- **A rampa da Névoa não aparece em mais nada**, para que a Névoa e a corrupção sejam lidas de longe.

**A paleta da interface** [H]. A interface tem tokens próprios, da mesma família de cores. Os contrastes foram calculados pelo estúdio com a fórmula de luminância relativa do WCAG ([W3C](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio)) contra o fundo indicado; o mínimo para texto normal no nível AA é 4,5:1, e para componentes de interface, 3:1 ([WCAG 2.2, 1.4.3 e 1.4.11](https://www.w3.org/TR/WCAG22/)).

| Token | Modo dia (sobre pergaminho #F3EAD7) | Contraste | Modo noite (sobre pedra #1D1B24) | Contraste | Uso |
|---|---|---|---|---|---|
| Fundo | #F3EAD7 | — | #1D1B24 | — | Fundo |
| Tinta | #211C1A | 14,1:1 | #EEE7DA | 13,8:1 | Texto, contorno |
| Azul-real | #1F4C8A | 7,1:1 | #8FB6EC | 8,2:1 | Ação principal; **compra** na Bolsa |
| Ferrugem | #A33F1E | 5,3:1 | #EE9C7A | 7,8:1 | Alerta; **venda** na Bolsa |
| Musgo | #2E6A3E | 5,4:1 | #86CB9C | 8,9:1 | Obras, crescimento, confirmado |
| Ouro (preenchimento) | #D6A322 | 1,9:1 (só preenchimento; tinta sobre ele: 7,3:1) | #E9C45C | 10,1:1 | Ouro |
| Ouro escuro | #7D590B | 5,3:1 | — | — | Texto de ouro no modo dia |
| Púrpura | #6A2D82 | 7,6:1 (branco sobre ele: 9,1:1) | #D1A6E8 | 8,4:1 | Coins, doação, loja, Câmbio e Bazar de Personagens |
| Névoa | #7F7C8F (preenchimento) / #585566 (texto) | 3,4:1 / 6,0:1 | #737087 / #AAA7BB | 3,6:1 / 7,3:1 | Névoa, previsto, desabilitado |

Regras [H]:
- **Compra e venda em azul e ferrugem** porque azul contra vermelho-alaranjado é o eixo que se mantém distinguível nas deficiências de vermelho e verde, a lógica da paleta de Okabe e Ito para daltonismo ([Okabe e Ito, *Color Universal Design*](https://jfly.uni-koeln.de/color/); via busca). Mesmo assim, compra e venda sempre levam rótulo e forma (▲ compra, ▼ venda).
- **Os Coins têm cor própria (púrpura),** usada só na loja, na doação, no Câmbio, na Troca de Coins e no Bazar de Personagens. Dinheiro real nunca se disfarça de ouro: cor diferente e silhueta diferente (seção 1.12).
- **O modo noite é pedra escura, não preto puro,** para reduzir o brilho no celular à noite sem perder o clima.
- **Previsto em névoa, confirmado em tinta** (seção 2.1, princípio 5).

- **Quatro perguntas:** inspira-se nas rampas com deslocamento de matiz da pixel art moderna e na paleta de Okabe e Ito; diferencia-se das paletas saturadas "de arcade" · resolve coerência entre centenas de assets, leitura da Névoa e da corrupção e o contraste da interface · incentiva a reutilização (troca de paleta por Era) · arrisca o jogo parecer apagado, com tanto cinza de Névoa no começo; mitigação: as regiões libertas recebem as cores mais vivas e a Cidade é sempre a área mais colorida da tela.

### 1.11 Tipografia

| Papel | Fonte | Designer e origem | Licença | Por quê |
|---|---|---|---|---|
| Títulos, letreiros e capas | **Jacquarda Bastarda 9** | [F] Sarah Cadigan-Fried, da Soft Type Collection; revive um letreiro de bordado de c. 1880 com influência da caligrafia bastarda; o "9" é a altura da maiúscula em pixels; 1 peso; cobertura declarada de 407 idiomas de escrita latina ([Fontsource](https://fontsource.org/fonts/jacquarda-bastarda-9/about)) | SIL OFL 1.1 | Pixel e medieval ao mesmo tempo, sem ser gótica de filme. Só em títulos curtos e grandes, em tamanhos que alinhem a grade da fonte à da tela (testar 18, 27 e 36 px). |
| Rótulos curtos, botões e saldos | **Pixelify Sans** | [F] Stefie Justprince; pixel, inspirada nos gráficos de computador e videogame dos anos 1980; variável de 400 a 700; latim e cirílico ([Fontsource](https://fontsource.org/fonts/pixelify-sans/about)) | SIL OFL 1.1 | A fonte pixel legível: rótulos de até três palavras, a 16 px ou mais. |
| Texto corrido, tabelas e números da Bolsa | **Atkinson Hyperlegible Next** | Braille Institute (EUA), para leitores com baixa visão; distingue caracteres que se confundem, como B e 8 ou 1, l e I ([Wikipedia](https://en.wikipedia.org/wiki/Atkinson_Hyperlegible); [GitHub](https://github.com/googlefonts/atkinson-hyperlegible)) | SIL OFL | Leitura longa sem cansaço. A opção "Fonte de alta legibilidade" troca também as duas fontes pixel por ela. |

- [F] **Licença.** O Google Fonts informa que as fontes do catálogo podem ser usadas comercialmente e incluídas em produtos vendidos ([Google Fonts, perguntas frequentes](https://developers.google.com/fonts/faq?hl=pt-br)). A OFL permite embutir e distribuir a fonte com o jogo; o que ela veda é vender a fonte sozinha, e versões modificadas não podem usar o nome reservado ([OFL](https://openfontlicense.org/)). **Validar com advogado** o uso em marca registrada (logotipo).
- [H] **Regra de ouro:** nenhuma fonte pixel em texto de mais de uma linha. Pixel font é tempero, não prato.
- [H] **Acentos:** testar ã, õ, ç, ê, á e é nas duas fontes pixel a cada tamanho usado. A cobertura declarada inclui o português, mas acento em grade de 9 px costuma colidir com a linha de cima [NV].
- [H] **Números:** saldos, preços e quantidades usam algarismos de largura fixa (tabulares), para que as colunas da Bolsa não "dancem". [NV] Não verifiquei se a Atkinson Hyperlegible Next tem algarismos tabulares; se não tiver, os números da Bolsa usam uma monoespaçada livre.
- [H] **Escala:** texto base de 16 px no celular, secundário de 14 px no mínimo, títulos de 24 a 36 px, altura de linha de 1,45. O jogador escala tudo de 100% a 200% (seção 2.6).
- [H] **Peso:** só os glifos latinos, em woff2, e no máximo três famílias. Meta de até ~150 KB de fontes no primeiro carregamento.
- [H] **Logotipo:** desenhado pixel a pixel pelo diretor de arte, não composto numa fonte. É a marca e precisa ser exclusivo.

### 1.12 Iconografia

- **Grade** [H]: ícones de interface em 16 × 16 px de arte, mostrados a 2× (32 px de tela) dentro de alvos de 44 px; ícones de item em 24 × 24 px, mostrados a 2× (48 px) nas listas e a 4× (96 px) no detalhe. Contorno de 1 px em tudo.
- **Teste obrigatório** [H]: todo ícone precisa ser reconhecido em escala de cinza, no tamanho de lista, por 4 de 5 pessoas que nunca viram o jogo (teste rápido de corredor).
- **Ícone nunca sozinho na navegação:** a barra de abas tem ícone e texto. Ícone sem rótulo só para ações universais (fechar, voltar), com nome acessível.
- **Ferramentas dos ofícios** (primeira proposta [H], para a família visual ser reconhecível):

| Ofício | Ícone | Ofício | Ícone | Ofício | Ícone |
|---|---|---|---|---|---|
| Mineração | picareta | Fundição | cadinho | Ferraria | bigorna |
| Lenhadoria | machado | Carpintaria | plaina | Alfaiataria | agulha e linha |
| Pesca | anzol | Curtume | faca de descarnar | Alquimia | frasco |
| Colheita | cesto | Tecelagem | lançadeira | Culinária | caldeirão |

- **Moedas e marcadores** [H]: **Ouro**, moeda redonda de borda serrilhada (cor ouro); **Coins**, moeda hexagonal com uma coroa (cor púrpura); **Marcos**, marco de pedra de caminho com uma bandeirola; **Mérito**, pedra lavrada com o brasão da Cidade, porque é contribuição para a cidade. As quatro formas são diferentes em silhueta, não só em cor.
- **Marca da Névoa:** o losango (◆) é o ícone de "corrompida" em todo o jogo, igual ao dos olhos das criaturas (seção 1.8).
- **Estados:** ícone de estado sempre com texto ("Pronto", "Em fila", "Bloqueado — nível 50").

### 1.13 Animação e produção

| Elemento | Quadros [H] | Ritmo [H] |
|---|---|---|
| Ambiente da Cidade (fumaça, bandeira, roda-d'água, forja) | 2 a 4 | 6 a 8 quadros por segundo |
| Trabalhadores na oficina | 2 a 4, numa direção, espelhada | 6 a 8 quadros por segundo |
| Criatura no cartão | 2 parada, 2 golpe, 4 libertação | 8 quadros por segundo |
| Névoa | deriva do padrão, sem quadros | até 2 px por segundo |
| Recuo da Névoa e etapa de obra | varredura | 1 a 3 s, pulável |
| Interface | transições curtas, sem tremor de tela | 150 a 200 ms |

Regras [H]:
- **Tudo desligável:** com movimento reduzido, cada animação para no primeiro quadro, e as varreduras viram troca instantânea. Nada pisca mais de três vezes por segundo (WCAG 2.3.1).
- **Aparelho fraco:** ambiente a 4 quadros por segundo, sem fiapos de Névoa, e a Cidade só anima os lotes visíveis.
- **O gancho de 3 segundos:** ao concluir uma etapa de obra, a Cidade mostra a varredura da Névoa e a obra subindo de etapa. É o recorte natural para o vídeo vertical, e o jogador pode salvá-lo como imagem ou clipe curto (a reconciliar com o módulo 10).

**Produção** [H]:
1. **Travar o estilo antes de produzir em escala.** Uma fatia vertical com uma região, 6 obras, 4 criaturas (com as corrompidas) e 60 ícones, testada em celulares de entrada e em vídeos verticais, antes de qualquer produção em lote. É a lição do Songs of Conquest: o que encarece pixel art é refazer.
2. **Obras com bloco 3D:** cada prédio nasce como um bloco simples em 3D, renderizado pequeno e sem suavização na grade isométrica, e é retocado à mão; as 4 etapas saem do mesmo bloco. É a ideia do Dead Cells aplicada a prédios. Se o retoque custar mais que desenhar direto, desenhamos direto.
3. **Biblioteca de partes:** telhados, janelas, portas, andaimes e estandartes reutilizáveis, para montar prédios novos sem começar do zero.
4. **Entrega leve:** atlas de sprites em PNG ou WebP sem perdas; a arte de cada aba só carrega quando a aba abre (seção 2.7).

- **Quatro perguntas:** inspira-se no Kingdom Two Crowns (poucos quadros, muito clima), no Dead Cells (3D para baratear revisões) e no Rusty's Retirement (pixel pequeno e animado numa janela estreita); diferencia-se da animação rica do Sea of Stars · resolve o custo por Era e o peso do PWA · incentiva a sensação de cidade viva mesmo com o jogador ausente · arrisca a Cidade parecer parada; mitigação: muitas animações pequenas em vez de poucas grandes, e a varredura da Névoa como o momento de espetáculo.

### 1.14 Tom de texto

**A voz é a de um cronista da Cidade** [H]: calorosa, clara, que fala com "você", conta o que aconteceu e não grita. Tem três registros:

| Registro | Onde | Como |
|---|---|---|
| Funcional | Botões, formulários, Bolsa, loja | Verbo direto e curto ("Vender", "Inscrever no cerco", "Doar com Pix"). Números exatos. Nada de trocadilho. |
| Narrativo | Relatório da volta, crônicas da Era, bestiário | Frases de cronista ("Enquanto você esteve fora, o carvão acabou às 3h12"). |
| Cerimonial | Proclamações do Conselho, capa da Era, títulos de mérito | Um toque de solenidade medieval, escrito por roteirista contratado e creditado; nada de "vós" e "mui" fora daqui. |

Regras [H]:
- **Sem urgência fabricada nem culpa:** nada de "volte ou perca", "só hoje", "seus amigos estão na sua frente". [F] A lista de práticas que os jogadores consideram predatórias inclui oferta por tempo limitado e moeda que esconde o preço real ([06, §2.3](../01-pesquisa/06-monetizacao-retencao.md)).
- **Formato brasileiro:** R$ 19,90; 12.430 de ouro; "sáb., 14/11, 20h (horário de Brasília)". Sempre dia da semana e fuso nos prazos.
- **Glossário sempre:** Cidade, Ofício, Fila, Obra-prima, Encomenda, Obra, Cerco, Conselho, Era, Névoa, Fronteira, Bolsa, Feira, Leilão, Câmbio, Troca, Bazar de Personagens, Baú Misterioso, Coins, IPC, Mérito, Marcos, Relatório da volta. Toque longo num termo abre a explicação.
- **Inglês é localização, não tradução:** a versão EN tem nomes próprios para a Cidade e as regiões e o mesmo tom; o registro cerimonial é reescrito por um redator nativo.

| Em vez de | Escreva |
|---|---|
| "Sua produção foi limitada!" | "92 lingotes podem ir ao mercado hoje. Os outros 16 viraram Mérito para a Muralha." |
| "Oferta imperdível! Acaba em 02:14:59" | "Fachada 'Enxaimel' · 20 Coins (R$ 20 em doação)" |
| "Volte agora ou perca o cerco!" | "Inscrições do cerco fecham amanhã, sex., 20h. Você não precisa estar online no sábado." |
| "Erro 409" | "Esse item mudou no outro aparelho. Atualizamos a tela; confira antes de vender." |

### 1.15 Som e música

**Direção:** música de taverna e de praça, tocada por gente [H].

**Referência** [F]: em 2020, versões de músicas pop com instrumentos e vozes de estilo medieval (o "bardcore") viraram tendência no YouTube, com milhões de visualizações ([Dazed, 2020](https://www.dazeddigital.com/music/article/49595/1/bardcore-is-the-medieval-music-trend-taking-over-youtube-lady-gaga-radiohead); via busca). [H] O timbre medieval é reconhecível em segundos e circula bem em vídeo.

**Proposta** [H]
- **Trilha original acústica:** alaúde, viela de roda, flauta doce, saltério, harpa, gaita de foles e tambores de mão, com um coro pequeno nos cercos. **Sem chiptune:** a imagem já diz "pixel"; o som acústico dá calor e afasta a cara de "jogo de 8 bits genérico".
- **O tema da Cidade cresce com as obras:** começa só com um alaúde, e cada obra concluída acrescenta um instrumento ao arranjo (música em camadas). A Cidade de um servidor maduro soa como uma banda inteira. É a mesma regra da imagem: o progresso coletivo também se ouve.
- **Regiões:** a floresta tem flautas e harpa; a montanha, tambores graves e sopros de metal; o pântano, viela de roda em bordão; o litoral, cordas dedilhadas e ondas. **A Névoa** é a mesma melodia com os instrumentos desafinando e sumindo sobre um bordão grave.
- **Gravação:** com músicos contratados e creditados, com contrato claro de direitos para jogo, trailer e transmissões ao vivo (**validar com advogado**: Lei 9.610/1998, [Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm)). Os criadores de conteúdo podem usar a trilha sem bloqueio de direitos, porque o vídeo é o canal de descoberta.
- **O idle toca em segundo plano:** a música vem baixa por padrão e para quando a aba está oculta; os efeitos sonoros ficam ligados e curtos. Há uma "Rádio da Cidade" opcional, com as faixas em sequência longa para tocar enquanto o jogador trabalha.
- **Assinatura de ofício:** cada ofício tem o seu som de trabalho (martelo na bigorna, serrote, tear, caldeirão). A fila em andamento soa como uma oficina viva, e o jogador reconhece o ofício pelo ouvido.
- **Feira e Leilão:** vozes de feira e um pregoeiro no Leilão, gravados por atores, baixos por padrão.
- **Obra-prima:** o ritmo acompanha as etapas (o tambor acelera na têmpera), mas nenhum resultado depende de ouvir (seção 2.6).
- **Avisos:** cada aviso tem o seu som curto e distinto ("fila terminou" é diferente de "cerco"), sem sirenes nem sons de ansiedade.
- **Evitar:** música sacra real (missa, canto litúrgico) associada às criaturas corrompidas, pelo mesmo cuidado da seção 1.9.

- **Quatro perguntas:** inspira-se no bardcore e na música medieval de pequenos conjuntos; diferencia-se do chiptune da maioria dos jogos em pixel · resolve dar calor e identidade a um jogo que fica horas aberto em segundo plano · incentiva deixar o som ligado, porque o tema da Cidade muda com o que o servidor constrói · arrisca soar como "trilha de feira renascentista" genérica; mitigação: um compositor com tema próprio para a Cidade e as regiões, e a regra das camadas, que nenhum outro jogo do gênero estudado usa.

## 2. UI e UX

> As decisões desta seção vêm da versão anterior do módulo e continuam valendo. Na revisão de 2026-11-11 mudaram os nomes (bíblia, §9), a loja (doação que credita Coins, [módulo 11](11-monetizacao.md)) e o que a pixel art pede da interface: escala inteira, mapa isométrico com lista equivalente e a aba "Névoa".

### 2.1 Princípios

Cada princípio com as quatro perguntas: referência, problema, comportamento e risco. Todos são [H], apoiados nas fontes indicadas.

| # | Princípio | Regra | Referência | Problema que resolve | Comportamento que incentiva | Risco e mitigação |
|---|---|---|---|---|---|---|
| 1 | **Celular primeiro, uma mão** | Tela-base de 360 × 640 px; ações principais na metade de baixo, ao alcance do polegar; o desktop é a versão expandida, não o contrário. | 44,1% preferem o celular ([08](../01-pesquisa/08-mercado-posicionamento.md)) | O jogo é aberto no ônibus, na fila, no intervalo. | Sessões curtas e frequentes. | O trader de desktop se sentir apertado → Bolsa com modo denso no desktop. |
| 2 | **Cinco segundos para entender a volta** | A tela inicial responde, nesta ordem: o que mudou, o que precisa de mim, o que vence primeiro. | Sessão de 5 a 15 min, 2 a 6 vezes por dia ([bíblia §6.1](00-biblia.md)) | Sessões curtas gastas procurando informação. | Decidir em vez de garimpar. | Resumo esconder profundidade → todo cartão abre a tela completa em um toque. |
| 3 | **Tudo a no máximo dois toques** | Chegar à tela de qualquer ação frequente em até 2 toques a partir da Cidade; a confirmação de uma ação de valor ou de um voto não conta como toque de navegação (seção 2.3). | Baú AFK com 1 ou 2 logins por dia ([E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md)) | Atrito mata a sessão curta. | Voltar mais vezes, por menos tempo. | Tela inicial lotada → só cinco cartões de agenda; o resto mora nas abas. |
| 4 | **A volta é um presente** | O **Relatório da volta** abre em sequência (oficina, mercado, Cidade, recados), pulável com "Mostrar tudo". Tudo já está creditado; não existe botão de "coletar", "dobrar" nem anúncio. A primeira linha é a consequência do plano: "seu plano rendeu X; o gargalo foi Y". | A tela de volta deve mostrar a consequência do plano ([02a, §6](../01-pesquisa/02a-teoria-design-idle.md)); o Melvor simula 24 h na volta ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); insight 14 ([síntese](../01-pesquisa/00-sintese.md)) | O ausente precisa se sentir esperto, não sortudo. | Planejar antes de sair. | Virar ritual de caça-níquel → sem sorteio encenado, sem suspense artificial, com redução de movimento. |
| 5 | **Previsto × confirmado** | O que o servidor ainda não liquidou aparece em cor de névoa, tracejado e com o rótulo "previsto"; o confirmado aparece em tinta. | [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md) | A sensação de "o jogo me roubou" quando a reconciliação corrige a previsão. | Confiar no número. | Mais um código visual para aprender → legenda no primeiro uso; a Névoa já ensina que "cinza = incerto". |
| 6 | **Dinheiro sem disfarce** | Todo preço em Coins mostra o equivalente em R$ ao lado ("20 Coins (R$ 20 em doação)"). Na loja, o teto de doação do mês fica visível. Nada de contagem regressiva de oferta nem de desconto "de/por" sem preço anterior real. | Moeda que esconde o preço real e oferta por tempo limitado estão na lista de práticas predatórias ([06, §2.3](../01-pesquisa/06-monetizacao-retencao.md)); [F] o CDC exige informações "corretas, claras, precisas" e ostensivas sobre preço na oferta ([Lei 8.078/1990, art. 31](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm); **validar com advogado**); paridade de 1 Coin por R$ 1,00 ([11, §2.5](11-monetizacao.md); revisão de consistência: R17) | Confiança é produto ([pilar 5](00-biblia.md)). | Doação consciente e recorrente. | Converter menos que a média do mercado → é o preço da promessa ([06, §3.1](../01-pesquisa/06-monetizacao-retencao.md)). |
| 7 | **Chances antes da compra** | A tabela de chances do Baú Misterioso fica na mesma tela do botão de compra, sem link escondido. A abertura é imediata e pulável: sem roleta, sem "quase ganhou", um Baú por vez. | [F] A Apple exige que caixas pagas divulguem as chances de cada tipo de item antes da compra ([App Review Guidelines, 3.1.1](https://developer.apple.com/app-store/review/guidelines/)); a condenação da Riot no TJDFT mandou publicar chances ([06](../01-pesquisa/06-monetizacao-retencao.md); [05b](../01-pesquisa/05b-rmt-legal-brasil.md)) | A exposição jurídica e ética do Baú (risco assumido pelo Gabriel). | Decidir sabendo o que compra. | Transparência não tira o Baú da zona de risco de jogo de azar → **validar com advogado**; teto de doação e de Baús por mês. |
| 8 | **Calma por padrão** | Marcador vermelho só para o que pede ação e tem prazo; nada pisca; poucos avisos (seção 2.5). | "Nunca volte ou perca" ([07, §7.4](../01-pesquisa/07-tecnica-idles-online.md)) | O jogo virar coleira. | Voltar porque quer. | O jogador perder um prazo → agenda ordenada por prazo e lembretes opcionais. |
| 9 | **Taxa e líquido explícitos** | Toda ação de valor mostra bruto, taxas (que são destruídas) e o líquido em destaque: "você recebe". | A revolta com a alta de imposto sem explicação no EVE ([F01](../01-pesquisa/fichas/F01-eve-online.md); insight 10); taxas da [bíblia §6.6](00-biblia.md) | Desconfiança e erro de conta. | Negociar sem calculadora. | Excesso de números → o detalhe recolhe; o líquido fica sempre visível. |
| 10 | **Duas taxas visíveis** | Cada fila mostra o ritmo presente e o ritmo ausente, e quanto do offline ainda resta ("seu offline cobre até 24 h; restam 14 h"). | P12 ([conceito](../02-conceito.md)); insight 15 | O ausente não saber o que ganha nem o que perde. | Planejar a ausência. | A diferença parecer castigo → mostrar o que o ausente ganha (Mérito do excedente), a reconciliar com o módulo 02. |
| 11 | **Confirmação proporcional** | Ações de valor (vender, comprar, trocar, doar, votar) têm tela de resumo e confirmação; ações sem valor têm "desfazer" e não pedem confirmação. | [F] WCAG 2.2, 3.3.4 (prevenção de erro em dados financeiros) ([W3C](https://www.w3.org/TR/WCAG22/)); idempotência ([07, §2.4](../01-pesquisa/07-tecnica-idles-online.md)) | Toque errado com consequência real. | Agir rápido sem medo. | Confirmação demais cansa → só onde há valor. |
| 12 | **Texto antes de ícone** | Ícones da navegação sempre com rótulo; termo do glossário com toque longo para explicar. | [GAG](https://gameaccessibilityguidelines.com/basic/): linguagem simples e clara | Jogo de muitos sistemas com nomes próprios. | Aprender jogando. | Tela mais carregada → rótulos curtos. |
| 13 | **Pixel na escala certa** *(novo)* | Arte e molduras sempre em escala inteira (seção 1.6); texto sempre em fonte vetorial escalável, nunca desenhado dentro da imagem. | [MDN, `image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering); a dificuldade de fonte e interface em pixel relatada pelo Kingdom (seção 1.2) | Pixel borrado e texto que não escala nem se traduz. | Ler bem em qualquer tela e em qualquer tamanho de fonte. | A moldura não fechar em telas de densidade quebrada → a sobra vira margem neutra. |

### 2.2 Navegação

**Cinco abas na barra de baixo (celular)** [H]

| Aba | O que tem |
|---|---|
| **Cidade** (início) | A maquete da Cidade (lotes, obras, a Névoa nas bordas), com dois níveis de zoom e a opção "Ver como lista"; a agenda (cerco, encomendas, Conselho, obras); o resumo da sua oficina (filas, cargas de obra-prima, teto negociável do dia). |
| **Oficina** | Ofícios e níveis, filas (montar, reordenar, tarefa de reserva), receitas, obra-prima, ajudantes, inventário e armazém. |
| **Mercado** | Bolsa, Feira, Leilão, Câmbio e Troca; o IPC. |
| **Névoa** | O mapa da Névoa, expedições, vocação e equipamento de combate, masmorras e a Fronteira (a partir da 2ª Era). |
| **Você** | Personagem e aparência, guilda, títulos e Mérito, Recados, Loja, Bazar de Personagens, configurações (acessibilidade, notificações, idioma). |

[H] O Bazar de Personagens fica em "Você", e não na barra de balcões do Mercado, porque é venda de conta, rara e paga em Coins. A versão anterior deste módulo o listava nos dois lugares; fica só em "Você".

**Cabeçalho fixo:** nome da Cidade e da Era; saldo de ouro; saldo de Coins, que leva à Loja; e o sino dos Recados. A conversa (chat de guilda e da Cidade) abre numa folha deslizante a partir do cabeçalho.

**Desktop (1024 px ou mais)** [H]: as mesmas cinco seções numa barra lateral, o conteúdo no centro e, à direita, a agenda e a conversa. A maquete da Cidade ganha espaço e aparece inteira. A Bolsa ganha modo denso, com livro, gráfico e suas ordens lado a lado.

**Modo canto de tela** [H]: uma janela de 360 × 220 px (PWA instalado no desktop) com as filas, a contagem regressiva, o próximo prazo, uma faixa animada da oficina em pixel art e um botão "Abrir". É o formato de *Rusty's Retirement* aplicado ao nosso jogo ([A10, §3](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)). É só leitura e atualiza com pouca frequência, para não virar carga de servidor nem ferramenta de bot (a reconciliar com o módulo 13).

- **Referência:** a barra de abas inferior é o padrão dos jogos de celular estudados; o modo canto de tela vem da onda dos companheiros de área de trabalho ([A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).
- **Problema que resolve:** o jogo tem muitos sistemas, e o jogador de 5 minutos precisa achar tudo sem menu de menu.
- **Comportamento que incentiva:** começar sempre pela Cidade (a cidade antes do eu) e manter o jogo aberto no canto da tela enquanto trabalha.
- **Risco que cria:** cinco abas no limite do confortável, e a Loja dentro de "Você" pode parecer escondida → o saldo de Coins no cabeçalho leva à Loja em um toque, sem empurrar ofertas.

### 2.3 Mapa de toques

Contados a partir da Cidade (tela inicial). A confirmação final de uma ação de valor não entra na conta [H].

| Ação | Caminho | Toques |
|---|---|---|
| Ver o que aconteceu na ausência | Abrir o jogo → Relatório da volta | 0 |
| Repetir o plano de filas | Relatório da volta → "Repetir o plano" | 1 |
| Ver e ajustar uma fila | Cartão da fila → "Ajustar" | 2 |
| Começar uma obra-prima | Cartão "Obra-prima (2 cargas)" | 1 |
| Inscrever-se no cerco | Cartão do cerco → "Inscrever-me" (com a última inscrição pré-carregada) | 2 |
| Entregar na encomenda | Cartão da encomenda → "Entregar" | 2 |
| Votar na eleição | Cartão do Conselho → candidato (o voto pede confirmação) | 2 |
| Ver uma obra da Cidade | Lote na maquete (ou "Ver como lista" → obra) | 1 |
| Vender um item na Bolsa | Mercado → item → "Vender" (ou Oficina → item → "Vender na Bolsa") | 2 |
| Doar e receber Coins | Saldo de Coins no cabeçalho → faixa de doação (a doação pede confirmação) | 2 |
| Ver as chances do Baú | Saldo de Coins → Loja (as chances estão na seção do Baú) | 1 |
| Ler os recados | Sino | 1 |
| Mudar tamanho de fonte ou contraste | Você → Acessibilidade (também oferecido na primeira abertura) | 2 |

### 2.4 As telas principais

Os wireframes estão em [`14-wireframes/`](14-wireframes/index.html). Cada arquivo tem notas numeradas que explicam as decisões. Em resumo:

| Tela | Arquivo | Decisões-chave [H] |
|---|---|---|
| (a) Cidade: maquete e oficina | [a-cidade.html](14-wireframes/a-cidade.html) | Maquete de lotes com a Névoa nas bordas e o avanço das obras, mais a lista equivalente; agenda de até cinco cartões ordenados por prazo; as filas com as duas taxas e o offline restante; o teto negociável do dia visível, com o excedente indo para o Mérito; a terceira fila bloqueada mostra como se conquista, nunca um preço. |
| (b) Relatório da volta | [b-retorno.html](14-wireframes/b-retorno.html) | Abre como presente, em seções; a primeira é o plano e o gargalo; linha do tempo dos eventos ("03h12 o carvão acabou"); excedente do teto explicado; ordens executadas com o líquido; "Repetir o plano" em um toque; nada a coletar, nada a dobrar. |
| (c) Bolsa e Feira | [c-bolsa-feira.html](14-wireframes/c-bolsa-feira.html) | Livro de ordens com compra (▲, azul) e venda (▼, ferrugem), rótulos e tabela acessível; a sua posição na fila; formulário com bruto, taxa de anúncio de 1%, taxa de venda de 5% e "você recebe"; aviso de preço fora da faixa; na Feira, durabilidade e reparos restantes no anúncio, e a taxa de 6%. |
| (d) Obra-prima | [d-obra-prima.html](14-wireframes/d-obra-prima.html) | Três etapas (reagentes, têmpera, acabamento) decididas por toque, sem reflexo; prévia de qualidade que reage às decisões; "modo tranquilo" que pausa o relógio; resultado com a marca do mestre. Mecânica a reconciliar com o módulo 06. |
| (e) Inscrição no cerco | [e-cerco-inscricao.html](14-wireframes/e-cerco-inscricao.html) | Data, hora e fuso; prazo da inscrição (24 h antes); "você não precisa estar online"; escolha de posto por vocação com vagas; desgaste esperado do equipamento; suprimentos para a Cidade (viram Mérito); guarnição da guilda; o que falta para a defesa, com link para a Bolsa e para a encomenda; criaturas corrompidas com os cinco sinais. |
| (f) Conselho | [f-conselho.html](14-wireframes/f-conselho.html) | Eleição com "uma pessoa, um voto" e voto secreto; plataformas dentro das faixas da constituição; votações com o voto nominal de cada conselheiro; a faixa constitucional desenhada (taxa da Feira de 4% a 8%); a lista do que o Conselho não pode mudar. Método de votação a reconciliar com o módulo 09. |
| (g) Loja | [g-loja.html](14-wireframes/g-loja.html) | Teto de doação do mês no topo; faixas de doação em R$ com os Coins que cada uma credita, Pix primeiro; doação sem reembolso dita antes de confirmar; o que os Coins nunca compram; conveniência, cosméticos e Baú com o preço em Coins e o R$ ao lado; Baú com a tabela de chances ao lado do botão; carência de transferência por meio de pagamento; nenhuma contagem regressiva. Preços do módulo 11. |

### 2.5 Notificações

| Aviso | Quando | Exemplo de texto | Padrão [H] |
|---|---|---|---|
| Fila terminou | No horário previsto (job do servidor, refeito se o plano mudar) | "Sua fila de lingotes terminou: 120 prontos. A próxima está vazia." | Ligado após o pedido |
| Fila parou | Quando um insumo acaba | "O carvão acabou às 3h12; a fila passou para a tarefa de reserva." | Ligado |
| Encomenda acabando | 24 h antes do prazo, só se a sua parte não foi entregue | "Faltam 24 h para a encomenda 'Lanças para a Muralha'. Sua parte: 6 de 10." | Ligado |
| Cerco: inscrição | 24 h e 2 h antes de fechar, só se você não se inscreveu | "As inscrições do cerco fecham hoje às 20h. Você não precisa estar online no sábado." | Ligado |
| Cerco: resultado | Ao fim do cerco (respeitando o horário de silêncio) | "Pedraforte resistiu ao cerco do Pântano. Seu posto na Muralha rendeu 72 de Mérito." | Ligado |
| Ordens executadas | Agrupadas, no máximo uma vez por hora | "3 ordens executadas na Bolsa: +2.432 de ouro." | Desligado |
| Lance superado | Na hora, e 30 min antes do fim do Leilão | "Seu lance no Machado de carvalho foi superado (agora: 1.950 de ouro)." | Ligado, se você deu lance |
| Conselho | Abertura e 24 h antes do fim de eleição ou votação | "A eleição do Conselho fecha qui., 20h. Uma pessoa, um voto." | Ligado |
| Troca recebida | Na hora | "Bia enviou uma Troca: 40 tábuas de bétula." | Ligado |

**Nunca:** ofertas da loja, "sentimos sua falta", sequência de login, "fulano passou você no ranking".

Regras [H]:
- **Pedir na hora certa:** quando o jogador monta a primeira fila longa ("Quer ser avisado quando terminar?"), nunca na primeira tela ([07, §7.4](../01-pesquisa/07-tecnica-idles-online.md)). No iPhone, o push só existe com o jogo instalado na Tela de Início ([07, §7.1](../01-pesquisa/07-tecnica-idles-online.md)), então o pedido de aviso vem junto com o guia de instalação (seção 2.7).
- **Horário de silêncio padrão das 22h às 8h,** no fuso do jogador. O que acontecer nele chega de manhã, agrupado.
- **No máximo 4 avisos por dia;** o excedente vira um resumo. Cada tipo tem o seu interruptor.
- **Cada aviso abre a tela exata** (o cerco abre a inscrição, a ordem abre a ordem).
- **Os Recados espelham tudo:** quem desliga o push não perde nada, só deixa de ser chamado.
- **O número no ícone do app** conta só o que pede ação.
- **Quatro perguntas:** inspira-se no IdleMMO, que avisa o fim da ação, e se diferencia dos timers que cobram presença ([07, §7.4](../01-pesquisa/07-tecnica-idles-online.md)) · resolve o "quando devo voltar?" · incentiva sessões curtas e oportunas · arrisca virar ruído e ser desligado, ou virar coleira; mitigação: teto diário, silêncio e nenhum aviso comercial.

### 2.6 Acessibilidade

**Meta** [H]: WCAG 2.2 nível AA em todas as telas, mais dois itens do nível AAA: alvos de toque de 44 × 44 px e um modo de alto contraste com 7:1 ou mais.
- [F] No Brasil, a Lei Brasileira de Inclusão obriga a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no país, conforme as melhores práticas internacionais, e pede símbolo de acessibilidade em destaque ([Lei 13.146/2015, art. 63](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)). [H] Um PWA de navegador provavelmente se enquadra; **validar com advogado.**
- [F] O daltonismo hereditário atinge cerca de 1 em cada 12 homens e 1 em cada 200 mulheres, segundo a Cleveland Clinic ([Live Science](https://www.livescience.com/health/genetics/why-is-color-blindness-so-much-more-common-in-men-than-in-women); [Henry Ford Health](https://www.henryford.com/blog/2024/10/why-men-are-more-likely-to-be-colorblind)). Num público majoritariamente masculino de MMO [H], é uma fatia grande da base.

| Área | Regras [H], com o critério de referência |
|---|---|
| **Visão** | Contraste de 4,5:1 no texto e de 3:1 nos componentes (WCAG 1.4.3 e 1.4.11). Texto escalável até 200% sem perder função (1.4.4) e sem rolagem horizontal a 320 px de largura (1.4.10); a maquete da Cidade é a exceção prevista de conteúdo bidimensional, e a lista equivalente cobre quem não quer arrastar. Nada transmitido só por cor (1.4.1): compra e venda com ▲▼ e rótulo, qualidade com moldura e nome, corrompida por silhueta, contorno, marca e rótulo ([XAG 103](https://learn.microsoft.com/en-gb/gaming/accessibility/xbox-accessibility-guidelines/103)). Opções: fonte de alta legibilidade (a Atkinson Hyperlegible Next substitui também as fontes pixel), alto contraste (molduras lisas, sem ornamento nem pontilhado), Névoa estática ou em contorno, e sem partículas. Filtros de daltonismo não são a solução principal: a solução é não precisar deles. |
| **Leitor de tela** | HTML semântico (marcos, títulos, listas; a Bolsa é uma tabela com cabeçalhos). Mensagens de estado em região viva educada, como "fila terminou" (4.1.3), nunca a contagem segundo a segundo, que é lida sob demanda. Ordem de foco lógica. A maquete da Cidade tem descrição em texto e a lista de lotes; o gráfico de preço tem tabela equivalente; as chances do Baú são uma tabela. Ilustrações decorativas (marginália, capas) ficam ocultas ao leitor; as que informam têm descrição. Testes com TalkBack, VoiceOver e NVDA. |
| **Motora** | Alvos de 44 × 44 px (2.5.5; o mínimo AA é de 24 × 24 px, em 2.5.8). Nenhuma ação exige arrastar (2.5.7) nem gesto com vários dedos (2.5.1): a maquete tem botões de zoom e a lista; a pinça é opcional. A obra-prima se decide por toques, sem reflexo, e o "modo tranquilo" pausa o relógio (2.2.1, tempo ajustável); o *Game Accessibility Guidelines* recomenda permitir ajustar a velocidade do jogo ([GAG](https://gameaccessibilityguidelines.com/basic/)). |
| **Cognição** | Linguagem simples e clara (GAG); glossário no toque longo; resumo e confirmação antes de qualquer ação financeira (3.3.4); nenhuma informação importante some sozinha. |
| **Movimento e luz** | Respeitar a preferência de movimento reduzido do sistema ([MDN, `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)); nada pisca mais de três vezes por segundo (2.3.1); evitar padrões repetitivos de alto contraste em áreas grandes ([GAG](https://gameaccessibilityguidelines.com/basic/)), o que vale em dobro para o pontilhado da Névoa: contraste baixo entre os dois tons, padrão preso ao mapa e deriva lenta (seção 1.7). |
| **Audição** | Nenhuma informação só por som ([GAG](https://gameaccessibilityguidelines.com/basic/)); legenda em toda fala; volumes separados (música, efeitos, vozes, avisos); áudio mono. |

Os critérios numerados vêm do [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/); a explicação do 2.5.8 (24 × 24 px no AA, 44 × 44 px no 2.5.5) está na [nota de entendimento do W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

**Processo** [H]: a acessibilidade entra na definição de "pronto" de cada tela, com teste automático e manual. No alfa, um grupo de jogadores com deficiência é recrutado e pago.

- **Quatro perguntas:** inspira-se no WCAG, no *Game Accessibility Guidelines*, nas XAG e na LBI, e se diferencia de idles como o Antimatter Dimensions, criticado pela falta de escala de texto ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)) · resolve a exclusão de quem lê com dificuldade, não distingue cores ou não tem precisão motora, e o risco legal · incentiva sessões longas sem cansaço e um público mais velho (o veterano de MMO de 30 a 45 anos, [08, §3.5](../01-pesquisa/08-mercado-posicionamento.md)) · cria custo de design e de teste, e conflito com o pontilhado e o ornamento da pixel art (resolvido com os modos estático, em contorno e liso).

### 2.7 PWA

- **Instalação.** [F] O Chrome oferece a instalação quando o site cumpre os critérios (HTTPS, manifesto, ícones, engajamento); no iPhone ela é manual, por "Adicionar à Tela de Início", e desde o iOS 26 todo site adicionado abre como app ([07, §7.1](../01-pesquisa/07-tecnica-idles-online.md)). [H] Oferecemos a instalação em dois momentos: ao montar a primeira fila longa (junto com o pedido de aviso) e ao voltar pela terceira vez em uma semana. Nunca na primeira tela, nunca bloqueando o jogo. No iPhone, um guia de três passos com desenho.
- **Offline só de leitura** [H]. Sem conexão, o jogo mostra o último estado conhecido, com a hora ("Sem conexão — dados de 14h32"). O progresso das filas aparece como **previsto** (cor de névoa), calculado a partir do horário de término que o servidor mandou. Todo botão que move valor fica desabilitado, com o motivo ("Vender precisa do servidor"). Dá para fazer **rascunhos** (reordenar a fila, preparar uma lista de vendas), guardados no aparelho e enviados só quando o jogador confirma, já online, com nova validação do servidor. Isso é mais restrito que a fila local de comandos com prazo de validade que o [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md) admitia (proposta 1, seção 4).
- **O aparelho é descartável.** [F] O Safari apaga os dados de um site após 7 dias sem uso, fora dos apps da Tela de Início ([07, §4.4](../01-pesquisa/07-tecnica-idles-online.md)). [H] Nada importante vive só no cliente: no máximo rascunhos e preferências de tela.
- **Atualização** [H]: a versão nova baixa em segundo plano e o recarregamento é oferecido num momento calmo. Nunca no meio de uma obra-prima ou de um formulário de ordem aberto.
- **Peso** [H]: primeiro carregamento de até 1,5 MB comprimido (fontes de ~150 KB; a arte inicial em atlas de sprites PNG ou WebP sem perdas, que comprime bem porque a pixel art tem poucas cores) e interativo em até 3 s num Android de entrada com 4G. A arte de cada aba carrega quando a aba abre, e no aparelho fraco a animação fica reduzida (seção 1.13).
- **Quatro perguntas:** inspira-se no princípio "o cliente é uma tela" do [07](../01-pesquisa/07-tecnica-idles-online.md), e se diferencia do save local do Melvor, cuja perda de save é queixa recorrente ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) · resolve rede ruim, aparelho fraco e a instalação manual do iPhone · incentiva abrir o jogo em qualquer lugar e instalar quando faz sentido · cria a frustração de "não consigo vender no metrô" (mitigação: rascunho de venda, com envio em um toque quando a rede volta).

## 3. Wireframes

**O que são:** documentação de interface, não código do jogo. HTML simples, um arquivo por tela, CSS embutido, sem bibliotecas nem fontes externas, legível no celular. São caixas, textos e hierarquia: a arte final (pixel art, paleta, molduras e fontes pixel) não está aqui. Todos os números das telas são exemplos [H].

**Como ler:** abra [`14-wireframes/index.html`](14-wireframes/index.html) no navegador. Cada tela aparece numa moldura de celular (360 a 420 px); no desktop, as notas de design ficam ao lado, e no celular, abaixo. Os círculos numerados na tela correspondem às notas. Caixas tracejadas são lugares de imagem (pixel art).

| Arquivo | Tela |
|---|---|
| [index.html](14-wireframes/index.html) | Índice, legenda e mapa de navegação |
| [a-cidade.html](14-wireframes/a-cidade.html) | (a) Cidade: maquete e oficina |
| [b-retorno.html](14-wireframes/b-retorno.html) | (b) Relatório da volta (tela de retorno do ausente) |
| [c-bolsa-feira.html](14-wireframes/c-bolsa-feira.html) | (c) Bolsa (livro de ordens) e Feira |
| [d-obra-prima.html](14-wireframes/d-obra-prima.html) | (d) Obra-prima |
| [e-cerco-inscricao.html](14-wireframes/e-cerco-inscricao.html) | (e) Inscrição no cerco |
| [f-conselho.html](14-wireframes/f-conselho.html) | (f) Conselho: eleição e votações |
| [g-loja.html](14-wireframes/g-loja.html) | (g) Loja: doação em R$ que credita Coins, cosméticos e Baú Misterioso com chances |

Na revisão de 2026-11-11, `a-arraial.html` passou a se chamar `a-cidade.html` e `f-camara.html` passou a se chamar `f-conselho.html`.

## 4. Propostas de mudança na bíblia

**1. [proposta de mudança na bíblia] Registrar "offline do cliente só de leitura" como decisão vigente.** **Adotada** (bíblia, seção 5; o 13 incluiu o requisito na seção 5.1; revisão de consistência: R12).
- **(A) Sem rede, o cliente mostra o estado e aceita rascunhos; nada que mova valor entra em fila local. ← recomendado**
- (B) A fila local de comandos com prazo de validade, como admitia o [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md).
- *Por quê:* (A) fecha um vetor de abuso (comando "atrasado" que chega depois de o preço mudar), simplifica a arquitetura (Fase 4) e custa pouco ao jogador, porque o rascunho cobre o caso de uso. A reconciliar com o módulo 13.

**2. [proposta de mudança na bíblia] Detalhar a seção 6.8 (Arte) com a direção "Maquete".**
- **(A) "Pixel art isométrica 2:1 (grade de 32 × 16 px) na Cidade, no mapa da Névoa e na Fronteira; retratos e ícones frontais para criaturas, personagens e itens; paleta própria de 32 cores com uma rampa exclusiva da Névoa; escala sempre inteira." ← recomendado**
- (B) Manter a bíblia genérica ("pixel art moderna") e deixar os detalhes só no módulo 14.
- (C) Registrar o caminho A (Miniatura, 16 × 16 vista de cima), mais barato.
- *Por quê:* (A) trava cedo o que mais encarece se mudar depois (a lição do Songs of Conquest) e dá aos módulos 04, 05, 10 e 11 uma base para estimar criaturas, ícones, Fronteiras e cosméticos. (B) deixa cada módulo imaginar um visual. (C) economiza cerca de um terço da arte por Era (seção 1.4), mas nos põe ao lado de Stardew e do Tibia.

**3. [proposta de mudança na bíblia] Registrar na seção 3 a gramática visual da Névoa e da corrupção.**
- **(A) "A Névoa tem três estados no mapa (encoberta, avistada, liberta). Toda criatura corrompida se distingue da normal por silhueta, contorno partido, marca da Névoa nos olhos, fiapos e rótulo; a cor nunca é o único sinal." ← recomendado**
- (B) Deixar a regra só no módulo 14.
- *Por quê:* o módulo 04 desenha o bestiário e precisa saber, antes de criar cada criatura, que a corrupção tem de deformar a silhueta. É também a regra de acessibilidade mais importante do combate.

**Nota (não é mudança).** As propostas 1 a 3 e a nota 5 da versão anterior deste módulo (nome "Folheto da volta", consulta sobre o termo "encantados", vocabulário de "desbravar" e o nome "Pindorama") ficaram resolvidas ou sem objeto com a revisão de 2026-11-11: a bíblia adotou "Relatório da volta" e trocou o mundo, os nomes e o bestiário.

## 5. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **O isométrico estoura o orçamento** | Cada prédio ganha detalhe, as etapas se multiplicam, e uma Era passa a pedir 100 dias-pessoa (o aviso das Pixoramas do eBoy). | Isométrico só na Cidade, no mapa da Névoa e na Fronteira; limite de ~3 dias por prédio; biblioteca de partes; bloco 3D nas etapas; medir horas reais na fatia vertical e rever a seção 1.4. |
| **"Pixel art é barata" vira armadilha** | O estilo muda no meio da produção e tudo precisa ser redesenhado quadro a quadro (o relato do Songs of Conquest). | Fatia vertical antes da produção em lote; estilo travado por escrito (seção 1.6); poucas animações e poucos quadros. |
| **Parece Tibia, Habbo ou um construtor de cidades** | A maquete isométrica lembra o Habbo; o combate em cartões não aparece no vídeo; o público lê "simulador". | Revisão de semelhança registrada (seção 1.9); o vídeo de lançamento mostra Cidade, Névoa **e** um cartão de combate com uma criatura sendo libertada; testar capturas com criadores antes do lançamento. |
| **"Mais um medieval genérico"** | Orcs, goblins e trolls de catálogo, sem traço próprio. | Silhueta clássica com a deformação da corrupção e os materiais da região; marginália e crônica iluminada como assinatura; tema musical em camadas. |
| **A Névoa treme ou cansa a vista** | Pontilhado de alto contraste, preso à tela, rolando sob o dedo no celular. | Padrão preso ao mapa, dois tons próximos, deriva lenta, opções "Névoa estática" e "em contorno"; teste com pessoas sensíveis a padrões. |
| **A Névoa esconde demais e frustra** | O jogador não sabe o que existe nem por que construir. | O estado "avistada" mostra o conteúdo da borda; silhuetas altas aparecem na área encoberta; cada obra diz qual região vai revelar. |
| **Corrompidas ilegíveis para daltônicos** | A equipe, com pressa, faz a versão corrompida só trocando a paleta. | Os cinco sinais são critério de aceite (seção 1.8); teste em escala de cinza e com simulação de daltonismo antes de aprovar cada criatura. |
| **Corrompidas todas iguais** | Espinho e olho brilhante em tudo, e a corrupção vira carimbo. | A deformação respeita a anatomia de cada espécie; o módulo 04 define o que cada uma ganha. |
| **Pixel borrado no Android** | Telas de densidade 2,625 ou 2,75 forçam escala fracionária. | Escala inteira em pixels do aparelho e a sobra como margem (seção 1.6); teste em 5 aparelhos de entrada reais. |
| **Fontes pixel ilegíveis ou com acento quebrado** | Jacquarda em título longo; acento colidindo; Pixelify em texto corrido. | Regra "nenhuma fonte pixel em mais de uma linha"; teste de acentos por tamanho; Atkinson como reserva e na opção de alta legibilidade. |
| **Toque errado no losango** | Lotes isométricos são baixos e se sobrepõem visualmente. | Área de toque que inclui o prédio; zoom do lote; "Ver como lista"; teste de usabilidade com o polegar. |
| **Coins e ouro se confundem** | O jogador acha que um cosmético de "20" custa ouro, ou não sabe quanto é em reais. | Púrpura e moeda hexagonal para Coins, ouro redondo e amarelo; R$ sempre ao lado; paridade fixa de 1 Coin por R$ 1,00 ([11](11-monetizacao.md); revisão de consistência: R17). |
| **A doação parece venda disfarçada** | O jogador não entende que não há reembolso e se sente enganado depois. | "Doação, sem reembolso" na tela de confirmação, antes do Pix; teto de doação visível; a natureza jurídica é risco assumido pelo Gabriel (**validar com advogado e com contador**, [11, §2.6](11-monetizacao.md)). |
| **O Baú parece cassino mesmo transparente** | Chances publicadas não mudam a percepção nem a classificação jurídica de "pagar por sorte com prêmio de valor". | Sem roleta nem "quase", um por vez, teto de doação e de Baús, conteúdo só cosmético; **validar com advogado** (risco assumido pelo Gabriel, [PROGRESSO](../PROGRESSO.md)). |
| **Dois toques viram tela lotada** | Para caber tudo a dois toques, a tela inicial vira um painel de avião. | No máximo cinco cartões de agenda; teste de usabilidade com a regra dos cinco segundos. |
| **Relatório da volta longo demais** | Quem volta seis vezes por dia não quer abrir um presente a cada vez. | "Mostrar tudo" na hora; ausência curta (menos de 1 h) vira um resumo de uma linha; o jogo lembra a preferência. |
| **Avisos viram spam, ou ninguém instala no iPhone** | Muitos tipos de aviso, ou o push nunca chega porque o PWA não foi instalado. | Teto diário e horário de silêncio; medir opt-in e instalação desde o alfa; avaliar app empacotado só se os dados pedirem ([07](../01-pesquisa/07-tecnica-idles-online.md)). |
| **Offline só de leitura frustra** | Sem rede no metrô, o jogador não consegue vender. | Rascunho de venda e de fila, enviado em um toque quando a rede volta. |
| **Acessibilidade fica para depois** | Pressão de prazo empurra contraste, leitor de tela e alvos para "a próxima versão". | Acessibilidade na definição de pronto; teste automático em cada tela; grupo pago de jogadores com deficiência no alfa. |
| **O texto em inglês quebra o layout** | Rótulos mudam de tamanho entre PT-BR e EN, e as molduras em pixel não esticam. | Desenhar para +30% de comprimento [H]; molduras de 9 partes que repetem a borda; nenhum texto dentro de imagem. |
| **O modo canto de tela vira ferramenta de bot** | Uma janela sempre aberta, que atualiza sozinha, é ótima para automação. | Só leitura, atualização espaçada e limites por sessão (módulo 13). |
| **O gancho de vídeo não funciona** | "A Névoa recua e a cidade aparece" não chama atenção num feed real. | Testar capturas verticais com criadores antes do lançamento; medir o que eles escolhem gravar; ter a marginália e a libertação de criatura como ganchos alternativos. |
| **A trilha trava os criadores** | Bloqueio de direitos em vídeos com a música do jogo. | Contrato com os músicos que libera o uso por criadores de conteúdo. |
| **Representação descuidada** | Raças de fantasia com traços de estereótipo étnico real, ou símbolos religiosos reais nas criaturas. | Regras da seção 1.9; revisão de semelhança inclui esse item; leitores sensíveis no alfa. |
| **Um só artista vira gargalo de estilo** | O estilo depende da mão de uma pessoa, e a saída dela trava a Era. | Guia de estilo com exemplos (seção 1.6), biblioteca de partes e duas pessoas de pixel desde o início. |

## Fontes

Links acessados em novembro de 2026. "Via busca" indica leitura pelo resumo do buscador.

**Pixel art e jogos de referência**
1. [Tibia: o artista e os gráficos do jogo](https://tibiavip.app/home/news?id=4917) — TibiaVIP (comunidade) — via busca; [Tamanhos de itens no Tibia](https://www.tibiaqa.com/24111/?show=24114) — TibiaQA (comunidade) — via busca.
2. [Modding:Maps](https://stardewvalleywiki.com/Modding:Maps) — Stardew Valley Wiki — via busca; [The legacy — and future — of the farming game Stardew Valley](https://www.npr.org/2025/01/24/g-s1-44510/the-legacy-and-future-of-the-farming-game-stardew-valley) — NPR — 24/1/2025 — via busca.
3. [Kingdom Two Crowns and the practical intersection of pixel art and roguelike design](https://www.gamedeveloper.com/design/-i-kingdom-two-crowns-i-and-the-practical-intersection-of-pixel-art-and-roguelike-design) — Game Developer — via busca.
4. [Songs of Conquest: interview with Carl Toftfelt](https://gamerant.com/songs-of-conquest-interview-carl-toftfelt-history-early-access-development/) — Game Rant — 12/6/2022; [Mixing 2D billboards and 3D environments in a game](https://80.lv/articles/mixing-2d-billboards-and-3d-environments-in-a-game/) — 80.lv — via busca.
5. [Art Design Deep Dive: Using a 3D pipeline for 2D animation in Dead Cells](https://www.gamedeveloper.com/production/art-design-deep-dive-using-a-3d-pipeline-for-2d-animation-in-i-dead-cells-i-) — Game Developer (Thomas Vasseur, Motion Twin) — 25/1/2018.
6. [Interview with Sea of Stars creative director Thierry Boulanger](https://www.godisageek.com/2023/10/interview-with-sea-of-stars-creative-director-thierry-boulanger/) — God is a Geek — out/2023 — via busca; [Sea of Stars hands-off demo developer Q&A](https://lordsofgaming.net/2022/03/sea-of-stars-hands-off-demo-developer-qa) — Lords of Gaming — mar/2022 — via busca.
7. [Octopath Traveler's HD-2D art style and story make for a JRPG dream come true](https://www.unrealengine.com/spotlights/octopath-traveler-s-hd-2d-art-style-and-story-make-for-a-jrpg-dream-come-true) — Unreal Engine (Epic Games) — 25/10/2019 — via busca.
8. [Wandering the quiet digital halls of Habbo Hotel](https://www.engadget.com/2019-05-13-habbo-hotel-wandering-the-halls.html) — Engadget — 13/5/2019 — via busca.
9. [eBoy](https://en.wikipedia.org/wiki/EBoy) — Wikipedia — via busca; [eBoy is making a hyper-detailed Pixorama of San Francisco](https://laughingsquid.com/digital-art-collective-eboy-is-making-a-hyper-detailed-pixorama-pixel-art-illustration-of-san-francisco/) — Laughing Squid — via busca.
10. [Lucas Pope and the rise of the 1-bit "dither-punk" aesthetic](https://www.gamedeveloper.com/design/lucas-pope-and-the-rise-of-the-1-bit-dither-punk-aesthetic) — Game Developer — via busca.

**Manuscritos e música**
11. [Ludicrous figures in the margin](https://www.bl.uk/stories/blogs/posts/ludicrous-figures-in-the-margin) — British Library, blog de manuscritos medievais — 2020 — via busca.
12. [Decoration and illumination](https://www.nottingham.ac.uk/manuscriptsandspecialcollections/researchguidance/medievalbooks/decorationandillumination.aspx) — Universidade de Nottingham, Manuscripts and Special Collections — via busca.
13. [Prithee! Bardcore is the medieval music trend taking over YouTube](https://www.dazeddigital.com/music/article/49595/1/bardcore-is-the-medieval-music-trend-taking-over-youtube-lady-gaga-radiohead) — Dazed — 2020 — via busca.

**Cor e tipografia**
14. [Pixelblog 1 — Color Palettes](https://www.slynyrd.com/blog/2018/1/10/pixelblog-1-color-palettes) — Raymond Schlitter (Slynyrd) — 10/1/2018 — via busca.
15. [Palettes tagged "endesga"](https://lospec.com/palette-list/tag/endesga) — Lospec — via busca.
16. [Okabe e Ito, *Color Universal Design*](https://jfly.uni-koeln.de/color/) — via busca.
17. [Jacquarda Bastarda 9](https://fontsource.org/fonts/jacquarda-bastarda-9/about) e [Pixelify Sans](https://fontsource.org/fonts/pixelify-sans/about) — Fontsource.
18. [Atkinson Hyperlegible](https://en.wikipedia.org/wiki/Atkinson_Hyperlegible) — Wikipedia; [atkinson-hyperlegible](https://github.com/googlefonts/atkinson-hyperlegible) — GitHub do Google Fonts — via busca.
19. [Perguntas frequentes do Google Fonts](https://developers.google.com/fonts/faq?hl=pt-br) — oficial — via busca; [SIL Open Font License](https://openfontlicense.org/) — oficial.

**Acessibilidade, plataformas e normas**
20. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) — W3C — recomendação; [Understanding SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — W3C.
21. [Game Accessibility Guidelines — basic](https://gameaccessibilityguidelines.com/basic/) — guia da indústria.
22. [Xbox Accessibility Guideline 103: Additional channels for visual and audio cues](https://learn.microsoft.com/en-gb/gaming/accessibility/xbox-accessibility-guidelines/103) — Microsoft — via busca.
23. [`image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering) e [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — MDN.
24. [Why is color blindness so much more common in men than in women?](https://www.livescience.com/health/genetics/why-is-color-blindness-so-much-more-common-in-men-than-in-women) — Live Science; [Why men are more likely to be colorblind](https://www.henryford.com/blog/2024/10/why-men-are-more-likely-to-be-colorblind) — Henry Ford Health — out/2024 — via busca.
25. [Lei 13.146/2015 (LBI)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm), [Lei 8.078/1990 (CDC)](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm) e [Lei 9.610/1998 (direitos autorais)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm) — Planalto — oficial.
26. [App Review Guidelines, 3.1.1](https://developer.apple.com/app-store/review/guidelines/) — Apple — oficial.
27. [Your guide to YouTube Shorts ads](https://support.google.com/google-ads/answer/16041697?hl=en) — Google Ads Help — oficial — via busca.

**Da nossa pesquisa (Fase 1):** [00-sintese](../01-pesquisa/00-sintese.md), [02a](../01-pesquisa/02a-teoria-design-idle.md), [06](../01-pesquisa/06-monetizacao-retencao.md), [07](../01-pesquisa/07-tecnica-idles-online.md), [08](../01-pesquisa/08-mercado-posicionamento.md), [A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md), [A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md), [B01](../01-pesquisa/fichas/B01-melvor-idle.md), [C02](../01-pesquisa/fichas/C02-idle-clans.md), [E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md), [F01](../01-pesquisa/fichas/F01-eve-online.md), [F04](../01-pesquisa/fichas/F04-tibia.md). **Do GDD:** [04](04-combate.md), [05](05-itens.md), [11](11-monetizacao.md).
