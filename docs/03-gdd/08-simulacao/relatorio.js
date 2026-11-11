/* =============================================================================
 * Gerador do relatório da simulação (GDD 08) — HTML autocontido, sem bibliotecas.
 * Os gráficos são SVG gerados aqui (funcionam sem JavaScript e na impressão);
 * um script pequeno, embutido, só acrescenta a dica ao passar o mouse.
 * Chamado por `node sim.js --todos`.
 * ========================================================================== */
'use strict';
const fs = require('fs');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pct = (x, c) => Number.isFinite(x) ? (x * 100).toFixed(c === undefined ? 1 : c).replace('.', ',') + '%' : '—';
const num = (x, c) => Number.isFinite(x) ? x.toLocaleString('pt-BR', { minimumFractionDigits: c || 0, maximumFractionDigits: c || 0 }) : '—';

// paleta de referência (skill de visualização): ordem fixa das séries
const SERIE = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)'];
let contador = 0;

// escala "bonita" para os eixos
function ticks(min, max, n) {
  if (!(max > min)) { max = min + 1; }
  const passo0 = (max - min) / n, p10 = Math.pow(10, Math.floor(Math.log10(passo0)));
  const passo = [1, 2, 2.5, 5, 10].map(m => m * p10).find(p => p >= passo0) || passo0;
  const a = Math.floor(min / passo) * passo, b = Math.ceil(max / passo) * passo;
  const t = []; for (let v = a; v <= b + passo / 2; v += passo) t.push(+v.toPrecision(10));
  return t;
}
function fmtEixo(v, tipo) {
  if (tipo === 'pct') return Math.round(v * 100) + '%';
  if (tipo === 'reais') return 'R$ ' + num(v, Math.abs(v) < 10 ? 1 : 0);
  if (Math.abs(v) >= 10000) return num(v / 1000, 0) + ' mil';
  return num(v, Math.abs(v) < 10 && v % 1 ? 1 : 0);
}

/**
 * Gráfico de linhas (uma escala só). series: [{nome, v:[...]}]; x: dias.
 * faixa: [lo, hi] da meta (sombreada); marca: dia a partir do qual a saúde é medida.
 */
