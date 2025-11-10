import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#8C6A4F', // warm brown (artisan tone)
      secondary: '#D4B996', // light beige
      accent: '#E0C097', // subtle gold
      background: '#FAF7F2', // soft neutral background
      dark: '#2C2C2C', // text and contrast
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      display: ['Montserrat', 'sans-serif'],
    },
  },
},
  plugins: [],
};
export default config;
