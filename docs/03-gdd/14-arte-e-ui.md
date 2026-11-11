# GDD 14 — Arte e UI

> **Escopo.** Direção de arte (três direções com raízes brasileiras, comparação e recomendação), paleta, tipografia, iconografia, tom de texto, som e música, sensibilidade cultural; princípios de UI e UX, navegação, notificações, acessibilidade e PWA. Os wireframes estão em [`14-wireframes/`](14-wireframes/index.html) (abra o `index.html` no navegador).
> **Depende de:** [00-biblia](00-biblia.md). Conversa com os módulos 01 (loops), 06 (obra-prima), 07 (balcões e taxas), 09 (Câmara), 11 (loja e Baú) e 13 (anti-abuso); onde um número pertence a eles, uso o número-âncora da bíblia ou marco "a reconciliar".
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou análise do estúdio · [NV] não verificado. Links acessados em novembro de 2026. **Todo número de interface (tamanhos, limites, prazos) é [H].** Trechos marcados "via busca" vieram do resumo do buscador, sem abrir a página inteira.

## Resumo

- **Direção recomendada: "Folheto", a xilogravura de cordel como linguagem do jogo.** Tinta preta sobre papel, duas chapas de cor por região, a Bruma desenhada como papel em branco que apaga a gravura, e o Arraial como uma grade de ladrilhos (empréstimo da direção "Ladrilho"). É a direção mais legível numa tela de 360 px e num vídeo vertical de 10 segundos, a segunda mais barata e a única que nenhum idle usa. Tem lastro em patrimônio registrado (o cordel e a xilogravura associada, pelo Iphan, em 2018) e numa tradição viva que podemos contratar, em vez de imitar.
- **Tipografia livre e brasileira:** Londrina Solid (títulos) e Gabarito (interface), ambas de designers brasileiros e sob a SIL Open Font License, mais a Atkinson Hyperlegible Next como opção de alta legibilidade.
- **UI:** celular primeiro, cinco abas, tudo a no máximo dois toques, a volta do ausente como um "Folheto da volta" que se abre como presente, preço em R$ sempre visível, chances do Baú do Mascate na própria tela de compra, notificações poucas e sem ameaça, WCAG 2.2 nível AA e PWA com offline só de leitura.
- **Maiores riscos:** culturais (o termo "encantados" nomeia entidades de religiões afro-brasileiras vivas; o vocabulário de "desbravar" ecoa a expansão colonial) e visuais (hachura fina cansa a vista e vira ruído no celular). Proponho revisão por consultores pagos antes de fechar a arte, e três ajustes na bíblia (seção 4).

## 1. Direção de arte

### 1.1 O que a arte precisa resolver

