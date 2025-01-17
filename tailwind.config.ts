import colors from 'tailwindcss/colors'

import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
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
  darkMode: ['class', '[data-prefers-color-scheme="dark"]'],
} satisfies Config
