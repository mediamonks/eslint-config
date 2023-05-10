# Media.Monks - @mediamonks/eslint-plugin-react

## Installation

Install [ESLint](https://eslint.org/) and `@mediamonks/eslint-plugin-react`:

```sh
npm install --save-dev eslint @mediamonks/eslint-plugin-react
```

## Usage

Add `@mediamonks/eslint-plugin-react` to the plugins section of your ESLint configuration:

```json
{
  "plugins": ["@mediamonks/eslint-plugin-react"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@mediamonks/eslint-plugin-react/rule-name": 2
  }
}
```

Or use the recommended config

```json
{
  "extends": ["@mediamonks/eslint-plugin-react/recommended"]
}
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
💡 Manually fixable by
[editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

| Name                                                                                         | Description                                                 | 💼  | 💡  |
| :------------------------------------------------------------------------------------------- | :---------------------------------------------------------- | :-- | :-- |
| [throttle-use-resize-observer-callback](docs/rules/throttle-use-resize-observer-callback.md) | Callback function in useResizeObserver should be throttled. | ✅  | 💡  |

<!-- end auto-generated rules list -->
