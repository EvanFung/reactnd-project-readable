import { withStyles } from 'material-ui/styles'

const option = theme => ({
  root: {
    width: '100%'
  },
  postLabel: {
    borderRadius: '0',
    color: 'white',
    height: '50%',
    backgroundColor: '#4FC3F7',
    fontSize: '14px',
    minHeight: '0 !important',
    padding: '5px',
    width: '30px'
  }
})

export default withStyles(option)
