# GDD 11 — Monetização

> **Escopo.** Como o jogo ganha dinheiro: o Alvará (preço, pacotes, Pix e cartão), a conveniência de 30 dias, os cosméticos da loja direta, o Baú do Mascate, o Passe da Era, o teto de gasto, o reembolso, a proteção do jogador vulnerável, a projeção de receita e a carta pública de monetização.
> **Depende de:** [00 — bíblia](00-biblia.md) e do módulo 07 (economia). Onde este módulo precisa de um número da economia, usa o número-âncora da bíblia ou marca "a reconciliar com o módulo 07".
> **Base:** [06 — monetização e retenção](../01-pesquisa/06-monetizacao-retencao.md), [05d — recomendação de RMT](../01-pesquisa/05d-rmt-recomendacao.md), [05b — jurídico Brasil](../01-pesquisa/05b-rmt-legal-brasil.md), [08 — mercado e posicionamento](../01-pesquisa/08-mercado-posicionamento.md) e [00 — síntese](../01-pesquisa/00-sintese.md).
> **Etiquetas:** [F] fato com fonte · [C] consenso da comunidade · [H] proposta ou hipótese do estúdio · [NV] não verificado. **Todo número deste módulo é [H] até a simulação (módulo 08).** Nada aqui é parecer jurídico: onde a proposta depende da lei, está marcado **"validar com advogado"**.
> **Decisões vigentes que este módulo não reabre** (bíblia, seção 5): Alvará transferível livremente; Cartório desde o lançamento; Baú do Mascate comprável com Alvará e negociável por ouro, com conteúdo cosmético ou decorativo; jogo 18+ com idade verificada; Brasil primeiro, com Pix; o Alvará compra conforto e cosmético, nunca renda, XP ou poder. Onde a pesquisa recomendava outra coisa (por exemplo, "nenhum sorteio pago" no [06](../01-pesquisa/06-monetizacao-retencao.md), princípio 3), vale a decisão do Gabriel, e este módulo desenha as salvaguardas.

## Resumo

- **Alvará a R$ 19,90** [H], o meio da faixa da bíblia, com o mesmo preço unitário em todos os pacotes (1, 3, 6 e 12). Não há desconto por volume. Pix em todos os pacotes; cartão à vista em todos; até 3x sem juros nos pacotes de 6 e de 12. O preço em reais aparece em toda tela que cobra alguma coisa.
- **Três usos do Alvará:** consumido, dá 30 dias de **conveniência**; aberto na loja, vira **R$ 19,90 de saldo da loja** (cosméticos, Passe da Era e Baú do Mascate); ou paga contas no **Cartório**. Ele circula pelo Câmbio e pela Troca, e nunca é dado de graça.
- **Conveniência = forma, nunca resultado.** São nove itens de identidade, organização e vida social: cosmético do mês, guarda-roupa ampliado, predefinições de equipamento, cômodos de decoração, festas na casa, painel de patrimônio, barbearia, temas e selo opcional. Cada um foi checado contra a zona vermelha (seção 3).
- **Loja direta:** cosméticos presos à conta, de R$ 4,90 a R$ 59,90, num catálogo permanente, sem relógio e sem "oferta só para você".
- **Baú do Mascate:** custa R$ 4,90 de saldo do Alvará, e as chances são publicadas na tela e na página do jogo. A cada 10 Baús sem item Raro ou melhor, o décimo garante um. **Todo item do Baú também é vendido diretamente, com preço fixo**, o que põe um teto no valor do prêmio. Os itens saem lacrados e são negociáveis; ao serem aplicados, ficam presos à conta. Limites: 20 Baús comprados por mês, 10 aberturas por dia e 40 por mês.
- **Passe da Era:** R$ 19,90, sem poder e sem expirar. Avança por marcos, não por horas, com teto semanal acumulável, para que quem fica fora uma semana não perca nada.
- **Teto de gasto de R$ 250 por mês para todos**, com níveis de R$ 600 e R$ 1.200 só por pedido e com espera. Há ainda limite de cinco compras por dia, reembolso em 7 dias, painel de gasto, opção de fechar a loja para si e resposta graduada a sinais de risco.
- **Projeção** [H]: R$ 32 mil, R$ 163 mil e R$ 463 mil por mês nos cenários pessimista (2 mil simultâneos), base (3,5 mil) e otimista (5 mil). O cenário base paga uma equipe enxuta de cerca de 5 pessoas e a operação. **O achado principal:** a verificação de idade de cada conta nova come cerca de 30% da receita no cenário base e quase toda a receita no pessimista (seção 8.5).

## 1. A régua: o que pode e o que não pode ir à loja

### 1.1 A zona vermelha

[H] Estes itens nunca vão à loja: nem por reais, nem por Alvará, nem dentro da conveniência, do passe ou do Baú. A lista junta o piso P7 do [conceito](../02-conceito.md) com a zona vermelha do [06](../01-pesquisa/06-monetizacao-retencao.md), §3.4.

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

## 2. O Alvará

### 2.1 O que é e o que faz

O glossário da bíblia define o Alvará como o token oficial, comprado em reais e transferível livremente. Consumido, ele dá 30 dias de conveniência; também pode ser gasto em cosméticos. Este módulo fixa os usos:

| Uso | O que acontece com o Alvará | Observação |
|---|---|---|
| **Conveniência** | Consumido; liga 30 dias de conveniência (seção 3) | Consumir dois soma 60 dias |
| **Saldo da loja** | Consumido; credita R$ 19,90 de saldo, em reais, preso à conta | Compra cosméticos, o Passe da Era e o Baú do Mascate (seção 2.6) |
| **Cartório** | Transferido do comprador ao vendedor da conta; a taxa de 10% em Alvará é destruída | Regras no módulo 07 |
| **Troca e Câmbio** | Passa a outro jogador, diretamente (Troca, taxa de 3% em ouro destruída) ou por ouro (Câmbio, taxa de 12% destruída) | Taxas da bíblia, §6.6; limites e carência no módulo 07 e no 13 |
| **Guardar** | Fica no inventário, sem prazo de validade | É receita diferida para a contabilidade |

