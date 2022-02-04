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
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 关闭函数必须要有返回类型，直接使用ts自带的类型推导
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 允许使用any，但尽量不要使用
    '@typescript-eslint/no-explicit-any': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  // 声明全局属性，因为setup有些全局宏属性，eslint没法识别，需要在这里设置为全局属性
  globals: {
    defineProps: true,
    withDefaults: true,
    defineEmits: true,
    defineExpose: true,
    ElMessage: true
  }
}
