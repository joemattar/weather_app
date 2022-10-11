const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    index: "./src/js/index.js",
    weather_api: "./src/js/weather_api.js",
  },
  mode: "development",
  // Module loaders
  module: {
    rules: [
      // Style Loader & CSS loader - modules must be installed first
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Images Loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // Font loaders
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // Cleans output - Deletes unused
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
    }),
  ],
};
