/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'], // 包含的内容
  theme: {
    extend: {
      width: {
        15: '3.75rem',
        50: '12.5rem'
      },
      maxWidth: {
        50: '12.5rem'
      },
      height: {
        5.5: '1.375rem'
      }
    }
  },
  plugins: []
}
