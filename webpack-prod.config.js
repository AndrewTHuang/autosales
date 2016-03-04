var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'src/styles')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url?limit=8192'],
        include: path.join(__dirname, 'src/assets')
      }
    ]
  }
};
