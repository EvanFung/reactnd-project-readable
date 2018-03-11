import React, { Component } from "react";
import "../res/styles/App.css";
import Reboot from "material-ui/Reboot";
import { styles } from "./styles/pages/MainRouterLayoutPage";
import { Route, Switch } from "react-router-dom";
import Grid from "material-ui/Grid";
import HeaderBar from "./components/header/HeaderBar";
import AddPostTooltips from "./components/menu/Tooltips";
import NewPost from "./components/posts/create/NewPost";
import AllPostsPage from "./components/pages/AllPostsPage";
import PostDetailsPage from "./components/pages/PostDetailsPage";
import NotFoundPage from './components/pages/NotFoundPage'
class App extends Component {
  state = {
    formDialogOpen: false
  };
  handlePostFormOpen = () => {
    this.setState({ formDialogOpen: true });
  };
  handlePostFormClose = () => {
    this.setState({ formDialogOpen: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Reboot />
        <HeaderBar />
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid container spacing={0}>
              <Grid item md={1} />
              <Grid item md={10} container={true} direction="column">
                <Switch>
                  <Route exact path="/" component={AllPostsPage} />
                  <Route
                    exact
                    path="/:category"
                    render={({ match, location }) => (
                      <AllPostsPage category={match.params.category} />
                    )}
                  />
                  <Route
                    exact
                    path="/:category/:postId"
                    render={({ match, location }) => (
                      <PostDetailsPage
                        category={match.params.category}
                        postId={match.params.postId}
                      />
                    )}
                  />
                  <Route path="*" component={NotFoundPage}/>
                </Switch>
              </Grid>
              <Grid item md={1} />
            </Grid>
          </Grid>
          <AddPostTooltips onTooltipsClick={this.handlePostFormOpen} />
          <NewPost
            handlePostFormClose={this.handlePostFormClose}
            formDialogOpen={this.state.formDialogOpen}
          />
        </div>
      </div>
    );
  }
}

export default styles(App);
