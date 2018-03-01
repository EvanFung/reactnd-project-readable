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
import {
  FormControl,
  FormHelperText,
  FormGroup,
  FormControlLabel
} from 'material-ui/Form'
import styles from '../../../styles/post/create/NewPost'
import Radio, { RadioGroup } from 'material-ui/Radio'
class NewPost extends React.Component {
  state = {
    selectedValue: 'react'
  }
  constructor(props) {
    super(props)
  }

  handleRBChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <Dialog
        open={this.props.formDialogOpen}
        onClose={this.props.handlePostFormClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <form noValidate autoComplete="off">
            <DialogContent>
              <FormGroup className={classes.root}>
                <RadioGroup
                  aria-label="category"
                  name="category-radio"
                  value={this.state.selectedValue}
                  onChange={this.handleRBChange}
                  row
                >
                  <FormControlLabel
                    value="react"
                    control={<Radio />}
                    label="React"
                  />
                  <FormControlLabel
                    value="redux"
                    control={<Radio />}
                    label="Redux"
                  />
                  <FormControlLabel
                    value="Reactnative"
                    control={<Radio />}
                    label="React Native"
                  />
                </RadioGroup>
              </FormGroup>
              <FormGroup className={classes.root}>
                <Input
                  placeholder="Title"
                  inputProps={{ 'aria-label': 'title' }}
                  autoFocus
                />
              </FormGroup>
              <FormGroup className={classes.root}>
                <Input
                  placeholder="Author"
                  inputProps={{ 'aria-label': 'Author' }}
                />
              </FormGroup>
              <FormGroup className={classes.root}>
                <Input
                  placeholder="Contents"
                  inputProps={{ 'aria-label': 'body' }}
                  multiline={true}
                />
              </FormGroup>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handlePostFormClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.handlePostFormClose} color="primary">
                Post
              </Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    )
  }
}

export default styles(NewPost)
