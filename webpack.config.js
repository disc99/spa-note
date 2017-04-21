module.exports = {
    entry: { js: __dirname + '/src/main.js' },
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname + '/public',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};