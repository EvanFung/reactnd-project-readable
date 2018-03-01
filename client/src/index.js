import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './res/styles/index.css'
import 'typeface-roboto'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
