'use strict'

const core = require('@actions/core')
const yaml = require('js-yaml')
const got = require('got')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('config')
  const chimeurl = core.getInput('chimeurl')
  const content = await fs.readFile(path, 'utf8')
  console.log(content)
  console.log('==============================')
  let config = yaml.safeLoad(content)
  console.log(config)
  console.log('==============================')
  
  const body = await got.post(chimeurl+'/chime/v1/apps', {
        json: config.application
    }).json();
  console.log(body);
  core.setOutput('appId', body.id)
}

main().catch(err => core.setFailed(err.message))
