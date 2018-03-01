import React from 'react'
import PostListContainer from '../post/list/PostListContainer'
import TabContainer from '../menu/TabContainer'

class AllPostPage extends React.Component {
  render() {
    return (
      <div>
        <TabContainer />
        <PostListContainer />
      </div>
    )
  }
}
export default AllPostPage
