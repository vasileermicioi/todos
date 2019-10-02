import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ApolloProvider } from '@apollo/react-hooks'
import CreateClient from '../../services/GqlClient'
import TodoContainer from './TodoContainer'

storiesOf('todo/TodoContainer', module).add('default', () => (
  <ApolloProvider client={CreateClient()}>
    <TodoContainer page={1} />
  </ApolloProvider>
))
