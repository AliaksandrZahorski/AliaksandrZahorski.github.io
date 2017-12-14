var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const isDevelop = env === 'development';

module.exports = {
     entry: {
       script: './src/script.js',
     },
     plugins: [
       new CleanWebpackPlugin(['dist']),
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'script.js',
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
               test: /.js?$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                 presets: ['env','stage-2'],
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
