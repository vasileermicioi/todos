const resolverContext = require.context('entities', true, /\.resolvers\.ts$/)
const resolvers = resolverContext
  .keys()
  .map(file => resolverContext(file).default)

const typeDefsContext = require.context('../../src', true, /\.schema\.graphql$/)
const typeDefs = typeDefsContext.keys().map(file => typeDefsContext(file))

export { typeDefs, resolvers }
