module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue'],
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
