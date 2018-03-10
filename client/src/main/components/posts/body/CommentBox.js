import React from "react";
import PostContent from "./PostContent";
import UpDownVoter from "../button/UpDownVoter";
import styles from "../../../styles/post/body/CommentBox";
class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <PostContent
          post={this.props.post}
          editPost={this.props.editPost}
          deletePost={this.props.deletePost}
          commentMode={this.props.commentMode}
          fetchPosts={this.props.fetchPosts}
          setActiveCategory={this.props.setActiveCategory}
        />
        <UpDownVoter
          updatePostScore={this.props.updatePostScore}
          post={this.props.post}
        />
      </div>
    );
  }
}
export default styles(CommentBox);
