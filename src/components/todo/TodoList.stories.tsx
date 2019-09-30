import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ApolloProvider } from '@apollo/react-hooks'
import CreateClient from '../../services/GqlClient'
import TodoList from './TodoList'

storiesOf('todo/TodoList', module).add('default', () => (
  <ApolloProvider client={CreateClient()}>
    <TodoList />
  </ApolloProvider>
))
