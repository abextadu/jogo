# Kittens Game

| Campo | Valor |
|---|---|
| Grupo | A — Clássicos do incremental / idle (single-player, hardcore) |
| Desenvolvedora / publicadora | bloodrizer (criador; estúdio Nuclear Unicorn no Steam) / Nuclear Unicorn; app iOS publicado por Dmitrii Popov [F] ([Steam](https://store.steampowered.com/app/1097410); [App Store](https://apps.apple.com/app/id1198099725)) |
| Lançamento | Navegador em 2014 (segundo busca; não confirmei em fonte primária); iOS 1.0 em 10/mar/2017 (histórico de versões); Steam Early Access em 10/fev/2026 [F] ([Steam](https://store.steampowered.com/app/1097410); [App Store](https://apps.apple.com/app/id1198099725)) |
| Plataformas | Navegador (grátis), Steam (Windows/macOS/Linux), iOS, Android [F] ([kittensgame.com](https://kittensgame.com/web/)) |
| Modelo de negócio | Web grátis; apps e Steam pagos uma vez, sem anúncios nem microtransações (iOS US$ 2,99; Steam R$ 26,49 em nov/2026) [F] ([App Store](https://apps.apple.com/app/id1198099725); [Steam](https://store.steampowered.com/app/1097410)) |
| Status em 2026 | Estável, com versão Steam em acesso antecipado e promessa de versão 1.0 "em algum momento de 2026" |

> **Cartão-resumo:** Kittens Game é um incremental de texto sobre uma vila de gatinhos que sai da Idade da Pedra e chega ao espaço, passando por ofícios, ciência, religião e tempo. Tem mais de 50 recursos e cerca de 200 tecnologias e melhorias, e dois sistemas de prestígio. Deu certo por ser um jogo-simulação de "civilização" com profundidade real, dado grátis no navegador e depois vendido barato como app e na Steam. Seu ritmo é lento de propósito; o preço dessa escolha é a opacidade, o grind e uma UI de texto densa. **Lição nº 1:** o jogador aceita ritmo lento quando cada hora traz uma nova cadeia de recursos a entender e a economia de recursos é legível.

## 1. Loop central

- O jogador gerencia a vila: recursos, construções, pesquisa, empregos e felicidade da população. O objetivo declarado é chegar ao espaço, num jogo "projetado para semi-idle de longo prazo" [F] ([Steam](https://store.steampowered.com/app/1097410)).
- Conteúdo em Early Access (fev/2026): mais de 30 construções, 50+ recursos, ~200 tecnologias/melhorias, religião, metafísica, sistema de tempo, dois sistemas de prestígio, desafios, conquistas e exploração espacial [F] ([Steam](https://store.steampowered.com/app/1097410)).
- Estações (primavera, verão etc.) e clima alteram a produção: [NV] conhecimento prévio, não confirmei em fonte (wiki do jogo retornou 404 e TV Tropes 403).
- [H] A cadeia de recursos (madeira → vigas → pergaminhos → ciência → ...) é o motor: cada recurso novo introduz uma cadeia de produção que força o jogador a repensar a base.

## 2. Camadas de progressão e prestígio

- **Dois sistemas de prestígio** [F] ([Steam](https://store.steampowered.com/app/1097410)). Pelas fontes secundárias:
  - **Reset** concede *paragon* conforme o número de gatinhos; conselhos de comunidade recomendam maximizar a população antes (algo como 130+ gatinhos e 60+ paragon para o primeiro reset) [C] ([comentário em r/kittensgame, 31/mai/2023, via busca](https://red.ks32.dev/r/kittensgame/comments/13wmaea/progress_questions/jmc97wm/?context=3)).
  - **Karma** acumula entre resets e há desafios (ex.: Anarchy) que dão bônus de karma; bônus de adoração e paragon têm retornos decrescentes [C] ([TV Tropes, via busca; página bloqueada no WebFetch](https://www.tvtropes.org/pmwiki/pmwiki.php/VideoGame/KittensGame)).
- **Religião, metafísica e tempo** entram como camadas de fim de meio de jogo [F] ([Steam](https://store.steampowered.com/app/1097410)). Regras exatas e ordem de desbloqueio: não encontrado em fonte confiável.
- **Plano para v1.0:** quality-of-life, mais conquistas, sistema de biomas e expedições, exploração espacial melhorada [F] ([Steam](https://store.steampowered.com/app/1097410)).
- [H] O jogo coloca o prestígio *tarde* e como decisão: o jogador precisa preparar o reset (população, religião) em vez de apenas apertar um botão.

## 3. Progresso offline

- O jogo foi desenhado para ficar aberto; o progresso offline existe na forma de "tempo acumulado" (telegramas de tempo), mas detalhes não foram confirmados [NV]. Uma review de 146 h chama de "clássico de Android" e uma de 264 h diz que a maioria das horas foi em mobile anos atrás [C] ([positivas do Steam, set–out/2026](https://steamcommunity.com/app/1097410/positivereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1–D7:** cadeias de recursos e as primeiras tecnologias; "progresso sempre disponível", elogia uma review [C] ([positivas](https://steamcommunity.com/app/1097410/positivereviews/?browsefilter=mostrecent&filterLanguage=all)).
- **D30+:** religião, tempo, resets, espaço. Nas 10 positivas mais recentes, 8 têm mais de 140 h e 4 passam de 450 h (a de 3.298 h é a maior). Um jogador de 453 h diz ter jogado milhares de horas na versão web [C] (mesma página).
- Não encontrei dados D1/D7/D30.

## 5. Jogador ativo vs. jogador ausente

- O ativo vira o fluxo de caixa de curto prazo (cliques para "recolher catnip", ações de ofício); o ausente espera os recursos encherem. [H] A mecânica de armazenar recursos limitados por prédios cria "tetos" que forçam o jogador a voltar.
- **Automação por script:** existe o *Kitten Scientists*, um userscript de automação (licença MIT, 59 estrelas, 26 forks), instalado via Tampermonkey ou bookmarklet; sua página não diz se é permitido ou "trapaça" [F] ([GitHub — kitten-science/kitten-scientists](https://github.com/kitten-science/kitten-scientists)). [H] Seu sucesso mostra o mesmo padrão do caso AutoTrimps: o jogo tem tarefas repetitivas que o jogador quer delegar; quando o jogo não oferece automação, a comunidade a cria (ver [A08](A08-trimps.md)).

## 6. Economia e moedas

- Só recursos de jogo (sem moedas premium). Não há mercado entre jogadores. [H] A "troca" é com os gatos-comerciantes (NPCs) e é o único dreno parecido com mercado.

## 7. Social

- Sem multiplayer. Discord, wiki e portal de tradução (Crowdin) ligados pela página oficial [F] ([kittensgame.com](https://kittensgame.com/web/)). A tradução comunitária foi aproveitada: o Steam lista 19 idiomas [F] ([Steam](https://store.steampowered.com/app/1097410)).
- **Código aberto:** o repositório oficial do jogo (nuclear-unicorn/kittensgame) tem um fork "Kitten Science" com 7.591 commits e o README diz que o código deve suportar "cerca de 20.000 dispositivos Android" (por isso "No ES6, please") [F] ([GitHub — kitten-science/kittensgame](https://github.com/kitten-science/kittensgame)). Licença não identificada na página (há um license.txt); o repositório original deu 404 no WebFetch e um repositório antigo está no Bitbucket (bloodrizer/kitten-game) [C] (via busca). Trate "código aberto" como parcialmente confirmado.

## 8. Monetização

- Premium único: iOS a US$ 2,99, "sem anúncios nem microtransações" [F] ([App Store](https://apps.apple.com/app/id1198099725)); Steam R$ 26,49, e o dev diz não haver planos de mudar o preço após o acesso antecipado [F] ([Steam](https://store.steampowered.com/app/1097410)).
- Web grátis continua disponível [F] ([kittensgame.com](https://kittensgame.com/web/)). Uma review de 31 h reclama que a versão Steam parece um "wrapper" da web pior que a grátis [C] ([Steam, negativas](https://steamcommunity.com/app/1097410/negativereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 9. Números disponíveis (com fonte)

- Steam: 94% positivas de 78 reviews (nov/2026) [F] ([Steam](https://store.steampowered.com/app/1097410)).
- App Store: nota 4,5, 325 avaliações; versão 1.5.8 [F] ([App Store](https://apps.apple.com/app/id1198099725)).
- Downloads, receita, DAU: não encontrado.

## 10. Por que deu certo

- [H] Profundidade de simulação com texto simples, preço baixo, versão grátis como porta de entrada e confiança construída por uma década. O jogo "se paga" em reputação: reviews com 1.500 a 3.300 h [C] ([positivas](https://steamcommunity.com/app/1097410/positivereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 11. Do que os jogadores mais reclamam

Quatro negativas no total (consulta nov/2026) [C] ([Steam](https://steamcommunity.com/app/1097410/negativereviews/?browsefilter=mostrecent&filterLanguage=all)):

- 1 de 1.688 h: grindy, obtuso, mal explicado, pouco conteúdo novo depois de mil horas;
- 1 de 42 h: UI que não se adapta à janela, tooltips cobrem botões;
- 1 de 508 h: prefere Evolve Idle em diversão e progressão;
- 1 de 31 h: Steam é wrapper da web.
- O número de negativas é pequeno (4 de 78 no total), então o padrão é indicativo: opacidade/grind e UI, não monetização.

## 12. Mecânicas-chave: o porquê

**Cadeias de recursos e tetos de armazenamento** — Problema: dar ritmo sem eventos · Emoção: planejamento ("preciso de mais armazém") · Comportamento: voltar para gastar · Efeito colateral: gerenciamento tedioso, motivo do script de automação.

**Reset com paragon por população** — Problema: o reset ser "sem pensamento" · Emoção: preparação · Comportamento: crescer antes de resetar · Efeito colateral: o primeiro reset é opaco.

**Religião/metafísica/tempo como camadas tardias** — Problema: fim de jogo raso · Emoção: descoberta · Comportamento: investir no longo prazo · Efeito colateral: retornos decrescentes.

**Desafios que alteram regras (Anarchy)** — Problema: repetição entre resets · Emoção: maestria · Comportamento: reaprender o jogo · Efeito colateral: complexidade.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Cadeia de recursos legível e tetos que dão motivo de retorno sem punição.
  - Prestígio como decisão preparada (população/religião), não como botão.
  - Versão grátis na web como porta de entrada; fãs traduzem.
  - Aceitar automação de fãs como sinal de que há tarefa repetitiva: melhor oferecê-la dentro do jogo.
- **Evitar:**
  - Primeira prestígio sem orientação (o novato descobre pela wiki).
  - UI de texto densa sem adaptação ao tamanho da janela.
  - Versão paga pior que a grátis.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Kittens Game | Web+PC+Mobile | Premium | Parcial | 2 | Nenhum | Simples | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não | Estável |

## Fontes

1. [Kittens Game — Steam](https://store.steampowered.com/app/1097410) — oficial/loja — nov/2026.
2. [Reviews negativas](https://steamcommunity.com/app/1097410/negativereviews/?browsefilter=mostrecent&filterLanguage=all) e [positivas](https://steamcommunity.com/app/1097410/positivereviews/?browsefilter=mostrecent&filterLanguage=all) — comunidade — jul–out/2026.
3. [App Store](https://apps.apple.com/app/id1198099725) — loja.
4. [kittensgame.com](https://kittensgame.com/web/) — oficial.
5. [GitHub — kitten-science/kittensgame](https://github.com/kitten-science/kittensgame) e [kitten-scientists](https://github.com/kitten-science/kitten-scientists) — código aberto (fork/ferramenta de fãs).
6. [Comentário em r/kittensgame, 2023](https://red.ks32.dev/r/kittensgame/comments/13wmaea/progress_questions/jmc97wm/?context=3) e [TV Tropes](https://www.tvtropes.org/pmwiki/pmwiki.php/VideoGame/KittensGame) — via busca.

**Lacunas:** estações e clima, regras de religião e metafísica, offline, licença e repositório oficial do jogo, downloads e receita, reclamações de Reddit (bloqueado).
