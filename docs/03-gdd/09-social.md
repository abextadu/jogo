# GDD 09 — Social

> **Escopo.** Guildas, chat, cooperação (Encomendas, inscrição nos Cercos, mentoria), competição (rankings) e o Conselho. Depende da [bíblia](00-biblia.md); conversa com os módulos 04 (Cercos), 06 (ofícios), 07 (economia), 10 (live ops) e 13 (anti-abuso).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).**
> **Unidade de conta usada aqui:** **hora-fila (h-f)** = o que um personagem típico produz em 1 hora de Fila no tier do momento. Serve para medir custos e metas sem depender da escala do ouro; o módulo 06 converte h-f em materiais concretos e o 08 calibra. Exemplo: um jogador que deixa a Fila rodando 70% do tempo produz cerca de 0,7 × 168 = **118 h-f por semana**.

## Resumo das decisões

| # | Decisão | Por quê, em uma linha |
|---|---|---|
| S1 | **A guilda é lugar, não multiplicador.** Sede e Renome liberam vagas, recursos e cosméticos, nunca bônus de produção, drop ou XP. | O solitário não é punido e a guilda grande não vira bola de neve. |
| S2 | **Quem se inscreve define a meta.** Encomendas e guarnições contam só quem aceitou, com o ritmo que declarou (leve, normal, forte). | O ausente nunca vira peso do grupo, a lição do Egg Inc. e do Tap Titans 2. |
| S3 | **Ranking só sobe quem entrega à cidade.** Os rankings medem bens entregues a Obras e Encomendas (destruídos) e defesa, contando só produção própria. Nada de ranking por vendas, lucro ou patrimônio. | Lavar volume não sobe ninguém, e subir no ranking é ele mesmo um dreno. |
| S4 | **Conselho pequeno, regras grandes.** 7 conselheiros por voto único transferível, mandato de 2 meses, poderes só dentro de faixas, votos secretos e mutáveis até o fim. | Capturar o Conselho rende pouco e comprar voto não dá para conferir. |
| S5 | **Golpe não é conteúdo.** Segurança por desenho (Troca com confirmação dupla, links bloqueados nos canais públicos, carências, cofre com limites) e punição para quem engana dentro do jogo. | Com RMT aberto, golpe move dinheiro real. |
| S6 | **Tudo o que decide acontece dentro do jogo.** Discord e WhatsApp ajudam a conversar, mas inscrição, votação e coordenação têm ferramenta própria. | Quem não está no grupo externo não fica de fora. |

## 1. Princípios do social

1. **Participação é compromisso declarado, não presença.** [H] Herdado do teste do ausente do estudo [além do idle](../01-pesquisa/03-alem-do-idle.md): orçamento de decisões, contribuição pelo que se deixou pronto e perda limitada.
2. **Ninguém faz tudo, mas ninguém precisa de guilda para jogar.** [H] Encomendas da cidade, guarnições abertas e mentoria cobrem o jogador solo. A guilda acrescenta convivência e identidade, não poder.
3. **O social drena.** [H] Sede, Encomendas, Obras e rankings consomem bens produzidos por jogadores (pilar 2). Cada sistema social é também um freguês dos ofícios.
4. **Status vem de construir, defender e ensinar.** [H] Nunca de ter ou de vender.
5. **Poder político pequeno e visível.** [H] O Conselho decide pouco, em público, dentro de faixas, e o estúdio responde por escrito ao que ela pede.
6. **Confiança é produto (pilar 5).** Regras de conduta, moderação e apelação são públicas; o estúdio nunca pede senha, e todo ato de moderação fica registrado.

## 2. Guildas

### 2.1 Estrutura e tamanho

| Item | Valor [H] | Referência e motivo |
|---|---|---|
| Fundação | 5 fundadores com conta de 7 dias ou mais, mais uma taxa de fundação em ouro destruída (valor no módulo 07) | Barra a "guilda de um" usada para contornar tetos (ver Conselho, §6.8). |
| Vagas | 20 no início; até 40 com a Sede (§2.4) | Idle Clans usa 20 ([C02](../01-pesquisa/fichas/C02-idle-clans.md)), Tap Titans 2 usa 50 ([B06](../01-pesquisa/fichas/B06-tap-titans-2.md)), Travian 60 ([D05](../01-pesquisa/fichas/D05-travian.md)). Com 12 ofícios e 2 mestres por pessoa, 20 pessoas cobrem todos os ofícios com folga; 40 é o teto para a guilda não virar bloco político. |
| Guildas por pessoa | 1 | Um personagem por conta (bíblia, §5). |
| Alianças entre guildas | Não no lançamento | Travian mostra que alianças grandes viram coalizões e se dividem em "alas" para contornar tetos ([03, §16](../01-pesquisa/03-alem-do-idle.md)). |

### 2.2 Cargos e permissões

Os cargos são pacotes de permissões, como os substitutos do Travian, que têm permissões definidas pelo dono ([D05](../01-pesquisa/fichas/D05-travian.md)). Os nomes têm sabor de irmandade de ofício; na versão em inglês: *Steward, Treasurer, Captain, Scribe, Member, Newcomer*.

| Cargo | Vagas [H] | Pode | Não pode |
|---|---|---|---|
| **Provedor(a)** | 1 | Tudo: cargos, expulsão, Sede, dissolução | Retirar do cofre acima do limite sem segundo aprovador |
| **Tesoureiro(a)** | até 2 | Aprovar retiradas grandes do cofre, pagar a manutenção da Sede | Expulsar, mudar cargos |
| **Capitão(ã)** | até 3 | Montar guarnições do Cerco, aceitar Encomendas de guilda | Mexer no cofre além do próprio limite |
| **Escrivão(ã)** | até 2 | Convidar, recrutar, editar o mural, publicar avisos | Expulsar membros com mais de 30 dias |
| **Membro** | — | Contribuir, inscrever-se, retirar do cofre até o limite diário | — |
| **Calouro(a)** | primeiros 7 dias | Contribuir e, a partir de 48 h de casa, inscrever-se nas Encomendas geradas depois da entrada | Retirar do cofre, votar na eleição interna |

- **Eleição interna:** os membros podem trocar o Provedor com 2/3 dos votos dos membros ativos (login em 7 dos últimos 14 dias). [H] Protege contra o líder que trava a guilda.
- **Sucessão automática:** se o Provedor passar 14 dias sem entrar, o cargo vai para o oficial mais antigo; sem oficiais, para o membro mais antigo. [H] O Egg Inc. mostrou o custo de grupos sem ferramenta contra inativos ([A09](../01-pesquisa/fichas/A09-egg-inc.md)), e o guia do Idle Clans manda trocar de clã quando ele morre ([C02](../01-pesquisa/fichas/C02-idle-clans.md)).
- **Modo ausente:** qualquer membro pode marcar "fora até tal data". Fica fora das cotas de Encomenda e das guarnições, sem custo e sem perder cargo (até 30 dias para cargos). [H] O S&F cobrou 75 cogumelos por dia pelo modo férias e enfrentou revolta ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)); aqui ele é grátis.

### 2.3 Entrada, saída e carências

| Regra | Valor [H] | Referência |
|---|---|---|
| Espera para entrar em outra guilda depois de sair | 24 h | IdleMMO usa 24 h ([03, §13](../01-pesquisa/03-alem-do-idle.md)) |
| Encomenda de guilda | Só as geradas depois da entrada; inscrição a partir de 48 h de casa | No IdleMMO, só contribui quem estava na guilda quando o contrato foi gerado ([03, §13](../01-pesquisa/03-alem-do-idle.md)) |
| Cofre | Calouro não retira nos primeiros 7 dias; promovido a Tesoureiro só aprova retiradas 72 h depois | Golpe do cofre no Idle Clans dá banimento permanente ([C02](../01-pesquisa/fichas/C02-idle-clans.md)) |
| Teto de conselheiros por guilda (Conselho) | Conta a guilda em que o candidato estava 30 dias antes do fim das candidaturas | New World criou carência de 72 h contra companhias de fachada ([03, §1](../01-pesquisa/03-alem-do-idle.md)) |

