const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: { js: __dirname + '/src/main.js', css: __dirname + '/src/main.css' },
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname + '/public',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};