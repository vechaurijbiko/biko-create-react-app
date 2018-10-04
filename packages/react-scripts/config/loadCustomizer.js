'use strict'

module.exports = function loadCustomizer(modulePath) {
  const customizer = requireCustomizer(modulePath)
  return ensureCustomizerMethods(customizer)
}

function requireCustomizer(modulePath) {
  try {
    const moduleDefault = require(modulePath)
    console.log(`Extending webpack config from: ${modulePath}`)
    return moduleDefault
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return {}
    }
    throw e
  }
}

function ensureCustomizerMethods(customizer) {
  return Object.assign(
    {
      getRules: () => [],
      getPlugins: () => [],
    },
    customizer
  )
}
