import React, { PureComponent } from "react";
import debounce from "lodash/debounce";

import { StyledAuthForm, StyledForm, StyledFormLine } from "../styled";
import Typography from "../../Ui/Typography/Typography";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";
import Link from "../../Ui/Link/Link";
import routesName from "../../../route/routesName";
import withValidation from "../../../lib/FormValidate/withValidation";
import withRegistration from "../../../hoc/withRegistration";
import Collapse from "../../Ui/Collapse/Collapse";
import Message from "../../Ui/Message/Message";
import { ScemaRegistration, inputsRegistration } from "../constants";

class AuthFormRegistration extends PureComponent {
  prevMessage = this.props.regState.message;
  currMessage = this.props.regState.message;

  onChangeDebounce = debounce((value, name) => {
    this.prevMessage = this.currMessage;
    this.props.onChangeHandler(value, name);
  }, 300);

  onChange = e => {
    this.onChangeDebounce(e.target.value, e.target.name);
  };

  render() {
    const { formState, regState, onSubmit } = this.props;
    const { formControls } = formState;

    if (regState.message.text) this.currMessage = regState.message;
    const isMessage = this.currMessage.text.length > 0;
    const message = isMessage ? this.currMessage : this.prevMessage;

    return (
      <StyledAuthForm>
        <StyledFormLine>
          <Typography variant="h5">Register account</Typography>
        </StyledFormLine>
        <Collapse isOpen={isMessage} timeout=".2">
          <Message color={message.type}>
            <Typography variant="body1" color="inherit">
              {message.text}
            </Typography>
          </Message>
        </Collapse>
        <StyledForm
          onSubmit={onSubmit}
          style={{ justifyContent: "space-between" }}
        >
          {inputsRegistration.map(input => (
            <StyledFormLine key={input.controlName}>
              <Input
                fullWidth
                autoSelect
                autoFocus={input.autoFocus}
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                isTouched={formControls[input.controlName].touched}
                isValid={formControls[input.controlName].valid}
                errorMessage={formControls[input.controlName].error}
                name={input.controlName}
                onChange={this.onChange}
              />
            </StyledFormLine>
          ))}
          <Button
            size="large"
            type="submit"
            disabled={!formState.isFormValid || regState.isLoading}
            offMarginVr
          >
            {regState.isLoading ? (
              <i className="fas fa-cog fa-spin" />
            ) : (
              "Registration"
            )}
          </Button>
          <StyledFormLine>
            <Link
              to={routesName.login}
              typographyProps={{ textAlign: "center" }}
            >
              Already a user? Login
            </Link>
          </StyledFormLine>
        </StyledForm>
      </StyledAuthForm>
    );
  }
}

export default withValidation(
  withRegistration(AuthFormRegistration),
  ScemaRegistration
);
