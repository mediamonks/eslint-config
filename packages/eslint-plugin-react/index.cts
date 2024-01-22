import { type ESLint } from 'eslint';
import * as throttleCallback from './rules/throttleHookCallback';

export = {
  rules: {
    [throttleCallback.name]: throttleCallback.default,
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@mediamonks/react'],
      rules: {
        [`@mediamonks/react/${throttleCallback.name}`]: 'error',
      },
    },
  },
} satisfies ESLint.Plugin;
