const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./lib/index.ts",
  target: "node",
  context: resolve(__dirname, "lib"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        options: {
          transpileOnly: true,
        },
      },
    ],
  },

  externals: [nodeExternals()],
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./lib/**/*.{ts}",
      },
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".js"],
  },

  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
  },
};
