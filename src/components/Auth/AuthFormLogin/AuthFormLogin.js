import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Typography from "../../Ui/Typography/Typography";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";
import Link from "../../Ui/Link/Link";
import routesName from "../../../route/routesName";
import { StyledAuthForm, StyledForm, StyledFormLine } from "../styled";
import withValidation from "../../../lib/FormValidate/withValidation";
import withLogin from "../../../hoc/withLogin";
import Message from "../../Ui/Message/Message";
import Collapse from "../../Ui/Collapse/Collapse";
import { ScemaLogin, inputsLogin } from "../constants";

// import firebase from "../../../config/Firebase";
import firebase from "firebase";
import "firebase/auth";

class AuthFormLogin extends PureComponent {
  onChange = e => {
    this.props.onChangeHandler(e.target.value, e.target.name);
  };
  onClickGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token, user);
      });
  };
  render() {
    const { formControls } = this.props.formState;
    const { onSubmit, loginState } = this.props;
    const isMessage = Boolean(this.props.loginState.error);
    this.message = this.props.loginState.error;
    return (
      <StyledAuthForm>
        <StyledFormLine>
          <Typography variant="h5">Login in to your account</Typography>
        </StyledFormLine>
        <Collapse isOpen={isMessage} timeout=".2">
          <Message>
            <Typography variant="body1" color="inherit">
              {this.message}
            </Typography>
          </Message>
        </Collapse>
        <StyledForm onSubmit={onSubmit}>
          {inputsLogin.map(input => (
            <StyledFormLine key={input.controlName}>
              <Input
                fullWidth
                autoSelect
                autoFocus={input.autoFocus}
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                name={input.controlName}
                isTouched={formControls[input.controlName].touched}
                isValid={formControls[input.controlName].valid}
                onChange={this.onChange}
              />
            </StyledFormLine>
          ))}
          {/* <StyledFormLine>
            <Link
              to="/forgot"
              typographyProps={{ textAlign: "right" }}
              offUnderline
            >
              Forgot Password?
            </Link>
          </StyledFormLine> */}
          <Button
            size="large"
            type="submit"
            disabled={loginState.isLoading}
            offMarginVr
          >
            {loginState.isLoading ? (
              <i className="fas fa-cog fa-spin" />
            ) : (
              "Log in"
            )}
          </Button>
          <Button
            onClick={this.onClickGoogle}
            color="secondary"
            size="large"
            type="button"
            offMarginVr
          >
            Log in with Google
          </Button>
          <Link
            to={routesName.registration}
            typographyProps={{ textAlign: "center" }}
          >
            Don't have an account? Register
          </Link>
        </StyledForm>
      </StyledAuthForm>
    );
  }
}

AuthFormLogin.propsTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeHandler: PropTypes.func,
  formState: PropTypes.shape({
    isFormValid: PropTypes.bool,
    formControls: PropTypes.object
  })
};
AuthFormLogin.defaultProps = {};

export default withValidation(withLogin(AuthFormLogin), ScemaLogin);
