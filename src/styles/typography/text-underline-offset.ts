import { createStyle } from "../../core/style";

// Text underline offset utilities
export const underline_offset_auto = createStyle("text-underline-offset", "auto");
export const underline_offset_0 = createStyle("text-underline-offset", "0px");
export const underline_offset_1 = createStyle("text-underline-offset", "1px");
export const underline_offset_2 = createStyle("text-underline-offset", "2px");
export const underline_offset_4 = createStyle("text-underline-offset", "4px");
export const underline_offset_8 = createStyle("text-underline-offset", "8px");

// Create text underline offset with custom value
export const createUnderlineOffset = (value: string) => {
  return createStyle("text-underline-offset", value);
};