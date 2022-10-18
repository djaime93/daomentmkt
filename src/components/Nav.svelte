<script>
  import { page } from '$app/stores';
  import SignoutButton from '../components/SignoutButton.svelte';
  import WalletButton from './WalletButton.svelte';

  const style = {
    wrapper: `p-6 flex flex-cols justify-between`,
    left: ``,
    nav: ``,
    user: `flex flex-cols gap-4`
  }
</script>

<div class={style.wrapper}>
  <div>
    <a href="/">Home</a>
  </div>

  <div class={style.nav}>
    {#if $page.data.session.user}
      <a href="/dashboard">dashboard</a>
    {/if}
  </div>

  <div class={style.user}>
    {#if !$page.data.session.user}
      <a href="/login">Login</a>
    {:else}
      <!-- <p>I am logged in!</p> -->
      <a href="/profile">{$page.data.session.user.email?.split("@")[0]}</a>
      <SignoutButton/>

      <WalletButton/>
    {/if}
  </div>
</div>