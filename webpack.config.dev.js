var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

//not used
const readTemplate = function() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'src/index.html')
    ).toString();
    return html;
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    devtool: 'source-map',
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        },
        {
            test: /\.(jpg|png|gif)$/,
            loaders: [
                'file-loader',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
            ],
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        })
    ]
};
