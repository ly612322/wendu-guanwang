module.exports = {
  lintOnSave: false,
  publicPath: './',
  assetsDir: 'static',
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8083',
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://10.1.10.234', // API服务器的地址
    //     changeOrigin: true, // 更换origin
    //     pathRewrite: {
    //       '^/api': ''
    //   }
    //   }
    // }
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
