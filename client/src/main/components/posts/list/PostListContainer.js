import React from "react";
import PostCardItem from "./PostCardItem";
class PostListContainer extends React.Component {
  render() {
    const { posts, updatePostScore, editPost } = this.props;
    return (
      <div>
        {posts.map(post => (
          <PostCardItem
            post={post}
            key={post.id}
            updatePostScore={updatePostScore}
            editPost={editPost}
          />
        ))}
      </div>
    );
  }
}

export default PostListContainer;
