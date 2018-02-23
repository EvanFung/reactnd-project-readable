import { withStyles } from 'material-ui/styles'
const option = theme => ({
  fab: {
    margin: theme.spacing.unit * 2
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
})
export default withStyles(option)
