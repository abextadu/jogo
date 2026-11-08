# AFK Arena e AFK Journey

| Campo | Valor |
|---|---|
| Grupo | E — Idle/AFK RPGs mobile de alto faturamento (gacha) |
| Desenvolvedora / publicadora | Lilith Games (AFK Arena, China); Farlight Games, marca de publicação da Lilith criada em 2022 (AFK Journey) |
| Lançamento | AFK Arena: global em 9/abr/2019, China em jan/2020. AFK Journey: 2024 (global; China em 2024) |
| Plataformas | iOS, Android (AFK Arena também Steam) |
| Modelo de negócio | F2P com gacha de heróis, VIP, passes, assinaturas diárias, pacotes e (no AFK Arena) anúncios |
| Status em 2026 | AFK Arena: em declínio lento (cinco anos seguidos de queda). AFK Journey: estável/crescendo, já faturando bem mais que o original |

> **Cartão-resumo:** AFK Arena inventou o "idle de colecionar heróis": um baú que acumula recompensas enquanto o jogador está ausente, uma campanha em estágios como meta e um gacha de heróis por trás. Passou de US$ 1,5 bi de gasto vitalício (estimativa AppMagic). AFK Journey repetiu a fórmula com produção 3D e temporadas de ~4 meses, e superou o original. É um jogo de retenção quase perfeito e uma monetização em parte predatória: gacha caro, ranking que tranca recursos de fim de jogo e nerfs de recompensa que geram revolta. **Lição nº 1:** o baú AFK com teto de horas é o melhor gancho de login diário do gênero; o que o torna "vendável" (teto ampliado por VIP) é o que precisamos evitar.

## 1. Loop central

