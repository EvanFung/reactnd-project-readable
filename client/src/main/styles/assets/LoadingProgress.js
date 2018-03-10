import { withStyles } from 'material-ui/styles'

const option = theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 10
  }
})

export const styles = withStyles(option)