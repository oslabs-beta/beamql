const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'), //watch it. default is "dist"
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    inline: true,
    compress: true,
    publicPath: '/dist',
    proxy: {
      '/': 'http://localhost:3000'
      // '/api/**': {
      //   target: 'http://localhost:3000',
      //   secure: false,
      //   changeOrigin: true, 
      //   onProxyReq: (proxyReq) => {
      //   proxyReq.setHeader('Cookie', cookie);
      //   },
      // }

    },
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
