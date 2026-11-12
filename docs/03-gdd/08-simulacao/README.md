# Simulação da economia (GDD 08)

Simulação em Node.js puro, sem dependências, de 12 meses de uma Cidade. É o único código permitido antes da Fase 5 (CLAUDE.md). O documento de leitura, com as iterações, os resultados e as recomendações, é o [08-simulacao.md](../08-simulacao.md).

## Como rodar

Requer Node.js 18 ou mais novo (testado no 26).

```bash
node sim.js --cenario base --semente 42      # um cenário; imprime o resumo e grava resultados/base.csv
node sim.js --todos                          # todos os cenários; grava os CSVs, resultados/resumo.json e resultados/relatorio.html
node sim.js --todos estresse                 # só um grupo (base, estresse, reconciliacao, sensibilidade) ou um prefixo de id
node sim.js --lista                          # lista os cenários
```

Opções: `--escala 0.2` (fração das contas simuladas; 1.0 simula a Cidade inteira, ~5 vezes mais lento), `--dias 365`, `--semente N`, `--quieto`, `--sem-csv`.

**Em paralelo** (um processo por parte, depois junta):

```bash
node sim.js --todos --parte 1/4      # ... e 2/4, 3/4, 4/4, cada um num terminal
node sim.js --relatorio              # junta as partes em resumo.json e relatorio.html
```

**Várias sementes** (o ruído do modelo é grande; decida pela média):

```bash
node sim.js --sementes 42,7,2026 --cenarios base,r3a_vr_mercado_portao --saida sementes_x.json
```

Tempo: ~35 a 45 s por cenário na escala 0,2 (num processo só); o `--todos` (47 cenários) leva ~30 min, ou ~12 min em 4 partes. A mesma semente dá sempre o mesmo resultado. Os arquivos `resultados/sementes_a.json`, `sementes_b.json` e `sementes_c.json` trazem as médias de três sementes usadas nas decisões do 08.

## Arquivos

| Arquivo | O que é |
|---|---|
| `sim.js` | O modelo (comentado em português, seções numeradas de 1 a 20) |
| `relatorio.js` | Gera o `relatorio.html` (SVG embutido, sem bibliotecas) |
| `parametros.json` | Todos os parâmetros, com o valor recomendado e a origem no GDD em `_fonte` |
| `cenarios.json` | Base, estresses, reconciliações e sensibilidades; cada um só lista o que muda |
| `resultados/<cenário>.csv` | Série diária (uma linha por dia, ~110 colunas) |
| `resultados/resumo.json` | Resumo de cada cenário e o resultado de cada critério de saúde |
| `resultados/sementes_*.json` | Média, mínimo e máximo de três sementes para o base e os cenários das decisões |
| `resultados/relatorio.html` | Relatório autocontido com as séries principais |

Para criar um cenário, acrescente um item em `cenarios.json` com `id`, `grupo`, `nome`, `descricao` e `mudancas` (o que muda em relação ao `parametros.json`, com a mesma estrutura).

## O que o modelo representa

