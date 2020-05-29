const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')

module.exports = ({ config }) => {
  config.performance = {
    ...config.performance,
    maxEntrypointSize: 2048000,
    maxAssetSize: 1024000,
  },
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: require.resolve("sass-loader"),
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: [`${path.resolve(__dirname, "..", "node_modules")}/`],
            importer: (url)=> ({ file: url }),
          },
          sourceMap: true,
        },
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config
}