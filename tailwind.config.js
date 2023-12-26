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
        primary: colors.amber['500'],
        secondary: colors.amber['600'],
        black: colors.slate['800'],
        white: colors.slate['100'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
