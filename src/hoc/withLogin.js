import React, { Component } from "react";
import firebase from "../config/Firebase";

export default function withLogin(WrappedComponent) {
  return class extends Component {
    state = {
      isLoaing: false,
      error: ""
    };
    onSubmit = e => {
      e.preventDefault();
      const { formState } = this.props;
      const { email, password } = formState.formControls;
      this.setState({ error: "", isLoading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(signedInUser => {
          console.log(signedInUser);
          this.setState({ error: "", isLoading: false });
          this.props.history.push("/");
        })
        .catch(err => {
          this.setState({ error: err.message, isLoading: false });
        });
    };
    render() {
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          loginState={this.state}
          {...this.props}
        />
      );
    }
  };
}
