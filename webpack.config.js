const path = require('path');

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },

    devServer: {
        contentBase: "dist",
        open: true // open browser on run server
    }
}