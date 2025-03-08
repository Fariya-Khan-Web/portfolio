/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

// module.exports = {
//   theme: {
//     screens: {
//       // xs: '400px', // Extra Small Breakpoint
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//     },
//   },
// };
