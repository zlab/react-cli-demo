// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  // add your custom rules here 0/off, 1/warn, 2/error
  rules: {
    'no-empty': 0,
    'no-var': 2,
    'no-alert': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-unused-vars': 1,
    'eqeqeq': 2,
    'space-infix-ops': 2, // 1++2
    'brace-style': 2, // if/else
    'semi': [1, 'always'],
    'quotes': [0, 'single'],
    'comma-spacing:': [0, { 'before': false, 'after': false }],
    'no-debugger': 2,
    'no-case-declarations': 0,
    'no-extra-boolean-cast': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
