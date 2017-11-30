var path = require('path');
var webpack = require('webpack');

module.exports = {
     entry: ['babel-polyfill', './src/script.js'],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'script.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
