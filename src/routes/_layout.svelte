<script>
  import Nav from '../components/Nav.svelte';
  export let segment
</script>

<main>
  {#if segment !== 'credentials'}
    <Nav { segment }/>
  {/if}
  <slot></slot>
</main>