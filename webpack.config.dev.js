const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config');
const port = require('./package.json').config.port ? require('./package.json').config.port : 3000;

const sourcePath = path.join(__dirname, './src');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[path]/bundle-[name].js'
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port,
    client: {
      logging: 'info',
      progress: true,
      overlay: true
    },
    static: {
      directory: sourcePath,
      watch: true,
    },
  }
});
