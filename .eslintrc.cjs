module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
  },
};
