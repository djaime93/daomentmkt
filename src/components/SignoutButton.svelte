<script lang="ts">
  // import { enhanceAndInvalidate } from '@supabase/auth-helpers-sveltekit';
  import { enhance } from '$app/forms'
</script>

<!-- <form action="/logout" method="post" use:enhanceAndInvalidate> -->
<form action="/logout" method="post">
  <button type="submit">Sign out</button>
</form>