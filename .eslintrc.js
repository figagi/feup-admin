module.exports = {
  extends: [require.resolve('feup-lint/dist/eslint')],
  rules: {
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'prefer-const': 0,
  },
  globals: {
    location: true,
    systemName: true,
  },
};
