import React from 'react'
import TodoContainer from './TodoContainer'

interface TodoPageProps {
  match: { params: { page: number } }
}

const TodoPage: React.FC<TodoPageProps> = ({
  match: {
    params: { page = 1 },
  },
}) => (
  <div>
    <TodoContainer page={page} />
  </div>
)

export default TodoPage
