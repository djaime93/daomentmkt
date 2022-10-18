/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    // TODO log the user in
    // const { user, error } = await supabaseClient.auth.signUp({
    //     email: email,
    //     password: password
    //   });
      if (user) {
        goto("/dashboard")
      } else {
        console.error(error)
      }
  }
};