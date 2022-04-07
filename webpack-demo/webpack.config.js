const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 新版已改为这种用法
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true,
    },
    // source-map
    // cheap-source-map
    // inline-source-map
    // eval-source-map
    // inline-cheap-module-source-map
    // eval
    // eval-cheap-module-source-map
    // cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',
    // entry: './src/index.js',
    entry: {
        bundle: './src/index.js',
        // sub: './src/index.js'
    },
    output: {
        // publicPath:'http://cdn.com',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.png$/,
            use: {
                loader: 'url-loader', // file-loader  url-loader
                options: {
                    name: '[name].[ext]',
                    limit: 20480,
                    outputPath: 'imgs',
                    // publicPath:'assets'
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                // {
                //     loader: 'style-loader',
                //     options: {
                //         hmr: true,
                //     }
                // },
                'css-loader',
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules: true, //开启css模块化打包  
                    },
                }, 'sass-loader', 'postcss-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', { 
                        useBuiltIns: "usage" ,
                        targets: { chrome: "64" },
                    }]],
                    // "plugins":[[""]]
                }
            }
        }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin()
    ],
}
