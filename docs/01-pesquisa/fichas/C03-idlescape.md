# Idlescape

| Campo | Valor |
|---|---|
| Grupo | C — idles online com economia de jogadores (concorrentes diretos) |
| Desenvolvedora / publicadora | Equipe voluntária liderada pelo dono "Boohi" até out/2025; desde então Lexi, que se apresenta como "uma das donas" e cuida dos negócios, em acordo com o desenvolvedor NickMillion. No Steam: Idlescape LLC |
| Lançamento | Navegador, em beta pelo menos desde 2020; demo da V1 em 17/out/2026; lançamento no Steam previsto para 8/jan/2027 |
| Plataformas | Navegador e Steam (demo); celular anunciado como meta |
| Modelo de negócio | F2P com moeda premium (Platinum) e assinatura (Idlescape Plus, "IS+") |
| Status em 2026 | Encerrado na versão antiga (beta encerrado no fim de 2025); em relançamento com wipe total |

> **Cartão-resumo:** Idlescape foi um dos primeiros "RuneScape idle" multiplayer de navegador, com mercado de jogadores (5% de taxa, ordens de compra), ligas e temporadas, e um modelo Platinum mais assinatura que só pagava o servidor, porque ninguém da equipe recebia salário. Travou por mais de um ano tentando entrar no Steam, já que o sistema de pagamento não seguia as regras da loja. Em out/2025 anunciou o fim, foi comprado por um novo dono dias depois e volta em 2027 com tudo zerado. **Lição nº 1:** a economia de jogadores só sobrevive se a empresa sobreviver. Arquitetura de pagamentos multiloja, equipe paga e plano de continuidade são tão "design de economia" quanto a taxa do mercado.

## 1. Loop central

