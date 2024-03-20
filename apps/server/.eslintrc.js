module.exports = {
  extends: '../../.eslintrc.js',
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      typescript: {
        project: ['apps/server/tsconfig.json'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'arrow-body-style': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
