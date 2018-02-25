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
class PostContent extends React.Component {
  state = {
    anchorEl: null
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
                  <MenuItem onClick={this.handleCloseMoreIcon}>Edit</MenuItem>
                  <MenuItem onClick={this.handleCloseMoreIcon}>Delete</MenuItem>
                </Menu>
              </div>
            }
          />
        </div>
        <CardContent>
          <Typography>Article content</Typography>
        </CardContent>
      </div>
    )
  }
}
export default styles(PostContent)