- **Contas (agentes).** Perfis casual, regular e hardcore (02 §3.3); pagantes sobrepostos aos perfis (11 §8); automação na própria conta e fazendas de contas falsas (13 §12.1; 3% das contas na 2ª rodada). Cada conta tem dois ofícios mestres, vocação, filas, taxa ausente, Selo de mestre, ouro, Coins por lote com carência, estoque por grupo de bens (de origem, circulante e preso) e cota do teto.
- **População.** Onda de lançamento e entrada diária de contas novas, sem verificação desde o checkpoint 3; retenção do 12 (D1 45%, D7 22%, D30 10%; na 1ª rodada, 50%, 25% e 12%) e evasão mensal do 07 depois do 30º dia.
- **Progressão (02).** XP por hora por tier, domínio, taxa ausente com os seis marcos, filas 1 a 3, curva `5 × n^2,75`, bônus de calouro, Maestria e Selo, tiers do 06 (1, 15, 35, 55, 75, 90).
- **Produção (05/06).** Cada hora de fila rende 60 minutos de VR × domínio × taxa. Coleta, transformação (com ligas e insumos "sem tier"), criação de equipamento e de consumível; aprendiz em T1–T2; drops do combate (04). A criação só compra insumo se a margem esperada (preço × fração que vende) compensa; parte da fila segue o tier mais lucrativo.
- **Consumo (04/05/06).** Desgaste de equipamento, kits, refeição, poções e consumível de vocação por hora de combate; ferramentas por hora de ofício; cerco; Fronteira; festas; Moda da Cidade.
- **Mercado.** 24 grupos de bens (bruto, insumo, equipamento, consumível × T1–T6). Cada dia, compras e ofertas se encontram; o preço anda em direção ao equilíbrio (no máximo ±5% por dia). Taxas da Bolsa, da Feira (Conselho), da Troca. A Oficina da Cidade vende preso a 2× VR, com limite diário.
- **Teto de emissão (07 §3).** `teto = base + a × n + b × m`, acúmulo de 3 dias, rampa de conta nova, portão de saída com crédito dos insumos; variantes "nasce preso" (05/06), VR de mercado, VR fixo e unidades.
- **Ouro.** Fontes: venda a NPC com curva logarítmica, encomendas, cercos, eventos, começo do jogo. Drenos: insumos de NPC indexados ao IPC, partida, ajudantes, taxas, Câmbio, Troca, Obras em ouro, luxos, Selo, Oficina, fiscalização de bots.
- **Coins.** Doação → Coins por lote, sem carência desde o checkpoint 3 (o parâmetro existe para comparar com a 1ª rodada); loja (dreno) com Baú; conveniência; Câmbio por leilão de chamada a cada hora (banda ±3% por rodada e ±10% por dia, taxa de 12%, ordens inteiras de 10 a 2.000); Troca de Coins (com fuga do Câmbio quando ela fica mais barata); Baú lacrado no mercado; Bazar de Personagens; contestação com suspensão até regularizar e disjuntor.
- **Saídas diárias.** IPC (cesta encadeada, base 100 no dia 30), preço do Coin e do premium, massa de ouro, estoque de Coins, velocidade, fontes e drenos por categoria, Gini e top 1% e 10%, preços por grupo, contas no teto, lucro da conta-fazenda, salário-teto, dias de renda do premium e outros (ver o cabeçalho dos CSVs).

## Simplificações e limitações principais

1. **Bens agregados.** 24 grupos no lugar de ~400 itens; qualidade, obras-primas, lendários e cosméticos não entram nos preços.
2. **Comportamento [H].** Preço de reserva de quem vende, propensão a vender, disposição a pagar pelo premium, poupança e luxo são palpites. **O nível absoluto dos preços (~0,4 a 0,6 do VR de lançamento) vem sobretudo do preço de reserva**; o que o modelo mede com mais confiança são tendências, sinais e diferenças entre cenários.
3. **Passo diário.** O artesão paga os insumos do dia com o caixa do dia; isso exagera a falta de capital de giro em relação a um jogo em que se compra e vende várias vezes ao dia.
4. **Ruído.** Com a escala 0,2, a tendência de 6 meses do IPC varia cerca de ±25 pontos entre sementes. Leia os cenários contra o base, e o base pela média das sementes (S5 e S10).
5. **XP independe do mercado.** A progressão segue o modelo do 02 mesmo quando falta insumo ou ouro; a produção, não.
6. **Fora do modelo.** Guildas como agentes, Conselho como votação, Leilão de raros, RMT fora do jogo (só a fazenda), Mérito com valor próprio, retorno de quem saiu.

Detalhes, números e o que cada limitação pode esconder: [08-simulacao.md](../08-simulacao.md), seções 7 e 9.

## 2ª rodada (Fase 4, checkpoint 3)

O `parametros.json` passou a ser a base da 2ª rodada: sem carência, fazendas em 3% das contas, contestação a 0,5% com 95% dos Coins já transferidos, funil e retenção do 12 refeitos e o bônus da refeição dentro do teto do domínio (D15). O cenário `r1_base_1a_rodada` reproduz as premissas da 1ª rodada para comparar. O grupo `rodada2` traz os cenários novos, e um 13º critério de saúde mede a **extração das fazendas** (parte do valor negociável que sai pelo portão vinda de contas-fazenda; meta até 3%). As médias de três sementes estão em `resultados/sementes_r2.json`.

```bash
node sim.js --todos rodada2
node sim.js --sementes 42,7,2026 --cenarios base,r1_base_1a_rodada,r2_fazendas10 --saida sementes_r2.json
```
