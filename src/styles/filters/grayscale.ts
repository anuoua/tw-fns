import { createStyle } from "../../core/style";

// Grayscale utilities
export const grayscale_0 = createStyle("filter", "grayscale(0)");
export const grayscale = createStyle("filter", "grayscale(1)");
export const grayscale_100 = createStyle("filter", "grayscale(1)");

// Create grayscale with custom value
export const createGrayscale = (value: string) => {
  return createStyle("filter", `grayscale(${value})`);
};