const webpack = require('webpack'),
  path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
  ],
  module: {
    loaders: [{
      loaders: ['babel'],
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
