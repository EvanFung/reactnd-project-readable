import { withStyles } from 'material-ui/styles'

const option = theme => ({
  root: {
    maxWidth: '100%',
    padding: '0px',
    margin: theme.spacing.unit * 5,
    '&:hover': {
      background: '#f9f9f9',
      transition: '0.5 all',
      cursor: 'pointer'
    }
  }
})

export default withStyles(option)
