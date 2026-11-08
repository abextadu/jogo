# Técnica de idles online

> **Escopo.** Como os melhores idles, idle MMOs e MMOs de navegador resolvem os problemas técnicos que decidem se uma economia de jogadores sobrevive: progresso offline, autoridade do servidor, números gigantes, sincronização de save, anti-cheat, anti-bot e anti-duplicação, escala e PWA/mobile. Perguntas: (1) onde e como calcular o progresso do ausente sem abrir brecha; (2) que garantias transacionais a economia exige; (3) como conviver com números enormes e mercado; (4) como sincronizar estado entre dispositivos; (5) onde os bots realmente importam num jogo que já se joga sozinho; (6) o que a infraestrutura própria (VPS, Docker Swarm, PostgreSQL) aguenta; (7) o que um PWA consegue fazer em 2026 e quanto as lojas cobram. **Sem código:** técnicas, padrões e trade-offs.
>
> Aproveita as fichas [B01](fichas/B01-melvor-idle.md), [B02](fichas/B02-legends-of-idleon.md), [C01](fichas/C01-milky-way-idle.md)–[C06](fichas/C06-shop-titans.md), [F03](fichas/F03-runescape-e-osrs.md), [G04](fichas/G04-new-world.md), [G05](fichas/G05-banana-e-bongo-cat.md) e a teoria em [02a](02a-teoria-design-idle.md), citadas pelo caminho, sem repetir a pesquisa.
>
> Etiquetas: **[F]** fato com fonte · **[C]** consenso da comunidade · **[H]** hipótese ou análise do estúdio · **[NV]** não verificado. Links acessados em novembro de 2026.

## Resumo executivo

_Em elaboração: preenchido ao final da pesquisa._

## 1. Progresso offline

### 1.1 As arquiteturas documentadas

Há cinco formas de calcular o ausente. Quatro estão documentadas em jogos; a quinta é a nossa recomendação.

| Modelo | Quem usa | Como funciona | Custo de CPU | Risco principal |
|---|---|---|---|---|
| Simulação tique a tique na volta | Melvor Idle | Nada roda na ausência. Na volta, mede o tempo fora (até 24 h) e simula cada tique | Cresce com o tempo fora | Lento para ausências longas; no cliente, é editável |
| Simulação em N blocos | Antimatter Dimensions | Divide o tempo fora num número configurável de tiques mais longos | Fixo (N), escolhido pelo jogador | Perde fidelidade; o offline pode divergir do online |
| Fórmula ou taxa estimada | Clicker Heroes, IdleOn | Grava uma taxa na saída e a multiplica pelo tempo, com regras simplificadas | Quase zero | Diverge do jogo real; vira alvo de arbitragem |
| Servidor que nunca para | Idlescape | O servidor mantém a "sessão" de cada personagem rodando, presente ou não | Proporcional a todos os personagens ativos | Queda ou atualização do servidor afeta todo mundo |
| Híbrido: saltar de evento em evento | (recomendação) | Forma fechada entre eventos que mudam a taxa; simula só nos eventos | Proporcional ao número de eventos | Exige modelar bem cada evento |

