import React from 'react'
import { CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input'
import styles from '../../../styles/post/create/NewComment'
class NewComment extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <CardContent className={classes.root}>
          <Avatar>EF</Avatar>
          <Input
            placeholder="Leave a comment"
            fullWidth={true}
            disableUnderline={true}
            inputProps={{
              'aria-label': 'comment'
            }}
            className={classes.input}
          />
        </CardContent>
      </div>
    )
  }
}

export default styles(NewComment)
