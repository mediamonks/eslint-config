import eslintConfig from '@mediamonks/eslint-config';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...eslintConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
