import { createStyle } from "../../core/style";

// Sepia utilities
export const sepia_0 = createStyle("filter", "sepia(0)");
export const sepia = createStyle("filter", "sepia(1)");
export const sepia_100 = createStyle("filter", "sepia(1)");

// Create sepia with custom value
export const createSepia = (value: string) => {
  return createStyle("filter", `sepia(${value})`);
};