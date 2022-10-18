<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ user, userData } = data);

	$: {
		if (userData.length === 1 && first === '' && once === 0) {
			first = userData[0].first;
			last = userData[0].last;
			once = 1;
		}
	}

	let first = '';
	let last = '';
	let once = 0;
  let verifiedEthAddress = ''

	const style = {
		updateButton: `p-2 bg-black text-white`
	};
</script>

<h1>You're in</h1>

<div>Protected content for {user.email}</div>
<pre>{JSON.stringify(userData[0], null, 2)}</pre>
<pre>User id: {JSON.stringify(user.id, null, 2)}</pre>

<div>
	<div>Profile Info</div>
  <div>Name</div>
	<form action="?/upsertPofile" use:enhance>
		<input bind:value={first} type="text" name="first" placeholder="first" />
		<input bind:value={last} type="text" name="last" placeholder="last" />
		<button type="submit" class={style.updateButton}>update</button>
	</form>

  <div>Email</div>
  {user.email}

	<div>Eth Wallet Address</div>
  <button type="submit" class={style.updateButton}>update</button>
 
	<div>KYC</div>
  <button type="submit" class={style.updateButton}>update</button>
</div>

<!-- <script>
  import { supabaseClient } from '$lib/db';
  import { page } from '$app/stores';

  let loadedData = [];
  async function loadData() {
    const { data } = await supabaseClient.from('test').select('*').limit(20);
    loadedData = data;
  }

  $: if ($page.data.session.user) {
    loadData();
  }
</script>

{#if $page.data.session.user}
  <p>client-side data fetching with RLS</p>
  <pre>{JSON.stringify(loadedData, null, 2)}</pre>
{/if} -->
