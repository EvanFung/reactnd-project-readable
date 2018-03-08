import React from "react";
import { connect } from "react-redux";
import PostListContainer from "../posts/list/PostListContainer";
import TabContainer from "../menu/TabContainer";
import * as PostActions from "../../actions/post";
class AllPostsPage extends React.Component {
  componentWillMount() {
    this.props.actions.fetchPosts();
  }
  render() {
    const { posts, actions } = this.props;
    return (
      <div>
        <TabContainer />
        <PostListContainer
          posts={posts}
          updatePostScore={actions.updatePostScore}
          editPost={actions.editPost}
          deletePost={actions.deletePost}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      fetchPosts: () => dispatch(PostActions.fetchPosts()),
      updatePostScore: (post, voteType) =>
        dispatch(PostActions.updatePostScore({ post, voteType })),
      editPost: data => dispatch(PostActions.editPost(data)),
      deletePost: post => dispatch(PostActions.deletePost({ post }))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPostsPage);
