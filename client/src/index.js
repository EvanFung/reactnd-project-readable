import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import App from "./main/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./res/styles/index.css";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
