const StratagemDownloaderPlugin = require('./src/parsers/WH40k9e/StratagemDownloaderPlugin');

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
    config.plugins = (config.plugins || []).concat([new StratagemDownloaderPlugin()])
    return config
  },
  jest: function (config) {
    config.transformIgnorePatterns = [
      'node_modules/(?!react-markdown)/'
    ]
    return config
  }
}
