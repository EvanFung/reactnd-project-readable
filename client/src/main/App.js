import React, { Component } from "react";
import "../res/styles/App.css";
import { Route, Switch } from "react-router-dom";
import HeaderBar from "./components/header";
import PostList from "./components/posts/PostList";
import RaisedButton from "material-ui/RaisedButton";
import BottomNavigator from "./components/footer";
class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderBar />
        <PostList className="main" />
        <BottomNavigator className="footer" />
      </div>
    );
  }
}
export default App;
