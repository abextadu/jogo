# New World (e New World: Aeternum)

| Campo | Valor |
|---|---|
| Grupo | G — Casos de alerta (falhas técnicas numa economia de jogadores) |
| Desenvolvedora / publicadora | Amazon Games (Amazon Game Studios em 2021). Motor: Amazon Lumberyard / Azoth |
| Lançamento | 28/9/2021 (PC, Steam). Relançado como *New World: Aeternum* em 15/10/2024, com versões para PS5 e Xbox Series X/S |
| Plataformas | PC; PS5 e Xbox Series X/S a partir de 2024 |
| Modelo de negócio | Compra do jogo + loja com moeda premium (Marks of Fortune) + passe de temporada pago (desde 2023) + expansão paga (2023) |
| Status em 2026 | Em declínio terminal: sem conteúdo novo desde out/2025, fora de venda desde 15/1/2026, loja fechada em 20/7/2026, servidores desligam em 31/1/2027 |

> **Cartão-resumo:** New World teve um dos maiores lançamentos de MMO da história do Steam, com 913 mil jogadores simultâneos em outubro de 2021. Em seis semanas, a Amazon precisou desligar o comércio entre jogadores duas vezes por causa de duplicação de ouro e itens, e uma das correções abriu uma brecha nova. Houve ainda invulnerabilidade ao arrastar a janela, HTML executado pelo chat e fusões de servidores. Em oito meses, a média de jogadores caiu 97%. O relançamento Aeternum (2024) não reverteu a curva: o desenvolvimento acabou em outubro de 2025 e os servidores fecham em 31/1/2027. **Lição nº 1:** numa economia de jogadores, o servidor é dono de todo valor e de todo relógio, e toda transferência é uma transação atômica. Sem isso, cada bug vira inflação, e cada correção pune quem joga limpo.

## 1. Loop central

