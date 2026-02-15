import { createStyle } from "../../core/style";

// Outline color utilities
export const outline_inherit = createStyle("outline-color", "inherit");
export const outline_current = createStyle("outline-color", "currentColor");
export const outline_transparent = createStyle("outline-color", "transparent");

// Create outline color with custom value
export const createOutlineColor = (value: string) => {
  return createStyle("outline-color", value);
};