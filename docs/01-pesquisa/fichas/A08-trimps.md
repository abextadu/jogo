# Trimps

| Campo | Valor |
|---|---|
| Grupo | A — Clássicos do incremental / idle (single-player, hardcore) |
| Desenvolvedora / publicadora | Greensatellite (dev solo) / Greensatellite [F] ([Steam](https://store.steampowered.com/app/1877960/)) |
| Lançamento | Navegador por volta de 2014–2015 (não confirmei em fonte primária); Steam em 02/mai/2022 [F] ([Steam](https://store.steampowered.com/app/1877960/)) |
| Plataformas | Navegador, Windows (Steam). Não encontrei versão mobile oficial |
| Modelo de negócio | F2P com "Bones" (moeda premium) comprável para apoiar o dev; o dev diz que o jogo não é balanceado em torno dela [F] ([Steam](https://store.steampowered.com/app/1877960/)) |
| Status em 2026 | Estável com atualizações (patch 5.10.1 em nov/2026); poucas reviews recentes |

> **Cartão-resumo:** Trimps é um idle de texto em que "trimps" (criaturas) são criadas, equipadas e mandadas a zonas cada vez mais fortes; mapas, desafios, portais (prestígio) e heirlooms formam o loop. Deu certo entre os fãs de incremental pela profundidade e pelo código aberto (GPL-2.0). O fenômeno mais instrutivo é o **AutoTrimps**: scripts de comunidade que automatizam quase tudo, tornando-se parte "de fato" do jogo. Isso revela que o design, depois de certo ponto, pede decisões repetitivas que o jogador quer delegar. **Lição nº 1:** se a comunidade automatiza o seu jogo, é porque há trabalho de cálculo que o jogo devia automatizar oficialmente e premiar.

## 1. Loop central

- Descrição oficial: texto idle onde se sobrevive num planeta hostil criando, abrigando, equipando e enviando Trimps à batalha; inclui muitos desafios, conquistas, upgrades e opções de automação [F] ([Steam](https://store.steampowered.com/app/1877960/)).
- A página web mostra os elementos: zonas, mapas, criação (breeding), Bone Trader, portais, heirlooms, desafios, conquistas e Void Maps, versão 5.10.1 [F] ([trimps.github.io](https://trimps.github.io/)).
- [H] Cada zona é um teste de "o meu exército aguenta?"; mapas são o caminho de crescimento lateral (equipamento, recursos) para passar de zona.

## 2. Camadas de progressão e prestígio

- **Portal (prestígio):** reseta o progresso do mundo, mas mantém Helium, Perks e Heirlooms equipados; é possível "respec" de perks com 100% de devolução; o Portal destrava na zona 15 em versões novas (que libera "Rage") [C] ([wiki do Trimps, revisões antigas, via busca; WebFetch deu 402](https://trimps.fandom.com/wiki/Portal?oldid=7527)).
- **Universo 2 (Radon):** segundo universo com seu próprio Portal e perks; Helium e Radon não se gastam ao viajar entre universos [C] (mesma wiki, via busca).
- **Void Maps:** passam a cair depois do primeiro Portal e dão Helium/Radon e Heirlooms; **desafios** alteram regras e podem ampliar recompensa (ex.: Balance até a zona 40; Electricity até a 79) [C] (mesma wiki, via busca).
- **Heirlooms e mutações:** itens permanentes; um comentário de fev/2025 cita um spire na Z300 que combina com heirlooms "mutados" (anedótico) [C] ([comentário em r/Trimps, via busca](https://reddit.birdcat.cafe/r/Trimps/comments/1il62p2/patch_5100_is_live/mbv7me4/?context=3)).
- **Automação liberada aos poucos:** um jogador responde que o auto-fight "vem um pouco mais adiante no jogo", ou seja, o jogo libera automação por progresso [C] ([thread do Steam, 12/mar/2025](https://steamcommunity.com/app/1877960/discussions/0/599646865392180024/)). O "Auto Portal" não existe oficialmente: foi pedido como feature e a resposta foi usar AutoTrimps (mesma thread).
- [H] Padrão: prestígio permanente + camada alternativa (U2) que reabre a decisão sem apagar a primeira.

## 3. Progresso offline

- O jogo mostra "Making up lost time..." ao carregar, o que indica cálculo do tempo ausente [F] ([trimps.github.io](https://trimps.github.io/)). Regras e limites: não encontrado. Uma review em português diz que o jogo "penaliza deixar aberto": recursos geram devagar e caps baixos bloqueiam a automação [C] ([Steam, negativas, 7/out/2026](https://steamcommunity.com/app/1877960/negativereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1–D7:** zonas iniciais, mapas e primeiros upgrades.
- **Mês 1+:** o primeiro Portal, perks, heirlooms e desafios; o Universo 2 após conclusão. Reviews negativas citam 130 a 1.700 h de jogo, mostrando retenção longa mesmo entre descontentes [C] ([Steam](https://steamcommunity.com/app/1877960/negativereviews/?browsefilter=mostrecent&filterLanguage=all)).
- Dados D1/D7/D30: não encontrados.

## 5. Jogador ativo vs. jogador ausente

- Sem AutoTrimps, o ativo faz microgestão constante (mapas, equipamento, heirlooms, portal). O ausente fica preso em caps baixos. **Com AutoTrimps**, o ativo vira "configurador" de script. [H] A comunidade criou a ponte que o jogo não oferece.
- Em 2025, um jogador diz que AutoTrimps "mal funciona agora" e só o auto-fight funcionou; outro recomenda o fork SadAugust [C] ([thread](https://steamcommunity.com/app/1877960/discussions/0/599646865392180024/)).

## 6. Economia e moedas

- Moedas internas (Helium, Radon, Bones). Sem mercado entre jogadores. "Bones" é comprável, e o dev afirma que o jogo normal dá o suficiente para comprar todos os upgrades [F] ([Steam](https://store.steampowered.com/app/1877960/)).

## 7. Social

- Comunidade em Reddit, Discord e Steam. O dev não respondeu à thread de pedido de Auto Portal [F] ([thread](https://steamcommunity.com/app/1877960/discussions/0/599646865392180024/)). Existe presença do dev em r/Trimps (anúncio de "Patch 5.10.0 is live" marcado como "Dev" em fev/2025), mas o conteúdo não carregou [C] (resultado de busca).
- **Código aberto:** repositório Trimps/Trimps.github.io, licença GPL-2.0, 287 estrelas, 236 forks, 1.359 commits, 74 issues e 47 PRs abertos (nov/2026) [F] ([GitHub](https://github.com/Trimps/Trimps.github.io)).

## 8. Monetização

- F2P com IAP de Bones; os Steam diz "apoio ao desenvolvimento" e não balanceado em torno da compra [F] ([Steam](https://store.steampowered.com/app/1877960/)). Nenhuma review recente que li acusa pay-to-win [C] (10 negativas lidas, [Steam](https://steamcommunity.com/app/1877960/negativereviews/?browsefilter=mostrecent&filterLanguage=all)).

## 9. Números disponíveis (com fonte)

- Steam: 90% positivas de 1.513 reviews; últimos 30 dias, 63% de 11 (nov/2026) [F] ([Steam](https://store.steampowered.com/app/1877960/)).
- GitHub do jogo: 287 estrelas / 236 forks; AutoTrimps (fork Zek): 63 estrelas, 102 forks, 5.402 commits, GPL-3.0, "atualizado até 06/2022" [F] ([Zorn192/AutoTrimps](https://github.com/Zorn192/AutoTrimps)); fork SadAugust: 18 estrelas, 24 forks, 3.572 commits, GPL-3.0, atualizado até o patch 5.10.1 [F] ([SadAugust/AutoTrimps](https://github.com/SadAugust/AutoTrimps)). As estrelas não medem usuários; é só indicativo.
- Receita e jogadores ativos: não encontrado.

## 10. O caso AutoTrimps: o que ensina

- **O que é:** script de automação (Tampermonkey no navegador ou arquivo `mods.js` no Steam) com painel de configuração, que compra equipamento, escolhe mapas, faz portal e inclui calculadoras (farm, heirloom, auto perks, SpireTD, mutators) [F] ([Zorn192/AutoTrimps](https://github.com/Zorn192/AutoTrimps); [SadAugust/AutoTrimps](https://github.com/SadAugust/AutoTrimps)). O README avisa que não funciona bem com as configurações padrão: é uma ferramenta, não um "bot de um clique" (mesma fonte).
- **Longevidade:** vários forks (genbtc, Zorn192/Zek, SadAugust) passaram o bastão por anos; os forks têm milhares de commits [F] (links acima). O Steam tem guia de instalação "Standalone Mods Steam", ou seja, a comunidade mantém suporte à versão oficial [F] ([guia SadAugust](https://github.com/SadAugust/AutoTrimps/blob/main/Installation%20Guides/Standalone%20Mods%20Steam.md), via busca).
- **Atitude do dev:** a loja não menciona mods, e o dev não respondeu o pedido de feature; não encontrei declaração oficial a favor ou contra [F/NV] ([Steam](https://store.steampowered.com/app/1877960/)).
- [H] **Interpretação do estúdio:**
  1. A automação surge onde o jogo exige decisões repetitivas e determinísticas (comprar o próximo item, ir para o mapa X). O jogador não quer "jogar", quer otimizar.
  2. Num single-player, scripts não prejudicam ninguém; num **online com mercado e rankings**, o mesmo comportamento é bot e distorce a economia. Teríamos de oferecer automação **dentro** do jogo, como progressão (como o auto-fight desbloqueado), e proibir/limitar o resto.
  3. Fragilidade: o script quebra a cada patch ("mal funciona agora", 2025). Jogadores sofrem quando o jogo muda, o que mostra o custo de depender de terceiros.
  4. Consequência para o design: quando a melhor estratégia é "seguir um algoritmo", a decisão significativa já foi resolvida; o design precisa de escolhas que um script não resolve sem informação nova (ex.: contexto social, preços, riscos).
- Relaciona-se com o caso do [Kittens Game](A07-kittens-game.md) (Kitten Scientists) e com a teoria em [02a-teoria-design-idle.md](../02a-teoria-design-idle.md).

## 11. Do que os jogadores mais reclamam

Das 10 negativas mais recentes (ago–nov/2026) [C] ([Steam](https://steamcommunity.com/app/1877960/negativereviews/?browsefilter=mostrecent&filterLanguage=all)):

- 6 sobre ritmo/tédio/grind (lento comparado a Antimatter Dimensions, "como apertar +1 numa calculadora", "longo e chato", repetitivo, "UI sem graça");
- 1 detalhada (em português): recursos lentos, caps baixos que impedem automação, combate passivo, upgrades só dão dano ou defesa;
- 3 sem conteúdo relevante (insulto, vazia, xingamento).
- Amostra pequena; nenhuma cita monetização.

## 12. Mecânicas-chave: o porquê

**Portal com Helium/Radon + respec grátis** — Problema: medo de errar na build · Emoção: segurança para experimentar · Comportamento: otimizar perks · Efeito colateral: planilhas e scripts (Auto Perks).

**Dois universos** — Problema: fim de jogo de uma camada · Emoção: renovação · Comportamento: jogar de novo com regras novas · Efeito colateral: dobro de conteúdo para balancear.

**Void Maps e desafios** — Problema: variar o grind · Emoção: risco/recompensa · Comportamento: preparação · Efeito colateral: complexidade.

**Automação oficial desbloqueada por progresso (auto-fight)** — Problema: tédio · Emoção: alívio ao conseguir · Comportamento: perseguir o desbloqueio · Efeito colateral: o que falta (auto-portal) vira mod.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Automação como *recompensa de progressão* (desbloqueada em estágios) e oficial, com UI de configuração; capta a vontade de delegar.
  - Respec barato para fazer o jogador experimentar builds.
  - Camada paralela (segundo universo) como renovação sem apagar o passado.
  - Observar o que a comunidade automatiza: é um mapa dos pontos de tédio.
- **Evitar:**
  - Deixar a melhor estratégia ser um algoritmo estático; o script resolve o jogo.
  - Depender de scripts de terceiros para aspectos básicos (auto-portal).
  - Em jogo online com economia, tratar scripts como "mods": é bot. Definir política (ToS, limites de ações, detecção) antes do lançamento.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Trimps | Web+PC | F2P | Parcial | 3+ | Auto | Não | Nenhum | Não | Nenhum | Não | Nenhum | Não | Não | Não | Não | Não | Não | Não | Estável |

## Fontes

1. [Trimps — Steam](https://store.steampowered.com/app/1877960/) — oficial/loja — nov/2026.
2. [Negativas recentes](https://steamcommunity.com/app/1877960/negativereviews/?browsefilter=mostrecent&filterLanguage=all) — comunidade — ago–nov/2026.
3. [Thread "Feature request: Auto Portal"](https://steamcommunity.com/app/1877960/discussions/0/599646865392180024/) — fórum — mar–abr/2025.
4. [trimps.github.io](https://trimps.github.io/) — oficial (v5.10.1).
5. [GitHub — Trimps.github.io](https://github.com/Trimps/Trimps.github.io) — código aberto.
6. [GitHub — Zorn192/AutoTrimps](https://github.com/Zorn192/AutoTrimps) e [SadAugust/AutoTrimps](https://github.com/SadAugust/AutoTrimps) — comunidade.
7. [Wiki do Trimps — Portal](https://trimps.fandom.com/wiki/Portal?oldid=7527) — wiki (via busca, 402).

**Lacunas:** data original do jogo, regras de offline, unlock exato de cada automação oficial, posição oficial do dev sobre AutoTrimps, número de usuários do AutoTrimps, discussões de Reddit (bloqueado), receita.
