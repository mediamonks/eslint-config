# yarn

This project uses [yarn v2](https://yarnpkg.com/getting-started/usage) and its [workspaces](https://yarnpkg.com/features/workspaces) feature.

This allows us to easily handle multiple packages in the same repository.

The root `package.json` isn't mean to be published and is used to _wrap_ around the `packages` folder, which contains all of the actual publishable packages.

Each non-base package depends on the [eslint-config-base]("./packages/eslint-config-base") package, on publish `yarn` will replace the `workspace:*` versions with proper version numbers.
