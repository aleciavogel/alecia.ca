const config = require('../../../tailwind.config.js')
const { join } = require('path')

module.exports = {
  ...config,
  content: [...config.content, join(__dirname, 'src/**/*!(*.spec|*.stories).{ts,tsx,css}')],
}
