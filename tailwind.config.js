/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'Primary01': '#0B384B',
          'Primary02': '#10516C',
          'Primary03': '#097275',
          'Secondary': '#F8F9FA',
          'Accent': '#E2AD39',
          'Black': '#212429',
          'Gray04': '#495057',
          'Gray03': '#ACB5BD',
          'Gray02': '#DDE2E5',
          'Gray01': '#F8F9FA',
          'Background': '#FFFAE5',
          'Pass': '#25BC16',
          'Unpass': '#FA695E',
          'Empty': '#7E7E7E',
        },
      },
    },
    plugins: [],
  }