# GDD 11 — Monetização

> **Escopo.** Como o jogo ganha dinheiro: a doação e o Alvará (faixas de doação, Pix e cartão), a loja e os preços em Alvarás, a conveniência por tempo, os cosméticos, o Baú do Mascate, o Passe da Era, o teto de doação, a proteção do jogador vulnerável, a projeção de receita e a carta pública de monetização.
> **Depende de:** [00 — bíblia](00-biblia.md) e do módulo 07 (economia). Onde este módulo precisa de um número da economia, usa o número-âncora da bíblia ou marca "a reconciliar com o módulo 07".
> **Base:** [06 — monetização e retenção](../01-pesquisa/06-monetizacao-retencao.md), [05d — recomendação de RMT](../01-pesquisa/05d-rmt-recomendacao.md), [05b — jurídico Brasil](../01-pesquisa/05b-rmt-legal-brasil.md), [08 — mercado e posicionamento](../01-pesquisa/08-mercado-posicionamento.md) e [00 — síntese](../01-pesquisa/00-sintese.md).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou hipótese do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).** Nada aqui é parecer jurídico: onde a proposta depende da lei, está marcado **"validar com advogado"**.
> **Decisões vigentes que este módulo não reabre** (bíblia, seção 5, e [PROGRESSO](../PROGRESSO.md)): o pagamento é uma **doação** que credita **Alvarás**, uma moeda divisível (coins), **sem reembolso** pelo estúdio; Alvará e ouro transferíveis livremente; Cartório desde o lançamento; Baú do Mascate comprável com Alvará e negociável por ouro, com conteúdo cosmético ou decorativo; jogo 18+ com idade verificada; Brasil primeiro, com Pix; o Alvará compra conforto e cosmético, nunca renda, XP ou poder. Onde a pesquisa recomendava outra coisa (por exemplo, "nenhum sorteio pago" no [06](../01-pesquisa/06-monetizacao-retencao.md), princípio 3, ou o token como item de uma revenda só no [05d](../01-pesquisa/05d-rmt-recomendacao.md)), vale a decisão do Gabriel, e este módulo desenha as salvaguardas.

## Resumo

- **1 Alvará = R$ 1,00, em todas as faixas de doação** [H]. Não há bônus nas faixas maiores. As faixas são R$ 5, 10, 20, 50, 100 e 250, mais valor livre em reais inteiros. Pix em todas; cartão à vista em todas; até 3x sem juros a partir de R$ 100. Com a paridade de um para um, o preço em reais está sempre à vista sem conta nenhuma.
- **A loja vende em Alvarás:** conveniência por tempo (**20 Alvarás por 30 dias**, ou 10 por 15 dias, ou 60 por 90 dias), cosméticos de 5 a 60, o Passe da Era por 20, o Baú do Mascate por 5 e serviços de conta. O Alvará também paga contas no Cartório e circula pelo Câmbio e pela Troca. Nunca é dado de graça.
- **Conveniência = forma, nunca resultado.** São nove itens de identidade, organização e vida social: cosmético do mês, guarda-roupa ampliado, predefinições de equipamento, cômodos de decoração, festas na casa, painel de patrimônio, barbearia, temas e selo opcional. Cada um foi checado contra a zona vermelha (seção 3).
- **Baú do Mascate:** custa 5 Alvarás, e as chances são publicadas na tela e na página do jogo. A cada 10 Baús sem item Raro ou melhor, o décimo garante um. **Todo item do Baú também é vendido diretamente, com preço fixo**, o que põe teto no prêmio; o item comum custa o mesmo que o Baú, o que põe piso no resultado. Os itens saem lacrados e são negociáveis; aplicados, ficam presos à conta. Limites: 20 Baús comprados por mês, 10 aberturas por dia e 40 por mês.
- **Passe da Era:** 20 Alvarás, sem poder e sem expirar. Avança por feitos, não por horas, com teto semanal acumulável.
- **Teto de doação de R$ 250 por mês para todos**, com níveis de R$ 600 e R$ 1.200 só por pedido e com espera. Há ainda limite de cinco doações por dia, painel de gasto, opção de fechar a loja para si e resposta graduada a sinais de risco. **Como não há reembolso, a proteção acontece antes da doação.** Na contestação forçada pelo banco (chargeback no cartão, MED do Pix), **a conta fica suspensa até o jogador regularizar**, pagando de novo o valor contestado (decisão do Gabriel, seção 7.4).
- **Projeção** [H]: R$ 32 mil, R$ 163 mil e R$ 463 mil por mês nos cenários pessimista (2 mil simultâneos), base (3,5 mil) e otimista (5 mil). O cenário base paga uma equipe enxuta de 4 a 5 pessoas e a operação; o pessimista não paga equipe. **O achado principal:** a verificação de idade de cada conta nova, a R$ 1,00, consome cerca de 25% da receita bruta no cenário base e 70% no pessimista (seção 8.5). É o motivo econômico para verificar só depois do prólogo ([12](12-onboarding.md)) e para negociar o preço da verificação.

## 1. A régua: o que pode e o que não pode ir à loja

### 1.1 A zona vermelha

[H] Estes itens nunca vão à loja: nem em Alvarás, nem dentro da conveniência, do passe ou do Baú. A lista junta o piso P7 do [conceito](../02-conceito.md) com a zona vermelha do [06](../01-pesquisa/06-monetizacao-retencao.md), §3.4.