**O que o Alvará nunca faz:** comprar algo da zona vermelha; ser dado de graça em evento, ranking ou recompensa; sair do jogo pelo estúdio (o estúdio não compra Alvará de volta). *Por quê:* a queda do PLEX coincidiu com a distribuição grátis ([F01](../01-pesquisa/fichas/F01-eve-online.md); [05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.6); um token dado de graça desvaloriza o que outros pagaram e injeta ouro.

### 2.2 Preço: testando a faixa de R$ 14,90 a R$ 24,90

**Âncoras.** O Steam cobra R$ 32,99 pelo Melvor Idle, que custa US$ 9,99 nos EUA ([B01](../01-pesquisa/fichas/B01-melvor-idle.md)). Isso dá uma razão de preço regional de 3,30 reais por dólar de preço de tabela [H, cálculo sobre dado F]. Aplicada às assinaturas de referência:

| Referência | Preço original [F] | Equivalente em preço regional Steam [H] | Fonte |
|---|---|---|---|
| Torn, Donator Pack (31 dias) | US$ 5 | ~R$ 16,50 | [D01](../01-pesquisa/fichas/D01-torn.md) |
| IdleMMO, membership (30 dias) | US$ 6,99 | ~R$ 23,10 | [C04](../01-pesquisa/fichas/C04-idlemmo.md) |
| Fortnite Crew (mês) | US$ 11,99 | ~R$ 39,60 | [06](../01-pesquisa/06-monetizacao-retencao.md), §3.3 |
| RuneScape, assinatura (mês) | US$ 14,99 | ~R$ 49,50 | [06](../01-pesquisa/06-monetizacao-retencao.md), §4.4 |

**As três pontas da faixa [H]:**

| Preço | A favor | Contra |
|---|---|---|
| R$ 14,90 | Mais pagantes pequenos, o que o Brasil sustenta ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.1); fica abaixo do Torn equivalente | O ouro fica barato em reais, e o "P2W de capital" também; a receita por pagante cai; o saldo de loja de cada Alvará é menor |
| **R$ 19,90** | Entre o Torn e o IdleMMO equivalentes; é um preço de prateleira conhecido do brasileiro; dá saldo suficiente para 4 Baús ou um traje | — |
| R$ 24,90 | Mais receita por pagante; fica perto do IdleMMO equivalente | Preço oficial alto empurra para o mercado cinza: no OSRS, o ouro clandestino sai a 45% do preço do Bond ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)); a nossa conveniência não tem bônus de XP, então vale menos que a do IdleMMO |

**Recomendação [H]: R$ 19,90.**

**Como testar antes de fixar [H]:**
1. **Pesquisa de disposição a pagar no alfa** (método de Van Westendorp: "caro demais", "caro", "barato", "barato demais"), aplicada só a adultos verificados.
2. **Beta com Alvarás de teste**, sem dinheiro e apagados no wipe, para medir os usos (conveniência, Câmbio, loja) e o preço do Alvará em ouro na simulação real.
3. **Nenhum teste A/B de preço em produção.** O Alvará é transferível, então dois preços simultâneos viram arbitragem; além disso, o jogador defende como direito a forma de pagar algo recorrente (caso Apex, [06](../01-pesquisa/06-monetizacao-retencao.md), §2.1).

**Regra de reajuste (vai para a carta pública):** sem aumento nos 12 primeiros meses; depois, nunca acima da inflação oficial (IPCA) acumulada desde o último reajuste, e sempre com 30 dias de aviso. Reduções podem vir a qualquer momento.

**Fora do Brasil [H]:** o Alvará tem um único preço de referência, em reais, e o preço em dólar é a conversão arredondada, revista a cada trimestre, **sem desconto regional**. Como o Alvará é transferível, um preço regional mais barato vira arbitragem: alguém compra barato num país e revende ao outro por fora ([08](../01-pesquisa/08-mercado-posicionamento.md), "Como isso pode dar errado", item 4). Os cosméticos presos podem ter preço regional.

> **Quatro perguntas** — Referência: Torn e IdleMMO (preço de assinatura de idle); preço regional do Steam como régua · Problema: um preço que caiba no bolso brasileiro sem baratear o ouro a ponto de comprar o mercado · Comportamento: compra mensal de um Alvará como hábito, e pacotes para quem paga adiantado · Risco: preço errado só se descobre com dinheiro real, e a regra de reajuste limita a correção para cima.

### 2.3 Pacotes

| Pacote | Alvarás | Preço | Preço por Alvará | Pix | Cartão |
|---|---|---|---|---|---|
| Avulso | 1 | R$ 19,90 | R$ 19,90 | Sim | À vista |
| Trio | 3 | R$ 59,70 | R$ 19,90 | Sim | À vista |
| Semestre | 6 | R$ 119,40 | R$ 19,90 | Sim | Até 3x sem juros |
| Ano | 12 | R$ 238,80 | R$ 19,90 | Sim | Até 3x sem juros |

**Sem desconto por volume [H].** *Por quê:* (1) o Alvará vendido no Câmbio é ouro comprado com dinheiro; desconto por volume barateia o ouro de quem compra muito, o "P2W de capital" do MWI ([C01](../01-pesquisa/fichas/C01-milky-way-idle.md)); (2) o pacote grande com "bônus" é o padrão de valor percebido que os jogadores chamam de predatório ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3); (3) o preço igual é fácil de explicar na carta pública. **Para que servem os pacotes, então:** pagar uma vez por um semestre ou um ano e parcelar no cartão.

> **Quatro perguntas** — Referência: pacotes de moeda premium do topo do mobile ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1), dos quais nos diferenciamos · Problema: dar praticidade e parcelamento sem empurrar o gasto para cima · Comportamento: quem joga há meses paga o ano de uma vez · Risco: perder a receita do "upgrade" de pacote, que o topo do mobile usa; aceito.

### 2.4 Pix, cartão e parcelamento

