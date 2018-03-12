import React from "react";
import Card from "material-ui/Card";
import PostContent from "../body/PostContent";
import styles from "../../../styles/post/PostCardItem";
import UpDownVoter from "../button/UpDownVoter";
import CommentButton from "../button/CommentButton";

class PostCardItem extends React.Component {
  requestDeletePost = post => {
    this.props.deletePost(post);
  };
  render() {
    const { classes, updatePostScore, editPost } = this.props;
    return (
      <div>
        <Card className={classes.root}>
          <PostContent
            post={this.props.post}
            editPost={editPost}
            deletePost={this.requestDeletePost}
          />
          <div className={classes.footer}>
            <UpDownVoter
              post={this.props.post}
              updatePostScore={updatePostScore}
            />
            <CommentButton post={this.props.post} />
          </div>
        </Card>
      </div>
    );
  }
}

export default styles(PostCardItem);
