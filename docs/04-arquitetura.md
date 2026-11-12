# Fase 4 — Arquitetura técnica

> **Escopo.** Stack, backend (modelo de dados, APIs, tempo real, jobs e cálculo do ausente), mercado e leilão atômicos, segurança, pagamentos e RMT, observabilidade e painel de economia, balanceamento por arquivos de configuração e plano de escala de 100 a 100 mil jogadores. Ainda sem código do jogo: a construção começa na Fase 5.
> **Base:** o estudo técnico da Fase 1 ([07 — técnica de idles online](01-pesquisa/07-tecnica-idles-online.md)), os requisitos que o GDD pediu à Fase 4 (sobretudo [13 — anti-abuso](03-gdd/13-anti-abuso.md), seção 5.1, e [07 — economia](03-gdd/07-economia.md)) e as decisões do checkpoint 3 ([PROGRESSO](PROGRESSO.md)): **sem verificação de idade, transferência imediata e equipe mínima (Gabriel + Claude)**. A equipe mínima pesa em tudo: quando duas opções empatam, vence a mais simples de operar.
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou estimativa do estúdio · [NV] não verificado. Links acessados em novembro de 2026.

## 0. Resumo em uma tela

**A arquitetura em uma frase:** um **monólito modular em TypeScript** sobre Node.js, com o **PostgreSQL como única fonte da verdade** (inclusive da fila de jobs), um **livro-razão de partidas dobradas** para todo valor, um cliente **PWA em Svelte e PixiJS**, WebSocket só para avisos e chat, rodando agora no **PC do Gabriel** e, quando outras pessoas testarem, em **Docker Swarm na VPS dele**, com a Cloudflare na frente. **Cada Cidade é uma economia e um banco lógico**, o que já resolve a divisão da carga quando o jogo crescer.

| Tema | Escolha [H] | Por quê, em uma linha |
|---|---|---|
| Linguagem | TypeScript no servidor, no cliente e na simulação | Uma linguagem para dois construtores; as regras do jogo são um pacote só |
| Servidor | Node.js 26 (LTS), monólito modular com três papéis: API, portão de WebSocket e trabalhadores | Idle gera poucos comandos por jogador; o gargalo é o banco, não a CPU |
| Banco | PostgreSQL 18, primário + réplica + arquivo contínuo de WAL | Transações, travas e restrições fazem a economia à prova de duplicação |
| Jobs | pg-boss, sobre o próprio PostgreSQL | Sem Redis no começo: menos uma peça para operar |
| Tempo real | WebSocket com batimento a cada 30 s; consulta periódica se cair | No idle, o tempo real é conforto, não jogabilidade |
| Cliente | Svelte 5 + Vite (interface) e PixiJS 8 (mapa isométrico em pixel art) | Pacote leve para celular barato; WebGL maduro para o mapa |
| Infra | Agora: o PC do Gabriel, com Docker Desktop. Depois: Docker Swarm (1 nó no alfa, 3 no lançamento) e Cloudflare na borda | Decisão do Gabriel: só ele testa por enquanto; a VPS e o Swarm entram quando outras pessoas testarem |
| Pagamentos | Pix e cartão com 3DS desde o lançamento, em dois PSPs, com webhook assinado | Decisão do Gabriel; sem carência, o cartão roubado é o maior risco de fraude, e por isso o cartão exige 3DS |
| Balanceamento | Números em arquivos de configuração versionados, validados por esquema, lidos pelo servidor, pelo cliente e pela simulação | Uma fonte de números; mudar o equilíbrio não exige mexer no código |
| Escala | 100 → 100 mil em quatro etapas, com um banco por Cidade a partir da segunda | A Cidade é a divisão natural da carga |

**Segunda rodada da simulação** (seção 16): as decisões do checkpoint 3 não derrubam o nível de preços nem o premium, mas a inflação ao longo do ano sobe (de +2% para +26% ao ano), em parte pela entrada maior de contas; o bônus de ofício da refeição sobe a inflação a +100% ao ano e deve sair; e as fazendas de bots extraem uma parte do valor proporcional ao número de contas falsas, sem alavanca de desenho que resolva sem ferir o jogador honesto. A defesa contra fazendas é a detecção.

## 1. Princípios

Herdados do estudo técnico ([07, "Implicações"](01-pesquisa/07-tecnica-idles-online.md)) e adaptados à equipe mínima. Todos [H].

1. **Simples de operar por duas pessoas.** Cada peça nova precisa pagar o custo de mantê-la. Por isso: uma linguagem, um banco, nenhum serviço gerenciado obrigatório, nenhum microsserviço no lançamento.
2. **O servidor é dono do valor e do tempo.** O cliente manda intenções ("começar a fila X", "vender 30 minérios a 12"), nunca resultados. Sorteio, relógio e saldo são do servidor ([07, §2.1 e §2.2](01-pesquisa/07-tecnica-idles-online.md)).
3. **Uma verdade só: o PostgreSQL.** Cache serve só para leitura; saldo e posse nunca saem do cache numa escrita ([07, §5.1, item 6](01-pesquisa/07-tecnica-idles-online.md)).
4. **Todo valor passa pelo livro-razão.** Ouro, Coins e itens nascem em contas de fonte, morrem em contas de dreno e circulam entre contas de jogador; a soma de cada moeda e de cada item é zero. O painel da economia sai do livro-razão de graça ([07, §2.5](01-pesquisa/07-tecnica-idles-online.md)).
5. **O ausente é calculado por eventos, na hora em que alguém precisa do estado.** Nenhum processo roda por personagem ausente ([07, §1.1 e §6.2](01-pesquisa/07-tecnica-idles-online.md)).
6. **Números do jogo fora do código.** Valores, receitas, chances e tetos ficam em arquivos de configuração (seção 12).
7. **Nada de rollback geral.** Backup serve a desastre, não a dupe. Dupe, fraude e roubo se corrigem por lançamentos de reversão rastreados ([07, §4.5 e §5.1](01-pesquisa/07-tecnica-idles-online.md); [13, §5.3](03-gdd/13-anti-abuso.md)).
8. **Cada decisão do checkpoint 3 vira requisito testável.** Transferência imediata quer dizer que nenhum caminho de transferência tem espera; o teste automático garante isso.

## 2. Stack: comparação e recomendação

### 2.1 Linguagem e plataforma do servidor

