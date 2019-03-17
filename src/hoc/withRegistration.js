import React, { Component } from "react";
import firebase from "../config/Firebase";

export default function withRegistration(WrappedComponent) {
  return class extends Component {
    state = {
      usersRef: firebase.database().ref("users"),
      message: { text: "", type: "error" },
      isLoading: false
    };

    successMsg = "You have successfully registered";

    saveUser = createdUser => {
      const { formState } = this.props;
      const { secondName } = formState.formControls;

      return this.state.usersRef.child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        secondName: secondName
      });
    };

    onSubmit = e => {
      e.preventDefault();
      const { formState } = this.props;
      const { email, password, firstName } = formState.formControls;
      this.setState({ message: { text: "", type: "error" }, isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(createdUser => {
          createdUser.user
            .updateProfile({
              displayName: firstName.value
            })
            .then(() => {
              this.saveUser(createdUser);
              console.log(createdUser);
              this.setState({
                isLoading: false,
                message: { text: this.successMsg, type: "success" }
              });
              setTimeout(() => {
                this.props.history.push("/login");
              }, 2000);
            });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            message: { text: err.message, type: "error" },
            isLoading: false
          });
        });
    };

    render() {
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          regState={this.state}
          {...this.props}
        />
      );
    }
  };
}
