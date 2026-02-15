import { createStyle } from "../../core/style";

// Backdrop hue rotate utilities
export const backdrop_hue_rotate_0 = createStyle("backdrop-filter", "hue-rotate(0deg)");
export const backdrop_hue_rotate_15 = createStyle("backdrop-filter", "hue-rotate(15deg)");
export const backdrop_hue_rotate_30 = createStyle("backdrop-filter", "hue-rotate(30deg)");
export const backdrop_hue_rotate_60 = createStyle("backdrop-filter", "hue-rotate(60deg)");
export const backdrop_hue_rotate_90 = createStyle("backdrop-filter", "hue-rotate(90deg)");
export const backdrop_hue_rotate_180 = createStyle("backdrop-filter", "hue-rotate(180deg)");

// Create backdrop hue rotate with custom value
export const createBackdropHueRotate = (value: string) => {
  return createStyle("backdrop-filter", `hue-rotate(${value})`);
};