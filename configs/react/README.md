# @mediamonks/eslint-config-react [![npm version](https://badge.fury.io/js/%40mediamonks%2Feslint-config-vue.svg)](https://badge.fury.io/js/%40mediamonks%2Feslint-config-vue)

This package provides a React TypeScript eslint configuration as an extensible shared config, based on the [MediaMonks Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration has a number of peer dependencies that must be installed.

```bash
npm i --dev @mediamonks/eslint-config-react
```

**Note for `yarn` users**: `yarn` does not install peer dependencies by default, this can be supplemented with `install-peerdeps`. Because this config depends on [@mediamonks/eslint-config-base](../base/README.md), you will first have to install its peer dependencies.

```bash
npx install-peerdeps --dev --only-peers @mediamonks/eslint-config-base
npx install-peerdeps --dev @mediamonks/eslint-config-react
```

## Usage

Now you can add `@mediamonks/eslint-config-react` to your `.eslintrc`. Adding `parserOptions.project` is only required if your project is using TypeScript.

```js
{
  "extends": "@mediamonks/eslint-config-react",
  "parserOptions": {
    "project": "./tsconfig.json" // can also be an array, if multiple `tsconfig.json` are present
  }
}

```

### Formatting & Prettier

This eslint configuration purposely had its formatting rules disabled. We encourage to use [prettier](https://prettier.io/) for formatting using the [`@mediamonks/prettier-config`](https://github.com/mediamonks/prettier-config).
