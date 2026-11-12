<script lang="ts">
  // No MVP, Cavaleiro ou Mago (decisão 2 do roadmap). Os textos resumem o GDD 03 e o 03 §4.2 (comida).
  import { api, mensagemDe } from '../api.ts';

  let { vocacoes, aoCriar, aoSair }: { vocacoes: string[]; aoCriar: () => void; aoSair: () => void } = $props();

  const DESCRICAO: Record<string, { titulo: string; texto: string }> = {
    cavaleiro: { titulo: 'Cavaleiro', texto: 'Linha de frente: espada, escudo e armadura de metal. Apanha mais entre lutas e vive bem com carne da caça.' },
    mago: { titulo: 'Mago', texto: 'Magia de dano e controle em área, com cajado. Depende de ânimo e começa melhor a luta comendo peixe.' },
    cacador: { titulo: 'Caçador', texto: 'Dano à distância e caça.' },
    druida: { titulo: 'Druida', texto: 'Cura, natureza e suporte.' },
    ladino: { titulo: 'Ladino', texto: 'Exploração, críticos e achados raros.' },
  };

  let nome = $state('');
  // A lista de vocações não muda enquanto a tela está aberta: o valor inicial basta.
  // svelte-ignore state_referenced_locally
  let vocacao = $state(vocacoes[0] ?? '');
  let erro = $state('');
  let ocupado = $state(false);

  async function criar(e: SubmitEvent) {
    e.preventDefault();
    erro = '';
    ocupado = true;
    try {
      await api.criarPersonagem(nome, vocacao);
      aoCriar();
    } catch (x) {
      erro = mensagemDe(x);
    } finally {
      ocupado = false;
    }
  }
</script>

<div class="cabecalho">
  <h1>Seu personagem</h1>
  <button onclick={aoSair}>Sair</button>
</div>

<form class="painel" onsubmit={criar}>
  <label for="nome">Nome</label>
  <input id="nome" type="text" maxlength="20" autocomplete="off" bind:value={nome} required />
  <p class="aviso">De 3 a 20 letras. O nome é único na Cidade.</p>

  <h2 style="margin-top: 16px">Vocação</h2>
  <div class="vocacoes">
    {#each vocacoes as v}
      <button type="button" class="vocacao" aria-pressed={vocacao === v} onclick={() => (vocacao = v)}>
        <strong>{DESCRICAO[v]?.titulo ?? v}</strong>
        <span>{DESCRICAO[v]?.texto ?? ''}</span>
      </button>
    {/each}
  </div>

  <div class="linha" style="margin-top: 16px">
    <button class="principal" type="submit" disabled={ocupado || !nome.trim()}>Criar personagem</button>
  </div>
  {#if erro}<p class="erro" role="alert">{erro}</p>{/if}
</form>
