import React from "react";
import Button from "material-ui/Button";
import Input from "material-ui/Input";
import Dialog, { DialogActions, DialogContent } from "material-ui/Dialog";
import { FormGroup, FormControlLabel } from "material-ui/Form";
import styles from "../../../styles/post/create/NewPost";
import Radio, { RadioGroup } from "material-ui/Radio";
import { connect } from "react-redux";
import * as PostActions from "../../../actions/post";
class NewPost extends React.Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: "react"
  };

  handleRBChange = event => {
    this.setState({ category: event.target.value });
  };

  onCreatePost = e => {
    e.preventDefault();
    this.props.actions.createPost(this.state);
    this.props.handlePostFormClose();
  };

  render() {
    const { classes } = this.props;
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
                  value={this.state.category}
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
                  inputProps={{ "aria-label": "title" }}
                  onChange={e => {
                    this.setState({ title: e.target.value });
                  }}
                  autoFocus
                />
              </FormGroup>
              <FormGroup className={classes.root}>
                <Input
                  placeholder="Author"
                  inputProps={{ "aria-label": "Author" }}
                  onChange={e => {
                    this.setState({ author: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup className={classes.root}>
                <Input
                  placeholder="Contents"
                  inputProps={{ "aria-label": "body" }}
                  onChange={e => {
                    this.setState({ body: e.target.value });
                  }}
                  multiline={true}
                />
              </FormGroup>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handlePostFormClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.onCreatePost} color="primary">
                Post
              </Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchPosts: () => dispatch(PostActions.fetchPosts()),
      createPost: data => dispatch(PostActions.createPost(data))
    }
  };
}
export default connect(null, mapDispatchToProps)(styles(NewPost));
