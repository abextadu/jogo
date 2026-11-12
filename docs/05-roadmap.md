# Fase 5 — Roadmap e construção

> **Escopo.** O MVP (a menor fatia jogável que já prova a diversão do ciclo central e a economia), os marcos até o lançamento, cada um com critério de pronto, e o jeito de construir: um marco por vez, com testes automáticos de economia e de combate, commits pequenos, o [PROGRESSO](PROGRESSO.md) atualizado, uma demonstração e um checkpoint ao fim de cada marco ([PROMPT_INICIAL](../PROMPT_INICIAL.md), seção 7).
> **Base:** o [GDD](03-gdd/README.md), a [arquitetura](04-arquitetura.md) e as decisões dos checkpoints ([PROGRESSO](PROGRESSO.md)): TypeScript, desenvolvimento no PC do Gabriel por enquanto, Pix e cartão no lançamento, sem verificação de idade, transferência imediata, comida na mochila do personagem.
> **Etiquetas:** [H] proposta do estúdio. Os tamanhos dos marcos (P, M, G) são relativos; o tempo de cada um depende do ritmo das revisões e dos testes do Gabriel.

## 0. Resumo em uma tela

**O MVP prova duas coisas,** na ordem do briefing: que o ciclo central é divertido (coletar, transformar, criar, vender, lutar e voltar ao Relatório da volta) e que a economia fecha (ouro nasce nas fontes, morre nos drenos, o teto segura a emissão, os preços se formam na Bolsa). Tudo o que não prova uma dessas duas coisas fica para depois: Coins, pagamentos, Bazar, Baú, Conselho, cercos, guildas, Fronteira e a arte final.

**O MVP em números [H]:**

| Item | No MVP | No lançamento |
|---|---|---|
| Ofícios | **7 de 12**: Mineração, Lenhadoria, Pesca (coleta); Fundição, Carpintaria (transformação); Ferraria, Culinária (criação) | 12 |
| Tiers | **T1 e T2** (cobre e ferro; pinho e bétula) | T1 a T6 |
| Vocações | **2 de 5**: Cavaleiro e Mago | 5 |
| Balcões | **Bolsa**, venda a NPC dos básicos e **Oficina da Cidade** (o que os 5 ofícios de fora fariam, a 2,5× o valor de referência) | Bolsa, Feira, Leilão, Câmbio, Troca, Bazar |
| Combate | Expedições com regras (3 casas), plano B, comida da mochila, poções do cinto, desgaste, saque; 2 regiões | Expedições, masmorras, cercos, Fronteira |
| Ausente | Liquidação por eventos, offline de 24 h, Relatório da volta | Até 72 h conquistadas |
| Economia | Livro-razão, teto de emissão com portão, taxas destruídas, painel mínimo | Painel completo, antiabuso |
| Quem joga | O Gabriel e **moradores de teste**: contas automáticas com os perfis da simulação, jogando pela mesma API | Jogadores |
| Onde roda | O PC do Gabriel (Docker Desktop) | VPS com Docker Swarm e Cloudflare |
| Arte | Provisória (ícones e formas simples) | Pixel art "Maquete" |

**Os marcos:** seis até o MVP (M0 a M5) e oito do MVP ao lançamento (M6 a M13). Cada marco termina com demonstração e checkpoint; o próximo só começa com o ok do Gabriel.

## 1. Por que este MVP

