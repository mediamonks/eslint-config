module.exports = {
  extends: [
    "airbnb-base",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier", // required to disable eslint rules that affect prettier formatting
  ],
  plugins: ["import", "unicorn", "babel"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    require: true,
    process: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // this is the same rule configuration as in `eslint-config-airbnb`
    // with the `ForOfStatement` selector omitted, as using `for ... of` statements in modern browsers is fine
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",

        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",

        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/indent": "off",
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
        format: ["strictCamelCase", "UPPER_CASE"],
      },
      {
        selector: "enumMember",
        format: ["StrictPascalCase"],
      },
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-readonly": "error",
    camelcase: "off",
    "babel/no-unused-expressions": "error",
    "default-case": "error",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        hbs: "never",
        vue: "never",
      },
    ],
    "import/no-unresolved": "error",
    "import/order": ["error", { groups: ["external", "builtin", ["sibling", "parent"]] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx",
          "**/test-utils/**/*.ts",
        ],
      },
    ],
    "lines-between-class-members": "off",
    "max-lines": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-extra-boolean-cast": "off",
    "no-plusplus": "off",
    "no-restricted-properties": [
      "error",
      { object: "document", property: "querySelector" },
      { object: "document", property: "querySelectorAll" },
      { object: "window", property: "outerWidth", message: "Did you mean to use `innerWidth` ?" },
      { object: "window", property: "outerHeight" },
    ],
    "no-undef": "off", // TypeScript already handles this
    "no-underscore-dangle": "error",
    "no-unused-expressions": "off",
    "react/static-property-placement": "off",
    "unicorn/catch-error-name": "error",
    "unicorn/custom-error-definition": "off",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-exponentiation-operator": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        checkDefaultAndNamespaceImports: false,
        checkShorthandImports: false,
        replacements: {
          ref: false,
          refs: false,
          prop: false,
          props: false,
          src: false,
          param: false,
          params: false,
          args: false,
          elm: {
            element: true,
          },
        },
        allowList: {
          attr: true,
          argTypes: true,
        },
        checkProperties: true,
      },
    ],
    "unicorn/throw-new-error": "error",
    // prettier handles these
    "object-curly-newline": "off",
    "max-len": "off",
  },
};
