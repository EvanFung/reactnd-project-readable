import React from "react";
import Card from "material-ui/Card";
import PostContent from "../body/PostContent";
import styles from "../../../styles/post/PostCardItem";
import UpDownVoter from "../button/UpDownVoter";
import CommentButton from "../button/CommentButton";
import { connect } from "react-redux";
import * as PostActions from "../../../actions/post";
class PostCardItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes,actions } = this.props;
    return (
      <div>
        <Card className={classes.root}>
          <PostContent post={this.props.post} />
          <div className={classes.footer}>
            <UpDownVoter post={this.props.post} updatePostScore={actions.updatePostScore} />
            <CommentButton post={this.props.post} />
          </div>
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      updatePostScore: (post, voteType) =>
        dispatch(PostActions.updatePostScore({ post, voteType }))
    }
  };
};
export default connect(null,mapDispatchToProps)(styles(PostCardItem));
