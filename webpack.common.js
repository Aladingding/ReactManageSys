/*
*
*  单开编译，单开编译，单开编译
*
*
*/

const path = require('path');
const webpack = require('webpack');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const openBrowserWebpack = new OpenBrowserWebpackPlugin({
    browser: 'Chrome',
    url: 'http://localhost'
});

module.exports = {
    // 配置名称
    name: '公共配置',
    // entry 入口文件配置 string | object | array
    entry: {
        // 入口文件名称
        app: ['./source/index.js'],
        // 抽取react模块防止重复打包
        react: ['react', 'react-dom', 'react-router', 'reflux']
    },
    // output 输出文件配置
    output: {
        filename: '[name].bundle.js' || "[name].js" || "[name].[chunkHash:8].js",
        path: path.resolve(__dirname, './dev/build/js'), // __dirname 能兼容不同系统的路径反斜杠装换等
    },
    // 模块处理方式
    module: {
        // 模块打包机-使用何种loader打包
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                // include: [
                //     path.resolve(__dirname, "app")
                // ],
                // 排除查找目录，
                // exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                // use:[{
                //     loader: 'babel-loader'
                // }],
                query: {
                    presets: ['react','es2015','stage-0']
                }
                // stage-0 babel-preset-stage-0 编译es7语法，如静态对象 !!!
                // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
                // test 和 include 具有相同的作用，都是必须匹配选项
                // exclude 是必不匹配选项（优先于 test 和 include）
                // 最佳实践：
                // - 只在 test 和 文件名匹配 中使用正则表达式
                // - 在 include 和 exclude 中使用绝对路径数组
                // - 尽量避免 exclude，更倾向于使用 include
            },
            {
                test: /\.css$/i,
                use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        minimize: true,
                        importLoaders: 1
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.styl/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    // 打包优化插件配置，优化，压缩，tree shaking等
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        openBrowserWebpack,
        // new CleanWebpackPlugin(['WexinHardware/build']), // 每次编译清除重复文件
        new HtmlWebpackPlugin({ // 模板文件
            template: path.resolve(__dirname, "./source/html/index.ejs"),
            fileName: '../index.html',
            title: '开发模式',
        }),
        // new ExtractTextPlugin({
        //     filename: "bundle.[chunkhash].css"
        // }),
    ],
    // 代理服务器配置
    devServer: {
        // proxy: { // proxy URLs to backend development server /api 随便命名都行 /apxx /dasasda都行
        //     '/api': 'http://10.8.4.67:8090'
        // },
        // port: 8090,
        compress: true,
        // quiet: true, // 清除编译信息
        clientLogLevel: "none",
        contentBase: "./", // 本地服务器所加载的页面所在的目录,路径必须正确，否则代理服务器报error
        disableHostCheck: true,
        hot: true, // 需要开启 plugins > new webpack.HotModuleReplacementPlugin()
        inline: true, // 实时刷新 设置为true，当源文件改变时会自动刷新页面
        historyApiFallback: true, //不跳转
        stats: { // 实时编译控制台打印输出
            errorDetails: true, // 显示错误细节
            colors: true, // 打印变色
            modules: false, // 显示引用模块
            reasons: false, // 显示错误原因
            chunkModules: false, // 显示模块来源
        },
    },
    // 文件解析配置
    resolve: {
        // 省略文件扩展名
        extensions: ['.js', '.jsx', '.es6', '.json', '.css', '.less', '.scss', '.html', '.md', '.markdown', 'coffee'],
        // 缩减引用目录查找路径 比如 import * as UpdateIngredient from '../../flux/updateIngredient' 则可简写为 import * as UpdateIngredient from '/flux/updateIngredient'
        alias: { // 别名配置项，使用path.join连接比path.resolve优点在于，前者会自动转义lunix和windows下的\/差异
            'components': path.join(__dirname, 'source', 'components'),
            'flux': path.join(__dirname, 'source', 'flux'),
            //'static': path.join(__dirname, 'source', 'static'),
            //'json': path.join(__dirname, 'source', 'json'),
        },
        // 模块解析器优先查找目录
        // modules: [path.join(__dirname, "source"), "node_modules"],
    },
};