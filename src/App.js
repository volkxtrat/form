import React, { Component } from "react";

import Paper from "./components/Ui/Paper/Paper";
import "./App.css";
import Typography from "./components/Ui/Typography/Typography";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Paper style={{ color: "red" }}>
            <Typography
              noWrap
              style={{ color: "green" }}
              color="primary"
              variant="h1"
            >
              Hello
            </Typography>
            <Typography noWrap color="textSecondary" variant="h2">
              Hello
            </Typography>
            <Typography color="textDisabled" variant="h3">
              Hello
            </Typography>
            <Typography color="default" variant="h4">
              Hello
            </Typography>
            <Typography color="inherit" variant="h5">
              Hello
            </Typography>
            <Typography color="success" variant="h6">
              Hello
            </Typography>
            <Typography color="error" variant="body2">
              Hello
            </Typography>
            <Typography color="warning" variant="body1">
              Hello
            </Typography>
            <Typography color="secondary" variant="caption">
              Hello
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
