import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    meta: {
      title: "SvelteKit Starter",
      description: "Full SvelteKit TypeScript starter.",
    },
  };
};
