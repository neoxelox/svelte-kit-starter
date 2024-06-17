module.exports = {
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  tailwindConfig: ".tailwindrc.cjs",
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  endOfLine: "auto",
};
