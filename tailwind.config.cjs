/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f1120',
        muted: '#5d5f75',
        accent: '#6d63ce',
        'accent-soft': 'rgba(109, 99, 206, 0.12)',
        border: '#e7e8f2',
        surface: '#f6f7fb',
      },
      fontFamily: {
        body: ['Geist', 'Instrument Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Instrument Serif', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
      boxShadow: {
        elevated: '0 22px 64px rgba(15, 17, 32, 0.12)',
        soft: '0 14px 32px rgba(15, 17, 32, 0.08)',
        button: '0 8px 24px rgba(109, 99, 206, 0.22)',
        'button-hover': '0 12px 28px rgba(109, 99, 206, 0.28)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease both',
        marquee: 'marquee 30s linear infinite',
      },
      borderRadius: {
        md: '10px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}
