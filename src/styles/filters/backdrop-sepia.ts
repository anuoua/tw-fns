import { createStyle } from "../../core/style";

// Backdrop sepia utilities
export const backdrop_sepia_0 = createStyle("backdrop-filter", "sepia(0)");
export const backdrop_sepia = createStyle("backdrop-filter", "sepia(1)");
export const backdrop_sepia_100 = createStyle("backdrop-filter", "sepia(1)");

// Create backdrop sepia with custom value
export const createBackdropSepia = (value: string) => {
  return createStyle("backdrop-filter", `sepia(${value})`);
};