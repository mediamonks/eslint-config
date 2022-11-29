// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['@mediamonks/eslint-config-react', '@mediamonks/eslint-config-typescript'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['variable', 'function'],
        format: ['StrictPascalCase', 'strictCamelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['StrictPascalCase'],
        custom: {
          regex: '^[A-Z]{2}',
          match: false,
        },
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
  },
};
