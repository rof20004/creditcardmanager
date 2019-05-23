<script>
  import Nav from '../components/Nav.svelte';
  export let segment
</script>

<main>
  {#if segment !== 'signin'}
    <Nav { segment }/>
  {/if}
  <slot></slot>
</main>