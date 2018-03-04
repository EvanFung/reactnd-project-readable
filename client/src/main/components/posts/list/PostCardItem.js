import React from 'react'
import Card from 'material-ui/Card'
import PostContent from '../body/PostContent'
import styles from '../../../styles/post/PostCardItem'
import UpDownVoter from '../button/UpDownVoter'
import CommentButton from '../button/CommentButton'
import { Link } from 'react-router-dom'
class PostCardItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.root}>
          <PostContent post={this.props.post} />
          <div className={classes.footer}>
            <UpDownVoter post={this.props.post}/>
            <CommentButton post={this.props.post} />
          </div>
        </Card>
      </div>
    )
  }
}
export default styles(PostCardItem)
