function loader1(sourceCode) {
  console.log('join loader1')
  return sourceCode + `\n const loader1 = 'https://github.com/ltara'`
}

module.exports = loader1
