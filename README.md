# jogo

RPG idle de navegador (desktop e celular), online e multiplayer, com uma economia movida pelos jogadores.

O projeto terminou pesquisa, conceito, design (GDD) e arquitetura e está na Fase 5, construindo o MVP marco a marco.

## Rodar no PC (desenvolvimento)

Precisa de Node.js 26 e Docker Desktop.

```bash
npm install
npm run db:subir
npm test
npm run demo:m0
npm run servidor
```

O banco local fica na porta 5433 (credenciais só de desenvolvimento em `.env.example`).
 O único código até aqui é a simulação da economia.

- Briefing do produto: [PROMPT_INICIAL.md](PROMPT_INICIAL.md)
- Andamento, decisões e pendências: [docs/PROGRESSO.md](docs/PROGRESSO.md)
- Pesquisa (Fase 1): [docs/01-pesquisa/](docs/01-pesquisa/)
- Conceito (Fase 2): [docs/02-conceito.md](docs/02-conceito.md)
- GDD e simulação da economia (Fase 3): [docs/03-gdd/](docs/03-gdd/README.md)
- Arquitetura técnica (Fase 4): [docs/04-arquitetura.md](docs/04-arquitetura.md)
- Roadmap e MVP (Fase 5): [docs/05-roadmap.md](docs/05-roadmap.md)
