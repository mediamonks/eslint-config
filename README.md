# Monks - eslint Configuration

The Monks ESLint Configuration is a set of linting rules and presets designed to enforce the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards) at Monks. This
configuration helps maintain code quality and consistency across different projects by providing
tailored presets for various project types, including JavaScript, TypeScript, and React.

## Quickstart

1. Install `@mediamonks/eslint-config`

```sh
npm install --save-dev @mediamonks/eslint-config
```

2. Create a `eslint.config.js` file in the root of your module

3. Configure your project with one of the configuration presets

## Examples

The package provides four presets tailored for different project types. These presets ensure that
your project adheres to the coding standards and best practices. Below are examples of how to
configure your project using these presets.

### For projects with JavaScript

```js
import { configs } from '@mediamonks/eslint-config';

export default [
  {
    ignores: ['build/*'],
  },
  ...configs.JavaScript,
  {
    languageOptions: {
      // Your project language options...
      // Please see the eslint/typescript-eslint documentation for more details
    },
  },
];
```

### For projects with JavaScript and React

```js
import { configs } from '@mediamonks/eslint-config';

export default [
  {
    ignores: ['build/*'],
  },
  ...configs.javascriptReact,
  {
    languageOptions: {
      // Your project language options...
      // Please see the eslint/typescript-eslint documentation for more details
    },
  },
];
```

### For projects with TypeScript

```js
import { configs } from '@mediamonks/eslint-config';

export default [
  {
    ignores: ['build/*'],
  },
  ...configs.typescript,
  {
    languageOptions: {
      // Your project language options...
      // Please see the eslint/typescript-eslint documentation for more details
    },
  },
];
```

### For projects with TypeScript and React

```js
import { configs } from '@mediamonks/eslint-config';

export default [
  {
    ignores: ['build/*'],
  },
  ...configs.typescriptReact,
  {
    languageOptions: {
      // Your project language options...
      // Please see the eslint/typescript-eslint documentation for more details
    },
  },
];
```
