import * as React from 'react'
import { useTodoListQuery } from './__graphql__/TodoList'
import TodoItem from './TodoItem'
import { Todo } from 'api/graphql-types'

const TodoList: React.FC = () => {
  const { loading, error, data } = useTodoListQuery({
    variables: {
      userIds: ['1', '10'],
    },
  })
  if (loading) return <>Loading TodoList ..</>
  if (error) return <>{error!.message || 'Error loading TodoList'}</>
  if (!data) return <>Not items in TodoList ..</>
  return (
    <ul>
      {data!.todos!.map(
        todo => todo && <TodoItem input={todo as Todo} key={todo!.id} />
      )}
    </ul>
  )
}

export default TodoList
