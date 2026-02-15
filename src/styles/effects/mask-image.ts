import { createStyle } from "../../core/style";

// Mask image utilities
export const mask_none = createStyle("-webkit-mask-image", "none");

// Create mask image with custom value
export const createMaskImage = (value: string) => {
  return createStyle("-webkit-mask-image", value);
};