/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        blackLight: 'rgba(0, 0, 0, 0.70)',
        blackLight300: 'rgba(19,19,19,0.60)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
