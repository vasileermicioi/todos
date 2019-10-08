import * as React from 'react'
import { storiesOf } from '@storybook/react'
import TodoList from './TodoList'
import { Todo } from '../../../graphql/types'

storiesOf('todo/TodoList', module).add('default', () => (
  <TodoList
    todos={[
      { id: '1', task: 'Create FE project', done: false } as Todo,
      { id: '2', task: 'Create BE project', done: true } as Todo,
    ]}
  />
))
