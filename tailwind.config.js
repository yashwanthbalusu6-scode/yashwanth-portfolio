/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070a',
          900: '#0a0d12',
          800: '#11141b',
          700: '#1a1f29',
          600: '#262c3a',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          mint: '#5eead4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px 0 rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 30px 0 rgba(167, 139, 250, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 12s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
