/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o modo escuro manual
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Certifique-se de importar a fonte no CSS
      },
      colors: {
        primary: {
          400: '#818cf8', // Indigo soft
          500: '#6366f1', // Indigo standard
          600: '#4f46e5', // Indigo deep
        },
        dark: {
          bg: '#0f172a', // Slate 900
          card: '#1e293b', // Slate 800
        }
      }
    },
  },
  plugins: [],
}