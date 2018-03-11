import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import styles from "../../styles/header/HeaderBar";
import Drawer from "material-ui/Drawer";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemText } from "material-ui/List";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as CategoryActions from "../../actions/category";

class HeaderBar extends React.Component {
  state = {
    drawerOpen: false
  };
  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };
  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };
  componentWillMount() {
    this.props.actions.fetchCategories();
  }
  render() {
    const { classes, activeCategory, categories, actions } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.typography}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              {activeCategory ? activeCategory.toUpperCase() : "Category"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.drawerOpen}
          onClose={this.handleDrawerClose}
          anchor="left"
        >
          <div tabIndex={0} className={classes.drawerMenu}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="nav">Category</ListSubheader>
              }
            >
              <ListItem
                button
                divider
                onClick={() => {
                  actions.setActiveCategory(null);
                  this.props.history.push(`/`);
                  this.handleDrawerClose();
                }}
              >
                <ListItemText primary="ALL" />
              </ListItem>
              {categories.map(category => (
                <ListItem
                  button
                  divider
                  key={`${category.name}`}
                  onClick={() => {
                    actions.setActiveCategory(category);
                    this.props.history.push(`/${category.name}`);
                    this.handleDrawerClose();
                  }}
                >
                  <ListItemText primary={`${category.name.toUpperCase()}`} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchCategories: () => dispatch(CategoryActions.fetchCategories()),
      setActiveCategory: category => {
        dispatch(
          CategoryActions.setActiveCategory(category ? category.path : null)
        );
      }
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(styles(HeaderBar))
);
