# Antimatter Dimensions

| Campo | Valor |
|---|---|
| Grupo | A — Clássicos do incremental / idle (single-player, hardcore) |
| Desenvolvedora / publicadora | Hevipelle (dev principal, baseado na Finlândia segundo o Grokipedia, fonte fraca) + equipe (Omsi, Razenpok, Spectralflame, WaitingIdly); publicadores no Steam: Hevipelle e Makopaz [F] ([Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/)) |
| Lançamento | Web em 2016 (03/mai/2016 segundo o Grokipedia, fonte fraca); Reality Update + Steam em 17/dez/2022 [F] ([Steam News](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0)) |
| Plataformas | Navegador, Windows e macOS (Steam), Android e iOS (a versão mobile recebeu Reality; ver seção 8) |
| Modelo de negócio | F2P com "Shop" (compras no app opcionais, ver lacunas) [F] ([Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/)) |
| Status em 2026 | Estável: "Muito Positivo", jogo com fim definido (derrotar Pelle) |

> **Cartão-resumo:** Antimatter Dimensions (AD) é a aula de como empilhar camadas de prestígio: Dimension Boost, Galaxy, Infinity, Eternity, Reality e Celestials, cada uma reinventando o jogo e liberando automação da camada anterior. Tem fim (derrotar o último Celestial), código aberto sob MIT e um modelo de monetização discreto. Deu certo porque cada camada "ensina" uma regra nova só depois que o jogador domina a anterior, e porque automatizar o passado é a recompensa central. Os pontos fracos são o grind e os time walls, a interface seca e a necessidade de guias. **Lição nº 1:** o prestígio escalonado funciona quando cada camada nova muda o que o jogador faz, e a automação é o prêmio de cada camada.

## 1. Loop central

