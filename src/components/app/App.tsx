import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoPage from '../todo/todo-page/TodoPage'

export const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo/list">Todos</Link>
          </li>
          <li>
            <Link to="/todo/list/2">Todos page 2</Link>
          </li>
        </ul>
      </nav>

      <Route path="/todo/list/:page?" component={TodoPage} />
    </div>
  </Router>
)
