# RMT, mercado entre jogadores e moeda premium fora do Brasil: riscos legais, meios de pagamento e lojas (nov./2026)

> **Escopo.** Mapear o que vale em novembro de 2026 fora do Brasil (União Europeia, Reino Unido, Estados Unidos, China, Coreia do Sul, Japão e Austrália) e nas regras privadas que, na prática, pesam tanto quanto a lei: bandeiras de cartão, gateways de pagamento e lojas de aplicativos. O objeto é o mesmo do estudo [05b](05b-rmt-legal-brasil.md): um RPG idle de navegador, online, com mercado entre jogadores, casa de leilão, moeda premium e possível RMT oficial (de token até saque em dinheiro), com público que pode incluir menores.
>
> **Perguntas que este estudo responde:** (1) Em cada mercado relevante, que normas pegam loot box, moeda premium, token, leilão em dinheiro, venda de personagem e saque? (2) Em que ponto a moeda do jogo vira serviço de pagamento, moeda eletrônica, transmissão de dinheiro ou jogo de azar? (3) O que bandeiras, gateways e lojas aceitam, e o que derruba a conta do estúdio? (4) Que diferença faz ser PWA em vez de app nas lojas? (5) O que levar a um advogado antes de fechar o modelo de RMT na Fase 2?
>
> **Aviso.** Este estudo **não é parecer jurídico**. Separa o que a norma ou a decisão diz **[F]** da nossa leitura **[H]**. Onde a leitura muda decisão de produto, está marcado **"validar com advogado"**. A lei brasileira não é pesquisada de novo: a coluna "Brasil" das tabelas resume o [05b](05b-rmt-legal-brasil.md).

## Resumo executivo

<!-- RESUMO: escrever ao final -->

---

## 1. União Europeia

### 1.1 Rede CPC: os princípios sobre moedas virtuais (2025) e as ações de 2026

**O que a norma diz**

- **[F] Correção de data:** os *Key Principles on In-game Virtual Currencies* da rede CPC (as autoridades nacionais de defesa do consumidor, coordenadas pela Comissão Europeia) foram publicados em **21/3/2025**, e não em 2024, junto com uma posição comum contra a Star Stable Entertainment ([Comissão Europeia, ações coordenadas sobre jogos](https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en); [PDF dos princípios](https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf)).
- **[F] Escopo:** moedas compradas com dinheiro real e usadas para pagar conteúdo dentro do jogo. Ficam de fora criptomoedas, as "moedas virtuais" da diretiva antilavagem e as moedas que **só se obtêm jogando**. O documento diz que não vincula autoridades nem tribunais ([PDF dos princípios, notas 1 e 2](https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf)).
- **[F] Os sete princípios** (base: diretivas de práticas comerciais desleais, de direitos do consumidor e de cláusulas abusivas) ([PDF dos princípios, pp. 2–8](https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf)):
  1. preço em dinheiro real exibido com clareza, também para itens pagos com moeda que se compra "direta ou indiretamente via outra moeda virtual", calculado sem desconto de volume;
  2. evitar várias moedas misturadas e trocas sucessivas antes de uma compra;
  3. evitar pacotes de moeda que não batem com o preço dos itens (sobra forçada) e deixar o jogador escolher a quantidade;
  4. informação pré-contratual completa (características, identidade do vendedor, preço em dinheiro, arrependimento, garantia);
  5. **arrependimento de 14 dias para moeda não usada**: para a CPC, moeda virtual não é "conteúdo digital", então não cabe a exceção de conteúdo já fornecido;
  6. cláusulas a evitar: retirar ou alterar unilateralmente o que foi comprado, **mudar o valor da moeda**, banir ou suspender a conta sem permitir contestação;
  7. respeito a vulneráveis: qualquer jogo que não seja exclusivamente adulto deve presumir menores na base; gastos com dinheiro real desligados por padrão nos controles parentais; modelo de negócio voltado a "baleias" é julgado por régua mais rígida.
- **[F] Ações de 2026:** em 30/9/2026, a rede CPC anunciou **onze ações coordenadas** contra Activision Blizzard (Diablo Immortal e Call of Duty Mobile), Crytek, InnoGames, King, Mojang, Plarium, PLR Worldwide (Gardenscapes), Riot (Valorant), Supercell (Clash of Clans) e Ubisoft (For Honor). A declaração afirma que "um número alto" de empresas não mudou nada depois dos princípios e de dois workshops com a indústria (jun. e set./2025) e dá atenção especial a sistemas de recompensa variável (loot boxes) acessíveis a crianças ([Declaração conjunta da rede CPC, 30/9/2026](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf)). Se as preocupações não forem resolvidas, as autoridades nacionais podem aplicar medidas de execução ([Comissão Europeia](https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en)).
- **[F] Antecedentes:** posições comuns sobre compras no app (2017–2018, com Apple, Google e a ISFE) e carta de 2022 à ISFE e à EGDF lembrando que loot boxes devem cumprir os deveres de informação, não podem ser anunciadas como "grátis" e não podem exortar crianças a comprar ([Comissão Europeia](https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en)).

