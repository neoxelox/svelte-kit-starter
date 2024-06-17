<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { token } from "$lib/stores/api";

  $: (function () {
    const path = $page.url.pathname;

    if ($token === "" && path !== "/auth") {
      goto(`/auth?location=${path}`);
    }
  })();
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4">
  <slot />
</div>
