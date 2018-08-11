const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_PATH = path.join(__dirname, 'src');
const APP_PATH = path.join(SRC_PATH, 'client.ts');
const BUILD_PATH = path.join(__dirname, 'build');

const config = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /vendor/,
        query: {
          presets: ['env']
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      styles: path.resolve(__dirname, './src/styles'),
      icons: path.resolve(__dirname, './src/icons')
    },
    extensions: ['*', '.js', '.ts', '.vue', '.json', '.svg']
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_PATH]),
    new CopyWebpackPlugin([
      {
        from: path.join(SRC_PATH, 'index.html'),
        to: path.join(BUILD_PATH, 'index.html')
      },
    ]),
  ]
};

module.exports = config;
