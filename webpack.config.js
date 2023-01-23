const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',

    },
    devtool: "inline-source-map",
    devServer: {
        static: 'dist',
    },
    plugins: [
        new HWP({
            title: 'Dino BBQ',
            template: './src/template.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|JPG|png|svg|gif|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
}