| Nunca vender | Por quê | Referência |
|---|---|---|
| Teto de offline, tempo de ausência | Vender o fim da espera é vender o fim do jogo; "10 h, a menos que você pague" | Milky Way Idle ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); AFK Arena ([E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md)) |
| Filas, vagas de ação | A primeira compra "obrigatória" vira tempo de ausência | Lei 10 ([02a](../01-pesquisa/02a-teoria-design-idle.md)) |
| Automação | Automação é conquista; vendida, esvazia o jogo | Lei 10; Idle Clans ([C02](../01-pesquisa/fichas/C02-idle-clans.md)) |
| Taxa do ausente | "+30% AFK gains" | IdleOn ([B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)) |
| Renda, XP, nível, poder de combate, qualidade de crafting | P2W explícito | Albion e IdleMMO ([F02](../01-pesquisa/fichas/F02-albion-online.md); [C04](../01-pesquisa/fichas/C04-idlemmo.md)) |
| Espaço de estoque | Num jogo com mercado, espaço é capacidade de especular | PoE e IdleOn ([F05](../01-pesquisa/fichas/F05-path-of-exile.md); [B02](../01-pesquisa/fichas/B02-legends-of-idleon.md)) |
| Reparo, alívio do desgaste | O desgaste é o dreno principal (pilar 2); vender o alívio é vender o fim da dor criada | Shop Titans ([C06](../01-pesquisa/fichas/C06-shop-titans.md)) |
| Energia e recargas | — | SimpleMMO ([C05](../01-pesquisa/fichas/C05-simplemmo.md)) |
| Taxas de mercado menores, vagas de anúncio, destaque de anúncio, alertas de preço | Vantagem de mercado é renda | IdleMMO; Black Desert ([F08](../01-pesquisa/fichas/F08-black-desert.md)) |
| Ajudantes, slots que produzem | Produzem renda | [06](../01-pesquisa/06-monetizacao-retencao.md), §3.4 |
| Mérito, voto, título de conquista, posição em ranking | Confiança da Câmara; o troféu desvalorizado | Montaria do WoW ([F06](../01-pesquisa/fichas/F06-world-of-warcraft.md)) |
| Moldes ou receitas que permitem fabricar bens negociáveis | Dão a quem paga uma fonte de ouro, o que é renda | Seção 4.2 |
| Prioridade de acesso (fila de login, vaga em evento) | Acesso é resultado | — |

**Exceção decidida pelo Gabriel:** o sorteio pago existe na forma do Baú do Mascate, com conteúdo só cosmético ou decorativo. As salvaguardas estão na seção 5.

### 1.2 O teste das quatro perguntas de toda oferta

[H] O [06](../01-pesquisa/06-monetizacao-retencao.md) (§3.4) propõe três perguntas. Num jogo em que o Alvará e o ouro circulam livremente, falta uma quarta. Um "sim" em qualquer uma tira a oferta da loja.

1. **A dor existe para vender o alívio?**
2. **A versão grátis fica abaixo do que o jogo precisa para ser jogado por completo?**
3. **A compra muda um resultado** (renda, tempo, poder, posição no mercado) **ou só a forma** (aparência, organização, conforto de interface)?
4. **A compra dá a quem paga uma fonte de ouro ou de bens negociáveis?** (Exemplo de "sim": um molde que fabrica decoração vendável.)

Quem aplica o teste é uma pessoa de fora do time de receita, e o resultado de cada item novo fica registrado no relatório mensal ([06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 3).

## 2. A doação e o Alvará

### 2.1 Como funciona

Pela decisão do Gabriel, o jogador faz uma **doação** em reais e recebe **Alvarás**, uma moeda divisível. Os Alvarás se gastam na **loja** (seção 2.4), pagam contas no **Cartório** e circulam entre jogadores pelo **Câmbio** (por ouro, taxa de 12% destruída) e pela **Troca** (taxa de 3% em ouro destruída) (bíblia, §6.6).

| Regra [H] | Desenho |
|---|---|
| Valor de referência | **1 Alvará = R$ 1,00** na doação, em todas as faixas |
| Divisibilidade | Duas casas decimais (0,01 Alvará). Preços da loja em Alvarás inteiros. No Câmbio e na Troca, mínimo de 1 Alvará por operação, para evitar poeira e spam de transferências (a reconciliar com o módulo 07) |
| Validade | Não expira |
| Carência de transferência | Os Alvarás recém-doados ficam um prazo sem poder ir ao Câmbio ou à Troca, conforme o meio de pagamento (salvaguarda S2, [00](../01-pesquisa/00-sintese.md)); prazos no módulo 13 |
| O que o estúdio nunca faz | Dar Alvará de graça (evento, ranking, passe, recompensa); comprar Alvará de volta; pagar dinheiro a jogadores. *Por quê:* a queda do PLEX coincidiu com distribuição grátis ([F01](../01-pesquisa/fichas/F01-eve-online.md); [05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.6) |
| Reembolso | **Não há** reembolso pelo estúdio (decisão do Gabriel). O risco assumido está registrado na seção 2.6 |
| Contestação forçada pelo banco | Chargeback no cartão ou MED do Pix: **a conta fica suspensa até regularizar**, isto é, até o jogador pagar de novo o valor contestado (decisão do Gabriel; desenho na seção 7.4) |

### 2.2 O preço da conveniência: testando a faixa de R$ 14,90 a R$ 24,90

A bíblia (§6.7) pede para testar a faixa de R$ 14,90 a R$ 24,90 por 30 dias de conveniência. Com 1 Alvará = R$ 1, isso vira **15 a 25 Alvarás por 30 dias**.

**Âncoras.** O Steam cobra R$ 32,99 pelo Melvor Idle, que custa US$ 9,99 nos EUA ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). Isso dá uma razão de preço regional de 3,30 reais por dólar de preço de tabela [H, cálculo sobre dado F]. Aplicada às assinaturas de referência:

| Referência | Preço original [F] | Equivalente em preço regional Steam [H] | Fonte |
|---|---|---|---|
| Torn, Donator Pack (31 dias) | US$ 5 | ~R$ 16,50 | [D01](../01-pesquisa/fichas/D01-torn.md) |
| IdleMMO, membership (30 dias) | US$ 6,99 | ~R$ 23,10 | [C04](../01-pesquisa/fichas/C04-idlemmo.md) |
| Fortnite Crew (mês) | US$ 11,99 | ~R$ 39,60 | [06](../01-pesquisa/06-monetizacao-retencao.md), §3.3 |
| RuneScape, assinatura (mês) | US$ 14,99 | ~R$ 49,50 | [06](../01-pesquisa/06-monetizacao-retencao.md), §4.4 |

**As três pontas da faixa [H]:**

| Preço por 30 dias | A favor | Contra |
|---|---|---|
| 15 Alvarás | Mais doadores pequenos, o que o Brasil sustenta ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.1); fica abaixo do Torn equivalente | Menos consumo de Alvará por conveniência, o que enfraquece a demanda por Alvará no Câmbio e o preço dele em ouro |
| **20 Alvarás** | Entre o Torn e o IdleMMO equivalentes; número redondo; uma doação de R$ 20 cobre um mês | — |
| 25 Alvarás | Mais consumo por conveniência | A nossa conveniência não tem bônus de XP, então vale menos que a do IdleMMO; preço oficial alto empurra para o mercado cinza (no OSRS, o ouro clandestino sai a 45% do preço do Bond, [F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)) |

