import { withStyles } from 'material-ui/styles'
//drawer menu takes up 30% of the screen
const drawerMenuWidth = document.documentElement.clientWidth * 0.3
const option = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerMenu: {
    width: drawerMenuWidth,
    textAlign: 'center'
  }
})

export default withStyles(option)
