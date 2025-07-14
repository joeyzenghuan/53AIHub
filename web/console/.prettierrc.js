module.exports = {
  // 基础配置
  singleQuote: true,
  semi: false,
  printWidth: 100,
  trailingComma: 'none',

  // Vue 模板特殊配置
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'ignore',

  // 属性格式化配置
  singleAttributePerLine: false, // 不强制每个属性一行

  // 针对不同文件类型的配置
  overrides: [
    {
      files: '*.vue',
      options: {
        // Vue 文件特殊配置
        printWidth: 200, // Vue 文件允许更长的行，防止属性被强制换行
        htmlWhitespaceSensitivity: 'ignore', // 忽略 HTML 空白符敏感性
        vueIndentScriptAndStyle: false, // 不缩进 script 和 style 标签

        // 禁用 Vue 模板格式化，保持原有缩进
        singleAttributePerLine: false,
        bracketSameLine: true, // 保持 > 符号在同一行

        // 保持原有格式
        proseWrap: 'preserve', // 保持原有的换行
        useTabs: false,
        tabWidth: 2,

        // 重要：禁用 HTML 格式化
        parser: 'vue',
        htmlWhitespaceSensitivity: 'strict' // 严格保持空白符
      }
    },
    {
      files: ['*.js', '*.ts'],
      options: {
        printWidth: 100
      }
    },
    {
      files: ['*.json'],
      options: {
        printWidth: 80
      }
    }
  ]
}
