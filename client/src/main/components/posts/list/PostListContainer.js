import React from 'react'
import { Link } from 'react-router-dom'
import PostCardItem from './PostCardItem'
import styles from '../../../styles/post/PostListContainer'
class PostListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <PostCardItem />
      </div>
    )
  }
}
export default PostListContainer
