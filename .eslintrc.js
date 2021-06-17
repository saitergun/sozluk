module.exports = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',

  env: {
    browser: true,
    jest: true,
  },

  rules: {
    'react/prop-types': 'off',
  },
};
