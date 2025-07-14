module.exports = {
  // TypeScript 和 JavaScript 文件
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Vue 文件
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],

  // CSS 和样式文件
  '*.{css,scss,sass,less,styl}': ['stylelint --fix', 'prettier --write'],

  // JSON 和配置文件
  '*.{json,md,yml,yaml}': ['prettier --write']
}
