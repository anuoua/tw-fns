import { createStyle, createMultiStyle } from "../../core/style";

// Line clamp utilities
export const line_clamp_1 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "1" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);
export const line_clamp_2 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "2" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);
export const line_clamp_3 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "3" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);
export const line_clamp_4 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "4" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);
export const line_clamp_5 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "5" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);
export const line_clamp_6 = createMultiStyle([
  { property: "display", value: "-webkit-box" },
  { property: "-webkit-line-clamp", value: "6" },
  { property: "-webkit-box-orient", value: "vertical" },
  { property: "overflow", value: "hidden" },
]);

// Create line clamp with custom value
export const createLineClamp = (value: string) => {
  return createMultiStyle([
    { property: "display", value: "-webkit-box" },
    { property: "-webkit-line-clamp", value: value },
    { property: "-webkit-box-orient", value: "vertical" },
    { property: "overflow", value: "hidden" },
  ]);
};