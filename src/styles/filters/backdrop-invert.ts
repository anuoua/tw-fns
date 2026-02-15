import { createStyle } from "../../core/style";

// Backdrop invert utilities
export const backdrop_invert_0 = createStyle("backdrop-filter", "invert(0)");
export const backdrop_invert = createStyle("backdrop-filter", "invert(1)");
export const backdrop_invert_100 = createStyle("backdrop-filter", "invert(1)");

// Create backdrop invert with custom value
export const createBackdropInvert = (value: string) => {
  return createStyle("backdrop-filter", `invert(${value})`);
};