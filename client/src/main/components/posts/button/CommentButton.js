import React from 'react'
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import styles from '../../../styles/post/button/CommentButton'
class CommentButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <CardActions disableActionSpacing>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <Typography>3</Typography>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </div>
    )
  }
}

export default styles(CommentButton)
