import React, { ReactNode } from 'react'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'
import { mergeTypeDefs } from 'graphql-tools-merge-typedefs'
import { resolvers, typeDefs } from '../mock-schema'

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefs),
  resolvers: merge(resolvers),
  resolverValidationOptions: { requireResolversForResolveType: false },
})

export const apolloMockClient = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
})

const ApolloMockProvider = (props: { children: ReactNode }) => {
  return (
    <ApolloProvider client={apolloMockClient}>{props.children}</ApolloProvider>
  )
}

export default ApolloMockProvider
