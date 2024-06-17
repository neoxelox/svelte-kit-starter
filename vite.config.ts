import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import { FontaineTransform } from "fontaine";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    FontaineTransform.vite({ fallbacks: ["Avenir", "Helvetica", "Arial"] }),
    svelteInspector({
      showToggleButton: "always",
      toggleButtonPos: "bottom-right",
    }),
  ],
  server: {
    host: "localhost",
    port: 2222,
    strictPort: true,
  },
  preview: {
    host: "localhost",
    port: 2222,
    strictPort: true,
  },
  clearScreen: false,
});
