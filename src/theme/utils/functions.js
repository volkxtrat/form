import { colorArray, variantArray } from "./constants";
const element = document.documentElement;

export function pxToRem(px) {
  const rem =
    parseFloat(px) /
    parseFloat(getComputedStyle(element).getPropertyValue("--s-font-size"));
  return `${rem}rem`;
}

export function getPropertyValue(cssPropertyName) {
  return getComputedStyle(element).getPropertyValue(cssPropertyName);
}

export function getFontSizeTheme(variant) {
  if (!variantArray.includes(variant)) return `var(--t-body2)`;
  return `var(--t-${variant})`;
}

export function getColorTheme(color) {
  if (!colorArray.includes(color) || color === "default")
    return `var(--c-textPrimary)`;
  if (color === "inherit") return "inherit";
  return `var(--c-${color})`;
}
