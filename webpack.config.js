const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const PATHS = {
  src: path.join(__dirname, 'client/src/js/'),
  build: path.join(__dirname, 'client/public/build/'),
};

module.exports = {
  entry: {
    app: path.join(PATHS.src, 'app.jsx'),
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].[hash].js',
    //publicPath: 'build/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    // used to split out our sepcified vendor script
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),

    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
    }),

    new WebpackNotifierPlugin(),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    /**
    * HtmlWebpackPlugin will make sure out JavaScript files are being called
    * from within our index.html
    */
    new HtmlWebpackPlugin({
      template: 'server/views/index.html',
    }),
  ],
};