- **[F]** MMO de ação com combate em tempo real, coleta, refino e fabricação. No dia do lançamento passou de 700 mil jogadores simultâneos no Steam ([Polygon, 29/9/2021](https://www.polygon.com/22700460/new-world-server-mmo-queue-times-amazon-game-studios)). Cada servidor ("mundo") comportava 2.000 jogadores, e as filas chegavam ao limite de 25 mil pessoas ([Game Rant, 28/9/2021](https://gamerant.com/new-world-long-queue-times/)).
- **[F]** O mercado (Trading Post) aceitava ordens de venda e de compra, e o item comprado ia para o depósito (*storage shed*) da cidade, não para a mochila ([wiki Fextralife](https://newworld.wiki.fextralife.com/Trading+Post)).
- **[H]** O loop econômico era: coletar → refinar → fabricar → vender → pagar custos (reparo, casa, taxas, melhorias de cidade). Como quase tudo passava pela mesma moeda e pelo mesmo mercado, qualquer brecha que criasse ouro ou item do nada contaminava os preços de todo o mundo.

## 2. Camadas de progressão e prestígio

- **[F]** Não há prestígio (reset com bônus). O fim de jogo era subir o *gear score* por um sistema de "marca d'água": em novembro de 2021, inimigos de nível 61 levavam o equipamento até 530 e os de nível 64+ até 600 ([dev blog, via devtrackers, 2021](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues)).
- **[F]** A partir de 28/3/2023 o jogo passou a ter temporadas com passe de 100 níveis, com trilha grátis e trilha paga ([GamingBolt](https://gamingbolt.com/?p=544564); [PCGamesN](https://www.pcgamesn.com/new-world/season-pass-price)).

## 3. Progresso offline

- **[F]** Não existe progresso offline. Com o jogador ausente, só correm custos e prazos: o imposto da casa (o ciclo passou de 5 para 7 dias em novembro de 2021) e os anúncios no mercado (validade máxima reduzida de 28 para 14 dias) ([dev blog, via devtrackers](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues)).
- **[H]** No New World, o tempo fora do jogo só custa. No idle, é a principal fonte de valor, então o servidor precisa medir esse tempo com o próprio relógio, nunca com o que o cliente informa (ver item 6 da seção 10.2).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **[F]** Diário: em novembro de 2021, as 3 primeiras missões de facção do dia passaram a pagar 10 vezes mais ouro, e as recompensas de chefes de expedição subiram de 25% a 100% ([dev blog](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues)).
- **[F]** Retorno por recomeço: os mundos *Fresh Start* (2/11/2022), em que todos começavam do zero, levaram o pico mensal no Steam a 137.755 jogadores simultâneos, contra 25.505 em agosto de 2022 ([SteamCharts](https://steamcharts.com/app/1063730); [Massively OP](https://massivelyop.com/?p=408536)). A Amazon prometeu nunca fundir esses mundos com os antigos ([FAQ oficial](https://www.newworld.com/en-us/news/articles/fresh-start-world-rollout-plan-and-faq)).
- **[F]** Cada grande atualização gerou um pico menor que o anterior: 77.642 (out/2023, expansão Rise of the Angry Earth), 61.364 (out/2024, Aeternum) e 50.987 (out/2025, temporada final) ([SteamCharts](https://steamcharts.com/app/1063730)).
- **[H]** O recomeço justo (servidor novo, todos iguais) trouxe mais gente de volta que conteúdo novo, mas não segurou. Quando a confiança na economia se perde, conteúdo não a devolve.

## 5. Jogador ativo vs. jogador ausente

- **[H]** O jogo cobra presença (seção 3). Além disso, os congelamentos da economia (seção 10) puniram igualmente o honesto ativo e o ausente. Quem voltava encontrava mercado fechado e preços distorcidos por ouro duplicado. Num idle com mercado, o ausente é o mais exposto a esse tipo de choque, porque não reage em tempo real.

## 6. Economia e moedas

- **[F]** Moeda única (*coin*) para comércio, reparos, taxas e casas. Antes das duplicações, a queixa era falta de ouro: poucas fontes e muitos custos (fabricação, *respec*, taxas), a ponto de jogadores voltarem ao escambo ([Mein-MMO, 21/10/2021](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789)).
- **[F]** Na primeira duplicação, jogadores relataram milhões de moedas duplicadas em circulação, preços de recursos até mil vezes maiores em alguns servidores e venda do ouro duplicado por dinheiro real, com ganhos de centenas de dólares em horas ([Mein-MMO, 21/10/2021](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789)). São relatos de jogadores, não números oficiais.
- **[F]** Contra bots e vendedores de ouro, a Amazon bloqueou troca e envio de moeda para personagens com menos de 72 horas ou abaixo do nível 10 ([PCGamesN, notas do patch 1.0.5](https://www.pcgamesn.com/new-world/update-105-patch-notes)), exigiu uma missão introdutória para liberar o mercado e tirou o ouro dos baús de pesca, que eram farmados por bots ([dev blog](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues)).
- **[F]** Em novembro de 2021 a Amazon desligou o Family Sharing do Steam, citando aumento de bots, vendedores de ouro e contas burlando banimentos ([Wikipedia](https://en.wikipedia.org/wiki/New_World_(video_game)), que cita o [aviso do fórum oficial de 4/11/2021](https://forums.newworld.com/t/notice-family-sharing-update/509393)).

## 7. Social

- **[F]** Companhias (guildas), três facções e territórios. As fusões de mundo preservavam itens e progresso, mas apagavam as conquistas territoriais do mundo de origem ([NME, 18/12/2021](https://www.nme.com/news/new-world-announces-more-player-world-mergers-3121580)). Cada fusão apagava a história política do servidor.

## 8. Monetização

- **[F]** Aeternum custava US$ 60 (padrão) e US$ 80 (deluxe) ([Insider Gaming](https://insider-gaming.com/new-world-aeternum/)). A expansão Rise of the Angry Earth (2/10/2023) saiu por US$ 29,99 no Steam ([SteamDB](https://steamdb.info/sub/1121877)). A trilha paga do passe custava 20.000 Marks of Fortune, cerca de US$ 20 ([PCGamesN](https://www.pcgamesn.com/new-world/season-pass-price)). A venda de Marks of Fortune acabou em 20/7/2026 ([post oficial, 15/1/2026](https://www.newworld.com/en-us/news/articles/the-future-of-new-world-aeternum-what-to-expect)).
- **[NV]** Preço de lançamento de US$ 39,99 em 2021: é o que lembro, mas só achei uma fonte fraca ([thepricer](https://www.thepricer.org/how-much-does-new-world-aeternum-cost/)).
- **[H]** Não havia RMT oficial. Havia mercado cinza de ouro, e as duplicações o abasteceram. Com RMT oficial, como planejamos, um dupe deixa de ser inflação e vira saque de dinheiro.

## 9. Números disponíveis (com fonte)

Jogadores simultâneos no Steam, média e pico mensais ([SteamCharts](https://steamcharts.com/app/1063730), acessado em nov/2026). Só conta o PC; os consoles (desde out/2024) ficam de fora.

| Mês | Média | Pico | Contexto |
|---|---|---|---|
| Out/2021 | 410.171 | **913.027** | Lançamento (recorde histórico) |
| Nov/2021 | 155.169 | 357.188 | Congelamentos da economia |
| Dez/2021 | 83.176 | 145.038 | Primeiras fusões |
| Jun/2022 | 13.615 | 22.565 | Fundo do poço |
| Nov/2022 | 67.759 | 137.755 | Mundos *Fresh Start* |
| Out/2023 | 37.395 | 77.642 | Expansão paga |
| Out/2024 | 20.524 | 61.364 | Relançamento Aeternum |
| Out/2025 | 21.286 | 50.987 | Temporada final, fim anunciado |
| Jan/2026 | 934 | 1.703 | Retirado das lojas |
| Out/2026 | 355 | 659 | Fim de vida |

- **[F]** No lançamento, foi apontado como o 5º jogo mais jogado da história do Steam em simultâneos ([GamesRadar, via Wikipedia](https://en.wikipedia.org/wiki/New_World_(video_game))).
- **[H]** Cálculo nosso sobre a tabela: a média caiu 62% de outubro para novembro de 2021 e 96,7% de outubro de 2021 a junho de 2022.
- **[F]** Banimentos: mais de 1.200 contas banidas para sempre em 2/11/2021, com retirada de mais de 80% do valor duplicado, e mais 460 em 15/11; depois, 98% do que restava foi removido ([MMOBomb](https://mmobomb.com/news/new-world-drops-hammer-more-1200-exploiters); [PC Gamer](https://www.pcgamer.com/new-world-permabans-over-1200-accounts-for-duping-exploits)).
- **[F]** Vendas totais: não encontradas em fonte oficial.

## 10. Por que falhou

### 10.1 Linha do tempo

| Data | Evento | Fonte |
|---|---|---|
| 21–22/10/2021 | Dupe de ouro na transferência de servidor; transferências desligadas em horas | [Mein-MMO](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789) |
| 1/11/2021 | Toda transferência de riqueza desligada: troca, mercado, envio de moeda e cofre de guilda | [PCGamesN](https://www.pcgamesn.com/new-world/gold-exploit) |
| 4/11/2021 | Patch 1.0.5 religa o comércio e corrige dois dupes | [Vulkk](https://vulkk.com/2021/11/04/new-world-update-1-05-changes-overview-and-patch-notes/) |
| 15–16/11/2021 | Dupe na decoração da casa; comércio desligado de novo e religado de madrugada | [Mein-MMO](https://mein-mmo.de/en/new-world-disables-player-to-player-trading-again-item-duplication-is-to-blame,749114) |
| 17/12/2021 | Primeiras fusões de mundos (EUA, Austrália, Europa Central) | [NME](https://www.nme.com/news/new-world-announces-more-player-world-mergers-3121580) |
| 3/3/2022 | Novo dupe de itens; transferências desligadas outra vez | [PiunikaWeb](https://piunikaweb.com/2022/03/04/new-world-wealth-transfers-disabled-to-address-item-duplication-exploit/) |
| 2/12/2022 | 13 mundos antigos fundidos em 6 após o *Fresh Start* | [PC Gamer](https://www.pcgamer.com/new-world-is-jamming-a-bunch-of-legacy-servers-together-after-players-flock-to-fresh-start-options) |
| 15/10/2024 | Relançamento *Aeternum* (PC e consoles) | [Wikipedia](https://en.wikipedia.org/wiki/New_World_(video_game)) |
| 28/10/2025 | Fim do desenvolvimento: a temporada 10 (Nighthaven) é a última | [MMORPG.com](https://www.mmorpg.com/news/new-world-aeternum-ending-development-with-season-10-after-amazon-layoffs-servers-remain-through-2026-2000136447) |
| 15/1/2026 → 31/1/2027 | Retirado das lojas; servidores desligam em 31/1/2027 | [post oficial](https://www.newworld.com/en-us/news/articles/the-future-of-new-world-aeternum-what-to-expect) |

### 10.2 Anatomia técnica: o que deu errado na arquitetura

A Amazon quase nunca publicou a causa-raiz. Cada item traz o que foi relatado **[F]** e a nossa leitura de arquitetura **[H]**, que é inferência a partir do sintoma.

1. **Dupe na transferência de servidor (out/2021).** **[F]** Logo após a liberação das transferências gratuitas, quem recebia ouro de um personagem transferido ganhava a quantia sem que o remetente a perdesse. O aviso oficial falava num problema de "persistência do personagem" após a transferência, e a Amazon desligou o recurso em horas ([Mein-MMO](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789)). **[H]** Mover um personagem entre mundos não foi uma operação única com um só dono do registro. Por um tempo existiram duas cópias válidas da mesma carteira, e as duas podiam gastar. Correto: travar a origem, copiar, confirmar e só então liberar o destino, com cada passo idempotente.
2. **Dupe na troca com lag (out–nov/2021).** **[F]** Jogadores abusavam do netcode lento para multiplicar ouro no mercado e nas trocas ([IBTimes, 2/11/2021](https://www.ibtimes.com/new-worlds-auction-house-disabled-over-gold-duplication-exploit-3329264)). **[H]** É o padrão clássico de transferência não atômica: o crédito de um lado é gravado e o débito do outro falha, volta ou é reaplicado após a reconexão. Correto: débito e crédito na mesma transação de banco, saldo que não pode ficar negativo e chave de idempotência em cada pedido.
3. **Dupe criado pelo congelamento (nov/2021).** **[F]** Com o comércio desligado, iniciar uma melhoria de cidade passou a *somar* o custo ao cofre da companhia em vez de descontá-lo ([PCGamesN](https://www.pcgamesn.com/new-world/gold-exploit)). As notas do patch admitem um dupe de ouro em projetos de território "introduced by disabling trading" ([PCGamesN, patch 1.0.5](https://www.pcgamesn.com/new-world/update-105-patch-notes)). **[H]** O botão de emergência não bloqueou a entrada da operação. Ele quebrou o meio de uma operação de várias etapas, e o caminho de estorno devolveu dinheiro que nunca tinha sido cobrado. Correto: estorno só referenciando um débito existente, e todo botão de emergência testado como se fosse uma feature.
4. **Dupe de depósito com estação de fabricação (corrigido em 4/11/2021).** **[F]** Jogadores usavam depósitos e estações de fabricação para duplicar itens ([PCGamesN, patch 1.0.5](https://www.pcgamesn.com/new-world/update-105-patch-notes)). **[H]** Dois sistemas acreditavam ser donos do mesmo material, e o consumo dos insumos não acontecia junto com a criação do produto. Correto: consumir insumos e criar o produto na mesma transação.
5. **Dupe na decoração da casa (14–16/11/2021).** **[F]** Sob o lag do modo de decoração, o jogo registrava várias posições para o mesmo item e ele se multiplicava. Troféus, itens únicos de casa com bônus passivo, estavam entre os mais duplicados ([DBLTap, 15/11/2021](https://www.dbltap.com/posts/new-world-economy-down-again-following-yet-another-duplication-glitch-discovery-01fmj70whkpn)). O bug existia havia dias antes da reação ([Mein-MMO](https://mein-mmo.de/en/new-world-disables-player-to-player-trading-again-item-duplication-is-to-blame,749114)). **[H]** Pedido repetido sob lag criava um item novo a cada repetição. Correto: cada item tem ID único e uma única localização garantida pelo banco, e "mover" é uma atualização idempotente, não um "criar aqui e apagar lá".
6. **Invulnerabilidade ao arrastar a janela (out/2021).** **[F]** No modo janela, segurar a janela deixava o personagem imune; ao soltar, todo o dano acumulado chegava de uma vez ([PC Gamer](https://pcgamer.com/new-world-invincibility-exploit)). Parte da imprensa concluiu que o jogo confiava no cliente ([AltChar, 19/10/2021](https://www.altchar.com/game-news/new-worlds-client-authority-is-causing-many-hacks-and-exploits-a5J972B9Wo6x)). A Amazon negou: a simulação roda no servidor, e "the outcome is always based only on the server answer" (Luxendra, gerente de comunidade). O bug era que, em certas situações, o servidor *esperava* um dado do cliente para continuar, e uma invulnerabilidade breve dada por efeito de arma durava enquanto o cliente estivesse travado. A correção saiu no mesmo dia ([post oficial, via devtrackers](https://devtrackers.gg/new-world/p/f2ab12db-notice-how-server-client-authority-is-handled-in-new-world); [NME, 31/10/2021](https://www.nme.com/news/new-world-is-not-client-authoritative-but-server-based-says-amazon-3083389)). **[H]** O servidor decidia o *resultado*, mas o cliente controlava o *tempo*. Esperar o cliente dá a ele poder de veto sobre o relógio da simulação. Correto: o servidor avança no próprio relógio, efeitos expiram por carimbo de tempo do servidor e entrada atrasada é descartada ou reconciliada.
7. **Injeção de HTML no chat (out/2021).** **[F]** O chat interpretava como HTML o texto digitado, sem "escapar" caracteres como `<`. Dava para exibir imagens dos arquivos do jogo na tela dos outros, pôr uma caixa gigante sobre a cabeça e derrubar o jogo de quem passasse o mouse sobre uma linha maliciosa ([Inven Global, 29/10/2021](https://www.invenglobal.com/articles/15523/new-world-players-discover-potentially-game-breaking-code-injection-exploits)). Um consultor de risco de TI disse que os devs "should be ashamed of themselves" ([Inven Global](https://www.invenglobal.com/articles/15527/it-consultant-responds-new-world-code-injection-exploit)). A Amazon fez uma correção por região ([dev blog](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues); [PC Gamer](https://www.pcgamer.com/new-world-players-are-crashing-the-game-with-malicious-chat-exploit)). **[H]** É a mesma classe de falha do XSS na web. Num jogo de **navegador** seria pior: script injetado pode roubar a sessão e, com ela, itens que valem dinheiro. Correto: escapar por padrão, lista fechada de formatação permitida e CSP.

### 10.3 Síntese

- **[F]** O diretor Scot Lane disse que a equipe só soube dos dupes depois do lançamento, que não dava para testar naquela escala e que adiar não teria ajudado ([Mein-MMO, 11/12/2021](https://mein-mmo.de/en/new-world-this-is-what-the-ceo-says-about-the-criticism-that-amazon-should-have-postponed-the-release,761769)). A IBTimes, porém, relatou que um dos exploits vinha do beta aberto ([IBTimes](https://www.ibtimes.com/new-worlds-auction-house-disabled-over-gold-duplication-exploit-3329264)).
- **[F]** A Amazon não fez *rollback* geral. Baniu, removeu o ouro duplicado das companhias exploradoras e prometeu compensar as prejudicadas ([dev blog](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues)).
- **[F]** No fim, a decisão foi corporativa: segundo a Bloomberg, citada pelo Engadget, a divisão de games reduziria projetos de grande orçamento, sobretudo MMOs. A Amazon disse ter chegado a um ponto em que seguir com conteúdo novo era "no longer sustainable" ([Engadget, 30/10/2025](https://www.engadget.com/amazon-is-winding-down-its-still-popular-new-world-mmo-amid-mass-layoffs-150500426.html)).
- **[H]** As causas se somaram: lançamento enorme em mundos pequenos, que exigiu fusões destrutivas; economia frágil (escassez de ouro somada aos dupes); resposta de "desligar tudo", que puniu todos; e fim de jogo raso. As falhas técnicas não mataram o jogo sozinhas, mas queimaram a confiança no momento de maior público.

## 11. Do que os jogadores mais reclamam

- **[C]** Hoje: o encerramento sem reembolso. Das 10 avaliações negativas mais úteis do Steam (consultadas em nov/2026), 7 tratam do fim do jogo, e uma cita o movimento Stop Killing Games ([Steam](https://steamcommunity.com/app/1063730/negativereviews/?browsefilter=toprated); [PC Gamer](https://www.pcgamer.com/games/mmo/new-world-is-dead-amazon-ends-new-content-updates-following-massive-layoffs-says-servers-will-be-live-through-2026/)).
- **[C]** Em 2021: os dupes e a resposta a eles. Houve pedidos de *rollback* ([Massively OP](https://massivelyop.com/?p=359153)), críticas de que só os descuidados eram banidos ([Mein-MMO](https://mein-mmo.de/en/new-world-permanently-bans-gold-cheaters-but-apparently-only-the-stupid-ones,743101)) e queixas de que a solução era sempre fechar o comércio de todos ([Steam](https://steamcommunity.com/app/1063730/discussions/0/3275813284144321004)).
- **[C]** Balanceamento de PvP e o grind da marca d'água no fim de jogo ([avaliação no Steam, 20/11/2021, entre as mais úteis](https://steamcommunity.com/app/1063730/negativereviews/?browsefilter=toprated); [PC Gamer, 2022](https://www.pcgamer.com/the-state-of-new-world-in-2022-things-arent-looking-great)).

## 12. Mecânicas-chave: o porquê

- **Mercado por cidade com moeda única** — Resolve: dá uma economia legível, com preços locais · Emoção: sensação de mundo vivo · Incentiva: especialização e comércio · Efeito colateral: um dupe contamina todos os preços do mundo.
- **Botão de emergência da economia (desligar toda transferência)** — Resolve: estanca um dupe ativo · Emoção: alívio para quem teme inflação, raiva para quem vive de comércio · Incentiva: estocar e esperar · Efeito colateral: abriu um dupe novo e puniu todos pela culpa de poucos.
- **Mundos de 2.000 vagas com território** — Resolve: escala política e PvP com sentido · Emoção: pertencimento a uma facção · Incentiva: guerra de guildas · Efeito colateral: a queda de público força fusões, que apagam conquistas.
- **Mundos *Fresh Start*** — Resolve: o novato que chega a uma economia velha e inflacionada · Emoção: largada justa · Incentiva: retorno em massa · Efeito colateral: esvazia os mundos antigos (fusão 13→6 um mês depois).
- **Trava de comércio para contas novas (72 h / nível 10)** — Resolve: personagem descartável usado como "mula" de vendedor de ouro · Emoção: atrito pequeno para o novato · Incentiva: bots a "envelhecer" contas · Efeito colateral: barreira contornável. Ajuda, mas não basta.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - **[H]** Banir e remover o valor duplicado, sem *rollback* geral, preserva o honesto. Isso só é possível se cada moeda e cada item puderem ser rastreados até a origem.
  - **[H]** Temporadas e servidores de recomeço são a ferramenta de retorno mais forte do caso. Funcionam porque devolvem igualdade, não porque trazem conteúdo.
  - **[H]** Travas para contas novas (idade, nível, missão) são camadas baratas e úteis contra mulas de RMT ilegal.
- **Evitar:**
  - **[H]** Desligar a economia inteira por um bug local. O desligamento tem de ser por sistema e testado antes de ser necessário.
  - **[H]** Mostrar texto de jogador como HTML. No navegador, isso é XSS com itens de valor real em jogo.
  - **[H]** Abrir mercado e RMT sem caça a dupes antes do lançamento (*red team* de economia, *bug bounty*) e sem teste de carga.
- **Checklist técnico (servidor autoritativo e transações atômicas não são opcionais) [H]:**
  1. Livro-razão de dupla entrada: todo crédito tem um débito, cada transação soma zero e os saldos são derivados do livro.
  2. Toda troca, compra no mercado ou leilão roda numa única transação do PostgreSQL, com travas em ordem fixa e chave de idempotência por pedido.
  3. Item com ID único e uma localização só, garantida por restrição no banco. "Mover" atualiza o dono, nunca cria uma cópia.
  4. Relógio do servidor para progresso offline, efeitos e cooldowns. O cliente só envia intenções.
  5. Alarmes de criação de valor: massa monetária e itens raros por hora, conferência contínua entre o livro e os saldos.
  6. Chat e nomes escapados por padrão, com CSP no cliente web.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| New World (Aeternum) | PC | Híbrido | Não | 0 | Ativo | Profundo | Troca+Livro | Não | Nenhum | Sim | Síncrono+Território | Sim | Sim | Não | Não | Sim | Não | Sim | Declínio |

Notas: "Perda de itens" = durabilidade (o dev blog cita a perda de durabilidade no PvP). "Gacha: Não" porque não encontrei caixas pagas na loja **[NV]**. "Declínio" porque o jogo segue online até 31/1/2027, já sem desenvolvimento.

## Fontes

Todos os links foram acessados em novembro de 2026.

1. [New World (video game)](https://en.wikipedia.org/wiki/New_World_(video_game)) — wiki — consultada em nov/2026.
2. [SteamCharts: New World](https://steamcharts.com/app/1063730) — dados — série out/2021 a out/2026.
3. [Polygon: filas e servidores no lançamento](https://www.polygon.com/22700460/new-world-server-mmo-queue-times-amazon-game-studios) — imprensa — 29/9/2021.
4. [Game Rant: filas de lançamento](https://gamerant.com/new-world-long-queue-times/) — imprensa — 28/9/2021.
5. [Fextralife: Trading Post](https://newworld.wiki.fextralife.com/Trading+Post) — wiki — s/d.
6. [Dev blog: update on current issues (devtrackers)](https://devtrackers.gg/new-world/p/f65cddfc-dev-blog-update-on-current-issues) — oficial (espelho) — nov/2021.
7. [Luxendra: how server-client authority is handled (devtrackers)](https://devtrackers.gg/new-world/p/f2ab12db-notice-how-server-client-authority-is-handled-in-new-world) — oficial (espelho) — out/2021.
8. [NME: "not client authoritative"](https://www.nme.com/news/new-world-is-not-client-authoritative-but-server-based-says-amazon-3083389) — imprensa — 31/10/2021.
9. [PC Gamer: invulnerabilidade](https://pcgamer.com/new-world-invincibility-exploit) — imprensa — out/2021.
10. [AltChar: tese do cliente autoritativo](https://www.altchar.com/game-news/new-worlds-client-authority-is-causing-many-hacks-and-exploits-a5J972B9Wo6x) — imprensa — 19/10/2021.
11. [Mein-MMO: dupe na transferência de servidor](https://mein-mmo.de/en/players-are-allegedly-exploiting-a-bug-in-new-world-raking-in-endless-amounts-of-gold-thanks-to-server-transfer,738789) — imprensa — 21/10/2021.
12. [Inven Global: injeção de código no chat](https://www.invenglobal.com/articles/15523/new-world-players-discover-potentially-game-breaking-code-injection-exploits) — imprensa — 29/10/2021.
13. [Inven Global: consultor de TI](https://www.invenglobal.com/articles/15527/it-consultant-responds-new-world-code-injection-exploit) — imprensa — out/2021.
14. [PC Gamer: correção do exploit do chat](https://www.pcgamer.com/new-world-players-are-crashing-the-game-with-malicious-chat-exploit) — imprensa — out/2021.
15. [PCGamesN: congelamento cria novo dupe](https://www.pcgamesn.com/new-world/gold-exploit) — imprensa — 2/11/2021.
16. [IBTimes: mercado desligado](https://www.ibtimes.com/new-worlds-auction-house-disabled-over-gold-duplication-exploit-3329264) — imprensa — 2/11/2021.
17. [PCGamesN: notas do patch 1.0.5](https://www.pcgamesn.com/new-world/update-105-patch-notes) — imprensa — nov/2021 (atualizado em 2022).
18. [Vulkk: patch 1.0.5](https://vulkk.com/2021/11/04/new-world-update-1-05-changes-overview-and-patch-notes/) — imprensa — 4/11/2021.
19. [Mein-MMO: comércio desligado de novo (casa)](https://mein-mmo.de/en/new-world-disables-player-to-player-trading-again-item-duplication-is-to-blame,749114) — imprensa — 15/11/2021.
20. [DBLTap: dupe na decoração](https://www.dbltap.com/posts/new-world-economy-down-again-following-yet-another-duplication-glitch-discovery-01fmj70whkpn) — imprensa — 15/11/2021.
21. [MMOBomb: mais de 1.200 banidos](https://mmobomb.com/news/new-world-drops-hammer-more-1200-exploiters) — imprensa — nov/2021.
22. [PC Gamer: 1.200 banimentos permanentes](https://www.pcgamer.com/new-world-permabans-over-1200-accounts-for-duping-exploits) — imprensa — nov/2021.
23. [PiunikaWeb: transferências desligadas (mar/2022)](https://piunikaweb.com/2022/03/04/new-world-wealth-transfers-disabled-to-address-item-duplication-exploit/) — imprensa — 4/3/2022.
24. [NME: fusões de mundos](https://www.nme.com/news/new-world-announces-more-player-world-mergers-3121580) — imprensa — 18/12/2021.
25. [PC Gamer: fusão de mundos antigos após o Fresh Start](https://www.pcgamer.com/new-world-is-jamming-a-bunch-of-legacy-servers-together-after-players-flock-to-fresh-start-options) — imprensa — dez/2022.
26. [Massively OP: data do Fresh Start](https://massivelyop.com/?p=408536) — imprensa — out/2022.
27. [Fresh Start: plano e FAQ](https://www.newworld.com/en-us/news/articles/fresh-start-world-rollout-plan-and-faq) — oficial — 2022.
28. [Mein-MMO: Scot Lane sobre o adiamento](https://mein-mmo.de/en/new-world-this-is-what-the-ceo-says-about-the-criticism-that-amazon-should-have-postponed-the-release,761769) — imprensa (entrevista) — 11/12/2021.
29. [MMORPG.com: fim do desenvolvimento](https://www.mmorpg.com/news/new-world-aeternum-ending-development-with-season-10-after-amazon-layoffs-servers-remain-through-2026-2000136447) — imprensa — 28/10/2025.
30. [Engadget: Amazon encerra o New World](https://www.engadget.com/amazon-is-winding-down-its-still-popular-new-world-mmo-amid-mass-layoffs-150500426.html) — imprensa — 30/10/2025.
31. [PC Gamer: "New World is dead"](https://www.pcgamer.com/games/mmo/new-world-is-dead-amazon-ends-new-content-updates-following-massive-layoffs-says-servers-will-be-live-through-2026/) — imprensa — 28/10/2025.
32. [The Future of New World: Aeternum – What to Expect](https://www.newworld.com/en-us/news/articles/the-future-of-new-world-aeternum-what-to-expect) — oficial — 15/1/2026.
33. [PCGamesN: preço do passe](https://www.pcgamesn.com/new-world/season-pass-price) — imprensa — 2023.
34. [GamingBolt: início das temporadas](https://gamingbolt.com/?p=544564) — imprensa — 2023.
35. [Insider Gaming: preços do Aeternum](https://insider-gaming.com/new-world-aeternum/) — imprensa — 2024.
36. [SteamDB: Rise of the Angry Earth](https://steamdb.info/sub/1121877) — dados — s/d.
37. [Steam: avaliações negativas mais úteis](https://steamcommunity.com/app/1063730/negativereviews/?browsefilter=toprated) — comunidade — consultado em nov/2026.
38. [Steam: discussão sobre o fechamento das trocas](https://steamcommunity.com/app/1063730/discussions/0/3275813284144321004) — comunidade — s/d.
39. [Massively OP: pedidos de rollback](https://massivelyop.com/?p=359153) — imprensa — out/2021.
40. [Mein-MMO: banimentos só "dos descuidados"](https://mein-mmo.de/en/new-world-permanently-bans-gold-cheaters-but-apparently-only-the-stupid-ones,743101) — imprensa — nov/2021.
41. [PC Gamer: o estado do New World em 2022](https://www.pcgamer.com/the-state-of-new-world-in-2022-things-arent-looking-great) — imprensa — 2022.
42. [Fórum oficial: aviso sobre o Family Sharing](https://forums.newworld.com/t/notice-family-sharing-update/509393) — oficial (citado pela Wikipedia) — 4/11/2021.
43. [thepricer: preço](https://www.thepricer.org/how-much-does-new-world-aeternum-cost/) — fonte fraca — s/d.
