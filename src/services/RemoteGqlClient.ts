import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import fetch from 'unfetch'
import { createHttpLink } from 'apollo-link-http'

function CreateClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: createHttpLink({
      fetch,
      uri: 'https://fakeql.com/graphql/1f239bd88e0d34ecd4a2be65bd30b7b2',
    }),
    cache: new InMemoryCache(),
  })
}

export default CreateClient
