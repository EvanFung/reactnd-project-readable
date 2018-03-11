import { withStyles } from 'material-ui/styles'

const option = theme => ({
  root: {
    maxWidth: '100%',
    padding: '0px',
    margin: theme.spacing.unit * 4,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ebebeb',
    justifyContent: 'space-between'
  },
  commentbox: {
    marginTop: theme.spacing.unit * 4
  },
  commentIcon: {
    paddingRight:theme.spacing.unit * 2
  }
})

export default withStyles(option)
