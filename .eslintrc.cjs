module.exports = {
  root: true,
  env: {
    es2024: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:svelte/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte", ".html"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  plugins: ["svelte", "html", "@typescript-eslint", "prettier"],
  ignorePatterns: [],
  globals: {
    App: "writable",
  },
  rules: {
    "no-console": "error",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
