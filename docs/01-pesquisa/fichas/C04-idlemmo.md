# IdleMMO

| Campo | Valor |
|---|---|
| Grupo | C — Idle MMO de navegador com economia de jogadores |
| Desenvolvedora / publicadora | Galahad Creative Ltd (Londres, Inglaterra), a mesma empresa que hoje opera o SimpleMMO |
| Lançamento | Betas fechados em 2023; aberto a todos na web em 6/12/2023; iOS em 22/04/2024; Android em 15/05/2024 |
| Plataformas | Web, iOS e Android, com conta e progresso compartilhados |
| Modelo de negócio | F2P sem anúncios, com assinatura opcional (membership) revendável por ouro e loja de tokens |
| Status em 2026 | Estável (instalações constantes, atualizações frequentes, ainda em versão "0.x") |

> **Cartão-resumo (até 120 palavras):** IdleMMO é um MMO idle de "começar uma ação e voltar depois": 21 habilidades, combate automático, masmorras, chefes mundiais, pets, guildas e um mercado completo (listagens, ordens de compra, leilões e trocas diretas). Funciona porque transformou a assinatura em item negociável: quem paga vende o pergaminho de membership por ouro, e segundo o estúdio 65,2% dos jogadores conseguiram a assinatura assim, sem gastar dinheiro. Por trás disso há proteção econômica séria: taxas altas como principal dreno, preço mínimo e máximo por item e um "risco de troca" que barra RMT e transferência entre contas sem acusar ninguém. **Lição nº 1:** um token premium negociável só funciona se vier junto com um controle automático de trocas desequilibradas.

## 1. Loop central

