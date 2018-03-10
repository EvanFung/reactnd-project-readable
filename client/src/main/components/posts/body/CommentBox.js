import React from 'react'
import PostContent from './PostContent'
import UpDownVoter from '../button/UpDownVoter'
import styles from '../../../styles/post/body/CommentBox'
class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <PostContent post={this.props.post} />
        <UpDownVoter />
      </div>
    )
  }
}
export default styles(CommentBox)
