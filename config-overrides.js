const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
    };
    config.plugins.push(
    );

    return config;
}
