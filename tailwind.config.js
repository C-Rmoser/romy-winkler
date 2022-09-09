module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
         'height': 'height',
      },
      fontFamily: {
        'WorkSans': ['WorkSans'],
        'Forum': ['Forum']
      },
      colors: {
        'background-black': '#222222',
        'petrol': {
            400: '#01779f',
            300: '#11AEE2',
            200: '#b3d9e6',
            100: '#d1e1e7',
            600: '#026B8E',
            700: '#004b63',
            800: '#003445',
          },
          'background-gray': '#3d495c'
      },
      backgroundImage: {
        'siegel-piercing': "url('/src/images/siegel-piercing-black.png')",
        'siegel-kosmetik': "url('/src/images/siegel-kosmetik-black.png')",
        'siegel-meisterbetrieb': "url('/src/images/siegel-meisterbetrieb-black.png')",
        'siegel-fusspflege': "url('/src/images/siegel-fusspflege-black.png')",
        'logo-fb': "url('/src/images/logo-facebook.png')",
        'logo-insta': "url('/src/images/logo-instagram.png')",
        'card-kosmetik': "url('/src/images/card-kosmetik.jpg')",
        'title-piercing': "url('/src/images/title-piercing.jpg')",
        'title-coaching': "url('/src/images/title-coaching.jpg')",
        'title-coaching2': "url('/src/images/title-coaching2.jpg')",
        'title-haarentfernung': "url('/src/images/title-haarentfernung.jpg')",
        'title-strahlende-augen': "url('/src/images/title-strahlende-augen.jpg')",
        'title-gesichtsbehandlungen': "url('/src/images/title-gesichtsbehandlungen.jpg')",
        'title-fusspflege': "url('/src/images/title-fusspflege.jpg')",
        'title-manikuere': "url('/src/images/title-manikuere.jpg')",
        'title-koerperbehandlungen': "url('/src/images/title-koerperbehandlungen.jpg')"
      },
      backgroundSize: {
        '30%': '30%',
        '50%': '50%',
        '70%': '70%',
      }
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      height: ['group-hover', 'hover'],
      rotate: ['group-hover'],
      block: ['group-hover'],
      position: ['hover'],
    },
  },
  plugins: [],
};
