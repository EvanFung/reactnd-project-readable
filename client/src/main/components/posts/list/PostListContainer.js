import React from "react";
import { Link } from "react-router-dom";
import PostCardItem from "./PostCardItem";
import styles from "../../../styles/post/PostListContainer";
class PostListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;
    return <div>{posts.map(post => <PostCardItem post={post} key={post.id} />)}</div>;
  }
}

export default PostListContainer;
