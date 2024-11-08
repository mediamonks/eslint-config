/** @type {import('eslint').Linter.Config.rules} */
export const rules = {
  /**
   * Unicorn plugin
   */
  'unicorn/prevent-abbreviations': [
    'error',
    {
      // Allow variables that end with `prop` or `props`
      ignore: [/props?/iu, /ref/iu],
    },
  ],

  /**
   * React plugin
   */
  'react/button-has-type': 'error',
  'react/destructuring-assignment': 'error',
  'react/forbid-foreign-prop-types': 'error',
  'react/function-component-definition': 'error',
  'react/hook-use-state': 'error',
  'react/iframe-missing-sandbox': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-curly-brace-presence': 'error',
  'react/jsx-fragments': 'error',
  'react/jsx-handler-names': [
    'error',
    {
      eventHandlerPrefix: 'on',
      eventHandlerPropPrefix: 'on',
      checkLocalVariables: true,
    },
  ],
  'react/jsx-no-bind': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-literals': [
    'error',
    {
      ignoreProps: true,
    },
  ],
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/no-access-state-in-setstate': 'error',
  'react/no-adjacent-inline-elements': 'error',
  'react/no-array-index-key': 'error',
  'react/no-arrow-function-lifecycle': 'error',
  'react/no-danger': 'error',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-multi-comp': 'error',
  'react/no-namespace': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unsafe': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/no-unused-class-component-methods': 'error',
  'react/no-unused-prop-types': 'error',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': 'error',
  'react/prefer-stateless-function': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/state-in-constructor': ['error', 'never'],
  'react/static-property-placement': 'error',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',

  /**
   * JSX A11y plugin
   */
  'jsx-a11y/control-has-associated-label': 'error',
  'jsx-a11y/lang': 'error',
};