- **7 ofícios formam duas cadeias completas e a cadeia da comida.** Metal: Mineração → Fundição (com carvão da Lenhadoria) → Ferraria. Madeira: Lenhadoria → Carpintaria. Comida: Pesca e a carne da caça → Culinária. Assim o pilar "ninguém faz tudo sozinho" já aparece: o ferreiro depende do minerador e do fundidor; o cozinheiro, do pescador e do caçador.
- **O que os outros 5 ofícios fariam vem da Oficina da Cidade**, a 2,5× o valor de referência ([06](03-gdd/06-oficios-e-coleta.md), seção 1). Poções, armaduras leves e couro existem no MVP, mas caros. Isso testa a válvula da Oficina e mostra onde falta ofício de jogador.
- **Cavaleiro e Mago** são as duas pontas do combate (linha de frente e magia) e usam as duas famílias de comida que mais diferem: carne (vida) e peixe (ânimo) ([03](03-gdd/03-personagem.md), seção 4.2). O Cavaleiro usa espada, escudo e armadura de metal (Ferraria); o Mago, cajado (Carpintaria). Os dois dependem de ofícios do MVP.
- **T1 e T2** bastam para mostrar a progressão de tier e a demanda do T2 pelo ferro, que tem demanda dupla (lingote e aço) ([06](03-gdd/06-oficios-e-coleta.md), seção 2).
- **Moradores de teste** porque um mercado com uma pessoa não prova nada. Eles reaproveitam os perfis de comportamento da simulação (casual, regular, hardcore) e jogam pela mesma API do jogador, sem atalho. Ficam marcados como contas de teste.
- **Fora do MVP:** Coins, loja, pagamentos, Câmbio, Troca, Bazar, Baú, Feira, Leilão, guildas, encomendas, obras, cercos, Conselho, Fronteira, chat e antiabuso. Nenhum deles é preciso para provar o ciclo nem a economia, e cada um é um marco próprio depois (seção 3).

**Quatro perguntas** [H]. *Referência:* o "corte vertical" dos estúdios, uma fatia fina que atravessa todas as camadas; diferencia-se do protótipo que só testa uma mecânica. *Problema:* construir 15 módulos de GDD antes de saber se o ciclo diverte. *Comportamento:* decidir com o jogo na mão, não no papel. *Risco:* a fatia ser fina demais para mostrar a economia; por isso entram os moradores de teste e duas cadeias completas.

## 2. Os marcos até o MVP

Todos rodam no PC do Gabriel (decisão 2 do checkpoint da Fase 4). Cada marco lista o que entra, o critério de pronto, os testes e a demonstração.

### M0 — Fundação (tamanho M)

- **Entra:** repositório organizado como na [arquitetura](04-arquitetura.md), seção 14 (`apps/servidor`, `apps/cliente`, `pacotes/regras`, `pacotes/razao`, `pacotes/config`, `config/`); Docker Compose com PostgreSQL 18 na porta 5433 (o PostgreSQL 16 do Windows já usa a 5432); servidor HTTP; migrações em SQL; o **livro-razão** (contas de fonte, dreno, trânsito e jogador; transação com soma zero; saldo cacheado e reconciliação); carga da `config/` com validação por esquema; integração contínua no GitHub Actions.
- **Pronto quando:** uma transferência de ouro entre duas contas de teste passa por uma rota com chave de idempotência e grava lançamentos que somam zero; a reconciliação acusa um saldo adulterado à mão; a integração contínua roda tudo a cada commit.
- **Testes:** por propriedade, com sequências aleatórias de operações que mantêm as invariantes da [arquitetura](04-arquitetura.md), seção 4.2; repetição do mesmo pedido com a mesma chave sem efeito duplo; pedidos simultâneos contra a mesma carteira.
- **Demonstração:** os testes rodando e o extrato de uma conta de teste.

### M1 — Conta, personagem e mochila (tamanho P)

- **Entra:** cadastro por e-mail e senha (Argon2id), sem verificação; chave de recuperação mostrada uma vez; sessão; personagem com vocação (Cavaleiro ou Mago); **mochila** (20 casas, pilhas de 100) e armazém; tela mínima do personagem no cliente (Svelte) com a mochila e o menu de botão direito.
- **Pronto quando:** o Gabriel cria a conta, cria o personagem, vê a mochila vazia e move um item de teste da mochila para o armazém e de volta, tudo pelo cliente.
- **Testes:** cadastro e login; um personagem ativo por conta; mover item é atômico (o item nunca está em dois lugares).
- **Demonstração:** o fluxo completo no navegador do PC.

### M2 — Ofícios, fila e ausência (tamanho G)

- **Entra:** os 3 ofícios de coleta e os 2 de transformação (T1 e T2); fila com tarefas e tarefa de reserva; XP e níveis com a curva do [02](03-gdd/02-progressao.md); taxa ausente; **liquidação por eventos** com offline de 24 h; **Relatório da volta**; RNG por contador com chave do servidor; teto de emissão com portão de saída (contado ao vender, a partir do M4).
- **Pronto quando:** o Gabriel monta uma fila de mineração e fundição, fecha o navegador, volta horas depois e o Relatório da volta mostra o que foi produzido, igual ao que a simulação tique a tique produziria.
- **Testes:** **paridade online/offline** (cálculo por eventos contra simulação tique a tique em milhares de cenários, [arquitetura](04-arquitetura.md), seção 7.1); curvas de XP contra a tabela do 02; tarefa de reserva quando o recurso acaba.
- **Demonstração:** fila montada à noite e Relatório da volta de manhã.

