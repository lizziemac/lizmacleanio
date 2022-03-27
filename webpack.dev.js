const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 1337,
    historyApiFallback: true,  // redirects 404s to index.html
  },
  output: {
    publicPath: '/',          // specify base path for all assets in the app
  },
});