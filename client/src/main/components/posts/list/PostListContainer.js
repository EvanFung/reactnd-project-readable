import React from 'react'
import { Link } from 'react-router-dom'
import PostCardItem from './PostCardItem'
import {connect} from 'react-redux'
import * as PostActions from '../../../actions/post'
import styles from '../../../styles/post/PostListContainer'
class PostListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.actions.fetchPosts();
  }
  render() {
    const {posts} = this.props
    return (
      <div>
        <PostCardItem />
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
export default connect(mapStateToProps,mapDispatchToProps)(PostListContainer)
