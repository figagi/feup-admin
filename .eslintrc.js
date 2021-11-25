module.exports = {
  extends: [require.resolve('feup-lint/dist/eslint')],
  rules: {
    'no-plusplus': 0,
  },
  globals: {
    location: true,
    systemName: true,
  },
};
