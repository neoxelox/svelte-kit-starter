module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
    "stylelint-config-standard-scss",
    "stylelint-config-tailwindcss/scss",
    "stylelint-config-html/svelte",
    "stylelint-config-html/html",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "property-no-unknown": [true, { ignoreProperties: ["font-named-instance"] }],
    "color-hex-length": "long",
    "no-descending-specificity": null,
    "no-empty-source": true,
  },
};
