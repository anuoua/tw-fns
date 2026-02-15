import { createStyle } from "../../core/style";

// Outline width utilities
export const outline_0 = createStyle("outline-width", "0");
export const outline_1 = createStyle("outline-width", "1px");
export const outline_2 = createStyle("outline-width", "2px");
export const outline_4 = createStyle("outline-width", "4px");
export const outline_8 = createStyle("outline-width", "8px");

// Create outline width with custom value
export const createOutlineWidth = (value: string) => {
  return createStyle("outline-width", value);
};