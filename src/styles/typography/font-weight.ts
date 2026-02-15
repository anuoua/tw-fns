import { createStyle, createMappedStyle } from "../../core/style";
import { fontWeightMap } from "../../../mappings/typography";

// Font weight utilities
export const font_thin = createStyle("font-weight", "100");
export const font_extralight = createStyle("font-weight", "200");
export const font_light = createStyle("font-weight", "300");
export const font_normal = createStyle("font-weight", "400");
export const font_medium = createStyle("font-weight", "500");
export const font_semibold = createStyle("font-weight", "600");
export const font_bold = createStyle("font-weight", "700");
export const font_extrabold = createStyle("font-weight", "800");
export const font_black = createStyle("font-weight", "900");

// Numeric font weights
export const font_100 = createStyle("font-weight", "100");
export const font_200 = createStyle("font-weight", "200");
export const font_300 = createStyle("font-weight", "300");
export const font_400 = createStyle("font-weight", "400");
export const font_500 = createStyle("font-weight", "500");
export const font_600 = createStyle("font-weight", "600");
export const font_700 = createStyle("font-weight", "700");
export const font_800 = createStyle("font-weight", "800");
export const font_900 = createStyle("font-weight", "900");

// Create font weight with custom value
export const createFontWeight = (value: string) => {
  return createStyle("font-weight", value);
};