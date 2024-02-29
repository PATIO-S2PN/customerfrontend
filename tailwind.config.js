/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    padding: {
      'custom': '100px',
    }, 
    borderRadius: {
      'custom': '40px',
    },  
  },
  plugins: [],
}
}
