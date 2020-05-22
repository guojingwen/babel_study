const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: './src/main_add_do.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist1')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // use: 'babel-loader', // 走babel配置
        use: { // babel配置写在这里也可以, 如果项目根目录下还有配置文件如babel.config.js会把配置项merge到配置文件里面
          loader: 'babel-loader',
          options: {
            presets: [],
            plugins: ['@babel/plugin-proposal-do-expressions']
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
}
