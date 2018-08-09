const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          configFile: './tslint.json',
          tsConfigFile: 'tsconfig.json',
        }
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') // used by vue for its production mode
    }),
    new UglifyJsPlugin(),
  ],
});

module.exports = config;
