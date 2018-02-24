import React from 'react'
import { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import styles from '../../../styles/post/body/PostContent'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'

class PostContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.root}>
          <CardHeader
            avatar={<Avatar aria-label="post">A</Avatar>}
            title="Full Name"
            subheader="2018-2-22"
            action={
              <div>
                <Button className={classes.postLabel}>React</Button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            }
          />
        </div>
        <CardContent>
          <Typography>Article content</Typography>
        </CardContent>
      </div>
    )
  }
}
export default styles(PostContent)
