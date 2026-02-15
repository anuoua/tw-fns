import { createStyle } from "../../core/style";
import { lineHeightMap } from "../../../mappings/typography";

// Line height utilities
export const leading_none = createStyle("line-height", "1");
export const leading_tight = createStyle("line-height", "1.25");
export const leading_snug = createStyle("line-height", "1.375");
export const leading_normal = createStyle("line-height", "1.5");
export const leading_relaxed = createStyle("line-height", "1.625");
export const leading_loose = createStyle("line-height", "2");

// Numeric line heights (using spacing scale for values)
export const leading_3 = createStyle("line-height", ".75rem");
export const leading_4 = createStyle("line-height", "1rem");
export const leading_5 = createStyle("line-height", "1.25rem");
export const leading_6 = createStyle("line-height", "1.5rem");
export const leading_7 = createStyle("line-height", "1.75rem");
export const leading_8 = createStyle("line-height", "2rem");
export const leading_9 = createStyle("line-height", "2.25rem");
export const leading_10 = createStyle("line-height", "2.5rem");

// Create line height with custom value
export const createLineHeight = (value: string) => {
  return createStyle("line-height", value);
};