import React, { Component } from 'react'
import '../res/styles/App.css'
import Reboot from 'material-ui/Reboot'
import { styles } from './styles/pages/MainRouterLayoutPage'
import Grid from 'material-ui/Grid'
import HeaderBar from './components/header/HeaderBar'
import TabContainer from './components/menu/TabContainer'
import AddPostTooltips from './components/menu/Tooltips'
import PostListContainer from './components/posts/list/PostListContainer'
import NewPost from './components/posts/create/NewPost'
class App extends Component {
  state = {
    formDialogOpen: false
  }
  handlePostFormOpen = () => {
    this.setState({ formDialogOpen: true })
  }
  handlePostFormClose = () => {
    this.setState({ formDialogOpen: false })
  }
  render() {
    const { classes } = this.props
    return (
      <div className="container">
        <Reboot />
        <HeaderBar />
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid container spacing={0}>
              <Grid item md={1} />
              <Grid item md={10} container={true} direction="column">
                <TabContainer />
                <PostListContainer />
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
    )
  }
}
export default styles(App)
