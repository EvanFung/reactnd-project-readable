import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import styles from '../../styles/menu/TabContainer'
class TabContainer extends React.Component {
  state = {
    value: 0
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Tabs fullWidth centered indicatorColor="primary" textColor="primary">
          <Tab label="NEW" />
          <Tab label="HOT" />
        </Tabs>
      </div>
    )
  }
}

export default styles(TabContainer)
