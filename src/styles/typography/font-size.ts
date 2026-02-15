import { createStyle, createMultiStyle, createMappedStyle } from "../../core/style";
import { fontSizeMap } from "../../../mappings/typography";

// Font size with line-height using createMultiStyle
export const text_xs = createMultiStyle([
  { property: "font-size", value: "0.75rem" },
  { property: "line-height", value: "1rem" },
]);
export const text_sm = createMultiStyle([
  { property: "font-size", value: "0.875rem" },
  { property: "line-height", value: "1.25rem" },
]);
export const text_base = createMultiStyle([
  { property: "font-size", value: "1rem" },
  { property: "line-height", value: "1.5rem" },
]);
export const text_lg = createMultiStyle([
  { property: "font-size", value: "1.125rem" },
  { property: "line-height", value: "1.75rem" },
]);
export const text_xl = createMultiStyle([
  { property: "font-size", value: "1.25rem" },
  { property: "line-height", value: "1.75rem" },
]);
export const text_2xl = createMultiStyle([
  { property: "font-size", value: "1.5rem" },
  { property: "line-height", value: "2rem" },
]);
export const text_3xl = createMultiStyle([
  { property: "font-size", value: "1.875rem" },
  { property: "line-height", value: "2.25rem" },
]);
export const text_4xl = createMultiStyle([
  { property: "font-size", value: "2.25rem" },
  { property: "line-height", value: "2.5rem" },
]);
export const text_5xl = createMultiStyle([
  { property: "font-size", value: "3rem" },
  { property: "line-height", value: "1" },
]);
export const text_6xl = createMultiStyle([
  { property: "font-size", value: "3.75rem" },
  { property: "line-height", value: "1" },
]);
export const text_7xl = createMultiStyle([
  { property: "font-size", value: "4.5rem" },
  { property: "line-height", value: "1" },
]);
export const text_8xl = createMultiStyle([
  { property: "font-size", value: "6rem" },
  { property: "line-height", value: "1" },
]);
export const text_9xl = createMultiStyle([
  { property: "font-size", value: "8rem" },
  { property: "line-height", value: "1" },
]);

// Absolute size keywords
export const text_xx_small = createStyle("font-size", "xx-small");
export const text_x_small = createStyle("font-size", "x-small");
export const text_small = createStyle("font-size", "small");
export const text_medium = createStyle("font-size", "medium");
export const text_large = createStyle("font-size", "large");
export const text_x_large = createStyle("font-size", "x-large");
export const text_xx_large = createStyle("font-size", "xx-large");
export const text_xxx_large = createStyle("font-size", "xxx-large");

// Relative size keywords
export const text_smaller = createStyle("font-size", "smaller");
export const text_larger = createStyle("font-size", "larger");

// Create font size with custom value
export const createFontSize = (value: string) => {
  return createStyle("font-size", value);
};