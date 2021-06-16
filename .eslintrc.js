module.exports = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',

  env: {
    browser: true,
  },

  rules: {
    'no-console': 'off',

    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
  },
};
