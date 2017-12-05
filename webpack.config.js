var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;
const isDevelop = env === 'development';

module.exports = {
     entry: ['babel-polyfill', './src/script.js'],
     plugins: [
       new CleanWebpackPlugin(['dist']),
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'script.js',
     },
     devtool: isDevelop ? 'source-map' : false,
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
         ],
     },
     stats: {
         colors: true,
     },
 };
