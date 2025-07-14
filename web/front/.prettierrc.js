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
        printWidth: 150, // Vue 文件允许更长的行，防止 v-if 等指令被强制换行
        htmlWhitespaceSensitivity: 'ignore', // 忽略 HTML 空白符敏感性
        vueIndentScriptAndStyle: false, // 不缩进 script 和 style 标签

        // 确保指令不会错误换行
        singleAttributePerLine: false,
        bracketSameLine: false, // 保持 > 符号在同一行

        // 额外的 Vue 配置
        proseWrap: 'preserve', // 保持原有的换行
        useTabs: false,
        tabWidth: 2
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
