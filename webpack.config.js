"use strict";

var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var publicPath = 'http://localhost:9000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    context:__dirname + "/src",
    entry: {
        //signal:'webpack/hot/signal.js',
        bundle: ["./main.js", hotMiddlewareScript],
        react: ["../node_modules/react/dist/react.min.js", hotMiddlewareScript]
    },
    output: {
        path:__dirname + "/dist",
        filename: "[name].[hash].js",
        publicPath:publicPath
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.(js)$/, loader: "jsx-loader?harmony"},
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
