import { createStyle, createMappedStyle } from "../../core/style";
import { spacingMap } from "../../../mappings/spacing";

// Outline offset utilities
export const outline_offset_0 = createStyle("outline-offset", "0");
export const outline_offset_1 = createMappedStyle("outline-offset", "1", spacingMap);
export const outline_offset_2 = createMappedStyle("outline-offset", "2", spacingMap);
export const outline_offset_4 = createMappedStyle("outline-offset", "4", spacingMap);
export const outline_offset_8 = createMappedStyle("outline-offset", "8", spacingMap);

// Create outline offset with custom value
export const createOutlineOffset = (value: string) => {
  return createStyle("outline-offset", value);
};