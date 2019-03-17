import theme from "styled-theming";

export default {
  color: "default",
  colorText: "primary",
  typography: "body2",
  fontSize: "medium",
  paddingSize: "medium"
};

export const color = theme("color", {
  default: "var(--c-bg-main)",
  primary: "var(--c-primary)",
  secondary: "var(--c-secondary)",
  success: "var(--c-success)",
  error: "var(--c-error)",
  warning: "var(--c-warning)",
  inherit: "inherit"
});
export const colorContrast = theme("color", {
  default: "var(--c-textPrimary)",
  primary: "var(--c-primary-contrast)",
  secondary: "var(--c-secondary-contrast)",
  success: "var(--c-common-white)",
  error: "var(--c-common-white)",
  warning: "var(--c-common-black)",
  inherit: "var(--c-textPrimary)"
});

export const colorText = theme("colorText", {
  primary: "var(--c-textPrimary)",
  secondary: "var(--c-textSecondary)",
  disabled: "var(--c-textDisabled)",
  black: "var(--common-black)",
  white: "var(--common-white)",
  inherit: "inherit"
});

export const typography = theme("typography", {
  h1: "var(--t-h1)",
  h2: "var(--t-h2)",
  h3: "var(--t-h3)",
  h4: "var(--t-h4)",
  h5: "var(--t-h5)",
  h6: "var(--t-h6)",
  body1: "var(--t-body1)",
  body2: "var(--t-body2)",
  caption: "var(--t-caption)",
  inherit: "inherit"
});

export const fontSize = theme("fontSize", {
  small: ".83rem",
  medium: ".875rem",
  large: "1.25rem"
});

export const paddingSize = theme("paddingSize", {
  small: "4px 8px",
  medium: "6px 16px",
  large: "8px 24px"
});
