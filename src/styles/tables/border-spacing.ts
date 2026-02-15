import { createStyle, createMappedStyle } from "../../core/style";
import { spacingMap } from "../../../mappings/spacing";

// Border spacing utilities
export const border_spacing_0 = createStyle("border-spacing", "0");
export const border_spacing_1 = createMappedStyle("border-spacing", "1", spacingMap);
export const border_spacing_2 = createMappedStyle("border-spacing", "2", spacingMap);
export const border_spacing_3 = createMappedStyle("border-spacing", "3", spacingMap);
export const border_spacing_4 = createMappedStyle("border-spacing", "4", spacingMap);
export const border_spacing_5 = createMappedStyle("border-spacing", "5", spacingMap);
export const border_spacing_6 = createMappedStyle("border-spacing", "6", spacingMap);
export const border_spacing_8 = createMappedStyle("border-spacing", "8", spacingMap);
export const border_spacing_10 = createMappedStyle("border-spacing", "10", spacingMap);
export const border_spacing_12 = createMappedStyle("border-spacing", "12", spacingMap);
export const border_spacing_16 = createMappedStyle("border-spacing", "16", spacingMap);
export const border_spacing_20 = createMappedStyle("border-spacing", "20", spacingMap);
export const border_spacing_24 = createMappedStyle("border-spacing", "24", spacingMap);

// Create border spacing with custom value
export const createBorderSpacing = (value: string) => {
  return createStyle("border-spacing", value);
};