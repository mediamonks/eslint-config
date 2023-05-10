import { type ESLint } from 'eslint';
import useThrottleFunction from './rules/throttleUseResizeObserverCallback';

export = {
  rules: {
    /* eslint-disable @typescript-eslint/naming-convention */
    'throttle-use-resize-observer-callback': useThrottleFunction,
    /* eslint-enable */
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@mediamonks/react'],
      rules: {
        /* eslint-disable @typescript-eslint/naming-convention */
        '@mediamonks/react/throttle-use-resize-observer-callback': 'error',
        /* eslint-enable */
      },
    },
  },
} satisfies ESLint.Plugin;
