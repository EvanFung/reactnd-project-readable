import React from 'react'
import PostListContainer from '../posts/list/PostListContainer'
import TabContainer from '../menu/TabContainer'

class AllPostsPage extends React.Component {
  render() {
    return (
      <div>
        <TabContainer />
        <PostListContainer />
      </div>
    )
  }
}
export default AllPostsPage
