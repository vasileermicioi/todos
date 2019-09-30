import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'
import TodoItem from './TodoItem'
import { Todo } from 'api/graphql-types'

storiesOf('todo/TodoItem', module).add('default', () => (
  <TodoItem
    input={
      {
        id: text('ID:', '1'),
        task: text('Task:', 'Setup FE project'),
      } as Todo
    }
  />
))