### 2.4 Sede na Cidade

Toda guilda ocupa um lote num bairro da Cidade. A Sede aparece no mapa da cidade, cresce em cinco níveis com nomes da arquitetura medieval (casa-forte, torreão, fortaleza) e é onde a guilda guarda o cofre, mostra relíquias e recebe visitas nas festas (módulo 10).

| Nível | Nome | Vagas | Libera [H] | Custo para chegar (h-f) [H] |
|---|---|---|---|---|
| 1 | Rancho | 20 | Mural, cofre de 20 espaços, Encomendas de guilda tier 1, 1 guarnição | taxa de fundação |
| 2 | Casa de taipa | 25 | Cofre de 40, estandarte personalizável, Encomendas tier 2 | 150 |
| 3 | Sobrado | 30 | Salão (receber visitas e hospedar eventos da guilda), 2 guarnições, Encomendas tier 3 | 450 |
| 4 | Casarão | 35 | Cofre de 80, oficina coletiva (fila de Encomenda com insumos do cofre), Encomendas tier 4 | 1.200 |
| 5 | Solar | 40 | Fachada monumental, museu da guilda (relíquias da Fronteira), 3 guarnições, Encomendas tier 5 | 3.000 |

- **O custo é uma cesta de materiais de pelo menos 6 ofícios diferentes** (madeira, tábuas, lingotes, tecidos, couro, comida para o mutirão), consumida na obra. [H] Reforça a interdependência e vira demanda para os produtores.
- **Exemplo calculado:** uma guilda de 25 membros produz cerca de 25 × 118 = 2.950 h-f por semana. Se doar 6% disso à Sede (177 h-f por semana), chega ao Sobrado em 450 / 177 ≈ 2,5 semanas e ao Solar, depois do Casarão, em cerca de (1.200 + 3.000) / 177 ≈ 24 semanas, quase duas Eras. [H]
- **Manutenção semanal:** `manutenção(n) = 0,5% × n × produção semanal estimada dos membros`, paga em materiais. Exemplo: Sobrado (n = 3) com 30 membros: 0,015 × 30 × 118 ≈ **53 h-f por semana**. [H]
- **Sem pagar, a Sede entra "em reparo":** após 2 semanas sem manutenção, pausam o salão, a oficina coletiva e as Encomendas de tier alto. **O nível nunca cai e nada é destruído** (pilar 4: o ausente nunca perde).
- **Localização é cosmética:** o lote é escolhido na fundação, dentro dos bairros abertos pelas Obras; o Renome da Era decide só a ordem de escolha quando um bairro novo abre. [H] Lote escasso com bônus viraria território, a mecânica de pior relação entre benefício e risco do estudo ([03, ranking](../01-pesquisa/03-alem-do-idle.md)).

### 2.5 Renome: a progressão da guilda

- **O que é:** pontos de guilda ganhos com Encomendas de guilda (pela nota), Cercos (pelo boletim da guarnição), Obras (pela entrega dos membros) e mentoria (afilhados que ficam). [H]
- **Para que serve:** desbloquear níveis da Sede (junto com os materiais), o ranking de guildas da Era e a ordem de escolha de lote.
- **Duas contas:** o Renome total nunca zera; o **Renome da Era** zera a cada Era e alimenta o ranking (§5).
- **[H] Por que não há bônus de produção:** o Idle Clans dá de +5% a +30% de XP pelas casas do clã ([C02](../01-pesquisa/fichas/C02-idle-clans.md)). Isso funciona como motivo para progredir, mas torna a guilda obrigatória e cria distância entre guildas grandes e pequenas. Aqui, o motivo para progredir é lugar, identidade e Encomendas maiores.

### 2.6 Cofre da guilda

| Regra | Valor [H] |
|---|---|
| Itens | Sim, nos espaços da Sede |
| Ouro | Sim. Depositar é grátis; **retirar para alguém que não depositou paga a taxa da Troca (3%, destruída)** |
| Limite diário de retirada | Membro: 5 itens ou o equivalente a 10 h-f; Capitão: 20 h-f; acima disso, 2 aprovadores (Provedor e Tesoureiro) |
| Registro | Toda entrada e saída aparece no livro do cofre, visível a todos os membros |

