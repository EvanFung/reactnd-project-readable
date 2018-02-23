import React, { Component } from 'react'
import '../res/styles/App.css'
import Reboot from 'material-ui/Reboot'
import { styles } from './styles/pages/MainRouterLayoutPage'
import Grid from 'material-ui/Grid'
import HeaderBar from './components/header/HeaderBar'
import TabContainer from './components/menu/TabContainer'
class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="container">
        <Reboot />
        <HeaderBar />
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid
              item
              md={12}
              container={true}
              direction="column"
              justify="center"
            >
              <TabContainer />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}
export default styles(App)
