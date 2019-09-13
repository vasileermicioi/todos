import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../auth/Login"
import Register from "../auth/Register"
import TodoItem from "../todo/TodoItem"
import TodoList from "../todo/TodoList"

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
            <Link to="/todo/item/1">Todo Item 1</Link>
          </li>
          <li>
            <Link to="/todo/item/2">Todo Item 2</Link>
          </li>
          <li>
            <Link to="/todo/list">Todo List</Link>
          </li>
        </ul>
      </nav>

      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      <Route path="/todo/item/:id" component={TodoItem} />
      <Route path="/todo/list" component={TodoList} />
    </div>
  </Router>
)
