const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Template } = require('webpack');


module.exports = {
    mode: "development",
    entry: './src/index.js',
    devServer: {
        //contentBase: path.join(__dirname,'dist'),
        static: "./"
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ],
      },
      devtool: 'source-map',
      plugins: [
          new HtmlWebpackPlugin(
              {
                  template: './index.html'
                }
          ),
          new MiniCssExtractPlugin(
              {
                  filename: 'main.css'
                }
          )
    
    ]

};