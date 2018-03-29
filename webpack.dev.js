const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const opn = require('opn');


/*--------------------------------开发模式---------------------------------------*/
module.exports = merge(common, {
    name:"开发环境-打包配置",
    // source-map
    devtool: 'eval-source-map', // 生成一个完整干净的source-map，打包速度适中
    // 服务器配置
    devServer: {
        // quiet:true, // 世界一下子安静了
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // },
        // port: 8991,
        // clientLogLevel: "none",
        // contentBase: "./source", // 本地服务器所加载的页面所在的目录
        // disableHostCheck: true,
        // hot: true, // 需要开启 plugins > new webpack.HotModuleReplacementPlugin()
        // inline: true, // 实时刷新 设置为true，当源文件改变时会自动刷新页面
        // historyApiFallback: true, //不跳转
        // stats: { // 实时编译控制台打印输出
        //     errorDetails: true, // 显示错误细节
        //     colors: true, // 打印变色
        //     modules: false, // 显示引用模块
        //     reasons: false, // 显示错误原因
        //     chunkModules: false, // 显示模块来源
        // },

        contentBase: path.join(__dirname, './', 'source'), // 本地服务器所加载的页面所在的目录,这个主要是要选static文件在的目录
        disableHostCheck: true,
        host: "0.0.0.0",
        stats: 'minimal',
        historyApiFallback: true,
        // https: true 开启https
        // after: function() {
        //     let port = this.port;
        //     let url = `http://localhost:${port}/`;
        //     opn(url, {
        //         app: 'chrome'
        //     });
        // },
        proxy: {
            "/v1/*": {
                target: 'https://dp.clife.net/',
                changeOrigin: true,
                secure: false
            },
        },
    },
    // 插件配置
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            browser: 'Chrome',
            //url: 'http://10.8.4.85:8090/#/'
            // "dev": "webpack-dev-server --host 10.8.4.69 --colors --open --config webpack.dev.js",
        }),
        //new BundleAnalyzerPlugin()
    ],
});


// http://www.jb51.net/article/121459.htm