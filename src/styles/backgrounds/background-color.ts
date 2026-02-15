import { createStyle } from "../../core/style";
import { colorMap, specialColorMap } from "../../../mappings/colors";

// Background color utilities using CSS variables
export const bg_inherit = createStyle("background-color", "inherit");
export const bg_current = createStyle("background-color", "currentColor");
export const bg_transparent = createStyle("background-color", "transparent");
export const bg_black = createStyle("background-color", "var(--color-black)");
export const bg_white = createStyle("background-color", "var(--color-white)");

// Create background color with custom value
export const createBackgroundColor = (value: string) => {
  return createStyle("background-color", value);
};