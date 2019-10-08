import * as React from 'react'
import { storiesOf } from '@storybook/react'
import TodoContainer from './TodoContainer'
import ApolloLoadingProvider from '../../../graphql/providers/ApolloLoadingProvider'
import ApolloErrorProvider from '../../../graphql/providers/ApolloErrorProvider'
import ApolloMockProvider from '../../../graphql/providers/ApolloMockProvider'

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
    <ApolloMockProvider>
      <TodoContainer page={1} />
    </ApolloMockProvider>
  ))
