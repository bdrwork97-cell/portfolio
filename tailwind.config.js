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
        holo: {
          bg: '#eef6fc',
          panel: 'rgba(255,255,255,0.85)',
          border: 'rgba(0, 120, 212, 0.18)',
          glow: 'rgba(0, 120, 212, 0.25)',
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
        'holo-shine': 'holo-shine 4s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'hero-name-shimmer-sweep': 'hero-name-shimmer-sweep 7s ease-in-out infinite',
        'hero-name-hud-pulse': 'hero-name-hud-pulse 4s ease-in-out infinite',
        'hero-name-orbit-spin': 'hero-name-orbit-spin 28s linear infinite',
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
        'holo-shine': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'hero-name-shimmer-sweep': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'hero-name-hud-pulse': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        'hero-name-orbit-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'neon-azure': '0 0 20px rgba(80, 230, 255, 0.15), 0 0 40px rgba(0, 120, 212, 0.08)',
        'neon-azure-lg': '0 0 30px rgba(80, 230, 255, 0.2), 0 0 60px rgba(0, 120, 212, 0.12)',
      },
    },
  },
  plugins: [],
};
