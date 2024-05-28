import { configs } from './src/index.js';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  {
    ignores: ['src/index.js'],
  },
  ...configs.typescriptReact,
  {
    name: 'local configuration',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];
