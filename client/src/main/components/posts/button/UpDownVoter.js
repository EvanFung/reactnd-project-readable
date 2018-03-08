import React from "react";
import { CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ThumbUp from "material-ui-icons/ThumbUp";
import ThumbDown from "material-ui-icons/ThumbDown";
import styles from "../../../styles/post/button/UpDownVoter";
class UpDownVoter extends React.Component {
  render() {
    const { classes, post, updatePostScore } = this.props;
    return (
      <div>
        <CardActions disableActionSpacing className={classes.root}>
          <IconButton
            aria-label="Add to favorites"
            onClick={()=> {updatePostScore(post,'upVote')}}
          >
            <ThumbUp />
          </IconButton>
          <Typography>{post.voteScore}</Typography>
          <IconButton
            aria-label="Add to favorites"
            onClick={()=> {updatePostScore(post,'downVote')}}
          >
            <ThumbDown />
          </IconButton>
        </CardActions>
      </div>
    );
  }
}

export default styles(UpDownVoter);
