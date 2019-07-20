const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { WEBSITE_NAME, APP_MOUNT_ID } = process.env

module.exports = {
	entry: {
		app: './index.js'
	},
	module: {
		rules: [
		{
			test: /\.m?js|jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
		title: `${WEBSITE_NAME}`,
		favicon: './src/assets/images/favicon.ico',
		appMountId: 'react-root'
	}),
	new webpack.DefinePlugin({
		APP_MOUNT_ID: JSON.stringify(APP_MOUNT_ID)
	})
	]
}