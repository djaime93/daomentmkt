<script>
	import { page } from '$app/stores';

	import LogInForm from '../../components/forms/LogInForm.svelte';

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/db';
	import { dataset_dev } from 'svelte/internal';

	// /** @type {import('./$types').PageData} */
	// export let data
	// $: ({ user, tableData } = data)

	// $: {
	//  ({ user, tableData } = data)
	//  console.log(user)
	// }

	let email = '';
	let password = '';
	let title = 'Login';
</script>

{#if !$page.data.session.user}
	<LogInForm title="Login" />
{:else}
	<h1>Welcome {$page.data.session.user.email}</h1>
	<p>I am logged in!</p>
{/if}
