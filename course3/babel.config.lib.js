module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3 // cnpm i -S @babel/runtime-corejs3
      }
    ]
  ]
};
