# RMT, mercado entre jogadores e moeda premium fora do Brasil: riscos legais, meios de pagamento e lojas (nov./2026)

> **Escopo.** Mapear o que vale em novembro de 2026 fora do Brasil (União Europeia, Reino Unido, Estados Unidos, China, Coreia do Sul, Japão e Austrália) e nas regras privadas que, na prática, pesam tanto quanto a lei: bandeiras de cartão, gateways de pagamento e lojas de aplicativos. O objeto é o mesmo do estudo [05b](05b-rmt-legal-brasil.md): um RPG idle de navegador, online, com mercado entre jogadores, casa de leilão, moeda premium e possível RMT oficial (de token até saque em dinheiro), com público que pode incluir menores.
>
> **Perguntas que este estudo responde:** (1) Em cada mercado relevante, que normas pegam loot box, moeda premium, token, leilão em dinheiro, venda de personagem e saque? (2) Em que ponto a moeda do jogo vira serviço de pagamento, moeda eletrônica, transmissão de dinheiro ou jogo de azar? (3) O que bandeiras, gateways e lojas aceitam, e o que derruba a conta do estúdio? (4) Que diferença faz ser PWA em vez de app nas lojas? (5) O que levar a um advogado antes de fechar o modelo de RMT na Fase 2?
>
> **Aviso.** Este estudo **não é parecer jurídico**. Separa o que a norma ou a decisão diz **[F]** da nossa leitura **[H]**. Onde a leitura muda decisão de produto, está marcado **"validar com advogado"**. A lei brasileira não é pesquisada de novo: a coluna "Brasil" das tabelas resume o [05b](05b-rmt-legal-brasil.md).

## Resumo executivo

Fora do Brasil, os riscos repetem a fronteira do 05b, com respaldo de vários países:

