import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    version: {
      name: "VERSION",
    },
    alias: {
      $assets: "src/assets",
      $lib: "src/lib",
      $routes: "src/routes",
    },
    env: {
      publicPrefix: "PREFIX_PUBLIC",
      privatePrefix: "",
    },
    csp: {
      mode: "auto",
    },
    csrf: {
      checkOrigin: true,
    },
  },
};
