const resolverContext = require.context(__dirname, true, /\.resolvers\.ts$/)
const resolvers = resolverContext
  .keys()
  .map(file => resolverContext(file).default)

const schemaContext = require.context(__dirname, true, /\.schema\.graphql$/)
const typeDefs = schemaContext.keys().map(file => {
  return schemaContext(file)
})

export { typeDefs, resolvers }
