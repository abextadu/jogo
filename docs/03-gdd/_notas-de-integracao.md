# Notas de integração do GDD (arquivo de trabalho)

## 07 — Economia (1ª versão em 2026-11-11; revisão para Alvará em coins em andamento)

**Decisões centrais [H]:**
- **O ouro só nasce em quatro lugares:** venda a NPC (só matéria-prima bruta, com preço decrescente no dia: `G = (H/ln2)·ln(1 + B·ln2/H)`, H = 300, preço-base em 40% do valor de referência), encomendas, cercos e eventos com inscrição, e o começo do jogo. O combate idle não solta ouro.
- **O teto de emissão limita o que sai da conta, não o que é produzido:** `teto = 600 + 30n + 50m` por dia, acumula até 3 dias, começa em 25% nas contas novas; crédito para insumos comprados; o excedente fica para uso próprio ou vira obra e Mérito.
- **O dreno principal é o consumo embutido:** insumos vendidos pelo NPC (~12% do valor do produto, corrigidos pelo IPA) e o desgaste. Dobrar todas as taxas muda a massa de equilíbrio em menos de 15%.
- **Câmbio por leilão a cada hora** (preço único por rodada, banda ±3% por rodada e ±10% por dia, 12% sobre quem vende, limite de compra por conta por semana).
- **Cartório:** vende o personagem, não o cidadão nem o cofre (Mérito, ouro, Alvará e armazém ficam com o vendedor); equipamento preso ao comprador por 30 dias; aviso 72 h antes; Alvarás do vendedor retidos 7 dias.
- **Baú:** tabela de chances com garantia, máximo de lendários, teto de compra (25/mês) e de abertura (40/mês); aplicar um cosmético o prende à conta (dreno).
- **Constituição de 14 artigos;** a Câmara só mexe na taxa da Feira (4–8%), nos bens das encomendas e na escolha da obra.

**Para a simulação:** 48 parâmetros na seção 13, com valor inicial e faixa. Critérios de saúde: IPA de 0% a 8% ao ano; drenos entre 85% e 95% das fontes; 10% a 30% das contas no teto; Alvará valendo de 12 a 20 dias de renda do jogador mediano (revisar com coins); top 10% com menos de 60% da riqueza. Dez cenários de estresse, entre eles 90 dias sem jogador novo e bots em 20% das contas.

**Propostas de mudança na bíblia:** Alvará na Troca paga 12% (não 3%), senão o Câmbio é contornado; Baú lacrado paga 12% em qualquer venda ou Troca; na Troca cada lado paga 3% do que recebe; ouro com duas casas decimais; "valor de referência" e "cota" no glossário; assombrados não soltam moeda; pequenas taxas de anúncio na Feira, no Pregão e no Cartório; Mérito em duas contas (vitalício e da Era); Câmbio por leilão a cada hora; o 1% de anúncio da Bolsa só para a ordem que fica no livro.

**Riscos apontados:** Baú (pagamento + sorte + prêmio com valor; risco assumido); contas de terceiros farmando (~R$ 105/mês no topo, no limite da meta); erro no controle do teto vira dupe; deflação dos básicos (o mais provável); espiral de custos se insumos seguirem o IPA; Câmbio raso no lançamento; Troca como canal de lavagem; Cartório como rota de conta roubada.

> Interfaces entre módulos, propostas de mudança na bíblia e conflitos, registrados à medida que os relatórios chegam. Servem à simulação (módulo 08) e à revisão de consistência do fim da Fase 3.

## 13 — Anti-abuso (concluído em 2026-11-11)

**Decisões centrais:**
- O RMT informal não é infração; a origem ilícita do valor é. Regra pública: "quem compra por fora compra o risco". Valor de bot, fraude ou dupe é removido de quem o recebeu por Troca sem contrapartida; quem vendeu a preço de mercado fica com o que recebeu.
- Conta do abuso: `lucro = E × P × D × (1 − perdas) − C`. Com uma pessoa verificada por conta, a conta de fazenda rende ~R$ 12 em 5 semanas e deixa de compensar.
- Dois cofres de identidade: um guarda só "18+: sim"; o outro, um pseudônimo de pessoa gerado pelo fornecedor sobre o CPF (uma conta ativa por pessoa). O estúdio não guarda documento, CPF nem rosto.
- Disjuntores por sistema; remoção de dupe sem rollback geral, por regra de contaminação.
- A carência do Alvará "viaja com o valor": o Baú comprado com Alvará em carência a herda.
- Estorno vira dívida em ouro, paga com 50% das entradas de ouro; nunca exige comprar Alvará; a conta nunca é bloqueada inteira por um estorno.
- Cartório: vendedor com 30+ dias, 60+ h ativas e 2FA; comprador fica 30 dias sem voto e 90 sem revender; quem compra outra conta põe a antiga em "aposentadoria".
- API só de leitura (modelo Torn); nenhuma integração com sites de RMT; índice cinza interno do preço do ouro fora do jogo.

**Interfaces para a simulação (§12.1 do módulo):**
- Bots: 3% das contas com automação na própria conta e 0,5% em fazendas. Estresse: 10% e 3%. Catástrofe: 15% das contas novas por 14 dias.
- Detecção: fazendas 60% por onda, a cada 3 semanas; automação 8% por semana; recuperação de 70% do valor, destruído (dreno de fiscalização).
- Preço do ouro no mercado cinza: 50% do oficial. Disputas de pagamento: 0,3% (disjuntor a 0,8%).
- Carências: 7 dias na primeira compra e no cartão; 72 h no Pix; até 30 dias com risco.
- Conta nova (< 14 dias ou < 20 h ativas): saída sem contrapartida de até 2 × T por dia; revisão acima de 10 Alvarás em 7 dias.
- **Requisito ao 07:** um dia de teto de emissão negociável (T) deve valer cerca de R$ 1; com T dez vezes maior, a fazenda volta a dar lucro.

**Propostas de mudança na bíblia:**
- Glossário: Carência, Disjuntor, Risco de troca, Dívida em ouro, Aposentadoria.
- Regra explícita "uma pessoa, uma conta ativa".
- Números-âncora de carências e de "conta nova".
- Ler "transferível livremente" como "com freios temporários e publicados" (carências e limites de conta nova). **Atenção:** isso toca a decisão 1 do Gabriel; levar ao checkpoint da Fase 3 como salvaguarda S2 detalhada, sem reinterpretar a decisão.
- Prólogo sem conta antes da verificação de idade (a reconciliar com o 12).

**Conflitos em aberto:**
- ECA Digital, art. 13 (dados de verificação só para essa finalidade) × uso da verificação para garantir uma conta por pessoa.
- Proporcionalidade da biometria segundo a ANPD.
- Limites e carências × "transferível livremente".
- Funil de entrada × "jogo inteiro 18+".
