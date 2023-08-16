// TODO: Use ts-node

/* eslint-disable-next-line */
const { getPlopGenerators } = require('./src/lib/tools/getPlopGenerators.cjs')

module.exports = (plop) => {
  plop.setGenerator('component', getPlopGenerators('component'))
  plop.setGenerator('feature', getPlopGenerators('feature'))
}
