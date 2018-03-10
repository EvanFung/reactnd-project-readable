import React from "react";
import PostContent from "./PostContent";
import UpDownVoter from "../button/UpDownVoter";
import Divider from "material-ui/Divider";
import { connect } from "react-redux";
import * as CommentActions from "../../../actions/comment";
import { CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ThumbUp from "material-ui-icons/ThumbUp";
import ThumbDown from "material-ui-icons/ThumbDown";
import Loader from "../../assets/LoadingProgress";
import styles from "../../../styles/post/body/CommentBox";
class CommentBox extends React.Component {
  state = {
    isLoading: false
  };
  componentWillMount() {}
  render() {
    const { classes, actions } = this.props;
    if (!this.props.comments) {
      return <Loader />;
    }
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <div>
        {this.props.comments.map(comment => (
          <div key={comment.id}>
            <PostContent
              key={comment.id}
              post={comment}
              commentBox={true}
              editComment={actions.editComment}
              deleteComment={actions.deleteComment}
            />
            <CardActions disableActionSpacing className={classes.root}>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => {
                  actions.updateCommentScore(comment, "upVote");
                }}
              >
                <ThumbUp />
              </IconButton>
              <Typography>{comment.voteScore}</Typography>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => {
                  actions.updateCommentScore(comment, "downVote");
                }}
              >
                <ThumbDown />
              </IconButton>
            </CardActions>
            <Divider />
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    post: state.activePost,
    comments: state.comments
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateCommentScore: (comment, voteType) =>
        dispatch(CommentActions.updateCommentScore({ comment, voteType })),
      editComment: comment => dispatch(CommentActions.editComment({ comment })),
      deleteComment: comment =>
        dispatch(CommentActions.deleteComment({ comment }))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(styles(CommentBox));
