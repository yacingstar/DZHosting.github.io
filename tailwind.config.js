/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-sans': ["Roboto", "sans-serif"],
        'roboto-serif': ["Roboto Serif", "serif"],
        'abril': ['"Abril Fatface"', 'sans-serif'],
      },
      colors: {
        primary: "#EEFBFB",
        secondary: "#555555",
        accent: "#33658A",
      },
      fontSize: {
        'h1': '2.5rem', // Adjust as needed
        'h2': '2rem',   // Adjust as needed
        'h3': '1.75rem', // Adjust as needed
        'h4': '1.5rem', // Adjust as needed
        'h5': '1.25rem', // Adjust as needed
        'h6': '1rem',   // Adjust as needed
        'body': '1rem', // Adjust as needed
      },
    },
  },
  plugins: [],
}

