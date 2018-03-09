import React from "react";
import Tabs, { Tab } from "material-ui/Tabs";
import styles from "../../styles/menu/TabContainer";
import { connect } from "react-redux";
import * as PostActions from "../../actions/post";
class TabContainer extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    
    return (
      <div>
        <Tabs
          fullWidth
          centered
          indicatorColor="primary"
          textColor="primary"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab
            label="NEW"
            onClick={() => {
              this.props.actions.sortPostsBy("timestamp");
            }}
          />
          <Tab
            label="HOT"
            onClick={() => {
              this.props.actions.sortPostsBy("voteScore");
            }}
          />
        </Tabs>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      sortPostsBy: criteria => dispatch(PostActions.sortPostsBy({ criteria }))
    }
  };
}
export default connect(null,mapDispatchToProps)(styles(TabContainer));