- **Idle de verdade é só o baú.** O AFK Arena acumula EXP, moedas e equipamento enquanto o jogador está fora, com taxa que cresce conforme o estágio da campanha [F] ([Deconstructor of Fun, 2019](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)). O combate em si é por turnos com habilidades automáticas, e o mesmo artigo critica o marketing "idle" como enganoso: o jogo é um RPG de times com elementos idle leves [F] (mesma fonte).
- **Campanha linear em estágios.** Os estágios não se repetem depois de limpos, há picos de dificuldade nos chefes, e os recursos desbloqueiam por progresso na campanha, não por nível de conta. Marcos de capítulo pagam gemas (cerca de 45.000 até a Região 19) [F] ([Deconstructor of Fun](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- **Ciclo diário:** coletar baú, fazer missões, tentar o chefe de guilda, subir na arena, avançar a campanha. [H] O loop é desenhado para 10 a 20 minutos por sessão, com o baú como "porta de entrada" de cada sessão.
- **AFK Journey** acrescenta mundo aberto de exploração, modos sazonais e visual 3D. A fonte da Naavik (análise de ~7 meses pós-lançamento) descreve a geração idle de recursos como o que "desacelera a progressão e dá motivo para voltar" [F] ([Naavik, Lessons Learned from AFK Journey](https://naavik.co/digest/lessons-learned-from-afk-journey/)).

## 2. Camadas de progressão e prestígio

- Não há prestígio clássico. A progressão vertical vem de **Ascension**: duplicatas de heróis fundem e elevam o teto de nível e os atributos [F] ([Deconstructor of Fun](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- O elenco inicial era pequeno (~48 heróis em 2019), então a maioria dos jogadores tinha rápido as versões base dos comuns e raros [F] (mesma fonte).
- **AFK Journey usa temporadas** de cerca de 4 meses que reiniciam a progressão para uma linha de base, o que evita inflação de poder, dá motivo de retorno a ausentes e nivela os jogadores [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)). É o equivalente funcional de um "prestígio sazonal".
- [H] Para nós: temporada que reinicia o *nível de poder*, mas preserva coleção e cosméticos, resolve power creep sem destruir o investimento.

## 3. Progresso offline

- **O baú tem teto de horas.** No AFK Arena, jogadores novos acumulam até cerca de 12 horas de recompensas e o teto sobe com certos níveis de VIP [C] (guia [AppGamer](https://www.appgamer.com/afk-arena/strategy-guide/afk-rewards), conforme trecho de busca; a página bloqueou o WebFetch; o Deconstructor of Fun confirma que VIP maior amplia a coleta mas não cita o número de horas).
- **AFK Journey:** a base era 16 horas e o patch 1.2.3 (nov/2024) a elevou de 16 para 168 horas [F] ([notas de patch oficiais 1.2.3](https://afkjourney-news.farlightgames.com/es/detail/68), lidas só via trecho de busca; a página redirecionou para o índice. Tratar o número com cautela; [guia Gameleap](https://gameleap.com/articles/afk-journey-best-afk-rewards-tips-for-fast-progression) traz o teto antigo de 16 h).
- **Por que o teto ancora o login diário:** [H] com 12 a 16 horas, quem dorme 8 horas e trabalha 8 não perde nada; quem pula um dia perde. O teto cria uma "janela de colheita" natural de 1 a 2 vezes ao dia, sem punir ausência curta. Subir para 168 horas muda a função: o baú deixa de ser compromisso diário e vira "pode voltar quando quiser" — bom para o ausente, ruim para DAU. O fato de a Farlight ter esticado o teto sugere que o compromisso diário estava gerando atrito (hipótese; sem fonte oficial do motivo).
- **Rewards crescem com o estágio:** o baú faz da campanha o único jeito de aumentar renda passiva [F] ([Deconstructor of Fun](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)). Ou seja, ativo e ausente são acoplados: a atividade melhora a renda do ausente.

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** recompensas iniciais generosas, que criam "apego a personagens" e hábito de campanha e missões [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/); [DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- **D7 a D30:** guilda (chefe em equipe, guerra), arena com reset de 14 dias, Labirinto com reset de 48 h, eventos limitados [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- **Dado de retenção do AFK Journey:** D60 de 7% contra 4% de mercado; ~70% de downloads orgânicos contra ~50% de mercado [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)). Retenção medida pela própria Naavik, sem detalhar metodologia.
- **Servidores segmentados:** novos jogadores caem em servidores novos com progresso parecido, criando rivalidades locais entre gastadores [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)). Isso é fusão e abertura de servidor usada como motor de gasto.

## 5. Jogador ativo vs. jogador ausente

- Ativo e ausente recebem o **mesmo tipo** de recompensa, só que o ausente recebe só o baú. O ativo ganha: missões, chefe de guilda (2 tentativas por membro), Labirinto, arena.
- **Pontos de Atividade de Guilda** premiam quem joga e são vistos como motor do engajamento de guildas [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)). A AFK Journey mostra "membros offline" no salão da guilda, uma pressão social leve [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).
- [H] O que o ausente "perde" é só o teto do baú. O que dói de verdade são as janelas de evento: quem não loga naquela semana perde a recompensa temporária.

## 6. Economia e moedas

- **Muitas moedas parecidas.** O DoF critica a economia "complicada demais, com várias moedas que fazem coisas parecidas" [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)). Um guia de comunidade defende que a Lilith criou moedas além dos diamantes para atenuar o pay-to-win [C] ([BlueStacks](https://www.bluestacks.com/blog/game-guides/afk-arena/guide-currencies-afk-en.html), via trecho de busca).
- **Sem mercado entre jogadores.** Não há troca de itens; a "economia" é toda de sistema, com lojas e moedas por modo (guilda, arena etc.). [H] Isso elimina RMT paralelo e bots de mercado, mas também elimina toda economia emergente: o oposto do que queremos.
- **Recursos de fim de jogo atrelados a ranking** são, segundo a Naavik, o maior gatilho de gasto do AFK Journey [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)). A mesma fonte afirma que maximizar um herói do zero custa "mais de US$ 1.000" (afirmação da Naavik, sem metodologia).

## 7. Social

- **Chefe de guilda (Team Hunting):** o líder gasta pontos do grupo para abrir a caçada; cada membro tem 2 tentativas; paga Guild Coins [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- **Guerra de guildas:** inscrição de 48 h, matchmaking de 1 h, cinco rodadas de um dia; exige guilda nível 2 e mais de 10 membros; ingressos fixos, com compra de extras; heróis escalam para nível 160 com equipamento mítico e os comuns ficam fora [F] (mesma fonte).
- **Arena:** ladder contra cópias offline (assíncrono), reset a cada 14 dias, vários arenas simultâneas, espectador do campeonato; recompensas pequenas, o que o DoF apontou como fraqueza do PvP [F] (mesma fonte).
- **Fusão de servidor:** não encontrei fonte pública com regras ou números de fusão para estes jogos (tentei buscas por "server merge" e fóruns oficiais; a Naavik só descreve a segmentação por progresso). [NV] A prática de abrir servidores novos e fundir depois é comum no gênero.

## 8. Monetização

- **Gacha:** AFK Arena tem pools por sorteio e por fragmento, com poço só de épicos, lista de desejos e barra de progresso de compra, mais um gacha de "corações" de amigos (10 por puxada) [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)). Para o AFK Journey, os guias de comunidade listam (abr/2024) taxa de herói em destaque de 3,0% na Rate Up, 2,05% para S-level na All-Hero e 5,22% para épico na Epic Recruitment; as taxas somam 99,9% na All-Hero, sinal de arredondamento ou erro de digitação [C] ([ESTNN, abr/2024](https://estnn.com/afk-journey-banners-explained-pity-rates-diamonds)). Piedade: a fonte confirma que existe e que reinicia ao obter o destaque; o número varia entre guias (30 na épica, 40 no Stargaze, 60 no All-Hero) [C] (guias citados nos resultados de busca, sem fonte oficial acessível). Prydwen, a fonte mais usada, bloqueou o acesso.
- **VIP:** só sobe com ofertas diárias, semanais e mensais. Níveis maiores dão mais baú AFK, mais slots de herói, mais tentativas de chefe de guilda e aceleração de batalha [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- **Passes e ofertas:** duas assinaturas diárias de gemas, "Advancement Rewards" de US$ 19,99 (gemas que não-pagantes não recebem) e "Regal Rewards" estilo passe de batalha a US$ 24,99, por 7 semanas [F] (DoF, fonte nº 1). Ofertas diárias, semanais, mensais e contextuais com desconto alto e preço baixo [F] (mesma fonte).
- **Pacotes iniciais baratos e depois mais caros:** a Naavik descreve bundles de baixo valor e alta percepção de valor no início, e empurrão a pacotes caros e a passes menos eficientes quando as recompensas desaceleram [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).
- **Banners limitados** com taxas melhores para heróis novos a cada temporada, no modelo Genshin [F] (Naavik). AFK Journey **não tem anúncios**; o AFK Arena tem [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/); [PocketGamer.biz, abr/2026](http://www.pocketgamer.biz/afk-arena-celebrates-seventh-anniversary-and-over-15bn-in-lifetime-earnings/)).
- **Acesso a probabilidades:** sobre divulgação, a Coreia exige a divulgação de probabilidades de itens por sorteio desde mar/2024 e prevê punições; aplicação contra empresas estrangeiras sem filial é lacuna conhecida [F] ([Asiae, mar/2024](https://www.asiae.co.kr/en/article/2024032208552867392); [Asiae, jan/2024](https://www.asiae.co.kr/en/article/2024010217184301389); resumo de busca: pena de até 2 anos ou multa de 20 mi de won). Na China, a divulgação é exigida desde 2016 segundo fontes secundárias; um estudo de conformidade achou que 96,9% dos 100 maiores jogos do iPhone na China divulgavam probabilidade para algum gacha, mas só 10,3% para todos [F] ([DiGRA, estudo comparativo do leste asiático](https://dl.digra.org/index.php/dl/article/view/2749)). A proibição de loot box a menores no Brasil já está coberta em `05b-rmt-legal-brasil.md`.

## 9. Números disponíveis (com fonte)

Todas são estimativas de terceiros, não números reais.

- **AFK Arena (AppMagic, via PocketGamer.biz, abr/2026):** mais de US$ 1,5 bi vitalícios; US$ 12,1 mi no primeiro mês; US$ 469,8 mi no primeiro ano; US$ 528,3 mi no segundo ano (pico anual); pico mensal jan/2020 com US$ 105,4 mi; queda por 5 anos seguidos; +US$ 28,8 mi no último ano. Exclui Steam e lojas Android fora da Google Play, e anúncios. Participação vitalícia: China 32%, EUA 24%, Coreia 11%, Japão 10% [F] ([PocketGamer.biz](http://www.pocketgamer.biz/afk-arena-celebrates-seventh-anniversary-and-over-15bn-in-lifetime-earnings/)).
- Contraste: a Sensor Tower estimou o pico mensal do AFK Arena em US$ 88,3 mi (jan/2020), segundo a Pandayoo; a diferença com o AppMagic é típica de metodologia (AppMagic desconta comissão e imposto) [C] (resultados de busca; metodologia não confirmada).
- **AFK Journey:** ~US$ 128 mi de IAP e 12 mi de downloads em ~7 meses, mais de 20% à frente do AFK Arena na mesma idade [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)). US$ 185 mi e 18 mi de downloads em alguma data posterior (AppMagic, via [MAF](https://maf.ad/en/blog/afk-journey-analysis/); a data exata não foi confirmada). Nova receita saltou 779% após a estreia na Ásia (US$ 7 mi em jul/2024 para US$ 61,5 mi em ago/2024, Sensor Tower, via [Mobilegamer.biz](https://mobilegamer.biz/data-digest-afk-journey-spikes-stillfront-splits-blackouts-buyout-robloxs-wild-ambitions-fresh-market-stats-more/)). Em 2025, quase dobrou a receita do AFK Arena [F] ([PocketGamer.biz](http://www.pocketgamer.biz/afk-arena-celebrates-seventh-anniversary-and-over-15bn-in-lifetime-earnings/)).
- **Comparação de pagamento:** o Legend of Mushroom rendeu US$ 243 mi em IAP no mesmo período, contra US$ 128 mi do AFK Journey, com ARPDAU comparável [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).

## 10. Por que deu certo

- **[H] Contrato claro com o tempo do jogador:** abrir, coletar, decidir, fechar. A recompensa visível do baú (números subindo) é o gancho.
- **Acoplamento ativo-ausente** pela campanha: o que o jogador faz ativamente melhora o que o jogo faz por ele.
- **Funil de gasto bem escalonado:** ofertas baratas, assinaturas, VIP que só sobe com gasto, e um fim de jogo travado em ranking [F] (DoF e Naavik acima).
- **Temporadas e servidores segmentados** mantêm o fim de jogo "novo" sem inflar poder [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).
- **AFK Journey** reproduziu o modelo com maior apelo visual e expandiu em mercados ocidentais primeiro, depois China [F] ([PocketGamer.biz](http://www.pocketgamer.biz/afk-arena-celebrates-seventh-anniversary-and-over-15bn-in-lifetime-earnings/)).

## 11. Do que os jogadores mais reclamam

- **Pay-to-win:** um resumo de reviews do AFK Arena (Game Brain) diz que parte dos jogadores acha que o jogo "pende para pay-to-win" e frustra os F2P [C] ([Game Brain](https://gamebrain.co/game/afk-arena-1); [unitq scorecard](https://unitq.com/unitq-scorecards/afkarena), ambos via busca, sem contagem própria).
- **Nerf de recompensas no AFK Journey (mai/2024):** ao começar a temporada Song of Strife, jogadores notaram recompensas reduzidas ou removidas em vários modos, e parte da comunidade pediu reembolso. A Lilith reverteu em 14/mai, alinhou recompensas ao conteúdo inicial, deu diamantes e cartas extras nos 1.200 primeiros estágios AFK da temporada e, em 16/mai, subiu outras recompensas e admitiu que o "valor" rotulado do passe Noble Path não correspondia ao real [C] ([Droid Gamers](https://www.droidgamers.com/news/afk-journey-adjusts-rewards-and-nerfs/); [Gameleap](https://www.gameleap.com/articles/afk-journey-season-controversy-compensation); [ESTNN](https://estnn.com/afk-journey-hotfix-may-16th-improves-seasonal-rewards); páginas Droid Gamers e Gameleap deram 403 no fetch, lidas só por trechos). Alguns chamaram a mudança de "shadow nerf".
- **Ritmo de conteúdo lento** no AFK Journey, por causa do alto padrão de produção [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).
- **Economia confusa, PvP fraco, "idle" enganoso** [F] ([DoF](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club)).
- Não consegui acessar Reddit (bloqueado) para contar reclamações em volume.

## 12. Mecânicas-chave: o porquê

**Baú AFK com teto de horas** — Problema: dar motivo para voltar sem exigir presença contínua · Emoção: expectativa de "recolher o saque" · Comportamento: 1 a 2 logins diários · Efeito colateral: o teto é monetizável (VIP estende) e vira pressão para quem trabalha em turnos.

**Campanha em estágios como meta e como multiplicador do baú** — Problema: metas curtas e claras · Emoção: progresso tangível ("só mais um estágio") · Comportamento: sessões de poucos minutos · Efeito colateral: muro de dificuldade em chefes que empurra para o gacha.

**VIP que só sobe com gasto** — Problema: reconhecer e premiar quem paga · Emoção: status e conveniência · Comportamento: compras recorrentes · Efeito colateral: o ausente não-pagante tem baú menor, ou seja, o ausente é punido por não pagar.

**Ranking que trava recursos de fim de jogo** — Problema: criar motivo de gasto de alto valor · Emoção: competição, medo de ficar para trás · Comportamento: baleias disputam topo · Efeito colateral: "a maior alavanca de gasto" é também a mais predatória [F] ([Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/)).

**Temporadas que reiniciam a progressão** — Problema: power creep e ausentes sem caminho de volta · Emoção: recomeço justo · Comportamento: retorno a cada ~4 meses · Efeito colateral: nerfs de recompensa de temporada geram revolta (caso de mai/2024).

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Baú de ausência com teto de horas **generoso** (algo como 12 a 24 h), idêntico para pagantes e não-pagantes, como âncora de login que não pune o ausente de forma abrupta.
  - Campanha em estágios que melhora a taxa do baú, ligando ativo e ausente.
  - Chefe de guilda com 2 tentativas por membro e guerra em rodadas diárias (cadência de 1 ação por dia por pessoa).
  - Temporadas de ~4 meses que reiniciam poder, mas preservam coleção.
  - Funil de preço escalonado: ofertas baratas e transparentes para a primeira compra.
- **Evitar:**
  - Gacha de herói com taxa de 2 a 5% e piedade variável; custo de "maximizar" na casa dos milhares de dólares.
  - VIP que aumenta o teto do baú (separa ausente pagante de ausente não-pagante).
  - Recursos de fim de jogo trancados em ranking.
  - Passe com "valor rotulado" diferente do real; nerf de recompensa no início de temporada.
  - Marketing de "idle" quando o jogo exige presença.
  - Gacha de qualquer forma em jogo com RMT oficial e menores: ver `05b-rmt-legal-brasil.md`.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AFK Arena / AFK Journey | Mobile | F2P | Parcial | 1 | Auto | Não | Nenhum | Não | Nenhum | Sim | Assíncrono | Sim | Sim | Sim | Sim | Sim | Sim | Não | Declínio (Arena) / Estável (Journey) |

## Fontes

1. [AFK Arena — Hail to the New King of RPGs, Deconstructor of Fun](https://www.deconstructoroffun.com/blog/2019/6/6/afk-arena-puts-lilith-into-the-billionaire-club) — análise — jun/2019.
2. [Lessons Learned from AFK Journey, Naavik](https://naavik.co/digest/lessons-learned-from-afk-journey/) — análise — 2024.
3. [AFK Arena celebrates seventh anniversary and over $1.5bn, PocketGamer.biz](http://www.pocketgamer.biz/afk-arena-celebrates-seventh-anniversary-and-over-15bn-in-lifetime-earnings/) — imprensa (dados AppMagic) — abr/2026.
4. [How AFK Journey Reached $185 Million, MAF](https://maf.ad/en/blog/afk-journey-analysis/) — análise (AppMagic) — data não confirmada.
5. [Data digest: AFK Journey spikes, Mobilegamer.biz](https://mobilegamer.biz/data-digest-afk-journey-spikes-stillfront-splits-blackouts-buyout-robloxs-wild-ambitions-fresh-market-stats-more/) — imprensa (Sensor Tower) — 2024.
6. [AFK Journey Banners Explained, ESTNN](https://estnn.com/afk-journey-banners-explained-pity-rates-diamonds) — comunidade/imprensa — abr/2024.
7. [AFK Journey 1.2.3 Patch Notes (Farlight)](https://afkjourney-news.farlightgames.com/es/detail/68) — oficial (lido só via trecho de busca) — nov/2024.
8. [AFK Journey best AFK rewards tips, Gameleap](https://gameleap.com/articles/afk-journey-best-afk-rewards-tips-for-fast-progression) — guia.
9. [AFK Rewards, AppGamer](https://www.appgamer.com/afk-arena/strategy-guide/afk-rewards) — guia (via trecho de busca).
10. [AFK Journey adjusts rewards and nerfs, Droid Gamers](https://www.droidgamers.com/news/afk-journey-adjusts-rewards-and-nerfs/); [Season Controversy Compensation, Gameleap](https://www.gameleap.com/articles/afk-journey-season-controversy-compensation); [Hotfix May 16, ESTNN](https://estnn.com/afk-journey-hotfix-may-16th-improves-seasonal-rewards) — imprensa/guia — mai/2024.
11. [Game Brain, AFK Arena](https://gamebrain.co/game/afk-arena-1); [unitq scorecard](https://unitq.com/unitq-scorecards/afkarena) — agregadores de reviews.
12. [Implementation of Mandatory Disclosure for Probability-Based Items, Asiae](https://www.asiae.co.kr/en/article/2024032208552867392); [Amendment to the Enforcement Decree, Asiae](https://www.asiae.co.kr/en/article/2024010217184301389) — imprensa — 2024.
13. [Compliance of Gacha Probability Disclosure Regulations: East Asia, DiGRA](https://dl.digra.org/index.php/dl/article/view/2749) — acadêmico.
14. [BlueStacks, AFK Arena currencies](https://www.bluestacks.com/blog/game-guides/afk-arena/guide-currencies-afk-en.html) — guia (via trecho de busca).