**Recomendação [H]: 20 Alvarás por 30 dias.**

**Como testar antes de fixar [H]:**
1. **Pesquisa de disposição a pagar no alfa** (método de Van Westendorp: "caro demais", "caro", "barato", "barato demais"), aplicada só a adultos verificados.
2. **Beta com Alvarás de teste**, sem dinheiro e apagados no wipe, para medir os usos (conveniência, Câmbio, loja) e o preço do Alvará em ouro.
3. **Nenhum teste A/B de preço em produção.** O Alvará é transferível, então dois preços simultâneos viram arbitragem; além disso, o jogador defende como direito a forma de pagar algo recorrente (caso Apex, [06](../01-pesquisa/06-monetizacao-retencao.md), §2.1).

**Regra de reajuste (vai para a carta pública):** a paridade de 1 Alvará = R$ 1,00 e os preços da loja em Alvarás não sobem nos 12 primeiros meses. Depois, nunca acima da inflação oficial (IPCA) acumulada desde o último reajuste, e sempre com 30 dias de aviso. Reduções podem vir a qualquer momento.

**Fora do Brasil [H]:** a paridade em dólar é a conversão arredondada de R$ 1,00, revista a cada trimestre, **sem desconto regional**. Como o Alvará é transferível, uma paridade regional mais barata vira arbitragem: alguém doa barato num país e revende ao outro por fora ([08](../01-pesquisa/08-mercado-posicionamento.md), "Como isso pode dar errado", item 4).

> **Quatro perguntas** — Referência: Torn e IdleMMO (preço de assinatura de idle); preço regional do Steam como régua · Problema: um preço que caiba no bolso brasileiro sem baratear o ouro a ponto de comprar o mercado · Comportamento: uma doação de R$ 20 por mês como hábito, e o jogador com ouro compra os mesmos 20 Alvarás no Câmbio · Risco: o preço errado só se descobre com dinheiro real, e a regra de reajuste limita a correção para cima.

### 2.3 Faixas de doação e meios de pagamento

**[F] Custo dos meios de pagamento.** Na página oficial do link de pagamento do Mercado Pago (consultada em nov./2026, sem data de vigência), o Pix custa 0,99%. O cartão de crédito custa 4,98% com recebimento na hora, 4,48% em 14 dias e 3,99% em 30 dias. O parcelamento sem acréscimo para o comprador soma 2,53% em 2x, 4,62% em 3x, 9,96% em 6x e 17,28% em 12x ([Mercado Pago, link de pagamento](https://www.mercadopago.com.br/ferramentas-para-vender/link-de-pagamento)). [H] Outros provedores terão tabelas próprias; o [05d](../01-pesquisa/05d-rmt-recomendacao.md) (R9) pede dois provedores aprovados por escrito.

**[F] Como o brasileiro paga.** O Pix tem 42% do e-commerce e é usado por ~96% dos adultos; cerca de 60 milhões de brasileiros não têm cartão de crédito; o cartão ainda leva 64% do valor, por causa do parcelamento ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.2).

**Faixas [H]:**

| Doação | Alvarás | Pix | Cartão | Cobre, por exemplo |
|---|---|---|---|---|
| R$ 5 | 5 | Sim | À vista | 1 Baú, ou um gesto |
| R$ 10 | 10 | Sim | À vista | 15 dias de conveniência |
| R$ 20 | 20 | Sim | À vista | 30 dias de conveniência, ou o Passe da Era |
| R$ 50 | 50 | Sim | À vista | Um mês de conveniência, o passe e 2 Baús |
| R$ 100 | 100 | Sim | Até 3x sem juros | 90 dias de conveniência e o passe |
| R$ 250 | 250 | Sim | Até 3x sem juros | O teto padrão de um mês |
| Valor livre | 1 por real | Sim | À vista (até 3x a partir de R$ 100) | Qualquer valor inteiro de R$ 5 até o teto que resta no mês |

**Sem bônus nas faixas maiores [H].** *Por quê:* (1) com 1 Alvará = R$ 1,00 sempre, o preço em reais de qualquer coisa é o próprio número, e a regra "preço em reais sempre visível" se cumpre sem conta; (2) o Alvará vendido no Câmbio é ouro comprado com dinheiro, e bônus por volume barateia o ouro de quem doa muito, o "P2W de capital" do MWI ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); (3) a faixa grande com "bônus" é o padrão de valor percebido que os jogadores chamam de predatório ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3), e empurra a doar mais do que se precisa. A alternativa com bônus está na seção 11 (decisão 2).

**Meios [H]:**

| Meio | Onde | Regra |
|---|---|---|
| **Pix** (QR e copia e cola) | Todas as faixas | Meio padrão, sempre o primeiro da lista. Confirmação em segundos; os Alvarás chegam na hora, com a carência de transferência do módulo 13 |
| **Pix Automático** | Doação mensal recorrente | Opcional, com o valor escolhido pelo jogador. Aviso 3 dias antes de cada cobrança, cancelamento com um toque e pausa. Exige CNPJ com 6 meses ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §6), então entra depois do lançamento se o CNPJ for novo |
| **Renovação da conveniência** | Na loja | Opcional e desligada por padrão: quando a conveniência acaba, ela se renova se houver 20 Alvarás na conta. Aviso 3 dias antes |
| **Cartão à vista** | Todas as faixas | Recebimento em 30 dias (3,99%) para reduzir custo |
| **Cartão em até 3x sem juros** | A partir de R$ 100 | Custa ~8,6% (3,99% + 4,62%). Não oferecemos 6x ou 12x: custam 14% a 21%, e parcelas longas prendem o jogador a um gasto que ele pode querer interromper |
| **Carteira digital** | Todas | Terceira via, se o provedor oferecer |
| **Boleto** | Não | Lento, e o Pix cobre quem não tem cartão |