**[F] Custo dos meios de pagamento.** Na página oficial do link de pagamento do Mercado Pago (consultada em nov./2026, sem data de vigência), o Pix custa 0,99%. O cartão de crédito custa 4,98% com recebimento na hora, 4,48% em 14 dias e 3,99% em 30 dias. O parcelamento sem acréscimo para o comprador soma 2,53% em 2x, 4,62% em 3x, 9,96% em 6x e 17,28% em 12x ([Mercado Pago, link de pagamento](https://www.mercadopago.com.br/ferramentas-para-vender/link-de-pagamento)). [H] Outros provedores terão tabelas próprias; o [05d](../01-pesquisa/05d-rmt-recomendacao.md) (R9) pede dois provedores aprovados por escrito.

**[F] Como o brasileiro paga.** O Pix tem 42% do e-commerce e é usado por ~96% dos adultos; cerca de 60 milhões de brasileiros não têm cartão de crédito; o cartão ainda leva 64% do valor, por causa do parcelamento ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.2).

**Desenho [H]:**

| Meio | Onde | Regra |
|---|---|---|
| **Pix** (QR e copia e cola) | Todos os pacotes, cosméticos, passe | Meio padrão, sempre o primeiro da lista. Confirmação em segundos; o Alvará chega ao inventário na hora, com a carência de transferência do módulo 13 |
| **Pix Automático** | Só a conveniência recorrente | Opcional. Todo mês compra um Alvará e o consome. Aviso 3 dias antes de cada cobrança, cancelamento com um toque e pausa. Exige CNPJ com 6 meses ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §6), então entra depois do lançamento se o CNPJ for novo |
| **Cartão à vista** | Todos os pacotes | Recebimento em 30 dias (3,99%) para reduzir custo |
| **Cartão em até 3x sem juros** | Pacotes de 6 e de 12 | Custa ~8,6% (3,99% + 4,62%). Não oferecemos 6x ou 12x: custam 14% a 21%, e parcelas longas prendem o jogador a um gasto que ele pode querer interromper |
| **Carteira digital** | Todos | Terceira via, se o provedor oferecer |
| **Boleto** | Não | Lento, e o Pix cobre quem não tem cartão |

**Custo médio dos pagamentos [H]:** com 60% em Pix, 30% em cartão à vista e 10% em cartão em 3x, o custo fica em `0,6 × 0,99% + 0,3 × 3,99% + 0,1 × 8,61% ≈ 2,65%`. A projeção usa 3%.

**O parcelamento conta inteiro no teto do mês da compra** (seção 7.1).

> **Quatro perguntas** — Referência: Ragnarok Origin e NetEase, que adotaram Pix no Brasil; o cartão parcelado do e-commerce ([08](../01-pesquisa/08-mercado-posicionamento.md), §2.2) · Problema: pagar sem cartão, sem dólar e sem a comissão das lojas de apps · Comportamento: compra pequena e frequente por Pix; compra grande e planejada no cartão · Risco: o Pix tem golpe e MED (devolução em até 80 dias, [05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.4), o que exige carência e regra de reversão (módulo 13).

### 2.5 Preço em reais sempre visível

[H] A moeda que esconde o preço real está na lista de práticas predatórias ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3), e o regulador já a trata como engano (FTC × HoYoverse, §2.1). Regras de interface:

1. **Todo preço em Alvará vem com o equivalente em reais:** "1 Alvará (R$ 19,90)". No Cartório: "18 Alvarás (≈ R$ 358,20 a preço de loja)".
2. **Todo preço em saldo é em reais:** o Baú custa "R$ 4,90 de saldo", não "1/4 de Alvará".
3. **Antes de confirmar qualquer compra,** a tela mostra o total em reais, o que já foi gasto no mês e quanto resta do teto.
4. **Sem preço riscado, sem "economize X%", sem selo de "mais vendido" e sem contador regressivo.**
5. **Na loja, o Alvará mostra os dois preços:** "R$ 19,90 na loja ou ~N ouro no Câmbio agora". O preço em ouro vem do IPA.

### 2.6 O saldo da loja **[proposta de mudança na bíblia]**

**O problema.** O Alvará é indivisível (é um item, com número de série no livro-razão, [05d](../01-pesquisa/05d-rmt-recomendacao.md), §4.1), mas os cosméticos e o Baú custam menos que R$ 19,90.

**A proposta [H].** Abrir um Alvará na loja o consome e credita **R$ 19,90 de saldo da loja**, com estas regras:
- é mostrado em reais, nunca com nome de moeda;
- fica preso à conta e não se transfere, não se vende e não se saca;
- não expira;
- só compra da loja do estúdio (cosméticos, Passe da Era, Baú do Mascate);
- o saldo que sobra pode ser completado com Pix na compra de um cosmético ou do passe ("faltam R$ 5,00: pagar com Pix"), para não criar o resto que empurra à compra de outro Alvará. **No Baú, só vale saldo de Alvará**, como manda a bíblia ("comprável com Alvará na loja").

**Alternativas consideradas.** (a) Uma moeda premium com nome próprio: rejeitada, porque esconde o preço e é uma camada a mais. (b) Cosméticos com preço em Alvarás inteiros: rejeitada, porque não existe item de R$ 4,90.

**Proposta para o glossário:** "**Saldo da loja** — crédito em reais, preso à conta, gerado ao abrir um Alvará na loja; só compra da loja do estúdio; não é moeda e não circula." **Validar com advogado** que o crédito fechado, que só paga o próprio emissor, fica no circuito fechado da Lei 12.865, art. 6º, §3º ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §6).

> **Quatro perguntas** — Referência: vale-presente de loja; diferencia-se das moedas premium do mobile ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1) · Problema: preços menores que um Alvará sem inventar moeda · Comportamento: o pagante em ouro também chega aos cosméticos, comprando Alvará no Câmbio · Risco: o saldo parecer uma moeda escondida; a mitigação é o valor sempre em reais e o complemento por Pix.

## 3. A conveniência de 30 dias

### 3.1 A lista exata

[H] A conveniência é o pacote de 30 dias que o Alvará liga ao ser consumido. Ela segue o padrão que o [06](../01-pesquisa/06-monetizacao-retencao.md) (§3.3 e princípio 5) recomenda estudar: cosmético mensal, conforto de interface e privilégios sociais de anfitrião. Diferente do 06, **o passe não está incluído** (seção 6.1 explica). Cada item passou pelas quatro perguntas da seção 1.2, e a coluna "zona" usa as zonas do 06: verde (pode vender) e amarela (só com rota por ouro e teto de vantagem; o Alvará tem rota por ouro pelo Câmbio).

