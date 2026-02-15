import { createStyle } from "../../core/style";

// Mask size utilities
export const mask_auto = createStyle("-webkit-mask-size", "auto");
export const mask_cover = createStyle("-webkit-mask-size", "cover");
export const mask_contain = createStyle("-webkit-mask-size", "contain");

// Create mask size with custom value
export const createMaskSize = (value: string) => {
  return createStyle("-webkit-mask-size", value);
};