import { RuleTester } from 'eslint';
import throttleUseResizeObserverCallback from './throttleUseResizeObserverCallback';

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6 },
});

ruleTester.run(
  '@mediamonks/react/throttle-use-resize-observer-callback',
  throttleUseResizeObserverCallback,
  {
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
        errors: [{ message: 'Callback function in useResizeObserver should be throttled.' }],
      },
      {
        code: 'useResizeObserver({}, () => {});',
        errors: [{ message: 'Callback function in useResizeObserver should be throttled.' }],
      },
      {
        code: `
        function myFunction() {}
        useResizeObserver({}, myFunction);
      `,
        errors: [{ message: 'Callback function in useResizeObserver should be throttled.' }],
      },
      {
        code: `
        const myFunction = () => {};
        useResizeObserver({}, myFunction);
      `,
        errors: [{ message: 'Callback function in useResizeObserver should be throttled.' }],
      },
    ],
  },
);
