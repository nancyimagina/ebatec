import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ebatec: {
          dark: '#000605',
          gold: {
            light: '#D2B866',
            base: '#B99A4A',
            medium: '#A6853D',
            dark: '#8F7335',
          },
        },
      },
      fontFamily: {
        sans: ['"Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        'whatsapp': '50',
        'navbar': '40',
      },
    },
  },
  plugins: [],
}

export default config