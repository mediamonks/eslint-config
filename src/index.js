import eslint from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import typescriptEslint from 'typescript-eslint';
import { recommended as javascriptRecommended } from './javascript.js';
import { recommended as reactRecommended } from './react.js';
import { recommended as typescriptRecommended } from './typescript.js';
import { recommended as typescriptReactRecommended } from './typescriptReact.js';

/** @type {import('eslint').Linter.Config} */
const javascript = [
  {
    ...eslint.configs.recommended,
    name: '@mediamonks/eslint-config / eslint recommended configuration',
  },
  {
    ...eslintPluginImport.flatConfigs.recommended,
    name: '@mediamonks/eslint-config / eslint-plugin-import / recommended configuration',
  },
  {
    ...eslintPluginJsxA11y.flatConfigs.recommended,
    name: '@mediamonks/eslint-config / eslint-plugin-jsx-a11y / recommended configuration',
  },
  {
    ...eslintPluginUnicorn.configs['flat/recommended'],
    name: '@mediamonks/eslint-config / eslint-plugin-unicorn / recommended configuration',
  },
  {
    ...javascriptRecommended,
    name: '@mediamonks/eslint-config / javascript recommended configuration',
  },
];

/** @type {import('eslint').Linter.Config} */
const react = [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    name: '@mediamonks/eslint-config / react settings',
  },
  {
    ...eslintPluginReact.configs.flat.recommended,
    name: '@mediamonks/eslint-config / eslint-plugin-react / recommended configuration',
  },
  {
    ...eslintPluginImport.flatConfigs.react,
    name: '@mediamonks/eslint-config / eslint-plugin-import / recommended react configuration',
  },
  {
    ...reactRecommended,
    name: '@mediamonks/eslint-config / react recommended configuration',
  },
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const typescript = [
  // Recommended plugin configurations
  ...typescriptEslint.configs.strictTypeChecked.map((config) => ({
    ...config,
    name: `@mediamonks/eslint-config / ${config.name}`,
  })),

  {
    ...eslintPluginImport.flatConfigs.typescript,
    files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
    name: '@mediamonks/eslint-config / eslint-plugin-import / .ts configuration',
  },
  {
    ...typescriptRecommended,
    files: ['**/*.ts', '**/*.cts', '**/*.mts'],
    name: '@mediamonks/eslint-config / typescript recommended configuration',
  },
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const typescriptReact = [
  {
    ...eslintPluginImport.flatConfigs.react,
    files: ['**/*.tsx'],
    name: '@mediamonks/eslint-config / eslint-plugin-import / .tsx configuration',
  },
  {
    ...typescriptReactRecommended,
    files: ['**/*.tsx'],
    name: '@mediamonks/eslint-config / typescript react recommended configuration',
  },
];

export const configs = {
  /** @type {import('eslint').Linter.Config} */
  javascript,
  /** @type {import('eslint').Linter.Config} */
  react: [...javascript, ...react],
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  typescript: [...javascript, ...typescript],
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  typescriptReact: [...javascript, ...react, ...typescript, ...typescriptReact],
};
