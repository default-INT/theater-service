const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')

module.exports = {
    context: __dirname,
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'out')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        contentBase: './out'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}