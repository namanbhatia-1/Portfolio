module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alfa Slab One'],   
        Ubuntu: ['Ubuntu'],
        sans: ['"Ubuntu"', 'sans-serif'],
    },
    colors: {
        neon: '#D5FF00',
      },
      
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
