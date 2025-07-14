/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    // Vue 相关规则
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-dupe-keys': 'off', // 允许重复的键
    'vue/no-v-html': 'off', // 允许 v-html 指令
    'vue/no-mutating-props': 'off', // 允许修改 props
    'vue/no-parsing-error': 'off', // 允许解析错误
    'vue/valid-attribute-name': 'off', // 允许任意属性名
    'vue/max-attributes-per-line': 'off', // 关闭每行最大属性数限制
    'vue/singleline-html-element-content-newline': 'off', // 关闭单行元素内容换行规则
    'vue/multiline-html-element-content-newline': 'off', // 关闭多行元素内容换行规则
    'vue/html-closing-bracket-newline': 'off', // 关闭标签结束括号换行规则
    'vue/html-self-closing': 'off', // 关闭自闭合标签规则
    'vue/html-indent': 'off', // 关闭 HTML 缩进规则，保持原有缩进
    'vue/first-attribute-linebreak': 'off', // 关闭首个属性换行规则
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ], // 强制组件标签顺序：template -> script -> style

    // Airbnb 规则调整
    'import/no-extraneous-dependencies': 'off', // 关闭该规则，让 TypeScript 处理
    'import/no-unresolved': 'off', // 由 TypeScript 处理
    'import/extensions': 'off', // 关闭文件扩展名检查
    'import/prefer-default-export': 'off', // 允许非默认导出
    camelcase: 'off', // 关闭驼峰命名检查
    'no-restricted-syntax': 'off', // 允许 for...of 等语法
    'no-underscore-dangle': 'off', // 允许下划线命名
    'no-nested-ternary': 'off', // 允许嵌套三元运算符
    'no-plusplus': 'off', // 允许 ++ 和 -- 操作符
    'max-classes-per-file': 'off', // 允许每个文件多个类
    'class-methods-use-this': 'off', // 类方法不必使用 this
    'no-useless-escape': 'off', // 允许看似无用的转义
    'default-case': 'off', // switch 语句不必有 default
    'no-case-declarations': 'off', // 允许在 case 中声明变量
    'no-new': 'off', // 允许 new 操作符的副作用
    'no-return-await': 'off', // 允许 return await
    'no-empty': 'off', // 允许空的代码块
    // 其他常用规则调整
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off', // 关闭行长度限制
    'object-curly-newline': ['error', { consistent: true }],
    'function-paren-newline': ['error', 'consistent'],

    // Prettier 相关规则
    'prettier/prettier': 'off' // 关闭 prettier 检查，避免与 ESLint 冲突
  }
}
