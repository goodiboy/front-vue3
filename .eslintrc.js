module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: ['simple-import-sort', 'prettier'],
  // 声明全局属性，因为setup有些全局宏属性，eslint没法识别，需要在这里设置为全局属性
  globals: {
    defineProps: true
  }
}