| # | Item | O que é | Sem conveniência | Com conveniência | Zona | Checagem contra a zona vermelha |
|---|---|---|---|---|---|---|
| 1 | **Cosmético do mês** | Um visual novo por mês de conveniência (traje, aparência de ajudante ou peça de decoração), escolhido entre dois | — | 1 por mês, preso à conta, **seu para sempre** | Verde | Só aparência; não é negociável, então não vira ouro (pergunta 4) |
| 2 | **Guarda-roupa ampliado** | Aparências salvas para aplicar sobre o equipamento (a peça continua a mesma) | 5 aparências | 30 aparências | Amarela | Muda a forma, não o atributo; a versão grátis cobre o uso normal |
| 3 | **Predefinições de equipamento** | Conjuntos salvos de equipamento, trocados com um toque | 3 | 10 | Amarela | O combate é assíncrono, sem reação em tempo real, então trocar mais depressa não muda resultado. **Não inclui predefinição de fila**: planejar a fila é o núcleo do jogo, e predefinição de fila é o passo antes da automação ([06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 3) |
| 4 | **Cômodos de decoração** | Dois cômodos extras na casa e uma vitrine de troféus | Casa básica | +2 cômodos e a vitrine | Verde | **Os cômodos extras não guardam nada:** só decoração e exibição. Armazenamento é zona vermelha |
| 5 | **Festas na casa (anfitrião)** | Abrir a casa para até 30 convidados; quem visita ganha um enfeite ou gesto da festa, preso e sem valor de mercado; uma mesa de prosa (sala de conversa persistente da casa) | Visitas avulsas | Festas, mesa de prosa | Verde | O benefício vai para os amigos e é só social (a cooperativa hospedada do Egg, Inc., [06](../01-pesquisa/06-monetizacao-retencao.md), §3.3, sem o bônus de renda). **Não abre encomenda extra nem dá recompensa negociável** |
| 6 | **Painel de patrimônio** | Gráficos do seu patrimônio e do seu histórico de compras e vendas por 12 meses | Histórico de 30 dias, em lista | Painel com gráficos e 12 meses | Amarela | Só os seus dados. **Os dados de mercado (preços, volumes, IPA) são grátis e públicos para todos** (P11). **A exportação dos seus dados também é grátis**, por direito de acesso (LGPD, art. 18; validar com advogado) |
| 7 | **Barbearia livre** | Mudar a aparência do personagem e dos ajudantes | 1 vez por mês | Sem limite | Verde | Só aparência |
| 8 | **Temas e molduras** | Temas de interface, cores de nome no chat, molduras de perfil da conveniência | Temas básicos | Temas e molduras exclusivos enquanto ativa | Verde | Só forma. **Acessibilidade nunca entra aqui:** alto contraste, fonte grande, modo daltônico, leitor de tela e modo canto de tela são grátis ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.4, Pokémon GO) |
| 9 | **Selo de apoiador** | Um selo no perfil ("Alvará em dia") | — | Visível, e o jogador pode esconder | Verde | Status sem poder; o jogador escolhe mostrar ou não, para não virar pressão social |

**O que acontece quando a conveniência acaba [H]:** nada se perde. O cosmético do mês fica. As aparências e as predefinições além do limite grátis ficam guardadas, inativas, e voltam quando a conveniência volta. A decoração dos cômodos extras vai para um baú de decoração. *Por quê:* Lei 7, o ausente que não perde ([02a](../01-pesquisa/02a-teoria-design-idle.md)); quem para de pagar não pode ser punido.

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

- **Começa ao consumir o Alvará** e conta 30 dias corridos. Consumir outro soma 30 dias.
- **Não há fidelidade nem "sequência":** nada melhora por assinar meses seguidos, e nada se perde por pausar. *Por quê:* recompensa por continuidade é pressão para não parar, e o Decreto 12.880 cita "recompensas pelo tempo de uso" entre os mecanismos de uso compulsivo a evitar ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2).
- **Pode ser presenteada:** basta transferir um Alvará (Troca). O gasto conta no teto de quem comprou.
- **Mudanças na lista** seguem a carta pública: 30 dias de aviso, e um item nunca sai sem compensação ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 11). Nada que foi tirado de graça do jogo reaparece na conveniência (regra anti-nerf, [06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 4).

> **Quatro perguntas** — Referência: Fortnite Crew (assinatura de cosmético) e a cooperativa hospedada do Egg, Inc.; diferencia-se da membership do IdleMMO e do Premium do Albion, que vendem XP e renda · Problema: dar motivo para consumir Alvarás, o que sustenta o preço do Alvará em ouro e a rota do não pagante, sem dar resultado · Comportamento: compra por identidade, vida social e organização; o jogador com ouro compra conveniência no Câmbio · Risco: valor baixo demais para quem quer poder, o que derruba a demanda por Alvará e o preço dele em ouro; medir e, se preciso, reforçar com mais cosmético e mais vida social, nunca com resultado (seção "Como isso pode dar errado").

## 4. Cosméticos na loja direta

### 4.1 Categorias e preços

[H] Preços em reais, pagos com Pix, cartão ou saldo da loja. Todos os cosméticos da loja direta ficam **presos à conta** ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7): o cosmético da loja nunca vira dinheiro, ouro nem material ([F08](../01-pesquisa/fichas/F08-black-desert.md)).

| Faixa | Preço [H] | Exemplos |
|---|---|---|
| Pequeno | R$ 4,90 | Gesto, moldura de perfil, cor de nome, enfeite de mesa |
| Médio | R$ 9,90 | Aparência de uma peça (sobre o equipamento), item de decoração, pelagem de montaria de passeio |
| Grande | R$ 19,90 | Traje completo, aparência de ajudante, tema de casa |
| Conjunto | R$ 39,90 | Casa temática completa (Festa Junina, Casa de Farinha, Beira-Rio), conjunto de traje e gestos |
| Lendário | R$ 59,90 | Os itens lendários do Baú, vendidos também diretamente (seção 5.4) |

