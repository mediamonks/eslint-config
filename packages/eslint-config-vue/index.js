module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "prettier/vue",
    require.resolve("@mediamonks/eslint-config-base"),
  ],
  // the ts-eslint recommended ruleset sets the parser so we need to set it back
  parser: "vue-eslint-parser",
  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
  },
  overrides: [
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
