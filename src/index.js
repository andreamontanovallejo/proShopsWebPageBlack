import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import App from './App'
import Context from './Context'

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
)
