import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import styles from '../../styles/menu/TabContainer'
class TabContainer extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render() {
    return (
      <div>
        <Tabs
          fullWidth
          centered
          indicatorColor="primary"
          textColor="primary"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="NEW" />
          <Tab label="HOT" />
        </Tabs>
      </div>
    )
  }
}

export default styles(TabContainer)
