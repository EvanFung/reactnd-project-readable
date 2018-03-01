import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLessIcon from 'material-ui-icons/ExpandLess'
import PostContent from '../posts/body/PostContent'
import NewComment from '../posts/create/NewComment'
import UpDownVoter from '../posts/button/UpDownVoter'
import CommentButton from '../posts/button/CommentButton'
import styles from '../../styles/pages/PostDetailsPage'
import CommentBox from '../posts/body/CommentBox'
import Divider from 'material-ui/Divider'
class PostDetailsPage extends React.Component {
  constructor(props) {
    super(props)
  }

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
export default styles(PostDetailsPage)