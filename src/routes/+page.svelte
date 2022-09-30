<script>
  import { page } from '$app/stores';

  import LogInForm from '../components/forms/LogInForm.svelte';
</script>


{#if !$page.data.session.user}
  <LogInForm title="Login"/>
  <h1>I am not logged in</h1>
{:else}
  <h1>Welcome {$page.data.session.user.email}</h1>
  <p>I am logged in!</p>
{/if}