- **[F] Loot box vira jogo de azar quando o prêmio vale dinheiro.** Foi o critério holandês (itens transferíveis, 2018), é o britânico (*money's worth*) e é a tese de Nova York contra a Valve (fev./2026). A Bélgica proíbe loot box paga desde 2018; a Coreia proíbe empresas de trocar por dinheiro o que se ganha no jogo.
- **[F] Saque transforma o estúdio em instituição financeira:** moeda eletrônica na UE, transmissor de dinheiro nos EUA (a Linden Lab criou uma subsidiária licenciada), câmbio proibido na Coreia e na China, devolução em dinheiro vedada no Japão, jogo a dinheiro proibido na Índia.
- **[F] A UE apertou em 2025–2026:** princípios da rede CPC (preço em moeda real, 14 dias de arrependimento para moeda não usada), onze ações coordenadas, diretrizes do DSA para menores e a proposta do Digital Fairness Act (11/11/2026), cujo rascunho veda loot box paga e *pay-to-win* para menores.
- **[F] EUA:** FTC contra Epic (US$ 520 milhões) e HoYoverse (US$ 20 milhões, com chances e câmbio à vista); COPPA emendada obrigatória desde 22/4/2026.
- **[F] Gateways e lojas fecham a porta antes da lei:** Stripe proíbe dinheiro entre pessoas; Adyen proíbe moeda sacável para plataformas; Apple veda moeda do app em jogo a dinheiro; Google exige que a moeda só valha no próprio jogo; Steam proíbe blockchain.

**[H] Conclusões para a Fase 2:** (1) o porto seguro global é o do Brasil: moeda fechada, token como item negociado por ouro, mercado em ouro; (2) sorteio pago e dinheiro real não coexistem; (3) RMT como módulo por país, com modo protegido para menores; (4) dinheiro de jogadores só por PSP de marketplace; (5) a economia mora na web (PWA), e os apps vendem só moeda fechada.

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
- **[F] Proposta apresentada em 11/11/2026**, segundo a imprensa, num pacote do consumidor que inclui a revisão do Regulamento CPC, que pode dar à Comissão poder de aplicação direta ([Trending Topics](https://www.trendingtopics.eu/digital-fairness-act-iab-criticism/); [CMS, 19/10/2026](https://cms.law/en/fra/legal-updates/inside-the-eu-s-planned-digital-fairness-act-digital-design-subscription-traps-and-influencer-marketing)). **Não li o texto oficial**: os detalhes abaixo vêm de um rascunho vazado na véspera.
- **[F] O rascunho vazado** previa: mostrar o valor em dinheiro real do que se compra com moeda virtual paga (art. 14); moeda paga **desligada por padrão** em jogos voltados a menores, liberável só com aprovação dos responsáveis; proibição de oferecer sistemas de recompensa variável pagos (loot boxes) **a menores** (art. 15), com probabilidade por item e opção de desligar para os demais; proibição de mecânicas *pay-to-progress* e *pay-to-win* **para menores** (art. 16); e recursos de uso compulsivo que o jogador possa desligar (art. 17). O jogo seria tratado como voltado a menores, por exemplo, com classificação PEGI abaixo de 18 ou com 25% ou mais de público menor ([Mobilegamer.biz, 10/11/2026](https://mobilegamer.biz/eus-draft-digital-fairness-act-takes-aim-at-loot-boxes-virtual-currencies-and-pay-to-win/)).
- **[F]** A rede CPC já cita como base técnica o relatório do BEUC sobre moedas premium (*Game Over*) e o documento de posição da autoridade holandesa ACM (2025) sobre proteção de jogadores ([Declaração conjunta da CPC, notas 5 e 6](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf)).

**Nossa leitura**

- **[H]** O DFA é o caminho pelo qual os princípios da CPC viram regra dura. Como a proposta ainda passará por Parlamento e Conselho, vigência antes de 2028 parece improvável, mas o rumo está dado: preço em moeda real, moeda paga e loot box desligadas para menores e nada de *pay-to-win* para eles. Para nós, a pergunta nova é se um **token comprado por um adulto e revendido por ouro a um menor** conta como *pay-to-progress* do menor. **Validar com advogado** quando o texto oficial sair. Desenhar a loja já cumprindo os sete princípios da CPC custa pouco e antecipa o pior cenário.

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

## 2. Reino Unido

**O que a norma diz**

- **[F] Sem lei nova para loot box:** depois da consulta de 2020–2022, o governo preferiu, "ao menos inicialmente", uma abordagem conduzida pela indústria para evitar efeitos colaterais de legislar; os objetivos são: loot box indisponível para menores de 18 sem ativação de um responsável, controles de gasto e informação clara para todos e mais pesquisa ([DCMS, 18/7/2023](https://www.gov.uk/guidance/loot-boxes-in-video-games-update-on-improvements-to-industry-led-protections)).
- **[F] Princípios da indústria (jul./2023):** onze princípios do grupo técnico convocado pelo DCMS, publicados pela Ukie, entre eles: controles técnicos para menores não comprarem loot box sem consentimento dos responsáveis, verificação de idade melhor que autodeclaração, limite de gasto padrão de £ 0 em contas infantis (recomendado pelo governo), reembolso flexível e divulgação clara de probabilidades ([DCMS](https://www.gov.uk/guidance/loot-boxes-in-video-games-update-on-improvements-to-industry-led-protections); [Ukie](https://ukie.org.uk/news/new-loot-box-principles-agreed-by-industry)). Passaram a valer em 18/7/2024, após um ano de transição ([CMS](https://cms.law/en/gbr/legal-updates/loot-boxes-11-new-principles-for-an-industry-led-approach)).
- **[F] Cumprimento baixo:** estudo longitudinal na App Store britânica encontrou descumprimento amplo e concluiu que nem DCMS, nem Apple, nem Ukie fiscalizam a autorregulação ([Royal Society Open Science, 2025](https://royalsocietypublishing.org/rsos/article/12/5/250704/235838/Non-compliance-with-and-non-enforcement-of-UK-loot)); a Ukie respondeu que "não é reguladora" e contestou a amostra ([Mobilegamer.biz](https://mobilegamer.biz/accusations-fly-as-researcher-claims-uk-loot-box-regulations-are-failing/)). Não encontrei a avaliação independente encomendada pelo DCMS publicada até nov./2026.
- **[F] A linha da Gambling Commission:** desde 2016–2017, o regulador de jogos diz que itens de jogo que podem ser trocados ou sacados, ou que funcionam como moeda de fato, podem ser "dinheiro ou valor em dinheiro" (*money's worth*) para a Lei de Jogos de 2005, o que exige licença para jogos de azar com eles ([Gambling Commission, comunicado](https://www.gamblingcommission.gov.uk/news/article/gambling-commission-shines-light-on-virtual-currencies-esports-and-social); [CMS, resumo do documento de posição de 2017](https://cms.law/en/gbr/legal-updates/further-clarification-of-the-gambling-commission-s-position-on-virtual-currencies-esports-and-social-gaming2)). Em 2025, uma revisão do DCMS sobre "skins gambling" sinalizou pressão para sair da autorregulação ([CMS Law-Now, out./2025](https://cms-lawnow.com/en/ealerts/2025/10/inside-the-skins-gambling-surge-dcms-review-exposes-risks-and-regulatory-gaps-in-skins-gambling)).

**Nossa leitura**

- **[H]** No Reino Unido a loot box "fechada" é tolerada; a loot box cujo prêmio **pode ser vendido** não é. Para um jogo com mercado oficial em dinheiro ou saque, o critério do *money's worth* é o mesmo gatilho da Bélgica e dos Países Baixos. **Validar com advogado.**

## 3. Estados Unidos

### 3.1 FTC: Epic Games (2022) e HoYoverse (2025)

- **[F] Epic Games (dez./2022), US$ 520 milhões:** US$ 275 milhões de multa por violar a COPPA (dados de menores de 13 sem consentimento dos pais; voz e texto ligados por padrão) e US$ 245 milhões em reembolsos por *dark patterns* que geravam cobranças indesejadas com um único botão. A FTC também acusou a Epic de **bloquear as contas de quem contestava cobranças não autorizadas com o cartão** ([FTC, 19/12/2022](https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations); [FTC, guia para empresas](https://www.ftc.gov/business-guidance/blog/2022/12/245-million-ftc-settlement-alleges-fortnite-owner-epic-games-used-digital-dark-patterns-charge)). A ordem administrativa foi finalizada em março de 2023 ([FTC, 14/3/2023](https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making)) e os reembolsos foram pagos em 2024–2025 ([FTC, Fortnite Refunds](https://www.ftc.gov/enforcement/refunds/fortnite-refunds)).
- **[F] HoYoverse/Genshin Impact (jan./2025), US$ 20 milhões:** acordo proposto em 17/1/2025. A FTC alegou que a empresa enganou jogadores sobre as chances de ganhar prêmios "cinco estrelas" e o custo para obtê-los, e que violou a COPPA. A ordem proíbe vender loot box a menores de 16 sem consentimento dos pais, proíbe vender loot box **só por moeda virtual** (tem de haver opção de compra direta em dinheiro) e exige divulgar probabilidades e **taxas de câmbio da moeda virtual** ([FTC, 17/1/2025](https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental); [página do caso](https://www.ftc.gov/legal-library/browse/cases-proceedings/222-3152-cognosphere-llc-us-v)). Os comissários Ferguson e Holyoak acompanharam as acusações de COPPA e de engano, mas divergiram das acusações de prática "injusta" ([FTC, 17/1/2025](https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental); [voto de Ferguson](https://search.ftc.gov/system/files/ftc_gov/pdf/ferguson-cognosphere-concurrence.pdf)).

**Nossa leitura**

- **[H]** As duas decisões viram checklist de produto: probabilidades e câmbio da moeda à vista, compra direta em dinheiro como alternativa, consentimento dos pais para menores, botões de compra com confirmação. E um alerta específico para antifraude: **bloquear a conta inteira de quem abre *chargeback*** foi tratado como prática injusta no caso Epic. A defesa precisa ser proporcional (congelar a moeda ou o item contestado, não a conta toda sem processo). **Validar com advogado.**
- **[H]** A divergência de Ferguson, que preside a FTC desde 2025, sugere menos apetite por teorias amplas de "injustiça" contra loot boxes; engano e COPPA continuam no centro.

### 3.2 COPPA

- **[F]** A regra da COPPA (dados de menores de 13) foi emendada: publicação em 22/4/2025, vigência em 23/6/2025 e prazo de cumprimento até **22/4/2026**. Mudanças principais: consentimento parental separado para divulgar dados a terceiros (inclusive publicidade direcionada), limites de retenção e novo conceito de serviço de "público misto" ([Federal Register, 22/4/2025](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule); [FTC, jan./2025](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data)).
- **[H]** Um idle de visual amigável tende a ser lido como "público misto". O caminho barato é o do 05b e das diretrizes europeias: portão de idade neutro, modo protegido para menores, nenhum dado de menor de 13 para anúncios e nenhuma função de dinheiro para menores.

### 3.3 Transmissão de dinheiro: FinCEN e as leis estaduais

- **[F] Orientação FIN-2013-G001 (18/3/2013):** a FinCEN chama de "moeda virtual conversível" a que tem valor equivalente em moeda real ou funciona como substituta dela. O **usuário** que obtém moeda virtual para comprar bens não é MSB (*money services business*). O **administrador** (quem emite a moeda e "tem autoridade para resgatá-la") e o **câmbio** (quem troca moeda virtual por dinheiro) que aceitam e transmitem ou compram e vendem a moeda são **transmissores de dinheiro**, salvo exceção. A orientação diz que essa atividade não se enquadra como "acesso pré-pago", porque esse conceito vale só para moeda real ([FinCEN, FIN-2013-G001](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering)).
- **[F] Linden Lab (Second Life):** comentaristas da época leram a orientação de 2013 como tratando a Linden Lab como administradora e câmbio do Linden Dollar ([Modem World, 5/4/2013](https://modemworld.me/2013/04/05/the-linden-dollar-token-or-currency-the-us-treasury-ponders/)). A empresa passou a exigir verificação de identidade de quem usa os serviços financeiros ([iTnews](https://www.itnews.com.au/news/virtual-world-second-life-to-enforce-anti-money-laundering-regs-527558)) e criou a Tilia, subsidiária registrada como MSB e licenciada como transmissora de dinheiro, que passou a guardar os saldos em dólar dos usuários ([Second Life, "Tilia Officially Begins Operations"](https://community.secondlife.com/blogs/entry/2598-tilia-officially-begins-operations-today-in-second-life/)). **[NV]** Não confirmei no registro da FinCEN a situação atual nem a lista de licenças estaduais.
- **[F] CFPB (2024):** o órgão federal de proteção financeiro-consumerista disse que mercados de jogos "cada vez mais se parecem" com sistemas bancários e de pagamento, armazenando e trocando bilhões em ativos, mas sem as proteções equivalentes contra roubo de conta, golpes e transações não autorizadas; o relatório não cria obrigações ([CFPB, 4/4/2024](https://consumerfinance.gov/about-us/newsroom/cfpb-report-identifies-risks-to-consumers-in-video-gaming-marketplaces)).

**Nossa leitura: por que a Linden Lab virou MSB e o que isso diz sobre nós**

- **[H]** O Linden Dollar tem cotação em dólar, é transferível entre usuários e pode ser vendido de volta por dinheiro na LindeX. Isso o torna "conversível", e quem emite e resgata vira transmissor de dinheiro: registro federal na FinCEN, programa de PLD, relatórios de operações suspeitas e, sobretudo, **licença estado por estado**, com capital, garantias e auditorias. Foi isso que levou a empresa a separar a parte financeira numa subsidiária licenciada.
- **[H]** Moeda premium **sem resgate** e sem câmbio oficial por dinheiro não é "conversível" no sentido da FinCEN. O token vendido pelo estúdio e trocado por ouro também não, enquanto não houver saque. O gatilho americano é o mesmo do Brasil e da UE: **o estúdio comprar de volta ou intermediar a venda por dinheiro**. Com saque ou leilão em dólares, a saída realista é um parceiro já licenciado (que segura e transmite o dinheiro), nunca o estúdio. **Validar com advogado**, inclusive para a lei de cada estado.

### 3.4 Jogo de azar: ações coletivas e o processo de Nova York contra a Valve

- **[F] Regra geral nos tribunais:** a maioria das ações privadas contra loot boxes falhou porque o prêmio não era "coisa de valor": os itens só servem dentro do jogo e não podem ser sacados. Em *Mai v. Supercell*, a ação foi extinta com resolução de mérito em 2023, e o 9º Circuito confirmou em maio de 2024 em decisão não publicada ([Winston & Strawn](https://www.winston.com/en/blogs-and-podcasts/the-playbook/loot-box-update-northern-district-of-california-dismisses-with-prejudice-loot-box-suit-against-supercell-oy); [9º Circuito, memorando 23-15144](https://cdn.ca9.uscourts.gov/datastore/memoranda/2024/05/09/23-15144.pdf)).
- **[F] A exceção:** em *Kater v. Churchill Downs* (9º Circuito, 2018), fichas virtuais do Big Fish Casino foram consideradas "coisa de valor" pela lei de Washington, porque o jogador precisa delas para continuar jogando (estendem o privilégio de jogar); o jogo permitia transferir fichas entre usuários ([Justia, 886 F.3d 784](https://law.justia.com/cases/federal/appellate-courts/ca9/16-35010/16-35010-2018-03-28.html); [ZwillGen](https://www.zwillgen.com/litigation/virtual-chips-washington-gambling-law/)).
- **[F] Nova York × Valve (fev./2026):** a procuradora-geral de Nova York processou a Valve alegando que as caixas de Counter-Strike (e jogos como Dota 2 e Team Fortress 2) são **empreendimento de jogo ilegal** pela Constituição e pelo Código Penal do estado: os itens seriam conversíveis em dinheiro pelo Mercado da Comunidade Steam e por mercados de terceiros que a Valve teria tolerado; pede proibição, restituição e indenização tripla ([Jones Walker, 27/2/2026](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html)). A Valve pediu a extinção em 18/5/2026, comparando as caixas a figurinhas e brinquedos-surpresa ([PC Gamer](https://www.pcgamer.com/games/fps/valve-asks-new-york-court-to-dismiss-counter-strike-lawsuit-says-people-enjoy-surprises-and-equating-loot-boxes-to-gambling-is-nonsensical/); [gHacks, 21/5/2026](https://www.ghacks.net/2026/05/21/valve-files-motion-to-dismiss-new-york-counter-strike-loot-box-lawsuit-compares-item-cases-to-baseball-cards/)). **[NV]** Uma fonte secundária diz que a audiência foi adiada para 26/1/2027; não conferi no processo.

**Nossa leitura**

- **[H] A defesa americana contra "loot box é jogo de azar" depende de o item não valer dinheiro.** Um mercado oficial com saque, leilão em dólares ou venda oficial por dinheiro destrói essa defesa por desenho, e o caso de Nova York mostra que até mercado de terceiros tolerado pelo operador pode bastar. Num jogo com RMT oficial, **sorteio pago com prêmio negociável é o maior risco jurídico nos EUA**, somado ao de transmissão de dinheiro.

## 4. Ásia e Oceania

### 4.1 China

- **[F] Probabilidades e proibição de recompra (2016):** a notificação do Ministério da Cultura sobre operação de jogos online (Wenshifa [2016] nº 32) proíbe o operador de trocar moeda virtual do jogo por dinheiro ou bens físicos, salvo para devolver saldo não usado quando o jogo encerra, e manda publicar no site oficial nome, conteúdo, quantidade e **probabilidade** de cada item sorteável ([China Law Translate, tradução](https://www.chinalawtranslate.com/en/ministry-of-culture-notice-regarding-strengthening-regulation-online-gaming-operations/)); vigência em 1/5/2017 ([Game Developer](https://gamedeveloper.com/business/online-games-in-china-are-now-required-to-disclose-random-loot-box-odds)). Já em 2009 uma notificação conjunta dos ministérios da Cultura e do Comércio havia restringido a moeda virtual ao uso dentro do próprio jogo ([Asia IP](https://asiaiplaw.com/article/ministry-of-culture-issues-comprehensive-regulation-on-online-games)).
- **[F] Menores:** a regra de 2019 da NPPA (órgão de publicação) limitou tempo de jogo e gasto: sem pagamentos para menores de 8 anos; de 8 a 16, até RMB 50 por transação e RMB 200 por mês ([Harris Sliwoski](https://harris-sliwoski.com/chinalawblog/china-online-game-addiction-prevention-requirements/)); em 2021, o tempo de menores foi reduzido a uma hora em sextas, sábados, domingos e feriados ([Wikipedia, com fontes oficiais](https://en.wikipedia.org/wiki/Real-name_system_for_online_games_in_China)).
- **[F] Rascunho de 2023 arquivado:** o rascunho de "Medidas de Administração de Jogos Online" (22/12/2023) previa tetos de gasto, fim de recompensas de login diário e proibição de sorteios para menores ([China Law Translate](https://www.chinalawtranslate.com/en/19889-2/); [Pillar Legal](https://www.pillarlegalpc.com/wp-content/uploads/2024/07/Deep-Dive-into-Draft-Rules-that-Crashed-China-Game-Stocks-final%5ELJ-2024-1-9.pdf)); a NPPA o retirou do site em 23/1/2024, sem anúncio ([PC Gamer](https://pcgamer.com/chinese-regulators-may-be-having-second-thoughts-about-online-gaming-crackdown-proposed-rule-changes-have-been-removed-from-government-website); [ThePrint/Reuters](https://theprint.in/tech/china-regulator-removes-draft-video-game-rules-from-website-shares-jump/1934971)). **Não encontrei** versão final adotada até nov./2026.
- **[H]** A China não é mercado-alvo de um PWA estrangeiro (publicar jogo lá exige licença e parceiro local), mas é a origem do modelo de **divulgação de probabilidades** e da regra "o operador não recompra moeda", que o resto da Ásia seguiu.

### 4.2 Coreia do Sul

- **[F] Probabilidades por lei desde 22/3/2024:** a Lei de Promoção da Indústria de Jogos passou a exigir a divulgação das probabilidades de itens aleatórios no jogo, no site e na publicidade ([Shin & Kim](https://www.shinkim.com/eng/media/newsletter/3206); [Chambers, Gaming Law 2025](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-korea)). Emenda posterior inverteu o ônus da prova contra o operador e permitiu indenização de **até três vezes** o dano por violação intencional, em vigor em 2025 ([MLex](https://www.mlex.com/mlex/articles/2286453/south-korea-s-game-companies-face-stricter-regulations); [Lexology](https://www.lexology.com/library/detail.aspx?g=7ca78800-927d-4e28-8565-59a39e8dbfef)); desde 23/10/2025, operadoras estrangeiras acima de certos limites de usuários e receita precisam nomear agente local ([Chambers](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-korea)). Um projeto de multa de até 3% da receita estava em debate ([Inven Global](https://www.invenglobal.com/articles/20244/loot-box-crackdown-south-korea-eyes-revenue-penalties-for-probability-disclosure-breaches)).
- **[F] Proibição de "câmbio" por empresas (art. 32(1)(7)):** a lei proíbe, como atividade empresarial, trocar por dinheiro, intermediar a troca ou recomprar os resultados obtidos no jogo (moeda e itens). Em fevereiro de 2022 o Tribunal Constitucional confirmou a norma por unanimidade, ressaltando que só a atividade **"como negócio"** é punida, e não a troca isolada; a pena chega a 5 anos de prisão ou 50 milhões de wons. O caso envolvia uma intermediadora de itens acusada de câmbio de cerca de 260 bilhões de wons em moeda de jogo ([Kyunghyang Shinmun, 28/2/2022](https://www.khan.co.kr/article/202202281317001)).
- **[F] P2E proibido na prática:** desde 2021 o órgão de classificação (GRAC) recusa classificar jogos *play-to-earn*, por entender que itens convertíveis em dinheiro são "prêmios"; a Justiça administrativa de Seul manteve a recusa a um jogo com NFT, dizendo que itens negociados em bolsa estimulam especulação ([GIGAZINE, 5/1/2022](https://gigazine.net/gsc_news/en/20220105-korean-tells-block-p2e-games/); [Yahoo Finance](https://finance.yahoo.com/news/korean-court-says-nft-game-060419030.html)).
- **[F] O caso Lasthlas (2026):** em junho de 2026, o GRAC abriu apuração contra o MMORPG Lasthlas, que integrou ao cliente do jogo, por API, a venda de itens no site ItemMania. A dúvida é se isso é a **empresa facilitando** a troca de itens por dinheiro (art. 32(1)(7)); a matéria lembra que a troca privada entre usuários costuma ser tolerada e que plataformas como a ItemMania devem atuar só como intermediárias ([Gamemeca, 11/6/2026](https://www.gamemeca.com/en/view.php?gid=1776384)). **Não encontrei** a decisão final.

**Nossa leitura**

- **[H]** A Coreia é o exemplo mais claro do limite que nos interessa: **o mercado cinza entre jogadores é tolerado, mas o operador que oficializa a troca por dinheiro (saque, recompra, integração com site de venda) entra na zona proibida**. Leilão em wons, venda oficial de personagem por dinheiro e saque seriam provavelmente ilegais lá. Token pago e negociado por ouro dentro do jogo não é "câmbio por dinheiro" em si, mas convém **validar com advogado coreano** antes de liberar o país.

### 4.3 Japão

- **[F] *Kompu gacha* proibido (2012):** a Agência do Consumidor declarou ilegal o "gacha completo" (juntar um conjunto de itens sorteados para ganhar outro) sob a Lei contra Brindes Injustificados e Representações Enganosas, com regras operacionais a partir de julho de 2012 ([Bloomberg, 18/5/2012](https://www.bloomberg.com/news/articles/2012-05-18/japan-consumer-agency-says-complete-gacha-game-feature-illegal); [Monolith Law](https://monolith.law/en/general-corporate/game-regulation)). A mesma agência puniu em 2018 um jogo que exibia 3% para uma chance real de 0,333% ([Monolith Law](https://monolith.law/en/general-corporate/game-regulation)).
- **[F] Moeda paga é "meio de pagamento pré-pago"** pela Lei de Serviços de Pagamento: se o saldo não usado passar de **¥ 10 milhões** numa data-base (31/3 ou 30/9), o emissor precisa notificar o regulador e depositar **metade** do saldo como garantia; moeda que expira em até seis meses fica fora ([Monolith Law, Lei de Serviços de Pagamento](https://monolith.law/en/general-corporate/payment-services-act-mobile-games-application); [Monolith Law](https://monolith.law/en/general-corporate/game-regulation)). Em regra, **o saldo só pode ser devolvido em dinheiro quando o emissor encerra o serviço** ([ITmedia, em japonês](https://nlab.itmedia.co.jp/cont/articles/3270925/amp/); [Automaton, 2024](https://automaton-media.com/en/news/bungo-stray-dogs-game-of-9-years-shuts-down-with-grace-period-of-just-one-day-as-publisher-reportedly-files-for-bankruptcy-and-refuses-to-issue-refunds/)).
- **[H]** O Japão desenha a moeda premium como "vale pré-pago": pode existir sem licença bancária, mas tem garantia obrigatória e não pode virar saque. Saque em dinheiro levaria o modelo para as regras de transferência de fundos (licença própria). E gacha com prêmio vendável por dinheiro aproxima a mecânica do crime de jogo de azar do Código Penal. **Validar com advogado** japonês; não verifiquei essa parte nesta pesquisa.

### 4.4 Austrália

- **[F] Classificação desde 22/9/2024:** jogos com compras baseadas em sorte, como loot boxes pagas, recebem no mínimo **M** (recomendado para maiores de 15, sem restrição legal de venda); jogos com **jogo de azar simulado**, como cassinos sociais, recebem **R 18+**, e é ilegal vendê-los ou distribuí-los a menores de 18. Vale para computador, console, celular e tablet ([Australian Classification, notícia](https://www.classification.gov.au/about-us/media-and-news/news/new-mandatory-minimum-classifications-for-gambling-games-content); [ficha técnica](https://classification.gov.au/sites/default/files/documents/factsheet-new-mandatory-classifications-for-gambling-like-content-in-video-games.pdf)).
- **[H]** Para nós, loot box paga já empurra o jogo para M na Austrália; qualquer mecânica que pareça cassino (roleta, caça-níquel, apostas com moeda do jogo) leva a R 18+, o que nas lojas significa público adulto e verificação.

### 4.5 Índia (nota)

- **[F]** A Lei de Promoção e Regulação de Jogos Online (2025), sancionada em 22/8/2025, proíbe oferecer, anunciar ou facilitar "jogos online a dinheiro" (com aposta ou depósito na expectativa de ganho em dinheiro), inclusive de fora do país, e proíbe bancos de processar pagamentos para eles ([SCC Online, 24/8/2025](https://www.scconline.com/blog/post/2025/08/24/promotion-regulation-online-gaming-act-2025-legal-reform/); [texto na India Code](https://www.indiacode.nic.in/bitstream/123456789/22148/1/a2025-32.pdf)). **[NV]** Não confirmei a data de início de vigência nem as regras.
- **[H]** Um modo com saque em dinheiro precisaria ser bloqueado na Índia.

## 5. Meios de pagamento

### 5.1 Bandeiras: Visa e Mastercard

- **[F] Categoria e risco:** a Visa trocou em 1/5/2023 seu programa de "alto risco de marca" pelo Visa Integrity Risk Program (VIRP); lojistas de "alto risco de integridade" precisam ser registrados pelo adquirente. Fontes do setor incluem nessas categorias os **jogos de habilidade sem cartão presente** (MCC 5816, "Digital Goods – Games", quando há taxa de entrada e prêmio), as plataformas de cripto (MCC 6051 e 6012) e serviços de armazenamento online (MCC 4816), mas divergem sobre o nível de cada um ([CCBill, VIRP](https://ccbill.com/doc/visa-integrity-risk-program-virp); [G2 Risk Solutions](https://g2risksolutions.com/resources/blog/visa-replaces-global-brand-protection-program/); [Basis Theory](https://blog.basistheory.com/high-risk-mccs)). A compra de "quase-dinheiro" (moeda estrangeira, cripto, ordens de pagamento) usa o MCC 6051 e costuma ser tratada pelo emissor do cartão como adiantamento de dinheiro ([Basis Theory](https://blog.basistheory.com/high-risk-mccs); [Didit](https://didit.me/blog/memecoin-credit-card-merchant-code-kyc-2026/)). **[NV]** Não li o manual da Visa; os detalhes vêm de prestadores de pagamento.
- **[F] Monitoramento de disputas:** o programa VAMP da Visa (desde abril de 2025) soma fraudes e disputas; o limite de lojista "excessivo" caiu de 2,2% para **1,5%** em 1/4/2026 na maioria das regiões, com cobrança de US$ 8 por disputa. Na Mastercard, o lojista é "excessivo" com 100 ou mais *chargebacks* no mês e taxa de 1,5%, e "muito excessivo" com 300 e 3% ([Chargeflow](https://www.chargeflow.io/blog/what-are-visas-new-vamp-rules-a-2025-guide-for-merchants); [Beancount, 10/7/2026](https://beancount.io/blog/2026/07/10/visa-mastercard-vamp-chargeback-monitoring-2026-guide)). São blogs de fornecedores; os números exatos devem ser confirmados com o adquirente.

**Nossa leitura**

- **[H]** Moeda de jogo sem saque é "bem digital" comum. Com saque ou leilão em dinheiro, a mesma compra pode ser lida como **quase-dinheiro** ou **jogo com prêmio**, o que leva a registro de alto risco, taxas maiores, reservas e emissores recusando a compra. E como os programas medem fraude e disputa juntas, um único ataque de cartões roubados pode colocar o estúdio acima de 1,5% num mês.

### 5.2 Gateways: o que aceitam e o que derruba a conta

| Gateway | Venda da própria moeda/itens pelo estúdio | Dinheiro entre jogadores (leilão, bazar) | Moeda sacável ou que "sai do jogo" | Sorte ou habilidade com prêmio em dinheiro |
|---|---|---|---|---|
| **Stripe** ([empresas restritas](https://stripe.com/legal/restricted-businesses)) | Aceita: a venda de moeda virtual ou itens é restrita "a menos que o negócio seja o operador do ambiente virtual"; créditos do próprio vendedor "podem estar sujeitos a limites" | "Transferência de dinheiro entre pessoas" é **proibida**; facilitação e agregação de pagamentos exige aprovação | Créditos virtuais e valor armazenado de terceiros exigem aprovação; venda secundária de NFT é proibida | Jogos de sorte, torneios de jogos com prêmio e taxas de entrada que prometem prêmio são **proibidos** |
| **PayPal** ([política de uso](https://paypal.com/en/webapps/mpp/ua/acceptableuse-full), versão de 29/10/2022) | Não encontrei restrição à venda direta | Transmissão de dinheiro e venda de valor armazenado exigem aprovação prévia | "Criptomoeda" é definida de forma ampla, incluindo moedas de jogo | Jogos com taxa de entrada e prêmio exigem aprovação prévia |
| **Adyen** ([lista](https://www.adyen.com/legal/list-restricted-prohibited)) | Não encontrei restrição à venda direta | Remessa e serviços financeiros: restritos para lojista e proibidos para plataforma | Carteira ou moeda eletrônica que pode ser sacada ou que "sai do mundo virtual": **restrita** para lojista e **proibida** para plataforma | Jogo de azar ou de habilidade com prêmio de valor: listado; jogo de azar sediado nos EUA: proibido |
| **Mercado Pago** ([atividades proibidas](https://global-selling.mercadopago.com/help/18572)) | Não encontrei restrição | Não encontrado | Não encontrado | Processar jogos de azar, cassinos e apostas, online ou presenciais, é proibido |
| **PagBank e Pagar.me** | Não encontrei listas públicas de atividades proibidas (busquei por "produtos proibidos" e "atividades restritas") | — | — | No Brasil, a MP 1.394/2026 proíbe instituições de pagamento de processar apostas de quota fixa (05b) |

Fontes: as indicadas na primeira coluna, todas acessadas em nov./2026. Na PayPal não consegui abrir a página completa; o resumo vem de trechos indexados, e a política varia por país.

**Nossa leitura**

- **[H] O padrão é o mesmo em todos os gateways:** o estúdio vendendo a própria moeda é negócio normal; o que gera restrição, aprovação especial ou proibição é (1) **moeda que sai do jogo** (saque), (2) **dinheiro passando de um usuário a outro** e (3) **prêmio de valor ligado a sorte ou a taxa de entrada**. Um leilão em dinheiro só funciona com produto específico de marketplace (contas dos vendedores abertas pelo próprio PSP, com KYC), e mesmo assim a Adyen proíbe moeda sacável para plataformas. **Validar com o gateway antes de desenhar**, por escrito.

### 5.3 *Chargebacks* e fraudes típicas em jogos

- **[F]** A Xsolla, intermediadora de pagamentos para jogos, diz que a média de *chargebacks* do setor é de 0,83% (dado da própria empresa, sem metodologia publicada) ([Xsolla](https://xsolla.com/blog/navigating-chargebacks)). Relatório da Chargebacks911 diz que lojistas classificam quase 44% das disputas como fraude "amigável", em que o titular contesta uma compra legítima ([Chargebacks911](https://chargebacks911.com/nearly-44-of-chargebacks-are-labeled-friendly-fraud-finds-a-chargebacks911-report/)).
- **[C]** Padrões citados por fornecedores do setor: compras de filhos com o cartão salvo dos pais; roubo de contas para esvaziar inventários; teste de cartões roubados com compras pequenas; e itens comprados com fraude que inundam mercados secundários ([Tebex](https://www.tebex.io/resources/why-do-video-games-have-higher-chargeback-rates-than-other-e-commerce); [Chargeflow](https://www.chargeflow.io/blog/video-game-chargeback)).

### 5.4 Lavagem de dinheiro com itens de jogo: dois casos

- **[F] Chaves do CS:GO (2019):** em outubro de 2019, a Valve proibiu que chaves de caixa compradas fossem negociadas ou vendidas no Mercado da Comunidade, porque quase todas as que acabavam revendidas eram, segundo a empresa, *"fraud-sourced"* (vindas de fraude); redes de fraude usavam as chaves para converter dinheiro sujo. Chaves antigas continuaram negociáveis, e a Valve admitiu que a mudança afetaria usuários legítimos ([Engadget, 30/10/2019](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html); [GamingOnLinux](https://www.gamingonlinux.com/2019/10/valve-ends-counter-strike-global-offensive-container-key-trading-and-selling)).
- **[F] V-Bucks do Fortnite (2019):** investigação da Sixgill com o jornal The Independent descreveu criminosos que compravam V-Bucks na loja oficial com cartões roubados e revendiam a moeda com desconto na *dark web* e em redes sociais, recebendo em cripto; itens de Fortnite movimentaram mais de US$ 250 mil no eBay em 60 dias ([OCCRP, resumo da reportagem](https://www.occrp.org/en/daily/9109-independent-credit-card-thieves-use-fortnite-to-launder-money); [GameSpot](https://www.gamespot.com/articles/fortnite-v-bucks-being-used-for-money-laundering-s/1100-6464460/)).

**Nossa leitura**

- **[H] O circuito é sempre o mesmo:** dinheiro sujo ou cartão roubado → bem digital **transferível** → venda a um terceiro de boa-fé → dinheiro "limpo" para o criminoso e *chargeback* para o estúdio. Quanto mais líquido o mercado do jogo, melhor ele serve para isso. As defesas são de desenho: carência antes de transferir o que foi comprado com dinheiro, limites de volume para contas novas, KYC para quem vende muito, detecção de circularidade e de preços fora da curva, e canal de denúncia de fraude (que as diretrizes do DSA já pedem a plataformas com transações financeiras).

## 6. Lojas e plataformas

### 6.1 App Store

- **[F] Compras no app (diretriz 3.1.1, versão de 16/10/2026):** desbloquear funcionalidade, inclusive moeda do jogo, exige compra no app (IAP); moeda comprada via IAP **não pode expirar**; loot boxes devem mostrar as chances de cada item **antes** da compra; itens podem ser dados de presente, mas só reembolsados ao comprador original e **não podem ser trocados**; NFTs podem ser vendidos via IAP, mas a posse não pode desbloquear funcionalidades; o app não pode usar cripto como mecanismo de desbloqueio ([Apple, App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)).
- **[F] Jogos a dinheiro (5.3):** IAP não pode comprar crédito ou moeda para uso em "jogos a dinheiro de qualquer tipo" (5.3.3); jogos a dinheiro precisam de licença em cada local de uso, geobloqueio e app gratuito (5.3.4) ([Apple](https://developer.apple.com/app-store/review/guidelines/)).
- **[F] Links de pagamento externo:** na loja dos EUA, o app pode ter botões e links para comprar fora do app sem autorização especial; nas demais lojas, só com o *External Purchase Link Entitlement* onde ele existe ([Apple, 3.1.1(a) e 3.1.3](https://developer.apple.com/app-store/review/guidelines/)).
- **[H]** As diretrizes não falam de troca de itens entre jogadores por dinheiro, mas a soma de 3.1.1 (IAP obrigatório, presente não pode ser trocado) e 5.3.3 indica que **moeda comprada no app que pode virar dinheiro** seria tratada como jogo a dinheiro. Token negociável por ouro, sem saque, tende a passar; saque ou leilão em dinheiro dentro do app, não.

### 6.2 Google Play

- **[F] Pagamentos:** itens digitais, inclusive moeda virtual, passam pelo Google Play Billing (salvo exceções); a moeda virtual comprada **só pode ser usada no app ou jogo em que foi comprada**; loot boxes devem mostrar as chances antes e perto da compra ([Google Play, política de pagamentos](https://support.google.com/googleplay/android-developer/answer/9858738?hl=en)). A página de requisitos por país cita a proibição do ECA Digital no Brasil e as regras coreanas de probabilidade ([Google Play, requisitos por país](https://support.google.com/googleplay/android-developer/answer/6223646?hl=en)).
- **[F] Jogo a dinheiro:** proibido em geral, salvo apps licenciados e aprovados pelo Google ([Google Play, Real-Money Gambling, Games, and Contests](https://support.google.com/googleplay/android-developer/answer/9877032)).
- **[F] Epic × Google:** o Google cumpre nos EUA a decisão de outubro de 2024 (links externos e cobrança alternativa); em julho de 2026, Epic e Google desistiram do pedido para alterar a ordem, e o acordo separado entre as duas, com taxas menores, continua ([MacRumors, 15/7/2026](https://www.macrumors.com/2026/07/15/google-third-party-app-stores/); [Alphabet, 10-Q do 3º tri. de 2026](https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000084/goog-20260930.htm)). Segundo a Appcharge, o Google ainda não cobrava taxa sobre links externos nos EUA, mas disse que pretende cobrar ([Appcharge](https://www.appcharge.com/blog/epic-v-google-the-settlement-is-off-the-table)).

### 6.3 Epic × Apple e DMA: pagar fora da loja em 2026

- **[F] EUA:** em 11/12/2025, o 9º Circuito manteve a condenação da Apple por desacato, mas anulou a proibição total de comissão sobre compras feitas por link e devolveu o tema à primeira instância; em 6/5/2026 a Suprema Corte negou suspender a decisão e depois aceitou julgar o recurso da Apple (nº 25-1311) ([Digital Policy Alert](https://digitalpolicyalert.org/event/39719-us-court-of-appeals-for-the-ninth-circuit-affirmed-contempt-finding-and-remanded-on-commission-rate-in-epic-games-v-apple); [IPWatchdog, 30/6/2026](https://ipwatchdog.com/2026/06/30/high-court-grants-cert-in-apples-challenge-to-ninth-circuit-contempt-ruling-in-app-store-dispute/)).
- **[F] União Europeia:** novos termos da Apple desde 1/10/2026: 26% para compras com IAP na App Store, 15% quando o app manda o usuário comprar fora (10% nos programas para pequenos desenvolvedores) e 5% (*Core Technology Commission*) para apps distribuídos fora da App Store; a taxa por instalação acabou ([Apple Newsroom, ago./2026](https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/); [The Mac Observer](https://www.macobserver.com/news/eu-app-store-terms-october-1-rate-card/)).

### 6.4 Steam

- **[F]** Desde outubro de 2021, as regras do Steamworks proíbem aplicativos em blockchain que emitam ou permitam trocar criptomoedas ou NFTs ([PC Gamer](https://pcgamer.com/steam-bans-nfts-cryptocurrencies-blockchain); [Engadget](https://www.engadget.com/steam-ban-cryptocurrency-nft-trading-blockchain-valve-165038811.html)); um desenvolvedor relatou ter ouvido da Valve que a regra estende a proibição de itens com valor monetário real ([PCGamesN](https://www.pcgamesn.com/steam/nft-crypto-games-banned-steam)).
- **[F]** No Mercado da Comunidade, a Steam cobra 5% e a publicadora define a própria taxa (10% no CS2); o dinheiro vai para a carteira Steam, sem saque oficial (ficha [G05](fichas/G05-banana-e-bongo-cat.md), com base no [FAQ da Steam](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B)). O processo de Nova York (seção 3.4) mostra o limite desse modelo quando há mercado cinza tolerado.

### 6.5 PWA × apps nas lojas

- **[F]** A Apple chegou a tirar os web apps da tela inicial na UE no beta do iOS 17.4 e recuou em março de 2024; a Comissão disse que a remoção não era exigida pelo DMA ([Engadget](https://www.engadget.com/apple-backtracks-on-plans-to-get-rid-of-web-apps-on-iphones-in-the-eu-195232177.html)).

**[H] Comparação para decidir na Fase 2**

| Aspecto | PWA (só no site) | App na App Store / Google Play |
|---|---|---|
| Comissão | Só a do gateway | IAP obrigatório para moeda e itens (UE: 26% com IAP, 15% por link; EUA: link sem comissão por ora, sob recurso) |
| RMT | Possível, limitado só pela lei e pelo gateway | Saque ou leilão em dinheiro no app: provável rejeição (5.3.3); moeda do Google só vale no próprio jogo |
| Moeda premium | Regras do estúdio (respeitando CPC, ECA Digital etc.) | Não pode expirar (Apple), chances de loot box obrigatórias |
| Menores e classificação | O estúdio resolve verificação de idade e classificação (IARC exige loja ou sistema aprovado; ver 05b) | A loja traz controles parentais e classificação, que a CPC manda usar |
| Distribuição | Sem descoberta pela loja; instalação manual | Descoberta e confiança, com risco de remoção por mudança de política |

- **[H] Desenho mais seguro:** o mercado entre jogadores e qualquer camada de dinheiro ficam na **web**; os apps de loja vendem só moeda fechada via IAP, ou nada, com link para a loja web onde for permitido. Assim, uma mudança de política de loja não derruba a economia, e a economia não derruba o app.

## 7. Modelo de RMT × jurisdição × risco

Leitura do estúdio **[H]** construída sobre as seções 1 a 6 e, na coluna "Brasil", sobre a seção 11 do [05b](05b-rmt-legal-brasil.md). "Risco" é a chance de o modelo exigir licença, ser enquadrado como ilícito, gerar sanção ou ser recusado por gateway ou loja, com as normas de nov./2026. 🟢 baixo · 🟡 médio, depende de desenho e parecer · 🔴 alto ou proibido · "n.p." = não pesquisado a fundo. Nenhuma célula substitui parecer local.

| Modelo | Brasil (05b) | União Europeia | Reino Unido | EUA | Coreia do Sul | Japão | China | Austrália | Gateways e lojas |
|---|---|---|---|---|---|---|---|---|---|
| **1. Token** (comprado do estúdio, revendido por ouro, sem saque) | 🟢 | 🟢 se o token for item que só compra do estúdio (fora de moeda eletrônica); preço em euros e arrependimento de 14 dias para não usado (CPC); 🟡 para menores com o DFA | 🟢 | 🟢 não é moeda "conversível" sem resgate; transparência de câmbio (FTC) | 🟡 não é câmbio por dinheiro em si, mas o operador é vigiado (art. 32(1)(7)) | 🟢/🟡 meio de pagamento pré-pago: garantia de 50% acima de ¥ 10 mi | n.p. (mercado fechado a estrangeiros) | 🟢 | 🟢 operador vendendo a própria moeda é aceito; nas lojas, via IAP |
| **2. Venda de personagem** (a: estúdio vende; b: bazar em moeda premium; c: bazar em dinheiro) | a 🟢 · b 🟢/🟡 · c 🟡/🔴 | a 🟢 · b 🟡 (moeda premium aceita por outro jogador se aproxima de moeda eletrônica) · c como o modelo 3 | a 🟢 · b 🟢/🟡 · c como o modelo 3 | a 🟢 · b 🟢/🟡 · c como o modelo 3 | a 🟢 · b 🟡 · c 🔴 (empresa intermediando troca por dinheiro) | a 🟢 · b 🟡 · c n.p. | n.p. | a 🟢 · b/c n.p. | c: as mesmas barreiras do modelo 3 |
| **3. Leilão em dinheiro** entre jogadores | 🔴 (🟡 só com parceiro autorizado e sem sorteio pago na origem) | 🟡/🔴 serviço de pagamento: só com PSP licenciado e contas dos vendedores; art. 30 do DSA quando deixar de ser pequena empresa; se houver sorteio pago, jogo de azar na BE/NL | 🟡/🔴 item com preço em libras vira *money's worth*: sorte paga exige licença | 🔴 transmissão de dinheiro (FinCEN e licenças estaduais) se o estúdio segurar o dinheiro; sorte paga + prêmio vendável (Nova York × Valve) | 🔴 art. 32(1)(7): até 5 anos de prisão | 🟡/🔴 n.p. (provável regime de transferência de fundos) | 🔴 | n.p. | 🔴 Stripe proíbe dinheiro entre pessoas sem produto de marketplace; Adyen proíbe moeda sacável para plataformas; Apple 5.3.3 e Google ("moeda só no próprio jogo") empurram para fora do app |
| **4. Saque em dinheiro** (o estúdio ou parceiro paga reais/euros/dólares por moeda ou itens) | 🔴 muito alto | 🔴 moeda eletrônica ou serviço de pagamento com licença; entidades obrigadas de PLD (AMLR de 2027); se for blockchain, regime de cripto | 🔴 | 🔴 administrador e câmbio de moeda conversível = MSB + licenças estaduais (caso Linden Lab/Tilia) | 🔴 proibido na prática (P2E sem classificação) | 🔴 moeda pré-paga só é devolvida em dinheiro quando o serviço acaba | 🔴 proibido desde 2016 | n.p. | 🔴 Stripe, Adyen e PayPal restringem ou proíbem; Steam proíbe itens com valor real; Apple 5.3 |
| **5. Crédito fechado sem saque** (carteira usada na loja e para comprar de outros jogadores) | 🟡 | 🟡 a exceção de rede limitada cobre a loja do estúdio; pagar outros jogadores com o crédito o aproxima de moeda eletrônica; notificação acima de € 1 milhão | 🟡 n.p. | 🟡 não é conversível sem resgate, mas mercado cinza tolerado vira prova (Nova York × Valve) | 🟡 | 🟡 meio pré-pago | n.p. | 🟢/🟡 | 🟡 créditos do próprio vendedor "podem ter limites" (Stripe); IAP nas lojas |
| **Modificador: sorteio pago** (loot box, gacha, refino pago com falha) em qualquer modelo | 🔴 para menores (ECA Digital); 🔴 se o prêmio vira dinheiro | 🔴 Bélgica; 🔴 Países Baixos se itens transferíveis; menores: diretrizes do DSA e DFA; 🟡 Alemanha (classificação) | 🟡 princípios de 2023; 🔴 se o prêmio for negociável | 🟡 FTC (probabilidades, menores de 16); 🔴 se o prêmio for negociável | 🟡 probabilidades obrigatórias e indenização tripla; 🔴 com prêmio sacável | 🟡 *kompu gacha* proibido; probabilidades corretas | 🟡 probabilidades e limites para menores | 🟡 classificação mínima M; jogo de azar simulado = R 18+ | 🟡 probabilidades antes da compra (Apple, Google); Stripe proíbe sorte com prêmio de valor |

**As quatro perguntas, olhando para fora do Brasil** (complementa a tabela da seção 11 do 05b)

| Modelo | Inspira-se em / diferencia-se de | Problema que resolve | Comportamento que incentiva | Risco que cria fora do Brasil |
|---|---|---|---|---|
| Token | WoW Token e PLEX ([F06](fichas/F06-world-of-warcraft.md), [F01](fichas/F01-eve-online.md)); câmbio de gemas do GW2 ([F07](fichas/F07-guild-wars-2.md)) | Canal oficial para a demanda por ouro | Pagante compra ouro indiretamente; não pagante farma o token | Preço em moeda real e reembolso de 14 dias na UE; DFA pode tratar como *pay-to-progress* para menores; Coreia exige cautela |
| Venda de personagem | Bazar de personagens do Tibia ([F04](fichas/F04-tibia.md)) | Tira do mercado negro a venda de contas | Subir personagens para vender | Em dinheiro, vira marketplace de pagamentos (PSD2, MSB, Coreia art. 32) |
| Leilão em dinheiro | Casa de leilão em dinheiro do Diablo III ([G01](fichas/G01-diablo-3-casa-de-leilao.md)) | Formaliza o mercado paralelo | Jogar como trabalho; bots | Licença de pagamento ou parceiro; prêmio vendável transforma qualquer sorte em jogo de azar (BE, NL, UK, NY) |
| Saque | Entropia ([G02](fichas/G02-entropia-universe.md)); Second Life/Tilia | "Jogar para ganhar" | Farmar por renda; multicontas | Licença financeira em cada país, PLD, proibição na Coreia, China e Índia, recusa de lojas e gateways |
| Crédito fechado | Carteira e Mercado da Comunidade Steam ([G05](fichas/G05-banana-e-bongo-cat.md)) | Financia compras com vendas, sem saque | Especulação; mercado cinza de "saque por fora" | O mercado cinza tolerado é a tese de Nova York contra a Valve |

## 8. Luzes vermelhas, amarelas e verdes

A cor é classificação do estúdio **[H]**; as normas e decisões linkadas são **[F]** (detalhe nas seções 1 a 6). Complementa a seção 12 do [05b](05b-rmt-legal-brasil.md), sem repeti-la.

### 🔴 Luzes vermelhas (quase certamente proibido, exige licença ou derruba gateway e loja)

1. **Sorteio pago com prêmio negociável ou sacável.** É o ponto em que Bélgica, Países Baixos, Reino Unido, Nova York e Coreia convergem: o valor de mercado do prêmio transforma a mecânica em jogo de azar ([Ksa, 2018](https://kansspelautoriteit.nl/publish/library/17/study_into_loot_boxes_-_a_treasure_or_a_burden_-_eng.pdf); [Gambling Commission](https://www.gamblingcommission.gov.uk/news/article/gambling-commission-shines-light-on-virtual-currencies-esports-and-social); [Jones Walker sobre NY × Valve](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html); [GIGAZINE sobre P2E](https://gigazine.net/gsc_news/en/20220105-korean-tells-block-p2e-games/)).
2. **Saque ou recompra de moeda e itens pelo estúdio sem licença**: moeda eletrônica na UE ([EMD2](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0110)), transmissão de dinheiro nos EUA ([FinCEN, 2013](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering)), proibição de câmbio na Coreia ([Kyunghyang](https://www.khan.co.kr/article/202202281317001)) e na China ([notificação de 2016](https://www.chinalawtranslate.com/en/ministry-of-culture-notice-regarding-strengthening-regulation-online-gaming-operations/)), devolução vedada no Japão ([ITmedia](https://nlab.itmedia.co.jp/cont/articles/3270925/amp/)), proibição na Índia ([SCC Online](https://www.scconline.com/blog/post/2025/08/24/promotion-regulation-online-gaming-act-2025-legal-reform/)).
3. **Dinheiro de jogadores passando pela conta do estúdio** (leilão ou bazar em dinheiro sem PSP de marketplace): remessa e serviço de pagamento ([PSD2, art. 4(22)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32015L2366)) e "transferência de dinheiro entre pessoas", proibida pela [Stripe](https://stripe.com/legal/restricted-businesses).
4. **Loot box paga liberada na Bélgica** ([Collabra, 2023](https://online.ucpress.edu/collabra/article/9/1/57641/195100/Breaking-Ban-Belgium-s-Ineffective-Gambling-Law)) e, com itens transferíveis, nos Países Baixos.
5. **Blockchain, NFT ou token cripto na economia:** proibido na Steam ([PC Gamer](https://pcgamer.com/steam-bans-nfts-cryptocurrencies-blockchain)), recusado na Coreia ([Yahoo Finance](https://finance.yahoo.com/news/korean-court-says-nft-game-060419030.html)) e restrito nos gateways ([Stripe](https://stripe.com/legal/restricted-businesses)).
6. **Saque, leilão em dinheiro ou moeda comprada que vira dinheiro dentro de app de loja** ([Apple, 5.3.3](https://developer.apple.com/app-store/review/guidelines/); [Google Play, pagamentos](https://support.google.com/googleplay/android-developer/answer/9858738?hl=en)).
7. **Menores comprando sem consentimento ou expostos a loot box paga:** acordo da FTC com a HoYoverse (menores de 16) ([FTC](https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental)), COPPA ([Federal Register](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)), diretrizes do DSA ([par. 69](https://ec.europa.eu/newsroom/dae/redirection/document/118226)).
8. **Integração oficial do jogo com sites de venda de itens por dinheiro**, que na Coreia é investigada como "facilitar o câmbio" ([Gamemeca, 11/6/2026](https://www.gamemeca.com/en/view.php?gid=1776384)).

### 🟡 Luzes amarelas (zonas cinzentas: decidir só com parecer)

1. **Moeda premium transferível entre jogadores** (em vez do token como item): passa a ser "aceita por pessoa diferente do emissor", núcleo da moeda eletrônica ([EMD2, art. 2(2)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0110)).
2. **Leilão em dinheiro com PSP licenciado e contas dos vendedores**: obrigações de marketplace (DSA, art. 30, depois da fase de pequena empresa), KYC e PLD herdados, tributos de cada país, restrições de gateway ([Adyen](https://www.adyen.com/legal/list-restricted-prohibited)).
3. **Resposta a *chargeback*:** bloquear a conta inteira de quem contesta cobranças foi tratado como prática injusta no caso Epic ([FTC, 2022](https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations)).
4. **Economia com várias moedas, câmbios sucessivos e pacotes que forçam sobra** (princípios 2 e 3 da CPC) ([PDF](https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf)).
5. **Arrependimento de 14 dias para moeda não usada** num jogo em que ela vira token revendável (princípio 5 da CPC).
6. **Loop idle para menores:** recompensa por ação repetida, notificações e urgência ([diretrizes do DSA, pars. 57 e 61](https://ec.europa.eu/newsroom/dae/redirection/document/118226)); recursos compulsivos desligáveis no rascunho do DFA ([Mobilegamer.biz](https://mobilegamer.biz/eus-draft-digital-fairness-act-takes-aim-at-loot-boxes-virtual-currencies-and-pay-to-win/)).
7. **Loot box só para adultos verificados**: tolerada no Reino Unido (com controles), Austrália (classificação M) e Coreia (probabilidades e risco de indenização tripla), mas sob pressão da CPC ([declaração de 30/9/2026](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf)).
8. **Crédito fechado usado para comprar de outros jogadores** (modelo Steam), sobretudo se surgir mercado cinza de saque por fora ([Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html)).
9. **Obrigações que acendem por porte ou volume:** notificação acima de € 1 milhão na exceção de rede limitada ([PSD2, art. 37](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32015L2366)); garantia de 50% no Japão acima de ¥ 10 milhões ([Monolith Law](https://monolith.law/en/general-corporate/payment-services-act-mobile-games-application)); agente local na Coreia ([Chambers](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-korea)); fim da isenção de pequena empresa no DSA ([art. 19](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065)).
10. **Classificação etária com compras e sorteios**: Alemanha ([§ 10b JuSchG](https://www.gesetze-im-internet.de/juschg/__10b.html)) e Austrália ([Classification](https://www.classification.gov.au/about-us/media-and-news/news/new-mandatory-minimum-classifications-for-gambling-games-content)).
11. **Token vendido a adulto e revendido por ouro a menor**, diante da proibição de *pay-to-win* para menores no rascunho do DFA.
12. **Termos de uso globais com lei e foro brasileiros** para consumidores de outros países: **[NV]** não pesquisei a regra europeia de lei aplicável a contratos de consumo; levar ao advogado.

### 🟢 Luzes verdes (baixo risco, com cumprimento básico)

1. **Venda direta, pelo estúdio, de moeda premium fechada e itens com conteúdo conhecido**, com preço em moeda real, moeda que não expira, escolha de quantidade e reembolso do não usado (CPC; [Apple, 3.1.1](https://developer.apple.com/app-store/review/guidelines/)).
2. **Token como item vendido pelo estúdio e negociado por ouro, sem saque**, fora da exceção de transmissão de dinheiro ([FinCEN](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering)) e de moeda eletrônica ([EMD2](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0110)) na nossa leitura.
3. **Mercado e casa de leilão em ouro**, moeda do jogo sem saque oficial ([Diretiva 2018/843, considerando 10](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32018L0843)).
4. **Recebimento por PSP como lojista**, vendendo a própria moeda ([Stripe](https://stripe.com/legal/restricted-businesses)).
5. **Probabilidades publicadas para tudo que for aleatório**, mesmo gratuito, no padrão chinês, coreano e das lojas.
6. **PWA com loja web**, e apps de loja só com moeda fechada via IAP ou com link externo onde permitido.
7. **Modo protegido para menores por padrão** (gasto desligado, sem sorteio pago, sem notificação de urgência), que atende ao mesmo tempo ECA Digital, diretrizes do DSA, rascunho do DFA, FTC e COPPA.

## 9. Perguntas para levar a um advogado

As marcadas com ★ travam decisões da Fase 2. Complementam as 25 perguntas do 05b.

**União Europeia**

1. ★ Se a moeda premium puder pagar itens de outros jogadores, ela vira moeda eletrônica (EMD2, art. 2(2))? Desenhar o token como item que só compra do estúdio resolve? O mercado entre jogadores cabe na exceção de rede limitada (PSD2, art. 3(k)(i) e (ii)), e precisamos notificar acima de € 1 milhão (art. 37)?
2. ★ Um jogo com chat, guildas e mercado entre jogadores é "plataforma online" para o DSA? Quando perdemos a isenção de pequena empresa, que obrigações entram de uma vez (arts. 25, 28 e 30)? Jogador que vende com habitualidade vira "comerciante" (art. 30)?
3. ★ Pelos princípios 1 e 5 da CPC, temos de mostrar preço em euros para o que se compra com ouro quando o ouro pode vir de um token pago? Como aplicar o arrependimento de 14 dias a moeda já convertida em token e revendida?
4. ★ No texto oficial do DFA (11/11/2026), um token comprado por um adulto e revendido por ouro a um menor conta como *pay-to-progress* do menor? O que muda para moeda paga e loot box em jogos com mais de 25% de menores?
5. Que lista mínima de países da UE deve ter sorteio pago desligado (Bélgica, Países Baixos, Espanha se a lei sair)? A lógica holandesa de "item transferível = prêmio" ainda vale depois do Raad van State?

**Reino Unido**

6. Com mercado oficial em libras (leilão ou venda de personagem), itens do jogo viram *money's worth* para a Lei de Jogos de 2005? Que mecânicas de sorte ficam proibidas sem licença?

**Estados Unidos**

7. ★ Com leilão em dólares ou saque, o estúdio é "administrador" ou "câmbio" de moeda virtual conversível (FIN-2013-G001)? Um parceiro licenciado (modelo Linden Lab/Tilia) nos tira desse papel em todos os estados?
8. ★ Um sorteio pago num jogo com mercado oficial seria jogo ilegal em Nova York (tese contra a Valve) ou em Washington (*Kater*)? Que estados bloquear?
9. Como responder a *chargebacks* (congelar a moeda contestada, reverter trocas) sem repetir a prática que a FTC condenou no caso Epic?
10. Somos serviço de "público misto" para a COPPA? Que portão de idade e que fluxo de consentimento bastam?

**Ásia e Oceania**

11. ★ Coreia: token pago trocado por ouro, bazar de personagens em moeda premium ou integração com site de venda violam o art. 32(1)(7)? A partir de que números precisamos de agente local?
12. Japão: a moeda premium é meio de pagamento pré-pago? Como conciliar o reembolso de 14 dias da UE com a regra japonesa que só permite devolver em dinheiro quando o serviço acaba? Gacha com prêmio vendável pode ser crime de jogo de azar?
13. Austrália: que mecânicas nossas contariam como jogo de azar simulado (R 18+)? China e Índia: basta bloquear o acesso?

**Pagamentos e lojas**

14. ★ Para cada modelo de RMT, que gateway aceita (Stripe, Adyen, PayPal, Mercado Pago, PagBank, Pagar.me), com que MCC, que reserva e que KYC? Precisamos de registro de alto risco na Visa?
15. ★ O token negociável por ouro e o mercado entre jogadores passam na revisão da App Store e do Google Play? O que pode ficar no app e o que precisa ficar na web? Quanto custa e quanto dura o link externo nos EUA (recurso na Suprema Corte) e na UE (15%)?
16. Convém separar a operação com dinheiro (leilão, saque) em outra empresa ou outro país? Que seguro contratar?

## Implicações para o nosso jogo

1. **[H] O porto seguro global coincide com o brasileiro:** moeda premium fechada, token vendido pelo estúdio e negociado por ouro, mercado e leilão em ouro e venda direta de conteúdo conhecido. Fora do Brasil, a loja precisa ainda cumprir os sete princípios da CPC: preço em moeda real, poucas moedas, escolha de quantidade, reembolso de 14 dias para moeda não usada e termos sem mudança unilateral de valor.
2. **[H] Sorteio pago e dinheiro de verdade não podem coexistir**, agora com respaldo de vários países: na Bélgica, nos Países Baixos, no Reino Unido, em Nova York e na Coreia, o que torna a loot box um jogo de azar é o prêmio ter valor de mercado. Se o conceito da Fase 2 tiver qualquer saída para dinheiro, o jogo nasce sem aleatoriedade paga.
3. **[H] RMT precisa ser um módulo ligado e desligado por país.** Sorteio pago desligado no mínimo na Bélgica e nos Países Baixos; qualquer camada de dinheiro desligada na Coreia, China e Índia; modo protegido para menores em todos.
4. **[H] Dinheiro de jogador nunca passa pela conta do estúdio.** Se houver leilão em dinheiro, só com produto de marketplace de um PSP licenciado, com contas abertas em nome dos vendedores, e com o estúdio esperando exigências de KYC e PLD herdadas.
5. **[H] A economia mora na web.** PWA como casa do mercado e de qualquer RMT; apps de loja com moeda fechada via IAP ou com link externo onde permitido.
6. **[H] Antifraude é requisito de desenho:** carência antes de transferir bens comprados com dinheiro, limites para contas novas, detecção de circularidade, canal de denúncia de fraude e resposta proporcional a *chargebacks*. Ficar abaixo de 1,5% de disputas é questão de sobrevivência com as bandeiras.
7. **[H] Calendário para acompanhar:** tramitação do DFA (proposta de 11/11/2026); ações coordenadas da CPC (30/9/2026); Nova York × Valve (audiência prevista para 26/1/2027, **[NV]**); recurso da Apple na Suprema Corte; publicação da PSD3/PSR; AMLR a partir de 10/7/2027; lei espanhola de menores; projeto coreano de multa de até 3% da receita.

## Como isso pode dar errado

1. **A loot box "só para adultos" vira jogo de azar** porque o item tem preço no nosso próprio mercado. **[F]** Foi a tese da autoridade holandesa em 2018 ([Ksa](https://kansspelautoriteit.nl/publish/library/17/study_into_loot_boxes_-_a_treasure_or_a_burden_-_eng.pdf)) e é a de Nova York contra a Valve ([Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html)). Mitigação: nenhum sorteio pago enquanto houver mercado com preço em dinheiro.
2. **O gateway encerra a conta e retém o dinheiro.** **[F]** Stripe, Adyen e PayPal restringem moeda sacável, dinheiro entre usuários e prêmios (seção 5.2). **[H]** Mitigação: aprovação por escrito do modelo antes do lançamento, dois gateways e nenhuma mudança de modelo sem avisar o gateway.
3. **A loja recusa o app ou muda a regra.** **[F]** A Apple alterou suas diretrizes em 16/10/2026 ([Apple](https://developer.apple.com/app-store/review/guidelines/)) e suas taxas na UE em 1/10/2026 ([Apple Newsroom](https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/)). **[H]** Mitigação: economia na web e app como cliente substituível.
4. **O mercado cinza vira prova contra nós.** **[F]** A integração do Lasthlas com a ItemMania gerou investigação na Coreia ([Gamemeca](https://www.gamemeca.com/en/view.php?gid=1776384)) e a tolerância a mercados de terceiros é central no caso contra a Valve. **[H]** Mitigação: termos claros, combate ativo a sites de RMT e nenhuma API para eles.
5. **Fraude em cadeia e lavagem.** **[F]** Chaves do CS:GO e V-Bucks mostram cartões roubados virando bens revendidos ([Engadget](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html); [OCCRP](https://www.occrp.org/en/daily/9109-independent-credit-card-thieves-use-fortnite-to-launder-money)). **[H]** Um único ataque pode levar o estúdio acima de 1,5% de disputas e para os programas de monitoramento das bandeiras.
6. **As regras dos países se contradizem.** **[F]** A UE quer reembolso de moeda não usada em 14 dias (CPC), o Japão só permite devolução em dinheiro quando o serviço acaba ([ITmedia](https://nlab.itmedia.co.jp/cont/articles/3270925/amp/)) e a Apple proíbe moeda que expira ([Apple, 3.1.1](https://developer.apple.com/app-store/review/guidelines/)), enquanto o Japão isenta da garantia a moeda que expira em seis meses. **[H]** Um único desenho global pode ser impossível; a moeda precisa de regras por país.
7. **O sucesso liga as obrigações de uma vez.** **[F]** A isenção de pequena empresa do DSA dura até 12 meses depois de perder o status ([DSA, art. 19](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065)); a garantia japonesa e a notificação europeia acendem por volume. **[H]** Mitigação: construir desde já como se fôssemos grandes (verificação de idade, rastreabilidade de vendedores, relatórios).
8. **A defesa antifraude vira infração.** **[F]** A FTC tratou como injusto bloquear a conta de quem contestava cobranças ([FTC](https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations)). **[H]** Mitigação: congelar só o que foi contestado, com processo de contestação.
9. **A regulação anda mais rápido que o desenvolvimento.** **[F]** Em pouco mais de um mês vieram as onze ações da CPC (30/9/2026), os novos termos da Apple na UE (1/10/2026) e a proposta do DFA (11/11/2026). **[H]** Mitigação: revisão jurídica a cada marco e módulo de RMT por país.
10. **Reputação.** **[F]** A CPC divulgou o nome dos onze jogos e empresas que investiga ([declaração de 30/9/2026](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf)). **[H]** Para um estúdio novo, entrar numa lista dessas antes de construir comunidade seria fatal.

## Fontes

Todos os links foram acessados em novembro de 2026. Tipos: oficial (governo, regulador, tribunal, empresa sobre as próprias regras), escritório (análise de escritório de advocacia), imprensa, acadêmico, especializado (consultorias e prestadores de pagamento), wiki. Estudo irmão: [05b — RMT no Brasil](05b-rmt-legal-brasil.md); fichas citadas: [F01](fichas/F01-eve-online.md), [F04](fichas/F04-tibia.md), [F06](fichas/F06-world-of-warcraft.md), [F07](fichas/F07-guild-wars-2.md), [G01](fichas/G01-diablo-3-casa-de-leilao.md), [G02](fichas/G02-entropia-universe.md), [G05](fichas/G05-banana-e-bongo-cat.md).

**União Europeia**

1. [Comissão Europeia — ações coordenadas da rede CPC sobre redes sociais, jogos online e buscadores](https://commission.europa.eu/live-work-travel-eu/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en) — oficial.
2. [Rede CPC — Key Principles on In-game Virtual Currencies (PDF)](https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf) — oficial — 21/3/2025.
3. [Rede CPC — Joint Statement on Stronger Consumer Protection in Video Games (PDF)](https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en?filename=CPC%20Network%20Joint%20Statement%20of%20the%20Consumer%20Protection%20Cooperation%20Network%20on%20online%20games.pdf) — oficial — 30/9/2026.
4. [Regulamento (UE) 2022/2065 — Digital Services Act (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065) — oficial.
5. [Comissão Europeia — Diretrizes do art. 28 do DSA, C(2025) 6826](https://ec.europa.eu/newsroom/dae/redirection/document/118226) — oficial — 7/10/2025.
6. [Hunton — European Commission issues guidelines on the protection of minors](https://www.hunton.com/privacy-and-information-security-law/european-commission-issues-guidelines-on-the-protection-of-minors) — escritório — jul./2025.
7. [Comissão Europeia — Digital Fairness Act, "Have your say"](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14622-Digital-Fairness-Act_en) — oficial.
8. [Wikipedia — Digital Fairness Act](https://en.wikipedia.org/wiki/Digital_Fairness_Act) — wiki.
9. [CMS — Inside the EU's planned Digital Fairness Act](https://cms.law/en/fra/legal-updates/inside-the-eu-s-planned-digital-fairness-act-digital-design-subscription-traps-and-influencer-marketing) — escritório — 19/10/2026.
10. [Trending Topics — Digital Fairness Act: what the EU plans](https://www.trendingtopics.eu/digital-fairness-act-iab-criticism/) — imprensa — nov./2026.
11. [Mobilegamer.biz — EU's draft Digital Fairness Act takes aim at loot boxes, virtual currencies and pay-to-win](https://mobilegamer.biz/eus-draft-digital-fairness-act-takes-aim-at-loot-boxes-virtual-currencies-and-pay-to-win/) — imprensa — 10/11/2026.
12. [Diretiva 2009/110/CE — moeda eletrônica (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0110) — oficial.
13. [Diretiva (UE) 2015/2366 — PSD2 (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32015L2366) — oficial.
14. [Parlamento Europeu — Payment services deal: more protection from online fraud and hidden fees](https://www.europarl.europa.eu/news/en/press-room/20251121IPR31540/payment-services-deal-more-protection-from-online-fraud-and-hidden-fees) — oficial — nov./2025.
15. [A&O Shearman — Council and Parliament reach provisional agreement on EU payments package](https://finreg.aoshearman.com/council-of-the-eu-and-european-parliament-reach-provisional-agreement-on-eu-payments-package) — escritório — nov./2025.
16. [Conselho da UE — documento ST 8543/26 ADD 1 REV 1](https://data.consilium.europa.eu/doc/document/ST-8543-2026-ADD-1-REV-1/en/pdf) — oficial — abr./2026.
17. [Open Banking Tracker — PSD3 & PSR readiness](https://www.openbankingtracker.com/guides/psd3-psr-readiness) — especializado — 2026.
18. [Diretiva (UE) 2018/843 — antilavagem (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32018L0843) — oficial.
19. [Regulamento (UE) 2024/1624 — AMLR (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1624) — oficial.
20. [Chambers — Overview of the EU AML/CFT legislative package](https://chambers.com/articles/overview-of-the-eu-aml-cft-legislative-package) — escritório.
21. [Public Gaming — Belgium defines video game loot boxes as illegal gambling](https://mail.publicgaming.com/news-categories/legal/2875-belgium-defines-video-game-loot-boxes-as-illegal-gambling) — imprensa — 25/4/2018.
22. [Kansspelcommissie — Research Report on Loot Boxes (tradução, cópia da Skadden)](https://www.skadden.com/-/media/files/publications/2019/08/video-gaming-egaming-law-update/fn12_onderzoeksrapportlootboxenengelspublicatie.pdf?la=en) — oficial (tradução) — abr./2018.
23. [Xiao — Breaking Ban: Belgium's Ineffective Gambling Law Regulation of Video Game Loot Boxes (Collabra)](https://online.ucpress.edu/collabra/article/9/1/57641/195100/Breaking-Ban-Belgium-s-Ineffective-Gambling-Law) — acadêmico — 2023.
24. [PMC — artigo que cita o levantamento de 2022 na Bélgica](https://pmc.ncbi.nlm.nih.gov/articles/PMC12583229) — acadêmico.
25. [Kansspelautoriteit — Study into loot boxes: a treasure or a burden?](https://kansspelautoriteit.nl/publish/library/17/study_into_loot_boxes_-_a_treasure_or_a_burden_-_eng.pdf) — oficial — abr./2018.
26. [The Next Web — Some gaming loot boxes may violate Dutch gambling law](https://thenextweb.com/news/some-gaming-loot-boxes-may-violate-dutch-gambling-law) — imprensa — 19/4/2018.
27. [Raad van State — comunicado sobre a multa às loot boxes do FIFA](https://www.raadvanstate.nl/actueel/nieuws/@130206/dwangsom-onterecht-opgelegd-loot-boxes/) — oficial — 9/3/2022.
28. [Raad van State — decisão 202005769/1/A3](https://www.raadvanstate.nl/uitspraken/@130150/202005769-1-a3/) — oficial — 9/3/2022.
29. [NOS — vitória da EA no caso das loot boxes](https://nos.nl/l/2420438) — imprensa — mar./2022.
30. [Ministério de Consumo (Espanha) — proibição de acesso de menores às caixas de recompensa](https://www.dsca.gob.es/es/comunicacion/notas-prensa/ministerio-consumo-prohibe-acceso-menores-cajas-botin-videojuegos-evitar) — oficial — jun./2024.
31. [Congreso de los Diputados — BOCG, Projeto de Lei Orgânica 121/000052](https://www.congreso.es/public_oficiales/L15/CONG/BOCG/A/BOCG-15-A-52-1.PDF) — oficial.
32. [Newtral — claves del proyecto de ley de menores que avanza en el Congreso](https://www.newtral.es/menores-entornos-digitales-congreso/20260413/) — imprensa — 13/4/2026.
33. [§ 10b JuSchG (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/juschg/__10b.html) — oficial.
34. [WinFuture — USK stellt neue Prüfkriterien und Kennzeichnungen für Games vor](https://winfuture.de/news,133526.html) — imprensa.
35. [Landtag da Baviera — Drucksache 19/3110](https://www.bayern.landtag.de/www/ElanTextAblage_WP19/Drucksachen/Schriftliche%20Anfragen/19_0003110.pdf) — oficial.
36. [Bundesrat — Drucksache 517/25](https://dserver.bundestag.de/brd/2025/0517-25B.pdf) — oficial — 2025.

**Reino Unido**

37. [DCMS — Loot boxes in video games: update on improvements to industry-led protections](https://www.gov.uk/guidance/loot-boxes-in-video-games-update-on-improvements-to-industry-led-protections) — oficial — 18/7/2023.
38. [Ukie — New loot box principles agreed by industry](https://ukie.org.uk/news/new-loot-box-principles-agreed-by-industry) — indústria — jul./2023.
39. [CMS — Loot boxes: 11 new principles for an industry-led approach](https://cms.law/en/gbr/legal-updates/loot-boxes-11-new-principles-for-an-industry-led-approach) — escritório.
40. [Royal Society Open Science — Non-compliance with and non-enforcement of UK loot box industry self-regulation](https://royalsocietypublishing.org/rsos/article/12/5/250704/235838/Non-compliance-with-and-non-enforcement-of-UK-loot) — acadêmico — 2025.
41. [Mobilegamer.biz — Accusations fly as researcher claims UK loot box regulations are failing](https://mobilegamer.biz/accusations-fly-as-researcher-claims-uk-loot-box-regulations-are-failing/) — imprensa — 2025.
42. [Gambling Commission — Gambling Commission shines light on virtual currencies, eSports and social gaming](https://www.gamblingcommission.gov.uk/news/article/gambling-commission-shines-light-on-virtual-currencies-esports-and-social) — oficial — 2016.
43. [CMS — Further clarification of the Gambling Commission's position on virtual currencies, eSports and social gaming](https://cms.law/en/gbr/legal-updates/further-clarification-of-the-gambling-commission-s-position-on-virtual-currencies-esports-and-social-gaming2) — escritório — 2017.
44. [CMS Law-Now — Inside the skins gambling surge: DCMS review](https://cms-lawnow.com/en/ealerts/2025/10/inside-the-skins-gambling-surge-dcms-review-exposes-risks-and-regulatory-gaps-in-skins-gambling) — escritório — out./2025.

**Estados Unidos**

45. [FTC — Fortnite video game maker Epic Games to pay more than half a billion dollars](https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations) — oficial — 19/12/2022.
46. [FTC — $245 million settlement alleges Epic used dark patterns](https://www.ftc.gov/business-guidance/blog/2022/12/245-million-ftc-settlement-alleges-fortnite-owner-epic-games-used-digital-dark-patterns-charge) — oficial — dez./2022.
47. [FTC — FTC finalizes order requiring Epic Games to pay $245 million](https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making) — oficial — 14/3/2023.
48. [FTC — Fortnite Refunds](https://www.ftc.gov/enforcement/refunds/fortnite-refunds) — oficial.
49. [FTC — Genshin Impact game developer will be banned from selling lootboxes to teens under 16 without parental consent](https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental) — oficial — 17/1/2025.
50. [FTC — página do caso Cognosphere, LLC, U.S. v.](https://www.ftc.gov/legal-library/browse/cases-proceedings/222-3152-cognosphere-llc-us-v) — oficial.
51. [FTC — voto concorrente de Andrew Ferguson no caso Cognosphere](https://search.ftc.gov/system/files/ftc_gov/pdf/ferguson-cognosphere-concurrence.pdf) — oficial — jan./2025.
52. [Federal Register — Children's Online Privacy Protection Rule](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule) — oficial — 22/4/2025.
53. [FTC — FTC finalizes changes to children's privacy rule](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data) — oficial — jan./2025.
54. [FinCEN — FIN-2013-G001, Application of FinCEN's regulations to persons administering, exchanging, or using virtual currencies](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering) — oficial — 18/3/2013.
55. [Modem World — The Linden Dollar: token or currency? The US Treasury ponders](https://modemworld.me/2013/04/05/the-linden-dollar-token-or-currency-the-us-treasury-ponders/) — blog — 5/4/2013.
56. [iTnews — Virtual world Second Life to enforce anti-money laundering regs](https://www.itnews.com.au/news/virtual-world-second-life-to-enforce-anti-money-laundering-regs-527558) — imprensa.
57. [Second Life — Tilia officially begins operations today in Second Life](https://community.secondlife.com/blogs/entry/2598-tilia-officially-begins-operations-today-in-second-life/) — oficial (empresa).
58. [CFPB — CFPB report identifies financial and privacy risks to consumers in video gaming marketplaces](https://consumerfinance.gov/about-us/newsroom/cfpb-report-identifies-risks-to-consumers-in-video-gaming-marketplaces) — oficial — 4/4/2024.
59. [Winston & Strawn — Northern District of California dismisses with prejudice loot box suit against Supercell](https://www.winston.com/en/blogs-and-podcasts/the-playbook/loot-box-update-northern-district-of-california-dismisses-with-prejudice-loot-box-suit-against-supercell-oy) — escritório — 2023.
60. [9º Circuito — memorando 23-15144 (Mai v. Supercell)](https://cdn.ca9.uscourts.gov/datastore/memoranda/2024/05/09/23-15144.pdf) — oficial — 9/5/2024 (o certificado do site estava vencido quando tentei abrir; a data e o resultado vêm de resumos).
61. [Justia — Kater v. Churchill Downs Inc., No. 16-35010 (9th Cir. 2018)](https://law.justia.com/cases/federal/appellate-courts/ca9/16-35010/16-35010-2018-03-28.html) — decisão — 28/3/2018.
62. [ZwillGen — Virtual chips and Washington gambling law](https://www.zwillgen.com/litigation/virtual-chips-washington-gambling-law/) — escritório.
63. [Jones Walker — New York targets Valve's loot boxes as illegal gambling](https://www.joneswalker.com/en/insights/blogs/perspectives/new-york-targets-valves-loot-boxes-as-illegal-gambling.html) — escritório — 27/2/2026.
64. [PC Gamer — Valve asks New York court to dismiss Counter-Strike lawsuit](https://www.pcgamer.com/games/fps/valve-asks-new-york-court-to-dismiss-counter-strike-lawsuit-says-people-enjoy-surprises-and-equating-loot-boxes-to-gambling-is-nonsensical/) — imprensa — mai./2026.
65. [gHacks — Valve files motion to dismiss New York Counter-Strike loot box lawsuit](https://www.ghacks.net/2026/05/21/valve-files-motion-to-dismiss-new-york-counter-strike-loot-box-lawsuit-compares-item-cases-to-baseball-cards/) — imprensa — 21/5/2026.

**Ásia e Oceania**

66. [China Law Translate — Ministry of Culture notice regarding strengthening regulation of online gaming operations (2016)](https://www.chinalawtranslate.com/en/ministry-of-culture-notice-regarding-strengthening-regulation-online-gaming-operations/) — tradução de norma oficial.
67. [Game Developer — Online games in China are now required to disclose random loot box odds](https://gamedeveloper.com/business/online-games-in-china-are-now-required-to-disclose-random-loot-box-odds) — imprensa — mai./2017.
68. [Asia IP — Ministry of Culture issues comprehensive regulation on online games](https://asiaiplaw.com/article/ministry-of-culture-issues-comprehensive-regulation-on-online-games) — imprensa — 2010.
69. [Harris Sliwoski — China online game addiction prevention requirements](https://harris-sliwoski.com/chinalawblog/china-online-game-addiction-prevention-requirements/) — escritório.
70. [Wikipedia — Real-name system for online games in China](https://en.wikipedia.org/wiki/Real-name_system_for_online_games_in_China) — wiki.
71. [China Law Translate — 网络游戏管理办法 (草案征求意见稿)](https://www.chinalawtranslate.com/en/19889-2/) — tradução de norma oficial — dez./2023.
72. [Pillar Legal — Deep dive into draft rules that crashed China game stocks](https://www.pillarlegalpc.com/wp-content/uploads/2024/07/Deep-Dive-into-Draft-Rules-that-Crashed-China-Game-Stocks-final%5ELJ-2024-1-9.pdf) — escritório — jan./2024.
73. [PC Gamer — Chinese regulators may be having second thoughts about online gaming crackdown](https://pcgamer.com/chinese-regulators-may-be-having-second-thoughts-about-online-gaming-crackdown-proposed-rule-changes-have-been-removed-from-government-website) — imprensa — jan./2024.
74. [ThePrint (Reuters) — China regulator removes draft video game rules from website](https://theprint.in/tech/china-regulator-removes-draft-video-game-rules-from-website-shares-jump/1934971) — imprensa — jan./2024.
75. [Shin & Kim — South Korea is expected to tighten its loot box probability disclosure laws](https://www.shinkim.com/eng/media/newsletter/3206) — escritório.
76. [Chambers — Gaming Law 2025: South Korea](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-korea) — escritório — 2025.
77. [MLex — South Korea's game companies face stricter regulations](https://www.mlex.com/mlex/articles/2286453/south-korea-s-game-companies-face-stricter-regulations) — imprensa.
78. [Lexology — Punitive damages and other special legal provisions for litigation concerning probability-based game items](https://www.lexology.com/library/detail.aspx?g=7ca78800-927d-4e28-8565-59a39e8dbfef) — escritório.
79. [Inven Global — South Korea eyes revenue penalties for probability disclosure breaches](https://www.invenglobal.com/articles/20244/loot-box-crackdown-south-korea-eyes-revenue-penalties-for-probability-disclosure-breaches) — imprensa.
80. [Kyunghyang Shinmun — Tribunal Constitucional confirma o art. 32(1)(7)](https://www.khan.co.kr/article/202202281317001) — imprensa — 28/2/2022.
81. [GIGAZINE — South Korean government asks Apple and Google to block P2E games](https://gigazine.net/gsc_news/en/20220105-korean-tells-block-p2e-games/) — imprensa — 5/1/2022.
82. [Yahoo Finance — S. Korean court says NFT game items are speculative](https://finance.yahoo.com/news/korean-court-says-nft-game-060419030.html) — imprensa.
83. [Gamemeca — Real-money trading of in-game items? Investigation underway](https://www.gamemeca.com/en/view.php?gid=1776384) — imprensa — 11/6/2026.
84. [Bloomberg — Japan consumer agency says "complete gacha" game feature illegal](https://www.bloomberg.com/news/articles/2012-05-18/japan-consumer-agency-says-complete-gacha-game-feature-illegal) — imprensa — 18/5/2012.
85. [Monolith Law — legal issues in game app management (Funds Settlement Act and Premiums Act)](https://monolith.law/en/general-corporate/game-regulation) — escritório — 2023.
86. [Monolith Law — Payment Services Act and mobile game apps](https://monolith.law/en/general-corporate/payment-services-act-mobile-games-application) — escritório.
87. [ITmedia — devolução de moeda de jogo não usada (em japonês)](https://nlab.itmedia.co.jp/cont/articles/3270925/amp/) — imprensa.
88. [Automaton — Bungo Stray Dogs game shuts down and publisher reportedly refuses refunds](https://automaton-media.com/en/news/bungo-stray-dogs-game-of-9-years-shuts-down-with-grace-period-of-just-one-day-as-publisher-reportedly-files-for-bankruptcy-and-refuses-to-issue-refunds/) — imprensa — 2024.
89. [Australian Classification — New mandatory minimum classifications for gambling-like games content](https://www.classification.gov.au/about-us/media-and-news/news/new-mandatory-minimum-classifications-for-gambling-games-content) — oficial — 2024.
90. [Australian Classification — ficha técnica das novas classificações (PDF)](https://classification.gov.au/sites/default/files/documents/factsheet-new-mandatory-classifications-for-gambling-like-content-in-video-games.pdf) — oficial — 2024.
91. [SCC Online — Promotion and Regulation of Online Gaming Act 2025](https://www.scconline.com/blog/post/2025/08/24/promotion-regulation-online-gaming-act-2025-legal-reform/) — especializado — 24/8/2025.
92. [India Code — The Promotion and Regulation of Online Gaming Act, 2025 (PDF)](https://www.indiacode.nic.in/bitstream/123456789/22148/1/a2025-32.pdf) — oficial.

**Meios de pagamento**

93. [CCBill — Visa Integrity Risk Program (VIRP)](https://ccbill.com/doc/visa-integrity-risk-program-virp) — especializado.
94. [G2 Risk Solutions — Visa replaces Global Brand Protection Program](https://g2risksolutions.com/resources/blog/visa-replaces-global-brand-protection-program/) — especializado — 2023.
95. [Basis Theory — High-risk MCCs](https://blog.basistheory.com/high-risk-mccs) — especializado.
96. [Didit — A four-digit merchant code decided whether memecoin buyers faced KYC](https://didit.me/blog/memecoin-credit-card-merchant-code-kyc-2026/) — especializado — 2026.
97. [Chargeflow — What are Visa's new VAMP rules](https://www.chargeflow.io/blog/what-are-visas-new-vamp-rules-a-2025-guide-for-merchants) — especializado — 2025.
98. [Beancount — Visa and Mastercard chargeback monitoring 2026 guide](https://beancount.io/blog/2026/07/10/visa-mastercard-vamp-chargeback-monitoring-2026-guide) — especializado — 10/7/2026.
99. [Stripe — Empresas proibidas e restritas](https://stripe.com/legal/restricted-businesses) — oficial (empresa).
100. [PayPal — Acceptable Use Policy](https://paypal.com/en/webapps/mpp/ua/acceptableuse-full) — oficial (empresa) — versão de 29/10/2022.
101. [Adyen — Prohibited and restricted products & services](https://www.adyen.com/legal/list-restricted-prohibited) — oficial (empresa).
102. [Mercado Pago — Prohibited activities](https://global-selling.mercadopago.com/help/18572) — oficial (empresa); a página retornou erro 403, e o conteúdo veio do índice do buscador.
103. [Xsolla — Navigating chargebacks](https://xsolla.com/blog/navigating-chargebacks) — empresa — 2024.
104. [Chargebacks911 — Nearly 44% of chargebacks are labeled friendly fraud](https://chargebacks911.com/nearly-44-of-chargebacks-are-labeled-friendly-fraud-finds-a-chargebacks911-report/) — empresa.
105. [Tebex — Why do video games have higher chargeback rates than other e-commerce?](https://www.tebex.io/resources/why-do-video-games-have-higher-chargeback-rates-than-other-e-commerce) — empresa.
106. [Chargeflow — Video game chargebacks](https://www.chargeflow.io/blog/video-game-chargeback) — empresa.
107. [Engadget — Fraud forces Valve to kill CS:GO loot box key trading](https://www.engadget.com/2019-10-30-csgo-fraud-loot-box-key-trades.html) — imprensa — 30/10/2019.
108. [GamingOnLinux — Valve ends CS:GO container key trading and selling](https://www.gamingonlinux.com/2019/10/valve-ends-counter-strike-global-offensive-container-key-trading-and-selling) — imprensa — out./2019.
109. [OCCRP — Independent: credit card thieves use Fortnite to launder money](https://www.occrp.org/en/daily/9109-independent-credit-card-thieves-use-fortnite-to-launder-money) — imprensa — jan./2019.
110. [GameSpot — Fortnite V-Bucks being used for money laundering, says security firm](https://www.gamespot.com/articles/fortnite-v-bucks-being-used-for-money-laundering-s/1100-6464460/) — imprensa — jan./2019.

**Lojas e plataformas**

111. [Apple — App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) — oficial — atualizadas em 16/10/2026.
112. [Google Play — Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738?hl=en) — oficial.
113. [Google Play — Requirements for distributing apps in specific countries/regions](https://support.google.com/googleplay/android-developer/answer/6223646?hl=en) — oficial.
114. [Google Play — Real-Money Gambling, Games, and Contests](https://support.google.com/googleplay/android-developer/answer/9877032) — oficial.
115. [MacRumors — Google and Epic abandon injunction modification request](https://www.macrumors.com/2026/07/15/google-third-party-app-stores/) — imprensa — 15/7/2026.
116. [Alphabet — Form 10-Q, 3º trimestre de 2026 (SEC)](https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000084/goog-20260930.htm) — oficial — 2026.
117. [Appcharge — Epic v. Google: the settlement is off the table](https://www.appcharge.com/blog/epic-v-google-the-settlement-is-off-the-table) — empresa — 2026.
118. [Digital Policy Alert — Ninth Circuit affirmed contempt finding and remanded on commission rate in Epic Games v. Apple](https://digitalpolicyalert.org/event/39719-us-court-of-appeals-for-the-ninth-circuit-affirmed-contempt-finding-and-remanded-on-commission-rate-in-epic-games-v-apple) — especializado — dez./2025.
119. [IPWatchdog — High Court grants cert in Apple's challenge to Ninth Circuit contempt ruling](https://ipwatchdog.com/2026/06/30/high-court-grants-cert-in-apples-challenge-to-ninth-circuit-contempt-ruling-in-app-store-dispute/) — imprensa — 30/6/2026.
120. [Apple Newsroom — Apple announces changes for apps in the European Union](https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/) — oficial — ago./2026.
121. [The Mac Observer — Apple's new EU App Store terms take effect October 1](https://www.macobserver.com/news/eu-app-store-terms-october-1-rate-card/) — imprensa — 2026.
122. [PC Gamer — Steam bans all games with NFTs or cryptocurrency](https://pcgamer.com/steam-bans-nfts-cryptocurrencies-blockchain) — imprensa — out./2021.
123. [Engadget — Steam bans games that allow cryptocurrency and NFT trading](https://www.engadget.com/steam-ban-cryptocurrency-nft-trading-blockchain-valve-165038811.html) — imprensa — out./2021.
124. [PCGamesN — Steam has banned games that use blockchain, cryptocurrency, and NFTs](https://www.pcgamesn.com/steam/nft-crypto-games-banned-steam) — imprensa — out./2021.
125. [Steam — FAQ do Mercado da Comunidade](https://help.steampowered.com/faqs/view/61F0-72B7-9A18-C70B) — oficial (empresa).
126. [Engadget — Apple backtracks on plans to get rid of web apps on iPhones in the EU](https://www.engadget.com/apple-backtracks-on-plans-to-get-rid-of-web-apps-on-iphones-in-the-eu-195232177.html) — imprensa — mar./2024.
