import styled from "styled-components";
import { colorText, typography } from "../../../theme/theme";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: ${p => p.fullWidth && "100%"};
`;

export const StyledBar = styled.span`
  width: ${p => p.fullWidth && "100%"};
  position: relative;
  display: block;
  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${p => (p.isValid ? "var(--c-success)" : "var(--c-error)")};
    transition: 0.2s ease all;
  }
  &:before {
    right: 50%;
  }
  &:after {
    left: 50%;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem 0;
  border-bottom: var(--s-border-sm) solid var(--c-divider);
  color: ${colorText};
  font-size: ${typography};
  &::placeholder {
    color: var(--c-textSecondary);
  }
  &:focus ~ ${StyledBar}:before, &:focus ~ ${StyledBar}:after {
    width: 50%;
  }
`;
