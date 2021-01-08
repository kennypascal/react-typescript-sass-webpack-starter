module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allow parsing of modern ECMAScript features
    sourceType: 'module', // Allow the use of imports
    project: './tsconfig.json',
  },
  extends: ["airbnb-typescript-prettier"],
  rules:
  {
    "no-console": ["warn", { allow: ["warn"] }],
    "react/jsx-props-no-spreading": [
      1,
      {
        "html": "ignore",
        "custom": "enforce"
      }
    ]
  }
};
