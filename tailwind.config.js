/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          warm: {
            100: '#FFF8F1',
            200: '#FEEBCB',
            300: '#FBD38D',
            400: '#F6AD55',
            500: '#ED8936',
          },
        },
      },
    },
    plugins: [],
  }
  