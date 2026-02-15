import { createStyle } from "../../core/style";

// Vertical align utilities
export const align_baseline = createStyle("vertical-align", "baseline");
export const align_top = createStyle("vertical-align", "top");
export const align_middle = createStyle("vertical-align", "middle");
export const align_bottom = createStyle("vertical-align", "bottom");
export const align_text_top = createStyle("vertical-align", "text-top");
export const align_text_bottom = createStyle("vertical-align", "text-bottom");
export const align_sub = createStyle("vertical-align", "sub");
export const align_super = createStyle("vertical-align", "super");

// Create vertical align with custom value
export const createVerticalAlign = (value: string) => {
  return createStyle("vertical-align", value);
};