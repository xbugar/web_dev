import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import airbnbTypeScript from 'eslint-config-airbnb-typescript';
import * as prettierConfig from 'eslint-config-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss'; // Add Tailwind CSS plugin

export default tseslint.config(
  { ignores: ['dist'] },

  // Combined flat ESLint config
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      tailwindcss, // Add Tailwind CSS plugin
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic', // use new JSX transform
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      {
        plugins: { react },
        rules: { ...react.configs.recommended.rules },
      },
    ],
    rules: {
      // React core rules
      ...react.configs.recommended.rules,
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      // React Refresh rule
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Airbnb TypeScript rules
      ...airbnbTypeScript.rules,

      // Prettier integration (use .prettierrc)
      'prettier/prettier': 'error',

      // Disable old requirement to import React in JSX files
      'react/react-in-jsx-scope': 'off',

      'max-len': ['error', { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true }],

      // Tailwind CSS rules
      'tailwindcss/classnames-order': 'warn', // Enforce class name order
      'tailwindcss/no-custom-classname': 'off', // Allow custom class names
      'tailwindcss/no-contradicting-classname': 'error', // Prevent conflicting class names
    },
  },

  // Disable conflicting rules with Prettier
  prettierConfig.default,
);
