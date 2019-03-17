import styled from "styled-components";
import { typography, colorText } from "../../../theme/theme";

export function getComponent(variant) {
  return !variant.search(/h\d/i) ? variant : "span";
}

export const StyledTypography = styled.span`
  display: block;
  text-align: ${p => p.textAlign};
  font-size: ${typography};
  color: ${colorText};
  font-weight: ${p => p.fontWeight};
`;

export const StyledTypographyNowrap = styled(StyledTypography)`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
