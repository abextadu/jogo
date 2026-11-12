# CLAUDE.md — Projeto "jogo"

RPG idle de navegador (desktop e celular), online e multiplayer, com economia movida pelos jogadores, mercado, casa de leilão e um modelo oficial de RMT.

## Leia primeiro

1. `docs/PROGRESSO.md` — fase atual, decisões tomadas e pendências. É a fonte da verdade sobre onde paramos.
2. `PROMPT_INICIAL.md` — o briefing completo do dono do produto (Gabriel): fases, entregáveis e critérios de qualidade.
3. `docs/01-pesquisa/METODOLOGIA.md` — protocolo de pesquisa, etiquetas de evidência e mapa de arquivos.

## Regras-chave

- **Código só na Fase 5, um marco por vez** ([`docs/05-roadmap.md`](docs/05-roadmap.md)): cada marco termina com testes, demonstração e checkpoint; o próximo só começa com o ok do Gabriel.
- **Checkpoint obrigatório ao fim de cada fase:** resumo executivo de no máximo uma página e no máximo 5 decisões, cada uma com opções e a recomendação justificada. Só avançar com o ok do Gabriel.
- **Pesquisa real na web, com link para todo dado concreto.** Separar sempre: `[F]` fato com fonte, `[C]` consenso da comunidade, `[H]` hipótese ou opinião nossa, `[NV]` conhecimento prévio não verificado.
- **Entender o porquê, não copiar o quê:** para cada mecânica, o problema que resolve, a emoção que gera, o comportamento que incentiva e o efeito colateral.
- **Estudar fracassos com o mesmo cuidado que sucessos.**
- **Tudo em Markdown dentro de `docs/`, em português do Brasil.** Manter `docs/PROGRESSO.md` sempre atualizado.
- **Advogado do diabo:** todo entregável de design termina com "Como isso pode dar errado" (riscos, abusos possíveis e mitigação).
- **Jurídico:** citar a norma e marcar "validar com advogado". Nunca apresentar palpite jurídico como certeza.
- **Padrão de qualidade:** "o melhor RPG idle já criado". Se uma ideia poderia estar em qualquer idle, ainda não é boa o bastante.

## Fases

1. Pesquisa profunda → `docs/01-pesquisa/`
2. Conceito (3 conceitos diferentes) → `docs/02-conceito.md`
3. GDD modular + simulação da economia → `docs/03-gdd/`
4. Arquitetura técnica → `docs/04-arquitetura.md`
5. Roadmap e construção por marcos → `docs/05-roadmap.md`

## Código (Fase 5)

Stack decidida no checkpoint da Fase 4 ([`docs/04-arquitetura.md`](docs/04-arquitetura.md)): TypeScript em Node.js 26, PostgreSQL 18, Fastify, postgres.js, Zod, Vitest e fast-check. Por enquanto tudo roda no PC do Gabriel (Windows 11, Docker Desktop).

- **Rodar:** `npm run db:subir` (PostgreSQL 18 em Docker, porta 5433; a 5432 é do PostgreSQL 16 do Windows) → `npm test` → `npm run servidor` (http://127.0.0.1:3000). Demonstração de cada marco: `npm run demo:m0` etc.
- **Sem build:** o Node 26 roda `.ts` direto. Só sintaxe que se apaga (nada de `enum`, `namespace` ou propriedades no construtor); importações relativas com `.ts`. `npm run tipos` confere os tipos.
- **Estrutura:** `apps/servidor` (HTTP), `pacotes/razao` (livro-razão, migrações SQL, idempotência), `pacotes/economia` (regras de valor), `pacotes/config` (esquemas), `config/` (os números do jogo), `testes/`, `scripts/`.
- **Regras do código:** todo valor passa pelo livro-razão (lançamentos com soma zero, travas em ordem de id); todo comando que move valor leva `Idempotency-Key`; ouro e Coins em inteiros (BigInt, texto no JSON); números do jogo só em `config/`; **nenhuma rota de transferência com espera, retenção ou limite de saída** (decisão do Gabriel, checkpoint 3); sem verificação de idade.
- **Testes obrigatórios** para economia e combate, incluindo pedidos simultâneos e invariantes do razão; a integração contínua (`.github/workflows/ci.yml`) roda tipos, testes e uma simulação curta a cada push.

## Infra do dono (ponto de partida, não obrigação)

VPS própria com Docker Swarm e PostgreSQL, para quando outras pessoas forem testar. Desenvolvimento no VS Code / Claude Code.

## Git

- Remoto: https://github.com/abextadu/jogo.git, branch `main`.
- Autor dos commits: e-mail privado (noreply) do GitHub, configurado só neste repositório.
- Commits pequenos e descritivos, em português.
