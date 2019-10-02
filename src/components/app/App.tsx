import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import TodoPage from '../todo/TodoPage'

export const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/todo/list">Todos</Link>
          </li>
          <li>
            <Link to="/todo/list/2">Todos page 2</Link>
          </li>
        </ul>
      </nav>

      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      <Route path="/todo/list/:page?" component={TodoPage} />
    </div>
  </Router>
)
