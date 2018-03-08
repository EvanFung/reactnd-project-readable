import React from "react";
import PostCardItem from "./PostCardItem";
class PostListContainer extends React.Component {
  render() {
    const { posts, updatePostScore, editPost,deletePost } = this.props;
    const postsToDisplay = posts.filter(post => !post.deleted)
    return (
      <div>
        {postsToDisplay.map(post => (
          <PostCardItem
            post={post}
            key={post.id}
            updatePostScore={updatePostScore}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))}
      </div>
    );
  }
}

export default PostListContainer;
