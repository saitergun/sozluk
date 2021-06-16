module.exports = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',

  env: {
    browser: true,
  },

  rules: {
    'no-console': 'off',
    'arrow-body-style': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',

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
