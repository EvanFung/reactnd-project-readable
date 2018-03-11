import React from "react";
import { CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Input from "material-ui/Input";
import styles from "../../../styles/post/create/NewComment";
import * as Utils from "../../../utils/Utils";
class NewComment extends React.Component {
  state = {
    author: Utils.fakeName(),
    body: ""
  };


  onSubmitForm = e => {
    const body = this.state.body;
    if (e.charCode === 13) {
      if (this.checkIsEmpty()) {
        this.props.postNewComment(this.props.post, this.state).then(() => {
          this.resetForm();
        });
      }
    }
  };

  resetForm = () => {
    this.setState({
      author: Utils.fakeName(),
      body: ""
    });
  };

  handleInputChange = e => {
    this.setState({ body: e.target.value });
  };

  checkIsEmpty() {
    const body = this.state.body;
    const isFilled = body ? true : false;
    return isFilled;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CardContent className={classes.root}>
          <Avatar>FK</Avatar>
          <Input
            placeholder="Leave a comment"
            fullWidth={true}
            disableUnderline={true}
            inputProps={{
              "aria-label": "comment"
            }}
            value={this.state.body || ""}
            className={classes.input}
            onKeyPress={this.onSubmitForm}
            onChange={this.handleInputChange}
          />
        </CardContent>
      </div>
    );
  }
}

export default styles(NewComment);
