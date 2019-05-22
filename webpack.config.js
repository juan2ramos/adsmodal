const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
    entry: {
      app: path.resolve(__dirname,  'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/adsmodal.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader','css-loader?sourceMap', 'postcss-loader', 'sass-loader']
          }
    
        ]
      }
  };

  module.exports = config;