**Custo médio dos pagamentos [H]:** com 60% em Pix, 30% em cartão à vista e 10% em cartão em 3x, o custo fica em `0,6 × 0,99% + 0,3 × 3,99% + 0,1 × 8,61% ≈ 2,65%`. A projeção usa 3%.

**O parcelamento conta inteiro no teto do mês da doação** (seção 7.1).

> **Quatro perguntas** — Referência: Ragnarok Origin e NetEase, que adotaram Pix no Brasil; o cartão parcelado do e-commerce ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.2); diferencia-se dos pacotes de moeda premium com bônus do topo do mobile ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1) · Problema: doar sem cartão, sem dólar, sem a comissão das lojas de apps e sem conta de conversão · Comportamento: doação pequena e frequente por Pix; doação grande e planejada no cartão · Risco: o Pix tem golpe e MED (devolução em até 80 dias, [05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.4), e o cartão tem chargeback por cerca de 120 dias; a contestação suspende a conta até regularizar (seção 7.4), mas os Alvarás podem já ter passado a outros jogadores.

### 2.4 A loja: preços em Alvarás

[H] Tabela de referência da loja no lançamento. Detalhes de cada linha nas seções 3 a 6.

| Item | Preço [H] | Observação |
|---|---|---|
| **Conveniência, 15 dias** | 10 Alvarás | Proporcional, para quem doa pouco ou compra com ouro |
| **Conveniência, 30 dias** | 20 Alvarás | O preço-âncora |
| **Conveniência, 90 dias** | 60 Alvarás | Sem desconto: o tempo custa o mesmo em qualquer quantidade |
| **Passe da Era** (trilha paga) | 20 Alvarás | Passes antigos pelo mesmo preço |
| **Baú do Mascate** | 5 Alvarás | Até 20 por mês (seção 5.7) |
| Cosmético pequeno (gesto, moldura, cor de nome) | 5 Alvarás | Preso à conta |
| Cosmético médio (aparência de peça, decoração) | 10 Alvarás | Preso à conta |
| Cosmético grande (traje, aparência de ajudante, tema de casa) | 20 Alvarás | Preso à conta |
| Conjunto (casa temática, traje com gestos) | 40 Alvarás | Preso à conta |
| Lendário (os lendários do Baú, à venda direta) | 60 Alvarás | Preso à conta |
| Presente à guilda (estandarte, decoração de salão) | 20 a 40 Alvarás | Um por semana por pessoa |
| Troca de nome do personagem | 30 Alvarás | Uma vez a cada 90 dias, com histórico público de nomes (contra golpista que troca de nome) |
| Mudança de lote da casa | 20 Alvarás | Só a posição no Arraial; nada de espaço ou produção |
| **Cartório** | Preço livre, em Alvarás | Taxa de 10% em Alvará destruída (bíblia, §6.6); regras no módulo 07 |

### 2.5 Preço em reais sempre visível

[H] A moeda que esconde o preço real está na lista de práticas predatórias ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3), e o regulador já a trata como engano (FTC × HoYoverse, §2.1). A paridade de um para um resolve quase tudo; as regras de interface completam:

1. **Todo preço em Alvarás vem com o equivalente em reais na doação:** "20 Alvarás (R$ 20 em doação)". No Cartório: "350 Alvarás (R$ 350 em doação)".
2. **Antes de confirmar qualquer doação ou compra na loja,** a tela mostra o total, o que já foi doado no mês e quanto resta do teto.
3. **Sem preço riscado, sem "economize X%", sem selo de "mais vendido" e sem contador regressivo.**
4. **Na loja e no Câmbio, o Alvará mostra os dois valores:** "1 Alvará = R$ 1,00 em doação ou ~N ouro no Câmbio agora". O valor em ouro vem do IPA.

### 2.6 Risco assumido: a doação

> **Registro único [H].** Chamar o pagamento de doação não muda a natureza de compra perante o CDC: o jogador recebe um bem (Alvarás) em troca do valor, e o direito de arrependimento (art. 49) e as demais regras de consumo tendem a se aplicar do mesmo jeito ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §4). O rótulo também pode atrair o ITCMD, o imposto estadual sobre doações, e conflitar com as regras dos provedores de pagamento, que tratam doação e venda de forma diferente. É risco assumido pelo Gabriel; este módulo não reabre a decisão. **Validar com advogado e com contador.**

## 3. A conveniência por tempo

### 3.1 A lista exata

[H] A conveniência é o pacote por tempo que se compra na loja: 10 Alvarás por 15 dias, 20 por 30 dias, 60 por 90 dias. Ela segue o padrão que o [06](../01-pesquisa/06-monetizacao-retencao.md) (§3.3 e princípio 5) recomenda estudar: cosmético mensal, conforto de interface e privilégios sociais de anfitrião. Diferente do 06, **o passe não está incluído** (seção 6.1 explica). Cada item passou pelas quatro perguntas da seção 1.2, e a coluna "zona" usa as zonas do 06: verde (pode vender) e amarela (só com rota por ouro e teto de vantagem; o Alvará tem rota por ouro pelo Câmbio).

