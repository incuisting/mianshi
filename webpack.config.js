let HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
                //src为index.html所在的文件夹
        })
    ]
};