import { createStyle, createMappedStyle } from "../../core/style";
import { spacingMap } from "../../../mappings/spacing";

// Text indent utilities
export const indent_0 = createStyle("text-indent", "0");
export const indent_px = createStyle("text-indent", "1px");
export const indent_0_5 = createMappedStyle("text-indent", "0_5", spacingMap);
export const indent_1 = createMappedStyle("text-indent", "1", spacingMap);
export const indent_2 = createMappedStyle("text-indent", "2", spacingMap);
export const indent_3 = createMappedStyle("text-indent", "3", spacingMap);
export const indent_4 = createMappedStyle("text-indent", "4", spacingMap);
export const indent_5 = createMappedStyle("text-indent", "5", spacingMap);
export const indent_6 = createMappedStyle("text-indent", "6", spacingMap);
export const indent_7 = createMappedStyle("text-indent", "7", spacingMap);
export const indent_8 = createMappedStyle("text-indent", "8", spacingMap);
export const indent_9 = createMappedStyle("text-indent", "9", spacingMap);
export const indent_10 = createMappedStyle("text-indent", "10", spacingMap);
export const indent_12 = createMappedStyle("text-indent", "12", spacingMap);
export const indent_16 = createMappedStyle("text-indent", "16", spacingMap);
export const indent_20 = createMappedStyle("text-indent", "20", spacingMap);
export const indent_24 = createMappedStyle("text-indent", "24", spacingMap);
export const indent_32 = createMappedStyle("text-indent", "32", spacingMap);
export const indent_40 = createMappedStyle("text-indent", "40", spacingMap);
export const indent_48 = createMappedStyle("text-indent", "48", spacingMap);
export const indent_56 = createMappedStyle("text-indent", "56", spacingMap);
export const indent_64 = createMappedStyle("text-indent", "64", spacingMap);
export const indent_72 = createMappedStyle("text-indent", "72", spacingMap);
export const indent_80 = createMappedStyle("text-indent", "80", spacingMap);
export const indent_96 = createMappedStyle("text-indent", "96", spacingMap);

// Create text indent with custom value
export const createTextIndent = (value: string) => {
  return createStyle("text-indent", value);
};