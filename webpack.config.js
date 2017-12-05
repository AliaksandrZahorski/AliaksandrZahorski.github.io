var path = require('path');
var webpack = require('webpack');

module.exports = {
     entry: ['babel-polyfill', './src/script.js'],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'script.js',
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
         ],
     },
     stats: {
         colors: true,
     },
     devtool: 'source-map',
 };
