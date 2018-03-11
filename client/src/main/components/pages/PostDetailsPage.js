import React from "react";
import Card from "material-ui/Card";
import PostContent from "../posts/body/PostContent";
import NewComment from "../posts/create/NewComment";
import UpDownVoter from "../posts/button/UpDownVoter";
import styles from "../../styles/pages/PostDetailsPage";
import CommentBox from "../posts/body/CommentBox";
import Divider from "material-ui/Divider";
import Loader from "../assets/LoadingProgress";
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'
import Typography from 'material-ui/Typography'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as PostActions from "../../actions/post";
import * as CategoryActions from "../../actions/category";
import * as CommentActions from "../../actions/comment";
import NotFoundPage from "./NotFoundPage";
class PostDetailsPage extends React.Component {
  state = {
    isLoading: false
  };
  componentWillMount() {
    this.setState({ isLoading: true });
    this.props.actions.fetchPost(this.props.postId).then(() => {
      if (!this.props.post) {
        this.setState({ isLoading: true });
      } else {
        this.props.actions
          .fetchCommentsForPost(this.props.post)
          .then(this.setState({ isLoading: false }));
      }
    });

    this.props.actions.setActiveCategory(this.props.category);
  }

  requestDeletePost = post => {
    this.props.actions.deletePost(post).then(() => {
      this.props.actions.setActiveCategory(null);
      this.props.history.push(`/`);
    });
  };
  render() {
    const { classes, post, actions } = this.props;
    if (!post) {
      return <Loader />;
    }
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div>
        {post ? (
          <div>
            {post.id ? (
              <div>
                <div className={classes.root}>
                  <Card>
                    <PostContent
                      post={post}
                      editPost={actions.editPost}
                      deletePost={this.requestDeletePost}
                      postDetails={true}
                      fetchPosts={actions.fetchPosts}
                      setActiveCategory={actions.setActiveCategory}
                    />
                    <div className={classes.footer}>
                      <UpDownVoter
                        post={post}
                        updatePostScore={actions.updatePostScore}
                      />
                      <CardActions disableActionSpacing className={classes.commentIcon}>
                        <IconButton>
                          <CommentIcon />
                        </IconButton>
                        <Typography>{post.commentCount}</Typography>
                      </CardActions>
                    </div>
                    <div>
                      <NewComment
                        postNewComment={actions.postNewComment}
                        post={post}
                      />
                    </div>
                  </Card>

                  <Card className={classes.commentbox}>
                    <CommentBox />
                  </Card>
                </div>
              </div>
            ) : (
              <NotFoundPage />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    post: state.activePost
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchPost: postId => dispatch(PostActions.fetchPostData({ postId })),
      setActiveCategory: category =>
        dispatch(CategoryActions.setActiveCategory(category)),
      fetchCommentsForPost: post =>
        dispatch(CommentActions.fetchCommentsForPost({ post })),
      updatePostScore: (post, voteType) =>
        dispatch(PostActions.updatePostScore({ post, voteType })),
      deletePost: post => dispatch(PostActions.deletePost({ post })),
      editPost: data => dispatch(PostActions.editPost(data)),
      fetchPosts: () => dispatch(PostActions.fetchPosts()),
      postNewComment: (post, comment) =>
        dispatch(CommentActions.postNewComment({ post, comment }))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(styles(PostDetailsPage))
);
