const webpack = require('./webpack')
const config = require('../example/webpack.config')

// 1. 初始化参数，根据配置文件和shell参数合并参数
// 2. 调用webpack(options) 初始化compiler对象
const compiler = webpack(config)

// 调用run方法进行打包
compiler.run((err, sates) => {
  if (err) {
    console.log(err, 'err')
  }
})
