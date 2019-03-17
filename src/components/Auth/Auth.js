import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import routesName from "../../route/routesName";

import AuthView from "./AuthView/AuthView";
import AuthFormLogin from "./AuthFormLogin/AuthFormLogin";
import AuthFormRegistration from "./AuthFormRegistration/AuthFormRegistration";

export class Auth extends Component {
  render() {
    return (
      <AuthView>
        <Switch>
          <Route path={routesName.login} component={AuthFormLogin} />
          <Route
            path={routesName.registration}
            component={AuthFormRegistration}
          />
        </Switch>
      </AuthView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
