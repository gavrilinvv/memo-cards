const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dest/js'),
		filename: 'script.js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			// { test: /\.ts$/, use: 'ts-loader' },
		],
	},
};
