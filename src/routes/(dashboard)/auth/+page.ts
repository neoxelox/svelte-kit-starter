import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    meta: {
      title: `Authentication`,
      description: `Login to SvelteKit Starter.`,
    },
  };
};
