# @mediamonks/eslint-config-base [![npm version](https://badge.fury.io/js/%40mediamonks%2Feslint-config-base.svg)](https://badge.fury.io/js/%40mediamonks%2Feslint-config-base)

This package provides a Base TypeScript eslint configuration as an extensible shared config, based on the [MediaMonks Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration has a number of peer dependencies that must be installed.

```bash
npm i --dev @mediamonks/eslint-config-base
```

**Note for `yarn` users**: `yarn` does not install peer dependencies by default, this can be supplemented with `install-peerdeps`.

```bash
npx install-peerdeps --dev @mediamonks/eslint-config-base
```

## Usage

Now you can add `@mediamonks/eslint-config-base` to your `.eslintrc`. Adding `parserOptions.project` is only required if your project is using TypeScript.

```js
{
  "extends": "@mediamonks/eslint-config-base",
  "parserOptions": {
    "project": "./tsconfig.json" // can also be an array, if multiple `tsconfig.json` are present
  }
}

```
