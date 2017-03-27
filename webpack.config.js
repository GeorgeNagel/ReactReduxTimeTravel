var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    'app': [
      APP_DIR + '/index.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "assets/",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
};

module.exports = config;
