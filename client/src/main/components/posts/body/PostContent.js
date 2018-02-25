import React from 'react'
import { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import styles from '../../../styles/post/body/PostContent'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

class PostContent extends React.Component {
  state = {
    anchorEl: null,
    dialogOpen: false
  }
  constructor(props) {
    super(props)
  }

  handleClickMoreIcon = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleCloseMoreIcon = () => {
    this.setState({ anchorEl: null })
  }

  handleDialogOpen = () => {
    this.handleCloseMoreIcon()
    this.setState({ dialogOpen: true })
  }

  handleDialogClose = () => {
    this.setState({ dialogOpen: false })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <div>
        <div className={classes.root}>
          <CardHeader
            avatar={<Avatar aria-label="post">A</Avatar>}
            title="Full Name"
            subheader="2018-2-22"
            action={
              <div>
                <Button className={classes.postLabel}>React</Button>
                <IconButton
                  onClick={this.handleClickMoreIcon}
                  aria-owns={anchorEl ? 'post-menu' : null}
                  aria-haspopup="true"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="post-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleCloseMoreIcon}
                >
                  <MenuItem onClick={this.handleDialogOpen}>Edit</MenuItem>
                  <MenuItem onClick={this.handleDialogOpen}>Delete</MenuItem>
                </Menu>
              </div>
            }
          />
        </div>
        <CardContent>
          <Typography>Article content</Typography>
        </CardContent>

        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alter-dialog-description"
        >
          <DialogTitle id="alter-dialog-title">
            {'Are you sure delete this post?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              A deleted post cannot be recovered.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleDialogClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
export default styles(PostContent)
