module.exports = () => {
  return {
    name: 'css-loader',
    configureWebpack(_, isServer, { getStyleLoaders }) {
      return {
        module: {
          rules: [
            {
              test: /\.s[ca]ss$/,
              use: [...getStyleLoaders(isServer), 'sass-loader'],
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: 'postcss-loader',
                },
              ],
            },
          ],
        },
      }
    },
  }
}
