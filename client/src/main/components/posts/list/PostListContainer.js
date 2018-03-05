import React from "react";
import PostCardItem from "./PostCardItem";
class PostListContainer extends React.Component {
  render() {
    const { posts, updatePostScore } = this.props;
    return (
      <div>{posts.map(post => <PostCardItem post={post} key={post.id} updatePostScore={updatePostScore} />)}</div>
    );
  }
}

export default PostListContainer;
