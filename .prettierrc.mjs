/**
 * @type {import('prettier').Config}
 */
const config = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  plugins: ["prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};

export default config;
