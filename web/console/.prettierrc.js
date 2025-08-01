module.exports = {
  // 基础配置
  singleQuote: true,
  semi: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // Vue 相关配置
  vueIndentScriptAndStyle: false,
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: false,

  // 针对不同文件类型的配置
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        printWidth: 120,
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        singleAttributePerLine: false
      }
    },
    {
      files: ['*.js', '*.ts', '*.tsx'],
      options: {
        printWidth: 100,
        semi: false,
        singleQuote: true
      }
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        printWidth: 80,
        semi: false,
        singleQuote: false,
        trailingComma: 'none'
      }
    },
    {
      files: ['*.md', '*.markdown'],
      options: {
        printWidth: 80,
        proseWrap: 'preserve',
        singleQuote: false
      }
    },
    {
      files: ['*.css', '*.scss', '*.less'],
      options: {
        printWidth: 120,
        singleQuote: true
      }
    }
  ]
}
