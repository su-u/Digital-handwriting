const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    output: {
        path: `${__dirname}/front/dist`,
        filename: 'bundle.js?[hash]',
    },
    entry: path.resolve(__dirname, './front/src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ['thread-loader', 'cache-loader', 'babel-loader'],
                include: path.resolve('./front/src'),
                exclude: /node_modules/,
            },
            {
                test: /\.html/,
                use:[
                    {loader: 'html-loader'}
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './front/src/html/index.html')
        }),
        new CopyPlugin([{ from: './front/src/public', to: '.' }]),
        new HardSourceWebpackPlugin(),
    ],
};