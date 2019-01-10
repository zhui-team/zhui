module.exports = {
  extends: [
      'eslint-config-alloy/react',
  ],
  globals: {
    React: false,
    ReactDOM: false
  },
  rules: {
    'indent': [
      'error',
      2,
      {
          SwitchCase: 1,
          flatTernaryExpressions: true
      }
    ],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ]
  }
};