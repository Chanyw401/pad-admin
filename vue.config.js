const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: 'dist',
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "nos-ui/src/assets/css/variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('img', resolve('src/assets/img'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  }
};
