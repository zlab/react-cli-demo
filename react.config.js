/**
 * react config
 *
 * @see https://cli.vuejs.org/zh/config/
 * @see https://github.com/neutrinojs/webpack-chain
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    progress: false,
    compress: true,
    open: true,
    proxy: {
      '/api2': {
        target: 'https://api.xxx.cn',
      },
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  chainWebpack: config => {
    config.performance.hints(false);

    // config.externals({ jquery: 'jQuery' });

    // config.target('electron-renderer');

    const { ContextReplacementPlugin: crp } = require('webpack');

    config.plugin('context-replacement').use(crp, [/moment[\/\\]locale$/, /zh-cn/]);
  },
};
