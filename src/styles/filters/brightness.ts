import { createStyle } from "../../core/style";

// Brightness utilities
export const brightness_0 = createStyle("filter", "brightness(0)");
export const brightness_50 = createStyle("filter", "brightness(0.5)");
export const brightness_75 = createStyle("filter", "brightness(0.75)");
export const brightness_90 = createStyle("filter", "brightness(0.9)");
export const brightness_95 = createStyle("filter", "brightness(0.95)");
export const brightness_100 = createStyle("filter", "brightness(1)");
export const brightness_105 = createStyle("filter", "brightness(1.05)");
export const brightness_110 = createStyle("filter", "brightness(1.1)");
export const brightness_125 = createStyle("filter", "brightness(1.25)");
export const brightness_150 = createStyle("filter", "brightness(1.5)");
export const brightness_200 = createStyle("filter", "brightness(2)");

// Create brightness with custom value
export const createBrightness = (value: string) => {
  return createStyle("filter", `brightness(${value})`);
};