import { createStyle } from "../../core/style";

// Contrast utilities
export const contrast_0 = createStyle("filter", "contrast(0)");
export const contrast_50 = createStyle("filter", "contrast(0.5)");
export const contrast_75 = createStyle("filter", "contrast(0.75)");
export const contrast_100 = createStyle("filter", "contrast(1)");
export const contrast_125 = createStyle("filter", "contrast(1.25)");
export const contrast_150 = createStyle("filter", "contrast(1.5)");
export const contrast_200 = createStyle("filter", "contrast(2)");

// Create contrast with custom value
export const createContrast = (value: string) => {
  return createStyle("filter", `contrast(${value})`);
};