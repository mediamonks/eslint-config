/** @type {import('eslint').Linter.Config['rules']} */
export const rules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'import',
      format: ['camelCase', 'PascalCase'],
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
    {
      selector: 'objectLiteralProperty',
      format: [],
      filter: {
        regex: '^--',
        match: true,
      },
    },
  ],
};
