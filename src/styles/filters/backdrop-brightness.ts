import { createStyle } from "../../core/style";

// Backdrop brightness utilities
export const backdrop_brightness_0 = createStyle("backdrop-filter", "brightness(0)");
export const backdrop_brightness_50 = createStyle("backdrop-filter", "brightness(0.5)");
export const backdrop_brightness_75 = createStyle("backdrop-filter", "brightness(0.75)");
export const backdrop_brightness_90 = createStyle("backdrop-filter", "brightness(0.9)");
export const backdrop_brightness_95 = createStyle("backdrop-filter", "brightness(0.95)");
export const backdrop_brightness_100 = createStyle("backdrop-filter", "brightness(1)");
export const backdrop_brightness_105 = createStyle("backdrop-filter", "brightness(1.05)");
export const backdrop_brightness_110 = createStyle("backdrop-filter", "brightness(1.1)");
export const backdrop_brightness_125 = createStyle("backdrop-filter", "brightness(1.25)");
export const backdrop_brightness_150 = createStyle("backdrop-filter", "brightness(1.5)");
export const backdrop_brightness_200 = createStyle("backdrop-filter", "brightness(2)");

// Create backdrop brightness with custom value
export const createBackdropBrightness = (value: string) => {
  return createStyle("backdrop-filter", `brightness(${value})`);
};