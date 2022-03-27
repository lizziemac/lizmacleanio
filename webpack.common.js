const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.tsx',                      // root file of the module
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),    // the output path will be ./github-battle/dist
    filename: 'bundle_index.js',              // the name of the file to be placed in the path
    clean: true,
  },
  module: {
    rules: [                                  // define how to convert files
      { test: /\.(tsx|ts)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader']}
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app/') // added this
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'              // add index.html into dist/
    })
  ],
}