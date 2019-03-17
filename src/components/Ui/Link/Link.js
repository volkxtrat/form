import React from "react";
import PropTypes from "prop-types";
import { Link as RouteLink } from "react-router-dom";
import Typography from "../Typography/Typography";

export default function Link({
  to,
  typographyProps,
  offUnderline,
  children,
  ...props
}) {
  const { style, ...tprops } = typographyProps;
  const defaultTypographyProps = {
    variant: "body1",
    style: {
      color: "var(--c-link)",
      textDecoration: !offUnderline ? "underline" : null,
      ...style
    }
  };
  const newTypographyProps = { ...defaultTypographyProps, ...tprops };
  return (
    <RouteLink to={to} {...props}>
      <Typography {...newTypographyProps}>{children}</Typography>
    </RouteLink>
  );
}

Link.propsTypes = {
  to: PropTypes.string,
  typographyProps: PropTypes.object,
  offUnderline: PropTypes.bool
};
Link.defaultProps = {
  to: "/",
  offUnderline: false
};
