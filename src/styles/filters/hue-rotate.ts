import { createStyle } from "../../core/style";

// Hue rotate utilities
export const hue_rotate_0 = createStyle("filter", "hue-rotate(0deg)");
export const hue_rotate_15 = createStyle("filter", "hue-rotate(15deg)");
export const hue_rotate_30 = createStyle("filter", "hue-rotate(30deg)");
export const hue_rotate_60 = createStyle("filter", "hue-rotate(60deg)");
export const hue_rotate_90 = createStyle("filter", "hue-rotate(90deg)");
export const hue_rotate_180 = createStyle("filter", "hue-rotate(180deg)");

// Create hue rotate with custom value
export const createHueRotate = (value: string) => {
  return createStyle("filter", `hue-rotate(${value})`);
};