### 4.2 Regras

1. **Catálogo permanente.** Nada sai da loja para criar escassez. A vitrine do mês destaca itens sem relógio, e todo item destacado volta a ficar disponível depois. *Por quê:* oferta por tempo limitado é o padrão que o Decreto 12.880 aponta como mecanismo de uso compulsivo ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1).
2. **Sem oferta personalizada.** Todo jogador vê a mesma loja e os mesmos preços. Não há "oferta só para você" nem oferta que só aparece para quem já comprou ([06](../01-pesquisa/06-monetizacao-retencao.md), §5.4, o contraexemplo do Egg, Inc.).
3. **Presente a outro jogador:** cosmético comprado para um amigo chega preso à conta dele. Conta no teto de quem pagou.
4. **Presente à guilda:** estandartes, decoração de salão e cores de guilda que todos os membros usam. No máximo um presente por semana por pessoa; o presenteador pode ficar anônimo. *Por quê:* o pagante como benfeitor visível ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 8), com freio contra a pressão social de comprar.
5. **Nenhum molde, receita ou ferramenta que fabrique bem negociável** (pergunta 4 da seção 1.2). Decoração e traje feitos por jogadores existem e circulam no mercado, mas os moldes saem do jogo (drops, encomendas, Passe da Era na trilha grátis), nunca da loja. *Por quê:* um molde vendido daria a quem paga uma fonte de ouro, isto é, renda.
6. **Os cosméticos conquistados valem mais que os vendidos em status:** títulos, troféus de cerco e o Selo de mestre nunca estão à venda, e aparecem em destaque no perfil e na vitrine da casa ([06](../01-pesquisa/06-monetizacao-retencao.md), princípio 7; a montaria do WoW em [F06](../01-pesquisa/fichas/F06-world-of-warcraft.md)).
7. **Identidade brasileira sem caricatura:** festas regionais, ofícios e paisagens como tema, revisados pela análise de sensibilidade cultural do módulo 14.

> **Quatro perguntas** — Referência: Path of Exile e Guild Wars 2 (loja de estilo, [F05](../01-pesquisa/fichas/F05-path-of-exile.md); [F07](../01-pesquisa/fichas/F07-guild-wars-2.md)); diferencia-se do Black Desert, em que o cosmético virou poder · Problema: receita recorrente sem mexer no equilíbrio · Comportamento: compra por identidade, coleção e presente · Risco: cosmético vende pouco num idle que se olha pouco ([06](../01-pesquisa/06-monetizacao-retencao.md), "Como isso pode dar errado", item 6); por isso o cosmético mora onde os outros o veem (casa, perfil, praça, mercado, cerco).

## 5. O Baú do Mascate

### 5.1 O que é e por que é o ponto mais delicado do jogo

O glossário define o Baú do Mascate como a caixa: comprável com Alvará na loja e negociável por ouro no mercado, sempre com item dentro e com tabela de chances publicada. Pela bíblia (seção 5), o conteúdo é cosmético ou decorativo, nunca poder.

