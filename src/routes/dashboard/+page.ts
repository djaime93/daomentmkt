// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

interface TestTable {
  id: string;
  created_at: string;
}

export const load: PageLoad = withAuth(async ({ getSupabaseClient, session }) => {
  console.log('dashboard atempt')
  console.log(session.user)
  // if (!session.user) {
  //   throw redirect(303, '/');
  // }
  const { data: tableData } = await getSupabaseClient()
    .from<TestTable>('test')
    .select('*');

  return {
    user: session.user,
    tableData
  };
});