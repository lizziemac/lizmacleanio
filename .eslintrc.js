module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    "project": ["tsconfig.json"]
  },
  plugins: [
    "@typescript-eslint",
    //"jsx-a11y"
  ],
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    //"plugin:jsx-a11y/recommended"
  ],
  rules: {
    // When adding any new linting rules please follow the by-Alphabetical order already established.
    //ESLint-basic rules
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
    "indent": ["error", 2],
    "linebreak-style": 1,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "no-var": "error",
    "no-trailing-spaces": "warn",
    "object-shorthand": ["error", "always"],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false}],
    "prettier/prettier": 0,
    "prefer-const": "error",
    "prefer-spread": "error",
    "quotes": ["error", "single"],
    "semi": [2, "always"],
    //@Typescript rules
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    /* @jsx-a11y rules
    // RULES reference: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/html-has-lang": "warn",
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ]
    */

  }
};