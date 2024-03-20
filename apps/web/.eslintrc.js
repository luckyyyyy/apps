module.exports = {
  extends: '../../.eslintrc.js',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'react-hooks'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      typescript: {
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // allow single export
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/api/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/core/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/context/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/utils/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './*.less',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.module.less',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-len': [
      'warn',
      {
        code: 140,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'no-debugger': 'error',
    'no-console': 'warn',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    // 无伤大雅的一些问题
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-continue': 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-bitwise': 'off', // 位运算在安全的情况下还是有必要的
    'prefer-destructuring': 'off', // 不一定非要强制使用解构
    'no-underscore-dangle': 'off', // 允许使用下划线 私有变量经常用 但这个项目没有用_代表私有变量
    // typescript checked
    'no-redeclare': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-dupe-class-members': 'off',
    'default-param-last': 'off',
    'no-lonely-if': 'off',
    indent: 'off', // 有TS了
    // typescript lints cover
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    // typescript lints
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    // '@typescript-eslint/ban-types': 'error',
    // '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    // '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    // 此项目 专门定制 不忽略不用跑了
    'no-template-curly-in-string': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-spaced-func': 'off',
    'no-mixed-operators': 'off',
    'func-call-spacing': 'off', // 。。。。牛B
    camelcase: [
      'warn',
      {
        properties: 'always',
      },
    ],
    'no-promise-executor-return': 2,
  },
};
