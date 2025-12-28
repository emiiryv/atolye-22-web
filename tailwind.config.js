/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          // Arka plan
          atelierBg: '#3B3B3B',
          // Kartlar için biraz daha koyu gri
          atelierCard: '#262626',
          // Accent (eski kırmızı yerine geçecek)
          atelierAccent: '#4F6043',
        },
      },
    },
    plugins: [],
  };