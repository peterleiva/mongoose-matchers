/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

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
