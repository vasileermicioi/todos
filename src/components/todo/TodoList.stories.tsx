import * as React from 'react'
import { storiesOf } from '@storybook/react'
import TodoList from './TodoList'

storiesOf('todo/TodoList', module).add('default', () => <TodoList />)