| # | Item | O que é | Sem conveniência | Com conveniência | Zona | Checagem contra a zona vermelha |
|---|---|---|---|---|---|---|
| 1 | **Cosmético do mês** | Um visual novo a cada 30 dias de conveniência (traje, aparência de ajudante ou peça de decoração), escolhido entre dois | — | 1 a cada 30 dias, preso à conta, **seu para sempre** | Verde | Só aparência; não é negociável, então não vira ouro (pergunta 4) |
| 2 | **Guarda-roupa ampliado** | Aparências salvas para aplicar sobre o equipamento (a peça continua a mesma) | 5 aparências | 30 aparências | Amarela | Muda a forma, não o atributo; a versão grátis cobre o uso normal |
| 3 | **Predefinições de equipamento** | Conjuntos salvos de equipamento, trocados com um toque | 3 | 10 | Amarela | O combate é assíncrono, sem reação em tempo real, então trocar mais depressa não muda resultado. **Não inclui predefinição de fila**: planejar a fila é o núcleo do jogo, e predefinição de fila é o passo antes da automação ([06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 3) |
| 4 | **Cômodos de decoração** | Dois cômodos extras na casa e uma vitrine de troféus | Casa básica | +2 cômodos e a vitrine | Verde | **Os cômodos extras não guardam nada:** só decoração e exibição. Armazenamento é zona vermelha |
| 5 | **Festas na casa (anfitrião)** | Abrir a casa para até 30 convidados; quem visita ganha um enfeite ou gesto da festa, preso e sem valor de mercado; uma mesa de prosa (sala de conversa persistente da casa) | Visitas avulsas | Festas, mesa de prosa | Verde | O benefício vai para os amigos e é só social (a cooperativa hospedada do Egg, Inc., [06](../01-pesquisa/06-monetizacao-retencao.md), §3.3, sem o bônus de renda). **Não abre encomenda extra nem dá recompensa negociável** |
| 6 | **Painel de patrimônio** | Gráficos do seu patrimônio e do seu histórico de compras e vendas por 12 meses | Histórico de 30 dias, em lista | Painel com gráficos e 12 meses | Amarela | Só os seus dados. **Os dados de mercado (preços, volumes, IPA) são grátis e públicos para todos** (P11). **A exportação dos seus dados também é grátis**, por direito de acesso (LGPD, art. 18; validar com advogado) |
| 7 | **Barbearia livre** | Mudar a aparência do personagem e dos ajudantes | 1 vez por mês | Sem limite | Verde | Só aparência |
| 8 | **Temas e molduras** | Temas de interface, cores de nome no chat, molduras de perfil da conveniência | Temas básicos | Temas e molduras exclusivos enquanto ativa | Verde | Só forma. **Acessibilidade nunca entra aqui:** alto contraste, fonte grande, modo daltônico, leitor de tela e modo canto de tela são grátis ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.4, Pokémon GO) |
| 9 | **Selo de apoiador** | Um selo no perfil ("Alvará em dia") | — | Visível, e o jogador pode esconder | Verde | Status sem poder; o jogador escolhe mostrar ou não, para não virar pressão social |

**O que acontece quando a conveniência acaba [H]:** nada se perde. O cosmético do mês fica. As aparências e as predefinições além do limite grátis ficam guardadas, inativas, e voltam quando a conveniência volta. A decoração dos cômodos extras vai para um baú de decoração. *Por quê:* Lei 7, o ausente que não perde ([02a](../01-pesquisa/02a-teoria-design-idle.md)); quem para de doar não pode ser punido.

### 3.2 O que a conveniência nunca dá

| Pedido provável da comunidade | Por que não | Referência |
|---|---|---|
| +horas de offline ou fila extra | Zona vermelha; o caso mais criticado do gênero | MWI e IdleMMO ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md); [C04](../01-pesquisa/fichas/C04-idlemmo.md)) |
| +XP, +renda, +qualidade | Faz do não assinante um jogador "de handicap" | Albion ([F02](../01-pesquisa/fichas/F02-albion-online.md)) |
| Taxa menor na Bolsa, na Feira, no Pregão ou no Câmbio | Vantagem de mercado; desconto de taxa favorece quem já é rico | Black Desert ([F08](../01-pesquisa/fichas/F08-black-desert.md)); [05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.2 |
| Mais anúncios simultâneos, destaque de anúncio, alerta de preço | Vantagem de mercado e de informação | [06](../01-pesquisa/06-monetizacao-retencao.md), §3.4 |
| Reparo grátis ou mais barato | O desgaste é o dreno principal | Shop Titans ([C06](../01-pesquisa/fichas/C06-shop-titans.md)) |
| Armazém maior | Espaço é especulação | PoE ([F05](../01-pesquisa/fichas/F05-path-of-exile.md)) |
| Encomenda extra, cerco extra, obra-prima extra | Mais recompensa, então é resultado | Egg, Inc. ULTRA ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.3) |
| Ajudante extra | Produz | [06](../01-pesquisa/06-monetizacao-retencao.md), §3.4 |
| Predefinição de fila ou "repetir plano" | Passo para a automação | Lei 10 ([02a](../01-pesquisa/02a-teoria-design-idle.md)) |
| Prioridade de login ou de vaga em evento | Acesso é resultado | — |

### 3.3 Regras

- **Começa na compra** e conta dias corridos. Comprar de novo soma o tempo.
- **Não há fidelidade nem "sequência":** nada melhora por manter a conveniência meses seguidos, e nada se perde por pausar. *Por quê:* recompensa por continuidade é pressão para não parar, e o Decreto 12.880 cita "recompensas pelo tempo de uso" entre os mecanismos de uso compulsivo a evitar ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2).
- **Pode ser presenteada:** basta comprar o tempo para outra conta na loja, ou transferir Alvarás pela Troca. O valor conta no teto de quem doou.
- **Mudanças na lista** seguem a carta pública: 30 dias de aviso, e um item nunca sai sem compensação ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 11). Nada que foi tirado de graça do jogo reaparece na conveniência (regra anti-nerf, [06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 4).

> **Quatro perguntas** — Referência: Fortnite Crew (assinatura de cosmético) e a cooperativa hospedada do Egg, Inc.; diferencia-se da membership do IdleMMO e do Premium do Albion, que vendem XP e renda · Problema: dar motivo para gastar Alvarás, o que sustenta o preço do Alvará em ouro e a rota do não pagante, sem dar resultado · Comportamento: compra por identidade, vida social e organização; o jogador com ouro compra os Alvarás da conveniência no Câmbio · Risco: valor baixo demais para quem quer poder, o que derruba a demanda por Alvará e o preço dele em ouro; medir e, se preciso, reforçar com mais cosmético e mais vida social, nunca com resultado (seção "Como isso pode dar errado").

## 4. Cosméticos na loja

### 4.1 Categorias e preços

[H] Preços em Alvarás (tabela da seção 2.4). Todos os cosméticos comprados na loja ficam **presos à conta** ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7): o cosmético da loja nunca vira ouro nem material ([F08](../01-pesquisa/fichas/F08-black-desert.md)). A exceção decidida é o conteúdo do Baú, negociável enquanto lacrado (seção 5.3).

