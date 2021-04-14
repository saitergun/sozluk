/* eslint-disable camelcase */
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme');

const { NODE_ENV, npm_lifecycle_event } = process.env;

const PROD = NODE_ENV === 'production';

console.log('\ntailwind PROD =>', PROD, NODE_ENV);

const mode = npm_lifecycle_event === 'tw:watch' ? 'jit' : 'build';

module.exports = {
  mode,

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      // iyi parti logo @ https://iyiparti.org.tr/Assets/KurumsalKimlik/Logo/iyi-mavi-dikey.zip
      // https://javisperez.github.io/tailwindcolorshades/?primary=00b5e6&secondary=ffd900&alternative=54555A
      primary: {
        DEFAULT: '#00b5e6',
        50: '#f2fbfe',
        100: '#e6f8fd',
        200: '#bfedf9',
        300: '#99e1f5',
        400: '#4dcbee',
        500: '#00b5e6',
        600: '#00a3cf',
        700: '#0088ad',
        800: '#006d8a',
        900: '#005971',
      },

      secondary: {
        DEFAULT: '#ffd900',
        50: '#fffdf2',
        100: '#fffbe6',
        200: '#fff6bf',
        300: '#fff099',
        400: '#ffe44d',
        500: '#ffd900',
        600: '#e6c300',
        700: '#bfa300',
        800: '#998200',
        900: '#7d6a00',
      },

      alternative: {
        DEFAULT: '#54555A',
        50: '#f6f7f7',
        100: '#eeeeef',
        200: '#d4d5d6',
        300: '#bbbbbd',
        400: '#87888c',
        500: '#54555a',
        600: '#4c4d51',
        700: '#3f4044',
        800: '#323336',
        900: '#292a2c',
      },
    },

    fontSize: {
      '128/16': '8rem', // 9xl
      '96/16': '6rem', // 8xl
      '72/16': '4.5rem', // 7xl
      '60/16': '3.75rem', // 6xl
      '48/16': '3rem', // 5xl
      '36/16': '2.25rem', // 4xl

      '32/16': '2rem',
      '31/16': '1.938rem',
      '30/16': '1.875rem', // 3xl
      '29/16': '1.813rem',
      '28/16': '1.75rem',
      '27/16': '1.688rem',
      '26/16': '1.625rem',
      '25/16': '1.563rem',
      '24/16': '1.5rem', // 2xl
      '23/16': '1.438rem',
      '22/16': '1.375rem',
      '21/16': '1.313rem',
      '20/16': '1.25rem', // xl
      '19/16': '1.188rem',
      '18/16': '1.125rem', // lg
      '17/16': '1.063rem',

      '16/16': '1rem', // base
      '15/16': '.938rem',
      '14/16': '.875rem', // sm
      '13/16': '.813rem',
      '12/16': '.75rem', // xs
      '11/16': '.688rem',
      '10/16': '.625rem',
      '9/16': '.563rem',
      '8/16': '.5rem',
      '7/16': '.438rem',
      '6/16': '.375rem',
      '5/16': '.313rem',
      '4/16': '.25rem',
      '3/16': '.188rem',
      '2/16': '.125rem',
      '1/16': '.063rem',
    },

    extend: {
      borderColor: {
        DEFAULT: '#eeeeef', // alternative-100
        // DEFAULT: '#d4d5d6', // alternative-200
      },

      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        sen: ['Sen', ...defaultTheme.fontFamily.sans],
        enriqueta: ['Enriqueta', ...defaultTheme.fontFamily.serif],
        podkova: ['Podkova', ...defaultTheme.fontFamily.serif],
      },

      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        120: '30rem',
      },

      zIndex: {
        1: '1',
      },

      minHeight: (theme) => ({
        ...theme('spacing'),
      }),

      minWidth: (theme) => ({
        ...theme('spacing'),
      }),

      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),

      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },

  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
      ringWidth: ['active'],
    },
  },

  purge: {
    enabled: PROD,

    content: [
      './public/**/*.html',
      './src/**/*.{js,jsx}',
    ],

    options: {
      keyframes: true,
      variables: true,
      rejected: true,
    },
  },
};
