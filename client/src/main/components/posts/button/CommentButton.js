import React from 'react'
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'
import Typography from 'material-ui/Typography'
import styles from '../../../styles/post/button/CommentButton'
import { Link } from 'react-router-dom'
class CommentButton extends React.Component {
  render() {
    const { classes,post } = this.props
    return (
      <div className={classes.root}>
        <CardActions disableActionSpacing>
          <Link to={`/posts/id`}>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Link>
          <Typography>{post.commentCount}</Typography>
        </CardActions>
      </div>
    )
  }
}

export default styles(CommentButton)
