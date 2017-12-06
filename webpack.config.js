const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  plugins: [new HTMLWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};