module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
    return config
  }
}