- [F] O jogo se define como "fazer coisas enquanto você faz outras": escolher uma ação (minerar, pescar, cozinhar, batalhar), fechar o jogo e coletar depois. O guia de início já ensina a vender carvão no mercado para comprar isca e pescar ([wiki, Introdução](https://support.idle-mmo.com/wiki/getting-started/introduction)). O mercado faz parte do loop desde o primeiro minuto.
- [F] Há 21 habilidades. Coleta e refino alimentam combate, masmorras, chefes mundiais, pets, caça (*hunting*) e guildas ([site oficial](https://web.idle-mmo.com/); [wiki, habilidades](https://support.idle-mmo.com/wiki/skills/overview)).
- [F] No beta de 2023, caçar e batalhar era o recurso de que os testadores menos gostavam (cliques demais). As batalhas passaram a começar sozinhas, inclusive offline, com a vida caindo ao longo da luta e reposta por comida ([blog, set/2023](https://www.galahadcreative.com/blog/an-update-on-idlemmo-beta-testing-feedback-review-and-a-deep-dive-on-what-has-changed/)).

## 2. Camadas de progressão e prestígio

- [F] A progressão é cumulativa e sem reset do personagem:
  - níveis de habilidade e qualidades de equipamento;
  - masterias (pets, guilda, caça e masterias sazonais);
  - pontos de "Ascension", que regeneram e dão bônus;
  - a casa e suas construções.
  O mais próximo de prestígio é a evolução de pets: até 5 evoluções, cada uma volta o pet ao nível 1 e soma +5% permanentes, até +25% ([wiki, Pets](https://support.idle-mmo.com/wiki/pets/overview); [wiki, Membership](https://support.idle-mmo.com/wiki/character/membership)).
- [F] Classes de desafio: Forsaken tem −50% de EXP; Banished e Cursed são "ironman", sem mercado e sem troca de classe ([wiki, Classes](https://support.idle-mmo.com/wiki/character/classes)).
- [H] Sem prestígio, a longevidade depende de conteúdo novo (o [site](https://web.idle-mmo.com/) fala em 290 atualizações em três anos) e de metas sociais e econômicas. É um modelo "RuneScape idle", não de incremental.

## 3. Progresso offline

- [F] Teto idle atual: principal 6 h e alts 4 h; com membership, 8 h e 6 h. Classes sem mercado recebem o tempo do principal ([wiki, Membership](https://support.idle-mmo.com/wiki/character/membership); [patch 0.85.0](https://web.idle-mmo.com/patch-notes)). Construções da casa somam até +4 h, levando um membro a 12 h ([blog v0.64, fev/2026](https://www.galahadcreative.com/blog/idlemmo-v0-64-houses-and-villages/)).
- [F] Histórico do teto:
  - beta de 2023: gratuitos de 30 para 60 min; membros de 60 para 120 min ([blog, set/2023](https://www.galahadcreative.com/blog/an-update-on-idlemmo-beta-testing-feedback-review-and-a-deep-dive-on-what-has-changed/));
  - março de 2025: principal de 2–3 h para 6–8 h.
  O estúdio admitiu que exigir check-ins a cada poucas horas cansava e contrariava o que se espera de um idle ([blog, mar/2025](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/)).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1** — [F] O tutorial já é econômico (vender na primeira hora), e notificações push avisam quando a ação termina. O patch 0.86.4 (nov/2026) anunciou alertas opcionais de chefes mundiais ([patch notes](https://web.idle-mmo.com/patch-notes)).
- **D7** — [F] Recompensa diária num ciclo de 60 dias, com *magic find* por sequência: até 5% para gratuitos e 10% para membros. Recuperar a sequência em até 48 h custa 300 tokens ([wiki, Daily Rewards](https://support.idle-mmo.com/wiki/character/daily-reward)). O Shrine (altar comunitário) reinicia todo dia às 12:00 UTC ([wiki, Shrine](https://support.idle-mmo.com/wiki/community/shrine)).
- **D30** — [F] Campanhas funcionam como passe de batalha gratuito: as permanentes não expiram, e há quatro sazonais por ano ([wiki, Campaigns](https://support.idle-mmo.com/wiki/campaigns/overview)). Há temporadas de guilda de 60 dias ([wiki, Seasons](https://support.idle-mmo.com/wiki/guilds/seasons)) e ligas de grupo que pagam fragmentos ao top 25 ([wiki, Leagues](https://support.idle-mmo.com/wiki/community/leagues)).
- [F] Contra o FOMO: o Legacy Vault revende por fragmentos itens de campanhas com mais de 12 meses ([wiki, Merchants](https://support.idle-mmo.com/wiki/economy-and-trading/merchants)). O estúdio reconheceu reclamações sobre skins rotativas ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)).

## 5. Jogador ativo vs. jogador ausente

- [F] O ausente é protegido pelo teto idle e pelas filas: dá para entrar na fila de um chefe mundial até 2 h antes da luta ([wiki, World Bosses](https://support.idle-mmo.com/wiki/combat/world-bosses)). O ativo ganha com mercado, leilões, contratos e eventos de toque na tela ([patch 0.86.0-PB](https://web.idle-mmo.com/patch-notes)).
- [F] O "Exhaustion", que punia sessões longas, foi removido: cerca de 60% de quem passava de 20 h de jogo parava logo antes do limite ([blog, mar/2025](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/)).
- [F] Alts dentro da mesma conta: até 5 personagens e no máximo 3 rodando ações ao mesmo tempo (os sem mercado não contam). Alts precisam de nível total 150 para negociar ([wiki, Alt Characters](https://support.idle-mmo.com/wiki/character/alt-characters)).
- [H] O ausente se sente esperto pelas escolhas: qual habilidade deixar rodando, qual alt abastece o principal e quando listar. O ativo ganha na camada econômica, não no clique.

## 6. Economia e moedas

**Moedas.**
- [F] Ouro é a moeda de jogo.
- [F] Tokens são a moeda premium. Pelos termos de uso, não têm valor monetário e só podem ser gastos no jogo ([Termos de Uso](https://www.galahadcreative.com/policies/terms/idlemmo/)).
- [F] Shards (fragmentos) só vêm de jogo ([wiki, Merchants](https://support.idle-mmo.com/wiki/economy-and-trading/merchants)).
- [F] Marks financiam guildas ([wiki, Guilds](https://support.idle-mmo.com/wiki/guilds/overview)).
- [F] O Shrine converte tokens a 700 ouros por token, só para personagens com nível total 600 ou mais ([wiki, Shrine](https://support.idle-mmo.com/wiki/community/shrine)).

**O token de RMT oficial é a assinatura.**
- [F] A membership pode ser vendida a outros jogadores por ouro no mercado. O estúdio diz que esse é o centro do debate sobre pay-to-win, e que rejeitou proibir a venda, limitar a quantidade e fixar preço máximo ([blog "Our Monetisation Strategy", dez/2023, atualizado em nov/2025](https://www.galahadcreative.com/blog/our-monetisation-strategy/)).
- [F] Em mar/2026 havia cerca de 9.000 pergaminhos em circulação, e mais de 5.000 trocaram de mãos em 30 dias. O pergaminho virou moeda paralela: itens eram pagos com ele em vez de ouro, e assim nenhum ouro saía do jogo ([blog "IdleMMO Economic Changes", 21/03/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)).
- Preço do pergaminho em ouro: não encontrado.

**Desenho do mercado.**
- [F] Listagens com preço fixo, mais ordens de compra. Desde a 0.42.0-PB não se preenche uma ordem manualmente: ao listar, o sistema casa a listagem com as ordens existentes ([wiki, Market](https://support.idle-mmo.com/wiki/economy-and-trading/market)). A mudança acabou com o "PO bumping" feito com várias contas ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)).
- [F] Taxas e limites:
  - venda: 15% (12% para membros) ([wiki, Companion Exchange](https://support.idle-mmo.com/wiki/pets/companion-exchange), que aplica "as regras normais do mercado");
  - ordem de compra: 15%/12% não reembolsáveis, mais 0% a 8% conforme a duração (12 h a 14 dias);
  - 10 listagens e ordens (25 para membros), com expiração em 90 dias ([wiki, Market](https://support.idle-mmo.com/wiki/economy-and-trading/market)).
- [F] Cada item tem preço mínimo e máximo, e o risco de troca do vendedor pode subir o mínimo dele ([wiki, Market](https://support.idle-mmo.com/wiki/economy-and-trading/market)). Desde mar/2026, o valor de venda ao NPC (*vendor value*) é o piso ([blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)).
- [F] Trocas diretas: 13% (10% para membros) mais 10 ouros sobre o que cada lado põe, até 10 itens ([wiki, Trading](https://support.idle-mmo.com/wiki/economy-and-trading/trading)).
- [F] Leilões, para itens acima de 1 milhão de ouros de valor estimado ([wiki, Auctions](https://support.idle-mmo.com/wiki/economy-and-trading/auction)):
  - duram de 3 a 14 dias; criar custa 0,1% (entre 2.500 e 10.000 ouros), sem reembolso;
  - imposto de 12% sobre a venda (8% para membros);
  - reserva mínima de 75% do menor preço de mercado e teto de 95% da listagem mais barata;
  - um lance nos últimos 30 min reinicia o relógio para 30 min;
  - lances podem incluir itens;
  - não dá para dar lance no próprio leilão.
- [F] Sorteios (*giveaways*): itens acima de 50 mil ouros, entrada grátis, vencedor aleatório, vetados a contas de alto risco ([wiki, Giveaways](https://support.idle-mmo.com/wiki/economy-and-trading/giveaway)).
- [F] Pets têm mercado próprio, a Companion Exchange: preço mínimo por espécie, nível e evolução, e taxa de 15%/12%. Numa troca direta, quem recebe o pet precisa oferecer pelo menos esse mínimo ([wiki, Companion Exchange](https://support.idle-mmo.com/wiki/pets/companion-exchange); [wiki, Trading](https://support.idle-mmo.com/wiki/economy-and-trading/trading)).

**Risco de troca (*trading risk*), o mecanismo mais sofisticado do jogo** ([wiki, Trading](https://support.idle-mmo.com/wiki/economy-and-trading/trading)):
- [F] Cada troca recebe na hora um nível de risco (nenhum, mínimo, baixo, médio).
- [F] O cálculo considera o equilíbrio entre os lados e o valor unilateral acumulado: entre os dois jogadores, o que um vem dando a muitos e o que o outro vem recebendo de muitos.
- [F] O histórico é por conta, perde peso com o tempo e pode ser "pago de volta". Quanto mais risco, mais equilibrada a troca precisa ser, e no mercado o preço precisa ficar perto do valor estimado.
- [F] O rótulo "alto risco" é manual, posto por um administrador e visível no perfil. Exige trocas quase iguais, bloqueia leilões e sorteios e impede novos pagamentos ao jogo.
- [F] O valor estimado de mercado é recalculado toda noite com base nas vendas e trocas concluídas.
- [F] O objetivo declarado é barrar comércio por dinheiro real, golpes e transferência de riqueza com contas secundárias.

**Fontes e drenos** ([blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)):
- [F] O maior dreno é o imposto; a principal fonte de ouro é a venda ao NPC.
- [F] Com o *vendor value* baixo, transferir itens raros entre jogadores saía quase de graça. Em mar/2026, o estúdio subiu esses valores, e os primeiros dados mostraram o imposto de troca dobrando em alguns dias e triplicando em outros.
- [F] O estúdio cita o SimpleMMO como exemplo de inflação a evitar, um jogo em que o ouro deixou de pesar nas decisões.
- [F] Erro admitido: o Bartering dava até 300 mil de EXP por entrega e levou jogadores a descartar itens míticos.
- [F] Outros drenos: a taxa de empréstimo de equipamento, removida do jogo ([wiki, Item Loaning](https://support.idle-mmo.com/wiki/items/item-loaning)); o Shrine, com camadas de 250 mil a 1,1 milhão de ouros por dia; e a casa ([blog v0.64](https://www.galahadcreative.com/blog/idlemmo-v0-64-houses-and-villages/)).

**Bots, multicontas e RMT.**
- [F] O Código de Conduta permite uma conta por pessoa e proíbe bots, macros, raspagem de dados e acesso às APIs internas. Também proíbe trocar itens ou serviços por dinheiro real e exige que trocas entre moradores da mesma casa sejam justas ([Código de Conduta](https://web.idle-mmo.com/legal/code-of-conduct)).
- [F] Vender a conta exige aprovação por escrito ([Termos de Uso](https://www.galahadcreative.com/policies/terms/idlemmo/)).
- [F] Segundo o estúdio, a trapaça principal são cadeias de multicontas que canalizam itens para uma conta principal, mais do que automação. A punição costuma ser banimento com remoção dos itens ([blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)).
- [F] As verificações anti-bot passaram a aparecer bem menos nos patches 0.84.0 e 0.86.2 ([patch notes](https://web.idle-mmo.com/patch-notes)).

**Ferramentas da comunidade.**
- [F] Há uma API pública para desenvolvedores desde ago/2025 ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)).
- [F] Um pedido de mar/2026 na BetaHub pede endpoints de leitura do mercado, o que sugere que eles não existiam ([BetaHub](https://app.betahub.io/projects/pr-0465627851/feature_requests/433), visto via busca).
- [NV] A documentação da API (renderizada em JavaScript) não abriu, então os endpoints não foram confirmados.

## 7. Social

- [F] Guildas ([wiki, Guilds](https://support.idle-mmo.com/wiki/guilds/overview); [wiki, Challenges](https://support.idle-mmo.com/wiki/guilds/challenges); [wiki, Raids](https://support.idle-mmo.com/wiki/guilds/raids)):
  - 20 a 25 membros e cinco cargos;
  - desafios diários de doação de itens, raids agendadas com lobby, estoque comum, Guild Hall e Armoury.
- [F] Conquista (*conquest*): durante um assalto, cada inimigo derrotado na zona rende 5% da EXP do jogador para a guilda. As 10 guildas com mais EXP numa zona a governam na temporada seguinte, com bônus de até +25% de EXP e *magic find*. Cada onda dura 1 h e custa 1 Mark ([wiki, Conquest](https://support.idle-mmo.com/wiki/guilds/conquest)). Temporadas de 60 dias pagam Marks ao top 25 ([wiki, Seasons](https://support.idle-mmo.com/wiki/guilds/seasons)).
- [F] Sair da guilda gera espera de 24 h, e só quem estava presente quando um contrato foi gerado pode contribuir com ele ([patch 0.84.0-PB](https://web.idle-mmo.com/patch-notes)). [H] É uma trava contra *guild hopping*.
- [F] Chefes mundiais: 11 permanentes (nível 1 a 95), lutas de 10 a 28 min e reaparecimento a cada 8 a 18 h. São a principal fonte de ovos de pet, com chances que caem até 0,033%, e há chefes extras sazonais ([wiki, World Bosses](https://support.idle-mmo.com/wiki/combat/world-bosses)). Está prevista a invocação de chefes pelas guildas ([wiki, Guilds](https://support.idle-mmo.com/wiki/guilds/overview)).
- [F] PvP é opcional: a guerra de vilas exige entrada voluntária, prende o jogador por 30 dias e deixa o vencedor saquear recursos e danificar construções ([blog v0.64](https://www.galahadcreative.com/blog/idlemmo-v0-64-houses-and-villages/)). Seus próprios personagens não podem se atacar ([wiki, Alt Characters](https://support.idle-mmo.com/wiki/character/alt-characters)).
- [F] Comunidade: Shrine, metas comunitárias sazonais, concurso por equipes, Tavern (chat), correio, grupos e ligas ([wiki, Campaigns](https://support.idle-mmo.com/wiki/campaigns/overview)).
- [F] Em dez/2025: 1.009 guildas e 234 guild halls ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)).

## 8. Monetização

- [F] Preços na App Store dos EUA: Membership a US$ 6,99 por 30 dias; tokens de 250 por US$ 6,99 a 2.500 por US$ 69,99 ([App Store](https://apps.apple.com/us/app/id6469646231)). A assinatura renova sozinha todo mês, e reembolso só vale em até 24 h e com os tokens intactos ([Termos de Uso](https://www.galahadcreative.com/policies/terms/idlemmo/)).
- [F] Benefícios da membership ([wiki, Membership](https://support.idle-mmo.com/wiki/character/membership)):
  - +2 h de idle, +15% de EXP e +10% de eficiência;
  - +7 espaços de inventário e +7 de pets;
  - taxas menores no mercado (15%→12%) e nas trocas (13%→10%), e 25 listagens;
  - 200 tokens na primeira assinatura e 100 por mês.
- [F] Tokens compram skins, espaços (um personagem extra custa 500 tokens) e conveniências ([wiki, Alt Characters](https://support.idle-mmo.com/wiki/character/alt-characters); [wiki, Merchants](https://support.idle-mmo.com/wiki/economy-and-trading/merchants)).
- [F] Números e decisões do estúdio ([blog](https://www.galahadcreative.com/blog/our-monetisation-strategy/)):
  - tokens rendem cerca de 17% da receita, e a membership, a maior parte;
  - não há anúncios: são invasivos e rendem pouco;
  - preço único foi descartado porque até US$ 0,99 mataria os downloads;
  - áreas só para membros, ao estilo do OSRS, foram testadas no beta e abandonadas por marginalizar os gratuitos;
  - princípio declarado: ninguém deve comprar progresso mais rápido do que o jogo permite.
- [F] Não há gacha nem passe pago: as Campaigns são gratuitas ([wiki, Campaigns](https://support.idle-mmo.com/wiki/campaigns/overview)).

## 9. Números disponíveis (com fonte)

- [F] "Jogando agora: 6.391", contador ao vivo do site oficial em 06/11/2026; número do próprio desenvolvedor ([site oficial](https://web.idle-mmo.com/)).
- [F] "Mais de 500.000 jogadores", alegação de marketing na App Store, onde a nota é 4,8 com 749 avaliações (nov/2026) ([App Store](https://apps.apple.com/us/app/id6469646231)).
- [F] Android: cerca de 565 mil instalações, nota 4,54 com 15 mil avaliações e +14 mil instalações em 4 semanas (tendência "estável"). A receita estimada fica abaixo de US$ 10 mil por mês. São estimativas da AppGoblin, rastreador de terceiros, em 04/11/2026 ([AppGoblin](https://appgoblin.info/apps/dawsn.idlemmo)). [H] A estimativa de receita é frágil: ignora vendas web e conflita com o peso declarado da membership.
- [F] Pré-lançamento (set/2023): mais de 2.100 pré-registros e mais de 1.200 membros no Discord, sem marketing pago ([blog, set/2023](https://www.galahadcreative.com/blog/an-update-on-idlemmo-beta-testing-feedback-review-and-a-deep-dive-on-what-has-changed/)).
- [F] 65,2% dos jogadores obtiveram membership com ouro (dado do estúdio, nov/2025) ([blog](https://www.galahadcreative.com/blog/our-monetisation-strategy/)).
- [F] Equipe nos créditos: três desenvolvedores (o líder é Michael "Galahad" D.), além de designer e artistas ([wiki, Credits](https://support.idle-mmo.com/wiki/more/credits)). O servidor fica em Londres, com latência admitida para Índia e Sudeste Asiático ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)).
- Não encontrado: receita total, DAU/MAU e o preço do pergaminho em ouro.

## 10. Por que deu certo (ou por que falhou)

- [H] **Herança:** nasceu do estúdio do SimpleMMO, com público pronto no Discord e sem marketing pago.
- [H] **Monetização que o gratuito aceita:** a membership negociável sustenta o discurso "não é P2W", repetido por jogadores ([App Store, avaliações](https://apps.apple.com/us/app/idlemmo-online-idle-rpg/id6469646231?see-all=reviews&platform=iphone)), enquanto a receita vem de quem prefere pagar a farmar.
- [H] **Iteração ouvindo a comunidade, sem abrir mão da visão:** o teto idle foi de 30 min a 6–12 h; as áreas de membros e o Exhaustion caíram; as ordens de compra passaram a ser casadas automaticamente. Reviews elogiam a visão consistente do desenvolvedor ([IncrementalDB](https://www.incrementaldb.com/community/review/7745)).
- [H] **Economia tratada como produto:** as decisões econômicas são explicadas com dados ([blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)), o que gera confiança no mercado.
- [H] **Riscos:** equipe pequena, servidor único, versão 0.x e dependência de conteúdo novo, já que não há prestígio.

## 11. Do que os jogadores mais reclamam

- [C] **"Não é idle de verdade" / teto curto.** Um usuário escreveu em mai/2024 que o jogo só aguentava cerca de uma hora sozinho ([AlternativeTo](https://alternativeto.net/software/idlemmo/about)). Testadores do beta pediram 5 a 8 h ([blog, set/2023](https://www.galahadcreative.com/blog/an-update-on-idlemmo-beta-testing-feedback-review-and-a-deep-dive-on-what-has-changed/)), e o estúdio admitiu a frustração ([blog, mar/2025](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/)). Mitigado com 6–12 h.
- [C] **Verificação anti-bot frequente.** Aparece em reviews da [Google Play](https://play.google.com/store/apps/details?id=dawsn.idlemmo&hl=en_US) vistas via busca, e o estúdio reduziu a frequência duas vezes ([patch notes](https://web.idle-mmo.com/patch-notes)).
- [C] **Membership: P2W ou cara demais?** O estúdio reconhece que a venda de membership por ouro é o centro do debate ([blog](https://www.galahadcreative.com/blog/our-monetisation-strategy/)). Em 10 reviews visíveis da App Store, 2 dizem que o jogo não é P2W ([App Store](https://apps.apple.com/us/app/idlemmo-online-idle-rpg/id6469646231?see-all=reviews&platform=iphone)). Reviews da Google Play vistas via busca acham a assinatura cara pelo que entrega.
- [C] **Tédio entre ações e bugs.** Nas mesmas 10 reviews, 1 reclama do tédio e 2 de tela preta ao voltar do segundo plano. Amostra pequena ([App Store](https://apps.apple.com/us/app/idlemmo-online-idle-rpg/id6469646231?see-all=reviews&platform=iphone)).
- [F] **Problemas admitidos pelo estúdio:** skins rotativas (FOMO), latência fora da Europa ([blog, retrospectiva 2025](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/)) e listagens reajustadas que fizeram jogadores perder valor ([blog, mar/2026](https://www.galahadcreative.com/blog/idlemmo-economic-changes/)).
- [NV] Threads do Reddit não foram encontradas: o old.reddit ficou inacessível e as buscas voltaram vazias. O sentimento da comunidade está sub-amostrado.

## 12. Mecânicas-chave: o porquê

**Membership revendável por ouro** — Problema que resolve: monetizar sem excluir quem não paga · Emoção: "conquistei a assinatura jogando" · Comportamento: o pagante vira fornecedor de liquidez, e o gratuito farma para comprar tempo · Efeito colateral: o pergaminho vira moeda paralela e escapa do imposto.

**Risco de troca por histórico unilateral** — Problema: RMT, multicontas e golpes sem punir inocentes · Emoção: segurança sem estigma · Comportamento: trocas equilibradas e retribuição · Efeito colateral: opacidade, porque o jogador não vê o próprio histórico, e atrito com presentes legítimos.

**Faixa de preço por item ancorada num valor estimado diário** — Problema: transferir riqueza com preço absurdo · Emoção: um mercado justo · Comportamento: preços perto da referência · Efeito colateral: estimativas ruins para itens raros, e mudar a base mexe em listagens antigas.

**Ordem de compra casada automaticamente, com taxa não reembolsável** — Problema: "PO bumping" e spam de ordens · Emoção: previsibilidade · Comportamento: ordens mais pensadas · Efeito colateral: menos controle para o trader fino.

**Classes sem mercado com bônus idle** — Problema: acomodar quem quer jogar sozinho (ironman) sem afetar a economia · Emoção: desafio e identidade · Comportamento: alts sem mercado não contam no limite de ações · Efeito colateral: nenhum relevante encontrado.

**Sorteio aleatório e leilão com relógio estendido** — Problema: dar canais de doação e venda de itens caros que não sirvam para entregar RMT · Emoção: generosidade pública e disputa · Comportamento: itens raros circulam à vista de todos · Efeito colateral: [H] o sorteio, sem taxa, não drena ouro.

## 13. Lições para o nosso jogo

- **Absorver (o porquê):**
  - Um token premium negociável (assinatura ou *bond*) é a forma de RMT oficial mais aceita num idle de navegador: o gratuito ganha acesso, e o pagante compra tempo de outros jogadores, não poder.
  - "Risco de troca" por par e por direção, com decaimento e retribuição, mais faixa de preço por item: a melhor referência pública encontrada contra RMT paralelo e multicontas sem tratar o honesto como suspeito.
  - Imposto como dreno principal, desde que a base acompanhe o valor real de mercado, e não o *vendor value*.
  - Alts dentro de uma única conta, com limites, canalizam o desejo de multiconta para algo controlável.
  - Explicar as decisões econômicas com dados gera confiança no mercado.
- **Evitar:**
  - Token premium que circula várias vezes sem imposto, porque vira moeda paralela. [H] Saídas possíveis: taxar cada transferência ou travar o token depois da primeira venda.
  - Teto idle curto num jogo vendido como idle (reclamação nº 1 desde o beta).
  - EXP proporcional ao valor de venda ao NPC, que leva o jogador a destruir itens raros.
  - Reajustar listagens existentes quando a base muda: melhor removê-las e devolver o item.
  - Servidor único longe do público: para o Brasil, latência é requisito de produto.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| IdleMMO | Web+Mobile | Híbrido | Parcial | 0 | Auto | Profundo | Troca+Listagem+Livro+Leilão | Sim | Token | Sim | Assíncrono+Território | Sim | Sim | Não | Não | Não | Sim | Não | Estável |

Notas: "Livro" = ordens de compra casadas automaticamente com as listagens; "Token" = pergaminho de membership comprado com dinheiro e vendido por ouro; "Passe: Não" porque as Campaigns são gratuitas; "Perda de itens: Não" para equipamentos (há decaimento de construções da casa e perda de recursos na guerra de vilas, que é opcional).

## Fontes

1. [IdleMMO, site oficial](https://web.idle-mmo.com/) — oficial — acessado em 06/11/2026.
2. [IdleMMO na App Store](https://apps.apple.com/us/app/id6469646231) — loja — nov/2026.
3. [IdleMMO na App Store, avaliações](https://apps.apple.com/us/app/idlemmo-online-idle-rpg/id6469646231?see-all=reviews&platform=iphone) — loja/comunidade — 2024–2026.
4. [IdleMMO na Google Play](https://play.google.com/store/apps/details?id=dawsn.idlemmo&hl=en_US) — loja (conteúdo visto via busca; a página não renderizou no WebFetch).
5. [AppGoblin, dawsn.idlemmo](https://appgoblin.info/apps/dawsn.idlemmo) — dados de terceiros — leitura de 04/11/2026.
6. [Termos de Uso do IdleMMO](https://www.galahadcreative.com/policies/terms/idlemmo/) — oficial — vigentes desde 27/11/2023, atualizados em 26/01/2024.
7. [Código de Conduta](https://web.idle-mmo.com/legal/code-of-conduct) — oficial.
8. [Patch notes](https://web.idle-mmo.com/patch-notes) — oficial — versões 0.83.5 a 0.86.4 (out–nov/2026).
9. [Wiki: Market](https://support.idle-mmo.com/wiki/economy-and-trading/market) — oficial — atualizado em 27/10/2026.
10. [Wiki: Trading](https://support.idle-mmo.com/wiki/economy-and-trading/trading) — oficial — 27/10/2026.
11. [Wiki: Auctions](https://support.idle-mmo.com/wiki/economy-and-trading/auction) — oficial — 27/10/2026.
12. [Wiki: Giveaways](https://support.idle-mmo.com/wiki/economy-and-trading/giveaway) — oficial — 27/10/2026.
13. [Wiki: Merchants](https://support.idle-mmo.com/wiki/economy-and-trading/merchants) — oficial — 27/10/2026.
14. [Wiki: Membership](https://support.idle-mmo.com/wiki/character/membership) — oficial — 27/10/2026.
15. [Wiki: Alt Characters](https://support.idle-mmo.com/wiki/character/alt-characters) — oficial — 28/10/2026.
16. [Wiki: Introduction](https://support.idle-mmo.com/wiki/getting-started/introduction) — oficial — 27/10/2026.
17. [Wiki: Classes](https://support.idle-mmo.com/wiki/character/classes) — oficial — 27/10/2026.
18. [Wiki: Skills overview](https://support.idle-mmo.com/wiki/skills/overview) — oficial.
19. [Wiki: World Bosses](https://support.idle-mmo.com/wiki/combat/world-bosses) — oficial — 27/10/2026.
20. [Wiki: Pets overview](https://support.idle-mmo.com/wiki/pets/overview) — oficial — 27/10/2026.
21. [Wiki: Companion Exchange](https://support.idle-mmo.com/wiki/pets/companion-exchange) — oficial — 27/10/2026.
22. [Wiki: Guilds](https://support.idle-mmo.com/wiki/guilds/overview) — oficial — 27/10/2026.
23. [Wiki: Conquest](https://support.idle-mmo.com/wiki/guilds/conquest) — oficial — 27/10/2026.
24. [Wiki: Seasons](https://support.idle-mmo.com/wiki/guilds/seasons) — oficial — 27/10/2026.
25. [Wiki: Challenges](https://support.idle-mmo.com/wiki/guilds/challenges) — oficial — 27/10/2026.
26. [Wiki: Raids](https://support.idle-mmo.com/wiki/guilds/raids) — oficial — 27/10/2026.
27. [Wiki: Leagues](https://support.idle-mmo.com/wiki/community/leagues) — oficial — 27/10/2026.
28. [Wiki: Shrine](https://support.idle-mmo.com/wiki/community/shrine) — oficial — 27/10/2026.
29. [Wiki: Daily Rewards](https://support.idle-mmo.com/wiki/character/daily-reward) — oficial — 27/10/2026.
30. [Wiki: Campaigns](https://support.idle-mmo.com/wiki/campaigns/overview) — oficial — 30/10/2026.
31. [Wiki: Item Loaning](https://support.idle-mmo.com/wiki/items/item-loaning) — oficial — 27/10/2026.
32. [Wiki: Credits](https://support.idle-mmo.com/wiki/more/credits) — oficial — 27/10/2026.
33. [Blog: Our Monetisation Strategy](https://www.galahadcreative.com/blog/our-monetisation-strategy/) — oficial — 20/12/2023, atualizado em 03/11/2025.
34. [Blog: IdleMMO Economic Changes](https://www.galahadcreative.com/blog/idlemmo-economic-changes/) — oficial — 21/03/2026.
35. [Blog: IdleMMO, A Year In Review (2025)](https://www.galahadcreative.com/blog/idlemmo-a-year-in-review-2025/) — oficial — 06/12/2025.
36. [Blog: Let's Talk About Idle Times](https://www.galahadcreative.com/blog/lets-talk-about-idle-times/) — oficial — 11/03/2025.
37. [Blog: IdleMMO v0.64, Houses and Villages](https://www.galahadcreative.com/blog/idlemmo-v0-64-houses-and-villages/) — oficial — 16/02/2026.
38. [Blog: An update on IdleMMO, beta testing](https://www.galahadcreative.com/blog/an-update-on-idlemmo-beta-testing-feedback-review-and-a-deep-dive-on-what-has-changed/) — oficial — 12/09/2023.
39. [Blog, página 2 do índice](https://www.galahadcreative.com/blog/2/) — oficial — lista "IdleMMO is now available to everyone!" (06/12/2023).
40. [AlternativeTo: IdleMMO](https://alternativeto.net/software/idlemmo/about) — comunidade — comentário de 15/05/2024.
41. [IncrementalDB: review do IdleMMO](https://www.incrementaldb.com/community/review/7745) — comunidade.
42. [BetaHub: pedido de endpoints de mercado na API](https://app.betahub.io/projects/pr-0465627851/feature_requests/433) — comunidade/oficial — mar/2026 (visto via busca).
