// Cliente (PWA) em Svelte 5. Em desenvolvimento, o Vite serve a tela em :5173 e repassa /v1 ao servidor em :3000,
// então para o navegador é tudo a mesma origem (o cookie de sessão funciona sem CORS).
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [svelte()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: { '/v1': 'http://127.0.0.1:3000' },
  },
  build: { outDir: 'dist', emptyOutDir: true },
});
