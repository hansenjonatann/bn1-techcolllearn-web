/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F99C19',
        secondary: '#F3F4F5'
      },
      
    },
  },
  plugins: [],
}

