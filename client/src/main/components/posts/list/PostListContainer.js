import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from './PostCardItem'
const PostListCOntainer = props => {
  return (
    <div className={classes.root}>
      <PostCard />
    </div>
  )
}
