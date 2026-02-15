import { createStyle } from "../../core/style";

// Text decoration color utilities
export const decoration_inherit = createStyle("text-decoration-color", "inherit");
export const decoration_current = createStyle("text-decoration-color", "currentColor");
export const decoration_transparent = createStyle("text-decoration-color", "transparent");

// Create text decoration color with custom value
export const createDecorationColor = (value: string) => {
  return createStyle("text-decoration-color", value);
};