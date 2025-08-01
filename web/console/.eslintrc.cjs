/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Vue 相关规则
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],

    // TypeScript 相关规则
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-this-alias': 'off',

    // Import 相关规则
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',

    // 代码风格规则
    camelcase: 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-useless-escape': 'off',
    'default-case': 'off',
    'no-case-declarations': 'off',
    'no-new': 'off',
    'no-return-await': 'off',
    'no-empty': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // 环境相关规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 格式化相关规则（交给 Prettier 处理）
    'max-len': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-call-argument-newline': 'off'
  },
  ignorePatterns: ['dist', 'node_modules', 'public', '*.min.js', 'coverage']
}
