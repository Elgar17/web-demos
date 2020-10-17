const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

const divConfig = {

    // 打包模式
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // devServer配置
    devServer: {
        // 指定服务器根目录
        contentBase: '../dist',
        // 自动打开浏览器
        open: true
    },

}

module.exports = merge(baseConfig,divConfig)