import React, { ReactNode } from 'react'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'
import { resolvers, typeDefs } from '../schema'

const ApolloMockProvider = (props: { children: ReactNode }) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: merge(resolvers),
    resolverValidationOptions: { requireResolversForResolveType: false },
  })

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default ApolloMockProvider
