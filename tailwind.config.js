/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'josefin-sans': '"Josefin Sans", sans-serif'
    },
    colors: {
      'light-background': '#FAFAFA',
      'dark-background': '#171823',
      'light-font': '#393A4B',
      'dark-font': '#C8CBE7'
    }
  },
  plugins: []
}
