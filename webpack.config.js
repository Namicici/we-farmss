
module.exports = function(webpackConfig) {
    webpackConfig.module.loaders.forEach(function(loader) {
        if (loader.loader === 'babel') {
            // https://github.com/ant-design/babel-plugin-antd
            loader.query.plugins.push('antd');

            loader.loaders = ['es3ify', 'babel?'+JSON.stringify(loader.query)];
            delete loader.query;
            delete loader.loader;
        }
        return loader;
    });

    /*webpackConfig.entry = ["./src/entry/index.jsx"];
    webpackConfig.output = {
        path: __dirname + "/src/",
        publicPath: "/dist/",
        filename: "app.js"
    };*/

    return webpackConfig;
};
