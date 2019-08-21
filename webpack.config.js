const htmlWebpackPlugin =  require('html-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',//开发环境 忽略代码列信息 包含模块之间的source-map关系 仅仅使用sourceURL关联处理前后关系
    // devtool: 'cheap-module-source-map',//生产环境 忽略代码列信息 包含模块之间的source-map关系 为每个文件生成单独的souceMap文件
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
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2015',
                            'env'
                        ]
                    }
                },{
                    loader: 'eslint-loader',
                }],
                exclude: /node-modules/,
                include: /src/,
                
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