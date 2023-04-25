/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['corporate'],
  },
  plugins: [require('daisyui')],
}