| # | Critério | Por que importa | De onde vem |
|---|---|---|---|
| 1 | **Identidade própria** | O terreno "idle MMO de navegador" está sendo ocupado por solos com estética RuneScape; a crítica nº 1 do Idle Clans era ser "clone do Melvor". | [08, H8](../01-pesquisa/08-mercado-posicionamento.md); [C02](../01-pesquisa/fichas/C02-idle-clans.md) |
| 2 | **Legível no celular** | O celular é a plataforma preferida de 44,1% dos jogadores brasileiros (PGB 2026). | [08, §2.1](../01-pesquisa/08-mercado-posicionamento.md) |
| 3 | **Legível num vídeo de 10 segundos** | A descoberta dos idles de sucesso veio de vídeo (o Gnorp Apologue quase todo pelo YouTube). [F] O Google recomenda o formato vertical 9:16 para o Shorts ([Google Ads Help](https://support.google.com/google-ads/answer/16041697?hl=en)). | [A10, §2](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md) |
| 4 | **Barata para um estúdio pequeno** | Os concorrentes têm de 1 a 3 pessoas; cada Era (~13 semanas) pede ameaça, encantados e cosméticos novos. | [08, §1.4](../01-pesquisa/08-mercado-posicionamento.md); [bíblia §6.1](00-biblia.md) |
| 5 | **Escalável em ícones** | 12 ofícios × 6 tiers × 4 qualidades, mais consumíveis, materiais e cosméticos do Baú: centenas de ícones no lançamento [H]. | [bíblia §6.3–6.5](00-biblia.md) |
| 6 | **Acessível** | Contraste e leitura sem depender de cor (seção 2.6). | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) |
| 7 | **Respeitosa** | Folclore reinterpretado sem caricatura; nada de símbolos da violência colonial. | [bíblia §3](00-biblia.md) |

### 1.2 Direção A — "Folheto" (xilogravura de cordel)

**Referências reais**
- [F] **O cordel é patrimônio cultural do Brasil.** O Conselho Consultivo do Iphan registrou a literatura de cordel em 19/9/2018, por unanimidade, no Livro das Formas de Expressão, com a xilogravura como bem associado em anexo, porque é ela que dá ao folheto a sua identidade visual ([Meneses, *Revista do IEB*, 2019](https://scielo.br/pdf/rieb/n72/2316-901X-rieb-72-225.pdf); [UFPel, 2018](https://wp.ufpel.edu.br/empauta/literatura-de-cordel-reconhecida-como-patrimonio-cultural-do-pais/); via busca). O pedido foi da Academia Brasileira de Literatura de Cordel.
- [F] **J. Borges** (José Francisco Borges) começou vendendo cordel nas feiras, passou à gravura para ilustrar folhetos e morreu aos 88 anos em Bezerros (PE), em 26/7/2024, ao lado do Memorial que leva o seu nome; foi Patrimônio Vivo de Pernambuco ([Diário do Nordeste](https://diariodonordeste.verdesmares.com.br/verso/morre-o-xilogravurista-j-borges-aos-88-anos-1.3538899); [O POVO](https://mais.opovo.com.br/jornal/vidaearte/2024/07/27/mestre-da-cultura-nordestina-j-borges-deixa-legado-na-arte-popular.html)). A cidade criou o Festival Mestre J. Borges, cujo concurso de xilogravura tem inscrições até 27/11/2026 ([Portal de Prefeitura](https://portaldeprefeitura.com.br/pernambuco/festival-mestre-j-borges-abre-inscricoes-para-concurso-gratuito/635285/)).
- [F] **A gravura erudita a partir da popular:** o Movimento Armorial, de Ariano Suassuna, foi lançado em Recife em 1970 com as gravuras de Gilvan Samico (1928–2013) entre as primeiras obras visuais mostradas ([Correio Braziliense, 2023](https://www.correiobraziliense.com.br/diversao-e-arte/2023/09/5127418-celebracao-armorial-e-a-renovacao-das-artes.html); [catálogo do CCBB](https://ccbb.com.br/wp-content/uploads/2022/04/catalogo-rj.pdf); via busca).
- [F] **A gráfica que formou gravadores:** a Lira Nordestina, de Juazeiro do Norte (CE), foi por muito tempo a editora de cordel mais tradicional do país e uma escola de xilogravura; hoje é ligada à Universidade Regional do Cariri, e em 2026 a Urca e a UFCA discutem uma escola de cordel e xilogravura a partir dela ([Diário do Nordeste](https://diariodonordeste.verdesmares.com.br/regiao/xilogravura-do-cariri-resiste-e-se-reinventa-a-cada-dia-1.1895607); [Brasil de Fato, 11/2/2026](https://www.brasildefato.com.br/2026/02/11/urca-e-ufca-avancam-no-debate-para-implantacao-da-escola-brasileira-de-literatura-de-cordel-e-xilogravura/); via busca).
- [F] **Em jogos:** o *Pentiment* (Obsidian, 2022) desenha os personagens "do mundo moderno" em estilo de xilogravura, com referência na Crônica de Nuremberg; a equipe contou que a arte final desenhada à mão era lenta demais para revisar a cada mudança de roteiro ([TouchArcade, 2023](https://toucharcade.com/2023/10/18/pentiment-anniversary-interview-josh-sawyer-on-his-influences-going-from-playing-dd-to-designing-a-potential-pillars-of-eternity-3-rpg-mechanics-and-more/); [Gamereactor](https://www.gamereactor.eu/the-history-behind-pentiment-and-the-creation-of-its-artistic-style-1191273/); via busca). O *Darkest Dungeon*, de traço preto pesado inspirado em Mike Mignola, foi feito por uma equipe de seis pessoas mais três de apoio, com Chris Bourassa como artista principal ([GameSpot](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/); [Wikipedia](https://wikipedia.com/wiki/Darkest_Dungeon); via busca).

**Como ficaria no jogo** [H]
- Fundo de papel, contorno grosso de tinta ("talho") e até duas chapas de cor por elemento, como na gravura colorida.
- Cada região de Pindorama tem a sua chapa: mata (verde), sertão (ocre), rio e litoral (azul), serra (barro).
- **A Bruma é o papel em branco.** Onde ela avança, a gravura perde a tinta, a hachura se desfaz e o mapa volta a ser papel. Cada obra concluída "entinta" uma faixa nova do mapa.
- **Encantados e assombrados se distinguem pela tinta, não só pela cor:** o encantado é gravura limpa com chapa de cor; o assombrado é a mesma figura com a tinta borrada e escorrida, sem chapa. Curar um encantado é devolver a chapa de cor.
- A interface é feita de folhetos e cartões de papel; os títulos têm letra de capa de cordel.
- Animação por recorte (*cut-out*), carimbo e máscara de "entintar", com poucos quadros.

**Custo, celular e vídeo** [H]
- **Custo:** baixo por asset. A arte é 2D, chapada, de paleta curta; o traço pode ser vetorial e a animação, por recorte. O caro (gravuras de verdade) fica restrito a poucas peças-mestras por Era (seção 1.7).
- **Celular:** silhueta e contraste altos funcionam a 24 px. O perigo é a hachura fina, que vira ruído; por isso ela é proibida abaixo de 48 px.
- **Vídeo de 10 segundos:** preto e branco com uma cor chapada se destaca num feed colorido, e o "mapa sendo entintado" quando a Bruma recua é um gancho natural de 3 segundos.

**Riscos culturais** [H]
- Reduzir o Brasil ao Nordeste e o Nordeste ao sertão seco.
- Virar pastiche de lembrancinha de aeroporto.
- Importar o imaginário de violência comum em capas de cordel, como o cangaço.
- Copiar o estilo reconhecível de um gravador vivo ou recém-falecido sem acordo.

### 1.3 Direção B — "Ladrilho" (azulejaria e ladrilho modernista)

**Referências reais**
- [F] **Athos Bulcão** espalhou painéis de azulejo por Brasília: Congresso Nacional, Palácio da Alvorada, Catedral e a Igrejinha da 307/308 ([Correio Braziliense, 2025](https://edicao.correiobraziliense.com.br/correiobraziliense/2025/01/24/141644/pdf/A17-CID-2401-DIG.pdf); via busca). O crítico Frederico Morais escreveu que a composição modular em escala industrial atinge o ponto máximo em Brasília, com ele ([Fundação Athos Bulcão](https://www.fundathos.org.br/pdf/Azulejaria%20contemporanea%20no%20Brasil%20-%20Frederico%20Moraris%20port.pdf); via busca). A Fundação guarda mais de 700 obras dele ([Correio da Manhã, 2024](https://www.correiodamanha.com.br/especiais/2024/12/173687-athos-bulcao-32-anos-de-preservacao-da-sua-memoria.html)).
- [F] **São Luís:** o centro histórico entrou na Lista do Patrimônio Mundial em 1997 ([UNESCO, nº 821](https://whc.unesco.org/en/list/821)); reportagens contam mais de 80 padrões de azulejo catalogados nas fachadas, vindos de Portugal, França e Holanda ([Agência Gov, set/2026](https://agenciagov.ebc.com.br/noticias/202609/sao-luis-azulejos-e-casaroes-contam-a-historia-de-um-patrimonio-mundial); via busca).
- [F] **Alfredo Volpi** transformou as bandeirinhas de festa junina em motivo geométrico, pintado em têmpera, a partir dos anos 1960 ([Wikipedia](https://en.wikipedia.org/wiki/Alfredo_Volpi); [Unicamp, 2015](https://www.ifch.unicamp.br/eha/atas/2015/Fabio%20San%20Juan.pdf); via busca). [H] É um eco direto do nome "Arraial".

**Como ficaria no jogo** [H]
- O Arraial é uma grade de ladrilhos: cada obra é um módulo, e a cidade cresce em padrões.
- Os itens viram emblemas geométricos, e os painéis da interface, molduras de azulejo.
- As cores vêm em campos chapados.

**Custo, celular e vídeo** [H]
- **Custo:** o menor para interface e cidade, porque é modular e combinável. Fica caro nos personagens e nos encantados: o geométrico tem dificuldade de expressar criaturas e emoções.
- **Celular:** muito legível.
- **Vídeo:** bonito, mas tende a ser lido como jogo de quebra-cabeça ou de ladrilhos, e não como RPG.

**Riscos** [H]
- O azulejo português de fachada é patrimônio de uma arquitetura erguida no período colonial e escravista. Se usado, prefira a vertente modernista brasileira (Athos) à iconografia de sobrado senhorial.
- Padrões repetitivos de alto contraste causam desconforto visual: [F] o *Game Accessibility Guidelines* recomenda evitar imagens que piscam e padrões repetitivos ([GAG, básico](https://gameaccessibilityguidelines.com/basic/)).

### 1.4 Direção C — "Aquarela de rio" (aquarela de paisagem e chita)

**Referências reais**
- [F] **Margaret Mee,** artista botânica nascida na Inglaterra, chegou ao Brasil em 1952 e fez 15 expedições à Amazônia entre 1956 e 1988; pintava a partir de plantas vivas, depois de esboçá-las na floresta, e deixou cerca de 400 pranchas em guache e aquarela ([Portal Amazônia](https://portalamazonia.com/arte/a-importancia-de-mrs-margaret-para-a-botanica-na-amazonia/); [Agência FAPESP](https://agencia.fapesp.br/aquarelas-cientificas/2889); via busca).
- [F] **Chita:** a estampa tem origem indiana (o *chintz*), ganhou força no Nordeste e hoje é símbolo das festas populares, sobretudo a festa junina ([*Signos do Consumo*, USP](https://revistas.usp.br/signosdoconsumo/article/download/44364/47985/52874); [Fatec/CPS, 2022](https://ric.cps.sp.gov.br/handle/123456789/12209?mode=full); via busca).
- [NV] Boa parte da aquarela de paisagem do Brasil do século XIX que circula como "imagem do Brasil" foi feita por artistas viajantes europeus (Debret, Rugendas). Não verifiquei uma fonte específica para esta tarefa.

**Como ficaria no jogo** [H]
- Fundos pintados por região, com luz suave.
- Chita nas roupas, nos estandartes e nos cosméticos.
- Personagens pintados.

**Custo, celular e vídeo** [H]
- **Custo:** o mais alto. Cada fundo e cada cosmético é uma pintura, a revisão é lenta (a lição do *Pentiment*) e animar aquarela é caro.
- **Celular:** a aguada perde detalhe e contraste em tela pequena, e os ícones precisam de outro estilo de qualquer jeito.
- **Vídeo:** lindo parado, mas parecido com a onda "lofi aconchegante" (*Spirit City*, *Cast n Chill* — [A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)); distingue menos.

**Riscos** [H]
- O olhar do viajante: exotismo, Brasil de cartão-postal e a Amazônia como paraíso vazio.

### 1.5 Comparação

Notas de 1 a 5, sempre "5 = melhor para nós". É uma leitura do estúdio [H], não uma medição.

| Critério | A — Folheto | B — Ladrilho | C — Aquarela de rio |
|---|---|---|---|
| Identidade própria no gênero | 5 | 3 | 3 |
| Legibilidade a 360 px e ícone de 24 px | 5 | 5 | 2 |
| Destaque num vídeo vertical de 10 s | 5 | 3 | 3 |
| Custo por asset (5 = mais barato) | 4 | 5 | 2 |
| Custo de animação (5 = mais barato) | 4 | 4 | 2 |
| Expressão de personagens e encantados | 4 | 2 | 4 |
| Contraste e acessibilidade | 4 (cuidado com a hachura) | 4 (cuidado com padrões) | 2 |
| Conteúdo novo a cada Era | 4 | 5 | 2 |
| Risco cultural (5 = menor) | 3 | 3 | 3 |
| **Total** | **38** | **34** | **23** |

**Esforço estimado por Era** [H]. Cada Era precisa, como ponto de partida, de uma capa, 3 a 5 encantados com as versões assombradas, 40 a 80 ícones de itens e 10 a 20 cosméticos (a reconciliar com os módulos 05, 10 e 11). As horas por ícone são estimativa de mercado do estúdio, não medição:

| Direção | Ícone de item | Encantado com versão assombrada | Equipe mínima de arte |
|---|---|---|---|
| A — Folheto | 1 a 2 h | 2 a 4 dias | diretor de arte + ilustrador + artista de UI e ícones, mais gravuras encomendadas |
| B — Ladrilho | ~1 h | 3 a 5 dias (o estilo resiste a criaturas) | diretor de arte + artista de UI |
| C — Aquarela | 3 a 5 h | 4 a 7 dias | diretor de arte + 2 a 3 pintores |

### 1.6 Recomendação: Folheto, com a grade do Ladrilho no mapa do Arraial

**[H] Recomendamos a direção A (Folheto).** Dela tiramos a linguagem de personagens, encantados, itens, interface e narrativa. Da direção B, só a grade modular do mapa do Arraial: cada lote da cidade é um ladrilho desenhado em gravura.

- **Referência:** inspira-se no cordel e na xilogravura nordestina (patrimônio registrado e tradição viva), no Armorial (erudito a partir do popular) e, nos jogos, no *Pentiment* e no *Darkest Dungeon*. Diferencia-se da estética RuneScape dos "scapelikes" e da aquarela aconchegante da onda lofi ([A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).
- **Problema que resolve:** identidade legível em tela pequena e em vídeo curto, com custo compatível com um estúdio pequeno e uma Era a cada 13 semanas. A Bruma como "papel em branco" dá ao mundo uma regra visual que todo mundo entende sem texto.
- **Comportamento que incentiva:** compartilhar. O mapa entintado, a capa da Era e a obra-prima assinada são imagens que o jogador quer mostrar. Também incentiva a leitura, porque o folheto convida a ler, e o jogo tem muita informação.
- **Risco que cria:** caricatura regional, cansaço visual da hachura e apropriação do estilo de artistas vivos. As mitigações estão nas seções 1.7 (regras), 1.13 (sensibilidade e consultores) e 5.

### 1.7 As regras do Folheto

| Elemento | Regra [H] | Por quê |
|---|---|---|
| Base | Papel cor de algodão e tinta quase preta; nada de degradê nem luz realista. | Contraste alto, arquivos leves, identidade imediata. |
| Chapas de cor | No máximo duas chapas por elemento, além da tinta. Cada região tem a sua dupla. | É a lógica da gravura colorida, e impede a interface de virar arco-íris. |
| Duas escalas de detalhe | **Ícone de bolso** (até 48 px): silhueta, talho grosso, sem hachura. **Gravura** (128 px ou mais): hachura, textura de madeira, letreiro. | A hachura fina vira ruído no celular e cansa a vista. |
| Bruma | Papel em branco com hachura que se desfaz nas bordas; nunca preto. | A ameaça é a perda: o mundo deixa de estar impresso. É legível sem texto e em escala de cinza. |
| Encantado × assombrado | Diferença de **valor e textura** (tinta limpa × borrada e escorrida), e só depois de cor. | Funciona para quem não distingue cores (seção 2.6). |
| Qualidade do item | Moldura simples (Comum), dupla (Bom), ornada (Fino) e ornada com o selo do mestre (Obra-prima), sempre com o nome escrito. | Nunca depender só de cor; a obra-prima assinada vira identidade do artesão. |
| Tier do material | Numeral (T1 a T6) e nome do material (ex.: "ipê") no próprio ícone ou na legenda. | O jogador do mercado lê número; o novato lê nome. |
| Personagem do jogador | Boneco de recorte em camadas (corpo, roupa, ferramenta, cabeça); cada cosmético é uma camada. | Barato de combinar; os cosméticos do Baú e da loja encaixam sem redesenho. |
| O Arraial | Grade de lotes-ladrilho; cada obra troca a gravura do seu lote ao subir de etapa. | Mostra o progresso coletivo num só olhar. |
| Animação | Recorte, carimbo e máscara de "entintar", a 12 quadros por segundo [H]; tudo desligável (redução de movimento). | Barata, coerente com o impresso e acessível. |
| Capa da Era | Uma gravura de verdade, encomendada, por Era. | É a peça de marketing da temporada e o "folheto" que conta a Era. |

**Produção com gravadores de verdade** [H]
1. Para cada Era, o estúdio encomenda de 3 a 6 matrizes reais a xilogravuristas brasileiros: a capa e os principais encantados.
2. A gravura impressa é digitalizada, vetorizada e vira referência e biblioteca de traços (pincéis de "talho", texturas de madeira).
3. Os artistas do estúdio derivam ícones, cartões e animações a partir dessa base, com crédito ao gravador no jogo e no site.

O contrato prevê pagamento justo, crédito e cessão ou licença de direitos para uso no jogo e no marketing (Lei 9.610/1998, de direitos autorais — [Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm); **validar com advogado**). Instituições ligadas à tradição, como o Memorial J. Borges, a Lira Nordestina e o concurso do Festival Mestre J. Borges, são pontos de contato para achar artistas ([seção 1.2](#12-direção-a--folheto-xilogravura-de-cordel)).

- **Referência:** a encomenda de arte a mestres populares é o que o próprio Armorial fez; o *Never Alone* e o *Huni Kuin* (seção 1.13) mostram que trazer os detentores da tradição para dentro do projeto funciona em jogos.
- **Problema que resolve:** a autenticidade e o risco de "imitar o estilo" de um artista vivo.
- **Comportamento que incentiva:** uma comunidade que divulga os gravadores e uma imprensa que tem história para contar.
- **Risco que cria:** custo e prazo de encomenda (a gravura leva dias) e dependência de poucos artistas. Mitigação: encomendar com uma Era de antecedência e ter mais de um gravador por Era.

### 1.8 Paleta

Valores iniciais [H]. Os contrastes foram calculados pelo estúdio com a fórmula de luminância relativa do WCAG ([W3C](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio)) contra o fundo indicado; o mínimo para texto normal no nível AA é 4,5:1, e para componentes de interface, 3:1 ([WCAG 2.2, 1.4.3 e 1.4.11](https://www.w3.org/TR/WCAG22/)).

| Token | Modo dia (sobre papel #F4ECDC) | Contraste | Modo noite (sobre #1F1B18) | Contraste | Uso |
|---|---|---|---|---|---|
| Papel | #F4ECDC | — | #1F1B18 (fundo) | — | Fundo |
| Tinta | #1C1917 | 14,9:1 | #EDE4D3 | 13,6:1 | Texto, contorno, talho |
| Anil | #1F4E79 | 7,4:1 | #8FB3E0 | 7,9:1 | Ação principal; **compra** na Bolsa |
| Barro | #A63D2A | 5,4:1 | #E58A72 | 6,7:1 | Alerta; **venda** na Bolsa; região da serra |
| Mata | #2E6B47 | 5,4:1 | #7CC49A | 8,3:1 | Obras, crescimento, confirmado; região da mata |
| Rio | #22687A | 5,4:1 | #6FC0D2 | 8,3:1 | Travessia, água; região de rio e litoral |
| Ocre (chapa) | #C8962E | 2,3:1 (só preenchimento; texto em tinta sobre ele: 6,5:1) | #E2B85A | 9,2:1 | Ouro, sertão |
| Ocre escuro | #8A6414 | 4,6:1 | — | — | Texto de ouro no modo dia |
| Lacre | #7A2E4D | 7,7:1 | #D98AAE | 6,7:1 | Alvará e loja (o lacre de cera do documento) |
| Bruma | #8F8A84 (preenchimento) / #5E5954 (texto) | 2,9:1 / 5,9:1 | #A39D96 | 6,4:1 | Bruma, desabilitado, previsto |

Regras [H]:
- **Compra e venda em anil e barro** porque azul contra vermelho-alaranjado é o eixo que se mantém distinguível nas deficiências de vermelho e verde: é a lógica da paleta de Okabe e Ito, desenhada para daltonismo ([Okabe e Ito, *Color Universal Design*](https://jfly.uni-koeln.de/color/); via busca). Mesmo assim, compra e venda sempre levam rótulo e forma (▲ compra, ▼ venda).
- **O Alvará tem cor própria (lacre),** usada só na loja, no Câmbio e no Cartório. Dinheiro real nunca se disfarça de ouro.
- **O modo noite é papel escuro, não preto puro,** para manter a sensação de impresso e reduzir o brilho no celular à noite.
- **Previsto em bruma, confirmado em tinta** (seção 2.1, princípio 5).

### 1.9 Tipografia

| Papel | Fonte | Designer e origem | Licença | Por quê |
|---|---|---|---|---|
| Títulos, letreiros e capas | **Londrina Solid** | Marcelo Magalhães (São Paulo). A fonte se chamava Folk e foi renomeada em homenagem à cidade onde ele morava ([GitHub do projeto](https://github.com/marcelommp/Londrina-Typeface)); é descrita como informal, de traços rústicos, inspirada nas ruas de São Paulo ([Figma](https://www.figma.com/fonts/londrina-solid/); via busca). | SIL OFL ([Google Fonts](https://fonts.google.com/specimen/Londrina+Solid/about)) | Letra de mão, irregular, que conversa com a capa de cordel e o letreiro popular sem ser pastiche. Só em tamanhos grandes (24 px ou mais). |
| Interface e texto | **Gabarito** | Naipe Foundry (Álvaro Franca e Felipe Casaprima, Rio de Janeiro), iniciada em 2017 com Leandro Assis para uma plataforma brasileira de estudo para o vestibular; versão pública em 2023, com a Harbor Type; 6 pesos ([GitHub da Naipe](https://github.com/naipefoundry/gabarito)) | SIL OFL 1.1 | Sem serifa geométrica, de origem brasileira, desenhada para interface de estudo. Peso 400 no texto e 600 nos rótulos. |
| Alta legibilidade (opção) | **Atkinson Hyperlegible Next** | Braille Institute (EUA), para leitores com baixa visão; distingue caracteres que se confundem, como B e 8 ou 1, l e I ([Wikipedia](https://en.wikipedia.org/wiki/Atkinson_Hyperlegible); [GitHub](https://github.com/googlefonts/atkinson-hyperlegible)) | SIL OFL | Opção "Fonte de alta legibilidade" nas configurações; candidata a fonte padrão dos números da Bolsa. |

- [F] **Licença.** O Google Fonts informa que as fontes do catálogo podem ser usadas comercialmente e incluídas em produtos vendidos ([Google Fonts, perguntas frequentes](https://developers.google.com/fonts/faq?hl=pt-br)). A OFL permite embutir e distribuir a fonte com o jogo; o que ela veda é vender a fonte sozinha, e versões modificadas não podem usar o nome reservado ([OFL](https://openfontlicense.org/)). **Validar com advogado** o uso em marca registrada (logotipo).
- [H] **Números:** saldos, preços e quantidades usam algarismos de largura fixa (tabulares), para que as colunas da Bolsa não "dancem". [NV] Não verifiquei se a Gabarito tem algarismos tabulares; se não tiver, os números usam a Atkinson Hyperlegible Next.
- [H] **Escala:** texto base de 16 px no celular, secundário de 14 px no mínimo, títulos de 24 a 32 px, altura de linha de 1,45. O jogador escala tudo de 100% a 200% (seção 2.6).
- [H] **Peso:** só os glifos latinos, em woff2, e no máximo três famílias. Meta de até ~150 KB de fontes no primeiro carregamento.
- [H] **Logotipo:** desenhado à mão por um letrista ou gravador, não composto numa fonte. É a marca, e precisa ser exclusivo.

### 1.10 Iconografia

- **Grade** [H]: ícones de interface em 24 px (área de toque de 44 px) e ícones de item em 48 px, ambos sobre grade de 2 px. O talho tem 2 px a 24 px.
- **Teste obrigatório** [H]: todo ícone precisa ser reconhecido em escala de cinza, a 24 px, por 4 de 5 pessoas que nunca viram o jogo (teste rápido de corredor).
- **Ícone nunca sozinho na navegação:** a barra de abas tem ícone e texto. Ícone sem rótulo só para ações universais (fechar, voltar), com nome acessível.
- **Ferramentas dos ofícios** (primeira proposta [H], para a família visual ser reconhecível):

| Ofício | Ícone | Ofício | Ícone | Ofício | Ícone |
|---|---|---|---|---|---|
| Mineração | picareta | Fundição | cadinho | Ferraria | bigorna |
| Lenhadoria | machado | Carpintaria | plaina | Alfaiataria | agulha e linha |
| Pesca | anzol | Curtume | faca de descarnar | Alquimia | frasco |
| Colheita | cesto | Tecelagem | lançadeira | Culinária | panela de barro |

- **Moedas e marcadores** [H]: **Ouro**, moeda de beira serrilhada; **Alvará**, folha dobrada com lacre de cera (cor lacre); **Marcos**, marco de pedra de caminho; **Mérito**, tijolo de adobe com uma marca de mão, porque é contribuição para a cidade. As quatro formas são diferentes em silhueta, não só em cor.
- **Estados:** ícone de estado sempre com texto ("Pronto", "Em fila", "Bloqueado — nível 50").

### 1.11 Tom de texto

**A voz é a de um contador de feira** [H]: calorosa, clara, que fala com "você", conta o que aconteceu e não grita. Tem três registros:

| Registro | Onde | Como |
|---|---|---|
| Funcional | Botões, formulários, Bolsa, loja | Verbo direto e curto ("Vender", "Inscrever no cerco", "Pagar com Pix"). Números exatos. Nada de trocadilho. |
| Narrativo | Folheto da volta, crônicas da Era, encantados | Frases de contador ("Enquanto você esteve fora, o carvão acabou às 3h12"). |
| Verso | Capa e crônica da Era, cura de um encantado | Sextilhas de cordel escritas **por cordelistas contratados e creditados**, nunca por gerador automático nem pela equipe imitando o gênero. |

Regras [H]:
- **Sem urgência fabricada nem culpa:** nada de "volte ou perca", "só hoje", "seus amigos estão na sua frente". [F] A lista de práticas que os jogadores consideram predatórias inclui oferta por tempo limitado e moeda que esconde o preço real ([06, §2.3](../01-pesquisa/06-monetizacao-retencao.md)).
- **Regionalismo com parcimônia:** um "arretado" numa crônica, sim; "oxente" em toda notificação, não. Nenhum sotaque escrito como piada. Os textos de cada região passam por leitores da região (seção 1.13).
- **Formato brasileiro:** R$ 19,90; 12.430 de ouro; "sáb., 14/11, 20h (horário de Brasília)". Sempre dia da semana e fuso nos prazos.
- **Glossário sempre:** Arraial, Ofício, Fila, Obra-prima, Encomenda, Obra, Cerco, Câmara, Bolsa, Feira, Pregão, Câmbio, Troca, Cartório, Baú do Mascate, Alvará, Mérito, Marcos. Toque longo num termo abre a explicação.
- **Inglês é localização, não tradução:** a versão EN tem nomes próprios (a bíblia já sugere Charter e Council) e o mesmo tom. Os versos de cordel ganham versão em inglês feita por tradutor literário, com nota sobre a forma.

| Em vez de | Escreva |
|---|---|
| "Sua produção foi limitada!" | "92 lingotes podem ir ao mercado hoje. Os outros 16 viraram Mérito para a Muralha." |
| "Oferta imperdível! Acaba em 02:14:59" | "Fachada 'Taipa e cal' · 1 Alvará (R$ 19,90)" |
| "Volte agora ou perca o cerco!" | "Inscrições do cerco fecham amanhã, sex., 20h. Você não precisa estar online no sábado." |
| "Erro 409" | "Esse item mudou no outro aparelho. Atualizamos a tela; confira antes de vender." |

### 1.12 Som e música

**Direção:** música de feira e de beira de rio, tocada por gente [H].

**Referências reais**
- [F] O **Quinteto Armorial** (1970/1972 a 1980) levou a música do sertão às salas de concerto. Na formação mais longa, tinha viola nordestina (Antonio Madureira), violino e rabeca (Antonio Nóbrega), violão, flauta e pífano, e marimbau ([Revista Pesquisa FAPESP](https://revistapesquisa.fapesp.br/en/book-gathers-scores-by-antonio-madureira/); via busca).
- [F] A **Banda de Pífanos de Caruaru,** ativa desde os anos 1920, ganhou o Grammy Latino de Melhor Álbum de Raízes Brasileiras/Regional em 2004 ([Latin Grammy](https://cms.latingrammy.com/artists/banda-de-pifanos-de-caruaru/)). A formação típica de uma banda de pífanos é de dois pífanos, zabumba, pratos, caixa e contra-surdo ([*Música Hodie*, UFG](https://revistas.ufg.br/musica/article/download/61898/37548/303923); via busca).

**Proposta** [H]
- **Trilha:** composição original com instrumentação brasileira (rabeca, pífano, viola, zabumba, triângulo, sanfona), arranjada por região. A mata tem mais sopro e percussão de madeira; o sertão, rabeca e viola; o rio, cordas dedilhadas e água; a Bruma, a mesma melodia com instrumentos desafinando e sumindo.
- **Gravação:** com músicos brasileiros contratados e creditados, com contrato claro de direitos para jogo, trailer e transmissões ao vivo (**validar com advogado**: Lei 9.610/1998). Os criadores de conteúdo podem usar a trilha sem bloqueio de direitos, porque o vídeo é o canal de descoberta.
- **O idle toca em segundo plano:** a música vem baixa por padrão e para quando a aba está oculta; os efeitos sonoros ficam ligados e curtos. Há uma "Rádio do Arraial" opcional, com as faixas em sequência longa para tocar enquanto o jogador trabalha.
- **Assinatura de ofício:** cada ofício tem o seu som de trabalho (martelo na bigorna, serrote, tear, panela). A fila em andamento soa como uma oficina viva, e o jogador reconhece o ofício pelo ouvido.
- **Feira e Pregão:** pregões de vendedor (as chamadas de feira) gravados por atores para dar vida ao mercado. Nunca gravações de pessoas reais sem autorização.
- **Obra-prima:** o ritmo acompanha as etapas (o baião acelera na têmpera), mas nenhum resultado depende de ouvir (seção 2.6).
- **Avisos:** cada aviso tem o seu som curto e distinto ("fila terminou" é diferente de "cerco"), sem sirenes nem sons de ansiedade.
- **Evitar:** toques e cantos sagrados (pontos de terreiro, cantos indígenas) e instrumentos de uso ritual como efeito decorativo, salvo em parceria e com consentimento dos detentores (seção 1.13).

### 1.13 Sensibilidade cultural

**Princípios** [H]
1. **Folclore vivo não é folclore de museu.** Muitos seres "do folclore" são, para alguém, parte de uma fé ou de uma cosmologia praticada hoje.
2. **Religião não é bestiário.** Nenhuma entidade cultuada hoje vira inimigo, nem mesmo "corrompida".
3. **Não existe "o indígena".** São mais de 300 povos, com histórias diferentes. Se usarmos uma narrativa, ela tem povo de origem, e esse povo é consultado.
4. **Região não é estereótipo.** O Nordeste não é só seca e cangaço, a Amazônia não é paraíso vazio e o Sul e o Sudeste também estão em Pindorama.
5. **Quem é retratado participa e é pago.**

**O que evitar, e por quê**

| Evitar | Por quê | Em vez disso [H] |
|---|---|---|
| Bandeirantes e "bandeiras" como heróis; conquista de território "vazio" | Símbolos de violência colonial ([bíblia §3](00-biblia.md)) | A Bruma não engoliu terra vazia: engoliu os seus donos (os encantados). A Travessia cura e reencontra, não conquista (proposta 3, seção 4). |
| Entidades de religiões afro-brasileiras como monstros ou como "encantados" de jogo | [F] No Tambor de Mina (MA), "encantados" são entidades espirituais recebidas em transe, e a encantaria é o conjunto desses seres e dos seus mundos, muitas vezes no fundo das águas, segundo a antropóloga Mundicarmo Ferretti ([Ferretti, *Encantaria de Barba Soeira*](https://www.gpmina.ufma.br/wp-content/uploads/2017/03/Encantaria-de-Barba-Soeira.pdf); [Boletim da Comissão Maranhense de Folclore](https://cmfolclore.ufma.br/wp-content/uploads/2021/11/BOLETIM-67.pdf); via busca) | Não usar nomes nem traços de entidades cultuadas; submeter o próprio termo "encantados" à consulta (proposta 2, seção 4). |
| Orixás, voduns, santos e caboclos em qualquer papel de combate | Mesmo motivo; risco de intolerância religiosa | Ficam fora do jogo, salvo projeto específico feito com terreiros. |
| Grafismos indígenas como textura ou padrão decorativo | [F] A arte gráfica kusiwa, dos Wajãpi (AP), foi registrada pelo Iphan em 2002, a pedido do conselho das aldeias, e reconhecida pela UNESCO em 2003 ([Iphan Amapá](https://www.gov.br/iphan/pt-br/superintendencias/amapa/patrimonio-imaterial)). A antropóloga Dominique Gallois discute quem são os donos, detentores e usuários legítimos desses padrões ([*Revista de Antropologia*, USP](https://revistas.usp.br/ra/article/view/46956)) | Nenhum grafismo de povo real. Padrões do jogo são criados do zero; parceria com um povo só com consentimento e pagamento. |
| Saci como "menino negro travesso" | [F] Pesquisadores ouvidos pela Agência Brasil dizem que a imagem consagrada por Monteiro Lobato distorceu uma lenda de origem Guarani, e a escritora Kiusam de Oliveira relata o Saci usado como xingamento na escola ([Diário de Pernambuco, 2023](https://www.diariodepernambuco.com.br/noticia/brasil/2023/10/dia-do-saci-negacao-do-personagem-revela-cultura-racista.html)) | Se o Saci entrar, entra pela versão de origem e com revisão; nada de traço racializado caricato. |
| Iara e Boto sexualizados | [H] A versão "sereia sedutora" e o "boto que engravida" carregam leituras de gênero e de violência | Personagens com motivação própria, sem sexualização (o jogo é 18+, mas isso não muda a regra). |
| Cangaço e Canudos como cenário glamouroso | [H] Episódios de violência real; [F] o *Árida*, jogo baiano ambientado em Canudos, foi feito com visitas repetidas ao sertão ([Xbox News, 2024](https://news.xbox.com/pt-br/2024/11/22/5-motivos-para-jogar-o-game-brasileiro-arida-backlands-awakening-no-xbox/)) | Fora do lançamento. Se um dia entrar, só com pesquisa de campo e consultoria histórica. |
| "Índio", "macumba" e afins como palavra do jogo | Termos pejorativos ou imprecisos [H] | "Indígena" ou o nome do povo; nenhuma religião citada como xingamento. |

**O caso que ensina pelo erro** [F]. A série *Cidade Invisível* (Netflix, 2021) foi elogiada por levar o folclore ao grande público, mas recebeu críticas de ativistas indígenas por não ter atores nem profissionais indígenas e por sugerir que os mais de 300 povos do país compartilham as mesmas crenças. A segunda temporada (2023) incluiu indígenas na frente e atrás das câmeras ([Olhar Digital, 2021](https://olhardigital.com.br/2021/02/19/cinema-e-streaming/cidade-invisivel-ativistas-indigenas-criticam-representatividade-serie/); [Metrópoles](https://www.metropoles.com/entretenimento/televisao/cidade-invisivel-aumenta-representatividade-indigena-na-2a-temporada); via busca). [H] Lição: consultar depois do lançamento sai mais caro e convence menos que consultar antes.

**Os casos que ensinam pelo acerto** [F]
- **Never Alone** (2014): iniciado pelo Cook Inlet Tribal Council, do Alasca, e feito com a E-Line Media em cooperação com anciãos, contadores de histórias, linguistas, artistas e jovens Iñupiat, com "embaixadores culturais" nos créditos ([Wikipedia](https://en.wikipedia.org/wiki/Never_Alone_(video_game)); [Cultural Survival](https://www.culturalsurvival.org/publications/cultural-survival-quarterly/making-never-alone-kisima-innitchuna-celebrating-people); via busca).
- **Huni Kuin: Yube Baitana** (2016): jogo brasileiro idealizado pelo antropólogo Guilherme Meneses, com roteiro e histórias criados junto com o povo Huni Kuin (Kaxinawá); cada uma das cinco fases vem de um mito tradicional ([Meneses, *GIS*, USP](https://www.revistas.usp.br/gis/article/view/129176); [Agência Brasil, 2016](https://agenciabrasil.ebc.com.br/cultura/noticia/2016-02/cultura-de-povo-indigena-da-amazonia-vira-tema-de-video-game)).

**Revisão por consultores** [H]
- **Quem:**
  1. Folclorista ou antropólogo (o Centro Nacional de Folclore e Cultura Popular, do Iphan, é um ponto de contato).
  2. Consultores indígenas dos povos cujas narrativas forem usadas, um por narrativa, e não "um consultor indígena" genérico.
  3. Lideranças de religiões de matriz africana (Tambor de Mina, Terecô, Umbanda, Candomblé), para a questão dos encantados.
  4. Cordelistas e xilogravuristas, como autores e revisores do tom.
  5. Leitores sensíveis das cinco regiões, para texto e sotaque.
  6. Pessoas com deficiência, para a acessibilidade (seção 2.6).
- **Quando:** (a) antes de fechar esta direção de arte, como portão de saída da Fase 3; (b) a cada Era, antes de produzir os encantados novos; (c) antes de cada campanha de marketing.
- **Como:** cada encantado tem uma **ficha de sensibilidade**: origem (povo ou região), se é cultuado hoje, versão adotada, o que mudamos e por quê, consultor, parecer e data. O consultor tem poder de veto sobre a representação, não sobre o design de jogo.
- **Pagamento e crédito:** todos são pagos e creditados. Orçamento de partida: 3% a 5% do orçamento de arte [H].
- **Quatro perguntas:** inspira-se em *Never Alone* e *Huni Kuin*, e se diferencia de *Cidade Invisível* na 1ª temporada · resolve o risco de caricatura, apropriação e intolerância · incentiva uma relação de longo prazo com os detentores da cultura (e conteúdo para cada Era) · cria custo, prazo e o risco do "consultor de fachada", chamado para carimbar uma decisão já tomada (mitigação: consulta antes do conceito, não depois da arte).

## 2. UI e UX

### 2.1 Princípios

Cada princípio com as quatro perguntas: referência, problema, comportamento e risco. Todos são [H], apoiados nas fontes indicadas.

| # | Princípio | Regra | Referência | Problema que resolve | Comportamento que incentiva | Risco e mitigação |
|---|---|---|---|---|---|---|
| 1 | **Celular primeiro, uma mão** | Tela-base de 360 × 640 px; ações principais na metade de baixo, ao alcance do polegar; o desktop é a versão expandida, não o contrário. | 44,1% preferem o celular ([08](../01-pesquisa/08-mercado-posicionamento.md)) | O jogo é aberto no ônibus, na fila, no intervalo. | Sessões curtas e frequentes. | O trader de desktop se sentir apertado → Bolsa com modo denso no desktop. |
| 2 | **Cinco segundos para entender a volta** | A tela inicial responde, nesta ordem: o que mudou, o que precisa de mim, o que vence primeiro. | Sessão de 5 a 15 min, 2 a 6 vezes por dia ([bíblia §6.1](00-biblia.md)) | Sessões curtas gastas procurando informação. | Decidir em vez de garimpar. | Resumo esconder profundidade → todo cartão abre a tela completa em um toque. |
| 3 | **Tudo a no máximo dois toques** | Chegar à tela de qualquer ação frequente em até 2 toques a partir do Arraial; a confirmação de uma ação de valor ou de um voto não conta como toque de navegação (seção 2.3). | Baú AFK com 1 ou 2 logins por dia ([E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md)) | Atrito mata a sessão curta. | Voltar mais vezes, por menos tempo. | Tela inicial lotada → só cinco cartões de agenda; o resto mora nas abas. |
| 4 | **A volta é um presente** | O **Folheto da volta** abre em sequência (oficina, mercado, Arraial, recados), pulável com "Mostrar tudo". Tudo já está creditado; não existe botão de "coletar", "dobrar" nem anúncio. A primeira linha é a consequência do plano: "seu plano rendeu X; o gargalo foi Y". | A tela de volta deve mostrar a consequência do plano ([02a, §6](../01-pesquisa/02a-teoria-design-idle.md)); o Melvor simula 24 h na volta ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)); insight 14 ([síntese](../01-pesquisa/00-sintese.md)) | O ausente precisa se sentir esperto, não sortudo. | Planejar antes de sair. | Virar ritual de caça-níquel → sem sorteio encenado, sem suspense artificial, com redução de movimento. |
| 5 | **Previsto × confirmado** | O que o servidor ainda não liquidou aparece em cor bruma e com o rótulo "previsto"; o confirmado aparece em tinta. | [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md) | A sensação de "o jogo me roubou" quando a reconciliação corrige a previsão. | Confiar no número. | Mais um código visual para aprender → legenda no primeiro uso. |
| 6 | **Dinheiro sem disfarce** | Todo preço em Alvará mostra o equivalente em R$ ao lado. Na loja, o teto de gasto do mês fica visível. Nada de contagem regressiva de oferta nem de desconto "de/por" sem preço anterior real. | Moeda que esconde o preço real e oferta por tempo limitado estão na lista de práticas predatórias ([06, §2.3](../01-pesquisa/06-monetizacao-retencao.md)); [F] o CDC exige informações "corretas, claras, precisas" e ostensivas sobre preço na oferta ([Lei 8.078/1990, art. 31](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm); **validar com advogado**) | Confiança é produto ([pilar 5](00-biblia.md)). | Compra consciente e recorrente. | Converter menos que a média do mercado → é o preço da promessa ([06, §3.1](../01-pesquisa/06-monetizacao-retencao.md)). |
| 7 | **Chances antes da compra** | A tabela de chances do Baú do Mascate fica na mesma tela do botão de compra, sem link escondido. A abertura é imediata e pulável: sem roleta, sem "quase ganhou", um Baú por vez. | [F] A Apple exige que caixas pagas divulguem as chances de cada tipo de item antes da compra ([App Review Guidelines, 3.1.1](https://developer.apple.com/app-store/review/guidelines/)); a condenação da Riot no TJDFT mandou publicar chances ([06](../01-pesquisa/06-monetizacao-retencao.md); [05b](../01-pesquisa/05b-rmt-legal-brasil.md)) | A exposição jurídica e ética do Baú (risco assumido pelo Gabriel). | Decidir sabendo o que compra. | Transparência não tira o Baú da zona de risco de jogo de azar → **validar com advogado**; teto de gasto e de Baús por mês. |
| 8 | **Calma por padrão** | Marcador vermelho só para o que pede ação e tem prazo; nada pisca; poucos avisos (seção 2.5). | "Nunca volte ou perca" ([07, §7.4](../01-pesquisa/07-tecnica-idles-online.md)) | O jogo virar coleira. | Voltar porque quer. | O jogador perder um prazo → agenda ordenada por prazo e lembretes opcionais. |
| 9 | **Taxa e líquido explícitos** | Toda ação de valor mostra bruto, taxas (que são destruídas) e o líquido em destaque: "você recebe". | A revolta com a alta de imposto sem explicação no EVE ([F01](../01-pesquisa/fichas/F01-eve-online.md); insight 10); taxas da [bíblia §6.6](00-biblia.md) | Desconfiança e erro de conta. | Negociar sem calculadora. | Excesso de números → o detalhe recolhe; o líquido fica sempre visível. |
| 10 | **Duas taxas visíveis** | Cada fila mostra o ritmo presente e o ritmo ausente, e quanto do offline ainda resta ("seu offline cobre até 24 h; restam 14 h"). | P12 ([conceito](../02-conceito.md)); insight 15 | O ausente não saber o que ganha nem o que perde. | Planejar a ausência. | A diferença parecer castigo → mostrar o que o ausente ganha (Mérito do excedente), a reconciliar com o módulo 02. |
| 11 | **Confirmação proporcional** | Ações de valor (vender, comprar, trocar, pagar, votar) têm tela de resumo e confirmação; ações sem valor têm "desfazer" e não pedem confirmação. | [F] WCAG 2.2, 3.3.4 (prevenção de erro em dados financeiros) ([W3C](https://www.w3.org/TR/WCAG22/)); idempotência ([07, §2.4](../01-pesquisa/07-tecnica-idles-online.md)) | Toque errado com consequência real. | Agir rápido sem medo. | Confirmação demais cansa → só onde há valor. |
| 12 | **Texto antes de ícone** | Ícones da navegação sempre com rótulo; termo do glossário com toque longo para explicar. | [GAG](https://gameaccessibilityguidelines.com/basic/): linguagem simples e clara | Jogo de muitos sistemas com nomes próprios. | Aprender jogando. | Tela mais carregada → rótulos curtos. |

### 2.2 Navegação

**Cinco abas na barra de baixo (celular)** [H]

| Aba | O que tem |
|---|---|
| **Arraial** (início) | Visão da cidade (lotes, obras, a Bruma nas bordas), agenda (cerco, encomendas, Câmara, obras) e o resumo da sua oficina (filas, cargas de obra-prima, teto negociável do dia). |
| **Oficina** | Ofícios e níveis, filas (montar, reordenar, tarefa de reserva), receitas, obra-prima, ajudantes, inventário e armazém. |
| **Mercado** | Bolsa, Feira, Pregão, Câmbio, Troca e Cartório; o IPA. |
| **Bruma** | Expedições, vocação e equipamento de combate, masmorras e a Travessia (a partir da 2ª Era). |
| **Você** | Personagem e aparência, guilda, títulos e Mérito, Recados, Loja, configurações (acessibilidade, notificações, idioma). |

**Cabeçalho fixo:** nome do Arraial e da Era; saldo de ouro; saldo de Alvará, que leva à Loja; e o sino dos Recados. A conversa (chat de guilda e do Arraial) abre numa folha deslizante a partir do cabeçalho.

**Desktop (1024 px ou mais)** [H]: as mesmas cinco seções numa barra lateral, o conteúdo no centro e, à direita, a agenda e a conversa. A Bolsa ganha modo denso, com livro, gráfico e suas ordens lado a lado.

**Modo canto de tela** [H]: uma janela de 360 × 220 px (PWA instalado no desktop) com as filas, a contagem regressiva, o próximo prazo e um botão "Abrir". É o formato de *Rusty's Retirement* aplicado ao nosso jogo ([A10, §3](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)). É só leitura e atualiza com pouca frequência, para não virar carga de servidor nem ferramenta de bot (a reconciliar com o módulo 13).

- **Referência:** a barra de abas inferior é o padrão dos jogos de celular estudados; o modo canto de tela vem da onda dos companheiros de área de trabalho ([A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md)).
- **Problema que resolve:** o jogo tem muitos sistemas, e o jogador de 5 minutos precisa achar tudo sem menu de menu.
- **Comportamento que incentiva:** começar sempre pelo Arraial (a cidade antes do eu) e manter o jogo aberto no canto da tela enquanto trabalha.
- **Risco que cria:** cinco abas no limite do confortável, e a Loja dentro de "Você" pode parecer escondida → o saldo de Alvará no cabeçalho leva à Loja em um toque, sem empurrar ofertas.

### 2.3 Mapa de toques

Contados a partir do Arraial (tela inicial). A confirmação final de uma ação de valor não entra na conta [H].

| Ação | Caminho | Toques |
|---|---|---|
| Ver o que aconteceu na ausência | Abrir o jogo → Folheto da volta | 0 |
| Repetir o plano de filas | Folheto da volta → "Repetir o plano" | 1 |
| Ver e ajustar uma fila | Cartão da fila → "Ajustar" | 2 |
| Começar uma obra-prima | Cartão "Obra-prima (2 cargas)" | 1 |
| Inscrever-se no cerco | Cartão do cerco → "Inscrever-me" (com a última inscrição pré-carregada) | 2 |
| Entregar na encomenda | Cartão da encomenda → "Entregar" | 2 |
| Votar na eleição | Cartão da Câmara → candidato (o voto pede confirmação) | 2 |
| Vender um item na Bolsa | Mercado → item → "Vender" (ou Oficina → item → "Vender na Bolsa") | 2 |
| Comprar Alvará | Saldo de Alvará no cabeçalho → "Comprar" | 2 |
| Ver as chances do Baú | Saldo de Alvará → Loja (as chances estão na seção do Baú) | 1 |
| Ler os recados | Sino | 1 |
| Mudar tamanho de fonte ou contraste | Você → Acessibilidade (também oferecido na primeira abertura) | 2 |

### 2.4 As telas principais

Os wireframes estão em [`14-wireframes/`](14-wireframes/index.html). Cada arquivo tem notas numeradas que explicam as decisões. Em resumo:

| Tela | Arquivo | Decisões-chave [H] |
|---|---|---|
| (a) Arraial: cidade e oficina | [a-arraial.html](14-wireframes/a-arraial.html) | Mapa de lotes com a Bruma nas bordas e o avanço das obras; agenda de até cinco cartões ordenados por prazo; as filas com as duas taxas e o offline restante; o teto negociável do dia visível, com o excedente indo para o Mérito; a terceira fila bloqueada mostra como se conquista, nunca um preço. |
| (b) Folheto da volta | [b-retorno.html](14-wireframes/b-retorno.html) | Abre como presente, em seções; a primeira é o plano e o gargalo; linha do tempo dos eventos ("03h12 o carvão acabou"); excedente do teto explicado; ordens executadas com o líquido; "Repetir o plano" em um toque; nada a coletar, nada a dobrar. |
| (c) Bolsa e Feira | [c-bolsa-feira.html](14-wireframes/c-bolsa-feira.html) | Livro de ordens com compra (▲, anil) e venda (▼, barro), rótulos e tabela acessível; a sua posição na fila; formulário com bruto, taxa de anúncio de 1%, taxa de venda de 5% e "você recebe"; aviso de preço fora da faixa; na Feira, durabilidade e reparos restantes no anúncio, e a taxa de 6%. |
| (d) Obra-prima | [d-obra-prima.html](14-wireframes/d-obra-prima.html) | Três etapas (reagentes, têmpera, acabamento) decididas por toque, sem reflexo; prévia de qualidade que reage às decisões; "modo tranquilo" que pausa o relógio; resultado com a marca do mestre. Mecânica a reconciliar com o módulo 06. |
| (e) Inscrição no cerco | [e-cerco-inscricao.html](14-wireframes/e-cerco-inscricao.html) | Data, hora e fuso; prazo da inscrição (24 h antes); "você não precisa estar online"; escolha de posto por vocação com vagas; desgaste esperado do equipamento; suprimentos para o Arraial (viram Mérito); guarnição da guilda; o que falta para a defesa, com link para a Bolsa e para a encomenda. |
| (f) Câmara | [f-camara.html](14-wireframes/f-camara.html) | Eleição com "uma pessoa, um voto" e voto secreto; plataformas dentro das faixas da constituição; votações com o voto nominal de cada vereador; a faixa constitucional desenhada (taxa da Feira de 4% a 8%); a lista do que a Câmara não pode mudar. Método de votação a reconciliar com o módulo 09. |
| (g) Loja | [g-loja.html](14-wireframes/g-loja.html) | Teto de gasto do mês no topo; Alvará com preço em R$ e Pix; o que o Alvará nunca compra; cosméticos com o preço em Alvará e em R$; Baú com a tabela de chances ao lado do botão; carência de transferência por meio de pagamento; nenhuma contagem regressiva. Preços a reconciliar com o módulo 11. |

### 2.5 Notificações

| Aviso | Quando | Exemplo de texto | Padrão [H] |
|---|---|---|---|
| Fila terminou | No horário previsto (job do servidor, refeito se o plano mudar) | "Sua fila de lingotes terminou: 120 prontos. A próxima está vazia." | Ligado após o pedido |
| Fila parou | Quando um insumo acaba | "O carvão acabou às 3h12; a fila passou para a tarefa de reserva." | Ligado |
| Encomenda acabando | 24 h antes do prazo, só se a sua parte não foi entregue | "Faltam 24 h para a encomenda 'Lanças para a Muralha'. Sua parte: 6 de 10." | Ligado |
| Cerco: inscrição | 24 h e 2 h antes de fechar, só se você não se inscreveu | "As inscrições do cerco fecham hoje às 20h. Você não precisa estar online no sábado." | Ligado |
| Cerco: resultado | Ao fim do cerco (respeitando o horário de silêncio) | "O Arraial resistiu ao cerco da Lagoa. Seu posto na Muralha rendeu 72 de Mérito." | Ligado |
| Ordens executadas | Agrupadas, no máximo uma vez por hora | "3 ordens executadas na Bolsa: +2.432 de ouro." | Desligado |
| Lance superado | Na hora, e 30 min antes do fim do Pregão | "Seu lance no Machado de ipê foi superado (agora: 1.950 de ouro)." | Ligado, se você deu lance |
| Câmara | Abertura e 24 h antes do fim de eleição ou votação | "A eleição da Câmara fecha qui., 20h. Uma pessoa, um voto." | Ligado |
| Troca recebida | Na hora | "Bia enviou uma Troca: 40 tábuas de cedro." | Ligado |

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
| **Visão** | Contraste de 4,5:1 no texto e de 3:1 nos componentes (WCAG 1.4.3 e 1.4.11). Texto escalável até 200% sem perder função (1.4.4) e sem rolagem horizontal a 320 px de largura (1.4.10). Nada transmitido só por cor (1.4.1): compra e venda com ▲▼ e rótulo, qualidade com moldura e nome, assombrado por textura. Opções de fonte de alta legibilidade (Atkinson Hyperlegible Next), de alto contraste (tinta pura sobre papel liso, sem textura) e de desligar a textura de papel e a hachura. Filtros de daltonismo não são a solução principal: a solução é não precisar deles. |
| **Leitor de tela** | HTML semântico (marcos, títulos, listas; a Bolsa é uma tabela com cabeçalhos). Mensagens de estado em região viva educada, como "fila terminou" (4.1.3), nunca a contagem segundo a segundo, que é lida sob demanda. Ordem de foco lógica. O gráfico de preço tem tabela equivalente; as chances do Baú são uma tabela. Gravuras decorativas ficam ocultas ao leitor; as que informam têm descrição. Testes com TalkBack, VoiceOver e NVDA. |
| **Motora** | Alvos de 44 × 44 px (2.5.5; o mínimo AA é de 24 × 24 px, em 2.5.8). Nenhuma ação exige arrastar (2.5.7) nem gesto com vários dedos. A obra-prima se decide por toques, sem reflexo, e o "modo tranquilo" pausa o relógio (2.2.1, tempo ajustável); o *Game Accessibility Guidelines* recomenda permitir ajustar a velocidade do jogo ([GAG](https://gameaccessibilityguidelines.com/basic/)). |
| **Cognição** | Linguagem simples e clara (GAG); glossário no toque longo; resumo e confirmação antes de qualquer ação financeira (3.3.4); nenhuma informação importante some sozinha. |
| **Movimento e luz** | Respeitar a preferência de movimento reduzido do sistema ([MDN, `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)); nada pisca mais de três vezes por segundo (2.3.1); evitar padrões repetitivos de alto contraste em áreas grandes ([GAG](https://gameaccessibilityguidelines.com/basic/)), o que vale em dobro para a hachura do Folheto. |
| **Audição** | Nenhuma informação só por som ([GAG](https://gameaccessibilityguidelines.com/basic/)); legenda em toda fala; volumes separados (música, efeitos, vozes, avisos); áudio mono. |

Os critérios numerados vêm do [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/); a explicação do 2.5.8 (24 × 24 px no AA, 44 × 44 px no 2.5.5) está na [nota de entendimento do W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

**Processo** [H]: a acessibilidade entra na definição de "pronto" de cada tela, com teste automático e manual. No alfa, um grupo de jogadores com deficiência é recrutado e pago.

- **Quatro perguntas:** inspira-se no WCAG, no *Game Accessibility Guidelines* e na LBI, e se diferencia de idles como o Antimatter Dimensions, criticado pela falta de escala de texto ([A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md)) · resolve a exclusão de quem lê com dificuldade, não distingue cores ou não tem precisão motora, e o risco legal · incentiva sessões longas sem cansaço e um público mais velho (o veterano de MMO de 30 a 45 anos, [08, §3.5](../01-pesquisa/08-mercado-posicionamento.md)) · cria custo de design e de teste, e conflito com a textura do Folheto (resolvido com o modo liso).

### 2.7 PWA

- **Instalação.** [F] O Chrome oferece a instalação quando o site cumpre os critérios (HTTPS, manifesto, ícones, engajamento); no iPhone ela é manual, por "Adicionar à Tela de Início", e desde o iOS 26 todo site adicionado abre como app ([07, §7.1](../01-pesquisa/07-tecnica-idles-online.md)). [H] Oferecemos a instalação em dois momentos: ao montar a primeira fila longa (junto com o pedido de aviso) e ao voltar pela terceira vez em uma semana. Nunca na primeira tela, nunca bloqueando o jogo. No iPhone, um guia de três passos com desenho.
- **Offline só de leitura** [H]. Sem conexão, o jogo mostra o último estado conhecido, com a hora ("Sem conexão — dados de 14h32"). O progresso das filas aparece como **previsto** (cor bruma), calculado a partir do horário de término que o servidor mandou. Todo botão que move valor fica desabilitado, com o motivo ("Vender precisa do servidor"). Dá para fazer **rascunhos** (reordenar a fila, preparar uma lista de vendas), guardados no aparelho e enviados só quando o jogador confirma, já online, com nova validação do servidor. Isso é mais restrito que a fila local de comandos com prazo de validade que o [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md) admitia (proposta 4, seção 4).
- **O aparelho é descartável.** [F] O Safari apaga os dados de um site após 7 dias sem uso, fora dos apps da Tela de Início ([07, §4.4](../01-pesquisa/07-tecnica-idles-online.md)). [H] Nada importante vive só no cliente: no máximo rascunhos e preferências de tela.
- **Atualização** [H]: a versão nova baixa em segundo plano e o recarregamento é oferecido num momento calmo. Nunca no meio de uma obra-prima ou de um formulário de ordem aberto.
- **Peso** [H]: primeiro carregamento de até 1,5 MB comprimido (fontes de ~150 KB; arte inicial em SVG e WebP) e interativo em até 3 s num Android de entrada com 4G. A arte de cada aba carrega quando a aba abre, e no aparelho fraco a animação fica reduzida.
- **Quatro perguntas:** inspira-se no princípio "o cliente é uma tela" do [07](../01-pesquisa/07-tecnica-idles-online.md), e se diferencia do save local do Melvor, cuja perda de save é queixa recorrente ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)) · resolve rede ruim, aparelho fraco e a instalação manual do iPhone · incentiva abrir o jogo em qualquer lugar e instalar quando faz sentido · cria a frustração de "não consigo vender no metrô" (mitigação: rascunho de venda, com envio em um toque quando a rede volta).

## 3. Wireframes

**O que são:** documentação de interface, não código do jogo. HTML simples, um arquivo por tela, CSS embutido, sem bibliotecas nem fontes externas, legível no celular. São caixas, textos e hierarquia: a arte final (gravura, papel, cores do Folheto) não está aqui. Todos os números das telas são exemplos [H].

**Como ler:** abra [`14-wireframes/index.html`](14-wireframes/index.html) no navegador. Cada tela aparece numa moldura de celular (360 a 420 px); no desktop, as notas de design ficam ao lado, e no celular, abaixo. Os círculos numerados na tela correspondem às notas. Caixas tracejadas são lugares de imagem (gravura).

| Arquivo | Tela |
|---|---|
| [index.html](14-wireframes/index.html) | Índice, legenda e mapa de navegação |
| [a-arraial.html](14-wireframes/a-arraial.html) | (a) Arraial: visão da cidade e da oficina |
| [b-retorno.html](14-wireframes/b-retorno.html) | (b) Folheto da volta (tela de retorno do ausente) |
| [c-bolsa-feira.html](14-wireframes/c-bolsa-feira.html) | (c) Bolsa (livro de ordens) e Feira |
| [d-obra-prima.html](14-wireframes/d-obra-prima.html) | (d) Obra-prima |
| [e-cerco-inscricao.html](14-wireframes/e-cerco-inscricao.html) | (e) Inscrição no cerco |
| [f-camara.html](14-wireframes/f-camara.html) | (f) Câmara: eleição e votações |
| [g-loja.html](14-wireframes/g-loja.html) | (g) Loja: Alvará em R$, cosméticos e Baú com chances |

## 4. Propostas de mudança na bíblia

**1. [proposta de mudança na bíblia] Dar nome oficial à tela de retorno do ausente.**
- **(A) "Folheto da volta"** (EN: *While You Were Away*, a definir na localização). **← recomendado**
- (B) "Tela de retorno" (descritivo, sem identidade).
- (C) "Diário do ausente".
- *Por quê:* é a tela mais importante do idle (insight 14) e merece um nome do mundo; "folheto" amarra a tela à direção de arte e ao cordel, que conta o que aconteceu.

**2. [proposta de mudança na bíblia] Submeter o termo "encantados" à consulta antes de fixá-lo.**
- **(A) Manter "encantados" só depois de ouvir praticantes do Tambor de Mina, do Terecô e da Pajelança; se a consulta desaconselhar, adotar um nome cunhado no próprio mundo. ← recomendado**
- (B) Trocar já por um nome cunhado no mundo (por exemplo, "os Antigos").
- (C) Manter sem consulta.
- *Por quê:* [F] "encantados" é a categoria de entidades recebidas em transe no Tambor de Mina ([Ferretti](https://www.gpmina.ufma.br/wp-content/uploads/2017/03/Encantaria-de-Barba-Soeira.pdf); via busca). No nosso jogo, eles são corrompidos e enfrentados como assombrados. (C) arrisca acusação de intolerância religiosa; (B) perde uma palavra bonita e de uso amplo sem saber se é preciso.

**3. [proposta de mudança na bíblia] Trocar o vocabulário de "desbravar" na Travessia e na Bruma.**
- **(A) A Bruma engoliu cidades e também as terras dos encantados; a Travessia "reencontra e cura" uma terra que tem donos, em vez de "desbravar". As recompensas falam de alianças e de terras devolvidas, não de posse. ← recomendado**
- (B) Manter "desbravar" e cuidar só da arte.
- *Por quê:* a bíblia proíbe os bandeirantes como heróis, mas a §1 diz que a Bruma revela "uma terra nova que o servidor desbrava junto", que é a mesma narrativa de expansão sobre terra "vazia". A mudança é só de palavras e de enquadramento, e não mexe em nenhuma mecânica (a reconciliar com o módulo 10).

**4. [proposta de mudança na bíblia] Registrar "offline do cliente só de leitura" como decisão vigente.**
- **(A) Sem rede, o cliente mostra o estado e aceita rascunhos; nada que mova valor entra em fila local. ← recomendado**
- (B) A fila local de comandos com prazo de validade, como admitia o [07, §4.3](../01-pesquisa/07-tecnica-idles-online.md).
- *Por quê:* (A) fecha um vetor de abuso (comando "atrasado" que chega depois de o preço mudar), simplifica a arquitetura (Fase 4) e custa pouco ao jogador, porque o rascunho cobre o caso de uso. A reconciliar com o módulo 13.

**5. Nota (não é mudança):** "Pindorama" é palavra de origem tupi. Ela entra na lista da consultoria (seção 1.13) para confirmar que usá-la como nome do mundo não soa como apagamento dos povos que a criaram.

## 5. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Caricatura regional** | O Folheto é lido como "Nordeste de lembrancinha", e o resto do país não se vê. | Chapas de cor e encantados de todas as regiões; leitores sensíveis das cinco regiões; gravadores de mais de um estado (a xilogravura não é só nordestina). |
| **Apropriação de estilo** | A equipe imita o traço reconhecível de um gravador (vivo ou com herdeiros) sem acordo. | Encomendar, pagar e creditar; não imitar um artista específico sem contrato; contrato revisado por advogado (Lei 9.610/1998). |
| **Hachura que cansa e vira ruído** | Padrões finos de alto contraste em telas pequenas, às vezes em movimento. | Sem hachura abaixo de 48 px nem em áreas grandes da interface; modo liso; teste de leitura em celular de entrada. |
| **Arte pesada e escura** | Muito preto, pouca cor: o jogo parece triste. | Papel claro dominante; chapas de cor vivas nas regiões curadas; o preto fica no traço e na Bruma borrada. |
| **Gravadores não dão conta** | A encomenda de matrizes atrasa a Era, ou um único artista vira gargalo. | Encomenda com uma Era de antecedência, mais de um gravador por Era e o estúdio derivando o grosso dos assets. |
| **Consultoria de fachada** | O consultor é chamado depois da arte pronta, só para carimbar. | Consulta antes do conceito de cada encantado; ficha de sensibilidade com parecer e veto sobre a representação. |
| **O termo "encantados" ofende** | Praticantes de religiões afro-brasileiras leem o "encantado corrompido" como ataque à sua fé. | Proposta 2 (seção 4); nenhuma entidade cultuada como inimigo. |
| **O Baú parece cassino mesmo transparente** | Chances publicadas não mudam a percepção nem a classificação jurídica de "pagar por sorte com prêmio de valor". | Sem roleta nem "quase", um por vez, teto de gasto e de Baús, conteúdo só cosmético; **validar com advogado** (risco assumido pelo Gabriel, [PROGRESSO](../PROGRESSO.md)). |
| **R$ e Alvará confundem** | O jogador não sabe quanto custa em dinheiro um cosmético de "1 Alvará". | R$ sempre ao lado; preço do Alvará fixo em R$ na loja; teste com usuários. A divisibilidade do Alvará fica com o módulo 11. |
| **Dois toques viram tela lotada** | Para caber tudo a dois toques, a tela inicial vira um painel de avião. | No máximo cinco cartões de agenda; teste de usabilidade com a regra dos cinco segundos. |
| **Folheto da volta longo demais** | Quem volta seis vezes por dia não quer abrir um presente a cada vez. | "Mostrar tudo" na hora; ausência curta (menos de 1 h) vira um resumo de uma linha; o jogo lembra a preferência. |
| **Avisos viram spam, ou ninguém instala no iPhone** | Muitos tipos de aviso, ou o push nunca chega porque o PWA não foi instalado. | Teto diário e horário de silêncio; medir opt-in e instalação desde o alfa; avaliar app empacotado só se os dados pedirem ([07](../01-pesquisa/07-tecnica-idles-online.md)). |
| **Offline só de leitura frustra** | Sem rede no metrô, o jogador não consegue vender. | Rascunho de venda e de fila, enviado em um toque quando a rede volta. |
| **Acessibilidade fica para depois** | Pressão de prazo empurra contraste, leitor de tela e alvos para "a próxima versão". | Acessibilidade na definição de pronto; teste automático em cada tela; grupo pago de jogadores com deficiência no alfa. |
| **Fontes não se comportam** | Londrina informal demais em títulos longos; a Gabarito sem algarismos tabulares; falta de algum glifo. | Londrina só em títulos curtos; teste de glifos (ã, õ, ç, ê); Atkinson Hyperlegible Next como reserva para números. |
| **O texto em inglês quebra o layout** | Rótulos mudam de tamanho entre PT-BR e EN. | Desenhar para +30% de comprimento [H]; nenhum texto dentro de imagem. |
| **O modo canto de tela vira ferramenta de bot** | Uma janela sempre aberta, que atualiza sozinha, é ótima para automação. | Só leitura, atualização espaçada e limites por sessão (módulo 13). |
| **O gancho de vídeo não funciona** | O "mapa entintado" não chama atenção num feed real. | Testar capturas verticais com criadores antes do lançamento; medir o que eles escolhem gravar. |
| **A trilha trava os criadores** | Bloqueio de direitos em vídeos com a música do jogo. | Contrato com os músicos que libera o uso por criadores de conteúdo. |
| **O cordel não atravessa o idioma** | O verso em inglês perde rima e métrica e soa estranho. | Tradutor literário e nota curta sobre a forma; em inglês, o registro narrativo pode substituir o verso. |

## Fontes

Links acessados em novembro de 2026. "Via busca" indica leitura pelo resumo do buscador.

**Cordel, xilogravura e Armorial**
1. [Meneses, "O registro da literatura de cordel…", *Revista do IEB*, 2019](https://scielo.br/pdf/rieb/n72/2316-901X-rieb-72-225.pdf) — acadêmico — via busca.
2. [Literatura de cordel reconhecida como patrimônio cultural do país](https://wp.ufpel.edu.br/empauta/literatura-de-cordel-reconhecida-como-patrimonio-cultural-do-pais/) — UFPel — 2018.
3. [Morre o xilogravurista J. Borges, aos 88 anos](https://diariodonordeste.verdesmares.com.br/verso/morre-o-xilogravurista-j-borges-aos-88-anos-1.3538899) — Diário do Nordeste — jul/2024.
4. [Mestre da cultura nordestina, J. Borges deixa legado na arte popular](https://mais.opovo.com.br/jornal/vidaearte/2024/07/27/mestre-da-cultura-nordestina-j-borges-deixa-legado-na-arte-popular.html) — O POVO — 27/7/2024.
5. [Festival Mestre J. Borges abre inscrições para concurso](https://portaldeprefeitura.com.br/pernambuco/festival-mestre-j-borges-abre-inscricoes-para-concurso-gratuito/635285/) — Portal de Prefeitura — out/2026.
6. [Celebração armorial e a renovação das artes](https://www.correiobraziliense.com.br/diversao-e-arte/2023/09/5127418-celebracao-armorial-e-a-renovacao-das-artes.html) — Correio Braziliense — set/2023 — via busca.
7. [Catálogo da exposição Movimento Armorial 50 anos](https://ccbb.com.br/wp-content/uploads/2022/04/catalogo-rj.pdf) — CCBB — 2022 — via busca.
8. [Xilogravura do Cariri resiste e se reinventa a cada dia](https://diariodonordeste.verdesmares.com.br/regiao/xilogravura-do-cariri-resiste-e-se-reinventa-a-cada-dia-1.1895607) — Diário do Nordeste — via busca.
9. [Urca e UFCA avançam no debate para a Escola Brasileira de Literatura de Cordel e Xilogravura](https://www.brasildefato.com.br/2026/02/11/urca-e-ufca-avancam-no-debate-para-implantacao-da-escola-brasileira-de-literatura-de-cordel-e-xilogravura/) — Brasil de Fato — 11/2/2026 — via busca.

**Azulejo, ladrilho e Volpi**
10. [Correio Braziliense, edição de 24/1/2025 (painéis de Athos Bulcão)](https://edicao.correiobraziliense.com.br/correiobraziliense/2025/01/24/141644/pdf/A17-CID-2401-DIG.pdf) — imprensa — via busca.
11. [Frederico Morais, "Azulejaria contemporânea no Brasil"](https://www.fundathos.org.br/pdf/Azulejaria%20contemporanea%20no%20Brasil%20-%20Frederico%20Moraris%20port.pdf) — Fundação Athos Bulcão — via busca.
12. [Athos Bulcão, 32 anos de preservação da sua memória](https://www.correiodamanha.com.br/especiais/2024/12/173687-athos-bulcao-32-anos-de-preservacao-da-sua-memoria.html) — Correio da Manhã — dez/2024.
13. [Historic Centre of São Luís (nº 821)](https://whc.unesco.org/en/list/821) — UNESCO — inscrição de 1997.
14. [São Luís: azulejos e casarões contam a história de um patrimônio mundial](https://agenciagov.ebc.com.br/noticias/202609/sao-luis-azulejos-e-casaroes-contam-a-historia-de-um-patrimonio-mundial) — Agência Gov — set/2026 — via busca.
15. [Alfredo Volpi](https://en.wikipedia.org/wiki/Alfredo_Volpi) — Wikipedia — via busca.
16. [Fabio San Juan, estudo sobre Volpi](https://www.ifch.unicamp.br/eha/atas/2015/Fabio%20San%20Juan.pdf) — Unicamp — 2015 — via busca.

**Aquarela e chita**
17. [A importância de Mrs. Margaret para a botânica na Amazônia](https://portalamazonia.com/arte/a-importancia-de-mrs-margaret-para-a-botanica-na-amazonia/) — Portal Amazônia — via busca.
18. [Aquarelas científicas](https://agencia.fapesp.br/aquarelas-cientificas/2889) — Agência FAPESP — via busca.
19. [Artigo sobre a estampa chita](https://revistas.usp.br/signosdoconsumo/article/download/44364/47985/52874) — *Signos do Consumo*, USP — via busca.
20. [TCC sobre a história do tecido chita](https://ric.cps.sp.gov.br/handle/123456789/12209?mode=full) — Fatec/CPS — 2022 — via busca.

**Jogos de referência**
21. [Pentiment anniversary interview: Josh Sawyer](https://toucharcade.com/2023/10/18/pentiment-anniversary-interview-josh-sawyer-on-his-influences-going-from-playing-dd-to-designing-a-potential-pillars-of-eternity-3-rpg-mechanics-and-more/) — TouchArcade — 18/10/2023 — via busca.
22. [The history behind Pentiment and the creation of its artistic style](https://www.gamereactor.eu/the-history-behind-pentiment-and-the-creation-of-its-artistic-style-1191273/) — Gamereactor — via busca.
23. [The gothic sensibilities of Darkest Dungeon](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/) — GameSpot — via busca.
24. [Darkest Dungeon](https://wikipedia.com/wiki/Darkest_Dungeon) — Wikipedia — via busca.
25. [Never Alone (video game)](https://en.wikipedia.org/wiki/Never_Alone_(video_game)) — Wikipedia; [Making Never Alone](https://www.culturalsurvival.org/publications/cultural-survival-quarterly/making-never-alone-kisima-innitchuna-celebrating-people) — Cultural Survival — via busca.
26. [Meneses, "Knowledge in play: the creation of the video game Huni Kuin: Yube Baitana"](https://www.revistas.usp.br/gis/article/view/129176) — *GIS*, USP — 2017; [Cultura de povo indígena da Amazônia vira tema de video game](https://agenciabrasil.ebc.com.br/cultura/noticia/2016-02/cultura-de-povo-indigena-da-amazonia-vira-tema-de-video-game) — Agência Brasil — fev/2016.
27. [5 motivos para jogar Árida: Backland's Awakening no Xbox](https://news.xbox.com/pt-br/2024/11/22/5-motivos-para-jogar-o-game-brasileiro-arida-backlands-awakening-no-xbox/) — Xbox Wire — 22/11/2024 — via busca.

**Sensibilidade cultural**
28. [Ferretti, *Encantaria de Barba Soeira*](https://www.gpmina.ufma.br/wp-content/uploads/2017/03/Encantaria-de-Barba-Soeira.pdf) — UFMA — via busca; [Boletim 67 da Comissão Maranhense de Folclore](https://cmfolclore.ufma.br/wp-content/uploads/2021/11/BOLETIM-67.pdf) — via busca.
29. [Patrimônio Imaterial — Iphan no Amapá](https://www.gov.br/iphan/pt-br/superintendencias/amapa/patrimonio-imaterial) — oficial — via busca; [Gallois, "Donos, detentores e usuários da arte gráfica kusiwa"](https://revistas.usp.br/ra/article/view/46956) — *Revista de Antropologia*, USP.
30. [Dia do Saci: negação do personagem revela cultura racista](https://www.diariodepernambuco.com.br/noticia/brasil/2023/10/dia-do-saci-negacao-do-personagem-revela-cultura-racista.html) — Diário de Pernambuco/Agência Brasil — out/2023 — via busca.
31. [Cidade Invisível: ativistas indígenas criticam representatividade](https://olhardigital.com.br/2021/02/19/cinema-e-streaming/cidade-invisivel-ativistas-indigenas-criticam-representatividade-serie/) — Olhar Digital — 19/2/2021; [Cidade Invisível aumenta representatividade indígena na 2ª temporada](https://www.metropoles.com/entretenimento/televisao/cidade-invisivel-aumenta-representatividade-indigena-na-2a-temporada) — Metrópoles — via busca.

**Tipografia**
32. [Londrina Typeface](https://github.com/marcelommp/Londrina-Typeface) — GitHub do designer; [Londrina Solid](https://fonts.google.com/specimen/Londrina+Solid/about) — Google Fonts; [Londrina Solid](https://www.figma.com/fonts/londrina-solid/) — Figma — via busca.
33. [Gabarito](https://github.com/naipefoundry/gabarito) — GitHub da Naipe Foundry.
34. [Atkinson Hyperlegible](https://en.wikipedia.org/wiki/Atkinson_Hyperlegible) — Wikipedia; [atkinson-hyperlegible](https://github.com/googlefonts/atkinson-hyperlegible) — GitHub do Google Fonts — via busca.
35. [Perguntas frequentes do Google Fonts](https://developers.google.com/fonts/faq?hl=pt-br) — oficial — via busca; [SIL Open Font License](https://openfontlicense.org/) — oficial.

**Som e música**
36. [Book gathers scores by Antonio Madureira](https://revistapesquisa.fapesp.br/en/book-gathers-scores-by-antonio-madureira/) — Revista Pesquisa FAPESP — via busca.
37. [Banda de Pífanos de Caruaru](https://cms.latingrammy.com/artists/banda-de-pifanos-de-caruaru/) — Latin Grammy — oficial.
38. [Artigo sobre bandas de pífanos](https://revistas.ufg.br/musica/article/download/61898/37548/303923) — *Música Hodie*, UFG — via busca.

**Acessibilidade, plataformas e normas**
39. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) — W3C — recomendação; [Understanding SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — W3C.
40. [Game Accessibility Guidelines — basic](https://gameaccessibilityguidelines.com/basic/) — guia da indústria.
41. [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — MDN.
42. [Why is color blindness so much more common in men than in women?](https://www.livescience.com/health/genetics/why-is-color-blindness-so-much-more-common-in-men-than-in-women) — Live Science; [Why men are more likely to be colorblind](https://www.henryford.com/blog/2024/10/why-men-are-more-likely-to-be-colorblind) — Henry Ford Health — out/2024 — via busca.
43. [Okabe e Ito, *Color Universal Design*](https://jfly.uni-koeln.de/color/) — via busca.
44. [Lei 13.146/2015 (LBI)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm), [Lei 8.078/1990 (CDC)](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm) e [Lei 9.610/1998 (direitos autorais)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm) — Planalto — oficial.
45. [App Review Guidelines, 3.1.1](https://developer.apple.com/app-store/review/guidelines/) — Apple — oficial.
46. [Your guide to YouTube Shorts ads](https://support.google.com/google-ads/answer/16041697?hl=en) — Google Ads Help — oficial — via busca.

**Da nossa pesquisa (Fase 1):** [00-sintese](../01-pesquisa/00-sintese.md), [02a](../01-pesquisa/02a-teoria-design-idle.md), [06](../01-pesquisa/06-monetizacao-retencao.md), [07](../01-pesquisa/07-tecnica-idles-online.md), [08](../01-pesquisa/08-mercado-posicionamento.md), [A06](../01-pesquisa/fichas/A06-antimatter-dimensions.md), [A10](../01-pesquisa/fichas/A10-nova-onda-idle-2023-2026.md), [B01](../01-pesquisa/fichas/B01-melvor-idle.md), [C02](../01-pesquisa/fichas/C02-idle-clans.md), [E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md), [F01](../01-pesquisa/fichas/F01-eve-online.md).
