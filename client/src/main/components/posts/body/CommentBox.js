import React from 'react'
import PostContent from './PostContent'
import UpDownVoter from '../button/UpDownVoter'
import styles from '../../../styles/post/body/CommentBox'
class CommentBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PostContent />
        <UpDownVoter />
      </div>
    )
  }
}
export default styles(CommentBox)
