<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { token } from "$lib/stores/api";
</script>

<h1 class="text-xl font-bold">Authentication Page 👋</h1>
<button
  on:click={() => {
    $token = "hi!";
    goto($page.url.searchParams.get("location") || "/dash");
  }}
  class="rounded-md border-2 border-amber-500 p-2">Login</button
>
<a href="/dash" class="text-sky-700 underline">Return to dashboard</a>
