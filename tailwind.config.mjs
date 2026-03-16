/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#ec4899',
          sky: '#38bdf8',
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out forwards',
        'fade-up-delay-1': 'fadeUp 600ms ease-out 200ms forwards',
        'fade-up-delay-2': 'fadeUp 600ms ease-out 400ms forwards',
        'fade-up-delay-3': 'fadeUp 600ms ease-out 600ms forwards',
        'scale-in': 'scaleIn 800ms ease-out forwards',
      },
    },
  },
  plugins: [],
};
