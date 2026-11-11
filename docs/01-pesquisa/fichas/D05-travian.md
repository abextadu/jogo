# Travian

| Campo | Valor |
|---|---|
| Grupo | D — RPGs/estratégia de navegador que duram décadas |
| Desenvolvedora / publicadora | Travian Games (Munique, Alemanha), fundada pelos irmãos Gerhard e Siegfried Müller |
| Lançamento | 2004 (a Wikipedia dá "junho de 2004" no texto e 05/09/2004 na caixa de informações; não reconcilia) ([Wikipedia](https://en.wikipedia.org/wiki/Travian)) |
| Plataformas | Web; app mobile do Travian: Legends em nov/2024 ([resumo de busca sobre Travian Games](https://appgoblin.info/apps/1544118325)); Travian Kingdoms em Android/iOS |
| Modelo de negócio | F2P com ouro (gold) e Travian Plus |
| Status em 2026 | Estável (empresa com ~120 funcionários em 2024; ver seção 9) |

> **Cartão-resumo (até 120 palavras):** Travian é um jogo de estratégia medieval por navegador em que cada jogador cresce uma aldeia, depois várias, e se une a uma aliança para guerrear. O que o define é a **rodada com final**: depois de cerca de 200 dias, plantas da Maravilha do Mundo aparecem em aldeias de NPCs, as alianças correm para capturá-las e construir a Maravilha até o nível 100; quem chega primeiro vence, o servidor para e começa outro do zero. Dá desfecho à guerra e renova o jogo, mas cobra presença constante, e o ouro compra tempo. **Lição nº 1:** temporada com final claro e vitória por aliança é a melhor estrutura social para guerra longa, desde que o ausente tenha proteção real (o sitter é a solução dos jogadores, não do design).

## 1. Loop central

- [F] O jogador cuida de aldeias com campos de recursos e prédios, treina tropas e ataca/defende contra outras aldeias. As rodadas se passam em "mundos" (servidores) independentes: nada interage entre mundos, cada jogador pode ter uma conta por mundo ([Wikipedia](https://en.wikipedia.org/wiki/Travian)).
- [H] O ritmo é de espera: filas de construção e de treino demoram horas ou dias e o jogador volta para decidir. As ações críticas (ataque, defesa, envio de reforço) são em tempo real e dependem do relógio de quem ataca.
- [F] O jogo começou como projeto PHP de hobby de um estudante de química da Universidade Técnica de Munique, Gerhard Müller ([Wikipedia](https://en.wikipedia.org/wiki/Travian)).

## 2. Camadas de progressão e prestígio

- [H] **Prestígio: 0 camadas dentro da rodada.** A progressão é: aldeia, expansão, aliança, endgame. O "reset" é o fim da rodada e o início de outra (ver seção 5).
- [F] O final: depois de cerca de 200 dias as **plantas de construção** aparecem em aldeias dos Natars (os NPCs). Para capturar uma planta é preciso um Tesouro (Treasury) nível 10 na aldeia atacante, destruir o Tesouro da aldeia que a guarda e sobreviver com o Herói (só ele carrega a planta). Há 13 locais de aparecimento no mapa ([Travian Support — Construction Plans](https://support.travian.com/en/articles/104-construction-plans)).
- [F] Para construir a Maravilha até o nível 49 basta ter uma planta ativa; acima disso é preciso uma **segunda planta, na mão de outro jogador da mesma aliança**: duas plantas com o mesmo jogador contam como uma ([Travian Support](https://support.travian.com/en/articles/104-construction-plans)). [H] Isso força cooperação real, não só de uma conta forte.
- [F] Os Natars atacam a aldeia da Maravilha a cada 5 níveis até o 95 e depois a cada nível; quem primeiro chega ao nível 100 vence, o mundo termina e uma nova rodada pode começar ([Wikipedia](https://en.wikipedia.org/wiki/Travian)). [F] Em aldeias de Maravilha, construção instantânea, Mestre de Obras e troca por NPC não funcionam, mas Plus e bônus de recurso continuam ([resultado de busca, suporte Travian — não aberto diretamente](https://support.travian.com/en/support/solutions/articles/7000060572)).
- [NV] Uma página-espelho de baixa qualidade fala em ~280 dias de duração em servidores normais e ~80 dias em Speed3x. Não confirmei em fonte oficial; usarei a Wikipedia (~200 dias).

## 3. Progresso offline

- [H] Parcial. Recursos produzem e filas rodam sozinhos, mas **tropas em casa são alvo** e o que está no estoque pode ser saqueado. Há também a mecânica de esconderijo (cranny) que protege uma parte dos recursos [NV: lembro da mecânica; não busquei em fonte].
- [F] A resposta oficial ao ausente é o **sitter** (seção 5) e o modo de férias do mundo ([Travian Kingdoms — vacation mode](https://support.kingdoms.com/en/articles/179-vacation-mode); regras de Legends: não abri a página).

## 4. Ganchos de retenção (D1 / D7 / D30)

- **D1:** [F] a proteção de iniciante impede ataques por um período que varia por servidor ([Wikipedia](https://en.wikipedia.org/wiki/Travian)).
- **D7:** [H] expansão de aldeias e escolha da aliança. A saída da proteção é o ponto crítico.
- **D30 a D200:** [H] as guerras de aliança e a corrida para as plantas. [F] Todo ano, em 5 de setembro, abre-se um servidor de aniversário com mapa e regras diferentes (em 2019, o "Codex Victoria", com hospital e início avançado); o diretor diz que "cada rodada é diferente" ([MMOHuts, 2019/2020](https://mmohuts.com/?p=218626)).
- [F] Jogadores antigos entraram via boca a boca entre estudantes e continuam jogando mesmo com emprego e família (MMOHuts, acima).

## 5. Jogador ativo vs. jogador ausente (foco desta ficha)

**Rodada com final.** [H] O final resolve o problema da guerra sem fim: sem ele, quando um bloco domina, o resto só espera. Com ele, há uma meta coletiva, uma data provável e um recomeço. Ao mesmo tempo, o final cria um tipo de "crunch": a corrida da Maravilha pede coordenação 24 horas.

**Sitter.** [F] O sitter é outro jogador ativo da mesma aliança ou confederação que opera a sua conta pela aba de sitter. O **dual** entra pelo Lobby, é um jogador que ainda não está no mundo, e pode fazer tudo que o dono faz. O Legends permite no máximo 2 sitters ([Travian Support — Sitters and Duals](https://support.travian.com/support/solutions/articles/7000064022), via trecho de busca; [Travian Support — sitters e duals](https://support.travian.com/en/articles/14-sitters-and-duals)). No Kingdoms são até 2 duals e 2 sitters ([Kingdoms Support](https://support.kingdoms.com/en/articles/177-dual-and-sitter)).
- [F] Desde 04/03/2021 vale um **saldo de inatividade do dono**: cada conta começa com 14 dias; o saldo cai 1 dia por dia em que só o sitter joga e sobe quando o dono joga (máximo 14). Em 0, o acesso do sitter é cortado, com aviso quando faltam 3 dias. Antes, o corte era após mais de 21 dias seguidos sem login do dono ([Travian blog, mar/2021](https://blog.travian.com/2021/03/stricter-rules-for-sitter-accounts), via trecho de busca; o site tem certificado vencido e o fetch falhou). Objetivo declarado: o sitter ajuda, mas não joga a conta inteira.
- [F] O dono é responsável pelo que o sitter faz; compartilhar senha é proibido. Se o dono liberar "gastar ouro", o sitter gasta sem limite, e **não há reembolso** ([Travian Support](https://support.travian.com/support/solutions/articles/7000064022), via busca).
- [H] **Esperteza ou ansiedade?** O sitter transforma a ausência em problema social: você precisa de confiança e de alguém acordado (em outro fuso). Ao contrário do OGame ([D04](D04-ogame.md)), onde o ausente se vira sozinho com o fleetsave, no Travian o design empurra a responsabilidade para a aliança. Sensação de esperteza existe (a aliança vira uma rede de revezamento), mas sua contrapartida é a dívida social: quem some, pesa sobre os outros.
- [H] O sitter também é a principal brecha de abuso (multicontas com "sitter", ver seção 11); o saldo de 14 dias foi a resposta de 2021.

## 6. Economia e moedas

- [H] Recursos básicos (madeira, barro, ferro, cereal), com roubo entre jogadores e um mercado de troca entre aldeias. Não encontrei fonte para detalhes de taxas, e a economia de Travian não tem casa de leilão entre jogadores. Mercado: apenas troca de recursos.
- [F] **Ouro (gold):** moeda premium, comprada com dinheiro real. Acelera produção, construção e pesquisa; já vendeu bônus de 10% de ataque e defesa, depois retirados em servidores novos. O Gold Club (desde a versão 3.6) oferece listas de ataque e busca de vales ([Wikipedia](https://en.wikipedia.org/wiki/Travian)). O ouro não é negociável entre jogadores, e a conta de sitter com a permissão de gastar ouro pode gastá-lo sem reembolso (seção 5).
- [F] **Plus:** assinatura temporária que dá filas extras de construção, mapa maior e bônus de produção. Foi a primeira fonte de receita (junto de banners); o ouro substituiu a compra do Plus na maioria dos servidores ([Wikipedia](https://en.wikipedia.org/wiki/Travian)). Observação: a Wikipedia afirma que scripts de usuário podem replicar efeitos do Plus, mas dão banimento.
- [F] Ouro continua válido em aldeia de Maravilha para Plus e bônus (seção 2).

## 7. Social

- [F] **Alianças e confederações:** o sistema de confederação sofreu mudança de restrições em 2020 ([Travian blog, ago/2020](https://blog.travian.com/sl/2020/08/changes-to-confederacy-system-restrictions)); o sitter só pode vir da aliança/confederação ([Travian blog, mar/2021](https://blog.travian.com/tw/2021/03/update-game-rule-changes), via busca).
- [H] **Diplomacia:** pactos, guerras e espionagem entre alianças formam o "meta-jogo" fora do jogo (Discord, fóruns). A corrida pela Maravilha é a hora da diplomacia total: plano capturado por um jogador, segunda planta por outro da aliança, defesa coordenada com reforços.
- [F] **Variantes:** Speed3x (3 vezes mais rápido), Classic ("Travian 2.5"), Fire and Sand, Glory of Sparta, Northern Legends (vikings, primavera de 2025) ([Wikipedia](https://en.wikipedia.org/wiki/Travian)). **Travian Kingdoms**, feito para os 10 anos da série ([Wikipedia — Travian Games](https://en.wikipedia.org/wiki/Travian_Games)): o fim do mundo é quando a primeira Maravilha chega ao nível 100, e o ranking final usa pontos de vitória, com bônus por colocação das Maravilhas, de modo que um reino pode acumular vários ([Kingdoms Support — endgame](https://support.kingdoms.com/en/articles/191-endgame-overview)). Em 2025 o Kingdoms continuava ativo com rodadas sazonais (TREAT/TRICK) ([blog do Kingdoms](https://blog.kingdoms.com/category/news/page/2/), via busca). Não encontrei aviso de encerramento do Kingdoms.

## 8. Monetização

- [F] Ouro e Plus (seção 6). Rodadas sazonais e variantes funcionam como "reiniciar o funil de pagamento": cada rodada nova recria a razão para comprar ouro.
- [F] Receita: números pouco confiáveis. Um relatório alemão mostra lucro de 21 milhões (2009) e prejuízo de 1,96 milhão (2016) ([título do artigo, Deutsche Startups](https://www.deutsche-startups.de/2018/12/17/zahlencheck-travian-2016/), fetch bloqueado com 403); a empresa demitiu 45 funcionários em 2018 ([título, Deutsche Startups](https://www.deutsche-startups.de/2018/12/05/travian-entlassungen/)). Um perfil de dados indica ~US$ 3,39 milhões de receita em 2021 (trecho confuso, [Preqin](https://www.preqin.com/data/profile/asset/travian-games-gmbh/68177)) e um agregador estima ~US$ 24 milhões por ano ([Bitscale](https://bitscale.ai/directory/travian-games)); trate ambos como estimativas de terceiros, sem confirmação. Receita atual oficial: não encontrada.

## 9. Números disponíveis (com fonte)

| Dado | Valor | Data / tipo | Fonte |
|---|---|---|---|
| Jogadores | > 5 milhões em > 300 servidores (sem data) | Wikipedia | [Wikipedia](https://en.wikipedia.org/wiki/Travian) |
| Jogadores | 1 milhão | 2006, imprensa citada na Wikipedia | [Wikipedia — Travian Games](https://en.wikipedia.org/wiki/Travian_Games) |
| Registrados (todos os jogos da empresa) | > 150 milhões, em mais de 200 países, até 42 idiomas | declarado pela empresa, sem data | [Wikipedia — Travian Games](https://en.wikipedia.org/wiki/Travian_Games) |
| Travian: Legends | ~10 milhões registrados; evento com 200 mil jogadores | MassivelyOP (trecho de busca, sem data; página bloqueada) | [MassivelyOP](https://massivelyop.com/?p=244263) |
| Funcionários | 4 no início; ~120 em 2024 | GamesWirtschaft citado pela Wikipedia | [Wikipedia — Travian Games](https://en.wikipedia.org/wiki/Travian_Games) |
| App Legends | ~2,9 mil MAU e < US$ 10 mil/mês | estimativa AppGoblin, sem data | [AppGoblin](https://appgoblin.info/apps/1544118325) |
| Receita / DAU atuais | não encontrado | tentei imprensa, Preqin, Bitscale | — |

[H] A fonte oficial não publica DAU. A estimativa do app é provavelmente baixa para o conjunto, porque o jogo é em navegador.

## 10. Por que deu certo (por que dura 20+ anos)

1. [H] **Final de rodada**: dá fechamento e recomeço, como as temporadas de outros jogos.
2. [H] **Aliança como unidade de vitória**: a regra das duas plantas (segunda planta de outro jogador da aliança) faz a aliança ser mais que um chat.
3. [F] **Boca a boca universitário e variantes anuais** mantêm a base antiga e renovam a nova (MMOHuts, acima).
4. [H] **Cobre o tempo livre**: o jogo funciona em sessões curtas se a aliança tiver sitters.

## 11. Do que os jogadores mais reclamam

Método: Reddit e vários sites do Travian não abriram; a evidência é fraca e dominada por reviews de poucos usuários.
1. [C] **Pay-to-win com ouro:** no Trustpilot, 1,6 de 5 com 21 avaliações (81% uma estrela); os avaliantes dizem que o ouro compra velocidade, filas e recursos e que competir custa centenas de dólares por servidor ([Trustpilot](https://www.trustpilot.com/review/www.travian.co.uk)). Uma review antiga discorda: jogou anos sem ouro ([Trustpilot](https://www.trustpilot.com/review/www.travian.co.uk), via busca).
2. [C] **Multicontas, bots, scripts, VPN e abuso de sitter:** relatado como problema recorrente que o jogo não impede (Trustpilot, acima). As regras oficiais proíbem scripts e bots, e multicontas em servidores de velocidade ou com população < 100 podem ser apagadas sem aviso ([regras do Travian](https://support.travian.com/en/support/solutions/articles/7000058111), via busca).
3. [C] **Suporte e banimentos:** respostas lentas e punições sem evidência (Trustpilot, acima).
4. **Ataques noturnos e burnout:** [NV] é a reclamação clássica do gênero (ataques ao amanhecer, perda de aldeia durante o sono), mas **não encontrei fonte** do Travian para citar ou quantificar; tentei buscas em inglês por "night attacks" e "burnout" sem resultado. Indirectamente, o próprio desenho de 2021 (saldo de sitter) confirma que a ausência é um problema.
5. [C] **Declínio e lentidão:** vários avaliantes dizem que a base encolheu e o jogo ficou lento (Trustpilot).

## 12. Mecânicas-chave: o porquê

**Maravilha do Mundo + rodada com final** — Problema: guerra sem fim e dominância eterna · Emoção: corrida épica, pertencimento ao time vencedor · Comportamento: coordenação de aliança, trocas de plantas, defesas · Efeito colateral: o endgame favorece quem tem tempo e 24 h de cobertura.
**Duas plantas na mesma aliança** — Problema: uma conta forte vencer sozinha · Emoção: dependência mútua · Comportamento: alianças coesas · Efeito colateral: a traição ou a ausência de um membro derruba o plano.
**Sitter com saldo de 14 dias** — Problema: deixar o ausente sobreviver sem permitir "conta alugada" · Emoção: alívio e confiança (ou dívida) · Comportamento: revezamento entre aliados · Efeito colateral: exige confiança, que abre espaço para fraude e para multiconta.
**Ouro e Plus** — Problema: monetizar um jogo de tempo · Emoção: conforto, ou irritação se parecer compra de vitória · Comportamento: gastar para chegar antes · Efeito colateral: acusação de P2W e de ouro "gastável por sitter".
**Protecção de iniciante** — Problema: o novato morrer no primeiro dia · Emoção: segurança · Comportamento: crescer na proteção · Efeito colateral: choque ao sair dela.

## 13. Tribal Wars e presença no Brasil

**Tribal Wars (InnoGames).** [F] Original de 2003 (Klindworth e Zillmer), versão internacional em 2006; a Wikipedia dá mais de 59 milhões de usuários registrados e 27 idiomas ([Wikipedia](https://en.wikipedia.org/wiki/Tribal_Wars)). Mundos com regras próprias: velocidade de 0,5 a 2 (rodadas rápidas vão a centenas), limites de tribo, e **vitória configurável**: manter aldeias-chave, conquistar certo percentual ou domínio por período, além de "Secrets of Power" ([Wikipedia](https://en.wikipedia.org/wiki/Tribal_Wars)). Comparação: [H] o Tribal Wars é mais simples (uma aldeia-base, mapa menor, conquista por nobre), e a vitória varia por mundo, enquanto o Travian tem um endgame único e padronizado (a Maravilha). Em ambos, a unidade de vitória é a aliança/tribo e o "mundo" é a rodada.

**Brasil.** [F] O portal brasileiro do Tribal Wars existe em tribalwars.com.br, em português, com escritório em São Bernardo do Campo (SP) e mundos numerados BR145 e BR146 promovidos como novos ([tribalwars.com.br](https://www.tribalwars.com.br)). [H] A numeração (mais de 145 mundos) indica abertura frequente de mundos novos no Brasil, mas é inferência de nome, sem dado de jogadores. Para o Travian, o domínio travian.com.br redireciona para travian.com/br ([travian.com.br](https://www.travian.com.br)), e há suporte em português ([Travian Support PT](https://support.travian.com/pt/articles/101-artefacts)); número de servidores, jogadores ou comunidade brasileira: não encontrado (a página /br não retornou conteúdo e as buscas por comunidade em português vieram vazias). Presença brasileira no OGame: também não encontrada (ver [D04](D04-ogame.md)). Esse é um dado que a Fase 1 não fecha; para o mercado brasileiro, recomendo consultar tracker de tráfego ou fóruns BR.

## 14. Lições para o nosso jogo

- **Absorver (o porquê):**
  - **Temporada com final e vitória coletiva** (corrida de aliança até um objetivo de endgame), com recomeço; encaixa em "guerra de guildas e temporadas".
  - **Exigir cooperação real** para vencer (regra das duas plantas).
  - **Sitter com saldo de inatividade** como modelo de "alguém cuida da minha conta" dentro de limites, **mas** com permissões separadas (sem gasto de moeda premium por padrão).
  - **Variantes e mundos com regras diferentes** como laboratório e renovação.
- **Evitar:**
  - Deixar a defesa do ausente nas mãos da aliança: fazer a proteção automática primeiro e o sitter depois.
  - Acelerador pago que compra poder em guerra; ouro gastável por terceiros.
  - Suporte e banimento opacos (as reclamações mais consistentes).
  - Endgame que exige 24 h de presença sem rodízio.

## Linha da matriz

| Jogo | Plataforma | Negócio | Offline | Prestígio | Combate | Profissões | Mercado | Premium negociável | RMT oficial | Guildas | PvP | Temporadas | Eventos/chefes | Gacha | Ads | Passe | VIP | Perda de itens | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Travian | Web+Mobile | F2P | Parcial | 0 | Híbrido | Simples | Troca | Não | Nenhum | Sim | Síncrono+Território | Sim | Sim | Não | ? | ? | Sim | Sim | Estável |

## Fontes

1. [Wikipedia — Travian](https://en.wikipedia.org/wiki/Travian) e [Travian Games](https://en.wikipedia.org/wiki/Travian_Games) — enciclopédia.
2. [Travian Support — Construction Plans](https://support.travian.com/en/articles/104-construction-plans) — oficial.
3. [Travian Support — Sitters and Duals](https://support.travian.com/support/solutions/articles/7000064022) e [sitters e duals](https://support.travian.com/en/articles/14-sitters-and-duals) — oficial (via busca).
4. [Kingdoms Support — endgame](https://support.kingdoms.com/en/articles/191-endgame-overview), [dual e sitter](https://support.kingdoms.com/en/articles/177-dual-and-sitter), [vacation mode](https://support.kingdoms.com/en/articles/179-vacation-mode) — oficial.
5. [Travian blog — sitters mais rígidos, mar/2021](https://blog.travian.com/2021/03/stricter-rules-for-sitter-accounts), [mudanças de regras](https://blog.travian.com/tw/2021/03/update-game-rule-changes), [confederações, ago/2020](https://blog.travian.com/sl/2020/08/changes-to-confederacy-system-restrictions) — oficial (via busca; certificado vencido).
6. [MMOHuts — entrevista 15 anos](https://mmohuts.com/?p=218626) — imprensa, 2019/2020.
7. [Trustpilot — Travian](https://www.trustpilot.com/review/www.travian.co.uk) — comunidade.
8. [Deutsche Startups](https://www.deutsche-startups.de/2018/12/17/zahlencheck-travian-2016/), [layoffs](https://www.deutsche-startups.de/2018/12/05/travian-entlassungen/), [Preqin](https://www.preqin.com/data/profile/asset/travian-games-gmbh/68177), [Bitscale](https://bitscale.ai/directory/travian-games), [AppGoblin](https://appgoblin.info/apps/1544118325), [MassivelyOP](https://massivelyop.com/?p=244263) — estimativas e imprensa (acesso parcial).
9. [Wikipedia — Tribal Wars](https://en.wikipedia.org/wiki/Tribal_Wars) e [tribalwars.com.br](https://www.tribalwars.com.br) — enciclopédia/oficial.
10. [Regras do Travian](https://support.travian.com/en/support/solutions/articles/7000058111) — oficial (via busca).

**Lacunas:** ataques noturnos/burnout no Travian (sem fonte), duração exata da rodada em fonte oficial, preços do ouro/Plus, regras de proteção de iniciante e modo de férias do Legends, comunidade e servidores BR do Travian.