- [F] É um MMORPG idle com Mining, Foraging, Fishing, Farming, Smithing, Cooking, Crafting, Runecrafting, Enchanting e combate, com progresso que continua offline ([Steam](https://store.steampowered.com/app/2692420)).
- [F] A versão beta de 2025 tinha 15 skills com nível máximo 99, seguido de níveis de maestria ([comparativo DragonScape](https://wiki.dragonscapeidle.com/about/compare), verificado em out/2026).
- [F] O loop era o clássico do subgênero: coletar, produzir, aprimorar (augmenting), vender e comprar no mercado e equipar para o combate ([patch 0.15.0](https://www.idlescape.com/news/beta-0-15-0); [patch 0.25.2](https://www.idlescape.com/news/beta-0-25-2)).
- [F] **Na V1 (2026):**
  - Combat 3.0, com mais de 150 monstros, mais de 500 equipamentos e semichefes nas zonas comuns.
  - Pets negociáveis com atributos de ARPG e nota de 1 a 100.
  - Talentos com loadouts.
  - Contratos e coleção.
  - Um "Action Plan" que substitui a fila de ações ([dev blog de set/2026](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2692420&count=10&maxlength=0&format=json)).
- [H] O pet negociável com nota contínua (1 a 100) e reroll por combinação transforma um sistema de coleção em mercado de "itens com RNG". É uma aposta clara em profundidade de trading.

## 2. Camadas de progressão e prestígio

- [F] Não há prestígio. A progressão é por níveis até 99 e depois por maestria ([comparativo](https://wiki.dragonscapeidle.com/about/compare)).
- [F] O **reset coletivo** veio por **ligas e temporadas**:
  - Liga "Pre-Launch" no fim de 2024 ([thread do Steam](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)).
  - "Duo Ironman Season" com fim em 1º de agosto, criada em jun/2025: dupla permanente com inventário compartilhado ([patch 0.23.0](https://www.idlescape.com/news/beta-0-23-0)).
  - Group Ironman para 5 pessoas em out/2025 ([notícias](https://www.idlescape.com/news)).
- [F] **Plano da 1.0 (2024):** criar ligas permanentes (Default/"Mainscape" e Ironman) com "rankings e mercado novos". O servidor antigo viraria Legacy, sem grandes conteúdos novos e com chat só em canais Legacy. Ícones, tokens, cosméticos e Platinum restante seriam levados para os personagens novos ([thread do Steam, post do desenvolvedor reproduzido](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)).
- [H] O Idlescape usou o reset como ferramenta de economia, para começar um "novo ciclo econômico de longo prazo" ([post de set/2024](https://www.idlescape.com/news/beta-0-21-6)). Também preservou o que foi pago (cosméticos, Platinum), e é isso que torna o wipe aceitável para quem gastou.

## 3. Progresso offline

- [F] O teto era de 12 horas, e a assinatura IS+ o elevava a 24 horas ([Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop), texto lido via buscador porque a wiki bloqueia acesso automatizado; [comparativo](https://wiki.dragonscapeidle.com/about/compare)).
- [F] Em jul/2025, a retomada de sessões após queda ou atualização do servidor foi refeita para ser mais rápida, e o "catch-up time" foi removido. A compra de **vacation tokens** foi suspensa: eles continuavam funcionando, mas eram "instáveis" ([patch 0.23.4](https://www.idlescape.com/news/beta-0-23-4)).
- [F] Na V1, o **Group Finder** procura grupo enquanto o jogador está AFK, começa a luta sozinho e depois devolve o jogador à ação anterior ([dev blog](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2692420&count=10&maxlength=0&format=json)).
- [H] O Group Finder AFK é a ideia mais interessante para o nosso escopo. Resolve o problema clássico do idle multiplayer (o grupo exige presença simultânea) deixando o matchmaking trabalhar para o ausente.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** [F] a demo dá Platinum e IS+ por marcos de nível total: 500 de Platinum com nível 500; mais 500 e um ícone com 1.000; mais 500 e 15 dias de IS+ com 1.500. O código `/promo DEMO` dá 800 de Platinum e 3 dias de IS+ ([anúncio de out/2026](https://steamcommunity.com/app/2692420)).
- **D7/D30:** [F] temporadas com prazo, ranking por personagem e por grupo, conquistas e coleção ([patch 0.23.0](https://www.idlescape.com/news/beta-0-23-0); [dev blog](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2692420&count=10&maxlength=0&format=json)).
- [H] O gancho de longo prazo mais forte é a promessa de que o que se conquista na demo vira Platinum no lançamento. É retenção antes do lançamento, só que com risco de inflacionar a moeda premium no dia 1.

## 5. Jogador ativo vs. jogador ausente

- [F] Em out/2025, uma revisão de cliques acrescentou atrasos a ações com efeito (iniciar ação, doar ouro) para evitar cliques acidentais, sobretudo vendas sem querer em ordens de compra ([patch 0.25.2](https://www.idlescape.com/news/beta-0-25-2)).
- [H] O desenho privilegiava o ativo no mercado e no combate em grupo. A V1 tenta corrigir isso com Group Finder AFK e o Action Plan. A temporada curta (cerca de seis semanas no Duo Ironman) favorece quem joga muito naquele intervalo.

## 6. Economia e moedas

### 6.1 Desenho do mercado: listagens mais ordens de compra

- [F] **Mercado (versão beta):** compra e venda entre jogadores com ouro, taxa de **5%** descontada do vendedor (arredondada para cima, exceto em vendas de 1 de ouro), preço mínimo de 1 de ouro e listagens que expiram em **30 dias** ([wiki Marketplace](https://wiki.idlescape.com/p/Marketplace), lida via trecho do buscador; página marcada como incompleta).
- [F] **Ordens de compra** (set/2023): o jogador define quantidade, preço máximo e, se quiser, nível de aprimoramento e encantamento. A ordem compra todas as listagens abaixo do preço máximo, "da mais barata e mais antiga primeiro" ([patch 0.15.0](https://www.idlescape.com/news/beta-0-15-0)). Em out/2025 passou a ser possível vender direto numa ordem de compra a partir de um item já listado ([patch 0.25.2](https://www.idlescape.com/news/beta-0-25-2)).
- [H] **Leitura:**
  - É um híbrido: a venda é listagem; a compra é ordem que varre o livro e pode ficar parada à espera.
  - O filtro por aprimoramento e encantamento resolve o problema de itens não fungíveis, que o Milky Way Idle trata com preço por nível.
  - A taxa de 5% é a mais alta dos três concorrentes diretos (Idle Clans 1%, MWI 4%).
- [F] **Reset de mercado:** na 1.0, as ligas novas ganham "mercado novo", e o servidor antigo fica isolado como Legacy ([thread do Steam](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)). Na demo, todos os personagens serão zerados no lançamento ([Steam](https://steamcommunity.com/app/2692420)).
- [NV] Não encontrei regras específicas contra manipulação de mercado, nem limites de ordens, nem histórico de preços dentro do jogo. A wiki oficial bloqueia leitura automatizada (403), e o fórum oficial saiu do ar com a migração.

### 6.2 Moedas: ouro, Platinum e IS+

- [F] **Platinum** é a moeda premium, comprada de 1.000 por US$ 7,95 a 13.500 por US$ 79,95. Serve para cosméticos, tokens, ícones de chat e **buffs para o servidor inteiro** ([Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop), via buscador). O token de renomear item custava 300 de Platinum e deixa o item intransferível ([patch 0.12.12](https://www.idlescape.com/news/beta-0-12-12); [Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop)).
- [F] **Buffs de Platinum** ficaram 10 vezes mais baratos em jul/2025: 1 minuto por Platinum, com mínimo de 1 hora (60 de Platinum). A loja inteira barateou para que o menor pacote compre vários itens ([patch 0.23.4](https://www.idlescape.com/news/beta-0-23-4)).
- [F] **IS+** dá 600 de Platinum por mês, mais vagas de personagem, loadout e perfil, e offline de 24 horas ([Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop)). [NV] Não achei o preço em dólar.
- [F] **Para que servia o dinheiro:** segundo a equipe, Platinum e IS+ "pagavam diretamente" o servidor e a manutenção, e nenhum membro recebia salário ([post de set/2024](https://www.idlescape.com/news/beta-0-21-6)).
- [NV] **Premium negociável?** Não encontrei prova de que Platinum ou IS+ pudessem ser vendidos por ouro entre jogadores. As regras proíbem trocar qualquer coisa de fora do jogo por itens dentro dele, sob pena de bloqueio de troca para os dois lados ([guia da wiki](https://wiki.idlescape.com/p/Guide), via buscador). [H] Tudo indica que não havia canal oficial de RMT.

## 7. Social

### 7.1 Grupo, guildas, chat e temporadas

- [F] O jogo tinha conteúdo em grupo e dungeons ([AlternativeTo](https://alternativeto.net/software/idlescape/about)). A V1 traz Group Finder, guildas e pets negociáveis. O próprio dono chama as guildas de "meio cruas" e calcula que o grupo de testadores daria para só duas guildas completas ([dev blog](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2692420&count=10&maxlength=0&format=json)).
- [F] **Chat:** na demo de 2026, o chat só libera no nível 20 ([discussões do Steam](https://steamcommunity.com/app/2692420/discussions/)). Em 2024, o plano era restringir personagens Legacy a canais próprios ([thread](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)).
- [H] Bloquear o chat até o nível 20 é uma barreira anti-spam e anti-bot barata, mas cobra caro em percepção num jogo que se vende como MMO.

### 7.2 Bots, multicontas e RMT: regras e aplicação

- [F] **Regras (wiki):**
  - Uma conta por pessoa; contas alternativas proibidas.
  - Automação e bots proibidos.
  - **Só modificações visuais** são permitidas; scripts que automatizam ou "se comunicam com o servidor" dão ban ([Regras](https://wiki.idlescape.com/p/Rules), via buscador).
  - O guia diz que scripts de conveniência podem ser aceitos, desde que aprovados pelo dono ([guia](https://wiki.idlescape.com/p/Guide)).
- [F] A moderação fica a critério da equipe, e as regras se dizem não exaustivas ([regras oficiais](https://idlescape.com/rules), via buscador; acesso direto bloqueado).
- [C] **Aplicação contestada:** em out/2026 um jogador reclama de ban por falar russo no jogo ([discussões do Steam](https://steamcommunity.com/app/2692420/discussions/); [Steam](https://steamcommunity.com/app/2692420)), e uma thread de mar/2025 se chama "Not the best staff" ([discussões](https://steamcommunity.com/app/2692420/discussions/)). [NV] Não achei ondas de ban nem números.

### 7.3 Ferramentas da comunidade e demanda por dados

- [F] Há o userscript Stonehub ("pequenas melhorias no mercado"), com 246 instalações, criado em nov/2020 ([Greasy Fork](https://greasyfork.org/en/scripts/415684-stonehub)), e a extensão de Firefox "Idlescape Marketplace Tracker", que acompanha preços pela API do mercado ([resultado do buscador](https://firefox-stats.com/d/idlescape-marketplace-tracker)).
- [H] **O que isso diz:** com regra de "só visual" e aprovação caso a caso, o ecossistema de ferramentas ficou pequeno. A comparação com o MWI (milhares de instalações e um gerenciador de scripts no cliente) sugere que permitir ferramentas de **leitura** aumenta engajamento e retenção dos jogadores-economistas. Não é prova, mas o contraste é forte.

## 8. Monetização

- [F] Platinum (US$ 7,95 a 79,95), assinatura IS+ e buffs de servidor ([Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop)). No Steam, a V1 lista compras no jogo e exige conta de terceiros com EULA própria ([Steam](https://store.steampowered.com/app/2692420)).
- [F] **O bloqueio no Steam:**
  - Em set/2024 a 1.0 estava "pronta", mas o backend só aceitava um provedor de pagamento.
  - As regras do Steam impedem lançar só com pagamento externo, e a equipe não podia desligar esse pagamento porque ele mantinha o servidor de pé.
  - Cada revisão do Steam levava cerca de duas semanas ([post de set/2024](https://www.idlescape.com/news/beta-0-21-6)).
  - Em nov/2024 a revisão ainda apontava problemas nas microtransações e formulários legais ([thread](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)).
- [F] Em 1º/out/2025 a equipe anunciou o **sunsetting**: fim das vendas, manutenção apenas, servidor até o fim de novembro e IS+ grátis para todos até lá. O motivo era a falta de tempo de uma equipe voluntária ([Patch Notes/2025](http://wiki.idlescape.com/p/Patch_Notes/2025), via buscador).
- [H] O modelo não era predatório. O problema foi a **sustentabilidade da empresa**: receita suficiente para servidor, mas não para pagar gente, e dependência de um único meio de pagamento. Para nós, que queremos RMT oficial, a compatibilidade com Steam, Apple e Google precisa estar desenhada desde o primeiro dia.

## 9. Números disponíveis (com fonte)

| Dado | Valor | Fonte e data |
|---|---|---|
| Jogadores online na demo | Mais de 1.000 nos primeiros 3 dias, mais de 100 só no Steam | [anúncio no Steam](https://steamcommunity.com/app/2692420), 21/out/2026 |
| Meta do novo dono | "10 mil+ jogadores" com marketing pesado | [New New Management](https://www.idlescape.com/news/new-management), 10/out/2025 |
| Lançamento no Steam | Previsto para 8/jan/2027; prometido antes para "janeiro ou fevereiro" de 2026 | [Steam](https://store.steampowered.com/app/2692420); [New New Management](https://www.idlescape.com/news/new-management) |
| Reviews no Steam | Nenhuma (jogo não lançado) | [Steam](https://store.steampowered.com/app/2692420) |
| Equipe | Voluntária, sem salários (2024); sem QA dedicado | [post de set/2024](https://www.idlescape.com/news/beta-0-21-6) |
| Pico histórico, receita, jogadores do beta | Não encontrados | — |

## 10. Por que deu certo (ou por que falhou)

- [H] **O que deu certo:** foi pioneiro do "RuneScape idle" multiplayer de navegador. A comunidade durou o bastante para que um jogador-empresário comprasse o jogo, e a demo de 2026 reuniu mais de 1.000 pessoas ao mesmo tempo ([Steam](https://steamcommunity.com/app/2692420)).
- [F] **Por que falhou:**
  - Equipe voluntária e sem salário ([set/2024](https://www.idlescape.com/news/beta-0-21-6)).
  - Pagamentos presos a um provedor, o que bloqueou o Steam ([set/2024](https://www.idlescape.com/news/beta-0-21-6)).
  - Atrasos sucessivos e pouca comunicação, admitidos pelo próprio desenvolvedor ([thread](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)).
  - O sunsetting por esgotamento ([Patch Notes/2025](http://wiki.idlescape.com/p/Patch_Notes/2025)).
- [H] O período 2024–2025 também mostra **economia fragmentada**: Legacy, Pre-Launch, temporadas Ironman (sem mercado, por definição) e um sistema de troca direta entre jogadores pronto mas "desativado em todos os modos" em jun/2025 ([patch 0.23.0](https://www.idlescape.com/news/beta-0-23-0)). O mercado continuou ativo, tanto que ganhou ajustes em out/2025 ([patch 0.25.2](https://www.idlescape.com/news/beta-0-25-2)), mas uma base pequena dividida em vários modos gera livros rasos.

## 11. Do que os jogadores mais reclamam

- [C] **Atrasos e falta de comunicação:** a própria thread "I'm looking forward to this" acumula pedidos de data de 2024 a 2026, e o desenvolvedor admite a falta de atualizações ([thread](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/)). Há também tópicos como "WHEN" e "r.i.p." ([discussões](https://steamcommunity.com/app/2692420/discussions/)).
- [C] **Monetização e atrito de conta:** questionam a exigência de conta de terceiros e as compras no jogo, citando o Melvor como alternativa ([discussões](https://steamcommunity.com/app/2692420/discussions/); [Steam](https://steamcommunity.com/app/2692420)).
- [C] **Moderação e chat:** ban por falar russo, chat travado até o nível 20, "Not the best staff" ([discussões](https://steamcommunity.com/app/2692420/discussions/); [Steam](https://steamcommunity.com/app/2692420)).
- [C] **Interface:** feedback da demo fala em UI poluída e ícones difíceis de ler ([Steam](https://steamcommunity.com/app/2692420)). Uma lista de terceiros diz que a interface "mostra a idade" ([lista de idles](https://manu-site-astro.pages.dev/idle-games-like-runescape/)).
- [NV] Não achei, com as ferramentas disponíveis, threads de Reddit sobre manipulação de mercado ou bots no Idlescape (o Reddit não é bem indexado pela busca e não é acessível por WebFetch).

## 12. Mecânicas-chave: o porquê

- **Ligas e temporadas com mercado próprio** — Problema: economia velha e travada, veteranos donos de tudo · Emoção: corrida do zero, "agora é minha vez" · Comportamento: retorno em massa no início da liga · Efeito colateral: fragmenta a base pequena; o mercado fica raso em cada liga.
- **Ordem de compra com filtro de aprimoramento e encantamento** — Problema: liquidez de itens não fungíveis · Emoção: "comprei exatamente o que eu queria" · Comportamento: especulação em itens com atributos · Efeito colateral: vendas acidentais em ordens, que exigiram atraso anti-clique.
- **Buffs de servidor comprados com Platinum (1 minuto por Platinum)** — Problema: dar uso social à moeda premium · Emoção: generosidade pública · Comportamento: pagante "patrocina" o servidor · Efeito colateral: o ritmo do F2P passa a depender de baleias.
- **Group Finder AFK** — Problema: conteúdo em grupo exige presença simultânea · Emoção: "o jogo me encaixou num grupo enquanto eu fazia outra coisa" · Comportamento: participação de ausentes em grupo · Efeito colateral: o grupo vira menos social, um matchmaking puro.
- **Wipe com preservação do que foi pago** — Problema: relançar sem trair quem gastou · Emoção: recomeço justo · Comportamento: volta de veteranos · Efeito colateral: Platinum acumulado e prêmios da demo entram numa economia nova e podem desequilibrar o dia 1.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Temporadas e ligas com mercado próprio como válvula contra concentração de riqueza, com a regra de que o que foi pago (cosmético, moeda premium) atravessa o reset.
  - Ordem de compra que aceita filtros de atributos (aprimoramento, encantamento) para itens não fungíveis.
  - Group Finder que procura e luta enquanto o jogador está AFK: conteúdo de grupo sem punir o ausente.
  - Buff de servidor financiado por gasto premium como dreno e bem público, igual ao MWI.
- **Evitar:**
  - Depender de um único provedor de pagamento. Steam, Apple e Google têm regras próprias, e o RMT oficial piora isso. Desenhar pagamentos multiloja e jurídico (EULA, formulários) antes do conteúdo.
  - Operar com equipe voluntária e sem caixa: a economia de jogadores morre com a empresa. Plano de continuidade e de venda do jogo faz parte do produto.
  - Fragmentar a base pequena em muitos modos e ligas ao mesmo tempo, e manter sistemas sociais prontos e desligados por meses (a troca direta, em 2025).
  - Política de scripts restritiva sem oferecer dados oficiais: mata o ecossistema de ferramentas que retém o jogador-economista.
  - Prometer datas sem controle do processo de revisão das lojas.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Idlescape | Web+PC | F2P | Parcial | 0 | Auto | Profundo | Listagem+Livro | ? | Nenhum | Sim | Nenhum | Sim | Sim | Não | Não | Não | Sim | ? | Encerrado |

Notas: Status = beta antigo encerrado em 2025; V1 em demo desde out/2026, com lançamento previsto para 8/jan/2027 e wipe total. Guildas = só na V1. Premium negociável e perda de itens não confirmados.

## Fontes

1. [Idlescape na Steam](https://store.steampowered.com/app/2692420) — oficial (loja) — consultado em nov/2026.
2. [Comunidade Steam do Idlescape](https://steamcommunity.com/app/2692420) — oficial e comunidade (anúncio da demo de 21/out/2026) — out/2026.
3. [Notícias do Steam via API (dev blog de set/2026 e anúncio da demo)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2692420&count=10&maxlength=0&format=json) — oficial — set–out/2026.
4. [Discussões do Steam](https://steamcommunity.com/app/2692420/discussions/) — comunidade — 2024–2026.
5. [Thread "I'm looking forward to this."](https://steamcommunity.com/app/2692420/discussions/0/6989114975922855471/) — comunidade (com posts do desenvolvedor reproduzidos) — out/2024–out/2026.
6. [New New Management](https://www.idlescape.com/news/new-management) — oficial — 10/out/2025.
7. [Lista de notícias](https://www.idlescape.com/news) — oficial — 2025–2026.
8. [Beta 0.21.6 "On the Horizon"](https://www.idlescape.com/news/beta-0-21-6) — oficial — 24/set/2024.
9. [Beta 0.15.0 (ordens de compra)](https://www.idlescape.com/news/beta-0-15-0) — oficial — 20/set/2023.
10. [Beta 0.12.12 (token de renomear)](https://www.idlescape.com/news/beta-0-12-12) — oficial — s/d.
11. [Beta 0.23.0 "Duo Ironman Season"](https://www.idlescape.com/news/beta-0-23-0) — oficial — 20/jun/2025.
12. [Beta 0.23.4 "Platinum and Offline Fetching"](https://www.idlescape.com/news/beta-0-23-4) — oficial — 16/jul/2025.
13. [Beta 0.25.2 "Polishing???"](https://www.idlescape.com/news/beta-0-25-2) — oficial — 29/out/2025.
14. [Wiki: Marketplace](https://wiki.idlescape.com/p/Marketplace), [Platinum Shop](https://wiki.idlescape.com/p/Platinum_Shop), [Rules](https://wiki.idlescape.com/p/Rules), [Guide](https://wiki.idlescape.com/p/Guide), [Patch Notes/2025](http://wiki.idlescape.com/p/Patch_Notes/2025) — wiki (lida via trechos do buscador; acesso direto bloqueado) — 2024–2025.
15. [Regras oficiais](https://idlescape.com/rules) — oficial (via buscador) — s/d.
16. [Comparativo DragonScape Idle vs. Melvor, Idle Clans e Idlescape](https://wiki.dragonscapeidle.com/about/compare) — terceiro (concorrente) — set–out/2026.
17. [Stonehub (Greasy Fork)](https://greasyfork.org/en/scripts/415684-stonehub) — comunidade — nov/2020.
18. [Idlescape Marketplace Tracker](https://firefox-stats.com/d/idlescape-marketplace-tracker) — comunidade (extensão) — s/d.
19. [AlternativeTo: Idlescape](https://alternativeto.net/software/idlescape/about) — terceiro — s/d.
20. [Lista "idle games like RuneScape"](https://manu-site-astro.pages.dev/idle-games-like-runescape/) — terceiro (baixa confiabilidade) — 2026.
