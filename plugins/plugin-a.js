// 插件A
class pluginA {
  apply(compiler) {
    // 注册同步钩子
    compiler.hooks.run.tap('Plugin A', () => {
      // 调用
      console.log('pluginA')
    })
  }
}

module.exports = pluginA
