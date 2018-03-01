import React from 'react'
import { CardContent } from 'material-ui/Card'
import { FormHelperText } from 'material-ui/Form'
import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input'

class NewComment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardContent>
        <Avatar />
        <Input
          placeholder="Leave a comment"
          fullWidth="true"
          disableUnderline="true"
          inputProps={{
            'aria-label': 'comment'
          }}
        />
      </CardContent>
    )
  }
}

export default NewComment
