const element = document.documentElement;

export function pxToRem(px) {
  const rem =
    parseFloat(px) /
    parseFloat(getComputedStyle(element).getPropertyValue("--s-font-size"));
  return `${rem}rem`;
}
