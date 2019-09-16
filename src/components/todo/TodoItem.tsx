import * as React from 'react'

interface TodoProps {
    match?: {
        params: {
            id: number
        }
    }
}

const TodoItem: React.FC<TodoProps> = ({ match }: TodoProps) => <div>Todo Item {match && match.params.id}</div>

export default TodoItem
