# Realm Grinder

| Campo | Valor |
|---|---|
| Grupo | A — Clássicos do incremental / idle (single-player, hardcore) |
| Desenvolvedora / publicadora | Divine Games / Kongregate |
| Lançamento | Steam em 15/jun/2017 [F] ([Steam](https://store.steampowered.com/app/610080/Realm_Grinder/)); versão para navegador/Kongregate anterior (data não verificada, ver lacunas) |
| Plataformas | Navegador (Kongregate), Windows e macOS (Steam), iOS e Android [F] ([Steam](https://store.steampowered.com/app/610080/Realm_Grinder/); [App Store](https://apps.apple.com/app/id1110149506)) |
| Modelo de negócio | F2P com compras dentro do app (pacotes de "Rubies" e "Gifts", de US$ 4,99 a US$ 49,99) [F] ([App Store](https://apps.apple.com/app/id1110149506)) |
| Status em 2026 | Estável: ainda recebe atualização (v4.3.22 na App Store), "Muito Positivo" no Steam, mas com poucas reviews recentes |

> **Cartão-resumo:** Realm Grinder é um idle de construção de reino em que a escolha de facção muda o jogo inteiro. Cada rodada é uma "build" (facção + pesquisas + feitiços), e três camadas de reset (Abdication, Reincarnation, Ascension) reabrem a decisão em escalas cada vez maiores. Deu certo porque trata o prestígio como **troca de identidade**, não só como multiplicador. O custo é a opacidade: a profundidade vive em wikis e planilhas de fãs, e o fim de jogo vira muro de reencarnações. **Lição nº 1:** várias camadas de prestígio funcionam melhor quando cada uma muda *o que o jogador decide*, e não apenas *o quanto ele ganha*.

## 1. Loop central

- O jogador compra propriedades (fazendas, casas etc.), clica para ganhar moedas, compra upgrades e lança feitiços que gastam mana. A descrição oficial do Steam fala em crescer o reino, alinhar-se a "cerca de uma dúzia" de facções, desbloquear upgrades, prédios e feitiços [F] ([Steam](https://store.steampowered.com/app/610080/Realm_Grinder/)).
- A facção escolhida muda o estilo de jogo. Cada facção tem bônus e penalidades próprios, e a loja do App Store descreve "uma dúzia de facções com estilos diferentes" [F] ([App Store](https://apps.apple.com/app/id1110149506)).
- [H] O loop de curto prazo é simples (comprar, clicar, lançar feitiço). A graça está na camada acima: escolher *qual* facção e *quais* pesquisas ativar antes de cada rodada.

## 2. Camadas de progressão e prestígio

Três resets "suaves" (soft resets) e um reset total (hard reset) que apaga tudo [F] ([wiki — Soft Resets, via resultado de busca; a página deu 402 no WebFetch](https://realm-grinder.fandom.com/wiki/Soft_Resets)).

- **Abdication (nível 1).** Reinicia a rodada para trocar de facção/alinhamento. Os pontos de pesquisa persistem, mas os *slots* de pesquisa ativos resetam, então cada rodada pode usar uma build diferente [F] ([wiki — Research, via busca](https://realm-grinder.fandom.com/wiki/Research)). Venda de propriedades via soft reset converte em Gems (moeda de prestígio) [F] ([resultado de busca sobre a wiki](https://realm-grinder.fandom.com/wiki/Soft_Resets)).
- **Reincarnation (nível 2).** Reinício com bônus permanente. A primeira exige 1e27 gems e cada seguinte custa 1000 vezes mais [F] ([guia musicfamily.org, via busca; o site tem certificado expirado e a página é de versão antiga](http://musicfamily.org/realm/Reincarnation/)). O contador "R" destrava coisas em marcos: R16 pesquisa "Vanilla", R29 pesquisa "Prestige", R40 Ascension 1 (mesma fonte; marcos podem ter mudado em versões posteriores).
- **Ascension (nível 3).** Reset mais profundo, em torno de R39, R99, R159 e R219, que zera o contador de R e troca a moeda principal (Diamond Coins, segundo uma fonte) [F] ([wiki — Ascension, via busca](https://realm-grinder.fandom.com/wiki/Ascension)). No segundo ascension o acesso às facções de prestígio e aos mercenários é perdido [F] (guia musicfamily.org, via busca, acima).
- **Pesquisa em três etapas** [F] ([thread oficial do Steam, 30/ago/2018, post do jogador Kesac](https://steamcommunity.com/app/610080/discussions/0/1738841319806036548)):
  1. ganhar pontos de pesquisa (feito uma vez);
  2. desbloquear cada pesquisa (uma vez, com condições que mudam após ascension);
  3. ativar pesquisas a cada abdication, com limite inicial de 5 por categoria.
  - Exemplos de condição: uma pesquisa exige 600 RP somados nas seis árvores; outra, dois dias de jogo na facção Evil na rodada atual; outra, 24 h jogadas como Undead, e o tempo conta online ou offline (mesmo thread, post de um oficial do fórum).
- **Desafios** por facção dão perks quando se joga alinhado àquela facção [F] ([resultado de busca sobre guia da PC Gamer](https://www.pcgamer.com/realm-grinder-guide/); a página não abriu no WebFetch).
- **Ritmo de desbloqueios:** a pesquisa só entra por volta de R16–R18 e é considerada quase obrigatória a partir de R19–R20, porque os mercenários escalam mal [F] (thread de 2018 acima). [H] Ou seja: o jogo entrega a camada "build" só depois de o jogador dominar o loop base, e depois a torna indispensável.

## 3. Progresso offline

- Fraco para a maioria das builds. Uma review de 47 h e uma de 485 h reclamam que o progresso offline não conta [C] ([negativas recentes do Steam, set–nov/2026](https://steamcommunity.com/app/610080/negativereviews/?browsefilter=mostrecent&filterLanguage=all); mais um [thread do Steam](https://steamcommunity.com/app/610080/discussions/0/2592234299545320459) citado na busca, afirmação de jogador, não oficial).
- Mana é o que mais acumula offline, e só com upgrades de regeneração offline; feitiços não são lançados com o jogo fechado. Undead é a facção associada a ganhos offline [C] (resultados de busca sobre [PC Gamer](https://www.pcgamer.com/realm-grinder-guide/) e [Supercheats](https://www.supercheats.com/realm-grinder/walkthrough/hints-tips); não verifiquei o texto das páginas).
- [H] Aqui há uma lição de design: offline fraco por padrão, mas **uma facção e uma build existem para quem joga assim**. Isso transforma "jogo ausente" em escolha de build, não em punição universal. Porém, quem não sabe disso lê como defeito.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** compra de propriedades, primeiras facções e a primeira troca de alinhamento.
- **D7:** primeiras reencarnações, desbloqueio de pesquisa (R16+).
- **D30+:** as marcas de R (R40 e além), ascensions, desafios e achievements. Um jogador com 485,6 h reclama de ter de "grindar até R40" para liberar o Dragon, o que mostra que a meta longa existe, mas nem todos a veem como motivação [C] (review negativa citada acima).
- Há eventos recorrentes: a loja menciona "eventos regulares" [F] ([App Store](https://apps.apple.com/app/id1110149506)).
- [NV] Não encontrei dados de retenção D1/D7/D30 publicados.

## 5. Jogador ativo vs. jogador ausente

- Ativo: lança feitiços na hora certa e troca a build. Uma review de 485 h diz que o jogo "exige atenção constante" [C] (negativas do Steam acima). Ausente: sofre, a menos que jogue de Undead com mana offline.
- [H] O jogo recompensa o *planejamento* (a build antes de sair) mais do que o clique. Isso é bom. Falta, porém, uma ponte para o ausente "casual": não há ganho offline robusto para todos.

## 6. Economia e moedas

- Moedas: moedas do reino, Gems (prestígio), Diamond Coins (pós-Ascension) e Rubies (premium, comprada com dinheiro real) [F] ([App Store](https://apps.apple.com/app/id1110149506); wiki acima).
- É single-player: não há mercado entre jogadores.
- [H] Reaproveitável: a "troca de moeda principal" a cada camada de prestígio é um jeito de manter drenos relevantes nos números enormes de fim de jogo.

## 7. Social

- Praticamente nenhum recurso social no jogo; a comunidade vive em Discord, Steam e wikis de fã (a wiki é citada como desatualizada em threads de 2021, segundo resultado de busca). O fórum oficial tem moderadores/oficiais que respondem dúvidas de mecânica [F] ([thread de 2018](https://steamcommunity.com/app/610080/discussions/0/1738841319806036548)).

## 8. Monetização

- F2P com pacotes de Rubies (US$ 4,99 a US$ 49,99) e "Gifts" (US$ 4,99 a US$ 19,99) no iOS [F] ([App Store](https://apps.apple.com/app/id1110149506)). No Steam, a loja lista compras no app e 10 itens de "Points Shop" (fundos de perfil) [F] ([Steam](https://store.steampowered.com/app/610080/Realm_Grinder/)).
- Uma review curta de 5,6 h chama o jogo de "pay-to-win", mas é voz isolada: 1 em 10 das negativas recentes que vi [C, fraco] ([negativas do Steam](https://steamcommunity.com/app/610080/negativereviews/?browsefilter=mostrecent&filterLanguage=all)). Uma resenha citada na GameBrain diz que a compra não é necessária e só pula esperas ([GameBrain](https://gamebrain.co/game/realm-grinder), lida via busca).

## 9. Números disponíveis (com fonte)

- Steam: 86% positivas de 4.112 reviews em inglês; últimos 30 dias, 77% de 18 (consulta em nov/2026) [F] ([Steam](https://store.steampowered.com/app/610080/Realm_Grinder/)).
- App Store: nota 4,5 com cerca de 3,1 mil avaliações (nov/2026) [F] ([App Store](https://apps.apple.com/app/id1110149506)).
- Receita, downloads e MAU: não encontrado (busca por Sensor Tower/AppMagic não retornou nada utilizável).

## 10. Por que deu certo

- [H] Profundidade de build sem exigir ação em tempo real; permite mesmo um jogo "de planilha" com identidade temática (facções) que dá sentido aos números.
- O Steam o classifica "Muito Positivo", e a nota é alta no iOS (acima). Ninguém precisa pagar para ver todo o conteúdo.

## 11. Do que os jogadores mais reclamam

Das 10 negativas mais recentes que consegui ler (sem filtro de idioma, set–nov/2026) [C] ([Steam, negativas recentes](https://steamcommunity.com/app/610080/negativereviews/?browsefilter=mostrecent&filterLanguage=all)):

- 3 sobre erros técnicos ou vazios (tela preta em Mac, duas vezes; texto sem queixa) — não são de design.
- 2 sobre offline fraco (47 h e 485 h de jogo).
- 1 sobre muro/grind de R40 para o Dragon (485 h).
- 1 sobre "pay-to-win, lento e velho" (5,6 h).
- 3 de poucos minutos de jogo ("é só clicar", "pouco conteúdo").
- Opacidade: o thread de 2018 mostra jogadores dependendo de colegas para saber condições de desbloqueio, pois a interface só mostra "?" ou "!" [F] ([thread](https://steamcommunity.com/app/610080/discussions/0/1738841319806036548)).
- A amostra é pequena (10); a proporção entre categorias é indicativa, não estatística.

## 12. Mecânicas-chave: o porquê

**Facção como identidade** — Problema: repetição entre rodadas · Emoção: curiosidade ("e se eu tentar Undead?") · Comportamento: experimentar, ler guias · Efeito colateral: conhecimento fica fora do jogo (wikis), e novatos se perdem.

**Abdication → Reincarnation → Ascension (três camadas)** — Problema: o reset único perde força depois de 10 usos · Emoção: recomeço com novidade · Comportamento: planejar a "próxima rodada" · Efeito colateral: perdas nas camadas altas (prestige factions e mercenários somem na Ascension 2) dão sensação de retrocesso para quem investiu nelas.

**Pesquisa com slots que resetam e pontos que persistem** — Problema: build travada · Emoção: sensação de montar uma "mão" a cada rodada · Comportamento: otimizar combinações · Efeito colateral: tela complexa e condições de desbloqueio escondidas.

**Desbloqueios por tempo jogado na facção (ex.: 24 h Undead)** — Problema: forçar variedade · Emoção: "cumprir tarefa" · Comportamento: jogar rodadas longas em facções que o jogador não escolheria · Efeito colateral: vira grind de calendário.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Camadas de prestígio que mudam *decisões* (facção, build) e não só multiplicadores. [H] Em um RPG idle com guildas e temporadas, a "facção" pode ser a identidade de guilda/temporada.
  - Persistência parcial: o que fica (pontos) e o que reseta (slots ativos) cria o "montar a build" a cada rodada.
  - Trocar a moeda principal por camada para manter o novo conteúdo relevante.
  - Entregar a camada de build só depois que o loop base está dominado (R16+).
- **Evitar:**
  - Informação de desbloqueio escondida: obrigar o jogador a ir à wiki para saber o requisito.
  - Perder conteúdo nas camadas altas (prestige factions sumindo) sem avisar.
  - Offline bom só para uma facção; os demais descobrem tarde.
  - Muro de fim de jogo (R40+) sem alternativa de progresso lateral.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Realm Grinder | Web+PC+Mobile | F2P | Parcial | 3+ | Nenhum | Não | Nenhum | Não | Nenhum | Não | Nenhum | Não | Sim | Não | ? | Não | Não | Não | Estável |

## Fontes

1. [Realm Grinder — Steam](https://store.steampowered.com/app/610080/Realm_Grinder/) — oficial/loja — nov/2026.
2. [Reviews negativas recentes — Steam](https://steamcommunity.com/app/610080/negativereviews/?browsefilter=mostrecent&filterLanguage=all) — comunidade — set–nov/2026.
3. [Realm Grinder — App Store](https://apps.apple.com/app/id1110149506) — oficial/loja — nov/2026.
4. [Thread "Research and mercenaries (R18)"](https://steamcommunity.com/app/610080/discussions/0/1738841319806036548) — comunidade/fórum oficial — 30/ago/2018.
5. [Wiki — Soft Resets](https://realm-grinder.fandom.com/wiki/Soft_Resets), [Research](https://realm-grinder.fandom.com/wiki/Research), [Ascension](https://realm-grinder.fandom.com/wiki/Ascension) — wiki (WebFetch deu 402; usei trechos da busca).
6. [Guia musicfamily.org — Reincarnation](http://musicfamily.org/realm/Reincarnation/) — guia de fã, versão antiga.
7. [PC Gamer — Beginner's guide](https://www.pcgamer.com/realm-grinder-guide/) — imprensa (conteúdo não carregou; usei trecho da busca).
8. [Supercheats](https://www.supercheats.com/realm-grinder/walkthrough/hints-tips), [GameBrain](https://gamebrain.co/game/realm-grinder) — agregadores (via busca).

**Lacunas:** data exata do lançamento original em Kongregate/navegador, receita/downloads, número de jogadores, texto das reclamações sobre o "muro" em fóruns (Reddit bloqueado), Google Play. Fatos de mecânica de reset vêm de wiki e guias de fã lidos só via resultado de busca.