### M3 — Criação, itens e comida (tamanho M)

- **Entra:** Ferraria e Culinária em T1 e T2; qualidade Comum e Bom na fila; durabilidade e reparo com kits; equipamento do Cavaleiro e do Mago; os pratos das famílias carne e peixe, com saciedade, **Comer** pelo botão direito e **Comer automaticamente**; Oficina da Cidade vendendo o que os ofícios de fora fariam.
- **Pronto quando:** o Gabriel faz uma espada a partir do minério, cozinha um prato de peixe e o personagem come pela mochila; a barra de saciedade conta o tempo.
- **Testes:** receitas consomem exatamente os insumos; a qualidade segue as chances publicadas; saciedade soma tempo até 3 h e troca o efeito ao trocar de prato; custo por hora de saciedade dentro de ±15% entre pratos do mesmo tier.
- **Demonstração:** da mina ao prato e à espada.

### M4 — Mercado: Bolsa e moradores de teste (tamanho G)

- **Entra:** **Bolsa** com livro de ofertas por item, ordens de compra e de venda com garantia em trânsito, prioridade por preço e antiguidade, degrau de preço e espera para modificar ([13](03-gdd/13-anti-abuso.md), AA-4); taxas destruídas; venda a NPC dos básicos com preço decrescente; preço de mercado de 24 h; teto de emissão aplicado na venda; **moradores de teste** (de 50 a 200 contas automáticas com os perfis da simulação).
- **Pronto quando:** o Gabriel vende minério e compra lingote de moradores de teste; o preço de mercado se forma; nenhuma rota de transferência tem espera (decisão do checkpoint 3).
- **Testes:** **pedidos simultâneos** contra cada rota de valor (20 a 30 pedidos com ~1 ms de dispersão); cancelamento, expiração e ordem parcial; a taxa sai do vendedor e vai à conta de dreno; o portão do teto segura a venda de bem de origem acima da cota.
- **Demonstração:** um dia de mercado com os moradores, com os preços mudando.

### M5 — Combate e alfa de uma pessoa (tamanho G)

- **Entra:** expedições em 2 regiões (T1 e T2) com regras por gatilho (3 casas), plano da expedição e plano B; vida, ânimo e regeneração com a comida da mochila; poções do cinto (vindas da Oficina); desgaste do equipamento; saque (minério, carne de caça e peles; as peles vão à venda a NPC, porque o Curtume só entra no M6); diário da expedição no Relatório da volta; **painel mínimo da economia** (fontes e drenos por dia, ouro em circulação, preços, parcela no teto).
- **Pronto quando:** o Gabriel joga por uma semana, sozinho com os moradores de teste, um Cavaleiro ou um Mago, alternando ofício e expedição; o painel mostra a economia do servidor local; os 13 critérios de saúde da simulação são calculados sobre o servidor de verdade.
- **Testes:** **combate** (a luta do exemplo do [04](03-gdd/04-combate.md), seção 4, dá o mesmo resultado; regras disparam na ordem; recuo e plano B; sem comida, a regeneração cai a 1% e não zera; comida acaba e o personagem segue sem comer); consumo de comida e de poções por hora contra a tabela do 04; drops dentro das chances.
- **Demonstração e checkpoint do MVP:** a semana de jogo, o painel e a decisão do Gabriel sobre o que mudar antes de crescer.

## 3. Do MVP ao lançamento

