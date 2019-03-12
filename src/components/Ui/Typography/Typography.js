import React from "react";
import PropTypes from "prop-types";

import { StyledTypography, getComponent } from "./styled";
import { variantArray, colorArray } from "./const";

export default function Typography({
  component,
  noWrap,
  color,
  variant,
  children,
  ...props
}) {
  const newComponent = component ? component : getComponent(variant);
  return (
    <StyledTypography
      as={newComponent}
      color={color}
      variant={variant}
      noWrap={noWrap}
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

Typography.propTypes = {
  noWrap: PropTypes.bool,
  variant: PropTypes.oneOf(variantArray),
  color: PropTypes.oneOf(colorArray),
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
Typography.defaultProps = {
  variant: "body2",
  noWrap: false
};
