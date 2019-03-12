import styled from "styled-components";
import { colorArray } from "./const";

export function getCssProperty(variant) {
  return `var(--t-${variant})`;
}

export function getComponent(variant) {
  return !variant.search(/h\d/i) ? variant : "span";
}

export function getColorTheme(color) {
  if (!colorArray.includes(color) || color === "default")
    return `var(--c-textPrimary)`;
  if (color === "inherit") return "inherit";
  return `var(--c-${color})`;
}

export const StyledTypography = styled.span`
  font-size: ${props => getCssProperty(props.variant)};
  color: ${props => getColorTheme(props.color)};
  font-weight: ${props => props.fontWeight};
  ${props =>
    props.noWrap &&
    "min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"};
`;
