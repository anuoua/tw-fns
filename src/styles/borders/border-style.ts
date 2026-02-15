import { createStyle, createMultiStyle } from "../../core/style";

// Border style utilities - all sides
export const border_solid = createStyle("border-style", "solid");
export const border_dashed = createStyle("border-style", "dashed");
export const border_dotted = createStyle("border-style", "dotted");
export const border_double = createStyle("border-style", "double");
export const border_hidden = createStyle("border-style", "hidden");
export const border_none = createStyle("border-style", "none");

// Create border style with custom value
export const createBorderStyle = (value: string) => {
  return createStyle("border-style", value);
};