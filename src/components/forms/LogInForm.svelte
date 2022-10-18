<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';

	let email = '';
	let password = '';

	export let title;
	// export let action

	async function sleep(seconds) {
		return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
	}

	async function handleLogin() {
		if (title === 'Login') {
			const { user, error } = await supabaseClient.auth.signIn({
				email: email,
				password: password
			});
			if (user) {
				await sleep(2);
				goto('/dashboard');
				console.log(user);
			} else {
				console.error(error);
			}
		} else {
			const { user, error } = await supabaseClient.auth.signUp({
				email: email,
				password: password
			});
			if (user) {
				await sleep(2);
				goto('/dashboard');
				console.log(user);
			} else {
				console.error(error);
			}
		}
	}

	async function goToDashboard() {
		console.log($page.data.session.user);
		timeout(3000);
		if ($page.data.session.user) {
			goto('/dashboard');
		}
	}
</script>

<div>
	<h1>{title}</h1>
	<form on:submit|preventDefault={handleLogin}>
		<!-- <form method="POST" use:enhance action="?/signin"> -->
		<!-- <form method="POST" action='?/signin' use:enhance={({form, data, cancel}) => {
    return ({ result }) => {
      console.log()
      console.log(data)
      if (result.type === 'success') goto("/")
    }
  }}> -->
		<input type="email" bind:value={email} placeholder="email@email.com" />
		<input type="password" bind:value={password} placeholder="Password" />
		<button type="submit">{title}</button>
		<!-- <button type="submit" on:click={goToDashboard}>{title}</button> -->
	</form>
	{#if title === 'Login'}
		<a href="/signup">Not a Member? Sign up!</a>
	{:else}
		<a href="/login">Already a Member? Login!</a>
	{/if}
</div>
