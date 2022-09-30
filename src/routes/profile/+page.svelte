<script>
	import { identity } from 'svelte/internal';


  /** @type {import('./$types').PageData} */
  export let data;
  $: ({ user, userData } = data);
</script>

<h1>You're in</h1>


<div>Protected content for {user.email}</div>
<pre>{JSON.stringify(userData, null, 2)}</pre>
<pre>User id: {JSON.stringify(user.identities[0].id, null, 2)}</pre>
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