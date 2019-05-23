<script>
  function gotoLogin() {
    window.location.href = '/signin';
  }
</script>

<button on:click={ gotoLogin } alt="Botão para ir para a tela de login" class="button is-light"><strong>Log in</strong></button>