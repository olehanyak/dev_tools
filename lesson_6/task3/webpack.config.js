module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(jpg|pmg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8,
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ],
    }
};