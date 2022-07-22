// 导入path模块
const path = require('path')

// 引入vue-loadre插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 打包入口
    entry: './src/main.js',
    // 打包出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 打包规则
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'imgs': path.resolve(__dirname, '../src/assets/images')
        }
    },

}