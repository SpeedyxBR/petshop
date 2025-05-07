/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C42',
        secondary: '#FFF5E1',
        accent: '#4A90E2',
      },
    },
  },
  plugins: [],
};