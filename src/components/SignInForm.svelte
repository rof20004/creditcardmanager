<style>
.form-section {
  padding-top: 0;
}

.footer-section {
  padding-top: 0;
}

.subtitle {
  padding-top: 20%;
  padding-bottom: 0;
}
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function changeContext() {
		dispatch('setContext', { component: 'signup' });
  }
  
  let username = '';
  let password = '';
  async function signIn() {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json; charset=utf-8')
    const response = await fetch(`${"process.env.API_URL"}/signin`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      window.location.href = '/home';
    }
  }
</script>

<section class="hero is-info is-bold is-fullheight">
  <div class="section">
    <div class="container">
      <h1 class="title has-text-centered">Credit Card Manager</h1>
      <h1 class="subtitle has-text-centered" style="font-size: 40px;">Login</h1>
    </div>
  </div>
  <div class="hero-body form-section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <div class="media-content">
              <form on:submit|preventDefault={ signIn }>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="email" class="input" placeholder="E-mail" bind:value={ username }>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="password" class="input" placeholder="Senha" bind:value={ password }>
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
  <div class="section footer-section">
    <div class="container has-text-centered">
      <em>Não registrado? </em><a href on:click|preventDefault={ changeContext }> <u>clique aqui</u></a>
    </div>
  </div>
</section>