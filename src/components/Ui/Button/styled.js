import styled from "styled-components";
import { my, mx } from "styled-components-spacing";
import {
  paddingSize,
  fontSize,
  color,
  colorContrast
} from "../../../theme/theme";

export const StyledButtonBase = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: var(--c-hover);
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--c-disabled);
    &:hover {
      background: var(--c-disabled);
    }
  }
`;

const btnBase = styled(StyledButtonBase)`
  line-height: 1.75;
  border-radius: ${p => !p.offBorderRadius && "var(--s-border-radius)"};
  outline: ${p => !p.offOutline && "var(--c-outline)"};
  font-size: ${fontSize};
  padding: ${paddingSize};
  ${p => !p.offMarginVr && mx({ mobile: 1, tablet: 2, desktop: 2 })}
  ${my({ mobile: 1, tablet: 2, desktop: 2 })}
`;

export const StyledButtonPrimary = styled(btnBase)`
  background: ${color};
  color: ${colorContrast};
`;
export const StyledButtonSecondary = styled(btnBase)`
  color: ${color};
  border: var(--s-border-sm) solid ${color};
  background: transparent;
  &:hover,
  &:focus {
    background: ${color};
    color: ${colorContrast};
    transition: all 0.25s ease-out;
  }
`;

export const getComponentBtn = type => {
  switch (type) {
    case "primary": {
      return StyledButtonPrimary;
    }
    case "secondary": {
      return StyledButtonSecondary;
    }
    default: {
      return StyledButtonPrimary;
    }
  }
};
