var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const isDevelop = env === 'development';

module.exports = {
     entry: {
       script: './src/script.js',
       render: './src/render.js',
     },
     plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
         title: 'Code Splitting',
       }),
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].js',
     },
     devtool: isDevelop ? 'source-map' : false,
     devServer: {
       port: 8080,
       historyApiFallback: {
          index: 'index.html',
       },
       contentBase: 'src',
     },
     module: {
         rules: [
            {
               test: /.jsx?$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                 presets: ['env'],
               },
             },
             {
               test: /\.css$/,
               use: [ 'style-loader', 'css-loader' ],
             },
             {
               test: /\.html$/,
               exclude: [
                 './src/index.html',
               ],
             },
         ],
     },
     stats: {
         colors: true,
     },
 };