| Marco | O que entra | Pronto quando | Tamanho |
|---|---|---|---|
| **M6 — Os outros ofícios, vocações e tiers** | Colheita, Curtume, Tecelagem, Alfaiataria e Alquimia; Caçador, Druida e Ladino; T3 a T6; obra-prima, Faro e Inspiração; ajudantes | Os 12 ofícios e as 5 vocações jogáveis; a Oficina da Cidade vira só válvula; simulação recalibrada com a `config/` real | G |
| **M7 — Cidade viva** | Encomendas, obras, Mérito, cidadania, guildas e Sede, chat com moderação básica, mapa da Cidade em PixiJS | A Cidade tem metas coletivas e os jogadores conversam | G |
| **M8 — Coins e pagamentos** | Loja web, doação em Coins (Pix e cartão com 3DS, em dois PSPs), teto de doação, premium, cosméticos, Câmbio, Troca, contestação com suspensão, disjuntor de pagamentos, registro de auditoria | Uma doação de teste nos ambientes de teste dos dois PSPs credita Coins, que vão ao Câmbio e à Troca na hora; o estorno suspende a conta | G |
| **M9 — Bazar de Personagens e Baú** | Bazar (o personagem muda de conta; aposentadoria), Baú com tabela publicada, garantia e sorteio verificável, interruptor por país | Um personagem de teste é vendido e entregue; as aberturas do Baú conferem com a semente publicada | M |
| **M10 — Cercos, Conselho e Era** | Cerco semanal com Presságio e Arsenal, Conselho com eleição, virada de Era | Um ciclo de 13 semanas acelerado roda do começo ao fim | G |
| **M11 — Antiabuso** | Sinais e pontuação de risco, ligações entre contas, ondas de detecção, revisão e sanção, API pública de leitura | Os moradores de teste com "comportamento de bot" são achados nas ondas; a extração das fazendas aparece no painel | M |
| **M12 — Arte, PWA e onboarding** | Pixel art "Maquete" (terceirizada), prólogo "A balsa para Pedraforte", PWA instalável, acessibilidade, PT-BR e inglês | Um jogador novo faz o prólogo e a primeira hora sem ajuda | G |
| **M13 — Infra, alfa fechado, beta e lançamento** | VPS com Docker Swarm, Cloudflare, backup e restauração ensaiada, teste de carga dos três picos; alfa fechado com convidados; beta aberto; aprovação dos PSPs por escrito; termos de uso e política de privacidade | Os critérios de cada etapa da [arquitetura](04-arquitetura.md), seção 13, e o lançamento de Pedraforte | G |

A Fronteira entra na 2ª Era depois do lançamento ([bíblia](03-gdd/00-biblia.md), seção 5), como marco de conteúdo.

**Antes do lançamento, fora do código** [H]: aprovação por escrito dos dois PSPs para o Baú e os Coins transferíveis ([arquitetura](04-arquitetura.md), seção 10.2); termos de uso com as regras do RMT informal e da suspensão por contestação; política de privacidade; classificação indicativa; regime fiscal com contador. Todos os pontos jurídicos seguem marcados **validar com advogado**, com o risco assumido pelo Gabriel.

## 4. Como cada marco é construído

- **Um marco por vez.** O próximo só começa depois da demonstração e do ok do Gabriel.
- **Testes automáticos** para toda regra de economia e de combate, rodando a cada commit. A paridade online/offline, as invariantes do livro-razão e os pedidos simultâneos são obrigatórios desde o M0.
- **Commits pequenos e descritivos, em português**, no `main` do repositório, com o PROGRESSO atualizado ao fim de cada sessão de trabalho.
- **Números na `config/`, nunca no código.** A simulação passa a ler a mesma `config/` no M2 e roda curta na integração contínua a partir do M4.
- **Demonstração** ao fim de cada marco: o que mudou, como testar no PC e o que ficou de fora.
- **Pendências que entram nos marcos:** calibrar a tendência do IPC com a configuração real (M5 e M6, [08](03-gdd/08-simulacao.md), seção 10); medir a parte de Culinária e Pesca nas horas de ofício (M5); detecção de multicontas antes do alfa fechado (M11).

