import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import './res/styles/index.css'
import 'typeface-roboto'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
