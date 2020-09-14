'use strict'

const core = require('@actions/core')
const yaml = require('js-yaml')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('config')
  const content = await fs.readFile(path, 'utf8')
  console.log(content)
  console.log('==============================')
  let config = yaml.safeLoad(content)
  console.log(config)
  console.log('==============================')
  console.log(config.application.schema[0].name)
  console.log(config.application.schema[0].displayName)
  core.setOutput('appId', 'TEST')
}

main().catch(err => core.setFailed(err.message))
