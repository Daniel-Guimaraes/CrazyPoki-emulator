import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000C24',
        secondary: '#1876FC',
      },

      backgroundColor: {
        primary: '#080d1c',
        app: '#004225',
      },

      animation: {
        app: 'dataOpacity 0.5s linear',
      },

      keyframes: {
        dataOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
