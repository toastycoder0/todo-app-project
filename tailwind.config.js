/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'josefin-sans': '"Josefin Sans", sans-serif'
    },
    colors: {
      blue: '#3A7CFD',
      black: '#26273D',
      white: '#FFF',
      'light-gray': '#D1D2DA',
      'dark-gray': '#4D5067',
      'light-background': '#FAFAFA',
      'dark-background': '#171823',
      'light-font': '#393A4B',
      'dark-font': '#C8CBE7',
      'light-border': '#E3E4F1',
      'dark-border': '#393A4B'
    }
  },
  plugins: []
}
