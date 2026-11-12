// A pasta config/ é validada por esquema; um número errado não sobe.
import { describe, expect, it } from 'vitest';
import { carregarConfig, validarConfig } from '../pacotes/config/src/index.ts';

const valido = JSON.stringify({ _sobre: 'comentário', taxas: { _fonte: 'x', troca_lado_bps: 300, troca_minimo_ouro: 1 } });

describe('configuração', () => {
  it('a config do repositório é válida e tem versão', () => {
    const c = carregarConfig();
    expect(c.economia.taxas.troca_lado_bps).toBe(300);
    expect(c.versao).toMatch(/^[0-9a-f]{12}$/);
  });

  it('as chaves de comentário (com _) não chegam ao jogo', () => {
    const c = validarConfig({ 'economia.json': valido });
    expect(c.economia).toEqual({ taxas: { troca_lado_bps: 300, troca_minimo_ouro: 1 } });
  });

  it('a versão muda quando um número muda', () => {
    const a = validarConfig({ 'economia.json': valido });
    const b = validarConfig({ 'economia.json': valido.replace('300', '301') });
    expect(a.versao).not.toBe(b.versao);
  });

  it('recusa taxa fora da faixa, campo desconhecido, número com vírgula e arquivo sem esquema', () => {
    expect(() => validarConfig({ 'economia.json': valido.replace('300', '-1') })).toThrow(/troca_lado_bps/);
    expect(() => validarConfig({ 'economia.json': valido.replace('"troca_minimo_ouro":1', '"troca_minimo_ouro":1,"extra":2') })).toThrow();
    expect(() => validarConfig({ 'economia.json': valido.replace('300', '2.5') })).toThrow(/troca_lado_bps/);
    expect(() => validarConfig({ 'economia.json': valido, 'segredo.json': '{}' })).toThrow(/sem esquema/);
    expect(() => validarConfig({})).toThrow(/faltando/);
  });
});