| Faixa | Preço [H] | Exemplos |
|---|---|---|
| Pequeno | 5 Alvarás | Gesto, moldura de perfil, cor de nome, enfeite de mesa |
| Médio | 10 Alvarás | Aparência de uma peça (sobre o equipamento), item de decoração, pelagem de montaria de passeio |
| Grande | 20 Alvarás | Traje completo, aparência de ajudante, tema de casa |
| Conjunto | 40 Alvarás | Casa temática completa (Festa Junina, Casa de Farinha, Beira-Rio), conjunto de traje e gestos |
| Lendário | 60 Alvarás | Os itens lendários do Baú, vendidos também diretamente (seção 5.4) |

### 4.2 Regras

1. **Catálogo permanente.** Nada sai da loja para criar escassez. A vitrine do mês destaca itens sem relógio, e todo item destacado volta a ficar disponível depois. *Por quê:* oferta por tempo limitado é o padrão que o Decreto 12.880 aponta como mecanismo de uso compulsivo ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1).
2. **Sem oferta personalizada.** Todo jogador vê a mesma loja e os mesmos preços. Não há "oferta só para você" nem oferta que só aparece para quem já doou ([06](../01-pesquisa/06-monetizacao-retencao.md), §5.4, o contraexemplo do Egg, Inc.).
3. **Presente a outro jogador:** cosmético comprado para um amigo chega preso à conta dele.
4. **Presente à guilda:** estandartes, decoração de salão e cores de guilda que todos os membros usam. No máximo um presente por semana por pessoa; o presenteador pode ficar anônimo. *Por quê:* o pagante como benfeitor visível ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 8), com freio contra a pressão social de doar.
5. **Nenhum molde, receita ou ferramenta que fabrique bem negociável** (pergunta 4 da seção 1.2). Decoração e traje feitos por jogadores existem e circulam no mercado, mas os moldes saem do jogo (drops, encomendas, trilha grátis do Passe da Era), nunca da loja. *Por quê:* um molde vendido daria a quem paga uma fonte de ouro, isto é, renda.
6. **Os cosméticos conquistados valem mais que os vendidos em status:** títulos, troféus de cerco e o Selo de mestre nunca estão à venda, e aparecem em destaque no perfil e na vitrine da casa ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7; a montaria do WoW em [F06](../01-pesquisa/fichas/F06-world-of-warcraft.md)).
7. **Identidade brasileira sem caricatura:** festas regionais, ofícios e paisagens como tema, revisados pela análise de sensibilidade cultural do módulo 14.

