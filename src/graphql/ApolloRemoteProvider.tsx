import React, { ReactNode } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'unfetch'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

export default (props: { url?: string; children: ReactNode }) => {
  const client = new ApolloClient({
    link: createHttpLink({
      fetch,
      uri: props.url || process.env.GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  })
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
