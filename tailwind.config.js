/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#e8f4fc',
          100: '#cce8ff',
          200: '#9fd4ff',
          300: '#50e6ff',
          400: '#3aa0f3',
          500: '#0078d4',
          600: '#005a9e',
          700: '#004578',
          800: '#003966',
          900: '#00188f',
        },
        ms: {
          gray: '#f3f2f1',
          'gray-dark': '#edebe9',
          text: '#323130',
          'text-secondary': '#605e5c',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"Segoe UI Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Cascadia Code"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        fluent: '4px',
        'fluent-lg': '8px',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
