const _ = require('lodash')
const fs = require('fs')

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p+"/"+f).isDirectory())

_.map(dirs(__dirname), (module) => {
  exports[module] = require(`./${module}`)
})