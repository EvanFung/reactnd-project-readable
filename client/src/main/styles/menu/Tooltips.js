import { withStyles } from 'material-ui/styles'
const option = theme => ({
  root: {
    opacity: 0.65
  },
  fab: {
    margin: theme.spacing.unit * 1
  },
  fixed: {
    position: 'fixed',
    bottom: 20,
    right: 20
  }
})
export default withStyles(option)
