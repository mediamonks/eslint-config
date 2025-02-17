/**
 * @type {import('eslint').Linter.Config}
 */
export const rules = {
  /**
   * Conflicting rules
   */
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  /**
   * @typescript-eslint
   */
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowIIFEs: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
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
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/parameter-properties': [
    'error',
    {
      prefer: 'parameter-property',
    },
  ],
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};
