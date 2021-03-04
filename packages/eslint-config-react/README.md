# @mediamonks/eslint-config-react [![npm version](https://badge.fury.io/js/%40mediamonks%2Feslint-config-react.svg)](https://badge.fury.io/js/%40mediamonks%2Feslint-config-react)

This package provides a react TypeScript eslint configuration as an extensible shared config, based on the [Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Usage

The configuration requires eslint, Prettier and TypeScript to be installed. If you are starting a new project and haven't added these packages, then you can quickly add them using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```bash
npx install-peerdeps --dev @mediamonks/eslint-config-react

```

If you already have the packages installed or ran the above script, then you can proceed with adding the config itself.

```bash
npm install --save-dev @mediamonks/eslint-config-react

# OR

yarn add -D @mediamonks/eslint-config-react

```

Now you can add `@mediamonks/eslint-config-react` to your `.eslintrc`.

```js
{
  "extends": "@mediamonks/eslint-config-react"
}

```

**NOTE**: Depending on your project's use case, it might be required for you to specify your `tsconfig.json`.

```js
{
  "extends": "@mediamonks/eslint-config-react",
  "parserOptions": {
    "project": "./tsconfig.json" // can also be an array, if multiple `tsconfig.json` are present
  }
}

```
