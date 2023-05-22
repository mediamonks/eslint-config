# Callback in hook should be throttled (`@mediamonks/react/throttle-hook-callback`)

💼 This rule is enabled in the ✅ `recommended` config.

💡 This rule is manually fixable by
[editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

<!-- end auto-generated rule header -->

## Rule details

This rule enforces that the callback in a hook should be wrapped with a throttle function. By
default, the rule allows the following throttle functions:

- `useRafCallback`
- `useDebounceCallback`
- `useThrottleCallback`
- `throttle`
- `debounce`

## Examples

### Invalid

```js
useResizeObserver(elementRef, () => {
  // Resize logic
});
```

### Valid

```js
useResizeObserver(
  elementRef,
  useRafCallback(() => {
    // Resize logic
  }),
);
```

## Options

This rule has an optional object configuration:

- `hookNames`: An array of strings specifying custom hook names. Default hook names will be used if
  this option is not provided.
- `throttleFunctionNames`: An array of strings specifying custom throttle function names. Default
  throttle function names will be used if this option is not provided.

## Usage

This rule takes one optional object argument of type object:

```json
{
  "rules": {
    "@mediamonks/react/use-resize-observer-throttle-callback": [
      "error",
      {
        "hookNames": ["useCustomHook"],
        "throttleFunctionNames": ["customThrottleFunction"]
      }
    ]
  }
}
```

## Suggestions

This rule provides suggestions to automatically wrap the callback function with a throttle function:

1. Wrap with `useRafCallback`
2. Wrap with `useDebounceCallback`
3. Wrap with `useThrottleCallback`
