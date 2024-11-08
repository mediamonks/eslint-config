import { configs } from './src/index.js';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...configs.javascript,
  {
    name: 'local configuration',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];