[H] A taxa na retirada fecha a rota de fuga do dreno. O estudo de mercados mostra que o volume foge para onde a taxa não pega, como os contratos do EVE e o pergaminho do IdleMMO ([04b, §3.1](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). A reconciliar com o módulo 07.

### 2.7 Encomendas de guilda

A Encomenda é o contrato coletivo com prazo e nota individual (bíblia, §4). A de guilda segue o mesmo modelo da Encomenda da cidade (§4.1), com duas diferenças: rende Renome e é privada da guilda.

**Ciclo [H]:** uma Encomenda de guilda por semana, gerada na segunda-feira, com prazo de 7 dias. O tier depende do nível da Sede. O pedido mistura bens de 3 a 5 ofícios.

**Inscrição e ritmo.** Nas primeiras 24 h, cada membro aceita a Encomenda escolhendo um ritmo:

| Ritmo | Cota (fator) | Recompensa (fator) |
|---|---|---|
| Leve | 0,5 | 0,5 |
| Normal | 1,0 | 1,0 |
| Forte | 1,5 | 1,5 |

**A meta é a soma das cotas dos inscritos:** `meta = Σ fator_cota × C_base`, com `C_base = 10 h-f` [H] (cerca de 8% da produção semanal típica). Quem não se inscreveu não entra na conta.

**Nota individual:** `g = entregue / (fator_cota × C_base)`.

| Faixa | Condição | Fator |
|---|---|---|
| Ouro | g ≥ 1,0 | 1,0 |
| Prata | g ≥ 0,6 | 0,8 |
| Bronze | g ≥ 0,3 | 0,6 |
| Presença | g > 0 | 0,3 |

**Resultado do grupo:** meta batida = 1,0; de 70% a 99% = 0,7; abaixo de 70% = 0,4 (piso, nunca zero). [H] O GW2 paga 75%, 85% ou 100% por medalha e metade num evento fracassado ([03, §3](../01-pesquisa/03-alem-do-idle.md)).

**Recompensa individual:** `R = R_base × fator_ritmo × fator_faixa × fator_grupo`.
- Exemplo: Maria, ritmo Normal, entrega 7 de 10 h-f → g = 0,7 → Prata (0,8). O grupo bateu a meta → R = R_base × 1,0 × 0,8 × 1,0 = **0,8 R_base**.
- João, ritmo Leve, entrega 5 de 5 h-f → Ouro → R = R_base × 0,5 × 1,0 × 1,0 = **0,5 R_base**. Ele contribuiu pouco, mas cumpriu o que prometeu, e a nota diz isso.

**Proteções do ausente [H]:**
- **Contribuição automática:** o membro pode destinar uma fração da Fila à Encomenda; o que a Fila produz do item pedido vai direto, inclusive offline.
- **Desistência sem custo** até 48 h antes do prazo: a cota sai da meta.
- **Saída automática:** quem ficar 72 h sem entrar durante a Encomenda é retirado, a cota sai da meta, e o que já entregou conta para ele.
- **Sobra conta para o grupo:** entregas acima da própria cota contam para a meta até 150% da cota.

**O que se entrega é consumido** (dreno). R paga Mérito, Renome, XP pessoal e uma remuneração em ouro **limitada pelo orçamento de emissão das Encomendas**, a definir no módulo 07. Bens do Baú e itens comprados no mercado podem ser entregues, mas o Mérito e os rankings contam só a produção própria (§5.1).

| Quatro perguntas | Encomendas de guilda |
|---|---|
| Referência | Co-ops com prazo e nota do Egg Inc. ([A09](../01-pesquisa/fichas/A09-egg-inc.md)); trava de entrada do IdleMMO; medalhas do GW2 ([03](../01-pesquisa/03-alem-do-idle.md)). Diferença: a meta nasce do compromisso declarado, não do tamanho da guilda. |
| Problema | O carona e o ausente que derruba o grupo. |
| Comportamento | Prometer o que se consegue cumprir, voltar uma vez por dia ou deixar a Fila contribuindo, e conversar sobre quem faz o quê. |
| Risco | Todos escolherem Leve para garantir Ouro (sem ganho, porque a recompensa escala com o ritmo); pressão social para escolher Forte (mitigação: o ritmo de cada um só aparece para os oficiais, e a guilda vê a nota agregada). |

### 2.8 Guildas inativas, fusão e dissolução

- **Guilda dormente:** sem nenhum membro ativo por 60 dias, a guilda é arquivada e o lote volta ao bairro. O Renome total e as relíquias ficam guardados; qualquer ex-membro pode reativá-la em até 1 ano. [H]
- **Fusão:** duas guildas podem se fundir por voto de 2/3 em cada uma. O Renome total soma, o nível da Sede fica o maior dos dois, e a história das duas (estandartes, títulos) fica no museu. [H] No New World, as fusões de servidor apagaram as conquistas políticas ([G04](../01-pesquisa/fichas/G04-new-world.md)); aqui, a história nunca se apaga.
- **Dissolução:** o cofre é devolvido a quem depositou, na proporção do livro do cofre, sem taxa. [H]

## 3. Chat e comunicação

### 3.1 Canais

| Canal | Quem fala | Idioma | Regras de desenho [H] |
|---|---|---|---|
| **Praça (PT)** e **Praça (EN)** | Contas com 48 h ou mais | Um idioma por canal | Modo lento de 10 s; sem links externos; sem anúncio de venda |
| **Feira** | Todos | Os dois | Só anúncios estruturados, gerados do próprio balcão (item, qualidade, preço, link interno). Sem texto livre |
| **Guilda** | Membros | Livre | Regras gerais; o Provedor pode silenciar no canal da guilda |
| **Turma** e **Guarnição** | Participantes de uma Encomenda ou de um Cerco | Livre | Canal temporário, fecha com a atividade |
| **Roda de Novatos** | Novatos (até 30 dias), Padrinhos e retornantes | Um por idioma | O Padrinho pode silenciar por 30 min, com registro público (§4.3) |
| **Tribuna do Conselho** | Conselheiros falam; a população pergunta em fila | Os dois, com tradução | Perguntas sobem por voto; modo lento |
| **Fronteira** | Desbravadores da temporada | Um por idioma | Temporário |
| **Privado** | Amigos e guilda; estranhos só se a pessoa permitir | — | Mensagens de estranhos vêm desligadas para contas com menos de 7 dias |
| **Diário da Cidade** | Só o sistema e o estúdio | Os dois | Único canal com selo oficial; é por aqui que o estúdio fala (módulo 10) |

### 3.2 Idiomas: PT-BR e inglês

- **Dois canais públicos, um por idioma,** escolhidos pelo idioma do cliente e trocáveis a qualquer momento; dá para acompanhar os dois. [H] Misturar idiomas num canal só tende a calar a minoria.
- **Tradução automática opcional**, com o botão "traduzir esta mensagem" em todo canal e tradução revisada por humano para os Atos do Conselho e as notas do estúdio. [F] O Egg Inc. pôs tradução com IA em beta na versão 1.37.2, em ago/2026 ([A09](../01-pesquisa/fichas/A09-egg-inc.md)). [H] Por ser opcional, o erro de tradução fica visível como tradução, e não como fala da pessoa.
- **Moderação nos dois idiomas:** filtros e moderadores em PT e EN; denúncias em inglês não podem esperar a fila em português (meta de tempo igual, §3.4).

### 3.3 Regras de conduta (resumo público)

1. Sem ofensa, ameaça, assédio, discriminação ou conteúdo sexual em canal público. O jogo é 18+, mas a Cidade não é uma boate.
2. Sem dados pessoais (próprios ou de outros) em canal público: nome real, telefone, CPF, endereço, chave Pix. O filtro bloqueia os padrões mais comuns e avisa no privado.
3. **Golpe é infração.** Enganar alguém dentro do jogo (Troca, cofre, promessa feita no chat) dá banimento. Especular, comprar barato e vender caro é jogo legítimo ([04b, §2.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)).
4. Sem apostas nem jogos de azar por ouro, itens ou Coins. [F] O Idle Clans proíbe apostas, inclusive em sites externos ([C02](../01-pesquisa/fichas/C02-idle-clans.md)). [H] Com o ouro valendo reais, um "dado por ouro" no chat se aproxima da contravenção de jogo de azar (LCP, art. 50, ver [05b](../01-pesquisa/05b-rmt-legal-brasil.md)). **Validar com advogado.**
5. Sem propaganda de RMT nos canais públicos. **O estúdio não proíbe nem intermedia o RMT informal** (decisão do checkpoint 1), mas não deixa que ele use a Praça como vitrine nem oferece ferramenta para ele (salvaguarda S4).
6. Sem política do mundo real (partidos, candidatos, campanhas) na Praça e no Conselho (§6.9).
7. Sem se passar por estúdio, moderador ou Padrinho.

### 3.4 Moderação

**Camadas [H]:**
1. **Desenho:** modo lento, carência de 48 h para falar na Praça, anúncios estruturados, links bloqueados, mensagens de estranhos desligadas para contas novas. É a camada mais barata e a que resolve mais.
2. **Automática:** filtro de palavras em PT e EN, com variações de grafia; detecção de padrões de dados pessoais; classificador de toxicidade que só **marca** a mensagem para revisão. Silêncio automático de no máximo 1 h; sanção maior exige humano.
3. **Comunidade:** denúncia em 1 clique, que anexa as 20 mensagens anteriores como contexto; bloquear e silenciar pessoal; Padrinhos silenciam por 30 min na Roda de Novatos; o Provedor silencia no canal da guilda.
4. **Equipe do estúdio**, com fila priorizada:

| Prioridade | Exemplos | Meta de tempo até a ação [H] |
|---|---|---|
| 1 | Ameaça, exposição de dados pessoais, conteúdo sexual não consentido, racismo, notificação de conteúdo ilícito | < 4 h |
| 2 | Golpe, falso staff, phishing | < 24 h |
| 3 | Ofensa, spam, flood | < 72 h |

**Penalidades em escada [H]:** aviso → silêncio de 1 h → 24 h → 7 dias → chat suspenso por 30 dias → banimento da conta. Golpe comprovado, ameaça, exposição de dados e crime vão direto ao banimento, com preservação dos registros.

**Apelação:** uma vez por sanção, revisada por outra pessoa da equipe, com resposta escrita. A política de moderação é pública, e as estatísticas (sanções, apelações, revertidas) saem no relatório mensal (módulo 10). [F] No OSRS, só 0,36% dos banimentos de 2024 caíram na apelação ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)). [F] Banimentos opacos estão entre as queixas mais consistentes do OGame e do Travian ([D05](../01-pesquisa/fichas/D05-travian.md); [síntese, insight 26](../01-pesquisa/00-sintese.md)).

**Sem moderadores voluntários com poder de punir.** [H] Com dinheiro real na economia, quem pode banir pode ser subornado. Os voluntários (Padrinhos, Provedores) só silenciam por pouco tempo e sempre com registro.

