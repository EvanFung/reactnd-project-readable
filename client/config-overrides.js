const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  // add a plugin
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
}
