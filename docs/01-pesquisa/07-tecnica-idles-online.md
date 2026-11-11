# Técnica de idles online

> **Escopo.** Como os melhores idles, idle MMOs e MMOs de navegador resolvem os problemas técnicos que decidem se uma economia de jogadores sobrevive: progresso offline, autoridade do servidor, números gigantes, sincronização de save, anti-cheat, anti-bot e anti-duplicação, escala e PWA/mobile. Perguntas: (1) onde e como calcular o progresso do ausente sem abrir brecha; (2) que garantias transacionais a economia exige; (3) como conviver com números enormes e mercado; (4) como sincronizar estado entre dispositivos; (5) onde os bots realmente importam num jogo que já se joga sozinho; (6) o que a infraestrutura própria (VPS, Docker Swarm, PostgreSQL) aguenta; (7) o que um PWA consegue fazer em 2026 e quanto as lojas cobram. **Sem código:** técnicas, padrões e trade-offs.
>
> Aproveita as fichas [B01](fichas/B01-melvor-idle.md), [B02](fichas/B02-legends-of-idleon.md), [C01](fichas/C01-milky-way-idle.md)–[C06](fichas/C06-shop-titans.md), [F03](fichas/F03-runescape-e-osrs.md), [G04](fichas/G04-new-world.md), [G05](fichas/G05-banana-e-bongo-cat.md) e a teoria em [02a](02a-teoria-design-idle.md), citadas pelo caminho, sem repetir a pesquisa.
>
> Etiquetas: **[F]** fato com fonte · **[C]** consenso da comunidade · **[H]** hipótese ou análise do estúdio · **[NV]** não verificado. Links acessados em novembro de 2026.

## Resumo executivo

O idle é o gênero em que o servidor autoritativo custa menos: as ações duram segundos ou minutos, e a latência quase não importa. Deixar valor no cliente, como fazem o Melvor e o IdleOn, tem preço conhecido: save editável e injetor público. Achados principais:

- **Offline.** Os jogos documentados simulam tique a tique na volta (Melvor: fiel e caro), em blocos (Antimatter Dimensions: perde fidelidade), por fórmula (Clicker Heroes, IdleOn: diverge) ou mantêm o servidor rodando para todos (Idlescape: frágil a reinícios). Recomendamos o híbrido: forma fechada entre os eventos que mudam a taxa, no servidor, com drops por amostragem binomial exata e RNG por contador com chave secreta. O teto de ausência vira política econômica, não limite de CPU.
- **Economia.** Cada operação de valor numa única transação do PostgreSQL, com chave de idempotência, travas em ordem fixa e restrições no banco, registrada num ledger de partidas dobradas. O rastreio de todas as transações permitiu ao New World remover quase todo o valor duplicado sem rollback.
- **Números.** Exponencial só na camada pessoal; tudo que é negociável em inteiros de 64 bits (OSRS e WoW estouraram os 32 bits).
- **Bots.** No núcleo idle, o bot perde a razão de existir. Ele importa no mercado, na criação de contas, nas janelas ativas e na raspagem de dados. Detecção por regularidade nas ações ativas e por fluxos no ledger; para scripts, "leitura liberada, escrita humana".
- **Escala.** Os líderes do subgênero rodam com 1 a 3 pessoas e milhares de simultâneos. Uma VPS com Swarm dá ergonomia, não alta disponibilidade.
- **PWA.** No iPhone, push só depois da instalação, e nada roda em segundo plano. No Brasil, desde jun/2026 a Apple aceita link externo para pagamento com 15% de comissão, mas o proíbe para menores em apps da App Store.

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
- [F] **As ressalvas da Microsoft** (página revista em 2026): é um padrão complexo e caro de adotar ou abandonar; as projeções são eventualmente consistentes; eventos nunca são editados, só compensados por novos eventos; *snapshots* a cada N eventos evitam replays longos; concorrência otimista por fluxo; entrega "pelo menos uma vez", o que exige consumidores idempotentes; e conflito com leis de proteção de dados, resolvido guardando dados pessoais fora do log ou cifrando-os com chave por titular, apagável. A recomendação é aplicá-lo só nas partes que mais se beneficiam, como um ledger de pagamentos ou um fluxo de pedidos, e manter CRUD no resto ([Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)).
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

## 5. Anti-cheat, anti-bot e anti-duplicação

### 5.1 De onde vêm os dupes

