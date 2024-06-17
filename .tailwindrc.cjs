module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
