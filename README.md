# Media.Monks - eslint Configuration

The official Media.Monks eslint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration can be installed via `npm`.

```bash
npm install --dev @mediamonks/eslint-config
```

```bash
npm install --dev @mediamonks/eslint-config-react
```

```bash
npm install --dev @mediamonks/eslint-config-typescript
```

```bash
npm install --dev @mediamonks/eslint-config-typescript-react
```

To inform eslint of this configuration, you have to add the `eslint` property to your `package.json`
file:

```json
"eslintConfig": {
   "extends": "@mediamonks/eslint-config"
}
```

```json
"eslintConfig": {
   "extends": "@mediamonks/eslint-config-react"
}
```

```json
"eslintConfig": {
   "extends": "@mediamonks/eslint-config-typescript"
}
```

```json
"eslintConfig": {
   "extends": "@mediamonks/eslint-config-typescript-react"
}
```

Instead of manually editing your `package.json`, you can also utilize the `npm pkg` subcommand:

```bash
npm pkg set eslintConfig.extends=@mediamonks/eslint-config
```

```bash
npm pkg set eslintConfig.extends=@mediamonks/eslint-config-react
```

```bash
npm pkg set eslintConfig.extends=@mediamonks/eslint-config-typescript
```

```bash
npm pkg set eslintConfig.extends=@mediamonks/eslint-config-typescript-react
```
