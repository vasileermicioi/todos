import * as React from 'react'
import { render } from 'react-dom'
import ApiProvider from './graphql/providers/ApolloRemoteProvider'

import './index.css'

import { App } from './components/app/App'

render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('root')
)
