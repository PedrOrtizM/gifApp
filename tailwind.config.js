/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Incluye tus archivos JSX/TSX
    './node_modules/flowbite/**/*.js', // Si usas Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin') // Si usas Flowbite
  ],
}
