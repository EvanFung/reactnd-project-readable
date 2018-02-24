import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import styles from '../../styles/header/HeaderBar'
import Drawer from 'material-ui/Drawer'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemText } from 'material-ui/List'

class HeaderBar extends React.Component {
  state = {
    drawerOpen: false
  }
  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true })
  }
  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.typography}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Category
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.drawerOpen}
          onClose={this.handleDrawerClose}
          anchor="left"
        >
          <div tabIndex={0} className={classes.drawerMenu}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="nav">Category</ListSubheader>
              }
            >
              <ListItem button divider>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Redux" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Recer" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}
export default styles(HeaderBar)
