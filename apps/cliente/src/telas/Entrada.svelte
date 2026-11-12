<script lang="ts">
  // Entrar, criar conta ou recuperar com a chave. Sem verificação de idade (checkpoint 3):
  // o cadastro pede e-mail, senha e o aceite dos termos, que dizem que o jogo é para maiores de 18.
  import { api, mensagemDe } from '../api.ts';

  let { aoEntrar, aoReceberChave }: { aoEntrar: () => void; aoReceberChave: (chave: string) => void } = $props();

  type Aba = 'entrar' | 'criar' | 'recuperar';
  let aba = $state<Aba>('entrar');
  let email = $state('');
  let senha = $state('');
  let chave = $state('');
  let aceito = $state(false);
  let erro = $state('');
  let ocupado = $state(false);

  async function enviar(e: SubmitEvent) {
    e.preventDefault();
    erro = '';
    ocupado = true;
    try {
      if (aba === 'entrar') {
        await api.entrar(email, senha);
        aoEntrar();
      } else if (aba === 'criar') {
        const r = await api.cadastrar(email, senha, aceito);
        aoReceberChave(r.chaveRecuperacao);
      } else {
        const r = await api.recuperar(email, chave, senha);
        aoReceberChave(r.chaveRecuperacao);
      }
    } catch (x) {
      erro = mensagemDe(x);
    } finally {
      ocupado = false;
    }
  }

  function trocar(a: Aba) {
    aba = a;
    erro = '';
  }
</script>

<h1>Pedraforte</h1>
<p class="aviso" style="color: #cdbb98">Para maiores de 18.</p>

<section class="painel">
  <div class="abas" role="tablist">
    <button role="tab" aria-selected={aba === 'entrar'} onclick={() => trocar('entrar')}>Entrar</button>
    <button role="tab" aria-selected={aba === 'criar'} onclick={() => trocar('criar')}>Criar conta</button>
    <button role="tab" aria-selected={aba === 'recuperar'} onclick={() => trocar('recuperar')}>Recuperar</button>
  </div>

  <form onsubmit={enviar}>
    <label for="email">E-mail</label>
    <input id="email" type="email" autocomplete="email" bind:value={email} required />

    {#if aba === 'recuperar'}
      <label for="chave">Chave de recuperação</label>
      <input id="chave" type="text" autocomplete="off" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" bind:value={chave} required />
    {/if}

    <label for="senha">{aba === 'recuperar' ? 'Senha nova' : 'Senha'}</label>
    <input
      id="senha"
      type="password"
      autocomplete={aba === 'entrar' ? 'current-password' : 'new-password'}
      bind:value={senha}
      required
    />
    {#if aba !== 'entrar'}<p class="aviso">Pelo menos 10 caracteres.</p>{/if}

    {#if aba === 'criar'}
      <label class="linha" style="font-weight: 400">
        <input type="checkbox" bind:checked={aceito} />
        Li e aceito os termos de uso. O jogo é para maiores de 18.
      </label>
    {/if}

    <div class="linha" style="margin-top: 16px">
      <button class="principal" type="submit" disabled={ocupado}>
        {aba === 'entrar' ? 'Entrar' : aba === 'criar' ? 'Criar conta' : 'Trocar a senha'}
      </button>
    </div>
    {#if erro}<p class="erro" role="alert">{erro}</p>{/if}
  </form>
</section>
