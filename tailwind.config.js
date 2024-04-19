/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary01': '#0B384B',
          'primary02': '#10516C',
          'primary03': '#097275',
          'primary04': '#28799C',
          'accent': '#E2AD39',
          'stone01': '#F8F9FA',
          'stone02': '#DDE2E5',
          'stone03': '#ACB5BD',
          'stone04': '#495057',
          'stone05': '#212429',
          'cream': '#F4E9CD',
          'pass': '#25BC16',
          'unpass': '#FA695E',
          'empty': '#7E7E7E',
        },
        fontFamily: {
          'main': ['IBM Plex Sans Thai', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }