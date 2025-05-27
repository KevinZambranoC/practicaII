import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {animation: {
      ripple: 'ripple 15s infinite',
    },
    keyframes: {
      ripple: {
        '0%': { transform: 'scale(0.8)' },
        '50%': { transform: 'scale(1.2)' },
        '100%': { transform: 'scale(0.8)' },
      }
    }},
  },
  plugins: [],
}

export default config
