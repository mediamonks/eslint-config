/**
 * @type {import('eslint').Linter.Config}
 */
export const rules = {
  /**
   * Possible Problems
   */
  'array-callback-return': 'error',
  'no-await-in-loop': 'error',
  'no-constant-binary-expression': 'error',
  'no-constructor-return': 'error',
  'no-duplicate-imports': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable-loop': 'error',
  'no-unused-private-class-members': 'error',
  'no-use-before-define': 'error',
  'require-atomic-updates': 'error',

  /**
   * Suggestions
   */
  'accessor-pairs': 'error',
  'arrow-body-style': ['error', 'as-needed'],
  camelcase: [
    'error',
    {
      properties: 'always',
    },
  ],
  'class-methods-use-this': 'error',
  'consistent-return': 'error',
  curly: 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'logical-assignment-operators': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-console': 'error',
  'no-div-regex': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty-function': 'error',
  'no-empty-static-block': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': 'off',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': [
    'error',
    {
      enforceInMethodNames: true,
      enforceInClassFields: true,
    },
  ],
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': 'error',
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'require-unicode-regexp': 'error',
  strict: ['error', 'never'],
  'symbol-description': 'error',
  yoda: 'error',

  /**
   * Unicorn
   */
  'unicorn/custom-error-definition': 'error',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/no-null': 'off',
  'unicorn/no-unused-properties': 'error',
  'unicorn/prefer-at': 'error',
  'unicorn/prefer-event-target': 'error',
  'unicorn/prefer-json-parse-buffer': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/require-post-message-target-origin': 'error',
  'unicorn/numeric-separators-style': [
    'error',
    {
      onlyIfContainsSeparator: true,
      number: {
        onlyIfContainsSeparator: false,
      },
    },
  ],

  /**
   * Import
   */
  // Helpful warnings
  'import/no-extraneous-dependencies': 'error',
  // 'import/no-mutable-exports': 'error', // Not compatible with ESLint 9
  'import/no-unused-modules': 'error',

  // Static analysis
  'import/no-absolute-path': 'error',
  'import/no-cycle': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-relative-packages': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',

  // Style guide
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-named-default': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
      },
      'newlines-between': 'never',
    },
  ],
};
