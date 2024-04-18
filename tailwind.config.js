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
          'Primary04': '#28799C',
          'Accent': '#E2AD39',
          'Gray01': '#F8F9FA',
          'Gray02': '#DDE2E5',
          'Gray03': '#ACB5BD',
          'Gray04': '#495057',
          'Gray05': '#212429',
          'Cream': '#F4E9CD',
          'Pass': '#25BC16',
          'Unpass': '#FA695E',
          'Empty': '#7E7E7E',
        },
      },
    },
    plugins: [],
  }