const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')


const prodConfig= {
    // 打包模式
    mode: 'production',
}
module.exports = merge(baseConfig,prodConfig)