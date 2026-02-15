import { createStyle } from "../../core/style";

// Transform origin utilities
export const origin_center = createStyle("transform-origin", "center");
export const origin_top = createStyle("transform-origin", "top");
export const origin_top_right = createStyle("transform-origin", "top right");
export const origin_right = createStyle("transform-origin", "right");
export const origin_bottom_right = createStyle("transform-origin", "bottom right");
export const origin_bottom = createStyle("transform-origin", "bottom");
export const origin_bottom_left = createStyle("transform-origin", "bottom left");
export const origin_left = createStyle("transform-origin", "left");
export const origin_top_left = createStyle("transform-origin", "top left");

// Create transform origin with custom value
export const createTransformOrigin = (value: string) => {
  return createStyle("transform-origin", value);
};