const fs = require('fs')

module.exports = (filename) => {
  const buffer = fs.readFileSync(filename)
  const data = buffer.toString().split('\n')
  return data
}
