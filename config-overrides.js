module.exports = function override(config, env) {
    if (env === 'test') {
        config.transform = {
            "^.+\\.(js|jsx)$": "babel-jest"
        };
    }
    return config;
};
