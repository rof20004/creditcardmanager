<script>
  import BtnLogIn from './BtnLogIn.svelte'
</script>

<nav class="navbar is-fixed-top has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Imagem do framework Bulma">
    </a>

    <a href role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="fi">
          <BtnLogIn/>
        </div>
      </div>
    </div>
  </div>
</nav>