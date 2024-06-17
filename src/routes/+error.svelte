<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1 class="text-xl font-bold">{$page.status} - {$page.error?.message}</h1>
