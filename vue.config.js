/**
 *Created by limbo <yangyuke@hetao101.com> on 2018/12/5.
 */
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
//   baseUrl: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 10010,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_OOOOOQQQ1,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      
    }, // 设置代理
    before: app => {
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.plugins.push(
        new CompressionWebpackPlugin({
          // asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  }
}
