import { createStyle } from "../../core/style";
import { colorMap, specialColorMap } from "../../../mappings/colors";

// Text color utilities using CSS variables
export const text_inherit = createStyle("color", "inherit");
export const text_current = createStyle("color", "currentColor");
export const text_transparent = createStyle("color", "transparent");
export const text_black = createStyle("color", "var(--color-black)");
export const text_white = createStyle("color", "var(--color-white)");

// Generate text colors for all color palettes
const colorPalettes = Object.keys(colorMap);

// This file exports only the basic text color utilities
// Full color palette support is handled in the colors/ directory

// Create text color with custom value
export const createTextColor = (value: string) => {
  return createStyle("color", value);
};