<svelte:head>
	<title>Credit Card Manager - Login</title>
</svelte:head>

<script>
  import SignInForm from '../components/SignInForm.svelte';
  import SignUpForm from '../components/SignUpForm.svelte';

  let componentSelected = SignInForm;

  function setContext(event) {
    const componentName = event.detail.component;
    componentSelected = componentName === 'signin' ? SignInForm : SignUpForm;
  }
</script>

<svelte:component this={ componentSelected } on:setContext={ setContext }></svelte:component>