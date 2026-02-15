import { createStyle } from "../../core/style";

// Backdrop grayscale utilities
export const backdrop_grayscale_0 = createStyle("backdrop-filter", "grayscale(0)");
export const backdrop_grayscale = createStyle("backdrop-filter", "grayscale(1)");
export const backdrop_grayscale_100 = createStyle("backdrop-filter", "grayscale(1)");

// Create backdrop grayscale with custom value
export const createBackdropGrayscale = (value: string) => {
  return createStyle("backdrop-filter", `grayscale(${value})`);
};