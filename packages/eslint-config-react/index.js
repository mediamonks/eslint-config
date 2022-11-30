// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * Overrides
     */
    'unicorn/prevent-abbreviations': [
      'error',
      {
        // Allow variables that end with `prop` or `props`
        ignore: [/props?/iu, /ref/iu],
      },
    ],

    /**
     * React
     */
    // 'react/boolean-prop-naming': 'error',
    // "react/default-props-match-prop-types": "error",
    'react/destructuring-assignment': 'error',
    // 'react/forbid-component-props': 'error',
    // "react/forbid-dom-props": "error",
    // "react/forbid-elements": "error",
    'react/forbid-foreign-prop-types': 'error',
    // "react/forbid-prop-types": "error",
    'react/function-component-definition': 'error',
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',

    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    // "react/no-invalid-html-attribute": "error",
    'react/no-multi-comp': 'error',
    'react/no-namespace': 'error',
    'react/no-redundant-should-component-update': 'error',
    // "react/no-set-state": "error",
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    // "react/prefer-exact-props": "error",
    // "react/prefer-read-only-props": "error",
    'react/prefer-stateless-function': 'error',
    // "react/require-default-props": "error",
    // "react/require-optimization": "error",
    // "react/self-closing-comp": "error",
    // 'react/sort-comp': 'error',
    // 'react/sort-prop-types': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },

  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        /**
         * React
         */
        'react/button-has-type': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-child-element-spacing': 'error',
        // "react/jsx-closing-bracket-location": "error",
        // "react/jsx-closing-tag-location": "error",
        'react/jsx-curly-brace-presence': 'error',
        // "react/jsx-curly-newline": "error",
        // "react/jsx-curly-spacing": "error",
        // "react/jsx-equals-spacing": "error",
        // "react/jsx-filename-extension": "error",
        // "react/jsx-first-prop-new-line": "error",
        'react/jsx-fragments': 'error',
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPrefix: 'on',
            eventHandlerPropPrefix: 'on',
            checkLocalVariables: true,
          },
        ],
        // "react/jsx-indent": "error",
        // "react/jsx-indent-props": "error",
        // "react/jsx-max-depth": "error",
        // "react/jsx-max-props-per-line": "error",
        'react/jsx-newline': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        // 'react/jsx-no-leaked-render': 'error',
        'react/jsx-no-literals': ['error', { ignoreProps: true }],
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'error',
        // 'react/jsx-one-expression-per-line': 'error',
        'react/jsx-pascal-case': 'error',
        // "react/jsx-props-no-multi-spaces": "error",
        // "react/jsx-props-no-spreading": "error",
        // 'react/jsx-sort-props': 'error',
        // "react/jsx-tag-spacing": "error",
        // "react/jsx-wrap-multilines": "error",

        /**
         * JSX A11y
         */
        'jsx-a11y/control-has-associated-label': 'error',
        'jsx-a11y/lang': 'error',
        // 'jsx-a11y/anchor-ambiguous-text': 'error',
        // 'jsx-a11y/prefer-tag-over-role': 'error',
      },
    },
  ],
};
