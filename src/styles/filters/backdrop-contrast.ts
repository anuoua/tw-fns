import { createStyle } from "../../core/style";

// Backdrop contrast utilities
export const backdrop_contrast_0 = createStyle("backdrop-filter", "contrast(0)");
export const backdrop_contrast_50 = createStyle("backdrop-filter", "contrast(0.5)");
export const backdrop_contrast_75 = createStyle("backdrop-filter", "contrast(0.75)");
export const backdrop_contrast_100 = createStyle("backdrop-filter", "contrast(1)");
export const backdrop_contrast_125 = createStyle("backdrop-filter", "contrast(1.25)");
export const backdrop_contrast_150 = createStyle("backdrop-filter", "contrast(1.5)");
export const backdrop_contrast_200 = createStyle("backdrop-filter", "contrast(2)");

// Create backdrop contrast with custom value
export const createBackdropContrast = (value: string) => {
  return createStyle("backdrop-filter", `contrast(${value})`);
};