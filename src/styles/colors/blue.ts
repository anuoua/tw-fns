import { createStyle, createMappedStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

export const bg_white = createStyle("backgroundColor", "var(--color-white)");
export const bg_blue_500 = createStyle(
  "backgroundColor",
  "var(--color-blue-500)",
);
export const bg_blue_600 = createStyle(
  "backgroundColor",
  "var(--color-blue-600)",
);
export const bg_blue_700 = createStyle(
  "backgroundColor",
  "var(--color-blue-700)",
);

export const text_white = createStyle("color", "var(--color-white)");
export const text_black = createStyle("color", "var(--color-black-500)");
export const text_gray_500 = createStyle("color", "var(--color-gray-500)");
export const text_gray_900 = createStyle("color", "var(--color-gray-900)");

export const border_transparent = createStyle("border-color", "transparent");
