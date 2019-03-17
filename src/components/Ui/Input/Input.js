import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Padding } from "styled-components-spacing";

import Typography from "../Typography/Typography";
import { variantArray, colorArray } from "../../../theme/utils/constants";
import Collapse from "../Collapse/Collapse";

import { StyledLabel, StyledInput, StyledBar } from "./styled";

export default class Input extends PureComponent {
  inputRef = React.createRef();
  componentDidMount = () => {
    const { autoFocus } = this.props;
    if (autoFocus) this.inputRef.current.focus();
  };

  handleClickLabel = () => {
    this.inputRef.current.select();
  };

  render() {
    const {
      autoFocus,
      autoSelect,
      label,
      placeholder,
      variant,
      color,
      value,
      labelTypographyProps,
      fullWidth,
      children,
      isValid,
      isTouched,
      errorMessage,
      ...props
    } = this.props;
    const newLabelProps = {
      variant: "body1",
      color: "secondary",
      ...labelTypographyProps
    };
    const isError = Boolean(errorMessage);
    return (
      <StyledLabel
        fullWidth={fullWidth}
        onClick={autoSelect ? this.handleClickLabel : null}
      >
        <Typography {...newLabelProps}>{label}</Typography>
        <StyledInput
          ref={this.inputRef}
          variant={variant}
          color={color}
          value={value}
          placeholder={placeholder}
          {...props}
        />
        {isTouched && <StyledBar isValid={isValid} fullWidth={fullWidth} />}
        <Padding top={1}>
          <Collapse isOpen={isError} timeout=".2" style={{ color: "var(--c-error)" }}>
            <Typography variant="caption" color="inherit">
              {errorMessage}
            </Typography>
          </Collapse>
        </Padding>
      </StyledLabel>
    );
  }
}

Input.propTypes = {
  variant: PropTypes.oneOf(variantArray),
  color: PropTypes.oneOf(colorArray),
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isTouched: PropTypes.bool,
  isValid: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoSelect: PropTypes.bool,
  fullWidth: PropTypes.bool,
  labelTypographyProps: PropTypes.object
};
Input.defaultProps = {
  variant: "body2",
  autoFocus: false,
  autoSelect: false,
  isValid: false,
  isTouched: false
};
