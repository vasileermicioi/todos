import React from 'react'

interface TodoPageProps {
  match: { params: { page?: number } }
  children?: any
}

const TodoPage: React.FC<TodoPageProps> = ({
  match: {
    params: { page = 1 },
  },
  children,
}) => <div>{children && React.cloneElement(children, { page })}</div>

export default TodoPage
