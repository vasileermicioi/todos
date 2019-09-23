import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs/react'
import TodoItem from './TodoItem'

storiesOf('todo/TodoItem', module).add('default', () => (
  <TodoItem match={{ params: { id: number('item id', 1) } }} />
))
