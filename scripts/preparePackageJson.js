const path = require('path')
const fs = require('fs')
const packageJson = require('../package.json')

const DIST_DIR = path.resolve(__dirname, '..', 'package')

delete packageJson.devDependencies
delete packageJson.config
delete packageJson.scripts.cz
delete packageJson.scripts.build

fs.writeFileSync(
  `${DIST_DIR}/package.json`,
  JSON.stringify(packageJson, null, 2),
  {}
)
