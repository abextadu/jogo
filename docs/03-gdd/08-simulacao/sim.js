#!/usr/bin/env node
/* =============================================================================
 * Simulação da economia — Projeto Ofício — GDD, módulo 08
 * -----------------------------------------------------------------------------
 * Único código permitido antes da Fase 5 (CLAUDE.md). Node.js puro, sem
 * dependências. RNG determinístico por semente.
 *
 * O que o modelo representa, em uma frase: uma Cidade com dezenas de milhares
 * de contas (representadas por uma amostra de agentes), cada uma com perfil,
 * dois ofícios mestres e vocação; a fila produz bens por tier; o combate e os
 * sistemas da cidade consomem; um mercado por grupo de bens forma o preço;
 * o ouro nasce em fontes com orçamento e morre em drenos; os Coins nascem de
 * doação, morrem na loja e trocam de mão no Câmbio (leilão de hora em hora).
 *
 * Uso:
 *   node sim.js --cenario base --semente 42
 *   node sim.js --todos            (roda todos os cenários e gera o relatório)
 *   node sim.js --lista            (lista os cenários)
 *   opções: --escala 0.2  --dias 365  --quieto  --sem-csv
 *
 * Unidades: ouro com casas decimais; bens medidos em "VRa", o valor de
 * referência de lançamento (minutos de ofício × ouro por minuto, 05 §9 e
 * 06 §11.5). O preço de cada grupo é um índice π (1,00 = VR de lançamento).
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const PASTA = __dirname;
const PASTA_RES = path.join(PASTA, 'resultados');

// ---------------------------------------------------------------------------
// 1. Constantes: grupos de bens (4 tipos × 6 tiers) e estágios dos ofícios
// ---------------------------------------------------------------------------
const NT = 6;
const TIPOS = ['bruto', 'insumo', 'equip', 'consumivel'];
const BRUTO = 0, INSUMO = 1, EQUIP = 2, CONSUM = 3;
const NG = TIPOS.length * NT;
const gi = (tipo, T) => tipo * NT + (T - 1);
const tipoDe = g => Math.floor(g / NT);
const tierDeGrupo = g => (g % NT) + 1;
const NOME_GRUPO = [];
for (let t = 0; t < TIPOS.length; t++) for (let T = 1; T <= NT; T++) NOME_GRUPO.push(`${TIPOS[t]}_T${T}`);

// estágio de cada ofício mestre: coleta, transformação, criação de equipamento, criação de consumível
const COLETA = 0, TRANSF = 1, CRIA_EQ = 2, CRIA_CS = 3;
const SAIDA_ESTAGIO = [BRUTO, INSUMO, EQUIP, CONSUM];

// faixas de preço de reserva dos vendedores (escala log, em múltiplos do VR de lançamento)
const NB = 48, RMIN = 0.02, RMAX = 4.0;
const LRMIN = Math.log(RMIN), LSPAN = Math.log(RMAX / RMIN);
function binDe(r) {
  const b = Math.floor((Math.log(Math.max(r, RMIN)) - LRMIN) / LSPAN * NB);
  return b < 0 ? 0 : (b >= NB ? NB - 1 : b);
}
const bordaSup = b => Math.exp(LRMIN + (b + 1) / NB * LSPAN);

// ---------------------------------------------------------------------------
// 2. Utilidades: RNG determinístico, mesclagem de parâmetros, estatística
// ---------------------------------------------------------------------------
function criarRNG(semente) {
  let s = (semente >>> 0) || 1;
  const next = () => { // mulberry32
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  let reserva = null;
  const normal = () => {
    if (reserva !== null) { const v = reserva; reserva = null; return v; }
    let u, v, r;
    do { u = 2 * next() - 1; v = 2 * next() - 1; r = u * u + v * v; } while (r >= 1 || r === 0);
    const f = Math.sqrt(-2 * Math.log(r) / r);
    reserva = v * f;
    return u * f;
  };
  return {
    next, normal,
    unif: (a, b) => a + (b - a) * next(),
    chance: p => next() < p,
    int: n => Math.floor(next() * n),
    lognormal: (med, sig) => med * Math.exp(sig * normal()),
    // arredondamento estocástico: transforma uma contagem fracionária (por escala) em inteira sem viés
    arred: x => { const f = Math.floor(x); return f + (next() < x - f ? 1 : 0); },
  };
}

function ehObjeto(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
function mesclar(base, mud) {
  const r = Array.isArray(base) ? base.slice() : Object.assign({}, base);
  for (const k of Object.keys(mud || {})) {
    if (k.startsWith('_')) continue;
    if (ehObjeto(mud[k]) && ehObjeto(base[k])) r[k] = mesclar(base[k], mud[k]);
    else r[k] = mud[k];
  }
  return r;
}

const clamp = (x, a, b) => (x < a ? a : (x > b ? b : x));
function mediana(arr) {
  if (!arr.length) return 0;
  const a = Float64Array.from(arr).sort();
  const m = a.length >> 1;
  return a.length % 2 ? a[m] : 0.5 * (a[m - 1] + a[m]);
}
function gini(arr) { // devolve [gini, fatia do top 1%, fatia do top 10%]
  const n = arr.length;
  if (n < 2) return [0, 0, 0];
  const a = Float64Array.from(arr, x => Math.max(0, x)).sort();
  let soma = 0, ponderada = 0;
  for (let i = 0; i < n; i++) { soma += a[i]; ponderada += (i + 1) * a[i]; }
  if (soma <= 0) return [0, 0, 0];
  const g = (2 * ponderada) / (n * soma) - (n + 1) / n;
  let t1 = 0, t10 = 0;
  const k1 = Math.max(1, Math.round(n * 0.01)), k10 = Math.max(1, Math.round(n * 0.10));
  for (let i = n - 1, c = 0; i >= 0 && c < k10; i--, c++) { t10 += a[i]; if (c < k1) t1 += a[i]; }
  return [g, t1 / soma, t10 / soma];
}
function arredSig(x, alg) { // degrau de preço com N algarismos significativos (07 §5.1)
  if (x <= 0) return x;
  const e = Math.floor(Math.log10(x)) - (alg - 1);
  const q = Math.pow(10, e);
  return Math.round(x / q) * q;
}

// ---------------------------------------------------------------------------
// 3. Carga de parâmetros e cenários
// ---------------------------------------------------------------------------
function lerJSON(arq) { return JSON.parse(fs.readFileSync(path.join(PASTA, arq), 'utf8')); }
function carregarCenarios() { return lerJSON('cenarios.json').cenarios; }
function paramsDoCenario(cen, extras) {
  let P = lerJSON('parametros.json');
  P = mesclar(P, cen.mudancas || {});
  if (extras) P = mesclar(P, extras);
  return P;
}

// ---------------------------------------------------------------------------
// 4. Tabelas de progressão (02 §3 e §4)
// ---------------------------------------------------------------------------
function tabelaXP(coef, exp) { // cum[L] = XP total para estar no nível L (L de 1 a 100)
  const cum = new Float64Array(102);
  for (let n = 1; n <= 100; n++) cum[n + 1] = cum[n] + Math.round(coef * Math.pow(n, exp));
  return cum;
}
function nivelPorXP(cum, xp) { let n = 1; while (n < 100 && xp >= cum[n + 1]) n++; return n; }

// ---------------------------------------------------------------------------
// 5. Estado da simulação
// ---------------------------------------------------------------------------
function criarSim(P, cen, semente) {
  const sim = {
    P, cen, rng: criarRNG(semente), dia: 0, proxId: 1,
    agentes: [], ativos: [], suspensos: new Set(),
    preco: new Float64Array(NG).fill(1), precoNovo: new Float64Array(NG).fill(1), precoMed: new Float64Array(NG).fill(1),
    dem: new Float64Array(NG), sb: new Float64Array(NG * NB), fillB: new Float64Array(NG), fillS: new Float64Array(NG * NB), fillEMA: new Float64Array(NG).fill(1),
    volV: new Float64Array(NG), volQ: new Float64Array(NG), vol30: [], volJanela: new Float64Array(NG),
    theta: new Float64Array(4 * NT).fill(1), lucroMin: new Float64Array(4 * NT),
    idxInsumo: 1, multEnc: 1,
    cumOf: tabelaXP(P.progressao.xp_coef_oficio, P.progressao.xp_expoente),
    cumVoc: tabelaXP(P.progressao.xp_coef_vocacao, P.progressao.xp_expoente),
    // índice de preços
    ipcBruto: [], ipcPesos: null, ipcBaseP: null, ipcBaseV: 1,
    // ledger de ouro do dia (por conta simulada; multiplicar por 1/escala para a cidade)
    fontes: novoLedgerFontes(), drenos: novoLedgerDrenos(),
    massaInativa: 0, massaCongelada: 0,
    // Câmbio
    coinPreco: P.cambio.preco_abertura_premium_ouro / (P.coins.premium_reais * P.coins.coins_por_real),
    coinHist24: [], livro: [], seqOrdem: 1,
    cambioDia: null,
    coinsDoados: 0, coinsDestruidos: 0, coinsSemLastro: 0,
    reaisDoados: 0, reaisContestados: 0, janelaDisputa: [], disjuntorCoins: false,
    contestacoes: [], regularizacoes: [],
    premiumsDia: { proprio: 0, ouro: 0 }, janelaPremium: [],
    bauOferta: [], bauEstoque: 0,
    fazTransfJanela: [], fazDiasJanela: [], fazSaidasJanela: [],
    serie: [], log: [],
    contadores: { bazarVendas: 0, bazarBloqueadas: 0, vendasAbaixoMin: 0, coinsTrocaBypass: 0, coinsItens: 0 },
    multDrops: 1,
  };
  sim.k = Math.max(1, Math.round(1 / P.simulacao.escala)); // clones de ordem do Câmbio (escala real)
  return sim;
}
function novoLedgerFontes() { return { npc: 0, encomendas: 0, cercos: 0, eventos: 0, comeco: 0 }; }
function novoLedgerDrenos() {
  return { insumos: 0, partida: 0, ajudantes: 0, taxas: 0, troca: 0, cambio: 0, bau: 0, bazar: 0,
    obras: 0, luxos: 0, selo: 0, oficina: 0, fiscalizacao: 0, dupe: 0 };
}

// ---------------------------------------------------------------------------
// 6. Agentes (contas)
// ---------------------------------------------------------------------------
function chavePerfil(a) { return a.bot === 1 ? 'automacao' : (a.bot >= 2 ? 'fazenda' : a.perfil); }
function perfilDe(sim, a) { return sim.P.perfis[chavePerfil(a)]; }

function sortearPerfil(sim) {
  const m = sim.P.populacao.mix_entrada, u = sim.rng.next();
  if (u < m.casual) return 'casual';
  if (u < m.casual + m.regular) return 'regular';
  return 'hardcore';
}

// escolha do ofício mestre: igual entre os 12, com um viés pelo índice de ofício publicado (06 §9.5)
function sortearOficio(sim, excluir) {
  const P = sim.P, est = P.producao.estagio_oficio, beta = P.producao.vies_indice_oficio, rng = sim.rng;
  const pesos = new Array(12);
  let tot = 0;
  for (let o = 0; o < 12; o++) {
    if (o === excluir) { pesos[o] = 0; continue; }
    const w = Math.exp(beta * (sim.indiceOficio ? sim.indiceOficio[est[o]] : 0));
    pesos[o] = w; tot += w;
  }
  let u = rng.next() * tot;
  for (let o = 0; o < 12; o++) { u -= pesos[o]; if (u <= 0) return o; }
  return excluir === 11 ? 10 : 11;
}

function novoAgente(sim, perfil, bot) {
  const P = sim.P, rng = sim.rng;
  const est = P.producao.estagio_oficio;
  const o1 = sortearOficio(sim, -1); const o2 = sortearOficio(sim, o1);
  const a = {
    id: sim.proxId++, perfil, bot, nasc: sim.dia, ativo: true, saida: -1, susp: -1, contestado: false,
    st1: est[o1], st2: est[o2],
    xp1: 0, xp2: 0, xpv: 0, xpa: 0, n1: 1, n2: 1, nv: 1, mx1: 1, mx2: 1, maxN: 1,
    selo1: 0, selo2: 0, pm1: 0, pm2: 0, ac1: 0, ac2: 0, mult1: 1, mult2: 1,
    filas: 1, marcos: 0, taxa: 0.7, merito: 0,
    T1: 1, T2: 1, T1e: 1, T2e: 1, Tv: 1, Ta: 1, h1: 0, h2: 0, hv: 0, ha: 0, hf: 0, s1: 1, s2: 1, sv: 1,
    ouro: 0, ouroRes: 0,
    org: new Float64Array(NG), circ: new Float64Array(NG), pre: new Float64Array(NG), cred: new Float64Array(NG),
    nec: new Float64Array(NG), cmp: new Float64Array(NG), ofc: new Float64Array(NG), ofo: new Float64Array(NG),
    cvp: new Float64Array(NG), cvc: new Float64Array(NG), cvo: new Float64Array(NG),
    bin: new Uint8Array(NG), prodEMA: new Float64Array(NG), prodHojeG: new Float64Array(NG),
    cota: 0, tetoEff: 0, noTeto: false, limitadoCota: false, vrPresoHoje: 0, prodHoje: 0, prodEMAtot: 0,
    saidaOrigemHoje: 0,
    rendaEMA: 0, fontesEMA: 0, fontesHoje: 0, receitaHoje: 0,
    ruido: rng.lognormal(1, P.mercado.ruido_reserva),
    partEnc: false, partCerco: false, adFront: rng.chance(P.social.fronteira.adesao),
    encEntregue: 0, mq: [0, 0, 0], fe: 1, fcr: 1,
    // criação planejada do dia (mestre 1 e 2)
    cw: [0, 0], cth: [1, 1], cin: [[-1, -1, -1], [-1, -1, -1]], csh: [[0, 0, 0], [0, 0, 0]], creq: [0, 0],
    // Coins
    premiumAte: -1, ordemCompra: 0, compraSemana: 0, semanaRef: 0,
    pagante: 0, diaDoacao: rng.int(30), coins: 0, lotes: [], bConv: 0, bBazar: 0, guard: [], doacoes: 0,
    disp: rng.lognormal(P.coins.disposicao_mediana_dias, P.coins.disposicao_sigma),
    bazarAlvo: 0, coinsRecebidos: 0,
    // fazenda
    transf: 0, receptores: null, ouroCinza: 0, saidaAcum: 0,
  };
  const perf = perfilDe(sim, a);
  a.partEnc = rng.chance(perf.participacao_encomendas);
  a.partCerco = rng.chance(perf.participacao_cerco);
  if (bot >= 2) { // fazenda: mestres escolhidos pelo operador
    const e = P.bots.estagio_fazenda === 'equip' ? CRIA_EQ : COLETA;
    a.st1 = e; a.st2 = COLETA;
  }
  if (bot === 0) { // pagante (doador do 11), sobreposto ao perfil
    const C = P.coins;
    const fracPag = C.conversao_mau / C.dau_mau;
    const pesoMedio = 0.52 * P.perfis.casual.peso_pagante + 0.37 * P.perfis.regular.peso_pagante + 0.11 * P.perfis.hardcore.peso_pagante;
    if (rng.chance(fracPag * P.perfis[perfil].peso_pagante / pesoMedio)) {
      let u = rng.next(), acc = 0;
      for (const [reais, fr] of C.faixas_doacao) { acc += fr; if (u < acc) { a.pagante = reais; break; } }
      if (!a.pagante) a.pagante = C.faixas_doacao[C.faixas_doacao.length - 1][0];
    }
  }
  sim.agentes.push(a);
  sim.ativos.push(a);
  return a;
}

// libera a memória de um agente que saiu (a riqueza dele fica na massa inativa)
function desativar(sim, a, motivo) {
  a.ativo = false; a.saida = sim.dia; a.motivo = motivo;
  if (motivo !== 'banido') sim.massaInativa += a.ouro + a.ouroRes;
  a.org = a.circ = a.pre = a.cred = a.nec = a.cmp = a.ofc = a.ofo = a.cvp = a.cvc = a.cvo = null;
  a.bin = a.prodEMA = a.prodHojeG = null;
}

// ---------------------------------------------------------------------------
// 7. Calendário (10: Era de 13 semanas, Obras, Fronteira, festas, cercos)
// ---------------------------------------------------------------------------
function calendario(sim) {
  const S = sim.P.social, d = sim.dia;
  const era = Math.floor(d / S.era_dias) + 1;
  const semana = Math.floor((d % S.era_dias) / 7) + 1;
  sim.era = era; sim.semana = semana;
  sim.obraFrac = 0;
  for (const o of S.obras) if (semana >= o.semanas[0] && semana <= o.semanas[1]) sim.obraFrac = o.frac;
  sim.obraAtiva = sim.obraFrac > 0;
  const F = S.fronteira;
  sim.fronteiraAtiva = era >= F.era_inicio && semana >= F.semanas[0] && semana <= F.semanas[1];
  sim.picoFront = (sim.fronteiraAtiva && semana >= F.pico_semanas[0] && semana <= F.pico_semanas[1]) ? F.pico_mult : 1;
  sim.festa = S.festas.dias.some(([a, b]) => d >= a && d <= b);
  // eventos de cenário que mudam taxas no tempo (Conselho mexendo na Feira)
  const ft = sim.P.eventos.feira_taxas;
  if (ft) for (const [dia, taxa] of ft) if (d >= dia) sim.P.taxas.feira = taxa;
}

// ---------------------------------------------------------------------------
// 8. População: entradas, evasão, bots, detecção, contestações
// ---------------------------------------------------------------------------
function populacao(sim) {
  const P = sim.P, d = sim.dia, rng = sim.rng, esc = P.simulacao.escala, pp = P.populacao;
  // 8.1 entradas de contas verificadas
  let novos = d < pp.onda_lancamento.dias ? pp.onda_lancamento.contas_por_dia : pp.entrada_por_dia;
  if (pp.dias_sem_entrada && d >= pp.dias_sem_entrada[0] && d < pp.dias_sem_entrada[1]) novos = 0;
  const cat = P.bots.catastrofe;
  const n = rng.arred(novos * esc);
  for (let i = 0; i < n; i++) {
    const falsa = cat && d >= cat.inicio && d < cat.inicio + cat.dias && rng.chance(cat.frac_novas);
    const a = novoAgente(sim, falsa ? 'hardcore' : sortearPerfil(sim), falsa ? 3 : 0);
    if (falsa) prepararFazenda(sim, a);
  }
  // 8.2 fazendas (identidades alugadas): o operador repõe as banidas até a meta
  const ativosN = sim.ativos.length;
  let faz = 0, auto = 0;
  for (const a of sim.ativos) { if (a.bot === 2) faz++; else if (a.bot === 1) auto++; }
  const alvoFaz = P.bots.fazenda_frac * ativosN;
  if (faz < alvoFaz && d >= 3) {
    const nf = Math.min(Math.ceil(alvoFaz - faz), Math.max(1, Math.ceil(alvoFaz / P.bots.reposicao_dias)));
    for (let i = 0; i < nf; i++) prepararFazenda(sim, novoAgente(sim, 'hardcore', 2));
  }
  // 8.3 automação na própria conta: humanos que passam a usar script
  const alvoAuto = P.bots.automacao_frac * ativosN;
  if (auto < alvoAuto) {
    let falta = Math.ceil(alvoAuto - auto), tentativas = 0;
    while (falta > 0 && tentativas < 50 * (falta + 1)) {
      tentativas++;
      const a = sim.ativos[rng.int(sim.ativos.length)];
      if (a.bot === 0 && !a.pagante && a.perfil !== 'casual' && d - a.nasc >= 3) { a.bot = 1; falta--; }
    }
  }
  // 8.4 detecção de automação (8% por semana) e de fazendas (ondas a cada 3 semanas)
  const pAuto = 1 - Math.pow(1 - P.bots.deteccao_automacao_semana, 1 / 7);
  const df = P.bots.deteccao_fazenda;
  const onda = d > 0 && d % df.intervalo === df.intervalo - 1;
  const ondaCat = cat && d === cat.ban_dia;
  for (const a of sim.ativos) {
    if (a.bot === 1 && a.susp <= d && rng.chance(pAuto)) {
      a.susp = d + P.bots.suspensao_dias;
      if (rng.chance(P.bots.param_apos_sancao)) a.bot = 0;
    } else if ((a.bot === 2 && onda && rng.chance(df.taxa)) || (a.bot === 3 && ondaCat && rng.chance(cat.ban_frac))) {
      banirFazenda(sim, a);
    }
  }
  // 8.5 contestações (chargeback e MED) e regularizações
  processarContestacoes(sim);
  // 8.6 evasão (retenção do 12 nos primeiros 30 dias; depois, evasão mensal do 07)
  const r = pp.retencao_novas;
  const s1 = r.d1, s7 = Math.pow(r.d7 / r.d1, 1 / 6), s30 = Math.pow(r.d30 / r.d7, 1 / 23);
  let evMensal = pp.evasao_mensal;
  if (pp.evasao_extra && d >= pp.evasao_extra.inicio && d < pp.evasao_extra.fim) evMensal = pp.evasao_extra.mensal;
  for (const a of sim.ativos) {
    if (!a.ativo || a.bot >= 2) continue;
    const idade = d - a.nasc;
    let sobrevive;
    if (idade === 0) sobrevive = s1;
    else if (idade < 7) sobrevive = s7;
    else if (idade < 30) sobrevive = s30;
    else sobrevive = Math.pow(1 - Math.min(0.95, evMensal * pp.fator_evasao_perfil[a.perfil]), 1 / 30);
    if (a.pagante) sobrevive = 1 - (1 - sobrevive) * pp.fator_retencao_pagante; // quem doa pode ficar mais [H]
    if (!rng.chance(sobrevive)) desativar(sim, a, 'evasao');
  }
  sim.ativos = sim.ativos.filter(a => a.ativo && !(a.susp === Infinity));
}

function prepararFazenda(sim, a) {
  a.receptores = [];
  const R = sim.P.bots.receptores_por_fazenda;
  for (let i = 0; i < R && sim.ativos.length > 10; i++) {
    let r = null;
    for (let t = 0; t < 20 && !r; t++) { const c = sim.ativos[sim.rng.int(sim.ativos.length)]; if (c.bot === 0) r = c; }
    if (r) a.receptores.push(r);
  }
}

// banimento de fazenda: recupera 70% do ouro que ela gerou (regra de contaminação do 13) e destrói
function banirFazenda(sim, a) {
  const P = sim.P;
  const recuperar = P.bots.fiscalizacao_recuperacao !== undefined ? P.bots.fiscalizacao_recuperacao : P.drenos.fiscalizacao_recuperacao;
  let alvo = recuperar * a.transf, tirado = 0;
  if (a.receptores) for (const r of a.receptores) {
    if (!r.ativo || alvo <= 0) continue;
    const parte = Math.min(r.ouro, r.ouroCinza, alvo / a.receptores.length);
    r.ouro -= parte; r.ouroCinza -= parte; tirado += parte;
  }
  sim.drenos.fiscalizacao += tirado + a.ouro + a.ouroRes;
  a.ouro = 0; a.ouroRes = 0;
  sim.banidosHoje = (sim.banidosHoje || 0) + 1;
  desativar(sim, a, 'banido');
}

// ---------------------------------------------------------------------------
// 9. Progressão do dia (02): horas por fila, XP, níveis, tiers, marcos, Selo
// ---------------------------------------------------------------------------
function tierDe(P, n) { const t = P.progressao.niveis_tier; let T = 1; for (let i = 1; i < NT; i++) if (n >= t[i]) T = i + 1; return T; }
function dominio(P, n, T, dmax) { return 1 + 0.01 * Math.min(Math.max(0, n - P.progressao.niveis_tier[T - 1]), dmax); }

function progressao(sim, a, perf) {
  const P = sim.P, PP = P.progressao, d = sim.dia, rng = sim.rng;
  const idade = d - a.nasc;
  const aloc = (a.perfil === 'hardcore' || a.bot >= 1) ? PP.alocacao.hardcore : PP.alocacao.padrao;
  const f = aloc[String(a.filas)];
  const H = 24 * perf.eficiencia;
  a.h1 = f[0] * H; a.h2 = f[1] * H; a.hv = f[2] * H; a.ha = f[3] * H; a.hf = 0;
  // estresse 8: a Fronteira puxa parte da atividade (horas desviadas, sem produção negociável)
  const desvio = P.social.fronteira.desvio_atividade;
  if (desvio > 0 && sim.fronteiraAtiva && a.adFront) {
    const tot = a.h1 + a.h2 + a.hv + a.ha;
    a.hf = desvio * tot; a.h1 *= 1 - desvio; a.h2 *= 1 - desvio; a.hv *= 1 - desvio; a.ha *= 1 - desvio;
  }
  // tier de produção: pelo nível atual (02 §9.2) ou, se o Selo mantém o tier (proposta do 08), pelo maior nível já alcançado
  const mant = PP.selo_mantem_tier;
  a.T1 = tierDe(P, mant ? a.mx1 : a.n1); a.T2 = tierDe(P, mant ? a.mx2 : a.n2); a.Tv = tierDe(P, a.nv);
  a.Ta = a.xpa >= sim.cumOf[15] ? 2 : 1; // aprendiz: só T1 e T2 (06 §10)
  // velocidade: domínio (02) e, se a ferramenta acelera (05/06), o bônus de ferramenta
  const acel = PP.ferramenta_acelera;
  const dmax = acel ? PP.dominio_max_niveis_06 : PP.dominio_max_niveis;
  const ferr = acel ? 1 + perf.bonus_ferramenta * Math.min(1, idade / PP.rampa_ferramenta_dias) : 1;
  a.s1 = dominio(P, a.n1, a.T1, dmax) * ferr;
  a.s2 = dominio(P, a.n2, a.T2, dmax) * ferr;
  a.sv = dominio(P, a.nv, a.Tv, PP.dominio_max_niveis);
  a.taxa = PP.taxa_ausente_base + PP.taxa_por_marco * a.marcos;
  // XP do dia
  const xph = PP.xp_hora_tier;
  const cal = idade < PP.bonus_calouro.dias ? PP.bonus_calouro.mult : 1;
  let g1 = a.h1 * xph[a.T1 - 1] * a.s1 * a.taxa * cal;
  if (a.mx1 >= 30) g1 += Math.min(perf.obras_primas_dia, PP.obras_primas_max_xp) * PP.obra_prima_horas_xp * xph[a.T1 - 1];
  ganharXP(sim, a, 1, g1 * a.mult1);
  ganharXP(sim, a, 2, a.h2 * xph[a.T2 - 1] * a.s2 * a.taxa * cal * a.mult2);
  a.xpv += a.hv * xph[a.Tv - 1] * a.sv * a.taxa;
  while (a.nv < 100 && a.xpv >= sim.cumVoc[a.nv + 1]) a.nv++;
  a.xpa += a.ha * xph[a.Ta - 1] * a.taxa;
  a.maxN = Math.max(a.maxN, a.mx1, a.mx2, a.nv);
  if (!sim.primeiro100 && Math.max(a.mx1, a.mx2) >= 100) sim.primeiro100 = d;
  if (a.mx1 >= 100 && a.dia100 === undefined) {
    a.dia100 = idade;
    if (a.bot === 0) { const k = 'd100_' + a.perfil; (sim[k] = sim[k] || []).push(idade); }
  }
  // marcos da taxa ausente (02 §8.1), contando o maior nível já alcançado
  const mm = Math.max(a.mx1, a.mx2);
  const c30 = sim.cumOf[31];
  const feitos = Math.floor(a.xpa / c30);
  const parcial = nivelPorXP(sim.cumOf, a.xpa - feitos * c30);
  const nivelTotal = a.mx1 + a.mx2 + a.nv + 10 + Math.min(10, feitos) * 29 + (feitos < 10 ? parcial - 1 : 0);
  let m = 0;
  if (a.nv >= 20) m++;
  if (mm >= 30) m++;
  if (a.merito >= 300) m++;
  if (mm >= 60) m++;
  if (nivelTotal >= 300) m++;
  if (mm >= 100) m++;
  a.marcos = m;
  // filas (02 §6.2)
  if (a.filas < 2 && mm >= 30 && a.nv >= 10) a.filas = 2;
  if (a.filas < 3 && mm >= 60 && a.nv >= 40 && a.merito >= 1000) a.filas = 3;
}

function ganharXP(sim, a, j, g) {
  const P = sim.P, PP = P.progressao, cum = sim.cumOf;
  let xp = (j === 1 ? a.xp1 : a.xp2) + g;
  let n = j === 1 ? a.n1 : a.n2;
  while (n < 100 && xp >= cum[n + 1]) n++;
  if (n === 100 && xp > cum[100]) { // depois do 100 a XP vira pontos de Maestria (02 §9.1)
    const pts = (xp - cum[100]) / PP.xp_por_ponto_maestria;
    xp = cum[100];
    if (j === 1) a.pm1 += pts; else a.pm2 += pts;
  }
  if (j === 1) { a.xp1 = xp; a.n1 = n; a.mx1 = Math.max(a.mx1, n); } else { a.xp2 = xp; a.n2 = n; a.mx2 = Math.max(a.mx2, n); }
  // Selo de mestre: volta ao 30, multiplica a XP desse ofício, custa ouro e materiais (02 §9.2; 07 §4.3)
  const selo = j === 1 ? a.selo1 : a.selo2, pm = j === 1 ? a.pm1 : a.pm2;
  const custo = P.drenos.selo_custo_ouro * sim.idxInsumo;
  if (n === 100 && selo < PP.selo_graus && pm >= PP.selo_min_base * Math.pow(2, selo) && a.bot < 2 &&
      a.ouro >= custo && sim.rng.chance(PP.selo_prob_dia)) {
    a.ouro -= custo; sim.drenos.selo += custo;
    removerMateriais(sim, a, P.drenos.selo_custo_vra);
    if (j === 1) { a.ac1 += a.pm1; a.pm1 = 0; a.mult1 = 1 + a.ac1 / 20; a.selo1++; a.xp1 = cum[30]; a.n1 = 30; }
    else { a.ac2 += a.pm2; a.pm2 = 0; a.mult2 = 1 + a.ac2 / 20; a.selo2++; a.xp2 = cum[30]; a.n2 = 30; }
    sim.selosHoje = (sim.selosHoje || 0) + 1;
  }
}

function removerMateriais(sim, a, vra) { // tira materiais do estoque próprio (dreno de itens do Selo)
  let falta = vra;
  for (const pool of [a.pre, a.org, a.circ]) for (let g = 0; g < NG && falta > 0; g++) {
    const q = Math.min(pool[g], falta); pool[g] -= q; falta -= q;
    sim.itensDrenados.selo += q;
  }
}

// ---------------------------------------------------------------------------
// 10. Teto de emissão (07 §3; 05 §9 e 06 §2.3 para as variantes)
// ---------------------------------------------------------------------------
function tetoDe(sim, a) {
  const t = sim.P.teto, idade = sim.dia - a.nasc;
  let v = t.base + t.por_nivel * a.maxN + t.por_selo * (a.selo1 + a.selo2);
  for (const [lim, fr] of t.rampa) if (idade < lim) { v *= fr; break; }
  return v;
}
// quanto de cota consome cada VRa que sai, conforme a medida do teto
function vrUnidade(sim, g) {
  const t = sim.P.teto;
  if (t.medida === 'vr_fixo') return 1;
  if (t.medida === 'unidades') {
    const u = t.vra_por_unidade_T1[TIPOS[tipoDe(g)]] * sim.P.producao.fator_tempo_tier[tierDeGrupo(g) - 1];
    return t.vra_unidade_ref / u;
  }
  return sim.preco[g]; // 'vr_mercado' (07): o VR é o preço de mercado do dia
}
const naoPreso = sim => sim.P.teto.excedente !== 'preso';

// produção que entra no estoque de origem (no modo "nasce preso", consome a cota na criação)
function produzir(sim, a, g, q, fracPre) {
  if (q <= 0) return;
  fracPre = fracPre || 0;
  a.prodHoje += q; a.prodHojeG[g] += q; sim.prodDia += q;
  if (fracPre > 0) { a.pre[g] += q * fracPre; q *= 1 - fracPre; }
  if (naoPreso(sim)) { a.org[g] += q; return; }
  const custo = q * vrUnidade(sim, g);
  if (a.cota >= custo) { a.cota -= custo; a.org[g] += q; return; }
  const ok = custo > 0 ? a.cota / custo : 1;
  a.org[g] += q * ok; a.pre[g] += q * (1 - ok);
  a.vrPresoHoje += q * (1 - ok); sim.vrPresoDia += q * (1 - ok);
  a.cota = 0; a.noTeto = true;
}

// ---------------------------------------------------------------------------
// 11. Fase 1: produção primária, necessidades, compras, venda a NPC, ofertas, obras
// ---------------------------------------------------------------------------
function taxaVenda(sim, g) {
  const T = sim.P.taxas;
  if (tipoDe(g) === EQUIP) return (1 - T.parcela_feira_equip) * T.bolsa + T.parcela_feira_equip * T.feira;
  return T.bolsa;
}

// insumos de cada estágio e tier, com a parcela de cada grupo.
// Transformação (06 §12.1): as ligas puxam o tier de baixo a partir do T3, e carvão, casca e pedra
// ("sem tier", tempo de T1) entram em todos os tiers a partir do T2.
function insumosDe(P, est, T) {
  if (est === CRIA_EQ) return [[gi(INSUMO, T), 1]];
  if (est === CRIA_CS) return [[gi(BRUTO, T), 1]];
  const liga = P.producao.liga_parcela_tier_abaixo, sem = P.producao.parcela_sem_tier;
  if (T === 1) return [[gi(BRUTO, 1), 1]];
  if (T === 2) return [[gi(BRUTO, 2), 1 - sem], [gi(BRUTO, 1), sem]];
  return [[gi(BRUTO, T), 1 - sem - liga], [gi(BRUTO, T - 1), liga], [gi(BRUTO, 1), sem]];
}

// intensidade de compra de insumos por estágio e tier: o artesão compra menos quando a margem é negativa
function calcularIntensidades(sim) {
  const P = sim.P, k = P.producao.k_insumo;
  if (sim.dia > 0 && sim.lucroMin) {
    const v = [0, 0, 0, 0];
    for (let e = 0; e < 4; e++) { for (let T = 2; T <= 4; T++) v[e] += sim.lucroMin[e * NT + T - 1] / 3; }
    const m = (v[0] + v[1] + v[2] + v[3]) / 4;
    sim.indiceOficio = v.map(x => clamp((x - m) / Math.max(0.05, Math.abs(m)), -2, 2));
  }
  for (let e = TRANSF; e <= CRIA_CS; e++) for (let T = 1; T <= NT; T++) {
    const kk = e === TRANSF ? k.transformacao : (e === CRIA_EQ ? k.equipamento : k.consumivel);
    const gOut = gi(SAIDA_ESTAGIO[e], T);
    let pIn = 0;
    const pm = sim.precoMed;
    for (const [g, sh] of insumosDe(P, e, T)) pIn += sh * pm[g];
    const tau = T >= 2 ? P.drenos.insumo_npc_frac * sim.idxInsumo : 0;
    const receita = pm[gOut] * sim.fillEMA[gOut] * (1 + kk) * (1 - taxaVenda(sim, gOut));
    const custo = kk * pIn + tau * (1 + kk);
    const m = (receita - custo) / custo;
    sim.lucroMin[e * NT + T - 1] = receita - custo; // valor líquido por VRa de trabalho
    if (e === TRANSF) sim.lucroMin[COLETA * NT + T - 1] = pm[gi(BRUTO, T)] * sim.fillEMA[gi(BRUTO, T)] * (1 - taxaVenda(sim, gi(BRUTO, T)));
    sim.theta[e * NT + T - 1] = m >= 0 ? 1 : Math.max(P.producao.intensidade_minima_criacao, 1 + P.producao.sensibilidade_margem * m);
  }
}

function escolherTier(sim, est, Tmax) {
  if (Tmax <= 1 || !sim.rng.chance(sim.P.producao.parcela_fila_por_lucro)) return Tmax;
  let melhor = Tmax, v = sim.lucroMin[est * NT + Tmax - 1];
  for (let T = 1; T < Tmax; T++) { const x = sim.lucroMin[est * NT + T - 1]; if (x > v * 1.05) { v = x; melhor = T; } }
  return melhor;
}

function planejarCriacao(sim, a, j, est, T, work) {
  const P = sim.P, G = P.producao.ouro_por_minuto_ref, k = P.producao.k_insumo;
  a.cw[j] = 0; a.creq[j] = 0; a.cin[j][0] = a.cin[j][1] = a.cin[j][2] = -1;
  if (est === COLETA || work <= 0) return;
  const kk = est === TRANSF ? k.transformacao : (est === CRIA_EQ ? k.equipamento : k.consumivel);
  const th = sim.theta[est * NT + T - 1];
  const req = work * G * kk * th;
  a.cw[j] = work; a.cth[j] = th; a.creq[j] = req;
  const ins = insumosDe(P, est, T);
  for (let i = 0; i < ins.length; i++) { a.cin[j][i] = ins[i][0]; a.csh[j][i] = ins[i][1]; a.nec[ins[i][0]] += req * ins[i][1]; }
}

function fase1(sim, a) {
  const P = sim.P, d = sim.dia, C = P.consumo, G = P.producao.ouro_por_minuto_ref, rng = sim.rng;
  const perf = perfilDe(sim, a);
  const nec = a.nec, cmp = a.cmp, ofc = a.ofc, ofo = a.ofo;
  nec.fill(0); cmp.fill(0); ofc.fill(0); ofo.fill(0); a.cvp.fill(0); a.cvc.fill(0); a.cvo.fill(0); a.prodHojeG.fill(0);
  a.noTeto = false; a.limitadoCota = false; a.vrPresoHoje = 0; a.prodHoje = 0; a.fontesHoje = 0; a.receitaHoje = 0;
  a.encEntregue = 0; a.mq[0] = a.mq[1] = a.mq[2] = 0; a.saidaOrigemHoje = 0; a.cw[0] = a.cw[1] = 0; a.creq[0] = a.creq[1] = 0;
  if (a.susp > d) { a.h1 = a.h2 = a.hv = a.ha = a.hf = 0; a.parado = true; return; }
  a.parado = false;
  progressao(sim, a, perf);
  // cota: enche como caixa d'água (07 §3.4); no modo "nasce preso" (06), vale só o teto do dia
  a.tetoEff = tetoDe(sim, a);
  if (naoPreso(sim)) a.cota = Math.min(a.cota + a.tetoEff, P.teto.acumulo_dias * a.tetoEff);
  else a.cota = a.tetoEff;

  // 11.1 produção primária: coleta dos mestres, aprendiz (T1–T2) e drops do combate
  const w1 = a.h1 * 60 * a.s1 * a.taxa, w2 = a.h2 * 60 * a.s2 * a.taxa;
  // parte da fila segue o lucro: o mestre pode trabalhar num tier abaixo do máximo (receita mais barata e mais procurada)
  a.T1e = escolherTier(sim, a.st1, a.T1); a.T2e = escolherTier(sim, a.st2, a.T2);
  const sub = P.producao.subprodutos_sem_tier;
  if (a.st1 === COLETA) { produzir(sim, a, gi(BRUTO, a.T1e), w1 * G * (1 - sub)); produzir(sim, a, gi(BRUTO, 1), w1 * G * sub); }
  if (a.st2 === COLETA) { produzir(sim, a, gi(BRUTO, a.T2e), w2 * G * (1 - sub)); produzir(sim, a, gi(BRUTO, 1), w2 * G * sub); }
  { const ap = P.producao.aprendiz_mix, wa = a.ha * 60 * a.taxa * G; // coleta, transformação e consumível, Comum
    const s1 = a.Ta === 2 ? P.producao.aprendiz_parcela_sem_tier : 1; // carvão, casca, pedra e resina saem no tempo do T1
    produzir(sim, a, gi(BRUTO, 1), wa * ap[0] * s1); if (a.Ta === 2) produzir(sim, a, gi(BRUTO, 2), wa * ap[0] * (1 - s1));
    produzir(sim, a, gi(INSUMO, a.Ta), wa * ap[1]); produzir(sim, a, gi(CONSUM, a.Ta), wa * ap[2]); }
  const fc = C.fator_consumo_tier, fcv = fc[a.Tv - 1];
  produzir(sim, a, gi(BRUTO, a.Tv), a.hv * C.drops_min_por_hora_T1 * fcv * G * sim.multDrops);

  // 11.2 necessidades essenciais: combate (04), cerco, ferramentas (05), Fronteira (10)
  const eqh = C.equip_min_por_hora_T1;
  const csh = C.refeicoes_por_hora * C.vr_refeicao_min_T1 + C.pocoes_por_hora * C.vr_pocao_min_T1 + C.consumivel_vocacao_min_T1;
  const gEqV = gi(EQUIP, a.Tv), gCsV = gi(CONSUM, a.Tv);
  const kit = d - a.nasc < C.kit_inicial_dias ? 0 : 1; // o kit inicial (preso) cobre o combate da 1ª semana
  nec[gEqV] += kit * (a.hv * eqh + a.hf * eqh * 1.5 + C.cerco_min_por_ativo_dia_T1 * 0.6) * fcv * G;
  nec[gCsV] += kit * (a.hv * csh + a.hf * csh * 1.5 + C.cerco_min_por_ativo_dia_T1 * 0.4) * fcv * G;
  const ferr = C.ferramenta_min_por_hora_T1 * G;
  nec[gi(EQUIP, a.T1e)] += a.h1 * ferr * fc[a.T1e - 1];
  nec[gi(EQUIP, a.T2e)] += a.h2 * ferr * fc[a.T2e - 1];
  nec[gi(EQUIP, a.Ta)] += a.ha * ferr * fc[a.Ta - 1];
  if (sim.fronteiraAtiva && a.adFront && P.social.fronteira.desvio_atividade <= 0) {
    const Fr = P.social.fronteira;
    const extra = Fr.frac_P / Fr.adesao * a.prodEMAtot * sim.picoFront;
    nec[gEqV] += 0.58 * extra; nec[gCsV] += 0.42 * extra;
  }
  // 11.3 criação: insumos pedidos pelos mestres de transformação e de criação
  planejarCriacao(sim, a, 0, a.st1, a.T1e, w1);
  planejarCriacao(sim, a, 1, a.st2, a.T2e, w2);

  // 11.4 cobertura com estoque próprio: preso → circulante → origem
  for (let g = 0; g < NG; g++) {
    let falta = nec[g];
    if (falta <= 0) continue;
    let q = Math.min(a.pre[g], falta); a.pre[g] -= q; a.cvp[g] = q; falta -= q;
    q = Math.min(a.circ[g], falta); a.circ[g] -= q; a.cvc[g] = q; falta -= q;
    q = Math.min(a.org[g], falta);
    if (q > 0) { const cpu = a.org[g] > 0 ? a.cred[g] / a.org[g] : 0; a.cred[g] -= cpu * q; }
    a.org[g] -= q; a.cvo[g] = q;
  }

  // 11.5 orçamento: combate, ferramentas e insumos de criação dividem o caixa na mesma proporção; Moda por último.
  // O consumo essencial é sensível ao preço: acima da disposição (≈ preço da Oficina), a conta consome menos
  // (luta com peça gasta, de tier mais baixo, ou menos horas); a parte cortada conta como "falta essencial".
  const wEss = P.mercado.disposicao_essencial, eEss = P.mercado.elasticidade_essencial;
  let custoEss = 0, custoCria = 0, insumoNPC = 0;
  for (let g = 0; g < NG; g++) {
    const falta = nec[g] - a.cvp[g] - a.cvc[g] - a.cvo[g];
    if (falta <= 1e-9) continue;
    const t = tipoDe(g);
    if (t === EQUIP || t === CONSUM) {
      const corte = sim.preco[g] > wEss ? Math.pow(wEss / sim.preco[g], eEss) : 1;
      a.cmp[g] = falta * corte; // provisório: quantidade desejada antes do caixa
      custoEss += falta * corte * sim.preco[g];
    } else { a.cmp[g] = falta; custoCria += falta * sim.preco[g]; }
  }
  const kk = P.producao.k_insumo;
  for (let j = 0; j < 2; j++) {
    const est = j === 0 ? a.st1 : a.st2, T = j === 0 ? a.T1e : a.T2e;
    if (a.cw[j] > 0 && T >= 2) {
      const k = est === TRANSF ? kk.transformacao : (est === CRIA_EQ ? kk.equipamento : kk.consumivel);
      insumoNPC += P.drenos.insumo_npc_frac * sim.idxInsumo * a.cw[j] * G * (1 + k) * a.cth[j];
    }
  }
  // poupança: quem não paga e quer a conveniência separa o preço dela antes de reinvestir (07 §1.2, rota do não pagante)
  let poupa = 0;
  if (a.bot === 0 && !a.pagante && d - a.nasc >= P.coins.idade_min_premium && a.premiumAte <= d + 10) {
    const precoPrem = premiumCoins(P) * sim.coinPreco;
    if (a.disp * Math.max(a.rendaEMA, 1) >= precoPrem) poupa = precoPrem * P.coins.poupanca_premium;
  }
  // essenciais primeiro; depois a criação (investimento do dia); a poupança só segura Moda, luxo e presentes
  let caixa = Math.max(0, a.ouro);
  a.fe = custoEss > 0 ? Math.min(1, caixa / custoEss) : 1; caixa -= a.fe * custoEss;
  a.poupa = poupa;
  // capital de giro: guarda alguns dias de consumo essencial e investe na criação só parte do resto
  const giro = P.mercado.giro_criacao;
  const paraCriar = Math.max(0, caixa - giro.dias_essenciais * custoEss) * giro.fracao_caixa;
  const pedCria = custoCria + insumoNPC;
  a.fcr = pedCria > 0 ? Math.min(1, paraCriar / pedCria) : 1; caixa -= a.fcr * pedCria;
  a.orcInsumo = a.fcr * insumoNPC; // ouro reservado para o insumo do NPC na criação de hoje
  for (let g = 0; g < NG; g++) if (cmp[g] > 0) { const t = tipoDe(g); cmp[g] *= (t === EQUIP || t === CONSUM) ? a.fe : a.fcr; }
  const reserva = Math.max(P.drenos.reserva_minima, P.drenos.reserva_dias_renda * a.rendaEMA, poupa);
  const livre = Math.max(0, a.ouro - reserva);
  if (perf.mult_luxo > 0 && livre > 0 && caixa > 0) { // Moda da Cidade e móveis (05 §8.5–8.6): demanda por peças T1–T3
    const moda = Math.min(caixa, P.drenos.moda_frac_dia * perf.mult_luxo * livre);
    const pesos = [0.4, 0.35, 0.25];
    for (let i = 0; i < 3; i++) { const g = gi(EQUIP, i + 1); const q = moda * pesos[i] / sim.preco[g]; a.mq[i] = q; cmp[g] += q; }
  }

  // 11.6 excedente: o que sobra além da reserva de amanhã
  const R = C.reserva_estoque_dias;
  const ritmo = perf.ritmo_encomenda;
  let cotaEnc = a.partEnc && d - a.nasc >= 2 ? P.social.encomenda_hf_dia * P.social.hf_vra * ritmo * (P.politica.escala_quantidade ? sim.multEnc : 1) : 0;
  // entrega de encomenda: pede primeiro os bens mais baratos em relação ao VR (bens em excesso, 07 §4.7)
  if (cotaEnc > 0) {
    const ordem = sim.ordemEncomenda;
    for (let i = 0; i < NG && cotaEnc > 0; i++) {
      const g = ordem[i];
      const res = R * nec[g];
      let disp = a.pre[g] + a.org[g] + a.circ[g] - res;
      if (disp <= 0) continue;
      let q = Math.min(disp, cotaEnc);
      cotaEnc -= q; a.encEntregue += q; sim.itensDrenados.encomendas += q;
      let x = Math.min(a.pre[g], q); a.pre[g] -= x; q -= x;
      x = Math.min(a.org[g], q); if (x > 0) { const cpu = a.org[g] > 0 ? a.cred[g] / a.org[g] : 0; a.cred[g] -= cpu * x; } a.org[g] -= x; q -= x;
      a.circ[g] -= Math.min(a.circ[g], q);
    }
    sim.encEntregueTot += a.encEntregue;
  }

  // 11.7 venda a NPC (só bruto T1–T2): até a curva logarítmica empatar com a venda líquida no mercado (07 §4.2)
  const N = P.npc, H = N.meia_vida, p0 = N.preco_base_frac;
  let xNpc = 0; // ouro já recebido do NPC hoje (janela de 24 h = o dia)
  const fee = P.taxas.bolsa;
  for (let T = 1; T <= Math.min(N.tier_max_aceito, NT); T++) {
    const g = gi(BRUTO, T);
    // valor esperado de anunciar: preço líquido × fração das ofertas que de fato vendem (média recente)
    const pn = Math.max(0.01, sim.preco[g] * (1 - fee) * sim.fillEMA[g]);
    const marg = p0 * Math.pow(0.5, xNpc / H);
    if (marg <= pn) continue;
    const disp = Math.max(0, a.circ[g] + a.org[g] - R * nec[g]);
    if (disp <= 0) continue;
    const alvoX = H * Math.log2(p0 / pn);
    let q = (H / Math.LN2) * (Math.pow(2, alvoX / H) - Math.pow(2, xNpc / H)) / p0;
    q = Math.min(q, disp);
    const vu = vrUnidade(sim, g);
    if (naoPreso(sim) && vu > 0) { const qc = a.cota / vu; if (q > qc) { q = qc; a.limitadoCota = true; } }
    if (q <= 0) continue;
    const novoX = H * Math.log2(Math.pow(2, xNpc / H) + q * p0 * Math.LN2 / H);
    const ganho = novoX - xNpc; xNpc = novoX;
    if (naoPreso(sim)) { a.cota -= q * vu; a.saidaOrigemHoje += q * vu; }
    let x = Math.min(a.circ[g], q); a.circ[g] -= x;
    const xo = q - x; if (xo > 0) { const cpu = a.org[g] > 0 ? a.cred[g] / a.org[g] : 0; a.cred[g] -= cpu * xo; a.org[g] -= xo; }
    a.ouro += ganho; a.fontesHoje += ganho; sim.fontes.npc += ganho; sim.itensDrenados.npc += q;
  }
  a.npcMarg = p0 * Math.pow(0.5, xNpc / H);

  // 11.8 ofertas no mercado: excedente × propensão; a origem gasta cota (com crédito dos insumos)
  const ehFaz = a.bot >= 2;
  for (let g = 0; g < NG; g++) {
    const res = Math.max(0, R * nec[g] - a.pre[g]);
    const exc = a.circ[g] + a.org[g] - res;
    if (exc <= 1e-6) continue;
    let r = perf.reserva_preco * a.ruido * (0.9 + 0.2 * rng.next());
    if (tipoDe(g) === BRUTO && tierDeGrupo(g) <= N.tier_max_aceito) r = Math.max(r, a.npcMarg / (1 - fee));
    if (r > sim.preco[g]) continue;
    const quer = exc * perf.propensao_venda;
    const qc = Math.min(a.circ[g], quer);
    let qo = Math.min(a.org[g], quer - qc);
    if (qo > 0 && naoPreso(sim)) {
      const cpu = (P.teto.credito_insumos && P.teto.medida !== 'unidades' && a.org[g] > 0) ? a.cred[g] / a.org[g] : 0;
      const custo = Math.max(0, vrUnidade(sim, g) - cpu);
      if (custo > 0) {
        const qmax = a.cota / custo;
        if (qo > qmax) { qo = Math.max(0, qmax); a.limitadoCota = true; }
        a.cota -= qo * custo; // reserva de cota no anúncio (07 §3.3)
      }
    }
    if (qc + qo <= 1e-9) continue;
    a.circ[g] -= qc; a.org[g] -= qo; ofc[g] = qc; ofo[g] = qo;
    const b = binDe(r); a.bin[g] = b;
    sim.sb[g * NB + b] += qc + qo;
  }
  for (let g = 0; g < NG; g++) sim.dem[g] += cmp[g];

  // 11.9 destinos do excedente que não foi ao mercado: Obra (base e regra de fila), Sedes, festas
  if (!ehFaz) {
    let doado = 0;
    const base = (sim.obraFrac + P.social.sedes_frac_producao) * a.prodHoje;
    let falta = base;
    for (let g = 0; g < NG && falta > 0; g++) { // as Obras pedem bruto e insumo (06 §12.5)
      if (tipoDe(g) > INSUMO) continue;
      const res = R * nec[g];
      let disp = a.pre[g] + a.org[g] - res;
      if (disp <= 0) continue;
      const q = Math.min(disp, falta); falta -= q; doado += q * sim.preco[g];
      tirarDeOrigem(a, g, q); sim.itensDrenados.obras += q;
    }
    if (sim.festa) {
      let ff = P.social.festas.frac_P * a.prodHoje;
      for (let g = 0; g < NG && ff > 0; g++) {
        if (tipoDe(g) < EQUIP) continue;
        const disp = a.pre[g] + a.org[g] - R * nec[g];
        if (disp <= 0) continue;
        const q = Math.min(disp, ff); ff -= q; tirarDeOrigem(a, g, q); sim.itensDrenados.festas += q;
      }
    }
    if (sim.obraAtiva) { // regra de fila: estoque acima de N dias de produção vai para a Obra (07 §3.5)
      const Nd = P.mercado.excedente_dias_para_obra;
      for (let g = 0; g < NG; g++) {
        const lim = R * nec[g] + Nd * a.prodEMA[g];
        const tot = a.pre[g] + a.org[g] + a.circ[g];
        if (tot <= lim) continue;
        const q = tot - lim; doado += q * sim.preco[g];
        let x = Math.min(a.pre[g], q); a.pre[g] -= x; let y = q - x;
        x = Math.min(a.org[g], y); tirarDeOrigem(a, g, x); y -= x;
        a.circ[g] -= Math.min(a.circ[g], y);
        sim.itensDrenados.obras += q;
      }
    }
    if (doado > 0) a.merito += meritoDe(P, doado);
  }
  a.merito += perf.merito_base_dia;
}

function tirarDeOrigem(a, g, q) {
  let x = Math.min(a.pre[g], q); a.pre[g] -= x; q -= x;
  if (q > 0) { const cpu = a.org[g] > 0 ? a.cred[g] / a.org[g] : 0; const y = Math.min(a.org[g], q); a.cred[g] -= cpu * y; a.org[g] -= y; }
}
function meritoDe(P, C) { const H = P.social.merito_H; return (1 / 20) * (H / Math.LN2) * Math.log(1 + C * Math.LN2 / H); }

// ---------------------------------------------------------------------------
// 12. Mercado: casamento por grupo e formação de preço
// ---------------------------------------------------------------------------
function liquidarGrupo(sim, g) {
  const P = sim.P, M = P.mercado;
  const D = sim.dem[g];
  let S = 0;
  const base = g * NB;
  for (let b = 0; b < NB; b++) S += sim.sb[base + b];
  const p = sim.preco[g];
  let alvo = p;
  if (D <= 1e-9 && S <= 1e-9) { sim.fillB[g] = 0; }
  else if (S >= D) { // excesso de oferta: atende toda a demanda
    sim.fillB[g] = 1;
    // o preço anda para a reserva do vendedor marginal (quem vende mais barato puxa o preço para baixo)
    let cum = 0, bClear = -1;
    for (let b = 0; b < NB && bClear < 0; b++) { cum += sim.sb[base + b]; if (cum >= D && sim.sb[base + b] > 0) bClear = b; }
    if (bClear < 0) bClear = 0;
    // no livro contínuo, as ordens ao preço do dia vendem por ordem de chegada: em média, todas na mesma fração
    const modo = P.mercado.preenchimento;
    if (modo === 'reserva') {
      let c2 = 0;
      for (let b = 0; b < NB; b++) { const s = sim.sb[base + b]; if (s <= 0) { sim.fillS[base + b] = 0; continue; }
        if (c2 >= D) sim.fillS[base + b] = 0; else if (c2 + s <= D) { sim.fillS[base + b] = 1; c2 += s; } else { sim.fillS[base + b] = (D - c2) / s; c2 = D; } }
    } else { const f = S > 0 ? D / S : 0; for (let b = 0; b < NB; b++) sim.fillS[base + b] = f; }
    alvo = Math.min(p, bordaSup(bClear));
  } else { // excesso de demanda: atende a oferta toda; o preço sobe
    sim.fillB[g] = S / D;
    for (let b = 0; b < NB; b++) sim.fillS[base + b] = 1;
    alvo = S > 1e-9 ? p * D / S : p * 10;
  }
  let np = p * clamp(Math.pow(alvo / p, M.kappa), 1 - M.var_max_dia, 1 + M.var_max_dia);
  const t = tipoDe(g);
  const teto = t === BRUTO ? M.teto_preco_bruto : (t === EQUIP ? P.npc.oficina_mult_equip : P.npc.oficina_mult) * sim.idxInsumo;
  sim.precoNovo[g] = clamp(np, 0.02, teto);
  const q = Math.min(D, S);
  sim.volQ[g] += q; sim.volV[g] += q * p;
  // fração das ofertas que vendeu (média móvel de ~5 dias): é o que o vendedor espera ao anunciar
  if (S > 1e-9) sim.fillEMA[g] += (Math.min(1, D / S) - sim.fillEMA[g]) * 0.2;
}

// ---------------------------------------------------------------------------
// 13. Fase 2: execução, Oficina, consumo, criação, drenos de ouro
// ---------------------------------------------------------------------------
function fase2(sim, a) {
  const P = sim.P, d = sim.dia, G = P.producao.ouro_por_minuto_ref, C = P.consumo;
  if (a.parado) return;
  const perf = perfilDe(sim, a);
  const obt = sim.tmpObt; // insumos obtidos por grupo (cobertura + compra)
  // 13.1 execução das compras e das vendas ao preço do dia
  for (let g = 0; g < NG; g++) {
    const p = sim.preco[g];
    obt[g] = 0;
    if (a.cmp[g] > 0) {
      const q = a.cmp[g] * sim.fillB[g];
      a.ouro -= q * p; obt[g] = q;
      sim.compraDia += q * p;
    }
    const of = a.ofc[g] + a.ofo[g];
    if (of > 0) {
      const f = sim.fillS[g * NB + a.bin[g]];
      const qc = a.ofc[g] * f, qo = a.ofo[g] * f;
      const taxa = taxaVenda(sim, g);
      const bruto = (qc + qo) * p;
      a.ouro += bruto * (1 - taxa); a.receitaHoje += bruto * (1 - taxa);
      sim.drenos.taxas += bruto * taxa;
      // devolve o que não vendeu; a cota reservada da origem não vendida volta (07 §3.3)
      a.circ[g] += a.ofc[g] - qc;
      const naoVendida = a.ofo[g] - qo;
      const cpu = (a.org[g] + a.ofo[g]) > 0 ? a.cred[g] / (a.org[g] + a.ofo[g]) : 0;
      if (naoPreso(sim)) {
        const usaCred = P.teto.credito_insumos && P.teto.medida !== 'unidades';
        const custo = Math.max(0, vrUnidade(sim, g) - (usaCred ? cpu : 0));
        a.cota += naoVendida * custo;
        a.saidaOrigemHoje += qo * custo;
      }
      a.cred[g] -= cpu * qo;
      a.org[g] += naoVendida;
      if (a.bot >= 2) a.saidaAcum += bruto;
    }
  }
  // 13.2 Oficina da Cidade: necessidade essencial não atendida, a 2× VR (3,5× na peça), presa, ouro destruído (06 §8)
  let limOf = P.npc.oficina_limite_vra_dia;
  for (let g = 0; g < NG; g++) {
    const t = tipoDe(g);
    if (t !== EQUIP && t !== CONSUM) continue;
    let modaQ = 0;
    if (t === EQUIP && tierDeGrupo(g) <= 3) modaQ = a.mq[tierDeGrupo(g) - 1] * sim.fillB[g];
    const essObt = a.cvp[g] + a.cvc[g] + a.cvo[g] + obt[g] - modaQ;
    const falta = a.nec[g] - essObt;
    sim.necEss += a.nec[g];
    if (modaQ > 0) sim.itensDrenados.moda += modaQ;
    // a Oficina só atende o que a conta quis comprar e o mercado não entregou, e só se o preço dela cabe na disposição
    const naoEntregue = Math.max(0, (a.cmp[g] - (t === EQUIP && tierDeGrupo(g) <= 3 ? a.mq[tierDeGrupo(g) - 1] : 0)) * (1 - sim.fillB[g]));
    const pOf = (t === EQUIP ? P.npc.oficina_mult_equip : P.npc.oficina_mult) * sim.idxInsumo;
    let qOf = 0;
    if (naoEntregue > 1e-6 && limOf > 0 && pOf <= P.mercado.disposicao_oficina) {
      qOf = Math.min(naoEntregue, limOf, Math.max(0, a.ouro) / pOf);
      if (qOf > 0) { a.ouro -= qOf * pOf; sim.drenos.oficina += qOf * pOf; limOf -= qOf; sim.oficinaDia += qOf; }
    }
    if (falta > 1e-6) sim.faltaEss += Math.max(0, falta - qOf);
    sim.itensDrenados.consumo += Math.min(a.nec[g], essObt);
  }
  // 13.3 criação: os insumos obtidos viram produto; o crédito acompanha os insumos circulantes
  const kk = P.producao.k_insumo;
  for (let j = 0; j < 2; j++) {
    if (a.cw[j] <= 0) continue;
    const est = j === 0 ? a.st1 : a.st2, T = j === 0 ? a.T1e : a.T2e;
    const k = est === TRANSF ? kk.transformacao : (est === CRIA_EQ ? kk.equipamento : kk.consumivel);
    let usado = 0, dePre = 0, cred = 0;
    const ui = sim.tmpU; ui[0] = ui[1] = ui[2] = 0;
    for (let i = 0; i < 3; i++) {
      const g = a.cin[j][i];
      if (g < 0) continue;
      const pedido = a.creq[j] * a.csh[j][i];
      if (a.nec[g] <= 0) continue;
      const fr = pedido / a.nec[g];
      const cob = a.cvp[g] + a.cvc[g] + a.cvo[g] + obt[g];
      const u = Math.min(pedido, fr * cob);
      usado += u; ui[i] = u;
      dePre += fr * a.cvp[g];
      cred += (fr * (a.cvc[g] + obt[g])) * (P.teto.medida === 'unidades' ? 0 : vrUnidade(sim, g));
    }
    if (usado <= 0) { redirecionar(sim, a, a.cw[j]); continue; }
    let saida = usado * (1 + k) / k;
    if (T >= 2) { // insumo vendido pelo NPC, indexado ao IPC (07 §4.3), dentro do orçamento de criação do dia
      const custo = P.drenos.insumo_npc_frac * sim.idxInsumo * saida;
      const ok = custo > 0 ? Math.min(1, Math.max(0, Math.min(a.ouro, a.orcInsumo)) / custo) : 1;
      saida *= ok; a.ouro -= custo * ok; a.orcInsumo -= custo * ok; sim.drenos.insumos += custo * ok;
      if (ok < 1) { // o que não teve insumo do NPC não foi feito: os insumos voltam ao estoque
        for (let i = 0; i < 3; i++) if (a.cin[j][i] >= 0) a.circ[a.cin[j][i]] += ui[i] * (1 - ok);
        usado *= ok; cred *= ok; dePre *= ok;
      }
    }
    const gOut = gi(SAIDA_ESTAGIO[est], T);
    const fracPre = usado > 0 ? Math.min(1, dePre / usado) : 0;
    produzir(sim, a, gOut, saida, fracPre);
    // crédito dos insumos circulantes (07 §3.3): o produto de origem carrega o VR do que foi comprado
    if (P.teto.credito_insumos && naoPreso(sim) && saida > 0) a.cred[gOut] += cred * (1 - fracPre);
    const trabalhoUsado = a.cw[j] * (usado / (a.creq[j] / a.cth[j]));
    redirecionar(sim, a, Math.max(0, a.cw[j] - trabalhoUsado));
  }
  // 13.4 atualização da média de produção por grupo (para a regra de fila da Obra)
  let tot = 0;
  for (let g = 0; g < NG; g++) { a.prodEMA[g] = 0.9 * a.prodEMA[g] + 0.1 * a.prodHojeG[g]; tot += a.prodEMA[g]; }
  a.prodEMAtot = tot;
  // 13.5 drenos de ouro de atividade e de estoque (07 §4.3)
  const partida = a.hv * P.drenos.partida_ouro_hora_T1 * C.fator_consumo_tier[a.Tv - 1] * sim.idxInsumo;
  pagar(sim, a, partida, 'partida');
  if (a.bot < 2) pagar(sim, a, P.drenos.ajudantes_ouro_por_nivel_dia * a.maxN, 'ajudantes');
  const reserva = Math.max(P.drenos.reserva_minima, P.drenos.reserva_dias_renda * a.rendaEMA, a.poupa || 0);
  const livre = Math.max(0, a.ouro - reserva);
  if (livre > 0 && perf.mult_luxo > 0) {
    let lux = P.drenos.luxo_npc_frac_dia * perf.mult_luxo * livre;
    if (!a.pagante) { const b = lux * P.bau.parcela_luxo_em_bau; sim.demandaBauOuro.push([a, b]); lux -= b; }
    pagar(sim, a, lux, 'luxos');
    if (sim.obraAtiva) {
      const o = P.drenos.obra_ouro_frac_dia * perf.mult_luxo * livre;
      pagar(sim, a, o, 'obras'); a.merito += meritoDe(P, o * P.social.merito_peso_ouro);
    }
    const pres = P.drenos.presente_frac_dia * livre; // presentes por Troca (3% para quem recebe)
    if (pres > 0 && sim.ativos.length > 1) {
      const b = sim.ativos[sim.rng.int(sim.ativos.length)];
      if (b !== a && !b.parado) { a.ouro -= pres; const t = pres * P.taxas.troca_lado; b.ouro += pres - t; sim.drenos.troca += t; sim.trocaDia += pres; }
    }
  }
  // 13.6 começo do jogo (07 §4.1)
  if (d - a.nasc < P.fontes.comeco_dias && a.bot < 2) {
    const v = P.fontes.comeco_ouro_total / P.fontes.comeco_dias;
    a.ouro += v; a.fontesHoje += v; sim.fontes.comeco += v;
  }
  // 13.7 no teto? (esgotou a cota no dia, ou a oferta foi cortada pela cota)
  if (naoPreso(sim)) a.noTeto = a.noTeto || a.cota <= 0.02 * a.tetoEff;
}

function redirecionar(sim, a, trabalho) { // "pular a etapa sem insumo": a fila coleta T1–T2 como aprendiz
  const f = sim.P.producao.redirecionar_horas_sem_insumo;
  if (trabalho > 0 && f > 0) produzir(sim, a, gi(BRUTO, a.Ta), trabalho * f * sim.P.producao.ouro_por_minuto_ref);
}
function pagar(sim, a, v, cat) {
  if (v <= 0) return 0;
  const x = Math.min(v, Math.max(0, a.ouro));
  a.ouro -= x; sim.drenos[cat] += x;
  return x;
}

// ---------------------------------------------------------------------------
// 14. Fontes coletivas: encomendas, cercos, eventos; fazendas transferem o ouro
// ---------------------------------------------------------------------------
function fontesColetivas(sim) {
  const P = sim.P, F = P.fontes, A = sim.ativos;
  const N = A.length;
  // encomendas: orçamento do estúdio (× política), rateado pelo que cada um entregou
  const orc = F.encomendas_ouro_por_ativo_dia * N * sim.multEnc;
  const porVra = sim.encEntregueTot > 0 ? Math.min(P.social.encomenda_ouro_max_por_vra, orc / sim.encEntregueTot) : 0;
  sim.encPorVra = porVra;
  let wc = 0, we = 0;
  for (const a of A) {
    if (a.parado) continue;
    const perf = perfilDe(sim, a);
    if (a.partCerco) wc += perf.peso_fontes;
    we += perf.peso_eventos;
  }
  const orcC = F.cercos_ouro_por_ativo_dia * N, orcE = F.eventos_ouro_por_ativo_dia * N;
  for (const a of A) {
    if (a.parado) continue;
    const perf = perfilDe(sim, a);
    let v = a.encEntregue * porVra;
    if (P.social.encomenda_consome_cota && naoPreso(sim)) { // o ouro da encomenda é emissão: entra no portão como a venda a NPC
      const lim = Math.max(0, a.cota); if (v > lim) { v = lim; a.noTeto = true; } a.cota -= v; a.saidaOrigemHoje += v;
    }
    if (P.social.encomenda_idade_min && sim.dia - a.nasc < P.social.encomenda_idade_min) v = 0;
    sim.fontes.encomendas += v;
    if (a.partCerco && wc > 0) { const c = orcC * perf.peso_fontes / wc; v += c; sim.fontes.cercos += c; }
    if (we > 0 && perf.peso_eventos > 0) { const e = orcE * perf.peso_eventos / we; v += e; sim.fontes.eventos += e; }
    a.ouro += v; a.fontesHoje += v;
    // renda: média móvel de 14 dias (fontes e receita total)
    a.fontesEMA += (a.fontesHoje - a.fontesEMA) / 14;
    a.rendaEMA += (a.fontesHoje + a.receitaHoje - a.rendaEMA) / 14;
  }
  // fazendas: todo o ouro acima da reserva vai para os compradores do mercado cinza, por Troca (13 §2.2)
  let transf = 0, dias = 0, saidas = 0;
  for (const a of A) {
    if (a.bot < 2) continue;
    dias++;
    saidas += a.saidaOrigemHoje + a.encEntregue * porVra;
    const x = a.ouro - P.bots.ouro_reserva_fazenda;
    if (x <= 0 || !a.receptores || !a.receptores.length) continue;
    a.ouro -= x; a.transf += x; transf += x;
    const taxa = x * P.taxas.troca_lado; sim.drenos.troca += taxa;
    const parte = (x - taxa) / a.receptores.length;
    for (const r of a.receptores) { if (r.ativo) { r.ouro += parte; r.ouroCinza += parte; } else sim.massaInativa += parte; }
  }
  sim.fazTransfJanela.push(transf); sim.fazDiasJanela.push(dias); sim.fazSaidasJanela.push(saidas);
  if (sim.fazTransfJanela.length > 30) { sim.fazTransfJanela.shift(); sim.fazDiasJanela.shift(); sim.fazSaidasJanela.shift(); }
}

// ---------------------------------------------------------------------------
// 15. Coins: doação, loja, conveniência, Câmbio (leilão de hora em hora),
//     Troca de Coins, Baú lacrado, Bazar de Personagens, contestação
// ---------------------------------------------------------------------------
function premiumCoins(P) { return P.coins.premium_reais * P.coins.coins_por_real; }

function coinsDia(sim) {
  const P = sim.P, C = P.coins, d = sim.dia, rng = sim.rng, cpr = C.coins_por_real;
  const pc = premiumCoins(P);
  const ev = P.eventos;
  const onda = ev.onda_pagantes && d >= ev.onda_pagantes.inicio && d < ev.onda_pagantes.fim ? ev.onda_pagantes : null;
  const fuga = ev.fuga_pagantes && d >= ev.fuga_pagantes.inicio ? ev.fuga_pagantes : null;
  const contOnda = ev.contestacao_onda && d >= ev.contestacao_onda.inicio && d < ev.contestacao_onda.fim ? ev.contestacao_onda : null;
  sim.premiumsDia.proprio = 0; sim.premiumsDia.ouro = 0;
  if (d % 7 === 0) for (const a of sim.ativos) a.compraSemana = 0; // limite de compra no Câmbio por 7 dias
  let doadosHoje = 0, reaisHoje = 0; sim.nDoacoesHoje = 0;
  // 15.1 doações do dia e destino dos Coins (11 §8.3)
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0) continue;
    const idade = d - a.nasc;
    // onda de pagantes (estresse 5): parte de quem não doava passa a doar R$ 20 só durante a janela
    if (!a.pagante && onda && a.ondaSorteio === undefined) a.ondaSorteio = rng.chance(onda.novos_pagantes);
    const pagante = a.pagante || (onda && a.ondaSorteio ? 20 : 0);
    if (!pagante || idade < C.inicio_doacao_dias) continue;
    if ((idade - C.inicio_doacao_dias) % 30 !== a.diaDoacao) continue;
    if (fuga && rng.chance(fuga.frac)) continue;
    let reais = pagante * (0.85 + 0.3 * rng.next());
    if (onda) reais *= onda.mult_doacao;
    const coins = Math.round(reais * cpr);
    if (coins <= 0) continue;
    reaisHoje += reais; doadosHoje += coins; a.doacoes++; sim.nDoacoesHoje = (sim.nDoacoesHoje || 0) + 1;
    // carência por lote (07 §6.3): 7 dias na 1ª doação e no cartão; 72 h no Pix
    const car = a.doacoes === 1 ? C.carencia.primeira_dias : (rng.chance(C.carencia.parcela_pix) ? C.carencia.pix_dias : C.carencia.cartao_dias);
    const faixa = String(pagante);
    let dest = C.destino_por_faixa[faixa] || C.destino_por_faixa['40'];
    if (onda && onda.parcela_venda !== undefined) dest = [dest[0], onda.parcela_venda, dest[2] * (1 - onda.parcela_venda), dest[3], dest[4]];
    const conv = Math.round(coins * dest[0]), venda = Math.round(coins * dest[1]), loja = Math.round(coins * dest[2]),
      baz = Math.round(coins * dest[3]), guard = Math.max(0, coins - conv - venda - loja - baz);
    a.bConv += conv;
    if (venda > 0) a.lotes.push([venda, d + car]);
    if (loja > 0) { // loja: Coins destruídos; parte vira Baú, e 30% dos Baús voltam lacrados ao mercado (11 §8.3)
      sim.coinsDestruidos += loja; sim.coinsLojaDia += loja;
      const baus = loja * P.bau.parcela_loja / (C.bau_reais * cpr);
      const rev = baus * P.bau.revendidos_lacrados;
      if (rev > 0) sim.bauOferta.push([a, rev, d + car]);
    }
    a.bBazar += baz;
    if (guard > 0) a.guard.push([guard, d + Math.round(rng.unif(C.guardados_dias[0], C.guardados_dias[1]))]);
    // contestação no banco (07 §6.4): agenda a suspensão
    const pc_ = contOnda ? contOnda.taxa : C.contestacao.taxa;
    if (rng.chance(pc_)) sim.contestacoes.push({ a, dia: d + Math.round(rng.unif(C.contestacao.dias_ate[0], C.contestacao.dias_ate[1])), reais, coins });
  }
  sim.coinsDoados += doadosHoje; sim.reaisDoados += reaisHoje;
  sim.reaisHoje = reaisHoje; sim.coinsDoadosHoje = doadosHoje;
  sim.janelaDisputa.push([sim.nDoacoesHoje || 0, 0]); if (sim.janelaDisputa.length > 30) sim.janelaDisputa.shift();

  // 15.2 conveniência dos pagantes com os próprios Coins
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0 || !a.pagante) continue;
    if (a.premiumAte <= d && a.bConv + a.coins >= pc) {
      const deConv = Math.min(a.bConv, pc); a.bConv -= deConv; a.coins -= pc - deConv;
      a.premiumAte = d + C.premium_dias; sim.coinsDestruidos += pc; sim.coinsLojaDia += pc; sim.premiumsDia.proprio++;
    }
  }
  // 15.3 lotes que saem da carência vão à venda (Câmbio, ou Troca se for mais barata)
  const migr = taxaMigracao(sim);
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0) continue;
    if (a.lotes.length) {
      let q = 0;
      a.lotes = a.lotes.filter(([v, lib]) => { if (lib <= d) { q += v; return false; } return true; });
      if (q > 0) a.coinsVenda = (a.coinsVenda || 0) + q;
    }
    if (a.guard.length) { // Coins guardados que acordam: metade vende, metade gasta na loja
      a.guard = a.guard.filter(([v, lib]) => {
        if (lib > d) return true;
        const vende = Math.round(v * C.guardados_parcela_venda);
        a.coinsVenda = (a.coinsVenda || 0) + vende; sim.coinsDestruidos += v - vende; sim.coinsLojaDia += v - vende;
        return false;
      });
    }
    let v = a.coinsVenda || 0;
    if (v > 0 && !sim.disjuntorCoins) {
      if (v < P.cambio.ordem_min) { sim.contadores.vendasAbaixoMin++; continue; } // granularidade: fica esperando juntar
      a.coinsVenda = 0;
      if (rng.chance(migr)) { v = trocaComLivro(sim, a, 1, v); if (v < 1) continue; }
      colocarOrdem(sim, a, 1, v, rng.chance(P.cambio.parcela_ordem_mercado) ? 0 : sim.coinPreco * rng.unif(0.97, 1.03));
    }
  }
  // 15.4 despejo de Coins guardados (estresse 12)
  const dsp = ev.despejo_guardados;
  if (dsp && d >= dsp.dia && d < dsp.dia + dsp.dias) {
    for (const a of sim.ativos) {
      if (a.parado || a.bot !== 0) continue;
      let estoque = a.bBazar + a.coins + a.bConv * 0.5 + a.guard.reduce((s, x) => s + x[0], 0);
      const q = Math.floor(estoque * dsp.frac / dsp.dias);
      if (q < P.cambio.ordem_min) continue;
      let falta = q;
      const tira = (campo) => { const x = Math.min(a[campo], falta); a[campo] -= x; falta -= x; };
      tira('coins'); tira('bBazar');
      for (const gx of a.guard) { const x = Math.min(gx[0], falta); gx[0] -= x; falta -= x; }
      if (falta > 0) { const x = Math.min(a.bConv, falta); a.bConv -= x; falta -= x; }
      colocarOrdem(sim, a, 1, q - falta, 0);
    }
  }
  // 15.5 Bazar de Personagens (07 §7): 1% das contas elegíveis por mês
  bazar(sim);
  // 15.6 quem não paga compra a conveniência com ouro, se o preço cabe na disposição dele
  const precoPrem = pc * sim.coinPreco;
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0 || a.pagante) continue;
    if (d - a.nasc < C.idade_min_premium || a.premiumAte > d + 1 || a.ordemCompra > 0) continue;
    if (a.coins >= pc || a.bazarAlvo > 0) continue;
    const limite = a.disp * Math.max(a.rendaEMA, 1) / pc;
    if (limite < sim.coinPreco * 0.97 || a.ouro < precoPrem * 1.1) continue;
    if (a.compraSemana + pc > P.cambio.limite_compra_semana) continue;
    let quer = pc - Math.floor(a.coins);
    if (rng.chance(migr)) { quer = trocaComLivro(sim, a, 0, quer); if (quer < 1) continue; }
    colocarOrdem(sim, a, 0, Math.ceil(quer), Math.min(limite, sim.coinPreco * 1.5));
  }
  // 15.7 as rodadas do Câmbio
  sim.cambioDia = { volume: 0, ouro: 0, rodadasComNegocio: 0, rodadas: 0, ordensNovas: sim.ordensHoje || 0, vwapNum: 0 };
  sim.ordensHoje = 0;
  const R = P.cambio.rodadas_por_dia;
  if (!sim.disjuntorCoins) for (let h = 0; h < R; h++) rodadaCambio(sim, h);
  // 15.8 cancela ordens de compra velhas; quem juntou Coins compra a conveniência
  const lim = P.cambio.cancelar_compra_dias;
  sim.livro = sim.livro.filter(o => {
    if (o.q <= 0) { finalizarOrdem(sim, o); return false; }
    if (!o.a.ativo || o.a.susp === Infinity) { cancelarOrdem(sim, o); return false; }
    if (o.lado === 0 && d - o.dia >= lim) { cancelarOrdem(sim, o); return false; }
    return true;
  });
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0) continue;
    if (a.bazarAlvo > 0 && a.coins >= a.bazarAlvo - 1e-6) { // comprador de personagem que juntou Coins no Câmbio
      const c = a.bazarAlvo; a.coins -= c; a.bazarAlvo = 0; liquidarBazar(sim, c, a.bazarVendedor); a.bazarVendedor = null;
    } else if (a.bazarAlvo > 0 && a.ordemCompra <= 0 && sim.rng.chance(0.2)) a.bazarAlvo = 0; // desistiu
    if (!a.pagante && !a.bazarAlvo && a.premiumAte <= d && a.coins >= pc - 1e-6) {
      a.coins -= pc; a.premiumAte = d + C.premium_dias; sim.coinsDestruidos += pc; sim.coinsLojaDia += pc; sim.premiumsDia.ouro++;
      const extra = Math.min(a.coins, pc * C.recebidos_loja_frac / (1 - C.recebidos_loja_frac));
      if (extra > 0 && rng.chance(0.3)) { a.coins -= extra; sim.coinsDestruidos += extra; sim.coinsLojaDia += extra; }
    }
  }
  // 15.9 Baú lacrado: oferta dos pagantes, demanda do luxo de quem não paga, preço pela arbitragem com o Coin
  mercadoBau(sim);
  // 15.10 disjuntor por taxa de disputas
  let rd = 0, rc = 0; for (const [x, y] of sim.janelaDisputa) { rd += x; rc += y; }
  const taxaDisp = rd > 0 ? rc / rd : 0;
  if (!sim.disjuntorCoins && taxaDisp > C.contestacao.disjuntor) { sim.disjuntorCoins = true; sim.diasDisjuntor = (sim.diasDisjuntor || 0); }
  else if (sim.disjuntorCoins && taxaDisp < C.contestacao.religa) sim.disjuntorCoins = false;
  if (sim.disjuntorCoins) sim.diasDisjuntor = (sim.diasDisjuntor || 0) + 1;
  sim.taxaDisputa = taxaDisp;
  sim.janelaPremium.push([sim.premiumsDia.proprio, sim.premiumsDia.ouro]);
  if (sim.janelaPremium.length > 30) sim.janelaPremium.shift();
}

// fração das vendas de Coins que foge do Câmbio para a Troca (depende do custo relativo; estresse 9)
function taxaMigracao(sim) {
  const T = sim.P.taxas, m = sim.P.cambio.migracao_troca;
  const custoTroca = T.troca_coins + T.troca_lado, custoCambio = T.cambio;
  return m.base + (m.max - m.base) * clamp((custoCambio - custoTroca) / m.faixa_custo, 0, 1);
}
// Troca direta de Coins por ouro (ou por itens), fora do Câmbio, ao último preço do Câmbio.
// A conta-amostra representa k contas reais; cada unidade de uma ordem-clone é 1 Coin de uma conta real.
function trocaComLivro(sim, ag, ladoAg, q) {
  const T = sim.P.taxas, k = sim.k, preco = sim.coinPreco;
  const opostas = sim.livro.filter(o => o.lado !== ladoAg && o.q > 0 && o.a !== ag);
  if (!opostas.length) return q;
  let resta = q * k;
  for (let t = 0; t < opostas.length * 2 && resta > 0; t++) {
    const o = opostas[sim.rng.int(opostas.length)];
    if (o.q <= 0) continue;
    const x = Math.min(o.q, resta);
    const valor = x * preco / k;
    const taxaC = valor * T.troca_coins; // quem recebe os Coins paga (07 §5.5)
    const taxaV = valor * T.troca_lado;  // quem recebe o ouro paga 3%
    if (ladoAg === 0) {
      if (ag.ouro < valor + taxaC) break;
      ag.ouro -= valor + taxaC; ag.coins += x / k; ag.compraSemana += x / k;
      o.a.ouro += valor - taxaV; o.a.receitaHoje += valor - taxaV;
    } else {
      if (o.res - o.gasto < valor + taxaC) continue;
      o.gasto += valor + taxaC; o.a.coins += x / k;
      ag.ouro += valor - taxaV; ag.receitaHoje += valor - taxaV;
    }
    o.q -= x; resta -= x;
    sim.drenos.troca += taxaC + taxaV;
    sim.contadores.coinsTrocaBypass += valor; sim.coinsTrocaDia += x / k;
  }
  return resta / k;
}

function colocarOrdem(sim, a, lado, q, limite) {
  const P = sim.P, CB = P.cambio, k = sim.k, rng = sim.rng;
  q = Math.round(q);
  if (q < CB.ordem_min) { if (lado === 1) { a.coinsVenda = (a.coinsVenda || 0) + q; sim.contadores.vendasAbaixoMin++; } return; }
  while (q > CB.ordem_max) { colocarOrdem(sim, a, lado, CB.ordem_max, limite); q -= CB.ordem_max; }
  if (q < CB.ordem_min) { if (lado === 1) a.coinsVenda = (a.coinsVenda || 0) + q; return; }
  let res = 0;
  if (lado === 0) {
    res = q * Math.min(limite, sim.coinPreco * 1.35);
    if (a.ouro < res) return;
    a.ouro -= res; a.ouroRes += res; a.ordemCompra++; a.compraSemana += q;
  }
  for (let i = 0; i < k; i++) { // cada clone é uma conta real (a amostra representa k contas)
    const lim = lado === 1 ? (limite > 0 ? limite * (0.995 + 0.01 * rng.next()) : 0) : limite * (0.99 + 0.02 * rng.next());
    sim.livro.push({ lado, a, q, q0: q, lim, dia: sim.dia, hora: rng.int(P.cambio.rodadas_por_dia), seq: sim.seqOrdem++,
      res: res / k, gasto: 0 });
  }
  sim.ordensHoje = (sim.ordensHoje || 0) + k;
}
function finalizarOrdem(sim, o) {
  if (o.lado === 0) { const sobra = o.res - o.gasto; o.a.ouro += sobra; o.a.ouroRes -= o.res; o.a.ordemCompra = Math.max(0, o.a.ordemCompra - 1 / sim.k); }
}
function cancelarOrdem(sim, o) {
  if (o.lado === 0) finalizarOrdem(sim, o);
  else { // venda: os Coins não vendidos voltam
    if (o.a.ativo && o.a.susp !== Infinity) o.a.coinsVenda = (o.a.coinsVenda || 0) + o.q / sim.k;
  }
}

function rodadaCambio(sim, h) {
  const P = sim.P, CB = P.cambio, d = sim.dia;
  const ativos = sim.livro.filter(o => o.q > 0 && (o.dia < d || o.hora <= h));
  sim.cambioDia.rodadas++;
  const p0 = sim.coinPreco;
  const p24 = sim.coinHist24.length >= CB.rodadas_por_dia ? sim.coinHist24[sim.coinHist24.length - CB.rodadas_por_dia] : p0;
  let lo = Math.max(p0 * (1 - CB.banda_rodada), p24 * (1 - CB.banda_dia));
  let hi = Math.min(p0 * (1 + CB.banda_rodada), p24 * (1 + CB.banda_dia));
  if (lo > hi) { lo = hi = clamp(p0, p24 * (1 - CB.banda_dia), p24 * (1 + CB.banda_dia)); }
  const compras = ativos.filter(o => o.lado === 0).sort((x, y) => y.lim - x.lim || x.seq - y.seq);
  const vendas = ativos.filter(o => o.lado === 1).sort((x, y) => x.lim - y.lim || x.seq - y.seq);
  let melhor = null;
  if (compras.length && vendas.length) {
    const cand = new Set([lo, hi, clamp(p0, lo, hi)]);
    for (const o of ativos) if (o.lim >= lo && o.lim <= hi) cand.add(o.lim);
    for (const c of cand) {
      let bv = 0, sv = 0;
      for (const o of compras) { if (o.lim >= c) bv += o.q; else break; }
      for (const o of vendas) { if (o.lim <= c) sv += o.q; else break; }
      const vol = Math.min(bv, sv), imb = Math.abs(bv - sv), dist = Math.abs(c - p0);
      if (vol <= 0) continue;
      if (!melhor || vol > melhor.vol || (vol === melhor.vol && (imb < melhor.imb || (imb === melhor.imb && dist < melhor.dist)))) melhor = { c, vol, imb, dist };
    }
  }
  if (!melhor) { sim.coinHist24.push(p0); if (sim.coinHist24.length > 48) sim.coinHist24.shift(); return; }
  const Pstar = clamp(arredSig(melhor.c, CB.algarismos_degrau), lo, hi);
  let vol = melhor.vol;
  const k = sim.k, taxa = P.taxas.cambio;
  let resta = vol;
  for (const o of compras) {
    if (resta <= 0 || o.lim < melhor.c) break;
    const x = Math.min(o.q, resta);
    const custo = x * Pstar / k;
    if (o.res - o.gasto < custo - 1e-6) continue; // sem ouro reservado suficiente: pula
    o.gasto += custo; o.q -= x; resta -= x; o.a.coins += x / k;
  }
  const exec = vol - resta; resta = exec;
  for (const o of vendas) {
    if (resta <= 0 || o.lim > melhor.c) break;
    const x = Math.min(o.q, resta);
    o.q -= x; resta -= x;
    const bruto = x * Pstar / k;
    o.a.ouro += bruto * (1 - taxa); o.a.receitaHoje += bruto * (1 - taxa);
    sim.drenos.cambio += bruto * taxa;
  }
  sim.coinPreco = Pstar;
  sim.coinHist24.push(Pstar); if (sim.coinHist24.length > 48) sim.coinHist24.shift();
  sim.cambioDia.volume += exec; sim.cambioDia.ouro += exec * Pstar; sim.cambioDia.rodadasComNegocio++;
}

function bazar(sim) {
  const P = sim.P, B = P.bazar, C = P.coins, d = sim.dia, rng = sim.rng, cpr = C.coins_por_real;
  const p = B.vendas_mes_frac / 30;
  for (const a of sim.ativos) {
    if (a.parado || a.bot !== 0 || d - a.nasc < B.idade_min || !rng.chance(p)) continue;
    const reais = (B.preco_reais_base + B.preco_reais_por_nivel * a.maxN) * rng.unif(0.8, 1.6);
    const coins = Math.round(reais * cpr);
    if (coins < B.lance_min_coins) { sim.contadores.bazarBloqueadas++; continue; }
    pagar(sim, a, B.taxa_anuncio_ouro, 'bazar');
    // comprador: pagante com Coins guardados para isso, ou quem não paga, comprando Coins no Câmbio
    let comprador = null;
    if (rng.chance(B.parcela_comprador_pagante)) {
      for (let t = 0; t < 30 && !comprador; t++) { const c = sim.ativos[rng.int(sim.ativos.length)]; if (c.pagante && c.bBazar + c.coins >= coins && c !== a) comprador = c; }
      if (comprador) { const x = Math.min(comprador.bBazar, coins); comprador.bBazar -= x; comprador.coins -= coins - x; liquidarBazar(sim, coins, a); continue; }
    }
    for (let t = 0; t < 30 && !comprador; t++) { const c = sim.ativos[rng.int(sim.ativos.length)]; if (!c.pagante && c.bot === 0 && c.ouro > coins * sim.coinPreco * 1.2 && c !== a && !c.bazarAlvo) comprador = c; }
    if (comprador) { comprador.bazarAlvo = coins; comprador.bazarVendedor = a; colocarOrdem(sim, comprador, 0, coins, sim.coinPreco * 1.5); }
  }
}
function liquidarBazar(sim, coins, vendedor) {
  const P = sim.P, taxa = Math.ceil(coins * P.taxas.bazar);
  sim.coinsDestruidos += taxa; sim.contadores.bazarVendas++;
  const liq = coins - taxa;
  if (vendedor && vendedor.ativo) { // vendedor: Coins retidos 7 dias, depois 70% à venda e 30% na loja
    const vende = Math.round(liq * P.bazar.vendedor_vende_frac);
    vendedor.lotes.push([vende, sim.dia + 7]);
    sim.coinsDestruidos += liq - vende; sim.coinsLojaDia += liq - vende;
  } else sim.coinsDestruidos += liq;
}

function mercadoBau(sim) {
  const P = sim.P, C = P.coins, d = sim.dia;
  const preco = C.bau_reais * C.coins_por_real * sim.coinPreco * P.bau.desconto_arbitragem;
  let demanda = 0; for (const [, v] of sim.demandaBauOuro) demanda += v;
  let ofertaN = 0; for (const o of sim.bauOferta) if (o[2] <= d && o[0].ativo) ofertaN += o[1];
  const nVend = Math.min(ofertaN, demanda / preco);
  sim.bauVendidosDia = nVend;
  if (nVend <= 0 || preco <= 0) { sim.demandaBauOuro = []; return; }
  const fd = nVend * preco / demanda, fo = nVend / ofertaN;
  for (const [a, v] of sim.demandaBauOuro) { const g = v * fd; a.ouro -= g; }
  const taxa = P.taxas.bau_lacrado;
  for (const o of sim.bauOferta) if (o[2] <= d && o[0].ativo) {
    const n = o[1] * fo; o[1] -= n; const g = n * preco; o[0].ouro += g * (1 - taxa); o[0].receitaHoje += g * (1 - taxa); sim.drenos.bau += g * taxa;
  }
  sim.bauOferta = sim.bauOferta.filter(o => o[1] > 1e-6 && o[0].ativo && d - o[2] < 30);
  sim.demandaBauOuro = [];
}

function processarContestacoes(sim) {
  const P = sim.P, C = P.coins.contestacao, d = sim.dia, rng = sim.rng;
  const hoje = sim.contestacoes.filter(c => c.dia === d);
  sim.contestacoes = sim.contestacoes.filter(c => c.dia > d);
  let reais = 0;
  for (const c of hoje) {
    const a = c.a;
    reais += c.reais;
    sim.reaisContestados += c.reais;
    sim.coinsSemLastro += c.coins * C.transferidos;
    if (!a.ativo || a.susp === Infinity) continue;
    a.susp = Infinity; a.contestado = true; sim.contasSuspensas = (sim.contasSuspensas || 0) + 1;
    sim.massaCongelada += a.ouro + a.ouroRes;
    if (rng.chance(C.regulariza)) sim.regularizacoes.push({ a, dia: d + Math.round(rng.unif(C.dias_regularizar[0], C.dias_regularizar[1])), coins: c.coins });
  }
  if (sim.janelaDisputa.length) sim.janelaDisputa[sim.janelaDisputa.length - 1][1] += hoje.length;
  const voltam = sim.regularizacoes.filter(r => r.dia === d);
  sim.regularizacoes = sim.regularizacoes.filter(r => r.dia > d);
  for (const r of voltam) {
    const a = r.a;
    if (!a.ativo) continue;
    a.susp = -1; sim.massaCongelada -= a.ouro + a.ouroRes; sim.contasSuspensas--;
    sim.coinsSemLastro -= r.coins * C.transferidos; // pagou de novo: o lastro voltou
    sim.ativos.push(a);
  }
}

// ---------------------------------------------------------------------------
// 16. Política de encomendas, indexação dos insumos, dupe
// ---------------------------------------------------------------------------
function politica(sim) {
  const P = sim.P, d = sim.dia, pol = P.politica;
  const ipc = sim.ipcBruto;
  if (d >= 30 && d % 30 === 0 && ipc.length > 30) { // indexação mensal dos insumos de NPC (07: ±2% por mês)
    const r = ipc[d] / ipc[d - 30];
    const m = d < sim.P.social.era_dias ? P.drenos.indexacao_max_mes_era1 : P.drenos.indexacao_max_mes;
    sim.idxInsumo *= clamp(r, 1 - m, 1 + m);
  }
  if (pol.ativa && d >= pol.inicio && (d - pol.inicio) % pol.intervalo === 0 && ipc.length > 30) {
    const anual = Math.pow(ipc[d] / ipc[d - 30], 365 / 30) - 1;
    if (anual < pol.alvo_ipc[0]) sim.multEnc = Math.min(pol.max, sim.multEnc * (1 + pol.ajuste));
    else if (anual > pol.alvo_ipc[1]) sim.multEnc = Math.max(pol.min, sim.multEnc * (1 - pol.ajuste));
  }
}
function dupe(sim) {
  const ev = sim.P.eventos.dupe, d = sim.dia;
  if (!ev || d !== ev.dia) return;
  const massa = sim.ativos.reduce((s, a) => s + a.ouro, 0);
  const total = massa * ev.frac;
  const n = Math.max(2, Math.round(ev.contas * sim.P.simulacao.escala));
  const dupers = [];
  for (let i = 0; i < n; i++) dupers.push(sim.ativos[sim.rng.int(sim.ativos.length)]);
  // o dupe vaza para quem vendeu a preço de mercado (fica) antes do disjuntor congelar o resto (destruído)
  const vaza = total * (ev.disjuntor ? ev.vazamento : 1);
  for (let i = 0; i < 40; i++) { const b = sim.ativos[sim.rng.int(sim.ativos.length)]; b.ouro += vaza / 40; }
  sim.dupeInjetado = total; sim.dupeFicou = vaza;
  sim.drenos.dupe -= vaza; // negativo: entrada de ouro fora das fontes (para a conciliação)
}

// ---------------------------------------------------------------------------
// 17. Métricas do dia
// ---------------------------------------------------------------------------
function ipcDoDia(sim) {
  const d = sim.dia;
  for (let g = 0; g < NG; g++) sim.volJanela[g] += sim.volV[g];
  sim.vol30.push(Float64Array.from(sim.volV));
  if (sim.vol30.length > 30) { const v = sim.vol30.shift(); for (let g = 0; g < NG; g++) sim.volJanela[g] -= v[g]; }
  if (d % 30 === 0 || !sim.ipcPesos) { // cesta encadeada mensal (07 §12.1)
    const atual = sim.ipcPesos ? calcIPC(sim) : 1;
    let tot = 0; const w = new Float64Array(NG);
    for (let g = 0; g < NG; g++) { w[g] = sim.volJanela[g]; tot += w[g]; }
    if (tot <= 0) { for (let g = 0; g < NG; g++) w[g] = tierDeGrupo(g) <= 2 ? 1 : 0; tot = 8; }
    for (let g = 0; g < NG; g++) w[g] /= tot;
    sim.ipcPesos = w; sim.ipcBaseP = Float64Array.from(sim.preco); sim.ipcBaseV = atual;
  }
  sim.ipcBruto[d] = calcIPC(sim);
}
function calcIPC(sim) {
  let s = 0;
  for (let g = 0; g < NG; g++) if (sim.ipcPesos[g] > 0) s += sim.ipcPesos[g] * sim.preco[g] / sim.ipcBaseP[g];
  return sim.ipcBaseV * s;
}

function metricas(sim) {
  const P = sim.P, d = sim.dia, esc = P.simulacao.escala, C = P.coins;
  const A = sim.ativos;
  let massa = 0, nTeto = 0, nHum = 0, pag = 0, faz = 0, auto = 0, massaEst = 0, nEst = 0;
  const rendas = [], tetos = [], niveis = [];
  for (const a of A) {
    massa += a.ouro + a.ouroRes;
    if (d - a.nasc >= 90) { massaEst += a.ouro + a.ouroRes; nEst++; }
    if (a.noTeto) nTeto++;
    if (a.bot === 0) {
      nHum++; if (a.pagante) pag++;
      if (d - a.nasc >= 30) { rendas.push(a.fontesEMA); tetos.push(a.tetoEff); }
      niveis.push(Math.max(a.mx1, a.mx2));
    } else if (a.bot === 1) auto++; else faz++;
  }
  const N = A.length;
  const pc = premiumCoins(P);
  const premOuro = pc * sim.coinPreco;
  const rendaMed = mediana(rendas);
  const reaisPorOuro = (1 / C.coins_por_real) / sim.coinPreco;
  let wealth = sim.ultimaRiqueza;
  if (d % 7 === 0 || !wealth) {
    const ws = [];
    for (const a of A) {
      if (d - a.nasc < P.simulacao.idade_minima_riqueza) continue;
      let w = a.ouro + a.ouroRes + (a.coins + a.bConv + a.bBazar) * sim.coinPreco;
      for (let g = 0; g < NG; g++) w += (a.org[g] + a.circ[g]) * sim.preco[g];
      ws.push(w);
    }
    wealth = gini(ws); sim.ultimaRiqueza = wealth;
  }
  let fT = 0, fD = 0, fS = 0;
  for (const x of sim.fazTransfJanela) fT += x;
  for (const x of sim.fazDiasJanela) fD += x;
  for (const x of sim.fazSaidasJanela) fS += x;
  const B = P.bots;
  const lucroFazMes = fD > 0 ? (fT / fD) * 30 * reaisPorOuro * B.preco_cinza_frac * (1 - P.taxas.troca_lado) * (1 - B.perdas_intermediario) : 0;
  const saidaFazDia = fD > 0 ? fS / fD : 0;
  const tetoTopo = P.teto.base + P.teto.por_nivel * 100 + P.teto.por_selo * 2 * P.progressao.selo_graus;
  // valor em ouro de 1 unidade de teto: no VR de mercado (07) é 1; no VR fixo é o nível de preços (cesta do IPC)
  let nivel = 0; for (let g = 0; g < NG; g++) nivel += (sim.ipcPesos ? sim.ipcPesos[g] : 1 / NG) * sim.preco[g];
  const ouroPorTeto = P.teto.medida === 'vr_mercado' ? 1 : nivel;
  const fontesTot = Object.values(sim.fontes).reduce((s, x) => s + x, 0);
  const dren = Object.assign({}, sim.drenos);
  const drenosPlanejados = Object.entries(dren).filter(([k]) => k !== 'fiscalizacao' && k !== 'dupe').reduce((s, [, x]) => s + x, 0);
  let jp0 = 0, jp1 = 0; for (const [x, y] of sim.janelaPremium) { jp0 += x; jp1 += y; }
  const ipc = sim.ipcBruto[d];
  const ipc90 = d >= 90 ? Math.pow(ipc / sim.ipcBruto[d - 90], 365 / 90) - 1 : NaN;
  const pb = 0.5 * (sim.preco[gi(BRUTO, 1)] + sim.preco[gi(BRUTO, 2)]);
  let estoqueCoins = sim.coinsDoados - sim.coinsDestruidos;
  let guardados = 0;
  for (const a of A) guardados += a.guard.reduce((s, x) => s + x[0], 0) + a.bBazar;
  const volGoods = sim.volV.reduce((s, x) => s + x, 0);
  const trocaItens = volGoods * P.taxas.parcela_troca_itens;
  const coinsItens = sim.coinsTrocaDia * sim.coinPreco * P.cambio.parcela_itens_por_coins;
  const linha = {
    dia: d, era: sim.era, semana: sim.semana,
    ativos: N / esc, humanos: nHum / esc, pagantes: pag / esc, automacao: auto / esc, fazendas: faz / esc,
    novos_banidos: (sim.banidosHoje || 0) / esc, suspensos_contestacao: (sim.contasSuspensas || 0) / esc,
    ipc: ipc, ipc_anual_90d: ipc90,
    preco_coin: sim.coinPreco, premium_ouro: premOuro, renda_mediana: rendaMed,
    premium_dias_renda: rendaMed > 0 ? premOuro / rendaMed : NaN,
    massa_ativa: massa / esc, massa_por_ativo: N ? massa / N : 0, massa_premiums: N ? massa / N / premOuro : 0, massa_estab_premiums: nEst ? massaEst / nEst / premOuro : NaN,
    massa_inativa: sim.massaInativa / esc, massa_congelada: sim.massaCongelada / esc,
    estoque_coins: estoqueCoins / esc, coins_guardados: guardados / esc, coins_sem_lastro: sim.coinsSemLastro / esc,
    coins_doados_dia: sim.coinsDoadosHoje / esc, coins_loja_dia: sim.coinsLojaDia / esc,
    reais_doados_dia: sim.reaisHoje / esc,
    cambio_volume: sim.cambioDia.volume, cambio_ouro: sim.cambioDia.ouro, // escala real (cada clone é uma conta)
    cambio_rodadas_negocio: sim.cambioDia.rodadasComNegocio, cambio_ordens_dia: sim.cambioDia.ordensNovas,
    livro_compras: sim.livro.filter(o => o.lado === 0 && o.q > 0).length, livro_vendas: sim.livro.filter(o => o.lado === 1 && o.q > 0).length,
    disjuntor_coins: sim.disjuntorCoins ? 1 : 0, taxa_disputa: sim.taxaDisputa,
    velocidade: massa > 0 ? (volGoods + sim.cambioDia.ouro / sim.k + sim.trocaDia) / massa : 0,
    fontes_total: fontesTot / esc, drenos_total: drenosPlanejados / esc, drenos_fontes: fontesTot > 0 ? drenosPlanejados / fontesTot : NaN,
    gini: wealth[0], top1: wealth[1], top10: wealth[2],
    frac_teto: N ? nTeto / N : 0,
    lucro_fazenda_mes_reais: lucroFazMes,
    saida_fazenda_dia_ouro: saidaFazDia, saida_fazenda_dia_reais: saidaFazDia * reaisPorOuro,
    nivel_precos: nivel, teto_mediano: mediana(tetos),
    dia_teto_mediano_reais: mediana(tetos) * ouroPorTeto * reaisPorOuro,
    salario_topo_mes_reais: tetoTopo * ouroPorTeto * reaisPorOuro * 30 * (1 - P.teto.salario_custo_frac),
    premium_via_ouro: (jp0 + jp1) > 0 ? jp1 / (jp0 + jp1) : NaN,
    trocas_pagas_coins: (trocaItens + coinsItens) > 0 ? coinsItens / (trocaItens + coinsItens) : 0,
    basicos_vs_piso: pb / P.npc.preco_base_frac,
    encomenda_ouro_por_vra: sim.encPorVra, mult_encomendas: sim.multEnc, idx_insumo: sim.idxInsumo,
    oficina_vra_dia: sim.oficinaDia / esc, falta_essencial_frac: sim.necEss > 0 ? sim.faltaEss / sim.necEss : 0,
    producao_vra_dia: sim.prodDia / esc, vr_preso_dia: sim.vrPresoDia / esc, mercado_ouro_dia: volGoods / esc,
    nivel_mestre_mediano: mediana(niveis), selos_dia: (sim.selosHoje || 0) / esc,
    bau_lacrados_vendidos: (sim.bauVendidosDia || 0) / esc,
  };
  for (const [k, v] of Object.entries(sim.fontes)) linha['fonte_' + k] = v / esc;
  for (const [k, v] of Object.entries(dren)) linha['dreno_' + k] = v / esc;
  for (const [k, v] of Object.entries(sim.itensDrenados)) linha['itens_' + k] = v / esc;
  for (let g = 0; g < NG; g++) linha['p_' + NOME_GRUPO[g]] = sim.preco[g];
  sim.serie.push(linha);
}

// ---------------------------------------------------------------------------
// 18. Laço principal
// ---------------------------------------------------------------------------
function simular(P, cen, semente, quieto) {
  const sim = criarSim(P, cen, semente);
  const dias = P.simulacao.dias;
  sim.tmpObt = new Float64Array(NG); sim.tmpU = new Float64Array(3);
  for (let d = 0; d < dias; d++) {
    sim.dia = d;
    sim.fontes = novoLedgerFontes(); sim.drenos = novoLedgerDrenos();
    sim.itensDrenados = { consumo: 0, encomendas: 0, obras: 0, festas: 0, npc: 0, moda: 0, selo: 0 };
    sim.dem.fill(0); sim.sb.fill(0); sim.fillS.fill(0); sim.volV.fill(0); sim.volQ.fill(0);
    sim.encEntregueTot = 0; sim.prodDia = 0; sim.vrPresoDia = 0; sim.oficinaDia = 0; sim.faltaEss = 0; sim.necEss = 0;
    sim.compraDia = 0; sim.trocaDia = 0; sim.coinsTrocaDia = 0; sim.coinsLojaDia = 0; sim.banidosHoje = 0; sim.selosHoje = 0;
    sim.demandaBauOuro = [];
    calendario(sim);
    populacao(sim);
    calcularIntensidades(sim);
    sim.ordemEncomenda = Array.from({ length: NG }, (_, g) => g).sort((x, y) => sim.precoMed[x] - sim.precoMed[y]);
    for (const a of sim.ativos) fase1(sim, a);
    for (let g = 0; g < NG; g++) liquidarGrupo(sim, g);
    for (const a of sim.ativos) fase2(sim, a);
    fontesColetivas(sim);
    dupe(sim);
    coinsDia(sim);
    sim.preco.set(sim.precoNovo);
    for (let g = 0; g < NG; g++) sim.precoMed[g] += (sim.preco[g] - sim.precoMed[g]) / P.mercado.dias_media_decisao;
    ipcDoDia(sim);
    politica(sim);
    metricas(sim);
    if (!quieto && (d % 30 === 0 || d === dias - 1)) {
      const l = sim.serie[sim.serie.length - 1];
      console.log(`  dia ${String(d).padStart(3)} | ativos ${Math.round(l.ativos).toString().padStart(6)} | IPC ${(l.ipc / (sim.ipcBruto[30] || l.ipc) * 100).toFixed(1).padStart(6)} | Coin ${l.preco_coin.toFixed(1).padStart(7)} | prem ${l.premium_dias_renda.toFixed(1).padStart(5)} d | M/ativo ${Math.round(l.massa_por_ativo).toString().padStart(7)} | D/F ${(l.drenos_fontes * 100).toFixed(0).padStart(4)}% | teto ${(l.frac_teto * 100).toFixed(0).padStart(3)}% | top10 ${(l.top10 * 100).toFixed(0)}%`);
    }
  }
  // rebase do IPC: 100 no 30º dia (07 §12.1)
  const base30 = sim.ipcBruto[Math.min(30, dias - 1)];
  for (const l of sim.serie) l.ipc = l.ipc / base30 * 100;
  return sim;
}

// ---------------------------------------------------------------------------
// 19. Resumo e critérios de saúde
// ---------------------------------------------------------------------------
function resumir(sim) {
  const P = sim.P, S = P.saude, s = sim.serie;
  const ini = Math.min(P.simulacao.inicio_saude, Math.floor((s.length - 1) / 2));
  const fim = s.length - 1;
  const jan = s.slice(ini);
  const media = k => { const v = jan.map(l => l[k]).filter(x => Number.isFinite(x)); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : NaN; };
  const soma = k => jan.reduce((a, l) => a + (Number.isFinite(l[k]) ? l[k] : 0), 0);
  // tendência do IPC: regressão de ln(IPC) no dia, anualizada (mais robusta que comparar duas pontas)
  let sx = 0, sy = 0, sxx = 0, sxy = 0, nn = 0;
  for (let i = ini; i <= fim; i++) { const y = Math.log(s[i].ipc); sx += i; sy += y; sxx += i * i; sxy += i * y; nn++; }
  const incl = (nn * sxy - sx * sy) / (nn * sxx - sx * sx);
  const ipcAnual = Math.exp(incl * 365) - 1;
  const ipcPontas = Math.pow(s[fim].ipc / s[ini].ipc, 365 / (fim - ini)) - 1;
  const fontes = soma('fontes_total'), drenos = soma('drenos_total');
  const r = {
    ipc_anual: ipcAnual, ipc_anual_pontas: ipcPontas, ipc_medio: media('ipc'),
    ipc_final: s[fim].ipc,
    drenos_fontes: fontes > 0 ? drenos / fontes : NaN,
    frac_teto: media('frac_teto'),
    premium_dias: media('premium_dias_renda'),
    massa_premiums: media('massa_premiums'), massa_estab_premiums: media('massa_estab_premiums'),
    top10: media('top10'), top1: media('top1'), gini: media('gini'),
    premium_via_ouro: media('premium_via_ouro'),
    coins_trocas: media('trocas_pagas_coins'),
    basicos_piso: media('basicos_vs_piso'),
    salario_topo: media('salario_topo_mes_reais'),
    dia_teto_reais: media('dia_teto_mediano_reais'),
    lucro_fazenda_mes: media('lucro_fazenda_mes_reais'),
    preco_coin: media('preco_coin'), premium_ouro: media('premium_ouro'), renda_mediana: media('renda_mediana'),
    ativos: media('ativos'), massa_por_ativo: media('massa_por_ativo'),
    velocidade: media('velocidade'), cambio_rodadas: media('cambio_rodadas_negocio'), cambio_ordens: media('cambio_ordens_dia'),
    falta_essencial: media('falta_essencial_frac'), oficina: media('oficina_vra_dia'), vr_preso: media('vr_preso_dia'),
    producao: media('producao_vra_dia'), mercado_ouro: media('mercado_ouro_dia'),
    estoque_coins_final: s[fim].estoque_coins, coins_sem_lastro_final: s[fim].coins_sem_lastro,
    dias_disjuntor: sim.diasDisjuntor || 0,
    primeiro100: sim.primeiro100 === undefined ? null : sim.primeiro100,
    d100: { casual: mediana(sim.d100_casual || []), regular: mediana(sim.d100_regular || []), hardcore: mediana(sim.d100_hardcore || []),
      n: { casual: (sim.d100_casual || []).length, regular: (sim.d100_regular || []).length, hardcore: (sim.d100_hardcore || []).length } },
    contadores: sim.contadores,
    ipc_min: Math.min(...s.slice(30).map(l => l.ipc)), ipc_max: Math.max(...s.slice(30).map(l => l.ipc)),
    vol_coin: (() => { const r = []; for (let i = ini + 1; i <= fim; i++) r.push(Math.log(s[i].preco_coin / s[i - 1].preco_coin)); const m = r.reduce((a, b) => a + b, 0) / r.length; return Math.sqrt(r.reduce((a, b) => a + (b - m) * (b - m), 0) / r.length); })(),
    vol_ipc: (() => { const r = []; for (let i = ini + 7; i <= fim; i += 7) r.push(Math.log(s[i].ipc / s[i - 7].ipc)); const m = r.reduce((a, b) => a + b, 0) / r.length; return Math.sqrt(r.reduce((a, b) => a + (b - m) * (b - m), 0) / r.length); })(),
    coin_min: Math.min(...jan.map(l => l.preco_coin)), coin_max: Math.max(...jan.map(l => l.preco_coin)),
    mult_encomendas_final: s[fim].mult_encomendas, idx_insumo_final: s[fim].idx_insumo,
    fontes_cat: {}, drenos_cat: {},
  };
  for (const k of Object.keys(s[0])) {
    if (k.startsWith('fonte_')) r.fontes_cat[k.slice(6)] = soma(k) / jan.length;
    if (k.startsWith('dreno_')) r.drenos_cat[k.slice(6)] = soma(k) / jan.length;
  }
  const dentro = (x, f) => Number.isFinite(x) && x >= f[0] && x <= f[1];
  r.criterios = {
    ipc: dentro(r.ipc_anual, S.ipc_anual),
    drenos_fontes: dentro(r.drenos_fontes, S.drenos_fontes),
    frac_teto: dentro(r.frac_teto, S.frac_teto),
    premium_dias: dentro(r.premium_dias, S.premium_dias),
    massa_premiums: dentro(r.massa_premiums, S.massa_premiums),
    top10: r.top10 < S.top10_max,
    premium_via_ouro: dentro(r.premium_via_ouro, S.premium_via_ouro),
    coins_trocas: r.coins_trocas < S.coins_trocas_max,
    basicos_piso: r.basicos_piso >= S.basicos_piso_min,
    salario_topo: r.salario_topo < S.salario_topo_max,
    dia_teto: dentro(r.dia_teto_reais, S.dia_teto_reais),
    lucro_fazenda: r.lucro_fazenda_mes <= S.lucro_fazenda_mes_max,
  };
  r.passa = Object.values(r.criterios).filter(Boolean).length;
  r.total = Object.keys(r.criterios).length;
  return r;
}

function escreverCSV(sim, id) {
  const s = sim.serie;
  const cols = Object.keys(s[0]);
  const fmt = v => (typeof v === 'number' ? (Number.isFinite(v) ? (Math.abs(v) >= 1000 ? v.toFixed(0) : +v.toPrecision(5)) : '') : v);
  const linhas = [cols.join(',')].concat(s.map(l => cols.map(c => fmt(l[c])).join(',')));
  fs.writeFileSync(path.join(PASTA_RES, `${id}.csv`), linhas.join('\n'));
}

// ---------------------------------------------------------------------------
// 20. Linha de comando
// ---------------------------------------------------------------------------
function args() {
  const a = process.argv.slice(2), o = {};
  for (let i = 0; i < a.length; i++) {
    if (!a[i].startsWith('--')) continue;
    const k = a[i].slice(2);
    if (i + 1 < a.length && !a[i + 1].startsWith('--')) { o[k] = a[i + 1]; i++; } else o[k] = true;
  }
  return o;
}

function rodarCenario(cen, op) {
  const extras = { simulacao: {} };
  if (op.escala) extras.simulacao.escala = +op.escala;
  if (op.dias) extras.simulacao.dias = +op.dias;
  const P = paramsDoCenario(cen, extras);
  const semente = op.semente !== undefined ? +op.semente : P.simulacao.semente;
  const t0 = Date.now();
  if (!op.quieto) console.log(`\n== ${cen.id}: ${cen.nome} (semente ${semente}, escala ${P.simulacao.escala}) ==`);
  const sim = simular(P, cen, semente, op.quieto);
  const r = resumir(sim);
  r.segundos = (Date.now() - t0) / 1000;
  if (!op['sem-csv']) { fs.mkdirSync(PASTA_RES, { recursive: true }); escreverCSV(sim, cen.id); }
  if (!op.quieto) imprimirResumo(cen, r);
  return { cen, r, sim };
}

function pct(x) { return Number.isFinite(x) ? (x * 100).toFixed(1) + '%' : '—'; }
function num(x, c) { return Number.isFinite(x) ? x.toFixed(c === undefined ? 1 : c) : '—'; }
function imprimirResumo(cen, r) {
  const ok = b => (b ? 'ok ' : 'NÃO');
  const c = r.criterios;
  console.log(`  -- resumo (dia 182 ao 365), ${r.segundos.toFixed(1)} s --`);
  console.log(`  [${ok(c.ipc)}] IPC ao ano ${pct(r.ipc_anual)}   [${ok(c.drenos_fontes)}] drenos/fontes ${pct(r.drenos_fontes)}   [${ok(c.frac_teto)}] no teto ${pct(r.frac_teto)}`);
  console.log(`  [${ok(c.premium_dias)}] premium ${num(r.premium_dias)} dias de renda   [${ok(c.massa_premiums)}] massa/ativo ${num(r.massa_premiums, 2)} premiums   [${ok(c.top10)}] top 10% ${pct(r.top10)} (top 1% ${pct(r.top1)}, Gini ${num(r.gini, 2)})`);
  console.log(`  [${ok(c.premium_via_ouro)}] premium via ouro ${pct(r.premium_via_ouro)}   [${ok(c.coins_trocas)}] Trocas em Coins ${pct(r.coins_trocas)}   [${ok(c.basicos_piso)}] básicos/piso ${num(r.basicos_piso, 2)}`);
  console.log(`  [${ok(c.salario_topo)}] salário-teto topo R$ ${num(r.salario_topo, 0)}/mês   [${ok(c.dia_teto)}] dia de teto (mediano) R$ ${num(r.dia_teto_reais, 2)}   [${ok(c.lucro_fazenda)}] fazenda R$ ${num(r.lucro_fazenda_mes, 2)}/conta/mês`);
  console.log(`  Coin ${num(r.preco_coin)} ouro (${num(r.coin_min)}–${num(r.coin_max)}); premium ${num(r.premium_ouro, 0)} ouro; renda mediana ${num(r.renda_mediana, 0)}/dia; ativos ${num(r.ativos, 0)}; 1º 100 casual/regular/hardcore D${num(r.d100.casual, 0)}/D${num(r.d100.regular, 0)}/D${num(r.d100.hardcore, 0)}`);
  console.log(`  => ${r.passa}/${r.total} critérios`);
}

function principal() {
  const op = args();
  const cenarios = carregarCenarios();
  if (op.lista) { for (const c of cenarios) console.log(`${c.id.padEnd(28)} ${c.grupo.padEnd(14)} ${c.nome}`); return; }
  if (op.sementes) { // vários cenários × várias sementes: média e faixa dos indicadores (o ruído do modelo é grande)
    const sementes = String(op.sementes).split(',').map(Number);
    const ids = op.cenarios ? String(op.cenarios).split(',') : ['base'];
    const chaves = ['ipc_anual', 'ipc_medio', 'drenos_fontes', 'frac_teto', 'premium_dias', 'massa_premiums', 'massa_estab_premiums', 'top10', 'top1', 'gini',
      'premium_via_ouro', 'coins_trocas', 'basicos_piso', 'salario_topo', 'dia_teto_reais', 'lucro_fazenda_mes', 'preco_coin', 'premium_ouro', 'renda_mediana',
      'falta_essencial', 'vr_preso', 'producao', 'mercado_ouro', 'cambio_rodadas', 'cambio_ordens', 'vol_coin', 'vol_ipc', 'velocidade', 'massa_por_ativo'];
    const saida = [];
    for (const id of ids) {
      const cen = cenarios.find(c => c.id === id);
      if (!cen) { console.error('cenário não existe: ' + id); continue; }
      const rs = sementes.map(s => rodarCenario(cen, Object.assign({}, op, { semente: s, quieto: true, 'sem-csv': true })).r);
      const ag = { id, nome: cen.nome, grupo: cen.grupo, sementes, media: {}, min: {}, max: {}, passa: rs.map(r => r.passa), d100: rs.map(r => r.d100), contadores: rs.map(r => r.contadores) };
      for (const k of chaves) { const v = rs.map(r => r[k]).filter(Number.isFinite); ag.media[k] = v.reduce((a, b) => a + b, 0) / (v.length || 1); ag.min[k] = Math.min(...v); ag.max[k] = Math.max(...v); }
      saida.push(ag);
      console.log(`${id.padEnd(28)} IPC ${pct(ag.media.ipc_anual)} (${pct(ag.min.ipc_anual)} a ${pct(ag.max.ipc_anual)})  nível ${num(ag.media.ipc_medio)}  prem ${num(ag.media.premium_dias)}d  teto ${pct(ag.media.frac_teto)}  D/F ${pct(ag.media.drenos_fontes)}  fazenda R$${num(ag.media.lucro_fazenda_mes, 1)}  falta ${pct(ag.media.falta_essencial)}  passa ${ag.passa.join('/')}`);
    }
    fs.mkdirSync(PASTA_RES, { recursive: true });
    const arq = path.join(PASTA_RES, op.saida || 'sementes.json');
    let antigo = []; try { antigo = JSON.parse(fs.readFileSync(arq, 'utf8')); } catch (e) { antigo = []; }
    const junto = antigo.filter(x => !saida.some(y => y.id === x.id)).concat(saida);
    fs.writeFileSync(arq, JSON.stringify(junto, null, 1));
    return;
  }
  if (op.relatorio) { // junta as partes de uma rodada em paralelo (--parte k/n) e gera o resumo e o relatório
    const partes = fs.readdirSync(PASTA_RES).filter(f => /^parte_\d+\.json$/.test(f));
    let res = [];
    for (const f of partes) res = res.concat(JSON.parse(fs.readFileSync(path.join(PASTA_RES, f), 'utf8')));
    res.sort((x, y) => cenarios.findIndex(c => c.id === x.id) - cenarios.findIndex(c => c.id === y.id));
    finalizarLote(res);
    for (const f of partes) fs.unlinkSync(path.join(PASTA_RES, f));
    return;
  }
  if (op.todos) {
    const filtro = typeof op.todos === 'string' ? op.todos : null;
    const [k, n] = op.parte ? String(op.parte).split('/').map(Number) : [1, 1]; // rodada em paralelo: parte k de n
    const res = [];
    let i = -1;
    for (const c of cenarios) {
      if (filtro && !c.id.startsWith(filtro) && c.grupo !== filtro) continue;
      i++; if (i % n !== k - 1) continue;
      const { r, sim } = rodarCenario(c, Object.assign({}, op, { quieto: true }));
      console.log(`${c.id.padEnd(28)} ${r.passa}/${r.total}  IPC ${pct(r.ipc_anual).padStart(7)}  D/F ${pct(r.drenos_fontes).padStart(6)}  teto ${pct(r.frac_teto).padStart(6)}  prem ${num(r.premium_dias).padStart(5)}d  top10 ${pct(r.top10).padStart(6)}  fazenda R$${num(r.lucro_fazenda_mes, 2).padStart(6)}  (${r.segundos.toFixed(0)} s)`);
      res.push({ id: c.id, nome: c.nome, grupo: c.grupo, descricao: c.descricao, r, serie: amostrarSerie(sim.serie) });
    }
    fs.mkdirSync(PASTA_RES, { recursive: true });
    if (n > 1) { fs.writeFileSync(path.join(PASTA_RES, `parte_${k}.json`), JSON.stringify(res)); console.log(`parte ${k}/${n} gravada; depois de todas, rode: node sim.js --relatorio`); return; }
    finalizarLote(res);
    return;
  }
  const id = op.cenario || 'base';
  const cen = cenarios.find(c => c.id === id);
  if (!cen) { console.error(`Cenário "${id}" não existe. Use --lista.`); process.exit(1); }
  rodarCenario(cen, op);
}

function finalizarLote(res) {
  fs.mkdirSync(PASTA_RES, { recursive: true });
  fs.writeFileSync(path.join(PASTA_RES, 'resumo.json'), JSON.stringify(res.map(x => ({ id: x.id, nome: x.nome, grupo: x.grupo, r: x.r })), null, 1));
  const rel = require('./relatorio.js');
  rel.gerar(res, lerJSON('parametros.json'), path.join(PASTA_RES, 'relatorio.html'));
  console.log(`\nResultados em ${PASTA_RES}`);
}

// guarda uma série reduzida (todas as colunas principais, 1 ponto por dia) para o relatório
function amostrarSerie(serie) {
  const cols = ['dia', 'ativos', 'ipc', 'ipc_anual_90d', 'preco_coin', 'premium_ouro', 'premium_dias_renda', 'renda_mediana',
    'massa_ativa', 'massa_por_ativo', 'massa_premiums', 'estoque_coins', 'coins_guardados', 'coins_sem_lastro', 'velocidade',
    'fontes_total', 'drenos_total', 'drenos_fontes', 'gini', 'top1', 'top10', 'frac_teto', 'lucro_fazenda_mes_reais',
    'dia_teto_mediano_reais', 'salario_topo_mes_reais', 'premium_via_ouro', 'basicos_vs_piso', 'cambio_volume',
    'cambio_rodadas_negocio', 'mult_encomendas', 'producao_vra_dia', 'mercado_ouro_dia', 'nivel_mestre_mediano', 'pagantes',
    'fonte_npc', 'fonte_encomendas', 'fonte_cercos', 'fonte_eventos', 'fonte_comeco',
    'dreno_insumos', 'dreno_partida', 'dreno_ajudantes', 'dreno_taxas', 'dreno_troca', 'dreno_cambio', 'dreno_bau', 'dreno_bazar',
    'dreno_obras', 'dreno_luxos', 'dreno_selo', 'dreno_oficina', 'dreno_fiscalizacao'];
  for (let g = 0; g < NG; g++) cols.push('p_' + NOME_GRUPO[g]);
  return serie.map(l => { const o = {}; for (const c of cols) o[c] = l[c]; return o; });
}

if (require.main === module) principal();
module.exports = { simular, resumir, paramsDoCenario, carregarCenarios, NOME_GRUPO };
