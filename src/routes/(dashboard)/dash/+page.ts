import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    meta: {
      title: `Dashboard`,
      description: `SvelteKit Starter dashboard.`,
    },
  };
};
