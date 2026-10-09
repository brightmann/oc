
const { withContentlayer} = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: false,
  disableImportAliasWarning: true,
}


module.exports = withContentlayer(nextconfig)
