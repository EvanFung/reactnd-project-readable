import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from './PostCardItem'
import styles from '../../../styles/post/PostListContainer'
const PostListContainer = props => {
  return (
    <div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
export default PostListContainer
