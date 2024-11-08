import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import typescriptEslint from 'typescript-eslint';
import { rules as javascriptRules } from './javascript.js';
import { rules as reactRules } from './react.js';
import { rules as typescriptRules } from './typescript.js';
import { rules as typescriptReactRules } from './typescriptReact.js';

/** @type {import('eslint').Linter.Config} */
const javascript = [
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...eslintPluginImport.flatConfigs.recommended.rules,
      ...eslintPluginJsxA11y.flatConfigs.recommended.rules,
      ...eslintPluginUnicorn.configs['flat/recommended'].rules,
      ...javascriptRules,
    },
    name: '@mediamonks/eslint-config / javascript configuration',
  },
];

/** @type {import('eslint').Linter.Config} */
const react = [
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      react: eslintPluginReact,
      unicorn: eslintPluginUnicorn,
      a11y: eslintPluginJsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginImport.flatConfigs.react.rules,
      ...reactRules,
    },
    name: '@mediamonks/eslint-config / react configuration',
  },
  {
    files: ['**/routes/**/*'],
    rules: {
      'unicorn/filename-case': 'off',
    },
    name: '@mediamonks/eslint-config / react configuration / file based routing',
  },
];

/** @type {import('eslint').Linter.Config} */
const storybook = [
  ...eslintPluginStorybook.configs['flat/recommended'],
  {
    rules: {
      'react/jsx-no-literals': 'off',
    },
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
    name: `@mediamonks/eslint-config / storybook`,
  },
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const typescript = [
  ...typescriptEslint.configs.strict,
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      ...eslintPluginImport.flatConfigs.typescript.rules,
      ...typescriptRules,
    },
    name: '@mediamonks/eslint-config / typescript configuration',
  },
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const typescriptReact = [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/extensions': ['.ts', '.tsx', '.mts', '.cts'],
    },
    rules: typescriptReactRules,
    name: '@mediamonks/eslint-config / typescript react configuration',
  },
];

/** @type {import('eslint').Linter.Config} */
const overrides = [
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/no-unresolved': 'off',
    },
    name: '@mediamonks/eslint-config / overrides',
  },
];

/** @type {import('eslint').Linter.Config} */
const base = [
  eslintPluginSecurity.configs.recommended,

  ...javascript,

  // The ESLint Prettier config will disable rules that conflict with the Prettier code style
  eslintConfigPrettier,
];

export const configs = {
  /** @type {import('eslint').Linter.Config} */
  javascript: [...base, ...overrides],
  /** @type {import('eslint').Linter.Config} */
  react: [...base, ...react, ...storybook, ...overrides],
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  typescript: [...base, ...typescript, ...overrides],
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  typescriptReact: [
    ...base,
    ...typescript,
    ...typescriptReact,
    ...react,
    ...storybook,
    ...overrides,
  ],
};
