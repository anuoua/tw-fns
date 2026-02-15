import { createStyle } from "../../core/style";

// Mask position utilities
export const mask_center = createStyle("-webkit-mask-position", "center");
export const mask_top = createStyle("-webkit-mask-position", "top");
export const mask_right_top = createStyle("-webkit-mask-position", "right top");
export const mask_right = createStyle("-webkit-mask-position", "right");
export const mask_right_bottom = createStyle("-webkit-mask-position", "right bottom");
export const mask_bottom = createStyle("-webkit-mask-position", "bottom");
export const mask_left_bottom = createStyle("-webkit-mask-position", "left bottom");
export const mask_left = createStyle("-webkit-mask-position", "left");
export const mask_left_top = createStyle("-webkit-mask-position", "left top");

// Create mask position with custom value
export const createMaskPosition = (value: string) => {
  return createStyle("-webkit-mask-position", value);
};