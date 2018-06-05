'use strict';

module.exports = function loadCustomizer(modulePath) {
  try {
    const moduleDefault = require(modulePath);

    console.log(`Extending webpack config from: ${modulePath}`);

    return moduleDefault;
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  // If the module doesn't exist, return a empty extension
  return {
    getRules: () => [],
  };
};
