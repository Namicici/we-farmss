"use strict";

var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context:__dirname + "/src",
    entry: {
        //signal:'webpack/hot/signal.js',
        bundle: "./main.js",
        react: "../node_modules/react/dist/react.min.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.(js)$/, loader: "jsx-loader?harmony"}
        ]
    },
    target:'node',
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
        ,new webpack.HotModuleReplacementPlugin({quiet:true})
        ,new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
