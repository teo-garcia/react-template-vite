import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.blue['600'],
        secondary: colors.blue['400'],
        black: colors.slate['800'],
        white: colors.slate['100'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
