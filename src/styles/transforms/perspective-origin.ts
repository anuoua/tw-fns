import { createStyle } from "../../core/style";

// Perspective origin utilities
export const perspective_center = createStyle("perspective-origin", "center");
export const perspective_top = createStyle("perspective-origin", "top");
export const perspective_top_right = createStyle("perspective-origin", "top right");
export const perspective_right = createStyle("perspective-origin", "right");
export const perspective_bottom_right = createStyle("perspective-origin", "bottom right");
export const perspective_bottom = createStyle("perspective-origin", "bottom");
export const perspective_bottom_left = createStyle("perspective-origin", "bottom left");
export const perspective_left = createStyle("perspective-origin", "left");
export const perspective_top_left = createStyle("perspective-origin", "top left");

// Create perspective origin with custom value
export const createPerspectiveOrigin = (value: string) => {
  return createStyle("perspective-origin", value);
};