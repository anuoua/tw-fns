import { createStyle } from "../../core/style";

// Background size utilities
export const bg_auto = createStyle("background-size", "auto");
export const bg_cover = createStyle("background-size", "cover");
export const bg_contain = createStyle("background-size", "contain");

// Create background size with custom value
export const createBackgroundSize = (value: string) => {
  return createStyle("background-size", value);
};