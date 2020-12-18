const path = require("path");
const HtmlWebPackPlugins = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugins({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
};
