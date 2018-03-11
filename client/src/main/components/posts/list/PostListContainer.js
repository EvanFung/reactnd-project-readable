import React from "react";
import PostCardItem from "./PostCardItem";
class PostListContainer extends React.Component {
  state = {
    posts:this.props.posts
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ posts: nextProps.posts})
  }
  render() {
    const {
      posts,
      updatePostScore,
      editPost,
      deletePost,
      activeCategory
    } = this.props;
    console.log(posts)
    const postsToDisplay = posts.filter(
      post => !activeCategory || post.category === activeCategory
    );
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
