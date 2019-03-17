import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPaper = styled.div`
  padding: ${props => !props.offGutters && "1rem"};
  background: var(--c-bg-paper);
  box-shadow: ${props => !props.offShadow && "var(--bxShadow-1)"};
  width: ${p => p.fullWidth && "100%"};
  border-radius: ${props => !props.offBorderRadius && "var(--s-border-radius)"};
`;

function Paper({
  components,
  fullWidth,
  offShadow,
  offGutters,
  offBorderRadius,
  children,
  ...props
}) {
  return (
    <StyledPaper
      as={components}
      offGutters={offGutters}
      offShadow={offShadow}
      offBorderRadius={offBorderRadius}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledPaper>
  );
}

Paper.propTypes = {
  fullWidth: PropTypes.bool,
  offShadow: PropTypes.bool,
  offGutters: PropTypes.bool,
  offBorderRadius: PropTypes.bool,
  components: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Paper.defaultProps = {
  fullWidth: false,
  offShadow: false,
  offGutters: false,
  offBorderRadius: false,
  components: "div"
};

export default Paper;
