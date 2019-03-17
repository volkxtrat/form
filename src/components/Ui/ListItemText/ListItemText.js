import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "../Typography/Typography";

const StyledListItemText = styled.div`
  flex: 1 1 auto;
  padding: ${p => !p.offPadding && "0 .5rem"};
  min-width: 0;
`;

export default function ListItemText({
  primary,
  secondary,
  propsPrimary,
  propsSecondary
}) {
  const newPropsSecondary = { variant: "caption", ...propsSecondary };
  return (
    <StyledListItemText>
      <Typography {...propsPrimary}>{primary}</Typography>
      <Typography {...newPropsSecondary}>{secondary}</Typography>
    </StyledListItemText>
  );
}

ListItemText.propsType = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  propsPrimary: PropTypes.object,
  propsSecondary: PropTypes.object,
  offPadding: PropTypes.bool
};
ListItemText.defaultProps = {};
