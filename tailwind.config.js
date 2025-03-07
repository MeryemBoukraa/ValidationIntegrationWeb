/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],  
  theme: {
    extend: {
      colors: {
        'primary-blue': '#004A99',
        'secondary-blue': '#0062CA',
        'tertiary-blue': '#007BFF',
        'footer-blue': '#0A61BE',
      },
      fontFamily: {
        title: ['Young Serif', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(to right, #007BFF, #0062CA 26%, #004A99 50%)',
        'gradient-footer': 'linear-gradient(to right, #0A61BE, #0251A5 26%, #007BFF 50%)',
      },
      boxShadow: {
        'custom-light': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}