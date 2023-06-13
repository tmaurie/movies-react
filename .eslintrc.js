module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'react'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['node_modules', 'reports'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-nested-ternary': 0,
    'prefer-destructuring': 0,
    'class-methods-use-this': 0,
    'no-console': 2,
    // react rules
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'tasks/webpack/webpack.config.js',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
