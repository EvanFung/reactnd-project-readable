import React from "react";
import { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import Input from "material-ui/Input";
import Button from "material-ui/Button";
import styles from "../../../styles/post/body/PostContent";
import MoreVertIcon from "material-ui-icons/MoreVert";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import * as Utils from "../../../utils/Utils";
import { withRouter } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
class PostContent extends React.Component {
  state = {
    anchorEl: null,
    dialogOpen: false,
    isEditing: false,
    id: this.props.post.id,
    title: this.props.post.title,
    category: this.props.post.category,
    body: this.props.post.body,
    fullAuthorName: this.props.post.author,
    shortAuthorName: this.props.post.author
  };

  handleClickMoreIcon = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleCloseMoreIcon = () => {
    this.setState({ anchorEl: null });
  };

  handleDialogOpen = () => {
    this.handleCloseMoreIcon();
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleEditViewOpen = () => {
    this.handleCloseMoreIcon();
    this.setState({ isEditing: true });
  };

  handleEditViewClose = () => {
    this.setState({ isEditing: false });
  };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  onBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  closePostEditVie = e => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    this.handleEditViewClose();
  };
  onSubmitForm = e => {
    e.preventDefault();

    if (this.props.commentBox) {
      this.props.editComment({ ...this.props.post, ...this.state });
    } else {
      this.props.editPost({ ...this.props.post, ...this.state });
    }
    this.handleEditViewClose();
  };
  handleDeletePost = e => {
    e.preventDefault();
    this.props.deletePost(this.props.post);
    this.handleDialogClose();
  };
  render() {
    const { classes, post } = this.props;
    const { anchorEl, isEditing } = this.state;
    const MAX_LENGTH = 200;

    return (
      <div>
        {post ? (
          <div>
            {post.id ? (
              <div>
                <div className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="post">
                        {Utils.username(this.props.post.author)}
                      </Avatar>
                    }
                    title={post.author}
                    subheader={Utils.date(post.timestamp)}
                    action={
                      <div>
                        {this.props.commentBox ? null : (
                          <Button className={classes.postLabel}>
                            {post.category}
                          </Button>
                        )}

                        <IconButton
                          onClick={this.handleClickMoreIcon}
                          aria-owns={anchorEl ? "post-menu" : null}
                          aria-haspopup="true"
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="post-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleCloseMoreIcon}
                        >
                          <MenuItem onClick={this.handleEditViewOpen}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={this.handleDialogOpen}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </div>
                    }
                  />
                </div>
                {!isEditing ? (
                  <CardContent>
                    <Typography variant="title">{post.title}</Typography>
                    <Typography>
                      {post.body.length > MAX_LENGTH
                        ? `${post.body.substring(0, MAX_LENGTH)}....`
                        : `${post.body}`}
                    </Typography>
                  </CardContent>
                ) : (
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <div className={classes.postSaveCancelDiv}>
                        <Button
                          color="primary"
                          className={classes.postSaveCancelButton}
                          onClick={this.closePostEditVie}
                        >
                          cancel
                        </Button>
                        <Button
                          color="primary"
                          className={classes.postSaveCancelButton}
                          onClick={this.onSubmitForm}
                        >
                          save
                        </Button>
                      </div>
                      {this.props.commentBox ? null : (
                        <Input
                          placeholder="Post title"
                          fullWidth={true}
                          defaultValue={this.state.title}
                          margin="dense"
                          onChange={this.onTitleChange}
                          disableUnderline={true}
                        />
                      )}
                      <Input
                        placeholder="Post body"
                        fullWidth={true}
                        defaultValue={this.state.body}
                        margin="dense"
                        onChange={this.onBodyChange}
                        disableUnderline={true}
                      />
                    </form>
                  </CardContent>
                )}

                <Dialog
                  open={this.state.dialogOpen}
                  onClose={this.handleDialogClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alter-dialog-description"
                >
                  <DialogTitle id="alter-dialog-title">
                    {"Are you sure to delete this post?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      A deleted post cannot be recovered.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleDialogClose} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={this.handleDeletePost} color="primary">
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            ) : (
              <NotFoundPage />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(styles(PostContent));
