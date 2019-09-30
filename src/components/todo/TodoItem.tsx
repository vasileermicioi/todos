import * as React from 'react'
import { Todo } from '../../api/graphql-types'

interface TodoProps {
  input: Todo
}

const TodoItem: React.FC<TodoProps> = ({ input }) => (
  <li>
    <b>#{input.id}: </b>
    <span>{input.task}</span>
  </li>
)

export default TodoItem
