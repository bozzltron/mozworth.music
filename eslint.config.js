import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  solid.configs["flat/recommended"],
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
]);