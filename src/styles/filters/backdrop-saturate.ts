import { createStyle } from "../../core/style";

// Backdrop saturate utilities
export const backdrop_saturate_0 = createStyle("backdrop-filter", "saturate(0)");
export const backdrop_saturate_50 = createStyle("backdrop-filter", "saturate(0.5)");
export const backdrop_saturate_100 = createStyle("backdrop-filter", "saturate(1)");
export const backdrop_saturate_150 = createStyle("backdrop-filter", "saturate(1.5)");
export const backdrop_saturate_200 = createStyle("backdrop-filter", "saturate(2)");

// Create backdrop saturate with custom value
export const createBackdropSaturate = (value: string) => {
  return createStyle("backdrop-filter", `saturate(${value})`);
};