1. **Condição de corrida ("confere e depois age").** [F] James Kettle (PortSwigger) mostrou que limites como "resgatar um vale-presente uma vez" ou "usar o cupom uma vez" caem quando vários pedidos chegam na janela entre a verificação e a ação. A técnica do "pacote único" segura o último fragmento de 20 a 30 pedidos HTTP/2 e os completa num só pacote TCP; num teste entre Melbourne e Dublin, a dispersão mediana de chegada foi de 1 ms. As defesas recomendadas: tornar a verificação e a ação atômicas numa única transação, não misturar dados de fontes diferentes numa operação sensível e usar restrições de unicidade do banco como segunda linha ([PortSwigger, "Smashing the state machine", 9/ago/2023](https://portswigger.net/research/smashing-the-state-machine)). [H] Num jogo de navegador, qualquer jogador com um script faz isso contra "vender item", "aceitar troca" ou "coletar recompensa". Testes com pedidos simultâneos precisam fazer parte da bateria de cada endpoint que move valor.
2. **Transferência não atômica e pedido repetido sob lag.** [F] É a família dos dupes do New World na troca, no mercado e na decoração da casa (ficha [G04, §10.2](fichas/G04-new-world.md)). A defesa é a da seção 2: uma transação só, chave de idempotência e item com uma única localização.
3. **Estado salvo em momentos diferentes, queda e rollback.** [H] O padrão clássico: o servidor guarda em memória o estado de dois jogadores e grava cada um num momento; uma troca acontece entre as gravações; o servidor cai; um lado volta com o item e o outro também. O rollback global tem o mesmo efeito em escala. [F] Em 2002, o site PlanetDiablo explicava que um rollback dos Realms do Diablo II apagaria os itens duplicados pelo método recente, mas não os feitos antes; Bill Roper, da Blizzard, chamou rollbacks de "time consuming and serious matters" e disse que a empresa buscava uma alternativa a eles ([PlanetDiablo, 27/fev/2002](https://gamespy-archives.quaddicted.com/sites/www.planetdiablo.com/features/articles/broper022702/index.html)).
4. **Número negativo e estouro.** [F] Em 3/jul/2020, o Growtopia descobriu que números negativos digitados nos *Challenge Timers* duplicavam itens caros; fez um rollback de 24 horas, travou itens por semanas e removeu cerca de 100 mil itens duplicados até liberar tudo em 17/ago/2020 ([wiki de fãs do Growtopia](https://growtopiawiki.com/w/Rollback), via busca). O teto de 32 bits do OSRS (3.3) é o mesmo problema pelo outro lado. [H] Restrição no banco (saldo e quantidade nunca negativos; quantidade dentro de um teto) pega o que a validação esqueceu.
5. **O caminho de exceção.** [F] Ao desligar o comércio, o New World criou um dupe novo: o estorno de um projeto de cidade devolvia um custo nunca cobrado ([G04, §10.2, item 3](fichas/G04-new-world.md)). [H] Estornos, cancelamentos, expiração de ordens e botões de emergência movem valor e precisam do mesmo rigor do caminho feliz, com testes próprios.
6. **Duas fontes da verdade.** [F] No New World, depósito e estação de fabricação acreditavam ser donos do mesmo material ([G04, §10.2, item 4](fichas/G04-new-world.md)). [H] Cache em Redis com saldo, estado em memória do servidor de jogo e banco de dados divergindo é a versão moderna do mesmo erro: o saldo que vale é o do banco, e caches só servem para leitura.

**A resposta que preserva o honesto.** [F] O New World não fez rollback. Na primeira leva de banimentos, em 2/nov/2021, eliminou mais de 80% do valor duplicado em moedas e itens; até 15/nov, depois de rastrear para onde tinham ido os itens e as moedas (a empresa diz que sua telemetria registra todas as transações), baniu mais 460 contas, chegou a mais de 1.200 banidos e removeu 98% do restante; quem esbarrou no bug sem explorá-lo não foi banido ([dev blog, via devtrackers](https://devtrackers.gg/new-world/p/89a16c50-dev-blog-update-from-the-team-exploits)). [H] Isso só é possível com um ledger que permita seguir cada moeda até a origem (2.5).

### 5.2 O que o PostgreSQL oferece

- [F] **Isolamento.** O padrão é *Read Committed*: cada comando vê o banco como estava no início dele, e um `UPDATE` que esbarra numa linha alterada por outra transação espera e reavalia a condição sobre a versão nova. No *Repeatable Read*, a transação inteira vê um só retrato, e atualizar uma linha que outra transação mudou dá erro de serialização. No *Serializable*, o resultado é garantido igual ao de alguma ordem sequencial; conflitos falham com o código 40001, e **a aplicação precisa estar pronta para repetir a transação**. Recomendações: transações curtas, declarar `READ ONLY` quando possível, limitar conexões com um pool e não deixar transação ociosa aberta ([documentação](https://www.postgresql.org/docs/current/transaction-iso.html)).
- [F] **Travas.** `SELECT ... FOR UPDATE` trava as linhas lidas até o fim da transação. O banco detecta impasses (*deadlocks*) e aborta uma das transações, sem garantia de qual; a defesa é travar sempre na mesma ordem e pegar primeiro a trava mais restritiva. Há também travas consultivas (*advisory locks*), definidas pela aplicação, por sessão ou por transação ([documentação](https://www.postgresql.org/docs/current/explicit-locking.html)).
- [F] **Filas.** Com `SKIP LOCKED`, linhas já travadas são puladas: a visão fica inconsistente, imprópria para uso geral, mas útil para evitar disputa entre vários consumidores de uma tabela em forma de fila ([documentação do SELECT](https://www.postgresql.org/docs/current/sql-select.html)).
- [H] **Receita para uma troca entre A e B** (sem código, só a sequência):
  1. Abrir uma transação.
  2. Travar as duas carteiras e os itens envolvidos em ordem crescente de ID, para não haver impasse.
  3. Conferir saldo, posse e estado de cada item.
  4. Gravar os lançamentos do ledger (débitos e créditos que somam zero) e atualizar os saldos.
  5. Confirmar. Em erro de serialização ou impasse, repetir tudo, com a mesma chave de idempotência.
- [H] **Restrições como rede de segurança:** saldo e quantidade com verificação de não negatividade; unicidade da localização de cada item único; chaves estrangeiras entre lançamentos e contas; unicidade da chave de idempotência por conta. A validação da aplicação erra; a restrição do banco recusa.

### 5.3 O paradoxo do idle: onde os bots importam

- [F] **No núcleo, o bot perde a razão de existir.** Na Devcom 2019, a CipSoft contou que cerca de 25% dos usuários do Tibia rodavam bots para tarefas repetitivas (ficha [F04](fichas/F04-tibia.md)). A teoria em [02a, §6](02a-teoria-design-idle.md) registra que Pecorella chama de erro de design o jogo em que o autoclicker vira obrigatório para quem joga a sério. [H] Num idle bem feito, a automação do laço central é a própria proposta, e o bot não ganha nada "jogando" o que o jogo já joga sozinho.
- [F] **O bot vence onde o tempo passivo vira valor negociável.** Banana e Bongo Cat mostraram que, com recompensa por tempo, saída para dinheiro real e custo quase zero por conta extra, o melhor jogador é uma fazenda (ficha [G05](fichas/G05-banana-e-bongo-cat.md)).
- [H] **As quatro camadas onde o bot importa num idle online:**
  1. **Mercado:** comprar listagens mal precificadas em milissegundos (*sniping*), inundar o livro, manipular preço, arbitrar mais rápido que qualquer humano.
  2. **Criação de contas:** cada conta é mais um bilhete de emissão offline, de recompensa diária e de drop raro, e mais uma mula para o RMT ilegal.
  3. **Ações ativas:** janelas de jogo ativo, chefes mundiais, eventos e cliques que pagam bônus. Se só o ativo ganha algo, o ativo vira alvo de automação.
  4. **Coleta de dados:** sem dados oficiais, a comunidade raspa o servidor, gerando carga, banimentos e falsos positivos ([C01, §7.3](fichas/C01-milky-way-idle.md)).
- [H] **Corolário de design:** a automação que o jogador quer deve vir do jogo (filas, regras, automação conquistada), e o valor negociável deve nascer de decisões ativas verificadas pelo servidor, com teto por conta e por período. A ficha [G05, §13](fichas/G05-banana-e-bongo-cat.md) já traz o checklist de "prova de jogo".

### 5.4 Como detectar bots

- [F] **Autossimilaridade.** Lee, Woo, Kim, Mohaisen e Kim mediram quanto as sequências de ações de uma conta se repetem e testaram o método em Lineage, Aion e Blade & Soul, da NCSoft ([NDSS 2016](https://seal.cs.ucf.edu/doc/ndss16.pdf)). A premissa: bots repetem rotinas fixas.
- [F] **Intervalo entre ações.** Kang e Kim usaram a frequência, a média e o desvio-padrão do intervalo entre repetições de uma mesma ação e relataram 97% de acerto em registros do Aion ([registro do artigo](https://libmast.utm.my/Record/doaj.art-0e1ec19ab14a4055a886ffd30b9257c2)). Uma patente sobre tráfego de MMORPG descreve o mesmo sinal na rede: bots mostram só intervalos curtos ou um pico estreito, enquanto humanos param para procurar caminho ou quando morrem ([US 8.366.553](https://patents.google.com/patent/US8366553)).
- [H] **Entropia de tempo no idle.** O sinal clássico (regularidade) precisa ser medido só nas ações **ativas**, porque o idle é feito para ser deixado sozinho. Humanos têm intervalos irregulares, com cauda longa, e ciclos de sono; bots são regulares demais ou aleatórios "uniformes" demais, e ativos 24 horas. Medir a distribuição, não a média.
- [F] **Registros e denúncias.** A segurança do EVE baniu 70.492 contas em 2021, boa parte delas (sem número divulgado) criadas automaticamente e banidas antes de qualquer login, e recebeu 137.183 denúncias de bot de 41.651 jogadores; a equipe diz que os registros do jogo revelam muito ([EVE Online, 12/jul/2022](https://www.eveonline.com/news/view/team-security-2021-in-review)). A Jagex baniu mais de 6,9 milhões de contas no OSRS em 2023 e média de 67 mil por semana em 2024, com só 0,36% revertidos em apelação ([F03, §6.5](fichas/F03-runescape-e-osrs.md)).
- [F] **Anomalias de economia.** O "risco de troca" do IdleMMO mede o valor que cada conta dá e recebe de muitas outras, com decaimento ([C04, §6](fichas/C04-idlemmo.md)); a onda de bans do Milky Way Idle em mai/2025 pegou *boosting*, transferência entre contas e compra de ouro, e tirou dos banidos 2 a 3 vezes a riqueza inflada ([C01, §7.2](fichas/C01-milky-way-idle.md)). [H] Com o ledger, os sinais saem de consultas: fluxo líquido unilateral entre pares de contas, contas novas que só recebem, ouro que entra por venda ao NPC e sai em troca para uma mesma conta, compras do mercado a preços fora da curva.
- [H] **Iscas (*honeypots*).** Elementos que só a automação toca: campo invisível no cadastro, endpoint que o cliente oficial nunca chama, pedido em formato que a interface não gera. O Milky Way Idle já detecta extensões por pedidos que o cliente oficial não faria ([C01, §7.2](fichas/C01-milky-way-idle.md)). Isca gera sinal, não ban automático: o caso de falso positivo do mesmo jogo mostra o custo de errar.
- [H] **Punição graduada e reversível.** A fila é: sinal → pontuação de risco → atrito (captcha, limite menor, carência de troca) → revisão humana → punição com remoção do valor rastreado. O MWI pôs captcha contra *goldfarm* no mercado em out/2025 ([C01, §6.2](fichas/C01-milky-way-idle.md)); o IdleMMO passou a mostrar verificações anti-bot bem menos vezes nos patches 0.84.0 e 0.86.2 ([C04, §6](fichas/C04-idlemmo.md)), sinal de que atrito para todos cansa.

### 5.5 Multicontas: IP, dispositivo e pagamento

- [H] **IP é sinal fraco.** Operadoras móveis e redes domésticas compartilham endereços entre muitos clientes, e famílias dividem a mesma rede. Serve para correlacionar, não para punir.
- [F] **Dispositivo e rede.** O SimpleMMO bloqueia trocas com avisos de "mesmo dispositivo/rede", e um jogador de iOS relatou falsos positivos em 2024 ([C05, §6](fichas/C05-simplemmo.md)). [H] Impressão digital de dispositivo é dado pessoal sob a LGPD; exige base legal e transparência (ver [05b](05b-rmt-legal-brasil.md)).
- [F] **Pagamento.** A Stripe gera, para cada número de cartão, uma impressão (*fingerprint*) estável que permite ver se dois clientes usam o mesmo cartão ([Stripe, suporte](https://support.stripe.com/questions/how-can-i-detect-duplicate-cards-or-bank-accounts); [referência do campo](https://stripe.dev/stripe-terminal-android/v2/external/com.stripe.stripeterminal.external.models/-card-details/fingerprint.html)). A documentação de cartões presenciais avisa que cartões em carteiras digitais (Apple Pay, Google Pay) não têm a mesma impressão do cartão usado online ([Stripe Terminal](https://stripe.com/docs/terminal/features/saving-cards/overview), via busca). [C] Desenvolvedores relatam que a impressão é única por conta Stripe (o mesmo cartão em duas contas gera impressões diferentes) e lembram que cartões de família ou de empresa são legítimos; por isso, ela deve servir de alerta, não de bloqueio ([DEV Community](https://dev.to/shayy/this-one-stripe-field-could-save-you-from-fraud-and-no-one-talks-about-it-3ad2); [lista de discussão da Stripe](https://groups.google.com/a/lists.stripe.com/g/api-discuss/c/fAH1sgE2uAE)).
- [F] **Política de alts.** O Idle Clans permite até 3 personagens normais por pessoa e criou em abr/2026 uma conta-mestre com login por Steam e Discord e 2FA, para aplicar os limites ([C02, §7.2](fichas/C02-idle-clans.md)); o OSRS restringe o comércio de contas F2P novas até 20 horas de jogo, 10 quest points e nível total 100 ([F03, §6.5](fichas/F03-runescape-e-osrs.md)); o New World travava o comércio de contas novas por 72 horas ou até o nível 10 ([G04, §12](fichas/G04-new-world.md)).
- [H] **O sinal mais forte é econômico, não técnico:** a multiconta existe para mover valor. O grafo de transferências do ledger (quem dá para quem, e quanto, sem contrapartida) pega a cadeia de mulas que o IdleMMO aponta como a trapaça principal ([C04, §6](fichas/C04-idlemmo.md)), sem depender de IP ou de aparelho.

### 5.6 Regras para scripts e APIs

- [F] **Torn.** A API oficial tem quatro níveis de chave (Public, Minimal, Limited, Full) ou seleção personalizada; o limite é de 100 pedidos por minuto por usuário, somando todas as suas chaves, e de 5.000 por minuto por IP para serviços grandes, sendo proibido espalhar o tráfego para burlar o limite. Todo serviço que pede a chave do jogador precisa exibir uma tabela de termos dizendo se guarda dados, se compartilha, para que usa, como guarda a chave e que nível exige; o mau uso dá banimento permanente de chaves, IPs e usuários, e todo serviço deve seguir as regras de scripts do jogo ([Torn, documentação da API](https://www.torn.com/api.html)). [C] As regras de scripts em si ficam num fórum que não consegui ler; scripts publicados descrevem o padrão aceito como "cada ação exige um clique manual" ([GitHub, z-torn](https://github.com/z-torn/tampermonkey); [Greasy Fork, Torn Vault](https://greasyfork.org/scripts/575288-torn-vault)).
- [F] **OSRS e RuneLite.** As diretrizes da Jagex para clientes de terceiros (jun/2022, revistas em abr/2024) aprovam só RuneLite e HDOS, ameaçam ação permanente contra quem usar outros e proíbem, entre outros, auxílios de luta contra chefes (previsão de ataque, indicador de troca de oração, indicador automático de onde ficar) e a reordenação de opções de menu sobre outros jogadores; o texto avisa que dá princípios e exemplos, não uma lista completa ([OSRS Wiki, cópia do anúncio](https://oldschool.runescape.wiki/w/Update:Third_Party_Client_Guidelines)). O RuneLite verifica os plugins do seu Plugin Hub e mantém uma lista de recursos recusados, como plugins que dependem inteiramente de IDs fornecidos pelo jogador ([RuneLite wiki](https://github.com/runelite/runelite/wiki/Rejected-or-Rolled-Back-Features)).
- [F] **Idle MMOs.** O Milky Way Idle publica o mercado em JSON com atraso proposital e, desde abr/2026, tem no cliente do Steam um gerenciador que instala userscripts por URL ([C01, §7.3](fichas/C01-milky-way-idle.md)); o Idle Clans tem API pública com chave para limites maiores ([C02, §7.3](fichas/C02-idle-clans.md)); o IdleMMO tem API pública e proíbe bots, raspagem e uso das APIs internas ([C04, §6](fichas/C04-idlemmo.md)); o Idlescape só permite modificações visuais ([C03, §7.2](fichas/C03-idlescape.md)).
- [H] **Princípio para nós: leitura liberada, escrita humana.** API oficial de leitura (mercado, rankings, perfil público) com chave, níveis de acesso, limites e cache, no modelo do Torn; scripts podem ler e exibir à vontade; toda escrita (ação, ordem, lance) é um gesto humano = um comando, e o próprio jogo entrega a automação que o jogador quer (filas, regras de venda), para que o script não precise fazer isso. Com RMT oficial, a API nunca expõe nada que permita automatizar a venda de valor real.
- [H] **As quatro perguntas, para "leitura liberada, escrita humana":**
  - **Inspira-se em** Torn (chaves, níveis e transparência), MWI (dados oficiais e scripts aprovados) e Jagex/RuneLite (cliente aprovado com regras escritas); diferencia-se do Idlescape (só visual), que encolheu o ecossistema.
  - **Resolve** a raspagem descontrolada e dá aos jogadores-economistas o que eles querem.
  - **Incentiva** ferramentas comunitárias e transparência, que, pelo contraste entre MWI e Idlescape, parecem reter o perfil "economista" ([C03, §7.3](fichas/C03-idlescape.md); não é prova).
  - **Risco:** ferramentas de leitura muito boas viram vantagem de quem as usa (informação é poder no mercado), e a fronteira entre "mostrar" e "decidir por você" é móvel; as regras precisam ser vivas, como as da Jagex.

## 6. Escala

### 6.1 Quanto os idle MMOs realmente rodam

| Jogo | Escala divulgada | Equipe | Infraestrutura conhecida |
|---|---|---|---|
| IdleMMO | "Jogando agora: 6.391" no contador do site (6/nov/2026) | 3 desenvolvedores | Um servidor em Londres, com latência admitida para Índia e Sudeste Asiático ([C04, §9](fichas/C04-idlemmo.md)) |
| Milky Way Idle | Pico de 3.310 simultâneos no Steam (mai/2025); média de 781 (out/2026) | 2 pessoas | Servidor único e sem reset ([C01, §9 e §10](fichas/C01-milky-way-idle.md)) |
| Idle Clans | Pico de 1.053 no Steam (jun/2026); ~8,9 mil MAU no Android (estimativa de terceiro) | Desenvolvedor solo / Isam Games Oy | Cliente em Unity ([C02, §7.3 e §9](fichas/C02-idle-clans.md)) |
| SimpleMMO | Mais de 1 milhão de registrados (jul/2023); um jogador relatou nunca ter visto mais de ~500 online (2022) | Na prática, 1 pessoa | Não divulgada ([C05, §9](fichas/C05-simplemmo.md)) |
| EVE Online | Recorde de 65.303 simultâneos num só servidor, o Tranquility (5/mai/2013) | Estúdio grande | Servidor único para o mundo inteiro ([F01, §9](fichas/F01-eve-online.md)) |
| Old School RuneScape | Pico de 240.756 simultâneos (ago/2025) | ~700 funcionários na Jagex | Mundos de até 2.000 jogadores (membros) ou 1.400 (gratuitos) ([F03, §9](fichas/F03-runescape-e-osrs.md); [OSRS Wiki, World 400](https://oldschool.runescape.wiki/w/World_400)) |
| Lichess (xadrez, navegador) | Mais de 12 bilhões de partidas guardadas | Organização sem fins lucrativos | Scala 3 sobre um Play 2.8 modificado, MongoDB, e um servidor de WebSocket separado (lila-ws) que conversa com o principal via Redis ([GitHub do lila](https://github.com/lichess-org/lila)) |

- **Stacks dos idle MMOs: não encontradas.** Procurei a tecnologia de servidor do IdleMMO, do SimpleMMO e do Idle Clans (blogs, páginas de produto, busca geral) e não achei nada publicado além do cliente Unity do Idle Clans.
- [F] Na página de discussão da wiki do OSRS sobre mundos, um comentário sugere que alguns mundos gratuitos (talvez todos) aceitam só 1.000 jogadores ([OSRS Wiki, discussão](https://oldschool.runescape.wiki/w/Talk:World)); trate os limites como aproximados. [H] Pela conta simples, o pico de 2025 pedia mais de 120 mundos cheios.
- [H] **Leitura:** os líderes do nosso subgênero rodam com 1 a 3 pessoas e um servidor, e a escala deles se mede em milhares de simultâneos, não em centenas de milhares. Num idle, cada jogador gera poucos comandos por minuto, e a carga pesada aparece em três lugares: mercado, eventos sincronizados (chefe mundial, início de temporada, reset diário) e liquidações em massa. A capacidade real precisa ser medida com teste de carga desses três cenários, não estimada.

### 6.2 Servidor por tique ou por eventos

- [F] **O tique do OSRS.** O tique de 0,6 segundo é a unidade fundamental de tempo do jogo, e fica mais longo em mundos cheios: de 0,616 a 0,618 s no World 302, contra 0,606 a 0,611 s em mundos mais vazios ([OSRS Wiki, Game tick](https://oldschool.runescape.wiki/w/Game_tick)).
- [F] **A dilatação do tempo do EVE.** Em 2011, a CCP apresentou a *Time Dilation* para lidar com batalhas de frota enormes sem travar o servidor ([CCP Veritas, 22/abr/2011](https://eveonline.com/article/introducing-time-dilation-tidi)). Ela age por nó (a máquina que hospeda aquela parte do espaço), desacelera o tempo até 10% (um segundo de jogo vira dez de relógio) e não afeta o horário do servidor usado por treino de skills e indústria ([EVE University](https://wiki.eveuniversity.org/Time_Dilation)). [H] Repare na separação: o combate roda em tique e pode desacelerar; os cronômetros de longo prazo (o "idle" do EVE) correm pelo relógio do servidor e não sofrem com a carga.
- [H] **Para um idle, o padrão é por eventos.** Um servidor por tique gasta CPU com cada personagem a cada tique, mesmo quando nada muda. O idle pede o contrário:
  - **liquidação sob demanda:** o estado de cada personagem só é calculado quando alguém precisa dele (o próprio jogador abre o jogo, outro jogador interage, um ranking fecha), pelo modelo híbrido da seção 1.1;
  - **eventos com prazo agendados:** fim de leilão, expiração de ordem, aparição de chefe, fim de temporada e o aviso "sua fila terminou" entram numa agenda de jobs;
  - **tique só onde há tempo real:** janelas ativas (raid, chefe mundial, PvP síncrono) rodam num processo ou "sala" próprio, com tique, e devolvem o resultado ao ledger no fim.
- [H] O "servidor que nunca para" do Idlescape (1.1) é o modelo de tique aplicado a um idle, e mostra o custo: cada reinício exige refazer as sessões de todo mundo.
- [H] **As quatro perguntas, para o servidor por eventos:**
  - **Inspira-se** na separação do EVE (combate em tique, cronômetros no relógio do servidor) e se diferencia do Idlescape.
  - **Resolve** o custo proporcional a jogadores ausentes e a fragilidade de reinícios.
  - **Incentiva** a pensar cada sistema como "o que muda, e quando".
  - **Risco:** o gatilho que ninguém dispara. Se o ranking semanal depende de liquidar todos os personagens, um job precisa fazê-lo; esquecer isso produz rankings com dados velhos.

### 6.3 Filas de jobs para a liquidação e os prazos

- [F] O PostgreSQL serve de fila com `SKIP LOCKED` (5.2). O cuidado está nas transações longas: em 2015, Brandur Leach mostrou que uma única transação aberta impede a limpeza de linhas mortas; no teste, a limpeza manual achou 247.311 versões mortas que não podiam ser removidas, o tempo para travar um job ficou até 15 vezes maior e, a ~50 jobs por segundo, a fila acumulou 60 mil jobs em uma hora. Mitigações: matar transações longas, travar jobs com predicados mais específicos, travar em lote, ou manter só uma tabela de "pendentes" transacional e mover os jobs em lote para uma fila em Redis ([brandur.org, 18/mai/2015](https://brandur.org/postgres-queues)).
- [H] **Quatro tipos de job, quatro cuidados:**
  1. **Liquidação no login:** síncrona e rápida (milissegundos com o modelo híbrido). Não deve depender de fila.
  2. **Prazos** (leilão, expiração, chefe): agendados pelo horário do servidor e idempotentes, porque podem rodar duas vezes depois de uma queda; um processo "completador", como o de Brandur para as chaves de idempotência (2.4), varre o que ficou para trás.
  3. **Avisos** ("sua fila termina às 14h"): agendados para o horário previsto e reagendados quando o plano muda; se o aviso sair errado, o jogador perde a confiança no aviso.
  4. **Relatórios da economia:** fora do horário de pico, numa réplica de leitura.
- [H] **O "estouro da manhã".** Reset diário no mesmo minuto para todo mundo produz um pico de logins, liquidações e avisos. Espalhar o horário por conta (ou por fuso) e acrescentar variação aleatória às novas tentativas (2.4) achata o pico.

### 6.4 WebSocket e cache

- [F] **WebSocket em vários nós.** Com o Socket.IO, o *long-polling* exige "sessões grudadas" (cada cliente sempre no mesmo nó), mas WebSocket puro não, porque a conexão é única e persistente; para mandar uma mensagem a todos ou a uma sala com vários nós, é preciso um adaptador (por exemplo, Redis) que repasse as mensagens entre servidores ([documentação do Socket.IO](https://socket.io/docs/v4/using-multiple-nodes/)).
- [F] O Lichess separou o servidor de WebSocket (lila-ws) da aplicação principal, e os dois conversam via Redis ([GitHub do lila](https://github.com/lichess-org/lila)).
- [H] **O padrão para nós:** um "portão" de conexões (muitas conexões, nenhuma regra de jogo) separado do serviço de jogo e economia (regras e transações), com publicação de eventos entre eles (ordem executada, fila terminou, mensagem de chat). No idle, o WebSocket serve a avisos e chat, não à jogabilidade; se cair, o jogo continua com consultas periódicas.
- [H] **Cache só para leitura:** catálogo de itens, rankings, perfis públicos e o retrato do livro de ofertas de cada item. Saldo e posse nunca vêm do cache numa escrita (5.1, item 6). [F] O Milky Way Idle publica o mercado em JSON de hora em hora, com atraso e aleatoriedade "para evitar manipulação" ([C01, §6.2](fichas/C01-milky-way-idle.md)); [H] o retrato público com atraso faz as vezes de cache e de defesa.

### 6.5 Quando o PostgreSQL vira gargalo

- [F] **Conexões.** A documentação recomenda limitar conexões e usar um pool ([transaction-iso](https://www.postgresql.org/docs/current/transaction-iso.html)). No PgBouncer, o modo "por transação" empresta a conexão só durante a transação, mas não funciona com variáveis de sessão (SET/RESET), LISTEN, cursores WITH HOLD, PREPARE/DEALLOCATE em SQL, travas consultivas de sessão e LOAD; instruções preparadas no nível do protocolo funcionam se `max_prepared_statements` for maior que zero ([PgBouncer](https://www.pgbouncer.org/features.html)). [H] Isso afeta o desenho: travas consultivas de sessão (5.2) não combinam com esse modo; use as de transação.
- [F] **Linhas quentes.** Escritas concorrentes na mesma entidade, com trava por linha, degradam o desempenho e viram gargalo sob carga ([Azure, Event Sourcing](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)). [H] No jogo, as linhas quentes são contadores globais: o estoque comum de um evento do servidor (como o do Idle Clans, [C02, §4](fichas/C02-idle-clans.md)), a vida de um chefe mundial, o cofre de uma guilda grande, o pote de buffs coletivos. Saídas: dividir o contador em N linhas somadas na leitura, ou acumular lançamentos e consolidar de tempos em tempos.
- [H] **O ledger só cresce.** Conta ilustrativa: 10 mil contas ativas, uma liquidação por hora, 20 lançamentos por liquidação = 4,8 milhões de linhas por dia, cerca de 1,75 bilhão por ano. Particionar o ledger por tempo e arquivar partições antigas é decisão de dia 1, não de ano 2.
- [H] **Ordem de escalada,** do mais barato ao mais caro: índices e planos de consulta → pool de conexões → réplica de leitura para rankings, histórico e relatórios → particionamento do ledger → um processo em memória por mercado, com um único escritor por item e gravação no PostgreSQL antes de confirmar → divisão por conta (*sharding*), só em escala muito maior.

### 6.6 Docker Swarm numa VPS

- [F] **Quórum.** Um swarm com N gerentes tolera (N − 1)/2 falhas permanentes (5 gerentes toleram 2); número par não ajuda (4 toleram o mesmo que 3). Sem quórum, não dá para criar, mover ou atualizar tarefas, mas as que já rodam continuam. A Docker recomenda espalhar os gerentes por pelo menos três zonas e fazer backup do estado do swarm ([documentação do Docker](https://docs.docker.com/engine/swarm/admin_guide/)).
- [F] **Futuro do Swarm.** A Mirantis, dona do produto, promete suporte integral ao Swarm até pelo menos 2030, como parte do Mirantis Kubernetes Engine 3 ([Mirantis](https://www.mirantis.com/blog/mirantis-guarantees-long-term-support-for-swarm/)).
- [F] **Ataques.** Os servidores do Albion sofreram DDoS logo depois de ondas de banimento de RMT, com cerca de um dia de instabilidade em jul/2025 ([F02, §10](fichas/F02-albion-online.md)).
- [H] **Implicações para a infraestrutura do dono:**
  - **Uma VPS não tem alta disponibilidade.** O Swarm num nó só dá ergonomia (stack declarativa, atualização gradual com checagem de saúde, segredos, rede interna), não tolerância a falha. Alta disponibilidade de verdade pede 3 nós em datacenters diferentes.
  - **O banco não pode "passear".** O PostgreSQL deve ficar fixo num nó com volume local (restrição de posicionamento), com réplica em outra máquina e backup contínuo fora dela (4.5); o Swarm não deve reagendá-lo sozinho para outro nó sem os dados.
  - **WebSocket puro dispensa sessão grudada** (6.4), o que simplifica o balanceamento interno.
  - **Proteção contra DDoS na borda** (um serviço de proxy na frente da VPS) e plano de resposta antes da primeira onda de banimentos, porque o caso do Albion mostra que ela atrai retaliação.
  - **Horizonte:** o suporte da Mirantis vai até 2030, e um MMO bem-sucedido vive mais que isso. Containers e configuração declarativa mantêm aberta a migração futura para Kubernetes.

## 7. PWA e mobile

### 7.1 O que um PWA consegue fazer em 2026

| Capacidade | iPhone e iPad (Safari/WebKit) | Android (Chrome) |
|---|---|---|
| Instalação | Manual, por "Adicionar à Tela de Início" (não há aviso de instalação do navegador); desde o iOS 26, todo site adicionado abre como app por padrão | Pelo navegador, com aviso de instalação quando o site cumpre os critérios; ou empacotado para a Play via TWA (7.2) |
| Notificação push | Desde o iOS 16.4, só para apps na Tela de Início, com pedido de permissão feito após um toque do usuário; todo push precisa exibir notificação | Web Push padrão, com service worker |
| Execução em segundo plano | Só a reação a um push, que precisa mostrar a notificação | Background Sync e Periodic Background Sync (só navegadores Chromium) |
| Armazenamento | App da Tela de Início fica fora da regra dos 7 dias do Safari | Até 60% do disco por origem |

- [F] **Instalação e push no Chrome.** O Chrome oferece instalar o site quando ele é servido por HTTPS e tem manifesto com nome, ícones de 192 e 512 px, `start_url` e modo de exibição, além de critérios de engajamento do usuário; no Android, a forma do aviso varia por aparelho, e no iOS não existe aviso de instalação do navegador ([web.dev, critérios de instalação](https://web.dev/articles/install-criteria); [web.dev, Learn PWA](https://web.dev/learn/pwa/installation)). A Push API é considerada amplamente disponível nos navegadores desde mar/2023 e exige um service worker ativo para receber mensagens ([MDN, Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)).
- [F] **Instalação no iOS.** Antes do iOS 26, um ícone na Tela de Início só abria como app se o site tivesse manifesto ou meta tag; senão, era um favorito. Desde o iOS 26, todo site adicionado abre como app por padrão, com um interruptor para desligar ([WebKit, novidades da WWDC25](https://webkit.org/?p=16993), via busca; [heise](https://heise.de/-10749652)).
- [F] **Push no iOS.** Chegou no iOS e iPadOS 16.4 (beta em 16/fev/2023) para apps adicionados à Tela de Início, com manifesto em modo `standalone` ou `fullscreen`; o pedido de permissão precisa vir de uma interação direta (tocar num botão), e a API de Badging permite mudar o número no ícone, inclusive ao tratar um push em segundo plano ([WebKit, 16/fev/2023](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)). O WebKit não permite push silencioso: todo push precisa exibir uma notificação, e quem descumpre perde a inscrição ([WebKit, "Meet Web Push"](https://webkit.org/?p=12945), via busca). Desde o iOS 18.4, o *Declarative Web Push* exibe a notificação direto do conteúdo do push, sem depender de service worker, também só para apps da Tela de Início ([WebKit, "Meet Declarative Web Push"](https://webkit.org/blog/16535/meet-declarative-web-push/), via busca).
- [F] **Segundo plano.** As APIs de sincronização em segundo plano (única e periódica) funcionam só em navegadores Chromium; Firefox e Safari não as suportam ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API); [Can I use](https://caniuse.com/background-sync); [web.dev](https://web.dev/articles/web-apps/periodic-background-sync)). Desde o Chrome 88 (jan/2021), cadeias de timers de páginas ocultas podem ser verificadas só uma vez por minuto ([Chrome for Developers](https://developer.chrome.com/blog/timer-throttling-in-chrome-88)). [H] Num iPhone, um PWA não roda nada sozinho: só reage a um push. Tudo o que precisa acontecer na ausência acontece no servidor, o que confirma a arquitetura das seções 1 e 2.
- [F] **Armazenamento.** Ver 4.4: o app da Tela de Início tem contador próprio de dias de uso e fica fora da limpeza de 7 dias do Safari ([WebKit, 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)).
- [F] **Risco de plataforma.** Nas versões de teste do iOS 17.4, a Apple transformou os apps da Tela de Início em simples atalhos para usuários da União Europeia, alegando a Lei de Mercados Digitais, e voltou atrás por volta de 1º/mar/2024, depois de pedidos para manter o recurso ([Engadget](https://www.engadget.com/apple-backtracks-on-plans-to-get-rid-of-web-apps-on-iphones-in-the-eu-195232177.html); [Notificare, 8/mar/2024](https://notificare.com/blog/2024/03/08/apple-reverse-decision-to-remove-pwa/)). [H] Quem depende de PWA no iPhone depende de uma decisão da Apple, que pode mudar numa versão de teste.

### 7.2 Empacotar para as lojas

- [F] **Android (TWA).** Um PWA pode ir para a Google Play como *Trusted Web Activity*. Se o app distribuído pela Play vende bens digitais ou assinaturas, precisa usar o Google Play Billing; no TWA, isso passa pela Digital Goods API (consulta de produtos e compras) e pela Payment Request API (início da compra), e a Digital Goods API só funciona no Chrome dentro de um TWA ([Chrome for Developers](https://developer.chrome.com/docs/android/trusted-web-activity/play-billing)).
- [F] **Capacitor.** É um *runtime* nativo para apps feitos com tecnologia web, com acesso às APIs nativas do iOS e do Android por plugins ([documentação](https://capacitorjs.com/docs)).
- [F] **App Store.** A diretriz 4.2 pede que o app tenha recursos, conteúdo e interface que o elevem "beyond a repackaged website" ([App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)). [C] Desenvolvedores relatam rejeições em que push e compartilhamento não bastaram para provar valor além do site ([fórum da Apple, thread 82714](https://developer.apple.com/forums/thread/82714); [thread 108931](https://developer.apple.com/forums/thread/108931)).
- [H] **Caminho provável:** web (PWA) como canal principal, sobretudo no desktop e no Brasil; Android via TWA, que é barato de manter; App Store só se houver valor nativo real (widgets, notificações ricas, integração com o sistema). Em todos os casos, um só servidor autoritativo e um só ledger; a loja é só mais uma "fonte" de compra no ledger (2.5).

### 7.3 Pagamento: lojas contra web

- [F] **Apple, regra geral.** Comissão de 30%, ou 15% no programa para pequenas empresas (até US$ 1 milhão de receita no ano anterior) e em assinaturas qualificadas; taxas e regras diferentes valem para Brasil, União Europeia, Japão, Holanda, Rússia e Coreia do Sul ([Apple Developer, programa](https://developer.apple.com/programs/whats-included/); [Small Business Program](https://developer.apple.com/app-store/small-business-program/)).
- [F] **Apple nos EUA.** Em 11/dez/2025, o Tribunal de Apelação do 9º Circuito manteve que as restrições da Apple, na prática, proibiam compras por link externo e limites a avisos que desestimulem o usuário, mas considerou excessiva a proibição total de comissão: a Apple pode cobrar algo ligado a custos "genuinely and reasonably necessary", a definir na primeira instância ([Fenwick, 22/dez/2025](https://www.fenwick.com/insights/publications/ninth-circuit-largely-upholds-ruling-in-epic-v-apple)). Em ago/2026, a Apple propôs 15% (5% para pequenas empresas) sobre compras feitas via link; a Epic contesta, e, até haver decisão, o link externo nos EUA segue sem comissão ([AppleInsider, 13/ago/2026](https://appleinsider.com/articles/26/08/13/apples-latest-commission-rates-for-external-app-store-purchases-havent-satisfied-epic), via busca).
- [F] **Apple no Brasil.** Depois de um termo de compromisso com o Cade, de dez/2025 e com duração de três anos ([Tecnoblog](https://tecnoblog.net/noticias/apple-tera-que-abrir-iphone-no-brasil-para-compras-fora-da-app-store/), via busca), a Apple anunciou em 18/jun/2026, para o iOS 26.2: lojas alternativas autorizadas, pagamentos alternativos dentro do app (sempre ao lado da compra pela Apple) e links para concluir a compra num site. As comissões sobre bens digitais ficaram em 10% (maioria dos desenvolvedores, incluindo pequenas empresas e assinaturas depois do primeiro ano) ou 21% na compra pela Apple, mais 5% de processamento; 15% (ou 10%) na compra feita via link; e 5% para apps distribuídos fora da App Store. **Para menores de 18 anos**, pagamentos alternativos exigem aprovação prévia dos responsáveis, e apps da App Store não podem ter links para concluir transações ([Apple Newsroom Brasil, 18/jun/2026](https://www.apple.com/br/newsroom/2026/06/apple-announces-changes-to-ios-in-brazil/)). Em set/2026, a Epic acusou a Apple no Cade de criar barreiras à distribuição alternativa ([Michael Tsai](https://mjtsai.com/blog/?p=50554), via busca).
- [F] **Google.** Desde 30/jun/2026, nos EUA, no Espaço Econômico Europeu e no Reino Unido, a Play separou a taxa de serviço da taxa de cobrança: 10% sobre o primeiro US$ 1 milhão de receita anual e 10% em assinaturas renováveis (as demais faixas dependem de a instalação ser nova ou antiga), mais 5% quando o pagamento usa o Google Play Billing; cobrança alternativa e links para a web não pagam essa taxa de 5%, e o desenvolvedor pode oferecer as duas opções ([Android Developers Blog, 24/jun/2026](https://android-developers.googleblog.com/2026/06/play-expanded-billing.html)). No programa de links externos dos EUA, a cobrança das taxas começou em 1º/out/2026, com uma taxa fixa por instalação que, para jogos, é de US$ 3,65 ([Play Console Help](https://support.google.com/googleplay/android-developer/answer/16470497?hl=en), via busca; conferir na página).
- [H] **Implicações:**
  - A web é o canal mais barato e mais livre. As lojas cobram de 5% a 30% conforme país, caminho e porte, e as regras mudam por decisão judicial quase todo ano. O ledger (2.5) precisa registrar o canal de cada compra, para calcular a margem real por canal.
  - A regra brasileira para menores bate de frente com um modelo de RMT: links de pagamento ficam proibidos para menores em apps da App Store, e pagamentos alternativos exigem os responsáveis. Verificação de idade e política para menores precisam vir antes do RMT. O detalhe jurídico fica em [05b](05b-rmt-legal-brasil.md) e [05c](05c-rmt-legal-global-pagamentos.md) (**validar com advogado**).
  - O canal escolhido muda o desenho da monetização, e não só a taxa: algo vendido na web e usado no app precisa respeitar as regras de cada loja sobre conteúdo comprado fora dela.

### 7.4 Notificações como gancho de retenção

- [F] **No gênero.** O IdleMMO avisa por push quando a ação termina e, em nov/2026, anunciou alertas opcionais de chefes mundiais ([C04, §4](fichas/C04-idlemmo.md)); o SimpleMMO tem push de chefes mundiais ([C05, §4](fichas/C05-simplemmo.md)); jogadores do Tap Titans 2 pedem aviso de início de raid ([B06, §4](fichas/B06-tap-titans-2.md)).
- [F] **Quantos aceitam (estimativas de fornecedores, 2025).** Mediana de opt-in de cerca de 48,85% no iPhone e 53,3% no Android, segundo dados da Airship resumidos pela MobiLoud ([MobiLoud](https://www.mobiloud.com/blog/push-notification-statistics)); médias de 56% no iOS e 67% no Android entre jul/2024 e jul/2025, numa base de ~10 mil apps e sites da Batch, que atribui a queda do Android à permissão obrigatória do Android 13 ([Batch](https://batch.com/blog/case-studies/benchmark-notifications-push-crm-mobile)). Em jogos de ação, a taxa de clique em push foi de 0,82% no Android e 0,46% no iOS (Q4/2024 a Q2/2025), abaixo da média geral ([Pushwoosh](https://www.pushwoosh.com/blog/push-notification-benchmarks/)). [H] São números de apps nativos; um PWA no iPhone ainda exige a instalação antes do pedido, então o funil real será menor.
- [H] **Regras para nós:**
  - **Pedir na hora certa:** quando o jogador monta a primeira fila longa ("quer ser avisado quando terminar?"), nunca na primeira tela.
  - **Avisos são jobs do servidor** (6.3), agendados para o horário previsto e refeitos quando o plano muda.
  - **Poucos tipos, todos úteis e configuráveis:** fila terminou, ordem executada, leilão prestes a fechar, chefe da guilda começando. Respeitar fuso e horário de silêncio.
  - **Nunca "volte ou perca".** Notificação que ameaça o ausente contradiz o princípio de que esperar é jogar ([02a, §6](02a-teoria-design-idle.md)).
- [H] **As quatro perguntas, para o aviso "sua fila terminou":**
  - **Inspira-se** no IdleMMO e se diferencia dos timers que cobram presença (o baú que some, a sequência que quebra).
  - **Resolve** o "quando devo voltar?" sem obrigar o jogador a lembrar.
  - **Incentiva** sessões curtas e oportunas, e o planejamento de filas mais longas.
  - **Risco:** virar ruído e ser desligado (ou fazer o jogador desinstalar), ou virar coleira, se o jogo passar a punir quem não responde.

## Implicações para o nosso jogo: princípios técnicos recomendados

Sem código. Cada princípio aponta para a seção que o justifica. Todos são [H], derivados dos fatos acima.

1. **O servidor é dono do valor e do tempo.** O cliente envia intenções e desenha a tela; resultado, sorteio e relógio são do servidor (1.5, 2.1, 2.2). O idle é o gênero em que isso custa menos.
2. **O ausente é calculado por eventos, no servidor, na hora em que alguém precisa do estado.** Forma fechada entre eventos que mudam a taxa, simulação só nos eventos, mesma regra do jogo ativo (1.1, 6.2). Nenhum processo roda por personagem ausente.
3. **Paridade online/offline é requisito testado.** Uma bateria automática compara o cálculo por eventos com a simulação tique a tique em milhares de cenários, a cada mudança de regra (1.1, 1.2).
4. **Drops do ausente por amostragem exata** (binomial ou multinomial), com RNG baseado em contador e chave secreta no servidor; mecanismos de sequência, como garantia de drop, têm modelo próprio (1.2, 1.3).
5. **O teto de ausência é ferramenta econômica, não de CPU:** generoso, melhorável jogando, nunca vendido (1.4; [02a](02a-teoria-design-idle.md)).
6. **Todo comando que move valor é idempotente**, com chave por conta, resultado guardado e repetição segura com espera crescente e aleatória (2.4).
7. **A economia é um ledger de partidas dobradas:** fontes, drenos e contas de trânsito explícitas, soma zero por moeda e por item, correção só por estorno, reconciliação contínua com os saldos e item único com uma só localização (2.5, 5.1).
8. **Uma transação por operação econômica,** travas em ordem fixa, repetição em erro de serialização e restrições no banco como última defesa (5.2).
9. **Duas velocidades de número:** exponencial só na camada pessoal e não negociável; tudo que é negociável em inteiros de 64 bits na menor unidade, viajando como texto no JSON, com unidade de alta denominação prevista desde já (3.1–3.3).
10. **Estado no servidor, cliente otimista e descartável:** fila offline curta de comandos com prazo e chave, reexecutados e reconciliados na volta; previsto e confirmado com visual diferente (4.1–4.4).
11. **Valor negociável só nasce de decisão ativa verificada,** com teto por conta e por período; o resto do progresso é pessoal (5.3; [G05](fichas/G05-banana-e-bongo-cat.md)).
12. **Anti-bot em camadas e reversível:** sinais (regularidade nas ações ativas, pedidos impossíveis, fluxos do ledger) → pontuação → atrito → revisão humana → punição com remoção do valor rastreado, nunca desligando a economia de todos (5.1, 5.4, 5.5).
13. **Leitura liberada, escrita humana:** API oficial de leitura com chaves, níveis, limites e atraso proposital; nenhuma automação de escrita fora das filas do próprio jogo (5.6).
14. **Infraestrutura honesta com o tamanho:** uma VPS dá ergonomia, não alta disponibilidade; banco fixo com réplica e backup contínuo fora da máquina; ledger particionado desde o dia 1; proteção contra DDoS antes da primeira onda de banimentos; WebSocket separado das regras (6.4–6.6).
15. **Web primeiro, lojas como canais:** PWA como produto principal, TWA no Android, App Store só com valor nativo real; o ledger registra o canal de cada compra; política para menores antes do RMT (7.1–7.3).
16. **Notificação é serviço, não coleira:** pedida no momento certo, agendada pelo servidor, poucas categorias e nenhuma ameaça ao ausente (7.4).

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| Arbitragem entre online e offline | Um evento esquecido no cálculo por eventos (buff que expira no meio do bloco) faz o offline render mais ou menos que o online, e o mercado precifica a diferença | Teste de paridade obrigatório (princípio 3); alarme quando a emissão do offline por hora divergir da do online |
| Dupe no lançamento | Corrida em endpoint novo, caminho de estorno sem teste, restauração de backup | Testes com pedidos simultâneos em cada endpoint de valor; *red team* de economia e *bug bounty* antes da abertura ([G04](fichas/G04-new-world.md)); ferramenta de estorno por conta pronta antes do primeiro incidente |
| O botão de emergência vira o problema | Desligar o comércio de todos quebra operações no meio (o dupe do New World) e pune quem é honesto | Desligamento por sistema, que bloqueia só a **entrada** de novas operações, testado como funcionalidade |
| Falso positivo do anti-bot | Heurística pune humano (o caso do MWI em dez/2025; os avisos de "mesmo dispositivo" do SimpleMMO) | Punição graduada e reversível, revisão humana, apelação rápida e compensação pública quando o erro for nosso |
| Limites que punem o celular brasileiro | Limite por IP derruba quem divide endereço com milhares de clientes da mesma operadora | Limites por conta e por sessão; IP só como sinal de correlação |
| Ledger e event sourcing complexos demais | Equipe pequena afogada em projeções, versões de eventos e reconciliação | Event sourcing só na economia; CRUD no resto ([Azure](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)); começar com poucos tipos de lançamento |
| O banco engasga | Linhas quentes (estoque de evento global, chefe mundial), transações longas travando a limpeza, ledger sem partição | Contadores divididos, consolidação periódica, limite de duração de transação, particionamento desde o dia 1 (6.3, 6.5) |
| Fraude interna | Ferramenta de suporte usada para esvaziar contas, como no caso "Mod Jed" do OSRS ([F03, §6.5](fichas/F03-runescape-e-osrs.md)) | Ajustes administrativos só como lançamentos do ledger, com dupla aprovação, motivo e trilha de auditoria |
| A API de leitura alimenta bots de mercado | Dados em tempo real permitem *sniping* e manipulação | Atraso e agregação nos dados públicos, como o MWI faz ([C01](fichas/C01-milky-way-idle.md)); limites por chave; nada de dados do livro em tempo real pela API |
| Vazamento da semente do RNG | Chave exposta no cliente ou num log permite prever drops | Chave só no servidor, trocada por temporada; resultado fixado no momento da ação |
| O exponencial vaza para o mercado | Um item negociável com atributos que escalam exponencialmente leva a inflação da camada pessoal para a camada negociável | Regra de design: o que é negociável tem atributos e quantidades limitados; o exponencial mora em bônus pessoais |
| Dependência das plataformas | A Apple muda a regra dos PWAs (como na UE em 2024) ou as comissões mudam por decisão judicial | Web primeiro; acompanhamento jurídico e de plataforma contínuo; um canal nunca pode ser o único caminho de pagamento |
| Retenção menor no iPhone | PWA exige instalação manual antes do push; sem push, o aviso de "fila terminou" não chega | Onboarding de instalação no momento certo; avaliar um app empacotado só se os dados mostrarem perda relevante |
| Queda ou ataque na VPS única | Falha de hardware, DDoS após banimentos (o caso do Albion) | Backup contínuo fora da máquina, réplica do banco, proxy de borda contra DDoS e plano de recuperação ensaiado |
| LGPD | Impressão digital de dispositivo, IPs e dados de KYC guardados demais ou no log imutável | Minimização, prazos de retenção, dados pessoais fora do ledger; **validar com advogado** ([05b](05b-rmt-legal-brasil.md)) |

## Fontes

Todos os links foram acessados em novembro de 2026. "Via busca" indica que o dado veio do trecho indexado pelo buscador, sem leitura integral da página.

**Fichas e estudos internos:** [B01](fichas/B01-melvor-idle.md), [B02](fichas/B02-legends-of-idleon.md), [B06](fichas/B06-tap-titans-2.md), [C01](fichas/C01-milky-way-idle.md), [C02](fichas/C02-idle-clans.md), [C03](fichas/C03-idlescape.md), [C04](fichas/C04-idlemmo.md), [C05](fichas/C05-simplemmo.md), [F01](fichas/F01-eve-online.md), [F02](fichas/F02-albion-online.md), [F03](fichas/F03-runescape-e-osrs.md), [F04](fichas/F04-tibia.md), [F06](fichas/F06-world-of-warcraft.md), [G04](fichas/G04-new-world.md), [G05](fichas/G05-banana-e-bongo-cat.md), [02a](02a-teoria-design-idle.md), [04a](04a-economia-fontes-drenos-inflacao.md), [05b](05b-rmt-legal-brasil.md), [05c](05c-rmt-legal-global-pagamentos.md).

**1. Progresso offline**
1. [Melvor Idle Wiki — Offline Progression](https://wiki.melvoridle.com/w/Offline_Progression) — wiki oficial (via ficha B01).
2. [r/AntimatterDimensions — offline (2020)](https://www.reddit.com/r/AntimatterDimensions/comments/esiji2/) e [Max offline ticks (2025)](https://www.reddit.com/r/AntimatterDimensions/comments/1kg34yc/max_offline_ticks) — comunidade (via espelho).
3. [SteamDB — notas de patch do Antimatter Dimensions](https://steamdb.info/patchnotes/16370635) — dados (via busca).
4. [Antimatter Dimensions — How to play](https://raw.githack.com/jacorb90/IvarK.github.io/master/howto.html) — guia do jogo.
5. [Steam — discussão sobre offline do Antimatter Dimensions](https://steamcommunity.com/app/1399720/discussions/0/3732953628865759665) — comunidade — 2023.
6. [Offline Progression in Clicker Heroes](https://blog.clickerheroes.com/offline-progression-in-clicker-heroes/) — blog oficial — 6/jul/2025.
7. [Idlescape — Beta 0.23.4, "Platinum and Offline Fetching"](https://www.idlescape.com/news/beta-0-23-4) — oficial — 16/jul/2025.
8. [Discrete-event simulation](https://en.wikipedia.org/wiki/Discrete-event_simulation) — Wikipedia.
9. [Kachitvichyanukul e Schmeiser, "Binomial random variate generation"](https://doi.org/10.1145/42372.42381) — artigo (CACM) — 1988.
10. [Salmon et al., "Parallel random numbers: as easy as 1, 2, 3"](https://users.cs.utah.edu/~hari/teaching/bigdata/random123sc11.pdf) ([DOI](https://doi.org/10.1145/2063384.2063405)) — artigo (SC'11) — 2011.
11. [APKMirror — Egg, Inc. 1.11](https://apkmirror.com/apk/auxbrain-inc/egg-inc/egg-inc-1-11-release) — notas de versão (via busca) — set/2019.
12. [Expert Beacon — Can you get banned from Egg, Inc?](https://expertbeacon.com/can-you-get-banned-from-egg-inc/) — blog (fonte secundária).
13. [CheatCC — Egg, Inc.](https://www.cheatcc.com/?p=125032) — guia de trapaças.

**2. Servidor autoritativo**
14. [Gabriel Gambetta — Client-Server Game Architecture](https://www.gabrielgambetta.com/client-server-game-architecture.html) — artigo técnico.
15. [Stripe — Scaling your API with rate limiters](https://stripe.com/blog/rate-limiters) — blog de engenharia — 30/mar/2017.
16. [Stripe — Idempotent requests](https://docs.stripe.com/api/idempotent_requests) — documentação.
17. [Stripe — Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency) — blog de engenharia — 22/fev/2017.
18. [Brandur Leach — Implementing Stripe-like idempotency keys in Postgres](https://brandur.org/idempotency-keys) — artigo técnico — 27/out/2017.
19. [Stripe — Ledger: tracking and validating money movement](https://stripe.dev/blog/ledger-stripe-system-for-tracking-and-validating-money-movement) — blog de engenharia — 16/fev/2024.
20. [Martin Fowler — Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) — artigo — 12/dez/2005.
21. [Microsoft — Event Sourcing pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) — documentação — revista em 2026.

**3. Números gigantes**
22. [break_infinity.js](https://github.com/Patashu/break_infinity.js) e [break_eternity.js](https://github.com/Patashu/break_eternity.js) — repositórios oficiais.
23. [break_eternity para Dart](https://pub.dev/packages/break_eternity) — pacote.
24. [decimal.js — documentação](https://mikemcl.github.io/decimal.js/).
25. [MDN — BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) e [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) — documentação.
26. [PostgreSQL — Numeric types](https://www.postgresql.org/docs/current/datatype-numeric.html) — documentação.
27. [ECMAScript — objeto Math](https://tc39.es/ecma262/#sec-function-properties-of-the-math-object) — especificação.
28. [r/incremental_games — armazenar números enormes (2024)](https://www.reddit.com/r/incremental_games/comments/1aj8z0b/) e [devs: big numbers (2025)](https://www.reddit.com/r/incremental_games/comments/1jxp25p/devs_how_do_you_handle_big_numbers) — comunidade (via espelho).
29. [Stripe — campo `amount`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-amount) — documentação.

**4. Sincronização de save**
30. [Android Developers — Saved Games (SDK v1)](https://developer.android.com/games/pgs/v1/cpp/saved-games) — documentação.
31. [Ink & Switch — Local-first software](https://www.inkandswitch.com/local-first/) — ensaio — 2019.
32. [Replicache — How it works](https://doc.replicache.dev/concepts/how-it-works) — documentação.
33. [MDN — Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) — documentação.
34. [WebKit — Full third-party cookie blocking and more](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/) — blog oficial — 24/mar/2020.
35. [PostgreSQL — Continuous archiving and PITR](https://www.postgresql.org/docs/current/continuous-archiving.html) — documentação.

**5. Anti-cheat, anti-bot e anti-duplicação**
36. [PortSwigger — Smashing the state machine](https://portswigger.net/research/smashing-the-state-machine) — pesquisa de segurança — 9/ago/2023.
37. [PlanetDiablo — entrevista com Bill Roper](https://gamespy-archives.quaddicted.com/sites/www.planetdiablo.com/features/articles/broper022702/index.html) — imprensa — 27/fev/2002.
38. [Growtopia Wiki — Rollback](https://growtopiawiki.com/w/Rollback) — wiki de fãs (via busca).
39. [New World — dev blog sobre exploits (devtrackers)](https://devtrackers.gg/new-world/p/89a16c50-dev-blog-update-from-the-team-exploits) — oficial — nov/2021.
40. PostgreSQL — [Transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html), [Explicit locking](https://www.postgresql.org/docs/current/explicit-locking.html) e [SELECT, cláusula de travamento](https://www.postgresql.org/docs/current/sql-select.html) — documentação.
41. [Lee et al., "You are a game bot!"](https://seal.cs.ucf.edu/doc/ndss16.pdf) — artigo (NDSS) — 2016.
42. [Kang e Kim — detecção por intervalo entre ações](https://libmast.utm.my/Record/doaj.art-0e1ec19ab14a4055a886ffd30b9257c2) — registro de artigo.
43. [Patente US 8.366.553](https://patents.google.com/patent/US8366553) — patente.
44. [EVE Online — Team Security: 2021 in review](https://www.eveonline.com/news/view/team-security-2021-in-review) — oficial — 12/jul/2022.
45. Stripe — [detectar cartões duplicados](https://support.stripe.com/questions/how-can-i-detect-duplicate-cards-or-bank-accounts), [referência do fingerprint](https://stripe.dev/stripe-terminal-android/v2/external/com.stripe.stripeterminal.external.models/-card-details/fingerprint.html) e [Terminal, cartões salvos](https://stripe.com/docs/terminal/features/saving-cards/overview) (via busca) — documentação.
46. [DEV Community — fingerprint da Stripe](https://dev.to/shayy/this-one-stripe-field-could-save-you-from-fraud-and-no-one-talks-about-it-3ad2) e [lista api-discuss da Stripe](https://groups.google.com/a/lists.stripe.com/g/api-discuss/c/fAH1sgE2uAE) — comunidade.
47. [Torn — documentação da API](https://www.torn.com/api.html) — oficial.
48. [GitHub — z-torn/tampermonkey](https://github.com/z-torn/tampermonkey) e [Greasy Fork — Torn Vault](https://greasyfork.org/scripts/575288-torn-vault) — comunidade.
49. [OSRS Wiki — Third Party Client Guidelines](https://oldschool.runescape.wiki/w/Update:Third_Party_Client_Guidelines) — cópia de anúncio oficial — jun/2022, revisto em abr/2024.
50. [RuneLite — Rejected or rolled back features](https://github.com/runelite/runelite/wiki/Rejected-or-Rolled-Back-Features) — wiki oficial do projeto.

**6. Escala**
51. OSRS Wiki — [World 400](https://oldschool.runescape.wiki/w/World_400), [Talk:World](https://oldschool.runescape.wiki/w/Talk:World) e [Game tick](https://oldschool.runescape.wiki/w/Game_tick) — wiki.
52. [CCP Veritas — Introducing Time Dilation](https://eveonline.com/article/introducing-time-dilation-tidi) — dev blog oficial — 22/abr/2011.
53. [EVE University — Time Dilation](https://wiki.eveuniversity.org/Time_Dilation) — wiki.
54. [GitHub — lichess-org/lila](https://github.com/lichess-org/lila) — repositório oficial.
55. [Brandur Leach — Postgres job queues & failure by MVCC](https://brandur.org/postgres-queues) — artigo técnico — 18/mai/2015.
56. [Socket.IO — Using multiple nodes](https://socket.io/docs/v4/using-multiple-nodes/) — documentação.
57. [PgBouncer — Features](https://www.pgbouncer.org/features.html) — documentação.
58. [Docker — Administer and maintain a swarm](https://docs.docker.com/engine/swarm/admin_guide/) — documentação.
59. [Mirantis — long-term support for Swarm](https://www.mirantis.com/blog/mirantis-guarantees-long-term-support-for-swarm/) — oficial.

**7. PWA e mobile**
60. WebKit — [Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/) (16/fev/2023), [Meet Web Push](https://webkit.org/?p=12945) (via busca), [Meet Declarative Web Push](https://webkit.org/blog/16535/meet-declarative-web-push/) (via busca) e [novidades da WWDC25](https://webkit.org/?p=16993) (via busca) — blog oficial.
61. [heise — iOS 26 e web apps na Tela de Início](https://heise.de/-10749652) — imprensa.
62. [MDN — Background Synchronization API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API), [MDN — Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), [Can I use — Background Sync](https://caniuse.com/background-sync), [web.dev — Periodic Background Sync](https://web.dev/articles/web-apps/periodic-background-sync), [web.dev — critérios de instalação](https://web.dev/articles/install-criteria) e [web.dev — Learn PWA, instalação](https://web.dev/learn/pwa/installation) — documentação.
63. [Chrome for Developers — Timer throttling in Chrome 88](https://developer.chrome.com/blog/timer-throttling-in-chrome-88) — blog oficial.
64. [Engadget — Apple recua sobre web apps na UE](https://www.engadget.com/apple-backtracks-on-plans-to-get-rid-of-web-apps-on-iphones-in-the-eu-195232177.html) e [Notificare](https://notificare.com/blog/2024/03/08/apple-reverse-decision-to-remove-pwa/) — imprensa — mar/2024.
65. [Chrome for Developers — Play Billing em TWA](https://developer.chrome.com/docs/android/trusted-web-activity/play-billing) — documentação.
66. [Capacitor — documentação](https://capacitorjs.com/docs).
67. Apple — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), [Membership details](https://developer.apple.com/programs/whats-included/), [Small Business Program](https://developer.apple.com/app-store/small-business-program/) e fóruns ([82714](https://developer.apple.com/forums/thread/82714), [108931](https://developer.apple.com/forums/thread/108931)) — oficial e comunidade.
68. [Fenwick — Ninth Circuit largely upholds ruling in Epic v. Apple](https://www.fenwick.com/insights/publications/ninth-circuit-largely-upholds-ruling-in-epic-v-apple) — escritório de advocacia — 22/dez/2025.
69. [AppleInsider — comissões propostas para links externos](https://appleinsider.com/articles/26/08/13/apples-latest-commission-rates-for-external-app-store-purchases-havent-satisfied-epic) — imprensa (via busca) — 13/ago/2026.
70. [Tecnoblog — acordo Apple–Cade](https://tecnoblog.net/noticias/apple-tera-que-abrir-iphone-no-brasil-para-compras-fora-da-app-store/) — imprensa (via busca) — dez/2025.
71. [Apple Newsroom Brasil — mudanças no iOS no Brasil](https://www.apple.com/br/newsroom/2026/06/apple-announces-changes-to-ios-in-brazil/) — oficial — 18/jun/2026.
72. [Michael Tsai — Brazil: App Marketplaces and External Payments](https://mjtsai.com/blog/?p=50554) — blog (via busca) — 2026.
73. [Android Developers Blog — Expanded billing choice and lower fees](https://android-developers.googleblog.com/2026/06/play-expanded-billing.html) — oficial — 24/jun/2026.
74. [Play Console Help — external content links (EUA)](https://support.google.com/googleplay/android-developer/answer/16470497?hl=en) — oficial (via busca).
75. Benchmarks de push: [MobiLoud (dados da Airship)](https://www.mobiloud.com/blog/push-notification-statistics), [Batch](https://batch.com/blog/case-studies/benchmark-notifications-push-crm-mobile) e [Pushwoosh](https://www.pushwoosh.com/blog/push-notification-benchmarks/) — estimativas de fornecedores — 2025.
