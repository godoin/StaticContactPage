/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-shadow': {
          boxShadow: '0.3rem 0.3rem 0rem rgb(0, 0, 0)',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};
