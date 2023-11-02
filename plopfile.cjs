/* eslint-disable-next-line */
const { getPlopGenerators } = require('./src/lib/misc/getPlopGenerators.cjs')

module.exports = (plop) => {
  plop.setGenerator('component', getPlopGenerators('component'))
  plop.setGenerator('feature', getPlopGenerators('feature'))
}
