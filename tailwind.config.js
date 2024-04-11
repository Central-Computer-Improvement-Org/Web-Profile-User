/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      "mainPrimary": "#2F67B4",
      "secondPrimary": "#11A950",
      "mainFontColor": "#6B6B6B",
      "bluePallete": {
        100: "#eaf0f8",
        200: "#e0e8f4",
        300: "#bfd0e8",
        400: "#2a5da2",
        500: "#265290",
        600: "#234d87",
        700: "#1c3e6c",
        800: "#152e51",
        900: "#10243f",
      },
      "greenPallete": {
        100: "#e7f6ee",
        200: "#dbf2e5",
        300: "#b5e4c9",
        400: "#0f9848",
        500: "#0e8740",
        600: "#0d7f3c",
        700: "#0a6530",
        800: "#084c24",
        900: "#063b1c",
      },
    },
    backgroundColor: {
      "mainPrimary": "#2F67B4",
      "secondPrimary": "#11A950",
      "bluePallete": {
        100: "#eaf0f8",
        200: "#e0e8f4",
        300: "#bfd0e8",
        400: "#2a5da2",
        500: "#265290",
        600: "#234d87",
        700: "#1c3e6c",
        800: "#152e51",
        900: "#10243f",
      },
      "greenPallete": {
        100: "#e7f6ee",
        200: "#dbf2e5",
        300: "#b5e4c9",
        400: "#0f9848",
        500: "#0e8740",
        600: "#0d7f3c",
        700: "#0a6530",
        800: "#084c24",
        900: "#063b1c",
      },
    },
    boxShadow: {
      'shadowNav': '10px 0px 5px 1px #bfd0e8'
    },
    backgroundImage: {
        gradientDefault: "linear-gradient(150deg, rgba(191, 208, 232, 1) 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0) 70%, rgba(191, 208, 232, 1) 120%)",
        gradientAccent: "linear-gradient(-110deg, rgba(219, 242, 229, 1) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 70%, rgba(219, 242,229,1)100%)",
    },
  },
};

export const plugins = [];
