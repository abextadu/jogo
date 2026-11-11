# Fase 3 — Resumo executivo e checkpoint

> Fechamento da Fase 3. O GDD completo está no [índice](README.md); o documento-mestre é a [bíblia](00-biblia.md). Etiquetas: [F] fato com fonte, [H] proposta ou leitura do estúdio.

## Resumo executivo

**O jogo.** Um RPG idle online de navegador, em fantasia medieval clássica e pixel art isométrica ("Maquete"). Cada servidor é uma **Cidade** viva (a primeira: Pedraforte). O jogador tem um personagem, uma de 5 vocações (Cavaleiro, Caçador, Mago, Druida, Ladino) e dois ofícios mestres entre 12. Ninguém faz tudo sozinho: um item bom exige 3 ou 4 ofícios, tudo o que se negocia se desgasta, e a Cidade constrói obras, se defende de cercos e elege um Conselho. A cada Era (13 semanas), a partir da 2ª, abre-se uma **Fronteira** na Névoa que o servidor explora junto.

**Como joga** [H]:
- **Ausente:** as filas trabalham sozinhas (offline de 24 h, até 72 h conquistado jogando); a taxa ausente começa em 70% e chega a 100% jogando; o Relatório da volta mostra o resultado do plano.
- **Ativo:** bancada ativa (+2% a +6% de volume), obra-prima (qualidade), Faro na coleta, mercado, encomendas e cercos com inscrição. Nada essencial exige presença.
- **Ritmo:** o primeiro nível 100 de ofício chega por volta do D100 (hardcore), D122 (regular) e D150 (casual); o Selo de mestre é o prestígio.

**Economia** (simulação de 12 meses, média de três sementes):
- **Passa:** drenos destroem 86% do ouro que entra; 23% das contas batem no teto de emissão; o premium custa 16,5 dias de renda do jogador mediano; os 10% mais ricos têm 38% da riqueza; inflação média de +2% ao ano; uma conta-fazenda de bot rende ~R$ 16 por mês.
- **Não passa:** 6 dos 12 critérios, sobretudo por estrutura (básicos presos ao preço do NPC, pouca riqueza por conta pela evasão, tendência do IPC ruidosa). Seis cenários de estresse quebram a economia (onda de pagantes, detecção fraca de bots, evasão de 50% e outros). O Coin perde valor ao longo do ano (o premium vai de 27 para 13 dias de renda).
- **Decisões que a simulação tomou:** a ferramenta não acelera a fila; 1 Coin = R$ 1,00; teto de emissão em valor de referência, com portão de saída; Coins na Troca pagam 12%.

**Dinheiro real** (decisões do Gabriel aplicadas): doação em Coins, sem reembolso; premium de 30 dias = 20 Coins; Baú Misterioso = 5 Coins, com chances publicadas, conteúdo cosmético e limite de 20 por mês; teto de doação de R$ 250 por mês; Coins e ouro transferíveis livremente; Bazar de Personagens desde o lançamento; contestação pelo banco suspende a conta até regularizar.

**Negócio** [H]: a verificação de idade de todos os jogadores (jogo 18+) custa ~R$ 1 por conta nova e consome **32% da receita** no cenário base (90% no pessimista). O base paga **3 a 4 pessoas**; o plano de conteúdo ganhou uma versão enxuta para 4.

**Riscos principais:** o Baú comprável com Coins e o RMT informal aberto (risco jurídico assumido, sem parecer); custo da verificação de idade; população pequena para a liquidez do mercado; bots na camada de mercado; equipe pequena para a esteira de conteúdo.

## 🛑 Checkpoint da Fase 3: decisões para o Gabriel

**1. Pode haver um prólogo de 5 minutos sem conta, antes da verificação de idade?**
- **(A) Sim. ← recomendado** Um prólogo encenado ("A balsa para Pedraforte"), sem conta, sem chat, sem compra e sem nada salvo; a verificação acontece ao chegar à Cidade.
- (B) Não: verificação antes de qualquer coisa.
- (C) Prólogo mais longo (a primeira hora) sem conta.
- *Por quê:* a verificação é a maior fricção do funil; o prólogo mostra o jogo antes de pedir documento e filtra curiosos antes de gastar R$ 1 por verificação ([12](12-onboarding.md), [13](13-anti-abuso.md)).

**2. A transferência livre de Coins e ouro pode ter freios temporários contra fraude?**
- **(A) Sim: carência para Coins recém-doados (7 dias no cartão, 72 h no Pix) antes da primeira transferência, e limite de saída por dia para contas novas (menos de 14 dias). ← recomendado**
- (B) Só a carência dos Coins recém-doados.
- (C) Nenhum freio: transferência imediata.
- *Por quê:* sem carência, cartão roubado vira Coins transferidos e vendidos por Pix na mesma hora ([13](13-anti-abuso.md)). Depois da carência, a transferência é livre, como você decidiu.

**3. Como lidar com o custo da verificação de idade (32% da receita no cenário base)?**
- **(A) Manter a verificação de todos na entrada, usar o prólogo como filtro, negociar preço por volume e testar dois fornecedores. ← recomendado**
- (B) Verificação forte só para quem doa, transfere ou vende; autodeclaração para os demais. Muda a decisão "jogo inteiro 18+" e aumenta o risco do ECA Digital.
- (C) Esperar uma verificação gratuita (credencial do governo) antes do lançamento público.
- *Por quê:* (A) mantém a sua decisão 18+ e a melhor barreira contra bots (uma pessoa, uma conta). (B) barateia, mas abre o jogo a menores sem verificação.

**4. A economia está saudável só em parte. Como seguir?**
- **(A) Aprovar o GDD com os parâmetros recomendados e fazer uma segunda rodada de simulação no início da Fase 4, com os pontos pendentes (D15, D16, bônus da refeição). ← recomendado**
- (B) Mais uma rodada completa de simulação e ajustes antes de aprovar o GDD.
- *Por quê:* as falhas restantes são estruturais e de ruído, e o modelo vai ganhar fidelidade com a arquitetura (Fase 4) e com dados reais do alfa. Um mês a mais de ajuste agora melhora pouco.

**5. Quem constrói e opera o jogo?**
- **(A) Você + Claude no código e no design; arte em pixel art e moderação terceirizadas por demanda; plano enxuto de conteúdo. ← recomendado**
- (B) Montar uma equipe de 3 a 4 pessoas desde o início.
- (C) Equipe de 6 a 8 pessoas (precisa de investimento além da receita prevista).
- *Por quê:* a receita do cenário base paga 3 a 4 pessoas. A arquitetura da Fase 4 precisa saber se é para uma equipe mínima (simplicidade acima de tudo) ou maior.

## Como isso pode dar errado

| Risco | Como acontece | Mitigação |
|---|---|---|
| GDD grande demais para a equipe | 15 módulos com ~150 mil palavras de regras; uma equipe mínima não constrói tudo. | A Fase 5 define o MVP: a menor fatia que prova o loop e a economia. |
| Números que só valem no modelo | A simulação usa palpites de comportamento (preço de reserva, disposição a pagar). | Segunda rodada na Fase 4; alfa fechado com telemetria antes de abrir. |
| Decisões jurídicas sem parecer | Baú, RMT aberto, doação e suspensão podem ser contestados. | Risco assumido pelo Gabriel; os pontos estão marcados "validar com advogado" nos módulos. |
| Tema genérico | Fantasia medieval em pixel art é o terreno mais disputado. | Identidade pelos sistemas (cidade viva, Conselho, Fronteira) e pela direção "Maquete". |
