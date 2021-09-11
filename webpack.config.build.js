// variables
const path = require('path');

const isProduction = process.argv.indexOf('webpack.config.build.js') >= 0;
const outPath = path.join(__dirname, './build');
const assetPath = path.join(__dirname, './build/assets');
const { merge } = require('webpack-merge');

const analyze = process.argv.indexOf('--env=analyze') >= 0;

// plugins
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config');

// utilities
const { getAssetFilename } = require('./tools/utilities');

module.exports = merge(webpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            unused: false,
            drop_console: true
          },
          ecma: 5,
          warnings: false,
          mangle: true,
          output: {
            comments: false
          }
        }
      })
    ]
  },
  stats: {
    modules: false,
    children: false,
    assetsSort: '!field'
  },
  output: {
    path: outPath,
    filename: `${isProduction ? `assets/js/${getAssetFilename()}` : ''}[name].js`,
    publicPath: '/'
  },
  plugins: [
    // clean the build directory
    new CleanWebpackPlugin({ verbose: false }),

    // analyze bundled javascript
    new BundleAnalyzerPlugin({ analyzerMode: analyze ? 'static' : 'disabled' }),

    // copy assets to build folder
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: assetPath },
      ],
    }),
  ]
});
