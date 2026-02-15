import { createStyle } from "../../core/style";

// Saturate utilities
export const saturate_0 = createStyle("filter", "saturate(0)");
export const saturate_50 = createStyle("filter", "saturate(0.5)");
export const saturate_100 = createStyle("filter", "saturate(1)");
export const saturate_150 = createStyle("filter", "saturate(1.5)");
export const saturate_200 = createStyle("filter", "saturate(2)");

// Create saturate with custom value
export const createSaturate = (value: string) => {
  return createStyle("filter", `saturate(${value})`);
};