import React from 'react'
import Typography from 'material-ui/Typography'
import { styles } from '../../styles/pages/NotFoundPage'
const NotFound = (props) => {
    const {classes} = props
    return (
      <div className={ classes.root }>
        <Typography type="display1" component="h1">
          404
          Not Found
        </Typography>
      </div>
    )
  }
  export default styles(NotFound)