**[H] Por que é delicado.** A síntese da Fase 1 apontou o triângulo de risco: pagamento (o Alvará vale reais), sorte (a caixa) e prêmio com valor econômico (o conteúdo é negociável, e o RMT informal está aberto). É a configuração que o estudo jurídico marcou como luz vermelha para o art. 50 da LCP e que é a tese do processo de Nova York contra a Valve ([00](../01-pesquisa/00-sintese.md), "O que muda com essas decisões"; [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §3). O Gabriel decidiu manter o Baú e não adotou a salvaguarda S1 (conteúdo preso à conta), assumindo o risco. **Este módulo não reabre a decisão;** desenha o Baú para enfraquecer cada lado do triângulo sem tirar o que foi decidido. **Validar com advogado** antes do lançamento.

| Lado do triângulo | Como o desenho enfraquece | Seção |
|---|---|---|
| Pagamento | Só se compra com saldo de Alvará; teto de compra por mês; teto de gasto geral | 5.2, 5.7 |
| Sorte | Chances exatas publicadas; garantia a cada 10; **o pior resultado vale, em preço de tabela, o preço do Baú** | 5.4, 5.5 |
| Prêmio com valor | **Todo item também é vendido diretamente, com preço fixo**, o que põe teto no prêmio; o item aplicado fica preso e sai do mercado | 5.3, 5.4 |

### 5.2 Preço e compra

- **R$ 4,90 de saldo da loja por Baú** [H]. Um Alvará aberto (R$ 19,90) compra 4 Baús e sobram R$ 0,30, que valem em qualquer cosmético.
- **Só com saldo de Alvará,** como diz a bíblia. Não há compra direta do Baú por Pix: o jogador primeiro obtém um Alvará (em reais ou em ouro, no Câmbio). *Por quê:* o passo extra é uma pausa de decisão, e o teto de Baú fica fácil de contar.
- **Sem "abrir 10 de uma vez".** Cada Baú se abre com um toque; a revelação dura no máximo 3 segundos e pode ser pulada. Não há quase-acerto ("faltou pouco para o lendário"), som de cassino nem roleta. *Por quê:* o FAQ da ANPD dá "recompensas imprevisíveis que estimulam comportamento compulsivo" como exemplo proibido ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2); a apresentação da sorte deve ser sóbria.
- **Aviso em toda tela de oferta do Baú:** "O conteúdo é aleatório. Veja as chances. Todo item deste Baú também está à venda diretamente." (requisito da sentença do TJDFT contra a Riot, [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §4).

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
| Comum | 16 | 62,0% | 3,875% | 58,74% | R$ 4,90 |
| Incomum | 12 | 26,0% | 2,167% | 24,63% | R$ 9,90 |
| Raro | 8 | 9,0% | 1,125% | 12,47% | R$ 19,90 |
| Épico | 3 | 2,5% | 0,833% | 3,46% | R$ 39,90 |
| Lendário | 2 | 0,5% | 0,250% | 0,69% | R$ 59,90 |
| **Total** | **41** | **100%** | — | **100%** | — |

**Por que todo item também está à venda diretamente [H].** É a lição da licença de montaria do Guild Wars 2: depois da revolta, as skins passaram a ser vendidas avulsas e com escolha ([F07](../01-pesquisa/fichas/F07-guild-wars-2.md); [06](../01-pesquisa/06-monetizacao-retencao.md), §2.2). Daí saem três efeitos:
1. **Ninguém precisa da sorte para ter o que quer.** Quem quer um item específico o compra direto, preso à conta.
2. **O prêmio tem teto.** O lendário lacrado não vale muito mais que R$ 59,90, porque qualquer um pode comprar a versão presa por esse preço. A versão negociável vale o prêmio de poder ser revendida ou dada.
3. **O pior resultado vale o preço do Baú.** O item comum mais barato custa, na loja, o mesmo que o Baú (R$ 4,90). Em preço de tabela, a sorte só decide quanto a mais se recebe, nunca se o jogador recebe menos do que pagou. **Validar com advogado** se isso pesa a favor na leitura do art. 50 da LCP ("ganho e perda dependem da sorte"). O preço do item lacrado em ouro, no mercado, pode ficar abaixo disso; a regra vale para o preço de tabela.

### 5.5 Garantia e valor esperado

**Garantia [H]:** a cada 10 Baús abertos pela mesma conta sem um item Raro ou melhor, o décimo traz um Raro ou melhor, sorteado na proporção nominal (Raro 75%, Épico 20,8%, Lendário 4,2%). O contador é público na tela do Baú e zera quando sai um Raro ou melhor.

**A conta da chance efetiva** (publicada ao lado da nominal). Com `p` = chance nominal de Raro ou melhor = 12% e `q = 1 − p = 0,88`, o número esperado de aberturas até um Raro ou melhor, com garantia na décima, é:

`E = (1 − q^10) ÷ p = (1 − 0,88^10) ÷ 0,12 = (1 − 0,2785) ÷ 0,12 ≈ 6,01 aberturas`

A chance efetiva de Raro ou melhor é `1 ÷ 6,01 ≈ 16,6%`, distribuída entre Raro, Épico e Lendário nas proporções nominais (é a coluna "efetiva" da tabela).

**Valor esperado em preço de tabela** (publicado na página de chances, não no botão de compra):

`VE = Σ (chance efetiva × preço direto) = 0,5874 × 4,90 + 0,2463 × 9,90 + 0,1247 × 19,90 + 0,0346 × 39,90 + 0,0069 × 59,90 ≈ R$ 9,59`

[H] Em média, cada Baú de R$ 4,90 entrega R$ 9,59 em preço de tabela, mas em itens que o jogador não escolheu. É o preço da surpresa e da possibilidade de revenda. Publicar o VE é transparência; não o pôr no botão evita usá-lo como argumento de venda.

### 5.6 Edições

- **Uma edição nova por Era** (a 1ª Era tem a Edição do Vau). Cada edição tem visual próprio, ligado à ameaça e à regra da Era.
- **Nenhuma edição sai da loja.** As antigas continuam à venda, com as mesmas chances. *Por quê:* escassez fabricada é FOMO, e o jogo recusa ofertas por tempo limitado ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.1). A raridade de um item vem da chance e do uso (o lacre), não do calendário.
- **Mudar a chance de uma edição publicada só a favor do jogador**, com aviso.

### 5.7 Teto do Baú

| Limite | Valor [H] | Por quê |
|---|---|---|
| Baús comprados na loja por conta | 20 por mês (R$ 98) | Salvaguarda S5 ([00](../01-pesquisa/00-sintese.md)); o gasto pesado em caixa acompanha o jogo problemático, não a renda (Close et al., [06](../01-pesquisa/06-monetizacao-retencao.md), §4.3) |
| Aberturas por conta, de qualquer origem (loja ou mercado) | 10 por dia e 40 por mês | Fecha a porta de quem compra Baús fechados no mercado para escapar do teto de compra |
| Pausa depois de 5 aberturas seguidas | 60 segundos, com o gasto do mês na tela | Ponto natural de parada (Decreto 12.880, art. 9º, [05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2) |
| Conta que fechou a loja para si (seção 7.2) | Não abre Baú, nem os comprados no mercado | O fechamento vale para toda a sorte paga |

### 5.8 Baú e economia (interface com o módulo 07)

- **O Baú fechado é um bem fungível**, e o lugar natural para ele é a Bolsa (livro de ordens). Os itens lacrados, que são únicos, vão para a Feira ou o Pregão. A reconciliar com o módulo 07.
- **O Baú é uma fonte de cosméticos negociáveis e um dreno de Alvarás.** Cada Baú comprado consome 1/4 de Alvará. Os cosméticos lacrados competem com a decoração feita por jogadores; o módulo 07 deve medir se o Baú derruba o preço do que os ofícios fabricam, e a simulação deve testar.
- **Nunca há Baú de graça** (evento, ranking, passe): seria emissão de valor em dinheiro, como o token grátis ([05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.6).

> **Quatro perguntas** — Referência: RubinOT, citado pelo Gabriel [NV: o modelo de caixas desse servidor não foi estudado na Fase 1]; Guild Wars 2 (licença de montaria e venda avulsa); a sentença da Riot no TJDFT · Problema: oferecer a surpresa e a coleção que a decisão do Gabriel pede, com o menor risco jurídico e ético possível · Comportamento: compra de alguns Baús por mês por quem gosta de coleção e troca; o jogador com ouro compra Baús fechados e itens lacrados no mercado · Risco: é a peça do jogo mais exposta à classificação como jogo de azar e a gateways e lojas que recusam caixa paga; ver "Como isso pode dar errado".

## 6. O Passe da Era

### 6.1 Estrutura

[H] Um passe por Era, com trilha grátis e trilha paga, sem poder e **sem expirar**. É o padrão do [06](../01-pesquisa/06-monetizacao-retencao.md) (§3.2 e princípio 6), inspirado no Halo Infinite e no Helldivers 2.

| Regra | Valor [H] | Por quê |
|---|---|---|
| Preço da trilha paga | R$ 19,90 (saldo de um Alvará, ou Pix e cartão direto) | Um preço só, que o jogador já conhece |
| Níveis | 50; a trilha grátis tem recompensa a cada 2 níveis (25), a paga em todos (50) | — |
| Unidade de progresso | **Feitos** (2 feitos por nível; 100 para completar). O feito é só a contagem do passe, não é moeda nem se negocia. O nome não colide com **Marcos**, a moeda da Travessia no glossário | Progresso por decisão e entrega, não por horas de tela ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.2, "O que muda num idle") |
| Teto semanal | 10 feitos por semana, **acumulável** | O ativo não dispara na frente, e quem passou uma semana fora recupera depois |
| Expiração | Nunca. Passes antigos continuam à venda e podem ser completados a qualquer momento | Halo Infinite ([06](../01-pesquisa/06-monetizacao-retencao.md), §3.2) |
| Passe ativo | O jogador escolhe qual passe recebe os feitos | Helldivers 2 |
| Níveis compráveis | Nunca | Hero Pass do RS3 ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)) |
| Quantos passes por Era | Um | Legend of Mushroom, ~US$ 100/mês em passes ([E03](../01-pesquisa/fichas/E03-legend-of-mushroom.md)) |

