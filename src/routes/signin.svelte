<svelte:head>
	<title>Credit Card Manager - Login</title>
</svelte:head>

<style>
.login-text {
  padding-bottom: 0;
}

.form-section {
  padding-top: 0;
}
</style>

<section class="hero is-info is-fullheight">
  <div class="section">
    <div class="container">
      <h1 class="title has-text-centered">Credit Card Manager</h1>
    </div>
  </div>
  <div class="section login-text">
    <div class="container">
      <h1 class="title has-text-centered">Login</h1>
    </div>
  </div>
  <div class="hero-body form-section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <div class="media-content">
              <form>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="email" class="input" placeholder="E-mail">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="password" class="input" placeholder="Senha">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button type="submit" class="button is-fullwidth is-primary">Entrar</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container has-text-centered">
      <em>Não registrado? </em><a href> <u>clique aqui</u></a>
    </div>
  </div>
</section>