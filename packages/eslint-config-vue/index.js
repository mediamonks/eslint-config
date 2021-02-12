module.exports = {
  extends: ["plugin:vue/vue3-recommended", require.resolve("@mediamonks/eslint-config-base")],
  parserOptions: {
    extraFileExtensions: [".vue"],
  },
  rules: {
    // taken from https://github.com/vuejs/eslint-config-airbnb
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      rules: {
        "prettier/prettier": ["off"],
        "max-len": ["off"],
      },
    },
    {
      files: ["shims-tsx.d.ts"],
      rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
