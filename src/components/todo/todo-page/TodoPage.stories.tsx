import React from 'react'
import { storiesOf } from '@storybook/react'
import TodoPage from './TodoPage'

const Pagination = (props: any) => <span>{props!.page || 0}</span>

storiesOf('todo/TodoPage', module)
  .add('empty', () => <TodoPage match={{ params: { page: 1 } }} />)
  .add('with children', () => (
    <TodoPage match={{ params: { page: 2 } }}>
      <Pagination />
    </TodoPage>
  ))