function linhas({ titulo, sub, x, series, tipo, faixa, marca, alto, ymin }) {
  const id = 'g' + (++contador);
  const W = 640, H = alto || 230, m = { l: 56, r: series.length > 1 ? 96 : 20, t: 14, b: 28 };
  const iw = W - m.l - m.r, ih = H - m.t - m.b;
  let lo = Infinity, hi = -Infinity;
  for (const s of series) for (const v of s.v) if (Number.isFinite(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
  if (faixa) { lo = Math.min(lo, faixa[0]); hi = Math.max(hi, faixa[1]); }
  if (ymin !== undefined) lo = Math.min(lo, ymin);
  if (lo > 0 && lo < hi * 0.35) lo = 0;
  const tk = ticks(lo, hi, 4); lo = tk[0]; hi = tk[tk.length - 1];
  const X = d => m.l + (d - x[0]) / (x[x.length - 1] - x[0]) * iw;
  const Y = v => m.t + ih - (v - lo) / (hi - lo) * ih;
  let g = `<svg class="grafico" id="${id}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(titulo)}">`;
  if (faixa) g += `<rect class="faixa" x="${m.l}" y="${Y(faixa[1]).toFixed(1)}" width="${iw}" height="${(Y(faixa[0]) - Y(faixa[1])).toFixed(1)}"/>`;
  for (const t of tk) g += `<line class="grade" x1="${m.l}" x2="${m.l + iw}" y1="${Y(t).toFixed(1)}" y2="${Y(t).toFixed(1)}"/><text class="eixo" x="${m.l - 6}" y="${(Y(t) + 4).toFixed(1)}" text-anchor="end">${fmtEixo(t, tipo)}</text>`;
  for (const d of [0, 91, 182, 273, 364]) if (d >= x[0] && d <= x[x.length - 1]) g += `<text class="eixo" x="${X(d).toFixed(1)}" y="${H - 8}" text-anchor="middle">${d === 0 ? 'dia 0' : 'dia ' + d}</text>`;
  if (marca !== undefined) g += `<line class="marca" x1="${X(marca).toFixed(1)}" x2="${X(marca).toFixed(1)}" y1="${m.t}" y2="${m.t + ih}"/><text class="eixo" x="${(X(marca) + 4).toFixed(1)}" y="${m.t + 10}">janela de saúde</text>`;
  g += `<line class="base" x1="${m.l}" x2="${m.l + iw}" y1="${m.t + ih}" y2="${m.t + ih}"/>`;
  series.forEach((s, i) => {
    let d = '', pen = false;
    s.v.forEach((v, k) => { if (Number.isFinite(v)) { d += (pen ? 'L' : 'M') + X(x[k]).toFixed(1) + ' ' + Y(v).toFixed(1); pen = true; } else pen = false; });
    const cor = s.cor || SERIE[i % SERIE.length];
    g += `<path d="${d}" fill="none" stroke="${cor}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    if (series.length > 1) { // rótulo direto no fim da linha (≤ 4 séries)
      let k = s.v.length - 1; while (k > 0 && !Number.isFinite(s.v[k])) k--;
      g += `<circle cx="${X(x[k]).toFixed(1)}" cy="${Y(s.v[k]).toFixed(1)}" r="4" fill="${cor}" stroke="var(--sup)" stroke-width="2"/>`;
      g += `<text class="rotulo" x="${(X(x[k]) + 8).toFixed(1)}" y="${(Y(s.v[k]) + 4).toFixed(1)}">${esc(s.nome)}</text>`;
    }
  });
  g += `<line class="cursor" x1="0" x2="0" y1="${m.t}" y2="${m.t + ih}" style="display:none"/>`;
  g += `<rect class="alvo" x="${m.l}" y="${m.t}" width="${iw}" height="${ih}" fill="transparent"/></svg>`;
  const dados = { x, s: series.map(s => ({ n: s.nome, v: s.v.map(v => Number.isFinite(v) ? +v.toPrecision(4) : null) })), tipo, m, W, iw };
  const leg = series.length > 1 ? `<div class="legenda">${series.map((s, i) => `<span><i style="background:${s.cor || SERIE[i]}"></i>${esc(s.nome)}</span>`).join('')}</div>` : '';
  return `<figure class="cartao"><figcaption><b>${esc(titulo)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</figcaption>${leg}${g}<script type="application/json" data-para="${id}">${JSON.stringify(dados)}</script></figure>`;
}

/** Barras horizontais (médias por categoria). */
function barras({ titulo, sub, itens, tipo }) {
  const W = 640, lin = 26, m = { l: 150, r: 70, t: 8, b: 8 };
  const H = m.t + m.b + lin * itens.length, iw = W - m.l - m.r;
  const max = Math.max(...itens.map(i => i.v), 1e-9);
  let g = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(titulo)}">`;
  itens.forEach((it, k) => {
    const y = m.t + k * lin, w = Math.max(2, it.v / max * iw);
    g += `<g class="barra"><title>${esc(it.n)}: ${fmtEixo(it.v, tipo)}</title><text class="eixo" x="${m.l - 8}" y="${y + 17}" text-anchor="end">${esc(it.n)}</text>`;
    g += `<path d="M${m.l} ${y + 5} h${(w - 4).toFixed(1)} a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 h-${(w - 4).toFixed(1)} z" fill="${it.cor || 'var(--s1)'}"/>`;
    g += `<text class="valor" x="${(m.l + w + 6).toFixed(1)}" y="${y + 17}">${fmtEixo(it.v, tipo)}</text></g>`;
  });
  return `<figure class="cartao"><figcaption><b>${esc(titulo)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</figcaption>${g}</svg></figure>`;
}

/** Pontos por cenário contra a faixa da meta (um ponto por linha). */
function pontos({ titulo, sub, itens, faixa, tipo }) {
  const W = 640, lin = 22, m = { l: 230, r: 70, t: 24, b: 10 };
  const H = m.t + m.b + lin * itens.length, iw = W - m.l - m.r;
  const vals = itens.map(i => i.v).filter(Number.isFinite);
  let lo = Math.min(...vals, faixa ? faixa[0] : Infinity), hi = Math.max(...vals, faixa ? faixa[1] : -Infinity);
  const tk = ticks(lo, hi, 4); lo = tk[0]; hi = tk[tk.length - 1];
  const X = v => m.l + (clampN(v, lo, hi) - lo) / (hi - lo) * iw;
  let g = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(titulo)}">`;
  if (faixa) g += `<rect class="faixa" x="${X(faixa[0]).toFixed(1)}" y="${m.t - 6}" width="${(X(faixa[1]) - X(faixa[0])).toFixed(1)}" height="${H - m.t - m.b + 6}"/>`;
  for (const t of tk) g += `<line class="grade" x1="${X(t).toFixed(1)}" x2="${X(t).toFixed(1)}" y1="${m.t - 6}" y2="${H - m.b}"/><text class="eixo" x="${X(t).toFixed(1)}" y="${m.t - 10}" text-anchor="middle">${fmtEixo(t, tipo)}</text>`;
  itens.forEach((it, k) => {
    const y = m.t + k * lin + 11;
    g += `<g class="barra"><title>${esc(it.n)}: ${fmtEixo(it.v, tipo)}${it.ok === undefined ? '' : it.ok ? ' (dentro da meta)' : ' (fora da meta)'}</title>`;
    g += `<text class="eixo${it.destaque ? ' forte' : ''}" x="${m.l - 8}" y="${y + 4}" text-anchor="end">${esc(it.n)}</text>`;
    g += `<line class="grade" x1="${m.l}" x2="${m.l + iw}" y1="${y}" y2="${y}" stroke-dasharray="1 4"/>`;
    if (Number.isFinite(it.v)) g += `<circle cx="${X(it.v).toFixed(1)}" cy="${y}" r="5" fill="${it.destaque ? 'var(--s2)' : 'var(--s1)'}" stroke="var(--sup)" stroke-width="2"/>`;
    g += `<text class="valor" x="${m.l + iw + 8}" y="${y + 4}">${it.ok === undefined ? '' : it.ok ? '✓ ' : '✗ '}${fmtEixo(it.v, tipo)}</text></g>`;
  });
  return `<figure class="cartao"><figcaption><b>${esc(titulo)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</figcaption>${g}</svg></figure>`;
}
const clampN = (x, a, b) => Math.max(a, Math.min(b, x));

const CRIT = [
  ['ipc', 'IPC ao ano', r => pct(r.ipc_anual)],
  ['drenos_fontes', 'Drenos ÷ fontes', r => pct(r.drenos_fontes, 0)],
  ['frac_teto', 'No teto', r => pct(r.frac_teto, 0)],
  ['premium_dias', 'Premium (dias de renda)', r => num(r.premium_dias, 1)],
  ['massa_premiums', 'Massa/ativo (premiums)', r => num(r.massa_premiums, 2)],
  ['top10', 'Top 10%', r => pct(r.top10, 0)],
  ['premium_via_ouro', 'Premium via ouro', r => pct(r.premium_via_ouro, 0)],
  ['coins_trocas', 'Trocas em Coins', r => pct(r.coins_trocas, 1)],
  ['basicos_piso', 'Básicos ÷ piso', r => num(r.basicos_piso, 2)],
  ['salario_topo', 'Salário-teto topo', r => 'R$ ' + num(r.salario_topo, 0)],
  ['dia_teto', 'Dia de teto', r => 'R$ ' + num(r.dia_teto_reais, 2)],
  ['lucro_fazenda', 'Fazenda R$/mês', r => 'R$ ' + num(r.lucro_fazenda_mes, 1)],
];

function gerar(res, P, arquivo) {
  contador = 0;
  const base = res.find(x => x.id === 'base') || res[0];
  const S = P.saude, ini = P.simulacao.inicio_saude;
  const b = base.serie, x = b.map(l => l.dia), col = k => b.map(l => l[k]);
  const grupos = [['base', 'Base'], ['estresse', 'Estresses'], ['reconciliacao', 'Reconciliação'], ['sensibilidade', 'Sensibilidade']];

  // tabela de critérios
  let tab = '<div class="rolagem"><table><thead><tr><th>Cenário</th><th>Passa</th>' + CRIT.map(c => `<th>${esc(c[1])}</th>`).join('') + '</tr></thead><tbody>';
  for (const [gk, gn] of grupos) {
    const lin = res.filter(r => r.grupo === gk);
    if (!lin.length) continue;
    tab += `<tr class="grupo"><td colspan="${CRIT.length + 2}">${gn}</td></tr>`;
    for (const r of lin) {
      tab += `<tr><td title="${esc(r.descricao || '')}">${esc(r.nome)}</td><td class="num">${r.r.passa}/${r.r.total}</td>`;
      for (const c of CRIT) { const ok = r.r.criterios[c[0]]; tab += `<td class="num ${ok ? 'ok' : 'nao'}">${ok ? '✓' : '✗'} ${c[2](r.r)}</td>`; }
      tab += '</tr>';
    }
  }
  tab += '</tbody></table></div>';

  const r0 = base.r;
  const tiles = [
    ['IPC ao ano (dia 182 a 365)', pct(r0.ipc_anual), 'meta 0% a 8%'],
    ['Preço do Coin', num(r0.preco_coin, 1) + ' ouro', `premium = ${num(r0.premium_ouro, 0)} ouro`],
    ['Premium em dias de renda', num(r0.premium_dias, 1) + ' dias', 'meta 12 a 20'],
    ['No teto num dia', pct(r0.frac_teto, 0), 'meta 10% a 30%'],
    ['Top 10% da riqueza', pct(r0.top10, 0), 'meta abaixo de 60%'],
    ['Lucro da conta-fazenda', 'R$ ' + num(r0.lucro_fazenda_mes, 1) + '/mês', 'meta até R$ 15'],
  ].map(t => `<div class="tile"><span>${t[0]}</span><b>${t[1]}</b><small>${t[2]}</small></div>`).join('');

  const fontesMed = Object.entries(r0.fontes_cat).map(([k, v]) => ({ n: k, v: v / r0.ativos })).filter(i => i.v > 0.5).sort((a, b) => b.v - a.v);
  const drenosMed = Object.entries(r0.drenos_cat).map(([k, v]) => ({ n: k, v: v / r0.ativos })).filter(i => i.v > 0.5).sort((a, b) => b.v - a.v);

  let base_html = `<div class="tiles">${tiles}</div><div class="grade2">`;
  base_html += linhas({ titulo: 'IPC (base 100 no dia 30)', sub: 'cesta de 24 grupos de bens, pesos encadeados por mês', x, series: [{ nome: 'IPC', v: col('ipc') }], marca: ini });
  base_html += linhas({ titulo: 'Preço do Coin em ouro', sub: 'fechamento diário do Câmbio (leilão de hora em hora)', x, series: [{ nome: 'Coin', v: col('preco_coin') }], marca: ini });
  base_html += linhas({ titulo: 'Premium de 30 dias em dias de renda do mediano', sub: 'faixa sombreada: meta do 07 (12 a 20 dias)', x, series: [{ nome: 'dias', v: col('premium_dias_renda') }], faixa: S.premium_dias, marca: ini });
  base_html += linhas({ titulo: 'Drenos ÷ fontes de ouro', sub: 'faixa sombreada: meta de 85% a 95%; média móvel de 7 dias', x, series: [{ nome: 'D/F', v: media7(col('drenos_fontes')) }], faixa: S.drenos_fontes, tipo: 'pct', marca: ini });
  base_html += linhas({ titulo: 'Contas que esgotaram a cota no dia', sub: 'faixa sombreada: meta de 10% a 30%; média móvel de 7 dias', x, series: [{ nome: 'no teto', v: media7(col('frac_teto')) }], faixa: S.frac_teto, tipo: 'pct', marca: ini });
  base_html += linhas({ titulo: 'Concentração da riqueza', sub: 'ouro + itens a preço de mercado + Coins; contas com 7 dias ou mais', x, series: [{ nome: 'top 10%', v: col('top10') }, { nome: 'top 1%', v: col('top1') }, { nome: 'Gini', v: col('gini') }], tipo: 'pct', marca: ini });
  base_html += linhas({ titulo: 'Massa de ouro por conta ativa', sub: 'em ouro', x, series: [{ nome: 'ouro', v: col('massa_por_ativo') }], marca: ini });
  base_html += linhas({ titulo: 'Lucro de uma conta-fazenda', sub: 'R$ por conta por mês, no mercado cinza (50% do oficial, perdas de 33%)', x, series: [{ nome: 'R$/mês', v: col('lucro_fazenda_mes_reais') }], faixa: [0, S.lucro_fazenda_mes_max], tipo: 'reais', marca: ini });
  base_html += linhas({ titulo: 'Contas ativas', sub: 'escala da Cidade (a amostra simulada × 1/escala)', x, series: [{ nome: 'ativos', v: col('ativos') }] });
  base_html += linhas({ titulo: 'Valor de um dia de teto', sub: 'R$ no câmbio oficial; o 13 pede cerca de R$ 1', x, series: [{ nome: 'mediano', v: col('dia_teto_mediano_reais') }], faixa: S.dia_teto_reais, tipo: 'reais', marca: ini });
  base_html += '</div><div class="grade2">';
  base_html += barras({ titulo: 'Fontes de ouro por categoria', sub: 'ouro por conta ativa por dia, média do dia 182 ao 365', itens: fontesMed.map(i => ({ ...i, cor: 'var(--s3)' })) });
  base_html += barras({ titulo: 'Drenos de ouro por categoria', sub: 'ouro por conta ativa por dia, média do dia 182 ao 365', itens: drenosMed.map(i => ({ ...i, cor: 'var(--s2)' })) });
  base_html += '</div><h3>Preços por grupo de bens (1,00 = VR de lançamento)</h3><div class="grade2">';
  for (const [t, nome] of [['bruto', 'Matéria-prima bruta'], ['insumo', 'Insumos (lingote, tábua, couro, tecido)'], ['equip', 'Equipamento, ferramentas e kits'], ['consumivel', 'Consumíveis (refeição, poção)']]) {
    base_html += linhas({ titulo: nome, sub: 'tiers T2, T4 e T6', x, series: [2, 4, 6].map(T => ({ nome: 'T' + T, v: col(`p_${t}_T${T}`) })), marca: ini });
  }
  base_html += '</div>';

  // pequenos múltiplos: estresses contra o base
  const sm = (k, titulo, tipo, faixa) => {
    let h = `<h3>${titulo}</h3><div class="legenda"><span><i style="background:var(--muted)"></i>base</span><span><i style="background:var(--s1)"></i>cenário</span></div><div class="grade3">`;
    for (const r of res.filter(r => r.grupo === 'estresse')) {
      h += linhas({ titulo: r.nome, x, series: [{ nome: 'base', v: col(k), cor: 'var(--muted)' }, { nome: 'cenário', v: r.serie.map(l => l[k]), cor: 'var(--s1)' }], tipo, faixa, alto: 170 }).replace('<figure class="cartao">', '<figure class="cartao mini">');
    }
    return h + '</div>';
  };
  let estresse_html = sm('ipc', 'IPC nos estresses', undefined) + sm('preco_coin', 'Preço do Coin nos estresses', undefined) + sm('premium_dias_renda', 'Premium em dias de renda nos estresses', undefined, S.premium_dias);

  // comparações dos cenários contra a meta
  const comp = (campo, titulo, faixa, tipo, okKey) => pontos({ titulo, itens: res.map(r => ({ n: r.nome.replace(/ —.*$/, '').replace(/^Cenário base.*/, 'Base'), v: r.r[campo], ok: okKey ? r.r.criterios[okKey] : undefined, destaque: r.id === 'base' })), faixa, tipo });
  const comparacoes = '<div class="grade2">' +
    comp('ipc_anual', 'IPC ao ano (tendência do dia 182 ao 365)', S.ipc_anual, 'pct', 'ipc') +
    comp('premium_dias', 'Premium em dias de renda do mediano', S.premium_dias, undefined, 'premium_dias') +
    comp('frac_teto', 'Contas no teto', S.frac_teto, 'pct', 'frac_teto') +
    comp('lucro_fazenda_mes', 'Lucro da conta-fazenda (R$/mês)', [0, S.lucro_fazenda_mes_max], 'reais', 'lucro_fazenda') +
    comp('drenos_fontes', 'Drenos ÷ fontes', S.drenos_fontes, 'pct', 'drenos_fontes') +
    comp('falta_essencial', 'Consumo essencial não atendido', undefined, 'pct') + '</div>';

  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Simulação da economia</title>
<style>
:root{color-scheme:light;--sup:#fcfcfb;--pag:#f9f9f7;--t1:#0b0b0b;--t2:#52514e;--muted:#898781;--grade:#e1e0d9;--base:#c3c2b7;--borda:rgba(11,11,11,.10);
--s1:#2a78d6;--s2:#eb6834;--s3:#1baf7a;--s4:#eda100;--faixa:rgba(27,175,122,.12);--ok:#006300;--nao:#d03b3b}
@media (prefers-color-scheme:dark){:root:where(:not([data-theme="light"])){color-scheme:dark;--sup:#1a1a19;--pag:#0d0d0d;--t1:#f0efec;--t2:#c3c2b7;--grade:#2c2c2a;--base:#383835;--borda:rgba(255,255,255,.10);
--s1:#3987e5;--s2:#d95926;--s3:#199e70;--s4:#c98500;--faixa:rgba(25,158,112,.16);--ok:#0ca30c;--nao:#e66767}}
:root[data-theme="dark"]{color-scheme:dark;--sup:#1a1a19;--pag:#0d0d0d;--t1:#f0efec;--t2:#c3c2b7;--grade:#2c2c2a;--base:#383835;--borda:rgba(255,255,255,.10);
--s1:#3987e5;--s2:#d95926;--s3:#199e70;--s4:#c98500;--faixa:rgba(25,158,112,.16);--ok:#0ca30c;--nao:#e66767}
*{box-sizing:border-box}body{margin:0;background:var(--pag);color:var(--t1);font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
main{max-width:1320px;margin:0 auto;padding:24px 16px 64px}h1{font-size:26px;margin:0 0 4px}h2{font-size:20px;margin:40px 0 8px;padding-top:8px;border-top:1px solid var(--grade)}
h3{font-size:16px;margin:24px 0 8px}p{color:var(--t2);max-width:900px}.nota{font-size:13px;color:var(--t2)}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:16px 0}
.tile{background:var(--sup);border:1px solid var(--borda);border-radius:10px;padding:12px 14px}.tile span{display:block;font-size:13px;color:var(--t2)}.tile b{display:block;font-size:24px;margin:2px 0}.tile small{color:var(--muted)}
.grade2{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr));gap:14px}.grade3{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:10px}
.cartao{margin:0;background:var(--sup);border:1px solid var(--borda);border-radius:10px;padding:12px 12px 6px;position:relative}
.cartao figcaption b{display:block;font-size:14px}.cartao figcaption span{display:block;font-size:12px;color:var(--t2)}.mini figcaption b{font-size:13px}
svg{width:100%;height:auto;display:block;overflow:visible}.grade{stroke:var(--grade);stroke-width:1}.base{stroke:var(--base);stroke-width:1}.marca{stroke:var(--muted);stroke-dasharray:3 3}
.faixa{fill:var(--faixa)}.eixo{fill:var(--muted);font-size:11px}.eixo.forte{fill:var(--t1);font-weight:600}.rotulo{fill:var(--t2);font-size:11px}.valor{fill:var(--t1);font-size:12px}
.cursor{stroke:var(--t2);stroke-width:1}.legenda{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--t2);margin:4px 0}.legenda i{display:inline-block;width:12px;height:3px;border-radius:2px;margin-right:6px;vertical-align:middle}
.dica{position:absolute;pointer-events:none;background:var(--sup);border:1px solid var(--borda);border-radius:8px;padding:6px 8px;font-size:12px;box-shadow:0 4px 14px rgba(0,0,0,.12);white-space:nowrap;z-index:2}
.rolagem{overflow-x:auto;background:var(--sup);border:1px solid var(--borda);border-radius:10px}table{border-collapse:collapse;font-size:12.5px;width:100%}
th,td{padding:6px 8px;border-bottom:1px solid var(--grade);text-align:left;vertical-align:top}th{position:sticky;top:0;background:var(--sup);font-weight:600;color:var(--t2)}
td.num{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}td.ok{color:var(--ok)}td.nao{color:var(--nao)}tr.grupo td{font-weight:700;background:var(--pag)}
.barra:hover text.valor{font-weight:700}
</style></head><body><main>
<h1>Simulação da economia — Projeto Ofício</h1>
<p>Resultado de <code>node sim.js --todos</code>: ${res.length} cenários de 365 dias em passos diários, escala ${P.simulacao.escala} (cada conta simulada representa ${Math.round(1 / P.simulacao.escala)} contas da Cidade; o Câmbio roda em escala real, com 24 rodadas por dia), semente ${P.simulacao.semente}. Os critérios de saúde (07 §13) são medidos do dia ${ini} ao 365. Documento de leitura: <code>08-simulacao.md</code>. Séries diárias completas: os arquivos CSV desta pasta.</p>
<p class="nota">Como ler: a faixa sombreada é a meta; a linha tracejada vertical marca o início da janela de saúde; passe o mouse sobre um gráfico de linha para ver os valores do dia. ✓ = dentro da meta, ✗ = fora.</p>
<h2>1. Critérios de saúde por cenário</h2>${tab}
<h2>2. Cenário base</h2><p>${esc(base.descricao || '')}</p>${base_html}
<h2>3. Comparação dos cenários contra as metas</h2>${comparacoes}
<h2>4. Estresses ao longo do ano</h2>${estresse_html}
</main>
<script>
(function(){
  function fmt(v,t){if(v===null||v===undefined)return'—';if(t==='pct')return(v*100).toFixed(1).replace('.',',')+'%';if(t==='reais')return'R$ '+v.toFixed(2).replace('.',',');return Math.abs(v)>=100?Math.round(v).toLocaleString('pt-BR'):v.toFixed(2).replace('.',',');}
  document.querySelectorAll('script[data-para]').forEach(function(s){
    var d=JSON.parse(s.textContent),svg=document.getElementById(s.getAttribute('data-para'));if(!svg)return;
    var fig=svg.closest('figure'),cur=svg.querySelector('.cursor'),alvo=svg.querySelector('.alvo'),dica=document.createElement('div');dica.className='dica';dica.style.display='none';fig.appendChild(dica);
    function mover(ev){var r=svg.getBoundingClientRect(),esc=d.W/r.width,px=(ev.clientX-r.left)*esc,i=Math.round((px-d.m.l)/d.iw*(d.x.length-1));i=Math.max(0,Math.min(d.x.length-1,i));
      var xx=d.m.l+i/(d.x.length-1)*d.iw;cur.setAttribute('x1',xx);cur.setAttribute('x2',xx);cur.style.display='';
      dica.innerHTML='<b>dia '+d.x[i]+'</b>'+d.s.map(function(q){return'<br>'+q.n+': '+fmt(q.v[i],d.tipo)}).join('');
      dica.style.display='';var fr=fig.getBoundingClientRect(),lx=ev.clientX-fr.left+12;if(lx>fr.width-150)lx=ev.clientX-fr.left-150;dica.style.left=lx+'px';dica.style.top=(ev.clientY-fr.top-10)+'px';}
    alvo.addEventListener('mousemove',mover);alvo.addEventListener('mouseleave',function(){cur.style.display='none';dica.style.display='none';});
  });
})();
</script></body></html>`;
  fs.writeFileSync(arquivo, html);
}
function media7(v) { return v.map((_, i) => { let s = 0, n = 0; for (let k = Math.max(0, i - 6); k <= i; k++) if (Number.isFinite(v[k])) { s += v[k]; n++; } return n ? s / n : NaN; }); }

module.exports = { gerar };
