import { createStyle } from "../../core/style";

// Invert utilities
export const invert_0 = createStyle("filter", "invert(0)");
export const invert = createStyle("filter", "invert(1)");
export const invert_100 = createStyle("filter", "invert(1)");

// Create invert with custom value
export const createInvert = (value: string) => {
  return createStyle("filter", `invert(${value})`);
};