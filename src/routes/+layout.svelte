<script lang="ts">
  import { building } from "$app/environment";
  import { page } from "$app/stores";
  import { PREFIX_PUBLIC_BASE_URL } from "$env/static/public";
  import { removeSuffix } from "$lib/utils/string";
  import "../app.scss";

  $: base = building ? PREFIX_PUBLIC_BASE_URL : $page.url.origin;
  $: meta = <App.MetaData>{
    title: $page.data.meta?.title || "SvelteKit Starter",
    description: $page.data.meta?.description || "Full SvelteKit TypeScript starter.",
    image: $page.data.meta?.image || base + "/images/Link-Preview-Image.png",
  };
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@sveltejs" />
  <meta name="twitter:creator" content="@sveltejs" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={meta.title} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={removeSuffix(base + $page.url.pathname, "/")} />
  <meta property="og:image" content={meta.image} />
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center gap-4">
  <slot />
</div>
