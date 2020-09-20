/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './lib/index.ts',
	module: {
		rules: [
			{
				test: /\.ts/,
				use: ['ts-loader', 'eslint-loader'],
			},
		],
	},

	plugins: [new CleanWebpackPlugin()],

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			lib: path.join(__dirname, 'lib'),
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
