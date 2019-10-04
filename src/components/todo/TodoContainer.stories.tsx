import * as React from 'react'
import { storiesOf } from '@storybook/react'
import TodoContainer from './TodoContainer'
import ApolloLoadingProvider from '../../graphql/ApolloLoadingProvider'
import ApolloErrorProvider from '../../graphql/ApolloErrorProvider'
import ApolloMockingProvider from '../../graphql/ApolloMockingProvider'

const resolvers = {
  Query: () => ({
    todos: () => [
      { id: '1', task: 'Create FE project', done: false },
      { id: '2', task: 'Create BE project', done: true },
    ],
  }),
}

storiesOf('todo/TodoContainer', module)
  .add('loading', () => (
    <ApolloLoadingProvider>
      <TodoContainer page={1} />
    </ApolloLoadingProvider>
  ))
  .add('error', () => (
    <ApolloErrorProvider>
      <TodoContainer page={1} />
    </ApolloErrorProvider>
  ))
  .add('with data', () => (
    <ApolloMockingProvider customResolvers={resolvers}>
      <TodoContainer page={1} />
    </ApolloMockingProvider>
  ))
