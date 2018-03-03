import React from 'react'
import {connect} from 'react-redux'
import PostListContainer from '../posts/list/PostListContainer'
import TabContainer from '../menu/TabContainer'
import * as PostActions from '../../actions/post'
class AllPostsPage extends React.Component {
  componentWillMount() {
    this.props.actions.fetchPosts()
  }
  render() {
    const {posts} = this.props
    return (
      <div>
        <TabContainer />
        <PostListContainer posts={posts}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts:state.posts
  }
}
function mapDispatchToProps(dispatch,ownProps) {
  return {
    actions: {
      fetchPosts: () => dispatch(PostActions.fetchPosts())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllPostsPage)
