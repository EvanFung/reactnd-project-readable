import { withStyles } from 'material-ui/styles'
const option = theme => ({
  root: {
    display: 'flex',
    float: 'right'
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.A300,
    fontWeight: 'bold'
  }
})
export default withStyles(option)
