import React, { Component } from 'react'
import '../res/styles/App.css'
import Reboot from 'material-ui/Reboot'
import { styles } from './styles/pages/MainRouterLayoutPage'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import HeaderBar from './components/header/HeaderBar'
class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="container">
        <Reboot />
        <HeaderBar />
      </div>
    )
  }
}
export default styles(App)
