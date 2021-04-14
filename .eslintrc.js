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
    'react/button-has-type': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-one-expression-per-line': 'off',
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
