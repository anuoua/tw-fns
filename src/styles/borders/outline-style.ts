import { createStyle } from "../../core/style";

// Outline style utilities
export const outline_solid = createStyle("outline-style", "solid");
export const outline_dashed = createStyle("outline-style", "dashed");
export const outline_dotted = createStyle("outline-style", "dotted");
export const outline_double = createStyle("outline-style", "double");
export const outline_hidden = createStyle("outline-style", "hidden");
export const outline_none = createStyle("outline-style", "none");

// Create outline style with custom value
export const createOutlineStyle = (value: string) => {
  return createStyle("outline-style", value);
};