- O jogador compra "Dimensions" que geram antimatéria e Dimensions inferiores; usa Dimension Boosts, Galaxies e outros resets para acelerar. O texto da loja resume: "várias camadas de desbloqueios, prestígio, desafios e automação" [F] ([Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/)).
- Há linguagem de script própria para automação (Automator), destacada pela imprensa [F] ([PC Gamer, 17/dez/2022](https://pcgamer.com/automate-the-collapse-of-reality-in-clicker-antimatter-dimensions-now-on-steam)).

## 2. Camadas de progressão e prestígio

- **Sequência de camadas** (a wiki agrupa: Início, Infinity, Eternity, Reality, Celestials) [F] ([wiki AD — Celestials](https://antimatterdimensions.wiki.gg/wiki/Celestials)).
  - O Reality Update de dez/2022 acrescentou a camada Reality, Glyphs, Reality Upgrades, Perks, Automator, Black Hole e Celestials, após ~4,5 anos de desenvolvimento, além de UI "Modern" e cloud save com conta Google [F] ([post de lançamento no Steam, 17/dez/2022](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0)).
- **Celestials:** 7, sendo o último, Pelle, um reality que "Doom" o jogo; derrotá-lo encerra o jogo. Teresa abre ao comprar todos os Reality Upgrades. Cada Celestial é um Reality modificado com regra própria (limites de Glyphs, quebra-cabeças, matéria escura etc.) [F] ([wiki AD — Celestials](https://antimatterdimensions.wiki.gg/wiki/Celestials)).
- **Desafios** em cada camada: Normal Challenges, Infinity Challenges, Eternity Challenges (EC) e os Celestials; os patches de 2023 ajustaram balanceamentos específicos (EC4, EC11) [F] ([patch notes no Steam, 28/jan/2023](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=700)).
- [H] **Padrão de design:** cada camada novo (1) tira do jogador o poder de comprar "do jeito antigo", (2) dá uma mecânica nova de decisão, (3) libera automatizar a camada anterior. O jogador nunca faz o mesmo trabalho manual duas vezes; faz trabalho novo e ganha o antigo de graça.
- Para a teoria geral dessa estrutura, ver [02a-teoria-design-idle.md](../02a-teoria-design-idle.md).

## 3. Progresso offline

- AD calcula ganhos offline ao voltar (padrão do gênero). Detalhes de limite e fórmula: não encontrado nas fontes acessadas (a wiki respondeu 402). Reviews dizem que o jogo roda leve em segundo plano, mas há relatos de uso alto de recursos e problemas de save [C] ([VaporLens, resumo automatizado](https://vaporlens.app/app/1399720/antimatter_dimensions.md)).
- Uma review positiva de 734 h diz que o jogo "funciona ativo ou parado" [C] ([positivas do Steam, out–nov/2026](https://steamcommunity.com/app/1399720/positivereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** crescimento exponencial imediato e o primeiro Infinity.
- **D7–D30:** Eternity, Time Studies, desafios; cada camada "reabre" o jogo.
- **Meses:** Reality, Glyphs (com RNG), Celestials. Nas positivas recentes há jogadores de 200 h a 3.209 h; uma review brinca "você está pronto para gastar dois meses?" [C] ([positivas](https://steamcommunity.com/app/1399720/positivereviews/?browsefilter=mostrecent&filterLanguage=all)).
- Há um fim: o jogo tem final "bonito e satisfatório" segundo reviewers [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md)). [H] Ter fim muda a retenção: o produto vira "experiência de 100–300 h", não "serviço infinito".

## 5. Jogador ativo vs. jogador ausente

- Ativo: planeja resets e otimiza a rota. Ausente: confia na automação e na espera. [H] A automação é justamente o modo de o jogo transformar o jogador ativo em ausente ao longo do tempo (a camada seguinte exige atenção até ser automatizada).
- Time walls: períodos em que só se espera, citados como problema de ritmo [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md)).

## 6. Economia e moedas

- Cada camada tem moeda própria (Infinity Points, Eternity Points, Reality Machines, Relic Shards etc.) [F] (nomes citados nos posts e na wiki acima).
- Sem mercado entre jogadores.
- [H] Moedas por camada separam as economias: nada do passado vale na camada nova, evitando que o fim do jogo apague o começo.

## 7. Social

- Comunidade em Discord e Reddit, guias de fã (ex.: guia de BubbaCow) e wikis mantidas por fãs; reviews dizem que os guias são quase obrigatórios [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md)).
- **Código aberto:** repositório IvarK/AntimatterDimensionsSourceCode, licença MIT, 416 estrelas e 293 forks, 12.166 commits (nov/2026) [F] ([GitHub](https://github.com/IvarK/AntimatterDimensionsSourceCode)). Os créditos incluem testadores de Android [F] ([Steam News, 17/dez/2024](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0)).

## 8. Monetização

- A loja do Steam lista "In-App Purchases" e diz que "uma loja foi adicionada"; o post de dez/2022 diz que a aba Shop ficou "disponível para todos" [F] ([Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/); [post](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0)).
- Reviews agregadas: sem microtransações obrigatórias, tudo opcional, "realmente free-to-play" [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md), resumo automatizado).
- **O que a Shop vende e a que preço: não encontrado** (wiki fandom 402, wiki.gg 404, GitHub raw 404). Minha lembrança de que a loja vende itens que aceleram ou duplicam ganhos e que é "não pay-to-win" fica como [NV]: tentei wiki e código, sem sucesso.
- **Lançamento mobile:** Reality "foi lançada no mobile" e o post de dez/2024 nivela o Steam com web e mobile [F] ([Steam News, 17/dez/2024](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0)). Data de lançamento nas lojas, downloads e preços: não encontrado (Google Play não carregou).

## 9. Números disponíveis (com fonte)

- Steam: 91% positivas de 3.451 reviews em inglês; últimos 30 dias, 95% de 64 (consulta em nov/2026) [F] ([Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/)). Um resultado de busca indexado antes registrava 92% de 4.261 (todos os idiomas, data desconhecida).
- 100 conquistas no Steam; 29 curadores [F] (mesma página).
- Receita, DAU, downloads mobile: não encontrado.

## 10. Por que deu certo

- [H] Prestígio escalonado com automação como prêmio; mecânicas "profundas" que dão sensação de descobrir um sistema; fim definido; comunidade colaborativa; código aberto reduz atrito de contribuição.
- Reviews citam "mecânicas variadas, progressão profunda, automação" [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md)).

## 11. Do que os jogadores mais reclamam

- Das 10 negativas mais recentes (set–nov/2026) [C] ([Steam](https://steamcommunity.com/app/1399720/negativereviews/?browsefilter=mostrecent&filterLanguage=all)):
  - 3 sobre progressão/grind e falta de metas visíveis (uma pede ver mecânicas e metas bloqueadas desde o início; outra diz "números absurdos cedo, sem objetivo");
  - 2 sobre RNG de runas/Glyphs com 541 h e 1.063 h de jogo;
  - 1 sobre "só desafios depois de algumas horas" (1.058 h);
  - 1 sobre texto minúsculo em 4K sem escala de UI;
  - 1 sobre perda de progresso;
  - 1 sobre "conteúdo de IA não divulgado";
  - 2 vazias ou vagas.
- **Polêmica de IA:** **não confirmei** que exista uma controvérsia ampla. Encontrei apenas (a) 1 review de 8,2 h (set/2026) que diz haver conteúdo gerado por IA não divulgado [C, fraco] ([Steam](https://steamcommunity.com/app/1399720/negativereviews/?browsefilter=mostrecent&filterLanguage=all)), e (b) segundo a wiki, o ticker de notícias do jogo tem uma categoria "AI Generated", feita com GPT-2 segundo o código-fonte, desativada por padrão (0%) [C] ([wiki AD — News, via busca; WebFetch deu 402](https://antimatter-dimensions.fandom.com/wiki/News)). Ou seja, há texto de IA antiga e opcional, mas não encontrei reportagem, thread ou comunicado do dev sobre polêmica "recente". Se o caso for outro (arte, música), não localizei a fonte.
- Segundo o agregador, também se citam UI seca, falta de idiomas e curva de aprendizado que exige guia [C] ([VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md)).

## 12. Mecânicas-chave: o porquê

**Camadas sucessivas de prestígio (Infinity → Eternity → Reality)** — Problema: o reset único fica sem graça · Emoção: "o jogo mudou de novo" · Comportamento: perseguir a próxima camada · Efeito colateral: o novato precisa de guia para entender a cadeia.

**Automação como recompensa (Autobuyers, Automator)** — Problema: o trabalho manual repetido cansa · Emoção: poder, "o passado é meu escravo" · Comportamento: escrever scripts e otimizar · Efeito colateral: o jogo vira programação; para alguns é tédio ("scripting não torna o jogo mais envolvente", crítica da MobyGames citada pela busca).

**Desafios com restrições (Normal, Infinity, Eternity)** — Problema: variar o jogo sem conteúdo novo · Emoção: maestria · Comportamento: reaprender o jogo · Efeito colateral: sensação de "só desafios depois de horas".

**Celestials como Realities modificados e fim definido** — Problema: o fim de jogo de idle costuma ser vazio · Emoção: clímax narrativo · Comportamento: perseguir o fim · Efeito colateral: depois do fim, retenção encerra.

**Glyphs com RNG** — Problema: dar profundidade de build · Emoção: caça ao item · Comportamento: farmar · Efeito colateral: queixas de RNG ruim após mais de 500 h.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Camadas sucessivas em que cada uma muda a *decisão*, e a automação da anterior é o prêmio. [H] Em um idle online, a automação vira "delegar para NPC/guilda".
  - Um final definido para a "campanha" e serviço contínuo por fora (temporadas).
  - Código aberto e guias de fãs aumentam longevidade (mas nosso jogo precisa de servidor autoritativo, o que limita código aberto no cliente).
  - Mostrar metas bloqueadas na UI para reduzir a confusão de "o que vem depois".
- **Evitar:**
  - Time walls sem alternativa de ação.
  - RNG de itens sem proteção de azar (pity) em centenas de horas.
  - Interface sem escala de texto/acessibilidade.
  - Texto de IA sem rótulo claro: mesmo opcional, gera desconfiança (confirmar com política de transparência desde o início).

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Antimatter Dimensions | Web+PC+Mobile | F2P | Parcial | 3+ | Nenhum | Não | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não | Estável |

## Fontes

1. [Antimatter Dimensions — Steam](https://store.steampowered.com/app/1399720/Antimatter_Dimensions/) — oficial/loja — nov/2026.
2. [Steam News API](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1399720&count=30&maxlength=0) — oficial (posts do dev) — dez/2022 a dez/2024.
3. [Negativas recentes](https://steamcommunity.com/app/1399720/negativereviews/?browsefilter=mostrecent&filterLanguage=all) e [positivas recentes](https://steamcommunity.com/app/1399720/positivereviews/?browsefilter=mostrecent&filterLanguage=all) — comunidade — set–nov/2026.
4. [Wiki AD — Celestials](https://antimatterdimensions.wiki.gg/wiki/Celestials) — wiki.
5. [GitHub — código-fonte](https://github.com/IvarK/AntimatterDimensionsSourceCode) — oficial (MIT).
6. [PC Gamer — 17/dez/2022](https://pcgamer.com/automate-the-collapse-of-reality-in-clicker-antimatter-dimensions-now-on-steam) — imprensa (via busca).
7. [VaporLens](https://vaporlens.app/app/1399720/antimatter_dimensions.md) — agregador automatizado.
8. [Wiki AD — News](https://antimatter-dimensions.fandom.com/wiki/News) — wiki (via busca).

**Lacunas:** itens e preços da Shop, datas e números dos apps mobile, fórmula do offline, polêmica de IA (apenas 1 review e o ticker GPT-2 opcional), receita e jogadores.
