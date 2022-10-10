const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境的配置
  productionSourceMap: false,
  /**根目录 */
  publicPath: '/',
  /**打包输出的文件地址 */
  outputDir: 'disats',
  /**打包后静态资源放置位置, 在outputDir文件夹下 */
  assetsDir: "assetssss",
  /**dev环境的配置 */
  devServer: {
    /**运行时的端口号 */
    port: '9999',
    /**运行时的ip */
    host: '0.0.0.0',
    /**是否开启https */
    https: false,
    /**运行时,是否直接打开浏览器 */
    open: true,
    /**proxy */
    // proxy: {
    //   '/api':{
    //     changeOrigin:true, // 配置代理默认开启target方式
    //     secure:false, //如果是http接口，需要配置该参数
    //     target:"https://XXX",
    //      pathRewrite:{
    //        "^/api":""
    //      }
    //  },
    // }
  }
})
