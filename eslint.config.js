import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off",
      "vue/multi-word-component-names": "warn",
    },
  },
  eslintConfigPrettier,
];
