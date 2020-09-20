/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './lib/index.ts',
	target: 'node',
	module: {
		rules: [
			{
				test: /\.ts/,
				use: ['ts-loader', 'eslint-loader'],
			},
		],
	},

	externals: [nodeExternals()],

	plugins: [new CleanWebpackPlugin()],

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			lib: path.join(__dirname, 'lib'),
			utils: path.join(__dirname, 'lib', 'utils'),
		},
	},

	optimization: {
		splitChunks: { chunks: 'all' },
	},

	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
	},
};
