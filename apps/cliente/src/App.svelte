<script lang="ts">
  // Fluxo do M1: entrar ou criar conta → guardar a chave de recuperação → criar o personagem → personagem e mochila.
  import { api, type Eu } from './api.ts';
  import Entrada from './telas/Entrada.svelte';
  import ChaveRecuperacao from './telas/ChaveRecuperacao.svelte';
  import CriarPersonagem from './telas/CriarPersonagem.svelte';
  import Personagem from './telas/Personagem.svelte';

  let eu = $state<Eu | null>(null);
  let carregando = $state(true);
  let chaveParaMostrar = $state<string | null>(null);

  async function atualizar() {
    carregando = true;
    try {
      eu = await api.eu();
    } catch {
      eu = null;
    } finally {
      carregando = false;
    }
  }

  async function sair() {
    await api.sair().catch(() => {});
    eu = null;
  }

  atualizar();
</script>

<main>
  {#if carregando}
    <p class="aviso" style="color: var(--painel)">Carregando…</p>
  {:else if chaveParaMostrar}
    <ChaveRecuperacao chave={chaveParaMostrar} aoContinuar={() => { chaveParaMostrar = null; atualizar(); }} />
  {:else if !eu}
    <Entrada aoEntrar={atualizar} aoReceberChave={(c: string) => { chaveParaMostrar = c; }} />
  {:else if !eu.personagem}
    <CriarPersonagem vocacoes={eu.vocacoesDisponiveis} aoCriar={atualizar} aoSair={sair} />
  {:else}
    <Personagem {eu} aoSair={sair} />
  {/if}
</main>
