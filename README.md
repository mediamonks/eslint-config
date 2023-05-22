# Media.Monks - eslint Configuration

The official Media.Monks eslint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

| Package                                      | Version                                                                                                                                      | Downloads                                                                     |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `@mediamonks/eslint-config`                  | [![](https://img.shields.io/npm/v/@mediamonks/eslint-config)](https://npmjs.com/@mediamonks/eslint-config)                                   | ![](https://img.shields.io/npm/dm/@mediamonks/eslint-config)                  |
| `@mediamonks/eslint-config-react`            | [![](https://img.shields.io/npm/v/@mediamonks/eslint-config-react)](https://npmjs.com/@mediamonks/eslint-config-react)                       | ![](https://img.shields.io/npm/dm/@mediamonks/eslint-config-react)            |
| `@mediamonks/eslint-config-typescript`       | [![](https://img.shields.io/npm/v/@mediamonks/eslint-config-typescript)](https://npmjs.com/@mediamonks/eslint-config-typescript)             | ![](https://img.shields.io/npm/dm/@mediamonks/eslint-config-typescript)       |
| `@mediamonks/eslint-config-typescript-react` | [![](https://img.shields.io/npm/v/@mediamonks/eslint-config-typescript-react)](https://npmjs.com/@mediamonks/eslint-config-typescript-react) | ![](https://img.shields.io/npm/dm/@mediamonks/eslint-config-typescript-react) |
| `@mediamonks/eslint-plugin-react`            | [![](https://img.shields.io/npm/v/@mediamonks/eslint-plugin-react)](https://npmjs.com/@mediamonks/eslint-plugin-react)                       | ![](https://img.shields.io/npm/dm/@mediamonks/eslint-plugin-react)            |

## Installation

Installation and configuration in a project is super easy, follow the instructions for one of the
following project types.

- [For JavaScript projects](#for-javascript-projects)
- [For JavaScript projects using React](#for-javascript-projects-using-react)
- [For TypeScript projects](#for-typescript-projects)
- [For TypeScript projects using React](#for-typescript-projects-using-react)

### For JavaScript projects

Install the following package(s):

```sh
npm install --save-dev @mediamonks/eslint-config
```

Add the following configuration to your `package.json`

```json
"eslintConfig": {
  "overrides": [
    {
      "files": ["*.js"],
      "extends": [
         "@mediamonks/eslint-config"
      ]
    }
  ]
}
```

### For JavaScript projects using React

Install the following package(s):

```sh
npm install --save-dev \
  @mediamonks/eslint-config
  @mediamonks/eslint-config-react
```

Add the following configuration to your `package.json`

```json
"eslintConfig": {
  "overrides": [
    {
      "files": ["*.js"],
      "extends": [
         "@mediamonks/eslint-config"
      ]
    }
    {
      "files": ["*.jsx"],
      "extends": [
        "@mediamonks/eslint-config",
        "@mediamonks/eslint-config-react"
      ]
    }
  ]
}
```

### For TypeScript projects

Install the following package(s):

```sh
npm install --save-dev \
  @mediamonks/eslint-config \
  @mediamonks/eslint-config-typescript
```

Add the following configuration to your `package.json`

```json
"eslintConfig": {
  "overrides": [
    {
      "files": ["*.js"],
      "extends": [
         "@mediamonks/eslint-config"
      ]
    },
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": [
        "@mediamonks/eslint-config",
        "@mediamonks/eslint-config-typescript"
      ]
    }
  ]
}
```

### For TypeScript projects using React

Install the following package(s):

```sh
npm install --save-dev \
  @mediamonks/eslint-config \
  @mediamonks/eslint-config-react \
  @mediamonks/eslint-config-typescript \
  @mediamonks/eslint-config-typescript-react
```

Add the following configuration to your `package.json`

```json
"eslintConfig": {
  "overrides": [
    {
      "files": ["*.js"],
      "extends": [
         "@mediamonks/eslint-config"
      ]
    },
    {
      "files": ["*.jsx"],
      "extends": [
        "@mediamonks/eslint-config",
        "@mediamonks/eslint-config-react"
      ]
    },
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": [
        "@mediamonks/eslint-config",
        "@mediamonks/eslint-config-typescript"
      ]
    },
    {
      "files": ["*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": [
        "@mediamonks/eslint-config",
        "@mediamonks/eslint-config-react",
        "@mediamonks/eslint-config-typescript",
        "@mediamonks/eslint-config-typescript-react"
      ]
    }
  ]
}
```
