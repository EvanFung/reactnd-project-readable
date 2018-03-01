import { withStyles } from 'material-ui/styles'

const option = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    marginLeft: theme.spacing.unit * 2
  }
})

export default withStyles(option)
