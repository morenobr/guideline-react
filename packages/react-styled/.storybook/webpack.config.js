const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')

module.exports = ({ config }) => {
  config.performance = {
    ...config.performance,
    maxEntrypointSize: 2048000,
    maxAssetSize: 1024000,
  },
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config
}