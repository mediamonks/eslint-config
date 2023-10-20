// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: ['unicorn', 'import'],
  rules: {
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
    // 'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    // 'capitalized-comments': 'error',
    'class-methods-use-this': 'error',
    // 'complexity': 'error',
    'consistent-return': 'error',
    // 'consistent-this': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    // 'func-name-matching': 'error',
    // 'func-names': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    // 'id-denylist': 'error',
    // 'id-length': 'error',
    // 'id-match': 'error',
    // 'init-declarations': 'error',
    'logical-assignment-operators': 'error',
    // 'max-classes-per-file': 'error',
    // 'max-depth': 'error',
    // 'max-lines': 'error',
    // 'max-lines-per-function': 'error',
    // 'max-nested-callbacks': 'error',
    // 'max-params': 'error',
    // 'max-statements': 'error',
    // 'multiline-comment-style': 'error',
    // 'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    // 'no-bitwise': 'error',
    'no-caller': 'error',
    // 'no-confusing-arrow': 'error',
    'no-console': 'error',
    // 'no-continue': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'error',
    'no-empty-static-block': 'error',
    // 'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // 'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    // 'no-label-var': 'error',
    'no-labels': 'error',
    // 'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          // ["+", "-", "*", "/", "%", "**"], This is disabled because of prettier
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    // 'no-plusplus': 'error',
    'no-proto': 'error',
    // 'no-restricted-exports': 'error'
    // 'no-restricted-globals': 'error'
    // 'no-restricted-imports': 'error'
    // 'no-restricted-properties': 'error'
    // 'no-restricted-syntax': 'error'
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    // 'no-ternary': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    // 'no-undefined': 'error',
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
    // 'no-warning-comments': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
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
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    // 'require-await': 'error',
    'require-unicode-regexp': 'error',
    // 'sort-imports': 'error',
    // 'sort-keys': 'error',
    // 'sort-vars': 'error',
    'spaced-comment': 'error',
    strict: ['error', 'never'],
    'symbol-description': 'error',
    // 'vars-on-top': 'error',
    yoda: 'error',

    /**
     * Layout & Formatting (handled by `prettier`)
     */
    // 'array-bracket-newline': 'error',
    // 'array-bracket-spacing': 'error',
    // 'array-element-newline': 'error',
    // 'arrow-parens': 'error',
    // 'arrow-spacing': 'error',
    // 'block-spacing': 'error',
    // 'brace-style': 'error',
    // 'comma-dangle': 'error',
    // 'comma-spacing': 'error',
    // 'comma-style': 'error',
    // 'computed-property-spacing': 'error',
    // 'dot-location': 'error',
    // 'eol-last': 'error',
    // 'func-call-spacing': 'error',
    // 'function-call-argument-newline': 'error',
    // 'function-paren-newline': 'error',
    // 'generator-star-spacing': 'error',
    // 'implicit-arrow-linebreak': 'error',
    // indent: 'error',
    // 'jsx-quotes': 'error',
    // 'key-spacing': 'error',
    // 'keyword-spacing': 'error',
    // 'line-comment-position': 'error',
    // 'linebreak-style': 'error',
    // 'lines-around-comment': 'error',
    // 'lines-between-class-members': 'error',
    // 'max-len': 'error',
    // 'max-statements-per-line': 'error',
    // 'multiline-ternary': 'error',
    // 'new-parens': 'error',
    // 'newline-per-chained-call': 'error',
    // 'no-extra-parens': 'error',
    // 'no-mixed-spaces-and-tabs': 'error',
    // 'no-multi-spaces': 'error',
    // 'no-multiple-empty-lines': 'error',
    // 'no-tabs': 'error',
    // 'no-trailing-spaces': 'error',
    // 'no-whitespace-before-property': 'error',
    // 'nonblock-statement-body-position': 'error',
    // 'object-curly-newline': 'error',
    // 'object-curly-spacing': 'error',
    // 'object-property-newline': 'error',
    // 'operator-linebreak': 'error',
    // 'padded-blocks': 'error',
    // 'padding-line-between-statements': 'error',
    // quotes: 'error',
    // 'rest-spread-spacing': 'error',
    // semi: 'error',
    // 'semi-spacing': 'error',
    // 'semi-style': 'error',
    // 'space-before-blocks': 'error',
    // 'space-before-function-paren': 'error',
    // 'space-in-parens': 'error',
    // 'space-infix-ops': 'error',
    // 'space-unary-ops': 'error',
    // 'switch-colon-spacing': 'error',
    // 'template-curly-spacing': 'error',
    // 'template-tag-spacing': 'error',
    // 'unicode-bom': 'error',
    // 'wrap-iife': 'error',
    // 'wrap-regex': 'error',
    // 'yield-star-spacing': 'error',

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
    // 'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    // 'unicorn/string-content': 'error',
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
    'import/no-deprecated': 'warn',
    // 'import/no-empty-named-blocks': 'error', -- enable when published
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',

    // Static analysis
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    // 'import/no-internal-modules': 'error',
    'import/no-relative-packages': 'error',
    // 'import/no-relative-parent-imports': 'error',
    // 'import/no-restricted-paths': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    // 'import/no-webpack-loader-syntax': 'error',

    // Style guide
    // 'import/consistent-type-specifier-style': 'error',
    // 'import/dynamic-import-chunkname': 'error',
    // 'import/exports-last': 'error',
    // 'import/extensions': 'error',
    'import/first': 'error',
    // 'import/group-exports': 'error',
    // 'import/max-dependencies': 'error',
    'import/newline-after-import': 'error',
    // 'import/no-anonymous-default-export': 'error',
    // 'import/no-default-export': 'error',
    'import/no-named-default': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    // 'import/no-named-export': 'error',
    // 'import/no-namespace': 'error',
    // 'import/no-unassigned-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    // 'import/prefer-default-export': 'error',
  },
};
