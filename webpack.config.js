"use strict";

var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var publicPath = 'http://localhost:9000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    context:__dirname + "/src",
    entry: {
        bundle: ["./app/index.js", hotMiddlewareScript]
    },
    output: {
        path:__dirname + "/dist",
        filename: "[name].[hash].js",
        publicPath:publicPath
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader?stage=0'},
			{test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader:"url-loader" }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
        ,new webpack.optimize.OccurrenceOrderPlugin()
        ,new webpack.HotModuleReplacementPlugin()
        ,new webpack.NoErrorsPlugin()
    ]
};
