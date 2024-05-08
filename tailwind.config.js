/** @type {import('tailwindcss').Config} */
export const content = [
   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
   extend: {
      colors: {
         mainPrimary: '#2F67B4',
         secondPrimary: '#11A950',
         mainFontColor: '#6B6B6B',
         bluePallete: {
            100: '#eaf0f8',
            200: '#e0e8f4',
            300: '#bfd0e8',
            400: '#2a5da2',
            500: '#265290',
            600: '#234d87',
            700: '#1c3e6c',
            800: '#152e51',
            900: '#10243f',
         },
         greenPallete: {
            100: '#e7f6ee',
            200: '#dbf2e5',
            300: '#b5e4c9',
            400: '#0f9848',
            500: '#0e8740',
            600: '#0d7f3c',
            700: '#0a6530',
            800: '#084c24',
            900: '#063b1c',
         },
         division: {
            design: '#C56539',
            webdev: '#03349A',
            gamedev: '#323232',
            network: '#590995',
            data: '#29691F',
            media: '#EE383D',
         },
      },
      backgroundColor: {
         mainPrimary: '#2F67B4',
         secondPrimary: '#11A950',
         bluePallete: {
            100: '#eaf0f8',
            200: '#e0e8f4',
            300: '#bfd0e8',
            400: '#2a5da2',
            500: '#265290',
            600: '#234d87',
            700: '#1c3e6c',
            800: '#152e51',
            900: '#10243f',
         },
         greenPallete: {
            100: '#e7f6ee',
            200: '#dbf2e5',
            300: '#b5e4c9',
            400: '#0f9848',
            500: '#0e8740',
            600: '#0d7f3c',
            700: '#0a6530',
            800: '#084c24',
            900: '#063b1c',
         },
      },
      backgroundImage: {
         gradientCard: `linear-gradient(141deg, rgba(181,228,201,1) 0%, rgba(128,186,186,1) 100%, rgba(42,118,162,1) 100%)`,
         gradientDefault: `linear-gradient(160deg, rgba(191, 208, 232, 1) 0%, rgba(255, 255, 255, 0) 23%, rgba(255, 255, 255, 0) 70%, rgba(191, 208, 232, 1) 100%)`,
         gradientAccent: `linear-gradient(-110deg, rgba(219, 242, 229, 1) 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0) 70%, rgba(219, 242, 229, 1) 80%, rgba(219, 242, 229, 1) 100%)`,
      },
      boxShadow: {
         shadowNav: '10px 0px 5px 1px #bfd0e8',
      },
      dropShadow: {
         '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
         '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
         ]
      },
      fontSize: {
         h1: '56px',
         h2: '48px',
         h3: '40px',
         h4: '32px',
         h5: '24px',
         large: '20px',
         medium: '18px',
         normal: '16px',
         small: '14px',
      },
      animation: {
         'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
         'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
         },
      },
   },
};

export const plugins = [];
