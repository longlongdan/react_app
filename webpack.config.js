const htmlWebpackPlugin =  require('html-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                include: /src/,
                options: {
                    presets: [
                        'react',
                        'es2015',
                        'env'
                    ]
                }
            }, {
                test: /\.scss?$/,
                use: ['style-loader','css-loader','sass-loader','postcss-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html',
            inject: true,
            minify: {
                removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
            }
        })
    ],
    devServer: {
        contentBase: __dirname + '/build',
        port: 3000,
        open: true
    }
}