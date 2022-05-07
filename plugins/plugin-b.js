// 插件B
class pluginB {
  apply(compiler) {
    // 注册同步钩子
    compiler.hooks.run.tap('Plugin B', () => {
      // 调用
      console.log('pluginB')
    })
  }
}

module.exports = pluginB
