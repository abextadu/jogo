import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['testes/**/*.test.ts'],
    // Os testes de banco usam o mesmo banco de teste: um arquivo por vez.
    fileParallelism: false,
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
});
