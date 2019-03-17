import React from "react";
import PropTypes from "prop-types";

import {
  StyledTypography,
  StyledTypographyNowrap,
  getComponent
} from "./styled";
import {
  variantArray,
  textAlignArray,
  fontWeightArray,
  colorArrayText
} from "../../../theme/utils/constants";

export default function Typography({
  component,
  noWrap,
  color,
  variant,
  children,
  textAlign,
  ...props
}) {
  const newComponent = component ? component : getComponent(variant);
  const Component = noWrap ? StyledTypographyNowrap : StyledTypography;
  const theme = { typography: variant, colorText: color };
  return (
    <Component as={newComponent} theme={theme} textAlign={textAlign} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  noWrap: PropTypes.bool,
  fontWeight: PropTypes.oneOf(fontWeightArray),
  textAlign: PropTypes.oneOf(textAlignArray),
  variant: PropTypes.oneOf(variantArray),
  color: PropTypes.oneOf(colorArrayText),
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
Typography.defaultProps = {
  variant: "body2",
  noWrap: false,
  textAlign: "left",
  fontWeight: "normal"
};
