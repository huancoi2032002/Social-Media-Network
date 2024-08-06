/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.5': '0.4rem',
        '3.5': '0.8rem',
        '70': '17rem',
        '2.5': '0.6rem',
        '15': '3.6rem',
        '29': '7rem',
        '30': '7.5rem',

        '45': '12rem',
        '90': '22rem',
        '110': '27rem',
        '120': '28.5rem',
        '121': '30.5rem',
        '122': '31.625rem',
        '123': '33.25rem',
        '124': '34.25rem',
        '125': '36.25rem',
        '130': '37rem',
        '140': '40rem',
        '150': '51rem',
        
      },
      colors: {
        backgroundButton: '#050505',
        colorTextSidebar: '#748791',
        colorSearch: '#EEF1F3',
        backgroundSearch: '#333D42',
        backgroundLoved: '#2A3236',
        backgroundProfileMenu: '#181C1F',
        backgroundScrollbar: {
          DEFAULT: '#0E1113',
          dark: '#0E1113',
        },
        backgroundNav: '#101214',
        backgroundPost: '#18191A',
        iconPublic: '#B0B3B8',
        bgButton:  'rgb(0, 149, 246)',
        colorPluss: 'rbg(168, 168, 168)',
      },
      fontSize: {
        'sz': '0.85rem',
        'sx': '0.8125rem'
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      height: {
        '0': '0',
        'auto': 'auto'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}