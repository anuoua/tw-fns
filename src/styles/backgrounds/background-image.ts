import { createStyle } from "../../core/style";

// Background image utilities
export const bg_none = createStyle("background-image", "none");
export const bg_gradient_to_t = createStyle(
  "background-image",
  "linear-gradient(to top, var(--tw-gradient-stops))",
);
export const bg_gradient_to_tr = createStyle(
  "background-image",
  "linear-gradient(to top right, var(--tw-gradient-stops))",
);
export const bg_gradient_to_r = createStyle(
  "background-image",
  "linear-gradient(to right, var(--tw-gradient-stops))",
);
export const bg_gradient_to_br = createStyle(
  "background-image",
  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
);
export const bg_gradient_to_b = createStyle(
  "background-image",
  "linear-gradient(to bottom, var(--tw-gradient-stops))",
);
export const bg_gradient_to_bl = createStyle(
  "background-image",
  "linear-gradient(to bottom left, var(--tw-gradient-stops))",
);
export const bg_gradient_to_l = createStyle(
  "background-image",
  "linear-gradient(to left, var(--tw-gradient-stops))",
);
export const bg_gradient_to_tl = createStyle(
  "background-image",
  "linear-gradient(to top left, var(--tw-gradient-stops))",
);

// Create background image with custom value
export const createBackgroundImage = (value: string) => {
  return createStyle("background-image", value);
};