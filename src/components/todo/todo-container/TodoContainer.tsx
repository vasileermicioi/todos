import * as React from 'react'
import { useGetTodosQuery } from './__graphql__/GetTodos'
import TodoList from '../todo-list/TodoList'
import { Todo } from '../../../graphql/types'

interface TodoContainerProps {
  page: number
}

const TodoContainer: React.FC<TodoContainerProps> = ({ page }) => {
  const { loading, error, data } = useGetTodosQuery({
    variables: {
      top: 3,
    },
  })
  if (loading) return <>Loading TodoList ..</>
  if (error) return <>{error!.message || 'Error loading TodoList'}</>
  if (!(data && data.todos)) <>No items in TodoList ..</>
  return <TodoList todos={(data as any).todos as Todo[]} />
}

export default TodoContainer
