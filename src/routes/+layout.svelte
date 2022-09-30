<script lang="ts">
  // we need to make sure the supabase instance is initialized on the client
  import '$lib/db';
  import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit';
  import { page } from '$app/stores';
  import { invalidateAll } from '$app/navigation';
	import Nav from '../components/Nav.svelte';

  // this sets up automatic token refreshing
  startSupabaseSessionSync({
        page,
        handleRefresh: () => invalidateAll()
    });
</script>

<Nav/>
<slot/>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>