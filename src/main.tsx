import App from './app/App'
import GlobalStyles from './app/components/common/styles/GlobalStyles'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
