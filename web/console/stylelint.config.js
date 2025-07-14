module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  rules: {
    // 禁用一些与 Tailwind CSS 冲突的规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
      }
    ],
    // 允许深度选择器
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ],
    // 允许 Vue 的 scoped 样式
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted']
      }
    ],
    // 自定义属性模式
    'custom-property-pattern': null,
    // 允许空的源文件
    'no-empty-source': null,
    // 字体族名称
    'font-family-no-missing-generic-family-keyword': null,
    // 选择器类名模式（允许 Element Plus 等库的类名）
    'selector-class-pattern': null,
    // 允许 @apply 规则（Tailwind CSS）
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply']
      }
    ],
    // 允许 CSS 常量（iOS 安全区域）
    'declaration-property-value-no-unknown': null,
    // 允许重复的选择器
    'no-duplicate-selectors': null,
    // 允许特异性降序（可能由于复杂的选择器结构）
    'no-descending-specificity': null,
    // 允许空的代码块
    'block-no-empty': null
  },
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    'build/**/*',
    'out/**/*',
    'src/renderer/public/libs/**/*',
    '**/*.min.css'
  ]
}
