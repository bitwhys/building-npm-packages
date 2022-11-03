const path = require('path')
const fs = require('fs')
const packageJson = require('../package.json')

const DIST_DIR = path.resolve(__dirname, '..', 'package')
const publishConfig = {
  publishConfig: {
    registry: 'http://localhost:4873',
  },
}

delete packageJson.devDependencies
delete packageJson.config
delete packageJson.scripts.cz
delete packageJson.scripts.build

const formattedPackageJson = { ...packageJson, ...publishConfig }

fs.writeFileSync(
  `${DIST_DIR}/package.json`,
  JSON.stringify(formattedPackageJson, null, 2)
)
