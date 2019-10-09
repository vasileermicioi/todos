import { storiesOf } from '@storybook/react'
import { setupGraphiQL } from '@storybook/addon-graphql'
import { FetcherParams } from '@storybook/addon-graphql/dist/preview'
import gql from 'graphql-tag'
import { apolloMockClient } from '../../graphql/providers/ApolloMockProvider'

const fetcher = (params: FetcherParams) => {
  return apolloMockClient.query({
    query: gql`
      ${params.query}
    `,
    variables: params.variables,
  })
}

const graphiql = setupGraphiQL({ fetcher, url: '' })

storiesOf('GraphQL API', module).add(
  'mock',
  graphiql(`
query GetTodos {
    todos {
      id
      task
      user {
        id
        name
      }
    }
  }`)
)
