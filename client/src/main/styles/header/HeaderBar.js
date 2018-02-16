import { withStyles } from 'material-ui/styles'
//drawer menu takes up 40% of the screen
const drawerMenuWidth = document.documentElement.clientWidth * 0.4
const option = theme => ({
  root: {
    width: '100%'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  typography: {
    'text-align': 'center',
    flex: 1
  },
  drawerMenu: {
    width: drawerMenuWidth
  }
})

export default withStyles(option)
