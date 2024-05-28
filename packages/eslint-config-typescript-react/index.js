import eslintConfig, { configs as baseConfigs } from '@mediamonks/eslint-config';
import eslintConfigReact, { configs as reactConfigs } from '@mediamonks/eslint-config-react';
import eslintConfigTypescript, {
  configs as typescriptConfigs,
} from '@mediamonks/eslint-config-typescript';

const recommended = {
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
  },
};

export const configs = {
  recommended,
};

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...eslintConfig,
  ...eslintConfigReact,
  ...eslintConfigTypescript,
  {
    files: ['**/*.tsx', '**/*.ctsx', '**/*.mtsx'],
    ...baseConfigs.recommended,
    ...reactConfigs.recommended,
    ...typescriptConfigs.recommended,
    ...recommended,
  },
];
