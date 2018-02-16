import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import styles from '../../styles/header/HeaderBar'
import Drawer from 'material-ui/Drawer'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import SendIcon from 'material-ui-icons/Send'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'

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
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.typography}
            >
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
                <ListSubheader component="div">Category</ListSubheader>
              }
            >
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText omset primary="React" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText omset primary="Redux" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText omset primary="Recer" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}
export default styles(HeaderBar)
