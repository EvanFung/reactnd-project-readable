import React from 'react'
import Card from 'material-ui/Card'
import PostContent from '../body/PostContent'
import styles from '../../../styles/post/PostCardItem'
class PostCardItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.root}>
          <PostContent />
        </Card>
      </div>
    )
  }
}
export default styles(PostCardItem)
