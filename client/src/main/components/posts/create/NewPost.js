import React from 'react'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { FormControl, FormHelperText } from 'material-ui/Form'
class NewPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Dialog
        open={this.props.formDialogOpen}
        onClose={this.props.handlePostFormClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New post</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <FormControl>
              <Chip label="React" />
              <Chip label="Redux" />
              <Chip label="React Native" />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Title"
                fullWidth="true"
                inputProps={{ 'aria-label': 'title' }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="body"
                fullWidth="true"
                inputProps={{ 'aria-label': 'body' }}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handlePostFormClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handlePostFormClose} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default NewPost
