import { createStyle, createMultiStyle } from "../../core/style";

// Font smoothing utilities
export const antialiased = createMultiStyle([
  { property: "-webkit-font-smoothing", value: "antialiased" },
  { property: "-moz-osx-font-smoothing", value: "grayscale" },
]);
export const subpixel_antialiased = createMultiStyle([
  { property: "-webkit-font-smoothing", value: "auto" },
  { property: "-moz-osx-font-smoothing", value: "auto" },
]);