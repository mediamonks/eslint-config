import { RuleTester } from 'eslint';
import * as throttleHookCallback from './throttleHookCallback';

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6 },
});

ruleTester.run(`@mediamonks/react/${throttleHookCallback.name}`, throttleHookCallback.default, {
  valid: [
    {
      code: 'useResizeObserver({}, useRafCallback(() => {}));',
    },
    {
      code: 'useResizeObserver({}, useDebounceCallback(() => {}, 200));',
    },
    {
      code: 'useResizeObserver({}, useThrottleCallback(() => {}, 200));',
    },
  ],

  invalid: [
    {
      code: 'useResizeObserver({}, function() {});',
      errors: [{ message: 'Callback in hook should be throttled.' }],
    },
    {
      code: 'useResizeObserver({}, () => {});',
      errors: [{ message: 'Callback in hook should be throttled.' }],
    },
    {
      code: `
        function myFunction() {}
        useResizeObserver({}, myFunction);
      `,
      errors: [{ message: 'Callback in hook should be throttled.' }],
    },
    {
      code: `
        const myFunction = () => {};
        useResizeObserver({}, myFunction);
      `,
      errors: [{ message: 'Callback in hook should be throttled.' }],
    },
  ],
});
