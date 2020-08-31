// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme');

// parse npm config argumans
const argv = JSON.parse(process.env.npm_config_argv);

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
        alegreya: ['Alegreya', ...defaultTheme.fontFamily.serif]
      },

      fontSize: {
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
        '20/16': '1.25rem',
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

      colors: {
        primary: '#00b5e6', // iyi parti logo @ https://iyiparti.org.tr/Assets/KurumsalKimlik/Logo/iyi-mavi-dikey.zip
        secondary: '#ffd900', // iyi parti logo @ https://iyiparti.org.tr/Assets/KurumsalKimlik/Logo/iyi-mavi-dikey.zip

        // generated from http://scg.ar-ch.org
        'primary-100': '#b3efff', // lighten 40%
        'primary-200': '#80e4ff', // lighten 30%
        'primary-300': '#4dd9ff', // lighten 20%
        'primary-400': '#1aceff', // lighten 10%
        'primary-500': '#00b5e6',
        'primary-600': '#00a1cc', // darken 5%
        'primary-700': '#008db3', // darken 10%
        'primary-800': '#007999', // darken 15%
        'primary-900': '#006580', // darken 20%

        // generated from http://scg.ar-ch.org
        'secondary-100': '#fff7cc', // lighten 40%
        'secondary-200': '#fff099', // lighten 30%
        'secondary-300': '#ffe866', // lighten 20%
        'secondary-400': '#ffe133', // lighten 10%
        'secondary-500': '#ffd900',
        'secondary-600': '#e6c300', // darken 5%
        'secondary-700': '#b39800', // darken 15%
        'secondary-800': '#806d00', // darken 25%
        'secondary-900': '#4d4100', // darken 35%
      },

      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
      },

      inset: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
      },

      minHeight: theme => ({
        ...theme('spacing'),
      }),
    }
  },

  corePlugins: {
    container: false,
  },

  future: {
    removeDeprecatedGapUtilities: true,
  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'], // ['responsive', 'hover', 'focus']
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active'], // ['responsive', 'hover', 'focus']
    borderColor: ['responsive', 'hover', 'focus', 'active'], // ['responsive', 'hover', 'focus']
  },

  purge: {
    enabled: argv.original.indexOf('--purge') > -1,
    content: [
      './public/*.html',
      './src/**/*.jsx',
      './src/**/*.js'
    ],
  },
};
