'use strict'

const core = require('@actions/core')
const yaml = require('js-yaml')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')
  console.log(content)
  let config = yaml.safeLoad(content)
  console.log(config)
  core.setOutput('appId', 'TEST')
}

main().catch(err => core.setFailed(err.message))
