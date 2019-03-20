import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Auth } from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import firebase from "./config/Firebase";
import * as UserActionCreators from "./store/actions/user";
import { Switch, Route } from "react-router-dom";
import routesName from "./route/routesName";
import AuthFormLogin from "./components/Auth/AuthFormLogin/AuthFormLogin";
import AuthFormRegistration from "./components/Auth/AuthFormRegistration/AuthFormRegistration";
import Spinner from "./components/Ui/Spinner/Spinner";

class App extends Component {
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.actions.user.setUser(user);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <Layout>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <Auth className="App">
            <Switch>
              <Route path={routesName.login} component={AuthFormLogin} />
              <Route
                path={routesName.registration}
                component={AuthFormRegistration}
              />
            </Switch>
          </Auth>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      user: bindActionCreators(UserActionCreators, dispatch)
    }
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
