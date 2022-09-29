<script lang="ts">
  import { enhanceAndInvalidate } from '@supabase/auth-helpers-sveltekit';
</script>

<form action="/logout" method="post" use:enhanceAndInvalidate>
  <button type="submit">Sign out</button>
</form>