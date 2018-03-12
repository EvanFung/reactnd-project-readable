import React from "react";
import Typography from "material-ui/Typography";
import { styles } from "../../styles/pages/NotFoundPage";
const NotFound = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display1" component="h1">
        YOU JUST GOT 404'D.
      </Typography>
      <Typography variant="display1" component="h1">
        THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST. SORRY:'(
      </Typography>
    </div>
  );
};
export default styles(NotFound);
