import React from "react";
import { connect } from "react-redux";
import PostListContainer from "../posts/list/PostListContainer";
import TabContainer from "../menu/TabContainer";
import * as PostActions from "../../actions/post";
import NotFoundPage from "./NotFoundPage";
class AllPostsPage extends React.Component {
  componentWillMount() {
    this.props.actions.fetchPosts();
  }

  render() {
    const { posts, actions, activeCategory } = this.props;
    return (
      <div>
        {posts ? (
          <div>
            <TabContainer />
            <PostListContainer
              posts={posts}
              updatePostScore={actions.updatePostScore}
              editPost={actions.editPost}
              deletePost={actions.deletePost}
              activeCategory={activeCategory}
            />
          </div>
        ) : (
          <NotFoundPage />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    activeCategory: state.activeCategory
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
