<style>
.login-text {
  padding-bottom: 0;
}

.form-section {
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
		dispatch('setContext', { component: 'signin' });
	}
</script>

<section class="hero is-warning is-bold is-fullheight">
  <div class="section login-text">
    <div class="container">
      <h1 class="title has-text-centered">Credit Card Manager</h1>
      <h1 class="subtitle has-text-centered" style="font-size: 40px;">Registro</h1>
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
                    <input type="email" class="input is-small" placeholder="E-mail">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="password" class="input is-small" placeholder="Senha">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input type="password" class="input is-small" placeholder="Repetir senha">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <div class="columns is-marginless">
                    <div class="column is-6">
                      <button type="submit" class="button is-fullwidth is-primary">Registrar</button>
                    </div>
                    <div class="column is-6">
                      <button type="button" class="button is-fullwidth is-info" on:click|preventDefault={ changeContext }>Voltar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>