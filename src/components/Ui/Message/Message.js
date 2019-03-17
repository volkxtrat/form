import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getColorTheme } from "../../../theme/utils/functions";
import { colorArray } from "../../../theme/utils/constants";

const StyledMessage = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: ${p => p.color};
  border: var(--s-border-sm) solid ${p => p.color};
  border-radius: ${p => !p.offBorderRadius && "var(--s-border-radius)"};
  z-index: 1;
`;

const StyledBackgrounMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${p => p.color};
  opacity: 0.3;
  z-index: -1;
`;

export default function Message({ color, children, ...props }) {
  const newColor = getColorTheme(color);
  return (
    <StyledMessage color={newColor} {...props}>
      {children}
      <StyledBackgrounMessage color={newColor} />
    </StyledMessage>
  );
}

Message.propTypes = {
  color: PropTypes.oneOf(colorArray)
};
Message.defaultProps = {
  color: "error"
};
