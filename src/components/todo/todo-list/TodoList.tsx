import * as React from 'react'
import TodoItem from '../todo-item/TodoItem'
import { Todo } from '../../../graphql/types'

interface TodoListProps {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    (todos && (
      <ul>
        {todos!.map(
          todo => todo && <TodoItem input={todo as Todo} key={todo!.id} />
        )}
      </ul>
    )) || <></>
  )
}

export default TodoList
