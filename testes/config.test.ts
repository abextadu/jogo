// A pasta config/ é validada por esquema; um número errado não sobe.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { carregarConfig, validarConfig, PASTA_CONFIG } from '../pacotes/config/src/index.ts';

const demais = Object.fromEntries(['personagem.json', 'itens.json'].map((n) => [n, readFileSync(join(PASTA_CONFIG, n), 'utf8')]));
const com = (economia: string, extra: Record<string, string> = {}) => ({ ...demais, 'economia.json': economia, ...extra });

const valido = JSON.stringify({ _sobre: 'comentário', taxas: { _fonte: 'x', troca_lado_bps: 300, troca_minimo_ouro: 1 } });

describe('configuração', () => {
  it('a config do repositório é válida e tem versão', () => {
    const c = carregarConfig();
    expect(c.economia.taxas.troca_lado_bps).toBe(300);
    expect(c.personagem.vocacoes_disponiveis).toEqual(['cavaleiro', 'mago']);
    expect(c.personagem.mochila).toEqual({ casas: 20, pilha_maxima: 100 });
    expect(c.versao).toMatch(/^[0-9a-f]{12}$/);
  });

  it('as chaves de comentário (com _) não chegam ao jogo', () => {
    const c = validarConfig(com(valido));
    expect(c.economia).toEqual({ taxas: { troca_lado_bps: 300, troca_minimo_ouro: 1 } });
    expect(Object.keys(c.itens.itens_de_teste)).not.toContain('_sobre');
  });

  it('a versão muda quando um número muda', () => {
    const a = validarConfig(com(valido));
    const b = validarConfig(com(valido.replace('300', '301')));
    expect(a.versao).not.toBe(b.versao);
  });

  it('recusa taxa fora da faixa, campo desconhecido, número com vírgula, arquivo sem esquema e arquivo faltando', () => {
    expect(() => validarConfig(com(valido.replace('300', '-1')))).toThrow(/troca_lado_bps/);
    expect(() => validarConfig(com(valido.replace('"troca_minimo_ouro":1', '"troca_minimo_ouro":1,"extra":2')))).toThrow();
    expect(() => validarConfig(com(valido.replace('300', '2.5')))).toThrow(/troca_lado_bps/);
    expect(() => validarConfig(com(valido, { 'segredo.json': '{}' }))).toThrow(/sem esquema/);
    expect(() => validarConfig({ 'economia.json': valido })).toThrow(/faltando/);
  });

  it('recusa item de teste que não está no catálogo e vocação que não existe', () => {
    const itens = JSON.parse(demais['itens.json']!);
    itens.itens_de_teste.ouro_falso = 1;
    expect(() => validarConfig({ ...com(valido), 'itens.json': JSON.stringify(itens) })).toThrow(/item de teste desconhecido/);
    const pers = JSON.parse(demais['personagem.json']!);
    pers.vocacoes_disponiveis = ['paladino'];
    expect(() => validarConfig({ ...com(valido), 'personagem.json': JSON.stringify(pers) })).toThrow(/vocacoes_disponiveis/);
  });
});
