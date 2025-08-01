const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  host: '0.0.0.0', // 允许所有IP访问
    port: 8080,      // 端口号
    disableHostCheck: true // 禁用主机检查
})