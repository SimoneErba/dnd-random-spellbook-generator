/* eslint-disable import/no-anonymous-default-export */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslint from "@eslint/js";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("next", "next/core-web-vitals", "prettier"),
  ...compat.extends("plugin:@typescript-eslint/recommended").map((config) => ({
    ...config,
    files: ["**/*.+(ts|tsx)"],
  })),

  {
    plugins: {
      prettier,
      eslint,
      tseslint,
      react,
      typescriptEslintEslintPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ["**/*.{ts,tsx,js,jsx,mts,cts}"],
    rules: Object.keys(require("@eslint/eslintrc/lib/rules")).reduce((acc, rule) => {
      acc[rule] = "off"; // Disable all rules
      return acc;
    }, {}),
  },
];
