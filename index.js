'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')i
  console.log(content)
  core.setOutput('appId', 'TEST')
}

main().catch(err => core.setFailed(err.message))