**Base legal (validar com advogado):**
- **Marco Civil da Internet** ([Lei 12.965/2014](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm)): o art. 15 obriga o provedor de aplicações a guardar os registros de acesso por 6 meses. [F]
- **Responsabilidade por conteúdo de terceiros:** em 26/6/2025, o STF declarou o art. 19 parcialmente inconstitucional (Temas 987 e 533). Como regra geral, o provedor passa a responder depois de **notificação extrajudicial** por conteúdo ilícito; para crimes contra a honra, segue valendo a exigência de ordem judicial ([Mattos Filho](https://www.mattosfilho.com.br/unico/responsabilizacao-provedores-internet/); [Olhar Digital, 11/6/2026, sobre os embargos](https://olhardigital.com.br/2026/06/11/pro/stf-saiba-quais-sao-as-medidas-aprovadas-em-relacao-as-big-techs/)). [F] [H] Consequência de desenho: um canal de notificação extrajudicial com protocolo, prazo e registro, e a prioridade 1 da fila acima.
- **Crimes que aparecem em chat:** injúria racial tipificada como racismo ([Lei 14.532/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14532.htm)) e perseguição, art. 147-A do Código Penal, incluído pela [Lei 14.132/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14132.htm). [F]
- **LGPD:** guardar o mínimo de chat pelo menor tempo que a moderação e a lei pedem. Proposta: 90 dias para mensagens, prazo legal para registros de acesso, mais o que estiver sob denúncia. [H]

### 3.5 Segurança: golpes num jogo 18+ com RMT aberto

[H] O RMT informal fica em aberto, e o estúdio não arbitra acordos feitos fora do jogo (S4). Por isso, a defesa precisa estar no desenho: o jogo não consegue devolver um Pix, mas consegue tornar o golpe dentro do jogo difícil, visível e punido.

| Golpe | Como acontece | Defesa de desenho [H] | Consequência |
|---|---|---|---|
| **Troca trocada** | Troca-se o item no último segundo | Confirmação dupla; qualquer mudança zera as confirmações; a tela final mostra o valor de referência (IPC) e avisa quando a troca foge 20% dele. [F] O Idle Clans pede confirmação a ±20% da média de 24 h ([C02](../01-pesquisa/fichas/C02-idle-clans.md)) | Banimento; devolução pelo livro-razão |
| **"Manda o Pix que eu mando o ouro"** | Pagamento fora do jogo, entrega que não vem | Troca de mão única mostra o aviso "esta troca não tem contrapartida; o estúdio não recupera acordos feitos fora do jogo"; página pública "RMT informal: o que o estúdio não faz"; risco de troca no livro-razão (modelo do IdleMMO, [04b, §3.8](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) | O estúdio não devolve pagamento externo. Se houver prova no chat do jogo (a promessa), o golpista é banido |
| **Phishing e site falso** | Link de "Coins grátis", página de login falsa | Links externos bloqueados nos canais públicos; no privado, aviso com o domínio em destaque; login só no domínio oficial; 2FA; alerta de login novo; carência para mover valor recebido logo depois de um login novo ([04b, §4.2 e "Como isso pode dar errado"](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)) | Banimento; recuperação da conta pelo suporte |
| **Falso staff** | Nome como "Suporte" ou "ADM" pede senha ou código | Nomes reservados; selo oficial só no Diário; aviso fixo: "o estúdio nunca pede senha, código ou Pix" | Banimento |
| **Golpe do cofre** | Oficial esvazia o cofre e sai | Limites diários, segundo aprovador, carência de 72 h depois da promoção e livro do cofre aberto (§2.6) | Banimento; devolução pelo livro |
| **Pirâmide e "dobro seu ouro"** | Promessa de retorno em troca de depósito | Regra de conduta; o filtro marca padrões de promessa de retorno para revisão | Banimento |
| **Apostas** | "Dado", rifa, roleta por ouro no chat | Proibido (§3.3, regra 4) | Banimento |
| **Conta vendida por fora** | Venda informal seguida de recuperação da conta | O Bazar de Personagens é a rota oficial e segura (decisão do checkpoint 1); aviso no perfil | A reconciliar com o módulo 13 |
| **Romance e extorsão** | Aproximação no privado para tirar valor ou imagens | Privado de estranhos opcional; bloquear em 1 clique; denúncia de prioridade 1; nenhum dado real visível no perfil | Banimento e preservação de registros |
| **Pagamento adiantado por serviço** | "Me paga que eu fabrico" | Pedidos de fabricação com garantia do sistema (o pagamento fica retido até a entrega), a reconciliar com os módulos 06 e 07 | — |

| Quatro perguntas | Segurança por desenho |
|---|---|
| Referência | EVE e Torn tratam golpe como conteúdo ([04b, §2.3](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); nós nos diferenciamos deles. Seguimos a confirmação da troca do Idle Clans e o risco de troca do IdleMMO, e aprendemos com o leilão do WoW que virou lavanderia de contas invadidas em 2013 ([04b](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). |
| Problema | Golpes chegam ao suporte sem solução quando o estúdio não intermedia o RMT ([síntese, checkpoint 1](../01-pesquisa/00-sintese.md)). |
| Comportamento | Negociar dentro do jogo, onde há proteção; desconfiar do que vem de fora. |
| Risco | Atrito para quem dá presentes legítimos (o aviso aparece, mas não impede); falso positivo do filtro; jogadores culpando o estúdio por golpes externos (mitigação: a página pública e o aviso na própria Troca). |

### 3.6 Privacidade

- O perfil público mostra o personagem, nunca dados da verificação de idade. [H]
- Bloquear alguém esconde mensagens, convites, pedidos de Troca e votos de "elogio" dessa pessoa.
- O estúdio nunca exibe a localização, o fuso ou o horário de login de um jogador a outro sem opção explícita. [H] O horário de login é a matéria-prima de perseguição.

## 4. Cooperação

### 4.1 Encomendas da cidade

O **Quadro da Cidade** publica, toda segunda-feira às 9h (horário de Brasília), **4 Encomendas da cidade** com prazo de 5 dias [H], dentro da faixa de 3 a 7 dias da bíblia. Cada uma tem um "cliente" na ficção (abastecer a enfermaria, pôr o barco de linha na água, reforçar a ponte) e pede bens de 2 a 4 ofícios.

- **Três formas de entrar:** sozinho (turma de 1, com a meta igual à própria cota); em **turma automática**, formada pelo sistema por ritmo e idioma, com até 8 pessoas; ou em turma de amigos, por convite, com até 8 pessoas.
- **Mesma matemática da Encomenda de guilda** (§2.7), com `C_base = 8 h-f` [H]. A turma automática junta ritmos iguais, para não pôr quem joga 12 horas com quem joga 20 minutos ([03, §13](../01-pesquisa/03-alem-do-idle.md)).
- **Sem expulsão manual.** Só a saída automática por 72 h sem entrar. [H] A expulsão vira assédio; como a meta só conta quem está ativo, ela não é necessária.
- **Orçamento de atenção:** cada pessoa entra em até 2 Encomendas da cidade e 1 de guilda por semana. [H] O estudo [além do idle](../01-pesquisa/03-alem-do-idle.md) alerta para o "jogo de checklist", em que cada sistema traz o seu timer.
- **Mesma recompensa por h-f na cidade e na guilda.** A guilda acrescenta só o Renome. [H] É o que torna viável a rota solo que o conceito pede ([02-conceito, §7](../02-conceito.md)).
- **Encomenda prioritária:** o Conselho pode marcar uma das quatro como prioritária na semana (+20% de Mérito, §6.5).

### 4.2 Inscrição nos Cercos

O Cerco é semanal, com inscrição até 24 h antes (bíblia, §6.1). A mecânica de combate é do módulo 04; aqui fica a camada social.

**Três formas de participar [H]:**

| Forma | Como | Efeito no Cerco e Mérito (a reconciliar com o 04) |
|---|---|---|
| **Guarnição da guilda** | O Capitão monta, até 10 pessoas por guarnição; o número de guarnições depende da Sede | 100% |
| **Guarnição aberta** | O sistema monta, misturando guildas e solos por vocação e posto | 100% |
| **Reserva** | Quem esteve ativo na semana e não se inscreveu entra sozinho como reserva | 50% |
| — | Inativo há 14 dias ou mais | Fica de fora, sem penalidade; o reforço NPC cobre o buraco |

[F] O modelo vem do S&F: na defesa da guerra de guilda, quem se inscreveu luta com 100% da vida, quem não se inscreveu com 50%, e o inativo há 14 dias ou mais com 10% ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)). [H] Aqui o inativo não entra, para que a guarnição nunca "carregue" um ausente.

**Postos:** os da vocação (muralha, ameias, torre arcana, enfermaria, vigias) e **postos de ofício**: oficina de campanha (reparo durante o Cerco, consumindo material), cozinha de campanha (refeições) e botica (poções). [H] Assim o artesão que não luta também defende a cidade, e o Cerco vira demanda para os ofícios.

**O Capitão monta a guarnição até o fechamento.** Se não montar, o sistema distribui os inscritos pelos postos com regras padrão. [H] Um líder ausente nunca derruba a guarnição.

| Quatro perguntas | Inscrição nos Cercos |
|---|---|
| Referência | S&F (inscrição e contribuição proporcional) ([D02](../01-pesquisa/fichas/D02-shakes-and-fidget.md)); raids do Tap Titans 2 ([B06](../01-pesquisa/fichas/B06-tap-titans-2.md)); inscrição antecipada nos chefes do IdleMMO ([03, §3](../01-pesquisa/03-alem-do-idle.md)). |
| Problema | Defesa coletiva sem plantão e sem castigo para o ausente. |
| Comportamento | Entrar uma vez por semana para escolher o posto; o artesão abastece a defesa. |
| Risco | Guarnição aberta virar a "turma do resto" (mitigação: ela pontua igual e aparece no boletim com nome próprio, definido por sorteio de nomes de bairro). |

### 4.3 Mentoria: Padrinhos e afilhados

"Apadrinhar" um novato é prática conhecida de quem joga no Brasil. O sistema formaliza isso.

**Quem pode ser Padrinho ou Madrinha [H]:** conta com 60 dias ou mais; ofício mestre ou vocação no nível 50 ou acima; nenhuma sanção de chat nos últimos 90 dias; aceitar o código de conduta e passar por um teste curto sobre regras e golpes.

- [F] Referência: no FFXIV, o mentor de combate precisa de 1.000 masmorras, raids ou trials e de 1.500 elogios de outros jogadores, e o mentor de ofícios precisa de 300 colecionáveis coletados, 100 fabricados e ofícios no nível 100 ([Console Games Wiki](https://ffxiv.consolegameswiki.com/wiki/Mentor_System_and_Novice_Network)). [H] Pedimos menos tempo, porque um idle não tem "masmorras por hora", e mais conhecimento de regras, porque aqui o novato é o alvo preferido de golpe.

**Como funciona [H]:**
- **Pareamento opt-in** por idioma, horário de jogo e interesse (ofício ou vocação). O afilhado pode trocar de Padrinho uma vez.
- **Até 3 afilhados ao mesmo tempo.** O vínculo dura 30 dias ou até o afilhado levar um ofício ao teto de aprendiz (nível 30).
- **O enxoval de boas-vindas é dado pelo sistema**, com o Padrinho como "entregador". O valor nunca sai do bolso do Padrinho, e transferências dele para o afilhado seguem as regras de conta nova do módulo 13. [H] Assim o Padrinho não vira rota de entrega de ouro vendido.
- **Recompensa do Padrinho por marcos do afilhado:** volta no D7, 1ª Encomenda, 1ª entrega numa Obra, ativo no D30. Paga Mérito e cosméticos ("fita de Padrinho"), com teto de 12 afilhados recompensados por Era. Cada marco exige ação real do afilhado, que é um adulto verificado diferente.
- **Roda de Novatos:** canal por idioma com novatos, Padrinhos e retornantes (inativos há 45 dias ou mais). O Padrinho pode silenciar alguém por 30 min, com o nome dele, o do silenciado e o motivo visíveis a todos, e o estúdio revisa cada caso. [F] No FFXIV, a Novice Network aceita até 512 pessoas (100 mentores e 412 novatos); o mentor expulsa por spam ou assédio, o nome de quem expulsou e o motivo aparecem para todos, o suporte é avisado e o mentor que abusa perde o status ([Console Games Wiki](https://ffxiv.consolegameswiki.com/wiki/Mentor_System_and_Novice_Network)).

| Quatro perguntas | Mentoria |
|---|---|
| Referência | Novice Network do FFXIV ([Console Games Wiki](https://ffxiv.consolegameswiki.com/wiki/Mentor_System_and_Novice_Network)); o costume antigo de apadrinhar iniciantes. |
| Problema | O novato perdido numa economia de veteranos, e o golpe que mira quem não conhece as regras. |
| Comportamento | O veterano ensina e ganha status por isso; o novato tem a quem perguntar. |
| Risco | Padrinho que recruta para golpe ou usa o afilhado como mula (mitigação: o enxoval é do sistema, há limites de transferência, revogação por denúncia e o marco D30 só paga se o afilhado não tiver denunciado o Padrinho). |

### 4.4 Mutirão nas Obras (a camada social)

As Obras são do módulo 10 (calendário e tamanho) e do 07 (economia). Aqui ficam as regras sociais:
- **Placa da Obra:** toda pessoa que entregou pelo menos 1 h-f de produção própria tem o nome gravado na placa da Obra concluída, por bairro e por guilda. [H] Custa pouco e cria o "nós fizemos" das metas comunitárias, a mecânica mais bem avaliada do estudo ([03, ranking](../01-pesquisa/03-alem-do-idle.md)).
- **Entrega de guilda e de turma:** a guilda pode entregar em nome do grupo a partir do cofre, e a entrega conta para o Renome e para quem depositou os itens. [H]

## 5. Competição

### 5.1 A regra de ouro: só sobe quem entrega à cidade

Os pontos de ranking vêm de quatro fontes [H]:
1. **Bens entregues a Obras e Encomendas**, avaliados pelo **valor de referência** (a mediana de 7 dias usada no IPC), nunca pelo preço do momento. Inflar um preço no mercado não aumenta os pontos.
2. **Defesa nos Cercos**, pelo boletim de cada Cerco (módulo 04).
3. **Qualidade registrada:** obras-primas criadas e registradas no Livro de Obras-Primas (§5.2).
4. **Desbravamento na Fronteira** (módulo 10).

**Só conta a produção própria.** O livro-razão sabe a origem de cada lote: Fila ou obra-prima do próprio personagem (ou dos membros, no ranking de guilda) contra item comprado. Item comprado pode ser entregue e ajuda a Obra, mas vale **0 ponto de ranking e 25% do Mérito** [H]. A reconciliar com o módulo 07 e com a arquitetura (lotes com origem, Fase 4).

[H] **Por que isso importa:** como subir exige destruir bens próprios, o ranking não se lava e ainda funciona como dreno. E como item comprado não pontua, o Coin convertido em ouro não compra posição.

### 5.2 Os rankings

| Ranking | O que mede | Período | Divisões | Recompensa [H] | Por que não se lava |
|---|---|---|---|---|---|
| **Por ofício** (12) | Pontos de ofício: entregas de produção própria + obras-primas registradas | Era | Um por ofício | Título "Mestre ___ da Era"; aparência de ferramenta | Só sobe destruindo o que produziu |
| **Livro de Obras-Primas** | A maior qualidade alcançada por receita; registra o primeiro e o melhor | Permanente, com edição por Era | Por receita | Assinatura exposta no museu da Cidade | A qualidade nasce no ato de criar (módulo 06) |
| **Por guilda** | Renome da Era, em total e por membro | Era | Por porte: até 20, de 21 a 30, de 31 a 40 membros | Cores de estandarte, fachada da Sede | O Renome vem de entregas destruídas e defesa |
| **Cidadania** | Mérito da Era | Era | Faixas por percentil | Título "Cidadão(ã) de Pedraforte" (com o nome da Cidade) | Mérito é preso à conta e nasce de contribuição |
| **Por Cerco** | Contribuição no boletim de cada Cerco | Semana | Por posto e por guarnição | Medalha do Cerco (cosmético) | Defender não se compra; zera toda semana |
| **Por contribuição numa Obra** | Entrega de produção própria na Obra | Por Obra | Faixas por percentil | Destaque na placa | Igual ao ofício |
| **Fronteira** | Marcos e descobertas | Fronteira | Percentil; frentes por porte | Títulos (módulo 10) | Marcos são presos à conta e à temporada |

- **Placar de maestria:** níveis e maestria ficam visíveis no perfil e num placar permanente por ofício, **sem recompensa**. [H] Quem gosta de *hiscore* tem onde olhar, e o veterano não tranca prêmios.
- **Divisões por porte nas guildas.** [F] O Black Desert divide as guerras de nós em tiers com teto de participantes ([03, §1](../01-pesquisa/03-alem-do-idle.md)). [H] A guilda de 15 disputa com guildas de 15, e o ranking por membro impede que tamanho seja a única forma de ganhar.

### 5.3 O que nunca terá ranking

| Proibido | Por quê |
|---|---|
| Volume de vendas, número de trocas, faturamento | [F] Quando a plataforma LooksRare pagava recompensas proporcionais ao volume negociado, cerca de 87% do volume foi classificado como *wash trading* ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)). [H] Ranking por volume é pagar para lavar. |
| Lucro, patrimônio, ouro em conta | [H] Premia acumular, não fazer circular. Mostra quem é rico, o que atrai golpe e assédio, e cria demanda por ouro que não existiria, o mesmo mecanismo que a Blizzard citou para proibir o GDKP ([síntese, insight 22](../01-pesquisa/00-sintese.md)). |
| Gasto em Coins | [H] Seria um placar de baleias; contraria o pilar 5. |
| Maior preço de venda | [H] Convida a negociar consigo mesmo por meio de amigos. |

### 5.4 Recompensas e revisão do topo

- **Por percentil e por patamar, nunca só pelo top 10:** faixas de 1%, 5%, 10%, 25% e 50%. [F] As Leagues do OSRS dão troféus do top 60% ao top 1% ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)).
- **Só títulos, cosméticos e lugar na história** (placas, museu, Diário da Cidade), presos à conta. **Nunca ouro, Coins ou item negociável.** [F] No SimpleMMO, o top 3 da arena ganha diamantes, a moeda paga ([03, §5](../01-pesquisa/03-alem-do-idle.md)); [H] com RMT aberto, prêmio conversível em dinheiro financia *boosting*, alts e bots.
- **Revisão do topo:** o top 1% de cada ranking da Era passa por revisão antifraude antes da entrega dos títulos. [F] A Blizzard passou a revisar o top 1% do Mythic+ em set/2026 ([03, §2](../01-pesquisa/03-alem-do-idle.md)).

## 6. O Conselho

### 6.1 O que ela é, e o que não é

O Conselho é o órgão eleito da Cidade: **7 conselheiros**, mandato de 2 meses, **poder executivo pequeno dentro de faixas** da constituição econômica e **voz formal** junto ao estúdio.

| Referência | O que tomamos | Do que nos diferenciamos |
|---|---|---|
| CSM do EVE: 10 eleitos por voto único transferível, mandato de 12 meses, sem poder formal ([03, §16](../01-pesquisa/03-alem-do-idle.md)) | O voto proporcional e o canal formal com o estúdio | Aqui o Conselho decide algumas coisas de verdade, porque só voz não mobiliza eleitor: a participação no CSM ficou entre 8,6% e 12,7% (mesma fonte) |
| Carta de enquetes do OSRS: o que nunca vai a voto ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)) | A lista fechada do que o Conselho não toca (§6.6) | — |
| Prefeitos eleitos do Star Wars Galaxies, que autorizavam construções ([03, §16](../01-pesquisa/03-alem-do-idle.md)) | A escolha das Obras | — |
| *A Tale in the Desert*: um eleito por mês pode banir até 7 personagens, o que o próprio jogo chama de controverso ([03, §16](../01-pesquisa/03-alem-do-idle.md)) | — | **O Conselho nunca pune ninguém** |

### 6.2 Composição e método de eleição

- **Cédula ranqueada:** o eleitor ordena até 5 candidatos por preferência. [H]
- **Apuração por voto único transferível (STV)**, com a cota de Droop: `cota = ⌊votos válidos / (vagas + 1)⌋ + 1`. Quem atinge a cota é eleito; o excedente dele e os votos de quem sai da disputa passam para a próxima preferência de cada cédula.
- **Exemplo calculado:** 4.000 votos válidos e 7 vagas → cota = ⌊4.000 / 8⌋ + 1 = **501 votos**. Qualquer grupo com cerca de 12,5% dos votos elege um conselheiro. Para ter maioria (4 cadeiras), um bloco precisa de 4 × 501 = 2.004 votos, cerca de metade do eleitorado. [H]
- **Por que STV:** num voto por maioria simples para 7 vagas, um bloco organizado de 30% pode levar todas as cadeiras se os outros 70% se dividirem. Com STV, os 30% levam cerca de 2. O mesmo cálculo protege a minoria de língua inglesa: com 12,5% dos votos, ela tem um conselheiro. [H]
- **A interface esconde a matemática:** o eleitor só ordena nomes; a apuração é publicada rodada a rodada, com os totais e sem identificar ninguém.
- **Presidência:** o candidato com mais votos de primeira preferência preside, conduz a pauta e não tem voto extra. Empate numa votação = a proposta não passa e fica como está. [H]

### 6.3 Quem vota e quem se candidata

| Regra | Eleitor [H] | Candidato [H] |
|---|---|---|
| Identidade | **Uma pessoa verificada, um voto por Cidade** (o documento, não a conta) | Idem |
| Idade da conta | 14 dias ou mais | 60 dias ou mais |
| Atividade | Ter entrado em 7 dos últimos 28 dias | Idem |
| Conta comprada no Bazar de Personagens | Carência de 60 dias depois da transferência (cerca de um mandato) | Carência de 120 dias |
| Histórico | Sem suspensão ativa por fraude | Sem sanção moderada ou grave nos últimos 90 dias; não ter sido destituído nos últimos 2 mandatos |
| Candidatura | — | 25 apoios de eleitores aptos e um manifesto de até 1.500 caracteres (PT, EN ou os dois) |
| Reeleição | — | No máximo 2 mandatos seguidos; depois, 1 mandato de pausa |

- **Mérito não entra em nada disso** (bíblia: Mérito não pesa no voto). A exigência de atividade é igual para todos e não mede contribuição.
- A carência depois do Bazar de Personagens vem do [conceito](../02-conceito.md) (§7, captura do conselho).

### 6.4 Calendário eleitoral

**Mandato de 2 meses, contado em semanas: 9, 9 e 8 semanas em rodízio** (média de 8,67 semanas ≈ 2 meses). [H] Assim **a posse cai sempre numa semana em que uma Obra começa** (S1, S5 ou S9 de uma Era, ver módulo 10), e cada Conselho escolhe as duas Obras seguintes.

| Posse | Semana absoluta | Semana da Era | Duração do mandato |
|---|---|---|---|
| 1º Conselho | 9 | Era 1, S9 | 9 semanas |
| 2ª | 18 | Era 2, S5 | 9 semanas |
| 3ª | 27 | Era 3, S1 | 8 semanas |
| 4ª | 35 | Era 3, S9 | 9 semanas |
| 5ª | 44 | Era 4, S5 | 9 semanas |
| 6ª | 53 | Era 5, S1 | 8 semanas |

O ciclo de 3 mandatos dura 26 semanas (2 Eras) e se repete. [H] **Consequência boa:** nenhum Conselho governa uma Era inteira, porque o poder troca de mãos no meio dela.

**Fases de cada eleição (Sx = semana da posse) [H]:**

| Quando | Fase |
|---|---|
| Sx−2, segunda | Abrem as candidaturas (7 dias) |
| Sx−1, segunda a quinta | **Palanque:** cada eleitor sobe até 3 perguntas por candidato; as 5 mais votadas recebem resposta escrita em até 48 h |
| Sx−1, sexta 0h a domingo 23h59 | **Votação (72 h):** voto secreto, sem comprovante e **mutável até o fim: vale o último** |
| Sx, segunda | Apuração publicada e posse |

[F] O voto que pode ser trocado até o fim é a principal defesa da Estônia contra coação e compra de voto na votação pela internet: o eleitor pode votar de novo quantas vezes quiser, e só o último voto conta ([valimised.ee](https://www.valimised.ee/en/internet-voting/more-about-i-voting/introduction-i-voting)). [H] Quem compra um voto não tem como saber se ele foi trocado depois.

**Antes do 1º Conselho (Era 1, S1 a S8):** as Obras são escolhidas por **plebiscito** de todos os eleitores aptos. [H] Isso ensina a interface de votação e mostra que o voto pesa antes de a política começar.

### 6.5 Poderes, por faixa

| Poder | Faixa da constituição | Limite | Aviso | Se o Conselho não decidir |
|---|---|---|---|---|
| **Escolher a próxima Obra** | Entre 2 ou 3 opções publicadas pelo estúdio, com custo, bônus e região que abre | Todas as Obras que começam no mandato | Escolha até 7 dias antes do início | Vale a opção mais votada na **consulta popular**, que corre em paralelo e é aberta a todos; empate → a primeira opção |
| **Taxa da Feira** | De 4% a 8% (bíblia, §6.6), em passos de 0,5 p.p. | ±1 p.p. por mandato | Vale 7 dias depois do Ato | Fica como está |
| **Encomenda prioritária da semana** | 1 das 4 Encomendas da cidade da semana, com +20% de Mérito | A mesma categoria de ofício no máximo 2 semanas seguidas | Anúncio na segunda-feira | Rodízio automático |
| **Tema e data da Festa do mês** | Entre 2 ou 3 temas e janelas propostos pelo estúdio | Mensal | 14 dias | O estúdio escolhe |
| **Nomes de logradouros** | Praças, ruas e pontes abertas pelas Obras, de uma lista pré-aprovada ou de texto revisado pela moderação; nunca nome de pessoa real, marca ou político | Até 3 por mandato | — | Nome padrão |
| **Honrarias** | Conceder a "Medalha da Cidade" (cosmético) com justificativa pública; nunca a membro da própria guilda | Até 3 por mandato | — | — |
| **Moções ao estúdio** | Pedido formal sobre qualquer tema; **o estúdio responde em público em até 14 dias** | Até 3 por mandato | — | — |
| **Plebiscito** | Convocar consulta popular vinculante sobre qualquer item da própria faixa | 1 por mandato | 7 dias de votação | — |

- **O conselheiro declara em público** a guilda e os ofícios mestres. [H] O conflito de interesse fica visível, por exemplo um ferreiro votando pela Encomenda de Ferraria.
- **Teste na simulação:** a taxa da Feira precisa ser testada em 4% e em 8% no módulo 08, para confirmar que os dois extremos são saudáveis. Se não forem, a faixa muda antes do lançamento.

### 6.6 O que nunca vai ao Conselho

[H] Carta fechada, no espírito da carta de enquetes do OSRS, que deixa fora do voto os modos sazonais, os eventos, a integridade, o balanceamento e o preço da assinatura e dos Bonds ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)):
1. Punir, banir, silenciar ou investigar jogadores.
2. Mexer em contas, itens, ouro ou Coins de qualquer pessoa.
3. Qualquer outra taxa (Bolsa, Leilão, Troca, Câmbio, Bazar de Personagens), drops, receitas, durabilidade e balanceamento.
4. Coins, loja, Baú Misterioso, preços em reais e teto de gasto.
5. A zona vermelha: offline, Filas, automação e taxa do ausente.
6. A ameaça e a regra da Era, e as regras da Fronteira.
7. Moderação e regras de conduta.
8. Criar moeda, fundo, cofre do Conselho ou salário. **O Conselho não tem dinheiro.**
9. Mudar a própria constituição. Só o estúdio muda, com consulta pública e 30 dias de aviso.

### 6.7 Como o Conselho decide

- **Sessões assíncronas:** qualquer conselheiro abre uma pauta; ela fica 48 h em debate na Tribuna e 48 h em votação. [H] Ninguém precisa estar online na mesma hora.
- **Maioria de 4 de 7.** Os votos dos conselheiros são **nominais e públicos**; o voto do eleitor é secreto.
- **Atos do Conselho** saem no Diário da Cidade em PT e EN, com tradução revisada por humano, e valem só depois do aviso da tabela §6.5.
- **Embargo zero:** o Ato é publicado para todos no mesmo instante, e nenhum conselheiro recebe dado econômico antes do público. [F] No EVE, em 2007, um desenvolvedor deu plantas raras à própria corporação ([04b, §2.2](../01-pesquisa/04b-economia-mercados-protecoes-bots.md)); [H] informação antecipada é a forma mais barata de captura.
- **Omissão nunca trava o jogo:** cada poder tem um padrão para quando o Conselho não decide (§6.5). [F] O Warhammer Online mostrou o custo do conteúdo coletivo que trava por falta de gente ([03, §15](../01-pesquisa/03-alem-do-idle.md)).

### 6.8 Anti-captura

| Ameaça | Defesa [H] |
|---|---|
| **Compra de voto com ouro, Coins ou Pix** | Voto secreto, sem comprovante e mutável até o fim (§6.4). Compra de voto é infração: anulação da candidatura, inelegibilidade por 6 meses e banimento se envolver RMT. |
| **Bloco de uma megaguilda** | STV (12,5% por cadeira); **no máximo 2 conselheiros da mesma guilda** (o terceiro mais votado da guilda cede a vaga ao próximo da apuração); a filiação conta 30 dias antes do fim das candidaturas; guildas com no máximo 40 pessoas. |
| **Guildas de fachada** para contornar o teto | A fundação exige 5 contas com 7 dias e taxa (§2.1); fusões e trocas de guilda perto da eleição não mudam a filiação contada. |
| **Contas compradas para votar** | Carência de 60 dias depois do Bazar de Personagens; uma pessoa verificada, um voto. |
| **Contas "acordadas" só para votar** | Atividade em 7 dos últimos 28 dias. |
| **Prêmio alto demais** | **O que se captura é pouco.** Exemplo: baixar a Feira de 6% para 5% devolve 1% do volume da Feira aos vendedores, diluído entre todos. Um vendedor com 2% da Feira ganha 0,02% do volume mensal, e para isso precisaria comprar cerca de 2.000 votos que não consegue conferir. |
| **Perpetuação** | Mandato curto, no máximo 2 seguidos, troca de Conselho no meio da Era. |
| **Informação antecipada** | Embargo zero (§6.7). |

### 6.9 Anti-assédio e política do mundo real

- **Modo gabinete:** durante a candidatura e o mandato, o privado de estranhos fica desligado por padrão para o candidato e o conselheiro; as perguntas chegam pela fila da Tribuna, com modo lento. [H]
- **Debate em formato fixo:** manifesto com limite de tamanho e perguntas votadas pela população (o Palanque). [H] O formato estruturado deixa pouco espaço para a briga de réplica e tréplica.
- **Brigada de denúncias:** denúncias em massa contra candidato ou conselheiro vão para revisão humana antes de qualquer sanção automática. [H]
- **Sem política real:** partidos, candidatos, campanhas e símbolos de eleições de verdade ficam fora da Praça, da Tribuna e dos manifestos, com atenção redobrada nos anos de eleição no Brasil. [H] A Cidade não pode virar extensão da polarização de fora, nem parecer que o estúdio toma lado.
- **Renúncia digna:** o conselheiro pode renunciar a qualquer momento, sem perda e sem explicação pública.
- **Identidade protegida:** nada da verificação de idade aparece; ameaça ou exposição de dados de um conselheiro é prioridade 1 da moderação (§3.4).

### 6.10 Destituição e vacância

- **Revogação popular:** com assinaturas de 15% dos eleitores aptos, abre-se um referendo de 72 h. O conselheiro sai se o "sim" vencer e somar **pelo menos uma cota Droop da eleição em que ele entrou**. [H] Para tirar, é preciso tanta gente quanto a que o pôs.
- **Afastamento pelo estúdio:** só por violação das regras de conduta (compra de voto, assédio, golpe), com justificativa pública.
- **Vacância:** a vaga vai para o próximo da apuração STV original, recontada sem o conselheiro que saiu. [H] Não há eleição extra.

| Quatro perguntas | O Conselho |
|---|---|
| Referência | CSM do EVE, carta de enquetes do OSRS, prefeitos do SWG ([03, §16](../01-pesquisa/03-alem-do-idle.md); [F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)); voto mutável da Estônia. Diferença: poder real, porém pequeno e com faixa; nunca punitivo. |
| Problema | Falta de agência coletiva e desconfiança entre jogadores e estúdio; o destino comum do pilar 3. |
| Comportamento | Organizar-se, debater e acompanhar o Diário; voltar para votar e ver o resultado. |
| Risco | Baixa participação, captura por blocos, política tóxica e o Conselho virar alvo de assédio (§9). |

## 7. Interfaces com outros módulos

| Módulo | O que este módulo pede ou entrega |
|---|---|
| **04 Combate** | Efeito da reserva (50%) e dos postos de ofício no Cerco; boletim por posto e por guarnição; tamanho da guarnição (10). |
| **06 Ofícios** | Conversão de h-f em materiais; a cesta da Sede com pelo menos 6 ofícios; pedidos de fabricação com garantia do sistema. |
| **07 Economia** | Taxa de fundação de guilda; **orçamento de emissão em ouro das Encomendas**; taxa da Troca (3%) na retirada do cofre para terceiros; Mérito a 25% para item comprado; faixa da Feira (4% a 8%). |
| **08 Simulação** | Demanda social a simular: Encomendas da cidade (4 por semana, `C_base` de 8 h-f, até 2 por pessoa), Encomendas de guilda (1 por semana, `C_base` de 10 h-f), manutenção das Sedes (de 0,5% a 2,5% da produção dos membros), construção das Sedes (de 150 a 3.000 h-f por nível). Ordem de grandeza [H]: **as Encomendas e as Sedes absorvem de 8% a 12% da produção de quem participa.** Testar a Feira em 4% e em 8%. |
| **10 Live ops** | Posse na S1, S5 ou S9; festas que usam Sede, guarnições e turmas; Diário da Cidade; métricas sociais. |
| **11 Monetização** | Nada do social é vendido: nem vaga de guilda, nem nível de Sede, nem Encomenda extra, nem destaque no Conselho. Estandartes e decoração de Sede podem existir como cosméticos, sem efeito. |
| **12 Onboarding** | Oferta de Padrinho no D1 a D3; Roda de Novatos; primeira Encomenda da cidade em turma automática até o D3. |
| **13 Anti-abuso** | Regras de conta nova; risco de troca; uma pessoa verificada, um voto; carência pós-Bazar de Personagens; detecção de compra de voto e de guildas de fachada; origem dos lotes no livro-razão. |
| **14 Arte e UI** | Os 5 níveis da Sede; Tribuna; Quadro da Cidade; Troca com confirmação dupla e aviso de valor; placa da Obra. |

## 8. Propostas de mudança na bíblia

1. **[proposta de mudança na bíblia] Glossário:** incluir **Sede** (base da guilda na Cidade, 5 níveis), **Renome** (progressão da guilda; não confundir com Mérito, que é pessoal), **Guarnição** (grupo de defesa do Cerco, termo já usado no conceito), **Padrinho/Madrinha** (mentor de novatos), **Quadro da Cidade** (onde saem as Encomendas da cidade), **Diário da Cidade** (canal oficial e jornal) e **hora-fila (h-f)** (unidade de conta para custos e metas).
2. **[proposta de mudança na bíblia] §6.1, Conselho:** trocar "eleição a cada 2 meses" por "mandato de 2 meses, contado em 9, 9 e 8 semanas, com posse na S1, S5 ou S9 de uma Era".
3. **[proposta de mudança na bíblia] §6.6, constituição econômica:** incorporar a tabela de poderes do Conselho (§6.5) e a carta do que nunca vai a voto (§6.6). Hoje a bíblia só cita a faixa da Feira.
4. **[proposta de mudança na bíblia] §4, Mérito:** precisar "prioridade em recompensas da cidade" como **prioridade de ordem** (escolha de lote, vagas limitadas de eventos), nunca recompensa econômica maior; e registrar que item comprado rende 25% do Mérito.
5. **[proposta de mudança na bíblia] §6.7, novo número-âncora:** guilda de 20 a 40 membros.

## 9. Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| **Conselho irrelevante** | Os poderes são tão pequenos que ninguém vota, e uma minoria organizada decide, como no CSM (8,6% a 12,7% de participação) | Votar dentro do jogo, em 2 cliques, com lembrete; plebiscitos na Era 1 para criar hábito; meta de participação no módulo 10; se ficar abaixo da meta por 3 mandatos, ampliar poderes por emenda pública, nunca sem faixa. |
| **Captura apesar do STV** | Uma megaguilda e suas "amigas" combinam as preferências e somam 4 cadeiras | Teto de 2 por guilda; guildas de até 40; poderes com faixa; revogação popular; votos nominais dos conselheiros sob escrutínio. |
| **Compra de voto** | Pagam por print da cédula ou pagam a muita gente sem conferir | O print não prova nada, porque o voto pode ser trocado; compra de voto é infração com banimento; o prêmio de capturar é pequeno (§6.8). |
| **Política tóxica e assédio** | Guerra de guildas chega à Tribuna; candidatos viram alvo | Modo gabinete; formato fixo do Palanque; brigada de denúncias revisada por humano; prioridade 1 para ameaça; renúncia digna. |
| **Política real invade** | A Cidade vira palco da polarização de fora, sobretudo em ano de eleição no Brasil | Regra explícita (§6.9); moderação de símbolos e nomes; o estúdio nunca comenta política real. |
| **Conflito de interesse** | O conselheiro ferreiro prioriza a Encomenda de Ferraria toda semana | Limite de 2 semanas seguidas por categoria; declaração pública de ofícios; voto nominal; revogação. |
| **A guilda sem bônus vira irrelevante** | Sem multiplicador, ninguém se esforça para subir a Sede | Medir adesão a guildas (módulo 10); reforçar o que é social (salão, festas, museu, Encomendas maiores); **nunca** resolver com bônus de produção. |
| **A guilda vira obrigação de fato** | Mesmo sem bônus, os Cercos e as Encomendas só funcionam em guilda | A guarnição aberta pontua igual; Encomendas da cidade rendem o mesmo por h-f; medir a retenção de solos contra a de membros. |
| **Pressão sobre o ritmo** | O oficial cobra que todos escolham Forte | O ritmo individual só é visível aos oficiais; a recompensa escala com o ritmo, então Leve não é "trapaça"; regra de conduta contra cobrança abusiva. |
| **Turma automática com gente tóxica** | Estranhos se ofendem no canal da turma | Bloquear em 1 clique; o canal da turma pode ser silenciado sem sair da Encomenda; histórico de denúncias pesa no pareamento. |
| **Golpe apesar do desenho** | O jogador negocia por fora e é enganado; culpa o estúdio nas reviews | Aviso na Troca de mão única; página pública sobre o RMT informal; banimento do golpista quando há prova no jogo; estatística de golpes no relatório mensal. |
| **Moderação cara e lenta** | Duas línguas, 7 dias por semana, e um regime de responsabilidade mais duro depois do STF (2025) | Prevenção por desenho primeiro; fila por prioridade; canal de notificação extrajudicial com protocolo; equipe mínima no módulo 10; **validar o fluxo com advogado**. |
| **Falso positivo** | O filtro de Pix ou de telefone pega conversa legítima; família ou república caem na detecção de rede | Filtro avisa, não pune; revisão humana para qualquer sanção acima de 1 h; apelação. |
| **Padrinho predador** | Usa a confiança do novato para golpe ou recrutamento abusivo | Enxoval do sistema; limites de transferência para conta nova; revogação por denúncia; o marco D30 só paga sem denúncia do afilhado. |
| **Ranking de destruição vira "pagar para ranquear"** | O rico compra bens e entrega | Item comprado vale 0 ponto; só a produção própria conta (livro-razão por lote). Custo técnico: lotes com origem, a resolver na Fase 4. |
| **Minoria de língua inglesa isolada** | A Praça PT domina, o Conselho só fala português | Canais separados; STV dá cadeira com 12,5%; Atos com tradução revisada; meta de tempo de moderação igual nos dois idiomas. |
| **Tradução automática gera briga** | Uma tradução ruim soa como ofensa | A tradução é opcional e marcada como tradução; quem denuncia vê o original. |
| **Dados de chat demais ou de menos** | Guardar tudo fere a LGPD; guardar pouco impede responder a autoridades | Política de retenção mínima (90 dias para mensagens, prazo legal para registros de acesso); **validar com advogado**. |

