module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
    require.resolve("@mediamonks/eslint-config-base"),
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off", // no longer needed with the new JSX transform
    "react-hooks/exhaustive-deps": "error",
    "react/button-has-type": "error",
    "react/display-name": "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-wrap-multilines": "off",
    "react/no-array-index-key": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/void-dom-elements-no-children": "error",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["strictCamelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: "typeLike",
            format: ["StrictPascalCase"],
          },
          {
            selector: "variable",
            // Exception for FunctionComponents
            format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
          },
          {
            selector: "function",
            // Exception for FunctionComponents
            format: ["strictCamelCase", "StrictPascalCase"],
          },
          {
            selector: "enumMember",
            format: ["StrictPascalCase"],
          },
        ],
      },
    },
  ],
};
