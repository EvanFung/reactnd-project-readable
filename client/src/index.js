import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./res/styles/index.css";
import "typeface-roboto";
import configureStore from "./main/store/configureStore";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
