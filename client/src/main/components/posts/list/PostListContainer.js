import React from "react";
import PostCardItem from "./PostCardItem";
class PostListContainer extends React.Component {
  render() {
    const { posts } = this.props;
    return <div>{posts.map(post => <PostCardItem post={post} key={post.id} />)}</div>;
  }
}

export default PostListContainer;
