import React from "react";
import Button from "material-ui/Button";
import styles from '../../../styles/post/button/PostSaveCancelButton'
const PostSaveCancelButton = props => {
  const {classes}  = this.props;
  return (
    <div className={classes.root}>
      <Button color="accent">cancel</Button>
      <Button color="accent">save</Button>
    </div>
  );
};

export default styles(PostSaveCancelButton)