> **Quatro perguntas** — Referência: Path of Exile e Guild Wars 2 (loja de estilo, [F05](../01-pesquisa/fichas/F05-path-of-exile.md); [F07](../01-pesquisa/fichas/F07-guild-wars-2.md)); diferencia-se do Black Desert, em que o cosmético virou poder · Problema: receita recorrente sem mexer no equilíbrio · Comportamento: compra por identidade, coleção e presente · Risco: cosmético vende pouco num idle que se olha pouco ([06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 6); por isso o cosmético mora onde os outros o veem (casa, perfil, praça, mercado, cerco).

## 5. O Baú do Mascate

### 5.1 O que é e por que é o ponto mais delicado do jogo

O glossário define o Baú do Mascate como a caixa: comprável com Alvará na loja e negociável por ouro no mercado, sempre com item dentro e com tabela de chances publicada. Pela bíblia (seção 5), o conteúdo é cosmético ou decorativo, nunca poder.

**[H] Por que é delicado.** A síntese da Fase 1 apontou o triângulo de risco: pagamento (o Alvará vem de dinheiro), sorte (a caixa) e prêmio com valor econômico (o conteúdo é negociável, e o RMT informal está aberto). É a configuração que o estudo jurídico marcou como luz vermelha para o art. 50 da LCP e que é a tese do processo de Nova York contra a Valve ([00](../01-pesquisa/00-sintese.md), "O que muda com essas decisões"; [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §3). O Gabriel decidiu manter o Baú e não adotou a salvaguarda S1 (conteúdo preso à conta), assumindo o risco. **Este módulo não reabre a decisão;** desenha o Baú para enfraquecer cada lado do triângulo sem tirar o que foi decidido. **Validar com advogado** antes do lançamento.

| Lado do triângulo | Como o desenho enfraquece | Seção |
|---|---|---|
| Pagamento | Teto de compra de Baús por mês; teto de doação geral | 5.2, 5.7 |
| Sorte | Chances exatas publicadas; garantia a cada 10; **o pior resultado vale, em preço de loja, o preço do Baú** | 5.4, 5.5 |
| Prêmio com valor | **Todo item também é vendido diretamente, com preço fixo**, o que põe teto no prêmio; o item aplicado fica preso e sai do mercado | 5.3, 5.4 |

### 5.2 Preço e compra

- **5 Alvarás por Baú** [H] (R$ 5 em doação).
- **Sem "abrir 10 de uma vez".** Cada Baú se abre com um toque; a revelação dura no máximo 3 segundos e pode ser pulada. Não há quase-acerto ("faltou pouco para o lendário"), som de cassino nem roleta. *Por quê:* o FAQ da ANPD dá "recompensas imprevisíveis que estimulam comportamento compulsivo" como exemplo proibido ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2); a apresentação da sorte deve ser sóbria.
- **Aviso em toda tela de oferta do Baú:** "O conteúdo é aleatório. Veja as chances. Todo item deste Baú também está à venda diretamente." (requisito da sentença do TJDFT contra a Riot, [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §4).
- **A tela de abertura avisa que não há reembolso** de Baú aberto, como de nada na loja (seção 2.1).

### 5.3 Conteúdo e a regra do lacre

**O que pode sair [H]:** aparências de equipamento (visual sobre a peça), trajes, aparências de ajudante, decoração de casa e de salão de guilda, gestos, molduras, pelagens de montaria de passeio. **O que nunca sai:** Alvará, outro Baú, ouro, material de crafting, equipamento com atributo, molde ou receita, título, Mérito ou qualquer coisa da zona vermelha.

**A regra do lacre [H] [proposta de mudança na bíblia]:**
1. O item sai do Baú **lacrado**. Lacrado, é negociável por ouro (no mercado, pela Troca) e pode ser dado de presente.
2. Ao ser **aplicado** (vestido, posto na casa, usado no ajudante), o item fica **preso à conta** e sai do mercado para sempre.
3. O Baú fechado também é negociável por ouro; aberto, deixa de existir.

*Por quê:* cumpre o piso P3 ("tudo que se negocia se gasta") para bens que não se desgastam. O uso tira o item de circulação, como o consumo tira a poção. Também limita a especulação: o estoque negociável encolhe conforme os jogadores usam o que compram. A mesma regra serve para decoração e traje feitos por jogadores (a reconciliar com os módulos 05 e 07).

### 5.4 Tabela de chances publicada (exemplo da primeira edição)

[H] Exemplo para a **Edição do Vau** (1ª Era), com 41 itens. O módulo 05 fecha a lista de itens; a simulação calibra as chances. A tabela real fica na tela do Baú e na página pública do jogo, com as chances **por item**, não só por raridade.

| Raridade | Itens | Chance nominal | Chance de cada item | Chance efetiva com a garantia | Preço direto do item na loja |
|---|---|---|---|---|---|
| Comum | 16 | 62,0% | 3,875% | 58,74% | 5 Alvarás |
| Incomum | 12 | 26,0% | 2,167% | 24,63% | 10 Alvarás |
| Raro | 8 | 9,0% | 1,125% | 12,47% | 20 Alvarás |
| Épico | 3 | 2,5% | 0,833% | 3,46% | 40 Alvarás |
| Lendário | 2 | 0,5% | 0,250% | 0,69% | 60 Alvarás |
| **Total** | **41** | **100%** | — | **100%** | — |

**Por que todo item também está à venda diretamente [H].** É a lição da licença de montaria do Guild Wars 2: depois da revolta, as skins passaram a ser vendidas avulsas e com escolha ([F07](../01-pesquisa/fichas/F07-guild-wars-2.md); [06](../01-pesquisa/06-monetizacao-retencao.md), §2.2). Daí saem três efeitos:
1. **Ninguém precisa da sorte para ter o que quer.** Quem quer um item específico o compra direto, preso à conta.
2. **O prêmio tem teto.** O lendário lacrado não vale muito mais que 60 Alvarás, porque qualquer um pode comprar a versão presa por esse preço. A versão negociável vale o prêmio de poder ser revendida ou dada.
3. **O pior resultado vale o preço do Baú.** O item comum custa, na loja, o mesmo que o Baú (5 Alvarás). Em preço de loja, a sorte só decide quanto a mais se recebe, nunca se o jogador recebe menos do que pagou. **Validar com advogado** se isso pesa a favor na leitura do art. 50 da LCP ("ganho e perda dependem da sorte"). O preço do item lacrado em ouro, no mercado, pode ficar abaixo disso; a regra vale para o preço de loja.

### 5.5 Garantia e valor esperado

**Garantia [H]:** a cada 10 Baús abertos pela mesma conta sem um item Raro ou melhor, o décimo traz um Raro ou melhor, sorteado na proporção nominal (Raro 75%, Épico 20,8%, Lendário 4,2%). O contador é público na tela do Baú e zera quando sai um Raro ou melhor.

**A conta da chance efetiva** (publicada ao lado da nominal). Com `p` = chance nominal de Raro ou melhor = 12% e `q = 1 − p = 0,88`, o número esperado de aberturas até um Raro ou melhor, com garantia na décima, é:

`E = (1 − q^10) ÷ p = (1 − 0,88^10) ÷ 0,12 = (1 − 0,2785) ÷ 0,12 ≈ 6,01 aberturas`

A chance efetiva de Raro ou melhor é `1 ÷ 6,01 ≈ 16,6%`, distribuída entre Raro, Épico e Lendário nas proporções nominais (é a coluna "efetiva" da tabela).

**Valor esperado em preço de loja** (publicado na página de chances, não no botão de compra):

`VE = Σ (chance efetiva × preço direto) = 0,5874 × 5 + 0,2463 × 10 + 0,1247 × 20 + 0,0346 × 40 + 0,0069 × 60 ≈ 9,69 Alvarás`

[H] Em média, cada Baú de 5 Alvarás entrega 9,69 Alvarás em preço de loja, mas em itens que o jogador não escolheu. É o preço da surpresa e da possibilidade de revenda. Publicar o VE é transparência; não o pôr no botão evita usá-lo como argumento de venda.

### 5.6 Edições

- **Uma edição nova por Era** (a 1ª Era tem a Edição do Vau). Cada edição tem visual próprio, ligado à ameaça e à regra da Era.
- **Nenhuma edição sai da loja.** As antigas continuam à venda, com as mesmas chances. *Por quê:* escassez fabricada é FOMO, e o jogo recusa ofertas por tempo limitado ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1). A raridade de um item vem da chance e do uso (o lacre), não do calendário.
- **Mudar a chance de uma edição publicada só a favor do jogador**, com aviso.

### 5.7 Teto do Baú

| Limite | Valor [H] | Por quê |
|---|---|---|
| Baús comprados na loja por conta | 20 por mês (100 Alvarás) | Salvaguarda S5 ([00](../01-pesquisa/00-sintese.md)); o gasto pesado em caixa acompanha o jogo problemático, não a renda (Close et al., [06](../01-pesquisa/06-monetizacao-retencao.md), §4.3) |
| Aberturas por conta, de qualquer origem (loja ou mercado) | 10 por dia e 40 por mês | Fecha a porta de quem compra Baús fechados no mercado para escapar do teto de compra |
| Pausa depois de 5 aberturas seguidas | 60 segundos, com o gasto do mês na tela | Ponto natural de parada (Decreto 12.880, art. 9º, [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2) |
| Conta que fechou a loja para si (seção 7.2) | Não abre Baú, nem os comprados no mercado | O fechamento vale para toda a sorte paga |

### 5.8 Baú e economia (interface com o módulo 07)

- **O Baú fechado é um bem fungível**, e o lugar natural para ele é a Bolsa (livro de ordens). Os itens lacrados, que são únicos, vão para a Feira ou o Pregão. A reconciliar com o módulo 07.
- **O Baú é uma fonte de cosméticos negociáveis e um dreno de Alvarás** (5 por Baú). Os cosméticos lacrados competem com a decoração feita por jogadores; o módulo 07 deve medir se o Baú derruba o preço do que os ofícios fabricam, e a simulação deve testar.
- **Nunca há Baú de graça** (evento, ranking, passe): seria emissão de valor em dinheiro, como o Alvará grátis ([05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.6).

> **Quatro perguntas** — Referência: RubinOT, citado pelo Gabriel [NV: o modelo de caixas desse servidor não foi estudado na Fase 1]; Guild Wars 2 (licença de montaria e venda avulsa); a sentença da Riot no TJDFT · Problema: oferecer a surpresa e a coleção que a decisão do Gabriel pede, com o menor risco jurídico e ético possível · Comportamento: compra de alguns Baús por mês por quem gosta de coleção e troca; o jogador com ouro compra Baús fechados e itens lacrados no mercado · Risco: é a peça do jogo mais exposta à classificação como jogo de azar e a gateways e lojas que recusam caixa paga; ver "Como isso pode dar errado".

## 6. O Passe da Era

### 6.1 Estrutura

[H] Um passe por Era, com trilha grátis e trilha paga, sem poder e **sem expirar**. É o padrão do [06](../01-pesquisa/06-monetizacao-retencao.md) (§3.2 e princípio 6), inspirado no Halo Infinite e no Helldivers 2.

| Regra | Valor [H] | Por quê |
|---|---|---|
| Preço da trilha paga | 20 Alvarás | O mesmo preço de 30 dias de conveniência |
| Níveis | 50; a trilha grátis tem recompensa a cada 2 níveis (25), a paga em todos (50) | — |
| Unidade de progresso | **Feitos** (2 feitos por nível; 100 para completar). O feito é só a contagem do passe, não é moeda nem se negocia. O nome não colide com **Marcos**, a moeda da Travessia no glossário | Progresso por decisão e entrega, não por horas de tela ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.2, "O que muda num idle") |
| Teto semanal | 10 feitos por semana, **acumulável** | O ativo não dispara na frente, e quem passou uma semana fora recupera depois |
| Expiração | Nunca. Passes antigos continuam à venda e podem ser completados a qualquer momento | Halo Infinite ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.2) |
| Passe ativo | O jogador escolhe qual passe recebe os feitos | Helldivers 2 |
| Níveis compráveis | Nunca | Hero Pass do RS3 ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)) |
| Quantos passes por Era | Um | Legend of Mushroom, ~US$ 100/mês em passes ([E03](../01-pesquisa/fichas/E03-legend-of-mushroom.md)) |

