import React, { Component } from "react";

import { Auth } from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Auth className="App" />
      </Layout>
    );
  }
}

export default App;
