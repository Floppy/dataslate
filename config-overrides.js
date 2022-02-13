module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
    return config
  },
  jest: function(config) {
    config.transformIgnorePatterns = [
      "node_modules/(?!react-markdown)/"
    ];
    return config;
  }
}
