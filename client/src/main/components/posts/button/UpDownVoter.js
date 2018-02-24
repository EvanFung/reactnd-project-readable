import React from 'react'
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ThumbUp from 'material-ui-icons/ThumbUp'
import ThumbDown from 'material-ui-icons/ThumbDown'
import classnames from 'classnames'
import styles from '../../../styles/post/button/UpDownVoter'
class UpDownVoter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <CardActions disableActionSpacing className={classes.root}>
          <IconButton aria-label="Add to favorites">
            <ThumbUp />
          </IconButton>
          <Typography>8</Typography>
          <IconButton aria-label="Add to favorites">
            <ThumbDown />
          </IconButton>
          <Typography>2</Typography>
        </CardActions>
      </div>
    )
  }
}

export default styles(UpDownVoter)
