import type { Actions } from './$types'
import { supabaseClient } from '$lib/db'
import { invalid, redirect } from '@sveltejs/kit'
import { saveSession } from '@supabase/auth-helpers-sveltekit/server'

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  async signin({ request, cookies, url }) {
    const formData = await request.formData()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log(email, password)

    const { data, error } = await supabaseClient.auth.api.signInWithEmail(
      email,
      password,
      {
        redirectTo: `${url.origin}/logging-in`,
      }
    )

    console.log(data)

    if (error || !data) {
      if (error?.status === 400) {
        return invalid(400, {
          error: 'Invalid credentials',
          values: {
            email,
          },
        })
      }
      return invalid(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    saveSession(cookies, data)
    throw redirect(303, '/dashboard')
  },
}

// import { supabaseClient } from "$lib/db";
// import { withAuth } from '@supabase/auth-helpers-sveltekit';
// import { invalid, redirect } from '@sveltejs/kit';

// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async ({ locals }) => {
//   return {
//     session: locals.session
//   };
// };

// /** @type {import('./$types').Actions} */
// export const actions = {
//   // default: async (event) => {
//   //   // TODO log the user in
//   //   const { user, error } = await supabaseClient.auth.signUp({
//   //       email: email,
//   //       password: password
//   //     });
//   //     if (user) {
//   //       goto("/dashboard")
//   //     } else {
//   //       console.error(error)
//   //     }
//   // },
//   login: async ({ cookies, request }) => {
//     const data = await request.formData();
//     const email = data.get('email');
//     const password = data.get('password');
//     console.log(email, password)
//     console.log(data)
    
//     const { user, error } = await supabaseClient.auth.signUp({
//         email: email,
//         password: password
//       });
//       if (user) {
//         console.log(user)
//         // redirect(200,'/')
//       } else {
//         console.error(error)
//       }
    
//       // return {
//       //   user: session.user
//       // }
//   }
// };