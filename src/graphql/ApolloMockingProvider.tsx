import React, { ReactNode } from 'react'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import typeDefs from './todo.schema'

const ApolloMockingProvider = (props: {
  customResolvers: any
  children: ReactNode
}) => {
  const mocks = props.customResolvers
  const schema = makeExecutableSchema({
    typeDefs,
    resolverValidationOptions: { requireResolversForResolveType: false },
  })
  addMockFunctionsToSchema({ schema, mocks })

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default ApolloMockingProvider
