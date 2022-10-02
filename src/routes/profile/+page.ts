// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

interface TestTable {
  id: string;
  created_at: string;
}

export const load: PageLoad = withAuth(async ({ getSupabaseClient, session }) => {
  if (!session.user) {
    throw redirect(303, '/');
  }
  const { data: userData } = await getSupabaseClient()
    .from<TestTable>('user')
    .select('*');

  return {
    user: session.user,
    userData,
  };
});