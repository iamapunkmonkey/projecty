const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'file-loader'
                    } ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new WebpackBar()
    ]
};
