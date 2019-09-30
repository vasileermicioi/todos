import * as React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import CreateClient from './services/GqlClient'

import './index.css'

import { App } from './components/app/App'

render(
  <ApolloProvider client={CreateClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
