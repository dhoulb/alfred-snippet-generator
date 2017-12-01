module.exports = {
	entry: './src/entry.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		sourceMapFilename: '[file].map'
	},
	devtool: 'source-map'
};