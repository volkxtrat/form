import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import { justify, alignItems } from "../../../theme/utils/constants";

const StyledListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  padding: 0.5rem 1rem;
  border-bottom: ${props =>
    props.isDivider && "var(--s-border-sm) solid var(--c-divider)"};
  transition: all 0.5 ease-in-out;
`;

export default function ListItem({
  component,
  button,
  isSelected,
  isDivider,
  children,
  ...props
}) {
  const classes = classNames({
    button: button,
    selectedBg: isSelected
  });
  return (
    <StyledListItem
      as={component}
      className={classes}
      isDivider={isDivider}
      isSelected={isSelected}
      awdawdawd
      {...props}
    >
      {children}
    </StyledListItem>
  );
}

ListItem.propsType = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  justify: PropTypes.oneOf(justify),
  alignItems: PropTypes.oneOf(alignItems),
  isSelected: PropTypes.bool,
  isDivider: PropTypes.bool
};
ListItem.defaultProps = {
  component: "div",
  justify: "flex-start",
  alignItems: "flex-start",
  isSelected: false,
  isDivider: false
};
