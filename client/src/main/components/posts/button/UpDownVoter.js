import React from "react";
import { CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ThumbUp from "material-ui-icons/ThumbUp";
import ThumbDown from "material-ui-icons/ThumbDown";
import classnames from "classnames";
import styles from "../../../styles/post/button/UpDownVoter";
class UpDownVoter extends React.Component {
  state = {
    voteScore:this.props.post.voteScore
  }

  handleUpdateScore = () => {
    this.setState({voteScore: this.props.post.voteScore})
  }


  render() {
    const { classes, post, updatePostScore } = this.props;
    return (
      <div>
        <CardActions disableActionSpacing className={classes.root}>
          <IconButton
            aria-label="Add to favorites"
            onClick={() => {
              updatePostScore(post, "upVote");
              this.handleUpdateScore();
            }}
          >
            <ThumbUp />
          </IconButton>
          <Typography>{this.state.voteScore}</Typography>
          <IconButton
            aria-label="Add to favorites"
            onClick={() => {
              updatePostScore(post, "downVote");
              this.handleUpdateScore();
            }}
          >
            <ThumbDown />
          </IconButton>
        </CardActions>
      </div>
    );
  }
}

export default styles(UpDownVoter);
