import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import * as parser from "@typescript-eslint/parser";
import jsxAlly from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";

export default [
	{
		files: ["**/*.{ts,tsx}"],
		ignores: ["dist", "**/*.config.ts", "src/components/ui/**/*"],
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
			"@typescript-eslint": tseslint,
			"react-hooks": reactHooks,
			"jsx-a11y": jsxAlly,
			"testing-library": testingLibrary,
			sonarjs: sonarjs,
			security: security,
			tailwindcss: tailwind,
			"@eslint/js": js,
			"@next/next": pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...tseslint.configs.strict.rules,
			...tseslint.configs.stylistic.rules,
			...reactHooks.configs.recommended.rules,
			...jsxAlly.configs.recommended.rules,
			...testingLibrary.configs["flat/react"].rules,
			...sonarjs.configs.recommended.rules,
			...security.configs.recommended.rules,
			...tailwind.configs.recommended.rules,
			...js.configs.recommended.rules,
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
	},
];
