const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@src": "src/",
    "@features": "src/features",
    "@hooks": "src/hooks",
    "@components": "src/shared/components",
    "@assets": "src/shared/assets",
    "@constants": "src/shared/constants",
    "@context": "src/context",
    "@helper": "src/shared/helper",
    "@hoc": "src/shared/hoc",
  })(config);

  return config;
};
