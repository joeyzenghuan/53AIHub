/** @type {import('tailwindcss').Config} */
// 换算比例：
// 1 = 0.25rem; // 4px
// 2 = 0.5rem; // 8px
// 3 = 0.75rem; // 12px
// 4 = 1rem; // 16px
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'], // 包含的内容
  theme: {
    extend: {
      width: {
        15: '3.75rem',
        50: '12.5rem',
        63: '3.9375rem'
      },
      maxWidth: {
        50: '12.5rem'
      },
      height: {
        5.5: '1.375rem'
        // 这里源码有内置14尺寸，最好不要重新自定义，避免影响其他地方使用
        // 14: '0.875rem'
      },
      borderWidth: {
        0.75: '0.1875rem'
      },
      margin: {
        7.5: '1.875rem'
      }
    }
  },
  plugins: []
}
