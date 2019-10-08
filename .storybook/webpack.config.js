module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  // graphql loader
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  })
  config.resolve.extensions.push('.graphql', '.gql')
  return {
    ...config,
    externals: {
      fs: 'commonjs fs',
    },
  }
}