- **Melvor Idle.** [F] Ao voltar, o jogo mede o tempo fora, limitado a 24 horas, e simula tique a tique tudo o que teria acontecido; o ganho online e o offline são iguais, e o mod "Unlimited Offline" remove o teto ao custo de um carregamento mais longo, porque a simulação inteira roda na volta (ficha [B01, §3](fichas/B01-melvor-idle.md), com base na [wiki oficial](https://wiki.melvoridle.com/w/Offline_Progression)). [H] É o modelo mais justo e o mais simples de acertar, porque reaproveita o código do jogo ativo. O preço é a CPU, que cresce com o tempo fora, e, no caso do Melvor, a confiança: o cálculo roda no cliente.
- **Antimatter Dimensions.** [C] A simulação offline divide o tempo fora em tiques; cada tique aplica a produção do período e depois dispara os *autobuyers*. Segundo um FAQ do app citado no Reddit, o padrão é 1.000 tiques e o máximo 1 milhão; "acelerar" corta pela metade os tiques restantes, e "pular" quase zera o ganho restante ([r/AntimatterDimensions, 2020](https://www.reddit.com/r/AntimatterDimensions/comments/esiji2/); [r/AntimatterDimensions, 2025](https://www.reddit.com/r/AntimatterDimensions/comments/1kg34yc/max_offline_ticks), ambos lidos via espelho). [F] Um patch impediu o offline de passar do limite de 1e6 tiques do menu ([SteamDB, notas de patch](https://steamdb.info/patchnotes/16370635), via busca). [H] Como o jogo roda a 20 tiques por segundo ([guia do jogo](https://raw.githack.com/jacorb90/IvarK.github.io/master/howto.html)), 1.000 tiques reproduzem com fidelidade só 50 segundos, e 1 milhão, cerca de 13,9 horas; além disso, cada tique simulado cobre mais tempo que um tique real. [F] Um jogador relatou no fórum do Steam que, com tiques de duração igual, o ganho offline podia superar o online, e que contagens muito altas deixavam o cálculo lento ([Steam, 2023](https://steamcommunity.com/app/1399720/discussions/0/3732953628865759665)).
- **Clicker Heroes.** [F] Na saída, o jogo grava o DPS ocioso e calcula uma "idle run" só com ele: ignora cliques, habilidades ativas e *ancients* de clique; acumula ouro e Hero Souls de chefes, mas não gasta ouro, não sobe heróis e não faz ascensão; não há teto de 24 horas, e o avanço para quando o DPS não vence mais os monstros ([blog oficial, 6/jul/2025](https://blog.clickerheroes.com/offline-progression-in-clicker-heroes/)).
- **Legends of IdleOn.** [F] O AFK é uma simulação simplificada baseada em atributos, nível, ritmo de spawn e dano, que ignora posicionamento; os personagens ausentes recebem uma porcentagem do rendimento simulado (base de 20% no combate, ampliável por cerca de dez fontes), e não há teto de tempo, só o da bolsa (ficha [B02, §3 e §5](fichas/B02-legends-of-idleon.md)).
- **Idlescape.** [F] Em jul/2025 o estúdio refez o sistema que reinicia as sessões dos jogadores depois de queda, reinício ou atualização do servidor, para que voltem mais rápido e falhem menos; removeu o "catch-up time" e parou de vender *vacation tokens*, descritos como instáveis ([patch 0.23.4, 16/jul/2025](https://www.idlescape.com/news/beta-0-23-4)). [H] Pela descrição, o servidor mantém as ações rodando para todos os personagens, presentes ou não. É o modelo mais caro e o mais frágil: cada reinício do servidor vira um problema de todos.
- **Idle Clans.** [F] A fila de 6 a 16 tarefas roda online e offline, pula tarefas bloqueadas e aplica uma tarefa de reserva "inclusive de forma retroativa no offline" (ficha [C02, §3](fichas/C02-idle-clans.md)). [H] Esse comportamento retroativo é natural num cálculo por eventos: o servidor descobre, ao liquidar, em que momento a fila travou e aplica a reserva a partir dali.

**O híbrido que recomendamos** [H]. Entre dois eventos que mudam a taxa de ganho, o resultado tem forma fechada (taxa × tempo, ou uma distribuição de drops; ver 1.2). Os eventos são finitos e conhecidos: recurso acaba, nível sobe e libera receita melhor, bolsa enche, comida ou poção acaba, buff expira, tarefa da fila termina, personagem morre. O servidor avança direto ao próximo evento, aplica a regra e segue. É a técnica clássica de simulação de eventos discretos com avanço ao próximo evento ([Wikipedia](https://en.wikipedia.org/wiki/Discrete-event_simulation)). O custo passa a depender do número de eventos, e não das horas fora: 24 horas de mineração sem troca de nível custam o mesmo que 5 minutos.

**As quatro perguntas, para o híbrido** [H]:
- **Inspira-se em** Melvor (paridade online/offline, mesmas regras) e se diferencia dele por rodar no servidor e não pagar CPU por hora ausente.
- **Resolve** o dilema entre fidelidade (tique a tique) e custo (fórmula).
- **Incentiva** o "ausente esperto": o plano (fila, consumíveis, ordem das tarefas) decide o resultado, e a tela de volta pode mostrar cada evento ("às 3h12 a comida acabou").
- **Risco:** cada sistema novo precisa declarar seus eventos. Um evento esquecido (um buff que expira no meio do bloco) gera divergência entre online e offline, e divergência vira arbitragem. Exige teste automático que compare o híbrido com a simulação tique a tique em milhares de cenários.

### 1.2 Valor esperado, sorteio a sorteio ou amostragem estatística

Três jeitos de resolver os drops do ausente:

1. **Valor esperado.** [H] Multiplica-se ações × chance: 10 mil abates com drop de 1% rendem exatamente 100 itens. É determinístico e barato, mas apaga a variância, que é a emoção do drop, e quebra os itens raros: com chance de 1 em 10 mil, mil abates rendem 0,1 item. Arredondar para baixo faz o raro nunca sair no offline; arredondar para cima cria valor do nada. Guardar a fração ("90% de um pet") é contabilidade estranha para o jogador e, num jogo com mercado, uma fração de item raro é um ativo sem preço.
2. **Sorteio a sorteio.** [H] Reproduz a distribuição exata, mas custa uma operação por ação. Uma ação de 3 segundos gera 28.800 sorteios em 24 horas (86.400 ÷ 3) por personagem e por fila; isso é barato isoladamente e caro no pico de login da manhã, quando milhares de liquidações chegam juntas.
3. **Amostragem estatística.** O número de sucessos em N tentativas independentes com chance p segue uma distribuição binomial. Em vez de N sorteios, sorteia-se uma vez essa contagem. Há algoritmos exatos com memória fixa e tempo praticamente constante para N grande, como o BTPE [F] ([Kachitvichyanukul e Schmeiser, *Communications of the ACM*, 1988](https://doi.org/10.1145/42372.42381)). [H] Para uma tabela de loot com vários resultados, sorteia-se em sequência binomiais condicionais (o equivalente a uma multinomial); para eventos raríssimos, a aproximação de Poisson basta. A propriedade que importa: **a amostragem exata tem a mesma distribuição do sorteio a sorteio**. O ausente recebe, em lei de probabilidade, exatamente o que receberia jogando.

**Por que isso importa para a economia** [H]. Se o offline rende mais (ou menos) que o online, os jogadores escolhem o modo mais lucrativo, e o mercado precifica essa escolha. O relato de que o offline do Antimatter Dimensions podia superar o online (1.1) é o tipo de divergência que, num jogo solo, é curiosidade e, num jogo com casa de leilão, é emissão de moeda. Mecanismos que dependem da sequência, como "garantia de drop" (*pity*) após X tentativas, não sobrevivem à amostragem ingênua: precisam ser modelados à parte (por exemplo, sorteando direto a posição do primeiro sucesso, que segue uma distribuição geométrica).

### 1.3 RNG determinístico com semente

- [F] **Geradores baseados em contador.** Salmon, Moraes, Dror e Shaw (D. E. Shaw Research) mostraram que transformações com chave aplicadas a um contador geram números pseudoaleatórios de boa qualidade: os geradores do artigo (entre eles o Philox) passam na bateria BigCrush e oferecem pelo menos 2^64 fluxos independentes, cada um com período de 2^128 ou mais ([SC'11, 2011](https://users.cs.utah.edu/~hari/teaching/bigdata/random123sc11.pdf); [DOI](https://doi.org/10.1145/2063384.2063405)). Sem estado sequencial, o número de posição k pode ser calculado direto.
- [H] **Aplicação.** Chave = segredo do servidor por personagem e por temporada; contador = identificador da ação mais o índice do sorteio. Isso dá:
  - **auditoria e suporte:** dá para refazer qualquer liquidação e responder a "o drop deveria ter saído";
  - **correção de bug sem sorte nova:** recalcular uma liquidação errada reproduz os mesmos sorteios, e só a regra corrigida muda o resultado;
  - **paralelismo:** liquidações de jogadores diferentes não disputam um gerador global;
  - **testes:** o mesmo cenário dá sempre o mesmo resultado.
- [H] **Riscos.** A chave nunca vai ao cliente: com ela e o algoritmo, o jogador prevê o próximo drop e escolhe quando agir (a "manipulação de RNG" dos *speedrunners*). O resultado precisa ser fixado no momento da ação ou da liquidação; se o cliente puder cancelar depois de ver o resultado, ele "pesca" sorteios bons. E a liquidação registra a versão das regras usadas, para que a mudança de balanceamento valha só dali em diante.

### 1.4 Tetos de ausência

| Jogo | Teto | Como se amplia | Fonte |
|---|---|---|---|
| Melvor Idle | 24 h | Não se amplia (mod remove) | [B01, §3](fichas/B01-melvor-idle.md) |
| Legends of IdleOn | Sem teto de tempo | O limite é a bolsa, ampliável com gemas | [B02, §3](fichas/B02-legends-of-idleon.md) |
| Clicker Heroes | Sem teto | O limite é o DPS ocioso | [blog, 2025](https://blog.clickerheroes.com/offline-progression-in-clicker-heroes/) |
| Milky Way Idle | 10 h (era 16 h até abr/2023) | Até 72 h com Cowbells; +10 h no MooPass | [C01, §3](fichas/C01-milky-way-idle.md) |
| Idle Clans | 12 h | +6 h com ouro e +6 h com token: 24 h | [C02, §3](fichas/C02-idle-clans.md) |
| Idlescape | 12 h | 24 h com a assinatura IS+ | [C03, §3](fichas/C03-idlescape.md) |
| IdleMMO | 6 h (principal) | 8 h para membros; casa soma até +4 h | [C04, §3](fichas/C04-idlemmo.md) |

- [F] O IdleMMO começou o beta com 30 minutos de idle para gratuitos e só em mar/2025 chegou a 6–8 horas, admitindo que exigir check-ins a cada poucas horas cansava e contrariava o que se espera de um idle (ficha [C04, §3](fichas/C04-idlemmo.md)).
- [H] **O que a técnica pede.** Com o modelo híbrido (1.1), a CPU deixa de justificar o teto: um dia ausente custa pouco mais que uma hora. O teto passa a ser **ferramenta econômica**: limita quanto valor uma conta gera por dia sem ninguém olhando, e portanto quanto vale uma conta abandonada, uma mula ou uma fazenda de contas (ver seção 5 e a ficha [G05](fichas/G05-banana-e-bongo-cat.md)).
- [H] **O que o design pede.** A teoria em [02a, §6](02a-teoria-design-idle.md) recomenda teto generoso, melhorável jogando e nunca pagando, com rendimento decrescente depois de 24 horas em vez de corte seco. A técnica não impede nada disso.

### 1.5 Relógio: só o do servidor vale

- [F] **Egg, Inc.** As notas da versão 1.11 (set/2019) dizem que, na cooperação, quem trapaceia no tempo pode ser expulso por qualquer membro, e não só pelo criador ([APKMirror, notas da 1.11](https://apkmirror.com/apk/auxbrain-inc/egg-inc/egg-inc-1-11-release), via busca). Uma wiki de fãs, citada pela Expert Beacon, diz que abrir o jogo com data anterior à da última abertura pausa a produção por uma hora ([Expert Beacon](https://expertbeacon.com/can-you-get-banned-from-egg-inc/); fonte secundária, não conferida na wiki). Guias ainda ensinam a voltar o relógio do aparelho em dez anos para colher ganhos offline ([CheatCC](https://www.cheatcc.com/?p=125032)). [H] Todo offline calculado no aparelho é, por construção, um offline que o jogador pode fabricar mexendo no relógio.
- [F] **New World.** O servidor decidia o resultado da luta, mas esperava um dado do cliente para seguir, e uma invulnerabilidade breve durava enquanto o cliente estivesse travado (ficha [G04, §10.2, item 6](fichas/G04-new-world.md)). [H] Autoridade sobre o resultado não basta: o servidor precisa ser dono do tempo.
- [F] **Navegadores desaceleram abas em segundo plano.** No Melvor, uma aba em segundo plano, desacelerada pelo navegador, dispara o cálculo offline (ficha [B01, §3](fichas/B01-melvor-idle.md)). [H] O relógio do cliente não serve nem como métrica honesta: além de manipulável, ele para, atrasa e salta.
- [H] **Regras que derivam disso:**
  1. Tempo decorrido = diferença entre dois carimbos do **mesmo** relógio do servidor (de preferência o do banco), gravados na transação que inicia a ação e na que a liquida.
  2. O cliente nunca envia "agora" nem "quanto tempo passou"; ele recebe do servidor o horário de término e só desenha a contagem regressiva.
  3. A liquidação é idempotente: registra até quando já liquidou (um "liquidado até"), e um segundo login no mesmo minuto não paga de novo.
  4. Efeitos, buffs e cooldowns expiram por carimbo do servidor.
  5. Saltos do relógio do próprio servidor (ajuste de NTP, troca de máquina) são tratados como incidente: limitar quanto tempo uma liquidação pode cobrir e alarmar quando o salto passar de um limiar.

## 2. Servidor autoritativo

### 2.1 O cliente é uma tela

- [F] No modelo clássico de servidor autoritativo, o cliente envia entradas (teclas, comandos), o servidor roda o jogo e devolve o resultado; o servidor é a única autoridade sobre o que acontece no mundo. Isso impede uma grande classe de trapaças, mas não as falhas do próprio servidor ([Gabriel Gambetta, *Fast-Paced Multiplayer*, parte I](https://www.gabrielgambetta.com/client-server-game-architecture.html)).
- [F] **Os contraexemplos do gênero.** O Melvor roda no cliente e trata o save como editável ("ninguém será banido"), e o mod comunitário de multiplayer teve de ser só cooperativo, porque qualquer um pode trapacear (ficha [B01, §6 e §7](fichas/B01-melvor-idle.md)). O IdleOn tem um injetor público que altera o cliente em execução, e o dev reage com banimentos e resets de pontuação (ficha [B02, §7](fichas/B02-legends-of-idleon.md)).
- [H] **O idle é o gênero em que a autoridade custa menos.** Num jogo de tiro, o servidor autoritativo exige predição no cliente, reconciliação e compensação de latência, as técnicas que Gambetta descreve para esconder o atraso. Num idle, as ações duram segundos ou minutos, e 200 ms de latência não mudam nada. O cliente só precisa de uma predição visual (barra de progresso, contagem regressiva) que o servidor confirma.

### 2.2 Comandos, validação e fila de ações

- [H] **O cliente envia intenções, nunca resultados.** "Começar a ação X com a receita Y" ou "listar 30 minérios a 12 de ouro"; nunca "ganhei 3 minérios". O servidor valida, nesta ordem: identidade e sessão; propriedade (o item é seu e está onde você diz); máquina de estados (a ação é permitida no estado atual); requisitos e recursos; limites (quantidade máxima, preço dentro da banda); e ritmo (cooldown e limite de taxa, 2.3).
- [F] **A fila é do servidor no gênero.** O Milky Way Idle vende vagas na fila de ações ([C01, §3](fichas/C01-milky-way-idle.md)); o Idle Clans tem fila de 6 a 16 tarefas com tarefa de reserva ([C02, §3](fichas/C02-idle-clans.md)); o IdleMMO deixa entrar na fila de um chefe mundial até 2 horas antes da luta ([C04, §5](fichas/C04-idlemmo.md)). [H] A fila é o plano do ausente. Ela precisa existir como dado no servidor e ser a entrada da liquidação (1.1).
- [F] **Validação também é telemetria.** O Milky Way Idle detecta extensões proibidas pelo padrão de requisições; em dez/2025 baniu por um dia um jogador por "pedidos inválidos ao mercado", reconheceu o falso positivo e compensou com 1.500 Cowbells por personagem ([C01, §7.2](fichas/C01-milky-way-idle.md)). [H] Pedido inválido é sinal, não prova. Ele alimenta a pontuação de risco (seção 5) e só gera punição com revisão.

### 2.3 Limites de taxa

- [F] A Stripe descreve quatro camadas: limite de pedidos por segundo por usuário (o mais usado), limite de pedidos simultâneos por usuário, reserva de capacidade para pedidos críticos com rejeição dos demais quando a cota estoura, e descarte de tráfego de baixa prioridade como última defesa em incidentes. Os limites usam o algoritmo de balde de fichas (*token bucket*) e rodam em Redis ([Stripe, "Scaling your API with rate limiters", 30/mar/2017](https://stripe.com/blog/rate-limiters)).
- [H] **Tradução para o jogo:** balde por conta, por IP e por classe de endpoint (escrita no mercado é mais restrita que leitura de inventário); limite de concorrência nos endpoints pesados (busca no mercado, histórico); e prioridade explícita sob carga: liquidação e trocas primeiro, ranking e cosméticos depois. A resposta "limite excedido" também é sinal para a pontuação de bot.

### 2.4 Idempotência: todo pedido que move valor leva uma chave

- [F] **O padrão da Stripe.** O cliente gera uma chave única por operação (a Stripe sugere UUID v4, até 255 caracteres) e a reenvia em cada nova tentativa. O servidor guarda o código e o corpo da primeira resposta depois que a execução começa, inclusive erros 500, e devolve essa mesma resposta nas repetições; se os parâmetros vierem diferentes, recusa; pedidos que conflitam com outro em execução não ficam gravados e podem ser repetidos; as chaves podem ser apagadas depois de 24 horas ([documentação da API](https://docs.stripe.com/api/idempotent_requests)).
- [F] **Implementação em PostgreSQL.** Brandur Leach descreve uma tabela de chaves por usuário com os parâmetros, uma trava, o "ponto de recuperação" atual e a resposta final. O trabalho local é dividido em "fases atômicas" (transações) entre as chamadas externas; cada fase grava o próximo ponto de recuperação na mesma transação, e uma nova tentativa recomeça dali. As fases rodam em isolamento *serializable* para que dois pedidos não peguem a mesma chave. Um processo de fundo termina pedidos abandonados no meio, e outro apaga chaves depois de cerca de 72 horas ([brandur.org, 27/out/2017](https://brandur.org/idempotency-keys)).
- [F] **Repetir com espera crescente e aleatória.** A espera cresce exponencialmente a cada falha, e um componente aleatório (*jitter*) espalha as novas tentativas de muitos clientes para não derrubar o servidor de uma vez ([Stripe, 22/fev/2017](https://stripe.com/blog/idempotency)).
- [F] **O que acontece sem isso.** Os dupes do New World vieram de transferências não atômicas sob lag e de pedidos repetidos que criavam um item novo a cada repetição (ficha [G04, §10.2, itens 2 e 5](fichas/G04-new-world.md)).
- [H] **Para nós:** toda operação que move valor (compra, venda, troca, lance, coleta de liquidação, resgate de compra com dinheiro real) carrega chave de idempotência, com escopo por conta. Isso é obrigatório num jogo de celular e de navegador: a rede cai no meio do pedido, o PWA reenvia a fila de comandos quando volta (seção 4) e o jogador aperta o botão duas vezes.

### 2.5 Registro contábil de partidas dobradas (*ledger*)

- [F] **O ledger da Stripe.** É um registro imutável de eventos em partidas dobradas: todo movimento debita uma conta e credita outra. Cada sistema produtor é modelado como uma máquina de estados em que os saldos passam de conta em conta; contas intermediárias (*clearing*) devem zerar no estado estável, e qualquer sobra indica evento faltando, atrasado ou errado. A empresa reporta cerca de 5 bilhões de eventos por dia, 99,99% do volume em dólares verificado em até quatro dias e mais de 99,9999% do dinheiro "explicável". Erros se corrigem com estorno e reprocessamento, com prévia do impacto, nunca com edição ([Stripe, Ilya Ganelin, 16/fev/2024](https://stripe.dev/blog/ledger-stripe-system-for-tracking-and-validating-money-movement)).
- [F] A ficha do New World já traz o checklist mínimo: ledger de dupla entrada, troca numa única transação com travas em ordem fixa, item com ID único e uma só localização, relógio do servidor, alarmes de criação de valor e chat escapado ([G04, §13](fichas/G04-new-world.md)).
- [H] **Como fica num jogo:**
  - **Contas de jogador:** carteira de ouro, de moeda premium e de cada item fungível.
  - **Contas de fonte** (de onde o valor nasce), uma por tipo: drop de monstro, missão, venda ao NPC, recompensa de evento, compra com dinheiro real.
  - **Contas de dreno** (para onde o valor morre): taxa do mercado, reparo, compra de NPC, aprimoramento que falha, consumo de receita.
  - **Contas de trânsito** (*clearing*), que devem zerar: ouro reservado em ordem de compra, lances de leilão, correio em trânsito, insumos de uma receita em andamento.
  - **Invariante:** para cada moeda e cada item, a soma de todas as contas é zero; criar e destruir valor são lançamentos explícitos. O relatório diário "quanto nasceu em cada fonte e morreu em cada dreno" sai de graça e vira o painel da economia (ver [04a](04a-economia-fontes-drenos-inflacao.md)).
  - **Itens únicos** (não fungíveis) têm ID próprio e uma única localização garantida por restrição do banco; "mover" atualiza o dono, nunca cria cópia ([G04](fichas/G04-new-world.md)).
  - **Saldo cacheado:** uma coluna de saldo atualizada na mesma transação do lançamento, para leituras rápidas, mais uma reconciliação periódica que recalcula a partir do ledger e dispara alarme a qualquer diferença.

### 2.6 Event sourcing: onde vale e onde não vale

- [F] **Definição.** Guardar cada mudança de estado como uma sequência de eventos, de modo que o estado de qualquer momento possa ser reconstruído; isso permite reconstrução completa, consultas temporais e replay para corrigir erros. Fowler aponta os custos: sistemas externos complicam o replay, mudanças de código complicam o reprocessamento, e históricos longos exigem *snapshots* ([Martin Fowler, 12/dez/2005](https://martinfowler.com/eaaDev/EventSourcing.html)).
- [F] **As ressalvas da Microsoft** (página revista em 2026): é um padrão complexo e caro de adotar ou abandonar; as projeções são eventualmente consistentes; eventos nunca são editados, só compensados por novos eventos; *snapshots* a cada N eventos evitam replays longos; concorrência otimista por fluxo; entrega "pelo menos uma vez", o que exige consumidores idempotentes; e conflito com leis de proteção de dados, resolvido guardando dados pessoais fora do log ou cifrando-os com chave por titular, apagável. A recomendação é aplicar o padrão só onde ele compensa, "como um ledger de pagamentos", e manter CRUD no resto ([Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)).
- [H] **Para nós:** o ledger da 2.5 já é o event sourcing da economia. Vale aplicar o padrão a carteiras, itens, ordens de mercado, leilões e RMT, onde auditoria e reconstrução valem ouro (literalmente: com RMT, cada item pode virar disputa de dinheiro real, e na Justiça; ver [F03, §6.5](fichas/F03-runescape-e-osrs.md)). Perfil, configurações, chat e amigos ficam em CRUD comum. Dados pessoais (e-mail, documento do KYC, IP) ficam fora do log e são referenciados por ID, por causa da LGPD (ver [05b](05b-rmt-legal-brasil.md)).

## 3. Números gigantes

### 3.1 As ferramentas

| Ferramenta | Representação | Alcance | Precisão | Desempenho |
|---|---|---|---|---|
| `Number` do JavaScript | ponto flutuante de 64 bits | até ~1,8e308 | ~15 a 17 dígitos; inteiros exatos até 2^53 − 1 | nativo, o mais rápido |
| `BigInt` do JavaScript | inteiro de tamanho arbitrário | sem limite prático | exato, só inteiros | mais lento; não se mistura com `Number` |
| decimal.js | decimal de precisão arbitrária | expoente até 9e15 (padrão) | 20 dígitos significativos (padrão), configurável | exp, ln e pow ficam lentos com muitos dígitos |
| break_infinity.js | mantissa e expoente | até ~1e(9e15) | a da mantissa | de 2,5x a 442x mais rápido que o decimal.js |
| break_eternity.js | sinal, "camada" e magnitude | até 10^^1e308 (torre de potências) | aproximações nos hiperoperadores | entre metade e o dobro do tempo do break_infinity |
| PostgreSQL `bigint` | inteiro de 64 bits | ±9,22e18 | exato | nativo |
| PostgreSQL `numeric` | decimal exato | até 131.072 dígitos antes da vírgula | exato | "muito lento" perto dos inteiros |
| PostgreSQL `double precision` | ponto flutuante | ~1e308 | 15 dígitos, inexato | nativo |

- [F] **break_infinity.js** substitui o decimal.js em jogos que precisam de números muito grandes e preferem velocidade a exatidão; vai além de 1e308, até cerca de 1e(9e15). Nos testes do README, é 2,8x mais rápido para criar um número, 2,5x na soma, 2,9x na multiplicação, 121x no log10, 401x no exp e 442x no pow. O Antimatter Dimensions teve o tempo de script reduzido em 4,5x ao trocar o decimal.js por ele. O próprio README manda usar o decimal.js quem precisa de exatidão. Licença MIT ([GitHub](https://github.com/Patashu/break_infinity.js)).
- [F] **break_eternity.js**, o sucessor, guarda o número como sinal, camada e magnitude (camada 1 = 10^mag; camada 2 = 10^10^mag e assim por diante), alcança 10^^1e308 e roda entre 0,5x e 2x do tempo do break_infinity nos testes do autor. Licença MIT ([GitHub](https://github.com/Patashu/break_eternity.js)). [F] Um port para Dart o descreve como padrão de fato dos incrementais e cita versões para C#, Rust e Godot ([pub.dev](https://pub.dev/packages/break_eternity)).
- [F] **decimal.js** usa por padrão 20 dígitos significativos, expoente entre −9e15 e 9e15 (fora disso vira infinito ou zero), arredondamento "meio para cima" e valores imutáveis; exp, ln e pow ficam bem mais lentos à medida que os dígitos crescem ([documentação](https://mikemcl.github.io/decimal.js/)).
- [F] **BigInt** só representa inteiros (a divisão trunca), não se mistura com `Number` em contas (erro de tipo), não funciona com `Math`, faz o `JSON.stringify` lançar erro (é preciso serializar como texto) e não roda em tempo constante ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)).
- [F] **O limite que mais morde:** o `Number` só representa inteiros com exatidão até 2^53 − 1, cerca de 9,007e15 ([MDN, `MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)), enquanto o `bigint` do PostgreSQL vai a 9,22e18 ([documentação](https://www.postgresql.org/docs/current/datatype-numeric.html)). [H] Um saldo de 64 bits que viaja como número num JSON perde dígitos em silêncio no navegador; saldos grandes devem viajar como texto.
- [F] **PostgreSQL:** o `numeric` é exato (até 131.072 dígitos antes da vírgula e 16.383 depois), mas as contas com ele são "muito lentas" comparadas às de inteiros e de ponto flutuante; o `double precision` tem 15 dígitos de precisão, é inexato, e a documentação manda usar `numeric` para valores monetários ([documentação](https://www.postgresql.org/docs/current/datatype-numeric.html)).
- [F] **Funções matemáticas não são idênticas entre navegadores.** A especificação do JavaScript permite que exp, log, pow e afins devolvam valores "aproximados pela implementação" ([ECMAScript, objeto Math](https://tc39.es/ecma262/#sec-function-properties-of-the-math-object)). [H] Com o servidor autoritativo, isso é só cosmético: o cliente pode mostrar 1,23e45 e o servidor guardar 1,2300001e45 sem prejuízo. Mas a auditoria e o replay (1.3) precisam rodar na mesma versão do motor que fez o cálculo original.

### 3.2 Como guardar no banco

- [C] Para números de incremental, a prática comum é o par mantissa e expoente, comparando primeiro os expoentes para ordenar ([r/incremental_games, fev/2024](https://www.reddit.com/r/incremental_games/comments/1aj8z0b/); [r/incremental_games, 2025](https://www.reddit.com/r/incremental_games/comments/1jxp25p/devs_how_do_you_handle_big_numbers), ambos lidos via espelho).
- [H] **Três classes de número, três formatos:**
  1. **Tudo que é negociável ou contábil** (ouro, moeda premium, quantidades de item, preços): inteiro de 64 bits na menor unidade, como a Stripe faz com dinheiro, que trata valores como inteiros na menor unidade da moeda, por exemplo centavos ([Stripe, campo `amount`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-amount)). Nada de ponto flutuante no ledger.
  2. **Números pessoais gigantes** (multiplicadores, produção da camada exponencial, pontuações de ranking): duas colunas, mantissa (`double precision`) e expoente (`bigint`), com índice composto para ordenar rankings; ou uma coluna com o log10 do valor, que ordena trivialmente e preserva 15 dígitos relativos. Texto livre, como o formato de string das bibliotecas, só para exibição, porque não ordena.
  3. **Frações exatas raras** (taxa de câmbio interna, preço médio ponderado): `numeric`, sabendo que é lento, fora dos caminhos quentes.

### 3.3 A questão de design: números enormes não convivem com mercado

- [F] **O teto chega para todos.** O Old School RuneScape bateu no teto do inteiro de 32 bits (2.147.483.647 gp) e só em 30/09/2026 liberou ofertas acima disso, pagas com "platinum tokens"; antes, os itens mais caros exigiam sites de terceiros e encontro no jogo ([F03, §6.1](fichas/F03-runescape-e-osrs.md)). O WoW guardou o ouro num inteiro de 32 bits com sinal e teve teto de 214.748 de ouro até 2010, depois 999.999 e, desde 2016, 9.999.999 ([F06](fichas/F06-world-of-warcraft.md)).
- [F] **Os idle MMOs puseram teto explícito.** No Idle Clans, preço e carteira vão até 2 bilhões de ouro ([C02, §6.1](fichas/C02-idle-clans.md)). No Milky Way Idle, o teto de preço subiu de 10 bilhões para 100 bilhões em mai/2025 e hoje é de 1 trilhão; o saco de 10 Cowbells, que funciona como token de RMT, foi de ~200 mil para ~1,2 milhão de moedas em 19 meses ([C01, §6.1 e §6.3](fichas/C01-milky-way-idle.md)). O SimpleMMO não tem nível máximo (o log de 2026 fala em ajustes "por volta do nível 300.000"), o ouro por monstro crescia sem teto com o nível até ago/2022, e o próprio estúdio passou a citá-lo como exemplo de ouro tão comum que deixou de pesar nas decisões ([C05, §2 e §6](fichas/C05-simplemmo.md)).
- [H] **Por quê.** No mercado, o preço nominal acompanha a massa de moeda dividida pelos bens. Renda pessoal exponencial vira preço exponencial: o novato não consegue comprar nada, o veterano não consegue gastar, a tela não comporta os dígitos, e a taxa de câmbio do RMT (ouro por real) vira notação científica. A teoria em [02a, §5](02a-teoria-design-idle.md) chega à mesma conclusão pelo lado da percepção: o jogador sente ordens de grandeza, e o número negociável precisa caber na cabeça.
- [H] **A saída é estrutural: duas velocidades de número** ([02a](02a-teoria-design-idle.md)). A camada pessoal (maestria, multiplicadores, prestígio, poder) pode crescer exponencialmente e usar break_infinity ou break_eternity no cliente, porque nunca entra no mercado. A camada negociável (ouro, itens, moeda premium) fica em unidades absolutas, com produção limitada pelo tempo e drenos percentuais, e cabe com folga em 64 bits. Na tela, a camada pessoal usa notação compacta; a negociável mostra o número inteiro, porque quem negocia precisa de exatidão.
- [H] **As quatro perguntas, para as duas velocidades:**
  - **Inspira-se em** OSRS, WoW e nos idle MMOs (tetos, inteiros) e se diferencia dos incrementais solo, que deixam tudo exponencial.
  - **Resolve** a inflação embutida e o estouro técnico.
  - **Incentiva** a investir na camada pessoal (o "número subindo") e a negociar bens com preço legível.
  - **Risco:** a camada negociável parecer pouco "idle" e o jogo perder a sensação de crescimento ([02a](02a-teoria-design-idle.md), "como pode dar errado"). Também é preciso prever desde o início uma unidade de alta denominação e regras de conversão, para não repetir o remendo do OSRS.

## 4. Sincronização de save

### 4.1 Onde mora o estado

| Modelo | Exemplo | Conflito entre dispositivos | Serve para economia? |
|---|---|---|---|
| Save só no aparelho | Melvor no modo offline | Não existe; cada aparelho é um jogo | Não: o save é editável |
| Save no aparelho + cópia na nuvem | Melvor com nuvem; Saved Games do Google Play | Resolvido por política (o mais recente, o de mais tempo de jogo) ou por fusão feita pelo jogo | Não: a nuvem guarda o que o cliente mandar |
| Local-first com fusão automática (CRDT) | apps de edição colaborativa | Fusão automática de edições concorrentes | Não: recurso escasso não se "funde" |
| Estado no servidor, cliente como tela | idle MMOs (C01–C05) | Não há dois estados; há comandos concorrentes | Sim |
| Estado no servidor + cliente otimista que se reconcilia | Replicache | O servidor reexecuta os comandos; o cliente refaz os pendentes sobre o estado oficial | Sim, com cuidado |

- [F] **O custo do save no cliente.** No Melvor, 35 das 80 reviews negativas de 2026 tratam de conexão, save ou bugs: 12 relatam perda de save, local ou na nuvem, e 14 reclamam de exigir internet num jogo solo. O FAQ admite que os saves não têm backup no Steam e que a nuvem sincroniza sozinha a cada 12 horas, o que permite sobrescrever por engano (ficha [B01, §11](fichas/B01-melvor-idle.md)). [H] É o pior dos dois mundos: o jogo exige rede, mas a rede não protege o progresso.
- [F] **Política de conflito do Google Play.** O serviço de jogos salvos oferece políticas para resolver conflitos entre versões: ficar com a de maior tempo de jogo, com a modificada mais recentemente, com a base ou com a remota, ou não resolver nada e deixar a fusão para o jogo; nesse caso, o jogo não pode ler nem gravar o save até resolver o conflito ([Android Developers, Saved Games, SDK v1](https://developer.android.com/games/pgs/v1/cpp/saved-games)). [H] Toda política automática joga fora o progresso de um dos aparelhos. Num jogo solo, isso irrita; num jogo com mercado, "ficar com a versão de maior tempo de jogo" pode ressuscitar ouro já gasto em outro aparelho, um dupe entregue de bandeja.
- [F] **Local-first** é a linha de pesquisa que propõe manter os dados no aparelho e fundir edições concorrentes com estruturas que convergem sozinhas (CRDTs), sem depender do servidor ([Kleppmann, Wiggins, van Hardenberg e McGranaghan, Ink & Switch, 2019](https://www.inkandswitch.com/local-first/)). [H] Funciona para texto e listas, em que duas edições podem coexistir. Não funciona para ouro e itens: duas compras do mesmo item único com o mesmo ouro não podem "coexistir".
- [F] **Cliente otimista com servidor autoritativo.** No Replicache, cada comando roda na hora no cliente e fica guardado como "pendente", com um número sequencial por cliente. O servidor recebe os pendentes em lote, reexecuta cada comando com a lógica dele, e o resultado do servidor é o oficial. O cliente então volta ao último estado oficial, aplica a atualização e reaplica os pendentes que sobraram (*rebase*). Os números de sequência garantem que nada seja aplicado duas vezes, e os conflitos se resolvem na lógica de cada comando ([documentação do Replicache](https://doc.replicache.dev/concepts/how-it-works)).

### 4.2 Conflito entre dispositivos num jogo autoritativo

- [H] Com o estado no servidor, não existem "dois saves". Existem dois aparelhos mandando comandos ao mesmo tempo (o celular lista um item enquanto o PC o equipa). As regras:
  1. **Ordem por conta:** os comandos de uma conta passam por um ponto de serialização (trava por conta ou por personagem no banco), e cada comando valida o estado do momento em que roda, não o que o aparelho via.
  2. **Versão por personagem:** o cliente manda a versão do estado que viu; se ela mudou, o servidor recusa ou revalida, e o cliente recarrega (concorrência otimista).
  3. **Chave de idempotência** em todo comando que move valor (2.4), para que o reenvio depois de uma queda não execute duas vezes.
  4. **Uma sessão "de controle" por conta, várias de leitura:** o segundo aparelho pode ver tudo, mas, para agir, assume o controle e o primeiro é avisado. É mais simples para o jogador e, de quebra, é uma das defesas contra multicontas e fazendas listadas na ficha [G05, §13](fichas/G05-banana-e-bongo-cat.md).
- [F] **Referências de limite por conta no gênero:** o IdleMMO permite até 5 personagens, com no máximo 3 rodando ações ao mesmo tempo ([C04, §5](fichas/C04-idlemmo.md)); o Milky Way Idle, até 4, só 1 deles com acesso ao mercado ([C01, §7.2](fichas/C01-milky-way-idle.md)).

### 4.3 PWA offline-first com reconciliação

- [H] **O que o cliente pode fazer sem rede:** mostrar o último estado conhecido (inventário, filas, preços com a data da cotação), projetar visualmente o progresso a partir do horário de término que o servidor mandou, e rascunhar planos (reordenar a fila, preparar uma lista de vendas).
- [H] **O que ele não pode fazer:** concluir qualquer coisa que mova valor. Comandos feitos sem rede entram numa fila local, cada um com chave de idempotência e prazo de validade ("vender a 12 de ouro, válido por 10 minutos"). Na volta, o servidor revalida um a um; o que não vale mais (o preço mudou, o item foi usado no outro aparelho) é recusado com explicação, e o cliente refaz a tela sobre o estado oficial, no modelo do Replicache.
- [H] **Regra de interface:** ganho "previsto" e ganho "confirmado" têm visual diferente. O jogador nunca vê como dele algo que o servidor ainda não liquidou; isso evita a sensação de "o jogo me roubou" quando a reconciliação corrige a previsão.
- [H] **As quatro perguntas, para o cliente otimista:**
  - **Inspira-se no** Replicache e se diferencia do save na nuvem do Melvor e do Google Play: não há fusão de estados, só reexecução de comandos.
  - **Resolve** a rede ruim do celular (metrô, 4G instável) sem abrir mão da autoridade.
  - **Incentiva** a abrir o app em qualquer lugar e planejar mesmo sem rede.
  - **Risco:** previsões erradas frustram, e a fila offline vira vetor de abuso se o servidor confiar no horário do aparelho (a "venda feita às 10h" que chega às 11h vale pelo horário do servidor).

### 4.4 O navegador apaga dados

- [F] **Por padrão, o armazenamento do navegador é "melhor esforço".** Persiste enquanto houver cota e espaço; o pedido de armazenamento persistente (`navigator.storage.persist()`) abre um aviso no Firefox e é decidido sozinho, pelo histórico de uso, no Safari e no Chrome. Quando o navegador despeja dados, apaga **tudo** daquela origem de uma vez. O Safari, com a prevenção de rastreamento ligada, apaga os dados criados por script de um site que passe 7 dias sem interação do usuário ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)).
- [F] **A regra dos 7 dias e os apps da tela inicial.** Desde mar/2020, o WebKit apaga IndexedDB, LocalStorage, SessionStorage e registros e caches de service worker depois de 7 dias de uso do Safari sem interação com o site. Apps adicionados à tela inicial não fazem parte do Safari e têm contador próprio, zerado pelo uso do app; o WebKit diz não esperar que os dados próprios desses apps sejam apagados ([WebKit, John Wilander, 24/mar/2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)).
- [H] **Implicação:** o cache do cliente é descartável por definição. Num jogo autoritativo isso é tranquilo, porque nada se perde quando o navegador limpa. Mas a fila de comandos offline (4.3) pode sumir junto: ela deve ser pequena, curta e reenviada assim que houver rede. É mais um motivo para incentivar a instalação do PWA no iPhone (seção 7).

### 4.5 Backup é rollback

- [F] O PostgreSQL permite recuperação para um ponto no tempo a partir de um backup base mais o arquivamento contínuo do log de transações (WAL) ([documentação](https://www.postgresql.org/docs/current/continuous-archiving.html)).
- [H] Restaurar o banco inteiro para antes de um incidente é um *rollback* global, e rollback é uma das fábricas clássicas de dupe (seção 5.1): o que saiu de uma conta depois do ponto de restauração volta a existir, e o que entrou em outra pode já ter sido trocado. Com o ledger (2.5), a correção preferida é cirúrgica: estornar os lançamentos do incidente, conta a conta, preservando o honesto, como a ficha [G04, §13](fichas/G04-new-world.md) recomenda.