## 5. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **O MVP não diverte** | A semana do M5 mostra filas que ninguém quer montar ou um mercado sem graça | É para isso que o MVP existe: o checkpoint do M5 decide o que mudar antes de construir o resto; o GDD e a `config/` mudam sem reescrever o código |
| **Moradores de teste enganam** | Contas automáticas formam preços que jogadores reais nunca formariam | Usar os perfis da simulação, medir só tendências e trazer pessoas de verdade no alfa fechado (M13) antes de calibrar números finais |
| **Escopo cresce no meio do marco** | Uma ideia boa entra "só um pouquinho" e o marco não fecha | Ideias novas vão para a lista do próximo marco; o critério de pronto não muda no meio |
| **A Oficina da Cidade esconde problemas** | Com 5 ofícios substituídos por NPC, o equilíbrio do MVP não é o do jogo completo | Recalibrar no M6, com os 12 ofícios; tratar os números do MVP como provisórios |
| **O PC do Gabriel vira produção sem querer** | Outras pessoas começam a jogar no PC local, sem backup nem proteção | Regra: convidado de fora só a partir do M13, na VPS; no PC, backup diário do banco para outro disco |
| **Dívida técnica de duas pessoas** | Pressa nos primeiros marcos deixa o livro-razão ou a liquidação frágeis | M0 e M2 com testes por propriedade e de paridade antes de qualquer tela bonita |
| **Arte atrasa tudo no fim** | A pixel art só começa no M12 e demora mais que o código | Contratar e começar o guia de estilo durante o M7 ou o M8, em paralelo |
| **Pagamentos travam o lançamento** | Um PSP recusa o modelo (Baú, Coins transferíveis) na última hora | Pedir a aprovação por escrito já no M8, com dois PSPs na conversa |

## Resumo executivo e checkpoint da Fase 5 (roadmap)

### Resumo

O MVP é uma fatia fina que atravessa o jogo inteiro: 7 ofícios em duas cadeias completas e a cadeia da comida, T1 e T2, Cavaleiro e Mago, a Bolsa com moradores de teste para o mercado ter vida, expedições com comida da mochila e o livro-razão com o teto de emissão. Ele prova se o ciclo diverte e se a economia fecha, no PC do Gabriel, em seis marcos (M0 a M5), cada um com demonstração e checkpoint. Do MVP ao lançamento são mais oito marcos (M6 a M13): os outros ofícios e vocações, a Cidade viva, Coins e pagamentos, Bazar e Baú, cercos e Conselho, antiabuso, arte e onboarding, e infra com alfa, beta e lançamento. Coins, pagamentos e tudo o que envolve dinheiro real ficam para depois do MVP, porque não ajudam a provar a diversão e trazem o maior risco.

### 🛑 Checkpoint: decisões para o Gabriel

**1. O escopo do MVP está certo?**
- **(A) 7 ofícios (Mineração, Lenhadoria, Pesca, Fundição, Carpintaria, Ferraria, Culinária), T1 e T2, Bolsa e Oficina da Cidade, expedições; sem Coins. ← recomendado**
- (B) MVP maior, com os 12 ofícios e T1 a T3: prova mais, demora bem mais.
- (C) MVP menor, só ofícios e mercado, sem combate: mais rápido, mas não prova a comida, o desgaste nem a ligação entre combate e ofício.
- *Por quê:* (A) é o menor conjunto que tem duas cadeias completas, a comida e o combate consumindo o que os ofícios fazem.

**2. Quais vocações entram no MVP?**
- **(A) Cavaleiro e Mago. ← recomendado**
- (B) Cavaleiro e Caçador.
- (C) Só uma vocação.
- *Por quê:* Cavaleiro e Mago são as duas pontas do combate e usam as famílias de comida mais diferentes (carne para vida, peixe para ânimo). O Caçador pediria Curtume e Alfaiataria para o equipamento, que estão fora do MVP.

**3. Como o mercado tem vida com uma pessoa testando?**
- **(A) Moradores de teste: de 50 a 200 contas automáticas com os perfis da simulação, jogando pela mesma API e marcadas como teste. ← recomendado**
- (B) Só a Oficina da Cidade e a venda a NPC: mercado vazio.
- (C) Chamar amigos já no MVP: pede a VPS antes da hora.
- *Por quê:* sem gente do outro lado, a Bolsa não forma preço, e a economia não é provada. (A) respeita a decisão de testar no PC local.

**4. Que arte usamos até o fim do MVP?**
- **(A) Arte provisória (ícones e formas simples) até o M5; a pixel art começa depois que o ciclo provar que diverte. ← recomendado**
- (B) Contratar a pixel art desde o M0.
- (C) Comprar um pacote pronto de assets para o MVP.
- *Por quê:* arte é o item mais caro e mais lento; gastar nela antes de saber se o ciclo diverte é o risco que o MVP existe para evitar. O guia de estilo pode começar no M7.

### Decisões do Gabriel (2026-11-11)

**Aprovadas as 4 recomendações:** (1) o escopo do MVP descrito acima; (2) Cavaleiro e Mago; (3) moradores de teste para o mercado; (4) arte provisória até o M5. A construção começa pelo M0.
