import { createStyle } from "../../core/style";

// Background position utilities
export const bg_center = createStyle("background-position", "center");
export const bg_top = createStyle("background-position", "top");
export const bg_right_top = createStyle("background-position", "right top");
export const bg_right = createStyle("background-position", "right");
export const bg_right_bottom = createStyle("background-position", "right bottom");
export const bg_bottom = createStyle("background-position", "bottom");
export const bg_left_bottom = createStyle("background-position", "left bottom");
export const bg_left = createStyle("background-position", "left");
export const bg_left_top = createStyle("background-position", "left top");

// Create background position with custom value
export const createBackgroundPosition = (value: string) => {
  return createStyle("background-position", value);
};