**O teto semanal acumulável, em fórmula:** `crédito(s) = 10 × s − feitos já usados`, em que `s` é o número de semanas desde o início da Era. *Exemplo:* numa Era de 13 semanas, o crédito total é 130 feitos e o passe pede 100. No ritmo máximo, o passe se completa na 10ª semana. Quem chega na 8ª semana já tem 80 feitos de crédito. Depois do fim da Era, o crédito do passe antigo continua a crescer 10 por semana, porque ele não expira.

**Por que o passe não está na conveniência.** O [06](../01-pesquisa/06-monetizacao-retencao.md) propôs a assinatura com o passe incluso. Separado, o passe dá ao jogador que só quer a coleção da Era um produto próprio de 20 Alvarás por trimestre, sem precisar comprar conveniência, e cria um segundo uso do Alvará, o que sustenta o preço dele em ouro. O custo é uma compra a mais para quem quer tudo.

### 6.2 Os feitos que contam

[H] Cada tipo de feito tem limite semanal próprio, para que nenhum caminho único seja obrigatório e o ausente que planeja consiga cumprir o teto.

| Feito | Limite por semana | Ativo ou ausente |
|---|---|---|
| Entregar a sua parte de uma encomenda | 3 | Ausente que planeja (a produção da fila vai para a entrega) |
| Contribuir com a Obra | 2 | Ausente que planeja |
| Inscrever-se no cerco ou abastecê-lo | 2 | Um toque antes do prazo |
| Concluir uma obra-prima | 2 | Ativo (sessão curta) |
| Reparar ou reformar uma peça | 1 | Qualquer |
| Concluir um pedido da Câmara | 2 | Ausente que planeja |
| Explorar uma região da Travessia (a partir da 2ª Era) | 2 | Ausente que planeja |
| Apadrinhar um calouro até a cidadania ([12](12-onboarding.md)) | 1 | Social |

A soma dos limites (15) passa do teto (10), para dar escolha. **Venda no mercado não conta como feito,** para não premiar a negociação de fachada entre amigos.

### 6.3 O que cada trilha dá

| | Trilha grátis | Trilha paga |
|---|---|---|
| Cosméticos presos (traje, gesto, moldura, decoração) | Sim (25 recompensas) | Sim (50 recompensas, incluindo as da grátis) |
| Título da Era | Sim | Versão com moldura |
| **Moldes de decoração da Era** (fabricados pelos ofícios, negociáveis pela regra do lacre) | **Sim, só aqui** | Não: um molde na trilha paga seria vender uma fonte de ouro (pergunta 4) |
| Aparência de ajudante, tema de casa, estandarte de guilda | — | Sim |
| Alvará, Baú, ouro, XP, material, equipamento, qualquer item da zona vermelha | **Nunca** | **Nunca** |

**Valor rotulado honesto:** a página do passe mostra a imagem de cada recompensa. Não exibe "vale X Alvarás" (o caso do AFK Journey, [E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md)).

> **Quatro perguntas** — Referência: Halo Infinite (não expira), Helldivers 2 (passes antigos à venda), Hero Pass do RS3 (o que não fazer) · Problema: meta de temporada e receita recorrente barata sem FOMO nem "dinheiro e tempo" · Comportamento: o jogador completa o passe no seu ritmo, cumprindo feitos que já fazem parte do jogo; os moldes da trilha grátis criam demanda para os ofícios · Risco: sem urgência, a receita da Era se dilui (aceito pelo [06](../01-pesquisa/06-monetizacao-retencao.md)); o teto semanal pode irritar o ativo, e por isso é acumulável e o passe tem folga de 30 feitos.

<!-- continua -->
