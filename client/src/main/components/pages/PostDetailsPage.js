import React from 'react'
import Card from 'material-ui/Card'
import PostContent from '../posts/body/PostContent'
import NewComment from '../posts/create/NewComment'
import UpDownVoter from '../posts/button/UpDownVoter'
import styles from '../../styles/pages/PostDetailsPage'
import CommentBox from '../posts/body/CommentBox'
import Divider from 'material-ui/Divider'

import {connect} from 'react-redux'

import * as PostsActions from '../../actions/post'
import * as CategoryActions from '../../actions/category'
class PostDetailsPage extends React.Component {


  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card>
          <PostContent />
          <div className={classes.footer}>
            <UpDownVoter />
          </div>
          <div>
            <NewComment />
          </div>
        </Card>

        <Card className={classes.commentbox}>
          <CommentBox />
          <Divider light={true} />
          <CommentBox />
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      
    }
  }
}

export default styles(PostDetailsPage)
