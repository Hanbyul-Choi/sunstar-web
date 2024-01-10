/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['var(--font-barlow)'],
      },
      backgroundColor: {
        'gradient-animation': 'var(--gradient-animation)',
      },
      keyframes: {
        changeBackgroundColor: {
          '0%': {backgroundColor: '#3490dc'},
          '50%': {backgroundColor: '#4caf50'},
          '100%': {backgroundColor: '#3490dc'},
        },
      },
    },
  },
  plugins: [],
};
