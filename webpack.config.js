const { resolve, join } = require("path");
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
  resolve: {
    extensions: [".ts", ".js"],
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },

  externals: [nodeExternals()],
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: join(__dirname, "tsconfig.json") },
      eslint: {
        files: join(__dirname, "lib/**/*.ts"),
        options: { ignorePattern: "lib/**/__tests__" },
      },
    }),
    new CleanWebpackPlugin(),
  ],

  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
  },
};
