# Media.Monks - eslint-config-typescript

The official Media.Monks eslint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration can be installed via `npm`.

```bash
npm install --dev @mediamonks/eslint-config-typescript
```

To inform eslint of this configuration, you have to add the `eslint` property to your `package.json`
file:

```json
"eslintConfig": {
   "extends": "@mediamonks/eslint-config-typescript"
}
```

Instead of manually editing your `package.json`, you can also utilize the `npm pkg` subcommand:

```bash
npm pkg set eslintConfig.extends=@mediamonks/eslint-config-typescript
```
