import React, { ReactNode } from 'react'
import { ApolloLink } from 'apollo-link'
import { Observable } from 'apollo-client/util/Observable'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

export default (props: { children: ReactNode; graphQLErrors?: any }) => {
  const link = new ApolloLink(() => {
    return new Observable(observer => {
      observer.next({
        errors: props.graphQLErrors || [
          { message: 'Unspecified error from ApolloErrorProvider.' },
        ],
      })
      observer.complete()
    })
  })

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