**O teto semanal acumulável, em fórmula:** `crédito(s) = 10 × s − feitos já usados`, em que `s` é o número de semanas desde o início da Era. *Exemplo:* numa Era de 13 semanas, o crédito total é 130 feitos e o passe pede 100. No ritmo máximo, o passe se completa na 10ª semana. Quem chega na 8ª semana já tem 80 feitos de crédito. Depois do fim da Era, o crédito do passe antigo continua a crescer 10 por semana, porque ele não expira.

**Por que o passe não está na conveniência.** O [06](../01-pesquisa/06-monetizacao-retencao.md) propôs a assinatura com o passe incluso. Separado, o passe dá ao jogador que só quer a coleção da Era um produto próprio de R$ 19,90 por trimestre, sem precisar ligar a conveniência, e cria um segundo consumo de Alvará, o que sustenta o preço do Alvará em ouro. O custo é uma compra a mais para quem quer tudo.

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

**Valor rotulado honesto:** a página do passe mostra a imagem de cada recompensa. Não exibe "vale R$ X" (o caso do AFK Journey, [E01](../01-pesquisa/fichas/E01-afk-arena-e-afk-journey.md)).

> **Quatro perguntas** — Referência: Halo Infinite (não expira), Helldivers 2 (passes antigos à venda), Hero Pass do RS3 (o que não fazer) · Problema: meta de temporada e receita recorrente barata sem FOMO nem "dinheiro e tempo" · Comportamento: o jogador completa o passe no seu ritmo, cumprindo feitos que já fazem parte do jogo; os moldes da trilha grátis criam demanda para os ofícios · Risco: sem urgência, a receita da Era se dilui (aceito pelo [06](../01-pesquisa/06-monetizacao-retencao.md)); o teto semanal pode irritar o ativo, e por isso é acumulável e o passe tem folga de 30 feitos.

## 7. Teto de gasto, reembolso e proteção do jogador vulnerável

### 7.1 Teto de gasto

[H] O desenho mais robusto encontrado no [06](../01-pesquisa/06-monetizacao-retencao.md) (§5.3) é o teto de produto, igual para todos, e não o teto por idade ou por lei: a Coreia mostra que o teto externo cai sob pressão; o Japão, que a autodeclaração o esvazia. Como o jogo inteiro é 18+, o aumento não depende de idade, e sim de pedido explícito e espera.

| Nível | Teto mensal [H] | Como se chega | Duração |
|---|---|---|---|
| **Padrão** | **R$ 250** | Todos começam aqui | Permanente |
| Ampliado | R$ 600 | Pedido na tela de limites, confirmação por segundo fator, **espera de 72 horas** | 90 dias; depois volta ao padrão, salvo novo pedido |
| Máximo | R$ 1.200 (teto absoluto) | Estar no ampliado há 30 dias, novo pedido, **espera de 7 dias** e uma autoavaliação curta e neutra ("o seu gasto está dentro do que você planeja?"), que não bloqueia nada | 90 dias |

**Por que R$ 250 [F + H].** Na pesquisa da Serasa com a Gamers Club (jul./2025, 4.585 entrevistas), 77% dos jogadores disseram gastar até R$ 250 por mês com jogos digitais ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3). [H] O teto padrão cobre o orçamento mensal inteiro de jogos de três em cada quatro jogadores, e comporta o pacote anual (R$ 238,80) num mês.

**Regras que valem em todos os níveis [H]:**
- **Tudo conta:** Alvará, cosmético, passe, parcelado (o valor inteiro, no mês da compra) e presente.
- **Até 5 compras em 24 horas,** de qualquer valor. *Por quê:* limitar o número de transações por intervalo é a recomendação de Spiel et al. ([02a](../01-pesquisa/02a-teoria-design-idle.md), §10.4).
- **Compra única acima de R$ 100 pede confirmação em dois passos,** com o gasto do mês na tela.
- **O sublimite do Baú** (R$ 98 por mês, seção 5.7) fica dentro do teto.
- **O Cartório não fura o teto.** Uma conta de 30 Alvarás (R$ 597) exige o nível ampliado, dois meses de compra ou Alvarás comprados com ouro. *Por quê:* a compra de conta é a maior compra única do jogo, e o teto protege justamente aí.
- **O jogador pode baixar o próprio teto a qualquer momento, com efeito imediato.** Aumentar segue a tabela acima.

**O que isso faz com as baleias [H].** Com o teto, o maior pagante possível gasta R$ 14.400 por ano. Na Jagex, os tetos eram de £1.000 por semana e £5.000 por mês ([F03](../01-pesquisa/fichas/F03-runescape-e-osrs.md)). No cenário base da seção 8, o 1% que mais paga responde por cerca de 12% da receita, contra 48% da receita vinda de 0,19% dos jogadores no F2P mobile medido pela Swrve ([06](../01-pesquisa/06-monetizacao-retencao.md), §4.3). É o objetivo: a receita não depende de quem perdeu o controle.

### 7.2 Ferramentas de cuidado, ligadas por padrão

