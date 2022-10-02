<script>
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { supabaseClient } from "$lib/db";


  let email = "";
  let password = "";
  
  
  export let title
  // export let action

  async function handleLogin(){
    if (title === "Login"){
      const { user, error } = await supabaseClient.auth.signIn({
        email: email,
        password: password
      });
      if (user) {
        goto("/dashboard")
        console.log(user)
      } else {
        console.error(error)
      }
    } else {
      const { user, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
      });
      if (user) {
        goto("/dashboard")
        console.log(user)
      } else {
        console.error(error)
      }
    }
  } 
</script>

<div>
  <h1>{title}</h1>
  <form on:submit|preventDefault={handleLogin}>
    <input type="email" bind:value={email} placeholder="email@email.com" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">{title}</button>
  </form>
  <a href="/signup">Not a Member? Sign up!</a>
</div>