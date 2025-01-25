import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import testingLibrary from "eslint-plugin-testing-library";
import jsxAlly from "eslint-plugin-jsx-a11y";
import * as parser from "@typescript-eslint/parser";
import tailwind from "eslint-plugin-tailwindcss";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from 'typescript-eslint';
// import reactRefresh from "eslint-plugin-react-refresh";
// import importPlugin from "eslint-plugin-import";
// import unicorn from "eslint-plugin-unicorn";

export default tseslint.config(  {
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "**/*.config.ts"],
  languageOptions: {
    parser: parser,
    parserOptions: {
      project: "./tsconfig.json",
    },
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    "next/core-web-vitals": nextPlugin,
    "next/typescript": nextPlugin,
    "@typescript-eslint": tseslint,
    "react-hooks": reactHooks,
    "jsx-a11y": jsxAlly,
    "testing-library": testingLibrary,
    sonarjs: sonarjs,
    security: security,
    tailwindcss: tailwind,
    "@eslint/js": js,
    // "react-refresh": reactRefresh,
    // unicorn: unicorn,
    // import: importPlugin,
  },
  rules: {
    ...tseslint.configs.strict.rules,
    ...tseslint.configs.stylistic.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxAlly.configs.recommended.rules,
    ...testingLibrary.configs["flat/react"].rules,
    ...sonarjs.configs.recommended.rules,
    ...security.configs.recommended.rules,
    ...tailwind.configs.recommended.rules,
    ...js.configs.recommended.rules,
    // ...unicorn.configs.recommended.rules,
    // ...importPlugin.configs.recommended.rules,
    // "react-refresh/only-export-components": [
    //   "off",
    //   { allowConstantExport: true },
    // ],
    // "max-params": ["error", 1],
    "unicorn/prefer-query-selector": "off",
    "unicorn/filename-case": "off",
    "react-hooks/rules-of-hooks": "error",
    "no-empty-function": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/array-type": "off",
    "tailwindcss/classnames-order": "off",
    "no-undef": "off",
    "tailwindcss/no-custom-classname": "off",
    "sonarjs/table-header": "off",
    "jsx-a11y/heading-has-content": "off",
  },
});