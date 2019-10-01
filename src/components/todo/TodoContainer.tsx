import * as React from 'react'
import { useTodoSearchQuery } from './__graphql__/TodoSearch'
import TodoList from './TodoList'
import { Todo } from '../../api/graphql-types'

interface TodoContainerProps {
  page: number
}

const TodoContainer: React.FC<TodoContainerProps> = ({ page }) => {
  const { loading, error, data } = useTodoSearchQuery({
    variables: {
      page: +page,
      search: 'a',
    },
  })
  if (loading) return <>Loading TodoList ..</>
  if (error) return <>{error!.message || 'Error loading TodoList'}</>
  if (!(data && data.todos)) <>No items in TodoList ..</>
  return <TodoList todos={(data as any).todos as Todo[]} />
}

export default TodoContainer
