const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@features": "src/features",
    "@hooks": "src/hooks",
    "@components": "src/shared/components",
    "@assets": "src/shared/assets",
    "@constants": "src/shared/constants",
    "@context": "src/context",
    "@helper": "src/shared/helper",
  })(config);

  return config;
};
