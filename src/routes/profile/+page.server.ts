// import { supabaseClient } from "$lib/db";
// // import { session } from "@supabase/auth-helpers-sveltekit/server";
// import { page } from '$app/stores';

// import { withAuth } from '@supabase/auth-helpers-sveltekit';

interface TestTable {
  id: string;
  created_at: string;
}



// /** @type {import('./$types').Actions} */
// export const actions = {
//   userupdate: async (event) => {
//     console.log(session)


  //   const { data, error } = await supabaseClient
  //     .from<TestTable>('profile')
  //     .upsert({ first: 'david', last: 'jaime' })
    
  //   if (error !== null ) {
  //     console.log(error)
  //   }

  //   console.log(data)
//   }
// }

  // const { data: userData } = await getSupabaseClient()
  // .from<TestTable>('users')
  // .select('*');


// src/routes/posts/+page.server.ts
import type { Actions } from './$types';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { error, invalid } from '@sveltejs/kit';

export const actions: Actions = {
  createPost: withAuth(async ({ session, getSupabaseClient, request }) => {
    if (!session.user) {
      // the user is not signed in
      throw error(403, { message: 'Unauthorized' });
    }
    // we are save, let the user create the post
    const formData = await request.formData();
    const content = formData.get('content');

    console.log(session.user.id)

    // const { error: createPostError, data: newPost } = await getSupabaseClient()
    //   .from('profile')
    //   .insert({ content });

    // if (createPostError) {
    //   return invalid(500, {
    //     supabaseErrorMessage: createPostError.message
    //   });
    // }
    // return {
    //   newPost
    // };
  }),
  upsertPofile: withAuth(async ({ session, getSupabaseClient, request }) => {
    if (!session.user) {
      // the user is not signed in
      throw error(403, { message: 'Unauthorized' });
    }
    // we are save, let the user create the post
    const formData = await request.formData();
    const content = formData.get('content');

    console.log(formData.get("first"))
    console.log(session.user.id)

    const { error: createPostError, data: newPost } = await getSupabaseClient()
      // .from('profile')
      // .insert({ content });
      .from<TestTable>('user')
      .update({ id: session.user.id, first: formData.get("first"), last: formData.get("last") })

    if (createPostError) {
      return invalid(500, {
        supabaseErrorMessage: createPostError.message
      });
    }
    return {
      newPost
    };
  })
};