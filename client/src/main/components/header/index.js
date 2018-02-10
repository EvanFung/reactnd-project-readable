import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import HeaderMenu from "../menu/";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
class HeaderBar extends Component {
  state = {
    open: false
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  render() {
    return (
      <div className="header-container">
        <AppBar
          title="React Readable"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => {
            this.handleToggle();
          }}
        />
        <Drawer
          docked={false}
          width={"50%"}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default HeaderBar;