**Nossa leitura**

- **[H] O princípio 1 é o que mais conversa com RMT.** Se o ouro pode ser comprado "indiretamente" (token pago em euros e vendido por ouro), uma autoridade pode pedir preço em euros também para o que se compra com ouro. A CPC fala de ofertas do comerciante (o estúdio), não de trocas entre jogadores, mas um token oficial com cotação em ouro aproxima as duas coisas. **Validar com advogado.**
- **[H] O princípio 5 é custo direto:** moeda premium não gasta deve ser reembolsável por 14 dias na UE (no Brasil, 7 dias pelo CDC; ver 05b). Num mercado entre jogadores, "não gasta" precisa incluir "não transferida": token já revendido não volta sem desfazer a troca.
- **[H] O princípio 2 pesa contra economias com muitas moedas** (premium + token + ouro + moedas de evento). Não é proibição, mas cada camada de câmbio vira argumento contra o estúdio.
- **[H] O princípio 7 ataca o modelo "baleia" de frente.** Para um idle com RMT, a mensagem é: teto de gasto, nenhuma pressão de tempo em ofertas e preço sempre traduzido para moeda real.

### 1.2 Digital Services Act (DSA) e as diretrizes de proteção de menores

**O que a norma diz**

- **[F] Conceito:** o DSA (Regulamento (UE) 2022/2065) chama de "plataforma online" o serviço de hospedagem que, a pedido do usuário, armazena e **dissemina informação ao público** ([EUR-Lex, DSA](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065)). Para nós, pesam: proibição de interfaces que enganam ou manipulam (art. 25); proteção de menores, com medidas "apropriadas e proporcionais" e proibição de anúncio por perfilamento para menores (art. 28); e rastreabilidade de comerciantes em marketplaces, que só podem vender depois de informar nome, endereço, documento, conta de pagamento e autocertificação (art. 30) ([EUR-Lex, DSA](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065)).
- **[F] Isenção por porte:** a seção 3 do capítulo III (arts. 19 a 28, o que inclui os arts. 25 e 28) e a seção 4 (arts. 29 a 32, marketplaces) **não se aplicam a micro e pequenas empresas**, inclusive por 12 meses depois de perderem esse status, salvo designação como plataforma muito grande ([DSA, arts. 19 e 29](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065)). Pequena empresa é a que tem menos de 50 pessoas e faturamento ou balanço de até € 10 milhões ([diretrizes do art. 28, nota 9](https://ec.europa.eu/newsroom/dae/redirection/document/118226)).
- **[F] Diretrizes do art. 28** (Comunicação C(2025) 6826, de 7/10/2025, depois da versão divulgada em 14/7/2025): não são vinculantes, mas a Comissão declara que as usará como parâmetro ao aplicar o art. 28 ([Comissão Europeia, diretrizes, par. 12](https://ec.europa.eu/newsroom/dae/redirection/document/118226); data da divulgação em [Hunton](https://www.hunton.com/privacy-and-information-security-law/european-commission-issues-guidelines-on-the-protection-of-minors)). Pontos que pegam um RPG idle com mercado ([diretrizes](https://ec.europa.eu/newsroom/dae/redirection/document/118226)):
  - a verificação de idade é considerada apropriada para "conteúdo de jogo de azar" e quando os próprios termos exigem 18+ (par. 37); autodeclaração não é método adequado (par. 52); recomenda-se verificação "duplo-cega" por token de idade, com o aplicativo europeu de verificação como referência (pars. 41–46);
  - menores não devem ser expostos a moedas virtuais "que podem ser trocadas por dinheiro real" e usadas para comprar itens, nem a **loot boxes pagas** ou produtos com resultado aleatório ou "parecido com jogo de azar"; compras oferecidas a menores devem ter preço em moeda nacional (par. 69, i a k); também não a escassez, recompensas intermitentes ou aleatórias e técnicas persuasivas (l); compromissos financeiros de menores podem depender de consentimento dos responsáveis (m);
  - desenho: evitar "recompensas virtuais por realizar ações (repetidas)", notificações cronometradas para recapturar a atenção e sinais de urgência (par. 61, b); notificações *push* desligadas por padrão e sempre desligadas no horário de sono (par. 57, b, vii);
  - plataforma que hospeda transações financeiras deve ter um canal específico para denunciar fraude e transações suspeitas (par. 72, h, iii).

**Nossa leitura**

- **[H] Um RPG idle com chat, perfis públicos, guildas e mercado entre jogadores tende a ser "plataforma online"** no sentido do DSA, e a casa de leilão o aproxima de um marketplace. Enquanto o estúdio for pequeno, os arts. 25, 28 e 30 não se aplicam por causa do porte, mas as diretivas de consumidor e os princípios da CPC continuam valendo, e a isenção acaba 12 meses depois do crescimento. **Validar com advogado** se um jogo com mercado de itens é "plataforma online" e se jogadores que vendem com habitualidade viram "comerciantes" para o art. 30.
- **[H] As diretrizes descrevem, quase item por item, o loop idle clássico** (recompensa por ação repetida, notificação de "baú cheio", oferta relâmpago) como algo a não expor a menores. É o mesmo recado do ECA Digital (05b, seção 2): modo protegido por padrão, liberado só com idade verificada.

### 1.3 Digital Fairness Act (proposta)

- **[F]** A consulta pública da Comissão sobre o Digital Fairness Act (DFA) correu de 17/7 a 24/10/2025 ([Comissão, "Have your say"](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14622-Digital-Fairness-Act_en); cronologia em [Wikipedia](https://en.wikipedia.org/wiki/Digital_Fairness_Act)).
- **[F] Em 7/11/2026 a proposta ainda não tinha sido apresentada.** Escritórios esperam a publicação em 11/11/2026, junto com uma revisão do Regulamento CPC que pode dar à Comissão poder de aplicação direta; "loot boxes e moedas de jogo" e proteção de menores estão entre os temas prováveis ([CMS, 19/10/2026](https://cms.law/en/fra/legal-updates/inside-the-eu-s-planned-digital-fairness-act-digital-design-subscription-traps-and-influencer-marketing)). A MLex citou outras datas possíveis, como 18/11 ([MLex, set./2026](https://www.mlex.com/mlex/articles/2529049/eu-digital-fairness-act-on-consumer-protection-tentatively-eyed-for-november)).
- **[F]** A rede CPC já cita como base técnica o relatório do BEUC sobre moedas premium (*Game Over*) e o documento de posição da autoridade holandesa ACM (2025) sobre proteção de jogadores ([Declaração conjunta da CPC, notas 5 e 6](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf)).

**Nossa leitura**

- **[H]** O DFA é o caminho pelo qual os princípios da CPC podem virar regra dura (preço em moeda real obrigatório, limite a moedas intermediárias, talvez restrição de loot box para menores). Como a proposta ainda passará por Parlamento e Conselho, vigência antes de 2028 parece improvável. Desenhar a loja já cumprindo os sete princípios custa pouco e antecipa o pior cenário.

### 1.4 Moeda eletrônica, serviços de pagamento e a exceção de rede limitada

**O que a norma diz**

- **[F] Moeda eletrônica** (Diretiva 2009/110/CE, a "EMD2", art. 2(2)): valor monetário armazenado eletronicamente, representado por um crédito contra o emissor, emitido contra recebimento de fundos para fazer pagamentos e **aceito por pessoa diferente do emissor**. O emissor deve resgatá-lo a qualquer momento e pelo valor nominal (art. 11(2)). A diretiva não se aplica a instrumentos isentos pela exceção de rede limitada da diretiva de pagamentos (art. 1(4)) ([EUR-Lex, EMD2](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0110)).
- **[F] Exceção de rede limitada** (Diretiva (UE) 2015/2366, a "PSD2", art. 3(k)): fica fora da diretiva o instrumento que só compra bens ou serviços nas instalações do emissor ou numa rede limitada de prestadores com acordo comercial direto com ele (i), ou que só compra uma gama muito limitada de bens ou serviços (ii). Acima de **€ 1 milhão** em transações em 12 meses, o prestador deve notificar a autoridade, que decide se a atividade cabe na exceção (art. 37(2)). "Remessa de dinheiro" é receber fundos de um pagador só para transferir o valor a um beneficiário (art. 4(22)) ([EUR-Lex, PSD2](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32015L2366)).
- **[F] PSD3 e PSR:** Conselho e Parlamento fecharam acordo provisório em 27/11/2025, com foco em fraude, transparência de tarifas e *open banking* ([Parlamento Europeu](https://www.europarl.europa.eu/news/en/press-room/20251121IPR31540/payment-services-deal-more-protection-from-online-fraud-and-hidden-fees); [A&O Shearman](https://finreg.aoshearman.com/council-of-the-eu-and-european-parliament-reach-provisional-agreement-on-eu-payments-package)); o Coreper aprovou o texto de compromisso em 22/4/2026 ([Conselho da UE, ST 8543/26](https://data.consilium.europa.eu/doc/document/ST-8543-2026-ADD-1-REV-1/en/pdf)). O acordo prevê que plataformas online possam responder por fraude de pagamento quando não removem conteúdo fraudulento ([A&O Shearman](https://finreg.aoshearman.com/council-of-the-eu-and-european-parliament-reach-provisional-agreement-on-eu-payments-package)). **Não encontrei publicação no Jornal Oficial até nov./2026**; análises estimam aplicação cerca de 21 meses após a entrada em vigor, por volta de 2028 ([Open Banking Tracker](https://www.openbankingtracker.com/guides/psd3-psr-readiness)). **[NV]** Não verifiquei se o texto final mudou a exceção de rede limitada.

**Nossa leitura**

- **[H] Moeda premium que só compra coisas do estúdio é o caso de manual da exceção (i)** ("nas instalações do emissor") e não é moeda eletrônica: não é aceita por terceiros nem resgatável.
- **[H] O risco nasce quando outro jogador aceita a moeda premium como pagamento** por um item: ela passa a ser "aceita por pessoa diferente do emissor", que é o núcleo da definição de moeda eletrônica. Se ainda houver saque pelo valor nominal, o desenho fica idêntico ao de uma conta de moeda eletrônica (licença de instituição de moeda eletrônica, capital mínimo, segregação de fundos). O **token como item** vendido por ouro, e não como moeda que paga outros jogadores, é a mesma defesa sugerida no 05b para o Brasil. **Validar com advogado.**
- **[H] Leilão em euros entre jogadores**, com o estúdio recebendo do comprador e repassando ao vendedor, é serviço de pagamento se feito com conta própria. O caminho usual é um PSP licenciado com contas ou subcontas em nome dos vendedores (modelo de marketplace), ficando o estúdio com a comissão.

### 1.5 Lavagem de dinheiro e cripto

- **[F]** A diretiva antilavagem de 2018 (Diretiva (UE) 2018/843) define "moedas virtuais" e diz, no considerando 10, que elas não se confundem com moeda eletrônica nem com "moedas de jogo" usadas exclusivamente dentro de um ambiente de jogo ([EUR-Lex, Diretiva 2018/843](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32018L0843)).
- **[F]** O novo regulamento antilavagem (Regulamento (UE) 2024/1624, "AMLR") aplica-se a partir de **10/7/2027** e põe os prestadores de serviços de criptoativos entre as entidades obrigadas ([EUR-Lex, AMLR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1624); resumo em [Chambers](https://chambers.com/articles/overview-of-the-eu-aml-cft-legislative-package)). **[NV]** Não li a lista completa de entidades obrigadas (art. 3).

**Nossa leitura**

- **[H]** Moeda de jogo fechada está fora do conceito europeu de "moeda virtual" (considerando 10). O que tira o jogo dessa zona de conforto é o mesmo gatilho do Brasil: troca oficial por dinheiro (saque) ou circulação fora do jogo (blockchain). Com saque, quem movimenta o dinheiro (PSP, instituição de moeda eletrônica) é entidade obrigada e vai exigir do estúdio KYC dos vendedores, monitoramento e trilha de auditoria.

### 1.6 Leis nacionais de loot box

**Bélgica (proibição de 2018)**

- **[F]** Em abril de 2018, a Comissão de Jogos belga concluiu que as loot boxes pagas de jogos como FIFA 18, Overwatch e CS:GO eram jogos de azar sob a lei de 1999 e não poderiam ser oferecidas sem licença ([Public Gaming, 25/4/2018](https://mail.publicgaming.com/news-categories/legal/2875-belgium-defines-video-game-loot-boxes-as-illegal-gambling); tradução do relatório hospedada pela [Skadden](https://www.skadden.com/-/media/files/publications/2019/08/video-gaming-egaming-law-update/fn12_onderzoeksrapportlootboxenengelspublicatie.pdf?la=en)).
- **[F] Aplicação fraca:** o estudo *Breaking Ban* concluiu que a proibição não foi efetivamente aplicada; segundo levantamento de Leon Xiao, 82% dos 100 jogos de iPhone de maior faturamento ainda vendiam loot boxes na Bélgica em 2022 ([Collabra: Psychology, 2023](https://online.ucpress.edu/collabra/article/9/1/57641/195100/Breaking-Ban-Belgium-s-Ineffective-Gambling-Law); dado citado em [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12583229)). Não encontrei ação nova da Comissão de Jogos em 2025–2026.

**Países Baixos (Raad van State, 2022)**

- **[F]** O estudo da autoridade de jogos (Ksa) de abril de 2018 concluiu que 4 de 10 loot boxes analisadas violavam a lei **porque os itens eram transferíveis**, ou seja, tinham valor de mercado e por isso contavam como "prêmio" (art. 1 da lei de jogos); as outras seis, sem itens negociáveis, não violavam ([Ksa, *Study into loot boxes*](https://kansspelautoriteit.nl/publish/library/17/study_into_loot_boxes_-_a_treasure_or_a_burden_-_eng.pdf); [The Next Web, 19/4/2018](https://thenextweb.com/news/some-gaming-loot-boxes-may-violate-dutch-gambling-law)).
- **[F]** Em 9/3/2022, o Raad van State (corte administrativa suprema) anulou a multa coercitiva de até € 10 milhões imposta à EA por causa dos *packs* do FIFA: abrir *packs* não é um jogo autônomo, mas parte de um jogo em que predomina a habilidade, então não exigia licença ([Raad van State, comunicado](https://www.raadvanstate.nl/actueel/nieuws/@130206/dwangsom-onterecht-opgelegd-loot-boxes/); [decisão 202005769/1/A3](https://www.raadvanstate.nl/uitspraken/@130150/202005769-1-a3/); [NOS](https://nos.nl/l/2420438)).

**Espanha**

- **[F]** O Conselho de Ministros aprovou em 4/6/2024 o anteprojeto de lei orgânica de proteção de menores em ambientes digitais, que proíbe o acesso de menores aos "mecanismos aleatórios de recompensa" em jogos ([Ministério de Consumo, nota de imprensa](https://www.dsca.gob.es/es/comunicacion/notas-prensa/ministerio-consumo-prohibe-acceso-menores-cajas-botin-videojuegos-evitar)). O projeto (121/000052) foi ao Congresso ([BOCG](https://www.congreso.es/public_oficiales/L15/CONG/BOCG/A/BOCG-15-A-52-1.PDF)) e, em abril de 2026, ainda estava na comissão de Justiça ([Newtral, 13/4/2026](https://www.newtral.es/menores-entornos-digitales-congreso/20260413/)). **Não encontrei** aprovação final nem publicação no BOE até nov./2026.

**Alemanha (lei de proteção de jovens e USK)**

- **[F]** A lei de proteção de jovens (JuSchG, § 10b, (3)) manda considerar na classificação etária riscos de **funções de compra**, de **mecanismos parecidos com jogo de azar**, de mecanismos que estimulam uso excessivo e de apelos de compra inadequados à idade ([§ 10b JuSchG](https://www.gesetze-im-internet.de/juschg/__10b.html)).
- **[F]** A USK aplica esses critérios desde 1/1/2023, com o aviso "In-Game-Käufe + zufällige Objekte" ao lado da classificação ([WinFuture](https://winfuture.de/news,133526.html)); segundo o governo da Baviera, esses "riscos de uso" pesaram na classificação de cerca de 30% dos jogos avaliados em 2023 ([Landtag da Baviera, Drucksache 19/3110](https://www.bayern.landtag.de/www/ElanTextAblage_WP19/Drucksachen/Schriftliche%20Anfragen/19_0003110.pdf)). Em 2025 o Bundesrat pediu ao governo federal que ampliasse a lei com proteções técnicas obrigatórias sobre loot boxes ([Bundesrat, Drucksache 517/25](https://dserver.bundestag.de/brd/2025/0517-25B.pdf)).

**Nossa leitura**

- **[H] O ponto em comum que importa para RMT é o "prêmio com valor de mercado".** Na Bélgica e no primeiro entendimento holandês, o que transformou a loot box em jogo de azar foi a possibilidade de o item ter valor fora do jogo. Um jogo com mercado oficial e, pior, saque cria exatamente esse valor. A decisão do Raad van State não derrubou essa lógica; disse que, no FIFA, os *packs* eram parte de um jogo de habilidade. **Validar com advogado** em cada país antes de qualquer sorteio pago.
- **[H] Na prática:** sorteio pago desligado na Bélgica e nos Países Baixos (e, se a lei espanhola sair, para menores na Espanha); na Alemanha, compra e sorteio sobem a classificação, o que afeta lojas e público.

<!-- CONTINUA -->
