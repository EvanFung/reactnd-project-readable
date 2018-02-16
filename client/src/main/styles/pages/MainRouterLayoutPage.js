import { withStyles } from 'material-ui/styles'

const option = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  }
})

export const styles = withStyles(option)
