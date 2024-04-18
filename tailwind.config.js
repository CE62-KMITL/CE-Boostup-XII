/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'color01': '#0B384B',
          'color02': '#10516C',
          'color03': '#097275',
          'color04': '#F8F9FA',
          'color05': '#E2AD39',
        },
      },
    },
    plugins: [],
  }