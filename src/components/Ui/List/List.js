import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function List({ component, headComponent, children, ...props }) {
  return (
    <>
      {headComponent && headComponent}
      <StyledList as={component} {...props}>
        {children}
      </StyledList>
    </>
  );
}

List.propsType = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  headComponent: PropTypes.node
};
List.defaultProps = {
  component: "div"
};
