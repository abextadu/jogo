# GDD — Projeto Ofício (nome provisório)

RPG idle online de navegador, em fantasia medieval clássica e pixel art. Cada servidor é uma Cidade viva onde ninguém faz tudo sozinho: o mercado é o tecido social, tudo o que se negocia se gasta, e a cidade inteira constrói obras, se defende dos cercos e elege o seu Conselho. A cada temporada, uma Fronteira se abre na Névoa. O dinheiro real entra por doação em Coins, que circulam livremente.

Comece pelo **[documento-mestre (bíblia)](00-biblia.md)**: visão, nomes oficiais, decisões vigentes e números-âncora. As decisões do dono do produto estão no [PROGRESSO](../PROGRESSO.md); a pesquisa que sustenta o GDD está em [`01-pesquisa/`](../01-pesquisa/) e o conceito aprovado em [`02-conceito.md`](../02-conceito.md).

## Módulos

| # | Módulo | Do que trata |
|---|---|---|
| 00 | [Bíblia (documento-mestre)](00-biblia.md) | Visão, pilares, mundo, glossário e anexo de termos, decisões vigentes, números-âncora, tabela de renomeação |
| 01 | [Loops](01-loops.md) | O que o jogador faz em segundos, minutos, horas, dias, semanas e temporadas; o dia típico de três perfis |
| 02 | [Progressão](02-progressao.md) | Taxas ativa e ausente, filas, curvas de XP, teto de aprendiz, Maestria e Selo de mestre, lei do serrote |
| 03 | [Personagem](03-personagem.md) | Atributos, as 5 vocações com caminhos e marcos, troca de vocação, ajudantes |
| 04 | [Combate](04-combate.md) | Combate por regras, expedições, masmorras assíncronas, cercos, bestiário, purificar ou abater |
| 05 | [Itens](05-itens.md) | Materiais T1–T6, qualidade, poder por tier, durabilidade, reparo e quebra, únicos, lendários, cosméticos |
| 06 | [Ofícios e coleta](06-oficios-e-coleta.md) | Os 12 ofícios, receitas, cadeias de produção, obra-prima, Faro, Inspiração, Oficina da Cidade |
| 07 | [Economia](07-economia.md) | Moedas, fontes e drenos, teto de emissão, Bolsa, Feira, Leilão, Câmbio, Troca, Coins, Bazar de Personagens, Baú, constituição econômica, painel |
| 08 | [Simulação da economia](08-simulacao.md) | Modelo de 12 meses em Node.js, resultados, estresses, decisões de reconciliação e parâmetros recomendados |
| 09 | [Social](09-social.md) | Guildas e Sedes, encomendas, rankings por produção entregue, chat, Conselho |
| 10 | [Live ops](10-live-ops.md) | Eras de 13 semanas, Fronteira, festas, calendário e plano de operação |
| 11 | [Monetização](11-monetizacao.md) | Doação em Coins, conveniência, cosméticos, Baú Misterioso, passe, teto de doação, carta pública, projeção de receita |
| 12 | [Onboarding](12-onboarding.md) | Prólogo, primeira hora, primeiro dia e primeira semana |
| 13 | [Anti-abuso](13-anti-abuso.md) | Bots, multicontas, duplicação, fraude e contestação, RMT informal, lavagem, API, moderação |
| 14 | [Arte e UI](14-arte-e-ui.md) | Direção "Maquete" em pixel art, paleta, fontes, interface, acessibilidade, PWA |
| — | [Resumo e checkpoint da Fase 3](resumo-e-checkpoint.md) | Resumo executivo de uma página e as decisões do checkpoint |

## Material de apoio

- **Telas (wireframes):** abra [`14-wireframes/index.html`](14-wireframes/index.html) no navegador.
- **Simulação:** código e instruções em [`08-simulacao/`](08-simulacao/README.md). Gráficos em [`08-simulacao/resultados/relatorio.html`](08-simulacao/resultados/relatorio.html). Para rodar: `node docs/03-gdd/08-simulacao/sim.js --cenario base --semente 42`.
- **Notas de integração:** [`_notas-de-integracao.md`](_notas-de-integracao.md) guarda as interfaces entre módulos e todas as resoluções de conflito (R1–R27 e D1–D14).

## Como ler

- Números marcados **[H]** são propostas do estúdio, calibradas pela simulação quando ela os cobre; [F] remete a fatos com fonte na pesquisa; [NV] é não verificado.
- Todo módulo termina com "Como isso pode dar errado".
- Trechos marcados "(revisão de consistência: Rn)" ou "(Dn)" foram alterados na revisão final da Fase 3.
