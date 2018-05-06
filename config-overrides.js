const rewirePostCSSNested = require('react-app-rewire-postcss-nested');

/* config-overrides.js */
module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = rewirePostCSSNested(config, env);
  return config;
};
