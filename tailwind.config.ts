import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        thunder: {
          pink: '#FA8CDA',
          'pink-soft': 'rgba(250, 140, 218, 0.10)',
          bg: '#000001',
          surface: '#161616',
          'surface-2': '#1f1f1f',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pink-glow': '0 10px 30px -10px rgba(250, 140, 218, 0.55)',
        'pink-glow-lg': '0 20px 60px -15px rgba(250, 140, 218, 0.65)',
      },
      backgroundImage: {
        'pink-fade': 'linear-gradient(91deg, #FFF 25.75%, #FA8CDA 70.14%)',
        'radial-pink':
          'radial-gradient(60% 60% at 50% 0%, rgba(250,140,218,0.18) 0%, rgba(0,0,1,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
