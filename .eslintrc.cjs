module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Thêm plugin này để hỗ trợ JSX Transform
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Tắt quy tắc yêu cầu React phải được import
    'react/jsx-uses-react': 'off', // Tắt quy tắc yêu cầu React phải được sử dụng trong JSX
    'react/jsx-uses-vars': 'error',
    // Các quy tắc khác
  },
}
