<script lang="ts">
  // A chave de recuperação aparece uma vez só (GDD 12 §2.3). Sem verificação de identidade,
  // ela é o que devolve a conta a quem perdeu a senha ou o aparelho.
  let { chave, aoContinuar }: { chave: string; aoContinuar: () => void } = $props();
  let guardei = $state(false);
  let copiado = $state(false);

  async function copiar() {
    await navigator.clipboard.writeText(chave).catch(() => {});
    copiado = true;
  }

  function baixar() {
    const texto = `Pedraforte — chave de recuperação\n\n${chave}\n\nGuarde num lugar seguro. Com ela você recupera a conta se perder a senha.\n`;
    const url = URL.createObjectURL(new Blob([texto], { type: 'text/plain' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pedraforte-chave-de-recuperacao.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<h1>Guarde esta chave</h1>
<section class="painel">
  <p>Com ela você recupera a conta se perder a senha ou o aparelho. <strong>Ela não aparece de novo.</strong></p>
  <p class="chave">{chave}</p>
  <div class="linha">
    <button onclick={copiar}>{copiado ? 'Copiada' : 'Copiar'}</button>
    <button onclick={baixar}>Baixar como arquivo</button>
  </div>
  <label class="linha" style="font-weight: 400; margin-top: 16px">
    <input type="checkbox" bind:checked={guardei} />
    Guardei a chave num lugar seguro.
  </label>
  <div class="linha" style="margin-top: 12px">
    <button class="principal" disabled={!guardei} onclick={aoContinuar}>Continuar</button>
  </div>
</section>
