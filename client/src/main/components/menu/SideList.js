import React from 'react'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

function SideList(props) {
  return (
    <div>
      <List>A</List>
      <Divider variant="persistent" open={true} />
      <List>B</List>
    </div>
  )
}

export default SideList
