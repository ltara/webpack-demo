const path = require('path')

const fromPath = 'd:/Project/webpack'

const toPath = 'd:/Project/webpack/example/src/module.js'

console.log(path.posix.relative(fromPath, toPath))
