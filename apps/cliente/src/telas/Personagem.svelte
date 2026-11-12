<script lang="ts">
  // Personagem, mochila e armazém (M1; GDD 03 §4.2). O foco é o personagem: ele carrega a mochila.
  // Botão direito numa casa (toque longo no celular, ou clique/Enter) abre o menu do item.
  // O "Comer" chega com a comida, no M3.
  import { tick } from 'svelte';
  import { api, mensagemDe, type Eu, type Inventario, type Item } from '../api.ts';

  let { eu, aoSair }: { eu: Eu; aoSair: () => void } = $props();

  const NOME_VOCACAO: Record<string, string> = { cavaleiro: 'Cavaleiro', mago: 'Mago', cacador: 'Caçador', druida: 'Druida', ladino: 'Ladino' };

  let inv = $state<Inventario | null>(null);
  let erro = $state('');
  let aviso = $state('');
  let ocupado = $state(false);

  type Origem = 'mochila' | 'armazem';
  interface Menu { x: number; y: number; de: Origem; item: Item; quantidade: bigint }
  let menu = $state<Menu | null>(null);
  let menuEl = $state<HTMLDivElement | null>(null);
  let dialogo = $state<{ de: Origem; item: Item; valor: number } | null>(null);

  interface Casa { item: Item | null; quantidade: bigint; chave: string }

  // Cada item ocupa uma casa por pilha de até 100; o resto da mochila são casas vazias.
  let casas = $derived.by<Casa[]>(() => {
    if (!inv) return [];
    const pilha = BigInt(inv.mochila.pilhaMaxima);
    const lista: Casa[] = [];
    for (const item of inv.mochila.itens) {
      let resta = BigInt(item.quantidade);
      let n = 0;
      while (resta > 0n) {
        const q = resta > pilha ? pilha : resta;
        lista.push({ item, quantidade: q, chave: `${item.id}-${n++}` });
        resta -= q;
      }
    }
    for (let i = lista.length; i < inv.mochila.casas; i++) lista.push({ item: null, quantidade: 0n, chave: `vazia-${i}` });
    return lista;
  });

  const sigla = (nome: string) => nome.split(/\s+/).filter((p) => p.length > 2).map((p) => p[0]!.toUpperCase()).slice(0, 2).join('') || nome.slice(0, 2);

  async function carregar() {
    try {
      inv = await api.inventario();
    } catch (x) {
      erro = mensagemDe(x);
    }
  }

  async function abrirMenu(x: number, y: number, de: Origem, item: Item, quantidade: bigint) {
    erro = '';
    aviso = '';
    // mantém o menu dentro da tela
    const largura = 230;
    menu = { x: Math.min(x, window.innerWidth - largura - 8), y: Math.min(y, window.innerHeight - 180), de, item, quantidade };
    await tick();
    menuEl?.querySelector('button')?.focus();
  }

  function abrirNoElemento(ev: Event, de: Origem, item: Item, quantidade: bigint) {
    const r = (ev.currentTarget as HTMLElement).getBoundingClientRect();
    abrirMenu(r.left + 8, r.bottom - 4, de, item, quantidade);
  }

  // Toque longo (celular): 500 ms parado em cima da casa
  let toque: { timer: ReturnType<typeof setTimeout>; x: number; y: number } | null = null;
  let ignorarClique = false;
  function inicioToque(ev: PointerEvent, de: Origem, item: Item, quantidade: bigint) {
    if (ev.pointerType !== 'touch') return;
    const { clientX: x, clientY: y } = ev;
    toque = {
      x, y,
      timer: setTimeout(() => {
        ignorarClique = true;
        abrirMenu(x, y, de, item, quantidade);
      }, 500),
    };
  }
  function moveuToque(ev: PointerEvent) {
    if (toque && Math.hypot(ev.clientX - toque.x, ev.clientY - toque.y) > 10) fimToque();
  }
  function fimToque() {
    if (toque) clearTimeout(toque.timer);
    toque = null;
  }

  async function mover(item: Item, quantidade: bigint | number, de: Origem) {
    menu = null;
    dialogo = null;
    ocupado = true;
    erro = '';
    try {
      inv = await api.moverItem(item.id, String(quantidade), de);
      aviso = `${quantidade} × ${item.nome} ${de === 'mochila' ? 'guardado no armazém' : 'na mochila'}.`;
    } catch (x) {
      erro = mensagemDe(x);
    } finally {
      ocupado = false;
    }
  }

  async function itensDeTeste() {
    ocupado = true;
    erro = '';
    try {
      inv = await api.itensDeTeste();
      aviso = 'Itens de teste chegaram no armazém.';
    } catch (x) {
      erro = mensagemDe(x);
    } finally {
      ocupado = false;
    }
  }

  function aoTeclar(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      menu = null;
      dialogo = null;
    }
  }

  carregar();
</script>

<svelte:window onkeydown={aoTeclar} onclick={() => (menu = null)} />

