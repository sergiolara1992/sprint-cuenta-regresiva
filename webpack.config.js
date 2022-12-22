const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app/main.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  devServer: {
    port: 4000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "babel-loader",
      },
      {
        test: /.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/imgs", to: "imgs" }],
    }),
  ],
};
