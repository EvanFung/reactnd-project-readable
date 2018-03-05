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
    const { posts,actions } = this.props;
    return (
      <div>
        <TabContainer />
        <PostListContainer posts={posts} updatePostScore={actions.updatePostScore} />
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
      updatePostScore: (post, voteType) => dispatch(PostActions.updatePostScore({ post, voteType })),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPostsPage);
