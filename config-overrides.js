const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@features': 'src/features',  
    '@components': 'src/shared/components',
    '@assets' : 'src/shared/assets',
    '@constants': 'src/shared/constants'
  })(config)

  return config
}