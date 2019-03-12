import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPaper = styled.div`
  padding: ${props => !props.disableGutters && "1rem"};
  background: var(--c-bg-paper);
  box-shadow: ${props => !props.disableShadow && "var(--bxShadow-1)"};
  border-radius: ${props =>
    !props.disableBorderRadius && "var(--s-border-radius)"};
`;

function Paper({
  components,
  disableShadow,
  disableGutters,
  disableBorderRadius,
  children,
  ...props
}) {
  return (
    <StyledPaper
      as={components}
      disableGutters={disableGutters}
      disableShadow={disableShadow}
      disableBorderRadius={disableBorderRadius}
      {...props}
    >
      {children}
    </StyledPaper>
  );
}

Paper.propTypes = {
  disableShadow: PropTypes.bool,
  disableGutters: PropTypes.bool,
  disableBorderRadius: PropTypes.bool,
  components: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Paper.defaultProps = {
  disableShadow: false,
  disableGutters: false,
  disableBorderRadius: false,
  components: "div"
};

export default Paper;
