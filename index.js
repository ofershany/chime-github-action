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
  
  let app = {};
  app.schema = config.application.schema
  app.name = config.application.meta.name
  app.version = config.application.meta.version
  app.decription = config.application.meta.description
  app.author = config.application.meta.author
  app.image = 'ofershanyshany/chime'
  const body = await got.post(chimeurl+'/chime/v1/apps', {
        json: app
    }).json();
  console.log(body);
  core.setOutput('appId', body.id)
}

main().catch(err => core.setFailed(err.message))
