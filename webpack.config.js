var path = require("path");
module.exports = {
    entry: {
        bundle: "./app/main.js",
        react: "./node_modules/react/dist/react.min.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            loader: "jsx-loader?harmony"
        }]
    }
};
