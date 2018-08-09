const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');

const config = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    openPage: '',
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  devtool: 'eval-source-map',
});

module.exports = config;
