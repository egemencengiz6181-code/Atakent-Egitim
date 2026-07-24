/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Marka mavileri — logodan türetildi (∞ gradient)
        navy: {
          DEFAULT: '#0B2A5B',
          50: '#eef4fc',
          100: '#d7e5f7',
          200: '#aecbef',
          300: '#7ea9e2',
          400: '#4a80cf',
          500: '#2a5fb0',
          600: '#1c4a92',
          700: '#153b78',
          800: '#0f2f61',
          900: '#0B2A5B',
          950: '#061a3c',
        },
        royal: '#1E5AA8',
        sky: '#2E8BE6',
        azure: '#4DA3E8',
        gold: '#F5B301',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 42, 91, 0.25)',
        glow: '0 0 60px -15px rgba(46, 139, 230, 0.55)',
        card: '0 24px 60px -24px rgba(11, 42, 91, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
}
