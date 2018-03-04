import React from 'react'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip'
import styles from '../../styles/menu/Tooltips'
function Tooltips(props) {
  const { classes } = props
  return (
    <div>
      <Tooltip title="Add post" className={classes.root}>
        <Button
          onClick={props.onTooltipsClick}
          variant="fab"
          color="secondary"
          className={classes.fixed}
        >
          <AddIcon/>
        </Button>
      </Tooltip>
    </div>
  )
}

export default styles(Tooltips)