| Ferramenta | Como funciona [H] | Referência |
|---|---|---|
| **Painel de gasto** | Sempre visível na loja: gasto do mês, dos últimos 12 meses e da vida da conta, em reais, com a lista de compras | [06](../01-pesquisa/06-monetizacao-retencao.md), §5.4 |
| **Limites pessoais** | O jogador fixa um teto menor por mês, por semana, para o Baú, ou zero para o Baú | FIFA Playtime ([06](../01-pesquisa/06-monetizacao-retencao.md), §5.3) |
| **Fechar a loja para mim** | 30, 90 ou 180 dias, ou permanente. Durante o prazo, nada se compra e nenhum Baú se abre, nem os comprados no mercado. Reabrir só depois do prazo, nunca antes. A conveniência em curso continua | Princípio 10 do [06](../01-pesquisa/06-monetizacao-retencao.md) |
| **Lembrete antes de cada compra** | "Este mês: R$ 120 de R$ 250." | — |
| **Nada de pressão** | Sem contagem regressiva, sem oferta personalizada, sem notificação de promoção, sem e-mail de "volte e compre", sem oferta na tela de retorno do ausente ([12](12-onboarding.md)) | Petrovskaya e Zendle ([06](../01-pesquisa/06-monetizacao-retencao.md), §2.3); Decreto 12.880, art. 10 ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §2) |
| **Apoio** | Link fixo para canais de apoio a quem sente que perdeu o controle do jogo ou do gasto (lista a montar com especialista e a validar) | GambleAware ([06](../01-pesquisa/06-monetizacao-retencao.md), §5.1) |

### 7.3 Sinais de risco e resposta graduada

[H] O gasto pesado em caixas se correlaciona com a gravidade do jogo problemático (ρ = 0,34), e não com a renda (ρ = 0,02) (Close et al., [06](../01-pesquisa/06-monetizacao-retencao.md), §5.1). O jogo observa sinais simples, sem inferir saúde e sem usá-los para vender:

| Sinal | Resposta |
|---|---|
| Teto atingido 3 meses seguidos | **Nível 1:** mensagem neutra com o painel e um convite para definir um limite pessoal |
| Gasto que sobe 3 meses seguidos | Nível 1 |
| Máximo de aberturas de Baú no dia, 3 dias seguidos | **Nível 2:** pausa de 24 horas no Baú, avisada, e convite para fixar um limite |
| Dois pedidos de aumento de teto em 6 meses | Nível 2: o segundo aumento fica bloqueado por 90 dias |
| Contestação da própria compra (estorno pedido pelo jogador ao banco) | Nível 2, além da regra de reversão do módulo 13 |
| Vários sinais juntos | **Nível 3:** oferta de conversa com uma pessoa da equipe de cuidado (opcional) e indicação de apoio |

**Regras:** o sinal nunca gera oferta, desconto nem bônus; nunca reduz benefícios já pagos; o jogador vê o motivo de cada resposta. **Validar com advogado** a base legal do tratamento desses dados (LGPD, legítimo interesse ou proteção do titular) e o aviso de privacidade.

### 7.4 Reembolso

[F] O CDC dá 7 dias para desistir de compra feita fora do estabelecimento (art. 49), e a lei brasileira não tem a exceção europeia para conteúdo digital entregue na hora ([05b](../01-pesquisa/05b-rmt-legal-brasil.md), §4). [H] A postura prudente é reembolsar o que não foi usado. A tabela vira política pública; tudo nela é **validar com advogado**.

| Situação | Regra [H] |
|---|---|
| Alvará não usado e não transferido, até 7 dias | Reembolso integral, sem perguntas, pelo mesmo meio de pagamento. O Alvará é revogado |
| Alvará consumido em conveniência há até 7 dias | Reembolso integral, e a conveniência termina. Se houver abuso medido (ciclos de "usa e devolve"), passar a uma vez a cada 12 meses |
| Saldo da loja não gasto, até 7 dias da compra do Alvará | Reembolso do saldo restante |
| Cosmético da loja direta não aplicado, até 7 dias | Reembolso integral |
| Passe da Era com até 4 níveis da trilha paga recebidos, até 7 dias | Reembolso integral; as recompensas recebidas são retiradas |
| Baú aberto | Sem reembolso. A tela avisa antes da abertura. É o ponto de maior disputa possível: validar com advogado |
| Alvará já transferido (Troca, Câmbio, Cartório) | O reembolso não alcança o Alvará que está com outra pessoa. A compra avisa que o arrependimento vale até a primeira transferência. **Validar com advogado** se o aviso é suficiente diante do art. 51 do CDC |
| Compra com cartão roubado ou de terceiro sem autorização | Regra de reversão do [05d](../01-pesquisa/05d-rmt-recomendacao.md) (§5.4), detalhada no módulo 13: o comprador de boa-fé fica com o Alvará, o estúdio absorve a perda, e quem fraudou recebe dívida em ouro e banimento |
| Chargeback | Resposta proporcional; nunca bloqueio da conta inteira sem processo (o que a FTC condenou no caso Epic, [06](../01-pesquisa/06-monetizacao-retencao.md), §2.1) |

**A carência de transferência** (S2) do módulo 13 coincide com a janela do arrependimento: durante a carência, devolver é simples; depois da transferência, a cadeia já tem outra pessoa.

> **Quatro perguntas** — Referência: tetos da Jagex, FIFA Playtime, o "cofre" de autoexclusão das casas de aposta reguladas [NV: modelo citado de memória, não estudado na Fase 1], o caso Clicker Heroes 2 ([A02](../01-pesquisa/fichas/A02-clicker-heroes.md)) · Problema: uma receita que não dependa de quem perdeu o controle, num jogo que tem caixa paga · Comportamento: o jogador vê e escolhe quanto gasta; o grande pagante precisa pedir e esperar · Risco: o teto empurra quem quer gastar mais para o mercado cinza (comprar Alvará e ouro de outros jogadores por Pix, fora do jogo); a mitigação é medir o preço do nosso ouro no mercado cinza ([05d](../01-pesquisa/05d-rmt-recomendacao.md), §5.7) e manter o canal oficial mais seguro.

<!-- continua -->
