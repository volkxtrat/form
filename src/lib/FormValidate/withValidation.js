import React, { PureComponent } from "react";
import { createFormControl, onChangeHandler } from "./FormValidate";

export default function withValidation(WrappedComponent, Scema) {
  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.onChangeHandler = onChangeHandler.bind(this);
      this.state = {
        form: createFormControl(Scema)
      };
    }
    render() {
      return (
        <WrappedComponent
          formState={this.state.form}
          onChangeHandler={this.onChangeHandler}
          {...this.props}
        />
      );
    }
  };
}
