import React from 'react'
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import styles from '../../../styles/post/button/CommentButton'
import { Link } from 'react-router-dom'
class CommentButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <CardActions disableActionSpacing>
          <Link to={`/post`}>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Link>
          <Typography>3</Typography>
          <Link to={`/post`}>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Link>
        </CardActions>
      </div>
    )
  }
}

export default styles(CommentButton)
