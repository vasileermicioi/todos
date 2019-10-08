import React, { ReactNode } from 'react'
import { ApolloLink } from 'apollo-link'
import { Observable } from 'apollo-client/util/Observable'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

export default (props: { children: ReactNode }) => {
  const link = new ApolloLink(() => {
    return new Observable(() => {})
  })

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
