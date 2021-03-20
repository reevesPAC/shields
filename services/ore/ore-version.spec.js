'use strict'

const { test, given } = require('sazerac')
const OreVersion = require('./ore-version.service')

describe('OreVersion', function () {
  test(OreVersion.prototype.transform, () => {
    given({
      data: { promoted_versions: [{ version: '2.3' }, { version: '4.5' }] },
    }).expect({ version: '2.3' })
  })

  test(OreVersion.prototype.transform, () => {
    given({
      data: { promoted_versions: [] },
    }).expect({ version: undefined })
  })

  test(OreVersion.render, () => {
    given({ version: undefined }).expect({
      message: 'none',
      color: 'inactive',
    })
  })
})