<div class="cabecalho">
  <div class="quem">
    <h1 style="margin: 0">{eu.personagem?.nome}</h1>
    <small>{NOME_VOCACAO[eu.personagem?.vocacao ?? ''] ?? eu.personagem?.vocacao} · {eu.conta.email}</small>
  </div>
  <div class="linha">
    {#if eu.dev}
      <button onclick={itensDeTeste} disabled={ocupado}>Receber itens de teste</button>
    {/if}
    <button onclick={aoSair}>Sair</button>
  </div>
</div>

{#if erro}<p class="painel erro" role="alert">{erro}</p>{/if}
{#if aviso && !erro}<p class="painel ok" role="status">{aviso}</p>{/if}

{#if inv}
  <section class="painel" aria-labelledby="t-mochila">
    <div class="linha" style="justify-content: space-between">
      <h2 id="t-mochila">Mochila</h2>
      <span class="aviso">{inv.mochila.casasUsadas} de {inv.mochila.casas} casas · pilhas de até {inv.mochila.pilhaMaxima}</span>
    </div>
    <p class="aviso">Botão direito num item (toque longo no celular) para ver o que fazer.</p>
    <div class="grade">
      {#each casas as c (c.chave)}
        {#if c.item}
          {@const item = c.item}
          <button
            class="casa"
            title={`${item.nome} × ${c.quantidade}`}
            aria-label={`${item.nome}, ${c.quantidade} unidades. Abrir menu.`}
            oncontextmenu={(ev) => { ev.preventDefault(); ev.stopPropagation(); abrirMenu(ev.clientX, ev.clientY, 'mochila', item, c.quantidade); }}
            onclick={(ev) => { ev.stopPropagation(); if (ignorarClique) { ignorarClique = false; return; } abrirNoElemento(ev, 'mochila', item, c.quantidade); }}
            onpointerdown={(ev) => inicioToque(ev, 'mochila', item, c.quantidade)}
            onpointermove={moveuToque}
            onpointerup={fimToque}
            onpointercancel={fimToque}
          >
            <span class="sigla">{sigla(item.nome)}</span>
            {#if item.tier > 0}<span class="tier">T{item.tier}</span>{/if}
            <span class="nome">{item.nome}</span>
            <span class="qtd">{c.quantidade}</span>
          </button>
        {:else}
          <div class="casa vazia" aria-hidden="true"></div>
        {/if}
      {/each}
    </div>
  </section>

  <section class="painel" aria-labelledby="t-armazem">
    <h2 id="t-armazem">Armazém</h2>
    {#if inv.armazem.itens.length === 0}
      <p class="aviso">Vazio.{#if eu.dev} Use "Receber itens de teste" para testar a mochila.{/if}</p>
    {:else}
      <ul class="armazem">
        {#each inv.armazem.itens as item (item.id)}
          <li>
            <button
              aria-label={`${item.nome}, ${item.quantidade} no armazém. Abrir menu.`}
              oncontextmenu={(ev) => { ev.preventDefault(); ev.stopPropagation(); abrirMenu(ev.clientX, ev.clientY, 'armazem', item, BigInt(item.quantidade)); }}
              onclick={(ev) => { ev.stopPropagation(); if (ignorarClique) { ignorarClique = false; return; } abrirNoElemento(ev, 'armazem', item, BigInt(item.quantidade)); }}
              onpointerdown={(ev) => inicioToque(ev, 'armazem', item, BigInt(item.quantidade))}
              onpointermove={moveuToque}
              onpointerup={fimToque}
              onpointercancel={fimToque}
            >
              <span>{item.nome}{item.tier > 0 ? ` · T${item.tier}` : ''}</span>
              <strong>{item.quantidade}</strong>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
{:else if !erro}
  <p class="aviso" style="color: var(--painel)">Abrindo a mochila…</p>
{/if}

{#if menu}
  {@const m = menu}
  <div
    class="menu"
    role="menu"
    tabindex="-1"
    bind:this={menuEl}
    style={`left: ${m.x}px; top: ${m.y}px`}
    onclick={(ev) => ev.stopPropagation()}
    onkeydown={(ev) => ev.key === 'Escape' && (menu = null)}
  >
    <div class="titulo">{m.item.nome} × {m.quantidade}</div>
    {#if m.de === 'mochila'}
      <button role="menuitem" disabled={ocupado} onclick={() => mover(m.item, m.quantidade, 'mochila')}>Guardar no armazém</button>
      <button role="menuitem" onclick={() => { dialogo = { de: 'mochila', item: m.item, valor: Number(m.quantidade) }; menu = null; }}>Guardar quantos…</button>
    {:else}
      <button role="menuitem" disabled={ocupado} onclick={() => mover(m.item, m.quantidade, 'armazem')}>Pôr tudo na mochila</button>
      <button role="menuitem" onclick={() => { dialogo = { de: 'armazem', item: m.item, valor: Math.min(Number(m.quantidade), 100) }; menu = null; }}>Pôr quantos…</button>
    {/if}
    <button role="menuitem" onclick={() => (menu = null)}>Cancelar</button>
  </div>
{/if}

{#if dialogo}
  {@const d = dialogo}
  <!-- Clicar fora do quadro fecha; Esc também (aoTeclar). -->
  <div class="dialogo-fundo" role="presentation" onclick={(ev) => { if (ev.target === ev.currentTarget) dialogo = null; }}>
    <div class="painel dialogo" role="dialog" aria-modal="true" aria-labelledby="t-quantos">
      <form onsubmit={(ev) => { ev.preventDefault(); mover(d.item, Math.max(1, Math.floor(d.valor)), d.de); }}>
        <h2 id="t-quantos">{d.de === 'mochila' ? 'Guardar no armazém' : 'Pôr na mochila'}</h2>
        <label for="quantos">Quantos {d.item.nome}?</label>
        <!-- svelte-ignore a11y_autofocus -->
        <input id="quantos" type="number" min="1" step="1" bind:value={dialogo.valor} autofocus />
        <div class="linha" style="margin-top: 12px">
          <button class="principal" type="submit" disabled={ocupado}>Confirmar</button>
          <button type="button" onclick={() => (dialogo = null)}>Cancelar</button>
        </div>
      </form>
    </div>
  </div>
{/if}
