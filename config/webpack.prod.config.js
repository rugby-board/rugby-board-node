const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['./client/index.jsx'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
