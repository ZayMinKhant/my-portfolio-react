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
          primary: 'var(--color-primary)',
          accent: 'var(--color-accent)',
          text: {
            default: 'var(--color-text-default)',
            secondary: 'var(--color-text-secondary)',
          },
          background: {
            page: 'var(--color-background-page)',
            card: 'var(--color-background-card)',
          },
          border: 'var(--color-border)',
        },
      },
    },
    plugins: [],
  }
  