| Critério | **(A) TypeScript / Node.js** | (B) Elixir / Phoenix | (C) Go | (D) C# / .NET |
|---|---|---|---|---|
| Uma linguagem com o cliente e a simulação | **Sim**: o `sim.js` já é Node; as regras viram um pacote usado pelos dois lados | Não | Não | Não (Blazor existe, mas pesa no celular) |
| Fluência de quem constrói | Alta para o Claude; o Gabriel desenvolve no VS Code | Média | Alta | Alta |
| Concorrência e tempo real | Um laço de eventos por processo; CPU pesada vai para trabalhadores | **Excelente**: [F] o Phoenix manteve 2 milhões de conexões WebSocket numa máquina de 40 núcleos e 128 GB em 2015 ([Phoenix, 2015](https://phoenixframework.org/blog/the-road-to-2-million-websocket-connections)) | Muito boa | Muito boa |
| Ecossistema para o que precisamos (Postgres, filas, pagamentos, testes) | O maior | Bom e enxuto | Bom | Bom |
| Gente no Brasil, se um dia contratar | A maior oferta | Pequena, com tradição local: [F] o criador do Elixir, José Valim, é brasileiro ([Wikipedia](https://en.wikipedia.org/wiki/Elixir_(programming_language))) | Média | Grande no corporativo |
| Risco principal | CPU num laço só; tipos só em tempo de compilação | Equipe menor para manter | Duas linguagens | Duas linguagens |

**Recomendação: (A) TypeScript sobre Node.js.** [H] O idle é o gênero em que o servidor autoritativo custa menos: as ações duram segundos ou minutos, e cada jogador manda poucos comandos por minuto ([07, §2.1](01-pesquisa/07-tecnica-idles-online.md)). O gargalo é a transação no banco, não a CPU. O que mais pesa para dois construtores é escrever as regras uma vez só e usá-las no servidor (autoridade), no cliente (estimativas na tela) e na simulação (equilíbrio). A vantagem do Elixir em conexões não é necessária na escala do jogo: uma Cidade cheia tem de 2 a 5 mil simultâneos ([bíblia, §6.7](03-gdd/00-biblia.md)).

**Versão.** [F] Pela agenda oficial, o Node.js 26 saiu em maio de 2026 e passa a LTS em outubro de 2026, com suporte até abril de 2029; o 24 tem suporte até abril de 2028; a partir do 27, o projeto lança uma versão por ano ([endoflife.date](https://endoflife.date/nodejs); [Node.js, "Evolving the Node.js Release Schedule"](https://nodejs.org/blog/announcements/evolving-the-nodejs-release-schedule)). [H] Começar no 26 e migrar para o 28 LTS antes do fim de suporte.

**Como o Node lida com a CPU pesada.** [H] Três trabalhos gastam CPU de verdade: a rodada do Câmbio, as ondas de detecção de bots e os relatórios da economia. Eles rodam no papel "trabalhador" (seção 3), em processos separados da API, e o laço de eventos da API fica livre para comandos curtos.

### 2.2 Banco de dados

**PostgreSQL 18.** [F] Lançado em 25/9/2025, trouxe um subsistema de E/S assíncrona (com `io_uring` no Linux) e a função `uuidv7()`, que gera identificadores ordenados pelo tempo ([PostgreSQL, anúncio do 18](https://www.postgresql.org/about/news/postgresql-18-released-3142/)). [H] O `uuidv7()` serve de chave para lançamentos do livro-razão e eventos: único, sem coordenação e em ordem de inserção, o que ajuda os índices e o particionamento por tempo. O Gabriel já opera PostgreSQL ([CLAUDE.md](../CLAUDE.md)).

O que o PostgreSQL entrega à economia, já pesquisado na Fase 1 ([07, §5.2](01-pesquisa/07-tecnica-idles-online.md)): isolamento *serializable* com erro 40001 para repetir, `SELECT ... FOR UPDATE`, travas consultivas por transação, `SKIP LOCKED` para filas e restrições (não negatividade, unicidade, chaves estrangeiras) como última linha de defesa.

**Sem Redis no lançamento.** [F] O Redis trocou a licença BSD por licenças de código disponível em março de 2024; o Valkey nasceu como bifurcação na Linux Foundation; o Redis 8 voltou a oferecer a AGPLv3 em maio de 2025 ([The Register, 1/5/2025](https://www.theregister.com/2025/05/01/redis_returns_to_open_source/)). [H] Não precisamos de nenhum dos dois no começo: fila, travas, pub/sub e limites de taxa cabem no PostgreSQL e na memória do processo. Se a escala pedir (seção 13), entra o Valkey, de licença BSD, como cache e pub/sub, nunca como fonte de saldo.

### 2.3 Fila de jobs

**pg-boss.** [F] Fila de jobs para Node.js sobre PostgreSQL, que usa `SKIP LOCKED` para que vários trabalhadores peguem jobs sem disputa; tem filas com prioridade, fila de mortos, agendamento por cron, novas tentativas com espera crescente e adiamento; pede Node 22.12 ou mais e PostgreSQL 13 ou mais ([pg-boss, GitHub](https://github.com/timgit/pg-boss)). [H] O job e a mudança de estado que ele causa podem nascer na mesma transação do banco, o que elimina a classe de erro "o leilão fechou, mas o job de entrega não foi criado". Todo job é idempotente, porque pode rodar duas vezes depois de uma queda ([07, §6.3](01-pesquisa/07-tecnica-idles-online.md)).

[F] Cuidado conhecido: uma transação longa aberta impede a limpeza de linhas mortas e degrada filas em tabela ([brandur.org, 2015](https://brandur.org/postgres-queues)). [H] Regra: nenhuma transação de relatório no primário; relatórios rodam na réplica.

### 2.4 Cliente

| Peça | Escolha [H] | Fato que pesa |
|---|---|---|
| Interface (painéis, mercado, inventário, Conselho) | **Svelte 5 + Vite** | [F] O Svelte 5 saiu em outubro de 2024, reescrito do zero, com as "runes" como forma explícita de declarar estado reativo ([Svelte, "Svelte 5 is alive"](https://svelte.dev/blog/svelte-5-is-alive)). [H] Compila para JavaScript pequeno, o que ajuda o prólogo a abrir rápido num celular barato ([12, §3.2](03-gdd/12-onboarding.md)) |
| Mapa da Cidade em pixel art isométrica | **PixiJS 8** | [F] O v8 ficou mais rápido que o v7 tanto em WebGL quanto em WebGPU; o projeto avisa que WebGPU não é automaticamente mais rápido e passou a usar WebGL por padrão na detecção automática ([PixiJS, lançamento do v8](https://pixijs.com/blog/pixi-v8-launches); [PixiJS, releases](https://github.com/pixijs/pixijs/releases)) |
| Acessibilidade | Interface em DOM, nunca dentro do canvas | O [14](03-gdd/14-arte-e-ui.md) pede leitor de tela, fonte legível e "Ver como lista" no mapa |
| Offline | Service worker com cache de arquivos; estado só de leitura | Decisão R12: nada que mova valor entra em fila local ([bíblia, §5](03-gdd/00-biblia.md)) |

Alternativa considerada: React, mais conhecido, com pacote maior. Phaser, motor de jogo completo, traz física e cenas que um idle não usa.

### 2.5 Bibliotecas e ferramentas [H]

Escolhas de partida, trocáveis sem mexer na arquitetura: **Fastify** (HTTP), **ws** (WebSocket), **postgres.js** com SQL explícito (o livro-razão pede controle total das transações; nada de ORM escondendo travas), **Zod** (validação de comandos e de arquivos de configuração), **Argon2id** (senhas), **Vitest** e **fast-check** (testes unitários e por propriedade), **k6** (teste de carga), **Prometheus**, **Grafana** e **Loki** (observabilidade), **GitHub Actions** (integração contínua).

## 3. Visão geral

```
 Jogador (PWA no navegador ou instalado)
        │ HTTPS (comandos e consultas)      │ WebSocket (avisos e chat)
        ▼                                    ▼
 ┌──────────────────────────── Cloudflare ────────────────────────────┐
 │  DNS, TLS, proteção contra DDoS, cache dos arquivos estáticos       │
 └────────────────────────────────────────────────────────────────────┘
        │                                    │
        ▼                                    ▼
 ┌──────────────┐  publica eventos   ┌──────────────────┐
 │  API         │ ─────────────────▶ │ Portão WebSocket │  (sem regra de jogo)
 │ (comandos,   │  LISTEN/NOTIFY     └──────────────────┘
 │  consultas)  │
 └──────┬───────┘
        │ transações curtas                 ┌──────────────────────────┐
        ▼                                   │ Trabalhadores (pg-boss)  │
 ┌──────────────────────────────┐ ◀──────── │ prazos, Câmbio, ondas de │
 │ PostgreSQL primário          │           │ detecção, relatórios     │
 │ (uma base lógica por Cidade) │           └──────────────────────────┘
 └──────┬───────────────┬───────┘
        │ replicação    │ WAL contínuo
        ▼               ▼
 ┌─────────────┐  ┌──────────────────────┐   ┌──────────────────────────┐
 │ Réplica     │  │ Armazenamento externo│   │ Painel administrativo    │
 │ (relatórios,│  │ (backup e PITR,      │   │ (acesso restrito, dupla  │
 │  Grafana)   │  │  fora da VPS)        │   │  aprovação para valor)   │
 └─────────────┘  └──────────────────────┘   └──────────────────────────┘
        ▲
 PSP de pagamento ──webhook assinado──▶ API (módulo de pagamentos)
```

**Um código, três papéis.** [H] O mesmo pacote roda como **API** (comandos e consultas), **portão** (conexões WebSocket, sem regra de jogo) ou **trabalhador** (jobs). Os três sobem da mesma imagem Docker com uma variável de ambiente diferente. Isso separa a carga sem separar o código, e qualquer papel pode ganhar réplicas.

**Módulos dentro do monólito** [H], cada um com dono claro das suas tabelas: `contas` (cadastro, sessões, 2FA), `cidade` (personagens, filas, liquidação), `oficios` (receitas, obra-prima, Faro), `combate` (expedições, masmorras, cercos), `economia` (livro-razão, cota, taxas), `mercado` (Bolsa, Feira, Leilão, Câmbio, Troca), `coins` (loja, Baú, Bazar de Personagens), `pagamentos`, `social` (guildas, encomendas, obras, Conselho, chat), `antiabuso` (sinais, ligações, ondas, sanções), `admin`. Um módulo só mexe no saldo de outro por meio do módulo `economia`.

## 4. Modelo de dados

### 4.1 Contas, personagens e Cidades

| Entidade | Campos principais [H] | Regras |
|---|---|---|
| **Conta** | id, e-mail, hash da senha (Argon2id), passkeys, 2FA, hash da chave de recuperação, idioma, Cidade, criada em | Sem documento, data de nascimento ou foto (checkpoint 3). A aceitação dos termos (18+) fica registrada com data e versão |
| **Personagem** | id, conta, nome, vocação, ofícios mestres, níveis e XP, Selos, estado (ativo ou aposentado) | Uma conta tem **um personagem ativo**; os aposentados não jogam nem negociam (seção 4.6) |
| **Cidade** | id, nome, Era atual, configuração vigente | Cada Cidade é uma economia separada; no lançamento, uma só (Pedraforte) |
| **Sessão** | id, conta, aparelho, criada em, última ação, "controle" | Uma sessão de controle por conta; a outra vê e pode assumir ([13, AA-16](03-gdd/13-anti-abuso.md)) |

### 4.2 O livro-razão

O coração do jogo. Desenho do estudo técnico ([07, §2.5](01-pesquisa/07-tecnica-idles-online.md)), adaptado ao GDD [H]:

| Tabela | O que guarda |
|---|---|
| `conta_razao` | Cada "lugar" onde valor pode estar: carteira de ouro, de Coins e de cada bem fungível de um jogador; cofre de guilda; contas de **fonte** (encomenda, cerco, evento, venda a NPC, doação, restituição); contas de **dreno** (taxa da Bolsa, da Feira, do Leilão, da Troca, do Câmbio, do Bazar, reparo, Oficina da Cidade, Selo, obra, fiscalização, loja de Coins); contas de **trânsito** (ouro reservado em ordem, lance de leilão, proposta de Troca, insumos de receita em andamento) |
| `transacao` | Uma operação de valor: tipo, conta de jogador que a pediu, chave de idempotência, versão da configuração vigente, criada em |
| `lancamento` | Débitos e créditos de uma transação: conta_razao, unidade (ouro, Coin ou bem), quantidade inteira de 64 bits. **Soma zero por unidade em cada transação** |
| `saldo` | Saldo atual de cada conta_razao, atualizado na mesma transação dos lançamentos, para leitura rápida |
| `lote_coins` | Cada doação vira um lote (valor, meio de pagamento, data), para rastrear de onde saiu cada Coin numa contestação ([07, §6.1](03-gdd/07-economia.md)) |

**Bens fungíveis e estados.** [H] Um bem fungível é identificado por (bem, tier, qualidade, estado), com estado em **origem** (produzido pela própria conta, ainda não saiu pelo portão do teto), **circulante** (comprado ou recebido) e **preso** (vinculado à conta, não negociável). A venda de um bem de origem consome cota do teto de emissão na mesma transação ([07, §3](03-gdd/07-economia.md)).

**Itens únicos** (Únicos, lendários, peças com durabilidade própria) têm id e **uma única localização**, garantida por restrição do banco; mover é trocar o dono, nunca copiar ([07, §2.5](01-pesquisa/07-tecnica-idles-online.md)).

**Invariantes verificadas o tempo todo** [H]: (1) soma zero por unidade em cada transação (restrição verificada no fim da transação); (2) saldo nunca negativo (restrição `CHECK`); (3) contas de trânsito zeram quando nada está pendente; (4) o saldo cacheado bate com a soma dos lançamentos (reconciliação de hora em hora na réplica, com alarme a qualquer diferença).

**Crescimento.** [H] Pela conta da Fase 1, 10 mil contas ativas geram cerca de 4,8 milhões de lançamentos por dia ([07, §6.5](01-pesquisa/07-tecnica-idles-online.md)). O `lancamento` é particionado por mês desde o primeiro dia; partições com mais de 13 meses vão para armazenamento frio, guardadas por 5 anos ([13, §9.1](03-gdd/13-anti-abuso.md)).

### 4.3 Progresso e filas

| Entidade | Campos [H] |
|---|---|
| **Fila** | personagem, posição, receita, quantidade, tarefa de reserva, início previsto |
| **Estado de liquidação** | personagem, último instante liquidado, taxa ausente vigente, offline conquistado (24 h a 72 h), Inspiração acumulada |
| **Cota do teto** | conta, saldo da cota, último cálculo (a cota enche 1/24 do teto por hora e acumula 3 dias: calculada sob demanda, sem job) |
| **Maestria e Selo** | personagem, ofício, nível, graus de Selo, maior nível já alcançado |

### 4.4 Mercado

| Balcão | Tabelas [H] | Nota |
|---|---|---|
| **Bolsa** | `ordem` (item, lado, preço, quantidade restante, garantia em trânsito, criada em), `negocio` | Livro por item, prioridade por preço e antiguidade ([13, AA-4](03-gdd/13-anti-abuso.md)) |
| **Feira** | `anuncio`, `vitrine` (janela de 2 min dos anúncios abaixo de 80% do preço de mercado), `pedido_vitrine` | O sorteio da vitrine usa o RNG do servidor |
| **Leilão** | `leilao`, `lance` (com lance máximo automático), garantia em trânsito | Prorrogação de 30 min para lance no fim |
| **Câmbio** | `ordem_cambio` (Coins ↔ ouro), `rodada` (hora, preço, volume) | Leilão de chamada de hora em hora ([07, §5.4](03-gdd/07-economia.md)) |
| **Troca** | `proposta` (os dois lados, reservados em trânsito, expira em 24 h) | Atômica: os dois lados ou nenhum |
| **Bazar de Personagens** | `anuncio_personagem`, `lance_bazar` | Leilão em Coins de 3 ou 7 dias, aviso de 72 h ao dono |
| **Preço de mercado** | `preco_mercado` (item, hora, mediana ponderada de 24 h) | Base das taxas, das bandas e do IPC ([bíblia, §4.1](03-gdd/00-biblia.md)) |

### 4.5 Social, antiabuso e pagamentos

- **Social:** guildas, cargos, cofre (contas_razao da guilda), encomendas, obras, cercos (inscrições), Conselho (candidaturas, cédulas, atos), chat (mensagens guardadas 90 dias, [09](03-gdd/09-social.md)).
- **Voto secreto e mutável** [H]: a cédula fica numa tabela separada, ligada ao eleitor por um identificador cifrado com chave da eleição; na apuração, conta-se e apaga-se a ligação. Assim o eleitor pode trocar o voto até o fim, e ninguém, nem a equipe, sabe em quem ele votou depois.
- **Antiabuso:** `sinal` (conta, tipo, peso, data), `pontuacao_risco`, `caso` (revisão, sanção, apelação). As **ligações entre contas** (aparelho, pagador, chave de recuperação, rede) ficam num **esquema separado**, com papel de acesso próprio e dupla aprovação para consulta ampla ([13, §4.2](03-gdd/13-anti-abuso.md)).
- **Pagamentos:** `pagamento` (PSP, id externo, valor, meio, status, conta), `evento_psp` (cada webhook recebido, guardado cru e processado uma vez), `contestacao`.

### 4.6 Resolução da D19: o modelo do Bazar de Personagens

A revisão de consistência deixou uma divergência entre o 07 e o 13 ([notas de integração, D19](03-gdd/_notas-de-integracao.md)). A arquitetura precisa de um modelo só. **Resolução do diretor [H]:**

- **O personagem muda de conta; a conta não muda de dono** (o modelo do 07, como o Char Bazaar do Tibia, em que o personagem entra na conta do comprador). Nenhuma senha, e-mail ou chave de recuperação muda de mãos. O vendedor fica com a conta e com o que é dela: ouro, Coins, Mérito e armazém ([07, §7.3](03-gdd/07-economia.md)).
- **A conta compradora** pode ser nova ou a atual. Se for a atual, o personagem atual vai para a **aposentadoria** (o conceito do 13): arquivado, sem jogar nem negociar, e reativável trocando de lugar com o ativo **no máximo uma vez a cada 90 dias**. O limite impede o revezamento que daria quatro ofícios mestres a uma pessoa (o receio do 07).
- **No modelo de dados:** `personagem.conta` muda na liquidação, dentro da mesma transação que move os Coins e destrói a taxa de 10%; `personagem.estado` passa de ativo a aposentado no personagem antigo.
- O 07, o 13 e a bíblia foram ajustados a esta resolução.

## 5. APIs

**Comandos e consultas por HTTPS, em JSON** [H]:

- **Comando** (muda estado): `POST /v1/comandos/{tipo}` com o cabeçalho `Idempotency-Key`. O servidor valida, nesta ordem: sessão, posse, estado, requisitos, limites e ritmo ([07, §2.2](01-pesquisa/07-tecnica-idles-online.md)). A resposta da primeira execução fica guardada e volta igual nas repetições ([07, §2.4](01-pesquisa/07-tecnica-idles-online.md)).
- **Consulta** (só lê): `GET /v1/...`. Liquida o personagem até agora antes de responder, sem gravar se nada mudou de verdade.
- **Valores negociáveis em inteiros**, viajando como texto no JSON, nunca como número de ponto flutuante ([07, §3.2](01-pesquisa/07-tecnica-idles-online.md)).
- **Limites de taxa** por conta, por IP e por classe de endpoint (escrita no mercado é mais restrita que leitura de inventário), em balde de fichas ([07, §2.3](01-pesquisa/07-tecnica-idles-online.md)). Na primeira etapa ficam na memória do processo; com várias réplicas da API, passam ao PostgreSQL ou ao Valkey (seção 13).
- **Prioridade sob carga:** liquidação, Troca e mercado antes de ranking e cosmético.

**API pública de leitura** ([13, AA-24](03-gdd/13-anti-abuso.md)): chaves por nível (pública, pessoal, ferramenta), 60 pedidos por minuto, mercado agregado com 15 minutos de atraso, arquivo diário de dados abertos com 24 horas de atraso. Nunca escrita.

**API do painel administrativo**: separada, em outro domínio, atrás de acesso restrito (seção 9.6).

## 6. Tempo real

- **O que vai por WebSocket** [H]: "sua fila terminou", "sua ordem foi executada", "você foi superado no leilão", "o cerco começa em 10 min", mensagens de chat e o andamento das obras. **Nada que o jogador precise para jogar**: se a conexão cair, o cliente consulta de tempos em tempos e o jogo continua.
- **Portão separado das regras** ([07, §6.4](01-pesquisa/07-tecnica-idles-online.md)): o portão só mantém conexões e repassa eventos. A API publica os eventos com `NOTIFY` do PostgreSQL numa conexão dedicada (o modo de transação do PgBouncer não aceita `LISTEN`, [07, §6.5](01-pesquisa/07-tecnica-idles-online.md)).
- **Batimento a cada 30 s.** [F] A Cloudflare aceita WebSocket em todos os planos e fecha a conexão quando nada passa por ela por um tempo; o ajuste desse tempo é só para o plano Enterprise ([Cloudflare, WebSockets](https://developers.cloudflare.com/network/websockets/)). [C] Guias e a comunidade citam 100 segundos para os planos Free e Pro ([Cloudflare Community](https://community.cloudflare.com/t/cloudflare-websocket-timeout/5865)).
- **Reconexão com espera crescente e aleatória**, para que uma queda não traga todo mundo de volta no mesmo segundo ([07, §2.4](01-pesquisa/07-tecnica-idles-online.md)).
- **Chat:** canais por idioma e por guilda; filtro de links e de padrões de RMT nos canais públicos ([09, §3](03-gdd/09-social.md)); mensagens guardadas 90 dias.

## 7. Jobs e cálculo do ausente

### 7.1 Liquidação por eventos

[H] O estado de um personagem só é calculado quando alguém precisa dele: o próprio jogador abre o jogo, outro jogador interage (compra uma ordem dele, por exemplo) ou um job fecha um ranking. Entre dois eventos que mudam a taxa (fim de uma tarefa, recurso que acaba, insumo que falta, fim do offline conquistado), a produção é **forma fechada**; nos eventos, aplica-se a regra do jogo ativo ([07, §1.1](01-pesquisa/07-tecnica-idles-online.md)).

- **Achados e drops do ausente** por amostragem exata (binomial), com **RNG por contador e chave secreta no servidor**: o resultado depende de (personagem, contador, chave), e repetir a liquidação dá o mesmo resultado ([07, §1.2 e §1.3](01-pesquisa/07-tecnica-idles-online.md)).
- **Paridade online/offline é teste obrigatório**: a bateria compara o cálculo por eventos com a simulação tique a tique em milhares de cenários, a cada mudança de regra ([07, "Implicações", item 3](01-pesquisa/07-tecnica-idles-online.md)).
- **Relatório da volta** ([12, §6](03-gdd/12-onboarding.md)) é montado a partir dos lançamentos do período, não de uma estimativa.
- **Tempo de liquidação ao abrir o jogo:** meta de até 200 ms para 72 h de ausência [H].

### 7.2 Jobs agendados (pg-boss)

| Job | Quando | Cuidado [H] |
|---|---|---|
| Fechar leilão, expirar ordem, expirar Troca | No prazo de cada um | Idempotente; um "completador" varre o que ficou para trás depois de uma queda |
| Rodada do Câmbio | De hora em hora | Uma rodada por hora, identificada pela hora; trava consultiva evita duas ao mesmo tempo |
| Janela de vitrine da Feira | 2 min depois do anúncio | Sorteio com o RNG do servidor, registrado |
| Avisos ("sua fila termina às 14h") | No horário previsto; reagendado se o plano muda | Aviso errado destrói a confiança no aviso |
| Ondas de detecção de fazendas | A cada 3 semanas, fora das semanas de abertura de Era | Na réplica; o resultado vira casos para revisão humana ([13, §3.4](03-gdd/13-anti-abuso.md)) |
| Painel da economia | De hora em hora e por dia | Na réplica (seção 11) |
| Reconciliação do livro-razão | De hora em hora | Alarme a qualquer diferença |
| Virada de Era, Fronteira, eleições | No calendário do [10](03-gdd/10-live-ops.md) | Espalhados por conta, para evitar o "estouro da manhã" ([07, §6.3](01-pesquisa/07-tecnica-idles-online.md)) |
| Partições do livro-razão | Mensal | Cria a do mês seguinte com antecedência |

## 8. Mercado e leilão atômicos

### 8.1 A receita de toda operação de valor

Do estudo técnico ([07, §5.2](01-pesquisa/07-tecnica-idles-online.md)), sem exceção [H]:

1. Abrir uma transação.
2. Travar as linhas envolvidas (carteiras, itens, ordens) **em ordem crescente de id**, para não haver impasse.
3. Conferir saldo, posse, estado e limites.
4. Gravar os lançamentos (soma zero) e atualizar os saldos.
5. Confirmar. Em erro de serialização ou impasse, repetir tudo com a mesma chave de idempotência.

As restrições do banco (saldo não negativo, item numa só localização, chave de idempotência única por conta) recusam o que a aplicação deixar passar.

### 8.2 Balcão por balcão [H]

- **Bolsa.** O casamento de ordens de um item acontece sob uma **trava consultiva por item** (`pg_advisory_xact_lock`), o que dá um único escritor por livro sem um processo especial. Com 2 a 5 mil simultâneos, o volume por item é pequeno. Se um item virar linha quente, o casamento dele passa a um processo em memória com um escritor e gravação antes de confirmar ([07, §6.5](01-pesquisa/07-tecnica-idles-online.md)).
- **Feira.** Compra imediata acima de 80% do preço de mercado; abaixo, janela de vitrine de 2 minutos com sorteio ([13, AA-4](03-gdd/13-anti-abuso.md)).
- **Leilão.** Todo lance reserva 100% em trânsito; o lance máximo automático sobe sozinho até o teto do jogador; o fechamento é um job idempotente que paga o vendedor, destrói a taxa de 7% e devolve as garantias dos perdedores.
- **Câmbio.** A cada hora, o job junta as ordens de compra e de venda de Coins, calcula o preço único que mais negocia dentro da banda (±3% por rodada, ±10% por dia), executa e destrói a taxa de 12% ([07, §5.4](03-gdd/07-economia.md)). **Coins doados entram na rodada seguinte, sem carência** (checkpoint 3).
- **Troca.** Proposta assíncrona com os dois lados reservados; aceitar executa tudo numa transação, cobra 3% de cada lado (12% para Coins e Baú lacrado) e destrói a taxa. **Nenhuma espera, retenção ou limite de saída** (checkpoint 3); o risco de troca é calculado depois, como sinal ([13, AA-23](03-gdd/13-anti-abuso.md)).
- **Bazar de Personagens.** Liquidação atômica: personagem muda de conta, Coins vão do comprador ao vendedor, taxa de 10% em Coins destruída, sessões do vendedor no personagem encerradas (seção 4.6).
- **Baú Misterioso.** Comprar destrói os Coins e cria o Baú lacrado (negociável); abrir sorteia com a tabela publicada e a garantia (contador de garantia por conta), tudo registrado. [H] **Sorteio verificável:** antes de cada série, o estúdio publica o resumo criptográfico da semente; depois da série, publica a semente, e qualquer um confere que as aberturas seguiram a tabela. Isso reforça a promessa de chances publicadas ([11, §5.4](03-gdd/11-monetizacao.md)).
- **Interruptor do Baú por país.** [H] A arquitetura deixa pronto um interruptor que desliga a venda e a abertura do Baú num país em minutos, **ligado por padrão** (o Baú funciona, como decidiu o Gabriel). Ele existe porque o [07](03-gdd/07-economia.md) já o previa e porque a fiscalização do ECA Digital começa em janeiro de 2027; acioná-lo seria decisão do Gabriel.

### 8.3 Disjuntores

Interruptores por balcão, item, moeda ou fluxo, que **só bloqueiam a entrada de novas operações**; o que está no meio termina ([13, AA-11](03-gdd/13-anti-abuso.md)). [F] Desligar tudo de uma vez criou um dupe novo no New World ([G04](01-pesquisa/fichas/G04-new-world.md)). O disjuntor de pagamentos suspende a doação por cartão, nunca a transferência (checkpoint 3).

### 8.4 Testes que provam a atomicidade

- **Pedidos simultâneos** contra cada endpoint de valor (20 a 30 pedidos com ~1 ms de dispersão, a técnica do "pacote único", [07, §5.1](01-pesquisa/07-tecnica-idles-online.md)): o saldo final tem de ser o de uma execução só.
- **Testes por propriedade** do livro-razão: qualquer sequência de operações aleatórias mantém as invariantes da seção 4.2.
- **Caminhos de exceção** (cancelar, expirar, estornar, disjuntor no meio) com testes próprios ([07, §5.1, item 5](01-pesquisa/07-tecnica-idles-online.md)).
- **Teste de "transferência imediata"**: nenhuma rota de transferência de ouro ou Coins tem espera, retenção ou limite de saída (checkpoint 3).

## 9. Segurança, anti-cheat e anti-bot

### 9.1 Autoridade

O cliente é uma tela. Tudo o que importa (sorteio, tempo, preço, saldo) acontece no servidor. Um cliente adulterado só consegue mandar comandos que um cliente honesto também mandaria; o resto é recusado e vira sinal ([07, §2.2](01-pesquisa/07-tecnica-idles-online.md)).

### 9.2 Contas sem verificação

- **Cadastro:** e-mail e senha (Argon2id) ou chave de acesso do aparelho (passkey); termos aceitos com versão e data; **chave de recuperação** gerada na hora e mostrada uma vez ([13, §4.3](03-gdd/13-anti-abuso.md)). Nenhum documento, data de nascimento ou foto (checkpoint 3).
- **2FA** por passkey ou aplicativo autenticador; SMS só como último recurso. Convite no primeiro dia: sem retenção de saída, ele é a principal proteção contra o esvaziamento da conta ([13, §7.1](03-gdd/13-anti-abuso.md)).
- **Alerta de login** em aparelho novo, com o botão "não fui eu", que encerra as sessões e congela as saídas a pedido do dono.

### 9.3 Detecção de bots e multicontas

- **Sinais no servidor** ([13, §3.4](03-gdd/13-anti-abuso.md)): regularidade nas decisões ativas, ausência de ciclo de sono, pedidos impossíveis e iscas, saturação do teto, fluxo sem contrapartida no grafo do livro-razão.
- **Ligações entre contas** ([13, §4.2](03-gdd/13-anti-abuso.md)): pagador (o PSP informa o nome do pagador do Pix e uma impressão do cartão), chave de recuperação e e-mail, chave de aparelho, rede. [F] A biblioteca aberta FingerprintJS tem precisão "consideravelmente menor" que a versão paga do mesmo fabricante, que usa sinais no servidor e aprendizado de máquina ([Fingerprint, OSS × Pro](https://dev.fingerprint.com/docs/pro-vs-open-source)). [H] Por isso a chave de aparelho é sinal fraco; o pagador e o fluxo de valor são os fortes.
- **Ondas de banimento** a cada 3 semanas, calculadas na réplica, com revisão humana antes da sanção ([13, §3.5](03-gdd/13-anti-abuso.md)).
- **Desafio contra bots** só para contas com pontuação de risco média ou alta, em formato acessível ([13, §3.3](03-gdd/13-anti-abuso.md)).

### 9.4 Borda e rede

- [F] A Cloudflare oferece mitigação de DDoS sem limite de tamanho em todos os planos, inclusive o gratuito ([Cloudflare, 2017](https://blog.cloudflare.com/unmetered-mitigation/)). [H] O plano gratuito basta no alfa; o Pro entra se as regras de firewall forem necessárias.
- [F] O Albion sofreu DDoS logo depois de ondas de banimento ([07, §6.6](01-pesquisa/07-tecnica-idles-online.md)). [H] A borda tem de estar pronta antes da primeira onda.
- **A VPS só aceita tráfego da Cloudflare** nas portas públicas; o acesso de administração é por VPN.

### 9.5 Dados pessoais (LGPD)

- Dados pessoais (e-mail, IP, referência de pagamento) ficam fora do livro-razão, que referencia só o id da conta ([07, §2.6](01-pesquisa/07-tecnica-idles-online.md)).
- Registros de acesso por 6 meses (Marco Civil, art. 15); ligações de conta banida por 5 anos; mensagens de chat por 90 dias ([13, §4.2](03-gdd/13-anti-abuso.md); [09](03-gdd/09-social.md)). **Validar com advogado** os prazos.
- Pedido de exclusão: a conta é anonimizada; os lançamentos ficam, ligados a um id sem dono, porque a economia precisa deles.

### 9.6 Equipe e painel

- Painel em domínio separado, atrás de VPN ou acesso por identidade, com 2FA obrigatório.
- **Toda ação que move valor exige dupla aprovação** e grava log imutável; ligar um disjuntor exige uma pessoa só ([13, AA-26](03-gdd/13-anti-abuso.md)). Com uma equipe de duas pessoas, quando só uma está disponível, a segunda aprovação vira uma espera de 24 horas com aviso no registro, antes de a ação valer [H]. A espera vale só para a equipe; nunca para a transferência dos jogadores.
- Segredos (chave do RNG, credenciais do PSP, chaves de cifra) em segredos do Docker Swarm, nunca no repositório.

## 10. Pagamentos e RMT

### 10.1 O fluxo da doação

1. O jogador escolhe a faixa na loja web. O módulo de pagamentos confere o **teto de doação** (R$ 250 por mês) e o **teto de compras nas primeiras 24 h** antes de criar a cobrança ([11, §7.1](03-gdd/11-monetizacao.md); [13, §6.4](03-gdd/13-anti-abuso.md)).
2. Cria a cobrança no PSP (QR do Pix ou cartão com 3DS), com a chave de idempotência da operação.
3. O PSP avisa por **webhook**. [F] Na API Pix da Efí, por exemplo, o webhook é configurado por chave Pix e exige mTLS ([Efí, webhooks Pix](https://dev.efipay.com.br/en/docs/api-pix/webhooks/)). O evento é guardado cru (`evento_psp`) e processado uma vez só.
4. Na mesma transação: lançamento da fonte "doação" para a carteira de Coins do jogador, lote novo em `lote_coins` e registro de auditoria. **Os Coins ficam disponíveis para tudo na hora** (checkpoint 3).
5. O jogador vê os Coins e o recibo da doação.

**Pix Automático** para quem quiser renovar a conveniência todo mês: [F] o Banco Central lançou o Pix Automático em 16/6/2025, para pagamentos recorrentes, sem custo para o pagador ([Teletime, 4/6/2025](https://teletime.com.br/04/06/2025/pix-automatico-para-pagamentos-recorrentes-fica-disponivel-dia-16/)). A renovação vem desligada por padrão, com aviso 3 dias antes ([11](03-gdd/11-monetizacao.md)).

### 10.2 PSPs e meios de pagamento

- **Pix primeiro.** [F] O link de pagamento do Mercado Pago cobra 0,99% no Pix e de 3,99% a 4,98% no cartão, conforme o prazo de recebimento ([11, §2.3](03-gdd/11-monetizacao.md)). A Efí cobra por transação, sem mensalidade de API, segundo um catálogo de terceiros; não achamos a tabela oficial ([apis.io, Efí](https://apis.io/plans/efi-bank/efi-bank-plans-pricing/)) [NV].
- **Cartão só com 3DS.** [F] Num documento da Fiserv para a América Latina, a transação autenticada passa a responsabilidade pela fraude do lojista para o banco emissor ([Fiserv, 3D Secure 2.0](https://docs.apis-fiserv.com/latam/docs/3d-secure-20)); uma reportagem de 2026 descreve a adoção no Brasil como desigual, com bancos ainda implementando etapas ([Portal Tela, 14/5/2026](https://www.portaltela.com/noticias/ciencia/2026/05/14/tecnologia-3ds-reforca-defesa-contra-fraudes-em-cartoes-de-credito/)). [H] A contestação continua possível e conta no limite das bandeiras.
- **Aprovação por escrito antes de lançar.** [F] A Stripe restringe a venda de moeda virtual a quem opera o ambiente virtual e proíbe sorte com prêmio de valor ([05c, §5.2](01-pesquisa/05c-rmt-legal-global-pagamentos.md)). [H] O Baú comprável com Coins, com conteúdo negociável, e os Coins transferíveis precisam de aceite explícito do PSP escolhido, para que a conta não seja encerrada com o dinheiro retido ([05c, "Como isso pode dar errado", item 2](01-pesquisa/05c-rmt-legal-global-pagamentos.md)).
- **Dois PSPs no lançamento**, com Pix e cartão (decisão 3 do checkpoint da Fase 4), para não depender de um só ([13, §6.4](03-gdd/13-anti-abuso.md)).

### 10.3 Contestação

- O webhook de chargeback ou de MED cria a contestação; um job suspende a conta até regularizar ([13, AA-14](03-gdd/13-anti-abuso.md)) e marca o lote contestado.
- O livro-razão rastreia para onde foram os Coins do lote. Quem recebeu de boa-fé fica com eles; se houver sinais de fraude organizada (cartão de terceiro, funil de contas), as contas que receberam sem contrapartida entram em revisão ([13, §6.3](03-gdd/13-anti-abuso.md)).
- **Disjuntor de pagamentos:** disputas mais fraudes acima de 0,8% das compras por cartão em 30 dias suspendem o cartão para contas sem histórico; acima de 1,2%, para todas; o Pix continua ([13, §6.4](03-gdd/13-anti-abuso.md)).

### 10.4 RMT e auditoria

- **RMT oficial dentro do jogo:** Câmbio, Troca e Bazar de Personagens, todos no livro-razão. **RMT informal:** nenhuma integração; a API não escreve; o estúdio só mede o preço externo (índice cinza, [13, AA-22](03-gdd/13-anti-abuso.md)).
- **Registro de auditoria** [H]: toda transação de valor e toda ação administrativa ganham um registro só de acréscimo; cada registro leva o resumo criptográfico do anterior (encadeamento), o que denuncia qualquer edição. Uma cópia diária sai para armazenamento externo. Guarda de 5 anos ([13, §9.1](03-gdd/13-anti-abuso.md)).
- **Fiscal:** cada pagamento guarda o necessário para a apuração; o regime (doação, venda, Simples ou Lucro Presumido) é **validar com contador** ([11, §8.4](03-gdd/11-monetizacao.md)).

## 11. Observabilidade e painel administrativo de economia

### 11.1 Operação

- **Métricas** (Prometheus), **logs** (Loki), **painéis e alertas** (Grafana), **checagem externa** de disponibilidade. Tudo autogerido na VPS, sem custo de licença [H].
- **Metas de serviço** [H]: 95% dos comandos em até 300 ms; liquidação ao abrir em até 200 ms; rodada do Câmbio concluída até 1 minuto depois da hora; reconexão do WebSocket em até 10 s; nenhuma diferença na reconciliação do livro-razão.

### 11.2 O painel da economia

Pedido do briefing e do [07, §12](03-gdd/07-economia.md). Calculado na réplica, de hora em hora e por dia, a partir do livro-razão [H]:

| Bloco | Indicadores |
|---|---|
| **Moeda em circulação** | Ouro e Coins em carteiras, cofres, trânsito, contas suspensas e contas inativas; Coins sem lastro (contestados já transferidos) |
| **Fontes e drenos por dia** | Cada fonte e cada dreno por categoria; razão drenos ÷ fontes (meta de 85% a 95%) |
| **Preços** | Preço de mercado por item; IPC (cesta) e sua tendência; preço do Coin em ouro e o premium em dias de renda do jogador mediano |
| **Teto e cota** | Parcela das contas no teto (meta de 10% a 30%); cota média usada |
| **Distribuição** | Gini, top 1% e top 10% da riqueza; concentração por coorte de entrada |
| **Saúde da produção** | Consumo essencial não atendido; índice de ofício (ouro por hora mediano de cada ofício, meta de 75% a 130% da mediana) |
| **Abuso** | Contas novas por dia e onda; **extração das fazendas** (parte do valor emitido que sai de contas marcadas, meta até 3%); lucro estimado da conta-fazenda (meta até ~R$ 15 por mês); fluxo sem contrapartida por perfil (coletora, ponte, banco) |
| **Pagamentos** | Doações por dia, taxa de disputa, contas suspensas e regularizadas, disjuntor |

**Alertas de anomalia** [H]: qualquer valor criado fora das contas de fonte (violação de invariante: página para o Gabriel na hora); uma fonte acima de 3 desvios da média de 14 dias; preço fora da banda; Coin com variação diária acima de 10%; onda de contas novas acima de 2 vezes a média; disputa acima de 0,5%; extração das fazendas acima de 3%.

**Os critérios de saúde da simulação viram alertas reais.** Os 13 critérios do [08](03-gdd/08-simulacao.md) usam os mesmos nomes e fórmulas no painel, para que a simulação e o jogo falem a mesma língua.

**Ações pelo painel**, com dupla aprovação quando movem valor: ligar disjuntor, aplicar sanção, reverter um roubo provado, publicar uma série do Baú, mudar a taxa da Feira dentro da faixa do Conselho.

## 12. Balanceamento orientado a dados

- **Onde ficam os números** [H]: uma pasta `config/` no repositório, com arquivos por domínio: `itens`, `receitas`, `oficios`, `progressao` (curvas de XP, taxas ausentes), `economia` (teto, taxas, bandas, preços de NPC), `combate` (bestiário, regiões), `loja` (preços em Coins, faixas de doação), `bau-serie-N` (tabela de chances e garantia), `eras` (calendário, Fronteira, festas).
- **Validação por esquema** (Zod) na integração contínua: nenhum arquivo entra se faltar campo, se uma chance não somar 100% ou se um preço ficar fora da faixa da constituição ([07, §11](03-gdd/07-economia.md)).
- **Uma fonte de números para três consumidores:** o servidor (autoridade), o cliente (preços e chances publicados na tela) e a **simulação**. Hoje o `sim.js` lê o próprio `parametros.json`; na Fase 5, ele passa a ler a mesma `config/`, e toda mudança de equilíbrio roda a simulação antes de entrar.
- **Versão em cada transação:** o livro-razão grava a versão da configuração vigente, o que permite reconstruir qualquer resultado.
- **Quando os números mudam:** mudança econômica só na virada de Era ou com 30 dias de aviso e análise de impacto publicada, como manda a constituição ([07, §11](03-gdd/07-economia.md)); sem aviso, só disjuntores e correções de bug.

## 13. Escala: de 100 a 100 mil jogadores

**A régua.** [H] Uma Cidade cheia tem de 2 a 5 mil simultâneos ([bíblia, §6.7](03-gdd/00-biblia.md)), o que, com ~10 pessoas por vaga simultânea e DAU/MAU de 30% ([11, §8.1](03-gdd/11-monetizacao.md)), dá cerca de 115 mil jogadores no mês no cenário base. **100 mil jogadores cabem em uma a três Cidades.** A Cidade é a divisão natural: economias separadas, bancos separados.

| Etapa | Jogadores no mês | Simultâneos | Infraestrutura [H] | Gatilho para a próxima |
|---|---|---|---|---|
| **0. Desenvolvimento (agora)** | Só o Gabriel | 1 | O PC do Gabriel (Windows 11) com Docker Desktop: PostgreSQL 18 num container, na porta 5433, porque o PostgreSQL 16 do Windows já usa a 5432; servidor, trabalhador e cliente em Node.js 26; contas de teste e dados sintéticos | Outras pessoas vão testar: VPS |
| **1. Alfa fechado** | 100 a 500 | até 100 | 1 VPS, Swarm de 1 nó: API, portão, trabalhador e PostgreSQL; WAL contínuo e backup diário para armazenamento externo; Cloudflare gratuito | Beta marcado |
| **2. Beta aberto** | 1 mil a 10 mil | até 1.500 | 2 máquinas: aplicação (os três papéis) e banco dedicado; réplica assíncrona numa terceira máquina pequena, que também roda Grafana | CPU do banco acima de 60% no pico, ou latência p95 acima da meta |
| **3. Lançamento (1 Cidade)** | 10 mil a 50 mil | 1.500 a 5.000 | Swarm com 3 gerentes em 3 máquinas; 2 a 3 réplicas da API e do portão; banco primário dedicado com réplica e recuperação a ponto no tempo; Cloudflare Pro | Cidade perto do teto de simultâneos: abrir a segunda Cidade |
| **4. 100 mil (2 a 3 Cidades)** | 50 mil a 150 mil | 5 mil a 15 mil | Um banco por Cidade (ou por grupo de Cidades pequenas); a aplicação escala por réplicas; Valkey para limites de taxa e pub/sub entre nós, se o PostgreSQL apertar | — |

**Quanto o banco aguenta.** [H] Um idle gera de 1 a 3 comandos por minuto por jogador presente; 5 mil simultâneos dão de ~80 a ~250 comandos por segundo, cada um uma transação curta com 5 a 20 lançamentos. [F] Para comparação de ordem de grandeza: num benchmark do próprio fornecedor, um PostgreSQL 17 gerenciado em 16 vCPUs com NVMe chegou a 36,5 mil transações por segundo no cenário limitado por CPU ([ClickHouse, benchmarks de Postgres gerenciado](https://clickhouse.com/docs/products/managed-postgres/benchmarks)). [H] Há folga de uma ordem de grandeza, mas a capacidade real só se conhece com **teste de carga dos três picos** que o estudo técnico apontou: mercado, eventos sincronizados e liquidações em massa ([07, §6.1](01-pesquisa/07-tecnica-idles-online.md)). O teste com k6 é critério de pronto do marco de lançamento.

**Ordem de escalada** quando apertar, da mais barata à mais cara ([07, §6.5](01-pesquisa/07-tecnica-idles-online.md)): índices e planos de consulta → pool de conexões (PgBouncer em modo de transação, com travas consultivas só de transação) → réplica para leitura → particionamento → item quente num processo de escritor único → nova Cidade.

**Recuperação de desastre** [H]: perda máxima de 1 minuto de dados (WAL contínuo para fora da máquina) e volta em até 1 hora; ensaio de restauração todo mês, num ambiente separado. [F] Um swarm com N gerentes tolera (N − 1)/2 falhas, e a Mirantis promete suporte ao Swarm até pelo menos 2030 ([07, §6.6](01-pesquisa/07-tecnica-idles-online.md)). [H] Containers e configuração declarativa mantêm aberta a migração para Kubernetes depois disso.

**Onde fica o servidor.** [H] Num idle, 150 ms de latência não mudam nada ([07, §2.1](01-pesquisa/07-tecnica-idles-online.md)); a VPS atual do Gabriel serve ao alfa onde estiver. Para o lançamento no Brasil, uma máquina em São Paulo melhora o tempo de resposta do celular na rede móvel, e a Cloudflare atende os arquivos estáticos a partir do Brasil.

## 14. Organização do código e qualidade (prévia da Fase 5)

- **Um repositório** [H]: `apps/servidor`, `apps/cliente`, `apps/admin`, `pacotes/regras` (as regras do jogo, puras, sem banco), `pacotes/config` (esquemas e carga), `pacotes/razao` (livro-razão), `simulacao/` (o `sim.js`, migrado para ler `config/`), `config/`, `infra/` (stacks do Swarm).
- **Testes**, como pede o briefing para economia e combate: unitários, por propriedade (invariantes do livro-razão, paridade online/offline, teto de emissão, combate por regras), concorrência (seção 8.4) e carga (seção 13).
- **Integração contínua** (GitHub Actions): tipos, testes, validação da `config/`, simulação curta de regressão e imagem Docker; implantação na homologação a cada fusão e na produção por etiqueta de versão.
- **Ambientes:** local (Docker Compose), homologação (pequena, com dados sintéticos) e produção.

## 15. Custos de infraestrutura

[H] O [11, §8.4](03-gdd/11-monetizacao.md) reservou de R$ 4 mil (pessimista) a R$ 10 mil (otimista) por mês para servidor, backup, CDN e anti-DDoS. A arquitetura cabe nisso: VPS próprias, Cloudflare gratuita ou Pro, armazenamento de objetos para backup e observabilidade autogerida. Os itens que podem surpreender são o envio de e-mail transacional e, se a escala pedir, um banco por Cidade. Não pesquisamos preços de VPS e armazenamento nesta fase: **cotar antes do beta**.

## 16. Segunda rodada da simulação

Detalhe e números no [08, seção "2ª rodada"](03-gdd/08-simulacao.md). Resumo:

**O que mudou no modelo:** carência zero; contestação a 0,5% das doações com 95% dos Coins já transferidos; fazendas em 3% das contas (eram 0,5%, com identidade verificada); funil sem verificação (25% mais contas novas, retenção menor); bônus da refeição dentro do teto do domínio (D15); disjuntor de pagamentos que suspende o cartão (no modelo da 1ª rodada, ele parava o Câmbio, um freio de transferência que o GDD já não tem); e um 13º critério de saúde, a extração das fazendas.

| Cenário (média de três sementes) | IPC ao ano | Nível de preços | Premium em dias de renda | Extração das fazendas | Critérios (de 13) |
|---|---|---|---|---|---|
| 1ª rodada, para comparar | +2% | 45,9 | 16,5 | 0,5% | 7 |
| Base da 2ª rodada | +102% | 51,0 | 13,1 | 3,0% | 5,7 |
| **Sem o bônus da refeição (recomendado)** | +26% | 44,7 | 19,4 | 2,9% | 7,0 |
| Refeição só na bancada ativa | +93% | 50,6 | 19,0 | 3,0% | 6,3 |
| Sem o bônus da refeição e ouro de começo de 1.600 | +27% | 45,1 | 16,2 | 2,9% | 6,7 |
| Fazendas em 10% | +106% | 59,6 | 14,4 | 9,3% | 4,7 |
| Fazendas em 10% e rampa de conta nova longa | +25% | 85,3 | 5,3 | 8,2% | 3,0 |

**Achados [H]:**

1. **Preços e premium aguentam as decisões do checkpoint 3;** sem o bônus da refeição, ficam como na 1ª rodada. **A tendência do IPC sobe** em todas as sementes, para +26% ao ano, em parte pela entrada maior de contas, cada uma com 2.000 de ouro de começo. Baixar o ouro de começo resolve quando testado sozinho, mas não na combinação inteira. É o principal ponto a calibrar no início da Fase 5, com a configuração real, e sempre sem freios na transferência.
2. **O bônus de ofício da refeição deve sair:** qualquer bônus, mesmo só nas horas de bancada ativa, leva a inflação a +93% a +107% ao ano, porque os consumíveis já faltam no modelo (33% do consumo essencial não é atendido) e toda demanda extra vira alta de preço. A refeição continua no combate e nas provisões do cerco e da Fronteira (decisão 4 do checkpoint).
3. **A extração das fazendas acompanha a fração de contas falsas** (3% → 3,0%; 10% → 9,3%; 20% → 18,6%), com lucro de R$ 12 a R$ 21 por conta por mês. A meta de 3% só vale se a detecção segurar as fazendas perto de 3% das contas.
4. **A rampa de conta nova mais longa foi descartada:** quase não reduz a extração e derruba a economia de quem chega.
5. **Um ataque de cartões custa dinheiro, não a economia:** com o disjuntor no cartão, o premium fica em 19 dias; os Coins sem lastro dobram.

**Consequências para a arquitetura:** a detecção de multicontas (ligações por pagador e fluxo de valor, seção 9.3) vira requisito do alfa, e não do lançamento; o painel mostra a extração das fazendas com alerta acima de 3% (seção 11.2); o ouro de começo, a refeição e os limiares do disjuntor ficam na `config/` (seção 12), prontos para calibrar.

## 17. Pendências resolvidas nesta fase

| # | Pendência | Resolução [H] |
|---|---|---|
| **D15** | Bônus de +3% da refeição × teto de 1,10× do domínio | Aplicado no modelo (o bônus conta dentro do teto). O efeito medido na seção 16 leva a recomendar tirar o bônus (decisão 4) |
| **D16** | VR das matérias raras e dos insumos nobres | Regra abaixo |
| **D19** | Modelo do Bazar de Personagens (07 × 13) | Seção 4.6 |

**D16: valor de referência das matérias raras e dos insumos nobres.** O VR mede o trabalho embutido, em minutos de ofício, vezes 2,0 ouro por minuto ([bíblia, §4.1](03-gdd/00-biblia.md)). A matéria rara não tem receita; o trabalho que ela "embute" é o tempo de fila em que ela apareceria por acaso.

- **Matéria rara do tier n** (veio puro, cerne, pele rara, fibra longa, peixe raro, erva rara): **VR = 2.000 × VR de uma unidade do bruto do tier n**, porque a fila acha uma matéria rara a cada 2.000 ações ([06, §6.4](03-gdd/06-oficios-e-coleta.md)). *Exemplo:* o minério de ferro (T2) leva 11,2 s por unidade ([06, §2](03-gdd/06-oficios-e-coleta.md)); 2.000 unidades são ~373 minutos de ofício, e o veio puro de ferro vale ~747 de VR.
- **Insumo nobre do tier n** (lingote temperado, tábua de cerne, couro encerado, brocado): **VR = (VR da matéria rara + VR dos 10 insumos da fornada) ÷ 2**, porque um mestre atento tira em média 2 insumos nobres por fornada (70 pontos, [06, §6.4](03-gdd/06-oficios-e-coleta.md)).
- **Efeito no teto:** com o teto de um mestre de nível 40 em 1.800 de VR por dia, um veio puro de T2 vendido usa ~40% da cota do dia. O portão de saída segura uma conta que tente exportar raras em massa: o que passa do teto fica para uso próprio ou vira obra ([07, §3](03-gdd/07-economia.md)).
- **A simulação não modela matérias raras** (agrega os bens por tipo e tier). A regra fica como ponto de partida, a calibrar com a telemetria do alfa: se o preço de mercado de uma rara ficar abaixo de um quarto do VR ou acima de quatro vezes, revisar o fator 2.000.

## 18. As decisões técnicas, pelas quatro perguntas

| Decisão | Inspira-se em / diferencia-se de | Problema que resolve | Comportamento que incentiva | Risco que cria |
|---|---|---|---|---|
| Livro-razão de partidas dobradas | Stripe; o rastreio que salvou o New World sem rollback ([07, §2.5 e §5.1](01-pesquisa/07-tecnica-idles-online.md)) | Dupe, fraude e roubo corrigíveis; painel da economia exato | Na equipe: nenhuma mudança de saldo "por fora" | Mais escrita no banco; tabela que só cresce (particionar) |
| Liquidação por eventos | Separação do EVE (tique no combate, relógio nos cronômetros); diferencia-se do Idlescape ([07, §6.2](01-pesquisa/07-tecnica-idles-online.md)) | Custo proporcional a ausentes; fragilidade a reinícios | No jogador: confiar no Relatório da volta | Bug de paridade online/offline (teste obrigatório) |
| PostgreSQL como fila | pg-boss; o conselho de Brandur sobre transações longas | Uma peça a menos para dois operadores | Jobs nascem na mesma transação do estado | Fila e economia disputam o mesmo banco no pico |
| Monólito modular em TypeScript | Lichess separa só o WebSocket da aplicação principal ([07, §6.1](01-pesquisa/07-tecnica-idles-online.md)) | Uma linguagem, um deploy, regras escritas uma vez | Simulação e jogo usam os mesmos números | Um laço de eventos por processo: CPU pesada fora da API |
| Uma Cidade, um banco | Mundos do OSRS; servidor único do EVE como contraexemplo | Escala sem reescrever | Comunidades do tamanho certo | Jogador que quer mudar de Cidade (fora do lançamento) |

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **O banco é ponto único de falha** | A máquina do PostgreSQL cai no pico de uma abertura de Era | Réplica pronta para promoção, WAL contínuo fora da máquina, ensaio mensal de restauração, abertura de Era espalhada no tempo |
| **Dupe por corrida que o teste não pegou** | Um endpoint novo esquece a trava ou a chave de idempotência | Receita única (seção 8.1) num só módulo; restrições do banco; teste de pedidos simultâneos obrigatório para todo endpoint de valor; alarme de invariante |
| **Equipe de dois vira gargalo e ponto único** | O Gabriel adoece ou some por uma semana no meio de um incidente | Disjuntores que uma pessoa liga; manual de incidente escrito; alertas com instrução; nada que exija presença 24 h no alfa |
| **PSP encerra a conta e retém o dinheiro** | O Baú pago com conteúdo negociável e os Coins transferíveis violam a política do PSP ([05c](01-pesquisa/05c-rmt-legal-global-pagamentos.md)) | Aprovação por escrito antes do lançamento; dois PSPs; Pix primeiro |
| **Fraude de cartão sem carência** | Cartão roubado vira Coins vendidos no Câmbio em minutos; a taxa de disputa passa do limite das bandeiras | Cartão só com 3DS (entra no lançamento, por decisão do Gabriel); teto nas primeiras 24 h; disjuntor de pagamentos; rastreio pelo livro-razão |
| **Fiscalização do ECA Digital** | A ANPD exige, a partir de 2027, verificação de idade ou o Baú desligado | Risco assumido pelo Gabriel; o interruptor do Baú por país existe e fica ligado (seção 8.2) |
| **DDoS depois das ondas de banimento** | Retaliação, como no Albion | Cloudflare antes da primeira onda; VPS fechada para tráfego que não vem da borda |
| **Mudança de configuração quebra a economia** | Um número errado num arquivo de receitas inunda o mercado | Validação por esquema; simulação de regressão na integração contínua; mudança econômica só com aviso; disjuntor por item |
| **O livro-razão cresce demais** | Bilhões de linhas por ano tornam consultas e backups lentos | Partição mensal desde o dia 1; arquivamento frio; relatórios na réplica |
| **Tempestade de reconexões** | Uma queda derruba milhares de WebSockets, que voltam no mesmo segundo | Espera crescente e aleatória; o jogo funciona sem WebSocket |
| **CPU travando a API** | A rodada do Câmbio ou a onda de detecção roda no mesmo processo dos comandos | Papel "trabalhador" separado; metas de latência com alerta |
| **Vazamento de dados** | Ataque expõe e-mails e ligações de aparelho | Nenhum documento guardado; ligações em esquema separado com acesso restrito; cifra em repouso dos backups; plano de resposta (LGPD, art. 48; **validar com advogado**) |
| **Docker Swarm perde suporte** | A Mirantis encerra o suporte depois de 2030 | Configuração declarativa e containers portáteis; migração para Kubernetes planejada como projeto do ano 4 |
| **Fazendas de bots em escala** | Sem verificação, contas falsas custam quase nada (seção 16) | Rampa de conta nova, teto por conta, ondas de detecção e o indicador de extração no painel, com alerta |

## Resumo executivo e checkpoint da Fase 4

### Resumo

**A arquitetura.** Um monólito modular em TypeScript (Node.js 26) com PostgreSQL 18 como única fonte da verdade, inclusive da fila de jobs. Todo ouro, Coin e item passa por um livro-razão de partidas dobradas, com chave de idempotência em todo comando que move valor, travas em ordem fixa e restrições no banco: é o que torna o mercado e o leilão à prova de duplicação. O ausente é calculado por eventos, na hora em que alguém precisa do estado. O cliente é uma PWA em Svelte 5 com o mapa em PixiJS 8; o WebSocket serve só a avisos e chat. Tudo roda em Docker Swarm na VPS do Gabriel, com a Cloudflare na frente; cada Cidade é um banco, o que leva o jogo de 100 a 100 mil jogadores em quatro etapas. Os números do jogo ficam em arquivos de configuração lidos pelo servidor, pelo cliente e pela simulação.

**As decisões do checkpoint 3 viraram requisitos:** nenhuma etapa de verificação no cadastro; nenhuma rota de transferência com espera (há teste automático para isso); "uma pessoa, uma conta" cobrada por detecção, com as ligações entre contas num esquema separado; o disjuntor de pagamentos suspende o cartão, nunca a transferência. Para a equipe mínima: uma linguagem, um banco, nenhum serviço obrigatório além da Cloudflare.

**A 2ª rodada da simulação** mostrou que o checkpoint 3 não derruba os preços nem o premium (19 dias de renda), mas a inflação ao longo do ano sobe de +2% para +26%; que o bônus de ofício da refeição a leva a +100% e deve sair; e que as fazendas de bots extraem do valor do jogo a mesma fração que têm das contas. Sem verificação, a única barreira contra elas é a detecção, que passa a ser trabalho do alfa.

**Pendências resolvidas:** D15 (refeição dentro do teto do domínio), D16 (valor das matérias raras e dos insumos nobres) e D19 (modelo do Bazar de Personagens: o personagem muda de conta; a conta não muda de dono).

**Riscos principais:** o PSP recusar o Baú pago e os Coins transferíveis; fraude de cartão sem carência; fazendas de contas falsas em escala; a fiscalização do ECA Digital a partir de janeiro de 2027 (risco assumido pelo Gabriel); a inflação a calibrar; uma equipe de duas pessoas operando um jogo com dinheiro real.

### 🛑 Checkpoint da Fase 4: decisões para o Gabriel

**1. Com que linguagem e plataforma construímos?**
- **(A) TypeScript em Node.js no servidor, no cliente e na simulação; PostgreSQL; Svelte e PixiJS no cliente. ← recomendado**
- (B) Elixir e Phoenix no servidor, com PostgreSQL; cliente igual.
- (C) Go no servidor, com PostgreSQL; cliente igual.
- *Por quê:* com uma equipe de duas pessoas, escrever as regras uma vez e usá-las no servidor, na tela e na simulação vale mais que o desempenho extra de (B) ou (C). Um idle manda poucos comandos por jogador; o limite é o banco, não a linguagem (seção 2).

**2. Onde o jogo roda?**
- **(A) Na VPS do Gabriel com Docker Swarm: uma máquina no alfa e três no lançamento, Cloudflare na frente e backup contínuo fora da VPS. ← recomendado**
- (B) Numa nuvem com banco gerenciado: menos operação, custo maior e dependência do fornecedor.
- (C) Kubernetes desde o começo.
- *Por quê:* é a infra que o Gabriel já opera, cabe no orçamento do [11](03-gdd/11-monetizacao.md) e chega ao lançamento; (C) é complexidade sem retorno para dois operadores. A migração fica aberta porque tudo roda em containers (seção 13).

**3. Que meios de pagamento abrem o jogo?**
- **(A) Só Pix no lançamento, por um PSP brasileiro com webhook assinado; cartão com 3DS num segundo PSP depois de três meses de dados de fraude. ← recomendado**
- (B) Pix e cartão desde o lançamento, em dois PSPs.
- (C) Um PSP só, com Pix e cartão.
- *Por quê:* sem carência (checkpoint 3), cartão roubado vira Coins vendidos em minutos, e o estorno cai sobre o estúdio; o Pix custa menos (0,99% contra 3,99% a 4,98% do cartão no Mercado Pago, [11](03-gdd/11-monetizacao.md)) e não tem chargeback de cartão. O custo de (A): quem não tem Pix, como o jogador de fora do Brasil, não doa nos primeiros meses. Em qualquer opção, o PSP precisa aprovar por escrito o Baú e os Coins transferíveis antes do lançamento (seção 10.2).

**4. O bônus de ofício da refeição fica?**
- **(A) Não: a refeição continua no combate e nas provisões do cerco e da Fronteira, sem bônus de ofício; o alfa mede a parte de Culinária e Pesca nas horas de ofício. ← recomendado**
- (B) Só nas horas de bancada ativa (jogador presente).
- (C) Como no GDD (+3% em qualquer hora de fila, dentro do teto do domínio).
- *Por quê:* na 2ª rodada, sem o bônus a inflação fica em +26% ao ano e o premium em 19 dias de renda; com ele, a inflação vai a +93% (B) ou +102% (C), e em (C) o premium cai a 13 dias. Os consumíveis já faltam no modelo, então o bônus não é necessário para dar demanda à Culinária (seção 16; [08](03-gdd/08-simulacao.md), seção 10).

**5. Como funciona o Bazar de Personagens?**
- **(A) O personagem muda de conta, como no Char Bazaar do Tibia; o vendedor fica com a conta, o ouro, os Coins e o Mérito; quem já tem personagem e compra outro arquiva o atual (aposentadoria), com troca de lugar no máximo a cada 90 dias. ← recomendado**
- (B) A conta inteira muda de dono (e-mail, senha e chave de recuperação passam ao comprador).
- (C) O personagem muda de conta, mas o comprador precisa de uma conta vazia; não existe aposentadoria.
- *Por quê:* (A) não passa nenhuma credencial adiante, o que fecha o golpe da recuperação, e o limite de 90 dias impede o revezamento de ofícios mestres. (B) é mais simples de construir, mas deixa o histórico da conta com o comprador e complica a recuperação. (C) empurra o comprador a abrir uma segunda conta, o que fura "uma pessoa, uma conta" (seção 4.6).

### Decisões do Gabriel (2026-11-11)

| # | Decisão do Gabriel |
|---|---|
| 1 | **(A)** TypeScript no servidor, no cliente e na simulação. |
| 2 | **No PC local, por enquanto:** só o Gabriel vai testar agora. A VPS com Docker Swarm e a Cloudflare ficam para quando outras pessoas testarem (seção 13, etapa 0). |
| 3 | **(B)** Pix e cartão desde o lançamento, em dois PSPs. O cartão exige 3DS; o risco de fraude sem carência foi assumido pelo Gabriel. |
| 4 | **Pendente:** o Gabriel pediu uma explicação melhor do bônus de ofício da refeição. |
| 5 | **(A)** O personagem muda de conta; quem já tem personagem arquiva o atual, com troca a cada 90 dias. |
