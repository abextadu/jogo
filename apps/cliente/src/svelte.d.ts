declare module '*.css';

declare module '*.svelte' {
  import type { Component } from 'svelte';
  const componente: Component<any>;
  export default componente;
}
