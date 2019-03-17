import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Typography from "../Typography/Typography";
import { colorArray, sizeArray } from "../../../theme/utils/constants";

import { getComponentBtn } from "./styled";

export default function Button({
  size,
  color,
  variant,
  typographyProps,
  offRipple,
  children,
  ...props
}) {
  const Component = getComponentBtn(variant);
  const newTypographyProps = {
    variant: "inherit",
    color: "inherit",
    ...typographyProps
  };
  const theme = { paddingSize: size, fontSize: size, color: color };
  const classes = classNames({ ripple: !offRipple });
  return (
    <Component theme={theme} className={classes} {...props}>
      <Typography {...newTypographyProps}>{children}</Typography>
    </Component>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(sizeArray),
  color: PropTypes.oneOf(colorArray),

  offBorderRadius: PropTypes.bool,
  offPadding: PropTypes.bool,
  offMarginVr: PropTypes.bool,
  offOutline: PropTypes.bool,
  offRipple: PropTypes.bool
};
Button.defaultProps = {
  size: "medium",
  variant: "primary",
  color: "primary",
  offRipple: false
};
